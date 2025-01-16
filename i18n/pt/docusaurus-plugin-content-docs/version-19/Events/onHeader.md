---
id: onHeader
title: On Header
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Definição                                                                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 5    | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botão ](FormObjects/button_overview.md) - [Grade de botões](FormObjects/buttonGrid_overview.md) - [Caixa de seleção](FormObjects/checkbox_overview.md) - [Lista suspensa](FormObjects/dropdownList_Overview.md) - Formulário (formulário somente lista) - [Lista herárquica](FormObjects/list_overview.md#overview) - [Área de entrada](FormObjects/input_overview.md) - [Botão imagem](FormObjects/pictureButton_overview.md) - [Imagem do menu pop-up](FormObjects/picturePopupMenu_overview.md) - [Área de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicador de progresso](FormObjects/progressIndicator.md) - [Botão de rádio](FormObjects/radio_overview.md) - [Regra](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Guia](FormObjects/tabControl.md) | A área de cabeçalho do formulário está prestes a ser impressa ou exibida. |


## Descrição

O evento `On Header` é chamado quando um registro está prestes a ser exibido em um formulário de lista exibido através de <`DISPLAY SELECTION` e `MODIFY SELECTION`.

> Este evento não pode ser selecionado para formulários projeto, está disponível apenas com **formulários tabela**.

Neste contexto, a seguinte sequência de chamadas para os métodos e eventos de formulário é ativada:

- Para cada objecto na área do cabeçalho:
    - Método objecto com evento `On Header`
    - Método formulário com o evento`On Header`

> Registros impressos são tratados usando o evento [`On Display Detail`](onDisplayDetail.md).

Chamar um comando 4D que exibe uma caixa de diálogo a partir do evento `On Header` não é permitido e causará um erro de sintaxe. Mais especificamente, os comandos em questão são: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, e `MODIFY SELECTION`.