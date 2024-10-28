---
id: listbox-get-cell-position
title: LISTBOX GET CELL POSITION
slug: /commands/listbox-get-cell-position
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET CELL POSITION.Syntax-->**LISTBOX GET CELL POSITION** ( {* ;} *object* {; *X* ; *Y* }; *column* ; *row* {; *colVar*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET CELL POSITION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| X | Real | &#8594;  | Horizontal coordinate of mouse |
| Y | Real | &#8594;  | Vertical coordinate of mouse |
| column | Integer | &#8592; | Column number |
| row | Integer | &#8592; | Row number |
| colVar | Pointer | &#8592; | Pointer to column variable |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX GET CELL POSITION.Summary-->The **LISTBOX GET CELL POSITION** command returns the numbers of the *column* and the *row* that correspond to the location in the listbox (designated by *\** and *object*) of the last mouse click, last selection made via the keyboard, or the horizontal and vertical coordinates of the mouse.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (a string). If you omit this parameter, you indicate that the *object* parameter is a variable.

If the *X* and *Y* parameters are passed, this command returns the column and row numbers corresponding to the mouse coordinates, otherwise this command returns the column and row numbers of a click or a selection action. The command will return valid values even when data entry is not allowed in the list box.

**Notes:** 

* The value returned in the *row* parameter does not take into account any hidden/displayed states of list box rows. It may also return a value of 0 if the click or *Y* position is below the last row.
* If a cell in a fake column is clicked or corresponds to the *X* position, the *column* parameter returns "N+1", where N is the number of existing columns. A fake column can be added automatically when the "Column Auto-Resizing" option is selected; for more information refer to the *Resizing Options theme* paragraph.
* In a hierachical list box, the *column* value takes into account the column(s) merged to represent the hierarchy, as explained in the *Management of selections and positions* paragraph.

The optional *colVar* parameter returns a pointer to the variable (*i.e.* array) associated with the column.

When the *X* and *Y* parameters are not used, this command can only be called in the framework of a list box that generates one of the following form events:

* On Clicked and On Double Clicked
* On Before Keystroke and On After Keystroke
* On After Edit
* On Getting Focus and On Losing Focus
* On Data Change
* On Selection Change
* On Before Data Entry

If the command is called outside of this context, **LISTBOX GET CELL POSITION** returns 0 in both *column* and *row*.

This command takes into account any selection or deselection actions whether by mouse click, via keyboard keys, or using the [EDIT ITEM](edit-item.md) command (which can generate the On Getting Focus event). If the selection is modified using the arrow keys of the keyboard, *column* returns 0\. In this case, if it is passed, the *colVar* parameter returns [Is nil pointer](is-nil-pointer.md).

#### See also 

[LISTBOX GET CELL COORDINATES](listbox-get-cell-coordinates.md)  
[LISTBOX SELECT BREAK](listbox-select-break.md)  