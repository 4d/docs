---
id: qr-get-command-status
title: QR Get command status
slug: /commands/qr-get-command-status
displayed_sidebar: docs
---

<!--REF #_command_.QR Get command status.Syntax-->**QR Get command status** ( *area* ; *command* {; *value*} ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get command status.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| command | Integer | &#8594;  | Command number |
| value | Integer, Text | &#8592; | Value for the selected sub-item |
| Function result | Integer | &#8592; | Command status |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Get command status.Summary-->The **QR Get command status** command returns 0 if the *command* is disabled or 1 if it is enabled.<!-- END REF-->

*value* returns the value of the selected sub-item, if any. For example, if the command that was selected is the **Font** menu (1000) and the font selected was “Arial”, *value* would return “Arial”, or if the command that was selected is a color menu (1002, 1003 or 1004), *value* would return the color number.

You can use the command in two types of contexts:

* As a simple statement to determine whether a command is enabled or disabled.
* In the method installed by [QR ON COMMAND](qr-on-command.md), to allow you to know which sub-item was selected. In that method, *$1* is the reference of the area and *$2* is the number of the command.

In *command*, you can pass a value or one of the constants of the *QR Commands* constant theme.

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *command* number, the error -9852 will be generated.

#### See also 

[QR EXECUTE COMMAND](qr-execute-command.md)  
[QR ON COMMAND](qr-on-command.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 792 |
| Thread safe | &cross; |
| Modifies variables | error |


