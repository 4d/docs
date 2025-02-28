---
id: onMouseMove
title: On Mouse Move
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Definición                                                                                                                                     |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 37   | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | El cursor del ratón se mueve al menos un píxel O se ha presionado una tecla de modificación (Shift, Alt/Option, Shift Lock) |

## Descripción

Se genera este evento:

- cuando el cursor del ratón se mueve al menos un píxel
- O cuando se ha presionado una tecla de modificación (**Mayús**, **Alt/Opción**, **Bloq Mayús**). Esto permite gestionar las operaciones de arrastrar y soltar de tipo copiar o mover.

Si el evento se marca para un objeto solamente, se genera sólo cuando el cursor está dentro del área gráfica del objeto.

El evento `On Mouse Move` actualiza las variables sistema *MouseX* y *MouseY*.

Los objetos que se hacen invisibles utilizando el comando `OBJECT SET VISIBLE` o la propiedad [Visibilidad](FormObjects/properties_Display.md#visibility) no generan este evento.

### Llamar la pila

Si se ha marcado el evento `On Mouse Move` para el formulario, se genera para cada objeto de formulario. Si se verifica para un objeto, se genera sólo para ese objeto. Cuando hay objetos superpuestos, el evento es generado por el primer objeto capaz de gestionarlo que se encuentra yendo en orden del nivel superior al inferior.

### Ver también

- [`On Mouse Enter`](onMouseEnter.md)
- [`On Mouse Leave`](onMouseLeave.md)