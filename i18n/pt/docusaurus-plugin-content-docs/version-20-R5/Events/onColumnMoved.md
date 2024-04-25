---
id: onColumnMoved
title: On Column Moved
---

| Code | Pode ser chamado por                                                                                                    | Definição                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 32   | [List Box](../FormObjects/listbox_overview.md) - [List Box Column](../FormObjects/listbox_overview.md#list-box-columns) | Uma coluna do list box é movida pelo utilizador através de arrastar e largar |

## Descrição

This event is generated when a column of the list box is moved by the user using drag and drop ([if allowed](../FormObjects/properties_ListBox.md#locked-columns-and-static-columns)). Não é gerado se a coluna for arrastada e depois largada na sua localização inicial.

The `LISTBOX MOVED COLUMN NUMBER` command returns the new position of the column.
