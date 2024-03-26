---
id: vp-set-time-value
title: VP SET TIME VALUE
---

<!-- REF #_method_.VP SET TIME VALUE.Syntax -->

**VP SET TIME VALUE** ( _rangeObj_ : Object ; _timeValue_ : Text { ; _formatPattern_ : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TIME VALUE.Params -->

| Parámetros    | Tipo   |    | Descripción          |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto rango         |                  |
| timeValue     | Text   | -> | Valor hora a definir |                  |
| formatPattern | Text   | -> | Formato del valor    | <!-- END REF --> |

#### Descripción

El comando `VP SET TIME VALUE` <!-- REF #_method_.VP SET TIME VALUE.Summary -->asigna un valor de tiempo especificado a un rango de celdas designado<!-- END REF -->.

In _rangeObj_, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. If _rangeObj_ includes multiple cells, the value specified will be repeated in each cell.

El parámetro _timeValue_ indica una hora expresada en segundos que se asignará al _rangeObj_.

The optional _formatPattern_ defines a [pattern](../configuring.md#cell-format) for the _timeValue_ parameter.

#### Ejemplo

```4d
//Definir el valor para la hora actual
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)

//Definir el valor para una hora específica con un formato designado
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)
```

#### Ver también

[Cell Format](../configuring.md#cell-format)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)
