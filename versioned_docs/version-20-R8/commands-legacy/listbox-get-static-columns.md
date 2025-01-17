---
id: listbox-get-static-columns
title: LISTBOX Get static columns
slug: /commands/listbox-get-static-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get static columns.Syntax-->**LISTBOX Get static columns** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get static columns.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object Name (if * is specified) or Variable (if * is omitted) |
| Function result | Integer | &#8592; | Number of static columns |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get static columns.Summary-->The **LISTBOX Get static columns** command returns the number of static columns in the list box designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string.

Static columns can be set through the Property List or using the [LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md) command.

If a column is inserted or deleted by programming within a set of static columns, the number of columns returned by this command takes this change into account.   
However, the command does not take into account the visible/invisible status of columns.

**Note:** Static columns and locked columns are two independent functions. For more information, refer to the *Design Reference* manual. 

#### See also 

[LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1154 |
| Thread safe | &cross; |


