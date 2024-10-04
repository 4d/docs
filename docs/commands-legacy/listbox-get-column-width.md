---
id: listbox-get-column-width
title: LISTBOX Get column width
slug: /commands/listbox-get-column-width
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get column width.Syntax-->**LISTBOX Get column width** ( {* ;} *object* {; *minWidth* {; *maxWidth*}} )  -> Function result<!-- END REF-->
<!--REF #_command_.LISTBOX Get column width.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#x1F852; | If specified, object is an object name (string) If omitted, object is a variable |
| object | Form object | &#x1F852; | Object name (if * is specified) or Variable (if * is omitted) |
| minWidth | Longint | &#x1F858; | Minimum column width (in pixels) |
| maxWidth | Longint | &#x1F858; | Maximum column width (in pixels) |
| Function result | Longint | &#x1F850; | Column width (in pixels) |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get column width.Summary-->The **LISTBOX Get column width** command returns the width (in pixels) of the column set in the *object* and *\** parameters.<!-- END REF--> You can pass either a list box column or a column header in the *object* parameter. 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

**LISTBOX Get column width** can return the resizing limits of the column in the *minWidth* and *maxWidth* parameters. These limits can be specified via the [LISTBOX SET COLUMN WIDTH](listbox-set-column-width.md) command.   
If no minimum and/or maximum value has been set for the column, the corresponding parameter returns 0.

#### See also 

[LISTBOX SET COLUMN WIDTH](listbox-set-column-width.md)  