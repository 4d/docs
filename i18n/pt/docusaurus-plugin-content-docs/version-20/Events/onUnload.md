---
id: onUnload
title: On Unload
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Definição                                             |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 24   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) - [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botão](FormObjects/button_overview.md) - [Grade de botões](FormObjects/buttonGrid_overview.md) - [Caixa de seleção](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Lista suspensa](FormObjects/dropdownList_Overview.md) - Formulário - [Lista herárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box ](FormObjects/listbox_overview.md#list-box-columns) - [Botão imagem](FormObjects/pictureButton_overview.md) - [Pop up menu imagem](FormObjects/picturePopupMenu_overview.md) - [Área de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicador de progresso ](FormObjects/progressIndicator.md) - [Botão rádio](FormObjects/radio_overview.md) - [Regra](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Subformulário](FormObjects/subform_overview.md) - [Guia](FormObjects/tabControl.md) - [Área Web](FormObjects/webArea_overview.md) | O formulário está prestes a ser encerrado e libertado |


## Descrição

Este evento é acionado quando o formulário é libertado.

Todos os objetos do formulário (de qualquer página) cuja propriedade de evento de objeto `On Unload` estiver selecionada terão seu método objeto chamado. Então, se a propriedade de evento formulário `On Unload` for selecionada, o formulário terá seu método formulário chamado.

> Os eventos [`On Load`](onLoad.md) e [`On Unload`] são gerados para objetos se estiverem ativados tanto para os objetos quanto para o formulário ao qual os objetos pertencem. Se os eventos estiverem ativados somente para objetos, eles não ocorrerão; esses dois eventos também devem ser ativados no nível do formulário.



### Subformulário

O evento `On Unload` é gerado quando o subformulário é fechado (esse evento também deve ter sido ativado no nível do formulário pai para ser considerado). O evento é gerado antes dos eventos do formulário principal. Observe também que, conforme os princípios de funcionamento dos eventos de formulário, se o subformulário for colocado em uma página diferente da página 0 ou 1, este evento só será gerado quando a página for fechada (e não quando o formulário for fechado).


### Veja também

[`On Load`](onLoad.md)