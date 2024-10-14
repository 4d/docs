---
id: vp-get-row-count
title: VP Get row count
---

<!-- REF #_method_.VP Get row count.Syntax -->

**VP Get row count** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get row count.Params -->

| Parámetros | Tipo    |                             | Descripción                                                    |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre del área 4D View Pro en el formulario                   |                  |
| sheet      | Integer | ->                          | Índice de la hoja (hoja actual si se omite) |                  |
| Result     | Integer | <- | Número total de líneas                                         | <!-- END REF --> |

#### Descripción

El comando `VP Get row count` <!-- REF #_method_.VP Get row count.Summary -->devuelve el número total de filas de la *sheet* designada<!-- END REF -->.

En *vpAreaName*, pase el nombre de la propiedad del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Puede definir dónde obtener el número de líneas en el parámetro opcional *sheet* utilizando el índice de la hoja (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Ejemplo

El siguiente código devuelve el número de líneas en el área 4D View Pro:

```4d
var $rowCount : Integer
$rowCount:=VP Get row count("ViewProarea")
```

#### Ver también

[VP Get column count](vp-get-column-count.md)<br/>
[VP SET COLUMN COUNT](vp-set-column-count.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
