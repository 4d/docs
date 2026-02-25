---
id: hide-menu-bar
title: HIDE MENU BAR
slug: /commands/hide-menu-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE MENU BAR.Syntax-->**HIDE MENU BAR**<!-- END REF-->
<!--REF #_command_.HIDE MENU BAR.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6|Created|

</details>
</div>

## Description 

<!--REF #_command_.HIDE MENU BAR.Summary-->The HIDE MENU BAR command makes the menu bar invisible.<!-- END REF-->

If the menu bar was already hidden, the command does nothing.

## Example 

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

## See also 

[HIDE TOOL BAR](../commands/hide-tool-bar)  
[SHOW MENU BAR](../commands/show-menu-bar)  
[SHOW TOOL BAR](../commands/show-tool-bar)  

## Properties

|  |  |
| --- | --- |
| Command number | 432 |
| Thread safe | no |
| Forbidden on the server ||


