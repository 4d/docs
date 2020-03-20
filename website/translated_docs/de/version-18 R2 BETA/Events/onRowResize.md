---
id: version-18R2_BETA-onRowResize
title: On Row Resize
original_id: onRowResize
---

| Code | Can be called by                                        | Definition                                               |
| ---- | ------------------------------------------------------- | -------------------------------------------------------- |
| 60   | [4D View Pro Area](FormObjects/viewProArea_overview.md) | The height of a row is modified by a user with the mouse |


## Description

This event is generated when the height of a row is modified by a user in a 4D View Pro document. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Property    | Typ     | Description                                                      |
| ----------- | ------- | ---------------------------------------------------------------- |
| code        | longint | 60                                                               |
| description | Text    | "On Row Resize"                                                  |
| objectName  | Text    | 4D View Pro area name                                            |
| sheetName   | Text    | Name of the sheet of the event                                   |
| range       | object  | Cell range of the rows whose heights have changed                |
| header      | boolean | True if the column header row (first row) is resized, else false |


#### Beispiel

```4d
 If(FORM Event.code=On Row Resize)
    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))
 End if
```