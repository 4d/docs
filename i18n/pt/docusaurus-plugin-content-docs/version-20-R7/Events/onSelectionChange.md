---
id: onSelectionChange
title: On Selection Change
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                         | Definição                        |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| 31   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) - [Área 4D Write Pro](FormObjects/writeProArea_overview.md) - Formulário - [Lista Jerárquica](FormObjects/list_overview.md) - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) | A seleção no objeto é modificada |

## Descrição

Este evento pode ser gerado em diferentes contextos.

### 4D View Pro

A seleção atual de linhas ou de colunas é modificada. Nesse contexto, o [objeto evento] (overview.md#event-object) retornado pelo comando `FORM Event` contém:

| Propriedade   | Tipo          | Descrição                               |
| ------------- | ------------- | --------------------------------------- |
| code          | inteiro longo | 31                                      |
| description   | text          | "On Selection Change"                   |
| objectName    | text          | Nome da área 4D View Pro                |
| sheetName     | text          | Nome da folha do evento                 |
| oldSelections | object        | Intervalo de células antes da alteração |
| newSelections | object        | Intervalo de células após a alteração   |

#### Exemplo

```4d
 If(FORM Event.code=On Selection Change)
    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))
    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))
 End if
```

### Formulário lista

O registo atual ou a seleção atual de linhas é modificado num formulário lista.

### Lista hierárquica

This event is generated every time the selection in the hierarchical list is modified after a mouse click or keystroke.

### Área de entrada e 4D Write Pro

The text selection or the position of the cursor in the area is modified following a click or a keystroke.

### List box

This event is generated each time the current selection of rows or columns of the list box is modified.
