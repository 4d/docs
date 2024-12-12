---
id: listbox-move-column
title: LISTBOX MOVE COLUMN
slug: /commands/listbox-move-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVE COLUMN.Syntax-->**LISTBOX MOVE COLUMN** ( {* ;} *object* ; *colPosition* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVE COLUMN.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Variable (if * is omitted) of the column to be moved |
| colPosition | Integer | &#8594;  | New location of column |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX MOVE COLUMN.Summary-->The **LISTBOX MOVE COLUMN** command moves the column designated by the *object* and *\** parameters by programming in the context of the form being executed (Application mode).<!-- END REF--> The original form, generated in the Design mode, is not modified. 

The *object* and *\** parameters designate the column to move. Passing the optional *\** parameter indicates that the *object* parameter is a column name (string). If you do not pass this parameter, this indicates that the *object* parameter is a column variable. In this case, you pass a variable reference instead of a string. 

The column is moved to just in front of the one designated by the *colPosition* parameter. If the *colPosition* parameter is greater than the total number of columns, then the column is moved to just after the last column.

**Note:** This command does nothing when it is applied to the first column of a list box displayed in hierarchical mode.

The command takes the static and locked column properties into account: for example, if you try to move a static column, the command does nothing. 

This functionality was already found in 4D in Application mode: the user can move non-static columns using the mouse. However, unlike columns moved by the user, this command does not generate the On Column Moved event. 

#### Example 

You want to swap the 2nd and 3rd columns of the list box:

```4d
 LISTBOX MOVE COLUMN(*;"column2";3)
```

#### See also 

[LISTBOX DUPLICATE COLUMN](listbox-duplicate-column.md)  