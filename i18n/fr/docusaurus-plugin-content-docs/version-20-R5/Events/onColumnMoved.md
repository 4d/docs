---
id: onColumnMoved
title: On Column Moved
---

| Code | Peut être appelé par                                                                                                        | Définition                                                                 |
| ---- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 32   | [List Box](../FormObjects/listbox_overview.md) - [Colonne de List Box](../FormObjects/listbox_overview.md#list-box-columns) | Une colonne de list box est déplacée par l'utilisateur par glisser-déposer |

## Description

Cet événement est généré lorsqu'une colonne de list box est déplacée par l'utilisateur à l'aide du glisser-déposer ([s'il est autorisé](../FormObjects/properties_ListBox.md#locked-columns-and-static-columns)). Il n'est pas généré si la colonne est glissée puis déposée à son emplacement initial.

La commande `LISTBOX MOVED COLUMN NUMBER` retourne la nouvelle position de la colonne.
