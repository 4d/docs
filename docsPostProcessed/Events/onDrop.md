---
id: onDrop
title: On Drop
---

|Code|Can be called by|Definition|  
|---|---|---|
|16|[4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md)|Data has been dropped onto an object|


## Description

The `On Drop` event is sent once to the destination object when the mouse pointer is released over the object. This event is the second phase of the drag-and-drop operation, in which you perform an operation in response to the user action.

This event is not sent to the object if the drag was not accepted during the [`On Drag Over`](onDragOver.md) events. If you process the `On Drag Over` event for an object and reject a drag, the `On Drop` event does not occur. Thus, if during the `On Drag Over` event you have tested the data type compatibility between the source and destination objects and have accepted a possible drop, you do not need to re-test the data during the `On Drop`. You already know that the data is suitable for the destination object.



#### See also
[`On Begin Drag Over`](onBeginDragOver.md)