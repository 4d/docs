---
id: vp-set-values
title: VP SET VALUES
---

<!-- REF #_method_.VP SET VALUES.Syntax -->

**VP SET VALUES** ( *rangeObj* : Object ; *valuesCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUES.Params -->

| Paramètres | Type       |    | Description           |                  |
| ---------- | ---------- | -- | --------------------- | ---------------- |
| rangeObj   | Object     | -> | Objet plage           |                  |
| valuesCol  | Collection | -> | Collection de valeurs | <!-- END REF --> |

## Description

La commande `VP SET VALUES` <!-- REF #_method_.VP SET VALUES.Summary --> attribue une collection de valeurs commençant à la plage de cellules spécifiée<!-- END REF -->.

Dans *rangeObj*, passez une plage pour la cellule (créée avec [`VP Cell`](vp-cell.md)) dont vous voulez spécifier la valeur. La cellule définie dans *rangeObj* est utilisée pour déterminer le point de départ.

> - Si *rangeObj* n'est pas une plage de cellules, seule la première cellule de la plage est utilisée.
> - Si *rangeObj* comprend plusieurs plages, seule la première cellule de la première plage est utilisée.

Le paramètre *valuesCol* est bidimensionnel :

- La collection de premier niveau contient des sous-collections de valeurs. Chaque sous-collection définit une ligne. Passez une collection vide pour sauter une ligne.
- Chaque sous-collection définit les valeurs des cellules de la ligne. Les valeurs peuvent être de type entier long, réel, booléen, texte, date, null ou objet. Si la valeur est un objet, elle peut avoir les propriétés suivantes :

| Propriété | Type                                     | Description                                            |
| --------- | ---------------------------------------- | ------------------------------------------------------ |
| value     | Integer, Real, Boolean, Text, Date, Null | Valeur dans la cellule (sauf heure) |
| time      | Real                                     | Valeur heure (en secondes)          |

## Exemple

```4d
$param:=New collection
$param.push(New collection(1;2;3;False)) //première ligne, 4 valeurs
$param.push(New collection) //deuxième rangée, intouchée
$param.push(New collection(4;5;Null;"hello";"world")) // troisième ligne, 5 valeurs
$param.push(New collection(6;7;8;9)) // quatrième ligne, 4 valeurs
$param.push(New collection(Null;New object("value";Current date;"time";42))) //cinquième ligne, 1 valeur
   
VP SET VALUES(VP Cell("ViewProArea";2;1);$param)
```

![](../../assets/en/ViewPro/cmd_vpSetValues.PNG)

## Voir également

[VP Get formulas](vp-get-formulas.md)<br/>
[VP Get value](vp-get-value.md)<br/>
[VP Get Values](vp-get-values.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUE](vp-set-value.md)
