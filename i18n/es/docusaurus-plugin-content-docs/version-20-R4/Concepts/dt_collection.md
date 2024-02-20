---
id: collection
title: Collection
---

Las colecciones son listas ordenadas de valores de tipos similares o diferentes (texto, número, fecha, objeto, booleano, colección o null).

Las variables de tipo Collection se administran utilizando [notación de objetos](dt_object.md#properties).

Para acceder a un elemento de la colección, hay que pasar el número del elemento entre corchetes:

```4d
collectionRef[expression]
```

Puede pasar toda expresión 4D válida que devuelva un entero positivo en _expression_. Ejemplos:

```4d
 myCollection[5]  //acceso al 6º elemento de la colección
 myCollection[$var]
```

**Atención:** los elementos de la colección se numeran a partir de 0.

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

- utilizando el comando [`New collection`](../API/CollectionClass.md#new-collection),
- utilizando el operador `[]`.

:::info

Varios comandos y funciones 4D devuelven colecciones, por ejemplo [`Get Monitored Activity`](https://doc.4d.com/4dv19R/help/command/en/page1713.html) o [`collection.copy`](../API/CollectionClass.md#copy). En este caso, no es necesario instanciar explícitamente la colección, el lenguaje 4D lo hace por usted.

:::

### Comando `New collection`

El comando [`New collection`](../API/CollectionClass.md#new-collection) crea una nueva colección vacía o prellenada y devuelve su referencia.

Ejemplos:

```4d
 var $colVar : Collection //declaración de una colección de tipo 4D variable
 $colVar:=New collection //instanciación de la colección y asignación a la variable 4D
 
 var $colFilled : Collection
 $colFilled:=New collection("a";"b";1;42;{}) //instanciación y asignación de una colección pre-rellenada
```

### operador `[]`

The `[]` operator allows you to create a **collection literal**. A collection literal is a list of zero or more expressions, each of which represents a collection element, enclosed in square brackets (`[]`). Cuando se crea una colección utilizando un literal de colección, se instancia con los valores especificados como sus elementos, y su longitud se establece en el número de argumentos especificados.

Since any element is considered an expression, you can create sub-collections using `[]` in elements.  You can also create and reference **object literals**.

Si un elemento no está definido, aparecerá como Null en la colección.

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

Si crea un literal de colección que contenga un único elemento, asegúrese de no utilizar un nombre que corresponda a un nombre de tabla existente; de lo contrario, la sintaxis de la tabla `[tableName]` tendrá prioridad.

:::

### Colección estándar o compartida

Puede crear dos tipos de colecciones:

- regular (non-shared) collections, using the [`New collection`](API/CollectionClass.md#new-collection) command or collection literal syntax (`[]`). Estas colecciones pueden ser editadas sin ningún control de acceso específico, pero no pueden ser compartidas entre procesos.
- shared collections, using the [`New shared collection`](API/CollectionClass.md#new-shared-collection) command. Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos. Access to these collections is controlled by [`Use...End use`](Concepts/shared.md#useend-use) structures.

Para más información, consulte la sección [Objetos y colecciones compartidos](shared.md).

## Funciones de colección

Las referencias a colecciones 4D se benefician de funciones de clase específicas (a veces llamados _funciones miembro_). Las funciones de colección están listadas en la sección [Referencia de la API de Clase](../API/CollectionClass.md).

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
