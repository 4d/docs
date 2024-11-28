---
id: form-event-code
title: Form event code
slug: /commands/form-event-code
displayed_sidebar: docs
---

<!--REF #_command_.Form event code.Syntax-->**Form event code**  : Integer<!-- END REF-->
<!--REF #_command_.Form event code.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Form event number |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Compatibility 

<!--REF #_command_.Form event code.Summary-->**Form event code** was named **Form event** in previous versions of 4D.<!-- END REF--> It was renamed for clarity when the [FORM Event](form-event.md) command, returning an object, was added.

#### Description 

**Form event code** returns a numeric value identifying the type of form event that has just occurred. Usually, you will use **Form event code** from within a form or object method.

4D provides predefined constants (found in the *Form Events* theme) in order to compare the values returned by the **Form event code** command.

Certain events are generic (generated for any type of object) and others are specific to a particular type of object.

| Constant                 | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------ | ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On Load                  | Integer | 1     | The form is about to be displayed or printed                                                                                                                                                                                                                                                                                                                                                                                     |
| On Mouse Up              | Integer | 2     | (*Pictures only*) The user has just released the left mouse button in a Picture object                                                                                                                                                                                                                                                                                                                                           |
| On Validate              | Integer | 3     | The record data entry has been validated                                                                                                                                                                                                                                                                                                                                                                                         |
| On Clicked               | Integer | 4     | A click occurred on an object                                                                                                                                                                                                                                                                                                                                                                                                    |
| On Header                | Integer | 5     | The form’s header area is about to be printed or displayed                                                                                                                                                                                                                                                                                                                                                                       |
| On Printing Break        | Integer | 6     | One of the form’s break areas is about to be printed                                                                                                                                                                                                                                                                                                                                                                             |
| On Printing Footer       | Integer | 7     | The form’s footer area is about to be printed                                                                                                                                                                                                                                                                                                                                                                                    |
| On Display Detail        | Integer | 8     | A record is about to be displayed in a list or a row is about to be displayed in a list box.                                                                                                                                                                                                                                                                                                                                     |
| On VP Ready              | Integer | 9     | (*4D View Pro areas only*) The loading of the 4D View Pro area is complete                                                                                                                                                                                                                                                                                                                                                       |
| On Outside Call          | Integer | 10    | The form received a [POST OUTSIDE CALL](post-outside-call.md) call                                                                                                                                                                                                                                                                                                                                                               |
| On Activate              | Integer | 11    | The form’s window becomes the frontmost window                                                                                                                                                                                                                                                                                                                                                                                   |
| On Deactivate            | Integer | 12    | The form’s window ceases to be the frontmost window                                                                                                                                                                                                                                                                                                                                                                              |
| On Double Clicked        | Integer | 13    | A double click occurred on an object                                                                                                                                                                                                                                                                                                                                                                                             |
| On Losing Focus          | Integer | 14    | A form object is losing the focus                                                                                                                                                                                                                                                                                                                                                                                                |
| On Getting Focus         | Integer | 15    | A form object is getting the focus                                                                                                                                                                                                                                                                                                                                                                                               |
| On Drop                  | Integer | 16    | Data has been dropped onto an object                                                                                                                                                                                                                                                                                                                                                                                             |
| On Before Keystroke      | Integer | 17    | A character is about to be entered in the object that has the focus. [Get edited text](get-edited-text.md) returns the object's text without this character.                                                                                                                                                                                                                                                                     |
| On Menu Selected         | Integer | 18    | A menu item has been chosen                                                                                                                                                                                                                                                                                                                                                                                                      |
| On Plug in Area          | Integer | 19    | An external object requested its object method to be executed                                                                                                                                                                                                                                                                                                                                                                    |
| On Data Change           | Integer | 20    | Object data has been modified                                                                                                                                                                                                                                                                                                                                                                                                    |
| On Drag Over             | Integer | 21    | Data could be dropped onto an object                                                                                                                                                                                                                                                                                                                                                                                             |
| On Close Box             | Integer | 22    | The window’s close box has been clicked                                                                                                                                                                                                                                                                                                                                                                                          |
| On Printing Detail       | Integer | 23    | The form’s detail area is about to be printed                                                                                                                                                                                                                                                                                                                                                                                    |
| On Unload                | Integer | 24    | The form is about to be exited and released                                                                                                                                                                                                                                                                                                                                                                                      |
| On Open Detail           | Integer | 25    | The detail form associated with the output form or with the listbox is about to be opened                                                                                                                                                                                                                                                                                                                                        |
| On Close Detail          | Integer | 26    | You left the detail form and are going back to the output form                                                                                                                                                                                                                                                                                                                                                                   |
| On Timer                 | Integer | 27    | The number of ticks defined by the [SET TIMER](set-timer.md) command has passed                                                                                                                                                                                                                                                                                                                                                  |
| On After Keystroke       | Integer | 28    | A character is about to be entered in the object that has the focus. [Get edited text](get-edited-text.md) returns the object's text including this character.                                                                                                                                                                                                                                                                   |
| On Resize                | Integer | 29    | The form window is resized or the subform object is resized (in this case the event is generated in the form method of the subform)                                                                                                                                                                                                                                                                                              |
| On After Sort            | Integer | 30    | (*List box only*) A standard sort has just been carried out in a list box column                                                                                                                                                                                                                                                                                                                                                 |
| On Selection Change      | Integer | 31    | *List box & 4D View Pro*: The current selection of rows or columns is modified *Records in list*: The current record or the current selection of rows is modified in a list form or subform *Hierarchical list*: The selection in the list is modified following a click or a keystroke *Enterable field or variable*: The text selection or the position of the cursor in the area is modified following a click or a keystroke |
| On Column Moved          | Integer | 32    | (*List box only*) A list box column is moved by the user via drag and drop                                                                                                                                                                                                                                                                                                                                                       |
| On Column Resize         | Integer | 33    | (*List box and 4D View Pro*) The width of a column is modified by a user with the mouse                                                                                                                                                                                                                                                                                                                                          |
| On Row Moved             | Integer | 34    | (*List box only*) A list box row is moved by the user via drag and drop                                                                                                                                                                                                                                                                                                                                                          |
| On Mouse Enter           | Integer | 35    | The mouse cursor enters the graphic area of an object                                                                                                                                                                                                                                                                                                                                                                            |
| On Mouse Leave           | Integer | 36    | The mouse cursor leaves the graphic area of an object                                                                                                                                                                                                                                                                                                                                                                            |
| On Mouse Move            | Integer | 37    | The mouse cursor moves at least one pixel OR a modifier key (Shift, Alt, Shift Lock) was pressed. If the event is checked for an object only, it is generated only when the cursor is within the graphic area of the object                                                                                                                                                                                                      |
| On Alternative Click     | Integer | 38    | *3D buttons*: The “arrow” area of a 3D button is clicked*List boxes*: In a column of an object array, an ellipsis button ("alternateButton" attribute) is clicked<br/>**Note**: Ellipsis buttons are only available for versions v15 or higher.                                                                                                                                                                          |
| On Long Click            | Integer | 39    | (*3D buttons only*) A 3D button is clicked and the mouse button remains pushed for a certain lapse of time                                                                                                                                                                                                                                                                                                                       |
| On Load Record           | Integer | 40    | During entry in list, a record is loaded during modification (the user clicks on a record line and a field changes to editing mode)                                                                                                                                                                                                                                                                                              |
| On Before Data Entry     | Integer | 41    | (*List box only*) A list box cell is about to change to editing mode                                                                                                                                                                                                                                                                                                                                                             |
| On Header Click          | Integer | 42    | (*List box and 4D View Pro*) A click occurs in a column header                                                                                                                                                                                                                                                                                                                                                                   |
| On Expand                | Integer | 43    | (Hierarchical lists and hierarchical list boxes) An element of the hierarchical list or hierarchical list box has been expanded using a click or a keystroke                                                                                                                                                                                                                                                                     |
| On Collapse              | Integer | 44    | (Hierarchical lists and hierarchical list boxes) An element of the hierarchical list or hierarchical list box has been collapsed using a click or a keystroke                                                                                                                                                                                                                                                                    |
| On After Edit            | Integer | 45    | The contents of the enterable object that has the focus has just been modified                                                                                                                                                                                                                                                                                                                                                   |
| On Begin Drag Over       | Integer | 46    | An object is being dragged                                                                                                                                                                                                                                                                                                                                                                                                       |
| On Begin URL Loading     | Integer | 47    | (*Web areas only*) A new URL is loaded in the Web area                                                                                                                                                                                                                                                                                                                                                                           |
| On URL Resource Loading  | Integer | 48    | (*Web areas only*) A new resource is loaded in the Web area                                                                                                                                                                                                                                                                                                                                                                      |
| On End URL Loading       | Integer | 49    | (*Web areas only*) All the resources of the URL have been loaded                                                                                                                                                                                                                                                                                                                                                                 |
| On URL Loading Error     | Integer | 50    | (*Web areas only*) An error occurred when the URL was loading                                                                                                                                                                                                                                                                                                                                                                    |
| On URL Filtering         | Integer | 51    | (*Web areas only*) A URL was blocked by the Web area                                                                                                                                                                                                                                                                                                                                                                             |
| On Open External Link    | Integer | 52    | (*Web areas only*) An external URL has been opened in the browser                                                                                                                                                                                                                                                                                                                                                                |
| On Window Opening Denied | Integer | 53    | (*Web areas only*) A pop-up window has been blocked                                                                                                                                                                                                                                                                                                                                                                              |
| On bound variable change | Integer | 54    | The variable bound to a subform is modified.                                                                                                                                                                                                                                                                                                                                                                                     |
| On Page Change           | Integer | 56    | The current page of the form is changed                                                                                                                                                                                                                                                                                                                                                                                          |
| On Footer Click          | Integer | 57    | (*List boxes only*) A click occurs in the footer of a list box or a list box column                                                                                                                                                                                                                                                                                                                                              |
| On Delete Action         | Integer | 58    | (Hierarchical lists and List boxes) The user attempts to delete an item                                                                                                                                                                                                                                                                                                                                                          |
| On Scroll                | Integer | 59    | The user scrolls the contents of a picture field or variable using the mouse or keyboard.                                                                                                                                                                                                                                                                                                                                        |
| On Row Resize            | Integer | 60    | *(4D View Pro only)* The height of a row is modified by a user with the mouse                                                                                                                                                                                                                                                                                                                                                    |
| On VP Range Changed      | Integer | 61    | The 4D View Pro cell range has changed (e.g., a formula calculation, value removed from a cell, etc.)                                                                                                                                                                                                                                                                                                                            |

**Note:** The events specific to output forms cannot be used with **project forms**. This includes: On Display Detail, On Open Detail, On Close Detail, On Load Record, On Header, On Printing Detail, On Printing Break, On Printing Footer. 

#### Events and Methods 

When a form event occurs, 4D performs the following actions:

* First, it browses the objects of the form and calls the object method for any object (involved in the event) whose corresponding object event property has been selected.
* Second, it calls the form method if the corresponding form event property has been selected.

Do not assume that the object methods, if any, will be called in a particular order. The rule of thumb is that the object methods are always called before the form method. If an object is a subform, the object methods of the subform’s list form are called, then the form method of the list form is called. 4D then continues to call the object methods of the parent form. In other words, when an object is a subform, 4D uses the same rule of thumb for the object and form methods within the subform object.

Except for the On Load and On Unload events, if the form event property is not selected for a given event, this does not prevent calls to object methods for the objects whose same event property is selected. In other words, enabling or disabling an event at the form level has no effect on the object event properties.

The number of objects involved in an event depends on the nature of the event:

* On Load event - All the objects of the form (from any page) whose On Load object event property is selected will have their object method called. Then, if the On Load form event property is selected, the form will have its form method called.
* On Activate or On Resize event - No object method will be called, because this event applies to the form as a whole and not to a particular object. Consequently, if the On Activate form event property is selected, only the form will have its form method called.
* On Timer event - This event is generated only if the form method contains a previous call to the [SET TIMER](set-timer.md) command. If the On Timer form event property is selected, only the form method will receive the event, no object method will be called.
* On Drag Over event - Only the droppable object involved in the event will have its object method called if the "Droppable" event property is selected for it. The form method will not be called.
* Conversely, for the On Begin Drag Over event, the object method or form method of the object being dragged will be called (if the "Draggable" event property is selected for the it).

**WARNING:** Unlike all other events, during a On Begin Drag Over event, the method called is executed in the context of the process of the drag and drop source object, not in that of the drag and drop destination object. For more information, see the *Drag and Drop* section.

* If the On Mouse Enter, On Mouse Move and On Mouse Leave events have been checked for the form, they are generated for each form object. If they are checked for an object, they are generated only for that object. When there are superimposed objects, the event is generated by the first object capable of managing it that is found going in order from top level to bottom. Objects that are made invisible using the [OBJECT SET VISIBLE](object-set-visible.md) command do not generate these events. During object entry, other objects may receive these type of events depending on the position of the mouse.  
Note that the On Mouse Move event is generated not only when the mouse cursor is moved but also when the user presses a modifier key such as **Shift**, **Shift Lock**, **Ctrl** or **Option** (this makes it possible to manage copy- or move-type drag-and-drop operations).
* Records in list: The sequence of calls to methods and form events in the list forms displayed via [DISPLAY SELECTION](display-selection.md) and [MODIFY SELECTION](modify-selection.md) and the subforms is as follows:
  
| For each object in the header area:                                                                                                                                                                           |  
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Object method with On Header event Form method with On Header event  For each record: For each object in the detail area: Object method with On Display Detail event Form method with On Display Detail event |
* Calling a 4D command that displays a dialog box from the On Display Detail and On Header events is not allowed and will cause a syntax error to occur. More particularly, the commands concerned are: [ALERT](alert.md), [DIALOG](../commands/dialog.md), [CONFIRM](confirm.md), [Request](request.md), [ADD RECORD](add-record.md), [MODIFY RECORD](modify-record.md), [DISPLAY SELECTION](display-selection.md) and [MODIFY SELECTION](modify-selection.md).
* On Page Change: This event is only available at the form level (it is called in the form method). It is generated each time the current page of the form changes (following a call to the [FORM GOTO PAGE](form-goto-page.md) command or a standard navigation action). Note that it is generated after the page is fully loaded, i.e. once all the objects it contains are initialized (including Web areas). This event is useful for executing code that requires all objects to be initialized beforehand. You can also use it to optimize the application by executing code (for example, a search) only after a specific page of the form is displayed and not just as soon as page 1 is loaded. If the user does not go to this page, the code is not executed .

The following table summarizes how object and form methods are called for each event type:

| **Event**                | **Object Methods**                   | **Form Method** | **Which Objects**      |
| ------------------------ | ------------------------------------ | --------------- | ---------------------- |
| On Load                  | Yes                                  | Yes             | All objects            |
| On Unload                | Yes                                  | Yes             | All objects            |
| On Validate              | Yes                                  | Yes             | All objects            |
| On Clicked               | Yes (if clickable or enterable) (\*) | Yes             | Involved object only   |
| On Double Clicked        | Yes (if clickable or enterable) (\*) | Yes             | Involved object only   |
| On Before Keystroke      | Yes (if enterable) (\*)              | Yes             | Involved object only   |
| On After Keystroke       | Yes (if enterable) (\*)              | Yes             | Involved object only   |
| On After Edit            | Yes (if enterable) (\*)              | Yes             | Involved object only   |
| On Getting Focus         | Yes (if tabbable) (\*)               | Yes             | Involved object only   |
| On Losing Focus          | Yes (if tabbable) (\*)               | Yes             | Involved object only   |
| On Activate              | Never                                | Yes             | None                   |
| On Deactivate            | Never                                | Yes             | None                   |
| On Outside Call          | Never                                | Yes             | None                   |
| On Page Change           | Never                                | Yes             | None                   |
| On Begin Drag Over       | Yes (if draggable) (\*\*)            | Yes             | Involved object only   |
| On Drop                  | Yes (if droppable) (\*\*)            | Yes             | Involved object only   |
| On Drag Over             | Yes (if droppable) (\*\*)            | Never           | Involved object only   |
| On Mouse Enter           | Yes                                  | Yes             | All objects            |
| On Mouse Move            | Yes                                  | Yes             | All objects            |
| On Mouse Leave           | Yes                                  | Yes             | All objects            |
| On Mouse Up              | Yes                                  | Never           | Involved object only   |
| On Menu Selected         | Never                                | Yes             | None                   |
| On Bound variable change | Never                                | Yes             | None                   |
| On Data Change           | Yes (if modifiable) (\*)             | Yes             | Involved object only   |
| On Plug in Area          | Yes                                  | Yes             | Involved object only   |
| On Header                | Yes                                  | Yes             | All objects            |
| On Printing Detail       | Yes                                  | Yes             | All objects            |
| On Printing Break        | Yes                                  | Yes             | All objects            |
| On Printing Footer       | Yes                                  | Yes             | All objects            |
| On Close Box             | Never                                | Yes             | None                   |
| On Display Detail        | Yes                                  | Yes             | All objects            |
| On Open Detail           | No, except for List boxes            | Yes             | None except List boxes |
| On Close Detail          | No, except for List boxes            | Yes             | None except List boxes |
| On Resize                | Never                                | Yes             | None                   |
| On Selection Change      | Yes (\*\*\*)                         | Yes             | Involved object only   |
| On Load Record           | Never                                | Yes             | None                   |
| On Timer                 | Never                                | Yes             | None                   |
| On Scroll                | Yes                                  | Never           | Involved object only   |
| On Before Data Entry     | Yes (List box)                       | Never           | Involved object only   |
| On Column Moved          | Yes (List box)                       | Never           | Involved object only   |
| On Row Moved             | Yes (List box)                       | Never           | Involved object only   |
| On Column Resize         | Yes (List box and 4D View Pro Area)  | Never           | Involved object only   |
| On Header Click          | Yes (List box and 4D View Pro Area)  | Never           | Involved object only   |
| On Footer Click          | Yes (List box)                       | Never           | Involved object only   |
| On After Sort            | Yes (List box)                       | Never           | Involved object only   |
| On Long Click            | Yes (3D button)                      | Yes             | Involved object only   |
| On Alternative Click     | Yes (3D button and List box)         | Never           | Involved object only   |
| On Expand                | Yes (Hier. list and list box)        | Never           | Involved object only   |
| On Collapse              | Yes (Hier. list and list box)        | Never           | Involved object only   |
| On Delete Action         | Yes (Hier. list and list box)        | Never           | Involved object only   |
| On URL Resource Loading  | Yes (Web Area)                       | Never           | Involved object only   |
| On Begin URL Loading     | Yes (Web Area)                       | Never           | Involved object only   |
| On URL Loading Error     | Yes (Web Area)                       | Never           | Involved object only   |
| On URL Filtering         | Yes (Web Area)                       | Never           | Involved object only   |
| On End URL Loading       | Yes (Web Area)                       | Never           | Involved object only   |
| On Open External Link    | Yes (Web Area)                       | Never           | Involved object only   |
| On Window Opening Denied | Yes (Web Area)                       | Never           | Involved object only   |
| On VP Ready              | Yes (4D View Pro Area)               | Never           | Involved object only   |
| On Row Resize            | Yes (4D View Pro Area)               | Never           | Involved object only   |
  
  
(\*) For more infomation, see the "Events, Objects and Properties" section below.  
(\*\*) Refer to the "*Drag and Drop*" chapter for more information.  
(\*\*\*) Only list box, hierarchical list and subform type objects support this event. 

**IMPORTANT:** Always keep in mind that, for any event, the method of a form or an object is called if the corresponding event property is selected for the form or objects. The benefit of disabling events in the Design environment (using the Property List of the Form editor) is that you can greatly reduce the number of calls to methods and therefore significantly optimize the execution speed of your forms.

**WARNING:** The On Load and On Unload events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.

#### Events, Objects and Properties 

An object method is called if the event can actually occur for the object, depending on its nature and properties. The following section details the events you will generally use to handle the various types of objects.  
Keep in mind that the Property List of the Form editor only displays the events compatible with the selected object or the form. 

##### Clickable Objects 

Clickable objects are mainly handled using the mouse. They include:

* Boolean enterable fields or variables
* Buttons, default buttons, radio buttons, check boxes, button grids
* 3D Buttons, 3D radio buttons, 3D check boxes
* Pop-up menus, hierarchical pop-up menus, picture menus
* Drop-down lists, menus/drop-down lists
* Scrollable areas, hierarchical lists, list boxes and list box columns
* Invisible buttons, highlight buttons, radio pictures
* Thermometers, rulers, dials (also known as slider objects)
* Tab controls
* Splitters.

After the On Clicked or On Double Clicked object event property is selected for one of these objects, you can detect and handle the clicks within or on the object, using the [Form event](form-event.md "Form event") command that returns On Clicked or On Double Clicked, depending on the case. 

**Note:** Starting with 4D v14, enterable fields and variables containing text (of the text, date, time, or number type) also generate the On Clicked and On Double Clicked events. 

If both events are selected for an object, the On Clicked and then the On Double Clicked events will be generated when the user double-clicks the object.

For all these objects, the On Clicked event occurs once the mouse button is released. However, there are several exceptions: 

* Invisible buttons - The On Clicked event occurs as soon as the click is made and does not wait for the mouse button to be released.
* Slider objects (thermometers, rulers, and dials) - If the display format indicates that the object method must be called while you are sliding the control, the On Clicked event occurs as soon as the click is made.

In the context of an On Clicked event, you can test the number of clicks made by the user by means of the [Clickcount](clickcount.md) command.

**Note:** Some of these objects can be activated with the keyboard. For example, once a check box gets the focus, it can be entered using the space bar. In such a case, an On Clicked event is still generated.

**WARNING:** Combo boxes are not considered to be clickable objects. A combo box must be treated as an enterable text area whose associated drop-down list provides default values. Consequently, you handle data entry within a combo box through the On Before Keystroke, On After Keystroke and On Data Change events.

**Note**: Starting with 4D v13, pop-up menu/drop-down list and hierarchical pop-up menus can generate the On Data Change event. This allows you to detect the activation of the object when a value different from the current value is selected.

##### Keyboard Enterable Objects 

Keyboard enterable objects are objects into which you enter data using the keyboard and for which you may filter the data entry at the lowest level by detecting On After Edit, On Before Keystroke, On After Keystroke and On Selection Change events. You can take advantage of these events using the [Get edited text](get-edited-text.md) command.  
Keyboard enterable objects and data types include:

* All enterable field objects of the alpha, text, date, time, number or (On After Edit only) picture type
* All enterable variables of the alpha, text, date, time, number or (On After Edit only) picture type
* Combo boxes (except On Selection Change)
* List boxes.

**Note:** Starting with 4D v14, enterable fields and variables containing text (of the text, date, time, or number type) also generate the On Clicked and On Double Clicked events. 

**Note:** Even though they are “enterable” objects, hierarchical lists do not manage the On After Edit, On Before Keystroke and On After Keystroke form events (see also the “Hierarchical lists” paragraph below). 

* On Before Keystroke and On After Keystroke  
**Note:** The On After Keystroke event can generally be replaced by the On After Edit event (see below).  
After the On Before Keystroke and On After Keystroke event properties are selected for an object, you can detect and handle the keystrokes within the object, using the Form event code command that will return On Before Keystroke and then On After Keystroke (for more information, please refer to the description of the [Get edited text](get-edited-text.md) command). These events are also activated by language commands that simulate a user action like [POST KEY](post-key.md).  
Keep in mind that user modifications that are not carried out using the keyboard (paste, drag-drop, etc.) are not taken into account. To process these events, you must use On After Edit.  
**Note:** The On Before Keystroke and On After Keystroke events are not generated when using an input method. An input method (or IME, Input Method Editor) is a program or a system component that can be used to enter complex characters or symbols (for example, Japanese or Chinese) using a Western keyboard.

* On After Edit  
When it is used, this event is generated after each change made to the contents of an enterable object, regardless of the action that caused the change, i.e.:  
\- Standard editing actions which modify content like paste, cut, delete or cancel;  
\- Dropping a value (action similar to paste);  
\- Any keyboard entry made by the user; in this case, the On After Edit event is generated after the On Before Keystroke and On After Keystroke events, if they are used.  
\- Any modification made using a language command that simulates a user action (i.e., [POST KEY](post-key.md)).  
    
Be aware that the following actions do NOT trigger this event:  
\- Editing actions that do not modify the contents of the area like copy or select all; or dragging a value (action similar to copy); however, these actions do modify the location of the cursor and thus trigger the On Selection Change event.  
\- Any modifications made to the contents by programming, except for the commands simulating a user action.  
This event can be used to control user actions in order, for example, to prevent the pasting in of text that is too long, to block certain characters or to prevent a password field from being cut.
* On Selection Change  
When it is applied to a text field or variable (enterable or not), this event is triggered each time the position of the cursor changes. This happens, for instance, as soon as the user selects text using the mouse or keyboard arrow keys, or when the user enters text. This lets you call, for example, commands such as [GET HIGHLIGHT](get-highlight.md).

##### Modifiable Objects 

Modifiable objects have a data source whose value can be changed using the mouse or the keyboard; they are not truly considered as user interface controls handled through the On Clicked event. They include:

* All enterable field objects (except BLOBs)
* All enterable variables (except BLOBs, pointers, and arrays)
* Combo boxes
* External objects (for which full data entry is accepted by the plug-in)
* Hierarchical lists
* List boxes and list box columns.

These objects receive On Data Change events. After the On Data Change object event property is selected for one of these objects, you can detect and handle the change of the data source value, using the **Form event code** command that will return On Data Change. The event is generated as soon as the variable associated with the object is updated internally by 4D (i.e., in general, when the entry area of the object loses the focus). 

##### Tabbable Objects 

Tabbable objects get the focus when you use the Tab key to reach them and/or click on them. The object having the focus receives the characters (typed on the keyboard) that are not modifiers to a menu item or to an object such as a button. 

All objects are tabbable, EXCEPT the following:

* Non-enterable fields or variables
* Button grids
* 3D buttons, 3D radio buttons, 3D check boxes
* Pop-up menus, hierarchical pop-up menus
* Menus/drop-down lists
* Picture menus
* Scrollable areas
* Invisible buttons, highlight buttons, radio picture buttons
* Graphs
* External objects (for which full data entry is accepted by the 4D plug-in)
* Tab controls
* Splitters.

After the On Getting Focus and/or On losing Focus object event properties are selected for a tabbable object, you can detect and handle the change of focus, using the Form event code command that will return On Getting Focus or On losing Focus, depending on the case.

##### 3D buttons 

3D buttons let you set up advanced graphic interfaces (for a description of 3D buttons, refer to the Design Reference manual). In addition to generic events, two specific events can be used to manage these buttons: 

* On Long Click: This event is generated when a 3D button receives a click and the mouse button is held for a certain length of time. In theory, the length of time for which this event is generated is equal to the maximum length of time separating a double-click, as defined in the system preferences.  
This event can be generated for all styles of 3D buttons, 3D radio buttons and 3D check boxes, with the exception of “previous generation” 3D buttons (i.e. background offset style) and arrow areas of 3D buttons with a pop-up menu (see below).  
This event is generally used to display pop-up menus in case of long button clicks. The On Clicked event, if enabled, is generated if the user releases the mouse button before the “long click” time limit.
* On Alternative Click: Some 3D button styles can be linked to a pop-up menu and display an arrow. Clicking on this arrow causes a selection pop-up to appear that provides a set of alternative actions in relation to the primary button action.  
4D allows you to manage this type of button using the On Alternative Click event. This event is generated when the user clicks on the “arrow” (as soon as the mouse button is held down):  
\- If the pop-up menu is “separated,” the event is only generated when a click occurs on the portion of the button with the arrow.  
\- If the pop-up menu is “linked,” the event is generated when a click occurs on any part of the button. Please note that the On Long Click event cannot be generated with this type of button.  
    
![](../assets/en/commands/pict2074286.en.png)

The following 3D button, 3D radio button and 3D check box styles accept the “With pop-up menu” property: None, Toolbar button, Bevel, Rounded bevel and Office XP.

##### List boxes 

Several form events can be used to manage various specific features of list boxes: 

* On Before Data Entry: This event is generated just before a cell in the list box is edited (before the entry cursor is displayed). This event allows the developer, for example, to display a different text depending on whether the user is in the display or edit mode.
* On Selection Change: This event is generated each time the current selection of rows or columns of the list box is modified. This event is also generated for lists of records and hierarchical lists.
* On Column Moved: This event is generated when a column of the list box is moved by the user using drag and drop. It is not generated if the column is dragged and then dropped in its initial location. The [LISTBOX MOVED COLUMN NUMBER](listbox-moved-column-number.md) command returns the new position of the column.
* On Row Moved: This event is generated when a row of the list box is moved by the user using drag and drop. It is not generated if the row is dragged and then dropped in its initial location.
* On Column Resize: This event is generated when the width of a column in the list box is modified by a user. Starting with 4D v16, the event is triggered "live," i.e., sent continuously during the event, for as long as the list box or column concerned is being resized. This resizing is performed manually by a user, or may occur as a result of the list box and its column(s) being resized along with the form window itself (whether the form is resized manually or using the [RESIZE FORM WINDOW](resize-form-window.md) command).  
**Note:** The On Column Resize event is not triggered when a "fake" column is resized (for more information on fake columns, please refer to *Resizing Options theme*).
* On Expand and On Collapse: These events are generated when a row of the hierarchical list box is expanded or collapsed.
* On Header Click: This event is generated when a click occurs on the header of a column in the list box. In this case, the [Self](self.md) command lets you find out the header of the column that was clicked. The On Clicked event is generated when a right click (Windows) or Ctrl+click (Mac OS) occurs on a column or column header. You can test the number of clicks made by the user by means of the [Clickcount](clickcount.md) command.  
If the **Sortable** property was checked in the list box, you can decide whether or not to authorize a standard sort of the column by passing the value 0 or -1 in the $0 variable:  
\- If $0 equals 0, a standard sort is performed.  
\- If $0 equals -1, a standard sort is not performed and the header does not display the sort arrow. The developer can still generate a column sort based on customized sort criteria using the 4D array management commands.  
If the **Sortable** property is not selected for the list box, the $0 variable is not used.
* On Footer Click: This event is available for a list box or list box column object. It is generated when a click occurs in the footer of a list box or a list box column. In this case, the [OBJECT Get pointer](object-get-pointer.md) command returns a pointer to the variable of the footer that is clicked. The event is generated for both left and right clicks.  
You can test the number of clicks made by the user by means of the [Clickcount](clickcount.md) command.
* On After Sort: This event is generated just after a standard sort is performed (i.e. it is not generated if $0 returns -1 in the On Header Click event). This mechanism is useful for storing the directions of the last sort performed by the user. In this event, the [Self](self.md) command returns a pointer to the variable of the sorted column header.
* On Delete Action: This event is generated each time a user attempts to delete the selected item(s) by pressing a deletion key (**Delete** or **Backspace**) or selecting a menu item whose associated standard action is 'Clear' (such as the **Clear** command in the **Edit** menu). This event is only available at the level of the list box object. Note that generating the event is the only action carried out by 4D: the program does not delete any items. It is up to the developer to handle the deletion and any prior warning messages that are displayed.
* On Scroll (new in v15): This event is generated as soon as a user scrolls the rows or columns of the list box. The event is only generated when the scroll is the result of a user action: using the scroll bars and/or cursors, using the mouse wheel or the keyboard. It is not generated when scrolling is due to the execution of the [OBJECT SET SCROLL POSITION](object-set-scroll-position.md) command.  
This event is triggered after any other user event related to the scrolling action (On Clicked, On After Keystroke, etc.). The event is only generated in the object method (not in the form method). Refer to example 15.
* On Alternative Click (new in v15): This event is generated in columns of object array type list boxes, when the user clicks on a widget ellipsis button ("alternateButton" attribute). For more information, refer to the *Using object arrays in columns* section.

Two generic events can also be used in the context of "selection" type list boxes:

* On Open Detail: This event is generated when a record is about to be displayed in the detail form associated with a "selection" type list box (and before this form is opened).
* On Close Detail: This event is generated when a record displayed in the detail form associated with a "selection" type list box is about to be closed (regardless of whether or not the record was modified).

##### Hierarchical lists 

In addition to generic events, several specific events can be used to handle user actions performed on hierarchical lists: 

* On Selection Change: This event is generated every time the selection in the hierarchical list is modified after a mouse click or keystroke.  
This event is also generated in list box objects and record lists.
* On Expand: This event is generated every time an element of the hierarchical list is expanded with a mouse click or keystroke.
* On Collapse: This event is generated every time an element of the hierarchical list is collapsed with a mouse click or keystroke.
* On Delete Action: This event is generated each time a user attempts to delete the selected item(s) by pressing a deletion key (**Delete** or **Backspace**) or selecting the **Delete** command from the **Edit** menu. Note that generating the event is the only action carried out by 4D: the program does not delete any items. It is up to the developer to handle the deletion and any prior warning messages that are displayed (see the example).

These events are not mutually exclusive. They can be generated one after another for a hierarchical list:  
\- Following a keystroke (in order):  

| **Event**               | **Context**                                                |
| ----------------------- | ---------------------------------------------------------- |
| On Data Change          | Element was edited                                         |
| | On Expand/On Collapse | Opening/Closing of a sublist using the -> or <- arrow keys |
| On Selection Change     | Selection of a new element                                 |
| On Clicked              | Activation of the list using keyboard                      |

\- Following a mouse click (in order):  

| **Event**                            | **Context**                                                     |
| ------------------------------------ | --------------------------------------------------------------- |
| On Data Change                       | Element was edited                                              |
| On Expand/On Collapse                | Opening/Closing of a sublist using the expand/collapse icons or |
| Double-click on non-editable sublist |                                                                 |
| On Selection Change                  | Selection of a new element                                      |
| On Clicked / On Double Clicked       | Activation of the list using click or double-click              |

  
##### Picture fields and variables 

* The On Scroll form event is generated as soon as a user scrolls a picture within the area (field or variable) that contains it. You can scroll the contents of a picture area when the size of the area is smaller than its contents and the display format is "**Truncated (non Centered)**". For more information about this, refer to *Picture formats*.  
The event is generated when the scroll is the result of a user action: using the scroll bars and/or cursors, using the mouse wheel or the keyboard (for more information about scrolling using the keyboard, refer to *Scroll bars*). It is not generated when the object is scrolled due to the execution of the [OBJECT SET SCROLL POSITION](object-set-scroll-position.md) command. This event is triggered after any other user event related to the scrolling action (On Clicked, On After Keystroke, etc.). It is generated in the object method (not in the form method). Refer to example 14.
* (New in v16) The On Mouse Up event is generated when the user has just released the left mouse button while dragging in a picture area (field or variable). This event is useful, for example, when you want the user to be able to move, resize or draw objects in a SVG area.  
When the On Mouse Up event is generated, you can get the local coordinates where the mouse button was released. These coordinates are returned in the **MouseX** and **MouseY** *System Variables*. The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0).  
When using this event, you must also use the [Is waiting mouse up](is-waiting-mouse-up.md) command to handle cases where the "state manager" of the form is desynchronized, i.e. when the On Mouse Up event is not received after a click. This is the case for example when an alert dialog box is displayed above the form while the mouse button has not been released. For more information and an example of use of the On Mouse Up event, please refer to the description of the [Is waiting mouse up](is-waiting-mouse-up.md) command.  
    
**Note:** If the "Draggable" option is checked for the picture object, the On Mouse Up event is never generated.

##### Subforms 

A subform container object (object included in the parent form, which contains one subform instance) supports the following events:

* On Load and On Unload: respectively opening and closing of the subform (these events must also have been activated at the parent form level in order to be taken into account). Note that these events are generated before those of the parent form. Also note that, in accordance with the operating principles of form events, if the subform is placed on a page other than page 0 or 1, these events will only be generated when that page is displayed/closed (and not when the form is displayed/closed.
* On Validate: validation of data entry in the subform.
* On Data Change: the value of the variable of the subform object has been modified.
* On Getting Focus and On Losing Focus: subform container just got or lost the focus. These events are generated in the method of the subform object when they are checked. They are sent to the form method of the subform, which means, for example, that you can manage the display of navigation buttons in the subform according to the focus.  
Note that subform objects can themselves have the focus.
* On Bound Variable Change: This specific event is generated in the context of the form method of the subform as soon as a value is assigned to the variable bound with the subform in the parent form (even if the same value is reassigned) and if the subform belongs to the current form page or to page 0\. For more information about managing subforms, please refer to the *Design Reference* manual.

**Note:** It is possible to specify any custom event type that could be generated in a subform via the [CALL SUBFORM CONTAINER](call-subform-container.md) command. This command lets you call the container object method and to pass an event code to it.

The following events are also received in the form method of the subform: 

* On Clicked and On Double Clicked \- these events generated in the subform are received first by the form method of the subform and then by the form method of the host form.
* On Resize \- this event is sent to the subform form method when the size of the subform object in the parent form has changed.

##### Web Areas 

Seven form events are available specifically for Web areas: 

* On Begin URL Loading: This event is generated at the start of loading a new URL in the Web area. The "URL" variable associated with the Web area can be used to find out the URL being loaded.  
**Note:** The URL being loaded is different from the current URL (refer to the description of the [WA Get current URL](wa-get-current-url.md) command).
* On URL Resource Loading: This event is generated each time a new resource (picture, frame, etc.) is loaded on the current Web page.  
The "Progression" variable associated with the area lets you find out the current state of the loading.
* On End URL Loading: This event is generated when all the resources of the current URL have been loaded.  
You can call the [WA Get current URL](wa-get-current-url.md) command in order to find out the URL that was loaded.
* On URL Loading Error: This event is generated when an error is detected during the loading of a URL.  
You can call the [WA GET LAST URL ERROR](wa-get-last-url-error.md) command in order to get information about the error.
* On URL Filtering: This event is generated when the loading of a URL is blocked by the Web area because of a filter set up using the [WA SET URL FILTERS](wa-set-url-filters.md) command.  
You can find out the blocked URL using the [WA Get last filtered URL](wa-get-last-filtered-url.md) command.
* On Open External Link: This event is generated when the loading of a URL was blocked by the Web area and the URL was opened with the current system browser, because of a filter set up via the [WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md) command.  
You can find out the blocked URL using the [WA Get last filtered URL](wa-get-last-filtered-url.md) command.
* On Window Opening Denied: This event is generated when the opening of a pop-up window is blocked by the Web area. 4D Web areas do not allow the opening of pop-up windows.  
You can find out the blocked URL using the [WA Get last filtered URL](wa-get-last-filtered-url.md) command.

##### 4D View Pro areas 

The following events are available for 4D View Pro areas.

* On After Edit: This event is generated after an edit has been made in the 4D View Pro area.
* On Clicked: This event is generated when a click occurs in the viewport of 4D View Pro area (outside of headers, scrollbars or toolbar)
* On Column Resize: This event is generated when the width of a column is modified by a user.
* On Double Clicked: This event is generated when a double click occurs in the 4D View Pro area.
* On Header Click:This event is generated when a click occurs in a column or row header.
* On Row Resize: This event is generated when the height of a row is modified by a user.
* On Selection Change: This event is generated when the current selection of rows or columns is modified.
* On VP ReadyThis event is generated when the 4D View Pro area loading is complete. You need to use this event to write initialization code for the area.

For more information about these events, please refer to the *On VP Ready form event* section.

#### Example 1 

This example shows the On Validate event being used to automatically assign (to a field) the date that the record is modified:

```4d
  //Method of a form
 Case of
  // ...
    :(Form event code=On Validate)
       [aTable]Last Modified On:=Current date
 End case
```

#### Example 2 

In this example, the complete handling of a drop-down list (initialization, user clicks, and object release) is encapsulated in the method of the object:

```4d
  //asBurgerSize Drop-down list Object Method
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asBurgerSize;3)
       asBurgerSize{1}:="Small"
       asBurgerSize{1}:="Medium"
       asBurgerSize{1}:="Large"
    :(Form event code=On Clicked)
       If(asBurgerSize#0)
          ALERT("You chose a "+asBurgerSize{asBurgerSize}+" burger.")
       End if
    :(Form event code=On Unload)
       CLEAR VARIABLE(asBurgerSize)
 End case
```

#### Example 3 

This example shows how, in an object method, to accept and later handle a drag and drop operation for a field object that only accepts picture values.

```4d
  //[aTable]aPicture enterable picture field object method
 Case of
    :(Form event code=On Drag Over)
  //A drag-and-drop operation has started and the mouse is currently over the field
  //Get the information about the source object
       DRAG AND DROP PROPERTIES($vpSrcObject;$vlSrcElement;$lSrcProcess)
  //Note that we do not need to test the source process ID number
  //for the object method executed since it is in the same process
       $vlDataType:=Type($vpSrcObject->)
  //Is the source data a picture (field, variable or array)?
       If(($vlDataType=Is picture)|($vlDataType=Picture array))
  //If so, accept the drag.
          $0:=0
       Else
  //If so, refuse the drag
          $0:=-1
       End if
    :(Form event code=On Drop)
  //The source data has been dropped on the object, we therefore need to copy it
  //into the object
  //Get the information about the source object
       DRAG AND DROP PROPERTIES($vpSrcObject;$vlSrcElement;$lSrcProcess)
       $vlDataType:=Type($vpSrcObject->)
       Case of
  //The source object is Picture field or variable
          :($vlDataType=Is picture)
  //Is the source object from the same process (thus from the same window and form)?
             If($lSrcProcess=Current process)
  //If so, just copy the source value
                [aTable]aPicture:=$vpSrcObject->
             Else
  //If not, is the source object a variable?
                If(Is a variable($vpSrcObject))
  //If so, get the value from the source process
                   GET PROCESS VARIABLE($lSrcProcess;$vpSrcObject->;$vgDraggedPict)
                   [aTable]aPicture:=$vgDraggedPict
                Else
  //If not, use CALL PROCESS to get the field value from the source process
                End if
             End if
  //The source object is an array of pictures
          :($vlDataType=Picture array)
  //Is the source object from the same process (thus from the same window and form)?
             If($lSrcProcess=Current process)
  //If so, just copy the source value
                [aTable]aPicture:=$vpSrcObject->{$vlSrcElement}
             Else
  //If not, get the value from the source process
                GET PROCESS VARIABLE($lSrcProcess;$vpSrcObject->{$vlSrcElement};$vgDraggedPict)
                [aTable]aPicture:=$vgDraggedPict
             End if
       End case
 End case
```

**Note:** For other examples showing how to handle On Drag Over and On Drop events, see the examples of the *\_o\_DRAG AND DROP PROPERTIES* command.

#### Example 4 

This example is a template for a form method. It shows each of the possible events that can occur when a summary report uses a form as an output form:

```4d
  //Method of a form being used as output form for a summary report
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Header)
  //A header area is about to be printed
       Case of
          :(Before selection($vpFormTable->))
  //Code for the first break header goes here
          :(Level=1)
  //Code for a break header level 1 goes here
          :(Level=2)
  //Code for a break header level 2 goes here
  //...
       End case
    :(Form event code=On Printing Detail)
  //A record is about to be printed
  //Code for each record goes here
    :(Form event code=On Printing Break)
  //A break area is about to be printed
       Case of
          :(Level=0)
  //Code for a break level 0 goes here
          :(Level=1)
  //Code for a break level 1 goes here
  //...
       End case
    :(Form event code=On Printing Footer)
       If(End selection($vpFormTable->))
  //Code for the last footer goes here
       Else
  //Code for a footer goes here
       End if
 End case
```

#### Example 5 

This example shows the template of a form method that handles the events that can occur for a form displayed using the [DISPLAY SELECTION](display-selection.md) or [MODIFY SELECTION](modify-selection.md) commands. For didactic purposes, it displays the nature of the event in the title bar of the form window.

```4d
  //A form method
 Case of
    :(Form event code=On Load)
       $vsTheEvent:="The form is about to be displayed"
    :(Form event code=On Unload)
       $vsTheEvent:="The output form has been exited and is about to disappear from the screen"
    :(Form event code=On Display Detail)
       $vsTheEvent:="Displaying record #"+String(Selected record number([TheTable]))
    :(Form event code=On Menu Selected)
       $vsTheEvent:="A menu item has been selected"
    :(Form event code=On Header")
       $vsTheEvent:="The header area is about to be drawn"
    :(Form event code=On Clicked")
       $vsTheEvent:="A record has been clicked"
    :(Form event code=On Double Clicked")
       $vsTheEvent:="A record has been double clicked"
    :(Form event code=On Open Detail)
       $vsTheEvent:="The record #"+String(Selected record number([TheTable]))+" is double-clicked"
    :(Form event code=On Close Detail)
       $vsTheEvent:="Going back to the output form"
    :(Form event code=On Activate)
       $vsTheEvent:="The form's window has just become the frontmost window"
    :(Form event code=On Deactivate)
       $vsTheEvent:="The form's window is no longer the frontmost window"
    :(Form event code=On Menu Selected)
       $vsTheEvent:="A menu item has been chosen"
    :(Form event code=On Outside Call)
       $vsTheEvent:="A call from another has been received"
    Else
       $vsTheEvent:="What's going on? Event #"+String(Form event)
 End case
 SET WINDOW TITLE($vsTheEvent)
```

#### Example 6 

For examples on how to handle On Before Keystroke and On After Keystroke events, see examples for the [Get edited text](get-edited-text.md), [Keystroke](keystroke.md) and [FILTER KEYSTROKE](filter-keystroke.md) commands.

#### Example 7 

This example shows how to treat clicks and double clicks in the same way in a scrollable area:

```4d
  //asChoices scrollable area object method
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asChoices;...)
  //...
       asChoices:=0
    :((Form event code=On Clicked)|(Form event code=On Double Clicked))
       If(asChoices#0)
  //An item has been clicked, do something here
  //...
       End if
  //...
 End case
```

#### Example 8 

This example shows how to treat clicks and double clicks using a different response. Note the use of the element zero for keeping track of the selected element:

```4d
  //asChoices scrollable area object method
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asChoices;...)
  // ...
       asChoices:=0
       asChoices{0}:="0"
    :(Form event code=On Clicked)
       If(asChoices#0)
          If(asChoices#Num(asChoices))
  //A new item has been clicked, do something here
  //...
  //Save the new selected element for the next time
             asChoices{0}:=String(asChoices)
          End if
       Else
          asChoices:=Num(asChoices{0})
       End if
    :(Form event code=On Double Clicked)
       If(asChoices#0)
  //An item has been double clicked, do something different here
       End if
  // ...
 End case
```

#### Example 9 

This example shows how to maintain a status text information area from within a form method, using the On Getting Focus and On Losing Focus events:

```4d
  //[Contacts];"Data Entry" form method
 Case of
    :(Form event code=On Load)
       var vtStatusArea : Text
       vtStatusArea:=""
    :(Form event code=On Getting Focus)
       RESOLVE POINTER(Focus object;$vsVarName;$vlTableNum;$vlFieldNum)
       If(($vlTableNum#0)&($vlFieldNum#0))
          Case of
             :($vlFieldNum=1) //Last name field
                vtStatusArea:="Enter the Last name of the Contact; it will be capitalized automatically"
  //...
             :($vlFieldNum=10) //Zip Code field
                vtStatusArea:="Enter a 5-digit zip code; it will be checked and validated automatically"
  //...
          End case
       End if
    :(Form event code=On Losing Focus)
       vtStatusArea:=""
  //...
 End case
```

#### Example 10 

This example shows how to respond to a close window event with a form used for record data entry:

```4d
  //Method for an input form
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Close Box)
       If(Modified record($vpFormTable->))
          CONFIRM("This record has been modified. Save Changes?")
          If(OK=1)
             ACCEPT
          Else
             CANCEL
          End if
       Else
          CANCEL
       End if
  //...
 End case
```

#### Example 11 

This example shows how to capitalize a text or alphanumeric field each time its data source value is modified:

```4d
  //[Contacts]First Name Object method
 Case of
  //...
    :(Form event code=On Data Change)
       [Contacts]First Name:=Uppercase(Substring([Contacts]First Name;1;1))+Lowercase(Substring([Contacts]First Name;2))
  //...
 End case
```

#### Example 12 

This example shows how to capitalize a text or alphanumeric field each time its data source value is modified:

```4d
  //[Contacts]First Name Object method
 Case of
  //...
    :(Form event code=On Data Change)
       [Contacts]First Name:=Uppercase(Substring([Contacts]First Name;1;1))+Lowercase(Substring([Contacts]First Name;2))
  //...
 End case
```

#### Example 13 

The following example illustrates how to manage a deletion action in a hierarchical list:

```4d
 ... //method of hierarchical list
:(Form event code=On Delete Action)
 ARRAY LONGINT($itemsArray;0)
 $Ref:=Selected list items(<>HL;$itemsArray;*)
 $n:=Size of array($itemsArray)
 
 Case of
    :($n=0)
       ALERT("No item selected")
       OK:=0
    :($n=1)
       CONFIRM("Do you want to delete this item?")
    :($n>1)
       CONFIRM("Do you want to delete these items?")
 End case
 
 If(OK=1)
    For($i;1;$n)
       DELETE FROM LIST(<>HL;$itemsArray{$i};*)
    End for
 End if
```

#### Example 14 

In this example, the On Scroll form event allows us to synchronize the display of two pictures in a form. The following code is added in the "satellite" object method (picture field or variable):

```4d
 Case of
    :(Form event code=On Scroll)
  // we take the position of the left picture
       OBJECT GET SCROLL POSITION(*;"satellite";vPos;hPos)
  // and we apply it to the right picture
       OBJECT SET SCROLL POSITION(*;"plan";vPos;hPos;*)
 End case
```

Result:

#### Example 15 

You want to draw a red rectangle around the selected cell of a list box, and you want the rectangle to move along with the list box if it is scrolled vertically by the user. In the list box object method, you can write:

```4d
 Case of
 
    :(Form event code=On Clicked)
       LISTBOX GET CELL POSITION(*;"LB1";$col;$raw)
       LISTBOX GET CELL COORDINATES(*;"LB1";$col;$raw;$x1;$y1;$x2;$y2)
       OBJECT SET VISIBLE(*;"RedRect";True) //initialize a red rectangle
       OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)
 
    :(Form event code=On Scroll)
       LISTBOX GET CELL POSITION(*;"LB1";$col;$raw)
       LISTBOX GET CELL COORDINATES(*;"LB1";$col;$raw;$x1;$y1;$x2;$y2)
       OBJECT GET COORDINATES(*;"LB1";$xlb1;$ylb1;$xlb2;$ylb2)
       $toAdd:=LISTBOX Get headers height(*;"LB1") //height of the header so as not to overlap it
       If($ylb1+$toAdd<$y1)&($ylb2>$y2) //if we are inside the list box
  //to keep it simple, we only handle headers
  //but we should handle horizontal clipping
  //as well as scroll bars
          OBJECT SET VISIBLE(*;"RedRect";True)
          OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)
       Else
          OBJECT SET VISIBLE(*;"RedRect";False)
       End if
 
 End case
```

As a result, the red rectangle follows the scrolling of the list box:

![](../assets/en/commands/pict1900395.en.png)

#### See also 

*\_o\_DRAG AND DROP PROPERTIES*  
[CALL SUBFORM CONTAINER](call-subform-container.md)  
[Current form table](current-form-table.md)  
[FILTER KEYSTROKE](filter-keystroke.md)  
[FORM Event](form-event.md)  
[Get edited text](get-edited-text.md)  
[Keystroke](keystroke.md)  
[POST OUTSIDE CALL](post-outside-call.md)  
[SET TIMER](set-timer.md)  