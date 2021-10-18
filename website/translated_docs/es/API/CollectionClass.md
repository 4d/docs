---
id: CollectionClass
title: Collection
---


La clase Collection gestiona variables de tipo [Collection](Concepts/dt_collection.md).

Una colección se inicializa con:

|                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New collection.Summary -->|
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New shared collection.Summary -->|


### Ejemplo

```4d
 var $colVar : Collection //creación de una variable 4D de tipo colección
 $colVar:=New collection //inicialización de la colección y asignación a la variable 4D
```


### Resumen


|                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #collection.average().Syntax -->](#average)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.average().Summary -->|
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.clear().Summary --> |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.combine().Summary --> |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.concat().Summary -->|
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.copy().Summary -->|
| [<!-- INCLUDE #collection.count().Syntax -->](#count)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.count().Summary -->|
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.countValues().Summary -->|
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.distinct().Summary -->|
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.equal().Summary -->|
| [<!-- INCLUDE #collection.every().Syntax -->](#every)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.every().Summary -->|
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.extract().Summary -->|
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.fill().Summary -->|
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.filter().Summary -->|
| [<!-- INCLUDE #collection.find().Syntax -->](#find)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.find().Summary -->|
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.findIndex().Summary -->|
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indexOf().Summary -->|
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indices().Summary -->|
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.insert().Summary -->|
| [<!-- INCLUDE #collection.join().Syntax -->](#join)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.join().Summary -->|
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.lastIndexOf().Summary -->|
| [<!-- INCLUDE #collection.length.Syntax -->](#length)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.length.Summary -->|
| [<!-- INCLUDE #collection.map().Syntax -->](#map)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.map().Summary -->|
| [<!-- INCLUDE #collection.max().Syntax -->](#max)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.max().Summary -->|
| [<!-- INCLUDE #collection.min().Syntax -->](#min)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.min().Summary -->|
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderBy().Summary -->|
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderByMethod().Summary -->|
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.pop().Summary -->|
| [<!-- INCLUDE #collection.push().Syntax -->](#push)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.push().Summary -->|
| [<!-- INCLUDE #collection.query().Syntax -->](#query)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.query().Summary -->|
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reduce().Summary -->|
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.remove().Summary -->|
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.resize().Summary -->|
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reverse().Summary -->|
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.shift().Summary -->|
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.slice().Summary -->|
| [<!-- INCLUDE #collection.some().Syntax -->](#some)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.some().Summary -->|
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sort().Summary -->|
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sum().Summary -->|
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.unshift().Summary -->|



## `Nueva colección`


<!-- REF #_command_.New collection.Syntax -->
**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New collection.Params -->
| Parámetros | Tipo                                                                    |    | Descripción             |
| ---------- | ----------------------------------------------------------------------- |:--:| ----------------------- |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer | -> | Valor(es) de collection |
| Resultado  | Collection                                                              | <- | Nueva colección         |
<!-- END REF -->


#### Descripción

El comando `Nueva colección` <!-- REF #_command_.New collection.Summary --> crea una nueva colección vacía o precargada<!-- END REF --> y devuelve su referencia.

Si no se pasa ningún parámetro, `New collection` crea una colección vacía y devuelve su referencia.

Debe asignar la referencia devuelta a una variable 4D del tipo Collection.
> Tenga en cuenta que las instrucciones `var : Collection` or `C_COLLECTION` declaran una variable de tipo `Collection` pero no crea ninguna colección.

Opcionalmente, puede prellenar la nueva colección pasando uno o varios *valores* como parámetro(s).

De lo contrario, puede añadir o modificar elementos posteriormente por asignación. Por ejemplo:

```4d
 myCol[10]:="My new element"
```

Si el nuevo índice del elemento está más allá del último elemento existente de la colección, la colección se redimensiona automáticamente y a todos los nuevos elementos intermedios se les asigna un valor **null**.

Puede pasar cualquier número de valores de todos los tipos soportados (number, text, date, picture, pointer, object, collection...). A diferencia de los arrays, las colecciones pueden mezclar datos de diferentes tipos.

Debe prestar atención a los siguientes aspectos de la conversión:

*   Si pasa un puntero, se mantiene "tal cual"; se evalúa con el comando `JSON Stringify`
*   Dates are stored as "yyyy-mm-dd" dates or strings with the "YYYY-MM-DDTHH:mm:ss.SSSZ" format, according to the current "dates inside objects" database setting. When converting 4D dates into text prior to storing them in the collection, by default the program takes the local time zone into account. You can modify this behavior using the `Dates inside objects` selector of the `SET DATABASE PARAMETER` command.
*   If you pass a time, it is stored as a number of milliseconds (Real).

#### Ejemplo 1



You want to create a new empty collection and assign it to a 4D collection variable:

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### Ejemplo 2

You want to create a prefilled collection:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### Ejemplo 3

You create a new collection and then add a new element:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //añadir un décimo elemento con valor "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```




## `Nueva collection compartida`

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #_command_.New shared collection.Syntax -->
**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New shared collection.Params -->
| Parámetros | Tipo                                                                |    | Descripción                           |
| ---------- | ------------------------------------------------------------------- |:--:| ------------------------------------- |
| value      | Number, Text, Date, Time, Boolean, Shared object, Shared collection | -> | Valor(es) de la collection compartida |
| Resultado  | Collection                                                          | <- | Nueva collection compartida           |
<!-- END REF -->


#### Descripción

The `New shared collection` command <!-- REF #_command_.New shared collection.Summary --> creates a new empty or prefilled shared collection<!-- END REF --> and returns its reference.

Adding an element to this collection must be surrounded by the [`Use...End`](Concepts/shared.md#useend-use) use structure, otherwise an error is generated. Reading an element without a structure is, however, possible.
> For more information on shared collections, please refer to the [Shared objects and collections](Concepts/shared.md) page.

If you do not pass any parameters, `New shared collection` creates an empty shared collection and returns its reference.

Debe asignar la referencia devuelta a una variable 4D del tipo Collection.
> Keep in mind that `var : Collection` or `C_COLLECTION` statements declare a variable of the `Collection` type but does not create any collection.

Optionally, you can prefill the new shared collection by passing one or several *value*(s) as parameter(s). Otherwise, you can add or modify elements subsequently through object notation assignment (see example).

If the new element index is beyond the last existing element of the shared collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

You can pass any number of values of the following supported types:

*   number (real, longint...). Number values are always stored as reals.
*   texto
*   booleano
*   fecha
*   time (stored as number of milliseconds - real)
*   null
*   objeto compartido(*)
*   collection compartida(*)
> Unlike standard (not shared) collections, shared collections do not support pictures, pointers, and objects or collections that are not shared.

(*)When a shared object or collection is added to a shared collection, they share the same *locking identifier*. For more information on this point, refer to the **4D Developer**'s guide.

#### Ejemplo

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
``` 



<!-- REF collection.average().Desc -->
## .average()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.average().Syntax -->
**.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.average().Params -->
| Parámetros   | Tipo            |    | Descripción                                     |
| ------------ | --------------- |:--:| ----------------------------------------------- |
| propertyPath | Texto           | -> | Object property path to be used for calculation |
| Resultado    | Real, Undefined | <- | Arithmetic mean (average) of collection values  |
<!-- END REF -->



#### Descripción

The `.average()` function <!-- REF #collection.average().Summary -->returns the arithmetic mean (average) of defined values in the collection instance<!-- END REF -->.



Only numerical elements are taken into account for the calculation (other element types are ignored).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property to take into account.

`.average()` devuelve `undefined` if:

*   the collection is empty,
*   the collection does not contain numerical elements,
*   *propertyPath* is not found in the collection.


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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.clear().Syntax -->
**.clear()** : Collection<!-- END REF -->

<!-- REF #collection.clear().Params -->
| Parámetros | Tipo       |    | Descripción                                   |
| ---------- | ---------- |:--:| --------------------------------------------- |
| Resultado  | Collection | <- | Original collection with all elements removed |
<!-- END REF -->


#### Descripción

The `.clear()` function <!-- REF #collection.clear().Summary -->removes all elements from the collection instance and returns an empty collection<!-- END REF -->.
> This function modifies the original collection.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.combine().Syntax -->
**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection<!-- END REF -->


<!-- REF #collection.combine().Params -->
| Parámetros | Tipo       |    | Descripción                                                                   |
| ---------- | ---------- |:--:| ----------------------------------------------------------------------------- |
| col2       | Collection | -> | Colección a combinar                                                          |
| index      | Integer    | -> | Position to which insert elements to combine in collection (default=length+1) |
| Resultado  | Collection | <- | Original collection containing combined element(s)                            |
<!-- END REF -->


#### Descripción

The `.combine()` function <!-- REF #collection.combine().Summary -->inserts *col2* elements at the end or at the specified *index* position in the collection instance and returns the edited collection<!-- END REF -->. Unlike the `.insert()` function, `.combine()` adds each value of *col2* in the original collection, and not as a single collection element.
> This function modifies the original collection.

By default, *col2* elements are added at the end of the orginal collection. You can pass in *index* the position where you want the *col2* elements to be inserted in the collection.
> **Warning**: Keep in mind that collection elements are numbered from 0.

*   If *index* > the length of the collection, the actual starting *index* will be set to the length of the collection.
*   If *index* < 0, it is recalculated as *index:=index+length* (it is considered as the offset from the end of the collection).
*   If the calculated value is negative, *index* is set to 0.


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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.concat().Syntax -->
**.concat**( *value* : any { *;...valueN* } ) : Collection<!-- END REF -->

<!-- REF #collection.concat().Params -->
| Parámetros | Tipo                                                           |    | Descripción                                                                                                       |
| ---------- | -------------------------------------------------------------- |:--:| ----------------------------------------------------------------------------------------------------------------- |
| value      | Number, Text, Object, Collection, Date, Time, Boolean, Picture | -> | Value(s) to concatenate. If *value* is a collection, all collection elements are added to the original collection |
| Resultado  | Collection                                                     | <- | New collection with value(s) added to the original collection                                                     |
<!-- END REF -->


#### Descripción

The `.concat()` function <!-- REF #collection.concat().Summary -->returns a new collection containing the elements of the original collection with all elements of the *value* parameter added to the end<!-- END REF -->.
> Esta función no modifica la colección original.

If *value* is a collection, all its elements are added as new elements at the end of the original collection. If *value* is not a collection, it is added itself as a new element.


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

<details><summary>Histórico</summary>
| Versión | Modificaciones                                     |
| ------- | -------------------------------------------------- |
| v18 R3  | New *ck shared* option. New *groupWith* parameters |
| v16 R6  | Añadidos                                           |
</details>

<!-- REF #collection.copy().Syntax -->
**.copy**() : Collection<br>**.copy**( *option* : Integer ) : Collection<br>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->


<!-- REF #collection.copy().Params -->
| Parámetros   | Tipo       |    | Descripción                                                                                              |
| ------------ | ---------- |:--:| -------------------------------------------------------------------------------------------------------- |
| option       | Integer    | -> | `ck resolve pointers`: resolve pointers before copying,<br>`ck shared`: return a shared collection |
| groupWithCol | Collection | -> | Shared collection to be grouped with the resulting collection                                            |
| groupWithObj | Objeto     | -> | Shared object to be grouped with the resulting collection                                                |
| Resultado    | Collection | <- | Deep copy of the original collection                                                                     |
<!-- END REF -->


#### Descripción

The `.copy()` function <!-- REF #collection.copy().Summary --> returns a deep copy of the collection instance<!-- END REF -->.***Deep copy*** means that objects or collections within the original collection are duplicated and do not share any reference with the returned collection.
> This function does not modify the original collection.

If passed, the *option* parameter can contain one of the following constants (or both):

| option                | Descripción                                                                                                                                                                                                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | If the original collection contains pointer type values, by default the copy also contains the pointers. However, you can resolve pointers when copying by passing the ck resolve pointers. In this case, each pointer present in the collection is evaluated when copying and its dereferenced value is used.      |
| `ck shared`           | By default, copy() returns a regular (not shared) collection, even if the command is applied to a shared collection. Pass the ck shared constant to create a shared collection. In this case, you can use the groupWith parameter to associate the shared collection with another collection or object (see below). |

The *groupWithCol* or *groupWithObj* parameters allow you to designate a collection or an object with which the resulting collection should be associated.


#### Ejemplo 1

We want to copy the *$lastnames* regular (non shared) collection into the *$sharedObject* shared object. Para ello, debemos crear una copia compartida de la colección (*$sharedLastnames*).

```4d
var $sharedObject : Object
var $lastnames;$sharedLastnames : Collection
var $text : Text

$sharedObject:=New shared object

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) //$lastnames is a regular collection

$sharedLastnames:=$lastnames.copy(ck shared) //$sharedLastnames is a shared collection

//Now we can put $sharedLastnames into $sharedObject
Use($sharedObject)
    $sharedObject.lastnames:=$sharedLastnames
End use
```


#### Ejemplo 2

We want to combine *$sharedColl1* and *$sharedColl2*. Since they belong to different shared groups, a direct combination would result in an error. Therefore, we must make a shared copy of *$sharedColl1* and designate *$sharedColl2* as a shared group for the copy.

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

We have a regular collection (*$lastnames*) and we want to put it in the **Storage** of the application. Para ello, debemos crear previamente una copia compartida (*$sharedLastnames*).

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.count().Syntax -->
**.count**( { *propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.count().Params -->
| Parámetros   | Tipo  |    | Descripción                                     |
| ------------ | ----- |:--:| ----------------------------------------------- |
| propertyPath | Texto | -> | Object property path to be used for calculation |
| Resultado    | Real  | <- | Number of elements in the collection            |
<!-- END REF -->


#### Descripción

The `.count()` function <!-- REF #collection.count().Summary -->returns the number of non-null elements in the collection<!-- END REF -->.

If the collection contains objects, you can pass the *propertyPath* parameter. In this case, only elements that contain the *propertyPath* are taken into account.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.countValues().Syntax -->
**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.countValues().Params -->
| Parámetros   | Tipo                                            |    | Descripción                                     |
| ------------ | ----------------------------------------------- |:--:| ----------------------------------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection | -> | Value to count                                  |
| propertyPath | Texto                                           | -> | Object property path to be used for calculation |
| Resultado    | Real                                            | <- | Number of occurrences of the value              |
<!-- END REF -->


#### Descripción

The `.countValues()` function <!-- REF #collection.countValues().Summary -->returns the number of times value is found in the collection<!-- END REF -->.

You can pass in *value*:

*   a scalar value (text, number, boolean, date),
*   an object or a collection reference.


For an element to be found, the type of *value* must be equivalent to the type of the element; the method uses the equality operator.

The optional *propertyPath* parameter allows you to count values inside a collection of objects: pass in *propertyPath* the path of the property whose values you want to count.
> This function does not modify the original collection.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.distinct().Syntax -->
**.distinct**( {*option* : Integer} ) : Collection<br>**.distinct**( *propertyPath* : Text {; *option* : Integer } ) : Collection<!-- END REF -->


<!-- REF #collection.distinct().Params -->
| Parámetros   | Tipo       |    | Descripción                                                      |
| ------------ | ---------- |:--:| ---------------------------------------------------------------- |
| option       | Integer    | -> | `ck diacritical`: diacritical evaluation ("A" # "a" for example) |
| propertyPath | Texto      | -> | Path of attribute whose distinct values you want to get          |
| Resultado    | Collection | <- | New collection with only distinct values                         |
<!-- END REF -->


#### Descripción

The `.distinct()` function <!-- REF #collection.distinct().Summary -->returns a collection containing only distinct (different) values from the original collection<!-- END REF -->.
> This function does not modify the original collection.

The returned collection is automatically sorted. **Null** values are not returned.

By default, a non-diacritical evaluation is performed. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `ck diacritical` constant in the *option* parameter.

If the collection contains objects, you can pass the *propertyPath* parameter to indicate the object property whose distinct values you want to get.



#### Ejemplo

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push("a";"b";"c";"A";"B";"c";"b";"b")
 $c.push(New object("size";1))
 $c.push(New object("size";3))
 $c.push(New object("size";1))
 $c2:=$c.distinct() //$c2=["a","b","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct(ck diacritical) //$c2=["a","A","b","B","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct("size") //$c2=[1,3]
``` 

<!-- END REF -->





<!-- REF collection.equal().Desc -->
## .equal()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.equal().Syntax -->
**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.equal().Params -->
| Parámetros  | Tipo       |    | Descripción                                                      |
| ----------- | ---------- |:--:| ---------------------------------------------------------------- |
| collection2 | Collection | -> | Colección a comparar                                             |
| option      | Integer    | -> | `ck diacritical`: diacritical evaluation ("A" # "a" for example) |
| Resultado   | Booleano   | <- | True if collections are identical, false otherwise               |
<!-- END REF -->


#### Descripción

The `.equal()` function <!-- REF #collection.equal().Summary -->compares the collection with collection2 <!-- END REF -->and returns **true** if they are identical (deep comparison).

By default, a non-diacritical evaluation is performed. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `ck diacritical` constant in the option parameter.
> Elements with **Null** values are not equal to Undefined elements.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.every().Syntax -->
**.every**( *methodName* : Text { ;*...param* : any } ) : Boolean<br>**.every**( *startFrom* : Integer ; *methodName* : Text { ;*...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.every().Params -->
| Parámetros | Tipo     |    | Descripción                                       |
| ---------- | -------- |:--:| ------------------------------------------------- |
| startFrom  | Integer  | -> | Index to start the test at                        |
| methodName | Texto    | -> | Name of the method to call for the test           |
| param      | Mixed    | -> | Parameter(s) to pass to methodName                |
| Resultado  | Booleano | <- | True if all elements successfully passed the test |
<!-- END REF -->


#### Descripción

The `.every()` function <!-- REF #collection.every().Summary -->returns **true** if all elements in the collection successfully passed a test implemented in the provided *methodName* method<!-- END REF -->.


In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any test, with or without the parameter(s). This method receives an `Object` in first parameter ($1) and must set *$1.result* to true for every element fulfilling the test.

*methodName* receives the following parameters:

*   en *$1.value*: valor del elemento a evaluar
*   en *$2*: param
*   en *$N...*: paramN...

*methodName* sets the following parameter(s):

*   *$1.result* (Boolean): **true** if the element value evaluation is successful, **false** otherwise.
*   *$1.stop* (Boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

In all cases, at the point when the `.every()` function encounters the first collection element returning **false** in *$1.result*, it stops calling *methodName* and returns **false**.

By default, `.every()` tests the whole collection. Optionally, you can pass in *startFrom* the index of the element from which to start the test.

*   If *startFrom* >= the collection's length, **false** is returned, which means the collection is not tested.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection ( *startFrom:=startFrom+length*).
*   If *startFrom* = 0, the whole collection is searched (default).


#### Ejemplo 1

```4d
var $c : Collection  
var $b : Boolean
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every("NumberGreaterThan0") //devuelve true
$c.push(-1)
$b:=$c.every("NumberGreaterThan0") //devuelve false
```

With the following ***NumberGreaterThan0*** method:

```4d
$1.result:=$1.value>0
```

#### Ejemplo 2

This example tests that all elements of a collection are of the real type:

```4d
var $c : Collection
var $b : Boolean
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every("TypeLookUp";Is real) //$b=true
$c:=$c.push(New object("name";"Cleveland";"zc";35049))
$c:=$c.push(New object("name";"Blountsville";"zc";35031))
$b:=$c.every("TypeLookUp";Is real) //$b=false
```

With the following ***TypeLookUp*** method:

```4d
#DECLARE ($toEval : Object ; $param : Integer) //$1; $2
If(Value type($toEval.value)=$param)
    $toEval.result:=True
End if
``` 

<!-- END REF -->




<!-- REF collection.extract().Desc -->
## .extract()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.extract().Syntax -->
**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathN* : Text ;... *targetPathN* : Text } ) : Collection<!-- END REF -->


<!-- REF #collection.extract().Params -->
| Parámetros   | Tipo       |    | Descripción                                                                                                                        |
| ------------ | ---------- |:--:| ---------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Texto      | -> | Object property path whose values must be extracted to the new collection                                                          |
| targetpath   | Texto      | -> | Target property path or property name                                                                                              |
| option       | Integer    | -> | `ck keep null`: include null properties in the returned collection (ignored by default). Parameter ignored if *targetPath* passed. |
| Resultado    | Collection | <- | Nueva colección que contiene los valores extraídos                                                                                 |
<!-- END REF -->


#### Descripción

The `.extract()` function <!-- REF #collection.extract().Summary -->creates and returns a new collection containing *propertyPath* values extracted from the original collection of objects<!-- END REF -->.
> This function does not modify the original collection.

The contents of the returned collection depends on the *targetPath* parameter:

*   If the *targetPath* parameter is omitted, `.extract()` populates the new collection with the *propertyPath* values of the original collection.

    By default, elements for which *propertyPath* is null or undefined are ignored in the resulting collection. You can pass the `ck keep null` constant in the *option* parameter to include these values as null elements in the returned collection.


*   If one or more *targetPath* parameter(s) are passed, `.extract()` populates the new collection with the *propertyPath* properties and each element of the new collection is an object with *targetPath* properties filled with the corresponding *propertyPath* properties. Null values are kept (*option* parameter is ignored with this syntax).


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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.fill().Syntax -->
**.fill**( *value* : any ) : Collection<br>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->



<!-- REF #collection.fill().Params -->
| Parámetros | Tipo                                            |    | Descripción                            |
| ---------- | ----------------------------------------------- |:--:| -------------------------------------- |
| value      | number, Text, Collection, Object, Date, Boolean | -> | Filling value                          |
| startFrom  | Integer                                         | -> | Start index (included)                 |
| end        | Integer                                         | -> | End index (not included)               |
| Resultado  | colección                                       | <- | Original collection with filled values |
<!-- END REF -->


#### Descripción

The `.fill()` function <!-- REF #collection.fill().Summary -->fills the collection with the specified *value*, optionally from *startFrom* index to *end* index, and returns the resulting collection<!-- END REF -->.
> This function modifies the original collection.

*   If the *startFrom* parameter is omitted, *value* is set to all collection elements (*startFrom*=0).
*   If the *startFrom* parameter is passed and *end* omitted, *value* is set to collection elements starting at *startFrom* to the last element of the collection (*end*=length).
*   If both the *startFrom* parameter and *end* are passed, *value* is set to collection elements starting at *startFrom* to the element *end*.

In case of inconsistency, the following rules apply:

*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the collection). If the calculated value is negative, *startFrom* is set to 0.
*   If *end* < 0 , it is recalculated as *end:=end+length*.
*   If *end* < *startFrom* (passed or calculated values), the method does nothing.


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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.filter().Syntax -->
**.filter**( *methodName* : Text { ; *...param* : any } ) : Collection<!-- END REF -->


<!-- REF #collection.filter().Params -->
| Parámetros | Tipo       |    | Descripción                                                |
| ---------- | ---------- |:--:| ---------------------------------------------------------- |
| methodName | Texto      | -> | Name of the function to call to filter the collection      |
| param      | Mixed      | -> | Parameter(s) to pass to *methodName*                       |
| Resultado  | Collection | <- | New collection containing filtered elements (shallow copy) |
<!-- END REF -->


#### Descripción

The `.filter()` function <!-- REF #collection.filter().Summary -->returns a new collection containing all elements of the original collection for which *methodName* method result is **true**<!-- END REF -->. This function returns a ***shallow copy***, which means that objects or collections in both collections share the same reference. If the original collection is a shared collection, the returned collection is also a shared collection.
> This function does not modify the original collection.

In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any test, with or without the parameter(s). This method receives an `Object` in first parameter ($1) and must set *$1.result* to **true** for each element fulfilling the condition and thus, to push to the new collection.

*methodName* recibe los siguientes parámetros:

*   in *$1.value*: element value to be filtered
*   en *$2*: *param*
*   en *$N...*: param2...paramN

*methodName* sets the following parameter(s):

*   *$1.result* (boolean): **true** if the element value matches the filter condition and must be kept.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.


#### Ejemplo 1

You want to get the collection of text elements whose length is smaller than 6:

```4d
 var $col;$colNew : Collection
 $col:=New collection("hello";"world";"red horse";66;"tim";"san jose";"miami")
 $colNew:=$col.filter("LengthLessThan";6)
  //$colNew=["hello","world","tim","miami"]
```

The code for ***LengthLessThan*** method is:

```4d
 C_OBJECT($1)
 C_LONGINT($2)
 If(Value type($1.value)=Is text)
    $1.result:=(Length($1.value))<$2
 End if
```

#### Ejemplo 2

You want to filter elements according to their value type:

```4d
 var $c;$c2;$c3 : Collection
 $c:=New collection(5;3;1;4;6;2)
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c2:=$c.filter("TypeLookUp";Is real) // $c2=[5,3,1,4,6,2]
 $c3:=$c.filter("TypeLookUp";Is object)
  // $c3=[{name:Cleveland,zc:35049},{name:Blountsville,zc:35031}]
```

The code for ***TypeLookUp*** is:

```4d
 C_OBJECT($1)
 C_LONGINT($2)
 If(OB Get type($1;"value")=$2)


    $1.result:=True
 End if
``` 

<!-- END REF -->





<!-- REF collection.find().Desc -->
## .find()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.find().Syntax -->
**.find**( *methodName* : Text { ; *...param* : any } ) : any<br>**.find**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : any<!-- END REF -->


<!-- REF #collection.find().Params -->
| Parámetros | Tipo    |    | Descripción                                  |
| ---------- | ------- |:--:| -------------------------------------------- |
| startFrom  | Integer | -> | Index to start the search at                 |
| methodName | Texto   | -> | Name of the function to call for the find    |
| param      | any     | -> | Parameter(s) to pass to *methodName*         |
| Resultado  | any     | <- | First value found, or Undefined if not found |
<!-- END REF -->


#### Descripción

The `.find()` function <!-- REF #collection.find().Summary -->returns the first value in the collection for which *methodName*, applied on each element, returns **true**<!-- END REF -->.
> This function does not modify the original collection.

In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any test, with or without the parameter(s). This method receives an `Object` in the first parameter ($1) and must set *$1.result* to **true** for the first element fulfilling the condition.

*methodName* receives the following parameters:

*   en *$1.value:* valor del elemento a evaluar
*   en *$2: param*
*   en *$N...*: param2...paramN

*methodName* sets the following parameter(s):

*   *$1.result* (boolean): **true** if the element value matches the search condition.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

By default, `.find()` searches in the whole collection. Optionally, you can pass in *startFrom* the index of element from which to start the search.

*   If *startFrom* >= the collection's length, -1 is returned, which means the collection is not searched.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom:=startFrom+length*). **Note**: Even if *startFrom* is negative, the collection is still searched from left to right.
*   If *startFrom* = 0, the whole collection is searched (default).


#### Ejemplo 1

You want to get the first element with a length smaller than 5:

```4d
 var $col : Collection
 $col:=New collection("hello";"world";4;"red horse";"tim";"san jose")
 $value:=$col.find("LengthLessThan";5) //$value="tim"
```

The code for ***LengthLessThan*** method is:

```4d
 var $1 : Object
 var $2 : Integer
 If(Value type($1.value)=Is text)
    $1.result:=(Length($1.value))<$2
 End if
```

#### Ejemplo 2

You want to find a city name within a collection:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $c2:=$c.find("FindCity";"Clanton") //$c2={name:Clanton,zc:35046}
```

The code for ***FindCity*** is:

```4d
 var $1 : Object
 var $2 : Text
 $1.result:=$1.value.name=$2 //name es un nombre de propiedad de los objetos de la colección
``` 

<!-- END REF -->





<!-- REF collection.findIndex().Desc -->
## .findIndex()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>


<!-- REF #collection.findIndex().Syntax -->
**.findIndex**( *methodName* : Text { ; *...param* : any } ) : Integer<br>**.findIndex**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Integer<!-- END REF -->



<!-- REF #collection.findIndex().Params -->
| Parámetros | Tipo    |    | Descripción                                    |
| ---------- | ------- |:--:| ---------------------------------------------- |
| startFrom  | Integer | -> | Index to start the search at                   |
| methodName | Texto   | -> | Name of the function to call for the find      |
| param      | any     | -> | Parameter(s) to pass to *methodName*           |
| Resultado  | Integer | <- | Index of first value found, or -1 if not found |
<!-- END REF -->


#### Descripción

The `.findIndex()` function <!-- REF #collection.findIndex().Summary -->returns the index, in the collection, of the first value for which *methodName*, applied on each element, returns **true**<!-- END REF -->.
> Esta función no modifica la colección original.

In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any test, using or not the parameter(s). This method receives an `Object` as first parameter ($1) and must set *$1.result* to **true** for the first element fulfilling the condition.

*methodName* receives the following parameters:

*   en *$1.value*: valor del elemento a evaluar
*   en *$2: param*
*   en *$N...*: param2...paramN

*methodName* sets the following parameter(s):

*   *$1.result* (boolean): **true** if the element value matches the search condition.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

By default, `.findIndex()` searches in the whole collection. Optionally, you can pass in *startFrom* the index of element from which to start the search.

*   If *startFrom* >= the collection's length, -1 is returned, which means the collection is not searched.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom:=startFrom+length*). **Note**: Even if *startFrom* is negative, the collection is still searched from left to right.
*   If *startFrom* = 0, the whole collection is searched (default).

#### Ejemplo

You want to find the position of the first city name within a collection:

```4d
 var $c : Collection
 var $val2;$val3 : Integer
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $val2:=$c.findIndex("FindCity";"Clanton") // $val2=3
 $val3:=$c.findIndex($val2+1;"FindCity";"Clanton") //$val3=4
```

The code for ***FindCity*** method is:

```4d
 var $1 : Object
 var $2 : Text
 $1.result:=$1.value.name=$2
``` 


<!-- END REF -->





<!-- REF collection.indexOf().Desc -->
## .indexOf()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.indexOf().Syntax -->
**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.indexOf().Params -->
| Parámetros | Tipo      |    | Descripción                                                                  |
| ---------- | --------- |:--:| ---------------------------------------------------------------------------- |
| toSearch   | expresión | -> | Expression to search in the collection                                       |
| startFrom  | Integer   | -> | Index to start the search at                                                 |
| Resultado  | Integer   | <- | Index of the first occurrence of toSearch in the collection, -1 if not found |
<!-- END REF -->


#### Descripción

The `.indexOf()` function <!-- REF #collection.indexOf().Summary -->searches the *toSearch* expression among collection elements and returns the index of the first found occurrence, or -1 if it was not found<!-- END REF -->.
> This function does not modify the original collection.

In *toSearch*, pass the expression to find in the collection. You can pass:

*   a scalar value (text, number, boolean, date),
*   el valor null,
*   an object or a collection reference.

*toSearch* must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in *startFrom*.

*   If *startFrom* >= the collection's length, -1 is returned, which means the collection is not searched.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom:=startFrom+length*). **Note**: Even if *startFrom* is negative, the collection is still searched from left to right.
*   If *startFrom* = 0, the whole collection is searched (default).

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.indices().Syntax -->
**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.indices().Params -->
| Parámetros  | Tipo       |    | Descripción                                              |
| ----------- | ---------- |:--:| -------------------------------------------------------- |
| queryString | Texto      | -> | Search criteria                                          |
| value       | any        | -> | Value(s) to compare when using placeholder(s)            |
| Resultado   | Collection | <- | Element index(es) matching queryString in the collection |
<!-- END REF -->


#### Descripción

The `.indices()` function works exactly the same as the [`.query()`](#query) function but <!-- REF #collection.indices().Summary -->returns indexes, in the original collection, of object collection elements that match the *queryString* search conditions<!-- END REF -->, and not elements themselves. Indexes are returned in ascending order.
> This function does not modify the original collection.

The *queryString* parameter uses the following syntax:

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

For a detailed description of the *queryString* and *value* parameters, please refer to the `dataClass.query()` function.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.insert().Syntax -->
**.insert**( *index* : Integer ; *element* : any ) : Collection <!-- END REF -->

<!-- REF #collection.insert().Params -->
| Parámetros | Tipo       |    | Descripción                                     |
| ---------- | ---------- |:--:| ----------------------------------------------- |
| index      | Integer    | -> | Where to insert the element                     |
| element    | any        | -> | Element to insert in the collection             |
| Resultado  | Collection | <- | Original collection containing inserted element |
<!-- END REF -->


#### Descripción

The `.insert()` function <!-- REF #collection.insert().Summary --> inserts *element* at the specified *index* position in the collection instance and returns the edited collection<!-- END REF -->.
> This function modifies the original collection.

In *index*, pass the position where you want the element to be inserted in the collection.
> **Warning**: Keep in mind that collection elements are numbered from 0.

*   If *index* > the length of the collection, actual starting index will be set to the length of the collection.
*   If *index* <0, it is recalculated as *index:=index+length* (it is considered as the offset from the end of the collection).
*   If the calculated value is negative, index is set to 0.

Any type of element accepted by a collection can be inserted, even another collection.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.join().Syntax -->
**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text <!-- END REF -->

<!-- REF #collection.join().Params -->
| Parámetros | Tipo    |    | Descripción                                                              |
| ---------- | ------- |:--:| ------------------------------------------------------------------------ |
| delimiter  | Texto   | -> | Separator to use between elements                                        |
| option     | Integer | -> | `ck ignore null or empty`: ignore null and empty strings in the result   |
| Resultado  | Texto   | <- | String containing all elements of the collection, separated by delimiter |
<!-- END REF -->


#### Descripción

The `.join()` function <!-- REF #collection.join().Summary -->converts all elements of the collection to strings and concatenates them using the specified *delimiter* string as separator<!-- END REF -->.The function returns the resulting string.
> This function does not modify the original collection.

By default, null or empty elements of the collection are returned in the resulting string. Pass the `ck ignore null or empty` constant in the *option* parameter if you want to remove them from the resulting string.

#### Ejemplo


```4d
 var $c : Collection
 var $t1;$t2 : Text
 $c:=New collection(1;2;3;"Paris";Null;"";4;5)
 $t1:=$c.join("|") //1|2|3|Paris|null||4|5
 $t2:=$c.join("|";ck ignore null or empty) //1|2|3|Paris|4|5
``` 

<!-- END REF -->




<!-- REF collection.lastIndexOf().Desc -->
## .lastIndexOf()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.lastIndexOf().Syntax -->
**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.lastIndexOf().Params -->
| Parámetros | Tipo      |    | Descripción                                                             |
| ---------- | --------- |:--:| ----------------------------------------------------------------------- |
| toSearch   | expresión | -> | The element that is to be searched for within the collection            |
| startFrom  | Integer   | -> | Index to start the search at                                            |
| Resultado  | Integer   | <- | Index of last occurrence of toSearch in the collection, -1 if not found |
<!-- END REF -->


#### Descripción

The `.lastIndexOf()` function <!-- REF #collection.lastIndexOf().Summary -->searches the *toSearch* expression among collection elements and returns the index of the last occurrence<!-- END REF -->, or -1 if it was not found.
> This function does not modify the original collection.

In *toSearch*, pass the expression to find in the collection. You can pass:

*   a scalar value (text, number, boolean, date),
*   el valor null,
*   an object or a collection reference.

*toSearch* must match exactly the element to find (the same rules as for the equality operator are applied).

Optionally, you can pass the index of collection from which to start a reverse search in *startFrom*.

*   If *startFrom* >= the collection's length minus one (coll.length-1), the whole collection is searched (default).
*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the collection). If the calculated value is negative, -1 is returned (the collection is not searched). **Note:** Even if *startFrom* is negative, the collection is still searched from right to left.
*   If *startFrom* = 0, -1 is returned, which means the collection is not searched.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R5  | Añadidos       |
</details>

<!-- REF #collection.length.Syntax -->
**.length**: Integer<!-- END REF -->



#### Descripción

The `.length` property <!-- REF #collection.length.Summary -->returns the number of elements in the collection<!-- END REF -->.

The `.length` property is initialized when the collection is created. Adding or removing elements updates the length, if necessary. This property is **read-only** (you cannot use it to set the size of the collection).

#### Ejemplo


```4d
 var $col : Collection //$col.length initialized to 0
 $col:=New collection("one";"two";"three") //$col.length updated to 3
 $col[4]:="five" //$col.length updated to 5
 $vSize:=$col.remove(0;3).length //$vSize=2
``` 

<!-- END REF -->




<!-- REF collection.map().Desc -->
## .map()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.map().Syntax -->
**.map**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.map().Params -->
| Parámetros | Tipo       |    | Descripción                                              |
| ---------- | ---------- |:--:| -------------------------------------------------------- |
| methodName | Texto      | -> | Name of method used to transform the collection elements |
| param      | any        | -> | Parameter(s) for the method                              |
| Resultado  | Collection | <- | Collection of transformed values                         |
<!-- END REF -->


#### Descripción

The `.map()` function <!-- REF #collection.map().Summary -->creates a new collection based upon the result of the call of the *methodName* method on each element of the original collection<!-- END REF -->. Optionally, you can pass parameters to *methodName* using the *param* parameter(s). `.map()` always returns a collection with the same size as the original collection.
> Esta función no modifica la colección original.

In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any operation, with or without the parameter(s).

*methodName* receives the following parameters:

*   en *$1.value* (todo tipo): valor del elemento que se va a asignar
*   in *$2* (any type): *param*
*   en *$N...* (any type): *paramN...*

*methodName* sets the following parameter(s):


*   *$1.result* (todo tipo): nuevo valor transformado para añadir a la colección resultante
*   *$1.stop* (boolean): **true** para detener la retrollamada del método. The returned value is the last calculated.

#### Ejemplo


```4d
 var $c; $c2 : Collection
 $c:=New collection(1;4;9;10;20)
 $c2:=$c.map("Percentage";$c.sum())
  //$c2=[2.27,9.09,20.45,22.73,45.45]
```

Here is the ***Percentage*** method:

```4d
 var $1 : Object
 var $2 : Real
 $1.result:=Round(($1.value/$2)*100;2)
``` 


<!-- END REF -->





<!-- REF collection.max().Desc -->
## .max()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.max().Syntax -->
**.max**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.max().Params -->
| Parámetros   | Tipo                                            |    | Descripción                                    |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------------------- |
| propertyPath | Texto                                           | -> | Object property path to be used for evaluation |
| Resultado    | Boolean, Text, Number, Collection, Object, Date | <- | Maximum value in the collection                |
<!-- END REF -->


#### Descripción

The `.max()` function <!-- REF #collection.max().Summary -->returns the element with the highest value in the collection<!-- END REF --> (the last element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).
> This function does not modify the original collection.

If the collection contains different types of values, the `.max()` function will return the maximum value within the last element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property whose maximum value you want to get.

If the collection is empty, `.max()` returns *Undefined*.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.min().Syntax -->
**.min**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.min().Params -->
| Parámetros   | Tipo                                            |    | Descripción                                    |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------------------- |
| propertyPath | Texto                                           | -> | Object property path to be used for evaluation |
| Resultado    | Boolean, Text, Number, Collection, Object, Date | <- | Minimum value in the collection                |
<!-- END REF -->


#### Descripción

The `.min()` function <!-- REF #collection.min().Summary -->returns the element with the smallest value in the collection<!-- END REF --> (the first element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).
> Esta función no modifica la colección original.

If the collection contains different types of values, the `.min()` function will return the minimum value within the first element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property whose minimum value you want to get.

If the collection is empty, `.min()` returns *Undefined*.

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




<!-- REF collection.orderBy().Desc -->
## .orderBy()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.orderBy().Syntax -->
**.orderBy**( ) : Collection<br>**.orderBy**( *pathStrings* : Text ) : Collection<br>**.orderBy**( *pathObjects* : Collection ) : Collection<br>**.orderBy**( *ascOrDesc* : Integer ) : Collection <!-- END REF -->


<!-- REF #collection.orderBy().Params -->
| Parámetros | Tipo |  | Descripción |
| ---------- | ---- |::| ----------- |
|            |      |  |             |

|pathStrings|Text|->|Property path(s) on which to order the collection| |pathObjects|Collection|->|Collection of criteria objects| |ascOrDesc|Integer|->|`ck ascending` or `ck descending` (scalar values)| |Result|Collection |<-|Ordered copy of the collection (shallow copy)|
<!-- END REF -->


#### Descripción

The `.orderBy()` function <!-- REF #collection.orderBy().Summary -->returns a new collection containing all elements of the collection in the specified order<!-- END REF -->.

This function returns a *shallow copy*, which means that objects or collections in both collections share the same reference. If the original collection is a shared collection, the returned collection is also a shared collection.
> This function does not modify the original collection.

If you pass no parameter, the function orders scalar values in the collection in ascending order (other element types such as objects or collections are returned unordered). You can modify this automatic order by passing the `ck ascending` or `ck descending` constants in the *ascOrDesc* parameter (see below).

You can also pass a criteria parameter to define how the collection elements must be sorted. Three syntaxes are supported for this parameter:

*   *pathStrings* : Text (formula). **Syntax**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (default order: asc). *pathStrings* contains a formula made of 1 to x property paths and (optionally) sort orders, separated by commas. The order in which the properties are passed determines the sorting priority of the collection elements. By default, properties are sorted in ascending order. You can set the sort order of a property in the criteria string, separated from the property path by a single space: pass "asc" to sort in ascending order or "desc" in descending order.

*   *pathObjects* : Collection. You can add as many objects in the *pathObjects* collection as necessary. By default, properties are sorted in ascending order ("descending" is false). Each element of the collection contains an object structured in the following way:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

*   *ascOrDesc*: Integer. You pass one of the following constants from the **Objects and collections** theme:

    | Constante     | Tipo         | Valor | Comentario                                        |
    | ------------- | ------------ | ----- | ------------------------------------------------- |
    | ck ascending  | Entero largo | 0     | Elements are ordered in ascending order (default) |
    | ck descending | Entero largo | 1     | Elements are ordered in descending order          |

    This syntax orders scalar values in the collection only (other element types such as objects or collections are returned unordered).

If the collection contains elements of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.  null
2.  booleanos
3.  strings
4.  numbers
5.  objetos
6.  collections
7.  fechas

#### Ejemplo 1

Ordering a collection of numbers in ascending and descending order:

```4d
 var $c; $c2; $3 : Collection 
 $c:=New collection
 For($vCounter;1;10)
    $c.push(Random)
 End for
 $c2:=$c.orderBy(ck ascending)
 $c3:=$c.orderBy(ck descending)
```


#### Ejemplo 2

Ordering a collection of objects based on a text formula with property names:

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

Ordering a collection of objects with a property path:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))

 $c2:=$c.orderBy("phones.p1 asc")
```


#### Ejemplo 3

Ordering a collection of objects using a collection of criteria objects:

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

Ordering with a property path:

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.orderByMethod().Syntax -->
**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection <!-- END REF -->


<!-- REF #collection.orderByMethod().Params -->
| Parámetros | Tipo       |    | Descripción                                      |
| ---------- | ---------- |:--:| ------------------------------------------------ |
| methodName | Texto      | -> | Name of method used to specify the sorting order |
| extraParam | expresión  | -> | Parameter(s) for the method                      |
| Resultado  | Collection | <- | Sorted copy of the collection (shallow copy)     |
<!-- END REF -->


#### Descripción

The `.orderByMethod()` function <!-- REF #collection.orderByMethod().Summary -->returns a new collection containing all elements of the collection in the order defined through the *methodName* method<!-- END REF -->.

This function returns a *shallow copy*, which means that objects or collections in both collections share the same reference. If the original collection is a shared collection, the returned collection is also a shared collection.
> This function does not modify the original collection.

In *methodName*, pass a comparison method that compares two values and returns **true** in *$1.result* if the first value is lower than the second value. You can provide additional parameters to *methodName* if necessary.

*   *methodName* will receive the following parameters:
    *   $1 (objeto), donde:
        *   *$1.value* (any type): first element value to be compared
        *   *$1.value2* (any type): second element value to be compared
    *   $2...$N (any type): extra parameters
*   *methodName* sets the following parameter:
    *   *$1.result* (boolean): **true** if *$1.value < $1.value2*, **false** otherwise

#### Ejemplo 1

You want to sort a collection of strings in numerical order rather than alphabetical order:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("33";"4";"1111";"222")
 $c2:=$c.orderBy() //$c2=["1111","222","33","4"], alphabetical order
 $c3:=$c.orderByMethod("NumAscending") // $c3=["4","33","222","1111"]
```

 Here is the code for ***NumAscending***:


```4d
 $1.result:=Num($1.value)<Num($1.value2)
```



#### Ejemplo 2

You want to sort a collection of strings on their length:

```4d
 var $fruits; $c2 : Collection
 $fruits:=New collection("Orange";"Apple";"Grape";"pear";"Banana";"fig";"Blackberry";"Passion fruit")
 $c2:=$fruits.orderByMethod("WordLength")
  //$c2=[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

Here is the code for ***WordLength***:

```4d
 $1.result:=Length(String($1.value))>Length(String($1.value2))
```

#### Ejemplo 3

You want to sort a collection by character code or language:

```4d
var $strings1; $strings2 : Collection
$strings1:=New collection("Alpha";"Charlie";"alpha";"bravo";"Bravo";"charlie")

//utilizando el código de caracteres:
$strings2:=$strings1.orderByMethod("sortCollection";sk character codes)
// resultado : ["Alpha","Bravo","Charlie","alpha","bravo","charlie"]

//utilizando el lenguaje:
$strings2:=$string1s.orderByMethod("sortCollection";sk strict)
// resultado : ["alpha","Alpha","bravo","Bravo","charlie","Charlie"]
```

El método ***sortCollection***:

```4d
var$1Object
var$2Integer // opción de ordenación

$1.result:=(Compare strings($1.value;$1.value2;$2)<0)
``` 

<!-- END REF -->





<!-- REF collection.pop().Desc -->
## .pop()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>


<!-- REF #collection.pop().Syntax -->
**.pop()** : any <!-- END REF -->

<!-- REF #collection.pop().Params -->
| Parámetros | Tipo |    | Descripción                     |
| ---------- | ---- |:--:| ------------------------------- |
| Resultado  | any  | <- | Último elemento de la colección |
<!-- END REF -->


#### Descripción

The `.pop()` function <!-- REF #collection.pop().Summary -->removes the last element from the collection and returns it as the function result<!-- END REF -->.
> Esta función modifica la colección original.

When applied to an empty collection, `.pop()` returns ***undefined***.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.push().Syntax -->
**.push**( *element* : any { ;...*elementN* } ) : Collection <!-- END REF -->

<!-- REF #collection.push().Params -->
| Parámetros | Tipo       |    | Descripción                                   |
| ---------- | ---------- |:--:| --------------------------------------------- |
| element    | Mixed      | -> | Element(s) to add to the collection           |
| Resultado  | Collection | <- | Original collection containing added elements |
<!-- END REF -->


#### Descripción

The `.push()` function <!-- REF #collection.push().Summary -->appends one or more *element*(s) to the end of the collection instance and returns the edited collection<!-- END REF -->.
> This function modifies the original collection.


#### Ejemplo 1

```4d
 var $col : Collection
 $col:=New collection(1;2) //$col=[1,2]
 $col.push(3) //$col=[1,2,3]
 $col.push(6;New object("firstname";"John";"lastname";"Smith"))
  //$col=[1,2,3,6,{firstname:John,lastname:Smith}
```



#### Ejemplo 2

Quiere ordenar la colección resultante:

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

<details><summary>Histórico</summary>
| Versión | Modificaciones           |
| ------- | ------------------------ |
| v17 R5  | Support of querySettings |
| v16 R6  | Añadidos                 |
</details>

<!-- REF #collection.query().Syntax -->
**.query**( *queryString* : Text ; *...value* : any ) : Collection<br>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->


<!-- REF #collection.query().Params -->
| Parámetros    | Tipo       |    | Descripción                                       |
| ------------- | ---------- |:--:| ------------------------------------------------- |
| queryString   | Texto      | -> | Search criteria                                   |
| value         | Mixed      | -> | Value(s) to compare when using placeholder(s)     |
| querySettings | Objeto     | -> | Query options: parameters, attributes             |
| Resultado     | Collection | <- | Element(s) matching queryString in the collection |
<!-- END REF -->


#### Descripción

The `.query()` function <!-- REF #collection.query().Summary -->returns all elements of a collection of objects that match the search conditions <!-- END REF -->defined by *queryString* and (optionally) *value* or *querySettings*. If the original collection is a shared collection, the returned collection is also a shared collection.
> Esta función no modifica la colección original.

The *queryString* parameter uses the following syntax:

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

For detailed information on how to build a query using *queryString*, *value* and *querySettings* parameters, please refer to the [`dataClass.query()`](DataClassClass.md#query) function description.

> Formulas are not supported by the `collection.query()` function, neither in the *queryString* parameter nor as *formula* object parameter.

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

This example returns persons whose name contains "in":

```4d
 $col:=$c.query("name = :1";"@in@")
  //$col=[{name:Winch...},{name:Sterling...}]
```

This example returns persons whose name does not begin with a string from a variable (entered by the user, for example):

```4d
 $col:=$c.query("name # :1";$aString+"@")
  //if $astring="W"
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}]
```

This example returns persons whose age is not known (property set to null or undefined):

```4d
 $col:=$c.query("age=null") //placeholders not allowed with "null"
  //$col=[{name:Wesson...},{name:Sterling...},{name:Mark...}]
```

This example returns persons hired more than 90 days ago:

```4d
 $col:=$c.query("dateHired < :1";(Current date-90))
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] si hoy es 01/10/2018
```


#### Ejemplo 3

More examples of queries can be found in the `dataClass.query()` page. 

<!-- END REF -->





<!-- REF collection.reduce().Desc -->
## .reduce()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.reduce().Syntax -->
**.reduce**( *methodName* : Text ) : any <br>**.reduce**( *methodName* : Text ; *initValue* : any { ; *...param* : expression } ) : any <!-- END REF -->


<!-- REF #collection.reduce().Params -->
| Parámetros | Tipo                                            |    | Descripción                                                          |
| ---------- | ----------------------------------------------- |:--:| -------------------------------------------------------------------- |
| methodName | Texto                                           | -> | Name of the function to call to process collection elements          |
| initValue  | Text, Number, Object, Collection, Date, Boolean | -> | Value to use as the first argument to the first call of *methodName* |
| param      | expresión                                       | -> | Parameter(s) to pass to *methodName*                                 |
| Resultado  | Text, Number, Object, Collection, Date, Boolean | <- | Result of the accumulator value                                      |
<!-- END REF -->


#### Descripción


The `.reduce()` function <!-- REF #collection.reduce().Summary -->applies the *methodName* callback method against an accumulator and each element in the collection (from left to right) to reduce it to a single value<!-- END REF -->.
> This function does not modify the original collection.

In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in param (optional). *methodName* takes each collection element and performs any desired operation to accumulate the result into *$1.accumulator*, which is returned in *$1.value*.

You can pass the value to initialize the accumulator in *initValue*. If omitted, *$1.accumulator* starts with *Undefined*.

*methodName* receives the following parameters:

*   en *$1.value*: valor del elemento a procesar
*   en *$2: param*
*   en *$N...*: *paramN...*

*methodName* sets the following parameter(s):

*   *$1.accumulator*: value to be modified by the function and which is initialized by *initValue*.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.


#### Ejemplo 1


```4d
 C_COLLECTION($c)
 $c:=New collection(5;3;5;1;3;4;4;6;2;2)
 $r:=$c.reduce("Multiply";1) //devuelve 86400
```

With the following ***Multiply*** method:

```4d
 If(Value type($1.value)=Is real)
    $1.accumulator:=$1.accumulator*$1.value
 End if
```

#### Ejemplo

This example allows reducing several collection elements to a single one:

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduce("Flatten") //$r=[0,1,2,3,4,5,6,7]
```

With the following ***Flatten*** method:

```4d
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->




<!-- REF collection.remove().Desc -->
## .remove()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.remove().Syntax -->
**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection <!-- END REF -->


<!-- REF #collection.remove().Params -->
| Parámetros | Tipo       |    | Descripción                                           |
| ---------- | ---------- |:--:| ----------------------------------------------------- |
| index      | Integer    | -> | Element at which to start removal                     |
| howMany    | Integer    | -> | Number of elements to remove, or 1 element if omitted |
| Resultado  | Collection | <- | Original collection without removed element(s)        |
<!-- END REF -->


#### Descripción

The `.remove()` function <!-- REF #collection.remove().Summary -->removes one or more element(s) from the specified *index* position in the collection and returns the edited collection<!-- END REF -->.
> This function modifies the original collection.

In *index*, pass the position where you want the element to be removed from the collection.
> **Warning**: Keep in mind that collection elements are numbered from 0. If *index* is greater than the length of the collection, actual starting index will be set to the length of the collection.

*   If *index* < 0, it is recalculated as *index:=index+length* (it is considered as the offset from the end of the collection).
*   If the calculated value < 0, *index* is set to 0.
*   If the calculated value > the length of the collection, *index* is set to the length.

In *howMany*, pass the number of elements to remove from *index*. If *howMany* is not specified, then one element is removed.



If you try to remove an element from an empty collection, the method does nothing (no error is generated).


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


<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>



<!-- REF #collection.resize().Syntax -->
**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.resize().Params -->
| Parámetros   | Tipo                                            |    | Descripción                        |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------- |
| size         | Integer                                         | -> | New size of the collection         |
| defaultValue | Number, Text, Object, Collection, Date, Boolean | -> | Default value to fill new elements |
| Resultado    | Collection                                      | <- | Resized original collection        |
<!-- END REF -->


#### Descripción

The `.resize()` function <!-- REF #collection.resize().Summary -->sets the collection length to the specified new size and returns the resized collection<!-- END REF -->.
> This function modifies the original collection.

*   If *size* < collection length, exceeding elements are removed from the collection.
*   If *size* > collection length, the collection length is increased to size.

Por defecto, los nuevos elementos se llenan con valores **null**. You can specify the value to fill in added elements using the *defaultValue* parameter.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.reverse().Syntax -->
**.reverse( )** : Collection <!-- END REF -->

<!-- REF #collection.reverse().Params -->
| Parámetros | Tipo       |    | Descripción                     |
| ---------- | ---------- |:--:| ------------------------------- |
| Resultado  | Collection | <- | Inverted copy of the collection |
<!-- END REF -->


#### Descripción

The `.reverse()` function <!-- REF #collection.reverse().Summary -->returns a deep copy of the collection with all its elements in reverse order<!-- END REF -->. If the original collection is a shared collection, the returned collection is also a shared collection.
> This function does not modify the original collection.

#### Ejemplo


```4d
 var $c; $c2 : Collection
 $c:=New collection(1;3;5;2;4;6)
 $c2:=$c.reverse() //$c2=[6,4,2,5,3,1]
```

<!-- END REF -->





<!-- REF collection.shift().Desc -->
## .shift()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.shift().Syntax -->
**.shift()** : any<!-- END REF -->

<!-- REF #collection.shift().Params -->
| Parámetros | Tipo |    | Descripción                 |
| ---------- | ---- |:--:| --------------------------- |
| Resultado  | any  | <- | First element of collection |
<!-- END REF -->


#### Descripción

The `.shift()` function <!-- REF #collection.shift().Summary -->removes the first element of the collection and returns it as the function result<!-- END REF -->.
> This function modifies the original collection.

If the collection is empty, this method does nothing.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.slice().Syntax -->
**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.slice().Params -->
| Parámetros | Tipo       |    | Descripción                                              |
| ---------- | ---------- |:--:| -------------------------------------------------------- |
| startFrom  | Integer    | -> | Index to start the search at (included)                  |
| end        | Integer    | -> | End index (not included)                                 |
| Resultado  | Collection | <- | New collection containing sliced elements (shallow copy) |
<!-- END REF -->


#### Descripción

The `.slice()` function <!-- REF #collection.slice().Summary -->returns a portion of a collection into a new collection<!-- END REF -->, selected from *startFrom* index to *end* index (end not included). This function returns a *shallow copy* of the collection. If the original collection is a shared collection, the returned collection is also a shared collection.
> This function does not modify the original collection.

The returned collection contains the element specified by *startFrom* and all subsequent elements up to, but not including, the element specified by *end*. If only the *startFrom* parameter is specified, the returned collection contains all elements from *startFrom* to the last element of the original collection.

*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the collection).
*   If the calculated value < 0, *startFrom* is set to 0.
*   If *end* < 0 , it is recalculated as *end:=end+length*.
*   If *end < startFrom* (passed or calculated values), the method does nothing.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.some().Syntax -->
**.some**( *methodName* : Text { ; *...param* : any } ) : Boolean<br>**.some**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Boolean<!-- END REF -->


<!-- REF #collection.some().Params -->
| Parámetros | Tipo     |    | Descripción                                               |
| ---------- | -------- |:--:| --------------------------------------------------------- |
| startFrom  | Integer  | -> | Index to start the test at                                |
| methodName | Texto    | -> | Name of the method to call for the test                   |
| param      | Mixed    | -> | Parameter(s) to pass to *methodName*                      |
| Resultado  | Booleano | <- | True if at least one element successfully passed the test |
<!-- END REF -->


#### Descripción

The `.some()` function <!-- REF #collection.some().Summary -->returns true if at least one element in the collection successfully passed a test<!-- END REF --> implemented in the provided *methodName* method.


In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any test, with or without the parameter(s). Este método recibe un `Object` como primer parámetro ($1) y debe definir *$ 1.result* en **True** para cada elemento que cumpla la prueba.

*methodName* receives the following parameters:

*   en *$1.value*: valor del elemento a evaluar
*   en *$2*: param
*   en *$N...*: param2...paramN

*methodName* sets the following parameter(s):

*   *$1.result* (boolean): **true** if the element value evaluation is successful, **false** otherwise.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

In any case, at the point where `.some()` function encounters the first collection element returning true in *$1.result*, it stops calling *methodName* and returns **true**.

By default, `.some()` tests the whole collection. Optionally, you can pass the index of an element from which to start the test in *startFrom*.

*   If *startFrom* >= the collection's length, **False** is returned, which means the collection is not tested.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection.
*   If *startFrom* = 0, the whole collection is searched (default).


#### Ejemplo


```4d
 var $c : Collection
 var $b : Boolean
 $c:=New collection
 $c.push(-5;-3;-1;-4;-6;-2)
 $b:=$c.some("NumberGreaterThan0") // devuelve false
 $c.push(1)
 $b:=$c.some("NumberGreaterThan0") // devuelve true

 $c:=New collection
 $c.push(1;-5;-3;-1;-4;-6;-2)
 $b:=$c.some("NumberGreaterThan0") //$b=true
 $b:=$c.some(1;"NumberGreaterThan0") //$b=false
```

With the following *NumberGreaterThan0* method:

```4d
 $1.result:=$1.value>0
```


<!-- END REF -->





<!-- REF collection.sort().Desc -->
## .sort()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.sort().Syntax -->
**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.sort().Params -->
| Parámetros | Tipo       |    | Descripción                                      |
| ---------- | ---------- |:--:| ------------------------------------------------ |
| methodName | Texto      | -> | Name of method used to specify the sorting order |
| extraParam | any        | -> | Parameter(s) for the method                      |
| Resultado  | Collection | <- | Original collection sorted                       |
<!-- END REF -->


#### Descripción

The `.sort()` function <!-- REF #collection.sort().Summary -->sorts the elements of the original collection<!-- END REF --> and also returns the sorted collection.
> Esta función modifica la colección original.

If `.sort()` is called with no parameters, only scalar values (number, text, date, booleans) are sorted. Elements are sorted by default in ascending order, according to their type.

If you want to sort the collection elements in some other order or sort any type of element, you must supply in *methodName* a comparison method that compares two values and returns **true** in *$1.result* if the first value is lower than the second value. You can provide additional parameters to *methodName* if necessary.

*   *methodName* will receive the following parameters:
    *   $1 (objeto), donde:
        *   *$1.value* (any type): first element value to be compared
        *   *$1.value2* (any type): second element value to be compared
    *   $2...$N (any type): extra parameters

*methodName* sets the following parameter:
    *   *$1.result* (boolean): **true** if *$1.value < $1.value2*, **false** otherwise

If the collection contains elements of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.  null
2.  booleanos
3.  strings
4.  numbers
5.  objetos
6.  collections
7.  fechas

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
 $col2:=$col.sort() //ordenación numérica: [4,33,66,222,1111]
 $col3:=$col.sort("numberOrder") //ordenación alfabética: [1111,222,33,4,66]
```

```4d
  //método proyecto numberOrder
 var $1 : Object
 $1.result:=String($1.value)<String($1.value2)
``` 
 
<!-- END REF -->




<!-- REF collection.sum().Desc -->
## .sum()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.sum().Syntax -->
**.sum**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.sum().Params -->
| Parámetros   | Tipo  |    | Descripción                                     |
| ------------ | ----- |:--:| ----------------------------------------------- |
| propertyPath | Texto | -> | Object property path to be used for calculation |
| Resultado    | Real  | <- | Sum of collection values                        |
<!-- END REF -->


#### Descripción

The `.sum()` function <!-- REF #collection.sum().Summary -->returns the sum for all values in the collection instance<!-- END REF -->.

Only numerical elements are taken into account for the calculation (other element types are ignored).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property to take into account.

`.sum()` returns 0 if:

*   the collection is empty,
*   the collection does not contain numerical elements,
*   *propertyPath* is not found in the collection.

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v16 R6  | Añadidos       |
</details>

<!-- REF #collection.unshift().Syntax -->
**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.unshift().Params -->
| Parámetros | Tipo                                   |    | Descripción                                           |
| ---------- | -------------------------------------- |:--:| ----------------------------------------------------- |
| value      | Text, Number, Object, Collection, Date | -> | Value(s) to insert at the beginning of the collection |
| Resultado  | Real                                   | <- | Collection containing added element(s)                |
<!-- END REF -->


#### Descripción

The `.unshift()` function <!-- REF #collection.unshift().Summary -->inserts the given *value*(s) at the beginning of the collection <!-- END REF -->and returns the modified collection.
> Esta función modifica la colección original.

If several values are passed, they are inserted all at once, which means that they appear in the resulting collection in the same order as in the argument list.


#### Ejemplo


```4d
 var $c : Collection
 $c:=New collection(1;2)
 $c.unshift(4) // $c=[4,1,2]
 $c.unshift(5) //$c=[5,4,1,2]
 $c.unshift(6;7) // $c=[6,7,5,4,1,2]
```

<!-- END REF -->


<style> h2 { background: #d9ebff;}</style>
