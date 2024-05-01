---
id: shared
title: Objets et collections partagés
---

**Shared objects** and **shared collections** are specific [objects](Concepts/dt_object.md) and [collections](Concepts/dt_collection.md) whose contents are shared between processes. In contrast to [interprocess variables](Concepts/variables.md#interprocess-variables), shared objects and shared collections have the advantage of being compatible with **preemptive 4D processes**: they can be passed by reference as parameters to commands such as [`New process`](https://doc.4d.com/4dv20/help/command/en/page317.html) or [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html).

Shared objects and shared collections are stored in standard [`Object`](dt_object.md) and [`Collection`](dt_collection.md) type variables, but must be instantiated using specific commands:

- to create a shared object, use the [`New shared object`](https://doc.4d.com/4dv20/help/command/en/page1471.html) command or call the [`new()`](../API/ClassClass.md#new) function of a [shared class](classes.md#shared-classes),
- to create a shared collection, use the [`New shared collection`](../API/CollectionClass.md#new-shared-collection) command.

:::note

Les objets et collections partagés peuvent être définis comme des propriétés d'objets ou de collections standard (non partagés).

:::

In order to modify a shared object/collection, the **Use...End use** structure must be called. Reading a shared object/collection value does not require **Use...End use**.

A unique, global catalog returned by the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) command is always available throughout the application and its components, and can be used to store all shared objects and collections.

## Utilisation des objets et collections partagés

Once instantiated with the `New shared object` or `New shared collection` commands, shared object/collection properties and elements can be modified or read from any process of the application, under certain conditions.

### Modification

Les modifications suivantes peuvent être effectuées sur les objets partagés et les collections partagées :

- ajout ou suppression de propriétés d'objets,
- ajout ou modification de valeurs (prises en charge par les objets/collections partagé(e) s), y compris d'autres objets et collections partagé(s) (ce qui crée un groupe partagé, cf. ci-dessous).

All modification instructions in a shared object or collection require to be protected inside a [`Use...End use`](#use-end-use) block, otherwise an error is generated.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
End Use
```

For conveniency, all [collection functions](../API/CollectionClass.md) that modify the shared object or collection insert an internal `Use...End use` block so you do not have to code it yourself. Par exemple :

```4d
$col:=New shared collection()
$col.push("alpha") //.push() internally triggers Use/End use, so no need to do it yourselves
```

If you need to execute several modifications on the same collection, you can protect all modifications with a single `Use...End use` so that modifications are performed atomically.

```4d
$col:=Storage.mySharedCollection
Use($col)
	$col[0]:="omega" //modifying an element requires to be performed inside Use/End use
	$col.push("alpha") //.push() internally triggers Use/End use, but we want to do both modifications atomically
End Use
```

Un objet/une collection partagé(e) ne peut être modifié(e) que par un seul process à la fois. `Use` locks the shared object/collection from other threads, while `End use` unlocks the shared object/collection (if the locking counter is at 0, see below). . Trying to modify a shared object/collection without at least one `Use...End use` generates an error. When a process calls `Use...End use` on a shared object/collection that is already in use by another process, it is simply put on hold until the `End use` unlocks it (no error is generated). Consequently, instructions within `Use...End use` structures should execute quickly and unlock the elements as soon as possible. Il est donc fortement déconseillé de modifier un objet ou une collection partagé(e) directement depuis l'interface, par exemple depuis une boîte de dialogue.

Assigning shared objects/collections to properties or elements of other shared objects/collections is allowed and creates **shared groups**. Un groupe partagé est automatiquement créé lorsqu'un objet ou une collection partagé(e) est assigné(e) en tant que valeur de propriété ou élément à un autre objet ou collection partagé(e). Les groupes partagés permettent d'imbriquer des objets et collections partagé(e)s mais nécessitent d'observer des règles supplémentaires :

- Calling `Use` on a shared object/collection belonging to a group locks properties/elements of all shared objects/collections of the group and increments its locking counter. Calling `End use` decrements the locking counter of the group and when the counter is at 0, all the linked shared objects/collections are unlocked.
- Un objet ou une collection partagé(e) peut appartenir à un seul groupe partagé. Une erreur est générée si vous tentez d'assigner un objet ou une collection appartenant déjà à un groupe à un groupe différent.
- Les objets/collections groupé(e)s ne peuvent plus être dégroupé(e)s. Une fois inclus dans un groupe partagé, un objet ou une collection partagé(e) est lié(e) définitivement au groupe pendant toute la durée de la session. Même si toutes les références de l'objet/la collection sont supprimé(e)s des objets/collections parent(e)s, ils resteront liés.

Reportez-vous à l'exemple 2 pour l'illustration des règles des groupes partagés.

**Note:** Shared groups are managed through an internal property named _locking identifier_. For detailed information on this value, please refer to the 4D Language Reference.

### Lecture

Reading properties or elements of a shared object/collection is allowed without having to call the `Use...End use` structure, even if the shared object/collection is in use by another process.

However, it is necessary to read a shared object/collection within `Use...End use` when several values are linked together and must be read at once, for consistency reasons.

### Duplication

Calling `OB Copy` with a shared object (or with an object containing shared object(s) as properties) is possible, but will return a standard (not shared) object including its contained objects (if any).

### Storage

**Storage** is a unique shared object, automatically available on each application and machine. This shared object is returned by the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) command. Il est destiné à référencer les objets ou collections partagé(e)s défini(e)s durant la session que vous souhaitez rendre accessibles à tous les process, préemptifs ou standard.

Note that, unlike standard shared objects, the `storage` object does not create a shared group when shared objects/collections are added as its properties. This exception allows the **Storage** object to be used without locking all connected shared objects or collections.

For more information, refer to the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) command description.

## Use...End use

The formal syntax of the `Use...End use` structure is:

```4d
 Use(Shared_object_or_Shared_collection)
    instruction(s)
 End use
```

The `Use...End use` structure defines a sequence of statements that will execute tasks on the _Shared_object_or_Shared_collection_ parameter under the protection of an internal semaphore. _Shared_object_or_Shared_collection_ can be any valid shared object or shared collection.

Shared objects and shared collections are designed to allow communication between processes, in particular, **preemptive 4D processes**. Ils peuvent être passés par référence en paramètre d'un process à un autre. Surrounding modifications on shared objects or shared collections by the `Use...End use` keywords is mandatory to prevent concurrent access between processes.

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

## Exemple 1

Vous souhaitez lancer plusieurs process qui vont effectuer des tâches d'inventaire parmi différents produits et mettre à jour le même objet partagé. Le process principal instancie un objet partagé vide et ensuite lance les autres process, passant en paramètre l'objet partagé et les produits à comptabiliser :

```4d
 ARRAY TEXT($_items;0)
 ... //fill the array with items to count
 $nbItems:=Size of array($_items)
 var $inventory : Object
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

Dans la méthode "HowMany", l'inventaire est effectué et l'objet partagé $inventory est mis à jour dès que possible :

```4d
	//HowMany
 #DECLARE ($what : Text ; $inventory : Object)

 $count:=CountMethod($what) //method to count products
 Use($inventory) //use shared object
    $inventory[$what]:=$count  //save the results for this item
 End use
```

## Exemple 2

Les exemples suivants illustrent les règles spécifiques à observer lorsque vous utilisez des groupes partagés :

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
