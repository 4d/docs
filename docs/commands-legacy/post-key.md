---
id: post-key
title: POST KEY
slug: /commands/post-key
displayed_sidebar: docs
---

<!--REF #_command_.POST KEY.Syntax-->**POST KEY** ( *code* {; *modifiers* {; *process*}} )<!-- END REF-->
<!--REF #_command_.POST KEY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| code | Integer | &#8594;  | Character code or function key code |
| modifiers | Integer | &#8594;  | State of modifier keys |
| process | Integer | &#8594;  | Destination process reference number, or Application event queue, if omitted, or 0 |

<!-- END REF-->

#### Description 

<!--REF #_command_.POST KEY.Summary-->The **POST KEY** command simulates a keystroke.<!-- END REF--> Its effect is as if the user actually entered a character on the keyboard.

You pass the code of the character in *code*. 

If you pass the *modifiers* parameter, you pass one or a combination of the *Events (Modifiers)* constants:

| Constant               | Type    | Value | Comment                                                    |
| ---------------------- | ------- | ----- | ---------------------------------------------------------- |
| Activate window bit    | Integer | 0     |                                                            |
| Activate window mask   | Integer | 1     |                                                            |
| Caps lock key bit      | Integer | 10    | Windows and OS X                                           |
| Caps lock key mask     | Integer | 1024  | Windows and OS X                                           |
| Command key bit        | Integer | 8     | Ctrl key under Windows, Command key under OS X             |
| Command key mask       | Integer | 256   | Ctrl key under Windows, Command key under OS X             |
| Control key bit        | Integer | 12    | Ctrl key under OS X, or right click under Windows and OS X |
| Control key mask       | Integer | 4096  | Ctrl key under OS X, or right click under Windows and OS X |
| Mouse button bit       | Integer | 7     |                                                            |
| Mouse button mask      | Integer | 128   |                                                            |
| Option key bit         | Integer | 11    | Alt key (also called Option under OS X)                    |
| Option key mask        | Integer | 2048  | Alt key (also called Option under OS X)                    |
| Right control key bit  | Integer | 15    |                                                            |
| Right control key mask | Integer | 32768 |                                                            |
| Right option key bit   | Integer | 14    |                                                            |
| Right option key mask  | Integer | 16384 |                                                            |
| Right shift key bit    | Integer | 13    |                                                            |
| Right shift key mask   | Integer | 8192  |                                                            |
| Shift key bit          | Integer | 9     | Windows and OS X                                           |
| Shift key mask         | Integer | 512   | Windows and OS X                                           |

 For example, to simulate the Shift key, pass Shift key mask. If you do not pass *modifiers*, no modifiers are simulated.

If you specify the *process* parameter, the keystroke is sent to the process whose process number you pass in *process*. If you pass *0* (zero) or if you omit the parameter, the keystroke is sent at the application level, and the 4D scheduler will dispatch it to the appropriate process.

#### Example 

See example for the [Process number](../commands/process-number.md) command.

#### See also 

*ASCII Codes*  
*Function Key Codes*  
[POST CLICK](post-click.md)  
[POST EVENT](post-event.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 465 |
| Thread safe | &cross; |


