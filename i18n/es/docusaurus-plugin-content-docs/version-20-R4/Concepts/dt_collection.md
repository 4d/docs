---
id: collection
title: Collection
---

Las colecciones son listas ordenadas de valores de tipos similares o diferentes (texto, número, fecha, objeto, booleano, colección o null).

Collection type variables are managed using [object notation](dt_object.md#properties)).

Para acceder a un elemento de la colección, hay que pasar el número del elemento entre corchetes:

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in _expression_. Ejemplos:

```4d
 myCollection[5]  //access to 6th element of the collection
 myCollection[$var]
```

**Warning:** Collection elements are numbered from 0.

Puede asignar un valor a un elemento de la colección u obtener el valor de un elemento de colección:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

Si se asigna un índice de elemento que sobrepasa el último elemento existente de la colección, la colección se redimensiona automáticamente y a todos los nuevos elementos intermedios se les asigna un valor nulo:

```4d
 var myCol : Collection
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Instanciación

Las colecciones deben haber sido instanciadas, de lo contrario intentar leer o modificar sus elementos generará un error de sintaxis.

La instanciación de la colección puede realizarse de una de las siguientes maneras:

- using the [`New collection`](../API/CollectionClass.md#new-collection) command,
- using the `[]` operator.

:::info

Several 4D commands and functions return collections, for example [`Get Monitored Activity`](https://doc.4d.com/4dv19R/help/command/en/page1713.html) or [`collection.copy`](../API/CollectionClass.md#copy). En este caso, no es necesario instanciar explícitamente la colección, el lenguaje 4D lo hace por usted.

:::

### `New collection` command

The [`New collection`](../API/CollectionClass.md#new-collection) command creates a new empty or prefilled collection and returns its reference.

Ejemplos:

```4d
 var $colVar : Collection //declaration of a collection type 4D variable
 $colVar:=New collection //instantiation of the collection and assignment to the 4D variable
 
 var $colFilled : Collection
 $colFilled:=New collection("a";"b";1;42;{}) //instantiation and assignment of a prefilled collection
```

### `[]` operator

The `[]` operator allows you to create a **collection literal**. A collection literal is a list of zero or more expressions, each of which represents a collection element, enclosed in square brackets (`[]`). Cuando se crea una colección utilizando un literal de colección, se instancia con los valores especificados como sus elementos, y su longitud se establece en el número de argumentos especificados.

Since any element is considered an expression, you can create sub-collections using `[]` in elements.  You can also create and reference **object literals**.

Si un elemento no está definido, aparecerá como Null en la colección.

Ejemplos:

```4d
var $col1; $col2; $users : Collection
$col1:=[] //empty collection
$col2:=[1;2;3;4;5;6] //collection of numbers
//collection of objects
$users:=[{name: "Alice"; \
	height: 183; \
	eyecolor: "hazel"; \
	id: $col2[5]\
	}; \
	{name: "Bob"; \
	height: 172; \
	eyecolor: "blue"\
	}]
```

:::note

If you create a collection literal containing a single element, make sure you do not use a name corresponding to an existing table name, otherwise the table syntax `[tableName]` will take priority.

:::

### Colección estándar o compartida

Puede crear dos tipos de colecciones:

- regular (non-shared) collections, using the [`New collection`](API/CollectionClass.md#new-collection) command or collection literal syntax (`[]`). Estas colecciones pueden ser editadas sin ningún control de acceso específico, pero no pueden ser compartidas entre procesos.
- shared collections, using the [`New shared collection`](API/CollectionClass.md#new-shared-collection) command. Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos. Access to these collections is controlled by [`Use...End use`](Concepts/shared.md#useend-use) structures.

For more information, refer to the [Shared objects and collections](shared.md) section.

## Funciones de colección

4D collection references benefit from special class functions (sometimes named _member functions_). Collection functions are listed in the [Class API Reference](../API/CollectionClass.md) section.

Por ejemplo:

```4d
$newCol:=$col.copy() //copia de $col a $newCol
$col.push(10;100) //añade de 10 y 100 a la colección
```

Ciertas funciones devuelven la colección original después de la modificación, para que pueda ejecutar las llamadas en una secuencia:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```

### parámetro rutaPropiedad

Several functions accept a _propertyPath_ as parameter. Este parámetro significa:

- o bien un nombre de propiedad del objeto, por ejemplo "apellido"
- o una ruta de propiedades del objeto, es decir, una secuencia jerárquica de subpropiedades vinculadas con caracteres de punto, por ejemplo "empleado.hijos.nombre".

**Warning:** When using functions and _propertyPath_ parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //error
```

## Indefinido

Reading the **length** property of an undefined collection produces 0:

```4d
     var $c : Collection //variable created but no collection is defined
     $size:=$c.length //$size = 0
```
