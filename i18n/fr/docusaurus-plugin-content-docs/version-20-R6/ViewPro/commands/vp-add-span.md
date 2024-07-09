---
id: vp-add-span
title: VP ADD SPAN
---

<!-- REF #_method_.VP ADD SPAN.Syntax -->

**VP ADD SPAN** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SPAN.Params -->

| Paramètres | Type   |    | Description |                  |
| ---------- | ------ | -- | ----------- | ---------------- |
| rangeObj   | Object | -> | Objet plage | <!-- END REF --> |

#### Description

The `VP ADD SPAN` command combines the cells in *rangeObj* as a single span of cells.

In *rangeObj*, pass a range object of cells. Les cellules de la plage sont jointes, afin de créer une cellule plus large qui s'étend sur plusieurs colonnes et/ou lignes. Vous pouvez passer plusieurs plages de cellules pour créer plusieurs fusions de cellules en même temps. A noter que si les plages de cellules se chevauchent, seule la première plage est utilisée.

> - Seules les données contenues dans la cellule supérieure gauche sont affichées. Les données des autres cellules combinées sont cachées jusqu'à ce que la fusion soit retirée.
> - Les données masquées, contenues dans les cellules fusionnées, sont accessibles via des formules (commençant par la cellule supérieure gauche).

#### Exemple

Pour fusionner les cellules First quarter et Second quarter avec les deux cellules côte à côte, et de fusionner la cellule South area avec les deux lignes en-dessous :

![initial-document](../../assets/en/ViewPro/vp-add-span.png)

```4d
 // First quarter range
 $q1:=VP Cells("ViewProArea";2;3;3;1)
 
  // Second quarter range
 $q2:=VP Cells("ViewProArea";5;3;3;1)
 
  // South area range
 $south:=VP Cells("ViewProArea";0;5;1;3)
 
 VP ADD SPAN(VP Combine ranges($q1;$q2;$south))
```

![vp-add-span-result](../../assets/en/ViewPro/vp-add-span-2.png)

#### Voir également

[4D View Pro Range Object Properties](../getting-started.md#using-range-objects)<br/>
[VP Get spans](vp-get-spans.md)<br/>
[VP REMOVE SPAN](vp-remove-span.md)
