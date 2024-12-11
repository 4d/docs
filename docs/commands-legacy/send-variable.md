---
id: send-variable
title: SEND VARIABLE
slug: /commands/send-variable
displayed_sidebar: docs
---

<!--REF #_command_.SEND VARIABLE.Syntax-->**SEND VARIABLE** ( *variable* )<!-- END REF-->
<!--REF #_command_.SEND VARIABLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable to send |

<!-- END REF-->

#### Description 

<!--REF #_command_.SEND VARIABLE.Summary-->SEND VARIABLE sends *variable* to the document or serial port previously opened by [SET CHANNEL](set-channel.md).<!-- END REF--> The variable is sent with a special internal format that can be read only by [RECEIVE VARIABLE](receive-variable.md). SEND VARIABLE sends the complete variable (including its type and value).

**Notes:**

1. If you send a variable to a document using this command, the document must have been opened using the [SET CHANNEL](set-channel.md) command. You cannot use SEND VARIABLE with a document opened with [Open document](open-document.md), [Create document](create-document.md) or [Append document](append-document.md).
2. This command does not support array variables. If you want to send and receive arrays from a document or over a serial port, use the *BLOB Commands*.

#### Example 

See example for the [RECEIVE RECORD](receive-record.md) command.

#### See also 

[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND RECORD](send-record.md)  
[SET CHANNEL](set-channel.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 80 |
| Thread safe | &check; |
| Forbidden on the server ||


