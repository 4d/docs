---
id: onLoad
title: On Load
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Definição                                               |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 1    | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Subform](FormObjects/subform_overview.md) - [Tab control](FormObjects/tabControl.md) - [Web Area](FormObjects/webArea_overview.md) | O formulário está prestes a ser apresentado ou impresso |

## Descrição

Este evento é acionado quando o formulário é carregado ou impresso.

All the objects of the form (from any page) whose `On Load` object event property is selected will have their object method called.
Then, if the `On Load` form event property is selected, the form will have its form method called.

> The `On Load` and [`On Unload`](onUnload.md) events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.

### Subformulário

The `On Load` event is generated when opening the subform (this event must also have been activated at the parent form level in order to be taken into account). O evento é gerado antes dos eventos do formulário principal. Also note that, in accordance with the operating principles of form events, if the subform is placed on a page other than page 0 or 1, this event will only be generated when that page is displayed (and not when the form is displayed).

### Veja também

[`On Unload`](onUnload.md)
