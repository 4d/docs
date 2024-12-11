---
id: array-pointer
title: ARRAY POINTER
slug: /commands/array-pointer
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY POINTER.Syntax-->**ARRAY POINTER** ( *arrayName* ; *size* {; *size2*} )<!-- END REF-->
<!--REF #_command_.ARRAY POINTER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| arrayName | Array | &#8594;  | Name of the array |
| size | Integer | &#8594;  | Number of elements in the array, or Number of rows if size2 is specified |
| size2 | Integer | &#8594;  | Number of columns in a two-dimensional array |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY POINTER.Summary-->The **ARRAY POINTER** command creates or resizes an array of [Pointer](# "A reference to another variable (including arrays and array elements), table, or field") elements in memory.<!-- END REF-->parameter is the name of the array.
* The *size* parameter is the number of elements in the array.
* The *size2* parameter is optional; if *size2* is specified, the command creates a two-dimensional array. In this case, *size* specifies the number of rows and *size2* specifies the number of columns in each array. Each row in a two-dimensional array can be treated as both an element and an array. This means that while working with the firt dimension of the array, you can use other array commands to insert and delete entire arrays in a two-dimensional array.

While applying **ARRAY POINTER** to an existing array:

* If you enlarge the array size, the existing elements are left unchanged, and the new elements are initialized to null *pointer*. This means that [Is nil pointer](is-nil-pointer.md) applied to one of these elements will return True.
* If you reduce the array size, the last elements deleted from the array are lost.

#### Example 1 

This example creates a process array of 100 [Pointer](# "A reference to another variable (including arrays and array elements), table, or field") elements:

```4d
 ARRAY POINTER(apValues;100)
```

#### Example 2 

This example creates a local array of 100 rows of 50 [Pointer](# "A reference to another variable (including arrays and array elements), table, or field") elements:

```4d
 ARRAY POINTER($apValues;100;50)
```

#### Example 3 

This example creates an interprocess array of [Pointer](# "A reference to another variable (including arrays and array elements), table, or field") elements and sets each element pointing to the table whose number is the same as the element. The size of the array is equal to the number of tables in the database. In the case of a deleted table, the row will return [Is nil pointer](is-nil-pointer.md).

```4d
 ARRAY POINTER(◊apValues;Last table number)
 For($vlElem;1;Size of array(◊apValues);1;-1)
    If(Is table number valid($vlElem))
       ◊apValues{$vlElem}:=Table($vlElem)
    End if
 End for
```


#### Properties
|  |  |
| --- | --- |
| Command number | 280 |
| Thread safe | &check; |
| Forbidden on the server ||


