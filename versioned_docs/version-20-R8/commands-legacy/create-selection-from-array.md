---
id: create-selection-from-array
title: CREATE SELECTION FROM ARRAY
slug: /commands/create-selection-from-array
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SELECTION FROM ARRAY.Syntax-->**CREATE SELECTION FROM ARRAY** ( *aTable* ; *recordArray* {; *selectionName*} )<!-- END REF-->
<!--REF #_command_.CREATE SELECTION FROM ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table from which to create the selection |
| recordArray | Integer, Boolean array | &#8594;  | Array of record numbers, or Array of booleans (True = the record is in the selection, False = the record is not in the selection) |
| selectionName | Text | &#8594;  | Name of the named selection to create, or Apply the command to the current selection if the parameter is omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE SELECTION FROM ARRAY.Summary-->The **CREATE SELECTION FROM ARRAY** command creates the named selection *selectionName* from:

* either an array of absolute record numbers *recordArray* from *aTable*,
* or an array of Booleans.<!-- END REF--> In this case, the values of the array indicate the belonging (**True**) or not (**False**) of each record in *table* to *selectionName*.

**Warning:** A named selection is created and loaded into memory. Therefore, make sure that you have enough memory before executing this command.

If you don’t pass *selectionName* or if you pass an empty string, the command will be applied to the current selection, which will then be updated.

When you use a Longint array with this command, all the numbers of the array represent the list of record numbers in *selectionName*. If a number is incorrect (record not created), error -10503 is generated.

**Note:** Be careful, you must make sure that the array does not contain any lines that have the same value, otherwise the resulting selection will be incorrect.

When you use a Boolean array with this command, the Xth element of the array indicates if the record number X is (**True**) or is not (**False**) in *selectionName*. The number of elements in *recordArray* must be equal to the number of records in *table*. If the array is smaller than the number of records, only the records defined by the array can make up the selection.

**Note:** With an array of booleans, the command uses elements from numbers 0 to X-1.

**Warning:** Keep in mind that a record number can be reused if the record is deleted and another record is created (see *About Record Numbers*). 

#### Error management 

If a record number is invalid (record not created), the error -10503 is generated. You can intercept this error using a method installed by the [ON ERR CALL](on-err-call.md) command.

#### See also 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[CREATE SET FROM ARRAY](create-set-from-array.md)  
[LONGINT ARRAY FROM SELECTION](longint-array-from-selection.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[USE NAMED SELECTION](use-named-selection.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 640 |
| Thread safe | &check; |
| Modifies variables | error |
| Changes current selection ||


