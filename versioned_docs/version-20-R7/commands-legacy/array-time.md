---
id: array-time
title: ARRAY TIME
slug: /commands/array-time
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TIME.Syntax-->**ARRAY TIME** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY TIME.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | Name of array |
| size | Integer | &#8594;  | Number of array elements or Number of arrays if size2 is specified |
| size2 | Integer | &#8594;  | Number of 2D array elements |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY TIME.Summary-->The **ARRAY TIME** command creates and/or resizes an array of Time type elements in memory.<!-- END REF-->In 4D, times can be processed as numeric values. In 4D versions prior to v14, you had to combine a longint array with a display format in order to manage an array of times. 

The *arrayName* parameter is the name of the array.

The *size* parameter is the number of array elements.

The *size2* parameter is optional. If you pass it, this command creates a two-dimensional array. In this case, *size* specifies the number of rows and *size2* the number of columns in each array. Each row in a two-dimensional array can be processed both as an element and an array. This means that when you work with the first dimension of a two-dimensional array, you can insert and remove entire arrays using other commands in this theme. 

When you apply the **ARRAY TIME** command to an existing array:

* If you enlarge its size, existing elements are not changed and new elements are initialized to the null time value (00:00:00).
* If you reduce its size, elements at the "bottom" of the array are deleted and lost.

When you apply [SELECTION TO ARRAY](selection-to-array.md) or [SELECTION RANGE TO ARRAY](selection-range-to-array.md) to a Time type field, note that they only create a Time type array if the array has not already been defined as another type, such as Longint for example. 

#### Example 1 

This example creates a process array containing 100 Time-type elements:

```4d
 ARRAY TIME(arrTimes;100)
```

#### Example 2 

This example creates a local array of 100 rows each containing 50 Time-type elements:

```4d
 ARRAY TIME($arrTimes;100;50)
```

#### Example 3 

Since time arrays accept numeric values, the following code is valid:

```4d
 ARRAY TIME($arrTimeValues;10)
 $CurTime:=Current time+1
 APPEND TO ARRAY($arrTimeValues;$CurTime)
 $Found:=Find in array($arrTimeValues;$CurTime)
```

#### See also 

*Creating Arrays*  
[Time](time.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1223 |
| Thread safe | &check; |
| Forbidden on the server ||


