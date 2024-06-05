---
id: onFooterClick
title: On Footer Click
---

| Code | Pode ser chamado por                                                                                                  | Definição                                            |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 57   | [List Box](FormObjects/listbox_overview.md) - [Columna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Ocorre um clique no rodapé de uma coluna de list box |

## Descrição

Este evento está disponível para um objeto list box ou de coluna de list box. Ele é gerado quando ocorre um clique no rodapé de uma coluna de list box. En este contexto, el comando `OBJECT Get pointer` devuelve un puntero a la variable del pie de página que se ha presionado. O evento é gerado para os cliques esquerdo e direito.

Puede probar el número de clics realizados por el usuario mediante el comando `Clickcount`.
