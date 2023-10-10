---
id: shared
title: Objetos y colecciones compartidos
---

**Los objetos compartidos** y **las colecciones compartidas** son [objetos](Concepts/dt_object.md) y [colecciones](Concepts/dt_collection.md) específicas cuyo contenido se comparte entre procesos. A diferencia de las [variables interproceso](Concepts/variables.md#interprocess-variables), los objetos compartidos y las colecciones compartidas tienen la ventaja de ser compatibles con los **procesos 4D apropiativos**: pueden pasarse por referencia como parámetros a comandos como `New process` o `CALL WORKER`.

Los objetos compartidos y las colecciones compartidas pueden almacenarse en variables de tipo estándar `Object` y `Collection`, pero deben instanciarse utilizando comandos específicos:

- para crear un objeto compartido, utilice el comando [`New shared object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html),
- para crear una colección compartida, utilice el comando [`New shared collection`](../API/CollectionClass.md#new-shared-collection).

:::note

Los objetos y colecciones compartidos pueden definirse como propiedades de objetos o colecciones estándar (no compartidos).

:::

Para modificar un objeto/colección compartido, se debe llamar a la estructura **Use...End use**. La lectura de un valor de objeto/colección compartido no requiere **Use...End use**.

Un catálogo único y global devuelto por el comando `Storage` está siempre disponible en toda la aplicación y sus componentes, y puede utilizarse para almacenar todos los objetos y colecciones compartidos.

## Utilización de objetos o colecciones compartidos

Una vez instanciado con los comandos `Nuevo objeto compartido` o `Nueva colección compartida`, las propiedades y elementos del objeto compartido/colección pueden ser modificados o leídos desde cualquier proceso de la aplicación, bajo ciertas condiciones.

### Modificación

Las siguientes modificaciones pueden efectuarse en objetos y colecciones compartidos:

- añadir o eliminar propiedades de los objetos,
- añadir o editar valores (siempre que se soporten en objetos compartidos), incluyendo otros objetos compartidos o colecciones (lo que crea un grupo compartido, ver abajo).

Todas las instrucciones de modificación de un objeto compartido o colección deben estar protegidas dentro de un bloque [`Use...End use`](#use-end-use), de lo contrario se genera un error.

```4d
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
```

Por comodidad, todas las [funciones colección](../API/CollectionClass.md) que modifican el objeto compartido o la colección insertan un bloque interno `Use...End use` para que no tenga que codificarlo usted mismo. Por ejemplo:

```4d
$col:=Nueva colección compartida()
$col.push("alpha") //.push() desencadena internamente el uso de Use/End, por lo que no es necesario que lo hagan ustedes mismos
```

Si necesita ejecutar varias modificaciones en la misma colección, puede proteger todas las modificaciones con un único `Use...End use` para que las modificaciones se realicen de forma atómica.

```4d
$col:=Storage.mySharedCollection
Use($col)
    $col[0]:="omega" //modificar un elemento requiere realizarse dentro de Use/End use
    $col.push("alpha") //.push() desencadena internamente Use/End use, pero queremos realizar ambas modificaciones atómicamente
End Use
```


Un objeto/una colección compartido(a) sólo puede modificarse por un proceso a la vez. Un objeto/una colección compartido(a) sólo puede modificarse por un proceso a la vez. . Intentar modificar un objeto/colección compartido sin al menos un `Use...End use` genera un error. Cuando un proceso llama a `Use...End use` en un objeto/colección compartido que ya está en uso por otro proceso, simplemente se pone en espera hasta que el `End use` lo desbloquee (no se genera ningún error). En consecuencia, las instrucciones dentro de las estructuras `Use...End use` deben ejecutarse rápidamente y desbloquear los elementos lo antes posible. Por lo tanto, se recomienda enfáticamente evitar modificar un objeto o colección compartido directamente desde la interfaz, por ejemplo, a través de una caja de diálogo.

La asignación de objetos/colecciones compartidos a propiedades o elementos de otros objetos/colecciones compartidos está permitida y crea **grupos compartidos**. Un grupo compartido se crea automáticamente cuando un objeto/colección compartido se define como valor de propiedad o elemento de otro objeto/colección compartido. Los grupos compartidos permiten anidar objetos y colecciones compartidos, pero imponen reglas adicionales:

- Al llamar a `Use` en un objeto/colección compartido que pertenece a un grupo se bloquean las propiedades/elementos de todos los objetos/colecciones del grupo y se incrementa su conteo de bloqueo. La llamada a `End use` disminuye el contador de bloqueo del grupo y cuando el contador está a 0, todos los objetos/colecciones compartidos vinculados se desbloquean.
- Un objeto/colección compartido sólo puede pertenecer a un grupo compartido. Se devuelve un error si se intenta asignar un objeto/colección compartido ya agrupado a un grupo diferente.
- Los objetos/colecciones compartidos agrupados no se pueden desagrupar. Una vez incluido en un grupo compartido, un objeto/colección compartido queda vinculado permanentemente a ese grupo durante toda la sesión. Incluso si todas las referencias de un objeto/colección se eliminan del objeto/colección padre, seguirán vinculadas.

Consulte el ejemplo 2 para ver una ilustración de las reglas de los grupos compartidos.

**Nota:** Los grupos compartidos se gestionan a través de una propiedad interna llamada *locking identifier*. Para obtener información detallada sobre este valor, consulte la Referencia del Lenguaje 4D.

### Lectura

Se permite la lectura de propiedades o elementos de un objeto/colección compartida sin tener que llamar a la estructura `Use...End use`, incluso si el objeto/colección compartida está en uso por otro proceso.

Sin embargo, cuando varios valores son interdependientes y deben ser leídos simultáneamente, es necesario enmarcar el acceso de lectura con una estructura `Use...End use` por coherencia.

### Duplication

Llamar a `OB Copy` con un objeto compartido (o con un objeto cuyas propiedades son objetos compartidos) es posible, pero en este caso se devuelve un objeto estándar (no compartido).

### Storage

**Storage** es un objeto compartido único, disponible automáticamente en cada aplicación y máquina. Este objeto compartido es devuelto por el comando [`Storage`](https://doc.4d.com/4dv19R/help/command/en/page1525.html). Puede utilizar este objeto para hacer referencia a todos los objetos/colecciones compartidos definidos durante la sesión que desee que estén disponibles desde cualquier proceso preventivo o estándar.

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

Los objetos compartidos y las colecciones compartidas están diseñados para permitir la comunicación entre procesos, en particular, **procesos 4D preferentes**. Se pueden pasar por referencia como parámetros de un proceso a otro. Es obligatorio rodear las modificaciones en los objetos o colecciones compartidas con las palabras clave `Use...End use` para evitar el acceso concurrente entre procesos.

- Una vez que se ejecuta con éxito la línea **Use**, todas las propiedades/elementos de _Shared_object_or_Shared_collection_ se bloquean para el resto de procesos en acceso de escritura hasta que se ejecute la línea `End use` correspondiente.
- La secuencia _de instrucciones_ puede ejecutar cualquier modificación en las propiedades/elementos de Shared_object_o_Shared_collection sin riesgo de acceso concurrente.
- Si se añade otro objeto o colección compartida como propiedad del parámetro _Shared_object_or_Shared_collection_, se conectan dentro del mismo grupo compartido.
- Si otro proceso intenta acceder a una de las propiedades _Objeto_compartido_o_Colección_compartida_ o una propiedad conectad mientras se está ejecutando una secuencia **Use... End use**, se pone automáticamente en espera y espera hasta que la secuencia actual finalice.
- La línea **End use** desbloquea las propiedades _Shared_object_or_Shared_collection_ y todos los objetos del mismo grupo.
- En el código 4D se pueden anidar varias estructuras **Use...End use**. Para modificar un objeto/colección compartido, se debe llamar a la estructura **Use...End use**.

:::note

Tenga en cuenta que las [funciones colección](../API/CollectionClass.md) que modifican colecciones compartidas activan automáticamente un **Use** interno para esta colección compartida mientras se ejecuta la función.

:::

## Ejemplo 1

Se desea lanzar varios procesos que realicen una tarea de inventario en diferentes productos y que actualicen el mismo objeto compartido. El proceso principal instancia un objeto compartido vacío y luego, lanza los otros procesos, pasando el objeto compartido y los productos a contar como parámetros:

```4d
 ARRAY TEXT($_items;0)
 ... //llenar el array con los elementos a contar
 $nbItems:=Size of array($_items)
 var $inventory : Object
 $inventory:=New shared object
 Use($inventory)
    $inventory.nbItems:=$nbItems
 End use

  //Crear procesos
 For($i;1;$nbItems)
    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)
  //$inventory object sent by reference
 End for
```

En el método "HowMany", el inventario se realiza y el objeto compartido $inventory se actualiza lo antes posible:

```4d
    //HowMany
 #DECLARE ($what : Text ; $inventory : Object)

 $count:=CountMethod($what) //método para contar productos
 Use($inventory) //utilizar el objeto compartido
    $inventory[$what]:=$count  //guardar los resultados de este elemento
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
