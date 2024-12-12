---
id: hide-menu-bar
title: HIDE MENU BAR
slug: /commands/hide-menu-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE MENU BAR.Syntax-->**HIDE MENU BAR**<!-- END REF-->
<!--REF #_command_.HIDE MENU BAR.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.HIDE MENU BAR.Summary-->The HIDE MENU BAR command makes the menu bar invisible.<!-- END REF-->

If the menu bar was already hidden, the command does nothing.

#### Example 

The following method displays a record in full-screen display (Macintosh) until you click the mouse button:

```4d
 HIDE TOOL BAR
 HIDE MENU BAR
 Open window(-1;-1;1+Screen width;1+Screen height;Alternate dialog box)
 FORM SET INPUT([Paintings];"Full Screen 800")
 DISPLAY RECORD([Paintings])
 Repeat
    MOUSE POSITION($vlX;$vlY;$vlButton)
 Until($vlButton#0)
 CLOSE WINDOW
 SHOW MENU BAR
 SHOW TOOL BAR
```

**Note:** On Windows, the window will be limited to the bounds of the application window.

#### See also 

[HIDE TOOL BAR](hide-tool-bar.md)  
[SHOW MENU BAR](show-menu-bar.md)  
[SHOW TOOL BAR](show-tool-bar.md)  