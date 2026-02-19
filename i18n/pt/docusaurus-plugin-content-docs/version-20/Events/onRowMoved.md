---
id: onRowMoved
title: On Row Moved
---

| Code | Pode ser chamado por                                                                                                              | Definição                                                                |
| ---- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 34   | [List Box of the array type](FormObjects/listbox_overview.md#array-list-boxes) - [List Box Column](FormObjects/listbox-column.md) | Uma linha do list box é movida pelo usuário através de arrastar e largar |


## Descrição

Este evento é gerado quando uma linha de list box ([tipo array apenas](FormObjects/listbox_overview.md#array-list-boxes)) é movido pelo usuário usando arrastar e soltar ([se permitido](FormObjects/properties_Action.md#movable-rows)). Não é gerado se a linha for arrastada e depois largada na sua localização inicial.

O comando `LISTBOX MOVED ROW NUMBER` devolve a nova posição da linha. 