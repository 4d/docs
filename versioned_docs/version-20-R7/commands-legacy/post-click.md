---
id: post-click
title: POST CLICK
slug: /commands/post-click
displayed_sidebar: docs
---

<!--REF #_command_.POST CLICK.Syntax-->**POST CLICK** ( *mouseX* ; *mouseY* {; *process*} {; *} )<!-- END REF-->
<!--REF #_command_.POST CLICK.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| mouseX | Integer | &#8594;  | Horizontal coordinate |
| mouseY | Integer | &#8594;  | Vertical coordinate |
| process | Integer | &#8594;  | Destination process reference number, or Application event queue, if omitted, or 0 |
| * | Operator |  &#8594;  | If specified, global coordinate system is used If omitted, local coordinate system is used |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.POST CLICK.Summary-->The POST CLICK command simulates a mouse click.<!-- END REF--> Its effect as if the user actually clicked the mouse button.

You pass the horizontal and vertical coordinates of the click in *mouseX* and *mouseY*. If you pass the *\** parameter, you express these coordinates relative to the screen. If you omit the *\** parameter, you express these coordinates relative to the frontmost window of the process whose process number you pass in *process*. 

If you specify the *process* parameter, the click is sent to the process whose process number you pass in *process*. If you pass *0* (zero) or if you omit the parameter, the click is sent at the application level, and the 4D scheduler will dispatch it to the appropriate process.

#### See also 

[POST EVENT](post-event.md)  
[POST KEY](post-key.md)  