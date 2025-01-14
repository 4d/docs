---
id: onPrintingFooter
title: On Printing Footer
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Definição                                                  |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 7    | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botão](FormObjects/button_overview.md) - [Grelha de botões](FormObjects/buttonGrid_overview.md) - [Caixa de seleção](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Lista suspensa](FormObjects/dropdownList_Overview.md) - Formulário - [Lista hierárquica](FormObjects/list_overview.md) - [Área de entrada](FormObjects/input_overview.md) - [Botão imagem](FormObjects/pictureButton_overview.md) - [Imagen del menú emergente](FormObjects/picturePopupMenu_overview.md) - [Área de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicador de progresso](FormObjects/progressIndicator.md) - [Botão de raio](FormObjects/radio_overview.md) - [Regra](FormObjects/ruler.md) -[Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab](FormObjects/tabControl.md) | A área de rodapé do formulário está prestes a ser impressa |


## Descrição

O evento `On Printing Footer` só pode ser usado no contexto de um **formulário de saída**. É acionado quando a área do rodapé o formulário de saída está prestes a ser impresso, para você poder avaliar os valores de rodapé.

Este evento pode ser acionado no contexto do comando `PRINT SELECTION`.

> Este evento não pode ser selecionado para formulários projeto, está disponível apenas com **formulários tabela**.

