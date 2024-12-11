---
id: selection-to-array
title: SELECTION TO ARRAY
slug: /commands/selection-to-array
displayed_sidebar: docs
---

<!--REF #_command_.SELECTION TO ARRAY.Syntax-->**SELECTION TO ARRAY** {( aField | aTable ; *array* {; *aField* ; *array* {; *aField2* ; *array2* ; ... ; *aFieldN* ; *arrayN*}}{; *})}<!-- END REF-->
<!--REF #_command_.SELECTION TO ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField &#124; aTable | Field, Table | &#8594;  | Field to use for retrieving data or Table to use for retrieving record numbers |
| array | Array | &#8592; | Array to receive field data or record numbers |
| aField | Field | &#8594;  | Field to retrieve in array |
| array | Array | &#8592; | Array to receive field data |
| * | Operator | &#8594;  | Await execution |

<!-- END REF-->

#### Description 

<!--REF #_command_.SELECTION TO ARRAY.Summary-->The **SELECTION TO ARRAY** command creates one or more arrays and copies data in the fields or record numbers from the current selection into the arrays.<!-- END REF-->

The command **SELECTION TO ARRAY** applies to the selection for the table designated by the first parameter (table name or field name). **SELECTION TO ARRAY** can perform the following:

* Load values from one or several fields.
* Load Record numbers from the table using the syntax *\[table\];array*
* Load values from related fields, provided that there is a Many to One automatic relation between the tables or provided that you have previously called [SET AUTOMATIC RELATIONS](set-automatic-relations.md) to make manual Many to One relations automatic. In both cases, values are loaded from tables through several levels of Many to One relations.

Each array is typed according to the field type. 

When you apply **SELECTION TO ARRAY** to a Time type field, it is important to note that they only create a Time type array if the array has not already been defined as another type. For example, in the following context, the *myArray* array remains a Longint type array:  

```4d
 ARRAY LONGINT(myArray;0)
 SELECTION TO ARRAY([myTable]myTimeField;myArray)
```

If you load record numbers, they are copied into a Long Integer array.

When you pass the *\** parameter, 4D does not execute the corresponding statement line immediately but instead stores it in memory; this way you can stack several lines ending with an *\**. All of these lines awaiting execution are executed by one final **SELECTION TO ARRAY** statement that does not have the *\** parameter. For this reason, the command can now be called without any parameters. In this case, array types are verified when the final line (without the *\** parameter) is executed.   
As with the [QUERY](query.md) command, this lets you break up a complex statement into a set of lines, which is easier to read and to maintain. You can also insert intermediary statements or build an array within a loop (see example 2 of the [ARRAY TO SELECTION](array-to-selection.md) command). 

**4D Server:** The **SELECTION TO ARRAY** command is optimized for 4D Server. Each array is created on the server and then sent, in its entirety, to the client machine.

**WARNING:** The **SELECTION TO ARRAY** command can create large arrays, depending on the size of the current selection and on the type and size of the data you are loading. Arrays reside in memory, so it is a good idea to test the result after the command is completed. To do so, test the size of each resulting array or cover the call to the command, using an [ON ERR CALL](on-err-call.md) project method.

**Note:** After a call to **SELECTION TO ARRAY**, the current selection and current record remain the same, but the current record is no longer loaded. If you need to use the values of the fields in the current record, use the [LOAD RECORD](load-record.md) command after the **SELECTION TO ARRAY** command.

#### Example 1 

In the following example, the *\[People\]* table has an automatic relation to the \[Company\] table. The two arrays *asLastName* and *asCompanyAddr* are sized according to the number of records selected in the *\[People\]* table and will contain information from both tables:

```4d
 SELECTION TO ARRAY([People]Last Name;asLastName;[Company]Address;asCompanyAddr)
```

#### Example 2 

The following example returns the *\[Clients\]* record numbers in the array *alRecordNumbers* and the *\[Clients\]Names* field values in the array *asNames*:

```4d
 SELECTION TO ARRAY([Clients];alRecordNumbers;[Clients]Names;asNames)
```

The same example can be written:

```4d
 SELECTION TO ARRAY([Clients];alRecordNumbers;*)
 SELECTION TO ARRAY([Clients]Names;asNames;*)
 SELECTION TO ARRAY
```

#### See also 

[ARRAY TO SELECTION](array-to-selection.md)  
[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  
[MULTI SORT ARRAY](multi-sort-array.md)  
[ON ERR CALL](on-err-call.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 260 |
| Thread safe | &check; |


