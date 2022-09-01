---
id: collection
title: Collection
---

Las colecciones son listas ordenadas de valores de tipos similares o diferentes (texto, número, fecha, objeto, booleano, colección o null).

Para manipular las variables de tipo Colección, debe utilizar la notación objeto (ver [Sintaxis-básica](Conceptos/dt_object.md#sintaxis-básica)).

Para acceder a un elemento de la colección, hay que pasar el número del elemento entre corchetes:

```4d
collectionRef[expression]
```

Puede pasar toda expresión 4D válida que devuelva un entero positivo en *expresión*. Ejemplos:

```4d
 myCollection[5]  //acceso al 6º elemento de la colección
 myCollection[$var]
```

**Atención:** los elementos de la colección están numerados desde 0.

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

## Inicialización

Las colecciones deben haber sido inicializadas, por ejemplo utilizando el comando `New collection`, de lo contrario al intentar leer o modificar sus elementos se generará un error de sintaxis.

Ejemplo:

```4d
 var $colVar : Collection //creación de una variable 4D de tipo colección
 $colVar:=New collection //inicialización de la colección y asignación a la variable 4D
```

### Colección estándar o compartida

Puede crear dos tipos de colecciones:

- colecciones estándar (no compartidas), utilizando el comando [`New collection`](API/CollectionClass.md#new-collection). Estas colecciones pueden ser editadas sin ningún control de acceso específico, pero no pueden ser compartidas entre procesos.
- colecciones compartidas, utilizando el comando [`New shared collection`](API/CollectionClass.md#new-shared-collection). Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos. Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos.

Para más información, consulte la sección [Objetos y colecciones compartidos](Concepts/shared.md).

## Funciones de colección

Las referencias a colecciones 4D se benefician de funciones de clase específicas (a veces llamados *funciones métodos*). Las funciones de colección se listan en la sección [Class API Reference](API/CollectionClass.md).

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


Varias funciones aceptan una _propertyPath_ como parámetro. Este parámetro significa:

- o bien un nombre de propiedad del objeto, por ejemplo "apellido"
- o una ruta de propiedades del objeto, es decir, una secuencia jerárquica de subpropiedades vinculadas con caracteres de punto, por ejemplo "empleado.hijos.nombre".

**Atención:** cuando se utilizan funciones y parámetros propertyPath, no se puede utilizar ".", "[ ]", o espacios en los nombres de las propiedades ya que impedirá que 4D analice correctamente la ruta:

```4d
 $vmin:=$col.min("My.special.property") //indefinido
 $vmin:=$col.min(["My.special.property"]) //error
```