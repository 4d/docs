---
id: listbox-get-grid
title: LISTBOX GET GRID
slug: /commands-legacy/listbox-get-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET GRID.Syntax-->**LISTBOX GET GRID** ( {* ;} *object* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET GRID.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#x1F852; | If specified, object is an object name (string)If omitted, object is a variable |
| object | Form object | &#x1F852; | Object Name (if * is specified) or Variable (if * is omitted) |
| horizontal | Boolean | &#x1F858; | True = shown, False = hidden |
| vertical | Boolean | &#x1F858; | True = shown, False = hidden |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX GET GRID.Summary-->The **LISTBOX GET GRID** command returns the shown/hidden status of the horizontal and/or vertical lines making up the grid of the list box object designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. 

In *horizontal* and *vertical*, the command returns the value **True** or **False** depending on whether the corresponding lines are shown (True) or hidden (False). By default, the grid is shown. 

#### See also 

[LISTBOX SET GRID](listbox-set-grid.md)  