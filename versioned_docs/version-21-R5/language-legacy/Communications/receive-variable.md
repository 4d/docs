---
id: receive-variable
title: RECEIVE VARIABLE
slug: /commands/receive-variable
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE VARIABLE.Syntax-->**RECEIVE VARIABLE** ( *variable* : Variable )<!-- END REF-->
<!--REF #_command_.RECEIVE VARIABLE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| variable | Variable | &#8592; | Variable in which to receive |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.RECEIVE VARIABLE.Summary-->**RECEIVE VARIABLE** receives *variable*, which was previously sent by [SEND VARIABLE](../commands/send-variable) from the document or serial port previously opened by [SET CHANNEL](../commands/set-channel).<!-- END REF--> 

In interpreted mode, if the variable does not exist prior to the call to **RECEIVE VARIABLE**, the variable is created, typed and assigned according to what has been received. In compiled mode, the variable must be of the same type as what is received. In both cases, the contents of the variable are replaced with what is received.

**Notes:**

1. If you receive a variable from a document using this command, the document must have been opened using the [SET CHANNEL](../commands/set-channel) command. You cannot use **RECEIVE VARIABLE** with a document opened with [Open document](../commands/open-document), [Create document](../commands/create-document) or [Append document](../commands/append-document).
2. This command does not support array variables. If you want to send and receive arrays from a document or over a serial port, use the *BLOB Commands*.
3. During the execution of **RECEIVE VARIABLE**, the user can interrupt the reception by pressing **Ctrl-Alt-Shift** (Windows) or **Command-Option-Shift** (Macintosh). This interruption generates an error -9994 that you can catch with an error-handling method installed using [ON ERR CALL](../commands/on-err-call). Usually, you only need to handle the interruption of a reception while communicating over a serial port.

## Example 

See example for the [RECEIVE RECORD](../commands/receive-record) command.

## System variables and sets 

The OK system variable is set to 1 if the variable is received. Otherwise, the OK system variable is set to 0.

## See also 

[ON ERR CALL](../commands/on-err-call)  
[RECEIVE RECORD](../commands/receive-record)  
[SEND RECORD](../commands/send-record)  
[SEND VARIABLE](../commands/send-variable)  

## Properties

|  |  |
| --- | --- |
| Command number | 81 |
| Thread safe | yes |
| Modifies variables | OK, error |


