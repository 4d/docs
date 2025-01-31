---
id: propertiesHierarchy
title: Hiérarchie
---

## List box hiérarchique

`List box de type tableau`

Cette propriété permet de définir que la list box doit être affichée sous forme hiérarchique. Dans le formulaire JSON, cette fonctionnalité est déclenchée [lorsque la valeur de la propriété *dataSource* est un tableau](properties_Object.md#array-list-box), c'est-à-dire une collection.

Des options supplémentaires (**Variable 1...10**) sont disponibles lorsqu'une *List box hiérarchique* est définie, correspondant à chaque élément du tableau *dataSource* à utiliser comme colonne de rupture. A chaque saisie d’une valeur dans un champ, une nouvelle ligne est ajoutée. Jusqu’à 10 variables peuvent être définies. Ces variables définissent les niveaux hiérarchiques à afficher dans la première colonne.

Voir [List box hiérarchiques](listbox_overview.md#hierarchical-list-boxes)

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                        |
| ---------- | --------------- | -------------------------------------------------------- |
| datasource | tableau chaîne  | Collection de noms de tableaux définissant la hiérarchie |

#### Objets pris en charge

[List Box](listbox_overview.md)
