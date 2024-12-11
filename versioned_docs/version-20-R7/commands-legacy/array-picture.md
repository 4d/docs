---
id: array-picture
title: ARRAY PICTURE
slug: /commands/array-picture
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY PICTURE.Syntax-->**ARRAY PICTURE** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY PICTURE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | Name of the array |
| size | Integer | &#8594;  | Number of elements in the array, or Number of rows if size2 is specified |
| size2 | Integer | &#8594;  | Number of columns in a two-dimensional array |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY PICTURE.Summary-->The ARRAY PICTURE command creates and/or resizes an array of [Picture](# "Can be any Windows or Macintosh picture") elements in memory.<!-- END REF-->parameter is the name of the array.
* The *size* parameter is the number of elements in the array.The *size2* parameter is optional; if *size2* is specified, the command creates a two-dimensional array. In this case, *size* specifies the number of rows and *size2* specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the first dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array.

While applying to an existing array:

* If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to empty pictures. This means that [Picture size](picture-size.md) applied to one of these elements will return *0*.
* If you reduce the array size, the last elements deleted from the array are lost.

#### Example 1 

This example creates a process array of 100 [Picture](# "Can be any Windows or Macintosh picture") elements:

```4d
 ARRAY PICTURE(agValues;100)
```

#### Example 2 

This example creates a local array of 100 rows of 50 [Picture](# "Can be any Windows or Macintosh picture") elements:

```4d
 ARRAY PICTURE($agValues;100;50)
```

#### Example 3 

This example creates an interprocess array of [Picture](# "Can be any Windows or Macintosh picture") elements and loads each picture into one of the elements of the array. The array’s size is equal to the number of *'PICT'* resources available to the database. The array’s resource name starts with *"User Intf/"*:

```4d
 RESOURCE LIST("PICT";$aiResIDs;$asResNames)
 ARRAY PICTURE(◊agValues;Size of array($aiResIDs))
 $vlPictElem:=0
 For($vlElem;1;Size of array(◊agValues))
    If($asResNames{$vlElem}="User Intf/@")
       $vlPictElem:=$vlPictElem+1
       GET PICTURE RESOURCE("PICT";$aiResIDs{$vlElem};$vgPicture)
       ◊agValues{$vlPictElem}:=$vgPicture
    End if
 End for
 ARRAY PICTURE(◊agValues;$vlPictElem)
```


#### Properties
|  |  |
| --- | --- |
| Command number | 279 |
| Thread safe | &check; |
| Forbidden on the server ||


