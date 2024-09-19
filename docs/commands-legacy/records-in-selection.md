---
id: records-in-selection
title: Records in selection
slug: /commands-legacy/records-in-selection
displayed_sidebar: docs
---

<!--REF #_command_.Records in selection.Syntax-->**Records in selection** {( *aTable* )} -> Function result<!-- END REF-->
<!--REF #_command_.Records in selection.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#x1F852; | Table for which to return number of selected records, or Default table, if omitted |
| Function result | Longint | &#x1F850; | Records in selection of table |

<!-- END REF-->

#### Description 

<!--REF #_command_.Records in selection.Summary-->**Records in selection** returns the number of records in the current selection of *aTable*.<!-- END REF--> In contrast, [Records in table](records-in-table.md) returns the total number of records in the table.

#### Example 

The following example shows a loop technique commonly used to move through all the records in a selection. The same action can also be accomplished with the [APPLY TO SELECTION](apply-to-selection.md) command:

```4d
 FIRST RECORD([People]) // Start at first record in the selection
 For($vlRecord;1;Records in selection([People])) // Loop once for each record
    Do Something // Do something with the record
    NEXT RECORD([People]) // Move to the next record
 End for
```

#### See also 

[Records in table](records-in-table.md)  