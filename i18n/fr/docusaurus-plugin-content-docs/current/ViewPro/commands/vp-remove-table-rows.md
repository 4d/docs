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

**VP REMOVE TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *sheet* : Integer }} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE ROWS.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName  | Text    | -> | Nom de table                                                                |                  |
| row        | Integer | -> | Indice dans la table de la ligne de départ à supprimer                      |                  |
| count      | Integer | -> | Nombre de lignes à supprimer (doit être >0)              |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

## Description

La commande `VP REMOVE TABLE ROWS` <!-- REF #_method_.VP REMOVE TABLE ROWS.Summary -->supprime une ou *count* ligne(s) de la *tableName* spécifiée à l'index *row* spécifié<!-- END REF -->. La commande supprime les valeurs et les styles.

Cette commande supprime les lignes de la table *tableName*, PAS de la feuille. Le nombre total de lignes de la feuille n'est pas impacté par la commande. Les données présentes sous la table (le cas échéant) sont automatiquement déplacées vers le haut en fonction du nombre de lignes supprimées.

Si la table *tableName* est liée à un [contexte de données](vp-set-data-context.md), la commande supprime le(s) élément(s) de la collection.

Si *tableName* n'existe pas, rien ne se passe.

## Exemple

Pour supprimer deux lignes à partir de la 3e ligne de la table "dataTable" :

```4d
VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)
```

## Voir également

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)
