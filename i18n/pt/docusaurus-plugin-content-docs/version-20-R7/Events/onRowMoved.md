---
id: onRowMoved
title: On Row Moved
---

| Code | Pode ser chamado por                                                                                                                                 | Definição                                                                |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 34   | [List Box de tipo array](FormObjects/listbox_overview.md#array-list-boxes) - [Columna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Uma linha do list box é movida pelo usuário através de arrastar e largar |

## Descrição

Este evento se genera cuando una línea de list box ([sólo tipo array](FormObjects/listbox_overview.md#array-list-boxes)) es movida por el usuario mediante la función de arrastrar y soltar ([si se permite](FormObjects/properties_Action.md#movable-rows). Não é gerado se a linha for arrastada e depois largada na sua localização inicial.

El comando `LISTBOX MOVED ROW NUMBER` devuelve la nueva posición de la línea.
