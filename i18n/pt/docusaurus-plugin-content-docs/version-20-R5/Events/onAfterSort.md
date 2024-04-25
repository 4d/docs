---
id: onAfterSort
title: On After Sort
---

| Code | Pode ser chamado por                                                                                              | Definição                                                                                 |
| ---- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 30   | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Uma ordenação standard acaba de ser efectuada numa coluna de um list box. |

## Descrição

This event is generated just after a standard sort is performed (_i.e._ it is NOT generated if $0 returns -1 in the [`On Header Click`](onHeaderClick.md) event). Esse mecanismo é útil para armazenar as direções da última classificação realizada pelo usuário. In this event, the `Self` command returns a pointer to the variable of the sorted column header.
