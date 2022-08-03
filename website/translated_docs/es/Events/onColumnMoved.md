---
id: onColumnMoved
title: On Column Moved
---

| Code | Puede ser llamado por                                                                                                   | Definición                                                                       |
| ---- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 32   | [List Box](../FormObjects/listbox_overview.md) - [List Box Column](../FormObjects/listbox_overview.md#list-box-columns) | Una columna de list box es movida por el usuario por medio de arrastrar y soltar |


## Descripción

This event is generated when a column of the list box is moved by the user using drag and drop ([if allowed](../FormObjects/properties_ListBox.md#locked-columns-and-static-columns)). No se genera si la columna se arrastra y luego se suelta en su ubicación inicial.

El comando `LISTBOX MOVED COLUMN NUMBER` devuelve la nueva posición de la columna. 