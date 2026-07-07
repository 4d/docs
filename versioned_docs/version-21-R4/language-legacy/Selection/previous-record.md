---
id: previous-record
title: PREVIOUS RECORD
slug: /commands/previous-record
displayed_sidebar: docs
---

<!--REF #_command_.PREVIOUS RECORD.Syntax-->**PREVIOUS RECORD** ({ *aTable* : Table })<!-- END REF-->
<!--REF #_command_.PREVIOUS RECORD.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to move to the previous selected record, or Default table, if omitted |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.PREVIOUS RECORD.Summary-->**PREVIOUS RECORD** moves the current record pointer to the previous record in the current selection of *aTable* for the current process.<!-- END REF--> If the current selection is empty, or if [Before selection](../commands/before-selection) or [End selection](../commands/end-selection) is TRUE, **PREVIOUS RECORD** has no effect.

If **PREVIOUS RECORD** moves the current record pointer before the current selection, [End selection](../commands/end-selection) returns TRUE, and there is no current record. If [End selection](../commands/end-selection) returns TRUE, use [FIRST RECORD](../commands/first-record), [LAST RECORD](../commands/last-record) or [GOTO SELECTED RECORD](../commands/goto-selected-record) to move the current record pointer back into the current selection.

## See also 

[Before selection](../commands/before-selection)  
[End selection](../commands/end-selection)  
[FIRST RECORD](../commands/first-record)  
[LAST RECORD](../commands/last-record)  
[NEXT RECORD](../commands/next-record)  

## Properties

|  |  |
| --- | --- |
| Command number | 110 |
| Thread safe | yes |
| Changes current record ||


