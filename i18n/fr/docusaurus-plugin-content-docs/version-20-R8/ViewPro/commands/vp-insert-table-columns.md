---
id: vp-insert-table-columns
title: VP INSERT TABLE COLUMNS
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Syntax -->

**VP INSERT TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Params -->

| Paramètres  | Type    |    | Description                                                                 |                  |
| ----------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName   | Text    | -> | Nom de table                                                                |                  |
| column      | Integer | -> | Index dans la table de la colonne de départ à insérer                       |                  |
| count       | Integer | -> | Nombre de colonnes à ajouter (doit être >0)              |                  |
| insertAfter | Integer | -> | `vk table insert before` ou `vk table insert after` *column*                |                  |
| sheet       | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

#### Description

La commande `VP INSERT TABLE COLUMNS` <!-- REF #_method_.VP INSERT TABLE COLUMNS.Summary --> insère une ou *count* colonne(s) vide(s) dans le *tableName* spécifié à l'index *column* spécifié<!-- END REF -->.

Lorsqu'une colonne a été insérée avec cette commande, son contenu est généralement modifié à l'aide de la commande [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md).

Dans le paramètre *insertAfter*, vous pouvez passer une des constantes suivantes pour indiquer si la ou les colonnes doivent être insérées avant ou après l'index *column* :

| Constante                | Valeur | Description                                                                                                                |
| ------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| `vk table insert before` | 0      | Insérer la(les) colonne(s) avant la *column* (par défaut si omis) |
| `vk table insert after`  | 1      | Insérer la(les) colonne(s) après la *column*                                         |

Cette commande insère certaines colonnes dans la table *tableName*, PAS dans la feuille. The total number of columns of the sheet is not impacted by the command. Data present at the right of the table (if any) are automatically moved right according to the number of added columns.

Si *tableName* n'existe pas ou s'il n'y a pas assez d'espace dans la feuille, rien ne se passe.

#### Exemple

Voir les exemples pour [VP INSERT TABLE ROWS](vp-insert-table-rows.md) et [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md).

#### Voir également

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
