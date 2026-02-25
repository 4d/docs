---
id: send-record
title: SEND RECORD
slug: /commands/send-record
displayed_sidebar: docs
---

<!--REF #_command_.SEND RECORD.Syntax-->**SEND RECORD** ({ *aTable* : Table })<!-- END REF-->
<!--REF #_command_.SEND RECORD.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table from which to send the current record, or Default table, if omitted |
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

<!--REF #_command_.SEND RECORD.Summary-->**SEND RECORD** sends the current record of *aTable* to the serial port or document opened by the [SET CHANNEL](../commands/set-channel) command.<!-- END REF--> The record is sent with a special internal format that can be read only by [RECEIVE RECORD](../commands/receive-record). If no current record exists, SEND RECORD has no effect.

The complete record is sent. This means that pictures and BLOBs stored in or with the record are also sent.

**Important:** When records are being sent and received using SEND RECORD and [RECEIVE RECORD](../commands/receive-record), the source table structure and the destination table structure must be compatible. If they are not, 4D will convert values according to the table definitions when [RECEIVE RECORD](../commands/receive-record) is executed.

**Note:** If you send a record to a document using this command, the document must have been opened using the [SET CHANNEL](../commands/set-channel) command. You cannot use SEND RECORD with a document opened with [Open document](../commands/open-document), [Create document](../commands/create-document) or [Append document](../commands/append-document).

**Compatibility note:** Beginning with version 11 of 4D, this command no longer supports subtables.

## Example 

See example for the [RECEIVE RECORD](../commands/receive-record) command.

## See also 

[RECEIVE RECORD](../commands/receive-record)  
[RECEIVE VARIABLE](../commands/receive-variable)  
[SEND VARIABLE](../commands/send-variable)  

## Properties

|  |  |
| --- | --- |
| Command number | 78 |
| Thread safe | yes |


