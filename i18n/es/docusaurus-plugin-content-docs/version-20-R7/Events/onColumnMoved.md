---
id: onColumnMoved
title: On Column Moved
---

| Code | Puede ser llamado por                                                                                                    | Definición                                                                       |
| ---- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| 32   | [List Box](../FormObjects/listbox_overview.md) - [Columna List Box](../FormObjects/listbox_overview.md#list-box-columns) | Una columna de list box es movida por el usuario por medio de arrastrar y soltar |

## Descripción

Este evento se genera cuando una columna de list box es movida por el usuario utilizando la función de arrastrar y soltar ([si se permite](../FormObjects/properties_ListBox.md#locked-columns-and-static-columns)). No se genera si la columna se arrastra y luego se suelta en su ubicación inicial.

El comando `LISTBOX MOVED COLUMN NUMBER` devuelve la nueva posición de la columna.
