---
id: onColumnMoved
title: On Column Moved
---

| Code | Pode ser chamado por                                                                                                 | Definição                                                                    |
| ---- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 32   | [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Uma coluna do list box é movida pelo utilizador através de arrastar e largar |


## Descrição

Este evento é gerado quando uma coluna de list box é movida pelo usuário usando arrastar e soltar ([se permitido](FormObjects/propertiesListBox.html#locked-columns-and-static-columns)). Não é gerado se a coluna for arrastada e depois largada na sua localização inicial.

O comando `LISTBOX MOVED COLUMN NUMBER` devolve a nova posição da coluna. 