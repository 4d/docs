---
id: onRowResize
title: On Row Resize
---

| Code | Pode ser chamado por                                    | Definição                                                |
| ---- | ------------------------------------------------------- | -------------------------------------------------------- |
| 60   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) | The height of a row is modified by a user with the mouse |


## Descrição

This event is generated when the height of a row is modified by a user in a 4D View Pro document. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriedade | Tipo          | Descrição                                                        |
| ----------- | ------------- | ---------------------------------------------------------------- |
| code        | inteiro longo | 60                                                               |
| description | text          | "On Row Resize"                                                  |
| objectName  | text          | Nome da área 4D View Pro                                         |
| sheetName   | text          | Nome da folha do evento                                          |
| range       | object        | Cell range of the rows whose heights have changed                |
| header      | boolean       | True if the column header row (first row) is resized, else false |

#### Exemplo

```4d
 If(FORM Event.code=On Row Resize)
    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))
 End if
```