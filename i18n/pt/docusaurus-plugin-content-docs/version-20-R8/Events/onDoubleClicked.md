---
id: onDoubleClicked
title: On Double Clicked
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Definição                          |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| 13   | [Àrea 4D View Pro](FormObjects/viewProArea_overview.md) - [Botão](FormObjects/button_overview.md) - [Grade de botões](FormObjects/buttonGrid_overview.md) - [Caixa de seleção](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - Formulario - [Lista Hierárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listObjects/listbox_overview.md) - [Coluna List Box](FormObjects/listbox_overview.md#list-box-columns) - [Botão Imagen](FormObjects/pictureButton_overview.md) - [Menu imagens pop-up](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de progresso](FormObjects/progressIndicador.md) - [Botão rádio](FormObjects/radio_overview.md) - [Régua](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Controle de tabulação](FormObjects/tabControl.md) | Ocorreu um duplo clique num objeto |

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
