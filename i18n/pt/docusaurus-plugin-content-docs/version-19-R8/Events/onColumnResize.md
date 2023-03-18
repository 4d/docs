---
id: onColumnResize
title: On Column Resize
---

| Code | Pode ser chamado por                                                                                                                                                                  | Definição                                                                                      |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 33   | [Área 4D View Pro](../FormObjects/viewProArea_overview.md) - [List Box](../FormObjects/listbox_overview.md) - [Coluna List Box ](../FormObjects/listbox_overview.md#list-box-columns) | The width of a column is modified directly by the user or consequently to a form window resize |


## Descrição

### List Box

Este evento é gerado quando a largura de uma coluna na caixa de listagem é modificada por um utilizador. The event is triggered "live", *i.e.*, sent continuously during the event, for as long as the list box or column concerned is being resized. This resizing is performed manually by a user, or may occur as a result of the list box and its column(s) being resized along with the form window itself (whether the form is resized manually or using the `RESIZE FORM WINDOW` command).

> The `On Column Resize` event is not triggered when a [fake column](../FormObjects/properties_ResizingOptions.md#about-the-fake-blank-column) is resized.

### 4D View Pro

This event is generated when the width of a column is modified by a user. On this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriedade | Tipo          | Descrição                                                           |
| ----------- | ------------- | ------------------------------------------------------------------- |
| code        | inteiro longo | On Column Resize                                                    |
| description | text          | "On Column Resize"                                                  |
| objectName  | text          | Nome da área 4D View Pro                                            |
| sheetName   | text          | Name of the sheet of the event                                      |
| range       | object        | Cell range of the columns whose widths have changed                 |
| header      | boolean       | True if the row header column (first column) is resized, else false |

#### Exemplo

```4d
 If(FORM Event.code=On Column Resize)
    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))
 End if
```