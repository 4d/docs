---
id: array-real
title: ARRAY REAL
slug: /commands/array-real
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY REAL.Syntax-->**ARRAY REAL** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY REAL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | Name of the array |
| size | Integer | &#8594;  | Number of elements in the array or Number of rows if size2 is specified |
| size2 | Integer | &#8594;  | Number of columns in a two-dimensional array |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY REAL.Summary-->The ARRAY REAL command creates and/or resizes an array of [Real](# "Number between ±1.7e±308 (15 digits)") elements in memory.<!-- END REF--> 

* The arrayName parameter is the name of the array.
* The *size* parameter is the number of elements in the array.
* The *size2* parameter is optional; if *size2* is specified, the command creates a two-dimensional array. In this case, *size* specifies the number of rows and *size2* specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the first dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array.

While applying ARRAY REAL to an existing array:

* If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to 0.
* If you reduce the array size, the last elements deleted from the array are lost.

#### Example 1 

This example creates a process array of 100 Real elements:

```4d
 ARRAY REAL(arValues;100)
```

#### Example 2 

This example creates a local array of 100 rows of 50 Real elements:

```4d
 ARRAY REAL($arValues;100;50)
```

#### Example 3 

This example creates an interprocess array of 50 Real elements and sets each element to its element number:

```4d
 ARRAY REAL(◊arValues;50)
 For($vlElem;1;50)
    ◊arValues{$vlElem}:=$vlElem
 End for
```

#### See also 

[ARRAY INTEGER](array-integer.md)  
[ARRAY LONGINT](array-longint.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 219 |
| Thread safe | &check; |


