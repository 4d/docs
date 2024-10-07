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
| code | Integer | &srarr; | Character code or function key code |
| modifiers | Integer | &srarr; | State of modifier keys |
| process | Integer | &srarr; | Destination process reference number, or Application event queue, if omitted, or 0 |

<!-- END REF-->

#### Description 

<!--REF #_command_.POST KEY.Summary-->The **POST KEY** command simulates a keystroke.<!-- END REF--> Its effect is as if the user actually entered a character on the keyboard.

You pass the code of the character in *code*. 

If you pass the *modifiers* parameter, you pass one or a combination of the *Events (Modifiers)* constants:

| Constant               | Type    | Value | Comment                                                    |
| ---------------------- | ------- | ----- | ---------------------------------------------------------- |
| Activate window bit    | Longint | 0     |                                                            |
| Activate window mask   | Longint | 1     |                                                            |
| Caps lock key bit      | Longint | 10    | Windows and OS X                                           |
| Caps lock key mask     | Longint | 1024  | Windows and OS X                                           |
| Command key bit        | Longint | 8     | Ctrl key under Windows, Command key under OS X             |
| Command key mask       | Longint | 256   | Ctrl key under Windows, Command key under OS X             |
| Control key bit        | Longint | 12    | Ctrl key under OS X, or right click under Windows and OS X |
| Control key mask       | Longint | 4096  | Ctrl key under OS X, or right click under Windows and OS X |
| Mouse button bit       | Longint | 7     |                                                            |
| Mouse button mask      | Longint | 128   |                                                            |
| Option key bit         | Longint | 11    | Alt key (also called Option under OS X)                    |
| Option key mask        | Longint | 2048  | Alt key (also called Option under OS X)                    |
| Right control key bit  | Longint | 15    |                                                            |
| Right control key mask | Longint | 32768 |                                                            |
| Right option key bit   | Longint | 14    |                                                            |
| Right option key mask  | Longint | 16384 |                                                            |
| Right shift key bit    | Longint | 13    |                                                            |
| Right shift key mask   | Longint | 8192  |                                                            |
| Shift key bit          | Longint | 9     | Windows and OS X                                           |
| Shift key mask         | Longint | 512   | Windows and OS X                                           |

 For example, to simulate the Shift key, pass Shift key mask. If you do not pass *modifiers*, no modifiers are simulated.

If you specify the *process* parameter, the keystroke is sent to the process whose process number you pass in *process*. If you pass *0* (zero) or if you omit the parameter, the keystroke is sent at the application level, and the 4D scheduler will dispatch it to the appropriate process.

#### Example 

See example for the [Process number](process-number.md) command.

#### See also 

*ASCII Codes*  
*Function Key Codes*  
[POST CLICK](post-click.md)  
[POST EVENT](post-event.md)  