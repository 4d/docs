---
id: onMouseMove
title: On Mouse Move
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Definição                                                                                                                               |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 37   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botão](FormObjects/button_overview.md) - [Grade de botões](FormObjects/buttonGrid_overview.md) - [Caixa de seleção](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Lista suspensa](FormObjects/dropdownList_Overview.md) - Formulário - [Lista hierárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [Botão com imagem](FormObjects/pictureButton_overview.md) - [Menu pop-up com imagem](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de progresso](FormObjects/progressIndicator.md) - [Botão de opção](FormObjects/radio_overview.md) - [Regra](FormObjects/ruler.md) - [Seletor](FormObjects/spinner.md) - [Separador](FormObjects/splitters.md) - [Etapas](FormObjects/stepper.md) - [Controle de tabulação](FormObjects/tabControl.md) | O cursor do mouse move pelo menos um píxel OU uma tecla modificadora (Shift, Alt/Option, Shift Lock) foi pressionado |

## Descrição

Este evento é gerado:

- quando o cursor do rato se move pelo menos um píxel
- O cuando se ha presionado una tecla de modificación (**Mayús**, **Alt/Opción**, **Bloq Mayús**). Isso permite que você gerencie operações de arrastar e soltar, como copiar ou mover.

Se o evento é verificado somente para um objeto, ele é gerado somente quando o cursor está na área gráfica do objeto.

El evento `On Mouse Move` actualiza las variables sistema _MouseX_ y _MouseY_.

Os objetos tornados invisíveis por meio do comando `OBJECT SET VISIBLE` ou da propriedade [Visibility](FormObjects/properties_Display.md#visibility) não geram esse evento.

### Chamar a pilha

Si se ha marcado el evento `On Mouse Move` para el formulario, se genera para cada objeto de formulario. Se for verificada para um objeto, é gerada apenas para esse objeto. Quando há objetos sobrepostos, o evento é gerado pelo primeiro objeto capaz de gerenciá-lo que for encontrado, seguindo a ordem do nível superior para o inferior.

### Veja também

- [`On Mouse Enter`](onMouseEnter.md)
- [`On Mouse Leave`](onMouseLeave.md)
