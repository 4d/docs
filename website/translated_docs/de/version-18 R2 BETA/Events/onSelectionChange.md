---
id: version-18R2_BETA-onSelectionChange
title: On Selection Change
original_id: onSelectionChange
---

| Code | Can be called by                                                                                                                                                                                                                                                      | Definition                              |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 31   | [4D View Pro area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) | The selection in the object is modified |


## Description

This event can be generated in different contexts.

### 4D View Pro

The current selection of rows or columns is modified. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Property      | Typ     | Description                    |
| ------------- | ------- | ------------------------------ |
| code          | longint | 31                             |
| description   | Text    | "On Selection Change"          |
| objectName    | Text    | 4D View Pro area name          |
| sheetName     | Text    | Name of the sheet of the event |
| oldSelections | object  | Cell range before change       |
| newSelections | object  | Cell range after change        |


#### Beispiel

```4d
 If(FORM Event.code=On Selection Change)
    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))
    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))
 End if
```

### List form

The current record or the current selection of rows is modified in a list form.

### Hierarchical list

This event is generated every time the selection in the hierarchical list is modified after a mouse click or keystroke.

### Input & 4D Write Pro

The text selection or the position of the cursor in the area is modified following a click or a keystroke.

### List box

This event is generated each time the current selection of rows or columns of the list box is modified.