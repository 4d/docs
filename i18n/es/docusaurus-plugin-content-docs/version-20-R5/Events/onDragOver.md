---
id: onDragOver
title: On Drag Over
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Definición                              |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 21   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Los datos se pueden soltar en un objeto |

## Descripción

The `On Drag Over` event is repeatedly sent to the destination object when the mouse pointer is moved over the object. Normalmente, en respuesta a este evento:

- Get the data and signatures found in the pasteboard (via the `GET PASTEBOARD DATA` command).
- Depending on the nature and type of data in the pasteboard, you **accept** or **reject** the drag and drop.

To **accept** the drag, the destination object method must return 0 (zero), so you write `$0:=0`.
To **reject** the drag, the object method must return -1 (minus one), so you write `$0:=-1`.
During an `On Drag Over` event, 4D treats the object method as a function. Si no se devuelve ningún resultado, 4D asume que el arrastre es aceptado.

Si acepta el arrastre, el objeto de destino se resalta. Si rechaza el arrastre, el destino no se resalta. Aceptar el arrastre no significa que los datos arrastrados vayan a ser insertados en el objeto de destino. It only means that if the mouse button was released at this point, the destination object would accept the dragged data and the [`On Drop`](onDrop.md) event would be fired.

If you do not process the `On Drag Over` event for a droppable object, that object will be highlighted for all drag over operations, no matter what the nature and type of the dragged data.

The `On Drag Over` event is the means by which you control the first phase of a drag-and-drop operation. No sólo puede probar si los datos arrastrados son de un tipo compatible con el objeto de destino, y luego aceptar o rechazar el arrastre; puede notificar simultáneamente al usuario de este hecho, porque 4D resalta (o no) el objeto de destino, basándose en su decisión.

The code handling an `On Drag Over` event should be short and execute quickly, because that event is sent repeatedly to the current destination object, due to the movements of the mouse.

#### Ver también

[`On Begin Drag Over`](onBeginDragOver.md)
