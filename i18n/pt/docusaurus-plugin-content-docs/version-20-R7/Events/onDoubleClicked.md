---
id: onDoubleClicked
title: On Double Clicked
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Definição                          |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| 13   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) | Ocorreu um duplo clique num objeto |

## Descrição

O evento `On Double Clicked` é gerado quando o usuário faz duplo clique em um objeto. O período máximo de tempo que separa um duplo clique é definido nas preferências do sistema.

Se a propriedade do evento de objeto [`On Clicked`](onClicked.md) ou `On Double Clicked` for selecionada para um objeto, você pode detectar e lidar com os cliques dentro ou no objeto, usando o comando `FORM event` que retorna [`On Clicked`](onClicked.md) ou `On Double Clicked`, dependendo do caso.

Si se seleccionan ambos eventos para un objeto, se generará el evento `On Clicked` y luego el evento `On Double Clicked` cuando el usuario haga doble clic en el objeto.

### 4D View Pro

Este evento é gerado quando o usuário faz clique duplo em qualquer lugar em um documento 4D View Pro. En este contexto, el [objeto evento](overview.md#event-object) devuelto por el comando `FORM Event` contiene:

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