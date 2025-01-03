---
id: onUnload
title: On Unload
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Definição                                             |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 24   | [Área do 4D View Pro](FormObjects/viewProArea_overview.md) - [Área do 4D Write Pro](FormObjects/writeProArea_overview) - [Botão](FormObjects/button_overview.md) - [Grade de Botões](FormObjects/buttonGrid_overview.md) - [Caixa de Seleção](FormObjects/checkbox_overview.md) - [Caixa de Combinação](FormObjects/comboBox_overview.md) - [Lista Dropdown](FormObjects/dropdownList_Overview.md) - Formulário - [Lista Hierárquica](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [Caixa de Lista](FormObjects/listbox_overview.md) - [Coluna de Caixa de Lista](FormObjects/listbox_overview.md#list-box-columns) - [Botão de Imagem](FormObjects/pictureButton_overview.md) - [Menu Pop-up de Imagem](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de Progresso](FormObjects/progressIndicator.md) - [Botão de Rádio](FormObjects/radio_overview.md) - [Régua](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Divisor](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Subformulário](FormObjects/subform_overview.md) - [Controle de Abas](FormObjects/tabControl.md) - [Área da Web](FormObjects/webArea_overview.md) | O formulário está prestes a ser encerrado e libertado |

## Descrição

This event is triggered when the form is being exited released.

Todos os objetos do formulário (de qualquer página) cuja propriedade de evento de objeto `On Unload` estiver selecionada terão seu método objeto chamado.
Então, se a propriedade de evento formulário `On Unload` for selecionada, o formulário terá seu método formulário chamado.

> Os eventos [`On Load`](onLoad.md) e [`On Unload`] são gerados para objetos se estiverem ativados tanto para os objetos quanto para o formulário ao qual os objetos pertencem. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.

### Subformulário

O evento `On Unload` é gerado quando o subformulário é fechado (esse evento também deve ter sido ativado no nível do formulário pai para ser considerado). O evento é gerado antes dos eventos do formulário principal. The event is generated before those of the parent form.

### Veja também

[`On Load`](onLoad.md)
