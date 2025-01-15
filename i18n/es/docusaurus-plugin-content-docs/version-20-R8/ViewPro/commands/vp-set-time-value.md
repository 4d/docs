---
id: vp-set-time-value
title: VP SET TIME VALUE
---

<!-- REF #_method_.VP SET TIME VALUE.Syntax -->

**VP SET TIME VALUE** ( *rangeObj* : Object ; *timeValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TIME VALUE.Params -->

| Parámetros    | Tipo   |    | Descripción          |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto rango         |                  |
| timeValue     | Hora   | -> | Valor hora a definir |                  |
| formatPattern | Text   | -> | Formato del valor    | <!-- END REF --> |

#### Descripción

El comando `VP SET TIME VALUE` <!-- REF #_method_.VP SET TIME VALUE.Summary -->asigna un valor de tiempo especificado a un rango de celdas designado<!-- END REF -->.

En *rangeObj*, pasa un rango de la(s) celda(s) (creada(s) por ejemplo con [`VP Cell`](vp-cell.md) o [`VP Column`](vp-column.md)) cuyo valor desea especificar. Si *rangeObj* incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

El parámetro *timeValue* indica una hora expresada en segundos que se asignará al *rangeObj*.

El *formatPattern* opcional define un [patrón](../configuring.md#cell-format) para el parámetro *timeValue*.

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
