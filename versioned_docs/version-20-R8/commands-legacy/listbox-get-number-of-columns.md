---
id: listbox-get-number-of-columns
title: LISTBOX Get number of columns
slug: /commands/listbox-get-number-of-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get number of columns.Syntax-->**LISTBOX Get number of columns** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get number of columns.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | Integer | &#8592; | Number of columns |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get number of columns.Summary-->The **LISTBOX Get number of columns** command returns the total number of columns (visible or invisible) present in the list box set in the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information on object names, refer to the *Object Properties* section. 

#### See also 

[LISTBOX DELETE COLUMN](listbox-delete-column.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 831 |
| Thread safe | &cross; |


