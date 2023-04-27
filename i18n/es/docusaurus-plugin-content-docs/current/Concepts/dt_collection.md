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

## Instantiation

Las colecciones deben haber sido instanciadas, de lo contrario intentar leer o modificar sus elementos generará un error de sintaxis.

La instanciación de la colección puede realizarse de una de las siguientes maneras:

- utilizando el comando [`New collection`](../API/CollectionClass.md#new-collection),
- utilizando el operador `[]`.

|

Varios comandos y funciones de 4D devuelven colecciones, por ejemplo [`Get Monitored Activity`](https://doc.4d.com/4dv19R/help/command/en/page1713.html) o [`collection.copy`](../API/CollectionClass.md#copy). En este caso, no es necesario instanciar explícitamente la colección, el lenguaje 4D lo hace por usted.

:::

### Comando `New collection`

El comando [`New collection`](../API/CollectionClass.md#new-collection) crea una nueva colección vacía o prellenada y devuelve su referencia.

Ejemplos:

```4d
 var $colVar : Collection //declaration of a collection type 4D variable
 $colVar:=New collection //instantiation of the collection and assignment to the 4D variable

 var $colFilled : Collection
 $colFilled:=New collection("a";"b";1;42;{}) //instantiation and assignment of a prefilled collection
```

### operador `[]`

El operador `[]` permite crear una **colección literal**. A collection literal is a list of zero or more expressions, each of which represents a collection element, enclosed in square brackets (`[]`). When you create a collection using a collection literal, it is instantiated with the specified values as its elements, and its length is set to the number of arguments specified.

Since any element is considered an expression, you can create sub-collections using `[]` in elements.  You can also create and reference **object literals**.

If an element is undefined, it will appear as Null in the collection.

Ejemplos:

```4d
var $col1; $col2; $users : Collection
$col1:=[] //colección vacía
$col2:=[1;2;3;4;5;6] //colección de números
//colección de objetos
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
- colecciones compartidas, utilizando el comando [`New shared collection`](API/CollectionClass.md#new-shared-collection). Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos. Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos.

For more information, refer to the [Shared objects and collections](shared.md) section.

## Funciones de colección

Las referencias a colecciones 4D se benefician de funciones de clase específicas (a veces llamados *funciones métodos*). Collection functions are listed in the [Class API Reference](../API/CollectionClass.md) section.

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

**Atención:** cuando se utilizan funciones y parámetros *propertyPath*, no se puede utilizar ".", "[ ]", o espacios en los nombres de las propiedades ya que impedirá que 4D analice correctamente la ruta:

```4d
 $vmin:=$col.min("My.special.property") //indefinido
 $vmin:=$col.min(["My.special.property"]) //error
```