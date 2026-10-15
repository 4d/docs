---
id: screen-width
title: Screen width
slug: /commands/screen-width
displayed_sidebar: docs
---

<!--REF #_command_.Screen width.Syntax-->**Screen width** ({ * }) : Integer<!-- END REF-->
<!--REF #_command_.Screen width.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | Windows: width of application window, or width of screen if * is specified Macintosh: width of main screen |
| Function result | Integer | &#8592; | Width expressed in pixels |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Screen width.Summary-->On Windows, Screen width returns the width of 4D application window (MDI window).<!-- END REF--> If you specify the optional *\** parameter, the function returns the width of the screen.

On Macintosh, Screen width returns the width of the main screen, the screen where the menu bar is located.

## See also 

[SCREEN COORDINATES](../commands/screen-coordinates)  
[Screen height](../commands/screen-height)  

## Properties

|  |  |
| --- | --- |
| Command number | 187 |
| Thread safe | no |


