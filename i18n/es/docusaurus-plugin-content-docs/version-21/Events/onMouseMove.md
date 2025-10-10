---
id: onMouseMove
title: On Mouse Move
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Definición                                                                                                                                     |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 37   | [Área 4D Write Pro](FormObjects/writeProArea_overview.md) - [Botón](FormObjects/button_overview.md) - [Rejilla de botones](FormObjects/buttonGrid_overview.md) - [Casilla de verificación](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Lista desplegable](FormObjects/dropdownList_Overview.md) - Form - [Lista jerárquica](FormObjects/list_overview.md) - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Botón con imagen](FormObjects/pictureButton_overview.md) - [Menú emergente con imagen](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md) - [Indicadores de progreso](FormObjects/progressIndicator.md) - [Botón de opción](FormObjects/radio_overview.md) - [Regla](FormObjects/ruler.md) - [Selector](FormObjects/spinner.md) - [Separador](FormObjects/splitters.md) - [Pasos](FormObjects/stepper.md) - [Control de pestañas](FormObjects/tabControl.md) | El cursor del ratón se mueve al menos un píxel O se ha presionado una tecla de modificación (Shift, Alt/Option, Shift Lock) |

## Descripción

Se genera este evento:

- cuando el cursor del ratón se mueve al menos un píxel
- O cuando se ha presionado una tecla de modificación (**Mayús**, **Alt/Opción**, **Bloq Mayús**). Esto permite gestionar las operaciones de arrastrar y soltar de tipo copiar o mover.

Si el evento se marca para un objeto solamente, se genera sólo cuando el cursor está dentro del área gráfica del objeto.

El evento `On Mouse Move` actualiza las variables sistema *MouseX* y *MouseY*.

Objects that are made invisible using the [`OBJECT SET VISIBLE`](../commands/object-set-visible) command or the [Visibility](FormObjects/properties_Display.md#visibility) property do not generate this event.

### Llamar la pila

Si se ha marcado el evento `On Mouse Move` para el formulario, se genera para cada objeto de formulario. Si se verifica para un objeto, se genera sólo para ese objeto. Cuando hay objetos superpuestos, el evento es generado por el primer objeto capaz de gestionarlo que se encuentra yendo en orden del nivel superior al inferior.

### Ver también

- [`On Mouse Enter`](onMouseEnter.md)
- [`On Mouse Leave`](onMouseLeave.md)