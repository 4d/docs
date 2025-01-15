---
id: vp-all
title: VP All
---

<!-- REF #_method_.VP All.Syntax -->

**VP All** ( *vpAreaName* : Text { ; *sheet* : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP All.Params -->

| Parámetros | Tipo    |                             | Descripción                                                    |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro                   |                  |
| sheet      | Integer | ->                          | Índice de la hoja (hoja actual si se omite) |                  |
| Result     | Object  | <- | Objeto rango de todas las celdas                               | <!-- END REF --> |

#### Descripción

El comando `VP ALL` <!-- REF #_method_.VP All.Summary -->devuelve un nuevo objeto de rango que hace referencia a todas las celdas<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Ejemplo

Desea definir un objeto rango para todas las celdas de la hoja de cálculo actual:

```4d
$all:=VP All("ViewProArea") // todas las celdas de la hoja actual
```

#### Ver también

[VP Cell](vp-cell)<br/>
[VP Cells](vp-cells)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)
