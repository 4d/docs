---
id: onAfterSort
title: On After Sort
---

| Code | Puede ser llamado por                                                                                                 | Definición                                                      |
| ---- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 30   | [List Box](FormObjects/listbox_overview.md) - [Columna de List Box](FormObjects/listbox_overview.md#list-box-columns) | A standard sort has just been carried out in a list box column. |


## Descripción

This event is generated just after a standard sort is performed (*i.e.* it is NOT generated if $0 returns -1 in the [`On Header Click`](onHeaderClick.md) event). This mechanism is useful for storing the directions of the last sort performed by the user. In this event, the `Self` command returns a pointer to the variable of the sorted column header.
