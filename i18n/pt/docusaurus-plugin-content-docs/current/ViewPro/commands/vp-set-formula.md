---
id: vp-set-formula
title: VP SET FORMULA
---

<!-- REF #_method_.VP SET FORMULA.Syntax -->

**VP SET FORMULA** ( _rangeObj_ : Object ; _formula_ : Text { ; _formatPattern_ : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULA.Params -->

| Parâmetro     | Tipo   |    | Descrição            |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto intervalo     |                  |
| formula       | Text   | -> | Fórmula ou método 4D |                  |
| formatPattern | Text   | -> | Formato do campo     | <!-- END REF --> |

#### Descrição

The `VP SET FORMULA` command <!-- REF #_method_.VP SET FORMULA.Summary -->assigns a specified formula or 4D method to a designated cell range<!-- END REF -->.

In _rangeObj_, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. If _rangeObj_ includes multiple cells, the formula specified will be linked in each cell.

The _formula_ parameter specifies a formula or 4D method name to be assigned to the _rangeObj_.

> If the _formula_ is a string, use the period `.` as numerical separator and the comma `,` as parameter separator.
> If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](vp-set-allowed-methods.md) command.

The optional _formatPattern_ defines a [pattern](../configuring.md#cell-format) for the _formula_.

You remove the formula in _rangeObj_ by replacing it with an empty string ("").

#### Exemplo 1

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
```

#### Exemplo 2

Para remover a fórmula:

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"")
```

#### Exemplo 3

```4d
VP SET FORMULA($range; "SUM(A1,B7,C11)") //"," para separar parâmetros
```

#### Veja também

[Cell format](../configuring.md#cell-format)<br/>
[VP Get Formula](vp-get-formula.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUE](vp-set-value.md)
