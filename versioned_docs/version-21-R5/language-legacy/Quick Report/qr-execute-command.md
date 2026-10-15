---
id: qr-execute-command
title: QR EXECUTE COMMAND
slug: /commands/qr-execute-command
displayed_sidebar: docs
---

<!--REF #_command_.QR EXECUTE COMMAND.Syntax-->**QR EXECUTE COMMAND** ( *area* : Integer ; *command* : Integer )<!-- END REF-->
<!--REF #_command_.QR EXECUTE COMMAND.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| command | Integer | &#8594;  | Menu command to be executed |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R6|Modified|
|16|Modified|
|2003|Created|

</details>
</div>

## Description 

<!--REF #_command_.QR EXECUTE COMMAND.Summary-->The **QR EXECUTE COMMAND** command executes the toolbar button command whose reference was passed in *command*.<!-- END REF--> The most common use for this command is to execute a command selected by the user and intercepted in your code via the [QR ON COMMAND](../commands/qr-on-command) command.

In *command*, pass a value or one of the following constants of the *QR Commands* constant theme (only listed events are supported):

| Constant             | Value | Comment                                        |
| -------------------- | ----- | ---------------------------------------------- |
| qr cmd generate      | 2008  | Use of command [QR RUN](../commands/qr-run) recommended |
| qr cmd open          | 2001  |                                                |
| qr cmd page setup    | 2006  |                                                |
| qr cmd print preview | 2007  |                                                |
| qr cmd save          | 2002  |                                                |
| qr cmd save as       | 2003  |                                                |

If you pass an invalid *area* number, the error -9850 will be generated.

If you pass an invalid *command* number, the error -9852 will be generated.

## See also 

[QR Get command status](../commands/qr-get-command-status)  
[QR ON COMMAND](../commands/qr-on-command)  

## Properties

|  |  |
| --- | --- |
| Command number | 791 |
| Thread safe | no |
| Modifies variables | error |


