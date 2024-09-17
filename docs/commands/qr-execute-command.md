---
id: qr-execute-command
title: QR EXECUTE COMMAND
displayed_sidebar: docs
---

<!--REF #_command_.QR EXECUTE COMMAND.Syntax-->**QR EXECUTE COMMAND** ( *area* ; *command* )<!-- END REF-->
<!--REF #_command_.QR EXECUTE COMMAND.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | -> | Reference of the area |
| command | Longint | -> | Menu command to be executed |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR EXECUTE COMMAND.Summary-->The **QR EXECUTE COMMAND** command executes the toolbar button command whose reference was passed in *command*.<!-- END REF--> The most common use for this command is to execute a command selected by the user and intercepted in your code via the [QR ON COMMAND](qr-on-command.md) command.

In *command*, pass a value or one of the following constants of the [QR Commands](/4Dv20R6/4D/20-R6/QR-Commands.302-6958472.en.html) constant theme (only listed events are supported):

| Constant             | Value | Comment                                        |
| -------------------- | ----- | ---------------------------------------------- |
| qr cmd generate      | 2008  | Use of command [QR RUN](qr-run.md) recommended |
| qr cmd open          | 2001  |                                                |
| qr cmd page setup    | 2006  |                                                |
| qr cmd print preview | 2007  |                                                |
| qr cmd save          | 2002  |                                                |
| qr cmd save as       | 2003  |                                                |

If you pass an invalid *area* number, the error -9850 will be generated.

If you pass an invalid *command* number, the error -9852 will be generated.

#### See also 

[QR Get command status](qr-get-command-status.md)  
[QR ON COMMAND](qr-on-command.md)  