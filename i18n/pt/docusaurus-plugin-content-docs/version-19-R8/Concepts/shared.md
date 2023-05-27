---
id: shared
title: Objetos e coleções compartilhados
---

**Shared objects** and **shared collections** are specific [objects](Concepts/dt_object.md) and [collections](Concepts/dt_collection.md) whose contents are shared between processes. In contrast to [interprocess variables](Concepts/variables.md#interprocess-variables), shared objects and shared collections have the advantage of being compatible with **preemptive 4D processes**: they can be passed by reference as parameters to commands such as `New process` or `CALL WORKER`.

Shared objects and shared collections can be stored in variables declared with standard `C_OBJECT` and `C_COLLECTION` commands, but must be instantiated using specific commands:

- to create a shared object, use the `New shared object` command,
- to create a shared collection, use the `New shared collection` command.

:::note

**Note:** Shared objects and collections can be set as properties of standard (not shared) objects or collections.

:::

In order to modify a shared object/collection, the **Use... End use** structure must be called. Reading a shared object/collection value does not require **Use... End use**.

Um catálogo único e global devolvido  pelo comando `Storage` está sempre disponível em todo o banco de dados e seus componentes, e pode ser utilizado para armazenar todos os objetos e coleções compartidos.

## Utilização de objetos ou coleções compartidos

Once instantiated with the `New shared object` or `New shared collection` commands, shared object/collection properties and elements can be modified or read from any process of the application.

### Modificação

Modifications can be applied to shared objects and shared collections:

- adding or removing object properties,
- adding or editing values (provided they are supported in shared objects), including other shared objects or collections (which creates a shared group, see below).

However, all modification instructions in a shared object or collection must be surrounded by the `Use... End use` keywords, otherwise an error is generated.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

For conveniency, all [collection functions](../API/CollectionClass.md) that modify the shared object or collection insert an internal `Use... End use` block so you do not have to code it yourself. Por exemplo:

```4d
$col:=New shared collection()
$col.push("alpha") //.push() desencadeia internamente a utilização Use/End, pelo que não é necessário fazê-lo você mesmo
```

If you need to execute several modifications on the same collection, you can protect all modifications with a single `Use... End use` so that modifications are performed atomically.

```4d
$col:=Storage.mySharedCollection Use($col)
    $col[0]:="omega" //modifying an element requires to be performed inside Use/End use
    $col.push("alpha") //.push() internally triggers Use/End use, but we want to do both modifications atomically End Use
```


A shared object/collection can only be modified by one process at a time. `Use` bloqueia o objeto/coleção compartido para outras threads, enquanto que o último `End use` desbloqueia todos os objetos e coleções. . Trying to modify a shared object/collection without at least one `Use... End use` generates an error. When a process calls `Use... End use` on a shared object/collection that is already in use by another process, it is simply put on hold until the `End use` unlocks it (no error is generated). Consequently, instructions within `Use... End use` structures should execute quickly and unlock the elements as soon as possible. Thus, it is strongly advised to avoid modifying a shared object or collection directly from the interface, e.g. through a dialog box.

Assigning shared objects/collections to properties or elements of other shared objects/collections is allowed and creates **shared groups**. A shared group is automatically created when a shared object/collection is set as property value or element of another shared object/collection. Shared groups allow nesting shared objects and collections but enforce additional rules:

- Note that, unlike standard shared objects, the `storage` object does not create a shared group when shared objects/collections are added as its properties. This exception allows the **Storage** object to be used without locking all connected shared objects or collections.
- A shared object/collection can only belong to one shared group. An error is returned if you try to set an already grouped shared object/collection to a different group.
- Grouped shared objects/collections cannot be ungrouped. Once included in a shared group, a shared object/collection is linked permanently to that group during the whole session. Even if all references of an object/collection are removed from the parent object/collection, they will remain linked.

Please refer to example 2 for an illustration of shared group rules.

**Note:** Shared groups are managed through an internal property named *locking identifier*. For detailed information on this value, please refer to the 4D Developer's guide.

### Leitura

Ao chamar a `Use` em um objeto/colección compartido de um grupo se bloquearão as propriedades/elementos de todos os objetos/coleções compartidos que pertençam ao mesmo grupo.

However, it is necessary to read a shared object/collection within `Use... End use` when several values are linked together and must be read at once, for consistency reasons.

### Duplicação

Calling `OB Copy` with a shared object (or with an object containing shared object(s) as properties) is possible, but will return a standard (not shared) object including its contained objects (if any).

### Storage

**Storage** is a unique shared object, automatically available on each application and machine. You can use this object to reference all shared objects/collections defined during the session that you want to be available from any preemptive or standard processes. This shared object is returned by the `Storage` command.

Note that, unlike standard shared objects, the `storage` object does not create a shared group when shared objects/collections are added as its properties. This exception allows the **Storage** object to be used without locking all connected shared objects or collections.

For more information, refer to the `Storage` command description.

## Use... End use

The formal syntax of the `Use... End use` structure is:

```4d
 Use(Shared_object_or_Shared_collection)
    statement(s)
 End use
```

The `Use... End use` structure defines a sequence of statements that will execute tasks on the *Shared_object_or_Shared_collection* parameter under the protection of an internal semaphore. *Shared_object_or_Shared_collection* can be any valid shared object or shared collection.

Shared objects and shared collections are designed to allow communication between processes, in particular, **preemptive 4D processes**. They can be passed by reference as parameters from a process to another one. Surrounding modifications on shared objects or shared collections by the `Use... End use` keywords is mandatory to prevent concurrent access between processes.

- Once the **Use** line is successfully executed, all _Shared_object_or_Shared_collection_ properties/elements are locked for all other process in write access until the corresponding `End use` line is executed.
- The _statement(s)_ sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access.
- If another shared object or collection is added as a property of the _Shared_object_or_Shared_collection_ parameter, they become connected within the same shared group (see **Using shared objects or collections**).
- If another process tries to access one of the _Shared_object_or_Shared_collection_ properties or connected properties while a **Use... End use** sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated.
- A linha **End use** desbloqueia as propriedades _Shared_object_or_Shared_collection_ e todos os objetos que compartem o mesmo identificador de bloqueio.
- Several **Use... End use** structures can be nested in the 4D code. In the case of a group, each **Use** increments the locking counter of the group and each **End use** decrements it; all properties/elements will be released only when the last **End use** call sets the locking counter to 0.

:::note

**Note:** If a collection method modifies a shared collection, an internal **Use** is automatically called for this shared collection while the function is executed.

:::

## Exemplo 1

You want to launch several processes that perform an inventory task on different products and update the same shared object. The main process instantiates an empty shared object and then, launches the other processes, passing the shared object and the products to count as parameters:

```4d
 Visão Geral
```

In the "HowMany" method, inventory is done and the $inventory shared object is updated as soon as possible:

```4d
    C_TEXT($1)
 C_TEXT($what)
 C_OBJECT($2)
 C_OBJECT($inventory)
 $what:=$1 //for better readability
 $inventory:=$2

 $count:=CountMethod($what) //method to count products
 Use($inventory) //use shared object
    $inventory[$what]:=$count  //save the results for this item
 End use
```

## Exemplo 2

The following examples highlight specific rules when handling shared groups:

```4d
 $ob1:=New shared object
 $ob2:=New shared object
 Use($ob1)
    $ob1.a:=$ob2  //group 1 is created
 End use

 $ob3:=New shared object
 $ob4:=New shared object
 Use($ob3)
    $ob3.a:=$ob4  //group 2 is created
 End use

 Use($ob1) //use an object from group 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 already belongs to another group
  //assignment is not allowed
 End use

 Use($ob3)
    $ob3.a:=Null //remove any reference to $ob4 from group 2
 End use

 Use($ob1) //use an object from group 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 still belongs to group 2
  //assignment is not allowed
 End use
```
