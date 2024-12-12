---
id: listbox-set-table-source
title: LISTBOX SET TABLE SOURCE
slug: /commands/listbox-set-table-source
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET TABLE SOURCE.Syntax-->**LISTBOX SET TABLE SOURCE** ( {* ;} *object* ; tableNum | selName {; *highlightName*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET TABLE SOURCE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| tableNum &#124; selName | Longint, String | &#8594;  | Number of table whose current selection is to be used or Named selection to be used |
| highlightName | Text | &#8594;  | Name of highlight set |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX SET TABLE SOURCE.Summary-->The **LISTBOX SET TABLE SOURCE** command can be used to modify the source of the data displayed in the listbox that is designated by the *\** and *object* parameters.<!-- END REF-->

**Note:** This command can only be used when the “Data Source” property of the list box is set to **Current Selection** or **Named Selection** (for more information about this, please refer to the *Managing List Box Objects* section). It does nothing if you use it with a listbox that is associated with an array, a collection or an entity selection.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, please refer to the *Object Properties* section. 

If you pass a table number as the *tableNum* parameter, the listbox will be filled in with the data of the records in the current selection of the table.

If you pass a named selection as the *selName* parameter, the listbox will be filled in with the data of the records belonging to the named selection.

The optional *highlightName* parameter associates a highlight set with the list box. The highlight set manages record highlighting by the user in the list box. 

If the listbox already contains columns, their contents will be updated after the command is executed.

**Note:** For optimization purposes, this command is processed in an asynchronous manner; in other words, the source of the listbox is changed only after the complete execution of the method in which the command is called. 

#### See also 

[LISTBOX GET TABLE SOURCE](listbox-get-table-source.md)  