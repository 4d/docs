---
id: onColumnMoved
title: Sur déplacement colonne
---

| Code | Peut être appelé par                                                                                                  | Définition                                               |
| ---- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 32   | [List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) | A list box column is moved by the user via drag and drop |


## Description

Cet événement est généré lorsqu'une colonne de list box est déplacée par l'utilisateur à l'aide du glisser-déposer ([s'il est autorisé](FormObjects/propertiesListBox.html#locked-columns-and-static-columns)). It is not generated if the column is dragged and then dropped in its initial location.

The `LISTBOX MOVED COLUMN NUMBER` command returns the new position of the column. 