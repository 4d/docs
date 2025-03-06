---
id: onBeginDragOver
title: On Begin Drag Over
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Definição                       |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| 17   | [Área 4D Write Pro](FormObjects/writeProArea_overview.md) - [Botão](FormObjects/button_overview.md) - [Grelha de botões](FormObjects/buttonGrid_overview.md) - [Caixa de seleção](FormObjects/checkbox_overview.md) - [Lista suspensa](FormObjects/dropdownList_Overview.md) - Formulário - [Lista hierárquica](FormObjects/list_overview.md#overview) - [Área de entrada](FormObjects/input_overview.md) -[List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) - [Botão imagem](FormObjects/pictureButton_overview.md) - [Imagen del menú emergente](FormObjects/picturePopupMenu_overview.md) - [Área de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicador de progresso](FormObjects/progressIndicator.md) - [Botão raio](FormObjects/radio_overview.md) - [Regua](FormObjects/ruler.md) -[Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab](FormObjects/tabControl.md) | Um objecto está a ser arrastado |


## Descrição

O evento de formulário `On Begin Drag Over` pode ser seleccionado para quaisquer objectos de formulário que possam ser arrastados. Ela é gerada em todos os casos em que o objeto tem a propriedade [Draggable](FormObjects/properties_Action.md#draggable) . Ele pode ser chamado a partir do método do objeto de origem ou do método de formulário do objeto de origem.

> Ao contrário do evento de formulário [`On Drag Over`](onDragOver.md) , o evento `On Begin Drag Over` é chamado no contexto do objeto de origem **** da ação de arrastar.

O evento `On Begin Drag Over` é útil para preparar a ação de arrastar. Pode ser usado para:

- Adicione dados e assinaturas ao pasteboard (por meio do comando `APPEND DATA TO PASTEBOARD`).
- Use um ícone personalizado durante a ação de arrastar (por meio do comando `SET DRAG ICON`).
- Aceitar ou recusar o arrastamento através de $0 no método do objeto arrastado.
    - Para indicar que as ações de arrastar são aceitas, o método do objeto de origem deve retornar 0 (zero); portanto, você deve executar `$0:=0`.
    - Para indicar que as ações de arrastar são recusadas, o método do objeto de origem deve retornar -1 (menos um); portanto, você deve executar `$0:=-1`.
    - Se nenhum resultado for retornado, 4D considera que as ações de arrastar são aceitas.

Os dados 4D são colocados na prancheta antes de chamar o evento. Por exemplo, no caso de arrastar sem a ação **Arrastar Automático** , o texto arrastado já está no quadro quando o evento é chamado.