---
id: selection-range-to-array
title: SELECTION RANGE TO ARRAY
slug: /commands/selection-range-to-array
displayed_sidebar: docs
---

<!--REF #_command_.SELECTION RANGE TO ARRAY.Syntax-->**SELECTION RANGE TO ARRAY** ( *start* ; *end* {; aField | aTable ; *array*} {; aField | aTable2 ; *array2* ; ... ; aField | aTableN ; *arrayN*} )<!-- END REF-->
<!--REF #_command_.SELECTION RANGE TO ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| start | Integer | &#8594;  | Selected record number where data retrieval starts |
| end | Integer | &#8594;  | Selected record number where data retrieval ends |
| aField &#124; aTable | Field, Table | &#8594;  | Field to use for retrieving data or Table to use for retrieving record numbers |
| array | Array | &#8592; | Array to receive field data or record numbers |

<!-- END REF-->

#### Description 

<!--REF #_command_.SELECTION RANGE TO ARRAY.Summary-->**SELECTION RANGE TO ARRAY** creates one or more arrays and copies data from the fields or record numbers from the current selection into the arrays.<!-- END REF--> 

Unlike [SELECTION TO ARRAY](selection-to-array.md), which applies to the current selection in its entirety, **SELECTION RANGE TO ARRAY** only applies to the range of selected records specified by the parameters *start* and *end*.

The command expects you to pass in *start* and *end* the selected record numbers complying with the formula *1 <= start <= end <= Records in selection (\[...\])*. 

If you pass *1 <= start = end < Records in selection (\[...\])*, you will load fields or get the record number from the record whose selected record is *start = end*.

If you pass incorrect selected record numbers, the command does the following:

* If *end > Records in selection (\[...\])*, it returns values from the selected record specified by *start* to the last selected record.
* If *start > end*, it returns values from the record whose selected record is *start* only.
* If both parameters are inconsistent with the size of the selection, it returns empty arrays.

Like [SELECTION TO ARRAY](selection-to-array.md), the **SELECTION RANGE TO ARRAY** command applies to the selection for the table specified in the first parameter.

Also like [SELECTION TO ARRAY](selection-to-array.md), **SELECTION RANGE TO ARRAY** can perform the following:

* Load values from one or several fields.
* Load Record numbers using the syntax *...;\[table\];Array;...*
* Load values from related fields, if there is a Many to One automatic relation between the tables or if you have previously called [SET AUTOMATIC RELATIONS](set-automatic-relations.md) to change manual Many to One relations to automatic. In both cases, values can be loaded from tables through several levels of Many to One relations.

Each array is typed according to the field type. 

When you apply **SELECTION RANGE TO ARRAY** to a Time type field, it is important to note that they only create a Time type array if the array has not already been defined as another type. For example, in the following context, the *myArray* array remains a Longint type array:  

```4d
 ARRAY LONGINT(myArray;0)
 SELECTION TO ARRAY([myTable]myTimeField;myArray)
```

If you load record numbers, they are copied into a Long Integer array.

**Note:** You can call the **SELECTION RANGE TO ARRAY** command with just the *start* and *end* parameters. You use this special syntax to launch, on a limited selection, the execution of a deferred series of [SELECTION TO ARRAY](selection-to-array.md) commands using the *\** parameter (see example 4). 

**4D Server**: **SELECTION RANGE TO ARRAY** is optimized for 4D Server. Each array is created on the server and then sent, in its entirety, to the client machine.

**WARNING:** **SELECTION RANGE TO ARRAY** can create large arrays, depending on the range you specify in *start* and *end,* and on the type and size of the data you are loading. Arrays reside in memory, so it is a good idea to test the result after the command is completed. To do so, test the size of each resulting array or cover the call to the command, using an [ON ERR CALL](on-err-call.md) project method.

If the command is successful, the size of each resulting array is equal to *(end-start)+1*, except if the *end* parameter exceeded the number of records in the selection. In such a case, each resulting array contains *(Records in selection(\[...\])-start)+1* elements.

#### Example 1 

The following code addresses the first 50 records from the current selection for the *\[Invoices\]* table. It loads the values from the *\[Invoices\]Invoice ID* field and the *\[Customers\]Customer ID* related field.

```4d
 SELECTION RANGE TO ARRAY(1;50;[Invoices]Invoice ID;alInvoID;[Customers]Customer ID;alCustID)
```

#### Example 2 

The following code addresses the last 50 records from the current selection for the *\[Invoices\]* table. It loads the record numbers of the *\[Invoices\]* records as well as those of the *\[Customers\]* related records:

```4d
 lSelSize:=Records in selection([Invoices])
 SELECTION RANGE TO ARRAY(lSelSize-49;lSelSize;[Invoices];alInvRecN;[Customers];alCustRecN)
```

#### Example 3 

The following code process, in sequential “chunks”of 1000 records, a large selection that could not be downloaded in its entirety into arrays:

```4d
 lMaxPage:=1000
 lSelSize:=Records in selection([Phone Directory])
 For($lPage ;1;1+((lSelSize-1)\lMaxPage))
  // Load the values and/or record numbers
    SELECTION RANGE TO ARRAY(1+(lMaxPage*($lPage-1));lMaxPage*$lPage;...;...;...;...;...;...)
  // Do something with the arrays
 End for
```

#### Example 4 

Use the first 50 current records of the \[Invoices\] table to load various arrays, in deferred execution: 

```4d
  // Deferred statements
 SELECTION TO ARRAY([Invoices]InvoiceRef;arrLInvRef;*)
 SELECTION TO ARRAY([Invoices]Date;arrDInvDate;*)
 SELECTION TO ARRAY([Clients]ClientRef;arrLClientRef;*)
  // Execution of deferred statements
 SELECTION RANGE TO ARRAY(1;50)
```

#### See also 

[ON ERR CALL](on-err-call.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  