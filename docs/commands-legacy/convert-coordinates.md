---
id: convert-coordinates
title: CONVERT COORDINATES
slug: /commands/convert-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.CONVERT COORDINATES.Syntax-->**CONVERT COORDINATES** ( *xCoord* ; *yCoord* ; *from* ; *to* )<!-- END REF-->
<!--REF #_command_.CONVERT COORDINATES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| xCoord | Integer | &#8594;  | Horizontal coordinate of a point (initial) |
| &#8592; | Horizontal coordinate of a point (converted) |
| yCoord | Integer | &#8594;  | Vertical coordinate of a point (initial) |
| &#8592; | Vertical coordinate of a point (converted) |
| from | Integer | &#8594;  | Coordinates system to convert from |
| to | Integer | &#8594;  | Coordinates system to convert to |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.CONVERT COORDINATES.Summary-->The **CONVERT COORDINATES** command converts the (x;y) coordinates of a point from one coordinate system to another.<!-- END REF--> The input and output coordinate systems supported are forms (and subforms), windows, and the screen. For example, you can use this command to get the coordinates in the main form of an object belonging to a subform. This makes it easy to create a context menu at any custom position. 

In *xCoord* and *yCoord*, pass as variables the (x;y) coordinates of the point you want to convert. After the command is executed, these variables will contain the converted values.

In the *from* parameter, pass the initial coordinate system the input point is using, and in the *to* parameter, pass the coordinate system into which it must be converted. Both parameters can take one of the following constant values, added to the "*Windows*" theme:

| Constant          | Type    | Value | Comment                                                                                                     |
| ----------------- | ------- | ----- | ----------------------------------------------------------------------------------------------------------- |
| XY Current form   | Integer | 1     | Origin is top left corner of current form                                                                   |
| XY Current window | Integer | 2     | Origin is top left corner of current window                                                                 |
| XY Main window    | Integer | 4     | On Windows: origin is top left corner of main window; on OS X: same as XY Screen                            |
| XY Screen         | Integer | 3     | Origin is top left corner of main screen (same as for [SCREEN COORDINATES](screen-coordinates.md) command). |

When this command is called from the method of a subform or a subform's object, and if one of the selectors is XY Current form, then the coordinates are relative to the subform itself, not to its parent form.

When converting from/to the position of a form window (for example when converting from the results of [GET WINDOW RECT](get-window-rect.md), or to values passed to [Open form window](open-form-window.md)), XY Main window must be used since it is the coordinate system used by window commands on Windows. It can also be used for this purpose on OS X, where it is equivalent to XY Screen.

When *from* is XY Current form and the point is in the body section of a list form, the result depends on the calling context of the command:

* If the command is called in the On Display Detail event, the resulting point is located in the display of the record being drawn on screen.
* If the command is called outside of an On Display Detail event but while a record is being edited, the resulting point is located in the display of the record being edited.
* Otherwise, the resulting point is located in the display of the first record.

#### Example 1 

You want to open a pop-up menu at the bottom left corner of the "MyObject" object.

```4d
  // OBJECT GET COORDINATES works in the current form coordinate system
  // Dynamic pop-up menu uses the current window coordinate system
  // We need to convert the values
 var $left;$top;$right;$bottom : Integer
 var $menu : Text
 OBJECT GET COORDINATES(*;"MyObject";$left;$top;$right;$bottom)
 CONVERT COORDINATES($left;$bottom;XY Current form;XY Current window)
 $menu:=Create menu
 APPEND MENU ITEM($menu;"Right here")
 APPEND MENU ITEM($menu;"Right now")
 Dynamic pop up menu($menu;"";$left;$bottom)
 RELEASE MENU($menu)
```

![](../assets/en/commands/pict2678144.en.png)

#### Example 2 

You want to open a pop-up window at the position of the mouse cursor. On Windows, you need to convert the coordinates since [MOUSE POSITION](mouse-position.md) (with the \* parameter) returns values based on the position of the MDI window:

```4d
 var $mouseX;$mouseY;$mouseButtons : Integer
 var $window : Integer
 MOUSE POSITION($mouseX;$mouseY;$mouseButtons)
 CONVERT COORDINATES($mouseX;$mouseY;XY Current window;XY Main window)
 $window:=Open form window("PopupWindowForm";Pop up form window;$mouseX;$mouseY)
 DIALOG("PopupWindowForm")
 CLOSE WINDOW($window)
```

#### See also 

[GET WINDOW RECT](get-window-rect.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  
[OBJECT SET COORDINATES](object-set-coordinates.md)  
[SET WINDOW RECT](set-window-rect.md)  