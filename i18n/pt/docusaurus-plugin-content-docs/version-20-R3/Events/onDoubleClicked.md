---
id: onDoubleClicked
title: On Double Clicked
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Definição                          |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| 13   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Ocorreu um duplo clique num objeto |


## Descrição

The `On Double Clicked` event is generated when the user double-clicks on an object. O período máximo de tempo que separa um duplo clique é definido nas preferências do sistema.

If the [`On Clicked`](onClicked.md) or `On Double Clicked` object event property is selected for an object, you can detect and handle the clicks within or on the object, using the `FORM event` command that returns [`On Clicked`](onClicked.md) or `On Double Clicked`, depending on the case.

Se ambos os eventos forem selecionados para um objeto, os eventos `On Clicked` e `On Double Clicked` serão gerados quando o usuário der duplo clique no objeto.

### 4D View Pro

This event is generated when the user double-clicks anywhere on a 4D View Pro document. Neste contexto, o  [objeto de evento](overview.md#event-object) retornado pelo comando `FORM Event` contém:

| Propriedade | Tipo          | Descrição                |
| ----------- | ------------- | ------------------------ |
| code        | inteiro longo | 13                       |
| description | text          | "On Double Clicked"      |
| objectName  | text          | Nome da área 4D View Pro |
| sheetName   | text          | Nome da folha do evento  |
| range       | object        | Intervalo de células     |

#### Exemplo

```4d
 If(FORM Event.code=On Double Clicked)
   $value:=VP Get value(FORM Event.range)
 End if
```