---
id: array-date
title: ARRAY DATE
slug: /commands/array-date
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY DATE.Syntax-->**ARRAY DATE** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY DATE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | Name of the array |
| size | Integer | &#8594;  | Number of elements in the array or Number of rows if size2 is specified |
| size2 | Integer | &#8594;  | Number of columns in a two-dimensional array |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY DATE.Summary-->The ARRAY DATE command creates and/or resizes an array of [Date](# "In the range of 1/1/100 to 12/31/32,767") elements in memory.<!-- END REF-->parameter is the name of the array.
* The *size* parameter is the number of elements in the array.
* The *size2* parameter is optional; if *size2* is specified, the command creates a two-dimensional array. In this case, *size* specifies the number of rows and *size2* specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the first dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array.

While applying to an existing array:

* If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to the null date (!00/00/00!).
* If you reduce the array size, the last elements deleted from the array are lost.

#### Example 1 

This example creates a process array of 100 Date elements:

```4d
 ARRAY DATE(adValues;100)
```

#### Example 2 

This example creates a local array of 100 rows of 50 Date elements:

```4d
 ARRAY DATE($adValues;100;50)
```

#### Example 3 

This example creates an interprocess array of 50 Date elements, and sets each element to the current date plus a number of days equal to the element number:

```4d
 ARRAY DATE(◊adValues;50)
 For($vlElem;1;50)
    ◊adValues{$vlElem}:=Current date+$vlElem
 End for
```


#### Properties

|  |  |
| --- | --- |
| Command number | 224 |
| Thread safe | &check; |


