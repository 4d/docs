---
id: onUnload
title: On Unload
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Definição                                             |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 24   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Subform](FormObjects/subform_overview.md) - [Tab control](FormObjects/tabControl.md) - [Web Area](FormObjects/webArea_overview.md) | O formulário está prestes a ser encerrado e libertado |

## Descrição

Este evento é acionado quando o formulário é libertado.

Todos los objetos del formulario (de cualquier página) cuya propiedad de evento `On Unload` esté seleccionada tendrán su método objeto llamado.
Entonces, si se selecciona la propiedad de evento formulario `On Unload`, se llamará al método formulario.

> The [`On Load`](onLoad.md) and [`On Unload`] events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.

### Subformulário

El evento `On Unload` se genera al cerrar el subformulario (este evento debe haberse activado también a nivel del formulario padre para que se tenga en cuenta). O evento é gerado antes dos eventos do formulário principal. The event is generated before those of the parent form.

### Veja também

[`On Load`](onLoad.md)
