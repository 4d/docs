---
id: vp-insert-table-rows
title: VP INSERT TABLE ROWS
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP INSERT TABLE ROWS.Syntax -->

**VP INSERT TABLE ROWS** ( *vpAreaName* : Text ; *tableName* : Text ; *row* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE ROWS.Params -->

| Paramètres  | Type    |    | Description                                                                 |                  |
| ----------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName   | Text    | -> | Nom de table                                                                |                  |
| row         | Integer | -> | Indice dans la table de la ligne de départ à insérer                        |                  |
| count       | Integer | -> | Nombre de lignes à ajouter (doit être >0)                |                  |
| insertAfter | Integer | -> | `vk table insert before` ou `vk table insert after` *row*                   |                  |
| sheet       | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

## Description

La commande `VP INSERT TABLE ROWS` <!-- REF #_method_.VP INSERT TABLE ROWS.Summary -->insère une ou *count* ligne(s) vide(s) dans la *tableName* spécifiée à l'index *row* spécifié<!-- END REF -->.

Dans le paramètre *insertAfter*, vous pouvez passer l'une des constantes suivantes pour indiquer si la ou les lignes doivent être insérées avant ou après l'index *row* :

| Constante                | Valeur | Description                                                                                                        |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------ |
| `vk table insert before` | 0      | Insérer la(les) ligne(s) avant *row* (par défaut si omis) |
| `vk table insert after`  | 1      | Insérer la(les) ligne(s) après *row*                                         |

Cette commande insère des lignes dans la table *tableName*, PAS dans la feuille. Le nombre total de lignes de la feuille n'est pas impacté par la commande. Les données présentes sous la table (le cas échéant) sont automatiquement déplacées vers le bas en fonction du nombre de lignes ajoutées.

Si la table *tableName* est liée à un [contexte de données](vp-set-data-context.md), la commande insère de nouveaux élément(s) vides dans la collection.

Si *tableName* n'existe pas ou s'il n'y a pas assez d'espace dans la feuille, rien ne se passe.

## Exemple

Vous créez une table avec un contexte de données :

```4d
var $context : Object
$context:=New object()

$context.col:=New collection
$context.col.push(New object("name"; "Smith"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "salary"; 10500))

VP SET DATA CONTEXT("ViewProArea"; $context)

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")
```

![](../../assets/en/ViewPro/table-base.png)

Vous voulez insérer deux lignes et deux colonnes dans la table, vous pouvez écrire :

```4d
VP INSERT TABLE ROWS("ViewProArea"; "PeopleTable"; 1; 2)
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 2)
```

![](../../assets/en/ViewPro/table-insert.png)

## Voir également

[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP REMOVE TABLE ROWS](vp-remove-table-rows.md)