---
id: shared
title: Objetos e coleções compartilhados
---

**Shared objects** and **shared collections** are specific [objects](Concepts/dt_object.md) and [collections](Concepts/dt_collection.md) whose contents are shared between processes. In contrast to [interprocess variables](Concepts/variables.md#interprocess-variables), shared objects and shared collections have the advantage of being compatible with **preemptive 4D processes**: they can be passed by reference as parameters to commands such as [`New process`](https://doc.4d.com/4dv20/help/command/en/page317.html) or [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html).

Shared objects and shared collections are stored in standard [`Object`](dt_object.md) and [`Collection`](dt_collection.md) type variables, but must be instantiated using specific commands:

- to create a shared object, use the [`New shared object`](https://doc.4d.com/4dv20/help/command/en/page1471.html) command or call the [`new()`](../API/ClassClass.md#new) function of a [shared class](classes.md#shared-classes),
- to create a shared collection, use the [`New shared collection`](../API/CollectionClass.md#new-shared-collection) command.

:::note

Os objectos e coleções partilhados podem ser definidos como propriedades de objetos ou coleções padrão (não partilhados).

:::

In order to modify a shared object/collection, the **Use...End use** structure must be called. Reading a shared object/collection value does not require **Use...End use**.

A unique, global catalog returned by the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) command is always available throughout the application and its components, and can be used to store all shared objects and collections.

## Utilização de objetos ou coleções compartidos

Once instantiated with the `New shared object` or `New shared collection` commands, shared object/collection properties and elements can be modified or read from any process of the application, under certain conditions.

### Modificação

As modificações podem ser aplicadas a objetos partilhados e coleções partilhadas:

- adicionar ou remover propriedades de objectos,
- adicionar ou editar valores (desde que sejam suportados em objetos partilhados), incluindo outros objetos partilhados ou coleções (que criam um grupo partilhado, ver abaixo).

All modification instructions in a shared object or collection require to be protected inside a [`Use...End use`](#use-end-use) block, otherwise an error is generated.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

For conveniency, all [collection functions](../API/CollectionClass.md) that modify the shared object or collection insert an internal `Use...End use` block so you do not have to code it yourself. Por exemplo:

```4d
$col:=New shared collection()
$col.push("alpha") //.push() desencadeia internamente a utilização Use/End, pelo que não é necessário fazê-lo você mesmo
```

If you need to execute several modifications on the same collection, you can protect all modifications with a single `Use...End use` so that modifications are performed atomically.

```4d
$col:=Storage.mySharedCollection
Use($col)
	$col[0]:="omega" //modifying an element requires to be performed inside Use/End use
	$col.push("alpha") //.push() internally triggers Use/End use, but we want to do both modifications atomically
End Use
```

Um objeto/coleção partilhado só pode ser modificado por um processo de cada vez. `Use` locks the shared object/collection from other threads, while `End use` unlocks the shared object/collection (if the locking counter is at 0, see below). . Trying to modify a shared object/collection without at least one `Use...End use` generates an error. When a process calls `Use...End use` on a shared object/collection that is already in use by another process, it is simply put on hold until the `End use` unlocks it (no error is generated). Consequently, instructions within `Use...End use` structures should execute quickly and unlock the elements as soon as possible. Assim, recomenda-se vivamente que se evite modificar um objeto partilhado ou uma coleção diretamente a partir da interface, por exemplo, através de uma caixa de diálogo.

Assigning shared objects/collections to properties or elements of other shared objects/collections is allowed and creates **shared groups**. Um grupo partilhado é criado automaticamente quando um objeto/coleção partilhado é definido como valor de propriedade ou elemento de outro objeto/coleção partilhado. Os grupos partilhados permitem o aninhamento de objectos e colecções partilhados, mas impõem regras adicionais:

- Calling `Use` on a shared object/collection belonging to a group locks properties/elements of all shared objects/collections of the group and increments its locking counter. Calling `End use` decrements the locking counter of the group and when the counter is at 0, all the linked shared objects/collections are unlocked.
- Um objeto/coleção partilhado só pode pertencer a um grupo partilhado. É devolvido um erro se tentar definir um objeto/coleção partilhado já agrupado para um grupo diferente.
- Os objetos/coleções partilhados agrupados não podem ser desagrupados. Uma vez incluído num grupo partilhado, um objeto/coleção partilhado está permanentemente ligado a esse grupo durante toda a sessão. Mesmo que todas as referências de um objeto/coleção sejam removidas do objeto/coleção pai, permanecerão linkadas.

Consulte o exemplo 2 para ver uma ilustração das regras de grupos partilhados.

**Note:** Shared groups are managed through an internal property named _locking identifier_. Para obter informações detalhadas sobre este valor, consulte a Referência da Linguagem 4D.

### Leitura

Reading properties or elements of a shared object/collection is allowed without having to call the `Use...End use` structure, even if the shared object/collection is in use by another process.

However, it is necessary to read a shared object/collection within `Use...End use` when several values are linked together and must be read at once, for consistency reasons.

### Duplicação

Calling `OB Copy` with a shared object (or with an object containing shared object(s) as properties) is possible, but will return a standard (not shared) object including its contained objects (if any).

### Armazenamento

**Storage** is a unique shared object, automatically available on each application and machine. This shared object is returned by the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) command. É possível utilizar este objeto para fazer referência a todos os objetos/coleções partilhados definidos durante a sessão que se pretende que estejam disponíveis a partir de quaisquer processos preemptivos ou padrão.

Note that, unlike standard shared objects, the `storage` object does not create a shared group when shared objects/collections are added as its properties. This exception allows the **Storage** object to be used without locking all connected shared objects or collections.

For more information, refer to the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) command description.

## Use... End use

The formal syntax of the `Use...End use` structure is:

```4d
 Use(Shared_object_or_Shared_collection)
    statement(s)
 End use
```

The `Use...End use` structure defines a sequence of statements that will execute tasks on the _Shared_object_or_Shared_collection_ parameter under the protection of an internal semaphore. _Shared_object_or_Shared_collection_ can be any valid shared object or shared collection.

Shared objects and shared collections are designed to allow communication between processes, in particular, **preemptive 4D processes**. Podem ser passados por referência como parâmetros de um processo para outro. Surrounding modifications on shared objects or shared collections by the `Use...End use` keywords is mandatory to prevent concurrent access between processes.

- Once the **Use** line is successfully executed, all _Shared_object_or_Shared_collection_ properties/elements are locked for all other process in write access until the corresponding `End use` line is executed.
- The _statement(s)_ sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access.
- If another shared object or collection is added as a property of the _Shared_object_or_Shared_collection_ parameter, they become connected within the same shared group.
- If another process tries to access one of the _Shared_object_or_Shared_collection_ properties or connected properties while a **Use...End use** sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated.
- The **End use** line unlocks the _Shared_object_or_Shared_collection_ properties and all objects of the same group.
- Several **Use...End use** structures can be nested in the 4D code. In the case of a group, each **Use** increments the locking counter of the group and each **End use** decrements it; all properties/elements will be released only when the last **End use** call sets the locking counter to 0.

:::note

The following functions automatically trigger an internal **Use/End use**, making an explicit call to the structure unnecessary when the function is executed:

- [collection functions](../API/CollectionClass.md) that modify shared collections
- [shared functions](classes.md#shared-functions) (defined in [shared classes](classes.md#shared-classes)).

:::

## Exemplo 1

Se quiser lançar vários processos que executem uma tarefa de inventário em diferentes produtos e atualizem o mesmo objeto partilhado. O processo principal instancia um objeto partilhado vazio e, em seguida, lança os outros processos, passando o objeto partilhado e os produtos a contar como parâmetros:

```4d
 ARRAY TEXT($_items;0)
 ... //preencher o array com itens para contar
 $nbItems:=Tamanho do array($_items)
 var $inventory : Object
 $inventory:=Novo objeto partilhado
 Use($inventory)
    $inventory.nbItems:=$nbItems
 End use

  //Criar processos
 For($i;1;$nbItems)
    $ps:=New process("HowMany";0; "HowMany_"+$_items{$i};$_items{$i};$inventory)
  //$inventory objeto enviado por referência
 End for
```

No método "HowMany", o inventário é efetuado e o objeto partilhado $inventory é atualizado o mais rapidamente possível:

```4d
	//HowMany
 #DECLARE ($what : Text ; $inventory : Object)

 $count:=CountMethod($what) //method to count products
 Use($inventory) //use shared object
    $inventory[$what]:=$count  //save the results for this item
 End use
```

## Exemplo 2

Os exemplos seguintes destacam regras específicas para o tratamento de grupos partilhados:

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
