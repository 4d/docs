---
id: collection
title: Colección
---

Las colecciones son listas ordenadas de valores de tipos similares o diferentes (texto, número, objeto, booleano, colección o null).

Para gestionar las variables de tipo Colección se debe utilizar la notación de objetos (ver [Sintaxis-básica](Conceptos/dt_object.md#sintaxis-básica)).

To access a collection element, you need to pass the element number inside square brackets:

```4d
collectionRef[expression]
```

Puede pasar toda expresión 4D válida que devuelva un entero positivo en la expresión. Examples:

```4d
 myCollection[5]  //access to 6th element of the collection
 myCollection[$var]
```

**Warning:** Collection elements are numbered from 0.

Puede asignar un valor a un elemento de la colección u obtener el valor de un elemento de la colección utilizando la notación de objetos:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

If you assign an element's index that surpasses the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a null value:

```4d
 C_COLLECTION(myCol)
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Initialization

Collections must have been initialized, for example using the `New collection` command, otherwise trying to read or modify their elements will generate a syntax error.

Example:
```4d
 C_COLLECTION($colVar) //creación de una variable 4D de tipo colección
 $colVar:=Nueva colección //inicialización de la colección y asignación a la variable 4D
```

### Regular or shared collection

You can create two types of collections:

- colecciones estándar (no compartidas), utilizando el comando `New collection`. These collections can be edited without any specific access control but cannot be shared between processes.
- colecciones compartidas, utilizando el comando `New shared collection`. These collections can be shared between processes, including preemptive threads. El acceso a estas colecciones se controla mediante estructuras `Use...End use`. For more information, refer to the [Shared objects and collections](Concepts/shared.md) section.

## Métodos de colección

Las referencias a colecciones 4D se benefician de métodos especiales (a veces llamados *funciones miembro*). Gracias a la notación de objetos, estos métodos pueden aplicarse a las referencias de la colección utilizando la siguiente sintaxis:

> {$result:=}myCollection.memberFunction( {params} )

Tenga en cuenta que, aunque no tenga parámetros, una función miembro debe ser llamada con paréntesis (), de lo contrario se genera un error de sintaxis.

For example:

```4d
$newCol:=$col.copy() //deep copy of $col to $newCol
$col.push(10;100) //add 10 and 100 to the collection
```

Algunos métodos devuelven la colección original después de la modificación, para que pueda ejecutar las llamadas en una secuencia:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### propertyPath parameter


Varios métodos aceptan una _propertyPath_ como parámetro. This parameter stands for:

- either an object property name, for example "lastName"
- or an object property path, i.e. a hierarchical sequence of sub-properties linked with dot characters, for example "employee.children.firstName".

**Atención:** cuando se utilizan métodos y parámetros propertyPath, no se puede utilizar ".", "[ ]", o espacios en los nombres de las propiedades ya que impedirá que 4D analice correctamente la ruta:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //error
```
