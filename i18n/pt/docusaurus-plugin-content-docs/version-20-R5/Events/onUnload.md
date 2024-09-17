---
id: onUnload
title: On Unload
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Definição                                             |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 24   | [Área do 4D View Pro](FormObjects/viewProArea_overview.md) - [Área do 4D Write Pro](FormObjects/writeProArea_overview) - [Botão](FormObjects/button_overview.md) - [Grade de Botões](FormObjects/buttonGrid_overview.md) - [Caixa de Seleção](FormObjects/checkbox_overview.md) - [Caixa de Combinação](FormObjects/comboBox_overview.md) - [Lista Dropdown](FormObjects/dropdownList_Overview.md) - Formulário - [Lista Hierárquica](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [Caixa de Lista](FormObjects/listbox_overview.md) - [Coluna de Caixa de Lista](FormObjects/listbox_overview.md#list-box-columns) - [Botão de Imagem](FormObjects/pictureButton_overview.md) - [Menu Pop-up de Imagem](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de Progresso](FormObjects/progressIndicator.md) - [Botão de Rádio](FormObjects/radio_overview.md) - [Régua](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Divisor](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Subformulário](FormObjects/subform_overview.md) - [Controle de Abas](FormObjects/tabControl.md) - [Área da Web](FormObjects/webArea_overview.md) | O formulário está prestes a ser encerrado e libertado |

## Descrição

Este evento é acionado quando o formulário é libertado.

Todos los objetos del formulario (de cualquier página) cuya propiedad de evento `On Unload` esté seleccionada tendrán su método objeto llamado.
Entonces, si se selecciona la propiedad de evento formulario `On Unload`, se llamará al método formulario.

> The [`On Load`](onLoad.md) and [`On Unload`] events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.

### Subformulário

El evento `On Unload` se genera al cerrar el subformulario (este evento debe haberse activado también a nivel del formulario padre para que se tenga en cuenta). O evento é gerado antes dos eventos do formulário principal. The event is generated before those of the parent form.

### Veja também

[`On Load`](onLoad.md)
