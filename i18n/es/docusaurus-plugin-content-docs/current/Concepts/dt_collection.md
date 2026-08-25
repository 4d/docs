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

Puede pasar toda expresión 4D válida que devuelva un entero positivo en *expression*. Ejemplos:

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

- usando el comando [`New collection`](../commands/new-collection)
- utilizando el operador `[]`.

:::info

Varios comandos y funciones 4D devuelven colecciones, por ejemplo [`Monitored activity`](../commands/monitored-activity) o [`collection.copy`](../API/CollectionClass.md#copy). En este caso, no es necesario instanciar explícitamente la colección, el lenguaje 4D lo hace por usted.

:::

### Comando `New collection`

El comando [`New collection`](../commands/new-collection) crea una nueva colección vacía o prellenada y devuelve su referencia.

Ejemplos:

```4d
 var $colVar : Collection //declaración de una colección de tipo 4D variable
 $colVar:=New collection //instanciación de la colección y asignación a la variable 4D
 
 var $colFilled : Collection
 $colFilled:=New collection("a";"b";1;42;{}) //instanciación y asignación de una colección pre-rellenada
```

### operador `[]`

El operador `[]` permite crear un **literal de colección**. Un literal de colección es una lista de cero o más expresiones, cada una de las cuales representa un elemento de la colección, encerradas entre corchetes (`[]`). Cuando se crea una colección utilizando un literal de colección, se instancia con los valores especificados como sus elementos, y su longitud se establece en el número de argumentos especificados.

Dado que cualquier elemento se considera una expresión, puede crear subcolecciones utilizando `[]` en los elementos.  También puede crear y referenciar **literales objeto**.

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

- las colecciones estándar (no compartidas), utilizando el comando [`New collection`](../commands/new-collection) o la sintaxis literal de la colección (`[]`). Estas colecciones pueden ser editadas sin ningún control de acceso específico, pero no pueden ser compartidas entre procesos.
- las colecciones compartidas, utilizando el comando [`New shared collection`](../commands/new-shared-collection). Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos. El acceso a estas colecciones se controla mediante estructuras [`Use...End use`](Concepts/shared.md#useend-use).

Para más información, consulte la sección [Objetos y colecciones compartidos](shared.md).

## Asignación

Los datos de tipo colección y [object](./dt_object.md) se gestionan en el lenguaje 4D a través de **referencias** (i.., punteros internos), a diferencia de los tipos de datos escalares (entero, fecha, etc.). Por lo tanto, al asignar una colección a una variable (por ejemplo, `$myVar:=[1;2;3]`), lo que se asigna es la **referencia**, no el valor en sí. Por lo tanto, toda modificación posterior de la variable *$myVar* se reflejará en todos los lugares donde se haga referencia a la colección original. Esto sigue el mismo principio que los [punteros](./dt_collection.md), salvo que no es necesario desreferenciar la variable *$myVar*.

Por ejemplo:

```4d
var $col1; $col2 : Collection
var $o : Object

$col1:=[1;2;3] //se crea una referencia a la colección
$col2:=$col1 //ambas variables comparten la misma referencia a la colección
$o:={ list:$col1 } //el objeto almacena una referencia a la misma colección

$col1.push(4)
//$col2 = [1,2,3,4]
//$o = {"list":[1,2,3,4]}

$col2[0]:=10
//$col1 = [10,2,3,4]
//$o = {"list":[10,2,3,4]}

$o.list.push(5)
//$col1 = [10,2,3,4,5]
//$col2 = [10,2,3,4,5]

ASSERT($col1=$col2) //True
```

Este principio se aplica siempre que se asignan objetos o colecciones, incluso en expresiones de [parámetros](./parameters.md) o de [fórmulas](../commands/formula).

:::note

Si quiere crear una **copia profunda** de una colección, utilice la función [`collection.copy()`](../API/CollectionClass.md#copy).

:::

## Funciones de colección

Las referencias a colecciones 4D se benefician de funciones de clase específicas (a veces llamados *funciones miembro*). Las funciones de colección están listadas en la sección [Referencia de la API de Clase](../API/CollectionClass.md).

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

Varias funciones aceptan un *propertyPath* como parámetro. Este parámetro significa:

- o bien un nombre de propiedad del objeto, por ejemplo "apellido"
- o una ruta de propiedades del objeto, es decir, una secuencia jerárquica de subpropiedades vinculadas con caracteres de punto, por ejemplo "empleado.hijos.nombre".

**Atención:** Cuando utilice funciones y parámetros *propertyPath*, no puede utilizar ".", "[ ]", o espacios en los nombres de las propiedades ya que impedirá que 4D analice correctamente la ruta:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //error
```

## Operadores en las colecciones

Puede utilizar operadores de comparación con **referencias de colección**, lo que significa que puede evaluar si dos o más referencias apuntan a la misma instancia de una colección.

```4d
var $c1:=["a";42] //referencia a una instancia
var $c2:=["a";42] //referencia a otra instancia
var $c3:=$c1 //referencia a la misma instancia
```

Basándonos en el código anterior, la tabla comparativa es:

| Operación   | Sintaxis                      | Devuelve | Expression | Valor |
| ----------- | ----------------------------- | -------- | ---------- | ----- |
| Igual       | collectionRef = collectionRef | Boolean  | $c1 = $c3  | True  |
|             |                               |          | $c1 = $c2  | False |
| Desigualdad | collectionRef # collectionRef | Boolean  | $c1 # $c3  | False |
|             |                               |          | $c1 # $c2  | True  |

## Indefinido

La lectura de la propiedad **length** de una colección indefinida produce 0:

```4d
     var $c : Collection //variable creada pero sin colección definida
     $size:=$c.length //$size = 0
```

## Conversiones de tipos entre colecciones y arrays 4D

Cuando se mueven valores entre [arrays](./arrays.md) (con tipo) y colecciones (sin tipo), 4D aplica conversiones automáticas de acuerdo con los valores y las declaraciones de tipo del array.

### Conversión de colecciones en arrays

Las siguientes conversiones se aplican a los valores procesados por los comandos detallados a continuación:

- [`COLLECTION TO ARRAY`](../commands/collection-to-array)
- [`OB GET ARRAY`](../commands/ob-get-array)

| Tipo de elemento de la colección             | null                                     | boolean                                  | Infinity                   | real                                                                   | string                                                                                                                                                                                                                               | date                                                                                                                           | picture                                                               | object                                                                | collection                                | 4D.BLOB                                               |
| -------------------------------------------- | ---------------------------------------- | ---------------------------------------- | -------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------- |
| [`ARRAY TEXT`](../commands/array-text)       | ""                                       | "false" o "true"                         | "Infinity"                 | número con separador de puntos (si es necesario)    | Text                                                                                                                                                                                                                                 | Conversión de fecha a texto según el parámetro [Fechas en objetos](../commands/set-database-parameter#dates-inside-objects-85) | "[object Object]" | "[object Object]" | Elementos de la colección separados por , | "[object Object]" |
| [`ARRAY LONGINT`](../commands/array-longint) | 0                                        | 0 o 1                                    | comportamiento no definido | redondeado según las reglas de redondeo estándar                       | 0 si la cadena no empieza por [0-9,+,-,e,.,x]; en caso contrario, se aplica la conversión estándar. Admite el prefijo de notación hexadecimal 0x | 0                                                                                                                              | 0                                                                     | 0                                                                     | 0                                         | 0                                                                     |
| [`ARRAY REAL`](../commands/array-real)       | 0                                        | 0 o 1                                    | INF                        | real                                                                   | igual que ARRAY LONGINT                                                                                                                                                                                                              | 0                                                                                                                              | 0                                                                     | 0                                                                     | 0                                         | 0                                                                     |
| [`ARRAY INTEGER`](../commands/array-integer) | 0                                        | 0 o 1                                    | 0                          | redondeado según las normas de redondeo estándar                       | igual que ARRAY LONGINT                                                                                                                                                                                                              | 0                                                                                                                              | 0                                                                     | 0                                                                     | 0                                         | 0                                                                     |
| [`ARRAY BOOLEAN`](../commands/array-boolean) | False                                    | false o true                             | true                       | true si #0                                                             | true si string#""                                                                                                                                                                                                                    | true si date#"00/00/00"                                                                                                        | True                                                                  | True                                                                  | True                                      | True                                                                  |
| [`ARRAY OBJECT`](../commands/array-object)   | indefinido                               | indefinido                               | indefinido                 | indefinido                                                             | indefinido                                                                                                                                                                                                                           | indefinido                                                                                                                     | Imagen de objeto                                                      | Object                                                                | Indefinido                                | 4D.Blob                                               |
| [`ARRAY BLOB`](../commands/array-blob)       | 0 bytes                                  | 0 bytes                                  | 0 bytes                    | 0 bytes                                                                | 0 bytes                                                                                                                                                                                                                              | 0 bytes                                                                                                                        | 0 bytes                                                               | 0 bytes                                                               | 0 bytes                                   | Blob                                                                  |
| [`ARRAY PICTURE`](../commands/array-picture) | 0 bytes                                  | 0 bytes                                  | 0 bytes                    | 0 bytes                                                                | 0 bytes                                                                                                                                                                                                                              | 0 bytes                                                                                                                        | Picture                                                               | 0 bytes                                                               | 0 bytes                                   | 0 bytes                                                               |
| [`ARRAY DATE`](../commands/array-date)       | 00/00/00                                 | 00/00/00                                 | 00/00/00                   | 00/00/00                                                               | 00/00/00 o una fecha en formato conforme a la norma ISO 8601                                                                                                                                                                         | date                                                                                                                           | 00/00/00                                                              | 00/00/00                                                              | 00/00/00                                  | 00/00/00                                                              |
| [`ARRAY TIME`](../commands/array-time)       | 00:00:00 | 00:00:00 | comportamiento no definido | número de segundos en formato 00:00:00 | número de segundos en formato 00:00:00                                                                                                                                                               | 00:00:00                                                                                       | 00:00:00                              | 00:00:00                              | 00:00:00  | 00:00:00                              |

:::note

Los objetos blob (4D.Blob) se [convierten automáticamente en blobs escalares](dt_blob.md#automatic-conversion-of-blob-type) y viceversa cuando es necesario.

:::

### Conversión de arrays en colecciones

Las siguientes conversiones se aplican a los valores procesados por los comandos detallados a continuación:

- [`ARRAY TO COLLECTION`](../commands/array-to-collection)
- [`OB SET ARRAY`](../commands/ob-set-array)

|                                    | [`ARRAY TEXT`](../commands/array-text) | [`ARRAY LONGINT`](../commands/array-longint) | [`ARRAY REAL`](../commands/array-real) | [`ARRAY INTEGER`](../commands/array-integer) | [`ARRAY BOOLEAN`](../commands/array-boolean) | [`ARRAY OBJECT`](../commands/array-object) | [`ARRAY PICTURE`](../commands/array-picture) | [`ARRAY DATE`](../commands/array-date)                                                                                     | [`ARRAY TIME`](../commands/array-time) | [`ARRAY BLOB`](../commands/array-blob) |
| ---------------------------------- | -------------------------------------- | -------------------------------------------- | -------------------------------------- | -------------------------------------------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | -------------------------------------- |
| Tipos de elementos de la colección | text                                   | number                                       | number                                 | number                                       | boolean                                      | object o null                              | picture                                      | text or date according to the [Dates inside objects](../commands/set-database-parameter#dates-inside-objects-85) parameter | número de segundos                     | 4D.Blob                |