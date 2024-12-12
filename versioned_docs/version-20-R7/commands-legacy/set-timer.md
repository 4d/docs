---
id: set-timer
title: SET TIMER
slug: /commands/set-timer
displayed_sidebar: docs
---

<!--REF #_command_.SET TIMER.Syntax-->**SET TIMER** ( *tickCount* )<!-- END REF-->
<!--REF #_command_.SET TIMER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tickCount | Integer | &#8594;  | Tickcount or -1=Trigger as soon as possible |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET TIMER.Summary-->The **SET TIMER** command activates the On Timer form event and sets, for the current form and process, the number of ticks elapsed between each On Timer form event.<!-- END REF--> 

**Note:** For more information about this form event, please refer to the description of the command [Form event code](../commands/form-event-code.md).

If this command is called in a context in which it is not displaying a form, it will have no effect. 

**Note:** When the **SET TIMER** command is executed in the context of a subform (form method of the subform), the On Timer event is generated in the subform and not at the parent form level. 

If you pass -1 in the *tickCount* parameter, the command will activate the On Timer form event "as soon as possible", in other words, as soon as the 4D application hands over control to the event manager. More particularly, this means that you can make sure that a form is completely displayed before beginning processing (application fluidity). 

To procedurally disable the triggering of the On Timer form event, call **SET TIMER** again and pass 0 in *tickCount*.

#### Example 

Let’s imagine that you want, when a form is displayed on screen, the computer to beep every three seconds. To do so, write the following form method: 

```4d
 If(Form event code=On Load)
    SET TIMER(60*3)
 End if
 
 If(Form event code=On Timer)
    BEEP
 End if
```

#### See also 

[Form event code](../commands/form-event-code.md)  
[REDRAW](redraw.md)  