---
id: vp-set-num-value
title: VP SET NUM VALUE
---

<!-- REF #_method_.VP SET NUM VALUE.Syntax -->

**VP SET NUM VALUE** ( _rangeObj_ : Object ; _numberValue_ : Number { ; _formatPattern_ : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET NUM VALUE.Params -->

| Parámetros    | Tipo   |    | Descripción                |                  |
| ------------- | ------ | -- | -------------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto rango               |                  |
| numberValue   | Number | -> | Valor del número a definir |                  |
| formatPattern | Text   | -> | Formato del valor          | <!-- END REF --> |

#### Descripción

The `VP SET NUM VALUE` command<!-- REF #_method_.VP SET NUM VALUE. Summary -->assigns a specified numeric value to a designated cell range<!-- END REF -->.

In _rangeObj_, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. Si _rangeObj_ incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

El parámetro _numberValue_ especifica un valor numérico que se asignará al _rangeObj_.

The optional _formatPattern_ defines a [pattern](../configuring.md#cell-format) for the _numberValue_ parameter.

#### Ejemplo

```4d
//Definir el valor de la celda en 2
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)
 
/Definir el valor de la celda y formatear en dólares
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")
```

#### Ver también

[Cell format](../configuring.md#cell-format)<br/>
[VP SET VALUE](vp-set-value.md)
