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

Esse evento é gerado sempre que a seleção na lista hierárquica é modificada após um clique do mouse ou pressionamento de tecla.

### Área de entrada e 4D Write Pro

A seleção de texto ou a posição do cursor na área é modificada após um clique, ou um pressionamento de tecla.

### List box

Esse evento é gerado sempre que a seleção atual de linhas ou de colunas do list box é modificada.
