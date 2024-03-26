---
id: vp-get-values
title: VP Get values
---

<!-- REF #_method_.VP Get values.Syntax -->

**VP Get values** ( _rangeObj_ : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get values.Params -->

| Parámetros | Tipo       |    | Descripción          |                  |
| ---------- | ---------- | -- | -------------------- | ---------------- |
| rangeObj   | Object     | -> | Objeto rango         |                  |
| Result     | Collection | <- | Colección de valores | <!-- END REF --> |

#### Descripción

The `VP Get values` command <!-- REF #_method_.VP Get values.Summary --> retrieves the values from the designated _rangeObj_<!-- END REF -->.

En _rangeObj_, pase un rango cuyos valores desea recuperar. If _rangeObj_ includes multiple ranges, only the first range is used.

The collection returned by `VP Get values` contains a two-dimensional collection:

- Cada elemento de la colección de primer nivel representa una línea y contiene una subcolección de valores
- Cada subcolección contiene los valores de las celdas de la línea. Values can be Integer, Real, Boolean, Text, Object, or Null. Si un valor es de tipo fecha u hora, se devuelve en un objeto con las siguientes propiedades:

| Propiedad | Tipo  | Descripción                                                                     |
| --------- | ----- | ------------------------------------------------------------------------------- |
| value     | Fecha | Valor de la celda (excepto - time)                           |
| time      | Real  | Valor hora (en segundos) si el valor es del tipo de fecha js |

Las fechas o las horas son consideradas como un datetime y se completan de la siguiente manera:

- valor de tipo hora - la parte fecha se completa como 30 de diciembre de 1899
- valor de tipo date - la parte de la hora se completa como medianoche (00:00:00:000)

#### Ejemplo

Quiere obtener los valores de C4 a G6:

![](../../assets/en/ViewPro/cmd_vpGetValues.PNG)

```4d
$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))
// $result[0]=[4,5,null,hello,world]
// $result[1]=[6,7,8,9,null]
// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]
```

#### Ver también

[VP Get formulas](vp-get-formulas.md)<br/>
[VP Get value](vp-get-value.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUES](vp-set-values.md)
