---
id: vp-get-value
title: VP Get value
---

<!-- REF #_method_.VP Get value.Syntax -->

**VP Get value** ( *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get value.Params -->

| Parámetros | Tipo   |                             | Descripción                           |                  |
| ---------- | ------ | --------------------------- | ------------------------------------- | ---------------- |
| rangeObj   | Object | ->                          | Objeto rango                          |                  |
| Result     | Object | <- | Objeto que contiene un valor de celda | <!-- END REF --> |

#### Descripción

El comando `VP Get value` <!-- REF #_method_.VP Get value.Summary -->recupera un valor de celda de un rango de celdas designado<!-- END REF -->.

En *rangeObj*, pase un rango cuyo valor desea recuperar.

#### Objeto devuelto

El objeto devuelto contendrá la propiedad `value` y, en caso de un valor fecha js, una propiedad `time`:

| Propiedad | Tipo                                       | Descripción                                                                     |
| --------- | ------------------------------------------ | ------------------------------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Object | Valor en el *rangeObj* (excepto- tiempo)                     |
| time      | Real                                       | Valor hora (en segundos) si el valor es del tipo de fecha js |

Si el objeto devuelto incluye una fecha u hora, se trata como una fecha-hora y se completa de la siguiente manera:

- valor hora - la parte de la fecha se completa como December 30, 1899 en formato dd/MM/yyyy (30/12/1899)
- valor fecha - la parte de la hora se completa como medianoche en formato HH:mm:ss (00:00:00)

Si *rangeObj* contiene varias celdas o varios rangos, se devuelve el valor de la primera celda. El comando devuelve un objeto null si la celda está vacía.

#### Ejemplo

```4d
$cell:=VP Cell("ViewProArea";5;2)
$value:=VP Get value($cell)
If(Value type($value.value)=Is text)
    VP SET VALUE($cell;New object("value";Uppercase($value.value)))
End if
```

#### Ver también

[VP Get values](vp-get-values.md)<br/>
[VP SET VALUE](vp-set-value.md)<br/>
[VP SET VALUES](vp-set-values.md)
