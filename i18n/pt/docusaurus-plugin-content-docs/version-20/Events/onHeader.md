---
id: onHeader
title: On Header
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Definição                                                                 |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 5    | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form (list form only) - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | A área de cabeçalho do formulário está prestes a ser impressa ou exibida. |


## Descrição

O evento `On Header` é chamado quando um registro está prestes a ser exibido em um formulário de lista exibido através de <`DISPLAY SELECTION` e `MODIFY SELECTION`.

> Este evento não pode ser selecionado para formulários projeto, está disponível apenas com **formulários tabela**.

Neste contexto, a seguinte sequência de chamadas para os métodos e eventos de formulário é ativada:

- Para cada objecto na área do cabeçalho:
    - Método objecto com evento `On Header`
    - Método formulário com o evento`On Header`

> Registros impressos são tratados usando o evento [`On Display Detail`](onDisplayDetail.md).

Chamar um comando 4D que exibe uma caixa de diálogo a partir do evento `On Header` não é permitido e causará um erro de sintaxe. Mais especificamente, os comandos em questão são: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, e `MODIFY SELECTION`.