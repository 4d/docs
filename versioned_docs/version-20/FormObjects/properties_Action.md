---
id: propertiesAction
title: Action 
---


---
## Draggable

Control whether and how the user can drag the object. By default, no drag operation is allowed.

Two drag modes are available:

- **Custom**: In this mode, any drag operation performed on the object triggers the `On Begin Drag` form event in the context of the object. You then manage the drag action using a method.   
In custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. This mode is based upon a combination of specific properties, events, and commands from the `Pasteboard` theme. 
- **Automatic**: In this mode, 4D **copies** text or pictures directly from the form object. It can then be used in the same 4D area, between two 4D areas, or between 4D and another application. For example, automatic drag (and drop) lets you copy a value between two fields without using programming:  
![](../assets/en/FormObjects/property_automaticDragDrop.png)  
![](../assets/en/FormObjects/property_automaticDragDrop2.png)
In this mode, the `On Begin Drag` form event is NOT generated. If you want to "force" the use of the custom drag while automatic drag is enabled, hold down the **Alt** (Windows) or **Option** (macOS) key during the action. This option is not available for pictures.

For more information, refer to [Drag and Drop](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) in the *4D Language Reference* manual.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dragging|text |"none" (default), "custom", "automatic" (excluding list box)|


#### Objects Supported

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Plug-in Area](pluginArea_overview.md#overview)




#### See also
[Droppable](#droppable)


---
## Droppable

Control whether and how the object can be the destination of a drag and drop operation. 

Two drop modes are available:

- **Custom**: In this mode, any drop operation performed on the object triggers the `On Drag Over` and `On Drop` form events in the context of the object. You then manage the drop action using a method.    
In custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. This mode is based upon a combination of specific properties, events, and commands from the `Pasteboard` theme. 
- **Automatic**: In this mode, 4D automatically manages — if possible — the insertion of dragged data of the text or picture type that is dropped onto the object (the data are pasted into the object). The `On Drag Over` and `On Drop` form events are NOT generated. On the other hand, the `On After Edit` (during the drop) and `On Data Change` (when the object loses the focus) events are generated. 

For more information, refer to [Drag and Drop](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) in the *4D Language Reference* manual.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dropping|text |"none" (default), "custom", "automatic" (excluding list box)|

#### Objects Supported

[4D Write Pro areas](writeProArea_overview.md) - [Button](button_overview.md) - [Input](input_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Plug-in Area](pluginArea_overview.md#overview) 


#### See also
[Draggable](#draggable)


---
## Execute object method
When this option is enabled, the object method is executed with the `On Data Change` event *at the same moment* the user changes the value of the indicator. When the option is disabled, the method is executed *after* the modification.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|continuousExecution|boolean |true, false|

#### Objects Supported

[Progress bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)






---
## Method

Reference of a method attached to the object. Object methods generally "manage" the object while the form is displayed or printed. You do not call an object method—4D calls it automatically when an event involves the object to which the object method is attached.

Several types of method references are supported:

- a standard object method file path, i.e. that uses the following pattern:  
`ObjectMethods/objectName.4dm`  
... where `objectName` is the actual [object name](properties_Object.md#object-name). This type of reference indicates that the method file is located at the default location ("sources/forms/*formName*/ObjectMethods/"). In this case, 4D automatically handles the object method when operations are executed on the form object (renaming, duplication, copy/paste...)

- a project method name: name of an existing project method without file extension, i.e.:
`myMethod`
In this case, 4D does not provide automatic support for object operations.

- a custom method file path including the .4dm extension, e.g.:  
`../../CustomMethods/myMethod.4dm`
You can also use a filesystem:  
`/RESOURCES/Buttons/bOK.4dm`
In this case, 4D does not provide automatic support for object operations.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|method|text |Object method standard or custom file path, or project method name|


#### Objects Supported

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Forms](FormEditor/forms.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)




---
## Movable Rows
`Array type list boxes`

Authorizes the movement of rows during execution. This option is selected by default. It is not available for [selection type list boxes](listbox_overview.md#selection-list-boxes) nor for [list boxes in hierarchical mode](properties_Hierarchy.md#hierarchical-list-box). 

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|movableRows|boolean |true, false|

#### Objects Supported

[List Box](listbox_overview.md#overview)





---
## Multi-selectable

Allows the selection of multiple records/options in a [hierarchical list](list_overview.md).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|selectionMode|	text|"multiple", "single", "none"

#### Objects Supported

[Hierarchical List](list_overview.md)




---
## Sortable

Allows sorting column data by clicking a [listbox](listbox_overview.md) header. This option is selected by default. Picture type arrays (columns) cannot be sorted using this feature.
 
In list boxes based on a selection of records, the standard sort function is available only:
*	When the data source is *Current Selection*,
*	With columns associated with fields (of the Alpha, Number, Date, Time or Boolean type).
 
In other cases (list boxes based on named selections, columns associated with expressions), the standard sort function is not available. A standard list box sort changes the order of the current selection in the database. However, the highlighted records and the current record are not changed. A standard sort synchronizes all the columns of the list box, including calculated columns.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|sortable|boolean|true, false|

#### Objects Supported
[List Box](listbox_overview.md)






---
## Standard action
Typical activities to be performed by active objects (*e.g.*, letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. They are described in detail in the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section of the *Design Reference*.

You can assign both a standard action and a project method to an object. In this case, the standard action is usually executed after the method and 4D uses this action to enable/disable the object according to the current context. When an object is deactivated, the associated project method cannot be executed. 

You can also set this property using the `OBJECT SET ACTION` command.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|action|string |The name of a [valid standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html).|

#### Objects Supported

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [List Box](listbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Tab control](tabControl.md)
