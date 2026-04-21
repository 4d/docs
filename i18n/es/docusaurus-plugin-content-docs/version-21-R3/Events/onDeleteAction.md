---
id: onDeleteAction
title: On Delete Action
---

| Code | Puede ser llamado por                                                                          | Definición                              |
| ---- | ---------------------------------------------------------------------------------------------- | --------------------------------------- |
| 58   | [Lista jerárquica](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) | El usuario intenta eliminar un elemento |

## Descripción

Este evento se genera cada vez que un usuario intenta eliminar los elementos seleccionados presionando una tecla de eliminación (**Borrar** o **Retroceso**) o seleccionando un elemento de menú cuya acción estándar asociada es 'Borrar' (como el comando **Borrar** del menú **Edición**).

Tenga en cuenta que la generación del evento es la única acción que realiza 4D: el programa no borra ningún elemento. Es el desarrollador quien debe gestionar el borrado y los mensajes de advertencia previos que se muestren.
