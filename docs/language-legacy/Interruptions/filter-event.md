---
id: filter-event
title: FILTER EVENT
slug: /commands/filter-event
displayed_sidebar: docs
---

<!--REF #_command_.FILTER EVENT.Syntax-->**FILTER EVENT**<!-- END REF-->
<!--REF #_command_.FILTER EVENT.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.FILTER EVENT.Summary-->You call the **FILTER EVENT** command from within an event-handling project method installed using the [ON EVENT CALL](../commands/on-event-call) command.<!-- END REF-->

If an event-handling method calls **FILTER EVENT**, the current event is not passed to 4D.

This command removes the current event (i.e., click, keystroke) from the event queue, so 4D will not perform any additional treatment to the one you made in the event-handling project method.

**WARNING:** Do not create an event-handling method that only calls the **FILTER EVENT** command, because all the events are going to be ignored by 4D. When you have an event-handling method with only the **FILTER EVENT** command, type Ctrl+Shift+Backspace (on Windows) or Command-Option-Shift-Control-Backspace (on Macintosh). This converts the On Event Call process into a normal process that does not get any events at all.

**Special case:** The **FILTER EVENT** command can also be used within a standard output form method when the form is displayed using the [DISPLAY SELECTION](../commands/display-selection) or [MODIFY SELECTION](../commands/modify-selection) commands. In this specific case, the **FILTER EVENT** command allows you to filter double-clicks on the records (and in this way execute actions other than the opening of records in page mode).

To do this, place the following lines in the output form method:

```4d
 If(Form event code=On Double Clicked)
    FILTER EVENT
    ... //Process the double-click
 End if
```

## Example 

See example for the [ON EVENT CALL](../commands/on-event-call) command.

## See also 

[ON EVENT CALL](../commands/on-event-call)  

## Properties

|  |  |
| --- | --- |
| Command number | 321 |
| Thread safe | no |
| Forbidden on the server ||


