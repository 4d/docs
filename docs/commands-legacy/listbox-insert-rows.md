---
id: listbox-insert-rows
title: LISTBOX INSERT ROWS
slug: /commands/listbox-insert-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX INSERT ROWS.Syntax-->**LISTBOX INSERT ROWS** ( {* ;} *object* ; *rowPosition* {; *numRows*} )<!-- END REF-->
<!--REF #_command_.LISTBOX INSERT ROWS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| rowPosition | Integer | &#8594;  | Position of the row to insert |
| numRows | Integer | &#8594;  | Number of rows to insert |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX INSERT ROWS.Summary-->The **LISTBOX INSERT ROWS** command inserts one or several new row(s) in the list box set in the *object* and *\** parameters.<!-- END REF--> 

**Note:** This command only works with list boxes based on arrays. When this command is used with a list box based on a selection of records/entities or a collection, it does nothing and the OK system variable is set to 0.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section.

By default, if *numRows* is omitted, only one row is inserted. Otherwise, the command inserts the number of rows defined in this parameter.

This command inserts the row(s) at the position set by the *rowPosition* parameter and these row(s) are automatically added at this position in all the arrays used by the list box columns, whatever their type and their visibility.

If the *rowPosition* value is higher than the total number of rows in the list box, the command adds the row(s) at the end of each array. If it is equal to 0, the command adds the row(s) at the beginning of each array. If it contains a negative value, the command does nothing.

#### See also 

[LISTBOX DELETE ROWS](listbox-delete-rows.md)  