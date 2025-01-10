---
id: onOpenDetail
title: On Open Detail
---

| Code | Pode ser chamado por                                     | Definição                                                                                   |
| ---- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 25   | Formulário - [List Box](FormObjects/listbox_overview.md) | The detail form associated with the output form or with the list box is about to be opened. |


## Descrição

O evento `On Open Detail` pode ser usado nos seguintes contextos:

- **Output forms**: A record is about to be displayed in the detail form associated with the output form. Este evento não pode ser selecionado para formulários projeto, está disponível apenas com **formulários tabela**.
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened).


### Número de linha apresentado

The `Displayed line number` 4D command works with the `On Open Detail` form event. Ele retorna o número da linha sendo processada enquanto uma lista de registros ou linhas de list box é exibida na tela.
