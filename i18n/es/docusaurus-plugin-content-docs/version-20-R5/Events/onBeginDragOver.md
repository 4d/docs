---
id: onBeginDragOver
title: On Begin Drag Over
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Definición                    |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| 17   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Se está arrastrando un objeto |

## Descripción

The `On Begin Drag Over` form event can be selected for any form objects that can be dragged. It is generated in every case where the object has the [Draggable](FormObjects/properties_Action.md#draggable) property. Se puede llamar desde el método del objeto fuente o desde el método formulario del objeto fuente.

> Unlike the [`On Drag Over`](onDragOver.md) form event, `On Begin Drag Over` is called within the context of the **source object** of the drag action.

The `On Begin Drag Over` event is useful for preparing of the drag action. Puede utilizarse para:

- Add data and signatures to the pasteboard (via the `APPEND DATA TO PASTEBOARD` command).
- Use a custom icon during the drag action (via the `SET DRAG ICON` command).
- Aceptar o rechazar el arrastre vía $0 en el método del objeto arrastrado.
  - To indicate that drag actions are accepted, the method of the source object must return 0 (zero); you must therefore execute `$0:=0`.
  - To indicate that drag actions are refused, the method of the source object must return -1 (minus one); you must therefore execute `$0:=-1`.
  - Si no se devuelve ningún resultado, 4D considera que las acciones de arrastre son aceptadas.

Los datos 4D se colocan en el portapapeles antes de llamar al evento. For example, in the case of dragging without the **Automatic Drag** action, the dragged text is already in the pasteboard when the event is called.
