---
id: onDragOver
title: On Drag Over
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Definição                                   |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 21   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botão](FormObjects/button_overview.md) - [Grade de botões](FormObjects/buttonGrid_overview.md) - [Caixa de seleção](FormObjects/checkbox_overview.md) - [Lista suspensa](FormObjects/dropdownList_Overview.md) - [Lista Hierárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjectos/input_overview.md) - [Caixa de Lista](FormObjects/listbox_overview.md) - [Coluna de caixa de lista](FormObjects/listbox_overview.md#list-box-columns) - [Botão de imagens](FormObjects/pictureButton_overview.md) - [Menu de imagens pop-up](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de progresso](FormObjects/progressIndicador.md) - [Botão de Rádio](FormObjects/radio_overview.md) - [Régua](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Controle de tabulação](FormObjects/tabControl.md) | Os dados podem ser largados sobre um objeto |

## Descrição

O evento `Ao Arrastar Para` é repetidamente enviado para o objeto de destino quando o ponteiro do mouse é movido sobre o objeto. Em resposta a este evento, normalmente:

- Obtenha os dados e assinaturas encontrados no pasteboard (via o comando `GET PASTEBOARD DATA`).
- Dependendo da natureza e do tipo de dados na área de transferência, você **aceita** ou **rejeita** o arrastar e soltar.

Para **aceitar** o arrasto, o método do objeto de destino deve retornar 0 (zero), então você escreve `$0:=0`.
Para **rejeitar** o arrasto, o método do objeto deve retornar -1 (menos um), então você escreve `$0:=-1`.
Durante um evento `Ao Arrastar Exterior`, o 4D trata o método do objeto como uma função. Se nenhum resultado for devolvido, 4D assume que o arrasto é aceite.

Se aceitar o arrastamento, o objeto de destino é realçado. Se rejeitar o arrastamento, o destino não é realçado. Accepting the drag does not mean that the dragged data is going to be inserted into the destination object. Isso significa apenas que se o botão do mouse for solto neste ponto, o objeto de destino aceitaria os dados arrastados e o evento [`On Drop`](onDrop.md) seria disparado.

Se você não processar o evento `On Drag Over` para um objeto soltável, esse objeto será destacado para todas as operações de arrastar, não importa qual seja a natureza e o tipo dos dados arrastados.

O evento `On Drag Over` é a maneira pela qual você controla a primeira fase de uma operação de arrastar e soltar. Not only can you test whether the dragged data is of a type compatible with the destination object, and then accept or reject the drag; you can simultaneously notify the user of this fact, because 4D highlights (or not) the destination object, based on your decision.

O código que manipula um evento 'On Drag Over' deve ser curto e executar rapidamente, porque esse evento é enviado repetidamente para o objeto de destino atual, devido aos movimentos do mouse.

#### Veja também

[`On Begin Drag Over`](onBeginDragOver.md)
