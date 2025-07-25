---
id: vp-set-boolean-value
title: VP SET BOOLEAN VALUE
---

<!-- REF #_method_.VP SET BOOLEAN VALUE.Syntax -->

**VP SET BOOLEAN VALUE** ( *rangeObj* : Object  ; *boolValue* : Boolean) <!-- END REF -->

<!-- REF #_method_.VP SET BOOLEAN VALUE.Params -->

| Paramètres | Type    |    | Description               |                  |
| ---------- | ------- | -- | ------------------------- | ---------------- |
| rangeObj   | Object  | -> | Objet plage               |                  |
| boolValue  | Boolean | -> | Valeur du booléen à fixer | <!-- END REF --> |

## Description

La commande `VP SET BOOLEAN VALUE` <!-- REF #_method_.VP SET BOOLEAN VALUE.Summary -->assigne une valeur booléenne spécifiée à une plage de cellules désignées<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellule(s) (créée par exemple avec [`VP Cell`](vp-cell.md) ou [`VP Column`](vp-column.md)) dont vous voulez spécifier la valeur. Si *rangeObj* inclut plusieurs cellules, la valeur spécifiée sera répétée dans chaque cellule.

Le paramètre *boolValue* vous permet de passer la valeur booléenne (**True** ou **False**) qui sera assignée à *rangeObj*.

## Exemple

```4d
//Fixez la valeur de la cellule à False
 VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```

## Voir également

[VP SET VALUE](vp-set-value.md)