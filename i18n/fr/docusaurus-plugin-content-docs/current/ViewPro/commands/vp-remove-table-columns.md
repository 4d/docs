---
id: vp-remove-table-columns
title: VP REMOVE TABLE COLUMNS
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Syntax -->

**VP REMOVE TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE COLUMNS.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName  | Text    | -> | Nom de table                                                                |                  |
| column     | Integer | -> | Indice dans la table de la colonne de départ à supprimer                    |                  |
| count      | Integer | -> | Nombre de colonnes à supprimer (doit être >0)            |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

## Description

La commande `VP REMOVE TABLE COLUMNS` <!-- REF #_method_.VP REMOVE TABLE COLUMNS.Summary -->supprime une ou *count* colonne(s) dans la *tableName* spécifiée à l'index *column* spécifié<!-- END REF -->. La commande supprime les valeurs et les styles.

La commande supprime les colonnes de la table *tableName*, PAS de la feuille. Le nombre total de colonnes de la feuille n'est pas impacté par la commande. Les données présentes à droite de la table (le cas échéant) sont automatiquement déplacées à gauche en fonction du nombre de colonnes supprimées.

Si *tableName* n'existe pas, rien ne se passe.

## Exemple

Pour supprimer deux colonnes à partir de la 3ème colonne de la table "dataTable" :

```4d
VP REMOVE TABLE COLUMNS("ViewProArea"; "dataTable"; 3; 2)
```

## Voir également

[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP REMOVE TABLE ROWS](vp-remove-table-rows.md)
