---
id: vp-insert-columns
title: VP INSERT COLUMNS
---

<!-- REF #_method_.VP INSERT COLUMNS.Syntax -->

**VP INSERT COLUMNS** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT COLUMNS.Params -->

| Parámetros | Tipo   |    | Descripción  |                  |
| ---------- | ------ | -- | ------------ | ---------------- |
| rangeObj   | Object | -> | Objeto rango | <!-- END REF --> |

#### Descripción

El comando `VP INSERT COLUMNS` <!-- REF #_method_.VP INSERT COLUMNS.Summary -->inserta columnas en el *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que contenga un rango de la columna inicial (la columna que designa dónde se insertará la nueva columna) y el número de columnas a insertar. Si se omite el número de columna a insertar (no se define), se inserta una sola columna.

Las nuevas columnas se insertan a la izquierda, directamente antes de la columna inicial en el *rangeObj*.

#### Ejemplo

Para insertar tres columnas antes de la segunda columna:

```4d
VP INSERT COLUMNS(VP Column("ViewProArea";1;3))
```

El resultado es:

![](../../assets/en/ViewPro/cmd_vpInsertColumns.PNG)

#### Ver también

[VP DELETE COLUMNS](vp-delete-columns.md)<br/>
[VP DELETE ROWS](vp-delete-rows.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)
