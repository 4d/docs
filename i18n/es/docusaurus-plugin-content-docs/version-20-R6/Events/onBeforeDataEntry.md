---
id: onBeforeDataEntry
title: On Before Data Entry
---

| Code | Puede ser llamado por                                                                                                 | Definición                                                       |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 41   | [List Box](FormObjects/listbox_overview.md) - [Columna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Una celda de list box está a punto de cambiar al modo de edición |

## Descripción

Este evento se genera justo antes de que se edite una celda del list box (antes de que se muestre el cursor de entrada). Este evento permite al desarrollador, por ejemplo, mostrar un texto diferente dependiendo de si el usuario está en el modo de visualización o de edición.

Cuando el cursor llega a la celda, se genera el evento `On Before Data Entry` en el list box o método de la columna.

- Si, en el contexto de este evento, $0 se define como -1, la celda se considera como no editable. Si el evento se generó después de presionar **Tab** o **Mayús+Tab**, el foco pasa a la siguiente celda o a la anterior, respectivamente.
- Si $0 no es -1 (por defecto $0 es 0), la celda se puede introducir y pasa al modo de edición.

Ver también la sección [Gestión de entradas](FormObjects/listbox_overview.md#managing-entry).
