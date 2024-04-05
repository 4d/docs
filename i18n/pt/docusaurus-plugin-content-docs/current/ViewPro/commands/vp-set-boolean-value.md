---
id: vp-set-boolean-value
title: VP SET BOOLEAN VALUE
---

<!-- REF #_method_.VP SET BOOLEAN VALUE.Syntax -->

**VP SET BOOLEAN VALUE** ( _rangeObj_ : Object  ; _boolValue_ : Boolean) <!-- END REF -->

<!-- REF #_method_.VP SET BOOLEAN VALUE.Params -->

| Parâmetro | Tipo       |    | Descrição                |                  |
| --------- | ---------- | -- | ------------------------ | ---------------- |
| rangeObj  | Object     | -> | Objeto intervalo         |                  |
| boolValue | Parâmetros | -> | Valor booliano a definir | <!-- END REF --> |

#### Descrição

The `VP SET BOOLEAN VALUE` command <!-- REF #_method_.VP SET BOOLEAN VALUE.Summary -->assigns a specified boolean value to a designated cell range<!-- END REF -->.

Em _rangeObj_, passe um intervalo de células (criado, por exemplo, com [`VP Cell`](vp-cell.md) ou [`VP Column`](vp-column.md)) cujo valor você deseja especificar. If _rangeObj_ includes multiple cells, the value specified will be repeated in each cell.

The _boolValue_ parameter allows you to pass the boolean value (**True** or **False**) that will be assigned to the _rangeObj_.

#### Exemplo

```4d
//Set the cell value as False VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```

#### Veja também

[VP SET VALUE](vp-set-value.md)
