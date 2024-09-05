---
id: vp-get-table-column-index
title: VP Get table column index
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP Get table column index.Syntax -->

**VP Get table column index** ( *vpAreaName* : Text ; *tableName* : Text ; *columnName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get table column index.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName  | Text    | -> | Nom de table                                                                |                  |
| columnName | Text    | -> | Nom de la colonne de la table                                               |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | Integer | <- | Index of *columnName*                                                       | <!-- END REF --> |

#### Description

The `VP Get table column index` command <!-- REF #_method_.VP Get table column index.Summary -->returns the index of the *columnName* in the *tableName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

In *columnName*, pass the name of the table column for which you want to get the index.

In *sheet*, pass the index of the target sheet. Si aucun numéro n'est spécifié ou si vous passez -1, la commande s'applique à la feuille courante.

> La numérotation démarre à 0.

If *tableName* or *columnName* is not found, the command returns -1.

#### Exemple

```4d
	// Search the column id according the column name
var $id : Integer
$id:=VP Get table column index($area; $tableName; "Weight price")
	// Remove the column by id
VP REMOVE TABLE COLUMNS($area; $tableName; $id)
```

#### Voir également

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
