---
id: vp-get-table-column-index
title: VP Get table column index
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #_method_.VP Get table column index.Syntax -->

**VP Get table column index** ( _vpAreaName_ : Text ; _tableName_ : Text ; _columnName_ : Text {; _sheet_ : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get table column index.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| tableName  | Text    | -> | Nombre de la tabla                                             |                  |
| columnName | Text    | -> | Nombre de la columna de la tabla                               |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) |                  |
| Result     | Integer | <- | Índice de _columnName_                                         | <!-- END REF --> |

#### Descripción

El comando `VP Get table column index` <!-- REF #_method_.VP Get table column index.Summary -->devuelve el índice de la _columnName_ en la _tableName_<!-- END REF -->.

En _vpAreaName_, pase el nombre del área 4D View Pro.

En _columnName_, pase el nombre de la columna de la tabla para la que desea obtener el índice.

En _sheet_, pase el índice de la hoja objetivo. Si no se especifica ningún índice o si pasa -1, el comando se aplica a la hoja actual.

> La indexación comienza en 0.

Si no se encuentra _tableName_ o _columnName_, el comando devuelve -1.

#### Ejemplo

```4d
	// Search the column id according the column name
var $id : Integer
$id:=VP Get table column index($area; $tableName; "Weight price")
	// Remove the column by id
VP REMOVE TABLE COLUMNS($area; $tableName; $id)
```

#### Ver también

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
