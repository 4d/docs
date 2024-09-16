---
id: listbox-get-number-of-columns
title: LISTBOX Get number of columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get number of columns.Syntax-->**LISTBOX Get number of columns** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.LISTBOX Get number of columns.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string) If omitted, object is a variable |
| object | Form object | -> | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | Longint | <- | Number of columns |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get number of columns.Summary-->The **LISTBOX Get number of columns** command returns the total number of columns (visible or invisible) present in the list box set in the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information on object names, refer to the [Object Properties](/4Dv20R6/4D/20-R6/Object-Properties.300-6958806.en.html) section. 

#### See also 
[LISTBOX DELETE COLUMN](listbox-delete-column.md)  