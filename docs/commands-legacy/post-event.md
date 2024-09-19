---
id: post-event
title: POST EVENT
slug: /commands-legacy/post-event
displayed_sidebar: docs
---

<!--REF #_command_.POST EVENT.Syntax-->**POST EVENT** ( *what* ; *message* ; *when* ; *mouseX* ; *mouseY* ; *modifiers* {; *process*} )<!-- END REF-->
<!--REF #_command_.POST EVENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| what | Longint | &#x1F852; | Type of event |
| message | Longint | &#x1F852; | Event message |
| when | Longint | &#x1F852; | Event time expressed in ticks |
| mouseX | Longint | &#x1F852; | Horizontal coordinate of mouse |
| mouseY | Longint | &#x1F852; | Vertical coordinate of mouse |
| modifiers | Longint | &#x1F852; | Modifier keys state |
| process | Longint | &#x1F852; | Destination process reference number, or Application event queue, if omitted, or 0 |

<!-- END REF-->

#### Description 

<!--REF #_command_.POST EVENT.Summary-->The **POST EVENT** command simulates a keyboard or mouse event.<!-- END REF--> Its effect is as if the user actually acted on the keyboard or the mouse.

You pass one of the following values in *what*:

| Constant         | Type    | Value |
| ---------------- | ------- | ----- |
| Auto key event   | Longint | 5     |
| Key down event   | Longint | 3     |
| Key up event     | Longint | 4     |
| Mouse down event | Longint | 1     |
| Mouse up event   | Longint | 2     |
  
  
If the event is a mouse-related event, you pass *0* (zero) in *message*. If the event is a keyboard-related event, you pass the code of the simulated character in *message*. 

Usually, you pass the value returned by [Tickcount](tickcount.md) in *when*.

If the event is a mouse-related event, you pass the horizontal and vertical coordinates of the click in *mouseX* and *mouseY*. 

In the parameter *modifiers*, you pass one or a combination of the constants of the *Events (Modifiers)* theme. 

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

For example, to simulate the Shift key, pass Shift key bit.

If you specify the *process* parameter, the event is sent to the process whose process number you pass in *process*. If you pass *0* (zero) or if you omit the parameter, the event is sent at the application level, and the 4D scheduler will dispatch it to the appropriate process.

#### See also 

[POST CLICK](post-click.md)  
[POST KEY](post-key.md)  