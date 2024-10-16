---
id: first-record
title: FIRST RECORD
slug: /commands/first-record
displayed_sidebar: docs
---

<!--REF #_command_.FIRST RECORD.Syntax-->**FIRST RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.FIRST RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to move to the first selected record, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.FIRST RECORD.Summary-->**FIRST RECORD** makes the first record of the current selection of *aTable* the current record, and loads the record from disk.<!-- END REF--> All query, selection, and sorting commands also set the current record to the first record. If the current selection is empty or if the current record is already the first record of the selection, **FIRST RECORD** has no effect. 

This command is most often used after the [USE SET](use-set.md) command to begin looping through a selection of records from the first record. However, you can also call it from a subroutine if you are not sure whether or not the current record is actually the first.

#### Example 

The following example makes the first record of the \[Customers\] table the first record:

```4d
 FIRST RECORD([Customers])
```

#### See also 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  
[PREVIOUS RECORD](previous-record.md)  