---
id: vp-set-num-value
title: VP SET NUM VALUE
---

<!-- REF #_method_.VP SET NUM VALUE.Syntax -->

**VP SET NUM VALUE** ( *rangeObj* : Object ; *numberValue* : Number { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET NUM VALUE.Params -->

| Parâmetro     | Tipo   |    | Descrição                 |                  |
| ------------- | ------ | -- | ------------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto intervalo          |                  |
| numberValue   | Number | -> | Valor do número a definir |                  |
| formatPattern | Text   | -> | Formato do valor          | <!-- END REF --> |

#### Descrição

The `VP SET NUM VALUE` command <!-- REF #_method_.VP SET NUM VALUE.Summary -->assigns a specified numeric value to a designated cell range<!-- END REF -->.

Em *rangeObj*, passe um intervalo de células (criado, por exemplo, com [`VP Cell`](vp-cell.md) ou [`VP Column`](vp-column.md)) cujo valor você deseja especificar. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *numberValue* parameter specifies a numeric value to be assigned to the *rangeObj*.

O *formatPattern* opcional define um [padrão](../configuring.md#cell-format) para o parâmetro *numberValue*.

#### Exemplo

```4d
//Set the cell value to 2
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)
 
//Set the cell value and format it in dollars
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")
```

#### Veja também

[Formato de célula](../configuring.md#cell-format)<br/>
[VP SET VALUE](vp-set-value.md)
