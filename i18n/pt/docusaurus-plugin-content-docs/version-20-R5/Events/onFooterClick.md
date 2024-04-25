---
id: onFooterClick
title: On Footer Click
---

| Code | Pode ser chamado por                                                                                              | Definição                                            |
| ---- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 57   | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Ocorre um clique no rodapé de uma coluna de list box |

## Descrição

Este evento está disponível para um objeto list box ou de coluna de list box. Ele é gerado quando ocorre um clique no rodapé de uma coluna de list box. In this context, the `OBJECT Get pointer` command returns a pointer to the variable of the footer that is clicked. O evento é gerado para os cliques esquerdo e direito.

You can test the number of clicks made by the user by means of the `Clickcount` command.
