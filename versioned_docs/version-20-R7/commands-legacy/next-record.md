---
id: next-record
title: NEXT RECORD
slug: /commands/next-record
displayed_sidebar: docs
---

<!--REF #_command_.NEXT RECORD.Syntax-->**NEXT RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.NEXT RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to move to the next selected record, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.NEXT RECORD.Summary-->**NEXT RECORD** moves the current record pointer to the next record in the current selection of *aTable* for the current process.<!-- END REF--> If the current selection is empty, or if [Before selection](before-selection.md) or [End selection](end-selection.md) is TRUE, **NEXT RECORD** has no effect.

If **NEXT RECORD** moves the current record pointer past the end of the current selection, [End selection](end-selection.md) returns TRUE, and there is no current record. If [End selection](end-selection.md) returns TRUE, use [FIRST RECORD](first-record.md), [LAST RECORD](last-record.md) or [GOTO SELECTED RECORD](goto-selected-record.md) to move the current record pointer back into the current selection. 

#### Example 

See the example for [DISPLAY RECORD](display-record.md).

#### See also 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[LAST RECORD](last-record.md)  
[PREVIOUS RECORD](previous-record.md)  