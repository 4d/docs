---
id: onOpenDetail
title: On Open Detail
---

| Code | Pode ser chamado por                                     | Definição                                                                                        |
| ---- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 25   | Formulário - [List Box](FormObjects/listbox_overview.md) | O formulário detalhado associado ao formulário de saída ou o list box está prestes a ser aberto. |


## Descrição

O evento `On Open Detail` pode ser usado nos seguintes contextos:

- **Formulários de saída**: um registro está prestes a ser exibido no formulário de detalhes associado ao formulário de saída. Este evento não pode ser selecionado para formulários projeto, está disponível apenas com **formulários tabela**.
- List box [**seleção**](FormObjects/listbox_overview.md#selection-list-boxes): este evento é gerado quando um registro está prestes a ser exibido no formulário de detalhes associado a um list box seleção (e antes que este formulário seja aberto).


### Número de linha apresentado

O comando 4D `Displayed line number` funciona com o evento formulário `On Open Detail`. Ele retorna o número da linha sendo processada enquanto uma lista de registros ou linhas de list box é exibida na tela.
