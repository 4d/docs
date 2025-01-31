---
id: vp-cell
title: VP Cell
---

<!-- REF #_method_.VP Cell.Syntax -->

**VP Cell** ( *vpAreaName* : Text ; *column* : Integer ; *row* : Integer { ; *sheet* : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP Cell.Params -->

| Parámetros | Tipo    |                             | Descripción                                                    |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro                   |
| column     | Integer | ->                          | Índice de la columna                                           |
| row        | Integer | ->                          | Índice de la línea                                             |
| sheet      | Integer | ->                          | Índice de la hoja (hoja actual si se omite) |
| Result     | Object  | <- | Objeto rango de una sola celda                                 |

<!-- END REF -->

#### Descripción

El comando `VP Cell` <!-- REF #_method_.VP Cell.Summary -->devuelve un nuevo objeto de rango que hace referencia a una celda específica<!-- END REF -->.

> Este comando se aplica a los rangos de una sola celda. Para crear un objeto de rango para múltiples celdas, utilice el comando [VP Cells](vp-cells.md).

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

El parámetro *column* define la columna de la posición del rango de celdas. Pase el índice de columna en este parámetro.

El parámetro *row* define la línea del rango de celdas. Pase el índice de la línea en este parámetro.

En el parámetro opcional *sheet*, puede designar el índice de la hoja en donde se definirá el rango. Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual por defecto.

> la indexación comienza en 0.

#### Ejemplo

Desea definir un objeto rango para la celda mostrada abajo (en la hoja actual):

![vp-cell](../../assets/en/ViewPro/cmd_vpCell.png)

El código es el siguiente:

```4d
$cell:=VP Cell("ViewProArea";2;4) // C5
```

#### Ver también

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)
