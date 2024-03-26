---
id: vp-set-num-value
title: VP SET NUM VALUE
---

<!-- REF #_method_.VP SET NUM VALUE.Syntax -->

**VP SET NUM VALUE** ( _rangeObj_ : Object ; _numberValue_ : Number { ; _formatPattern_ : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET NUM VALUE.Params -->

| Parâmetro     | Tipo   |    | Descrição                 |                  |
| ------------- | ------ | -- | ------------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto intervalo          |                  |
| numberValue   | Number | -> | Valor do número a definir |                  |
| formatPattern | Text   | -> | Formato do valor          | <!-- END REF --> |

#### Descrição

The `VP SET NUM VALUE` command <!-- REF #_method_.VP SET NUM VALUE.Summary -->assigns a specified numeric value to a designated cell range<!-- END REF -->.

In _rangeObj_, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. If _rangeObj_ includes multiple cells, the value specified will be repeated in each cell.

The _numberValue_ parameter specifies a numeric value to be assigned to the _rangeObj_.

The optional _formatPattern_ defines a [pattern](../configuring.md#cell-format) for the _numberValue_ parameter.

#### Exemplo

```4d
//Set the cell value to 2
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)
 
//Set the cell value and format it in dollars
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")
```

#### Veja também

[Cell format](../configuring.md#cell-format)<br/>
[VP SET VALUE](vp-set-value.md)
