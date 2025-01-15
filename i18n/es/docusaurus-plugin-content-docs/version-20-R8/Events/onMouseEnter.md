---
id: onMouseEnter
title: On Mouse Enter
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Definición                                                |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| 35   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botón](FormObjects/button_overview.md) - [Rejilla de botones](FormObjects/buttonGrid_overview.md) - [Casilla de verificación](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Lista desplegable](FormObjects/dropdownList_Overview.md) - Form - [Lista jerárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Botón con imagen](FormObjects/pictureButton_overview.md) - [Menú emergente con imagen](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de progreso](FormObjects/progressIndicator.md) - [Botón de opción](FormObjects/radio_overview.md) - [Regla](FormObjects/ruler.md) - [Selector](FormObjects/spinner.md) - [Separador](FormObjects/splitters.md) - [Pasos](FormObjects/stepper.md) - [Control de pestañas](FormObjects/tabControl.md) | El cursor del ratón entra en el área gráfica de un objeto |

## Descripción

Este evento se genera una vez, cuando el cursor del ratón entra en el área gráfica de un objeto del formulario.

El evento `On Mouse Enter` actualiza las variables sistema _MouseX_ y _MouseY_.

Los objetos que se hacen invisibles utilizando el comando `OBJECT SET VISIBLE` o la propiedad [Visibilidad](FormObjects/properties_Display.md#visibility) no generan este evento.

### Llamar la pila

Si se ha marcado el evento `On Mouse Enter` para el formulario, se genera para cada objeto de formulario. Si se verifica para un objeto, se genera sólo para ese objeto. Cuando hay objetos superpuestos, el evento es generado por el primer objeto capaz de gestionarlo que se encuentra yendo en orden del nivel superior al inferior.

### Ver también

- [`On Mouse Move`](onMouseMove.md)
- [`On Mouse Leave`](onMouseLeave.md)
