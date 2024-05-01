---
id: propertiesHierarchy
title: Hiérarchie
---

## List box hiérarchique

`Array type list boxes`

Cette propriété permet de définir que la list box doit être affichée sous forme hiérarchique. In the JSON form, this feature is triggered [when the _dataSource_ property value is an array](properties_Object.md#hierarchical-list-box), i.e. a collection.

Additional options (**Variable 1...10**) are available when the _Hierarchical List Box_ option is selected, corresponding to each _dataSource_ array to use as break column. A chaque saisie d’une valeur dans un champ, une nouvelle ligne est ajoutée. Jusqu’à 10 variables peuvent être définies. Ces variables définissent les niveaux hiérarchiques à afficher dans la première colonne.

See [Hierarchical list boxes](listbox_overview.md#hierarchical-list-boxes)

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                        |
| ---------- | --------------- | -------------------------------------------------------- |
| datasource | tableau chaîne  | Collection de noms de tableaux définissant la hiérarchie |

#### Objets pris en charge

[List Box](listbox_overview.md)
