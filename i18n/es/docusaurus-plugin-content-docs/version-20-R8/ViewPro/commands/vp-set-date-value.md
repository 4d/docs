---
id: vp-set-date-value
title: VP SET DATE VALUE
---

<!-- REF #_method_.VP SET DATE VALUE.Syntax -->

**VP SET DATE VALUE** ( *rangeObj* : Object ; *dateValue* : Date { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE VALUE.Params -->

| Parámetros    | Tipo   |    | Descripción          |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto rango         |                  |
| dateValue     | Fecha  | -> | Valor date a definir |                  |
| formatPattern | Text   | -> | Formato del valor    | <!-- END REF --> |

#### Descripción

El comando `VP SET DATE VALUE` <!-- REF #_method_.VP SET DATE VALUE.Summary -->asigna un valor de fecha especificado a un rango de celdas designado<!-- END REF -->.

En *rangeObj*, pase un rango de la(s) celda(s) cuyo valor desea indicar. Si *rangeObj* incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

El parámetro *dateValue* indica un valor de fecha que se asignará a *rangeObj*.

El parámetro opcional *formatPattern* define un modelo para el parámetro *dateValue*. Pase un formato personalizado o puede utilizar una de las siguientes constantes:

| Constante               | Descripción                             | Configuración por defecto de US |
| ----------------------- | --------------------------------------- | ------------------------------- |
| `vk pattern long date`  | Formato ISO 8601 para la fecha completa | "dddd, dd MMMM yyyy"            |
| `vk pattern month day`  | Formato ISO 8601 para el mes y el día   | "MMMM dd"                       |
| `vk pattern short date` | Formato ISO 8601 corto para la fecha    | "MM/dd/yyyy"                    |
| `vk pattern year month` | Formato ISO 8601 para el mes y el año   | "yyyy MMMM"                     |

Para obtener información sobre los modelos y los caracteres de formato, consulte la sección [Formatos fecha y hora](../configuring.md#date-and-time-formats).

#### Ejemplo

```4d
//Definir el valor de la celda para la fecha actual
VP SET DATE VALUE(VP Cell("ViewProArea";4;2);Current date))
 
//Definir el valor de la celda para una fecha específica con un formato designado
VP SET DATE VALUE(VP Cell("ViewProArea";4;4);Date("12/25/94");"d/m/yy ")
VP SET DATE VALUE(VP Cell("ViewProArea";4;6);!2005-01-15!;vk pattern month day)
```

#### Ver también

[Formato de celda 4D View Pro](../configuring.md#cell-format)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)
