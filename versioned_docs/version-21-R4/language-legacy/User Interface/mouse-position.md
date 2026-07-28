---
id: mouse-position
title: MOUSE POSITION
slug: /commands/mouse-position
displayed_sidebar: docs
---

<!--REF #_command_.MOUSE POSITION.Syntax-->**MOUSE POSITION** ( *mouseX* : Real ; *mouseY* : Real ; *mouseButton* : Integer {; *} )<!-- END REF-->
<!--REF #_command_.MOUSE POSITION.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| mouseX | Real | &#8592; | Horizontal coordinate of mouse |
| mouseY | Real | &#8592; | Vertical coordinate of mouse |
| mouseButton | Integer | &#8592; | Mouse button state: 0 = Button up 1 = Button down 2 = Right button down 3 = Both buttons down |
| * | Operator | &#8594;  | If specified, global coordinate system is usedIf omitted, local coordinate system is used |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.MOUSE POSITION.Summary-->The MOUSE POSITION command returns the current state of the mouse.<!-- END REF-->

The horizontal and vertical coordinates are returned in *mouseX* and *mouseY*. If you pass the *\** parameter, the coordinates are expressed relative to the main screen (macOS and Windows SDI mode) or to the application window (Windows MDI mode). If you omit the *\** parameter, they are expressed relative to the current form window (if any) of the current process.

The parameter *mouseButton* returns the state of the buttons, as listed previously.

**Note:** The values 2 and 3 can be returned under macOS starting with version 10.2.5 only.

## Example 

See the example for the [Pop up menu](../commands/pop-up-menu) command.

## See also 

[Caps lock down](../commands/caps-lock-down)  
[Macintosh command down](../commands/macintosh-command-down)  
[Macintosh control down](../commands/macintosh-control-down)  
[Macintosh option down](../commands/macintosh-option-down)  
[ON EVENT CALL](../commands/on-event-call)  
[Shift down](../commands/shift-down)  
[Windows Alt down](../commands/windows-alt-down)  
[Windows Ctrl down](../commands/windows-ctrl-down)  

## Properties

|  |  |
| --- | --- |
| Command number | 468 |
| Thread safe | no |


