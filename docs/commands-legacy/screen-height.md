---
id: screen-height
title: Screen height
slug: /commands/screen-height
displayed_sidebar: docs
---

<!--REF #_command_.Screen height.Syntax-->**Screen height** {( * )} -> Function result<!-- END REF-->
<!--REF #_command_.Screen height.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#x1F852; | Windows: height of application window, or height of screen if * is specified Macintosh: height of main screen |
| Function result | Longint | &#x1F850; | Height expressed in pixels |

<!-- END REF-->

#### Description 

<!--REF #_command_.Screen height.Summary-->On Windows, Screen height returns the height of 4D application window (MDI window).<!-- END REF--> If you specify the optional *\** parameter, the function returns the height of the screen.

On Macintosh, Screen height returns the height of the main screen, the screen where the menu bar is located.

#### See also 

[SCREEN COORDINATES](screen-coordinates.md)  
[Screen width](screen-width.md)  