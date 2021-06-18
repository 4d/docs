---
id: colección
title: Colección
---

Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null).

Collection type variables are managed using object notation (see [Syntax basics](Concepts/dt_object.md#syntax-basics)).

Para acceder a un elemento de la colección, hay que pasar el número del elemento entre corchetes:

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in *expression*. Ejemplos:

```4d
 myCollection[5]  //acceso al 6º elemento de la colección
 myCollection[$var]
```

**Atención:** los elementos de la colección están numerados desde 0.

You can assign a value to a collection element or get a collection element value:

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

## Inicialización

Las colecciones deben haber sido inicializadas, por ejemplo utilizando el comando `New collection`, de lo contrario al intentar leer o modificar sus elementos se generará un error de sintaxis.

Ejemplo:

```4d
 var $colVar : Collection //creation of collection type 4D variable
 $colVar:=New collection //initialization of the collection and assignment to the 4D variable
```

### Colección estándar o compartida

Puede crear dos tipos de colecciones:

- colecciones estándar (no compartidas), utilizando el comando [`New collection`](API/collectionClass.md#new-collection). Estas colecciones pueden ser editadas sin ningún control de acceso específico, pero no pueden ser compartidas entre procesos.
- colecciones compartidas, utilizando el comando [`New shared collection`](API/collectionClass.md#new-shared-collection). Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos. Access to these collections is controlled by [`Use...End use`](Concepts/shared.md#useend-use) structures.

Para más información, consulte la sección [Objetos y colecciones compartidos](Concepts/shared.md).

## Collection functions

4D collection references benefit from special class functions (sometimes named *member functions*). Las funciones de colección se listan en la sección [Class API Reference](API/collectionClass.md).

Por ejemplo:

```4d
$newCol:=$col.copy() //copia de $col a $newCol
$col.push(10;100) //añade de 10 y 100 a la colección
```

Some functions return the original collection after modification, so that you can run the calls in a sequence:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### parámetro rutaPropiedad


Several functions accept a _propertyPath_ as parameter. Este parámetro significa:

- o bien un nombre de propiedad del objeto, por ejemplo "apellido"
- o una ruta de propiedades del objeto, es decir, una secuencia jerárquica de subpropiedades vinculadas con caracteres de punto, por ejemplo "empleado.hijos.nombre".

**Warning:** When using functions and propertyPath parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //indefinido
 $vmin:=$col.min(["My.special.property"]) //error
```