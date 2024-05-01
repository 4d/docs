---
id: onRowMoved
title: On Row Moved
---

| Code | Peut être appelé par                                                                                                                                 | Définition                                                               |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 34   | [List Box of the array type](FormObjects/listbox_overview.md#array-list-boxes) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Une ligne de list box est déplacée par l'utilisateur par glisser-déposer |

## Description

This event is generated when a row of the list box ([array type only](FormObjects/listbox_overview.md#array-list-boxes)) is moved by the user using drag and drop ([if allowed](FormObjects/properties_Action.md#movable-rows). Il n'est pas généré si la ligne est glissée puis déposée à son emplacement initial.

The `LISTBOX MOVED ROW NUMBER` command returns the new position of the row.
