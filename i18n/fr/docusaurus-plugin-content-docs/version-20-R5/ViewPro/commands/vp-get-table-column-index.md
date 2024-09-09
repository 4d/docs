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

**VP Get table column index** ( _vpAreaName_ : Text ; _tableName_ : Text ; _columnName_ : Text {; _sheet_ : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get table column index.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName  | Text    | -> | Nom de table                                                                |                  |
| columnName | Text    | -> | Nom de la colonne de la table                                               |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | Integer | <- | Numéro d'indice de _columnName_                                             | <!-- END REF --> |

#### Description

La commande `VP Get table column index` <!-- REF #_method_.VP Get table column index. ummary -->retourne l'index du _columnName_ dans la table _tableName_<!-- END REF -->.

Dans _vpAreaName_, passez le nom de la zone 4D View Pro.

Dans _columnName_, passez le nom de la colonne de la table pour laquelle vous souhaitez obtenir l'index.

Dans _sheet_, passez le numéro de la page cible. Si aucun numéro n'est spécifié ou si vous passez -1, la commande s'applique à la feuille courante.

> La numérotation démarre à 0.

Si _tableName_ ou _columnName_ n'est pas trouvé, la commande retourne -1.

#### Exemple

```4d
	// Rechercher l'id colonne en fonction du nom de la colonne
var $id : Integer
$id:=VP Get table column index($area; $tableName; "Weight price")
	// Supprimer la colonne par id
VP REMOVE TABLE COLUMNS($area; $tableName; $id)
```

#### Voir également

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
