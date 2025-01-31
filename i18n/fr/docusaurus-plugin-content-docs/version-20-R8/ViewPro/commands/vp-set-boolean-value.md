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

#### Description

The `VP SET BOOLEAN VALUE` command <!-- REF #_method_.VP SET BOOLEAN VALUE.Summary -->assigns a specified boolean value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *boolValue* parameter allows you to pass the boolean value (**True** or **False**) that will be assigned to the *rangeObj*.

#### Exemple

```4d
//Fixez la valeur de la cellule à False
 VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```

#### Voir également

[VP SET VALUE](vp-set-value.md)
