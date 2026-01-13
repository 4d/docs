---
id: vp-set-formula
title: VP SET FORMULA
---

<!-- REF #_method_.VP SET FORMULA.Syntax -->

**VP SET FORMULA** ( *rangeObj* : Object ; *formula* : Text { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULA.Params -->

| Paramètres    | Type   |    | Description           |                  |
| ------------- | ------ | -- | --------------------- | ---------------- |
| rangeObj      | Object | -> | Objet plage           |                  |
| formula       | Text   | -> | Formule ou méthode 4D |                  |
| formatPattern | Text   | -> | Format du champ       | <!-- END REF --> |

## Description

La commande `VP SET FORMULA` <!-- REF #_method_.VP SET FORMULA.Summary -->assigne une formule spécifiée ou une méthode 4D à une plage de cellules désignées<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellule(s) (créée par exemple avec [`VP Cell`](vp-cell.md) ou [`VP Column`](vp-column.md)) dont vous voulez spécifier la valeur. Si *rangeObj* comprend plusieurs cellules, la formule spécifiée sera liée à chaque cellule.

Le paramètre *formula* spécifie une formule ou un nom de méthode 4D à affecter à la *rangeObj*.

> Si *formula* est une chaîne de caractères, utilisez le point `.` comme séparateur numérique et la virgule `,` comme séparateur de paramètres.
> Si une méthode 4D est utilisée, elle doit être autorisée par la commande [`VP SET ALLOWED METHODS`](vp-set-allowed-methods.md).

Le *formatPattern* facultatif définit un [pattern](../configuring.md#cell-format) pour la *formula*.

Vous supprimez la formule dans *rangeObj* en la remplaçant par une chaîne vide ("").

## Exemple 1

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
```

## Exemple 2

Pour supprimer la formule :

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"")
```

## Exemple 3

```4d
VP SET FORMULA($range; "SUM(A1,B7,C11)") //"," pour séparer les paramètres
```

## Voir également

[Cell format](../configuring.md#cell-format)<br/>
[VP Get Formula](vp-get-formula.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUE](vp-set-value.md)