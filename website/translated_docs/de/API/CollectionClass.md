---
id: CollectionClass
title: Collection
---


The Collection class manages [Collection](Concepts/dt_collection.md) type variables.

A collection is initialized with:

|                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**New collection** {( *...value* : any )} : Collection](#new-collection)<p>&nbsp;&nbsp;&nbsp;&nbsp; creates a new empty or prefilled collection                      |
| [**New shared collection** {( *...value* : any )} : Collection](#new-shared-collection)<p>&nbsp;&nbsp;&nbsp;&nbsp; creates a new empty or prefilled shared collection |


### Beispiel

```4d
 var $colVar : Collection //creation of collection type 4D variable
 $colVar:=New collection //initialization of the collection and assignment to the 4D variable
```


### Summary


|                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.average**( {*propertyPath* : Text } ) : Real](#average)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the arithmetic mean (average) of defined values in the collection instance                                                                                                                                                                                                               |
| [**.clear()** : Collection](#clear)<p>&nbsp;&nbsp;&nbsp;&nbsp;removes all elements from the collection instance and returns an empty collection                                                                                                                                                                                                                                        |
| [**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection](#combine)<p>&nbsp;&nbsp;&nbsp;&nbsp;inserts *col2* elements at the end or at the specified *index* position in the collection instance and returns the edited collection                                                                                                                                     |
| [**.concat**( *value* : any { *;...valueN* } ) : Collection](#concat)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a new collection containing the elements of the original collection with all elements of the *value* parameter added to the end                                                                                                                                                |
| [**.copy**() : Collection<br>**.copy**( *option* : Integer ) : Collection<br>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection](#copy)<p>&nbsp;&nbsp;&nbsp;&nbsp; returns a deep copy of the collection instance                                                  |
| [**.count**( { *propertyPath* : Text } ) : Real](#count)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the number of non-null elements in the collection                                                                                                                                                                                                                                           |
| [**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real](#countvalues)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the number of times value is found in the collection                                                                                                                                                                                                             |
| [**.distinct**( {*option* : Integer} ) : Collection<br>**.distinct**( *propertyPath* : Text {; *option* : Integer } ) : Collection](#distinct)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a collection containing only distinct (different) values from the original collection                                                                                                           |
| [**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean](#equal)<p>&nbsp;&nbsp;&nbsp;&nbsp;compares the collection with collection2                                                                                                                                                                                                                                |
| [**.every**( *methodName* : Text { ;*...param* : any } ) : Boolean<br>**.every**( *startFrom* : Integer ; *methodName* : Text { ;*...param* : any } ) : Boolean](#every)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns **true** if all elements in the collection successfully passed a test implemented in the provided *methodName* method                                                 |
| [**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathN* : Text ;... *targetPathN* : Text } ) : Collection](#extract)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates and returns a new collection containing *propertyPath* values extracted from the original collection of objects |
| [**.fill**( *value* : any ) : Collection<br>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection](#fill)<p>&nbsp;&nbsp;&nbsp;&nbsp;fills the collection with the specified *value*, optionally from *startFrom* index to *end* index, and returns the resulting collection                                                                    |
| [**.filter**( *methodName* : Text { ; *...param* : any } ) : Collection](#filter)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a new collection containing all elements of the original collection for which *methodName* method result is **true**                                                                                                                                               |
| [**.find**( *methodName* : Text { ; *...param* : any } ) : any<br>**.find**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : any](#find)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the first value in the collection for which *methodName*, applied on each element, returns **true**                                                                            |
| [**.findIndex**( *methodName* : Text { ; *...param* : any } ) : Integer<br>**.findIndex**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Integer](#find)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the index, in the collection, of the first value for which *methodName*, applied on each element, returns **true**                                           |
| [**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer ](#indexof)<p>&nbsp;&nbsp;&nbsp;&nbsp;searches the *toSearch* expression among collection elements and returns the index of the first found occurrence, or -1 if it was not found                                                                                                                      |
| [**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection ](#indices)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns indexes, in the original collection, of object collection elements that match the *queryString* search conditions                                                                                                                                             |
| [**.insert**( *index* : Integer ; *element* : any ) : Collection ](#insert)<p>&nbsp;&nbsp;&nbsp;&nbsp; inserts *element* at the specified *index* position in the collection instance and returns the edited collection                                                                                                                                                                |
| [**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text ](#join)<p>&nbsp;&nbsp;&nbsp;&nbsp;converts all elements of the collection to strings and concatenates them using the specified *delimiter* string as separator                                                                                                                                                       |
| [**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer ](#lastindexof)<p>&nbsp;&nbsp;&nbsp;&nbsp;searches the *toSearch* expression among collection elements and returns the index of the last occurrence                                                                                                                                                 |
| [**.length** : Integer](#length)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the number of elements in the collection                                                                                                                                                                                                                                                                            |
| [**.map**( *methodName* : Text { ; *...param* : any } ) : Collection ](#map)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates a new collection based upon the result of the call of the *methodName* method on each element of the original collection                                                                                                                                                |
| [**.max**( { *propertyPath* : Text } ) : any ](#max)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the element with the highest value in the collection                                                                                                                                                                                                                                            |
| [**.min**( { *propertyPath* : Text } ) : any ](#min)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the element with the smallest value in the collection                                                                                                                                                                                                                                           |
| [**.orderBy**( ) : Collection<br>**.orderBy**( *pathStrings* : Text ) : Collection<br>**.orderBy**( *pathObjects* : Collection ) : Collection<br>**.orderBy**( *ascOrDesc* : Integer ) : Collection ](#orderby)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a new collection containing all elements of the collection in the specified order                                  |
| [**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection ](#orderbymethod)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a new collection containing all elements of the collection in the order defined through the *methodName* method                                                                                                                         |
| [**.pop()** : any ](#pop)<p>&nbsp;&nbsp;&nbsp;&nbsp;removes the last element from the collection and returns it as the function result                                                                                                                                                                                                                                                 |
| [**.push**( *element* : any { ;...*elementN* } ) : Collection ](#push)<p>&nbsp;&nbsp;&nbsp;&nbsp;appends one or more *element*(s) to the end of the collection instance and returns the edited collection                                                                                                                                                                              |
| [**.query**( *queryString* : Text ; *...value* : any ) : Collection<br>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection ](#query)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns all elements of a collection of objects that match the search conditions                                                                                                           |
| [**.reduce**( *methodName* : Text ) : any <br>**.reduce**( *methodName* : Text ; *initValue* : any { ; *...param* : expression } ) : any ](#reduce)<p>&nbsp;&nbsp;&nbsp;&nbsp;applies the *methodName* callback method against an accumulator and each element in the collection (from left to right) to reduce it to a single value                                             |
| [**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection ](#remove)<p>&nbsp;&nbsp;&nbsp;&nbsp;removes one or more element(s) from the specified *index* position in the collection and returns the edited collection                                                                                                                                                   |
| [**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection ](#resize)<p>&nbsp;&nbsp;&nbsp;&nbsp;sets the collection length to the specified new size and returns the resized collection                                                                                                                                                                                  |
| [**.reverse( )** : Collection ](#reverse)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a deep copy of the collection with all its elements in reverse order                                                                                                                                                                                                                                       |
| [**.shift()** : any](#shift)<p>&nbsp;&nbsp;&nbsp;&nbsp;removes the first element of the collection and returns it as the function result                                                                                                                                                                                                                                               |
| [**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection](#slice)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a portion of a collection into a new collection                                                                                                                                                                                                                     |
| [**.some**( *methodName* : Text { ; *...param* : any } ) : Boolean<br>**.some**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Boolean](#some)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns true if at least one element in the collection successfully passed a test                                                                                              |
| [**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection ](#sort)<p>&nbsp;&nbsp;&nbsp;&nbsp;sorts the elements of the original collection                                                                                                                                                                                                                            |
| [**.sum**( { *propertyPath* : Text } ) : Real](#sum)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the sum for all values in the collection instance                                                                                                                                                                                                                                               |
| [**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection](#unshift)<p>&nbsp;&nbsp;&nbsp;&nbsp;inserts the given *value*(s) at the beginning of the collection                                                                                                                                                                                                                |



## `New collection`


**New collection** {( *...value* : any )} : Collection
| Parameter | Typ                                                                     |    | Beschreibung          |
| --------- | ----------------------------------------------------------------------- |:--:| --------------------- |
| value     | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer | -> | Collection's value(s) |
| Ergebnis  | Collection                                                              | <- | New collection        |


#### Beschreibung

The `New collection` command  creates a new empty or prefilled collection and returns its reference.

If you do not pass any parameters, `New collection` creates an empty collection and returns its reference.

You must assign the returned reference to a 4D variable of the Collection type.
> Keep in mind that `var : Collection` or `C_COLLECTION` statements declare a variable of the `Collection` type but does not create any collection.

Optionally, you can prefill the new collection by passing one or several *value*(s) as parameter(s).

Otherwise, you can add or modify elements subsequently through assignment. Beispiel:

```4d
 myCol[10]:="My new element"
```

If the new element index is beyond the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

You can pass any number of values of any supported type (number, text, date, picture, pointer, object, collection...). Unlike arrays, collections can mix data of different types.

You must pay attention to the following conversion issues:

*   If you pass a pointer, it is kept "as is"; it is evaluated using the `JSON Stringify` command
*   Dates are stored as "yyyy-mm-dd" dates or strings with the "YYYY-MM-DDTHH:mm:ss.SSSZ" format, according to the current "dates inside objects" database setting. When converting 4D dates into text prior to storing them in the collection, by default the program takes the local time zone into account. You can modify this behavior using the `Dates inside objects` selector of the `SET DATABASE PARAMETER` command.
*   If you pass a time, it is stored as a number of milliseconds (Real).

#### Beispiel 1



You want to create a new empty collection and assign it to a 4D collection variable:

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### Beispiel 2

You want to create a prefilled collection:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### Example 3

You create a new collection and then add a new element:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //add a 10th element with value "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```




## `New shared collection`

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**New shared collection** {( *...value* : any )} : Collection
| Parameter | Typ                                                                 |    | Beschreibung                 |
| --------- | ------------------------------------------------------------------- |:--:| ---------------------------- |
| value     | Number, Text, Date, Time, Boolean, Shared object, Shared collection | -> | Shared collection's value(s) |
| Ergebnis  | Collection                                                          | <- | New shared collection        |


#### Beschreibung

The `New shared collection` command  creates a new empty or prefilled shared collection and returns its reference.

Adding an element to this collection must be surrounded by the [`Use...End`](Concepts/shared.md#useend-use) use structure, otherwise an error is generated. Reading an element without a structure is, however, possible.
> For more information on shared collections, please refer to the [Shared objects and collections](Concepts/shared.md) page.

If you do not pass any parameters, `New shared collection` creates an empty shared collection and returns its reference.

You must assign the returned reference to a 4D variable of the Collection type.
> Keep in mind that `var : Collection` or `C_COLLECTION` statements declare a variable of the `Collection` type but does not create any collection.

Optionally, you can prefill the new shared collection by passing one or several *value*(s) as parameter(s). Otherwise, you can add or modify elements subsequently through object notation assignment (see example).

If the new element index is beyond the last existing element of the shared collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

You can pass any number of values of the following supported types:

*   number (real, longint...). Number values are always stored as reals.
*   Text
*   Boolean
*   date
*   time (stored as number of milliseconds - real)
*   Null
*   shared object(*)
*   shared collection(*)
> Unlike standard (not shared) collections, shared collections do not support pictures, pointers, and objects or collections that are not shared.

(*)When a shared object or collection is added to a shared collection, they share the same *locking identifier*. For more information on this point, refer to the **4D Developer**'s guide.

#### Beispiel

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```



## .average()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.average**( {*propertyPath* : Text } ) : Real

| Parameter    | Typ             |    | Beschreibung                                    |
| ------------ | --------------- |:--:| ----------------------------------------------- |
| propertyPath | Text            | -> | Object property path to be used for calculation |
| Ergebnis     | Real, Undefined | <- | Arithmetic mean (average) of collection values  |



#### Beschreibung

The `.average()` function returns the arithmetic mean (average) of defined values in the collection instance.



Only numerical elements are taken into account for the calculation (other element types are ignored).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property to take into account.

`.average()` returns `undefined` if:

*   the collection is empty,
*   the collection does not contain numerical elements,
*   *propertyPath* is not found in the collection.


#### Beispiel 1

```4d
 var $col : Collection
 $col:=New collection(10;20;"Monday";True;6)
 $vAvg:=$col.average() //12
```

#### Beispiel 2

```4d
 var $col : Collection
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $vAvg:=$col.average("salary") //23500
```




## .clear()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.clear()** : Collection
| Parameter | Typ        |    | Beschreibung                                  |
| --------- | ---------- |:--:| --------------------------------------------- |
| Ergebnis  | Collection | <- | Original collection with all elements removed |


#### Beschreibung

The `.clear()` function removes all elements from the collection instance and returns an empty collection.
> This function modifies the original collection.

#### Beispiel

```4d
var $col : Collection
$col:=New collection(1;2;5)
$col.clear()
$vSize:=$col.length //$vSize=0
```






## .combine()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection

| Parameter | Typ        |    | Beschreibung                                                                  |
| --------- | ---------- |:--:| ----------------------------------------------------------------------------- |
| col2      | Collection | -> | Collection to combine                                                         |
| index     | Ganzzahl   | -> | Position to which insert elements to combine in collection (default=length+1) |
| Ergebnis  | Collection | <- | Original collection containing combined element(s)                            |


#### Beschreibung

The `.combine()` function inserts *col2* elements at the end or at the specified *index* position in the collection instance and returns the edited collection. Unlike the `.insert()` function, `.combine()` adds each value of *col2* in the original collection, and not as a single collection element.
> This function modifies the original collection.

By default, *col2* elements are added at the end of the orginal collection. You can pass in *index* the position where you want the *col2* elements to be inserted in the collection.
> **Warning**: Keep in mind that collection elements are numbered from 0.

*   If *index* > the length of the collection, the actual starting *index* will be set to the length of the collection.
*   If *index* < 0, it is recalculated as *index:=index+length* (it is considered as the offset from the end of the collection).
*   If the calculated value is negative, *index* is set to 0.


#### Beispiel

```4d
var $c; $fruits : Collection
$c:=New collection(1;2;3;4;5;6)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$c.combine($fruits;3) //[1,2,3,"Orange","Banana","Apple","Grape",4,5,6]
```






## .concat()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.concat**( *value* : any { *;...valueN* } ) : Collection
| Parameter | Typ                                                            |    | Beschreibung                                                                                                      |
| --------- | -------------------------------------------------------------- |:--:| ----------------------------------------------------------------------------------------------------------------- |
| value     | Number, Text, Object, Collection, Date, Time, Boolean, Picture | -> | Value(s) to concatenate. If *value* is a collection, all collection elements are added to the original collection |
| Ergebnis  | Collection                                                     | <- | New collection with value(s) added to the original collection                                                     |


#### Beschreibung

The `.concat()` function returns a new collection containing the elements of the original collection with all elements of the *value* parameter added to the end.
> This function does not modify the original collection.

If *value* is a collection, all its elements are added as new elements at the end of the original collection. If *value* is not a collection, it is added itself as a new element.


#### Beispiel

```4d
var $c : Collection
$c:=New collection(1;2;3;4;5)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$fruits.push(New object("Intruder";"Tomato"))
$c2:=$c.concat($fruits) //[1,2,3,4,5,"Orange","Banana","Apple","Grape",{"Intruder":"Tomato"}]
$c2:=$c.concat(6;7;8) //[1,2,3,4,5,6,7,8]
```





## .copy()

<details><summary>History</summary>
| Version | Changes                                            |
| ------- | -------------------------------------------------- |
| v18 R3  | New *ck shared* option. New *groupWith* parameters |
| v16 R6  | Added                                              |
</details>

**.copy**() : Collection<br>**.copy**( *option* : Integer ) : Collection<br>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection

| Parameter    | Typ        |    | Beschreibung                                                                                             |
| ------------ | ---------- |:--:| -------------------------------------------------------------------------------------------------------- |
| option       | Ganzzahl   | -> | `ck resolve pointers`: resolve pointers before copying,<br>`ck shared`: return a shared collection |
| groupWithCol | Collection | -> | Shared collection to be grouped with the resulting collection                                            |
| groupWithObj | Objekt     | -> | Shared object to be grouped with the resulting collection                                                |
| Ergebnis     | Collection | <- | Deep copy of the original collection                                                                     |


#### Beschreibung

The `.copy()` function  returns a deep copy of the collection instance.***Deep copy*** means that objects or collections within the original collection are duplicated and do not share any reference with the returned collection.
> This function does not modify the original collection.

If passed, the *option* parameter can contain one of the following constants (or both):

| option                | Beschreibung                                                                                                                                                                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | If the original collection contains pointer type values, by default the copy also contains the pointers. However, you can resolve pointers when copying by passing the ck resolve pointers. In this case, each pointer present in the collection is evaluated when copying and its dereferenced value is used.      |
| `ck shared`           | By default, copy() returns a regular (not shared) collection, even if the command is applied to a shared collection. Pass the ck shared constant to create a shared collection. In this case, you can use the groupWith parameter to associate the shared collection with another collection or object (see below). |

The *groupWithCol* or *groupWithObj* parameters allow you to designate a collection or an object with which the resulting collection should be associated.


#### Beispiel 1

We want to copy the *$lastnames* regular (non shared) collection into the *$sharedObject* shared object. To do this, we must create a shared copy of the collection (*$sharedLastnames*).

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


#### Beispiel 2

We want to combine *$sharedColl1* and *$sharedColl2*. Since they belong to different shared groups, a direct combination would result in an error. Therefore, we must make a shared copy of *$sharedColl1* and designate *$sharedColl2* as a shared group for the copy.

```4d
var $sharedColl1;$sharedColl2;$copyColl : Collection

$sharedColl1:=New shared collection(New shared object("lastname";"Smith"))
$sharedColl2:=New shared collection(New shared object("lastname";"Brown"))

//$copyColl belongs to the same shared group as $sharedColl2
 $copyColl:=$sharedColl1.copy(ck shared;$sharedColl2)
 Use($sharedColl2)
    $sharedColl2.combine($copyColl)
 End use
```

#### Example 3

We have a regular collection (*$lastnames*) and we want to put it in the **Storage** of the application. To do this, we must create a shared copy beforehand (*$sharedLastnames*).

```4d
var $lastnames;$sharedLastnames : Collection
var $text : Text

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) //$lastnames is a regular collection

$sharedLastnames:=$lastnames.copy(ck shared) // shared copy

Use(Storage)
    Storage.lastnames:=$sharedLastnames
End use
```

#### Example 4

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
 ALERT($col[0].alpha+" "+$col2[1].beta) //displays "Hello World!"

 $what:="You!"
 $col3:=$col2.copy(ck resolve pointers)
 ALERT($col3[0].alpha+" "+$col3[1].what) //displays "Hello You!"
```







## .count()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.count**( { *propertyPath* : Text } ) : Real

| Parameter    | Typ  |    | Beschreibung                                    |
| ------------ | ---- |:--:| ----------------------------------------------- |
| propertyPath | Text | -> | Object property path to be used for calculation |
| Ergebnis     | Zahl | <- | Number of elements in the collection            |


#### Beschreibung

The `.count()` function returns the number of non-null elements in the collection.

If the collection contains objects, you can pass the *propertyPath* parameter. In this case, only elements that contain the *propertyPath* are taken into account.

#### Beispiel

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






## .countValues()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real

| Parameter    | Typ                                             |    | Beschreibung                                    |
| ------------ | ----------------------------------------------- |:--:| ----------------------------------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection | -> | Value to count                                  |
| propertyPath | Text                                            | -> | Object property path to be used for calculation |
| Ergebnis     | Zahl                                            | <- | Number of occurrences of the value              |


#### Beschreibung

The `.countValues()` function returns the number of times value is found in the collection.

You can pass in *value*:

*   a scalar value (text, number, boolean, date),
*   an object or a collection reference.


For an element to be found, the type of *value* must be equivalent to the type of the element; the method uses the equality operator.

The optional *propertyPath* parameter allows you to count values inside a collection of objects: pass in *propertyPath* the path of the property whose values you want to count.
> This function does not modify the original collection.

#### Beispiel 1

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection(1;2;5;5;5;3;6;4)
 $vCount:=$col.countValues(5) // $vCount=3
```


#### Beispiel 2

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


#### Example 3

```4d
 var $numbers; $letters : Collection
 var $vCount : Integer

 $letters:=New collection("a";"b";"c")
 $numbers:=New collection(1;2;$letters;3;4;5)

 $vCount:=$numbers.countValues($letters) //$vCount=1
```







## .distinct()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.distinct**( {*option* : Integer} ) : Collection<br>**.distinct**( *propertyPath* : Text {; *option* : Integer } ) : Collection

| Parameter    | Typ        |    | Beschreibung                                                     |
| ------------ | ---------- |:--:| ---------------------------------------------------------------- |
| option       | Ganzzahl   | -> | `ck diacritical`: diacritical evaluation ("A" # "a" for example) |
| propertyPath | Text       | -> | Path of attribute whose distinct values you want to get          |
| Ergebnis     | Collection | <- | New collection with only distinct values                         |


#### Beschreibung

The `.distinct()` function returns a collection containing only distinct (different) values from the original collection.
> This function does not modify the original collection.

The returned collection is automatically sorted. **Null** values are not returned.

By default, a non-diacritical evaluation is performed. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `ck diacritical` constant in the *option* parameter.

If the collection contains objects, you can pass the *propertyPath* parameter to indicate the object property whose distinct values you want to get.



#### Beispiel

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






## .equal()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean
| Parameter   | Typ        |    | Beschreibung                                                     |
| ----------- | ---------- |:--:| ---------------------------------------------------------------- |
| collection2 | Collection | -> | Collection to compare                                            |
| option      | Ganzzahl   | -> | `ck diacritical`: diacritical evaluation ("A" # "a" for example) |
| Ergebnis    | Boolean    | <- | True if collections are identical, false otherwise               |


#### Beschreibung

The `.equal()` function compares the collection with collection2 and returns **true** if they are identical (deep comparison).

By default, a non-diacritical evaluation is performed. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `ck diacritical` constant in the option parameter.
> Elements with **Null** values are not equal to Undefined elements.

#### Beispiel

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





## .every()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.every**( *methodName* : Text { ;*...param* : any } ) : Boolean<br>**.every**( *startFrom* : Integer ; *methodName* : Text { ;*...param* : any } ) : Boolean
| Parameter  | Typ      |    | Beschreibung                                      |
| ---------- | -------- |:--:| ------------------------------------------------- |
| startFrom  | Ganzzahl | -> | Index to start the test at                        |
| methodName | Text     | -> | Name of the method to call for the test           |
| param      | Mixed    | -> | Parameter(s) to pass to methodName                |
| Ergebnis   | Boolean  | <- | True if all elements successfully passed the test |


#### Beschreibung

The `.every()` function returns **true** if all elements in the collection successfully passed a test implemented in the provided *methodName* method.


In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any test, with or without the parameter(s). This method receives an `Object` in first parameter ($1) and must set *$1.result* to true for every element fulfilling the test.

*methodName* receives the following parameters:

*   in *$1.value*: element value to be evaluated
*   in *$2*: param
*   in *$N...*: paramN...

*methodName* sets the following parameter(s):

*   *$1.result* (Boolean): **true** if the element value evaluation is successful, **false** otherwise.
*   *$1.stop* (Boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

In all cases, at the point when the `.every()` function encounters the first collection element returning **false** in *$1.result*, it stops calling *methodName* and returns **false**.

By default, `.every()` tests the whole collection. Optionally, you can pass in *startFrom* the index of the element from which to start the test.

*   If *startFrom* >= the collection's length, **false** is returned, which means the collection is not tested.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection ( *startFrom:=startFrom+length*).
*   If *startFrom* = 0, the whole collection is searched (default).


#### Beispiel 1

```4d
var $c : Collection  
var $b : Boolean
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every("NumberGreaterThan0") //returns true
$c.push(-1)
$b:=$c.every("NumberGreaterThan0") //returns false
```

With the following ***NumberGreaterThan0*** method:

```4d
$1.result:=$1.value>0
```

#### Beispiel 2

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





## .extract()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathN* : Text ;... *targetPathN* : Text } ) : Collection

| Parameter    | Typ        |    | Beschreibung                                                                                                                       |
| ------------ | ---------- |:--:| ---------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text       | -> | Object property path whose values must be extracted to the new collection                                                          |
| targetpath   | Text       | -> | Target property path or property name                                                                                              |
| option       | Ganzzahl   | -> | `ck keep null`: include null properties in the returned collection (ignored by default). Parameter ignored if *targetPath* passed. |
| Ergebnis     | Collection | <- | New collection containing extracted values                                                                                         |


#### Beschreibung

The `.extract()` function creates and returns a new collection containing *propertyPath* values extracted from the original collection of objects.
> This function does not modify the original collection.

The contents of the returned collection depends on the *targetPath* parameter:

*   If the *targetPath* parameter is omitted, `.extract()` populates the new collection with the *propertyPath* values of the original collection.

    By default, elements for which *propertyPath* is null or undefined are ignored in the resulting collection. You can pass the `ck keep null` constant in the *option* parameter to include these values as null elements in the returned collection.


*   If one or more *targetPath* parameter(s) are passed, `.extract()` populates the new collection with the *propertyPath* properties and each element of the new collection is an object with *targetPath* properties filled with the corresponding *propertyPath* properties. Null values are kept (*option* parameter is ignored with this syntax).


#### Beispiel 1

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


#### Beispiel 2


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






## .fill()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.fill**( *value* : any ) : Collection<br>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection


| Parameter | Typ                                             |    | Beschreibung                           |
| --------- | ----------------------------------------------- |:--:| -------------------------------------- |
| value     | number, Text, Collection, Object, Date, Boolean | -> | Filling value                          |
| startFrom | Ganzzahl                                        | -> | Start index (included)                 |
| end       | Ganzzahl                                        | -> | End index (not included)               |
| Ergebnis  | collection                                      | <- | Original collection with filled values |


#### Beschreibung

The `.fill()` function fills the collection with the specified *value*, optionally from *startFrom* index to *end* index, and returns the resulting collection.
> This function modifies the original collection.

*   If the *startFrom* parameter is omitted, *value* is set to all collection elements (*startFrom*=0).
*   If the *startFrom* parameter is passed and *end* omitted, *value* is set to collection elements starting at *startFrom* to the last element of the collection (*end*=length).
*   If both the *startFrom* parameter and *end* are passed, *value* is set to collection elements starting at *startFrom* to the element *end*.

In case of inconsistency, the following rules apply:

*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the collection). If the calculated value is negative, *startFrom* is set to 0.
*   If *end* < 0 , it is recalculated as *end:=end+length*.
*   If *end* < *startFrom* (passed or calculated values), the method does nothing.


#### Beispiel

```4d
 var $c : Collection
 $c:=New collection(1;2;3;"Lemon";Null;"";4;5)
 $c.fill("2") // $c:=[2,2,2,2,2,2,2,2]
 $c.fill("Hello";5) // $c=[2,2,2,2,2,Hello,Hello,Hello]
 $c.fill(0;1;5) // $c=[2,0,0,0,0,Hello,Hello,Hello]
 $c.fill("world";1;-5) //-5+8=3 -> $c=[2,"world","world",0,0,Hello,Hello,Hello]
```






## .filter()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.filter**( *methodName* : Text { ; *...param* : any } ) : Collection

| Parameter  | Typ        |    | Beschreibung                                               |
| ---------- | ---------- |:--:| ---------------------------------------------------------- |
| methodName | Text       | -> | Name of the function to call to filter the collection      |
| param      | Mixed      | -> | Parameter(s) to pass to *methodName*                       |
| Ergebnis   | Collection | <- | New collection containing filtered elements (shallow copy) |


#### Beschreibung

The `.filter()` function returns a new collection containing all elements of the original collection for which *methodName* method result is **true**. This function returns a ***shallow copy***, which means that objects or collections in both collections share the same reference. If the original collection is a shared collection, the returned collection is also a shared collection.
> This function does not modify the original collection.

In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any test, with or without the parameter(s). This method receives an `Object` in first parameter ($1) and must set *$1.result* to **true** for each element fulfilling the condition and thus, to push to the new collection.

*methodName* receives the following parameters:

*   in *$1.value*: element value to be filtered
*   in *$2*: *param*
*   in *$N...*: param2...paramN

*methodName* sets the following parameter(s):

*   *$1.result* (boolean): **true** if the element value matches the filter condition and must be kept.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.


#### Beispiel 1

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

#### Beispiel 2

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






## .find()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.find**( *methodName* : Text { ; *...param* : any } ) : any<br>**.find**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : any

| Parameter  | Typ      |    | Beschreibung                                 |
| ---------- | -------- |:--:| -------------------------------------------- |
| startFrom  | Ganzzahl | -> | Index to start the search at                 |
| methodName | Text     | -> | Name of the function to call for the find    |
| param      | any      | -> | Parameter(s) to pass to *methodName*         |
| Ergebnis   | any      | <- | First value found, or Undefined if not found |


#### Beschreibung

The `.find()` function returns the first value in the collection for which *methodName*, applied on each element, returns **true**.
> This function does not modify the original collection.

In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any test, with or without the parameter(s). This method receives an `Object` in the first parameter ($1) and must set *$1.result* to **true** for the first element fulfilling the condition.

*methodName* receives the following parameters:

*   in *$1.value:* element value to be evaluated
*   in *$2: param*
*   in *$N...*: param2...paramN

*methodName* sets the following parameter(s):

*   *$1.result* (boolean): **true** if the element value matches the search condition.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

By default, `.find()` searches in the whole collection. Optionally, you can pass in *startFrom* the index of element from which to start the search.

*   If *startFrom* >= the collection's length, -1 is returned, which means the collection is not searched.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom:=startFrom+length*). **Note**: Even if *startFrom* is negative, the collection is still searched from left to right.
*   If *startFrom* = 0, the whole collection is searched (default).


#### Beispiel 1

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

#### Beispiel 2

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
 $1.result:=$1.value.name=$2 //name is a property name of objects in the collection
```






## .findIndex()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>


**.findIndex**( *methodName* : Text { ; *...param* : any } ) : Integer<br>**.findIndex**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Integer


| Parameter  | Typ      |    | Beschreibung                                   |
| ---------- | -------- |:--:| ---------------------------------------------- |
| startFrom  | Ganzzahl | -> | Index to start the search at                   |
| methodName | Text     | -> | Name of the function to call for the find      |
| param      | any      | -> | Parameter(s) to pass to *methodName*           |
| Ergebnis   | Ganzzahl | <- | Index of first value found, or -1 if not found |


#### Beschreibung

The `.findIndex()` function returns the index, in the collection, of the first value for which *methodName*, applied on each element, returns **true**.
> This function does not modify the original collection.

In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any test, using or not the parameter(s). This method receives an `Object` as first parameter ($1) and must set *$1.result* to **true** for the first element fulfilling the condition.

*methodName* receives the following parameters:

*   in *$1.value*: element value to be evaluated
*   in *$2: param*
*   in *$N...*: param2...paramN

*methodName* sets the following parameter(s):

*   *$1.result* (boolean): **true** if the element value matches the search condition.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

By default, `.findIndex()` searches in the whole collection. Optionally, you can pass in *startFrom* the index of element from which to start the search.

*   If *startFrom* >= the collection's length, -1 is returned, which means the collection is not searched.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom:=startFrom+length*). **Note**: Even if *startFrom* is negative, the collection is still searched from left to right.
*   If *startFrom* = 0, the whole collection is searched (default).

#### Beispiel

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







## .indexOf()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer
| Parameter | Typ        |    | Beschreibung                                                                 |
| --------- | ---------- |:--:| ---------------------------------------------------------------------------- |
| toSearch  | expression | -> | Expression to search in the collection                                       |
| startFrom | Ganzzahl   | -> | Index to start the search at                                                 |
| Ergebnis  | Ganzzahl   | <- | Index of the first occurrence of toSearch in the collection, -1 if not found |


#### Beschreibung

The `.indexOf()` function searches the *toSearch* expression among collection elements and returns the index of the first found occurrence, or -1 if it was not found.
> This function does not modify the original collection.

In *toSearch*, pass the expression to find in the collection. You can pass:

*   a scalar value (text, number, boolean, date),
*   the null value,
*   an object or a collection reference.

*toSearch* must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in *startFrom*.

*   If *startFrom* >= the collection's length, -1 is returned, which means the collection is not searched.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom:=startFrom+length*). **Note**: Even if *startFrom* is negative, the collection is still searched from left to right.
*   If *startFrom* = 0, the whole collection is searched (default).

#### Beispiel



```4d
 var $col : Collection
 var $i : Integer
 $col:=New collection(1;2;"Henry";5;3;"Albert";6;4;"Alan";5)
 $i:=$col.indexOf(3) //$i=4
 $i:=$col.indexOf(5;5) //$i=9
 $i:=$col.indexOf("al@") //$i=5
 $i:=$col.indexOf("Hello") //$i=-1
```






## .indices()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection

| Parameter   | Typ        |    | Beschreibung                                             |
| ----------- | ---------- |:--:| -------------------------------------------------------- |
| queryString | Text       | -> | Search criteria                                          |
| value       | any        | -> | Value(s) to compare when using placeholder(s)            |
| Ergebnis    | Collection | <- | Element index(es) matching queryString in the collection |


#### Beschreibung

The `.indices()` function works exactly the same as the [`.query()`](#query) function but returns indexes, in the original collection, of object collection elements that match the *queryString* search conditions, and not elements themselves. Indexes are returned in ascending order.
> This function does not modify the original collection.

The *queryString* parameter uses the following syntax:

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

For a detailed description of the *queryString* and *value* parameters, please refer to the `dataClass.query()` function.

#### Beispiel


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





## .insert()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.insert**( *index* : Integer ; *element* : any ) : Collection
| Parameter | Typ        |    | Beschreibung                                    |
| --------- | ---------- |:--:| ----------------------------------------------- |
| index     | Ganzzahl   | -> | Where to insert the element                     |
| element   | any        | -> | Element to insert in the collection             |
| Ergebnis  | Collection | <- | Original collection containing inserted element |


#### Beschreibung

The `.insert()` function  inserts *element* at the specified *index* position in the collection instance and returns the edited collection.
> This function modifies the original collection.

In *index*, pass the position where you want the element to be inserted in the collection.
> **Warning**: Keep in mind that collection elements are numbered from 0.

*   If *index* > the length of the collection, actual starting index will be set to the length of the collection.
*   If *index* <0, it is recalculated as *index:=index+length* (it is considered as the offset from the end of the collection).
*   If the calculated value is negative, index is set to 0.

Any type of element accepted by a collection can be inserted, even another collection.

#### Beispiel

```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d") //$col=["a","b","c","d"]
 $col.insert(2;"X") //$col=["a","b","X","c","d"]
 $col.insert(-2;"Y") //$col=["a","b","X","Y","c","d"]
 $col.insert(-10;"Hi") //$col=["Hi","a","b","X","Y","c","d"]
```






## .join()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text
| Parameter | Typ      |    | Beschreibung                                                             |
| --------- | -------- |:--:| ------------------------------------------------------------------------ |
| delimiter | Text     | -> | Separator to use between elements                                        |
| option    | Ganzzahl | -> | `ck ignore null or empty`: ignore null and empty strings in the result   |
| Ergebnis  | Text     | <- | String containing all elements of the collection, separated by delimiter |


#### Beschreibung

The `.join()` function converts all elements of the collection to strings and concatenates them using the specified *delimiter* string as separator.The function returns the resulting string.
> This function does not modify the original collection.

By default, null or empty elements of the collection are returned in the resulting string. Pass the `ck ignore null or empty` constant in the *option* parameter if you want to remove them from the resulting string.

#### Beispiel


```4d
 var $c : Collection
 var $t1;$t2 : Text
 $c:=New collection(1;2;3;"Paris";Null;"";4;5)
 $t1:=$c.join("|") //1|2|3|Paris|null||4|5
 $t2:=$c.join("|";ck ignore null or empty) //1|2|3|Paris|4|5
```





## .lastIndexOf()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer
| Parameter | Typ        |    | Beschreibung                                                            |
| --------- | ---------- |:--:| ----------------------------------------------------------------------- |
| toSearch  | expression | -> | The element that is to be searched for within the collection            |
| startFrom | Ganzzahl   | -> | Index to start the search at                                            |
| Ergebnis  | Ganzzahl   | <- | Index of last occurrence of toSearch in the collection, -1 if not found |


#### Beschreibung

The `.lastIndexOf()` function searches the *toSearch* expression among collection elements and returns the index of the last occurrence, or -1 if it was not found.
> This function does not modify the original collection.

In *toSearch*, pass the expression to find in the collection. You can pass:

*   a scalar value (text, number, boolean, date),
*   the null value,
*   an object or a collection reference.

*toSearch* must match exactly the element to find (the same rules as for the equality operator are applied).

Optionally, you can pass the index of collection from which to start a reverse search in *startFrom*.

*   If *startFrom* >= the collection's length minus one (coll.length-1), the whole collection is searched (default).
*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the collection). If the calculated value is negative, -1 is returned (the collection is not searched). **Note:** Even if *startFrom* is negative, the collection is still searched from right to left.
*   If *startFrom* = 0, -1 is returned, which means the collection is not searched.

#### Beispiel


```4d
 var $col : Collection
 var $pos1;$pos2;$pos3;$pos4;$pos5 : Integer 
 $col:=Split string("a,b,c,d,e,f,g,h,i,j,e,k,e";",") //$col.length=13
 $pos1:=$col.lastIndexOf("e") //returns 12
 $pos2:=$col.lastIndexOf("e";6) //returns 4
 $pos3:=$col.lastIndexOf("e";15) //returns 12
 $pos4:=$col.lastIndexOf("e";-2) //returns 10
 $pos5:=$col.lastIndexOf("x") //returns -1
```





## .length

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R5  | Added   |
</details>

**.length** : Integer


#### Beschreibung

The `.length` property returns the number of elements in the collection.

The `.length` property is initialized when the collection is created. Adding or removing elements updates the length, if necessary. This property is **read-only** (you cannot use it to set the size of the collection).

#### Beispiel


```4d
 var $col : Collection //$col.length initialized to 0
 $col:=New collection("one";"two";"three") //$col.length updated to 3
 $col[4]:="five" //$col.length updated to 5
 $vSize:=$col.remove(0;3).length //$vSize=2
```





## .map()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.map**( *methodName* : Text { ; *...param* : any } ) : Collection

| Parameter  | Typ        |    | Beschreibung                                             |
| ---------- | ---------- |:--:| -------------------------------------------------------- |
| methodName | Text       | -> | Name of method used to transform the collection elements |
| param      | any        | -> | Parameter(s) for the method                              |
| Ergebnis   | Collection | <- | Collection of transformed values                         |


#### Beschreibung

The `.map()` function creates a new collection based upon the result of the call of the *methodName* method on each element of the original collection. Optionally, you can pass parameters to *methodName* using the *param* parameter(s). `.map()` always returns a collection with the same size as the original collection.
> This function does not modify the original collection.

In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any operation, with or without the parameter(s).

*methodName* receives the following parameters:

*   in *$1.value* (any type): element value to be mapped
*   in *$2* (any type): *param*
*   in *$N...* (any type): *paramN...*

*methodName* sets the following parameter(s):


*   *$1.result* (any type): new transformed value to add to the resulting collection
*   *$1.stop* (boolean): **true** to stop the method callback. The returned value is the last calculated.

#### Beispiel


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







## .max()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.max**( { *propertyPath* : Text } ) : any
| Parameter    | Typ                                             |    | Beschreibung                                   |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------------------- |
| propertyPath | Text                                            | -> | Object property path to be used for evaluation |
| Ergebnis     | Boolean, Text, Number, Collection, Object, Date | <- | Maximum value in the collection                |


#### Beschreibung

The `.max()` function returns the element with the highest value in the collection (the last element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).
> This function does not modify the original collection.

If the collection contains different types of values, the `.max()` function will return the maximum value within the last element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property whose maximum value you want to get.

If the collection is empty, `.max()` returns *Undefined*.

#### Beispiel


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





## .min()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.min**( { *propertyPath* : Text } ) : any
| Parameter    | Typ                                             |    | Beschreibung                                   |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------------------- |
| propertyPath | Text                                            | -> | Object property path to be used for evaluation |
| Ergebnis     | Boolean, Text, Number, Collection, Object, Date | <- | Minimum value in the collection                |


#### Beschreibung

The `.min()` function returns the element with the smallest value in the collection (the first element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).
> This function does not modify the original collection.

If the collection contains different types of values, the `.min()` function will return the minimum value within the first element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property whose minimum value you want to get.

If the collection is empty, `.min()` returns *Undefined*.

#### Beispiel


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





## .orderBy()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.orderBy**( ) : Collection<br>**.orderBy**( *pathStrings* : Text ) : Collection<br>**.orderBy**( *pathObjects* : Collection ) : Collection<br>**.orderBy**( *ascOrDesc* : Integer ) : Collection

| Parameter | Typ |  | Beschreibung |
| --------- | --- |::| ------------ |
|           |     |  |              |

|pathStrings|Text|->|Property path(s) on which to order the collection| |pathObjects|Collection|->|Collection of criteria objects| |ascOrDesc|Integer|->|`ck ascending` or `ck descending` (scalar values)| |Result|Collection |<-|Ordered copy of the collection (shallow copy)|


#### Beschreibung

The `.orderBy()` function returns a new collection containing all elements of the collection in the specified order.

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

*   *ascOrDesc* : Integer. You pass one of the following constants from the **Objects and collections** theme:

    | Constant      | Typ            | Wert | Kommentar                                         |
    | ------------- | -------------- | ---- | ------------------------------------------------- |
    | ck ascending  | Lange Ganzzahl | 0    | Elements are ordered in ascending order (default) |
    | ck descending | Lange Ganzzahl | 1    | Elements are ordered in descending order          |

    This syntax orders scalar values in the collection only (other element types such as objects or collections are returned unordered).

If the collection contains elements of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.  Null
2.  booleans
3.  strings
4.  numbers
5.  objects
6.  collections
7.  dates

#### Beispiel 1

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


#### Beispiel 2

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


#### Example 3

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







## .orderByMethod()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection

| Parameter  | Typ        |    | Beschreibung                                     |
| ---------- | ---------- |:--:| ------------------------------------------------ |
| methodName | Text       | -> | Name of method used to specify the sorting order |
| extraParam | expression | -> | Parameter(s) for the method                      |
| Ergebnis   | Collection | <- | Sorted copy of the collection (shallow copy)     |


#### Beschreibung

The `.orderByMethod()` function returns a new collection containing all elements of the collection in the order defined through the *methodName* method.

This function returns a *shallow copy*, which means that objects or collections in both collections share the same reference. If the original collection is a shared collection, the returned collection is also a shared collection.
> This function does not modify the original collection.

In *methodName*, pass a comparison method that compares two values and returns **true** in *$1.result* if the first value is lower than the second value. You can provide additional parameters to *methodName* if necessary.

*   *methodName* will receive the following parameters:
    *   $1 (object), where:
        *   *$1.value* (any type): first element value to be compared
        *   *$1.value2* (any type): second element value to be compared
    *   $2...$N (any type): extra parameters
*   *methodName* sets the following parameter:
    *   *$1.result* (boolean): **true** if *$1.value < $1.value2*, **false** otherwise

#### Beispiel 1

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



#### Beispiel 2

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

#### Example 3

You want to sort a collection by character code or language:

```4d
var $strings1; $strings2 : Collection
$strings1:=New collection("Alpha";"Charlie";"alpha";"bravo";"Bravo";"charlie")

//using the character code:
$strings2:=$strings1.orderByMethod("sortCollection";sk character codes)
// result : ["Alpha","Bravo","Charlie","alpha","bravo","charlie"]

//using the language:
$strings2:=$string1s.orderByMethod("sortCollection";sk strict)
// result : ["alpha","Alpha","bravo","Bravo","charlie","Charlie"]
```

The ***sortCollection*** method:

```4d
var$1Object
var$2Integer // sort option

$1.result:=(Compare strings($1.value;$1.value2;$2)<0)
```






## .pop()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>


**.pop()** : any
| Parameter | Typ |    | Beschreibung               |
| --------- | --- |:--:| -------------------------- |
| Ergebnis  | any | <- | Last element of collection |


#### Beschreibung

The `.pop()` function removes the last element from the collection and returns it as the function result.
> This function modifies the original collection.

When applied to an empty collection, `.pop()` returns ***undefined***.

#### Beispiel

`.pop()`, used in conjunction with [`.push()`](#push), can be used to implement a first-in, last-out stack feature:

```4d
 var $stack : Collection
 $stack:=New collection //$stack=[]
 $stack.push(1;2) //$stack=[1,2]
 $stack.pop() //$stack=[1]  Returns 2
 $stack.push(New collection(4;5)) //$stack=[[1,[4,5]]
 $stack.pop() //$stack=[1]  Returns [4,5]
 $stack.pop() //$stack=[]  Returns 1
```







## .push()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.push**( *element* : any { ;...*elementN* } ) : Collection
| Parameter | Typ        |    | Beschreibung                                  |
| --------- | ---------- |:--:| --------------------------------------------- |
| element   | Mixed      | -> | Element(s) to add to the collection           |
| Ergebnis  | Collection | <- | Original collection containing added elements |


#### Beschreibung

The `.push()` function appends one or more *element*(s) to the end of the collection instance and returns the edited collection.
> This function modifies the original collection.


#### Beispiel 1

```4d
 var $col : Collection
 $col:=New collection(1;2) //$col=[1,2]
 $col.push(3) //$col=[1,2,3]
 $col.push(6;New object("firstname";"John";"lastname";"Smith"))
  //$col=[1,2,3,6,{firstname:John,lastname:Smith}
```



#### Beispiel 2

You want to sort the resutling collection:

```4d
 var $col; $sortedCol : Collection
 $col:=New collection(5;3;9) //$col=[5,3,9]
 $sortedCol:=$col.push(7;50).sort()
  //$col=[5,3,9,7,50]
  //$sortedCol=[3,5,7,9,50]
```








## .query()

<details><summary>History</summary>
| Version | Changes                  |
| ------- | ------------------------ |
| v17 R5  | Support of querySettings |
| v16 R6  | Added                    |
</details>

**.query**( *queryString* : Text ; *...value* : any ) : Collection<br>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection

| Parameter     | Typ        |    | Beschreibung                                      |
| ------------- | ---------- |:--:| ------------------------------------------------- |
| queryString   | Text       | -> | Search criteria                                   |
| value         | Mixed      | -> | Value(s) to compare when using placeholder(s)     |
| querySettings | Objekt     | -> | Query options: parameters, attributes             |
| Ergebnis      | Collection | <- | Element(s) matching queryString in the collection |


#### Beschreibung

The `.query()` function returns all elements of a collection of objects that match the search conditions defined by *queryString* and (optionally) *value* or *querySettings*. If the original collection is a shared collection, the returned collection is also a shared collection.
> This function does not modify the original collection.

The *queryString* parameter uses the following syntax:

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

For detailed information on how to build a query using *queryString*, *value* and *querySettings* parameters, please refer to the [`dataClass.query()`](DataClassClass.md#query) function description.

> Formulas are not supported by the `collection.query()` function, neither in the *queryString* parameter nor as *formula* object parameter.

#### Beispiel 1

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


#### Beispiel 2


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
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] if today is 01/10/2018
```


#### Example 3

More examples of queries can be found in the `dataClass.query()` page.






## .reduce()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.reduce**( *methodName* : Text ) : any <br>**.reduce**( *methodName* : Text ; *initValue* : any { ; *...param* : expression } ) : any

| Parameter  | Typ                                             |    | Beschreibung                                                         |
| ---------- | ----------------------------------------------- |:--:| -------------------------------------------------------------------- |
| methodName | Text                                            | -> | Name of the function to call to process collection elements          |
| initValue  | Text, Number, Object, Collection, Date, Boolean | -> | Value to use as the first argument to the first call of *methodName* |
| param      | expression                                      | -> | Parameter(s) to pass to *methodName*                                 |
| Ergebnis   | Text, Number, Object, Collection, Date, Boolean | <- | Result of the accumulator value                                      |


#### Beschreibung


The `.reduce()` function applies the *methodName* callback method against an accumulator and each element in the collection (from left to right) to reduce it to a single value.
> This function does not modify the original collection.

In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in param (optional). *methodName* takes each collection element and performs any desired operation to accumulate the result into *$1.accumulator*, which is returned in *$1.value*.

You can pass the value to initialize the accumulator in *initValue*. If omitted, *$1.accumulator* starts with *Undefined*.

*methodName* receives the following parameters:

*   in *$1.value*: element value to be processed
*   in *$2: param*
*   in *$N...*: *paramN...*

*methodName* sets the following parameter(s):

*   *$1.accumulator*: value to be modified by the function and which is initialized by *initValue*.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.


#### Beispiel 1


```4d
 C_COLLECTION($c)
 $c:=New collection(5;3;5;1;3;4;4;6;2;2)
 $r:=$c.reduce("Multiply";1) //returns 86400
```

With the following ***Multiply*** method:

```4d
 If(Value type($1.value)=Is real)
    $1.accumulator:=$1.accumulator*$1.value
 End if
```

#### Beispiel

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





## .remove()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection

| Parameter | Typ        |    | Beschreibung                                          |
| --------- | ---------- |:--:| ----------------------------------------------------- |
| index     | Ganzzahl   | -> | Element at which to start removal                     |
| howMany   | Ganzzahl   | -> | Number of elements to remove, or 1 element if omitted |
| Ergebnis  | Collection | <- | Original collection without removed element(s)        |


#### Beschreibung

The `.remove()` function removes one or more element(s) from the specified *index* position in the collection and returns the edited collection.
> This function modifies the original collection.

In *index*, pass the position where you want the element to be removed from the collection.
> **Warning**: Keep in mind that collection elements are numbered from 0. If *index* is greater than the length of the collection, actual starting index will be set to the length of the collection.

*   If *index* < 0, it is recalculated as *index:=index+length* (it is considered as the offset from the end of the collection).
*   If the calculated value < 0, *index* is set to 0.
*   If the calculated value > the length of the collection, *index* is set to the length.

In *howMany*, pass the number of elements to remove from *index*. If *howMany* is not specified, then one element is removed.



If you try to remove an element from an empty collection, the method does nothing (no error is generated).


#### Beispiel


```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d";"e";"f";"g";"h")
 $col.remove(3) // $col=["a","b","c","e","f","g","h"]
 $col.remove(3;2) // $col=["a","b","c","g","h"]
 $col.remove(-8;1) // $col=["b","c","g","h"]
 $col.remove(-3;1) // $col=["b","g","h"]
```







## .resize()


<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>



**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection
| Parameter    | Typ                                             |    | Beschreibung                       |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------- |
| size         | Ganzzahl                                        | -> | New size of the collection         |
| defaultValue | Number, Text, Object, Collection, Date, Boolean | -> | Default value to fill new elements |
| Ergebnis     | Collection                                      | <- | Resized original collection        |


#### Beschreibung

The `.resize()` function sets the collection length to the specified new size and returns the resized collection.
> This function modifies the original collection.

*   If *size* < collection length, exceeding elements are removed from the collection.
*   If *size* > collection length, the collection length is increased to size.

By default, new elements are filled will **null** values. You can specify the value to fill in added elements using the *defaultValue* parameter.

#### Beispiel


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







## .reverse()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.reverse( )** : Collection
| Parameter | Typ        |    | Beschreibung                    |
| --------- | ---------- |:--:| ------------------------------- |
| Ergebnis  | Collection | <- | Inverted copy of the collection |


#### Beschreibung

The `.reverse()` function returns a deep copy of the collection with all its elements in reverse order. If the original collection is a shared collection, the returned collection is also a shared collection.
> This function does not modify the original collection.

#### Beispiel


```4d
 var $c; $c2 : Collection
 $c:=New collection(1;3;5;2;4;6)
 $c2:=$c.reverse() //$c2=[6,4,2,5,3,1]
```






## .shift()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.shift()** : any
| Parameter | Typ |    | Beschreibung                |
| --------- | --- |:--:| --------------------------- |
| Ergebnis  | any | <- | First element of collection |


#### Beschreibung

The `.shift()` function removes the first element of the collection and returns it as the function result.
> This function modifies the original collection.

If the collection is empty, this method does nothing.

#### Beispiel


```4d
 var $c : Collection
 var $val : Variant
 $c:=New collection(1;2;4;5;6;7;8)
 $val:=$c.shift()
  // $val=1
  // $c=[2,4,5,6,7,8]
```






## .slice()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection
| Parameter | Typ        |    | Beschreibung                                             |
| --------- | ---------- |:--:| -------------------------------------------------------- |
| startFrom | Ganzzahl   | -> | Index to start the search at (included)                  |
| end       | Ganzzahl   | -> | End index (not included)                                 |
| Ergebnis  | Collection | <- | New collection containing sliced elements (shallow copy) |


#### Beschreibung

The `.slice()` function returns a portion of a collection into a new collection, selected from *startFrom* index to *end* index (end not included). This function returns a *shallow copy* of the collection. If the original collection is a shared collection, the returned collection is also a shared collection.
> This function does not modify the original collection.

The returned collection contains the element specified by *startFrom* and all subsequent elements up to, but not including, the element specified by *end*. If only the *startFrom* parameter is specified, the returned collection contains all elements from *startFrom* to the last element of the original collection.

*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the collection).
*   If the calculated value < 0, *startFrom* is set to 0.
*   If *end* < 0 , it is recalculated as *end:=end+length*.
*   If *end < startFrom* (passed or calculated values), the method does nothing.

#### Beispiel


```4d
 var $c; $nc : Collection
 $c:=New collection(1;2;3;4;5)
 $nc:=$c.slice(0;3) //$nc=[1,2,3]
 $nc:=$c.slice(3) //$nc=[4,5]
 $nc:=$c.slice(1;-1) //$nc=[2,3,4]
 $nc:=$c.slice(-3;-2) //$nc=[3]
```






## .some()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.some**( *methodName* : Text { ; *...param* : any } ) : Boolean<br>**.some**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Boolean

| Parameter  | Typ      |    | Beschreibung                                              |
| ---------- | -------- |:--:| --------------------------------------------------------- |
| startFrom  | Ganzzahl | -> | Index to start the test at                                |
| methodName | Text     | -> | Name of the method to call for the test                   |
| param      | Mixed    | -> | Parameter(s) to pass to *methodName*                      |
| Ergebnis   | Boolean  | <- | True if at least one element successfully passed the test |


#### Beschreibung

The `.some()` function returns true if at least one element in the collection successfully passed a test implemented in the provided *methodName* method.


In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in *param* (optional). *methodName* can perform any test, with or without the parameter(s). This method receives an `Object` as first parameter ($1) and must set *$1.result* to **True** for every element fulfilling the test.

*methodName* receives the following parameters:

*   in *$1.value*: element value to be evaluated
*   in *$2*: param
*   in *$N...*: param2...paramN

*methodName* sets the following parameter(s):

*   *$1.result* (boolean): **true** if the element value evaluation is successful, **false** otherwise.
*   *$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

In any case, at the point where `.some()` function encounters the first collection element returning true in *$1.result*, it stops calling *methodName* and returns **true**.

By default, `.some()` tests the whole collection. Optionally, you can pass the index of an element from which to start the test in *startFrom*.

*   If *startFrom* >= the collection's length, **False** is returned, which means the collection is not tested.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection.
*   If *startFrom* = 0, the whole collection is searched (default).


#### Beispiel


```4d
 var $c : Collection
 var $b : Boolean
 $c:=New collection
 $c.push(-5;-3;-1;-4;-6;-2)
 $b:=$c.some("NumberGreaterThan0") // returns false
 $c.push(1)
 $b:=$c.some("NumberGreaterThan0") // returns true

 $c:=New collection
 $c.push(1;-5;-3;-1;-4;-6;-2)
 $b:=$c.some("NumberGreaterThan0") //$b=true
 $b:=$c.some(1;"NumberGreaterThan0") //$b=false
```

With the following *NumberGreaterThan0* method:

```4d
 $1.result:=$1.value>0
```







## .sort()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection

| Parameter  | Typ        |    | Beschreibung                                     |
| ---------- | ---------- |:--:| ------------------------------------------------ |
| methodName | Text       | -> | Name of method used to specify the sorting order |
| extraParam | any        | -> | Parameter(s) for the method                      |
| Ergebnis   | Collection | <- | Original collection sorted                       |


#### Beschreibung

The `.sort()` function sorts the elements of the original collection and also returns the sorted collection.
> This function modifies the original collection.

If `.sort()` is called with no parameters, only scalar values (number, text, date, booleans) are sorted. Elements are sorted by default in ascending order, according to their type.

If you want to sort the collection elements in some other order or sort any type of element, you must supply in *methodName* a comparison method that compares two values and returns **true** in *$1.result* if the first value is lower than the second value. You can provide additional parameters to *methodName* if necessary.

*   *methodName* will receive the following parameters:
    *   $1 (object), where:
        *   *$1.value* (any type): first element value to be compared
        *   *$1.value2* (any type): second element value to be compared
    *   $2...$N (any type): extra parameters

*methodName* sets the following parameter:
    *   *$1.result* (boolean): **true** if *$1.value < $1.value2*, **false** otherwise

If the collection contains elements of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.  Null
2.  booleans
3.  strings
4.  numbers
5.  objects
6.  collections
7.  dates

#### Beispiel 1


```4d
 var $col; $col2 : Collection
 $col:=New collection("Tom";5;"Mary";3;"Henry";1;"Jane";4;"Artie";6;"Chip";2)
 $col2:=$col.sort() // $col2=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
  // $col=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
```

#### Beispiel 2

```4d
 var $col; $col2 : Collection
 $col:=New collection(10;20)
 $col2:=$col.push(5;3;1;4;6;2).sort() //$col2=[1,2,3,4,5,6,10,20]
```

#### Example 3

```4d
 var $col; $col2; $col3 : Collection
 $col:=New collection(33;4;66;1111;222)
 $col2:=$col.sort() //numerical sort: [4,33,66,222,1111]
 $col3:=$col.sort("numberOrder") //alphabetical sort: [1111,222,33,4,66]
```

```4d
  //numberOrder project method
 var $1 : Object
 $1.result:=String($1.value)<String($1.value2)
```





## .sum()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.sum**( { *propertyPath* : Text } ) : Real
| Parameter    | Typ  |    | Beschreibung                                    |
| ------------ | ---- |:--:| ----------------------------------------------- |
| propertyPath | Text | -> | Object property path to be used for calculation |
| Ergebnis     | Zahl | <- | Sum of collection values                        |


#### Beschreibung

The `.sum()` function returns the sum for all values in the collection instance.

Only numerical elements are taken into account for the calculation (other element types are ignored).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property to take into account.

`.sum()` returns 0 if:

*   the collection is empty,
*   the collection does not contain numerical elements,
*   *propertyPath* is not found in the collection.

#### Beispiel 1


```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection(10;20;"Monday";True;2)
 $vSum:=$col.sum() //32
```

#### Beispiel 2

```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500,5))
 $vSum:=$col.sum("salary") //$vSum=70500,5
```






## .unshift()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v16 R6  | Added   |
</details>

**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection
| Parameter | Typ                                    |    | Beschreibung                                          |
| --------- | -------------------------------------- |:--:| ----------------------------------------------------- |
| value     | Text, Number, Object, Collection, Date | -> | Value(s) to insert at the beginning of the collection |
| Ergebnis  | Zahl                                   | <- | Collection containing added element(s)                |


#### Beschreibung

The `.unshift()` function inserts the given *value*(s) at the beginning of the collection and returns the modified collection.
> This function modifies the original collection.

If several values are passed, they are inserted all at once, which means that they appear in the resulting collection in the same order as in the argument list.


#### Beispiel


```4d
 var $c : Collection
 $c:=New collection(1;2)
 $c.unshift(4) // $c=[4,1,2]
 $c.unshift(5) //$c=[5,4,1,2]
 $c.unshift(6;7) // $c=[6,7,5,4,1,2]
```



<style> h2 { background: #d9ebff;}</style>
