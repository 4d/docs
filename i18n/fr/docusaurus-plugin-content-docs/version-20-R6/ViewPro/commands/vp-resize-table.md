---
id: vp-resize-table
title: VP RESIZE TABLE
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP RESIZE TABLE.Syntax -->

**VP RESIZE TABLE** ( *rangeObj* : Object; *tableName* : Text )<!-- END REF -->

<!-- REF #_method_.VP RESIZE TABLE.Params -->

| Paramètres | Type   |    | Description                |                  |
| ---------- | ------ | -- | -------------------------- | ---------------- |
| rangeObj   | Object | -> | Nouvelle plage de la table |                  |
| tableName  | Text   | -> | Nom de la table            | <!-- END REF --> |

#### Description

La commande `VP RESIZE TABLE` <!-- REF #_method_.VP RESIZE TABLE.Summary -->modifie la taille de la *tableName* par rapport à *rangeObj*<!-- END REF -->.

Les règles suivantes s'appliquent :

- Headers must remain in the same row and the resulting table range must overlap the original table range.
- If the row count of the resized table is inferior to the initial row count, values inside cropped rows or columns are kept if they were not bound to a [data context](vp-set-data-context.md), otherwise they are deleted.
- If the table expands on cells containing data:
  - if rows are added, data is deleted,
  - if columns are added, data are kept and are displayed in new columns.

If *tableName* does not exist, nothing happens.

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

You want to add one column before and after the table as well as two empty rows. Vous pouvez écrire :

```4d
VP RESIZE TABLE(VP Cells("ViewProArea"; 0; 1; 4; 6); "PeopleTable")
```

![](../../assets/en/ViewPro/table-resize.png)

#### Voir également

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Get table range](vp-get-table-range.md)
