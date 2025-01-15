---
id: vp-get-table-column-attributes
title: VP Get column attributes
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #_method_.VP Get table column attributes.Syntax -->

**VP Get table column attributes** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer {; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table column attributes.Params -->

| Parámetros | Tipo    |                             | Descripción                                                    |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro                   |                  |
| tableName  | Text    | ->                          | Nombre de la tabla                                             |                  |
| column     | Integer | ->                          | Índice de la columna en la tabla                               |                  |
| sheet      | Integer | ->                          | Índice de la hoja (hoja actual si se omite) |                  |
| Result     | Object  | <- | Atributos de la *columna*                                      | <!-- END REF --> |

#### Descripción

El comando `VP Get table column attributes` <!-- REF #_method_.VP Get table column attributes.Summary -->devuelve los atributos actuales de *column* especificados en la *tableName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice o si pasa -1, el comando se aplica a la hoja actual.

> La indexación comienza en 0.

El comando devuelve un objeto que describe los atributos actuales de la *column*:

| Propiedad           | Tipo    | Descripción                                                                                                                                     |
| ------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| dataField           | text    | Nombre de la propiedad de la columna de la tabla en el contexto de datos. No se devuelve si la tabla se muestra automáticamente |
| name                | text    | Nombre de la columna de la tabla.                                                                                               |
| footerText          | text    | Valor del pie de columna.                                                                                                       |
| footerFormula       | text    | Fórmula del pie de columna.                                                                                                     |
| filterButtonVisible | boolean | True si se muestra el botón de filtro de la columna de la tabla, False en caso contrario.                                       |

Si no se encuentra *tableName* o si el índice *column* es mayor que el número de columnas, el comando devuelve **null**.

#### Ejemplo

```4d
var $attributes : Object
$attributes:=VP Get table column attributes("ViewProArea"; $tableName; 1)
If ($attributes.dataField#"")
     ...
End if
```

#### Ver también

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)
