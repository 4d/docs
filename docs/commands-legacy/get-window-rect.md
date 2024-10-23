---
id: get-window-rect
title: GET WINDOW RECT
slug: /commands/get-window-rect
displayed_sidebar: docs
---

<!--REF #_command_.GET WINDOW RECT.Syntax-->**GET WINDOW RECT** ( *left* ; *top* ; *right* ; *bottom* {; *window*} )<!-- END REF-->
<!--REF #_command_.GET WINDOW RECT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| left | Integer | &#8592; | Left coordinate of window's contents area |
| top | Integer | &#8592; | Top coordinate of window's contents area |
| right | Integer | &#8592; | Right coordinate of window's contents area |
| bottom | Integer | &#8592; | Bottom coordinate of window's contents area |
| window | Integer | &#8594;  | Window reference number, or Frontmost window of current process, if omitted or MDI window if -1 (Windows) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.GET WINDOW RECT.Summary-->The **GET WINDOW RECT** command returns the coordinates of the window whose reference number is passed in *window*.<!-- END REF--> If the window does not exist, the variable parameters are left unchanged.

If you omit the *window* parameter, **GET WINDOW RECT** applies to the frontmost window for the current process.

The coordinates are expressed relative to the top left corner of the contents area of the application window (Windows MDI mode) or to the main screen (macOS and Windows SDI mode). The coordinates return the rectangle corresponding to the contents area of the window (excluding title bars and borders).

**Note:** Under Windows, if you pass -1 in *window*, **GET WINDOW RECT** returns the coordinates of the application window (MDI window). These coordinates correspond to the contents area of the window (excluding menu bars and borders). In this case in SDI mode, **GET WINDOW RECT** returns (0;0;0;0) as coordinates. 

#### Example 

See example for the [WINDOW LIST](window-list.md) command.

#### See also 

[CONVERT COORDINATES](convert-coordinates.md)  
[SET WINDOW RECT](set-window-rect.md)  