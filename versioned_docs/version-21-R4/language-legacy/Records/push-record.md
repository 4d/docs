---
id: push-record
title: PUSH RECORD
slug: /commands/push-record
displayed_sidebar: docs
---

<!--REF #_command_.PUSH RECORD.Syntax-->**PUSH RECORD** ({ *aTable* : Table })<!-- END REF-->
<!--REF #_command_.PUSH RECORD.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to push record, or Default table, if omitted |
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

<!--REF #_command_.PUSH RECORD.Summary-->**PUSH RECORD** pushes the current record of *aTable* (and its subrecords, if any) onto the table’s record stack.<!-- END REF-->may be executed before a record is saved.

If you push a record that was unlocked, this record stays locked for all the other processes and users until you pop and unload it.

**Compatibility note:** Beginning with version 11 of 4D, this command no longer supports subtables. 

## Example 

The following example pushes the record for the customer onto the record stack:

```4d
 PUSH RECORD([Customer]) // Push customer’s record onto stack
```

## See also 

[POP RECORD](../commands/pop-record)  
*Using the Record Stack*  

## Properties

|  |  |
| --- | --- |
| Command number | 176 |
| Thread safe | yes |


