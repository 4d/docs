---
id: listbox-set-grid
title: LISTBOX SET GRID
slug: /commands/listbox-set-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID.Syntax-->**LISTBOX SET GRID** ( {* ;} *object* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &rarr; | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &rarr; | Object name (if * is specified) or Variable (if * is omitted) |
| horizontal | Boolean | &rarr; | True = show, False = hide |
| vertical | Boolean | &rarr; | True = show, False = hide |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET GRID.Summary-->The **LISTBOX SET GRID** command allows you to display or hide the horizontal and/or vertical grid lines that make up the grid in the list box object set using the *object* and *\** parameters.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

Pass the Boolean values in *horizontal* and *vertical* that indicate if the corresponding grid lines should be displayed (**True**) or hidden (**False**). The grid is displayed by default. 

#### See also 

[LISTBOX GET GRID](listbox-get-grid.md)  
[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET GRID COLOR](listbox-set-grid-color.md)  