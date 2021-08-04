---
id: onBeforeDataEntry
title: On Before Data Entry
---

| Code | Puede ser llamado por                                                                                                 | Definición                                         |
| ---- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 41   | [List Box](FormObjects/listbox_overview.md) - [Columna de List Box](FormObjects/listbox_overview.md#list-box-columns) | A list box cell is about to change to editing mode |


## Descripción

Este evento se genera justo antes de que se edite una celda del list box (antes de que se muestre el cursor de entrada). Este evento permite al desarrollador, por ejemplo, mostrar un texto diferente dependiendo de si el usuario está en el modo de visualización o de edición.

Cuando el cursor llega a la celda, se genera el evento `On Before Data Entry` en el list box o método de la columna.

- Si, en el contexto de este evento, $0 se define como -1, la celda se considera como no editable. Si el evento se generó después de presionar **Tab** o **Mayús+Tab**, el foco pasa a la siguiente celda o a la anterior, respectivamente.
- If $0 is not -1 (by default $0 is 0), the cell is enterable and switches to editing mode.

See also [Managing entry](FormObjects/listbox_overview.md#managing-entry) section.