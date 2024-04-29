---
id: onClicked
title: On Clicked
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Definição                     |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| 4    | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Ocorreu um clique num objecto |

## Descrição

The `On Clicked` event is generated when the user clicks on an object.

> Alguns objetos do formulário podem ser ativados com o teclado. Por exemplo, quando uma caixa de verificação recebe o foco, pode ser introduzida utilizando a barra de espaços. In such a case, the `On Clicked` event is still generated.

The `On Clicked` event usually occurs once the mouse button is released. No entanto, há várias excepções:

- [Invisible buttons](FormObjects/properties_Display.md#not-rendered): The `On Clicked` event occurs as soon as the click is made and does not wait for the mouse button to be released.
- [Rulers](FormObjects/ruler.md): If the [Execute object method](FormObjects/properties_Action.md#execute-object-method) option is set to **true**, the `On Clicked` event occurs as soon as the click is made.
- [Combo boxes](FormObjects/comboBox_overview.md): The `On Clicked` event occurs only if the user selects another value in the associated menu. A [combo box](FormObjects/comboBox_overview.md) must be treated as an enterable text area whose associated drop-down list provides default values. Consequently, you handle data entry within a combo box through the `On Before Keystroke`, `On After Keystroke` and `On Data Change` events.
- [Drop-down lists](FormObjects/dropdownList_Overview.md): The `On Clicked` event occurs only if the user selects another value in the menu. The `On Data Change` event allows you to detect the activation of the object when a value different from the current value is selected
- When a list box input cell is [being edited](FormObjects/listbox_overview.md#managing-entry), the `On Clicked` event is generated when the mouse button is pressed, allowing to use the `Contextual click` command for example.

In the context of an `On Clicked` event, you can test the number of clicks made by the user by means of the `Clickcount` command.

### On Clicked e On Double Clicked

After the `On Clicked` or [`On Double Clicked`](onDoubleClicked.md) object event property is selected for an object, you can detect and handle the clicks within or on the object, using the `FORM event` command that returns `On Clicked` or [`On Double Clicked`](onDoubleClicked.md), depending on the case.

If both events are selected for an object, the `On Clicked` and then the `On Double Clicked` events will be generated when the user double-clicks the object.

### 4D View Pro

Este evento é gerado quando o usuário clica em qualquer lugar em um documento 4D View Pro. On this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| Propriedade | Tipo          | Descrição                |
| ----------- | ------------- | ------------------------ |
| code        | inteiro longo | On Clicked               |
| description | text          | "On Clicked"             |
| objectName  | text          | Nome da área 4D View Pro |
| sheetName   | text          | Nome da folha do evento  |
| range       | object        | Intervalo de células     |

#### Exemplo

```4d
 If(FORM Event.code=On Clicked)
    VP SET CELL STYLE(FORM Event.range;New object("backColor";"green"))
 End if
```
