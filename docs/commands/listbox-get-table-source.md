---
id: listbox-get-table-source
title: LISTBOX GET TABLE SOURCE
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET TABLE SOURCE.Syntax-->**LISTBOX GET TABLE SOURCE** ( {* ;} *object* ; *tableNum* {; *name* {; *highlightName*}} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET TABLE SOURCE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string) If omitted, object is a variable |
| object | Form object | -> | Object name (if * is specified) or Variable (if * is omitted) |
| tableNum | Longint | <-> | Table number of selection |
| name | String | <-> | Name of named selection or "" for the current selection |
| highlightName | String | <-> | Name of highlight set |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX GET TABLE SOURCE.Summary-->The LISTBOX GET TABLE SOURCE command can be used to find out the current source of the data displayed in the list box that is designated by the *\** and *object* parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, please refer to the [Object Properties](/4Dv20R6/4D/20-R6/Object-Properties.300-6958806.en.html) section. 

The command returns the number of the main table associated with the list box in the *tableNum* parameter and the name of any named selection used in the optional *name* parameter.

If the rows of the list box are linked with the current selection of the table, the *name* parameter, if passed, returns an empty string. If the rows of the list box are linked with a named selection, the *name* parameter returns the name of this named selection.

If the list box is associated with arrays, *tableNum* returns -1 and *name*, if passed, returns an empty string.

#### See also 
[LISTBOX SET TABLE SOURCE](listbox-set-table-source.md)  