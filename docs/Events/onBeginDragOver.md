---
id: onBeginDragOver
title: On Begin Drag Over
---

|Code|Can be called by|Definition|  
|---|---|---|
|17|[4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md)|An object is being dragged|


## Description

The `On Begin Drag Over` form event can be selected for any form objects that can be dragged. It is generated in every case where the object has the [Draggable](FormObjects/properties_Action.md#draggable) property. It can be called from the method of the source object or the form method of the source object.

> Unlike the [`On Drag Over`](onDragOver.md) form event, `On Begin Drag Over` is called within the context of the **source object** of the drag action.

The `On Begin Drag Over` event is useful for preparing of the drag action. It can be used to:

- Add data and signatures to the pasteboard (via the `APPEND DATA TO PASTEBOARD` command).
- Use a custom icon during the drag action (via the `SET DRAG ICON` command).
- Accept or refuse dragging via the result of the method of the dragged object.
	- To indicate that drag actions are accepted, the method of the source object must return 0 (zero).
	- To indicate that drag actions are refused, the method of the source object must return -1 (minus one).
	- If no result is returned, 4D considers that drag actions are accepted.

4D data are put in the pasteboard before calling the event. For example, in the case of dragging without the **Automatic Drag** action, the dragged text is already in the pasteboard when the event is called.
