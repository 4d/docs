---
id: onLoad
title: On Load
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Definición                                           |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 1    | [Área 4D View Pro](FormObjects/viewProArea_overview.md) - [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botón](FormObjects/button_overview.md) - [Rejilla de botones](FormObjects/buttonGrid_overview.md) - [Casilla de selección](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Lista desplegable](FormObjects/dropdownList_Overview.md) - Formulario - [Lista jerárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna de List Box ](FormObjects/listbox_overview.md#list-box-columns) - [Botón imagen](FormObjects/pictureButton_overview.md) - [Pop up menu imagen](FormObjects/picturePopupMenu_overview.md) - [Área de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicador de progreso ](FormObjects/progressIndicator.md) - [Botón radio](FormObjects/radio_overview.md) - [Regla](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Subformulario](FormObjects/subform_overview.md) - [Pestaña](FormObjects/tabControl.md) - [Área Web](FormObjects/webArea_overview.md) | El formulario está a punto de ser mostrado o impreso |


## Descripción

Este evento se activa cuando el formulario se está cargando o imprimiendo.

Todos los objetos del formulario (de cualquier página) cuya propiedad de evento `On Load` esté seleccionada tendrán su método objeto llamado. Entonces, si se selecciona la propiedad de evento formulario `On Load`, se llamará al método formulario.

> Los eventos `On Load` y [`On Unload`](onUnload.md) se generan para los objetos si están activados tanto para los objetos como para el formulario al que pertenecen los objetos. Si los eventos están activados sólo para los objetos, no se producirán; estos dos eventos también deben estar activados a nivel del formulario.


### Subformulario

El evento `On Load` se genera al abrir el subformulario (este evento debe haberse activado también a nivel del formulario padre para que se tenga en cuenta). El evento se genera antes que los del formulario padre. Tenga en cuenta también que, de acuerdo con los principios de funcionamiento de los eventos de formulario, si el subformulario se coloca en una página distinta de la página 0 o 1, este evento sólo se generará cuando se muestre esa página (y no cuando se muestre el formulario).


### Ver también

[`On Unload`](onUnload.md)