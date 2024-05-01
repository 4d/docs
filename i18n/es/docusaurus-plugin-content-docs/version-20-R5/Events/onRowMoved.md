---
id: onRowMoved
title: On Row Moved
---

| Code | Puede ser llamado por                                                                                                                                | Definición                                                                     |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 34   | [List Box of the array type](FormObjects/listbox_overview.md#array-list-boxes) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Una línea de list box es movida por el usuario por medio de arrastrar y soltar |

## Descripción

This event is generated when a row of the list box ([array type only](FormObjects/listbox_overview.md#array-list-boxes)) is moved by the user using drag and drop ([if allowed](FormObjects/properties_Action.md#movable-rows). No se genera si la línea se arrastra y luego se suelta en su ubicación inicial.

The `LISTBOX MOVED ROW NUMBER` command returns the new position of the row.
