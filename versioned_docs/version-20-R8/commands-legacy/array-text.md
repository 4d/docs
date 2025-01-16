---
id: array-text
title: ARRAY TEXT
slug: /commands/array-text
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TEXT.Syntax-->**ARRAY TEXT** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY TEXT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | Name of the array |
| size | Integer | &#8594;  | Number of elements in the array or Number of rows if size2 is specified |
| size2 | Integer | &#8594;  | Number of columns in a two-dimensional array |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY TEXT.Summary-->The ARRAY TEXT command creates and/or resizes an array of [Text](# "A character string that may contain from 0 to 2 GB of text") elements in memory.<!-- END REF-->parameter is the name of the array.
* The *size* parameter is the number of elements in the array.
* The *size2* parameter is optional; if *size2* is specified, the command creates a two-dimensional array. In this case, *size* specifies the number of rows and *size2* specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the first dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array.

While applying ARRAY TEXT to an existing array:

* If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to "" (empty string).
* If you reduce the array size, the last elements deleted from the array are lost.

#### Example 1 

This example creates a process array of 100 [Text](# "A character string that may contain from 0 to 2 GB of text") elements:

```4d
 ARRAY TEXT(atValues;100)
```

#### Example 2 

This example creates a local array of 100 rows of 50 [Text](# "A character string that may contain from 0 to 2 GB of text") elements:

```4d
 ARRAY TEXT($atValues;100;50)
```

#### Example 3 

This example creates an interprocess array of 50 [Text](# "A character string that may contain from 0 to 2 GB of text") elements and sets each element to the value “Element #” followed by its element number:

```4d
 ARRAY TEXT(◊atValues;50)
 For($vlElem;1;50)
    ◊atValues{$vlElem}:="Element #"+String($vlElem)
 End for
```


#### Properties

|  |  |
| --- | --- |
| Command number | 222 |
| Thread safe | &check; |


