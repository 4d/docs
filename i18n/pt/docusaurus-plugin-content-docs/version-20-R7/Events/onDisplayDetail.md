---
id: onDisplayDetail
title: On Display Detail
---

| Code | Pode ser chamado por                                     | Definição                                                                                                         |
| ---- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 8    | Formulario - [List Box](FormObjects/listbox_overview.md) | A record is about to be displayed in a list form or a row is about to be displayed in a list box. |

## Descrição

O evento `On Display Detail` pode ser usado nos seguintes contextos:

### Formulário de saída

Um registro está prestes a ser exibido em um formulário de lista exibido via `DISPLAY SELECTION` e `MODIFY SELECTION`.

> Este evento não pode ser selecionado para formulários projeto, está disponível apenas com **formulários tabela**.

In this context, the following sequence of calls to methods and form events is triggered:

- Para cada registo:
  - Para cada objecto na área de detalhes:
    - Método objecto com o evento `On Display Detail`
  - Método formulário com o evento `On Display Detail`

> A área do cabeçalho é tratada usando o evento [`On Header`](onHeader.md).

Chamar um comando 4D que exibe uma caixa de diálogo a partir do evento `On Exibir Detalhe` não é permitido e causará um erro de sintaxe. Mais especificamente, os comandos em questão são: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, and `MODIFY SELECTION`.

### List box seleção

Este evento é gerado quando uma linha de um [**tipo de seleção**](FormObjects/listbox_overview.md#selection-list-boxes) é exibida.

### Número de linha apresentado

O comando `Número de linha exibido` 4D funciona com o evento de formulário `Detalhes de Exibição`. It returns the number of the row being processed while a list of records or list box rows is displayed on screen.
