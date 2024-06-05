---
id: vp-insert-table-columns
title: VP INSERT TABLE COLUMNS
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Syntax -->

**VP INSERT TABLE COLUMNS** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *count* : Integer {; *insertAfter* : Integer {; *sheet* : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Params -->

| Parámetros  | Tipo    |    | Descripción                                                    |                  |
| ----------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| tableName   | Text    | -> | Nombre de la tabla                                             |                  |
| column      | Integer | -> | Índice en la tabla de la columna inicial a insertar            |                  |
| count       | Text    | -> | Número de columnas a añadir (debe ser >0)   |                  |
| insertAfter | Integer | -> | `vk table insert before` o `vk table insert after` *columna*   |                  |
| sheet       | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

The `VP INSERT TABLE COLUMNS` command <!-- REF #_method_.VP INSERT TABLE COLUMNS.Summary -->inserts one or *count* empty column(s) in the specified *tableName* at the specified *column* index<!-- END REF -->.

When a column has been inserted with this command, you typically modify its contents using the [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md) command.

In the *insertAfter* parameter, you can pass one of the following constants to indicate if the column(s) must be inserted before or after the *column* index:

| Constante                | Valor | Descripción                                                                                               |
| ------------------------ | ----- | --------------------------------------------------------------------------------------------------------- |
| `vk table insert before` | 0     | Insertar columna(s) antes de la *columna* (por defecto si se omite) |
| `vk table insert after`  | 1     | Insertar columna(s) después de la *columna*                                            |

Este comando inserta algunas columnas en *tableName*, NO en la hoja. El número total de columnas de la hoja no se ve afectado por el comando. Los datos presentes a la derecha de la tabla (si los hay) se desplazan automáticamente hacia la derecha según el número de columnas añadidas.

Si *tableName* no existe o si no hay suficiente espacio en la hoja, no ocurre nada.

#### Ejemplo

See examples for [VP INSERT TABLE ROWS](vp-insert-table-rows.md) and [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md).

#### Ver también

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
