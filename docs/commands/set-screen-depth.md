---
id: set-screen-depth
title: SET SCREEN DEPTH
displayed_sidebar: docs
---

<!--REF #_command_.SET SCREEN DEPTH.Syntax-->**SET SCREEN DEPTH** ( *depth* {; *color* {; *screen*}} )<!-- END REF-->
<!--REF #_command_.SET SCREEN DEPTH.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| depth | Longint | -> | Depth of the screen (number of colors = 2 ^ Screen depth) |
| color | Longint | -> | 1 = Color, 0 = Gray Scale |
| screen | Longint | -> | Screen number, or main screen if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET SCREEN DEPTH.Summary-->**SET SCREEN DEPTH** changes the depth and color/gray scale settings of the screen whose number you pass in *screen*.<!-- END REF--> If you omit this parameter, the command is applied to the main screen.

For details about the values you pass in *color* and *depth*, see the description of the command [SCREEN DEPTH](screen-depth.md).

#### See also 
[SCREEN DEPTH](screen-depth.md)  