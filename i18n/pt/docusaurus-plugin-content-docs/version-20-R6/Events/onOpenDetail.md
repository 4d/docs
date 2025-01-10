---
id: onOpenDetail
title: On Open Detail
---

| Code | Pode ser chamado por                                     | Definição                                                                                                   |
| ---- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 25   | Formulario - [List Box](FormObjects/listbox_overview.md) | The detail form associated with the output form or with the list box is about to be opened. |

## Descrição

O evento `On Open Detail` pode ser usado nos seguintes contextos:

- **Formulários de saída**: um registro está prestes a ser exibido no formulário de detalhes associado ao formulário de saída. Este evento não pode ser selecionado para formulários projeto, está disponível apenas com **formulários tabela**.
- List box do [**tipo seleção**](FormObjects/listbox_overview.md#selection-list-boxes): esse evento é gerado quando um registro está prestes a ser exibido no formulário detalhado associado a um list box do tipo seleção (e antes que esse formulário seja aberto).

### Número de linha apresentado

O comando `Número de linha exibido` 4D funciona com o evento formulário `On Open Detail`. Ele retorna o número da linha sendo processada enquanto uma lista de registros ou linhas de list box é exibida na tela.
