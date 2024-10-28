---
id: create-set-from-array
title: CREATE SET FROM ARRAY
slug: /commands/create-set-from-array
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SET FROM ARRAY.Syntax-->**CREATE SET FROM ARRAY** ( *aTable* ; *recordsArray* {; *setName*} )<!-- END REF-->
<!--REF #_command_.CREATE SET FROM ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table of the set |
| recordsArray | Integer, Boolean array | &#8594;  | Array of record numbers, or Array of booleans (True = the record is in the set, False = the record is not in the set) |
| setName | Text | &#8594;  | Name of the set to create, or Apply the command to the Userset if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE SET FROM ARRAY.Summary-->The **CREATE SET FROM ARRAY** command creates *setName* from:

* Either an array of absolute record numbers *recordsArray* from *aTable*,
* Or an array of booleans *recordsArray*.<!-- END REF--> In this case, the values of the array indicate if each record in the table belongs (**True**) or not (**False**) to *setName*.

When you use this command and pass a Longint array in *recordsArray*, all the numbers in the array represent the list of record numbers that are in *setName*. If a number is invalid (for example, if a record has not been created), the error -10503 is generated.

When you use this command and pass a Boolean array in *recordsArray*, the Nth element of the array indicates whether the "Nth" record is contained (**True**) or not (**False**) in *setName*. Usually, the number of elements in the array must equal the number of records in the table. If the array is smaller than the number of records, only the records defined by the array will be in the set.

**Note:** With a Boolean array, this command uses the elements from 0 to N-1.

If you do not pass the *setName* parameter or if you pass an empty string, the command will be applied to the Userset system set.

#### Error management 

In a Longint array, if a record number is invalid (record not created), the error -10503 is generated.

#### See also 

[BOOLEAN ARRAY FROM SET](boolean-array-from-set.md)  
[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  