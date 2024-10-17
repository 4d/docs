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

**VP INSERT TABLE COLUMNS** ( _vpAreaName_ : Text ; _tableName_ : Text ; _column_ : Integer {; _count_ : Integer {; _insertAfter_ : Integer {; _sheet_ : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Params -->

| Paramètres  | Type    |    | Description                                                                 |                  |
| ----------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName   | Text    | -> | Nom de table                                                                |                  |
| column      | Integer | -> | Index dans la table de la colonne de départ à insérer                       |                  |
| count       | Text    | -> | Nombre de colonnes à ajouter (doit être >0)              |                  |
| insertAfter | Integer | -> | `vk table insert before` ou `vk table insert after` _column_                |                  |
| sheet       | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

#### Description

La commande `VP INSERT TABLE COLUMNS` <!-- REF #_method_.VP INSERT TABLE COLUMNS.Summary --> insère une ou _count_ colonne(s) vide(s) dans le _tableName_ spécifié à l'index _column_ spécifié<!-- END REF -->.

Lorsqu'une colonne a été insérée avec cette commande, son contenu est généralement modifié à l'aide de la commande [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md).

Dans le paramètre _insertAfter_, vous pouvez passer une des constantes suivantes pour indiquer si la ou les colonnes doivent être insérées avant ou après l'index _column_ :

| Constante                | Valeur | Description                                                                                                                |
| ------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| `vk table insert before` | 0      | Insérer la(les) colonne(s) avant la _column_ (par défaut si omis) |
| `vk table insert after`  | 1      | Insérer la(les) colonne(s) après la _column_                                         |

Cette commande insère certaines colonnes dans la table _tableName_, PAS dans la feuille. The total number of columns of the sheet is not impacted by the command. Data present at the right of the table (if any) are automatically moved right according to the number of added columns.

Si _tableName_ n'existe pas ou s'il n'y a pas assez d'espace dans la feuille, rien ne se passe.

#### Exemple

Voir les exemples pour [VP INSERT TABLE ROWS](vp-insert-table-rows.md) et [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md).

#### Voir également

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
