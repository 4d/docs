---
id: onRowMoved
title: On Row Moved
---

| Code | Peut être appelé par                                                                                                                                   | Définition                                                               |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 34   | [List Box de type tableau](FormObjects/listbox_overview.md#array-list-boxes) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) | Une ligne de list box est déplacée par l'utilisateur par glisser-déposer |

## Description

Cet événement est généré lorsqu'une ligne de list box (de [type tableau uniquement](FormObjects/listbox_overview.md#array-list-boxes)) est déplacée par l'utilisateur à l'aide du glisser-déposer ([si autorisé](FormObjects/properties_Action.md#movable-rows) Il n'est pas généré si la ligne est glissée puis déposée à son emplacement initial.

La commande `LISTBOX MOVED ROW NUMBER` retourne la nouvelle position de la ligne.
