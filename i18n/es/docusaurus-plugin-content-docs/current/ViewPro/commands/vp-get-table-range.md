---
id: vp-get-table-range
title: VP Get table range
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #_method_.VP Get table range.Syntax -->

**VP Get table range** ( _vpAreaName_ : Text ; _tableName_ : Text {; _onlyData_ : Integer {; _sheet_ : Integer }} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table range.Params -->

| Parámetros | Tipo    |    | Descripción                                                                    |                  |
| ---------- | ------- | -- | ------------------------------------------------------------------------------ | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                                   |                  |
| tableName  | Text    | -> | Nombre de la tabla                                                             |                  |
| onlyData   | Integer | -> | `vk table full range` (por defecto) o `vk table data range` |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)                 |                  |
| Result     | Object  | <- | Rango que contiene la tabla                                                    | <!-- END REF --> |

#### Descripción

The `VP Get table range` command <!-- REF #_method_.VP Get table range.Summary -->returns the range of _tableName_<!-- END REF -->.

En _vpAreaName_, pase el nombre del área 4D View Pro.

In the _onlyData_ parameter, you can pass one of the following constants to indicate if you want to get the data only:

| Constante             | Valor | Descripción                                                                                                                     |
| --------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------- |
| `vk table full range` | 0     | Obtiene el rango de celdas para el área de la tabla con pie de página y encabezado (por defecto si se omite) |
| `vk table data range` | 1     | Obtener el rango de celdas sólo para el área de datos de la tabla                                                               |

En _sheet_, pase el índice de la hoja objetivo. Si no se especifica ningún índice, el comando se aplica a la hoja actual.

> La indexación comienza en 0.

Si no se encuentra _tableName_, el comando devuelve **null**.

#### Ver también

[VP RESIZE TABLE](vp-resize-table.md)<br/>
[VP Find table](vp-find-table.md)
