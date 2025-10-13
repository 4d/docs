---
id: vp-set-table-column-attributes
title: VP SET TABLE COLUMN ATTRIBUTES
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Syntax -->

**VP SET TABLE COLUMN ATTRIBUTES** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer ; *attributes* : Object {; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName  | Text    | -> | Nom de table                                                                |                  |
| column     | Integer | -> | Numéro de colonne de la table                                               |                  |
| attributes | Object  | -> | Attribut(s) à appliquer à *column*                       |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

## Description

La commande `VP SET TABLE COLUMN ATTRIBUTES` <!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES. ummary -->applique les *attributs* définis à la *colonne* dans le *tableName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro.

Dans le paramètre *attributes*, passez un objet qui contient les propriétés à définir :

| Propriété           | Type    | Description                                                                                                                                                                                                                              |
| ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataField           | text    | Nom de la propriété de la colonne de la table dans le contexte de données.                                                                                                                                               |
| name                | text    | Nom de la colonne de la table. Doit être unique dans la table. Si ce nom est déjà utilisé par une autre colonne, il n'est pas appliqué et un nom par défaut est automatiquement utilisé. |
| formula             | text    | Définit la formule pour chaque cellule de la colonne. Voir [Formules de référence structurées dans la documentation de SpreadJS](https://developer.mescius.com/spreadjs/docs/features/tablegen/structref)                |
| footerText          | text    | Valeur du pied de colonne.                                                                                                                                                                                               |
| footerFormula       | text    | Formule de pied de colonne.                                                                                                                                                                                              |
| filterButtonVisible | boolean | Définit si le bouton de filtre de la colonne de la table est affiché (par défaut `True` lors de la création de la table).                                                                             |

Dans *sheet*, passez le numéro de la page cible. Si aucun numéro n'est spécifié ou si vous passez -1, la commande s'applique à la feuille courante.

> La numérotation démarre à 0.

Si *tableName* n'est pas trouvé ou si *colonne* est supérieure au nombre de colonnes, la commande ne fait rien.

## Exemple

Vous créez une table avec un contexte de données :

```4d
var $context;$options : Object

$context:=New object()
$context.col:=New collection()
$context.col.push(New object("name"; "Smith"; "firstname"; "John"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "firstname"; "Jim"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "firstname"; "Maria"; "salary"; 10500))
VP SET DATA CONTEXT("ViewProArea"; $context)

	//Définition des colonnes de la table
$options:=New object()
$options.tableColumns:=New collection()
$options.tableColumns.push(New object("name"; "Last Name"; "dataField"; "name"))
$options.tableColumns.push(New object("name"; "Salary"; "dataField"; "salary"))

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 2; 3); "PeopleTable"; "col"; $options)
```

![](../../assets/en/ViewPro/table-inserta.png)

Vous souhaitez ensuite insérer une colonne contenant des données provenant du contexte de données et masquer certains boutons de filtrage :

```4d
	//insérer une colonne
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 1)

var $param : Object
$param:=New object()
	// Lier la colonne au champ firstname du datacontext
$param.dataField:="firstname"
	// Changer le nom par défaut de la colonne en "First name"
	// et cacher le bouton de filtrage
$param.name:="Prénom"
$param.filterButtonVisible:=False

VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 1; $param)

	// Masquer le bouton de filtrage de la première colonne
VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 0; \
	New object("filterButtonVisible"; False))

```

![](../../assets/en/ViewPro/table-insertb.png)

## Voir également

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)









