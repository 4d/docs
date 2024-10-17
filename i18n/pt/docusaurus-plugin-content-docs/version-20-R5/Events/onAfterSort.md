---
id: onAfterSort
title: On After Sort
---

| Code | Pode ser chamado por                                                                                                  | Definição                                                                                 |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 30   | [List Box](FormObjects/listbox_overview.md) - [Columna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Uma ordenação standard acaba de ser efectuada numa coluna de um list box. |

## Descrição

Este evento é gerado logo após a execução de um tipo padrão (\*i.e. NÃO é gerado se $0 retorna -1 no evento [`On Header Click`](onHeaderClick.md)). Esse mecanismo é útil para armazenar as direções da última classificação realizada pelo usuário. En este caso, el comando `Self` devuelve un puntero a la variable del encabezado de la columna ordenada.
