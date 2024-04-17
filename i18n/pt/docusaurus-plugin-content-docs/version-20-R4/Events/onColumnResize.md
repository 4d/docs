---
id: onColumnResize
title: On Column Resize
---

| Code | Pode ser chamado por                                                                                                                                                        | Definição                                                                                                                                |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 33   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | A largura de uma coluna é modificada directamente pelo utilizador ou, consequentemente, por um redimensionamento da janela do formulário |


## Descrição

### List Box

Este evento é gerado quando a largura de uma coluna na caixa de listagem é modificada por um utilizador. The event is triggered "live", *i.e.*, sent continuously during the event, for as long as the list box or column concerned is being resized. This resizing is performed manually by a user, or may occur as a result of the list box and its column(s) being resized along with the form window itself (whether the form is resized manually or using the `RESIZE FORM WINDOW` command).

> The `On Column Resize` event is not triggered when a [fake column](FormObjects/propertiesResizingOptions.html#about-the-fake-blank-column) is resized.

### 4D View Pro

This event is generated when the width of a column is modified by a user. Neste contexto, o  [objeto de evento](overview.md#event-object) retornado pelo comando `FORM Event` contém:

| Propriedade | Tipo          | Descrição                                                                                |
| ----------- | ------------- | ---------------------------------------------------------------------------------------- |
| code        | inteiro longo | On Column Resize                                                                         |
| description | text          | "On Column Resize"                                                                       |
| objectName  | text          | Nome da área 4D View Pro                                                                 |
| sheetName   | text          | Nome da folha do evento                                                                  |
| range       | object        | Intervalo de células das colunas cujas larguras foram alteradas                          |
| header      | boolean       | True se a coluna de cabeçalho da linha (primeira coluna) for redimensionada, senão false |

#### Exemplo

```4d
 If(FORM Event.code=On Column Resize)
    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))
 End if
```