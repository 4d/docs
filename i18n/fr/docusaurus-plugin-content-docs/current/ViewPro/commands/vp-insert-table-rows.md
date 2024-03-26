---
id: vp-insert-table-rows
title: VP INSERT TABLE ROWS
---

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajout         |

</details>

<!-- REF #_method_.VP INSERT TABLE ROWS.Syntax -->

**VP INSERT TABLE ROWS** ( _vpAreaName_ : Text ; _tableName_ : Text ; _row_ : Integer {; _count_ : Integer {; _insertAfter_ : Integer {; _sheet_ : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE ROWS.Params -->

| Paramètres  | Type    |    | Description                                                                 |                  |
| ----------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName   | Text    | -> | Nom de table                                                                |                  |
| row         | Integer | -> | Index in the table of the starting row to insert                            |                  |
| count       | Text    | -> | Number of rows to add (must be >0)                       |                  |
| insertAfter | Integer | -> | `vk table insert before` or `vk table insert after` _row_                   |                  |
| sheet       | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

#### Description

The `VP INSERT TABLE ROWS` command <!-- REF #_method_.VP INSERT TABLE ROWS.Summary -->inserts one or _count_ empty row(s) in the specified _tableName_ at the specified _row_ index<!-- END REF -->.

In the _insertAfter_ parameter, you can pass one of the following constants to indicate if the row(s) must be inserted before or after the _row_ index:

| Constante                | Valeur | Description                                                                               |
| ------------------------ | ------ | ----------------------------------------------------------------------------------------- |
| `vk table insert before` | 0      | Insert row(s) before the _row_ (default if omitted) |
| `vk table insert after`  | 1      | Insert row(s) after the _row_                                          |

This command inserts some rows in the _tableName_ table, NOT in the sheet. The total number of rows of the sheet is not impacted by the command. Data present below the table (if any) are automatically moved down according to the number of added rows.

If the _tableName_ table is bound to a [data context](vp-set-data-context.md), the command inserts new, empty element(s) in the collection.

If _tableName_ does not exist or if there is not enough space in the sheet, nothing happens.

#### Exemple

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

You want to insert two rows and two columns in the table, you can write:

```4d
VP INSERT TABLE ROWS("ViewProArea"; "PeopleTable"; 1; 2)
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 2)
```

![](../../assets/en/ViewPro/table-insert.png)

#### Voir également

[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP REMOVE TABLE ROWS](vp-remove-table-rows.md)
