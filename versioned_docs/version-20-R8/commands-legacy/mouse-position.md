---
id: mouse-position
title: MOUSE POSITION
slug: /commands/mouse-position
displayed_sidebar: docs
---

<!--REF #_command_.MOUSE POSITION.Syntax-->**MOUSE POSITION** ( *mouseX* ; *mouseY* ; *mouseButton* {; *} )<!-- END REF-->
<!--REF #_command_.MOUSE POSITION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| mouseX | Real | &#8592; | Horizontal coordinate of mouse |
| mouseY | Real | &#8592; | Vertical coordinate of mouse |
| mouseButton | Integer | &#8592; | Mouse button state: 0 = Button up 1 = Button down 2 = Right button down 3 = Both buttons down |
| * | Operator | &#8594;  | If specified, global coordinate system is usedIf omitted, local coordinate system is used |

<!-- END REF-->

#### Description 

<!--REF #_command_.MOUSE POSITION.Summary-->The MOUSE POSITION command returns the current state of the mouse.<!-- END REF-->

The horizontal and vertical coordinates are returned in *mouseX* and *mouseY*. If you pass the *\** parameter, the coordinates are expressed relative to the main screen (macOS and Windows SDI mode) or to the application window (Windows MDI mode). If you omit the *\** parameter, they are expressed relative to the current form window (if any) of the current process.

The parameter *mouseButton* returns the state of the buttons, as listed previously.

**Note:** The values 2 and 3 can be returned under Mac OS X starting with version 10.2.5 only.

#### Example 

See the example for the [Pop up menu](pop-up-menu.md) command.

#### See also 

[Caps lock down](caps-lock-down.md)  
[Macintosh command down](macintosh-command-down.md)  
[Macintosh control down](macintosh-control-down.md)  
[Macintosh option down](macintosh-option-down.md)  
[ON EVENT CALL](on-event-call.md)  
[Shift down](shift-down.md)  
[Windows Alt down](windows-alt-down.md)  
[Windows Ctrl down](windows-ctrl-down.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 468 |
| Thread safe | &cross; |


