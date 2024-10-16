---
id: copy-named-selection
title: COPY NAMED SELECTION
slug: /commands/copy-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.COPY NAMED SELECTION.Syntax-->**COPY NAMED SELECTION** ( {*aTable* ;} *name* )<!-- END REF-->
<!--REF #_command_.COPY NAMED SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table from which to copy selection, or Default table, if omitted |
| name | Text | &#8594;  | Name of the named selection to create |

<!-- END REF-->

#### Description 

<!--REF #_command_.COPY NAMED SELECTION.Summary-->**COPY NAMED SELECTION** copies the current selection of *aTable* to the named selection *name*.<!-- END REF--> The default table for the process is used if the optional *table* parameter is not specified. The parameter *name* contains a copy of the selection. The current selection and the current record of *aTable* for the process are not changed.

A named selection does not actually contain the records, but only an ordered list of references to records. Each reference to a record takes 4 bytes in memory. This means that when a selection is copied using the **COPY NAMED SELECTION** command, the amount of memory required is 4 bytes multiplied by the number of records in the selection. Since named selections reside in memory, you should have enough memory for the named selection as well as the current selection of the table in the process.

Use the [CLEAR NAMED SELECTION](clear-named-selection.md) command to free the memory used by *name*.

#### Example 

The following example allows you to check if there are other overdue invoices in the *\[People*\] table. The selection is sorted and then saved. We search for all records where invoices are due. Then we reuse the selection and clear the named selection in memory. Clearing the named selection in memory is optional, in case the database designer wants to keep the sorted selection for future use:

```4d
 ALL RECORDS([People])
  //Allow the user to sort the selection
 ORDER BY([People])
  // Save the sorted selection as a named selection
 COPY NAMED SELECTION([People];"UserSort")
  // Search for records where invoices are due
 QUERY([People];[People]InvoiceDue=True)
  // If records are found
 If(Records in selection([People])>0)
  // Alert the user
    ALERT("Yes, there are overdue invoices on table.")
 End if
  // Reuse the sorted named selection
 USE NAMED SELECTION("UserSort")
  // Remove the selection from memory
 CLEAR NAMED SELECTION("UserSort")
```

#### See also 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  