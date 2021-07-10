---
id: shared
title: Objetos y colecciones compartidos
---

**Los objetos compartidos** y **las colecciones compartidas** son [objetos](Concepts/dt_object.md) y [colecciones](Concepts/dt_collection.md) específicas cuyo contenido se comparte entre procesos. A diferencia de las [variables interproceso](Concepts/variables.md#interprocess-variables), los objetos compartidos y las colecciones compartidas tienen la ventaja de ser compatibles con los **procesos 4D apropiativos**: pueden pasarse por referencia como parámetros a comandos como `New process` o `CALL WORKER`.

Los objetos compartidos y las colecciones compartidas pueden almacenarse en variables declaradas con los comandos estándar `C_OBJECT` y `C_COLLECTION`, pero deben instanciarse utilizando comandos específicos:

- para crear un objeto compartido, utilice el comando `New shared object`,
- para crear una colección compartida, utilice el comando `New shared collection`.

**Nota:** los objetos y colecciones compartidos pueden definirse como propiedades de objetos o colecciones estándar (no compartidos).

Para modificar un objeto/colección compartido, se debe llamar a la estructura **Use...End use**. La lectura de un valor de objeto/colección compartido no requiere **Use...End use**.

Un catálogo único y global devuelto por el comando `Storage` está siempre disponible en toda la aplicación y sus componentes, y puede utilizarse para almacenar todos los objetos y colecciones compartidos.

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
- Un objeto/colección compartido sólo puede pertenecer a un grupo compartido. Se devuelve un error si se intenta asignar un objeto/colección compartido ya agrupado a un grupo diferente.
- Los objetos/colecciones compartidos agrupados no se pueden desagrupar. Una vez incluido en un grupo compartido, un objeto/colección compartido queda vinculado permanentemente a ese grupo durante toda la sesión. Incluso si todas las referencias de un objeto/colección se eliminan del objeto/colección padre, seguirán vinculadas.

Consulte el ejemplo 2 para ver una ilustración de las reglas de los grupos compartidos.

**Nota:** Los grupos compartidos se gestionan a través de una propiedad interna llamada *locking identifier*. Para obtener información detallada sobre este valor, consulte la guía del desarrollador de 4D.

### Lectura

Se permite la lectura de propiedades o elementos de un objeto/colección compartida sin tener que llamar a la estructura `Use...End use`, incluso si el objeto/colección compartida está en uso por otro proceso.

Sin embargo, cuando varios valores son interdependientes y deben ser leídos simultáneamente, es necesario enmarcar el acceso de lectura con una estructura `Use...End use` por coherencia.

### Duplication

Llamar a `OB Copy` con un objeto compartido (o con un objeto cuyas propiedades son objetos compartidos) es posible, pero en este caso se devuelve un objeto estándar (no compartido).

### Storage

**Storage** es un objeto compartido único, disponible automáticamente en cada aplicación y máquina. Este objeto compartido es devuelto por el comando `Storage`. Puede utilizar este objeto para hacer referencia a todos los objetos/colecciones compartidos definidos durante la sesión que desee que estén disponibles desde cualquier proceso preventivo o estándar.

Tenga en cuenta que, a diferencia de los objetos compartidos estándar, el objeto `Storage` no crea un grupo compartido cuando se añaden objetos/colecciones compartidos como sus propiedades. Esta excepción permite utilizar el objeto **Storage** sin bloquear todos los objetos o colecciones compartidos conectados.

Para más información, consulte la descripción del comando `Storage`.

## Use...End use

La sintaxis de la estructura `Use...End use` es:

```4d
 Use(Shared_object_or_Shared_collection)
    instrucción(es)
 End use
```

La estructura `Use...End use` define una secuencia de instrucciones que ejecutarán tareas sobre el parámetro *Shared_object_or_Shared_collection* bajo la protección de un semáforo interno. *Shared_object_or_Shared_collection* puede ser cualquier objeto o colección compartido válido.

Los objetos compartidos y las colecciones compartidas están diseñados para permitir la comunicación entre procesos, en particular, **procesos 4D preferentes**. Se pueden pasar por referencia como parámetros de un proceso a otro. Para obtener información detallada sobre los objetos compartidos o las colecciones compartidas, consulte la página **Objetos y colecciones compartidos**. Es obligatorio rodear las modificaciones en los objetos o colecciones compartidas con las palabras clave `Use...End use` para evitar el acceso concurrente entre procesos.

- Una vez que se ejecuta con éxito la línea **Use**, todas las propiedades/elementos de _Shared_object_or_Shared_collection_ se bloquean para el resto de procesos en acceso de escritura hasta que se ejecute la línea `End use` correspondiente.
- La secuencia _de instrucciones_ puede ejecutar cualquier modificación en las propiedades/elementos de Shared_object_o_Shared_collection sin riesgo de acceso concurrente.
- Si se añade otro objeto o colección compartida como propiedad del parámetro _Shared_object_or_Shared_collection_, se conectan dentro del mismo grupo compartido (ver **Uso de objetos o colecciones compartidos**).
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
