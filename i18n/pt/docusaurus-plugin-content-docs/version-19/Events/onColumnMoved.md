---
id: onColumnMoved
title: On Column Moved
---

| Code | Pode ser chamado por                                                                                              | Definição                                                |
| ---- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 32   | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | A list box column is moved by the user via drag and drop |


## Descrição

This event is generated when a column of the list box is moved by the user using drag and drop ([if allowed](FormObjects/propertiesListBox.html#locked-columns-and-static-columns)). It is not generated if the column is dragged and then dropped in its initial location.

O comando `LISTBOX MOVED COLUMN NUMBER` devolve a nova posição da coluna. 