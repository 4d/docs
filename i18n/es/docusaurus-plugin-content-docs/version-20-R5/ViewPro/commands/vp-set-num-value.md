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

En _rangeObj_, pasa un rango de la(s) celda(s) (creada(s) por ejemplo con [`VP Cell`](vp-cell.md) o [`VP Column`](vp-column.md)) cuyo valor desea especificar. Si _rangeObj_ incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

El parámetro _numberValue_ especifica un valor numérico que se asignará al _rangeObj_.

El _formatPattern_ opcional define un [patrón](../configuring.md#cell-format) para el parámetro _numberValue_.

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
