---
id: current-form-table
title: Current form table
slug: /commands/current-form-table
displayed_sidebar: docs
---

<!--REF #_command_.Current form table.Syntax-->**Current form table**  : Pointer<!-- END REF-->
<!--REF #_command_.Current form table.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Pointer | &#8592; | Pointer to the table of the currently displayed form |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current form table.Summary-->The Current form table command returns the pointer to the table of the form being displayed or printed in the current process.<!-- END REF-->

The function returns [Is nil pointer](is-nil-pointer.md) in the following cases:

* There is no form being displayed or printed in the current process,
* The current form is a project form.

If there are several windows open for the current process (which means that the window opened last is the current active window), the command returns the pointer to the table of the form displayed in the active window.

If the currently displayed form is the Detail form for a subform area, you are in data entry and you double-clicked on a record or a subrecord of a double-clickable subform area. In this case, the command returns:

* The pointer to the table shown in the subform area, if the subform displays a table.
* A non-significant pointer, if the subform area displays a subtable.

#### Example 

Throughout your application, you use the following convention when displaying a record:  
If the variable *vsCurrentRecord* is present in a form, it displays “New Record” if you are working with a new record. If you are working with the 56th record of a selection composed of 5200 records, it displays “56 of 5200”.

To do so, use the object method to create the variable *vsCurrentRecord*, then copy and paste it into all of your forms:

```4d
  // vsCurrentRecord non-enterable variable object method
 Case of
    :(Form event code=On Load)
       C_STRING(31;vsCurrentRecord)
       var $vpParentTable : Pointer
       var $vlRecordNum : Integer
       $vpParentTable:=Current form table
       $vlRecordNum:=Record number($vpParentTable->)
       Case of
          :($vlRecordNum=-3)
             vsCurrentRecord:="New Record"
          :($vlRecordNum=-1)
             vsCurrentRecord:="No Record"
          :($vlRecordNum>=0)
             vsCurrentRecord:=String(Selected record number($vpParentTable->))+" of "+
             String(Records in selection($vpParentTable->))
       End case
 End case
```

#### See also 

[DIALOG](../commands/dialog.md)  
[FORM SET INPUT](form-set-input.md)  
[FORM SET OUTPUT](form-set-output.md)  
[PRINT SELECTION](print-selection.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 627 |
| Thread safe | &cross; |


