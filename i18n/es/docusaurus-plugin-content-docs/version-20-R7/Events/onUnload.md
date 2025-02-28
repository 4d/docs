---
id: onUnload
title: On Unload
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Definición                                      |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 24   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Subform](FormObjects/subform_overview.md) - [Tab control](FormObjects/tabControl.md) - [Web Area](FormObjects/webArea_overview.md) | El formulario está a punto de salir y liberarse |

## Descripción

Este evento se activa cuando el formulario es generado.

Todos los objetos del formulario (de cualquier página) cuya propiedad de evento `On Unload` esté seleccionada tendrán su método objeto llamado.
Entonces, si se selecciona la propiedad de evento formulario `On Unload`, se llamará al método formulario.

> Los eventos [`On Load`](onLoad.md) y [`On Unload`] se generan para los objetos si están habilitados tanto para los objetos como para el formulario al que pertenecen. Si los eventos están activados sólo para los objetos, no se producirán; estos dos eventos también deben estar activados a nivel del formulario.

### Subformulario

El evento `On Unload` se genera al cerrar el subformulario (este evento debe haberse activado también a nivel del formulario padre para que se tenga en cuenta). El evento se genera antes que los del formulario padre. The event is generated before those of the parent form.

### Ver también

[`On Load`](onLoad.md)