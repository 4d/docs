---
id: goto-selected-record
title: GOTO SELECTED RECORD
slug: /commands/goto-selected-record
displayed_sidebar: docs
---

<!--REF #_command_.GOTO SELECTED RECORD.Syntax-->**GOTO SELECTED RECORD** ( {*aTable* ;} *record* )<!-- END REF-->
<!--REF #_command_.GOTO SELECTED RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table in which to go to the selected record, or Default table, if omitted |
| record | Integer | &#8594;  | Position of record in the selection |

<!-- END REF-->

#### Description 

<!--REF #_command_.GOTO SELECTED RECORD.Summary-->**GOTO SELECTED RECORD** moves to the specified record in the current selection of *aTable* and makes that record the current record.<!-- END REF--> The current selection does not change. The *record* parameter is not the same as the number returned by [Record number](record-number.md); it represents the record’s position in the current selection. The record’s position depends on how the selection is made and whether or not the selection is sorted.

**GOTO SELECTED RECORD** does nothing if:

* there are no records in the current selection
* *record* is not in the current selection,
* *record* is already the current record.

If you pass 0 in *record*, there will no longer be a current record in *aTable*. When the “single” selection mode is chosen, this allows you to deselect all the records in a list, in particular in the case of included subforms.

#### Example 

The following example loads data from the field \[People\]Last Name into the *atNames* array. An array of long integers, called *alRecNum*, is filled with numbers that will represent the selected record numbers. Both arrays are then sorted:

```4d
  // Make any selection for the [People] table here
  // ...
  // Get the names
 SELECTION TO ARRAY([People]Last Name;atNames)
  // Create an array for the selected record numbers
 $vlNbRecords:=Size of array(atNames)
 ARRAY LONGINT(alRecNum;$vlNbRecords)
 For($vlRecord;1;$vlNbRecords)
    alRecNum{$vlRecord}:=$vlRecord
 End for
  // Sort the arrays in alphabetical order
 SORT ARRAY(atNames;alRecNum;>)
```

If the *atNames* array is displayed in a scrollable area, the user can click one of the items. Since the sorting of the two arrays is synchronized, any element in *alRecNum* provides the selected record number for the record whose name is stored in the corresponding element in *atNames*.

The following object method for *atNames* selects the correct record in the \[People\] selection, according to the name chosen in the scrollable area:

```4d
 Case of
    :(Form event code=On Clicked)
       If(atNames#0)
          GOTO SELECTED RECORD(alRecNum{atNames})
       End if
 End case
```

#### See also 

[Selected record number](selected-record-number.md)  