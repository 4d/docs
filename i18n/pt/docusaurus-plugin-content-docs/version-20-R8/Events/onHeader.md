---
id: onHeader
title: On Header
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Definição                                                                                 |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 5    | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botão](FormObjects/button_overview.md) - [Grade de botões](FormObjects/buttonGrid_overview.md) - [Caixa de seleção](FormObjects/checkbox_overview.md) - [Lista suspensa](FormObjects/dropdownList_Overview.md) - Formulário (somente formulário listado) - [Lista hierárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [Botão com imagem](FormObjects/pictureButton_overview.md) - [Menu pop-up com imagem](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de progresso](FormObjects/progressIndicator.md) - [Botão de opção](FormObjects/radio_overview.md) - [Regra](FormObjects/ruler.md) - [Seletor](FormObjects/spinner.md) - [Separador](FormObjects/splitters.md) - [Etapas](FormObjects/stepper.md) - [Controle de tabulação](FormObjects/tabControl.md) | A área de cabeçalho do formulário está prestes a ser impressa ou exibida. |

## Descrição

El evento `On Header` se llama cuando un registro está a punto de ser visualizado en un formulario de lista que se muestra vía `DISPLAY SELECTION` y `MODIFY SELECTION`.

> Este evento não pode ser selecionado para formulários projeto, está disponível apenas com **formulários tabela**.

Neste contexto, a seguinte sequência de chamadas para os métodos e eventos de formulário é ativada:

- Para cada objecto na área do cabeçalho:
  - Método objeto con el evento `On Header`
  - Método formulario con el evento `On Header`

> Os registros impressos são tratados usando o evento [`On Display Detail`](onDisplayDetail.md).

Llamar a un comando 4D que muestra una caja de diálogo desde el evento `On Header` no está permitido y provocará un error de sintaxis. Mais especificamente, os comandos em questão são: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, and `MODIFY SELECTION`.
