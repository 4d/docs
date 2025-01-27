---
id: onDoubleClicked
title: On Double Clicked
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Definição                          |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| 13   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) - [Área 4D Write Pro](FormObjects/writeProArea_overview.md) - [Botão](FormObjects/button_overview.md) - [Grade de botões](FormObjects/buttonGrid_overview.md) - [Caixa de seleção](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Lista suspensa](FormObjects/dropdownList_Overview.md) - Formulário - [Lista herárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box ](FormObjects/listbox_overview.md#list-box-columns) - [Botão imagem](FormObjects/pictureButton_overview.md) - [Pop up menu imagem](FormObjects/picturePopupMenu_overview.md) - [Área de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicador de progresso ](FormObjects/progressIndicator.md) - [Botão rádio](FormObjects/radio_overview.md) - [Regra](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Controle de tabulação](FormObjects/tabControl.md) | Ocorreu um duplo clique num objeto |


## Descrição

O evento `On Double Clicked` é gerado quando o usuário faz duplo clique em um objeto. O período máximo de tempo que separa um duplo clique é definido nas preferências do sistema.

Se a propriedade de evento do objeto [`On Clicked`](onClicked.md) ou `On Double Clicked` é selecionada para um objeto, você pode detectar e lidar com os cliques dentro ou no objeto, usando o comando `FORM event` que retorna [`On Clicked`](onClicked.md) ou `On Double Clicked`, dependendo do caso.

Se ambos os eventos forem selecionados para um objeto, os eventos `On Clicked` e `On Double Clicked` serão gerados quando o usuário der duplo clique no objeto.

### 4D View Pro

Este evento é gerado quando o usuário faz clique duplo em qualquer lugar em um documento 4D View Pro. Neste contexto, o  [objeto de evento](overview.md#event-object) retornado pelo comando `FORM Event` contém:

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