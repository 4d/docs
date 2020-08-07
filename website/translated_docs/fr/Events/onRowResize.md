---
id: onRowResize
title: On Row Resize
---

| Code | Peut être appelé par                                    | Définition                                               |
| ---- | ------------------------------------------------------- | -------------------------------------------------------- |
| 60   | [4D View Pro Area](FormObjects/viewProArea_overview.md) | The height of a row is modified by a user with the mouse |


## Description

This event is generated when the height of a row is modified by a user in a 4D View Pro document. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriété   | Type        | Description                                                      |
| ----------- | ----------- | ---------------------------------------------------------------- |
| code        | entier long | 60                                                               |
| description | Texte       | "On Row Resize"                                                  |
| objectName  | Texte       | 4D View Pro area name                                            |
| sheetName   | Texte       | Name of the sheet of the event                                   |
| range       | object      | Cell range of the rows whose heights have changed                |
| header      | boolean     | True if the column header row (first row) is resized, else false |

#### Exemple

```4d
 If(FORM Event.code=On Row Resize)
    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))
 End if
```