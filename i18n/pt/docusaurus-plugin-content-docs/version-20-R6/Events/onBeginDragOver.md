---
id: onBeginDragOver
title: On Begin Drag Over
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Definição                       |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| 17   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botão](FormObjects/button_overview.md) - [Grade de botões](FormObjects/buttonGrid_overview.md) - [Caixa de seleção](FormObjects/checkbox_overview.md) - [Lista suspensa](FormObjects/dropdownList_Overview.md) - Formulário - [Lista hierárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [Lista](FormObjects/listbox_overview.md) - [List Box](FormObjects/listbox_overview.md#list-box-columns) - [Botón con imagen](FormObjects/pictureButton_overview.md) - [Menu pop-up com imagem](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de progresso](FormObjects/progressIndicator.md) - [Botão de opção](FormObjects/radio_overview.md) - [Regra](FormObjects/ruler.md) - [Seletor](FormObjects/spinner.md) - [Separador](FormObjects/splitters.md) - [Etapas](FormObjects/stepper.md) - [Controle de tabulação](FormObjects/tabControl.md) | Um objecto está a ser arrastado |

## Descrição

O evento `Ao Começar Arrastar Novo` pode ser selecionado para quaisquer objetos de forma que possam ser arrastados. Ele é gerado em todos os casos em que o objeto tem a propriedade [Draggable](FormObjects/properties_Action.md#draggable). Ele pode ser chamado a partir do método do objeto de origem ou do método de formulário do objeto de origem.

> Ao contrário do evento de formulário [`On Drag Over`](onDragOver.md), o `On Begin Drag Over` é chamado no contexto do **objeto de origem** da ação de arrastar.

O evento `On Begin Drag Over` é útil para preparar a ação de arrastar. Pode ser usado para:

- Adicione dados e assinaturas ao pasteboard (via o comando `APPEND DATA TO PASTEBOARD`).
- Use um ícone personalizado durante a ação de arrastar (via o comando `SET DRAG ICON`).
- Aceitar ou recusar o arrastamento através de $0 no método do objeto arrastado.
  - Para indicar que as ações de arrastar são aceitas, o método do objeto de origem deve retornar 0 (zero); portanto, você deve executar `$0:=0`.
  - Para indicar que as ações de arrastar são recusadas, o método do objeto de origem deve retornar -1 (menos um); portanto, você deve executar `$0:=-1`.
  - Se nenhum resultado for retornado, 4D considera que as ações de arrastar são aceitas.

Os dados 4D são colocados na prancheta antes de chamar o evento. Por exemplo, no caso de arrastar sem a ação **Arrastar Automático**, o texto arrastado já está no quadro quando o evento é chamado.
