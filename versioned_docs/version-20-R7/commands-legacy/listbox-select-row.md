---
id: listbox-select-row
title: LISTBOX SELECT ROW
slug: /commands/listbox-select-row
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SELECT ROW.Syntax-->**LISTBOX SELECT ROW** ( {* ;} *object* ; *rowPosition* {; *action*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SELECT ROW.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| rowPosition | Integer | &#8594;  | Number of the row to select |
| action | Integer | &#8594;  | Selection action |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX SELECT ROW.Summary-->The LISTBOX SELECT ROW command selects the row whose number is passed in *position* in the list box set in the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

The optional *action* parameter, if passed, is used to define the selection action to execute when a selection of rows already exists in the list box. You can pass a value or one of the following constants (located in the “*List Box*” theme):

| Constant                 | Type    | Value | Comment                                                                                                                                                                                                                                                       |
| ------------------------ | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk add to selection      | Integer | 1     | The row selected is added to the existing selection. If the row specified already belongs to the existing selection, the command does nothing.                                                                                                                |
| lk remove from selection | Integer | 2     | The row selected is removed from the existing selection. If the row specified does not belong to the existing selection, the command does nothing.                                                                                                            |
| lk replace selection     | Integer | 0     | The row selected becomes the new selection and replaces the existing selection. The command has the same effect as a user click on a row (however, the On Clicked event is not generated). This is the default action (if the *action* parameter is omitted). |

When the *position* parameter does not correspond exactly to an existing row number, the command works as follows:

* If *position* is <0, the command does nothing, regardless of the *action* parameter value.
* If *position* is 0 and if the *action* parameter contains lk replace selection or is omitted, all the rows of the listbox are selected. If the *action* parameter contains lk remove from selection, all the listbox rows are deselected.
* If the *position* value is greater than the total number of rows contained in the listbox (only in the case of an array type listbox), the Boolean array associated with the listbox is automatically resized and the selection action is carried out. This mechanism means that you can use LISTBOX SELECT ROW with “standard” array management commands (such as [APPEND TO ARRAY](append-to-array.md)) that do not cause immediate synchronization of the listbox.  
After execution of the method, the arrays are synchronized: if the source array of the listbox has indeed been resized, the selection action is carried out. Otherwise, the Boolean array associated with the listbox returns to its initial size and the command does nothing.

**Notes:** 

* If you want the list box to scroll automatically in order to display the row selected, use the [OBJECT SET SCROLL POSITION](object-set-scroll-position.md) command.
* To switch a row into editing mode (to allow data entry), use the [EDIT ITEM](edit-item.md) command.
* If the number passed in *position* corresponds to a hidden row in the list box, the row is selected but not displayed.
* If you have checked the **Hide selection highlight** option for a list box, you will need to make list box selections visible using available interface options. For more information about how to do this, see *Customizing the appearance of selections*.

#### See also 

[EDIT ITEM](edit-item.md)  
[LISTBOX DELETE ROWS](listbox-delete-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  
[LISTBOX SELECT BREAK](listbox-select-break.md)  
[LISTBOX SELECT ROWS](listbox-select-rows.md)  
[OBJECT SET SCROLL POSITION](object-set-scroll-position.md)  