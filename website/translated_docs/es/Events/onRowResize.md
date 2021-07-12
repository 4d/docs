---
id: onRowResize
title: On Row Resize
---

| Code | Puede ser llamado por                                   | Definición                                               |
| ---- | ------------------------------------------------------- | -------------------------------------------------------- |
| 60   | [4D View Pro Area](FormObjects/viewProArea_overview.md) | The height of a row is modified by a user with the mouse |


## Descripción

This event is generated when the height of a row is modified by a user in a 4D View Pro document. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriedad  | Tipo         | Descripción                                                      |
| ----------- | ------------ | ---------------------------------------------------------------- |
| code        | entero largo | 60                                                               |
| description | texto        | "On Row Resize"                                                  |
| objectName  | texto        | Nombre del área 4D View Pro                                      |
| sheetName   | texto        | Nombre de la hoja del evento                                     |
| range       | objeto       | Cell range of the rows whose heights have changed                |
| header      | booleano     | True if the column header row (first row) is resized, else false |

#### Ejemplo

```4d
 If(FORM Event.code=On Row Resize)
    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))
 End if
```