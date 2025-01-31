---
id: vp-get-tables
title: VP Get tables
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R7       | Añadidos       |

</details>

<!-- REF #_method_.VP Get tables.Syntax -->

**VP Get tables** ( *vpAreaName* : Text { ; *sheet* : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get tables.Params -->

| Parámetros | Tipo       |                             | Descripción                                                    |                  |
| ---------- | ---------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | ->                          | Nombre de objeto formulario área 4D View Pro                   |                  |
| sheet      | Integer    | ->                          | Índice de la hoja (hoja actual si se omite) |                  |
| Result     | Collection | <- | Colección de textos con todos los nombres de las tablas        | <!-- END REF --> |

#### Descripción

El comando `VP Get tables` <!-- REF #_method_.VP Get tables.Summary -->devuelve una colección de todos los nombres de tablas definidos en la *hoja*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice, el comando se aplica a la hoja actual.

> La indexación comienza en 0.

#### Ejemplo

El siguiente código devolverá una colección de todos los nombres de tablas de la hoja actual:

```4d
$tables:=VP Get tables("ViewProArea")
//$tables contiene por ejemplo ["contextTable","emailTable"]

```

#### Ver también

[VP CREATE TABLE](vp-create-table.md)
