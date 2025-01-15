---
id: new-collection
title: New collection
displayed_sidebar: docs
---

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New collection.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| value | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer | &#8594;  | Collection's value(s) |
| Function result | Collection | &#8592; | New collection |

<!-- END REF-->

#### Description 

The `New collection` command <!--REF #_command_.New collection.Summary-->creates a new empty or prefilled collection and returns its reference.<!-- END REF--> Collections can be handled using properties and functions of the [Collection class API](../API/CollectionClass.md). 

If you do not pass any parameters, `New collection` creates an empty collection and returns its reference. 

You must assign the returned reference to a 4D variable of the Collection type.

>Keep in mind that `var : Collection` statement declares a variable of the `Collection` type but does not create any collection.

Optionally, you can prefill the new collection by passing one or several *value*(s) as parameter(s).

Otherwise, you can add or modify elements subsequently through assignment. For example:

```4d
 myCol[10]:="My new element"
```

If the new element index is beyond the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

You can pass any number of values of any supported type (number, text, date, picture, pointer, object, collection...). Unlike arrays, collections can mix data of different types.

You must pay attention to the following conversion issues:

*	If you pass a pointer, it is kept "as is"; it is evaluated using the `JSON Stringify` command
*	Dates are stored as "yyyy-mm-dd" dates or strings with the "YYYY-MM-DDTHH:mm:ss.SSSZ" format, according to the current "dates inside objects" database setting. When converting 4D dates into text prior to storing them in the collection, by default the program takes the local time zone into account. You can modify this behavior using the `Dates inside objects` selector of the `SET DATABASE PARAMETER` command.
*	If you pass a time, it is stored as a number of milliseconds (Real).

#### Example 1



You want to create a new empty collection and assign it to a 4D collection variable:

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### Example 2

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

#### See also 

[New shared collection](new-shared-collection.md)  
[Type](../commands-legacy/type.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1472 |
| Thread safe | &check; |


