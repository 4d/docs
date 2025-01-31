---
id: array-blob
title: ARRAY BLOB
slug: /commands/array-blob
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY BLOB.Syntax-->**ARRAY BLOB** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | Name of array |
| size | Integer | &#8594;  | Number of array elements or Number of arrays if size2 is specified |
| size2 | Integer | &#8594;  | Number of 2D array elements |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY BLOB.Summary-->The **ARRAY BLOB** command creates and/or resizes an array of Blob type elements in memory.<!-- END REF-->

The *arrayName* parameter is the name of the array.

The *size* parameter is the number of array elements.

The *size2* parameter is optional. If you pass it, this command creates a two-dimensional array. In this case, *size* specifies the number of rows and *size2* the number of columns in each array. Each row in a two-dimensional array can be processed both as an element and an array. This means that when you work with the first dimension of a two-dimensional array, you can insert and remove entire arrays using other commands in this theme. 

When you apply the **ARRAY BLOB** command to an existing array:

* If you enlarge its size, existing elements are not changed and new elements are initialized to an empty BLOB ([BLOB size](blob-size.md)\= 0).
* If you reduce its size, elements at the "bottom" of the array are deleted and lost.

#### Example 1 

This example creates a process array containing 100 BLOB-type elements:

```4d
 ARRAY BLOB(arrBlob;100)
```

#### Example 2 

This example creates a local array of 100 rows each containing 50 BLOB-type elements:

```4d
 ARRAY BLOB($arrBlob;100;50)
```

#### Example 3 

This example creates a local array of 100 rows each containing 50 BLOB-type elements. The *$vByteValue* variable receives the 10th byte of the BLOB placed in the 7th column and the 5th row of the BLOB array:

```4d
 C_INTEGER($vByteValue)
 ARRAY BLOB($arrValues;100;50)
 ...
 $vByteValue:=$arrValues{5}{7}{9}
```

#### See also 

*Creating Arrays*  

#### Properties

|  |  |
| --- | --- |
| Command number | 1222 |
| Thread safe | &check; |


