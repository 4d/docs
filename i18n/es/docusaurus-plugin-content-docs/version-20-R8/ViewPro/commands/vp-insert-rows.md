---
id: vp-insert-rows
title: VP INSERT ROWS
---

<!-- REF #_method_.VP INSERT ROWS.Syntax -->

**VP INSERT ROWS** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT ROWS.Params -->

| Parámetros | Tipo   |    | Descripción  |                  |
| ---------- | ------ | -- | ------------ | ---------------- |
| rangeObj   | Object | -> | Objeto rango | <!-- END REF --> |

#### Descripción

El comando `VP INSERT ROWS` <!-- REF #_method_.VP INSERT ROWS.Summary -->inserta filas definidas por el *rangeObj*<!-- END REF -->.

En *rangeOb*j, pase un objeto que contenga un rango de la línea inicial (la línea que designa dónde se insertará la nueva línea) y el número de línea a insertar. Si se omite el número de línea a insertar (no se define), se inserta una sola línea.

Las nuevas líneas se insertan directamente antes de la primera línea de *rangeObj*.

#### Ejemplo

Para insertar 3 líneas antes de la primera línea:

```4d
VP INSERT ROWS(VP Row("ViewProArea";0;3))
```

El resultado es:

![](../../assets/en/ViewPro/cmd_vpInsertRows.PNG)

#### Ver también

[VP DELETE COLUMNS](vp-delete-columns.md)<br/>
[VP DELETE ROWS](vp-delete-rows.md)<br/>
[VP INSERT COLUMNS](vp-insert-columns.md)
