---
id: vp-remove-table-rows
title: VP REMOVE TABLE ROWS
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP REMOVE TABLE ROWS.Syntax -->

**VP REMOVE TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE ROWS.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName  | Text    | -> | Nom de table                                                                |                  |
| row        | Integer | -> | Indice dans la table de la ligne de départ à supprimer                      |                  |
| count      | Integer | -> | Number of rows to remove (must be >0)                    |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

## Description

The `VP REMOVE TABLE ROWS` command <!-- REF #_method_.VP REMOVE TABLE ROWS.Summary -->removes one or *count* row(s) from the specified *tableName* at the specified *row* index<!-- END REF -->. La commande supprime les valeurs et les styles.

This command removes rows from the *tableName* table, NOT from the sheet. Le nombre total de lignes de la feuille n'est pas impacté par la commande. Les données présentes sous la table (le cas échéant) sont automatiquement déplacées vers le haut en fonction du nombre de lignes supprimées.

If the *tableName* table is bound to a [data context](vp-set-data-context.md), the command removes element(s) from the collection.

If *tableName* does not exist, nothing happens.

## Exemple

Pour supprimer deux lignes à partir de la 3e ligne de la table "dataTable" :

```4d
VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)
```

## Voir également

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)
