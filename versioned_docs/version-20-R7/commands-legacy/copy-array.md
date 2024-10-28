---
id: copy-array
title: COPY ARRAY
slug: /commands/copy-array
displayed_sidebar: docs
---

<!--REF #_command_.COPY ARRAY.Syntax-->**COPY ARRAY** ( *source* ; *destination* )<!-- END REF-->
<!--REF #_command_.COPY ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| source | Array | &#8594;  | Array from which to copy |
| destination | Array | &#8592; | Array to which to copy |

<!-- END REF-->

#### Description 

<!--REF #_command_.COPY ARRAY.Summary-->The COPY ARRAY command creates or overwrites the destination array *destination* with the exact contents, size, and type of the source array *source*.<!-- END REF-->

**Note:** In case of numeric arrays of different types, the type of the *destination* array is kept.

The *source* and *destination* arrays can be local, process, or interprocess arrays. When copying arrays, the scope of the array does not matter.

**Notes:**

* In compiled mode, the *destination* array must be of the same type as the *source* array. Thus, it is recommended to always use arrays of the same type to have similar behavior in interpreted and compiled modes.
* When you copy object arrays, only references to the objects that they contain are duplicated, and not objects themselves. It means that any modification done on an object in an array will be applied to all existing instances of the object in copied arrays. If you need to duplicate objects, you must use the [OB Copy](ob-copy.md) command.

#### Example 

The following example fills the array named C. It then creates a new array, named D, of the same size as C and with the same contents:

```4d
 ALL RECORDS([People]) // Select all records in People
 SELECTION TO ARRAY([People]Company;C) // Move company field data into array C
 COPY ARRAY(C;D) // Copy the array C to the array D
```
