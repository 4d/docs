---
id: propertiesAction
title:Action 
---

## Standard action
Typical activities to be performed by active objects have been predefined by 4D as standard actions. They are described in detail in the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section of the Design Reference.


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|action|string |The name of a valid standard action.|


#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom)|
|Picture Button|[Picture Button](pictureButton_overview.md)|
|Button Grid|[Button Grid](buttonGrid_overview.md)|
|Check Box|[Check Box](checkBox_overview.md) - [Collapse / Expand](checkBox_overview.md#collapse) - [Disclosure](checkBox_overview.md#disclosure)|
|Pop-up menu / Drop-down List|[Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md)|
|Picture Pop-up Menu|[Picture Pop-up Menu](picturePopupMenu_overview.md)|

<hr>

## Droppable

Several properties are available to configure the support of drag-and-drop in forms. The number and action of these properties depends on the type of object to which they are applied.

### Draggable and Droppable

These properties control whether the user can drag the object and whether the object itself can receive data that the user drags onto it. 

If you want to enable drag and/or drop for a particular object, you need to enable the corresponding property. In this case, any drag or drop operation performed on the object when the form is executed triggers its corresponding form event. You then must manage the drag-and-drop action using a method. For more information, refer to Drag and Drop in the 4D Language Reference manual.

>The Droppable property can be assigned to non-enterable objects. This way the develop can program the desired response to an object being dropped on a non-enterable field or variable.

To drag and drop an object to another object, you must select the Draggable property for that object in the Property List window. In a drag-and-drop operation, the object that you drag is the source object.

To make an object the destination of a drag and drop operation, you must select the Droppable property for that object in the Property List window. In a drag-and-drop operation, the object that receives data is the destination object.

By default, newly created objects can be neither dragged nor dropped. It is up to you to set these properties.

All objects in an input or dialog form can be made to be dragged and dropped. Individual elements of an array (*i.e.*, scrollable area), items of a hierarchical list or rows in a list box can be dragged and dropped. Conversely, you can drag and drop an object onto an individual element of an array or an item of a hierarchical list or a list box row. However, you cannot drag and drop objects from the detail area of an output form.

You can also manage dragging and dropping onto the application, outside of any form, using the On Drop Database Method.

You can easily create a drag-and-drop user interface, because 4D allows you to use any type of active object (field or variable) as source or destination objects. For example, you can drag and drop a button.

>To drag a text or a button labeled "draggable," you must first press the Alt (Windows) or Option (macOS) keys.<p>
By default, in the case of picture fields and variables, the picture and its reference are both dragged. If you only want to drag the reference of the variable or field, first hold down the Alt (Windows) or Option (macOS) key. <p>
When the “Draggable” and “Movable Rows” properties are both set for a List box object, the “Movable Rows” property takes priority when a row is moved. Dragging is not possible in this case.

An object that is capable of being both dragged and dropped can also be dropped onto itself, unless you reject the operation. For details, see the discussion below.

The following figure shows the Property List window with the Droppable and Draggable properties set for the selected object:

![](assets/en/FormObjects/property_draggableDroppable_propertyList.png)

### Automatic Drag and Drop

Text objects (fields, variables, combo boxes and list boxes) as well as picture objects allow automatic drag and drop. Automatic drag and drop copies or moves text or pictures directly from one form area to another using simple point-and-click operations. It can be used in the same 4D area, between two 4D areas, or between 4D and another application (for example, WordPad®). 

For example, automatic drag and drop lets you copy a value between two fields without using programming:

![](assets/en/FormObjects/property_automaticDragDrop.png)

To enable automatic drag and drop, you must select the corresponding properties in the "Action" theme of the Property List for the object. 

For more information, refer to [Drag and Drop](https://doc.4d.com/4Dv17R5/4D/17-R5/Drag-and-Drop.300-4127813.en.html) in the 4D Language Reference manual.

>In the case of automatic drag and drop between two 4D areas, the data are moved, in other words, they are removed from the source area. If you want to copy the data, hold down the **Ctrl** (Windows) or **Option** (macOS) key during the action (the Option key must be clicked after you start to drag the item(s)).

Automatic drag and drop can be configured separately for each form object via the following Property List options:

* **Automatic Drag** (Text type objects only)<br> When this option is checked, the automatic drag mode is activated for the object. In this mode, the *On Begin Drag* form event is NOT generated.

If you want to “force” the use of the standard drag while automatic drag is enabled, hold down the **Alt** (Windows) or **Option** (mac OS) key during the action. This option is not available for pictures.

* **Automatic Drop**<br> This option is used to activate the automatic drop mode. In this mode, 4D automatically manages — if possible — the insertion of dragged data of the text or picture type that is dropped onto the object (the data are pasted into the object). The *On Drag Over* and *On Drop* form events are not generated in this case. On the other hand, the On After Edit (during a drop) and On Data Change (when the object loses the focus) events are generated. <p>
In the case of data other than text or pictures (another 4D object, file, etc. ) or complex data being dropped, the application refers to the value of the Droppable option: if it is checked, the *On Drag Over* and *On Drop* form events are generated; otherwise, the drop is refused. This also depends on the value of the “Prevent drop of data not coming from 4D” option (see below).

### Prevent drop of data not coming from 4D (compatibility)  
Beginning with version 11, 4D allows drag and drop of selections, objects and/or files external to 4D, like picture files for example. This possibility must be supported by the database code.
In databases converted from previous versions of 4D, this possibility may lead to malfunctioning if the existing code is not adapted accordingly. For this reason, an option in the Preferences can be used to disable this function: **Prevent drop of data not coming from 4D**. This option is found on the Application/Compatibility page. It is checked by default in converted databases.

When this option is check, the drop of external objects into 4D forms is refused. Note however that the insertion of external objects remains possible in objects having the Automatic Drop option, when the application can interpret the dropped data (text or picture).


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|dragging|text | <li>"none", <li>"custom", <li>"automatic" (excluding list, list box)|
|dropping|text | <li>"none", <li>"custom", <li>"automatic" (excluding list, list box)|


#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom)|

<hr>

## Execute object method
When this option is checked, the object method is executed with the `On Data Change` event at the same moment the user changes the value of the indicator. By default, the method is executed after the modification.


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|action|string |The name of a valid standard action.|


#### Objects Supported

|Category|Link|
|---|---|
|Indicator|[Progress bar](indicators_overview.md#progress-bar) - [Barber shop](indicators_overview.md#barber-shop) - [Asynchronous progress bar](indicators_overview.md#asynchronous-progress-bar) - [Ruler](indicators_overview.md#ruler) - [Numeric stepper](indicators_overview.md#numeric-stepper)|


