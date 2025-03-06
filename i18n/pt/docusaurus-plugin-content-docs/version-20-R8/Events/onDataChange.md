---
id: onDataChange
title: On Data Change
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Definição                               |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 20   | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Stepper](FormObjects/stepper.md) - [Subform](FormObjects/subform_overview.md) | Os dados de um objeto foram modificados |

## Descrição

Quando a propriedade do evento `On Data Change` é selecionada para um objeto, você pode detectar e lidar com a mudança do valor da fonte de dados, usando o comando `FORM Event`.

O evento é gerado assim que a variável associada ao objeto é atualizada internamente pelo 4D (ou seja, geralmente quando a área de entrada do objeto perde o foco).

> Com [subformulários](FormObjects/subform_overview.md), o evento `On Data Change` é acionado quando o valor da variável do objeto subformulário foi modificado.

