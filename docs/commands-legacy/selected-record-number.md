---
id: selected-record-number
title: Selected record number
slug: /commands/selected-record-number
displayed_sidebar: docs
---

<!--REF #_command_.Selected record number.Syntax-->**Selected record number** {( *aTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Selected record number.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return the selected record number or Default table, if omitted |
| Function result | Integer | &#8592; | Selected record number of current record |

<!-- END REF-->

#### Description 

<!--REF #_command_.Selected record number.Summary-->**Selected record number** returns the position of the current record within the current selection of *aTable*.<!-- END REF--> 

If the selection is not empty and if the current record is within the selection, **Selected record number** returns a value between *1* and [Records in selection](records-in-selection.md). If the selection is empty, of if there is no current record, it returns *0* (zero).

The selected record number is not the same as the number returned by [Record number](record-number.md), which returns the physical record number in the table. The selected record number depends on the current selection and the current record.

#### Example 

The following example saves the current selected record number in a variable:

```4d
 CurSelRecNum:=Selected record number([People]) // Get the selected record number
```

#### See also 

*About Record Numbers*  
[GOTO SELECTED RECORD](goto-selected-record.md)  
[Records in selection](records-in-selection.md)  