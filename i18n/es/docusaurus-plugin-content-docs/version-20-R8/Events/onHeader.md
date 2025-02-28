---
id: onHeader
title: On Header
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Definición                                                                                    |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 5    | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form (list form only) - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | El área del encabezado del formulario está a punto de imprimirse o mostrarse. |

## Descripción

El evento `On Header` se llama cuando un registro está a punto de ser visualizado en un formulario de lista que se muestra vía `DISPLAY SELECTION` y `MODIFY SELECTION`.

> Este evento no se puede seleccionar para los formularios proyecto, sólo está disponible con los **formularios tabla**.

En este contexto, se desencadena la siguiente secuencia de llamadas a métodos y eventos de formulario:

- Para cada objeto en el área del encabezado:
    - Método objeto con el evento `On Header`
    - Método formulario con el evento `On Header`

> Los registros impresos se manejan utilizando el evento [`On Display Detail`](onDisplayDetail.md).

Llamar a un comando 4D que muestra una caja de diálogo desde el evento `On Header` no está permitido y provocará un error de sintaxis. Más concretamente, los comandos en cuestión son: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION` y `MODIFY SELECTION`.