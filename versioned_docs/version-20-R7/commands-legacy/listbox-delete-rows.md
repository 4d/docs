---
id: listbox-delete-rows
title: LISTBOX DELETE ROWS
slug: /commands/listbox-delete-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX DELETE ROWS.Syntax-->**LISTBOX DELETE ROWS** ( {* ;} *object* ; *rowPosition* {; *numRows*} )<!-- END REF-->
<!--REF #_command_.LISTBOX DELETE ROWS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| rowPosition | Integer | &#8594;  | Position of the row to delete |
| numRows | Integer | &#8594;  | Number of rows to delete |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX DELETE ROWS.Summary-->The **LISTBOX DELETE ROWS** command deletes one or several row(s) starting at *rowPosition* row (visible or not) from the list box set in the *object* and *\** parameters.<!-- END REF-->

**Note:** This command only works with list boxes based on arrays. When this command is used with a list box based on a selection, it does nothing and the OK system variable is set to 0.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

Keep in mind that after command execution, there will no longer be any element selected in the list box.

The *rowPosition* row is automatically removed from all the arrays used by the list box columns. 

If the *rowPosition* value is higher than the total number of rows in the list box, or if it is less than 1, the command does nothing. 

**Note:** This command does not take into account any hidden/displayed states of list box rows. 

#### See also 

[LISTBOX Get number of rows](listbox-get-number-of-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  