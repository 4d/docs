---
id: listbox-delete-column
title: LISTBOX DELETE COLUMN
slug: /commands/listbox-delete-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX DELETE COLUMN.Syntax-->**LISTBOX DELETE COLUMN** ( {* ;} *object* ; *colPosition* {; *number*} )<!-- END REF-->
<!--REF #_command_.LISTBOX DELETE COLUMN.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| colPosition | Integer | &#8594;  | Column number to remove |
| number | Integer | &#8594;  | Number of columns to be removed |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX DELETE COLUMN.Summary-->The **LISTBOX DELETE COLUMN** command removes one or more columns (visible or invisible) in the list box set in the *object* and *\** parameters.<!-- END REF-->

**Note:** This command does nothing if it is applied to the first column of a list box displayed in hierarchical mode. 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

If you do not pass the optional *number* parameter, the command simply removes the column set in the *colPosition* parameter. 

Otherwise, the *number* parameter indicates the number of columns to remove to the right starting from the column *colPosition* (this one included). 

If the *colPosition* parameter is greater than the number of columns in the list box, the command does nothing.

#### See also 

[LISTBOX Get number of columns](listbox-get-number-of-columns.md)  
[LISTBOX INSERT COLUMN](listbox-insert-column.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 830 |
| Thread safe | &check; |
| Forbidden on the server ||


