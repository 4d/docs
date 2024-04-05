---
id: vp-remove-table-rows
title: VP REMOVE TABLE ROWS
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #_method_.VP REMOVE TABLE ROWS.Syntax -->

**VP REMOVE TABLE ROWS** ( _vpAreaName_ : Text ; _tableName_ : Text ; _row_ : Integer {; _count_ : Integer {; _sheet_ : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE ROWS.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| tableName  | Text    | -> | Nombre de la tabla                                             |                  |
| row        | Integer | -> | Índice en la tabla de la línea inicial a eliminar              |                  |
| count      | Text    | -> | Número de líneas a eliminar (debe ser >0)   |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

The `VP REMOVE TABLE ROWS` command <!-- REF #_method_.VP REMOVE TABLE ROWS.Summary -->removes one or _count_ row(s) from the specified _tableName_ at the specified _row_ index<!-- END REF -->. El comando elimina valores y estilos.

Este comando elimina las líneas de la tabla _tableName_, NO de la hoja. El número total de líneas de la hoja no se ve afectado por el comando. Los datos presentes debajo de la tabla (si los hay) se desplazan automáticamente hacia arriba en función del número de líneas eliminadas.

If the _tableName_ table is bound to a [data context](vp-set-data-context.md), the command removes element(s) from the collection.

Si _tableName_ no existe, no pasa nada.

#### Ejemplo

Para eliminar dos líneas de la tercera línea de la tabla "dataTable":

```4d
VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)
```

#### Ver también

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)
