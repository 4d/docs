---
id: listbox-set-grid-color
title: LISTBOX SET GRID COLOR
slug: /commands/listbox-set-grid-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID COLOR.Syntax-->**LISTBOX SET GRID COLOR** ( {* ;} *object* ; *color* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID COLOR.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| color | Text, Integer | &#8594;  | RGB color value |
| horizontal | Boolean | &#8594;  | Use color for horizontal grid lines |
| vertical | Boolean | &#8594;  | Use color for vertical grid lines |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET GRID COLOR.Summary-->The **LISTBOX SET GRID COLOR** command allows you to modify the color of the grid in the list box object set using the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

Pass the RGB color value in *color*. For more information on RGB colors, refer to the description of the [OBJECT SET RGB COLORS](object-set-rgb-colors.md) command. 

The *horizontal* and *vertical* parameters allow you to set the grid lines to which you will apply a color:

* If you pass **True** in *horizontal*, the color will be applied to horizontal grid lines. If you pass **False**, their color is not changed.
* If you pass **True** in *vertical*, the color will be applied to vertical grid lines. If you pass **False**, their color is not changed.

#### See also 

[LISTBOX GET GRID COLORS](listbox-get-grid-colors.md)  
[LISTBOX SET GRID](listbox-set-grid.md)  
[OBJECT SET RGB COLORS](object-set-rgb-colors.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 842 |
| Thread safe | &check; |
| Forbidden on the server ||


