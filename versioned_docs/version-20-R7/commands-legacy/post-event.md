---
id: post-event
title: POST EVENT
slug: /commands/post-event
displayed_sidebar: docs
---

<!--REF #_command_.POST EVENT.Syntax-->**POST EVENT** ( *what* ; *message* ; *when* ; *mouseX* ; *mouseY* ; *modifiers* {; *process*} )<!-- END REF-->
<!--REF #_command_.POST EVENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| what | Integer | &#8594;  | Type of event |
| message | Integer | &#8594;  | Event message |
| when | Integer | &#8594;  | Event time expressed in ticks |
| mouseX | Integer | &#8594;  | Horizontal coordinate of mouse |
| mouseY | Integer | &#8594;  | Vertical coordinate of mouse |
| modifiers | Integer | &#8594;  | Modifier keys state |
| process | Integer | &#8594;  | Destination process reference number, or Application event queue, if omitted, or 0 |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.POST EVENT.Summary-->The **POST EVENT** command simulates a keyboard or mouse event.<!-- END REF--> Its effect is as if the user actually acted on the keyboard or the mouse.

You pass one of the following values in *what*:

| Constant         | Type    | Value |
| ---------------- | ------- | ----- |
| Auto key event   | Integer | 5     |
| Key down event   | Integer | 3     |
| Key up event     | Integer | 4     |
| Mouse down event | Integer | 1     |
| Mouse up event   | Integer | 2     |
  
  
If the event is a mouse-related event, you pass *0* (zero) in *message*. If the event is a keyboard-related event, you pass the code of the simulated character in *message*. 

Usually, you pass the value returned by [Tickcount](tickcount.md) in *when*.

If the event is a mouse-related event, you pass the horizontal and vertical coordinates of the click in *mouseX* and *mouseY*. 

In the parameter *modifiers*, you pass one or a combination of the constants of the *Events (Modifiers)* theme. 

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

For example, to simulate the Shift key, pass Shift key bit.

If you specify the *process* parameter, the event is sent to the process whose process number you pass in *process*. If you pass *0* (zero) or if you omit the parameter, the event is sent at the application level, and the 4D scheduler will dispatch it to the appropriate process.

#### See also 

[POST CLICK](post-click.md)  
[POST KEY](post-key.md)  