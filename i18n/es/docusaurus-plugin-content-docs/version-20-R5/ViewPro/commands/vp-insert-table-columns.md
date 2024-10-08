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

**VP INSERT TABLE COLUMNS** ( _vpAreaName_ : Text ; _tableName_ : Text ; _column_ : Integer {; _count_ : Integer {; _insertAfter_ : Integer {; _sheet_ : Integer }}} )<!-- END REF -->

<!-- REF #_method_.VP INSERT TABLE COLUMNS.Params -->

| Parámetros  | Tipo    |    | Descripción                                                    |                  |
| ----------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| tableName   | Text    | -> | Nombre de la tabla                                             |                  |
| column      | Integer | -> | Índice en la tabla de la columna inicial a insertar            |                  |
| count       | Text    | -> | Número de columnas a añadir (debe ser >0)   |                  |
| insertAfter | Integer | -> | `vk table insert before` o `vk table insert after` _columna_   |                  |
| sheet       | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

El comando `VP INSERT TABLE COLUMNS` <!-- REF #_method_.VP INSERT TABLE COLUMNS.Summary -->inserta una o _count_ columna(s) vacía(s) en el _tableName_ especificado en el índice _column_ especificado<!-- END REF -->.

Cuando se ha insertado una columna con este comando, normalmente se modifica su contenido utilizando el comando [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md).

En el parámetro _insertAfter_, puede pasar una de las siguientes constantes para indicar si la(s) columna(s) debe(n) insertarse antes o después del índice _column_:

| Constante                | Valor | Descripción                                                                                               |
| ------------------------ | ----- | --------------------------------------------------------------------------------------------------------- |
| `vk table insert before` | 0     | Insertar columna(s) antes de la _columna_ (por defecto si se omite) |
| `vk table insert after`  | 1     | Insertar columna(s) después de la _columna_                                            |

Este comando inserta algunas columnas en _tableName_, NO en la hoja. El número total de columnas de la hoja no se ve afectado por el comando. Los datos presentes a la derecha de la tabla (si los hay) se desplazan automáticamente hacia la derecha según el número de columnas añadidas.

Si _tableName_ no existe o si no hay suficiente espacio en la hoja, no ocurre nada.

#### Ejemplo

Ver ejemplos para [VP INSERT TABLE ROWS](vp-insert-table-rows.md) y [VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md).

#### Ver también

[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE COLUMNS](vp-remove-table-columns.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
