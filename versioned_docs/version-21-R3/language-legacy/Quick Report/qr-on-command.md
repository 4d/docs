---
id: qr-on-command
title: QR ON COMMAND
slug: /commands/qr-on-command
displayed_sidebar: docs
---

<!--REF #_command_.QR ON COMMAND.Syntax-->**QR ON COMMAND** ( *area* : Integer ; *methodName* : Text )<!-- END REF-->
<!--REF #_command_.QR ON COMMAND.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| methodName | Text | &#8594;  | Name of the replacement method |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16|Modified|
|14|Modified|
|2003|Created|

</details>
</div>

## Description 

<!--REF #_command_.QR ON COMMAND.Summary-->The **QR ON COMMAND** command executes the 4D method passed in *methodName* when a Quick Report command is invoked by the user, by the selection of a menu command or by a click on a button.<!-- END REF-->

If *area* equals zero, *methodName* will apply to each Quick Report area until the database is closed or until the following call to the command is made: **QR ON COMMAND**(0;"").

*methodName* receives two parameters:

* *$1* is the reference of the area (Longint).
* *$2* is the command number of the command that was selected (Longint). You can compare this value with the following constants of the *QR Commands* theme:
  
| Constant             | Type    | Value | Comment                                        |  
| -------------------- | ------- | ----- | ---------------------------------------------- |  
| qr cmd generate      | Integer | 2008  | Use of command [QR RUN](../commands/qr-run) recommended |  
| qr cmd page setup    | Integer | 2006  |                                                |  
| qr cmd print preview | Integer | 2007  |                                                |

**Note:** When planning on compiling the database, it is necessary to declare both *$1* and *$2* as Longints, even if you do not use them.

If you want the initial command to be executed, you need to include the following in the called method: [QR EXECUTE COMMAND](../commands/qr-execute-command)($1;$2).

If you pass an invalid *area* number, the error -9850 will be generated.

## See also 

*QR Commands*  
[QR EXECUTE COMMAND](../commands/qr-execute-command)  
[QR Get command status](../commands/qr-get-command-status)  

## Properties

|  |  |
| --- | --- |
| Command number | 790 |
| Thread safe | no |
| Modifies variables | error |


