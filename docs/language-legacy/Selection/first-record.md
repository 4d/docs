---
id: first-record
title: FIRST RECORD
slug: /commands/first-record
displayed_sidebar: docs
---

<!--REF #_command_.FIRST RECORD.Syntax-->**FIRST RECORD** ({ *aTable* : Table })<!-- END REF-->
<!--REF #_command_.FIRST RECORD.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to move to the first selected record, or Default table, if omitted |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.FIRST RECORD.Summary-->**FIRST RECORD** makes the first record of the current selection of *aTable* the current record, and loads the record from disk.<!-- END REF--> All query, selection, and sorting commands also set the current record to the first record. If the current selection is empty or if the current record is already the first record of the selection, **FIRST RECORD** has no effect. 

This command is most often used after the [USE SET](../commands/use-set) command to begin looping through a selection of records from the first record. However, you can also call it from a subroutine if you are not sure whether or not the current record is actually the first.

## Example 

The following example makes the first record of the \[Customers\] table the first record:

```4d
 FIRST RECORD([Customers])
```

## See also 

[Before selection](../commands/before-selection)  
[End selection](../commands/end-selection)  
[LAST RECORD](../commands/last-record)  
[NEXT RECORD](../commands/next-record)  
[PREVIOUS RECORD](../commands/previous-record)  

## Properties

|  |  |
| --- | --- |
| Command number | 50 |
| Thread safe | yes |
| Changes current record ||


