---
id: vp-set-date-value
title: VP SET DATE VALUE
---

<!-- REF #_method_.VP SET DATE VALUE.Syntax -->

**VP SET DATE VALUE** ( _rangeObj_ : Object ; _dateValue_ : Date { ; _formatPattern_ : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE VALUE.Params -->

| Parámetros    | Tipo   |    | Descripción          |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto rango         |                  |
| dateValue     | Fecha  | -> | Valor date a definir |                  |
| formatPattern | Text   | -> | Formato del valor    | <!-- END REF --> |

#### Descripción

The `VP SET DATE VALUE` command <!-- REF #_method_.VP SET DATE VALUE.Summary -->assigns a specified date value to a designated cell range<!-- END REF -->.

In _rangeObj_, pass a range of the cell(s) whose value you want to specify. Si _rangeObj_ incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

The _dateValue_ parameter specifies a date value to be assigned to the _rangeObj_.

The optional _formatPattern_ defines a pattern for the _dateValue_ parameter. Pase un formato personalizado o puede utilizar una de las siguientes constantes:

| Constante               | Descripción                             | Configuración por defecto de US |
| ----------------------- | --------------------------------------- | ------------------------------- |
| `vk pattern long date`  | Formato ISO 8601 para la fecha completa | "dddd, dd MMMM yyyy"            |
| `vk pattern month day`  | Formato ISO 8601 para el mes y el día   | "MMMM dd"                       |
| `vk pattern short date` | Formato ISO 8601 corto para la fecha    | "MM/dd/yyyy"                    |
| `vk pattern year month` | Formato ISO 8601 para el mes y el año   | "yyyy MMMM"                     |

For information on patterns and formatting characters, please refer to the [Date and time formats](../configuring.md#date-and-time-formats) section.

#### Ejemplo

```4d
//Set the cell value to the current date
VP SET DATE VALUE(VP Cell("ViewProArea";4;2);Current date))
 
//Set the cell value to a specific date with a designated format
VP SET DATE VALUE(VP Cell("ViewProArea";4;4);Date("12/25/94");"d/m/yy ")
VP SET DATE VALUE(VP Cell("ViewProArea";4;6);!2005-01-15!;vk pattern month day)
```

#### Ver también

[4D View Pro cell format](../configuring.md#cell-format)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)
