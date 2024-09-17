---
id: get-mouse
title: GET MOUSE
displayed_sidebar: docs
---

<!--REF #_command_.GET MOUSE.Syntax-->**GET MOUSE** ( *mouseX* ; *mouseY* ; *mouseButton* {; *} )<!-- END REF-->
<!--REF #_command_.GET MOUSE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| mouseX | Real | <-> | Horizontal coordinate of mouse |
| mouseY | Real | <-> | Vertical coordinate of mouse |
| mouseButton | Longint | <-> | Mouse button state: 0 = Button up 1 = Button down 2 = Right button down 3 = Both buttons down |
| * | Operator | -> | If specified, global coordinate system is usedIf omitted, local coordinate system is used |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET MOUSE.Summary-->The GET MOUSE command returns the current state of the mouse.<!-- END REF-->

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