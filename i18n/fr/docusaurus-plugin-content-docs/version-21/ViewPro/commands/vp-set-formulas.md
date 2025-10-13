---
id: vp-set-formulas
title: VP SET FORMULAS
---

<!-- REF #_method_.VP SET FORMULAS.Syntax -->

**VP SET FORMULAS** ( *rangeObj* : Object ; *formulasCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULAS.Params -->

| Paramètres  | Type       |    | Description             |                  |
| ----------- | ---------- | -- | ----------------------- | ---------------- |
| rangeObj    | Object     | -> | Objet plage de cellules |                  |
| formulasCol | Collection | -> | Collection de formules  | <!-- END REF --> |

## Description

La commande `VP SET FORMULAS` <!-- REF #_method_.VP SET FORMULAS.Summary -->attribue une collection de formules à partir de la plage de cellules spécifiée<!-- END REF -->.

Dans *rangeObj*, passez une plage de la cellule (créée avec [VP Cell](vp-cell.md)) dont la formule que vous voulez spécifier. Si *rangeObj* comprend plusieurs plages, seule la première plage est utilisée.

Le *formulesCol* est une collection à deux dimensions :

- La collection de premier niveau contient des sous-collections de formules. Chaque sous-collection définit une ligne.
- Chaque sous-collection définit les valeurs des cellules de la ligne. Les valeurs doivent être des éléments textuels contenant les formules à associer aux cellules.

> Si la formule est une chaîne de caractères, utilisez le point `.` comme séparateur numérique et la virgule `,` comme séparateur de paramètres.
> Si une méthode 4D est utilisée, elle doit être autorisée par la commande [`VP SET ALLOWED METHODS`](vp-set-allowed-methods.md).

Vous supprimez les formules dans *rangeObj* en les remplaçant par une chaîne vide ("").

## Exemple 1

```4d
$formulas:=New collection
$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // Première ligne
$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Deuxième ligne

 
VP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Définissez les cellules avec les formules
```

*myMethod* :

```4d
$0:=$1*3.33
```

![](../../assets/en/ViewPro/cmd_vpSetFormulas.PNG)

## Exemple 2

Pour supprimer des formules :

```4d
$formulas:=New collection
$formulas.push(New collection("";"")) // première collection
$formulas.push(New collection("";"")) // deuxième collection
 
VP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Attribuer aux cellules
```

## Voir également

[VP Get Formulas](vp-get-formulas.md)<br/>
[VP GET VALUES](vp-get-values.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET VALUES](vp-set-values.md)