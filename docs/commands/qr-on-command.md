---
id: qr-on-command
title: QR ON COMMAND
displayed_sidebar: docs
---

<!--REF #_command_.QR ON COMMAND.Syntax-->**QR ON COMMAND** ( *area* ; *methodName* )<!-- END REF-->
<!--REF #_command_.QR ON COMMAND.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Longint | -> | Reference of the area |
| methodName | String | -> | Name of the replacement method |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR ON COMMAND.Summary-->The **QR ON COMMAND** command executes the 4D method passed in *methodName* when a Quick Report command is invoked by the user, by the selection of a menu command or by a click on a button.<!-- END REF-->

If *area* equals zero, *methodName* will apply to each Quick Report area until the database is closed or until the following call to the command is made: **QR ON COMMAND**(0;"").

*methodName* receives two parameters:

* *$1* is the reference of the area (Longint).
* *$2* is the command number of the command that was selected (Longint). You can compare this value with the following constants of the [QR Commands](/4Dv20R6/4D/20-R6/QR-Commands.302-6958472.en.html) theme:  
| Constant             | Type    | Value | Comment                                        |  
| -------------------- | ------- | ----- | ---------------------------------------------- |  
| qr cmd generate      | Longint | 2008  | Use of command [QR RUN](qr-run.md) recommended |  
| qr cmd page setup    | Longint | 2006  |                                                |  
| qr cmd print preview | Longint | 2007  |                                                |

**Note:** When planning on compiling the database, it is necessary to declare both *$1* and *$2* as Longints, even if you do not use them.

If you want the initial command to be executed, you need to include the following in the called method: [QR EXECUTE COMMAND](qr-execute-command.md)($1;$2).

If you pass an invalid *area* number, the error -9850 will be generated.

#### See also 

[QR Commands](../../4D/20-R6/QR-Commands.302-6958472.en.html)  
[QR EXECUTE COMMAND](qr-execute-command.md)  
[QR Get command status](qr-get-command-status.md)  