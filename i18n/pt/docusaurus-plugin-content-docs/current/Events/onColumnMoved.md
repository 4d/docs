---
id: onColumnMoved
title: On Column Moved
---

| Code | Pode ser chamado por                                                                                                     | Definição                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| 32   | [List Box](../FormObjects/listbox_overview.md) - [Columna List Box](../FormObjects/listbox_overview.md#list-box-columns) | Uma coluna do list box é movida pelo utilizador através de arrastar e largar |

## Descrição

Este evento se genera cuando una columna de list box es movida por el usuario utilizando la función de arrastrar y soltar ([si se permite](../FormObjects/properties_ListBox.md#locked-columns-and-static-columns)). Não é gerado se a coluna for arrastada e depois largada na sua localização inicial.

El comando `LISTBOX MOVED COLUMN NUMBER` devuelve la nueva posición de la columna.
