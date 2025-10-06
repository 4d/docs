---
id: onMouseEnter
title: On Mouse Enter
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Definição                                           |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 35   | [Área 4D Write Pro](FormObjects/writeProArea_overview.md) - [Botão](FormObjects/button_overview.md) - [Grelha de botões](FormObjects/buttonGrid_overview.md) - [Caixa de seleção](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Lista suspensa](FormObjects/dropdownList_Overview.md) - Formulário - [Lista hierárquica](FormObjects/list_overview.md) - [Área de entrada](FormObjects/input_overview.md) -[List Box](FormObjects/listbox_overview.md) - [Botão imagem](FormObjects/pictureButton_overview.md) - [Imagen del menú emergente](FormObjects/picturePopupMenu_overview.md) - [Área de plug-in](FormObjects/pluginArea_overview.md) - [Indicador de progresso](FormObjects/progressIndicator.md) - [Botão raio](FormObjects/radio_overview.md) - [Regra](FormObjects/ruler.md) -[Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab](FormObjects/tabControl.md) | O cursor do rato entra na área gráfica de um objeto |


## Descrição

Esse evento é gerado uma vez, quando o cursor do mouse entra na área gráfica de um objeto do formulário.

O evento `On Mouse Enter` atualiza as variáveis do sistema *MouseX* e *MouseY*.

Objects that are made invisible using the [`OBJECT SET VISIBLE`](../commands/object-set-visible) command or the [Visibility](FormObjects/properties_Display.md#visibility) property do not generate this event.


### Chamar a pilha

Se o evento `On Mouse Enter` tiver sido verificado para o formulário, ele será gerado para cada objeto de formulário. Se for verificada para um objeto, é gerada apenas para esse objeto. Quando há objetos sobrepostos, o evento é gerado pelo primeiro objeto capaz de gerenciá-lo que for encontrado, seguindo a ordem do nível superior para o inferior.

### Veja também

- [`On Mouse Move`](onMouseMove.md)
- [`On Mouse Leave`](onMouseLeave.md)