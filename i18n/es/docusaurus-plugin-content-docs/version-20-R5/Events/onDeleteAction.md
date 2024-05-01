---
id: onDeleteAction
title: On Delete Action
---

| Code | Puede ser llamado por                                                                           | Definición                              |
| ---- | ----------------------------------------------------------------------------------------------- | --------------------------------------- |
| 58   | [Hierarchical List](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) | El usuario intenta eliminar un elemento |

## Descripción

This event is generated each time a user attempts to delete the selected item(s) by pressing a deletion key (**Delete** or **Backspace**) or selecting a menu item whose associated standard action is 'Clear' (such as the **Clear** command in the **Edit** menu).

Tenga en cuenta que la generación del evento es la única acción que realiza 4D: el programa no borra ningún elemento. Es el desarrollador quien debe gestionar el borrado y los mensajes de advertencia previos que se muestren.
