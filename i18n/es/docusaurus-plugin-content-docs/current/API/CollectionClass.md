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
 var $colVar : Collection //creación de una variable 4D de tipo colección
 $colVar:=New collection //inicialización de la colección y asignación a la variable 4D
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
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)<br/><!-- INCLUDE #collection.reverse().Summary -->                   |
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)<br/><!-- INCLUDE #collection.shift().Summary -->                         |
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)<br/><!-- INCLUDE #collection.slice().Summary -->                         |
| [<!-- INCLUDE #collection.some().Syntax -->](#some)<br/><!-- INCLUDE #collection.some().Summary -->                            |
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)<br/><!-- INCLUDE #collection.sort().Summary -->                            |
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)<br/><!-- INCLUDE #collection.sum().Summary -->                               |
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)<br/><!-- INCLUDE #collection.unshift().Summary -->                   |

## `New collection`

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New collection.Params -->

| Parámetros | Tipo                                                                    |     | Descripción                                |
| ---------- | ----------------------------------------------------------------------- | :-: | ------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer |  -> | Valor(es) de collection |
| Result     | Collection                                                              |  <- | La nueva colección                         |

<!-- END REF -->

#### Descripción

El comando `New collection` <!-- REF #_command_.New collection.Summary --> crea una nueva colección vacía o precargada<!-- END REF --> y devuelve su referencia.

Si no se pasa ningún parámetro, `New collection` crea una colección vacía y devuelve su referencia.

Debe asignar la referencia devuelta a una variable 4D del tipo Collection.

> Keep in mind that `var : Collection` or `C_COLLECTION` statements declare a variable of the `Collection` type but do not create any collection.

Opcionalmente, puede prellenar la nueva colección pasando uno o varios _valores_ como parámetro(s).

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

| Parámetros | Tipo                                                                |     | Descripción                                              |
| ---------- | ------------------------------------------------------------------- | :-: | -------------------------------------------------------- |
| value      | Number, Text, Date, Time, Boolean, Shared object, Shared collection |  -> | Valor(es) de la collection compartida |
| Result     | Collection                                                          |  <- | La nueva colección compartida                            |

<!-- END REF -->

#### Descripción

El comando `New shared collection` <!-- REF #_command_.New shared collection.Summary --> crea una nueva colección compartida vacía o precargada<!-- END REF --> y devuelve su referencia.

La adición de un elemento a esta colección utilizando el operador de asignación debe estar rodeada por la estructura [`Use...End use`](Concepts/shared.md#useend-use), de lo contrario se genera un error (esto no es necesario cuando se añaden elementos utilizando funciones como [`push()`](#push) o [`map()`](#map) porque activan automáticamente una estructura interna _Use...End use_). Sin embargo, es posible leer un elemento sin una estructura _Use...End use_.

:::info

Para más información sobre las colecciones compartidas, por favor consulte la página [Objetos y colecciones compartidas](Concepts/shared.md).

:::

Si no se pasa ningún parámetro, `New shared collection` crea una colección compartida vacía y devuelve su referencia.

Debe asignar la referencia devuelta a una variable 4D del tipo Collection.

> Keep in mind that `var : Collection` or `C_COLLECTION` statements declare a variable of the `Collection` type but do not create any collection.

Optionally, you can prefill the new shared collection by passing one or several _value_(s) as parameter(s). De lo contrario, puede añadir o modificar elementos posteriormente por asignación notación objeto (ver ejemplo).

If the new element index is beyond the last existing element of the shared collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

Puede pasar cualquier número de valores de los siguientes tipos soportados:

- number (real, longint...). Los valores numéricos se almacenan siempre como reales.
- text
- boolean
- date
- time (almacenado como número de milisegundos - real)
- null
- shared object(\*)
- shared collection(\*)
  \> Unlike standard (not shared) collections, shared collections do not support pictures, pointers, and objects or collections that are not shared.

:::note

Esta función modifica la colección original.

:::

(\*)Cuando un objeto o colección compartida se añade a una colección compartida, comparten el mismo _identificador de bloqueo_. For more information on this point, refer to [4D Doc Center](https://doc.4d.com).

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

| Parámetros | Tipo    |     | Descripción                    |
| ---------- | ------- | :-: | ------------------------------ |
| index      | Integer |  -> | Índice del elemento a devolver |
| Result     | any     |  <- | El elemento en ese índice      |

<!-- END REF -->

#### Descripción

The `.at()` function <!-- REF #collection.at().Summary -->returns the item at position _index_, allowing for positive and negative integers<!-- END REF -->.

> Esta función no modifica la colección original.

Los números enteros negativos cuentan hacia atrás desde el último elemento de la colección.

The function returns Undefined if _index_ is beyond collection limits.

#### Ejemplo

```4d
var $col : Collection
$col:=New collection(10; 20; 30; 40; 50)
$element:=$col.at(0) // 10
$element:=$col.at(1) // 20
$element:=$col.at(-1) // 50
$element:=$col.at(-2) // 40
$element:=$col.at(10) // undefined
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

| Parámetros   | Tipo            |     | Descripción                                                                   |
| ------------ | --------------- | :-: | ----------------------------------------------------------------------------- |
| propertyPath | Text            |  -> | Ruta de la propiedad del objeto que se utilizará para el cálculo              |
| Result       | Real, Undefined |  <- | Media aritmética (promedio) de los valores de la colección |

<!-- END REF -->

#### Descripción

The `.average()` function <!-- REF #collection.average().Summary -->returns the arithmetic mean (average) of defined values in the collection instance<!-- END REF -->.

Para el cálculo sólo se tienen en cuenta los elementos numéricos (se ignoran otros tipos de elementos).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property to take into account.

`.average()` returns `undefined` if:

- la colección está vacía,
- la colección no contiene elementos numéricos,
- _propertyPath_ is not found in the collection.

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

| Parámetros | Tipo       |     | Descripción                                           |
| ---------- | ---------- | :-: | ----------------------------------------------------- |
| Result     | Collection |  <- | Colección original con todos los elementos eliminados |

<!-- END REF -->

#### Descripción

The `.clear()` function <!-- REF #collection.clear().Summary -->removes all elements from the collection instance and returns an empty collection<!-- END REF -->.

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

| Parámetros | Tipo       |     | Descripción                                                                                                              |
| ---------- | ---------- | :-: | ------------------------------------------------------------------------------------------------------------------------ |
| col2       | Collection |  -> | Colección a combinar                                                                                                     |
| index      | Integer    |  -> | Posición a la que se deben combinar los elementos de inserción en la colección (por defecto=length+1) |
| Result     | Collection |  <- | Colección original que contiene elementos combinados                                                                     |

<!-- END REF -->

#### Descripción

The `.combine()` function <!-- REF #collection.combine().Summary -->inserts _col2_ elements at the end or at the specified _index_ position in the collection instance and returns the edited collection<!-- END REF -->. Unlike the `.insert()` function, `.combine()` adds each value of _col2_ in the original collection, and not as a single collection element.

> Esta función modifica la colección original.

By default, _col2_ elements are added at the end of the orginal collection. You can pass in _index_ the position where you want the _col2_ elements to be inserted in the collection.

> **Warning**: Keep in mind that collection elements are numbered from 0.

- If _index_ > the length of the collection, the actual starting _index_ will be set to the length of the collection.
- If _index_ < 0, it is recalculated as _index:=index+length_ (it is considered as the offset from the end of the collection).
- If the calculated value is negative, _index_ is set to 0.

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

| Parámetros | Tipo                                                           |     | Descripción                                                                                                                    |
| ---------- | -------------------------------------------------------------- | :-: | ------------------------------------------------------------------------------------------------------------------------------ |
| value      | Number, Text, Object, Collection, Date, Time, Boolean, Picture |  -> | Valores a concatenar. If _value_ is a collection, all collection elements are added to the original collection |
| Result     | Collection                                                     |  <- | Nueva colección con valor(es) añadido(s) a la colección original                         |

<!-- END REF -->

#### Descripción

The `.concat()` function <!-- REF #collection.concat().Summary -->returns a new collection containing the elements of the original collection with all elements of the _value_ parameter added to the end<!-- END REF -->.

> Esta función no modifica la colección original.

If _value_ is a collection, all its elements are added as new elements at the end of the original collection. If _value_ is not a collection, it is added itself as a new element.

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

| Lanzamiento | Modificaciones                                                       |
| ----------- | -------------------------------------------------------------------- |
| 18 R3       | Nueva opción _ck shared_. New _groupWith_ parameters |
| v16 R6      | Añadidos                                                             |

</details>

<!-- REF #collection.copy().Syntax -->**.copy**() : Collection<br/>**.copy**( *option* : Integer ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->

<!-- REF #collection.copy().Params -->

| Parámetros   | Tipo       |     | Descripción                                                                                                                         |
| ------------ | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------------------- |
| option       | Integer    |  -> | `ck resolve pointers`: resolve pointers before copying,<br/>`ck shared`: return a shared collection |
| groupWithCol | Collection |  -> | Colección compartida que se agrupa con la colección resultante                                                                      |
| groupWithObj | Object     |  -> | Objeto compartido que se agrupa con la colección resultante                                                                         |
| Result       | Collection |  <- | Copia profunda de la colección original                                                                                             |

<!-- END REF -->

#### Descripción

The `.copy()` function <!-- REF #collection.copy().Summary --> returns a deep copy of the collection instance<!-- END REF -->._**Deep copy**_ means that objects or collections within the original collection are duplicated and do not share any reference with the returned collection.

> Esta función no modifica la colección original.

If passed, the _option_ parameter can contain one of the following constants (or both):

| option                | Descripción                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | Si la colección original contiene valores de tipo puntero, por defecto la copia también contiene los punteros. However, you can resolve pointers when copying by passing the `ck resolve pointers` constant. En este caso, cada puntero presente en la colección se evalúa al copiar y se utiliza su valor desreferenciado.                                     |
| `ck shared`           | By default, `copy()` returns a regular (not shared) collection, even if the command is applied to a shared collection. Pass the `ck shared` constant to create a shared collection. In this case, you can use the _groupWith_ parameter to associate the shared collection with another collection or object (see below). |

The _groupWithCol_ or _groupWithObj_ parameters allow you to designate a collection or an object with which the resulting collection should be associated.

:::note

Los objetos Datastore, dataclass y entity no son copiables. If `.copy()` is called with them, `Null` values are returned.

:::

#### Ejemplo 1

We want to copy the _$lastnames_ regular (non shared) collection into the _$sharedObject_ shared object. To do this, we must create a shared copy of the collection (_$sharedLastnames_).

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

We want to combine _$sharedColl1_ and _$sharedColl2_. Dado que pertenecen a diferentes grupos compartidos, una combinación directa daría lugar a un error. Therefore, we must make a shared copy of _$sharedColl1_ and designate _$sharedColl2_ as a shared group for the copy.

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

We have a regular collection (_$lastnames_) and we want to put it in the **Storage** of the application. To do this, we must create a shared copy beforehand (_$sharedLastnames_).

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

This example illustrates the use of the `ck resolve pointers` option:

```4d
 var $col : Collection
 var $p : Pointer
 $p:=->$what

 $col:=New collection
 $col.push(New object("alpha";"Hello";"num";1))
 $col.push(New object("beta";"You";"what";$p))

 $col2:=$col.copy()
 $col2[1].beta:="World!"
 ALERT($col[0].alpha+" "+$col2[1].beta) //muestra "Hello World!"

 $what:="You!"
 $col3:=$col2.copy(ck resolve pointers)
 ALERT($col3[0].alpha+" "+$col3[1].what) //muestra "Hello You!"
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

| Parámetros   | Tipo |     | Descripción                                                      |
| ------------ | ---- | :-: | ---------------------------------------------------------------- |
| propertyPath | Text |  -> | Ruta de la propiedad del objeto que se utilizará para el cálculo |
| Result       | Real |  <- | Número de elementos en la colección                              |

<!-- END REF -->

#### Descripción

The `.count()` function <!-- REF #collection.count().Summary -->returns the number of non-null elements in the collection<!-- END REF -->.

If the collection contains objects, you can pass the _propertyPath_ parameter. In this case, only elements that contain the _propertyPath_ are taken into account.

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

| Parámetros   | Tipo                                            |     | Descripción                                                      |
| ------------ | ----------------------------------------------- | :-: | ---------------------------------------------------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection |  -> | Valor a contar                                                   |
| propertyPath | Text                                            |  -> | Ruta de la propiedad del objeto que se utilizará para el cálculo |
| Result       | Real                                            |  <- | Número de ocurrencias del valor                                  |

<!-- END REF -->

#### Descripción

The `.countValues()` function <!-- REF #collection.countValues().Summary -->returns the number of times value is found in the collection<!-- END REF -->.

You can pass in _value_:

- un valor escalar (texto, número, booleano, fecha),
- una referencia de objeto o de colección.

For an element to be found, the type of _value_ must be equivalent to the type of the element; the method uses the equality operator.

The optional _propertyPath_ parameter allows you to count values inside a collection of objects: pass in _propertyPath_ the path of the property whose values you want to count.

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

| Lanzamiento | Modificaciones               |
| ----------- | ---------------------------- |
| 20          | Support of `ck count values` |
| v16 R6      | Añadidos                     |

</details>

<!-- REF #collection.distinct().Syntax -->**.distinct**( {*options* : Integer} ) : Collection<br/>**.distinct**( *propertyPath* : Text {; *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.distinct().Params -->

| Parámetros   | Tipo       |     | Descripción                                             |
| ------------ | ---------- | :-: | ------------------------------------------------------- |
| propertyPath | Text       |  -> | Ruta del atributo cuyos valores distintos desea obtener |
| options      | Integer    |  -> | `ck diacritical`, `ck count values`                     |
| Result       | Collection |  <- | Nueva colección con sólo valores distintos              |

<!-- END REF -->

#### Descripción

The `.distinct()` function <!-- REF #collection.distinct().Summary -->returns a collection containing only distinct (different) values from the original collection<!-- END REF -->.

> Esta función no modifica la colección original.

La colección devuelta se clasifica automáticamente. **Null** values are not returned.

If the collection contains objects, you can pass the _propertyPath_ parameter to indicate the object property whose distinct values you want to get.

In the _options_ parameter, you can pass one or a combination of the following constants:

| Constante         | Valor | Comentario                                                                                                                                                                                                                               |
| ----------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck diacritical`  | 8     | La evaluación distingue entre mayúsculas y minúsculas y diferencia los caracteres acentuados. Por defecto si se omite, se realiza una evaluación no diacrítica                                                           |
| `ck count values` | 32    | Devuelve el conteo de elementos para cada valor distinto. When this option is passed, `.distinct()` returns a collection of objects containing a pair of `{"value":*value*;"count":*count*}` attributes. |

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

| Parámetros  | Tipo       |     | Descripción                                                                                         |
| ----------- | ---------- | :-: | --------------------------------------------------------------------------------------------------- |
| collection2 | Collection |  -> | Colección a comparar                                                                                |
| option      | Integer    |  -> | `ck diacritical`: diacritical evaluation ("A" # "a" for example) |
| Result      | Boolean    |  <- | True si las colecciones son idénticas, false en caso contrario                                      |

<!-- END REF -->

#### Descripción

The `.equal()` function <!-- REF #collection.equal().Summary -->recursively compares the contents of the collection and _collection2_ (deep comparison)<!-- END REF -->and returns **true** if they are identical.

Por defecto, se realiza una evaluación no diacrítica. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `ck diacritical` constant in the option parameter.

> Elements with **Null** values are not equal to Undefined elements.

:::note

A recursive comparison of collections can be time-consuming if the collection is large and deep. If you only want to compare two collection references, you may consider using the [`=` comparison operator for collection references](../Concepts/dt_collection.md#collection-operators).

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

| Parámetros | Tipo                        |     | Descripción                                                          |
| ---------- | --------------------------- | :-: | -------------------------------------------------------------------- |
| startFrom  | Integer                     |  -> | Índice para iniciar la prueba en                                     |
| formula    | 4D.Function |  -> | Objeto fórmula                                                       |
| methodName | Text                        |  -> | Nombre de un método                                                  |
| param      | any                         |  -> | Parameter(s) to pass to _formula_ or _methodName_ |
| Result     | Boolean                     |  <- | True si todos los elementos han pasado la prueba con éxito           |

<!-- END REF -->

#### Descripción

The `.every()` function <!-- REF #collection.every().Summary -->returns **true** if all elements in the collection successfully passed a test implemented in the provided _formula_ object or _methodName_ method<!-- END REF -->.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for every element fulfilling the test. It receives an `Object` in first parameter ($1).

La retrollamada recibe los siguientes parámetros:

- in _$1.value_: element value to be evaluated
- en _$2_: param
- en _$N..._: paramN...

Puede definir los siguientes parámetros:

- (mandatory if you used a method) _$1.result_ (Boolean): **true** if the element value evaluation is successful, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. El valor devuelto es el último calculado.

In all cases, at the point when the `.every()` function encounters the first collection element evaluated to **false**, it stops calling the callback and returns **false**.

By default, `.every()` tests the whole collection. Optionally, you can pass in _startFrom_ the index of the element from which to start the test.

- If _startFrom_ >= the collection's length, **false** is returned, which means the collection is not tested.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection ( _startFrom:=startFrom+length_).
- If _startFrom_ = 0, the whole collection is searched (default).

#### Ejemplo 1

```4d
var $c : Collection  
var $b : Boolean
var $f : 4D.Function

$f:=Formula($1.value>0)
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f) //devuelve true
$c.push(-1)
$b:=$c.every($f) //devuelve false
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

| Parámetros   | Tipo       |     | Descripción                                                                                                                                                                                           |
| ------------ | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text       |  -> | Ruta de la propiedad del objeto cuyos valores deben ser extraídos a la nueva colección                                                                                                                |
| targetpath   | Text       |  -> | Ruta de la propiedad de destino o nombre de la propiedad                                                                                                                                              |
| option       | Integer    |  -> | `ck keep null`: include null properties in the returned collection (ignored by default). Parameter ignored if _targetPath_ passed. |
| Result       | Collection |  <- | Nueva colección que contiene los valores extraídos                                                                                                                                                    |

<!-- END REF -->

#### Descripción

The `.extract()` function <!-- REF #collection.extract().Summary -->creates and returns a new collection containing _propertyPath_ values extracted from the original collection of objects<!-- END REF -->.

> Esta función no modifica la colección original.

The contents of the returned collection depends on the _targetPath_ parameter:

- If the _targetPath_ parameter is omitted, `.extract()` populates the new collection with the _propertyPath_ values of the original collection.

  By default, elements for which _propertyPath_ is null or undefined are ignored in the resulting collection. You can pass the `ck keep null` constant in the _option_ parameter to include these values as null elements in the returned collection.

- If one or more _targetPath_ parameter(s) are passed (corresponding to one or more _propertyPath_ parameter(s)), `.extract()` populates the new collection with the _propertyPath_ properties and each element of the new collection is an object with _targetPath_ properties filled with the matching _propertyPath_ properties. Null values are kept (_option_ parameter is ignored with this syntax).

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

| Parámetros | Tipo                                            |     | Descripción                                    |
| ---------- | ----------------------------------------------- | :-: | ---------------------------------------------- |
| value      | number, Text, Collection, Object, Date, Boolean |  -> | Valor a asignar                                |
| startFrom  | Integer                                         |  -> | Índice de inicio (incluido) |
| end        | Integer                                         |  -> | Índice final (no incluido)  |
| Result     | collection                                      |  <- | Colección original con valores rellenados      |

<!-- END REF -->

#### Descripción

The `.fill()` function <!-- REF #collection.fill().Summary -->fills the collection with the specified _value_, optionally from _startFrom_ index to _end_ index, and returns the resulting collection<!-- END REF -->.

> Esta función modifica la colección original.

- If the _startFrom_ parameter is omitted, _value_ is set to all collection elements (_startFrom_=0).
- If the _startFrom_ parameter is passed and _end_ omitted, _value_ is set to collection elements starting at _startFrom_ to the last element of the collection (_end_=length).
- If both the _startFrom_ parameter and _end_ are passed, _value_ is set to collection elements starting at _startFrom_ to the element _end_.

En caso de incoherencia, se aplican las siguientes reglas:

- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the collection). If the calculated value is negative, _startFrom_ is set to 0.
- If _end_ < 0 , it is recalculated as _end:=end+length_.
- If _end_ < _startFrom_ (passed or calculated values), the method does nothing.

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

| Parámetros | Tipo                        |     | Descripción                                                                             |
| ---------- | --------------------------- | :-: | --------------------------------------------------------------------------------------- |
| formula    | 4D.Function |  -> | Objeto fórmula                                                                          |
| methodName | Text                        |  -> | Nombre de un método                                                                     |
| param      | any                         |  -> | Parameter(s) to pass to _formula_ or _methodName_                    |
| Result     | Collection                  |  <- | Nueva colección que contiene elementos filtrados (copia superficial) |

<!-- END REF -->

#### Descripción

The `.filter()` function <!-- REF #collection.filter().Summary -->returns a new collection containing all elements of the original collection for which the _formula_ or _methodName_ result is **true**<!-- END REF -->. This function returns a _**shallow copy**_, which means that objects or collections in both collections share the same reference. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para filtrar los elementos de la colección utilizando:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional) and an object in first parameter (_$1_). The callback can perform any test, with or without the parameter(s) and must return **true** for each element fulfilling the condition and thus, to push to the new collection.

La retrollamada recibe los siguientes parámetros:

- in _$1.value_: element value to be evaluated
- en _$2_: param
- en _$N..._: paramN...

Puede definir los siguientes parámetros:

- _$1.result_ (Boolean): **true** if the element value matches the filter condition and must be kept, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. El valor devuelto es el último calculado.

:::note

When using _methodName_ as callback, and if the method does not return any value, `.filter()` will look at the property _$1.result_ that you must set to **true** for each element fulfilling the condition.

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

| Parámetros | Tipo                        |     | Descripción                                                          |
| ---------- | --------------------------- | :-: | -------------------------------------------------------------------- |
| startFrom  | Integer                     |  -> | Índice para iniciar la búsqueda en                                   |
| formula    | 4D.Function |  -> | Objeto fórmula                                                       |
| methodName | Text                        |  -> | Nombre de un método                                                  |
| param      | any                         |  -> | Parameter(s) to pass to _formula_ or _methodName_ |
| Result     | any                         |  <- | Primer valor encontrado, o Undefined si no se encuentra              |

<!-- END REF -->

#### Descripción

The `.find()` function <!-- REF #collection.find().Summary -->returns the first value in the collection for which _formula_ or _methodName_ result, applied on each element, returns **true**<!-- END REF -->.

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for the first element fulfilling the condition. It receives an `Object` in first parameter ($1).

La retrollamada recibe los siguientes parámetros:

- in _$1.value_: element value to be evaluated
- en _$2_: param
- en _$N..._: paramN...

Puede definir los siguientes parámetros:

- (mandatory if you used a method) _$1.result_ (Boolean): **true** if the element value matches the search condition, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. El valor devuelto es el último calculado.

By default, `.find()` searches in the whole collection. Optionally, you can pass in _startFrom_ the index of element from which to start the search.

- If _startFrom_ >= the collection's length, -1 is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_).
  **Note**: Even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

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

| Parámetros | Tipo                        |     | Descripción                                                          |
| ---------- | --------------------------- | :-: | -------------------------------------------------------------------- |
| startFrom  | Integer                     |  -> | Índice para iniciar la búsqueda en                                   |
| formula    | 4D.Function |  -> | Objeto fórmula                                                       |
| methodName | Text                        |  -> | Nombre de un método                                                  |
| param      | any                         |  -> | Parameter(s) to pass to _formula_ or _methodName_ |
| Result     | Integer                     |  <- | Índice del primer valor encontrado, o -1 si no se encuentra          |

<!-- END REF -->

#### Descripción

The `.findIndex()` function <!-- REF #collection.findIndex().Summary -->returns the index, in the collection, of the first value for which _formula_ or _methodName_, applied on each element, returns **true**<!-- END REF -->.

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for the first element fulfilling the condition. It receives an `Object` in first parameter ($1).

La retrollamada recibe los siguientes parámetros:

- in _$1.value_: element value to be evaluated
- en _$2_: param
- en _$N..._: paramN...

Puede definir los siguientes parámetros:

- (mandatory if you used a method) _$1.result_ (Boolean): **true** if the element value matches the search condition, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. El valor devuelto es el último calculado.

By default, `.findIndex()` searches in the whole collection. Optionally, you can pass in _startFrom_ the index of element from which to start the search.

- If _startFrom_ >= the collection's length, -1 is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_).
  **Note**: Even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

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

| Parámetros | Tipo |     | Descripción                     |
| ---------- | ---- | :-: | ------------------------------- |
| Result     | any  |  <- | Primer elemento de la colección |

<!-- END REF -->

#### Descripción

The `.first()` function <!-- REF #collection.first().Summary -->returns the first element of the collection<!-- END REF -->.

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

| Parámetros | Tipo       |     | Descripción                                                                                         |
| ---------- | ---------- | :-: | --------------------------------------------------------------------------------------------------- |
| depth      | Integer    |  -> | A qué profundidad debe aplanarse una estructura de colección anidada. Por defecto=1 |
| Result     | Collection |  <- | Colección aplanada                                                                                  |

<!-- END REF -->

#### Descripción

The `.flat()` function <!-- REF #collection.flat().Summary -->creates a new collection with all sub-collection elements concatenated into it recursively up to the specified _depth_<!-- END REF -->.

By default, if the _depth_ parameter is omitted, only the first level of the nested collection structure will be flattened.

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

| Parámetros | Tipo                        |     | Descripción                                                            |
| ---------- | --------------------------- | :-: | ---------------------------------------------------------------------- |
| formula    | 4D.Function |  -> | Objeto fórmula                                                         |
| methodName | Text                        |  -> | Nombre de un método                                                    |
| param      | any                         |  -> | Parameter(s) to pass to _formula_ or _methodName_   |
| Result     | Collection                  |  <- | Colección de valores transformados y aplanados en una profundidad de 1 |

<!-- END REF -->

#### Descripción

The `.flatMap()` function <!-- REF #collection.flatMap().Summary -->creates a new collection based upon the result of the call of the _formula_ 4D function or _methodName_ method on each element of the original collection and flattened by a depth of 1<!-- END REF -->. Optionally, you can pass parameters to _formula_ or _methodName_ using the _param_ parameter(s).

This function is identical to a [`map()`](#map) call followed by a [`flat()`](#flat) call of depth 1.

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback is called with the parameter(s) passed in <em x-id="3">param</em> (optional). It receives an `Object` in first parameter ($1).

La retrollamada recibe los siguientes parámetros:

- in _$1.value_: element value to be evaluated
- en _$2_: param
- en _$N..._: paramN...

Puede definir los siguientes parámetros:

- (mandatory if you used a method) _$1.result_ (any type): new transformed value to add to the resulting collection
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. El valor devuelto es el último calculado.

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

| Parámetros | Tipo      |     | Descripción                                   |
| ---------- | --------- | :-: | --------------------------------------------- |
| toSearch   | expresión |  -> | Expresión a buscar en la colección            |
| startFrom  | Integer   |  -> | Índice para iniciar la búsqueda en            |
| Result     | Boolean   |  <- | True if _toSearch_ is found in the collection |

<!-- END REF -->

#### Descripción

The `.includes()` function <!-- REF #collection.includes().Summary -->returns True if the _toSearch_ expression is found among collection elements, otherwise False<!-- END REF -->.

> Esta función no modifica la colección original.

In _toSearch_, pass the expression to find in the collection. Puede pasar:

- un valor escalar (texto, número, booleano, fecha),
- el valor null,
- una referencia de objeto o de colección.

_toSearch_ must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in _startFrom_.

- If _startFrom_ >= collection's length, False is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_). Note that even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

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

| Parámetros | Tipo      |     | Descripción                                                                        |
| ---------- | --------- | :-: | ---------------------------------------------------------------------------------- |
| toSearch   | expresión |  -> | Expresión a buscar en la colección                                                 |
| startFrom  | Integer   |  -> | Índice para iniciar la búsqueda en                                                 |
| Result     | Integer   |  <- | Índice de la primera ocurrencia de toSearch en la colección, -1 si no se encuentra |

<!-- END REF -->

#### Descripción

The `.indexOf()` function <!-- REF #collection.indexOf().Summary -->searches the _toSearch_ expression among collection elements and returns the index of the first found occurrence, or -1 if it was not found<!-- END REF -->.

> Esta función no modifica la colección original.

In _toSearch_, pass the expression to find in the collection. Puede pasar:

- un valor escalar (texto, número, booleano, fecha),
- el valor null,
- una referencia de objeto o de colección.

_toSearch_ must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in _startFrom_.

- If _startFrom_ >= the collection's length, -1 is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_).
  **Note**: Even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

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

| Parámetros  | Tipo       |     | Descripción                                                                                                                 |
| ----------- | ---------- | :-: | --------------------------------------------------------------------------------------------------------------------------- |
| queryString | Text       |  -> | Criterio de búsqueda                                                                                                        |
| value       | any        |  -> | Valor(es) a comparar cuando se utiliza(n) marcador(es) de posición |
| Result      | Collection |  <- | Element index(es) matching queryString in the collection                                                 |

<!-- END REF -->

#### Descripción

The `.indices()` function works exactly the same as the [`.query()`](#query) function but <!-- REF #collection.indices().Summary -->returns indexes, in the original collection, of object collection elements that match the _queryString_ search conditions<!-- END REF -->, and not elements themselves. Los índices se devuelven en orden ascendente.

> Esta función no modifica la colección original.

The _queryString_ parameter uses the following syntax:

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

For a detailed description of the _queryString_ and _value_ parameters, please refer to the `dataClass.query()` function.

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

| Parámetros | Tipo       |     | Descripción                                              |
| ---------- | ---------- | :-: | -------------------------------------------------------- |
| index      | Integer    |  -> | Dónde insertar el elemento                               |
| element    | any        |  -> | Elemento a insertar en la colección                      |
| Result     | Collection |  <- | Colección original que contiene los elementos insertados |

<!-- END REF -->

#### Descripción

The `.insert()` function <!-- REF #collection.insert().Summary --> inserts _element_ at the specified _index_ position in the collection instance and returns the edited collection<!-- END REF -->.

> Esta función modifica la colección original.

In _index_, pass the position where you want the element to be inserted in the collection.

> **Warning**: Keep in mind that collection elements are numbered from 0.

- If _index_ > the length of the collection, actual starting index will be set to the length of the collection.
- If _index_ <0, it is recalculated as _index:=index+length_ (it is considered as the offset from the end of the collection).
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

| Parámetros | Tipo    |     | Descripción                                                                            |
| ---------- | ------- | :-: | -------------------------------------------------------------------------------------- |
| delimiter  | Text    |  -> | Separador a utilizar entre elementos                                                   |
| option     | Integer |  -> | `ck ignore null or empty`: ignore null and empty strings in the result |
| Result     | Text    |  <- | Cadena que contiene todos los elementos de la colección, separados por un delimitador  |

<!-- END REF -->

#### Descripción

The `.join()` function <!-- REF #collection.join().Summary -->converts all elements of the collection to strings and concatenates them using the specified _delimiter_ string as separator<!-- END REF -->.The function returns the resulting string.

> Esta función no modifica la colección original.

Por defecto, los elementos nulos o vacíos de la colección se devuelven en la cadena resultante. Pass the `ck ignore null or empty` constant in the _option_ parameter if you want to remove them from the resulting string.

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

| Parámetros | Tipo |     | Descripción                     |
| ---------- | ---- | :-: | ------------------------------- |
| Result     | any  |  <- | Último elemento de la colección |

<!-- END REF -->

#### Descripción

The `.last()` function <!-- REF #collection.last().Summary -->returns the last element of the collection<!-- END REF -->.

> Esta función no modifica la colección original.

La función devuelve Undefined si la colección está vacía.

#### Ejemplo

```4d
var $col; $emptyCol : Collection
var $last : Variant
$col:=New collection(10; 20; 30; "hello"; 50)
$last:=$col.last() // 50

$emptyCol:=New collection() //empty
// $last:=$emptyCol[$emptyCol.length-1] //devuelve un error
$last:=$emptyCol.last() // devuelve Indefinido

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

| Parámetros | Tipo      |     | Descripción                                                                       |
| ---------- | --------- | :-: | --------------------------------------------------------------------------------- |
| toSearch   | expresión |  -> | El elemento que se va a buscar dentro de la colección                             |
| startFrom  | Integer   |  -> | Índice para iniciar la búsqueda en                                                |
| Result     | Integer   |  <- | Índice de la última ocurrencia de toSearch en la colección, -1 si no se encuentra |

<!-- END REF -->

#### Descripción

The `.lastIndexOf()` function <!-- REF #collection.lastIndexOf().Summary -->searches the _toSearch_ expression among collection elements and returns the index of the last occurrence<!-- END REF -->, or -1 if it was not found.

> Esta función no modifica la colección original.

In _toSearch_, pass the expression to find in the collection. Puede pasar:

- un valor escalar (texto, número, booleano, fecha),
- el valor null,
- una referencia de objeto o de colección.

_toSearch_ must match exactly the element to find (the same rules as for the equality operator are applied).

Optionally, you can pass the index of collection from which to start a reverse search in _startFrom_.

- If _startFrom_ >= the collection's length minus one (coll.length-1), the whole collection is searched (default).
- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the collection). Si el valor calculado es negativo, se devuelve -1 (no se busca en la colección).
  **Note:** Even if _startFrom_ is negative, the collection is still searched from right to left.
- If _startFrom_ = 0, -1 is returned, which means the collection is not searched.

#### Ejemplo

```4d
 var $col : Collection
 var $pos1;$pos2;$pos3;$pos4;$pos5 : Integer 
 $col:=Split string("a,b,c,d,e,f,g,h,i,j,e,k,e";",") //$col.length=13
 $pos1:=$col.lastIndexOf("e") //devuelve 12
 $pos2:=$col.lastIndexOf("e";6) //devuelve 4
 $pos3:=$col.lastIndexOf("e";15) //devuelve 12
 $pos4:=$col.lastIndexOf("e";-2) //devuelve 10
 $pos5:=$col.lastIndexOf("x") //devuelve -1
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

The `.length` property <!-- REF #collection.length.Summary -->returns the number of elements in the collection<!-- END REF -->.

The `.length` property is initialized when the collection is created. Añadir o eliminar elementos actualiza la longitud, si es necesario. This property is **read-only** (you cannot use it to set the size of the collection).

#### Ejemplo

```4d
 var $col : Collection //$col.length inicializada en 0
 $col:=New collection("one";"two";"three") //$col.length actualizada a 3
 $col[4]:="five" //$col.length actualizada a 5
 $vSize:=$col.remove(0;3).length //$vSize=2
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

| Parámetros | Tipo                        |     | Descripción                                                          |
| ---------- | --------------------------- | :-: | -------------------------------------------------------------------- |
| formula    | 4D.Function |  -> | Objeto fórmula                                                       |
| methodName | Text                        |  -> | Nombre de un método                                                  |
| param      | any                         |  -> | Parameter(s) to pass to _formula_ or _methodName_ |
| Result     | Collection                  |  <- | Colección de valores transformados                                   |

<!-- END REF -->

#### Descripción

The `.map()` function <!-- REF #collection.map().Summary -->creates a new collection based upon the result of the call of the _formula_ 4D function or _methodName_ method on each element of the original collection<!-- END REF -->. Optionally, you can pass parameters to _formula_ or _methodName_ using the _param_ parameter(s). `.map()` always returns a collection with the same size as the original collection, except if _$1.stop_ was used (see below).

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback is called with the parameter(s) passed in <em x-id="3">param</em> (optional). It receives an `Object` in first parameter ($1).

La retrollamada recibe los siguientes parámetros:

- in _$1.value_: element value to be evaluated
- en _$2_: param
- en _$N..._: paramN...

Puede definir los siguientes parámetros:

- (mandatory if you used a method) _$1.result_ (any type): new transformed value to add to the resulting collection
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. El valor devuelto es el último calculado.

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

| Parámetros   | Tipo                                            |     | Descripción                                                         |
| ------------ | ----------------------------------------------- | :-: | ------------------------------------------------------------------- |
| propertyPath | Text                                            |  -> | Ruta de la propiedad del objeto que se utilizará para la evaluación |
| Result       | Boolean, Text, Number, Collection, Object, Date |  <- | Valor máximo en la colección                                        |

<!-- END REF -->

#### Descripción

The `.max()` function <!-- REF #collection.max().Summary -->returns the element with the highest value in the collection<!-- END REF --> (the last element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).

> Esta función no modifica la colección original.

If the collection contains different types of values, the `.max()` function will return the maximum value within the last element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property whose maximum value you want to get.

If the collection is empty, `.max()` returns _Undefined_.

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

| Parámetros   | Tipo                                            |     | Descripción                                                         |
| ------------ | ----------------------------------------------- | :-: | ------------------------------------------------------------------- |
| propertyPath | Text                                            |  -> | Ruta de la propiedad del objeto que se utilizará para la evaluación |
| Result       | Boolean, Text, Number, Collection, Object, Date |  <- | Valor mínimo en la colección                                        |

<!-- END REF -->

#### Descripción

The `.min()` function <!-- REF #collection.min().Summary -->returns the element with the smallest value in the collection<!-- END REF --> (the first element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).

> Esta función no modifica la colección original.

If the collection contains different types of values, the `.min()` function will return the minimum value within the first element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property whose minimum value you want to get.

If the collection is empty, `.min()` returns _Undefined_.

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

| Parámetros | Tipo                        |     | Descripción                                                                                                                                                   |
| ---------- | --------------------------- | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function |  -> | Objeto fórmula                                                                                                                                                |
| colsToSort | Collection                  |  -> | Collection of collections and/or objects with {`collection`:_colToSort_;`order`:`ck ascending` or `ck descending`} properties |
| Result     | Collection                  |  <- | Colección original ordenada                                                                                                                                   |

<!-- END REF -->

#### Descripción

The `.multiSort()` function <!-- REF #collection.multiSort().Summary -->enables you to carry out a multi-level synchronized sort on a set of collections<!-- END REF -->.

> This function modifies the original collection as well as all collections used in _colsToSort_ parameter.

If `.multiSort()` is called with no parameters, the function has the same effect as the [`.sort()`](#sort) function: the collection is sorted (only scalar values) in ascending order by default, according to their type. Si la colección contiene valores de diferentes tipos, se agrupan primero por tipo y se ordenan después. Si <em x-id="3">attributePath</em> lleva a una propiedad de objeto que contiene valores de diferentes tipos, primero se agrupan por tipo y se ordenan después.

1. null
2. booleans
3. cadenas
4. numbers
5. objects
6. collections
7. dates

**Ordenación sincronizada de un nivel**

To sort several collections synchronously, just pass in _colsToSort_ a collection of collections to sort. Puede pasar un número ilimitado de colecciones. The original collection will be sorted in ascending order and all _colsToSort_ collections will be sorted in a synchronized manner.

:::note

All _colsToSort_ collections must have the same number of elements, otherwise an error is returned.

:::

If you want to sort the collections in some other order than ascending, you must supply a _formula_ ([Formula object](FunctionClass.md#formula) that defines the sort order. The return value should be a boolean that indicates the relative order of the two elements: **True** if _$1.value_ is less than _$1.value2_, **False** if _$1.value_ is greater than _$1.value2_. Puede ofrecer parámetros adicionales a la fórmula si es necesario.

La fórmula recibe los siguientes parámetros:

- $1 (objeto), donde:
  - _$1.value_ (any type): first element value to be compared
  - _$1.value2_ (any type): second element value to be compared
- $2...$N (cualquier tipo): parámetros adicionales

**Ordenación sincronizada multinivel**

Defining a multi-level synchronized sort requires that you pass an object containing {`collection`:_colToSort_;`order`:`ck ascending` or `ck descending`} properties instead of the _colToSort_ itself for every collection to use as sub-level.

The sort levels are determined by the order in which the collections are passed in the _colsToSort_ parameter: the position of a `collection`/`order` object in the syntax determines its sort level.

:::note

The `.multiSort()` function uses a [stable](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability) sort algorithm.

:::

#### Ejemplo 1

Una simple ordenación sincronizada de colecciones con diferentes tipos de valores:

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

También puede sincronizar colecciones de objetos.

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

| Parámetros  | Tipo       |     | Descripción                                                                                         |
| ----------- | ---------- | :-: | --------------------------------------------------------------------------------------------------- |
| pathStrings | Text       |  -> | Ruta(s) de propiedad(es) a utilizar para ordenar la colección |
| pathObjects | Collection |  -> | Colección de objetos criterio                                                                       |
| ascOrDesc   | Integer    |  -> | `ck ascending` o `ck descending` (valores escalares)                             |
| Result      | Collection |  <- | Copia ordenada de la colección (copia superficial)                               |

<!-- END REF -->

#### Descripción

The `.orderBy()` function <!-- REF #collection.orderBy().Summary -->returns a new collection containing all elements of the collection in the specified order<!-- END REF -->.

This function returns a _shallow copy_, which means that objects or collections in both collections share the same reference. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.

> Esta función no modifica la colección original.

Si no se pasa ningún parámetro, la función ordena los valores escalares de la colección en orden ascendente (otros tipos de elementos como objetos o colecciones se devuelven con un orden interno). You can modify this automatic order by passing the `ck ascending` or `ck descending` constants in the _ascOrDesc_ parameter (see below).

También puede pasar un parámetro de criterios para definir cómo deben ordenarse los elementos de la colección. Se admiten tres sintaxis para este parámetro:

- _pathStrings_ : Texto (fórmula). **Syntax**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (default order: asc). _pathStrings_ contains a formula made of 1 to x property paths and (optionally) sort orders, separated by commas. El orden en que se pasan las propiedades determina la prioridad de ordenación de los elementos de la colección. Por defecto, las propiedades se clasifican en orden ascendente. Puede definir el orden de clasificación de una propiedad en la cadena de criterios, separado de la ruta de la propiedad por un solo espacio: pase "asc" para ordenar en orden ascendente o "desc" en orden descendente.

- _pathObjects_ : Collection. You can add as many objects in the _pathObjects_ collection as necessary. Por defecto, las propiedades se clasifican en orden ascendente ("descending" es false). Cada elemento de la colección contiene un objeto estructurado de la siguiente manera:

```4d
{
    "propertyPath": string,


    "descending": boolean

}
```

- _ascOrDesc_ : Integer. You pass one of the following constants from the **Objects and collections** theme:

  | Constante     | Tipo    | Valor | Comentario                                                                    |
  | ------------- | ------- | ----- | ----------------------------------------------------------------------------- |
  | ck ascending  | Longint | 0     | Los elementos se ordenan de forma ascendente (por defecto) |
  | ck descending | Longint | 1     | Los elementos se ordenan de forma descendente                                 |

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

| Parámetros | Tipo                        |     | Descripción                                                           |
| ---------- | --------------------------- | :-: | --------------------------------------------------------------------- |
| formula    | 4D.Function |  -> | Objeto fórmula                                                        |
| methodName | Text                        |  -> | Nombre de un método                                                   |
| extraParam | any                         |  -> | Parámetro(s) a pasar                               |
| Result     | Collection                  |  <- | Copia ordenada de la colección (copia superficial) |

<!-- END REF -->

#### Descripción

The `.orderByMethod()` function <!-- REF #collection.orderByMethod().Summary -->returns a new collection containing all elements of the collection in the order defined through the _formula_ 4D function or _methodName_ method<!-- END REF -->.

This function returns a _shallow copy_, which means that objects or collections in both collections share the same reference. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;

- or _methodName_, the name of a project method (text).

In the callback, pass some code that compares two values and returns **true** if the first value is lower than the second value. You can provide _extraParam_ parameters to the callback if necessary.

La retrollamada recibe los siguientes parámetros:

- $1 (objeto), donde:
  - _$1.value_ (any type): first element value to be compared
  - _$1.value2_ (any type): second element value to be compared
  - $2...$N (cualquier tipo): parámetros adicionales

Si utilizó un método, debe definir el siguiente parámetro:

- _$1.result_ (boolean): **true** if _$1.value < $1.value2_, **false** otherwise

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

The _**sortCollection**_ method:

```4d
var $1 : Object
var $2: Integer // opción de ordenación

$1.result:=(Compare strings($1.value;$1.value2;$2)<0)
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

| Parámetros | Tipo |     | Descripción                     |
| ---------- | ---- | :-: | ------------------------------- |
| Result     | any  |  <- | Último elemento de la colección |

<!-- END REF -->

#### Descripción

The `.pop()` function <!-- REF #collection.pop().Summary -->removes the last element from the collection and returns it as the function result<!-- END REF -->.

> Esta función modifica la colección original.

When applied to an empty collection, `.pop()` returns _**undefined**_.

#### Ejemplo

`.pop()`, used in conjunction with [`.push()`](#push), can be used to implement a first-in, last-out stack feature:

```4d
 var $stack : Collection
 $stack:=New collection //$stack=[]
 $stack.push(1;2) //$stack=[1,2]
 $stack.pop() //$stack=[1]  Devuelve 2
 $stack.push(New collection(4;5)) //$stack=[[1,[4,5]]
 $stack.pop() //$stack=[1]  Devuelve [4,5]
 $stack.pop() //$stack=[]  Devuelve 1
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

| Parámetros | Tipo       |     | Descripción                                            |
| ---------- | ---------- | :-: | ------------------------------------------------------ |
| element    | any        |  -> | Elemento(s) a añadir a la colección |
| Result     | Collection |  <- | Colección original que contiene los elementos añadidos |

<!-- END REF -->

#### Descripción

The `.push()` function <!-- REF #collection.push().Summary -->appends one or more _element_(s) to the end of the collection instance and returns the edited collection<!-- END REF -->.

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

| Lanzamiento | Modificaciones                                           |
| ----------- | -------------------------------------------------------- |
| 20 R6       | Support of queries using object or collection references |
| 17 R5       | Soporte de querySettings                                 |
| v16 R6      | Añadidos                                                 |

</details>

<!-- REF #collection.query().Syntax -->**.query**( *queryString* : Text ) : Collection<br/>**.query**( *queryString* : Text ; *...value* : any ) : Collection<br/>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->

<!-- REF #collection.query().Params -->

| Parámetros    | Tipo       |     | Descripción                                                                                                                 |
| ------------- | ---------- | :-: | --------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Text       |  -> | Criterio de búsqueda                                                                                                        |
| value         | any        |  -> | Valor(es) a comparar cuando se utiliza(n) marcador(es) de posición |
| querySettings | Object     |  -> | Opciones de búsqueda: parámetros, atributos                                                                 |
| Result        | Collection |  <- | Elemento(s) que coincide(n) con queryString en la colección                           |

<!-- END REF -->

#### Descripción

The `.query()` function <!-- REF #collection.query().Summary -->returns all elements of a collection of objects that match the search conditions <!-- END REF -->defined by _queryString_ and (optionally) _value_ or _querySettings_. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.

An empty collection is returned if the collection in which the query is executed does not contain the searched _value_.

> Esta función no modifica la colección original.

#### parámetro queryString

The _queryString_ parameter uses the following syntax:

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

donde:

- **propertyPath**: path of property on which you want to execute the query. Este parámetro puede ser un nombre simple (por ejemplo, "país") o cualquier ruta de atributo válida (por ejemplo, "país.nombre".) En el caso de una ruta de atributos de tipo <code>Collection</code>, se utiliza la notación \[ ] para manejar todas las ocurrencias (por ejemplo "niños[ ].edad"). In case of an attribute path whose type is `Collection`, `[]` notation is used to handle all the occurences (for example `children[].age`).

- **comparator**: symbol that compares _propertyPath_ and _value_. Se soportan los siguientes símbolos:

| Comparación                           | Símbolo(s) | Comentario                                                                                                                                                                                                                                  |
| ------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Igual a                               | =, ==                         | Obtiene los datos coincidentes, admite el comodín (@), no distingue entre mayúsculas de minúsculas ni diacríticas.                                                                          |
|                                       | ===, IS                       | Obtiene los datos coincidentes, considera @ como carácter estándar, no distingue entre mayúsculas de minúsculas ni diacríticas                                                                                                 |
| Diferente de                          | #, !=                         | Soporta el comodín (@). Equivalent to "Not condition applied on a statement" ([see below](#not-equal-to-in-collections)).                                |
|                                       | !==, IS NOT                   | Considera la @ como un caracter estándar                                                                                                                                                                                       |
| Condición No aplicada a una sentencia | NOT                           | Los paréntesis son obligatorios cuando se utiliza NOT antes de una instrucción que contiene varios operadores. Equivalent to "Not equal to" ([see below](#not-equal-to-in-collections)). |
| Menor que                             | <                             |                                                                                                                                                                                                                                             |
| Mayor que                             | >                             |                                                                                                                                                                                                                                             |
| Menor o igual que                     | <=                            |                                                                                                                                                                                                                                             |
| Mayor o igual que                     | > =                           |                                                                                                                                                                                                                                             |
| Incluído en                           | IN                            | Devuelve los datos iguales a al menos uno de los valores de una colección o de un conjunto de valores, admite el comodín (@)                                                                                |

- **value**: the value to compare to the current value of the property of each element in the collection. It can be any constant value expression matching the element's data type property or a [**placeholder**](#using-placeholders).
  Al utilizar un valor constante, deben respetarse las siguientes reglas:
  - **text** type constant can be passed with or without simple quotes (see **Using quotes** below). Para consultar una cadena dentro de otra cadena (una consulta de tipo "contiene"), utilice el símbolo de comodín (@) en el valor para aislar la cadena a buscar como se muestra en este ejemplo: "@Smith@". Las siguientes palabras claves están prohibidas para las constantes de texto: true, false.
  - **boolean** type constants: **true** or **false** (case sensitive).
  - **numeric** type constants: decimals are separated by a '.' (period).
  - **date** type constants: "YYYY-MM-DD" format
  - **null** constant: using the "null" keyword will find **null** and **undefined** properties.
  - in case of a query with an IN comparator, _value_ must be a collection, or values matching the type of the attribute path between \[ ] separated by commas (for strings, `"` characters must be escaped with `\`).

- **logicalOperator**: used to join multiple conditions in the query (optional). Puede utilizar uno de los siguientes operadores lógicos (se puede utilizar el nombre o el símbolo):

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

4D allows you to use placeholders for _propertyPath_ and _value_ arguments within the _queryString_ parameter. Un marcador es un parámetro que se inserta en las cadenas de búsqueda y que se sustituye por otro valor cuando se evalúa la cadena de búsqueda. El valor de los marcadores se evalúa una vez al principio de la búsqueda; no se evalúa para cada elemento.

Two types of placeholders can be used: **indexed placeholders** and **named placeholders**.

- **Indexed placeholders**: parameters are inserted as `:paramIndex` (for example ":1", ":2"...) in _queryString_ and their corresponding values are provided by the sequence of _value_ parameter(s). You can use up to 128 _value_ parameters.

Ejemplo:

```4d
$c:=$myCol.query(":1=:2";"city";"Chicago")
```

- **Named placeholders**: parameters are inserted as `:paramName` (for example ":myparam") and their values are provided in the "attributes" and/or "parameters" objects in the _querySettings_ parameter.

Ejemplo:

```4d
$o.attributes:={att:"city"}
$o.parameters:={name:"Chicago")
$c:=$myCol.query(":att=:name";$o)
```

You can mix all argument kinds in _queryString_. A _queryString_ can contain, for _propertyPath_ and _value_ parameters:

- valores directos (sin marcadores),
- marcadores indexados y/o con nombre.

Using placeholders in queries **is recommended** for the following reasons:

1. Evita la inserción de código malicioso: si utiliza directamente variables completadas por el usuario dentro de la cadena de búsqueda, un usuario podría modificar las condiciones de búsqueda introduciendo argumentos de búsqueda adicionales. Por ejemplo, imagine una cadena de búsqueda como:

```4d
 $vquery:="status = 'public' & name = "+myname //user enters their name
 $result:=$col.query($vquery)
```

Esta búsqueda parece segura ya que se filtran los datos no públicos. However, if the user enters in the _myname_ area something like _"smith OR status='private'_, the query string would be modified at the interpretation step and could return private data.

Cuando se utilizan marcadores de posición, no es posible anular las condiciones de seguridad:

```4d
 $result:=$col.query("status='public' & name=:1";myname)
```

In this case if the user enters _smith OR status='private'_ in the _myname_ area, it will not be interpreted in the query string, but only passed as a value. La búsqueda de una persona llamada "smith OR status='private'" simplemente fallará.

2. It prevents having to worry about formatting or character issues, especially when handling _propertyPath_ or _value_ parameters that might contain non-alphanumeric characters such as ".", "['...

3. Permite el uso de variables o expresiones en los argumentos de búsqueda. Ejemplos:

```4d
$result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
$result2:=$col.query("company.name = :1";"John's Pizzas")
```

> Using a [**collection reference** or **object reference**](#object-or-collection-reference-as-value) in the _value_ parameter is not supported with this syntax. You must use the [_querySettings_ parameter](#querysettings-parameter).

#### Búsqueda de valores null

Cuando se buscan valores null, no se puede utilizar la sintaxis de marcador de posición porque el motor de búsqueda considera null como un valor de comparación invalido. Por ejemplo, si ejecuta la siguiente búsqueda:

```4d
$vSingles:=$colPersons.query("spouse = :1";Null) // will NOT work
```

No obtendrá el resultado esperado porque el valor null será evaluado por 4D como un error resultante de la evaluación del parámetro (por ejemplo, un atributo procedente de otra búsqueda). Para este tipo de búsquedas, debe utilizar la sintaxis de búsqueda directa:

```4d
$vSingles:=$colPersons.query("spouse = null") //correct syntax
```

#### Object or collection reference as value

You can query a collection using an object reference or a collection reference as the _value_ parameter to compare. The query will match objects in the collection that refer (point to) the same **instance of** object or collection.

Se soportan los siguientes comparadores:

| Comparación  | Símbolo(s) |
| ------------ | ----------------------------- |
| Igual a      | =, ==                         |
| Diferente de | #, !=                         |

To build a query with an object or a collection reference, you must use the _querySettings_ parameter syntax. Example with an object reference:

```4d
var $o1:={a: 1}
var $o2:={a: 1} //same object but another reference
var $o3:=$o1 //same object and reference

var $col; $colResult : Collection

$col:=[{o: $o1}; {o: $o2}; {o: $o3}]
$colResult:=$col.query("o = :v"; {parameters: {v: $o3}})
	//$colResult.length=2
	//$colResult[0].o=$o1 is true
	//$colResult[1].o=$o1 is true

```

Example with a collection reference:

```4d

$c1:=[1; 2; 3]
$c2:=[1; 2; 3] //same collection but another reference
$c3:=$c1 //same collection and reference

$col:=[{c: $c1}; {c: $c2}; {c: $c3}]
$col2:=$col.query("c = :v"; {parameters: {v: $c3}})
	//$col2.length=2
	//$col2[0].c=$c1 is true
	//$col2[1].c=$c1 is true

```

#### Parámetro querySettings

In the _querySettings_ parameter, you can pass an object containing query placeholders as objects. Se soportan las siguientes propiedades:

| Propiedad  | Tipo   | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| parameters | Object | **Named placeholders for values** used in the _queryString_. Values are expressed as property / value pairs, where property is the placeholder name inserted for a value in the _queryString_ (":placeholder") and value is the value to compare. Puede combinar marcadores de posición indexados (valores pasados directamente en parámetros de valor) y valores de marcadores de posición con nombre en la misma búsqueda.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| attributes | Object | **Named placeholders for attribute paths** used in the _queryString_. Attributes are expressed as property / value pairs, where property is the placeholder name inserted for an attribute path in the _queryString_ (":placeholder"), and value can be a string or a collection of strings. Each value is a path that can designate a property in an object of the collection<table><tr><th>Type</th><th>Description</th></tr><tr><td>String</td><td>attributePath expressed using the dot notation, e.g. "name" or "user.address.zipCode"</td></tr><tr><td>Collection of strings</td><td>Each string of the collection represents a level of attributePath, e.g. \["name"] or \["user","address","zipCode"]. Using a collection allows querying on attributes with names that are not compliant with dot notation, e.g. \["4Dv17.1","en/fr"]</td></tr></table>You can mix indexed placeholders (values directly passed in _value_ parameters) and named placeholder values in the same query. |

> Using this parameter is mandatory if you want to query a collection [using a **collection reference** or **object reference**](#object-or-collection-reference-as-value).

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
 $col:=$c.query("age=null") //no están permitidos los marcadores de posición con "null"
  //$col=[{name:Wesson...},{name:Sterling...},{name:Mark...}]
```

Este ejemplo devuelve las personas contratadas hace más de 90 días:

```4d
 $col:=$c.query("dateHired < :1";(Current date-90))
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] si hoy es 01/10/2018
```

#### Ejemplo 3

Búsquedas con fechas:

```4d

$entitySelection:=ds.Employee.query("birthDate > :1";"1970-01-01")
$entitySelection:=ds.Employee.query("birthDate <= :1";Current date-10950)
```

:::info

More examples of queries can be found in the `dataClass.query()` page.

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

| Parámetros | Tipo                                            |     | Descripción                                                                       |
| ---------- | ----------------------------------------------- | :-: | --------------------------------------------------------------------------------- |
| formula    | 4D.Function                     |  -> | Objeto fórmula                                                                    |
| methodName | Text                                            |  -> | Nombre de un método                                                               |
| initValue  | Text, Number, Object, Collection, Date, Boolean |  -> | Value to use as the first argument to the first call of _formula_ or _methodName_ |
| param      | expresión                                       |  -> | Parámetro(s) a pasar                                           |
| Result     | Text, Number, Object, Collection, Date, Boolean |  <- | Resultado del valor del acumulador                                                |

<!-- END REF -->

#### Descripción

The `.reduce()` function <!-- REF #collection.reduce().Summary -->applies the _formula_ or _methodName_ callback against an accumulator and each element in the collection (from left to right) to reduce it to a single value<!-- END REF -->.

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback takes each collection element and performs any desired operation to accumulate the result into _$1.accumulator_, which is returned in _$1.value_.

You can pass the value to initialize the accumulator in _initValue_. If omitted, _$1.accumulator_ starts with _Undefined_.

La retrollamada recibe los siguientes parámetros:

- in _$1.value_: element value to be processed
- en _$2: param_
- en _$N..._: _paramN..._

La retrollamada define los siguientes parámetros:

- _$1.accumulator_: value to be modified by the function and which is initialized by _initValue_.
- _$1.stop_ (boolean, optional): **true** to stop the method callback. El valor devuelto es el último calculado.

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

With the following _**Flatten**_ method:

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

| Parámetros | Tipo                                            |     | Descripción                                                                       |
| ---------- | ----------------------------------------------- | :-: | --------------------------------------------------------------------------------- |
| formula    | 4D.Function                     |  -> | Objeto fórmula                                                                    |
| methodName | Text                                            |  -> | Nombre de un método                                                               |
| initValue  | Text, Number, Object, Collection, Date, Boolean |  -> | Value to use as the first argument to the first call of _formula_ or _methodName_ |
| param      | expresión                                       |  -> | Parámetro(s) a pasar                                           |
| Result     | Text, Number, Object, Collection, Date, Boolean |  <- | Resultado del valor del acumulador                                                |

<!-- END REF -->

#### Descripción

The `.reduceRight()` function <!-- REF #collection.reduceRight().Summary -->applies the _formula_ or _methodName_ callback against an accumulator and each element in the collection (from right to left) to reduce it to a single value<!-- END REF -->.

> Esta función no modifica la colección original.

Se designa la retrollamada a ejecutar para evaluar los elementos de la colección utilizando:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback takes each collection element and performs any desired operation to accumulate the result into _$1.accumulator_, which is returned in _$1.value_.

You can pass the value to initialize the accumulator in _initValue_. If omitted, _$1.accumulator_ starts with _Undefined_.

La retrollamada recibe los siguientes parámetros:

- in _$1.value_: element value to be processed
- en _$2: param_
- en _$N..._: _paramN..._

La retrollamada define los siguientes parámetros:

- _$1.accumulator_: value to be modified by the function and which is initialized by _initValue_.
- _$1.stop_ (boolean, optional): **true** to stop the method callback. El valor devuelto es el último calculado.

#### Ejemplo 1

```4d
var $c : Collection
$c:=New collection(5;3;5;1;3;4;4;6;2;2)
$r:=$c.reduceRight(Formula($1.accumulator*=$1.value); 1)  //devuelve 86400

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

With the following _**Flatten**_ method:

```4d
	//Flatten project method
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
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

| Parámetros | Tipo       |     | Descripción                                              |
| ---------- | ---------- | :-: | -------------------------------------------------------- |
| index      | Integer    |  -> | Elemento en el que se inicia la eliminación              |
| howMany    | Integer    |  -> | Número de elementos a eliminar, o 1 elemento si se omite |
| Result     | Collection |  <- | Colección original sin elementos eliminados              |

<!-- END REF -->

#### Descripción

The `.remove()` function <!-- REF #collection.remove().Summary -->removes one or more element(s) from the specified _index_ position in the collection and returns the edited collection<!-- END REF -->.

> Esta función modifica la colección original.

In _index_, pass the position where you want the element to be removed from the collection.

> **Warning**: Keep in mind that collection elements are numbered from 0. If _index_ is greater than the length of the collection, actual starting index will be set to the length of the collection.

- If _index_ < 0, it is recalculated as _index:=index+length_ (it is considered as the offset from the end of the collection).
- If the calculated value < 0, _index_ is set to 0.
- If the calculated value > the length of the collection, _index_ is set to the length.

In _howMany_, pass the number of elements to remove from _index_. If _howMany_ is not specified, then one element is removed.

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

| Parámetros   | Tipo                                            |     | Descripción                                    |
| ------------ | ----------------------------------------------- | :-: | ---------------------------------------------- |
| size         | Integer                                         |  -> | Nuevo tamaño de la colección                   |
| defaultValue | Number, Text, Object, Collection, Date, Boolean |  -> | Valor por defecto para llenar nuevos elementos |
| Result       | Collection                                      |  <- | Colección original redimensionada              |

<!-- END REF -->

#### Descripción

The `.resize()` function <!-- REF #collection.resize().Summary -->sets the collection length to the specified new size and returns the resized collection<!-- END REF -->.

> Esta función modifica la colección original.

- If _size_ < collection length, exceeding elements are removed from the collection.
- If _size_ > collection length, the collection length is increased to size.

By default, new elements are filled will **null** values. You can specify the value to fill in added elements using the _defaultValue_ parameter.

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

| Parámetros | Tipo       |     | Descripción                     |
| ---------- | ---------- | :-: | ------------------------------- |
| Result     | Collection |  <- | Copia invertida de la colección |

<!-- END REF -->

#### Descripción

The `.reverse()` function <!-- REF #collection.reverse().Summary -->returns a deep copy of the collection with all its elements in reverse order<!-- END REF -->. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.

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

| Parámetros | Tipo |     | Descripción                     |
| ---------- | ---- | :-: | ------------------------------- |
| Result     | any  |  <- | Primer elemento de la colección |

<!-- END REF -->

#### Descripción

The `.shift()` function <!-- REF #collection.shift().Summary -->removes the first element of the collection and returns it as the function result<!-- END REF -->.

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

| Parámetros | Tipo       |     | Descripción                                                                            |
| ---------- | ---------- | :-: | -------------------------------------------------------------------------------------- |
| startFrom  | Integer    |  -> | Índice de inicio (incluido)                                         |
| end        | Integer    |  -> | Índice final (no incluido)                                          |
| Result     | Collection |  <- | Nueva colección que contiene elementos cortados (copia superficial) |

<!-- END REF -->

#### Descripción

The `.slice()` function <!-- REF #collection.slice().Summary -->returns a portion of a collection into a new collection<!-- END REF -->, selected from _startFrom_ index to _end_ index (end not included). This function returns a _shallow copy_ of the collection. Si la colección original es una colección compartida, la colección devuelta es también una colección compartida.

> Esta función no modifica la colección original.

The returned collection contains the element specified by _startFrom_ and all subsequent elements up to, but not including, the element specified by _end_. If only the _startFrom_ parameter is specified, the returned collection contains all elements from _startFrom_ to the last element of the original collection.

- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the collection).
- If the calculated value < 0, _startFrom_ is set to 0.
- If _end_ < 0 , it is recalculated as _end:=end+length_.
- If _end < startFrom_ (passed or calculated values), the method does nothing.

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

|startFrom |Integer |->|Index to start the test at|
|formula|4D.Function|->|Formula object|
|methodName|Text|->|Name of a method|
|param |any |->|Parameter(s) to pass|
|Result|Boolean|<-|True if at least one element successfully passed the test|

<!-- END REF -->

#### Descripción

The `.some()` function <!-- REF #collection.some().Summary -->returns true if at least one element in the collection successfully passed a test implemented in the provided _formula_ or _methodName_ code<!-- END REF -->.

Se designa el código 4D de retrollamada (callback) a ejecutar para evaluar los elementos de la colección utilizando:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for every element fulfilling the test. It receives an `Object` in first parameter ($1).

La retrollamada recibe los siguientes parámetros:

- in _$1.value_: element value to be processed
- en _$2: param_
- en _$N..._: _paramN..._

Puede definir los siguientes parámetros:

- (mandatory if you used a method) _$1.result_ (boolean): **true** if the element value evaluation is successful, **false** otherwise.
- _$1.stop_ (boolean, optional): **true** to stop the method callback. El valor devuelto es el último calculado.

In any case, at the point where `.some()` function encounters the first collection element returning true, it stops calling the callback and returns **true**.

By default, `.some()` tests the whole collection. Optionally, you can pass the index of an element from which to start the test in _startFrom_.

- If _startFrom_ >= the collection's length, **False** is returned, which means the collection is not tested.

- If _startFrom_ < 0, it is considered as the offset from the end of the collection.

- If _startFrom_ = 0, the whole collection is searched (default).

#### Ejemplo

You want to know if at least one collection value is >0.

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

| Parámetros | Tipo                        |     | Descripción                 |
| ---------- | --------------------------- | :-: | --------------------------- |
| formula    | 4D.Function |  -> | Objeto fórmula              |
| methodName | Text                        |  -> | Nombre de un método         |
| extraParam | any                         |  -> | Parámetros del método       |
| Result     | Collection                  |  <- | Colección original ordenada |

<!-- END REF -->

#### Descripción

The `.sort()` function <!-- REF #collection.sort().Summary -->sorts the elements of the original collection and also returns the sorted collection<!-- END REF --> .

> Esta función modifica la colección original.

If `.sort()` is called with no parameters, only scalar values (number, text, date, booleans) are sorted. Los elementos se ordenan por defecto de forma ascendente, según su tipo. Si la colección contiene elementos de diferentes tipos, se agrupan primero por tipo y se ordenan después. Si <em x-id="3">attributePath</em> lleva a una propiedad de objeto que contiene valores de diferentes tipos, primero se agrupan por tipo y se ordenan después.

1. null
2. booleans
3. cadenas
4. numbers
5. objects
6. collections
7. dates

If you want to sort the collection elements in some other order or sort any type of element, you must supply in _formula_ ([Formula object](FunctionClass.md)) or _methodName_ (Text) a callback that defines the sort order. The return value should be a boolean that indicates the relative order of the two elements: **True** if _$1.value_ is less than _$1.value2_, **False** if _$1.value_ is greater than _$1.value2_. Puede ofrecer parámetros adicionales a la retrollamada si es necesario.

La retrollamada recibe los siguientes parámetros:

- $1 (objeto), donde:
  - _$1.value_ (any type): first element value to be compared
  - _$1.value2_ (any type): second element value to be compared
- $2...$N (cualquier tipo): parámetros adicionales

Si utilizó un método, debe definir el siguiente parámetro:

- _$1.result_ (boolean): **true** if _$1.value < $1.value2_, **false** otherwise.

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
var $col; $col2; $col3 : Collection
$col:=New collection(33;4;66;1111;222)
$col2:=$col.sort() //numerical sort: [4,33,66,222,1111]
$col3:=$col.sort(Formula(String($1.value)<String($1.value2))) //orden alfabético: [1111,222,33,4,66]
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

| Parámetros   | Tipo |     | Descripción                                                      |
| ------------ | ---- | :-: | ---------------------------------------------------------------- |
| propertyPath | Text |  -> | Ruta de la propiedad del objeto que se utilizará para el cálculo |
| Result       | Real |  <- | Suma de los valores de la colección                              |

<!-- END REF -->

#### Descripción

The `.sum()` function <!-- REF #collection.sum().Summary -->returns the sum for all values in the collection instance<!-- END REF -->.

Para el cálculo sólo se tienen en cuenta los elementos numéricos (se ignoran otros tipos de elementos).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property to take into account.

`.sum()` devuelve 0 si:

- la colección está vacía,
- la colección no contiene elementos numéricos,
- _propertyPath_ is not found in the collection.

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

| Parámetros | Tipo                                   |     | Descripción                                                          |
| ---------- | -------------------------------------- | :-: | -------------------------------------------------------------------- |
| value      | Text, Number, Object, Collection, Date |  -> | Valor(es) a insertar al principio de la colección |
| Result     | Real                                   |  <- | Colección que contiene los elementos añadidos                        |
|            |                                        |     |                                                                      |

<!-- END REF -->

#### Descripción

The `.unshift()` function <!-- REF #collection.unshift().Summary -->inserts the given _value_(s) at the beginning of the collection <!-- END REF -->and returns the modified collection.

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
