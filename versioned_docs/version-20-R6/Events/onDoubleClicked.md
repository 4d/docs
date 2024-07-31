---
id: onDoubleClicked
title: On Double Clicked
---

|Code|Can be called by|Definition|  
|---|---|---|
|13|[4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md)|A double click occurred on an object|


## Description

The `On Double Clicked` event is generated when the user double-clicks on an object. The maximum length of time separating a double-click is defined in the system preferences.

If the [`On Clicked`](onClicked.md) or `On Double Clicked` object event property is selected for an object, you can detect and handle the clicks within or on the object, using the `FORM event` command that returns [`On Clicked`](onClicked.md) or `On Double Clicked`, depending on the case. 

If both events are selected for an object, the `On Clicked` and then the `On Double Clicked` events will be generated when the user double-clicks the object. 

### 4D View Pro

This event is generated when the user double-clicks anywhere on a 4D View Pro document. On this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

|Property|Type|Description|
|---|---|---|
|code|longint|13|
|description|text|"On Double Clicked"|
|objectName|text|4D View Pro area name|
|sheetName|text|Name of the sheet of the event|
|range|object|Cell range|

#### Example

```4d
 If(FORM Event.code=On Double Clicked)
   $value:=VP Get value(FORM Event.range)
 End if
```