---
id: propertiesHierarchy
title: Hiérarchie
---

## List box hiérarchique

`Array type list boxes`

Cette propriété permet de définir que la list box doit être affichée sous forme hiérarchique. In the JSON form, this feature is triggered [when the _dataSource_ property value is an array](properties_Object.md#array-list-box), i.e. a collection.

Des options supplémentaires (**Variable 1...10**) sont disponibles lorsqu'une _List box hiérarchique_ est définie, correspondant à chaque élément du tableau _dataSource_ à utiliser comme colonne de rupture. A chaque saisie d’une valeur dans un champ, une nouvelle ligne est ajoutée. Jusqu’à 10 variables peuvent être définies. Ces variables définissent les niveaux hiérarchiques à afficher dans la première colonne.

Voir [List box hiérarchiques](listbox_overview.md#hierarchical-list-boxes)

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                        |
| ---------- | --------------- | -------------------------------------------------------- |
| datasource | tableau chaîne  | Collection de noms de tableaux définissant la hiérarchie |

#### Objets pris en charge

[List Box](listbox_overview.md)
