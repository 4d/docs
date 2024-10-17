---
id: shared
title: Shared objects and collections
---

**Shared objects** and **shared collections** are specific [objects](Concepts/dt_object.md) and [collections](Concepts/dt_collection.md) whose contents are shared between processes. In contrast to [interprocess variables](Concepts/variables.md#interprocess-variables), shared objects and shared collections have the advantage of being compatible with **preemptive 4D processes**: they can be passed by reference as parameters to commands such as [`New process`](https://doc.4d.com/4dv20/help/command/en/page317.html) or [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html).

Shared objects and shared collections are stored in standard [`Object`](dt_object.md) and [`Collection`](dt_collection.md) type variables, but must be instantiated using specific commands:

- to create a shared object, use the [`New shared object`](https://doc.4d.com/4dv20/help/command/en/page1471.html) command or call the [`new()`](../API/ClassClass.md#new) function of a [shared class](classes.md#shared-classes),
- to create a shared collection, use the [`New shared collection`](../commands/new-shared-collection.md) command.


Shared objects and collections can only contain scalar values or other shared objects and collections. However, shared objects and collections can be set as properties of standard (not shared) objects or collections.


In order to modify a shared object/collection, the **Use...End use** structure must be called. Reading a shared object/collection value does not require **Use...End use**.

A unique, global catalog returned by the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) command is always available throughout the application and its components, and can be used to store all shared objects and collections.

## Using shared objects or collections

Once instantiated with the `New shared object` or `New shared collection` commands, shared object/collection properties and elements can be modified or read from any process of the application, under certain conditions.

### Modification

Modifications can be applied to shared objects and shared collections:

- adding or removing object properties,
- adding or editing values (provided they are supported in shared objects), including other shared objects or collections (which creates a shared group, see below).

:::note

Keep in mind that objects or collections set as the content of a shared object or collection must themselves be shared.

:::

All modification instructions in a shared object or collection require to be protected inside a [`Use...End use`](#use-end-use) block, otherwise an error is generated.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

For conveniency, all [collection functions](../API/CollectionClass.md) that modify the shared object or collection insert an internal `Use...End use` block so you do not have to code it yourself. For example:

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


A shared object/collection can only be modified by one process at a time. `Use` locks the shared object/collection from other threads, while `End use` unlocks the shared object/collection (if the locking counter is at 0, see below). . Trying to modify a shared object/collection without at least one `Use...End use` generates an error. When a process calls `Use...End use` on a shared object/collection that is already in use by another process, it is simply put on hold until the `End use` unlocks it (no error is generated). Consequently, instructions within `Use...End use` structures should execute quickly and unlock the elements as soon as possible. Thus, it is strongly advised to avoid modifying a shared object or collection directly from the interface, e.g. through a dialog box.

Assigning shared objects/collections to properties or elements of other shared objects/collections is allowed and creates **shared groups**. A shared group is automatically created when a shared object/collection is set as property value or element of another shared object/collection. Shared groups allow nesting shared objects and collections but enforce additional rules:

- Calling `Use` on a shared object/collection belonging to a group locks properties/elements of all shared objects/collections of the group and increments its locking counter. Calling `End use` decrements the locking counter of the group and when the counter is at 0, all the linked shared objects/collections are unlocked.
- A shared object/collection can only belong to one shared group. An error is returned if you try to set an already grouped shared object/collection to a different group.
- Grouped shared objects/collections cannot be ungrouped. Once included in a shared group, a shared object/collection is linked permanently to that group during the whole session. Even if all references of an object/collection are removed from the parent object/collection, they will remain linked.

Please refer to example 2 for an illustration of shared group rules.


### Read

Reading properties or elements of a shared object/collection is allowed without having to call the `Use...End use` structure, even if the shared object/collection is in use by another process.

However, it is necessary to read a shared object/collection within `Use...End use` when several values are linked together and must be read at once, for consistency reasons.

### Duplication

Calling `OB Copy` with a shared object (or with an object containing shared object(s) as properties) is possible, but will return a standard (not shared) object including its contained objects (if any).

### Storage

**Storage** is a unique shared object, automatically available on each application and machine. This shared object is returned by the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) command. You can use this object to reference all shared objects/collections defined during the session that you want to be available from any preemptive or standard processes.

Note that, unlike standard shared objects, the `storage` object does not create a shared group when shared objects/collections are added as its properties. This exception allows the **Storage** object to be used without locking all connected shared objects or collections.

For more information, refer to the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) command description.

## Use...End use

The formal syntax of the `Use...End use` structure is:

```4d
 Use(Shared_object_or_Shared_collection)
    statement(s)
 End use
```

The `Use...End use` structure defines a sequence of statements that will execute tasks on the *Shared_object_or_Shared_collection* parameter under the protection of an internal semaphore. *Shared_object_or_Shared_collection* can be any valid shared object or shared collection.

Shared objects and shared collections are designed to allow communication between processes, in particular, **preemptive 4D processes**. They can be passed by reference as parameters from a process to another one. Surrounding modifications on shared objects or shared collections by the `Use...End use` keywords is mandatory to prevent concurrent access between processes.

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

## Example 1

You want to launch several processes that perform an inventory task on different products and update the same shared object. The main process instantiates an empty shared object and then, launches the other processes, passing the shared object and the products to count as parameters:

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

In the "HowMany" method, inventory is done and the $inventory shared object is updated as soon as possible:

```4d
	//HowMany
 #DECLARE ($what : Text ; $inventory : Object)

 $count:=CountMethod($what) //method to count products
 Use($inventory) //use shared object
    $inventory[$what]:=$count  //save the results for this item
 End use
```

## Example 2

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
