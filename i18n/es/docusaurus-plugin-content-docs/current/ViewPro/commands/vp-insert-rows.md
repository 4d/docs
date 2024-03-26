---
id: vp-insert-rows
title: VP INSERT ROWS
---

<!-- REF #_method_.VP INSERT ROWS.Syntax -->

**VP INSERT ROWS** ( _rangeObj_ : Object ) <!-- END REF -->

<!-- REF #_method_.VP INSERT ROWS.Params -->

| Parámetros | Tipo   |    | Descripción  |                  |
| ---------- | ------ | -- | ------------ | ---------------- |
| rangeObj   | Object | -> | Objeto rango | <!-- END REF --> |

#### Descripción

The `VP INSERT ROWS` command <!-- REF #_method_.VP INSERT ROWS.Summary -->inserts rows defined by the _rangeObj_<!-- END REF -->.

In _rangeObj_, pass an object containing a range of the starting row (the row which designates where the new row will be inserted) and the number of rows to insert. Si se omite el número de línea a insertar (no se define), se inserta una sola línea.

New rows are inserted directly before the first row in the _rangeObj_.

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
