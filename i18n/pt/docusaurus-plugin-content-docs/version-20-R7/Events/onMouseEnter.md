---
id: onMouseEnter
title: On Mouse Enter
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Definição                                           |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 35   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botão](FormObjects/button_overview.md) - [Grade de botões](FormObjects/buttonGrid_overview.md) - [Caixa de seleção](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Lista suspensa](FormObjects/dropdownList_Overview.md) - Formulário - [Lista hierárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [Botão com imagem](FormObjects/pictureButton_overview.md) - [Menu pop-up com imagem](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de progresso](FormObjects/progressIndicator.md) - [Botão de opção](FormObjects/radio_overview.md) - [Regra](FormObjects/ruler.md) - [Seletor](FormObjects/spinner.md) - [Separador](FormObjects/splitters.md) - [Etapas](FormObjects/stepper.md) - [Controle de tabulação](FormObjects/tabControl.md) | O cursor do rato entra na área gráfica de um objeto |

## Descrição

Esse evento é gerado uma vez, quando o cursor do mouse entra na área gráfica de um objeto do formulário.

O evento `On Mouse Enter` atualiza as variáveis sistema *MouseX* e *MouseY*.

Os objetos tornados invisíveis por meio do comando `OBJECT SET VISIBLE` ou da propriedade [Visibility](FormObjects/properties_Display.md#visibility) não geram esse evento.

### Chamar a pilha

Se o evento `On Mouse Enter` tiver sido verificado para o formulário, ele será gerado para cada objeto de formulário. Se for verificada para um objeto, é gerada apenas para esse objeto. Quando há objetos sobrepostos, o evento é gerado pelo primeiro objeto capaz de gerenciá-lo que for encontrado, seguindo a ordem do nível superior para o inferior.

### Veja também

- [`On Mouse Move`](onMouseMove.md)
- [`On Mouse Leave`](onMouseLeave.md)
