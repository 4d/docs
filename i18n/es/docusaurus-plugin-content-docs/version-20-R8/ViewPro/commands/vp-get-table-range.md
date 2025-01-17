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

**VP Get table range** ( *vpAreaName* : Text ; *tableName* : Text {; *onlyData* : Integer {; *sheet* : Integer }} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table range.Params -->

| Parámetros | Tipo    |                             | Descripción                                                                    |                  |
| ---------- | ------- | --------------------------- | ------------------------------------------------------------------------------ | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro                                   |                  |
| tableName  | Text    | ->                          | Nombre de la tabla                                                             |                  |
| onlyData   | Integer | ->                          | `vk table full range` (por defecto) o `vk table data range` |                  |
| sheet      | Integer | ->                          | Índice de la hoja (hoja actual si se omite)                 |                  |
| Result     | Object  | <- | Rango que contiene la tabla                                                    | <!-- END REF --> |

#### Descripción

El comando `VP Get table range` <!-- REF #_method_.VP Get table range.Summary -->devuelve el rango de *tableName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En el parámetro *onlyData*, puede pasar una de las siguientes constantes para indicar si desea obtener sólo los datos:

| Constante             | Valor | Descripción                                                                                                                     |
| --------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------- |
| `vk table full range` | 0     | Obtiene el rango de celdas para el área de la tabla con pie de página y encabezado (por defecto si se omite) |
| `vk table data range` | 1     | Obtener el rango de celdas sólo para el área de datos de la tabla                                                               |

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice, el comando se aplica a la hoja actual.

> La indexación comienza en 0.

Si no se encuentra *tableName*, el comando devuelve **null**.

#### Ver también

[VP RESIZE TABLE](vp-resize-table.md)<br/>
[VP Find table](vp-find-table.md)
