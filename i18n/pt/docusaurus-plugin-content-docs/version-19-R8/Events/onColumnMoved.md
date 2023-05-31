---
id: onColumnMoved
title: On Column Moved
---

| Code | Pode ser chamado por                                                                                              | Definição                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 32   | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Uma coluna do list box é movida pelo utilizador através de arrastar e largar |


## Descrição

Este evento é gerado quando uma coluna do list box é movida pelo utilizador através de arrastar e largar ([se permitido](../FormObjects/properties_ListBox.md#locked-columns-and-static-columns)). Não é gerado se a coluna for arrastada e depois largada na sua localização inicial.

O comando `LISTBOX MOVED COLUMN NUMBER` devolve a nova posição da coluna. 