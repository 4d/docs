---
id: duplicate-record
title: DUPLICATE RECORD
slug: /commands/duplicate-record
displayed_sidebar: docs
---

<!--REF #_command_.DUPLICATE RECORD.Syntax-->**DUPLICATE RECORD** ({ *aTable* : Table })<!-- END REF-->
<!--REF #_command_.DUPLICATE RECORD.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to duplicate the current record, or Default table, if omitted |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.DUPLICATE RECORD.Summary-->**DUPLICATE RECORD** creates a new record for *aTable* that is a duplicate of the current record.<!-- END REF--> The new record becomes the current record. If there is no current record, then **DUPLICATE RECORD** does nothing. You must use [SAVE RECORD](../commands/save-record) to save the new record.

**DUPLICATE RECORD** can be executed during data entry. This allows you to create a clone of the currently displayed record. Remember that you must first execute [SAVE RECORD](../commands/save-record) in order to save any changes made to the original record. 

**Compatibility note:** Beginning with version 11 of 4D, this command no longer supports subtables.

## See also 

[SAVE RECORD](../commands/save-record)  

## Properties

|  |  |
| --- | --- |
| Command number | 225 |
| Thread safe | yes |
| Changes current record ||


