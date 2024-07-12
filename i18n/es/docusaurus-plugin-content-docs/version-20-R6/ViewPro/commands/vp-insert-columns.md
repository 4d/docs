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

The `VP INSERT COLUMNS` command <!-- REF #_method_.VP INSERT COLUMNS.Summary -->inserts columns into the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the starting column (the column which designates where the new column will be inserted) and the number of columns to insert. Si se omite el número de columna a insertar (no se define), se inserta una sola columna.

New columns are inserted on the left, directly before the starting column in the *rangeObj*.

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
