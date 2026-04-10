---
id: onClicked
title: On Clicked
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Definição                     |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| 4    | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Ocorreu um clique num objecto |


## Descrição

O evento `On Clicked` é gerado quando o usuário clicar em um objeto.

> Alguns objetos do formulário podem ser ativados com o teclado. Por exemplo, quando uma caixa de verificação recebe o foco, pode ser introduzida utilizando a barra de espaços. Nesse caso, o evento `On Clicked` ainda é gerado.

O evento `On Clicked` geralmente ocorre quando o botão do mouse for liberado. No entanto, há várias excepções:

- [Botões invisíveis](FormObjects/properties_Display.md#not-rendered): O evento `On Clicked` ocorre assim que o clique é feito e não espera que o botão do mouse seja liberado.
- [Réguas](FormObjects/ruler.md): Se a opção [Execute object method](FormObjects/properties_Action.md#execute-object-method) for definida como **true**, o evento `On Clicked` ocorrerá assim que o clique for feito.
- [Caixas de combinação](FormObjects/comboBox_overview.md): O evento `On Clicked` ocorre somente se o usuário selecionar outro valor no menu associado. Uma  [caixa de combinação](FormObjects/comboBox_overview.md) deve ser tratada como uma área de texto digitável cuja lista suspensa associada fornece valores padrão. Consequentemente, você lida com a entrada de dados em uma caixa de combinação por meio dos eventos `On Before Keystroke`, `On After Keystroke` e `On Data Change` .
- [Listas suspensas](FormObjects/dropdownList_Overview.md): O evento `On Clicked` ocorre somente se o usuário selecionar outro valor no menu. O evento `On Data Change` permite que você detecte a ativação do objeto quando um valor diferente do valor atual é selecionado.
- Quando uma célula de entrada da caixa de listagem está [sendo editada](FormObjects/listbox_overview.md#managing-entry), o evento `On Clicked` é gerado quando o botão do mouse é pressionado, o que permite usar o comando `Contextual click` , por exemplo.

No contexto de um evento `On Clicked` , você pode testar o número de cliques feitos pelo usuário por meio do comando `Clickcount` .

### On Clicked e On Double Clicked

Depois que a propriedade de evento de objeto `On Clicked` ou [`On Double Clicked`](onDoubleClicked.md) for selecionada para um objeto, você poderá detectar e tratar os cliques dentro ou no objeto usando o comando `FORM event` que retorna `On Clicked` ou [`On Double Clicked`](onDoubleClicked.md), dependendo do caso.

Se ambos os eventos forem selecionados para um objeto, os eventos `On Clicked` e `On Double Clicked` serão gerados quando o usuário der duplo clique no objeto.

### 4D View Pro

Este evento é gerado quando o usuário clica em qualquer lugar em um documento 4D View Pro. Neste contexto, o  [objeto de evento](overview.md#event-object) retornado pelo comando `FORM Event` contém:

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