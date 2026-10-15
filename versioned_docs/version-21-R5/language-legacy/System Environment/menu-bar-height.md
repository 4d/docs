---
id: menu-bar-height
title: Menu bar height
slug: /commands/menu-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Menu bar height.Syntax-->**Menu bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Menu bar height.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Height (expressed in pixels) of menu bar (returns zero if menu bar is hidden) |
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

<!--REF #_command_.Menu bar height.Summary-->Menu bar height returns the height of the menu bar, expressed in pixels.<!-- END REF-->

The command returns 0:

* if the menu bar is hidden
* in SDI mode on Windows, if it is called from a process without a form window. For more information on this mode, please refer to the *SDI mode on Windows* section.

**Note:** When the application is running in SDI mode on Windows, **Menu bar height** returns the height of a single menu bar line even if the window is narrowed and the menu bar has been wrapped on two or more lines. 

## See also 

[HIDE MENU BAR](../commands/hide-menu-bar)  
[Menu bar screen](../commands/menu-bar-screen)  
[SHOW MENU BAR](../commands/show-menu-bar)  

## Properties

|  |  |
| --- | --- |
| Command number | 440 |
| Thread safe | no |


