---
id: onBeginDragOver
title: On Begin Drag Over
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Definición                    |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| 17   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botón](FormObjects/button_overview.md) - [Rejilla de botones](FormObjects/buttonGrid_overview.md) - [Casilla de verificación](FormObjects/checkbox_overview.md) - [Lista desplegable](FormObjects/dropdownList_Overview.md) - Formulario - [Lista jerárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [Lista](FormObjects/listbox_overview.md) - [Columna de lista](FormObjects/listbox_overview.md#list-box-columns) - [Botón con imagen](FormObjects/pictureButton_overview.md) - [Menú emergente con imagen](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de progreso](FormObjects/progressIndicator.md) - [Botón de opción](FormObjects/radio_overview.md) - [Regla](FormObjects/ruler.md) - [Selector](FormObjects/spinner.md) - [Separador](FormObjects/splitters.md) - [Pasos](FormObjects/stepper.md) - [Control de pestañas](FormObjects/tabControl.md) | Se está arrastrando un objeto |

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
