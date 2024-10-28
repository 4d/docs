---
id: right-click
title: Right click
slug: /commands/right-click
displayed_sidebar: docs
---

<!--REF #_command_.Right click.Syntax-->**Right click**  -> Function result<!-- END REF-->
<!--REF #_command_.Right click.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True if a right click was detected, otherwise False |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Right click.Summary-->The Right click command returns True if the right button of the mouse has been clicked.<!-- END REF-->

This command should be used only in the context of the On Clicked form event. It is therefore necessary to verify in Design mode that the event has been properly selected in the Form properties and/or in the specific object.

#### See also 

[Contextual click](contextual-click.md)  
[Form event code](form-event-code.md)  