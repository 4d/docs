---
id: vp-set-num-value
title: VP SET NUM VALUE
---

<!-- REF #_method_.VP SET NUM VALUE.Syntax -->

**VP SET NUM VALUE** ( *rangeObj* : Object ; *numberValue* : Number { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET NUM VALUE.Params -->

| Paramètres    | Type   |    | Description              |                  |
| ------------- | ------ | -- | ------------------------ | ---------------- |
| rangeObj      | Object | -> | Objet plage              |                  |
| numberValue   | Number | -> | Valeur du nombre à fixer |                  |
| formatPattern | Text   | -> | Format de la valeur      | <!-- END REF --> |

## Description

La commande `VP SET NUM VALUE` <!-- REF #_method_.VP SET NUM VALUE.Summary -->assigne une valeur numérique spécifique à une plage de cellules désignée<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellule(s) (créée par exemple avec [`VP Cell`](vp-cell.md) ou [`VP Column`](vp-column.md)) dont vous voulez spécifier la valeur. Si *rangeObj* inclut plusieurs cellules, la valeur spécifiée sera répétée dans chaque cellule.

Le paramètre *numberValue* indique une valeur numérique à assigner à *rangeObj*.

Le paramètre optionnel *formatPattern* définit un [modèle](../configuring.md#cell-format) pour le paramètre *numberValue*.

## Exemple

```4d
//Fixer la valeur de la cellule à 2
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)
 
//Définir la valeur de la cellule et la formater en dollars
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")
```

## Voir également

[Cell format](../configuring.md#cell-format)<br/>
[VP SET VALUE](vp-set-value.md)
