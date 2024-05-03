---
id: onRowMoved
title: On Row Moved
---

| Code | Pode ser chamado por                                                                                                                                 | Definição                                                                |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 34   | [List Box of the array type](FormObjects/listbox_overview.md#array-list-boxes) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Uma linha do list box é movida pelo usuário através de arrastar e largar |

## Descrição

This event is generated when a row of the list box ([array type only](FormObjects/listbox_overview.md#array-list-boxes)) is moved by the user using drag and drop ([if allowed](FormObjects/properties_Action.md#movable-rows). It is not generated if the row is dragged and then dropped in its initial location.

The `LISTBOX MOVED ROW NUMBER` command returns the new position of the row.
