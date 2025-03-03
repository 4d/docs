---
id: onMouseLeave
title: On Mouse Leave
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Definição                                          |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 36   | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | O cursor do rato deixa a área gráfica de um objeto |

## Descrição

Esse evento é gerado uma vez, quando o cursor do mouse deixa na área gráfica de um objeto.

El evento `On Mouse Leave` actualiza las variables sistema *MouseX* y *MouseY*.

Os objetos tornados invisíveis por meio do comando `OBJECT SET VISIBLE` ou da propriedade [Visibility](FormObjects/properties_Display.md#visibility) não geram esse evento.

### Chamar a pilha

Si se ha marcado el evento `On Mouse Leave` para el formulario, se genera para cada objeto de formulario. Se for verificada para um objeto, é gerada apenas para esse objeto. Quando há objetos sobrepostos, o evento é gerado pelo primeiro objeto capaz de gerenciá-lo que for encontrado, seguindo a ordem do nível superior para o inferior.

### Veja também

- [`On Mouse Move`](onMouseMove.md)
- [`On Mouse Leave`](onMouseLeave.md)