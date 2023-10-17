---
id: onRowMoved
title: On Row Moved
---

| Code | Pode ser chamado por                                                                                                                            | Definição                                                                |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 34   | [Lis Box de tipo array](FormObjects/listbox_overview.md#array-Lis-boxes) - [Coluna de Lis Box](FormObjects/listbox_overview.md#Lis-box-columns) | Uma linha do list box é movida pelo usuário através de arrastar e largar |


## Descrição

This event is generated when a row of the list box ([array type only](FormObjects/listbox_overview.md#array-list-boxes)) is moved by the user using drag and drop ([if allowed](FormObjects/properties_Action.md#movable-rows). It is not generated if the row is dragged and then dropped in its initial location.

O comando `LISTBOX MOVED ROW NUMBER` devolve a nova posição da linha. 