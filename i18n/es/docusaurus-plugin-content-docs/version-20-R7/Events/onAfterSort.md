---
id: onAfterSort
title: On After Sort
---

| Code | Puede ser llamado por                                                                                                 | Definición                                                                                |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 30   | [List Box](FormObjects/listbox_overview.md) - [Columna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Se acaba de realizar una ordenación estándar en una columna del list box. |

## Descripción

Este evento se genera justo después de realizar una ordenación estándar (_es decir_ NO se genera si $0 devuelve -1 en el evento [`On Header Click`](onHeaderClick.md)). Este mecanismo es útil para almacenar las direcciones de la última ordenación realizada por el usuario. En este caso, el comando `Self` devuelve un puntero a la variable del encabezado de la columna ordenada.
