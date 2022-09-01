---
id: propertiesHierarchy
title: Hiérarchie
---

## List box hiérarchique

`List box de type tableau`

This property specifies that the list box must be displayed in hierarchical form. In the JSON form, this feature is triggered [when the *dataSource* property value is an array](properties_Object.md#hierarchical-list-box), i.e. a collection.

Additional options (**Variable 1...10**) are available when the *Hierarchical List Box* option is selected, corresponding to each *dataSource* array to use as break column. Each time a value is entered in a field, a new row is added. Up to 10 variables can be specified. These variables set the hierarchical levels to be displayed in the first column.

Voir [List box hiérarchiques](listbox_overview.md#hierarchical-list-boxes)

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                        |
| ---------- | --------------- | -------------------------------------------------------- |
| datasource | tableau chaîne  | Collection de noms de tableaux définissant la hiérarchie |

#### Objets pris en charge

[List Box](listbox_overview.md)
