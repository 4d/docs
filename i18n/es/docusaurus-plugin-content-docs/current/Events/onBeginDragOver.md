---
id: onBeginDragOver
title: On Begin Drag Over
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Definición                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| 17   | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Se está arrastrando un objeto |

## Descripción

El evento de formulario `On Begin Drag Over` puede ser seleccionado para todos los objetos formulario que puedan ser arrastrados. Se genera en todos los casos en que el objeto tiene la propiedad [Draggable](FormObjects/properties_Action.md#draggable). Se puede llamar desde el método del objeto fuente o desde el método formulario del objeto fuente.

> A diferencia del evento de formulario [`On Drag Over`](onDragOver.md), `On Begin Drag Over` se llama dentro del contexto del **objeto fuente** de la acción arrastrar.

El evento `On Begin Drag Over` es útil para preparar la acción de arrastrar. Puede utilizarse para:

- Añadir los datos y las firmas al portapapeles (vía el comando `APPEND DATA TO PASTEBOARD`).
- Utilizar un icono personalizado durante la acción de arrastre (vía el comando `SET DRAG ICON`).
- Accept or refuse dragging via the result of the method of the dragged object.
    - Para indicar que las acciones de arrastre son aceptadas, el método del objeto fuente debe devolver 0 (cero).
    - To indicate that drag actions are refused, the method of the source object must return -1 (minus one).
    - Si no se devuelve ningún resultado, 4D considera que las acciones de arrastre son aceptadas.

Los datos 4D se colocan en el portapapeles antes de llamar al evento. Por ejemplo, en el caso de arrastrar sin la acción **Arrastre automático**, el texto arrastrado ya está en portapapeles cuando se llama al evento.
