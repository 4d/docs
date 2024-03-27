---
id: vp-set-boolean-value
title: VP SET BOOLEAN VALUE
---

<!-- REF #_method_.VP SET BOOLEAN VALUE.Syntax -->

**VP SET BOOLEAN VALUE** ( _rangeObj_ : Object  ; _boolValue_ : Boolean) <!-- END REF -->

<!-- REF #_method_.VP SET BOOLEAN VALUE.Params -->

| Parámetros | Tipo    |    | Descripción                  |                  |
| ---------- | ------- | -- | ---------------------------- | ---------------- |
| rangeObj   | Object  | -> | Objeto rango                 |                  |
| boolValue  | Boolean | -> | Valor del booleano a definir | <!-- END REF --> |

#### Descripción

El comando `VP SET BOOLEAN VALUE` <!-- REF #_method_.VP SET BOOLEAN VALUE.Summary -->asigna un valor booleano especificado a un rango de celdas designado<!-- END REF -->.

In _rangeObj_, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. Si _rangeObj_ incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

El parámetro _boolValue_ permite pasar el valor booleano (**True** o **False**) que se asignará al _rangeObj_.

#### Ejemplo

```4d
//Establecer el valor de la celda como False
VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```

#### Ver también

[VP SET VALUE](vp-set-value.md)
