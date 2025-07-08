---
id: onBeginDragOver
title: On Begin Drag Over
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Definição                       |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| 17   | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Um objecto está a ser arrastado |

## Descrição

O evento `Ao Começar Arrastar Novo` pode ser selecionado para quaisquer objetos de forma que possam ser arrastados. Ele é gerado em todos os casos em que o objeto tem a propriedade [Draggable](FormObjects/properties_Action.md#draggable). Ele pode ser chamado a partir do método do objeto de origem ou do método de formulário do objeto de origem.

> Ao contrário do evento de formulário [`On Drag Over`](onDragOver.md), o `On Begin Drag Over` é chamado no contexto do **objeto de origem** da ação de arrastar.

O evento `On Begin Drag Over` é útil para preparar a ação de arrastar. Pode ser usado para:

- Adicione dados e assinaturas ao pasteboard (via o comando `APPEND DATA TO PASTEBOARD`).
- Use um ícone personalizado durante a ação de arrastar (via o comando `SET DRAG ICON`).
- Accept or refuse dragging via the result of the method of the dragged object.
    - To indicate that drag actions are accepted, the method of the source object must return 0 (zero).
    - To indicate that drag actions are refused, the method of the source object must return -1 (minus one).
    - Se nenhum resultado for retornado, 4D considera que as ações de arrastar são aceitas.

Os dados 4D são colocados na prancheta antes de chamar o evento. Por exemplo, no caso de arrastar sem a ação **Arrastar Automático**, o texto arrastado já está no quadro quando o evento é chamado.
