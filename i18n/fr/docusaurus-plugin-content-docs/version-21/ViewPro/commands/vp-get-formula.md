---
id: vp-get-formula
title: VP Get formula
---

<!-- REF #_method_.VP Get formula.Syntax -->

**VP Get formula** ( *rangeObj* : Object) : Text<!-- END REF -->

<!-- REF #_method_.VP Get formula.Params -->

| Paramètres | Type   |                             | Description |                  |
| ---------- | ------ | --------------------------- | ----------- | ---------------- |
| rangeObj   | Object | ->                          | Objet plage |                  |
| Résultat   | Text   | <- | Formula     | <!-- END REF --> |

## Description

La commande `VP Get formula` <!-- REF #_method_.VP Get formula.Summary -->récupère la formule à partir d'une plage de cellules désignées<!-- END REF -->.

Dans *rangeObj*, passez une plage dont vous voulez récupérer la formule. Si *rangeObj* désigne plusieurs cellules ou plusieurs plages, la formule de la première cellule est retournée. Si *rangeObj* est une cellule qui ne contient pas de formule, la méthode retourne une chaîne vide.

## Exemple

```4d
  //définir une formule
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
 
$result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"
```

## Voir également

[VP Get formulas](vp-get-formulas.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
