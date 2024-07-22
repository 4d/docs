---
id: vp-set-formula
title: VP SET FORMULA
---

<!-- REF #_method_.VP SET FORMULA.Syntax -->

**VP SET FORMULA** ( _rangeObj_ : Object ; _formula_ : Text { ; _formatPattern_ : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULA.Params -->

| Parámetros    | Tipo   |    | Descripción         |                  |
| ------------- | ------ | -- | ------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto rango        |                  |
| formula       | Text   | -> | Fórmula o método 4D |                  |
| formatPattern | Text   | -> | Formato del campo   | <!-- END REF --> |

#### Descripción

El comando `VP SET FORMULA` <!-- REF #_method_.VP SET FORMULA.Summary -->asigna una fórmula especificada o un método 4D a un rango de celdas designado<!-- END REF -->.

En _rangeObj_, pasa un rango de la(s) celda(s) (creada(s) por ejemplo con [`VP Cell`](vp-cell.md) o [`VP Column`](vp-column.md)) cuyo valor desea especificar. Si _rangeObj_ incluye varias celdas, la fórmula especificada se vinculará en cada celda.

El parámetro _formula_ indica un nombre de fórmula o de método 4D a asignar a _rangeObj_.

> Si _formula_ es una cadena, utilice el punto `.` como separador numérico y la coma `,` como separador de parámetros.
> If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](vp-set-allowed-methods.md) command.

El _formatPattern_ opcional define un [pattern](../configuring.md#cell-format) para _formula_.

Se elimina la fórmula en _rangeObj_ sustituyéndola por una cadena vacía ("").

#### Ejemplo 1

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
```

#### Ejemplo 2

Para eliminar la fórmula:

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"")
```

#### Ejemplo 3

```4d
VP SET FORMULA($range; "SUM(A1,B7,C11)") //"," para separar los parámetros
```

#### Ver también

[Cell format](../configuring.md#cell-format)<br/>
[VP Get Formula](vp-get-formula.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUE](vp-set-value.md)
