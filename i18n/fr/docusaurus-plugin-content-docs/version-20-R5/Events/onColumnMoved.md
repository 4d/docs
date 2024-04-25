---
id: onColumnMoved
title: On Column Moved
---

| Code | Peut être appelé par                                                                                                    | Définition                                                                 |
| ---- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 32   | [List Box](../FormObjects/listbox_overview.md) - [List Box Column](../FormObjects/listbox_overview.md#list-box-columns) | Une colonne de list box est déplacée par l'utilisateur par glisser-déposer |

## Description

This event is generated when a column of the list box is moved by the user using drag and drop ([if allowed](../FormObjects/properties_ListBox.md#locked-columns-and-static-columns)). Il n'est pas généré si la colonne est glissée puis déposée à son emplacement initial.

The `LISTBOX MOVED COLUMN NUMBER` command returns the new position of the column.
