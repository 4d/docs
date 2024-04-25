---
id: vp-set-boolean-value
title: VP SET BOOLEAN VALUE
---

<!-- REF #_method_.VP SET BOOLEAN VALUE.Syntax -->

**VP SET BOOLEAN VALUE** ( _rangeObj_ : Object  ; _boolValue_ : Boolean) <!-- END REF -->

<!-- REF #_method_.VP SET BOOLEAN VALUE.Params -->

| Paramètres | Type    |    | Description               |                  |
| ---------- | ------- | -- | ------------------------- | ---------------- |
| rangeObj   | Object  | -> | Objet plage               |                  |
| boolValue  | Boolean | -> | Valeur du booléen à fixer | <!-- END REF --> |

#### Description

The `VP SET BOOLEAN VALUE` command <!-- REF #_method_.VP SET BOOLEAN VALUE.Summary -->assigns a specified boolean value to a designated cell range<!-- END REF -->.

In _rangeObj_, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. If _rangeObj_ includes multiple cells, the value specified will be repeated in each cell.

The _boolValue_ parameter allows you to pass the boolean value (**True** or **False**) that will be assigned to the _rangeObj_.

#### Exemple

```4d
//Fixez la valeur de la cellule à False
 VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```

#### Voir également

[VP SET VALUE](vp-set-value.md)
