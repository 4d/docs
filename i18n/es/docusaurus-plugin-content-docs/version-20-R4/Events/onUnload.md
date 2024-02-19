---
id: onUnload
title: On Unload
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Definición                                      |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 24   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) - [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botón](FormObjects/button_overview.md) - [Rejilla de botones](FormObjects/buttonGrid_overview.md) - [Casilla de selección](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Lista desplegable](FormObjects/dropdownList_Overview.md) - Formulario - [Lista jerárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna de List Box ](FormObjects/listbox_overview.md#list-box-columns) - [Botón imagen](FormObjects/pictureButton_overview.md) - [Pop up menu imagen](FormObjects/picturePopupMenu_overview.md) - [Área de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicador de progreso ](FormObjects/progressIndicator.md) - [Botón radio](FormObjects/radio_overview.md) - [Regla](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Subformulario](FormObjects/subform_overview.md) - [Pestaña](FormObjects/tabControl.md) - [Área Web](FormObjects/webArea_overview.md) | El formulario está a punto de salir y liberarse |


## Descripción

Este evento se activa cuando el formulario es generado.

Todos los objetos del formulario (de cualquier página) cuya propiedad de evento `On Unload` esté seleccionada tendrán su método objeto llamado. Entonces, si se selecciona la propiedad de evento formulario `On Unload`, se llamará al método formulario.

> Los eventos [`On Load`](onLoad.md) y [`On Unload`] se generan para los objetos si están activados tanto para los objetos como para el formulario al que pertenecen los objetos. Si los eventos están activados sólo para los objetos, no se producirán; estos dos eventos también deben estar activados a nivel del formulario.



### Subformulario

El evento `On Unload` se genera al cerrar el subformulario (este evento debe haberse activado también a nivel del formulario padre para que se tenga en cuenta). El evento se genera antes que los del formulario padre. The event is generated before those of the parent form.


### Ver también

[`On Load`](onLoad.md)