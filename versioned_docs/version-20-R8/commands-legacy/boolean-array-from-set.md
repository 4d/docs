---
id: boolean-array-from-set
title: BOOLEAN ARRAY FROM SET
slug: /commands/boolean-array-from-set
displayed_sidebar: docs
---

<!--REF #_command_.BOOLEAN ARRAY FROM SET.Syntax-->**BOOLEAN ARRAY FROM SET** ( *booleanArr* {; *set*} )<!-- END REF-->
<!--REF #_command_.BOOLEAN ARRAY FROM SET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| booleanArr | Boolean array | &#8592; | Array to indicate if a record is in the set or not |
| set | Text | &#8594;  | Name of the set or UserSet if this parameter is omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.BOOLEAN ARRAY FROM SET.Summary-->The BOOLEAN ARRAY FROM SET command fills an array of Booleans indicating if each record in the table is or is not in *set*.<!-- END REF--> 

The elements in the array are ordered in the order in which the records are created in the table (absolute record numbers). If N is the number of records in the table, element 0 of the array corresponds to record number 0, element 1 of the array corresponds to record number 1, etc. 

Each element of the array is:

* [True](true.md "True") if the corresponding record belongs to the set.
* [False](false.md "False") if the corresponding record does not belong to the set.

**Warning:** The total number of elements in the *booleanArr* array is not significant. For structural reasons, this number can be different from the number of records actually present in the table. Possible extra elements are set to [False](false.md).

If you don’t pass the *set* parameter, the command will use UserSet in the current process.

#### See also 

[CREATE SET FROM ARRAY](create-set-from-array.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 646 |
| Thread safe | &check; |


