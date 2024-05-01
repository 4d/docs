---
id: onAfterSort
title: On After Sort
---

| Code | Puede ser llamado por                                                                                             | Definición                                                                                |
| ---- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 30   | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Se acaba de realizar una ordenación estándar en una columna del list box. |

## Descripción

This event is generated just after a standard sort is performed (_i.e._ it is NOT generated if $0 returns -1 in the [`On Header Click`](onHeaderClick.md) event). Este mecanismo es útil para almacenar las direcciones de la última ordenación realizada por el usuario. In this event, the `Self` command returns a pointer to the variable of the sorted column header.
