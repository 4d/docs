---
id: vp-set-value
title: VP SET VALUE
---

<!-- REF #_method_.VP SET VALUE.Syntax -->

**VP SET VALUE** ( _rangeObj_ : Object ; _valueObj_ : Object ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUE.Params -->

| Parámetros | Tipo   |    | Descripción                               |                  |
| ---------- | ------ | -- | ----------------------------------------- | ---------------- |
| rangeObj   | Object | -> | Objeto rango                              |                  |
| valueObj   | Object | -> | Valores de la celda y opciones de formato | <!-- END REF --> |

#### Descripción

El comando `VP SET VALUE` <!-- REF #_method_.VP SET VALUE.Summary -->asigna un valor especificado a un rango de celdas designado<!-- END REF -->.

The command allows you to use a generic code to set and format the types of values in _rangeObj_, whereas other commands, such as [`VP SET TEXT VALUE`](vp-set-text-value.md) and [`VP SET NUM VALUE`](vp-set-num-value.md), reduce the values to specific types.

In _rangeObj_, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell) or [`VP Column`](vp-column.md)) whose value you want to specify. Si _rangeObj_ incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

The parameter _valueObj_ is an object that includes properties for the value and the [format](../configuring.md#cell-format) to assign to _rangeObj_. Puede contener las siguientes propiedades:

| Propiedad | Tipo                                     | Descripción                                                                                                                                                                                          |
| --------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Null | Valor a asignar a _rangeObj_ (excepto- hora). Pase null para borrar el contenido de la celda.                                                     |
| time      | Real                                     | Valor hora (en segundos) a asignar a _rangeObj_                                                                                                                                   |
| format    | Text                                     | Patrón de propiedad valor/tiempo. For information on patterns and formatting characters, please refer to the [Cell Format](../configuring.md#cell-format) paragraph. |

#### Ejemplo

```4d
//Define el valor de la celda como False
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))
 
//Define el valor de la celda en 2
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))
 
//Define el valor de la celda en $125,571.35
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35; "format";"_($* #,##0.00_)"))
 
//Define el valor de la celda como ¡Hola Mundo!
VP SET VALUE(VP Celda("ViewProArea";3;2);New object("value"; "¡Hola Mundo!"))
 
//Define el valor de la celda como fecha actual
VP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))
 
//Define el valor de la celda como hora actual
VP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))
 
//Define el valor de la celda como fecha y hora específicas
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!); "time";?14:30:10?; "format";vk pattern full date time))
 
//Borrar el contenido de la celda
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))
```

#### Ver también

[Cell Format](../configuring.md#cell-format)<br/>
[VP Get values](vp-get-value.md)<br/>
[VP SET VALUE](vp-set-value.md)<br/>
[VP SET BOOLEAN VALUE](vp-set-boolean-value.md)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET FIELD](vp-set-field.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET NUM VALUE](vp-set-num-value.md)<br/>
[VP SET TEXT VALUE](vp-set-text-value.md)<br/>
[VP SET TIME VALUE](vp-set-time-value.md)
