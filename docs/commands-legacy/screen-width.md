---
id: screen-width
title: Screen width
slug: /commands/screen-width
displayed_sidebar: docs
---

<!--REF #_command_.Screen width.Syntax-->**Screen width** {( * )} -> Function result<!-- END REF-->
<!--REF #_command_.Screen width.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | Windows: width of application window, or width of screen if * is specified Macintosh: width of main screen |
| Function result | Longint | &#8592; | Width expressed in pixels |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Screen width.Summary-->On Windows, Screen width returns the width of 4D application window (MDI window).<!-- END REF--> If you specify the optional *\** parameter, the function returns the width of the screen.

On Macintosh, Screen width returns the width of the main screen, the screen where the menu bar is located.

#### See also 

[SCREEN COORDINATES](screen-coordinates.md)  
[Screen height](screen-height.md)  