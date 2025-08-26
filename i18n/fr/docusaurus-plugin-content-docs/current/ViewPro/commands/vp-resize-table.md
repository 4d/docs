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

## Description

La commande `VP RESIZE TABLE` <!-- REF #_method_.VP RESIZE TABLE.Summary -->modifie la taille de la *tableName* par rapport à *rangeObj*<!-- END REF -->.

Les règles suivantes s'appliquent :

 - Les en-têtes doivent rester dans la même ligne et la plage de table résultante doit chevaucher la plage de table originale.
 - Si le nombre de lignes de la table redimensionnée est inférieur au nombre de lignes initiales, les valeurs à l'intérieur des lignes ou colonnes recadrées sont conservées si elles n'étaient pas liées à un [contexte de données](vp-set-data-context.md), sinon elles sont supprimées.
 - Si la table se développe sur des cellules contenant des données :
     - si des lignes sont ajoutées, les données sont supprimées,
     - si des colonnes sont ajoutées, les données sont conservées et affichées dans de nouvelles colonnes.

Si *tableName* n'existe pas, rien ne se passe.

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

Vous voulez ajouter une colonne avant et après la table ainsi que deux lignes vides. Vous pouvez écrire :

```4d
VP RESIZE TABLE(VP Cells("ViewProArea"; 0; 1; 4; 6); "PeopleTable")
```

![](../../assets/en/ViewPro/table-resize.png)

## Voir également

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Get table range](vp-get-table-range.md)
