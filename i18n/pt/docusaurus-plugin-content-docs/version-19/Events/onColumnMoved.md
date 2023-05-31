---
id: onColumnMoved
title: On Column Moved
---

| Code | Pode ser chamado por                                                                                                 | Definição                                                                    |
| ---- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 32   | [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Uma coluna do list box é movida pelo utilizador através de arrastar e largar |


## Descrição

This event is generated when a column of the list box is moved by the user using drag and drop ([if allowed](FormObjects/propertiesListBox.html#locked-columns-and-static-columns)). Não é gerado se a coluna for arrastada e depois largada na sua localização inicial.

O comando `LISTBOX MOVED COLUMN NUMBER` devolve a nova posição da coluna. 