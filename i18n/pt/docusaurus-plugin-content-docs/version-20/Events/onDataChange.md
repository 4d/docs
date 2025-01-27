---
id: onDataChange
title: On Data Change
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Definição                               |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 20   | [Área 4D Write Pro](FormObjects/writeProArea_overview.md) - [Lista suspensa](FormObjects/dropdownList_Overview.md) - Formulário - [Lista hierárquica](FormObjects/list_overview.md) - [Área de entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Coluna List Box](FormObjects/listbox_overview.md#list-box-columns) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicador de progressão](FormObjects/progressIndicator.md) - [Regra](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Stepper](FormObjects/stepper.md) - [Sub-formulário](FormObjects/subform_overview.md) | Os dados de um objeto foram modificados |


## Descrição

Quando a propriedade do evento `On Data Change` é selecionada para um objeto, você pode detectar e lidar com a mudança do valor da fonte de dados, usando o comando `FORM Event`.

O evento é gerado assim que a variável associada ao objeto é atualizada internamente pelo 4D (ou seja, geralmente quando a área de entrada do objeto perde o foco).

> Com [subformulários](FormObjects/subform_overview.md), o evento `On Data Change` é acionado quando o valor da variável do objeto subformulário for modificado.

