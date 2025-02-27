---
id: onLoad
title: On Load
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Definición                                           |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 1    | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Subform](FormObjects/subform_overview.md) - [Tab control](FormObjects/tabControl.md) - [Web Area](FormObjects/webArea_overview.md) | El formulario está a punto de ser mostrado o impreso |

## Descripción

Este evento se activa cuando el formulario se está cargando o imprimiendo.

Todos los objetos del formulario (de cualquier página) cuya propiedad de evento `On Load` esté seleccionada tendrán su método objeto llamado.
Entonces, si se selecciona la propiedad de evento formulario `On Load`, se llamará al método formulario.

> Los eventos `On Load` y [`On Unload`](onUnload.md) se generan para los objetos si están activados tanto para los objetos como para el formulario al que pertenecen. Si los eventos están activados sólo para los objetos, no se producirán; estos dos eventos también deben estar activados a nivel del formulario.

### Subformulario

El evento `On Load` se genera al abrir el subformulario (este evento debe haberse activado también a nivel del formulario padre para que se tenga en cuenta). El evento se genera antes que los del formulario padre. Tenga en cuenta también que, de acuerdo con los principios de funcionamiento de los eventos de formulario, si el subformulario se coloca en una página distinta de la página 0 o 1, este evento sólo se generará cuando se muestre esa página (y no cuando se muestre el formulario).

### Ver también

[`On Unload`](onUnload.md)
