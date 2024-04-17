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

**VP SET TABLE COLUMN ATTRIBUTES** ( _vpAreaName_ : Text ; _tableName_ : Text ; _column_ : Integer ; _attributes_ : Object {; _sheet_ : Integer } )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName  | Text    | -> | Nom de table                                                                |                  |
| column     | Integer | -> | Numéro de colonne de la table                                               |                  |
| attributes | Object  | -> | Attribute(s) to apply to the _column_                    |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

#### Description

The `VP SET TABLE COLUMN ATTRIBUTES` command <!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Summary -->applies the defined _attributes_ to the _column_ in the _tableName_<!-- END REF -->.

In _vpAreaName_, pass the name of the 4D View Pro area.

In the _attributes_ parameter, pass an object that contains the properties to set:

| Propriété           | Type    | Description                                                                                                                                                                                                                              |
| ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataField           | text    | Nom de la propriété de la colonne de la table dans le contexte de données.                                                                                                                                               |
| name                | text    | Nom de la colonne de la table. Doit être unique dans la table. Si ce nom est déjà utilisé par une autre colonne, il n'est pas appliqué et un nom par défaut est automatiquement utilisé. |
| formula             | text    | Définit la formule pour chaque cellule de la colonne. See [Structured Reference Formulas in the SpreadJS documentation](https://developer.mescius.com/spreadjs/docs/features/tablegen/structref)                         |
| footerText          | text    | Valeur du pied de colonne.                                                                                                                                                                                               |
| footerFormula       | text    | Formule de pied de colonne.                                                                                                                                                                                              |
| filterButtonVisible | boolean | Sets whether the table column's filter button is displayed (default is `True` when the table is created).                                                                                             |

In _sheet_, pass the index of the target sheet. Si aucun numéro n'est spécifié ou si vous passez -1, la commande s'applique à la feuille courante.

> La numérotation démarre à 0.

If _tableName_ is not found or if _column_ is higher than the number of columns, the command does nothing.

#### Exemple

Vous créez une table avec un contexte de données :

```4d
var $context;$options : Object

$context:=New object()
$context.col:=New collection()
$context.col.push(New object("name"; "Smith"; "firstname"; "John"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "firstname"; "Jim"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "firstname"; "Maria"; "salary"; 10500))
VP SET DATA CONTEXT("ViewProArea"; $context)

	//Define the columns for the table
$options:=New object()
$options.tableColumns:=New collection()
$options.tableColumns.push(New object("name"; "Last Name"; "dataField"; "name"))
$options.tableColumns.push(New object("name"; "Salary"; "dataField"; "salary"))

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 2; 3); "PeopleTable"; "col"; $options)
```

![](../../assets/en/ViewPro/table-inserta.png)

Vous souhaitez ensuite insérer une colonne contenant des données provenant du contexte de données et masquer certains boutons de filtrage :

```4d
	//insert a column
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 1)

var $param : Object
$param:=New object()
	// Bind the column to the firstname field from the datacontext
$param.dataField:="firstname"
	// Change the default name of the column to "First name"
	// and hide the filter button
$param.name:="First Name"
$param.filterButtonVisible:=False

VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 1; $param)

	// Hide the filter button of the first column
VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 0; \
	New object("filterButtonVisible"; False))

```

![](../../assets/en/ViewPro/table-insertb.png)

#### Voir également

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)
