---
id: screen-coordinates
title: SCREEN COORDINATES
slug: /commands/screen-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.SCREEN COORDINATES.Syntax-->**SCREEN COORDINATES** ( *left* ; *top* ; *right* ; *bottom* {; *screenID* {; *screenArea*}} )<!-- END REF-->
<!--REF #_command_.SCREEN COORDINATES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| left | Integer | &#8592; | Global left coordinate of screen area |
| top | Integer | &#8592; | Global top coordinate of screen area |
| right | Integer | &#8592; | Global right coordinate of screen area |
| bottom | Integer | &#8592; | Global bottom coordinate of screen area |
| screenID | Integer | &#8594;  | Screen number, or main screen if omitted |
| screenArea | Integer | &#8594;  | Entire screen (default) or working area |

<!-- END REF-->

#### Description 

<!--REF #_command_.SCREEN COORDINATES.Summary-->The SCREEN COORDINATES command returns in *left*, *top*, *right,* and *bottom* the global coordinates of the screen specified by *screenID*.<!-- END REF-->

If you omit the *screenID* parameter, the command returns the coordinates of the main screen. 

The optional *screenArea* parameter lets you specify if you want the coordinates for the entire screen area (default) or only for the available usable area. Two selectors are available:

| Constant         | Value | Comment                                                                                                                                      |
| ---------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Screen size      | 0     | The coordinates of the entire screen. (default value)                                                                                        |
| Screen work area | 1     | The coordinates of the available screen area that can be used *(i.e.*, they are not occupied by Windows taskbar or macOS menu bar and Dock). |

The following images demonstrate the differences between the screen size and the work area:

![](../assets/en/commands/pict4800387.en.png) 

**Notes**:

* If the taskbar or dock is automatically hidden, **SCREEN COORDINATES** always returns the entire screen size.
* If an invalid value is given in *screenID* or *screenArea*, a zero is returned for all of the coordinates.

#### See also 

[Count screens](count-screens.md)  
[Menu bar screen](menu-bar-screen.md)  
[SCREEN DEPTH](screen-depth.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 438 |
| Thread safe | &check; |
| Forbidden on the server ||


