---
id: shared
title: Objetos e coleções compartilhados
---

## Visão Geral
**Os objectos partilhados** e as coleções partilhadas **** são objectos específicos [](Concepts/dt_object.md) e coleções [](Concepts/dt_collection.md) cujos conteúdos são partilhados entre processos. Ao contrário das [variáveis interprocessos](Concepts/variables.md#interprocess-variables), os objetos partilhados e as coleções partilhadas têm a vantagem de serem compatíveis com **processos 4D preemptivos**: podem ser passados por referência como parâmetros de comandos como `New process` ou `CALL WORKER`.

Shared objects and shared collections can be stored in variables declared with standard `C_OBJECT` and `C_COLLECTION` commands, but must be instantiated using specific commands:

- to create a shared object, use the `New shared object` command,
- to create a shared collection, use the `New shared collection` command.

**Note:** Shared objects and collections can be set as properties of standard (not shared) objects or collections.

Para modificar um objeto/coleção partilhado, é necessário chamar a estrutura **Use...End use** . A leitura de um valor de objeto/coleção partilhado não requer **Use...End use**.

A unique, global catalog returned by the `Storage` command is always available throughout the database and its components, and can be used to store all shared objects and collections.

## Utilização de objetos ou coleções compartidos
Once instantiated with the `New shared object` or `New shared collection` commands, shared object/collection properties and elements can be modified or read from any process of the application.

### Modificação
As modificações podem ser aplicadas a objetos partilhados e coleções partilhadas:

- adicionar ou remover propriedades de objectos,
- adicionar ou editar valores (desde que sejam suportados em objetos partilhados), incluindo outros objetos partilhados ou coleções (que criam um grupo partilhado, ver abaixo).

However, all modification instructions in a shared object or collection must be surrounded by the `Use...End use` keywords, otherwise an error is generated.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

Um objeto/coleção partilhado só pode ser modificado por um processo de cada vez. `Use` locks the shared object/collection from other threads, while the last `End use` unlocks all objects and collections. A tentativa de modificar um objeto/coleção partilhado sem pelo menos um `Use...End use` gera um erro. Quando um processo chama `Use...End use` num objeto/coleção partilhado que já está a ser utilizado por outro processo, este é simplesmente colocado em espera até que o `End use` o desbloqueie (não é gerado qualquer erro). Consequentemente, as instruções em `Use... End use` estruturas devem ser executadas rapidamente e desbloquear os elementos o mais rapidamente possível. Assim, recomenda-se vivamente que se evite modificar um objeto partilhado ou uma coleção diretamente a partir da interface, por exemplo, através de uma caixa de diálogo.

A atribuição de objectos/colecções partilhados a propriedades ou elementos de outros objectos/colecções partilhados é permitida e cria **grupos partilhados**. Um grupo partilhado é criado automaticamente quando um objeto/coleção partilhado é definido como valor de propriedade ou elemento de outro objeto/coleção partilhado. Os grupos partilhados permitem o aninhamento de objectos e colecções partilhados, mas impõem regras adicionais:

- Calling `Use` on a shared object/collection of a group will lock properties/elements of all shared objects/collections belonging to the same group.
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
**Storage** is a unique shared object, automatically available on each application and machine. This shared object is returned by the `Storage` command. This shared object is returned by the `Storage` command.

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

Shared objects and shared collections are designed to allow communication between processes, in particular, **preemptive 4D processes**. They can be passed by reference as parameters from a process to another one. For detailed information on shared objects or shared collections, refer to the **Shared objects and shared collections** page. Surrounding modifications on shared objects or shared collections by the `Use... End use` keywords is mandatory to prevent concurrent access between processes.

- Once the **Use** line is successfully executed, all _Shared_object_or_Shared_collection_ properties/elements are locked for all other process in write access until the corresponding `End use` line is executed.
- The _statement(s)_ sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access.
- If another shared object or collection is added as a property of the _Shared_object_or_Shared_collection_ parameter, they become connected within the same shared group (see **Using shared objects or collections**).
- If another process tries to access one of the _Shared_object_or_Shared_collection_ properties or connected properties while a **Use... End use** sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated.
- The **End use** line unlocks the _Shared_object_or_Shared_collection_ properties and all objects sharing the same locking identifier.
- Several **Use... End use** structures can be nested in the 4D code. In that case, all locks are stacked and properties/elements will be released only when the last End use call is executed.

**Note:** If a collection method modifies a shared collection, an internal **Use** is automatically called for this shared collection while the function is executed.


## Exemplo 1

You want to launch several processes that perform an inventory task on different products and update the same shared object. The main process instantiates an empty shared object and then, launches the other processes, passing the shared object and the products to count as parameters:

```4d
 ARRAY TEXT($_items;0)
 ... //fill the array with items to count
 $nbItems:=Size of array($_items)
 C_OBJECT($inventory)
 $inventory:=New shared object
 Use($inventory)
    $inventory.nbItems:=$nbItems
 End use

  //Create processes
 For($i;1;$nbItems)
    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)
  //$inventory object sent by reference
 End for
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
