---
id: onBeforeDataEntry
title: On Before Data Entry
---

| Code | Puede ser llamado por                                                                                             | Definición                                                       |
| ---- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 41   | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Una celda de list box está a punto de cambiar al modo de edición |

## Descripción

Este evento se genera justo antes de que se edite una celda del list box (antes de que se muestre el cursor de entrada). Este evento permite al desarrollador, por ejemplo, mostrar un texto diferente dependiendo de si el usuario está en el modo de visualización o de edición.

When the cursor arrives in the cell, the `On Before Data Entry` event is generated in the list box or column method.

- Si, en el contexto de este evento, $0 se define como -1, la celda se considera como no editable. If the event was generated after **Tab** or **Shift+Tab** was pressed, the focus goes to either the next cell or the previous one, respectively.
- Si $0 no es -1 (por defecto $0 es 0), la celda se puede introducir y pasa al modo de edición.

See also [Managing entry](FormObjects/listbox_overview.md#managing-entry) section.
