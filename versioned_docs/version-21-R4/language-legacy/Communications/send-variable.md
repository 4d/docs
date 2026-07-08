---
id: send-variable
title: SEND VARIABLE
slug: /commands/send-variable
displayed_sidebar: docs
---

<!--REF #_command_.SEND VARIABLE.Syntax-->**SEND VARIABLE** ( *variable* : Variable )<!-- END REF-->
<!--REF #_command_.SEND VARIABLE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable to send |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.SEND VARIABLE.Summary-->SEND VARIABLE sends *variable* to the document or serial port previously opened by [SET CHANNEL](../commands/set-channel).<!-- END REF--> The variable is sent with a special internal format that can be read only by [RECEIVE VARIABLE](../commands/receive-variable). SEND VARIABLE sends the complete variable (including its type and value).

**Notes:**

1. If you send a variable to a document using this command, the document must have been opened using the [SET CHANNEL](../commands/set-channel) command. You cannot use SEND VARIABLE with a document opened with [Open document](../commands/open-document), [Create document](../commands/create-document) or [Append document](../commands/append-document).
2. This command does not support array variables. If you want to send and receive arrays from a document or over a serial port, use the *BLOB Commands*.

## Example 

See example for the [RECEIVE RECORD](../commands/receive-record) command.

## See also 

[RECEIVE RECORD](../commands/receive-record)  
[RECEIVE VARIABLE](../commands/receive-variable)  
[SEND RECORD](../commands/send-record)  
[SET CHANNEL](../commands/set-channel)  

## Properties

|  |  |
| --- | --- |
| Command number | 80 |
| Thread safe | yes |


