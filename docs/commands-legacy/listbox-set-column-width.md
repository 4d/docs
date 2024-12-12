---
id: listbox-set-column-width
title: LISTBOX SET COLUMN WIDTH
slug: /commands/listbox-set-column-width
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Syntax-->**LISTBOX SET COLUMN WIDTH** ( {* ;} *object* ; *width* {; *minWidth* {; *maxWidth*}} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| width | Integer | &#8594;  | Column width (in pixels) |
| minWidth | Integer | &#8594;  | Minimum column width (in pixels) |
| maxWidth | Integer | &#8594;  | Maximum column width (in pixels) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Summary-->The **LISTBOX SET COLUMN WIDTH** command allows you to modify through programming the width of one or all column(s) of the object (list box, column or header) set using the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (a string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

Pass the new width (in pixels) of the object in the *width* parameter. 

If *object* sets the list box object, all columns of the list box are resized.

If *object* sets a column or a column header, only the column set is resized. 

The optional *minWidth* and *maxWidth* parameters can be used to set limits for the manual resizing of the column You can pass, respectively, the minimum and maximum width expressed in pixels in the *minWidth* and *maxWidth* parameters. If you want users to be unable to resize the column, you can pass the same value in *width*, *minWidth* and *maxWidth*.

#### See also 

[LISTBOX Get column width](listbox-get-column-width.md)  