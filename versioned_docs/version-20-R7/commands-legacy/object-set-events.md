---
id: object-set-events
title: OBJECT SET EVENTS
slug: /commands/object-set-events
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET EVENTS.Syntax-->**OBJECT SET EVENTS** ( {* ;} *object* ; *arrEvents* ; *mode* )<!-- END REF-->
<!--REF #_command_.OBJECT SET EVENTS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name or "" to designate the form (if * is specified) or<br/>Field or variable (if * is omitted) |
| arrEvents | Array integer | &#8594;  | Array of events to set |
| mode | Integer | &#8594;  | Activation mode for events defined in arrEvents |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT SET EVENTS.Summary-->The **OBJECT SET EVENTS** command modifies, for the current process, the configuration of the form events of the form or object(s) designated by the *object* and *\** parameters.<!-- END REF-->

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).  
To define the configuration of events for the form itself, pass the optional *\** parameter and an empty string "" in *object*: in this case, you designate the current form. 

**Note:** If you want to modify the events of a subform related to a table, you can only use the syntax based on the object name. 

In the *arrEvents* parameter, pass a Longint array containing the list of predefined or custom form events that you want to modify (you can use the *mode* parameter to specify whether the modification consists of enabling or disabling the events). To designate a predefined event to modify, you can pass, in each element of the *arrEvents* array, one of the following constants, found in the "*Form Events*" theme:

| Constant                 | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------ | ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On Activate              | Integer | 11    | The form’s window becomes the frontmost window                                                                                                                                                                                                                                                                                                                                                                                   |
| On After Edit            | Integer | 45    | The contents of the enterable object that has the focus has just been modified                                                                                                                                                                                                                                                                                                                                                   |
| On After Keystroke       | Integer | 28    | A character is about to be entered in the object that has the focus. [Get edited text](get-edited-text.md) returns the object's text including this character.                                                                                                                                                                                                                                                                   |
| On After Sort            | Integer | 30    | (*List box only*) A standard sort has just been carried out in a list box column                                                                                                                                                                                                                                                                                                                                                 |
| On Arrow Click           | Integer | 38    | (*3D buttons only*) The “arrow” area of a 3D button is clicked                                                                                                                                                                                                                                                                                                                                                                   |
| On Before Data Entry     | Integer | 41    | (*List box only*) A list box cell is about to change to editing mode                                                                                                                                                                                                                                                                                                                                                             |
| On Before Keystroke      | Integer | 17    | A character is about to be entered in the object that has the focus. [Get edited text](get-edited-text.md) returns the object's text without this character.                                                                                                                                                                                                                                                                     |
| On Begin Drag Over       | Integer | 46    | An object is being dragged                                                                                                                                                                                                                                                                                                                                                                                                       |
| On Begin URL Loading     | Integer | 47    | (*Web areas only*) A new URL is loaded in the Web area                                                                                                                                                                                                                                                                                                                                                                           |
| On bound variable change | Integer | 54    | The variable bound to a subform is modified.                                                                                                                                                                                                                                                                                                                                                                                     |
| On Clicked               | Integer | 4     | A click occurred on an object                                                                                                                                                                                                                                                                                                                                                                                                    |
| On Close Box             | Integer | 22    | The window’s close box has been clicked                                                                                                                                                                                                                                                                                                                                                                                          |
| On Close Detail          | Integer | 26    | You left the detail form and are going back to the output form                                                                                                                                                                                                                                                                                                                                                                   |
| On Collapse              | Integer | 44    | (Hierarchical lists and hierarchical list boxes) An element of the hierarchical list or hierarchical list box has been collapsed using a click or a keystroke                                                                                                                                                                                                                                                                    |
| On Column Moved          | Integer | 32    | (*List box only*) A list box column is moved by the user via drag and drop                                                                                                                                                                                                                                                                                                                                                       |
| On Column Resize         | Integer | 33    | (*List box and 4D View Pro*) The width of a column is modified by a user with the mouse                                                                                                                                                                                                                                                                                                                                          |
| On Data Change           | Integer | 20    | Object data has been modified                                                                                                                                                                                                                                                                                                                                                                                                    |
| On Deactivate            | Integer | 12    | The form’s window ceases to be the frontmost window                                                                                                                                                                                                                                                                                                                                                                              |
| On Delete Action         | Integer | 58    | (Hierarchical lists and List boxes) The user attempts to delete an item                                                                                                                                                                                                                                                                                                                                                          |
| On Display Detail        | Integer | 8     | A record is about to be displayed in a list or a row is about to be displayed in a list box.                                                                                                                                                                                                                                                                                                                                     |
| On Double Clicked        | Integer | 13    | A double click occurred on an object                                                                                                                                                                                                                                                                                                                                                                                             |
| On Drag Over             | Integer | 21    | Data could be dropped onto an object                                                                                                                                                                                                                                                                                                                                                                                             |
| On Drop                  | Integer | 16    | Data has been dropped onto an object                                                                                                                                                                                                                                                                                                                                                                                             |
| On End URL Loading       | Integer | 49    | (*Web areas only*) All the resources of the URL have been loaded                                                                                                                                                                                                                                                                                                                                                                 |
| On Expand                | Integer | 43    | (Hierarchical lists and hierarchical list boxes) An element of the hierarchical list or hierarchical list box has been expanded using a click or a keystroke                                                                                                                                                                                                                                                                     |
| On Footer Click          | Integer | 57    | (*List boxes only*) A click occurs in the footer of a list box or a list box column                                                                                                                                                                                                                                                                                                                                              |
| On Getting Focus         | Integer | 15    | A form object is getting the focus                                                                                                                                                                                                                                                                                                                                                                                               |
| On Header                | Integer | 5     | The form’s header area is about to be printed or displayed                                                                                                                                                                                                                                                                                                                                                                       |
| On Header Click          | Integer | 42    | (*List box and 4D View Pro*) A click occurs in a column header                                                                                                                                                                                                                                                                                                                                                                   |
| On Load Record           | Integer | 40    | During entry in list, a record is loaded during modification (the user clicks on a record line and a field changes to editing mode)                                                                                                                                                                                                                                                                                              |
| On Long Click            | Integer | 39    | (*3D buttons only*) A 3D button is clicked and the mouse button remains pushed for a certain lapse of time                                                                                                                                                                                                                                                                                                                       |
| On Losing Focus          | Integer | 14    | A form object is losing the focus                                                                                                                                                                                                                                                                                                                                                                                                |
| On Mac toolbar button    | Integer | 55    | The user clicks on the tool bar management button under Mac OS.                                                                                                                                                                                                                                                                                                                                                                  |
| On Menu Selected         | Integer | 18    | A menu item has been chosen                                                                                                                                                                                                                                                                                                                                                                                                      |
| On Mouse Enter           | Integer | 35    | The mouse cursor enters the graphic area of an object                                                                                                                                                                                                                                                                                                                                                                            |
| On Mouse Leave           | Integer | 36    | The mouse cursor leaves the graphic area of an object                                                                                                                                                                                                                                                                                                                                                                            |
| On Mouse Move            | Integer | 37    | The mouse cursor moves at least one pixel OR a modifier key (Shift, Alt, Shift Lock) was pressed. If the event is checked for an object only, it is generated only when the cursor is within the graphic area of the object                                                                                                                                                                                                      |
| On Open Detail           | Integer | 25    | The detail form associated with the output form or with the listbox is about to be opened                                                                                                                                                                                                                                                                                                                                        |
| On Open External Link    | Integer | 52    | (*Web areas only*) An external URL has been opened in the browser                                                                                                                                                                                                                                                                                                                                                                |
| On Outside Call          | Integer | 10    | The form received a [POST OUTSIDE CALL](post-outside-call.md) call                                                                                                                                                                                                                                                                                                                                                               |
| On Picture Scroll        | Integer | 59    | The user scrolls the contents of a picture field or variable using the mouse or keyboard.                                                                                                                                                                                                                                                                                                                                        |
| On Plug in Area          | Integer | 19    | An external object requested its object method to be executed                                                                                                                                                                                                                                                                                                                                                                    |
| On Printing Break        | Integer | 6     | One of the form’s break areas is about to be printed                                                                                                                                                                                                                                                                                                                                                                             |
| On Printing Detail       | Integer | 23    | The form’s detail area is about to be printed                                                                                                                                                                                                                                                                                                                                                                                    |
| On Printing Footer       | Integer | 7     | The form’s footer area is about to be printed                                                                                                                                                                                                                                                                                                                                                                                    |
| On Resize                | Integer | 29    | The form window is resized                                                                                                                                                                                                                                                                                                                                                                                                       |
| On Row Moved             | Integer | 34    | (*List box only*) A list box row is moved by the user via drag and drop                                                                                                                                                                                                                                                                                                                                                          |
| On Row Resize            | Integer | 60    | *(4D View Pro only)* The height of a row is modified by a user with the mouse                                                                                                                                                                                                                                                                                                                                                    |
| On Selection Change      | Integer | 31    | *List box & 4D View Pro*: The current selection of rows or columns is modified *Records in list*: The current record or the current selection of rows is modified in a list form or subform *Hierarchical list*: The selection in the list is modified following a click or a keystroke *Enterable field or variable*: The text selection or the position of the cursor in the area is modified following a click or a keystroke |
| On Timer                 | Integer | 27    | The number of ticks defined by the [SET TIMER](set-timer.md) command has passed                                                                                                                                                                                                                                                                                                                                                  |
| On Unload                | Integer | 24    | The form is about to be exited and released                                                                                                                                                                                                                                                                                                                                                                                      |
| On URL Filtering         | Integer | 51    | (*Web areas only*) A URL was blocked by the Web area                                                                                                                                                                                                                                                                                                                                                                             |
| On URL Loading Error     | Integer | 50    | (*Web areas only*) An error occurred when the URL was loading                                                                                                                                                                                                                                                                                                                                                                    |
| On URL Resource Loading  | Integer | 48    | (*Web areas only*) A new resource is loaded in the Web area                                                                                                                                                                                                                                                                                                                                                                      |
| On Validate              | Integer | 3     | The record data entry has been validated                                                                                                                                                                                                                                                                                                                                                                                         |
| On VP Range Changed      | Integer | 61    | The 4D View Pro cell range has changed (e.g., a formula calculation, value removed from a cell, etc.)                                                                                                                                                                                                                                                                                                                            |
| On Window Opening Denied | Integer | 53    | (*Web areas only*) A pop-up window has been blocked                                                                                                                                                                                                                                                                                                                                                                              |

It is important to note that the On Load event is not included in this list: this event cannot be defined because it has already been generated during the execution of the command.

In *arrEvents*, you can also pass any value corresponding to a custom event. In this case, we recommend using negative values (see the [CALL SUBFORM CONTAINER](call-subform-container.md) command). 

You use the *mode* parameter to set the overall processing to be carried out for the array elements. To do this, you can pass one of the following constants, found in the "*Form Objects (Properties)*" theme:

| Constant                        | Type    | Value | Comment                                                                                                  |
| ------------------------------- | ------- | ----- | -------------------------------------------------------------------------------------------------------- |
| Disable events others unchanged | Integer | 2     | All the events listed in the *arrEvents* array are disabled; the status of other events remain unchanged |
| Enable events disable others    | Integer | 0     | All the events listed in the *arrEvents* array are enabled; all the other events are disabled            |
| Enable events others unchanged  | Integer | 1     | All the events listed in the *arrEvents* array are enabled; the status of other events remain unchanged  |

The **OBJECT SET EVENTS** command can lead to the enabling of events that are not supported by the *object* (depending on its type). In this case, the events will simply be ignored.

If an *object* is duplicated after a call to the **OBJECT SET EVENTS** command, the resulting enabled/disabled configuration is also duplicated.

#### Example 1 

Enabling three form events for a set of list box objects and disabling other events:

```4d
 ARRAY LONGINT($MyEventsOnLB;3)
 $MyEventsOnLB {1}:=On After Sort
 $MyEventsOnLB {2}:=On Column Moved
 $MyEventsOnLB {3}:=On Column Resize
 OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Enable events disable others)
  // enables 3 events and disables all others
```

#### Example 2 

Disabling three form events for a set of list box objects, without modifying the other events:

```4d
 ARRAY LONGINT($MyEventsOnLB;3)
 $MyEventsOnLB {1}:=On After Sort
 $MyEventsOnLB {2}:=On Column Moved
 $MyEventsOnLB {3}:=On Column Resize
 OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Disable events others unchanged)
  // disables only these 3 events
```

#### Example 3 

Enabling a form event for an object, without modifying the other events:

```4d
 ARRAY LONGINT($MyEventsOnLB;1)
 $MyEventsOnLB {1}:=On Column Moved
 OBJECT SET EVENTS(*;"Col1";$MyEventsOnLB;Enable events others unchanged)
  // only enables this event
```

#### Example 4 

Disabling all events of the form:  

```4d
 ARRAY LONGINT($MyFormEvents;0)
 OBJECT SET EVENTS(*;"";$MyFormEvents;Enable events disable others)
  // disables all events
```

#### Example 5 

Disables a single event of the form without modifying the others:

```4d
 ARRAY LONGINT($MyFormEvents;1)
 $MyFormEvents{1}:=On Timer
 OBJECT SET EVENTS(*;"";$MyFormEvents;Disable events others unchanged)
  // only disables this event
```

#### See also 

*Form Events*  
[OBJECT GET EVENTS](object-get-events.md)  