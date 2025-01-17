---
id: onRowMoved
title: On Row Moved
---

| Code | Puede ser llamado por                                                                                                                                | Definición                                                                     |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 34   | [List Box de tipo array](FormObjects/listbox_overview.md#array-list-boxes) - [Columna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Una línea de list box es movida por el usuario por medio de arrastrar y soltar |

## Descripción

Este evento se genera cuando una línea de list box ([sólo tipo array](FormObjects/listbox_overview.md#array-list-boxes)) es movida por el usuario mediante la función de arrastrar y soltar ([si se permite](FormObjects/properties_Action.md#movable-rows). No se genera si la línea se arrastra y luego se suelta en su ubicación inicial.

El comando `LISTBOX MOVED ROW NUMBER` devuelve la nueva posición de la línea.
