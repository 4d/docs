---
id: next-record
title: NEXT RECORD
slug: /commands/next-record
displayed_sidebar: docs
---

<!--REF #_command_.NEXT RECORD.Syntax-->**NEXT RECORD** ({ *aTable* : Table })<!-- END REF-->
<!--REF #_command_.NEXT RECORD.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to move to the next selected record, or Default table, if omitted |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.NEXT RECORD.Summary-->**NEXT RECORD** moves the current record pointer to the next record in the current selection of *aTable* for the current process.<!-- END REF--> If the current selection is empty, or if [Before selection](../commands/before-selection) or [End selection](../commands/end-selection) is TRUE, **NEXT RECORD** has no effect.

If **NEXT RECORD** moves the current record pointer past the end of the current selection, [End selection](../commands/end-selection) returns TRUE, and there is no current record. If [End selection](../commands/end-selection) returns TRUE, use [FIRST RECORD](../commands/first-record), [LAST RECORD](../commands/last-record) or [GOTO SELECTED RECORD](../commands/goto-selected-record) to move the current record pointer back into the current selection. 

## Example 

See the example for [DISPLAY RECORD](../commands/display-record).

## See also 

[Before selection](../commands/before-selection)  
[End selection](../commands/end-selection)  
[FIRST RECORD](../commands/first-record)  
[LAST RECORD](../commands/last-record)  
[PREVIOUS RECORD](../commands/previous-record)  

## Properties

|  |  |
| --- | --- |
| Command number | 51 |
| Thread safe | yes |
| Changes current record ||


