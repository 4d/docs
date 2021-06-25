---
id: shared
title: Objetos y colecciones compartidos
---

**Los objetos compartidos** y **las colecciones compartidas** son [objetos](Concepts/dt_object.md) y [colecciones](Concepts/dt_collection.md) específicas cuyo contenido se comparte entre procesos. A diferencia de las [variables interproceso](Concepts/variables.md#interprocess-variables), los objetos compartidos y las colecciones compartidas tienen la ventaja de ser compatibles con los **procesos 4D apropiativos**: pueden pasarse por referencia como parámetros a comandos como `New process` o `CALL WORKER`.

Los objetos compartidos y las colecciones compartidas pueden almacenarse en variables declaradas con los comandos estándar `C_OBJECT` y `C_COLLECTION`, pero deben instanciarse utilizando comandos específicos:

- para crear un objeto compartido, utilice el comando `New shared object`,
- para crear una colección compartida, utilice el comando `New shared collection`.

**Note:** Shared objects and collections can be set as properties of standard (not shared) objects or collections.

In order to modify a shared object/collection, the **Use...End use** structure must be called. Reading a shared object/collection value does not require **Use...End use**.

A unique, global catalog returned by the `Storage` command is always available throughout the application and its components, and can be used to store all shared objects and collections.

## Utilización de objetos o colecciones compartidos

Once instantiated with the `New shared object` or `New shared collection` commands, shared object/collection properties and elements can be modified or read from any process of the application.

### Modificación

Modifications can be applied to shared objects and shared collections:

- adding or removing object properties,
- adding or editing values (provided they are supported in shared objects), including other shared objects or collections (which creates a shared group, see below).

However, all modification instructions in a shared object or collection must be surrounded by the `Use...End use` keywords, otherwise an error is generated.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

A shared object/collection can only be modified by one process at a time. `Use` locks the shared object/collection from other threads, while `End use` unlocks the shared object/collection (if the locking counter is at 0, see below). . Trying to modify a shared object/collection without at least one `Use...End use` generates an error. When a process calls `Use...End use` on a shared object/collection that is already in use by another process, it is simply put on hold until the `End use` unlocks it (no error is generated). Consequently, instructions within `Use...End use` structures should execute quickly and unlock the elements as soon as possible. Thus, it is strongly advised to avoid modifying a shared object or collection directly from the interface, e.g. through a dialog box.

Assigning shared objects/collections to properties or elements of other shared objects/collections is allowed and creates **shared groups**. A shared group is automatically created when a shared object/collection is set as property value or element of another shared object/collection. Shared groups allow nesting shared objects and collections but enforce additional rules:

- Calling `Use` on a shared object/collection belonging to a group locks properties/elements of all shared objects/collections of the group and increments its locking counter. Calling `End use` decrements the locking counter of the group and when the counter is at 0, all the linked shared objects/collections are unlocked.
- A shared object/collection can only belong to one shared group. An error is returned if you try to set an already grouped shared object/collection to a different group.
- Grouped shared objects/collections cannot be ungrouped. Once included in a shared group, a shared object/collection is linked permanently to that group during the whole session. Even if all references of an object/collection are removed from the parent object/collection, they will remain linked.

Please refer to example 2 for an illustration of shared group rules.

**Note:** Shared groups are managed through an internal property named *locking identifier*. For detailed information on this value, please refer to the 4D Developer's guide.

### Lectura

Reading properties or elements of a shared object/collection is allowed without having to call the `Use...End use` structure, even if the shared object/collection is in use by another process.

However, it is necessary to read a shared object/collection within `Use...End use` when several values are linked together and must be read at once, for consistency reasons.

### Duplication

Calling `OB Copy` with a shared object (or with an object containing shared object(s) as properties) is possible, but will return a standard (not shared) object including its contained objects (if any).

### Storage

**Storage** is a unique shared object, automatically available on each application and machine. This shared object is returned by the `Storage` command. You can use this object to reference all shared objects/collections defined during the session that you want to be available from any preemptive or standard processes.

Note that, unlike standard shared objects, the `storage` object does not create a shared group when shared objects/collections are added as its properties. This exception allows the **Storage** object to be used without locking all connected shared objects or collections.

For more information, refer to the `Storage` command description.

## Use...End use

The formal syntax of the `Use...End use` structure is:

```4d
 Use(Shared_object_or_Shared_collection)
    statement(s)
 End use
```

The `Use...End use` structure defines a sequence of statements that will execute tasks on the *Shared_object_or_Shared_collection* parameter under the protection of an internal semaphore. *Shared_object_or_Shared_collection* can be any valid shared object or shared collection.

Shared objects and shared collections are designed to allow communication between processes, in particular, **preemptive 4D processes**. They can be passed by reference as parameters from a process to another one. For detailed information on shared objects or shared collections, refer to the **Shared objects and shared collections** page. Surrounding modifications on shared objects or shared collections by the `Use...End use` keywords is mandatory to prevent concurrent access between processes.

- Once the **Use** line is successfully executed, all _Shared_object_or_Shared_collection_ properties/elements are locked for all other process in write access until the corresponding `End use` line is executed.
- The _statement(s)_ sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access.
- If another shared object or collection is added as a property of the _Shared_object_or_Shared_collection_ parameter, they become connected within the same shared group (see **Using shared objects or collections**).
- If another process tries to access one of the _Shared_object_or_Shared_collection_ properties or connected properties while a **Use...End use** sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated.
- La línea **End use** desbloquea las propiedades _Shared_object_or_Shared_collection_ y todos los objetos del mismo grupo.
- En el código 4D se pueden anidar varias estructuras **Use...End use**. En el caso de un grupo, cada **Use** incrementa el contador de bloqueo del grupo y cada **End use** lo disminuye; todas las propiedades/elementos se liberarán sólo cuando la última llamada **End use** ponga el contador de bloqueo a 0.

**Nota:** si un método de una colección modifica una colección compartida, se llama automáticamente un **Use** interno para esta colección compartida mientras se ejecuta la función.


## Ejemplo 1

Se desea lanzar varios procesos que realicen una tarea de inventario en diferentes productos y que actualicen el mismo objeto compartido. El proceso principal instancia un objeto compartido vacío y luego, lanza los otros procesos, pasando el objeto compartido y los productos a contar como parámetros:

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

En el método "HowMany", el inventario se realiza y el objeto compartido $inventory se actualiza lo antes posible:

```4d
 C_TEXT($1)
 C_TEXT($what)
 C_OBJECT($2)
 C_OBJECT($inventory)
 $what:=$1 //para una mejor legibilidad
 $inventory:=$2

 $count:=CountMethod($what) //método para contar productos
 Use($inventory) //utilizar el objeto compartido
    $inventory[$what]:=$count  //guardar los resultados de este artículo
 End use
```

## Ejemplo 2

Los siguientes ejemplos ilustran las reglas específicas para el manejo de los grupos compartidos:

```4d
 $ob1:=New shared object
 $ob2:=New shared object
 Use($ob1)
    $ob1.a:=$ob2  //se crea el grupo 1
 End use

 $ob3:=New shared object
 $ob4:=New shared object
 Use($ob3)
    $ob3.a:=$ob4  //se crea el grupo 2
 End use

 Use($ob1) //utilizar un objeto del grupo 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 ya pertenece a otro grupo
  //la asignación no está permitida
 End use

 Use($ob3)
    $ob3.a:=Null //eliminar cualquier referencia a $ob4 del grupo 2
 End use

 Use($ob1) //utilizar un objeto del grupo 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 aún pertenece al grupo 2
  //la asignación no está permitida
 End use
```
