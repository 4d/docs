---
id: onSelectionChange
title: On Selection Change
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                  | Definição                               |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 31   | [4D View Pro area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) | The selection in the object is modified |


## Descrição

This event can be generated in different contexts.


### 4D View Pro
The current selection of rows or columns is modified. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriedade   | Tipo          | Descrição                |
| ------------- | ------------- | ------------------------ |
| code          | inteiro longo | 31                       |
| description   | text          | "On Selection Change"    |
| objectName    | text          | Nome da área 4D View Pro |
| sheetName     | text          | Nome da folha do evento  |
| oldSelections | object        | Cell range before change |
| newSelections | object        | Cell range after change  |

#### Exemplo

```4d
 If(FORM Event.code=On Selection Change)
    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))
    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))
 End if
```

### Formulário lista

The current record or the current selection of rows is modified in a list form.


### Lista hierárquica

This event is generated every time the selection in the hierarchical list is modified after a mouse click or keystroke.


### Entrada & 4D Write Pro

The text selection or the position of the cursor in the area is modified following a click or a keystroke.


### List box
This event is generated each time the current selection of rows or columns of the list box is modified.

