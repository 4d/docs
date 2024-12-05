---
id: CollectionClass
title: Collection
---

La clase Collection gestiona variables de tipo [Collection](Concepts/dt_collection.md).

Una colección se inicializa con:

|                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)<br/><!-- INCLUDE #_command_.New collection.Summary -->                      |
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)<br/><!-- INCLUDE #_command_.New shared collection.Summary --> |

### Ejemplo

```4d
Notas
```

### Resumen

|                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #collection.at().Syntax -->](#at)<br/><!-- INCLUDE #collection.at().Summary -->                                  |
| [<!-- INCLUDE #collection.average().Syntax -->](#average)<br/><!-- INCLUDE #collection.average().Summary -->                   |
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)<br/><!-- INCLUDE #collection.clear().Summary -->                         |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)<br/><!-- INCLUDE #collection.combine().Summary -->                   |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)<br/><!-- INCLUDE #collection.concat().Summary -->                      |
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)<br/><!-- INCLUDE #collection.copy().Summary -->                            |
| [<!-- INCLUDE #collection.count().Syntax -->](#count)<br/><!-- INCLUDE #collection.count().Summary -->                         |
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)<br/><!-- INCLUDE #collection.countValues().Summary -->       |
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)<br/><!-- INCLUDE #collection.distinct().Summary -->                |
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)<br/><!-- INCLUDE #collection.equal().Summary -->                         |
| [<!-- INCLUDE #collection.every().Syntax -->](#every)<br/><!-- INCLUDE #collection.every().Summary -->                         |
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)<br/><!-- INCLUDE #collection.extract().Summary -->                   |
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)<br/><!-- INCLUDE #collection.fill().Summary -->                            |
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)<br/><!-- INCLUDE #collection.filter().Summary -->                      |
| [<!-- INCLUDE #collection.find().Syntax -->](#find)<br/><!-- INCLUDE #collection.find().Summary -->                            |
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)<br/><!-- INCLUDE #collection.findIndex().Summary -->                  |
| [<!-- INCLUDE #collection.first().Syntax -->](#first)<br/><!-- INCLUDE #collection.first().Summary -->                         |
| [<!-- INCLUDE #collection.flat().Syntax -->](#flat)<br/><!-- INCLUDE #collection.flat().Summary -->                            |
| [<!-- INCLUDE #collection.flatMap().Syntax -->](#flatMap)<br/><!-- INCLUDE #collection.flatMap().Summary -->                   |
| [<!-- INCLUDE #collection.includes().Syntax -->](#includes)<br/><!-- INCLUDE #collection.includes().Summary -->                |
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)<br/><!-- INCLUDE #collection.indexOf().Summary -->                   |
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)<br/><!-- INCLUDE #collection.indices().Summary -->                   |
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)<br/><!-- INCLUDE #collection.insert().Summary -->                      |
| [<!-- INCLUDE #collection.join().Syntax -->](#join)<br/><!-- INCLUDE #collection.join().Summary -->                            |
| [<!-- INCLUDE #collection.last().Syntax -->](#last)<br/><!-- INCLUDE #collection.last().Summary -->                            |
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)<br/><!-- INCLUDE #collection.lastIndexOf().Summary -->       |
| [<!-- INCLUDE #collection.length.Syntax -->](#length)<br/><!-- INCLUDE #collection.length.Summary -->                          |
| [<!-- INCLUDE #collection.map().Syntax -->](#map)<br/><!-- INCLUDE #collection.map().Summary -->                               |
| [<!-- INCLUDE #collection.max().Syntax -->](#max)<br/><!-- INCLUDE #collection.max().Summary -->                               |
| [<!-- INCLUDE #collection.min().Syntax -->](#min)<br/><!-- INCLUDE #collection.min().Summary -->                               |
| [<!-- INCLUDE #collection.multiSort().Syntax -->](#multisort)<br/><!-- INCLUDE #collection.multiSort().Summary -->             |
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)<br/><!-- INCLUDE #collection.orderBy().Summary -->                   |
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)<br/><!-- INCLUDE #collection.orderByMethod().Summary --> |
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)<br/><!-- INCLUDE #collection.pop().Summary -->                               |
| [<!-- INCLUDE #collection.push().Syntax -->](#push)<br/><!-- INCLUDE #collection.push().Summary -->                            |
| [<!-- INCLUDE #collection.query().Syntax -->](#query)<br/><!-- INCLUDE #collection.query().Summary -->                         |
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)<br/><!-- INCLUDE #collection.reduce().Summary -->                      |
| [<!-- INCLUDE #collection.reduceRight().Syntax -->](#reduceRight)<br/><!-- INCLUDE #collection.reduceRight().Summary -->       |
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)<br/><!-- INCLUDE #collection.remove().Summary -->                      |
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)<br/><!-- INCLUDE #collection.resize().Summary -->                      |
| Ejemplo 2                                                                                                                      |
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)<br/><!-- INCLUDE #collection.shift().Summary -->                         |
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)<br/><!-- INCLUDE #collection.slice().Summary -->                         |
| [<!-- INCLUDE #collection.some().Syntax -->](#some)<br/><!-- INCLUDE #collection.some().Summary -->                            |
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)<br/><!-- INCLUDE #collection.sort().Summary -->                            |
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)<br/><!-- INCLUDE #collection.sum().Summary -->                               |
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)<br/><!-- INCLUDE #collection.unshift().Summary -->                   |

## `New collection`

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New collection.Params -->

| Parámetros | Tipo                                                                    |                             | Descripción                                |
| ---------- | ----------------------------------------------------------------------- | :-------------------------: | ------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer |              ->             | Valor(es) de collection |
| Result     | Collection                                                              | <- | La nueva colección                         |

<!-- END REF -->

#### Descripción

El comando `New collection` <!-- REF #_command_.New collection.Summary --> crea una nueva colección vacía o precargada<!-- END REF --> y devuelve su referencia.

Si no se pasa ningún parámetro, `New collection` crea una colección vacía y devuelve su referencia.

Debe asignar la referencia devuelta a una variable 4D del tipo Collection.

> Tenga en cuenta que las instrucciones `var : Collection` o `C_COLLECTION` declaran una variable de tipo `Collection` pero no crean ninguna colección.

Opcionalmente, puede prellenar la nueva colección pasando uno o varios *valores* como parámetro(s).

De lo contrario, puede añadir o modificar elementos posteriormente por asignación. Por ejemplo:

```4d
 myCol[10]:="My new element"
```

Si el nuevo índice del elemento está más allá del último elemento existente de la colección, la colección se redimensiona automáticamente y a todos los nuevos elementos intermedios se les asigna un valor **null**.

Puede pasar cualquier número de valores de todos los tipos soportados (number, text, date, picture, pointer, object, collection...). A diferencia de los arrays, las colecciones pueden mezclar datos de diferentes tipos.

Debe prestar atención a los siguientes aspectos de la conversión:

- Si pasasun puntero, se mantiene "tal cual"; se evalúa utilizando el comando `JSON Stringify`
- Las fechas se almacenan como fechas "aaaa-mm-dd" o de cadenas con el formato "AAAA-MM-DDTHH:mm:ss.SSSZ", según la configuración actual "fechas dentro de los objetos" de la base de datos. Al convertir las fechas 4D en texto antes de almacenarlas en la colección, por defecto el programa tiene en cuenta la zona horaria local. Puede modificar este comportamiento utilizando el selector `Dates inside objects` del comando `SET DATABASE PARAMETER`.
- Si pasa un tiempo, se almacena como un número de milisegundos (Real).

#### Ejemplo 1

Quiere crear una nueva colección vacía y asignarla a una variable colección 4D:

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### Ejemplo 2

Quiere crear una colección precargada:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### Ejemplo 3

Se crea una nueva colección y se añade un nuevo elemento:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //añadir un décimo elemento con valor "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```

## `New shared collection`

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New shared collection.Params -->

| Parámetros | Tipo                                                                |                             | Descripción                                              |
| ---------- | ------------------------------------------------------------------- | :-------------------------: | -------------------------------------------------------- |
| value      | Number, Text, Date, Time, Boolean, Shared object, Shared collection |              ->             | Valor(es) de la collection compartida |
| Result     | Collection                                                          | <- | La nueva colección compartida                            |

<!-- END REF -->

#### Descripción

El comando `New shared collection` <!-- REF #_command_.New shared collection.Summary --> crea una nueva colección compartida vacía o precargada<!-- END REF --> y devuelve su referencia.

La adición de un elemento a esta colección utilizando el operador de asignación debe estar rodeada por la estructura [`Use...End use`](Concepts/shared.md#useend-use), de lo contrario se genera un error (esto no es necesario cuando se añaden elementos utilizando funciones como [`push()`](#push) o [`map()`](#map) porque activan automáticamente una estructura interna *Use...End use*). Sin embargo, es posible leer un elemento sin una estructura *Use...End use*.

:::info

Para más información sobre las colecciones compartidas, por favor consulte la página [Objetos y colecciones compartidas](Concepts/shared.md).

:::

Si no se pasa ningún parámetro, `New shared collection` crea una colección compartida vacía y devuelve su referencia.

Debe asignar la referencia devuelta a una variable 4D del tipo Collection.

> Tenga en cuenta que las instrucciones `var : Collection` o `C_COLLECTION` declaran una variable de tipo `Collection` pero no crean ninguna colección.

Opcionalmente, puedes precargar la nueva colección compartida pasando uno o varios *valor(es)* como parámetro(s). De lo contrario, puede añadir o modificar elementos posteriormente por asignación notación objeto (ver ejemplo).

Si el nuevo índice del elemento está más allá del último elemento existente de la colección compartida, la colección se redimensiona automáticamente y a todos los nuevos elementos intermedios se les asigna un valor **null**.

Puede pasar cualquier número de valores de los siguientes tipos soportados:

- number (real, longint...). Los valores numéricos se almacenan siempre como reales.
- text
- boolean
- date
- time (almacenado como número de milisegundos - real)
- null
- objeto compartido
- colección compartida

:::note

Esta función modifica la colección original.

:::

#### Ejemplo

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

<!-- REF collection.at().Desc -->

## .at()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

<!-- REF #collection.at().Syntax -->**.at**( *index* : Integer ) : any <!-- END REF -->

<!-- REF #collection.at().Params -->

| Parámetros | Tipo    |                             | Descripción                                                                         |
| ---------- | ------- | :-------------------------: | ----------------------------------------------------------------------------------- |
| index      | Integer |              ->             | Índice del elemento a devolver                                                      |
| Result     | any     | <- | Este ejemplo devuelve las personas contratadas hace más de 90 días: |

<!-- END REF -->

#### Descripción

Igual a

> Esta función no modifica la colección original.

Los números enteros negativos cuentan hacia atrás desde el último elemento de la colección.

Igual a

#### Ejemplo

```4d
Lanzamiento
```

<!-- END REF -->

<!-- REF collection.average().Desc -->

## .average()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.average().Syntax -->**.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.average().Params -->

| Parámetros   | Tipo            |                             | Descripción                                                      |
| ------------ | --------------- | :-------------------------: | ---------------------------------------------------------------- |
| propertyPath | Text            |              ->             | Ruta de la propiedad del objeto que se utilizará para el cálculo |
| Result       | Real, Undefined | <- | donde:                                           |

<!-- END REF -->

#### Descripción

Diferente de

Para el cálculo sólo se tienen en cuenta los elementos numéricos (se ignoran otros tipos de elementos).

Uso del paréntesis

Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer

- la colección está vacía,
- la colección no contiene elementos numéricos,
- Lanzamiento

#### Ejemplo 1

```4d
 var $col : Collection
 $col:=New collection(10;20;"Monday";True;6)
 $vAvg:=$col.average() //12
```

#### Ejemplo 2

```4d
 var $col : Collection
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $vAvg:=$col.average("salary") //23500
```

<!-- END REF -->

<!-- REF collection.clear().Desc -->

## .clear()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.clear().Syntax -->**.clear()** : Collection<!-- END REF -->

<!-- REF #collection.clear().Params -->

| Parámetros | Tipo       |                             | Descripción                                                                                 |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------------- |
| Result     | Collection | <- | o *methodName*, el nombre de un método proyecto (texto). |

<!-- END REF -->

#### Descripción

Debe prestar atención a los siguientes aspectos de la conversión:

> Esta función modifica la colección original.

#### Ejemplo

```4d
var $col : Collection
$col:=New collection(1;2;5)
$col.clear()
$vSize:=$col.length //$vSize=0
```

<!-- END REF -->

<!-- REF collection.combine().Desc -->

## .combine()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.combine().Syntax -->**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.combine().Params -->

| Parámetros | Tipo       |                             | Descripción                                                                                                              |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------ |
| col2       | Collection |              ->             | Colección a combinar                                                                                                     |
| index      | Integer    |              ->             | Posición a la que se deben combinar los elementos de inserción en la colección (por defecto=length+1) |
| Result     | Collection | <- | En caso de incoherencia, se aplican las siguientes reglas:                                               |

<!-- END REF -->

#### Descripción

La función `.combine()` <!-- REF #collection.combine().Summary -->inserta elementos *col2* al final o en la posición *index* especificada en la instancia de la colección y devuelve la colección modificada<!-- END REF -->. A diferencia de la función `.insert()`, `.combine()` añade cada valor de *col2* en la colección original, y no como un único elemento de la colección.

> Esta función modifica la colección original.

Por defecto, los elementos *col2* se añaden al final de la colección original. Puede pasar en *index* la posición donde desea insertar los elementos *col2* en la colección.

> Diferente de

- Ejemplo 1
- Ejemplo 3
- Lanzamiento

#### Ejemplo

```4d
var $c; $fruits : Collection
$c:=New collection(1;2;3;4;5;6)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$c.combine($fruits;3) //[1,2,3,"Orange","Banana","Apple","Grape",4,5,6]
```

<!-- END REF -->

<!-- REF collection.concat().Desc -->

## .concat()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.concat().Syntax -->**.concat**( *value* : any { *;...valueN* } ) : Collection<!-- END REF -->

<!-- REF #collection.concat().Params -->

| Parámetros | Tipo                                                           |                             | Descripción                                                                                                                                         |
| ---------- | -------------------------------------------------------------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| value      | Number, Text, Object, Collection, Date, Time, Boolean, Picture |              ->             | Valores a concatenar. Si *value* es una colección, todos sus elementos se añaden al final de la colección original. |
| Result     | Collection                                                     | <- | Descripción                                                                                                                                         |

<!-- END REF -->

#### Descripción

Cuando se utilizan marcadores de posición, no es posible anular las condiciones de seguridad:

> Esta función no modifica la colección original.

La colección devuelta contiene el elemento especificado por *startFrom* y todos los elementos subsiguientes hasta, pero sin incluir, el elemento especificado por *end*. Si sólo se especifica el parámetro *startFrom*, la colección devuelta contiene todos los elementos desde *startFrom* hasta el último elemento de la colección original.

#### Ejemplo

```4d
var $c : Collection
$c:=New collection(1;2;3;4;5)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$fruits.push(New object("Intruder";"Tomato"))
$c2:=$c.concat($fruits) //[1,2,3,4,5,"Orange","Banana","Apple","Grape",{"Intruder":"Tomato"}]
$c2:=$c.concat(6;7;8) //[1,2,3,4,5,6,7,8]
```

<!-- END REF -->

<!-- REF collection.copy().Desc -->

## .copy()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                          |
| ----------- | ----------------------------------------------------------------------- |
| 18 R3       | Nueva opción *ck shared*. Nuevos parámetros *groupWith* |
| v16 R6      | Añadidos                                                                |

</details>

<!-- REF #collection.copy().Syntax -->**.copy**() : Collection<br/>**.copy**( *option* : Integer ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->

<!-- REF #collection.copy().Params -->

| Parámetros   | Tipo       |                             | Descripción                                                                                                                                                           |
| ------------ | ---------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| option       | Integer    |              ->             | Ejemplo 3                                                                                                                                                             |
| groupWithCol | Collection |              ->             | Colección compartida que se agrupa con la colección resultante                                                                                                        |
| groupWithObj | Object     |              ->             | Objeto compartido que se agrupa con la colección resultante                                                                                                           |
| Result       | Collection | <- | Se pueden utilizar dos tipos de marcadores de posición: **marcadores de posición indexados** y **marcadores de posición con nombre**. |

<!-- END REF -->

#### Descripción

Uso de marcadores de posición

> Esta función no modifica la colección original.

Lanzamiento

| option                | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | Si la colección original contiene valores de tipo puntero, por defecto la copia también contiene los punteros. Si la colección original contiene valores de tipo puntero, por defecto la copia también contiene los punteros. En este caso, cada puntero presente en la colección se evalúa al copiar y se utiliza su valor desreferenciado.                                          |
| `ck shared`           | Por defecto, `copy()` devuelve una colección Clásica (no compartida), incluso si el comando se aplica a una colección compartida. Pasa la constante `ck shared` para crear una colección compartida. En este caso, puede utilizar el parámetro *groupWith* para asociar la colección compartida con otra colección u objeto (ver más adelante). |

Ejemplo 2

:::note

Los objetos Datastore, dataclass y entity no son copiables. Si se llama a `.copy()` con ellos, se devuelven valores `Null`.

:::

#### Ejemplo 1

Queremos copiar la colección regular (no compartida) *$lastnames* en el objeto compartido *$sharedObject*. Para ello, debemos crear una copia compartida de la colección (*$sharedLastnames*).

```4d
var $sharedObject : Object
var $lastnames;$sharedLastnames : Collection
var $text : Text

$sharedObject:=New shared object

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) //$lastnames es una colección estándar

$sharedLastnames:=$lastnames.copy(ck shared) //$sharedLastnames es una colección compartida

//Now we can put $sharedLastnames into $sharedObject
Use($sharedObject)
    $sharedObject.lastnames:=$sharedLastnames
End use
```

#### Ejemplo 2

Queremos combinar *$sharedColl1* y *$sharedColl2*. Dado que pertenecen a diferentes grupos compartidos, una combinación directa daría lugar a un error. Dado que pertenecen a diferentes grupos compartidos, una combinación directa daría lugar a un error.

```4d
var $sharedColl1;$sharedColl2;$copyColl : Collection

$sharedColl1:=New shared collection(New shared object("lastname";"Smith"))
$sharedColl2:=New shared collection(New shared object("lastname";"Brown"))

//$copyColl pertenece al mismo grupo compartido que $sharedColl2
 $copyColl:=$sharedColl1.copy(ck shared;$sharedColl2)
 Use($sharedColl2)
    $sharedColl2.combine($copyColl)
 End use
```

#### Ejemplo 3

Tenemos una distribución estándar (*$lastnames*) y queremos ponerla en el **Storage** de la aplicación. Para ello, debemos crear previamente una copia compartida (*$sharedLastnames*).

```4d
var $lastnames;$sharedLastnames : Collection
var $text : Text

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) //$lastnames es una colección clásica

$sharedLastnames:=$lastnames.copy(ck shared) // copia compartida

Use(Storage)
    Storage.lastnames:=$sharedLastnames
End use
```

#### Ejemplo 4

Primer elemento de la colección

```4d
Mayor que
```

<!-- END REF -->

<!-- REF collection.count().Desc -->

## .count()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.count().Syntax -->**.count**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.count().Params -->

| Parámetros   | Tipo |                             | Descripción                                                                     |
| ------------ | ---- | :-------------------------: | ------------------------------------------------------------------------------- |
| propertyPath | Text |              ->             | Ruta de la propiedad del objeto que se utilizará para el cálculo                |
| Result       | Real | <- | Este ejemplo ilustra el uso de la opción `ck resolve pointers`: |

<!-- END REF -->

#### Descripción

Tipo

Si la colección contiene objetos, puede pasar el parámetro *propertyPath*. En este caso, sólo se tienen en cuenta los elementos que contienen el *propertyPath*.

#### Ejemplo

```4d
 var $col : Collection
 var $count1;$count2 : Real
 $col:=New collection(20;30;Null;40)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $col.push(New object("lastName";"Henry";"salary";12000))
 $count1:=$col.count() //$count1=7
 $count2:=$col.count("name") //$count2=3

```

<!-- END REF -->

<!-- REF collection.countValues().Desc -->

## .countValues()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.countValues().Syntax -->**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.countValues().Params -->

| Parámetros   | Tipo                                            |                             | Descripción                                                                                                                                                                             |
| ------------ | ----------------------------------------------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection |              ->             | Valor a contar                                                                                                                                                                          |
| propertyPath | Text                                            |              ->             | Ruta de la propiedad del objeto que se utilizará para el cálculo                                                                                                                        |
| Result       | Real                                            | <- | *toSearch* debe coincidir exactamente con el elemento a encontrar (se aplican las mismas reglas que para el operador de igualdad del tipo de datos). |

<!-- END REF -->

#### Descripción

Mayor o igual que

Colección original ordenada

- un valor escalar (texto, número, booleano, fecha),
- una referencia de objeto o de colección.

Descripción

Resumen

> Esta función no modifica la colección original.

#### Ejemplo 1

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection(1;2;5;5;5;3;6;4)
 $vCount:=$col.countValues(5) // $vCount=3
```

#### Ejemplo 2

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection
 $col.push(New object("name";"Smith";"age";5))
 $col.push(New object("name";"Wesson";"age";2))
 $col.push(New object("name";"Jones";"age";3))
 $col.push(New object("name";"Henry";"age";4))
 $col.push(New object("name";"Gross";"age";5))
 $vCount:=$col.countValues(5;"age") //$vCount=2
```

#### Ejemplo 3

```4d
 var $numbers; $letters : Collection
 var $vCount : Integer

 $letters:=New collection("a";"b";"c")
 $numbers:=New collection(1;2;$letters;3;4;5)

 $vCount:=$numbers.countValues($letters) //$vCount=1
```

<!-- END REF -->

<!-- REF collection.distinct().Desc -->

## .distinct()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20          | Si se intenta eliminar un elemento de una colección vacía, el método no hace nada (no se genera ningún error). |
| v16 R6      | Añadidos                                                                                                                                          |

</details>

<!-- REF #collection.distinct().Syntax -->**.distinct**( {*options* : Integer} ) : Collection<br/>**.distinct**( *propertyPath* : Text {; *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.distinct().Params -->

| Parámetros   | Tipo       |                             | Descripción                                             |
| ------------ | ---------- | :-------------------------: | ------------------------------------------------------- |
| propertyPath | Text       |              ->             | Ruta del atributo cuyos valores distintos desea obtener |
| options      | Integer    |              ->             | `ck diacritical`, `ck count values`                     |
| Result       | Collection | <- | Lanzamiento                                             |

<!-- END REF -->

#### Descripción

Utilizar comillas

> Esta función no modifica la colección original.

La colección devuelta se clasifica automáticamente. Los valores **Null** no son devueltos.

Índice para iniciar la prueba en

Ejemplos

| Constante         | Valor | Comentario                                                                                                                                                                                                                                    |
| ----------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck diacritical`  | 8     | La evaluación distingue entre mayúsculas y minúsculas y diferencia los caracteres acentuados. Por defecto si se omite, se realiza una evaluación no diacrítica                                                                |
| `ck count values` | 32    | Devuelve el conteo de elementos para cada valor distinto. Cuando se pasa esta opción, `.distinct()` devuelve una colección de objetos que contienen un par de atributos `{"value":*value*; "count":*count*}`. |

#### Ejemplos

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("a";"b";"c";"A";"B";"c";"b";"b")
 $c.push(New object("size";1))
 $c.push(New object("size";3))
 $c.push(New object("size";1))
 $c2:=$c.distinct() //$c2=["a","b","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct(ck diacritical) //$c2=["a","A","b","B","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct("size") //$c2=[1,3]
 $c3:=$c.distinct("size";ck count values) //$c3=[{value:1,count:2},{value:3,count:1}]

```

<!-- END REF -->

<!-- REF collection.equal().Desc -->

## .equal()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.equal().Syntax -->**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.equal().Params -->

| Parámetros  | Tipo       |                             | Descripción          |
| ----------- | ---------- | :-------------------------: | -------------------- |
| collection2 | Collection |              ->             | Colección a comparar |
| option      | Integer    |              ->             | Añadidos             |
| Result      | Boolean    | <- | Descripción          |

<!-- END REF -->

#### Descripción

Tipo

:::note Notas

- La función `.equal()` solo comprueba la igualdad para los elementos de tipo cadena, booleano, número y null en las colecciones. No verifica la igualdad para objetos nativos.
- Quiere crear una colección precargada:

:::

Por defecto, se realiza una evaluación no diacrítica. La evaluación distingue entre mayúsculas y minúsculas y diferencia los caracteres acentuados.

:::tip

Una comparación recursiva de colecciones puede llevar mucho tiempo si la colección es grande y contiene numerosos niveles. Si sólo desea comparar dos referencias de colección, puede considerar utilizar el operador de comparación [`=` para las referencias de colección](../Concepts/dt_collection.md#collection-operators).

:::

#### Ejemplo

```4d
 var $c; $c2 : Collection
 var $b : Boolean

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"orange");2;3;4)
 $b:=$c.equal($c2) // false

 $c:=New collection(New object("1";"a";"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"orange");2;3)
 $b:=$c.equal($c2) // false

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"ORange");2;3)
 $b:=$c.equal($c2) // true

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"ORange");2;3)
 $b:=$c.equal($c2;ck diacritical) //false
```

<!-- END REF -->

<!-- REF collection.every().Desc -->

## .every()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 19 R6       | Soporte de fórmula |
| v16 R6      | Añadidos           |

</details>

<!-- REF #collection.every().Syntax -->**.every**( { *startFrom* : Integer ; } *formula* : 4D.Function { ;*...param* : any } ) : Boolean<br/>**.every**( { *startFrom* : Integer ; } *methodName* : Text { ;*...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.every().Params -->

| Parámetros | Tipo                        |                             | Descripción                      |
| ---------- | --------------------------- | :-------------------------: | -------------------------------- |
| startFrom  | Integer                     |              ->             | Índice para iniciar la prueba en |
| formula    | 4D.Function |              ->             | Objeto fórmula                   |
| methodName | Text                        |              ->             | Nombre de un método              |
| param      | any                         |              ->             | Colección original ordenada      |
| Result     | Boolean                     | <- | Lanzamiento                      |

<!-- END REF -->

#### Descripción

Índice para iniciar la búsqueda en

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- Comparación
- Colección original con valores rellenados

La retrollamada se llama con los parámetros pasados en *param* (opcional). La retrollamada puede efecturar toda prueba, con o sin los parámetros, y debe devolver *true* para cada elemento que cumpla la prueba. Recibe un `Object` en el primer parámetro ($1).

La retrollamada recibe los siguientes parámetros:

- Lanzamiento
- Colección original sin elementos eliminados
- Este ejemplo comprueba que todos los elementos de una colección son de tipo real:

Puede definir los siguientes parámetros:

- Copia invertida de la colección
- *$1.stop* (boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.

Menor o igual que

Por defecto, `.every()` evalúa toda la colección. Opcionalmente, se puede pasar en *startFrom* el índice del elemento desde el que iniciar la prueba.

- Tipo
- Ejemplo 3
- Descripción

#### Ejemplo 1

```4d
Comentario
```

#### Ejemplo 2

Este ejemplo comprueba que todos los elementos de una colección son de tipo real:

```4d
var $c : Collection
var $b : Boolean
var $f : 4D.Function

$f:=Formula(Value type($1.value)=$2
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f;Is real) //$b=true
$c:=$c.push(New object("name";"Cleveland";"zc";35049))
$c:=$c.push(New object("name";"Blountsville";"zc";35031))
$b:=$c.every($f;Is real) //$b=false
```

<!-- END REF -->

<!-- REF collection.extract().Desc -->

## .extract()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.extract().Syntax -->**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br/>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathOrTargetPathN* : Text } ) : Collection<!-- END REF -->

<!-- REF #collection.extract().Params -->

| Parámetros   | Tipo       |                             | Descripción                                                                                                                                                                                                |
| ------------ | ---------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text       |              ->             | Ruta de la propiedad del objeto cuyos valores deben ser extraídos a la nueva colección                                                                                                                     |
| targetpath   | Text       |              ->             | Ruta de la propiedad de destino o nombre de la propiedad                                                                                                                                                   |
| option       | Integer    |              ->             | `ck keep null`: incluye la propiedad null en la colección devuelta (se ignora por defecto). Parámetro ignorado si se pasa *targetPath*. |
| Result       | Collection | <- | Lanzamiento                                                                                                                                                                                                |

<!-- END REF -->

#### Descripción

Menor que

> Esta función no modifica la colección original.

Ejemplo

- Ejemplo

  Por defecto, los elementos cuya *propertyPath* es null o indefinida se ignoran en la colección resultante. Puede pasar la constante `ck keep null` en el parámetro *option* para incluir estos valores como elementos null en la colección devuelta.

- Si se pasan uno o más parámetros *targetPath* (correspondientes a uno o más parámetros *propertyPath*), `.extract()` llena la nueva colección con las propiedades *propertyPath* y cada elemento de la nueva colección es un objeto con propiedades *targetPath* llenadas con las propiedades *propertyPath* coincidentes. Se conservan los valores null (el parámetro *opción* se ignora con esta sintaxis).

#### Ejemplo 1

```4d
var $c : Collection
$c:=New collection
$c.push(New object("name";"Cleveland"))
$c.push(New object("zip";5321))
$c.push(New object("name";"Blountsville"))
$c.push(42)
$c2:=$c.extract("name") // $c2=[Cleveland,Blountsville]
$c2:=$c.extract("name";ck keep null) //$c2=[Cleveland,null,Blountsville,null]
```

#### Ejemplo 2

```4d
var $c : Collection
$c:=New collection
$c.push(New object("zc";35060))
$c.push(New object("name";Null;"zc";35049))
$c.push(New object("name";"Cleveland";"zc";35049))
$c.push(New object("name";"Blountsville";"zc";35031))
$c.push(New object("name";"Adger";"zc";35006))
$c.push(New object("name";"Clanton";"zc";35046))
$c.push(New object("name";"Clanton";"zc";35045))
$c2:=$c.extract("name";"City") //$c2=[{City:null},{City:Cleveland},{City:Blountsville},{City:Adger},{City:Clanton},{City:Clanton}]
$c2:=$c.extract("name";"City";"zc";"Zip") //$c2=[{Zip:35060},{City:null,Zip:35049},{City:Cleveland,Zip:35049},{City:Blountsville,Zip:35031},{City:Adger,Zip:35006},{City:Clanton,Zip:35046},{City:Clanton,Zip:35045}]
```

<!-- END REF -->

<!-- REF collection.fill().Desc -->

## .fill()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.fill().Syntax -->**.fill**( *value* : any ) : Collection<br/>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.fill().Params -->

| Parámetros | Tipo                                            |                             | Descripción                                                                               |
| ---------- | ----------------------------------------------- | :-------------------------: | ----------------------------------------------------------------------------------------- |
| value      | number, Text, Collection, Object, Date, Boolean |              ->             | Valor a asignar                                                                           |
| startFrom  | Integer                                         |              ->             | Índice de inicio (incluido)                                            |
| end        | Integer                                         |              ->             | Índice final (no incluido)                                             |
| Result     | collection                                      | <- | *methodName*, el nombre de un método proyecto (texto). |

<!-- END REF -->

#### Descripción

Ejemplo:

> Esta función modifica la colección original.

- Descripción
- Ejemplo 3
- Descripción

En caso de incoherencia, se aplican las siguientes reglas:

- Si *startFrom* < 0, se recalcula como *startFrom:=startFrom+length* (se considera el desplazamiento desde el final de la colección). Si el valor calculado es negativo, *startFrom* toma el valor 0.
- Soporte de querySettings
- Colección que contiene los elementos añadidos

#### Ejemplo

```4d
 var $c : Collection
 $c:=New collection(1;2;3;"Lemon";Null;"";4;5)
 $c.fill("2") // $c:=[2,2,2,2,2,2,2,2]
 $c.fill("Hello";5) // $c=[2,2,2,2,2,Hello,Hello,Hello]
 $c.fill(0;1;5) // $c=[2,0,0,0,0,Hello,Hello,Hello]
 $c.fill("world";1;-5) //-5+8=3 -> $c=[2,"world","world",0,0,Hello,Hello,Hello]
```

<!-- END REF -->

<!-- REF collection.filter().Desc -->

## .filter()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 19 R6       | Soporte de fórmula |
| v16 R6      | Añadidos           |

</details>

<!-- REF #collection.filter().Syntax -->**.filter**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.filter**( *methodName* : Text { ; *...param* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.filter().Params -->

| Parámetros | Tipo                        |                             | Descripción                 |
| ---------- | --------------------------- | :-------------------------: | --------------------------- |
| formula    | 4D.Function |              ->             | Objeto fórmula              |
| methodName | Text                        |              ->             | Nombre de un método         |
| param      | any                         |              ->             | Colección original ordenada |
| Result     | Collection                  | <- | O                           |

<!-- END REF -->

#### Descripción

La función `.filter()` <!-- REF #collection.filter().Summary -->devuelve una nueva colección que contiene todos los elementos de la colección original para los que el resultado de *formula* o *methodName* es **true**<!-- END REF -->. Esta función devuelve una ***shallow copy***, lo que significa que los objetos o colecciones de ambas colecciones comparten la misma referencia. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para filtrar los elementos de la colección utilizando:

- Comparación
- Colección original con valores rellenados

Se llama a la retrollamada con los parámetros pasados en *param* (opcional) y un objeto en primer parámetro (*$1*). La retrollamada puede realizar cualquier prueba, con o sin el parámetro(s) y debe devolver **true** para cada elemento que cumpla la condición y por lo tanto, debe añadirse a la nueva colección.

La retrollamada recibe los siguientes parámetros:

- Lanzamiento
- Colección original sin elementos eliminados
- Este ejemplo comprueba que todos los elementos de una colección son de tipo real:

Puede definir los siguientes parámetros:

- Nombre de un método
- *$1.stop* (boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.

:::note

date

:::

#### Ejemplo 1

Desea obtener la colección de elementos de texto cuya longitud es inferior a 6:

```4d
var $col;$colNew : Collection
$col:=New collection("hello";"world";"red horse";66;"tim";"san jose";"miami")
$colNew:=$col.filter(Formula((Value type($1.value)=Is text) && (Length($1.value)<$2)); 6)
  //$colNew=["hello","world","tim","miami"]
```

#### Ejemplo 2

Quiere filtrar los elementos según su tipo de valor:

```4d
 var $c;$c2;$c3 : Collection
 var $f : 4D.Function

 $f:=Formula(OB Get type($1;"value")=$2)
 $c:=New collection(5;3;1;4;6;2)
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c2:=$c.filter($f;Is real) // $c2=[5,3,1,4,6,2]
 $c3:=$c.filter($f;Is object)
  // $c3=[{name:Cleveland,zc:35049},{name:Blountsville,zc:35031}]
```

<!-- END REF -->

<!-- REF collection.find().Desc -->

## .find()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 19 R6       | Soporte de fórmula |
| v16 R6      | Añadidos           |

</details>

<!-- REF #collection.find().Syntax -->**.find**( { *startFrom* : Integer ; }  *formula* : 4D.Function { ; *...param* : any } ) : any<br/>**.find**( { *startFrom* : Integer ; }  *methodName* : Text { ; *...param* : any } ) : any<!-- END REF -->

<!-- REF #collection.find().Params -->

| Parámetros | Tipo                        |                             | Descripción                                                                                                                                                                                     |
| ---------- | --------------------------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| startFrom  | Integer                     |              ->             | Índice para iniciar la búsqueda en                                                                                                                                                              |
| formula    | 4D.Function |              ->             | Objeto fórmula                                                                                                                                                                                  |
| methodName | Text                        |              ->             | Nombre de un método                                                                                                                                                                             |
| param      | any                         |              ->             | Colección original ordenada                                                                                                                                                                     |
| Result     | any                         | <- | La función `.multiSort()` <!-- REF #collection.multiSort().Summary -->permite realizar una ordenación sincronizada multinivel sobre un conjunto de colecciones<!-- END REF -->. |

<!-- END REF -->

#### Descripción

Ejemplo

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- Comparación
- Colección original con valores rellenados

La retrollamada se llama con los parámetros pasados en *param* (opcional). La retrollamada se llama con los parámetros pasados en *param* (opcional). Recibe un `Object` en el primer parámetro ($1).

La retrollamada recibe los siguientes parámetros:

- Lanzamiento
- Colección original sin elementos eliminados
- Este ejemplo comprueba que todos los elementos de una colección son de tipo real:

Puede definir los siguientes parámetros:

- Ordenar una colección de números de forma ascendente y descendente:
- *$1.stop* (boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.

Por defecto, `.find()` busca en toda la colección. Opcionalmente, se puede pasar en *startFrom* el índice del elemento desde el que iniciar la búsqueda.

- Modificaciones
- Si *startFrom* < 0, se considera el desplazamiento desde el final de la colección (*startFrom:=startFrom+length*).
  **Nota**: incluso si *startFrom* es negativo, la colección se sigue buscando de izquierda a derecha.
- Descripción

#### Ejemplo 1

Quiere obtener el primer elemento de texto con una longitud menor que 5:

```4d
var $col : Collection
$col:=New collection("hello";"world";4;"red horse";"tim";"san jose")
$value:=$col.find(Formula((Value type($1.value)=Is text) && (Length($1.value)<$2)); 5) //$value="tim"
```

#### Ejemplo 2

Quiere encontrar el nombre de una ciudad dentro de una colección:

```4d
var $c : Collection
var $c2 : Object
$c:=New collection
$c.push(New object("name"; "Cleveland"; "zc"; 35049))
$c.push(New object("name"; "Blountsville"; "zc"; 35031))
$c.push(New object("name"; "Adger"; "zc"; 35006))
$c.push(New object("name"; "Clanton"; "zc"; 35046))
$c.push(New object("name"; "Clanton"; "zc"; 35045))

$c2:=$c.find(Formula($1.value.name=$2); "Clanton")  //$c2={name:Clanton,zc:35046}

```

<!-- END REF -->

<!-- REF collection.findIndex().Desc -->

## .findIndex()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 19 R6       | Soporte de fórmula |
| v16 R6      | Añadidos           |

</details>

<!-- REF #collection.findIndex().Syntax -->**.findIndex**( { *startFrom* : Integer ; }  *formula* : 4D.Function { ; *...param* : any } ) : Integer<br/>**.findIndex**( { *startFrom* : Integer ; }  *methodName* : Text { ; *...param* : any } ) : Integer<!-- END REF -->

<!-- REF #collection.findIndex().Params -->

| Parámetros | Tipo                        |                             | Descripción                        |
| ---------- | --------------------------- | :-------------------------: | ---------------------------------- |
| startFrom  | Integer                     |              ->             | Índice para iniciar la búsqueda en |
| formula    | 4D.Function |              ->             | Objeto fórmula                     |
| methodName | Text                        |              ->             | Nombre de un método                |
| param      | any                         |              ->             | Colección original ordenada        |
| Result     | Integer                     | <- | Conjunción                         |

<!-- END REF -->

#### Descripción

Ejemplo:

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- Comparación
- Desea ordenar la colección resultante:

La retrollamada se llama con los parámetros pasados en *param* (opcional). La retrollamada se llama con los parámetros pasados en *param* (opcional). Recibe un `Object` en el primer parámetro ($1).

La retrollamada recibe los siguientes parámetros:

- Lanzamiento
- Colección original sin elementos eliminados
- Este ejemplo comprueba que todos los elementos de una colección son de tipo real:

Puede definir los siguientes parámetros:

- Ordenar una colección de números de forma ascendente y descendente:
- *$1.stop* (boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.

Por defecto, `.findIndex()` busca en toda la colección. Opcionalmente, se puede pasar en *startFrom* el índice del elemento desde el que iniciar la búsqueda.

- Modificaciones
- Si *startFrom* < 0, se considera el desplazamiento desde el final de la colección (*startFrom:=startFrom+length*).
  **Nota**: incluso si *startFrom* es negativo, la colección se sigue buscando de izquierda a derecha.
- Descripción

#### Ejemplo

Quiere encontrar la posición del primer nombre de ciudad dentro de una colección:

```4d
var $c : Collection
var $val2;$val3 : Integer
$c:=New collection
$c.push(New object("name";"Cleveland";"zc";35049))
$c.push(New object("name";"Blountsville";"zc";35031))
$c.push(New object("name";"Adger";"zc";35006))
$c.push(New object("name";"Clanton";"zc";35046))
$c.push(New object("name";"Clanton";"zc";35045))
$val2:=$c.findIndex(Formula($1.value.name=$2);"Clanton") // $val2=3
$val3:=$c.findIndex($val2+1;Formula($1.value.name=$2);"Clanton") //$val3=4
```

<!-- END REF -->

<!-- REF collection.first().Desc -->

## .first()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

<!-- REF #collection.first().Syntax -->**.first**() : any <!-- END REF -->

<!-- REF #collection.first().Params -->

| Parámetros | Tipo |                             | Descripción                                                                                                                                                        |
| ---------- | ---- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Result     | any  | <- | Obtiene los datos coincidentes, admite el comodín (@), no distingue entre mayúsculas de minúsculas ni diacríticas. |

<!-- END REF -->

#### Descripción

Tipo

> Esta función no modifica la colección original.

La función devuelve Undefined si la colección está vacía.

#### Ejemplo

```4d
var $col; $emptyCol : Collection
var $first : Variante
$col:=New collection(10; 20; 30; "hello"; 50)
$first:=$col.first() // 10

$emptyCol:=New collection() //vacío
// $first:=$emptyCol[0] //daría error
$first:=$emptyCol.first() // devuelve Undefined
```

<!-- END REF -->

<!-- REF collection.flat().Desc -->

## .flat()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

<!-- REF #collection.flat().Syntax -->**.flat**( { *depth* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.flat().Params -->

| Parámetros | Tipo       |                             | Descripción                                                                                                                                                                                                       |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| depth      | Integer    |              ->             | A qué profundidad debe aplanarse una estructura de colección anidada. Por defecto=1                                                                                                               |
| Result     | Collection | <- | *$1.result* (boolean): **true** si *$1.value < $1.value2*, **false** de lo contrario. |

<!-- END REF -->

#### Descripción

Ejemplo 2

expresión

> Esta función no modifica la colección original.

#### Ejemplo

```4d
$col:=New collection(1; 2; New collection(3; 4))
$col.flat()
// [1, 2, 3, 4]

$col:=New collection(1; 2; New collection(3; 4; New collection(5; 6)))
$col.flat()
// [1, 2, 3, 4, [5, 6]]

$col:=New collection(1; 2; New collection(3; 4; New collection(5; 6)))
$col.flat(2)
// [1, 2, 3, 4, 5, 6]

$col:=New collection(1; 2; New collection(3; 4; 5; 6; New collection(7; 8; New collection(9; 10))))
$col.flat(MAXLONG)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

<!-- END REF -->

<!-- REF collection.flatMap().Desc -->

## .flatMap()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

<!-- REF #collection.flatMap().Syntax -->**.flatMap**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.flatMap**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.flatMap().Params -->

| Parámetros | Tipo                        |                             | Descripción                 |
| ---------- | --------------------------- | :-------------------------: | --------------------------- |
| formula    | 4D.Function |              ->             | Objeto fórmula              |
| methodName | Text                        |              ->             | Nombre de un método         |
| param      | any                         |              ->             | Colección original ordenada |
| Result     | Collection                  | <- | Comentario                  |

<!-- END REF -->

#### Descripción

La función `.flatMap()` <!-- REF #collection.flatMap().Summary -->crea una nueva colección basada en el resultado de la llamada a la función *formula* 4D o al método *methodName* sobre cada elemento de la colección original y aplanada por una profundidad de 1<!-- END REF -->. Opcionalmente, puede pasar parámetros a *formula* o *methodName* utilizando los parámetros *param*.

Colección de valores transformados

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- Comparación
- Colección original con valores rellenados

La retrollamada se llama con los parámetros pasados en *param* (opcional). The callback is called with the parameter(s) passed in <em x-id="3">param</em> (optional). Recibe un `Object` en el primer parámetro ($1).

La retrollamada recibe los siguientes parámetros:

- Lanzamiento
- Colección original sin elementos eliminados
- Este ejemplo comprueba que todos los elementos de una colección son de tipo real:

Puede definir los siguientes parámetros:

- Descripción
- *$1.stop* (boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.

#### Ejemplo 1

```4d
var $col ; $result : Collection
$col:=New collection(1; 2; 3; 4)

$result:=$col.map(Formula(New collection($1.value*2))
 // [[2],[4],[6],[8]]

$result:=$col.flatMap(Formula(New collection($1.value*2))
// [2,4,6,8]
```

#### Ejemplo 2

```
var $col; $result : Collection
$col:=New collection("Hello how"; ""; "are you ?")

$result:=$col.map(Formula(Split string($1.value; " ")))
// [["Hello", "how"], [], ["are", "you", "?"]]

$result:=$col.flatMap(Formula(Split string($1.value; " ")))
// ["Hello", "how", "are", "you", "?"]
```

#### Ejemplo 3

Desea calcular el porcentaje de cada valor de la colección con respecto al total:

```4d
var $c; $c2 : Collection
var $f : 4D.Function
$c:=New collection(1; 4; 9; 10; 20)
$f:=Formula(New collection($1.value;Round(($1.value/$2)*100; 2)))
$c2:=$c.flatMap($f; $c.sum())
  //$c2=[1, 2.27, 4, 9.09,9, 20.45,10, 22.73, 20, 45.45]
```

<!-- END REF -->

<!-- REF collection.includes().Desc -->

## .includes()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

<!-- REF #collection.includes().Syntax -->**.includes**( *toSearch* : expression { ; *startFrom* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.includes().Params -->

| Parámetros | Tipo      |                             | Descripción                        |
| ---------- | --------- | :-------------------------: | ---------------------------------- |
| toSearch   | expresión |              ->             | Expresión a buscar en la colección |
| startFrom  | Integer   |              ->             | Índice para iniciar la búsqueda en |
| Result     | Boolean   | <- | Ejemplo 1                          |

<!-- END REF -->

#### Descripción

Ejemplo

> Esta función no modifica la colección original.

En *toSearch*, pase la expresión a encontrar en la colección. Puede pasar:

- un valor escalar (texto, número, booleano, fecha),
- el valor null,
- una referencia de objeto o de colección.

la colección está vacía,

Ejemplo 2

- Ejemplo
- Si *startFrom* < 0, se considera el desplazamiento desde el final de la colección (*startFrom:=startFrom+length*). Tenga en cuenta que incluso si *startFrom* es negativo, la colección se sigue buscando de izquierda a derecha.
- Descripción

#### Ejemplo

```4d
 var $col : Collection
 var $in : Boolean
 var $obj : Object
 $obj:=New object("value"; 10)
 $col:=New collection(1;2;"Henry";5;3;"Albert";6;4;"Alan";5;$obj)
 $in:=$col.includes(3) //True
 $in:=$col.includes(5;6) //True
 $in:=$col.includes("al@") //True
 $in:=$col.includes("Hello") //False
 $in:=$col.includes($obj)  //True
 $in:=$col.includes(New object("value"; 10)) //False
```

<!-- END REF -->

<!-- REF collection.indexOf().Desc -->

## .indexOf()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.indexOf().Syntax -->**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.indexOf().Params -->

| Parámetros | Tipo      |                             | Descripción                        |
| ---------- | --------- | :-------------------------: | ---------------------------------- |
| toSearch   | expresión |              ->             | Expresión a buscar en la colección |
| startFrom  | Integer   |              ->             | Índice para iniciar la búsqueda en |
| Result     | Integer   | <- | Descripción                        |

<!-- END REF -->

#### Descripción

Tipo

> Esta función no modifica la colección original.

En *toSearch*, pase la expresión a encontrar en la colección. Puede pasar:

- un valor escalar (texto, número, booleano, fecha),
- el valor null,
- una referencia de objeto o de colección.

la colección está vacía,

Ejemplo 2

- Modificaciones
- Si *startFrom* < 0, se considera el desplazamiento desde el final de la colección (*startFrom:=startFrom+length*).
  **Nota**: incluso si *startFrom* es negativo, la colección se sigue buscando de izquierda a derecha.
- Descripción

#### Ejemplo

```4d
 var $col : Collection
 var $i : Integer
 $col:=New collection(1;2;"Henry";5;3;"Albert";6;4;"Alan";5)
 $i:=$col.indexOf(3) //$i=4
 $i:=$col.indexOf(5;5) //$i=9
 $i:=$col.indexOf("al@") //$i=5
 $i:=$col.indexOf("Hello") //$i=-1
```

<!-- END REF -->

<!-- REF collection.indices().Desc -->

## .indices()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.indices().Syntax -->**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.indices().Params -->

| Parámetros  | Tipo       |                             | Descripción                                                                                                                 |
| ----------- | ---------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------- |
| queryString | Text       |              ->             | Criterio de búsqueda                                                                                                        |
| value       | any        |              ->             | Valor(es) a comparar cuando se utiliza(n) marcador(es) de posición |
| Result      | Collection | <- | Ejemplo 3                                                                                                                   |

<!-- END REF -->

#### Descripción

La función `.indices()` funciona exactamente igual que la función [`.query()`](#query) pero <!-- REF #collection.indices().Summary -->devuelve índices, en la colección original, de elementos de la colección de objetos que coinciden con las condiciones de búsqueda *queryString*<!-- END REF -->, y no elementos en sí. Los índices se devuelven en orden ascendente.

> Esta función no modifica la colección original.

Ejemplo 1

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

Los elementos se ordenan de forma descendente

#### Ejemplo

```4d
 var $c; $icol : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))

 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $icol:=$c.indices("name = :1";"Cleveland") // $icol=[0]
 $icol:=$c.indices("zc > 35040") // $icol=[0,3,4]
```

<!-- END REF -->

<!-- REF collection.insert().Desc -->

## .insert()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.insert().Syntax -->**.insert**( *index* : Integer ; *element* : any ) : Collection <!-- END REF -->

<!-- REF #collection.insert().Params -->

| Parámetros | Tipo       |                             | Descripción                                            |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------ |
| index      | Integer    |              ->             | Dónde insertar el elemento                             |
| element    | any        |              ->             | Elemento a insertar en la colección                    |
| Result     | Collection | <- | Con el siguiente método ***Flatten***: |

<!-- END REF -->

#### Descripción

Búsquedas con fechas:

> Esta función modifica la colección original.

Descripción

> Diferente de

- Ejemplo 1
- Ejemplo 1
- Si el valor calculado es negativo, index toma el valor 0.

Se puede insertar cualquier tipo de elemento aceptado por una colección, incluso otra colección.

#### Ejemplo

```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d") //$col=["a","b","c","d"]
 $col.insert(2;"X") //$col=["a","b","X","c","d"]
 $col.insert(-2;"Y") //$col=["a","b","X","Y","c","d"]
 $col.insert(-10;"Hi") //$col=["Hi","a","b","X","Y","c","d"]
```

<!-- END REF -->

<!-- REF collection.join().Desc -->

## .join()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.join().Syntax -->**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text <!-- END REF -->

<!-- REF #collection.join().Params -->

| Parámetros | Tipo    |                             | Descripción                          |
| ---------- | ------- | :-------------------------: | ------------------------------------ |
| delimiter  | Text    |              ->             | Separador a utilizar entre elementos |
| option     | Integer |              ->             | Colección a combinar                 |
| Result     | Text    | <- | Ejemplo 3                            |

<!-- END REF -->

#### Descripción

Tipo

> Esta función no modifica la colección original.

Por defecto, los elementos nulos o vacíos de la colección se devuelven en la cadena resultante. Pase la constante `ck ignore null or empty` en el parámetro *option* si quiere eliminarlos de la cadena resultante.

#### Ejemplo

```4d
 var $c : Collection
 var $t1;$t2 : Text
 $c:=New collection(1;2;3;"Paris";Null;"";4;5)
 $t1:=$c.join("|") //1|2|3|Paris|null||4|5
 $t2:=$c.join("|";ck ignore null or empty) //1|2|3|Paris|4|5
```

<!-- END REF -->

<!-- REF collection.last().Desc -->

## .last()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

<!-- REF #collection.last().Syntax -->**.last**() : any <!-- END REF -->

<!-- REF #collection.last().Params -->

| Parámetros | Tipo |                             | Descripción                                                                                      |
| ---------- | ---- | :-------------------------: | ------------------------------------------------------------------------------------------------ |
| Result     | any  | <- | Si el valor calculado < 0, *startFrom* toma el valor 0. |

<!-- END REF -->

#### Descripción

Añadidos

> Esta función no modifica la colección original.

La función devuelve Undefined si la colección está vacía.

#### Ejemplo

```4d
Propiedad
```

<!-- END REF -->

<!-- REF collection.lastIndexOf().Desc -->

## .lastIndexOf()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.lastIndexOf().Syntax -->**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.lastIndexOf().Params -->

| Parámetros | Tipo      |                             | Descripción                                           |
| ---------- | --------- | :-------------------------: | ----------------------------------------------------- |
| toSearch   | expresión |              ->             | El elemento que se va a buscar dentro de la colección |
| startFrom  | Integer   |              ->             | Índice para iniciar la búsqueda en                    |
| Result     | Integer   | <- | Descripción                                           |

<!-- END REF -->

#### Descripción

Ejemplo

> Esta función no modifica la colección original.

En *toSearch*, pase la expresión a encontrar en la colección. Puede pasar:

- un valor escalar (texto, número, booleano, fecha),
- el valor null,
- una referencia de objeto o de colección.

la colección está vacía,

Ejemplo 2

- Ejemplo 3
- Si *startFrom* < 0, se recalcula como *startFrom:=startFrom+length* (se considera el desplazamiento desde el final de la colección). Si el valor calculado es negativo, se devuelve -1 (no se busca en la colección).
  **Nota:** incluso si *startFrom* es negativo, la colección se sigue buscando de derecha a izquierda.
- Descripción

#### Ejemplo

```4d
Tipo
```

<!-- END REF -->

<!-- REF collection.length.Desc -->

## .length

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R5      | Añadidos       |

</details>

<!-- REF #collection.length.Syntax -->**.length** : Integer<!-- END REF -->

#### Descripción

Ejemplo 2

La propiedad `.length` se inicializa cuando se crea la colección. Añadir o eliminar elementos actualiza la longitud, si es necesario. Esta propiedad es **sólo lectura** (no se puede utilizar para definir el tamaño de la colección).

#### Ejemplo

```4d
Tipo
```

<!-- END REF -->

<!-- REF collection.map().Desc -->

## .map()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 19 R6       | Soporte de fórmula |
| v16 R6      | Añadidos           |

</details>

<!-- REF #collection.map().Syntax -->**.map**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.map**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.map().Params -->

| Parámetros | Tipo                        |                             | Descripción                                                                                                                                                                           |
| ---------- | --------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function |              ->             | Objeto fórmula                                                                                                                                                                        |
| methodName | Text                        |              ->             | Nombre de un método                                                                                                                                                                   |
| param      | any                         |              ->             | Colección original ordenada                                                                                                                                                           |
| Result     | Collection                  | <- | `.pop()`, utilizado junto con [`.push()`](#push), puede utilizarse para implementar una funcionalidad primera entrada última salida de tratamiento de datos apilados: |

<!-- END REF -->

#### Descripción

La función `.map()` <!-- REF #collection.map().Summary -->crea una nueva colección basada en el resultado de la llamada a la función *formula* 4D o al método *methodName* sobre cada elemento de la colección original<!-- END REF -->. Opcionalmente, puede pasar parámetros a *formula* o *methodName* utilizando los parámetros *param*. `.map()` siempre devuelve una colección con el mismo tamaño que la colección original, excepto si se utilizó *$1.stop* (ver más abajo).

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- Comparación
- Colección original con valores rellenados

La retrollamada se llama con los parámetros pasados en *param* (opcional). The callback is called with the parameter(s) passed in <em x-id="3">param</em> (optional). Recibe un `Object` en el primer parámetro ($1).

La retrollamada recibe los siguientes parámetros:

- Lanzamiento
- Colección original sin elementos eliminados
- Este ejemplo comprueba que todos los elementos de una colección son de tipo real:

Puede definir los siguientes parámetros:

- Descripción
- *$1.stop* (boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.

#### Ejemplo

```4d
var $c; $c2 : Collection
$c:=New collection(1; 4; 9; 10; 20)
$c2:=$c.map(Formula(Round(($1.value/$2)*100; 2)); $c.sum())
  //$c2=[2.27,9.09,20.45,22.73,45.45]
```

<!-- END REF -->

<!-- REF collection.max().Desc -->

## .max()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.max().Syntax -->**.max**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.max().Params -->

| Parámetros   | Tipo                                            |                             | Descripción                                                         |
| ------------ | ----------------------------------------------- | :-------------------------: | ------------------------------------------------------------------- |
| propertyPath | Text                                            |              ->             | Ruta de la propiedad del objeto que se utilizará para la evaluación |
| Result       | Boolean, Text, Number, Collection, Object, Date | <- | Comentario                                                          |

<!-- END REF -->

#### Descripción

La función `.lastIndexOf()` <!-- REF #collection.lastIndexOf().Summary -->busca la expresión *toSearch* entre los elementos de la colección y devuelve el índice de la última ocurrencia<!-- END REF -->, o -1 si no se encontró.

> Esta función no modifica la colección original.

Lanzamiento

Lanzamiento

Lanzamiento

#### Ejemplo

```4d
 var $col : Collection
 $col:=New collection(200;150;55)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Alabama";"salary";10500))
 $max:=$col.max() //{name:Alabama,salary:10500}
 $maxSal:=$col.max("salary") //50000
 $maxName:=$col.max("name") //"Wesson"
```

<!-- END REF -->

<!-- REF collection.min().Desc -->

## .min()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.min().Syntax -->**.min**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.min().Params -->

| Parámetros   | Tipo                                            |                             | Descripción                                                                                                                                                                         |
| ------------ | ----------------------------------------------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text                                            |              ->             | Ruta de la propiedad del objeto que se utilizará para la evaluación                                                                                                                 |
| Result       | Boolean, Text, Number, Collection, Object, Date | <- | *formula* (sintaxis recomendada), un [objeto Fórmula](FunctionClass.md) que puede encapsular toda expresión ejecutable, incluyendo funciones y métodos proyecto; |

<!-- END REF -->

#### Descripción

Ejemplo 2

> Esta función no modifica la colección original.

True si todos los elementos han pasado la prueba con éxito

Modificaciones

Lanzamiento

#### Ejemplo

```4d
 var $col : Collection
 $col:=New collection(200;150;55)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Alabama";"salary";10500))
 $min:=$col.min() //55
 $minSal:=$col.min("salary") //10000
 $minName:=$col.min("name") //"Alabama"
```

<!-- END REF -->

<!-- REF collection.multiSort().Desc -->

## .multiSort()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R3       | Añadidos       |

</details>

<!-- REF #collection.multiSort().Syntax -->**.multiSort**() : Collection<br/>**.multiSort**( *colsToSort* : Collection ) : Collection<br/>**.multiSort**( *formula* : 4D.Function ; *colsToSort* : Collection ) : Collection<!-- END REF -->

<!-- REF #collection.multiSort().Params -->

| Parámetros | Tipo                        |                             | Descripción                                                                                 |
| ---------- | --------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------- |
| formula    | 4D.Function |              ->             | Objeto fórmula                                                                              |
| colsToSort | Collection                  |              ->             | Ejemplo 2                                                                                   |
| Result     | Collection                  | <- | o *methodName*, el nombre de un método proyecto (texto). |

<!-- END REF -->

#### Descripción

Ejemplo 2

> Ejemplo 2

Si se llama a `.multiSort()` sin parámetros, la función tiene el mismo efecto que la función [`.sort()`](#sort): la colección se ordena (sólo valores escalares) en orden ascendente por defecto, según su tipo. Si la colección contiene valores de diferentes tipos, se agrupan primero por tipo y se ordenan después. Si <em x-id="3">attributePath</em> lleva a una propiedad de objeto que contiene valores de diferentes tipos, primero se agrupan por tipo y se ordenan después.

1. null
2. booleans
3. cadenas
4. numbers
5. objects
6. collections
7. dates

Ruta de la propiedad del objeto que se utilizará para el cálculo

Para ordenar varias colecciones de forma sincrónica, basta con pasar en *colsToSort* una colección de colecciones para ordenar. Puede pasar un número ilimitado de colecciones. La colección original se ordenará en orden ascendente y todas las colecciones *colsToSort* se ordenarán de forma sincronizada.

:::note

Descripción

:::

Si desea ordenar las colecciones en algún otro orden que no sea ascendente, debe suministrar una *formula* ([objeto Formula](FunctionClass.md#formula)) que defina el orden de clasificación. El valor de retorno debe ser un booleano que indica el orden relativo de los dos elementos: **True** si *$1.value* es menor que *$1.value2*, **False** si *$1.value* es mayor que *$1.value2*. Puede ofrecer parámetros adicionales a la fórmula si es necesario.

Opcionalmente, puede pasar el índice de la colección desde el cual iniciar una búsqueda en reversa en *startFrom*.

- $1 (objeto), donde:
  - Lanzamiento
  - Lanzamiento
- $2...$N (cualquier tipo): parámetros adicionales

Quiere obtener el primer elemento de texto con una longitud menor que 5:

Ejemplo

Ejemplo 2

:::note

Ejemplo 2

:::

#### Ejemplo 1

Descripción

```4d
var $col;$col2;$col3 : Collection
$col:=["A"; "C"; "B"]
$col2:=[1; 2; 3]
$col3:=[["Jim"; "Philip"; "Maria"]; ["blue"; "green"]; ["11"; 22; "33"]]

$col.multiSort([$col2; $col3])
//$col=["A","B","C"]
//$col2=[1,3,2]
//$col3[0]=["Jim","Philip","Maria"]
//$col3[1]=["11",22,"33"]
//$col3[2]=["blue","green"]

```

#### Ejemplo 2

Desea ordenar tres colecciones sincronizadas: city, country y continent. Quiere una ordenación ascendente de la primera y la tercera colección y sincronización para la segunda colección:

```4d
var $city : Collection
var $country : Collection
var $continent : Collection

$city:=["Paris"; "Lyon"; "Rabat"; "Eching"; "San Diego"]
$country:=["France"; "France"; "Morocco"; "Germany"; "US"]
$continent:=["Europe"; "Europe"; "Africa"; "Europe"; "America"]

$continent.multiSort([$country; {collection: $city; order: ck ascending}])
//$continent=["Africa","America","Europe","Europe","Europe"]
//$country=["Morocco","US","France","France","Germany"]
//$city=["Rabat","San Diego","Lyon","Paris","Eching"]

```

#### Ejemplo 3

(obligatorio si se ha utilizado un método) *$1.result* (booleano): **true** si la evaluación del valor del elemento tiene éxito, **false** en caso contrario.

```4d
var $name : Collection
var $address : Collection
$name:=[]
$name.push({firstname: "John"; lastname: "Smith"})
$name.push({firstname: "Alain"; lastname: "Martin"})
$name.push({firstname: "Jane"; lastname: "Doe"})
$name.push({firstname: "John"; lastname: "Doe"})
$address:=[]
$address.push({city: "Paris"; country: "France"})
$address.push({city: "Lyon"; country: "France"})
$address.push({city: "Eching"; country: "Germany"})
$address.push({city: "Berlin"; country: "Germany"})

$name.multiSort(Formula($1.value.firstname<$1.value2.firstname); [$address])
//"Alain Martin","Jane Doe","John Smith","John Doe"
//"Lyon France","Eching Germany","Paris France","Berlin Germany"

```

<!-- END REF -->

<!-- REF collection.orderBy().Desc -->

## .orderBy()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.orderBy().Syntax -->**.orderBy**( ) : Collection<br/>**.orderBy**( *pathStrings* : Text ) : Collection<br/>**.orderBy**( *pathObjects* : Collection ) : Collection<br/>**.orderBy**( *ascOrDesc* : Integer ) : Collection <!-- END REF -->

<!-- REF #collection.orderBy().Params -->

| Parámetros  | Tipo       |                             | Descripción                                                                                                                                      |
| ----------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| pathStrings | Text       |              ->             | Ruta(s) de propiedad(es) a utilizar para ordenar la colección                                              |
| pathObjects | Collection |              ->             | Colección de objetos criterio                                                                                                                    |
| ascOrDesc   | Integer    |              ->             | Ejemplo 1                                                                                                                                        |
| Result      | Collection | <- | Constantes **null**: utilizando la palabra clave "null" se encontrarán las propiedades **null** y **undefined**. |

<!-- END REF -->

#### Descripción

Ejemplo

Esta función devuelve una *copia superficial*, lo que significa que los objetos o colecciones de ambas colecciones comparten la misma referencia. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.

> Esta función no modifica la colección original.

Si no se pasa ningún parámetro, la función ordena los valores escalares de la colección en orden ascendente (otros tipos de elementos como objetos o colecciones se devuelven con un orden interno). Puede modificar este orden automático pasando las constantes `ck ascending` o `ck descending` en el parámetro *ascOrDesc* (ver más abajo).

También puede pasar un parámetro de criterios para definir cómo deben ordenarse los elementos de la colección. Se admiten tres sintaxis para este parámetro:

- *pathStrings* : Texto (fórmula). **Sintaxis**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (orden por defecto: asc). *pathStrings* contiene una fórmula compuesta de 1 a x rutas de propiedades y (opcionalmente) órdenes de clasificación, separados por comas. El orden en que se pasan las propiedades determina la prioridad de ordenación de los elementos de la colección. Por defecto, las propiedades se clasifican en orden ascendente. Puede definir el orden de clasificación de una propiedad en la cadena de criterios, separado de la ruta de la propiedad por un solo espacio: pase "asc" para ordenar en orden ascendente o "desc" en orden descendente.

- *pathObjects* : Collection. Puede añadir tantos objetos en la colección *pathObjects* como sea necesario. Por defecto, las propiedades se clasifican en orden ascendente ("descending" es false). Cada elemento de la colección contiene un objeto estructurado de la siguiente manera:

```4d
{
    "propertyPath": string,


    "descending": boolean

}
```

- *ascOrDesc* : Integer. Se pasa una de las siguientes constantes del tema **Objects and collections**:

  | Constante     | Tipo    | Valor | Comentario                                                                    |
  | ------------- | ------- | ----- | ----------------------------------------------------------------------------- |
  | ck ascending  | Integer | 0     | Los elementos se ordenan de forma ascendente (por defecto) |
  | ck descending | Integer | 1     | Los elementos se ordenan de forma descendente                                 |

  Esta sintaxis sólo ordena los valores escalares de la colección (otros tipos de elementos, como objetos o colecciones, se devuelven desordenados).

Si la colección contiene elementos de diferentes tipos, se agrupan primero por tipo y se ordenan después. Si <em x-id="3">attributePath</em> lleva a una propiedad de objeto que contiene valores de diferentes tipos, primero se agrupan por tipo y se ordenan después.

1. null
2. booleans
3. cadenas
4. numbers
5. objects
6. collections
7. dates

#### Ejemplo 1

Ordenar una colección de números de forma ascendente y descendente:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(Random)
 End for
 $c2:=$c.orderBy(ck ascending)
 $c3:=$c.orderBy(ck descending)
```

#### Ejemplo 2

Ordenar una colección de objetos a partir de una fórmula de texto con nombres de propiedades:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(New object("id";$vCounter;"value";Random))
 End for
 $c2:=$c.orderBy("value desc")
 $c2:=$c.orderBy("value desc, id")
 $c2:=$c.orderBy("value desc, id asc")
```

Ordenar una colección de objetos con una ruta de propiedades:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))

 $c2:=$c.orderBy("phones.p1 asc")
```

#### Ejemplo 3

Ordenar una colección de objetos utilizando una colección de objetos criterio:

```4d
 var $crit; $c; $c2 : COllection
 $crit:=New collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(New object("id";$vCounter;"value";Random))
 End for
 $crit.push(New object("propertyPath";"value";"descending";True))
 $crit.push(New object("propertyPath";"id";"descending";False))
 $c2:=$c.orderBy($crit)
```

Ordenar con una ruta de propiedad:

```4d

 var $crit; $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))
 $crit:=New collection(New object("propertyPath";"phones.p2";"descending";True))
 $c2:=$c.orderBy($crit)
```

<!-- END REF -->

<!-- REF collection.orderByMethod().Desc -->

## .orderByMethod()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 19 R6       | Soporte de fórmula |
| v16 R6      | Añadidos           |

</details>

<!-- REF #collection.orderByMethod().Syntax -->**.orderByMethod**( *formula* : 4D.Function { ; ...*extraParam* : expression } ) : Collection<br/>**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection<!-- END REF -->

<!-- REF #collection.orderByMethod().Params -->

| Parámetros | Tipo                        |                             | Descripción                                                                                                                                                                                                                                         |
| ---------- | --------------------------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function |              ->             | Objeto fórmula                                                                                                                                                                                                                                      |
| methodName | Text                        |              ->             | Nombre de un método                                                                                                                                                                                                                                 |
| extraParam | any                         |              ->             | Parámetro(s) a pasar                                                                                                                                                                                                             |
| Result     | Collection                  | <- | (obligatorio si se ha utilizado un método) *$1.result* (booleano): **true** si la evaluación del valor del elemento tiene éxito, **false** en caso contrario. |

<!-- END REF -->

#### Descripción

Ejemplo

Esta función devuelve una *copia superficial*, lo que significa que los objetos o colecciones de ambas colecciones comparten la misma referencia. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- Comparación

- Colección original con valores rellenados

En la retrolamada, pase un código que compare dos valores y devuelva **true** si el primer valor es menor que el segundo. Puede ofrecer los parámetros *extraParam* a la retrollamada si es necesario.

La retrollamada recibe los siguientes parámetros:

- $1 (objeto), donde:
  - Lanzamiento
  - Lanzamiento
  - $2...$N (cualquier tipo): parámetros adicionales

Si utilizó un método, debe definir el siguiente parámetro:

- Nuevo tamaño de la colección

#### Ejemplo 1

Desea ordenar una colección de cadenas en orden numérico en lugar de orden alfabético:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("33";"4";"1111";"222")
 $c2:=$c.orderBy() //$c2=["1111","222","33","4"], alphabetical order
 $c3:=$c.orderByMethod(Formula(Num($1.value)<Num($1.value2))) // $c3=["4","33","222","1111"]
```

#### Ejemplo 2

Quiere ordenar una colección de cadenas según su longitud:

```4d
 var $fruits; $c2 : Collection
 $fruits:=New collection("Orange";"Apple";"Grape";"pear";"Banana";"fig";"Blackberry";"Passion fruit")
 $c2:=$fruits.orderByMethod(Formula(Length(String($1.value))>Length(String($1.value2))))
  //$c2=[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

#### Ejemplo 3

Ordenar los elementos de la colección por código de caracteres o alfabéticamente:

```4d
var $strings1; $strings2 : Collection
$strings1:=New collection("Alpha";"Charlie";"alpha";"bravo";"Bravo";"charlie")

//utilizando el código de caracteres:
$strings2:=$strings1.orderByMethod(Function(sortCollection);sk character codes)
// result : ["Alpha","Bravo","Charlie","alpha","bravo","charlie"]

//utilizando el lenguaje:
$strings2:=$strings1.orderByMethod(Function(sortCollection);sk strict)
// resultado : ["alpha","Alpha","bravo","Bravo","charlie","Charlie"]
```

text

```4d
Lanzamiento
```

<!-- END REF -->

<!-- REF collection.pop().Desc -->

## .pop()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.pop().Syntax -->**.pop()** : any <!-- END REF -->

<!-- REF #collection.pop().Params -->

| Parámetros | Tipo |                             | Descripción                                                                                      |
| ---------- | ---- | :-------------------------: | ------------------------------------------------------------------------------------------------ |
| Result     | any  | <- | Si el valor calculado < 0, *startFrom* toma el valor 0. |

<!-- END REF -->

#### Descripción

Condición No aplicada a una sentencia

> Esta función modifica la colección original.

Modificaciones

#### Ejemplo

Valor a contar

```4d
Lanzamiento
```

<!-- END REF -->

<!-- REF collection.push().Desc -->

## .push()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.push().Syntax -->**.push**( *element* : any { ;...*elementN* } ) : Collection <!-- END REF -->

<!-- REF #collection.push().Params -->

| Parámetros | Tipo       |                             | Descripción                                            |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------ |
| element    | any        |              ->             | Elemento(s) a añadir a la colección |
| Result     | Collection | <- | Con el siguiente método ***Flatten***: |

<!-- END REF -->

#### Descripción

Considera la @ como un caracter estándar

> Esta función modifica la colección original.

#### Ejemplo 1

```4d
 var $col : Collection
 $col:=New collection(1;2) //$col=[1,2]
 $col.push(3) //$col=[1,2,3]
 $col.push(6;New object("firstname";"John";"lastname";"Smith"))
  //$col=[1,2,3,6,{firstname:John,lastname:Smith}
```

#### Ejemplo 2

Desea ordenar la colección resultante:

```4d
 var $col; $sortedCol : Collection
 $col:=New collection(5;3;9) //$col=[5,3,9]
 $sortedCol:=$col.push(7;50).sort()
  //$col=[5,3,9,7,50]
  //$sortedCol=[3,5,7,9,50]
```

<!-- END REF -->

<!-- REF collection.query().Desc -->

## .query()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones           |
| ----------- | ------------------------ |
| 20 R6       | Ejemplo 1                |
| 17 R5       | Soporte de querySettings |
| v16 R6      | Añadidos                 |

</details>

<!-- REF #collection.query().Syntax -->**.query**( *queryString* : Text ) : Collection<br/>**.query**( *queryString* : Text ; *...value* : any ) : Collection<br/>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->

<!-- REF #collection.query().Params -->

| Parámetros    | Tipo       |                             | Descripción                                                                                                                 |
| ------------- | ---------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Text       |              ->             | Criterio de búsqueda                                                                                                        |
| value         | any        |              ->             | Valor(es) a comparar cuando se utiliza(n) marcador(es) de posición |
| querySettings | Object     |              ->             | Opciones de búsqueda: parámetros, atributos                                                                 |
| Result        | Collection | <- | Descripción                                                                                                                 |

<!-- END REF -->

#### Descripción

La función `.query()` <!-- REF #collection.query().Summary -->devuelve todos los elementos de una colección de objetos que coinciden con las condiciones de búsqueda <!-- END REF -->definidas por *queryString* y (opcionalmente) *value* o *querySettings*. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.

Descripción

> Esta función no modifica la colección original.

#### parámetro queryString

Ejemplo 1

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

donde:

- **propertyPath**: ruta de la propiedad sobre la cual quiere ejecutar la consulta. Este parámetro puede ser un nombre simple (por ejemplo, "país") o cualquier ruta de atributo válida (por ejemplo, "país.nombre".) En el caso de una ruta de atributos de tipo <code>Collection</code>, se utiliza la notación \[ ] para manejar todas las ocurrencias (por ejemplo "niños[ ].edad"). En el caso de una ruta de atributo cuyo tipo es `Collection`, se utiliza la notación `[]` para manejar todas las ocurrencias (por ejemplo `children[].age`).

- **comparator**: símbolo que compara *propertyPath* y *value*. Se soportan los siguientes símbolos:

| Comparación                           | Símbolo(s) | Comentario                                                                                                                                                                                                                                  |
| ------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Igual a                               | =, ==                         | Obtiene los datos coincidentes, admite el comodín (@), no distingue entre mayúsculas de minúsculas ni diacríticas.                                                                          |
|                                       | ===, IS                       | Obtiene los datos coincidentes, considera @ como carácter estándar, no distingue entre mayúsculas de minúsculas ni diacríticas                                                                                                 |
| Diferente de                          | #, !=                         | Soporta el comodín (@). Equivale a "Condición no aplicada en una sentencia" ([ver más abajo](#not-equal-to-in-collections)).                             |
|                                       | !==, IS NOT                   | Considera la @ como un caracter estándar                                                                                                                                                                                       |
| Condición No aplicada a una sentencia | NOT                           | Los paréntesis son obligatorios cuando se utiliza NOT antes de una instrucción que contiene varios operadores. Equivalente a "Not equal to" ([ver abajo](#not-equal-to-in-collections)). |
| Menor que                             | <    |                                                                                                                                                                                                                                             |
| Mayor que                             | >                             |                                                                                                                                                                                                                                             |
| Menor o igual que                     | <=   |                                                                                                                                                                                                                                             |
| Mayor o igual que                     | > =                           |                                                                                                                                                                                                                                             |
| Incluído en                           | IN                            | Devuelve los datos iguales a al menos uno de los valores de una colección o de un conjunto de valores, admite el comodín (@)                                                                                |

- **valor**: valor a comparar con el valor actual de la propiedad de cada elemento de la colección. Puede ser cualquier valor de expresión constante que coincida con la propiedad del tipo de datos del elemento o un [**marcador de posición**](#using-placeholders).
  Al utilizar un valor constante, deben respetarse las siguientes reglas:
  - La constante de tipo **texto** puede pasarse con o sin comillas simples (ver **Uso de comillas** más abajo). Para consultar una cadena dentro de otra cadena (una consulta de tipo "contiene"), utilice el símbolo de comodín (@) en el valor para aislar la cadena a buscar como se muestra en este ejemplo: "@Smith@". Las siguientes palabras claves están prohibidas para las constantes de texto: true, false.
  - Valores constantes de tipo **booleano**: **true** o **false** (Sensible a las mayúsculas y minúsculas).
  - Valores constantes de **tipo numérico**: los decimales se separan con un '.' (punto).
  - Constantes de tipo **date**: formato "YYYY-MM-DD"
  - Constantes **null**: utilizando la palabra clave "null" se encontrarán las propiedades **null** y **undefined**.
  - en el caso de una búsqueda con un comparador IN, *value* debe ser una colección, o los valores que coincidan con el tipo de la ruta del atributo entre \[ ] separados por comas (para las cadenas, los caracteres `"` deben escaparse con `\`).

- **logicalOperator**: utilizado para unir condiciones múltiples en la búsqueda (opcional). Puede utilizar uno de los siguientes operadores lógicos (se puede utilizar el nombre o el símbolo):

| Conjunción | Símbolo(s)                                          |
| ---------- | ---------------------------------------------------------------------- |
| AND        | &, &&, and |
| O          | \|,\|\|, or                                                            |

#### Utilizar comillas

Cuando utilice comillas dentro de las consultas, debe utilizar comillas simples ' ' dentro de la consulta y comillas dobles " " para encerrar toda la consulta, de lo contrario se devuelve un error. Por ejemplo:

```4d
"employee.name = 'smith' AND employee.firstname = 'john'"
```

> Las comillas simples (') no se admiten en los valores buscados, ya que romperían la cadena de búsqueda. Por ejemplo, "comp.name = 'John's pizza' " generará un error. Si necesita buscar en valores con comillas simples, puede considerar el uso de marcadores de posición (ver más abajo).

#### Uso del paréntesis

Puede utilizar paréntesis en la búsqueda para dar prioridad al cálculo. Por ejemplo, puede organizar una búsqueda de la siguiente manera:

```4d
"(employee.age >= 30 OR employee.age <= 65) AND (employee.salary <= 10000 OR employee.status = 'Manager')"
```

#### Uso de marcadores de posición

4D le permite utilizar marcadores de posición para los argumentos *propertyPath* y *value* dentro del parámetro *queryString*. Un marcador es un parámetro que se inserta en las cadenas de búsqueda y que se sustituye por otro valor cuando se evalúa la cadena de búsqueda. El valor de los marcadores se evalúa una vez al principio de la búsqueda; no se evalúa para cada elemento.

Lanzamiento

- **Marcadores de posición indexados**: los parámetros se insertan como `:paramIndex` (por ejemplo ":1", ":2"...) en *queryString* y sus valores correspondientes son proporcionados por la secuencia de parámetros *value*. en *queryString* y sus valores correspondientes son proporcionados por la secuencia de parámetros *value*.

Ejemplo:

```4d
$c:=$myCol.query(":1=:2";"city";"Chicago")
```

- Copia ordenada de la colección (copia superficial)

Ejemplo:

```4d
$o.attributes:={att:"city"}
$o.parameters:={name:"Chicago")
$c:=$myCol.query(":att=:name";$o)
```

Puede mezclar todos los tipos de argumentos en *queryString*. Puede mezclar todos los tipos de argumentos en *queryString*.

- valores directos (sin marcadores),
- marcadores indexados y/o con nombre.

El uso de marcadores de posición en las búsquedas **se recomienda** por las siguientes razones:

1. Evita la inserción de código malicioso: si utiliza directamente variables completadas por el usuario dentro de la cadena de búsqueda, un usuario podría modificar las condiciones de búsqueda introduciendo argumentos de búsqueda adicionales. Por ejemplo, imagine una cadena de búsqueda como:

```4d
 $vquery:="status = 'public' & name = "+myname //el usuario introduce su nombre
 $result:=$col.query($vquery)
```

Esta búsqueda parece segura ya que se filtran los datos no públicos. Sin embargo, si el usuario introduce en el área *myname* algo como *"smith OR status='private'*, la cadena de consulta se modificaría en el paso de interpretación y podría devolver datos privados.

Cuando se utilizan marcadores de posición, no es posible anular las condiciones de seguridad:

```4d
 $result:=$col.query("status='public' & name=:1";myname)
```

En este caso, si el usuario introduce *smith OR status='private'* en el área *myname*, no se interpretará en la cadena de búsqueda, sino que sólo se pasará como valor. La búsqueda de una persona llamada "smith OR status='private'" simplemente fallará.

2. Descripción

3. Permite el uso de variables o expresiones en los argumentos de búsqueda. Ejemplos:

```4d
$result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
$result2:=$col.query("company.name = :1";"John's Pizzas")
```

> El uso de una [**referencia de colección** o **referencia de objeto**](#objeto-o-referencia-de-colección-como-valor) en el parámetro *value* no está soportado con esta sintaxis. Debe utilizar el parámetro [*querySettings*](#querysettings-parameter).

#### Búsqueda de valores null

Cuando se buscan valores null, no se puede utilizar la sintaxis de marcador de posición porque el motor de búsqueda considera null como un valor de comparación invalido. Por ejemplo, si ejecuta la siguiente búsqueda:

```4d
Lanzamiento
```

No obtendrá el resultado esperado porque el valor null será evaluado por 4D como un error resultante de la evaluación del parámetro (por ejemplo, un atributo procedente de otra búsqueda). Para este tipo de búsquedas, debe utilizar la sintaxis de búsqueda directa:

```4d
Lanzamiento
```

#### Lanzamiento

Puede consultar en una colección utilizando una referencia de objeto o una referencia de colección como parámetro *value* a comparar. La consulta coincidirá con los objetos de la colección que se refieran a (apunten a) la misma **instancia** de objeto o de colección.

Para una descripción detallada de los parámetros *queryString* y *value*, consulte la función `dataClass.query()`.

| Comparación  | Símbolo(s) |
| ------------ | ----------------------------- |
| Igual a      | =, ==                         |
| Diferente de | #, !=                         |

Para construir una consulta con un objeto o una referencia de colección, debe utilizar la sintaxis del parámetro *querySettings*. Ejemplo con una referencia de objeto:

```4d
Lanzamiento
```

Para el cálculo sólo se tienen en cuenta los elementos numéricos (se ignoran otros tipos de elementos).

```4d
Tipo
```

#### Parámetro querySettings

En el parámetro *querySettings*, puede pasar un objeto que contenga marcadores de posición de consulta como objetos. Se soportan las siguientes propiedades:

| Propiedad  | Tipo   | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parameters | Object | **Marcadores de posición con nombre para los valores** utilizados en *queryString*. Los valores se expresan como pares propiedad / valor, donde propiedad es el nombre del marcador de posición insertado para un valor en *queryString* o formula (":placeholder") y valor es el valor a comparar. Puede combinar marcadores de posición indexados (valores pasados directamente en parámetros de valor) y valores de marcadores de posición con nombre en la misma búsqueda.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| attributes | Object | **Marcadores de posición con nombre para rutas de atributos** utilizados en la *queryString*. Los atributos se expresan como pares propiedad / valor, donde propiedad es el nombre del marcador de posición insertado para una ruta de atributo en *queryString* (":placeholder"), y valor puede ser una cadena o una colección de cadenas. Cada valor es una ruta que puede designar una propiedad en un objeto de la colección<table><tr><th>Tipo de objeto</th><th>Descripción</th></tr><tr><td>Cadena</td><td>Ruta de acceso del atributo expresado utilizando la notación de punto, por ejemplo, "name" o "user.address.zipCode"</td></tr><tr><td>Colección de cadenas</td><td>Cada cadena de la colección representa un nivel de attributePath, por ejemplo, \["name"] o \["user","address","zipCode"]. El uso de una colección permite realizar consultas sobre atributos con nombres que no se ajustan a la notación de puntos, por ejemplo, \["4Dv17.1", "en/fr"]</td></tr></table>Puede mezclar marcadores de posición indexados (valores pasados directamente en parámetros *value*) y valores de marcador de posición con nombre en la misma consulta. |

> Ejemplo

#### Ejemplo 1

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $c2:=$c.query("name = :1";"Cleveland") //$c2=[{name:Cleveland,zc:35049}]
 $c3:=$c.query("zc > 35040") //$c3=[{name:Cleveland,zc:35049},{name:Clanton,zc:35046},{name:Clanton,zc:35045}]
```

#### Ejemplo 2

```4d
 var $c : Collection
 $c:=New collection
 $c.push(New object("name";"Smith";"dateHired";!22-05-2002!;"age";45))
 $c.push(New object("name";"Wesson";"dateHired";!30-11-2017!))
 $c.push(New object("name";"Winch";"dateHired";!16-05-2018!;"age";36))

 $c.push(New object("name";"Sterling";"dateHired";!10-5-1999!;"age";Null))
 $c.push(New object("name";"Mark";"dateHired";!01-01-2002!))
```

Este ejemplo devuelve las personas cuyo nombre contiene "in":

```4d
 $col:=$c.query("name = :1";"@in@")
  //$col=[{name:Winch...},{name:Sterling...}]
```

Este ejemplo devuelve las personas cuyo nombre no empieza por una cadena de una variable (introducida por el usuario, por ejemplo):

```4d
 $col:=$c.query("name # :1";$aString+"@")
  //if $astring="W"
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}]
```

Este ejemplo devuelve las personas cuya edad no se conoce (propiedad definida como null o indefinida):

```4d
Ejemplo
```

Este ejemplo devuelve las personas contratadas hace más de 90 días:

```4d
La nueva colección compartida
```

#### Ejemplo 3

Búsquedas con fechas:

```4d

$entitySelection:=ds.Employee.query("birthDate > :1";"1970-01-01")
$entitySelection:=ds.Employee.query("birthDate <= :1";Current date-10950)
```

:::info

Descripción

:::

<!-- END REF -->

<!-- REF collection.reduce().Desc -->

## .reduce()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 19 R6       | Soporte de fórmula |
| v16 R6      | Añadidos           |

</details>

<!-- REF #collection.reduce().Syntax -->**.reduce**( *formula* : 4D.Function { ; *initValue* : any { ; *...param* : expression }} ) : any<br/>**.reduce**( *methodName* : Text { ; *initValue* : any { ; *...param* : expression }} ) : any <!-- END REF -->

<!-- REF #collection.reduce().Params -->

| Parámetros | Tipo                                            |                             | Descripción                                                                                                                                                                         |
| ---------- | ----------------------------------------------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function                     |              ->             | Objeto fórmula                                                                                                                                                                      |
| methodName | Text                                            |              ->             | Nombre de un método                                                                                                                                                                 |
| initValue  | Text, Number, Object, Collection, Date, Boolean |              ->             | Valor a utilizar como primer argumento de la primera llamada de *formula* o *methodName*                                                                                            |
| param      | expresión                                       |              ->             | Parámetro(s) a pasar                                                                                                                                             |
| Result     | Text, Number, Object, Collection, Date, Boolean | <- | *formula* (sintaxis recomendada), un [objeto Fórmula](FunctionClass.md) que puede encapsular toda expresión ejecutable, incluyendo funciones y métodos proyecto; |

<!-- END REF -->

#### Descripción

La función `.reduce()` <!-- REF #collection.reduce().Summary -->aplica la *formula* o *callback* *methodName* contra un acumulador y cada elemento de la colección (de izquierda a derecha) para reducirlo a un único valor<!-- END REF -->.

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- Comparación
- Colección original con valores rellenados

Tipo

Puede pasar el valor para inicializar el acumulador en *initValue*. Si se omite, *$1.accumulator* empieza por *Undefined*.

La retrollamada recibe los siguientes parámetros:

- La nueva colección
- Colección compartida que se agrupa con la colección resultante
- Objeto compartido que se agrupa con la colección resultante

La retrollamada define los siguientes parámetros:

- Descripción
- *$1.stop* (boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.

#### Ejemplo 1

```4d
var $c : Collection
$c:=New collection(5;3;5;1;3;4;4;6;2;2)
$r:=$c.reduce(Formula($1.accumulator*=$1.value); 1)  //devuelve 86400
```

#### Ejemplo 2

Este ejemplo permite reducir varios elementos de la colección a uno solo:

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduce(Formula(Flatten)) //$r=[0,1,2,3,4,5,6,7]
```

Con el siguiente método ***Flatten***:

```4d
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->

<!-- REF collection.reduceRight().Desc -->

## .reduceRight()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20          | Añadidos       |

</details>

<!-- REF #collection.reduceRight().Syntax -->**.reduceRight**( *formula* : 4D.Function { ; *initValue* : any { ; *...param* : expression }} ) : any<br/>**.reduceRight**( *methodName* : Text { ; *initValue* : any { ; *...param* : expression }} ) : any <!-- END REF -->

<!-- REF #collection.reduceRight().Params -->

| Parámetros | Tipo                                            |                             | Descripción                                                                                                                                                                         |
| ---------- | ----------------------------------------------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function                     |              ->             | Objeto fórmula                                                                                                                                                                      |
| methodName | Text                                            |              ->             | Nombre de un método                                                                                                                                                                 |
| initValue  | Text, Number, Object, Collection, Date, Boolean |              ->             | Valor a utilizar como primer argumento de la primera llamada de *formula* o *methodName*                                                                                            |
| param      | expresión                                       |              ->             | Parámetro(s) a pasar                                                                                                                                             |
| Result     | Text, Number, Object, Collection, Date, Boolean | <- | *formula* (sintaxis recomendada), un [objeto Fórmula](FunctionClass.md) que puede encapsular toda expresión ejecutable, incluyendo funciones y métodos proyecto; |

<!-- END REF -->

#### Descripción

La función `.reduceRight()` <!-- REF #collection.reduceRight().Summary -->aplica la *formula* o *callback* *methodName* contra un acumulador y cada elemento de la colección (de derecha a izquierda) para reducirlo a un único valor<!-- END REF -->.

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- Comparación
- Colección original con valores rellenados

Tipo

Puede pasar el valor para inicializar el acumulador en *initValue*. Si se omite, *$1.accumulator* empieza por *Undefined*.

La retrollamada recibe los siguientes parámetros:

- La nueva colección
- Colección compartida que se agrupa con la colección resultante
- Objeto compartido que se agrupa con la colección resultante

La retrollamada define los siguientes parámetros:

- Descripción
- *$1.stop* (boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.

#### Ejemplo 1

```4d
Tipo
```

#### Ejemplo 2

Este ejemplo permite reducir varios elementos de la colección a uno solo:

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduceRight(Formula(Flatten)) //$r=[6,7,4,5,2,3,0,1]
```

Con el siguiente método ***Flatten***:

```4d
Ejemplo 4
```

<!-- END REF -->

<!-- REF collection.remove().Desc -->

## .remove()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.remove().Syntax -->**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection <!-- END REF -->

<!-- REF #collection.remove().Params -->

| Parámetros | Tipo       |                             | Descripción                                              |
| ---------- | ---------- | :-------------------------: | -------------------------------------------------------- |
| index      | Integer    |              ->             | Elemento en el que se inicia la eliminación              |
| howMany    | Integer    |              ->             | Número de elementos a eliminar, o 1 elemento si se omite |
| Result     | Collection | <- | Longint                                                  |

<!-- END REF -->

#### Descripción

La función `.remove()` <!-- REF #collection.remove().Summary -->elimina uno o más elementos de la posición *index* especificada en la colección y devuelve la colección editada<!-- END REF -->.

> Esta función modifica la colección original.

Lanzamiento

> Diferente de Si *startFrom* < 0, se considera el desplazamiento desde el final de la colección (*startFrom:=startFrom+length*).

- Ejemplo 3
- Lanzamiento
- Ejemplo 1

En *howMany*, pase el número de elementos a eliminar de *index*. Si no se especifica *howMany*, se elimina un elemento.

Si se intenta eliminar un elemento de una colección vacía, el método no hace nada (no se genera ningún error).

#### Ejemplo

```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d";"e";"f";"g";"h")
 $col.remove(3) // $col=["a","b","c","e","f","g","h"]
 $col.remove(3;2) // $col=["a","b","c","g","h"]
 $col.remove(-8;1) // $col=["b","c","g","h"]
 $col.remove(-3;1) // $col=["b","g","h"]
```

<!-- END REF -->

<!-- REF collection.resize().Desc -->

## .resize()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.resize().Syntax -->**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.resize().Params -->

| Parámetros   | Tipo                                            |                             | Descripción                                                                                 |
| ------------ | ----------------------------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------- |
| size         | Integer                                         |              ->             | Nuevo tamaño de la colección                                                                |
| defaultValue | Number, Text, Object, Collection, Date, Boolean |              ->             | Valor por defecto para llenar nuevos elementos                                              |
| Result       | Collection                                      | <- | o *methodName*, el nombre de un método proyecto (texto). |

<!-- END REF -->

#### Descripción

Ejemplo

> Esta función modifica la colección original.

- Ejemplo 1
- Ejemplo 1

Por defecto, los nuevos elementos se llenan con valores **null**. Puede especificar el valor a llenar en los elementos añadidos utilizando el parámetro *defaultValue*.

#### Ejemplo

```4d
 var $c : Collection
 $c:=New collection
 $c.resize(10) // $c=[null,null,null,null,null,null,null,null,null,null]

 $c:=New collection
 $c.resize(10;0) // $c=[0,0,0,0,0,0,0,0,0,0]

 $c:=New collection(1;2;3;4;5)
 $c.resize(10;New object("name";"X")) //$c=[1,2,3,4,5,{name:X},{name:X},{name:X},{name:X},{name:X}]

 $c:=New collection(1;2;3;4;5)
 $c.resize(2) //$c=[1,2]

```

<!-- END REF -->

<!-- REF collection.reverse().Desc -->

## .reverse()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.reverse().Syntax -->**.reverse( )** : Collection <!-- END REF -->

<!-- REF #collection.reverse().Params -->

| Parámetros | Tipo       |                             | Descripción                                                                                                                                                                         |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Result     | Collection | <- | *formula* (sintaxis recomendada), un [objeto Fórmula](FunctionClass.md) que puede encapsular toda expresión ejecutable, incluyendo funciones y métodos proyecto; |

<!-- END REF -->

#### Descripción

La función `.reverse()` <!-- REF #collection.reverse().Summary --> devuelve una copia profunda de la colección con todos sus elementos en orden inverso<!-- END REF -->. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.

> Esta función no modifica la colección original.

#### Ejemplo

```4d
 var $c; $c2 : Collection
 $c:=New collection(1;3;5;2;4;6)
 $c2:=$c.reverse() //$c2=[6,4,2,5,3,1]
```

<!-- END REF -->

<!-- REF collection.shift().Desc -->

## .shift()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.shift().Syntax -->**.shift()** : any<!-- END REF -->

<!-- REF #collection.shift().Params -->

| Parámetros | Tipo |                             | Descripción                                                                                                                                                        |
| ---------- | ---- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Result     | any  | <- | Obtiene los datos coincidentes, admite el comodín (@), no distingue entre mayúsculas de minúsculas ni diacríticas. |

<!-- END REF -->

#### Descripción

La función `.shift()` <!-- REF #collection.shift().Summary --> elimina el primer elemento de la colección y lo devuelve como resultado de la función<!-- END REF -->.

> Esta función modifica la colección original.

Si la colección está vacía, este método no hace nada.

#### Ejemplo

```4d
 var $c : Collection
 var $val : Variant
 $c:=New collection(1;2;4;5;6;7;8)
 $val:=$c.shift()
  // $val=1
  // $c=[2,4,5,6,7,8]
```

<!-- END REF -->

<!-- REF collection.slice().Desc -->

## .slice()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.slice().Syntax -->**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.slice().Params -->

| Parámetros | Tipo       |                             | Descripción                                    |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------- |
| startFrom  | Integer    |              ->             | Índice de inicio (incluido) |
| end        | Integer    |              ->             | Índice final (no incluido)  |
| Result     | Collection | <- | Ejemplo 3                                      |

<!-- END REF -->

#### Descripción

La función `.slice()` <!-- REF #collection.slice().Summary -->devuelve una porción de una colección en una nueva colección<!-- END REF -->, seleccionada desde el índice *startFrom* hasta el índice *end* (no incluye end). Esta función devuelve una *copia superficial* de la colección. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.

> Esta función no modifica la colección original.

La colección devuelta contiene el elemento especificado por *startFrom* y todos los elementos subsiguientes hasta, pero sin incluir, el elemento especificado por *end*. Si sólo se especifica el parámetro *startFrom*, la colección devuelta contiene todos los elementos desde *startFrom* hasta el último elemento de la colección original.

- Si *startFrom* < 0, se recalcula como *startFrom:=startFrom+length* (se considera el desplazamiento desde el final de la colección).
- Descripción
- Soporte de querySettings
- Este ejemplo permite reducir varios elementos de la colección a uno solo:

#### Ejemplo

```4d
 var $c; $nc : Collection
 $c:=New collection(1;2;3;4;5)
 $nc:=$c.slice(0;3) //$nc=[1,2,3]
 $nc:=$c.slice(3) //$nc=[4,5]
 $nc:=$c.slice(1;-1) //$nc=[2,3,4]
 $nc:=$c.slice(-3;-2) //$nc=[3]
```

<!-- END REF -->

<!-- REF collection.some().Desc -->

## .some()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 19 R6       | Soporte de fórmula |
| v16 R6      | Añadidos           |

</details>

<!-- REF #collection.some().Syntax -->**.some**( { *startFrom* : Integer ; } *formula* : 4D.Function { ; *...param* : any } ) : Boolean<br/>**.some**( { *startFrom* : Integer ; } *methodName* : Text { ; *...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.some().Params -->

| Parámetros | Tipo |     | Descripción |
| ---------- | ---- | :-: | ----------- |

|startFrom |Integer |->|Índice para comenzar la prueba|
|formula|4D.Function|->|Objeto fórmula|
|methodName|Text|->|Nombre de un método|
|param |any |->|Parámetro(s) a pasar|
|Result|Boolean|<-|True si al menos un elemento pasa exitosamente la prueba|

<!-- END REF -->

#### Descripción

La función `.some()` <!-- REF #collection.some().Summary --> devuelve true si al menos un elemento de la colección ha pasado con éxito una prueba implementada en el código *formula* o *methodName* suministrado<!-- END REF -->.

Se designa el código 4D de retrollamada (callback) a ejecutar para evaluar los elementos de la colección utilizando:

- Comparación
- Colección original con valores rellenados

La retrollamada se llama con los parámetros pasados en *param* (opcional). La retrollamada puede efecturar toda prueba, con o sin los parámetros, y debe devolver *true* para cada elemento que cumpla la prueba. Recibe un `Object` en el primer parámetro ($1).

La retrollamada recibe los siguientes parámetros:

- La nueva colección
- Colección compartida que se agrupa con la colección resultante
- Objeto compartido que se agrupa con la colección resultante

Puede definir los siguientes parámetros:

- Expresión a buscar en la colección
- *$1.stop* (boolean, opcional): **true** para detener la retrollamada del método. El valor devuelto es el último calculado.

Descripción

Por defecto, `.some()` comprueba toda la colección. Opcionalmente, puede pasar el índice de un elemento desde el cual iniciar la prueba en *startFrom*.

- Tipo

- Añadidos

- Descripción

#### Ejemplo

Incluído en

```4d
 var $c : Collection
 var $b : Boolean
 $c:=New collection
 $c.push(-5;-3;-1;-4;-6;-2)
 $b:=$c.some(Formula($1.value>0)) // $b=false
 $c.push(1)
 $b:=$c.some(Formula($1.value>0)) // $b=true

 $c:=New collection
 $c.push(1;-5;-3;-1;-4;-6;-2)
 $b:=$c.some(Formula($1.value>0)) //$b=true
 $b:=$c.some(1;Formula($1.value>0)) //$b=false
```

<!-- END REF -->

<!-- REF collection.sort().Desc -->

## .sort()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 19 R6       | Soporte de fórmula |
| v16 R6      | Añadidos           |

</details>

<!-- REF #collection.sort().Syntax -->**.sort**() : Collection<br/>**.sort**( *formula* : 4D.Function { ; *...extraParam* : any } ) : Collection<br/>**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.sort().Params -->

| Parámetros | Tipo                        |                             | Descripción                                                                                 |
| ---------- | --------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------- |
| formula    | 4D.Function |              ->             | Objeto fórmula                                                                              |
| methodName | Text                        |              ->             | Nombre de un método                                                                         |
| extraParam | any                         |              ->             | Parámetros del método                                                                       |
| Result     | Collection                  | <- | o *methodName*, el nombre de un método proyecto (texto). |

<!-- END REF -->

#### Descripción

Ejemplo 2

> Esta función modifica la colección original.

Si se llama a `.sort()` sin parámetros, sólo se ordenan los valores escalares (número, texto, fecha, booleanos). Los elementos se ordenan por defecto de forma ascendente, según su tipo. Si la colección contiene elementos de diferentes tipos, se agrupan primero por tipo y se ordenan después. Si <em x-id="3">attributePath</em> lleva a una propiedad de objeto que contiene valores de diferentes tipos, primero se agrupan por tipo y se ordenan después.

1. null
2. booleans
3. cadenas
4. numbers
5. objects
6. collections
7. dates

Si quiere ordenar los elementos de la colección en algún otro orden o ordenar cualquier tipo de elemento, debe suministrar en *formula* ([objeto Formula](FunctionClass.md)) o *methodName* (Text) una retro llamada que define el orden de clasificación. El valor de retorno debe ser un booleano que indica el orden relativo de los dos elementos: **True** si *$1.value* es menor que *$1.value2*, **False** si *$1.value* es mayor que *$1.value2*. Puede ofrecer parámetros adicionales a la retrollamada si es necesario.

La retrollamada recibe los siguientes parámetros:

- $1 (objeto), donde:
  - Lanzamiento
  - Lanzamiento
- $2...$N (cualquier tipo): parámetros adicionales

Ejemplo

- Una colección se inicializa con:

#### Ejemplo 1

```4d
 var $col; $col2 : Collection
 $col:=New collection("Tom";5;"Mary";3;"Henry";1;"Jane";4;"Artie";6;"Chip";2)
 $col2:=$col.sort() // $col2=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
  // $col=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
```

#### Ejemplo 2

```4d
 var $col; $col2 : Collection
 $col:=New collection(10;20)
 $col2:=$col.push(5;3;1;4;6;2).sort() //$col2=[1,2,3,4,5,6,10,20]
```

#### Ejemplo 3

```4d
Descripción
```

<!-- END REF -->

<!-- REF collection.sum().Desc -->

## .sum()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.sum().Syntax -->**.sum**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.sum().Params -->

| Parámetros   | Tipo |                             | Descripción                                                                                 |
| ------------ | ---- | :-------------------------: | ------------------------------------------------------------------------------------------- |
| propertyPath | Text |              ->             | Ruta de la propiedad del objeto que se utilizará para el cálculo                            |
| Result       | Real | <- | o *methodName*, el nombre de un método proyecto (texto). |

<!-- END REF -->

#### Descripción

Añadidos

Para el cálculo sólo se tienen en cuenta los elementos numéricos (se ignoran otros tipos de elementos).

Uso del paréntesis

Para más información sobre las colecciones compartidas, por favor consulte la página [Objetos y colecciones compartidas](Concepts/shared.md).

- la colección está vacía,
- la colección no contiene elementos numéricos,
- Lanzamiento

#### Ejemplo 1

```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection(10;20;"Monday";True;2)
 $vSum:=$col.sum() //32
```

#### Ejemplo 2

```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500,5))
 $vSum:=$col.sum("salary") //$vSum=70500,5
```

<!-- END REF -->

<!-- REF collection.unshift().Desc -->

## .unshift()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| v16 R6      | Añadidos       |

</details>

<!-- REF #collection.unshift().Syntax -->**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.unshift().Params -->

| Parámetros | Tipo                                   |                             | Descripción                                                          |
| ---------- | -------------------------------------- | :-------------------------: | -------------------------------------------------------------------- |
| value      | Text, Number, Object, Collection, Date |              ->             | Valor(es) a insertar al principio de la colección |
| Result     | Real                                   | <- | Colección que contiene los elementos añadidos                        |
|            |                                        |                             |                                                                      |

<!-- END REF -->

#### Descripción

La función `.unshift()` <!-- REF #collection.unshift().Summary -->inserta el *valor*(es) dado al principio de la colección <!-- END REF -->y devuelve la colección modificada.

> Esta función modifica la colección original.

Si se pasan varios valores, se insertan todos a la vez, lo que significa que aparecen en la colección resultante en el mismo orden que en la lista de argumentos.

#### Ejemplo

```4d
 var $c : Collection
 $c:=New collection(1;2)
 $c.unshift(4) // $c=[4,1,2]
 $c.unshift(5) //$c=[5,4,1,2]
 $c.unshift(6;7) // $c=[6,7,5,4,1,2]
```

<!-- END REF -->
