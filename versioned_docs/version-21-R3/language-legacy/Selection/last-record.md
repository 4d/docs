---
id: last-record
title: LAST RECORD
slug: /commands/last-record
displayed_sidebar: docs
---

<!--REF #_command_.LAST RECORD.Syntax-->**LAST RECORD** ({ *aTable* : Table })<!-- END REF-->
<!--REF #_command_.LAST RECORD.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to move to the last selected record, or Default table, if omitted |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.LAST RECORD.Summary-->**LAST RECORD** makes the last record of the current selection of *aTable* the current record and loads the record from disk.<!-- END REF--> If the current selection is empty or if the current record is already the last one in the selection, **LAST RECORD** has no effect.

## Example 

The following example makes the last record of the \[People\] table the current record:

```4d
 LAST RECORD([People])
```

## See also 

[Before selection](../commands/before-selection)  
[End selection](../commands/end-selection)  
[FIRST RECORD](../commands/first-record)  
[NEXT RECORD](../commands/next-record)  
[PREVIOUS RECORD](../commands/previous-record)  

## Properties

|  |  |
| --- | --- |
| Command number | 200 |
| Thread safe | yes |
| Changes current record ||


