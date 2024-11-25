---
id: listbox-get-locked-columns
title: LISTBOX Get locked columns
slug: /commands/listbox-get-locked-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get locked columns.Syntax-->**LISTBOX Get locked columns** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get locked columns.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object Name (if * is specified) or Variable (if * is omitted) |
| Function result | Integer | &#8592; | Number of locked columns |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX Get locked columns.Summary-->The **LISTBOX Get locked columns** command returns the number of locked columns in the list box designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string.

Columns can be locked through the Property List or using the [LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md) command. For more information, refer to the *Design Reference* manual.

If a column is inserted or deleted by programming within the locked area, the number of columns returned by this command takes this change into account. For example, if you delete a locked column, the number of locked columns is decreased by 1\. Similarly, if you insert a column by programming into a locked area, this column is locked automatically and the number of locked columns is increased by 1\. 

However, the command does not take into account the visible/invisible status of columns.

#### See also 

[LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md)  