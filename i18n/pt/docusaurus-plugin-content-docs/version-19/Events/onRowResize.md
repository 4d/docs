---
id: onRowResize
title: On Row Resize
---

| Code | Can be called by                                        | Definição                                                |
| ---- | ------------------------------------------------------- | -------------------------------------------------------- |
| 60   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) | The height of a row is modified by a user with the mouse |


## Descrção

This event is generated when the height of a row is modified by a user in a 4D View Pro document. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriedade | Tipo          | Descrção                                                         |
| ----------- | ------------- | ---------------------------------------------------------------- |
| code        | inteiro longo | 60                                                               |
| description | text          | "On Row Resize"                                                  |
| objectName  | text          | 4D View Pro area name                                            |
| sheetName   | text          | Name of the sheet of the event                                   |
| range       | object        | Cell range of the rows whose heights have changed                |
| header      | boolean       | True if the column header row (first row) is resized, else false |

#### Exemplo

```4d
 If(FORM Event.code=On Row Resize)
    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))
 End if
```