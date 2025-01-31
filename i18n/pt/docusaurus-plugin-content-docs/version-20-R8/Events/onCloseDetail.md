---
id: onCloseDetail
title: On Close Detail
---

| Code | Pode ser chamado por                                     | Definição                                                       |
| ---- | -------------------------------------------------------- | --------------------------------------------------------------- |
| 26   | Formulario - [List Box](FormObjects/listbox_overview.md) | Deixou o formulário detalhado e regressa ao formulário de saída |

## Descrição

O evento `On Close Detail` pode ser usado nos seguintes contextos:

- **Formulários de saída**: o formulário detalhado é fechado e o usuário retorna ao formulário lista. Este evento não pode ser selecionado para formulários projeto, está disponível apenas com **formulários tabela**.
- List box do [**tipo seleção**](FormObjects/listbox_overview.md#list-box-selection): este evento é gerado quando um registro exibido no [formulario detalhado](FormObjects/properties_ListBox.md#detail-form-name) associado a um list box do tipo seleção está prestes a ser fechado (independentemente se o registro foi modificado ou não).
