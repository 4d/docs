---
id: vp-cells
title: VP Cells
---

<!-- REF #_method_.VP Cells.Syntax -->

**VP Cells** ( _vpAreaName_ : Text ; _column_: Integer ; _row_: Integer ; _columnCount_ : Integer ; _rowCount_ : Integer { ; _sheet_ : Integer } ) : Object<!-- END REF -->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

<!-- REF #_method_.VP Cells.Params -->

| Parámetros  | Tipo    |    | Descripción                                                    |                  |
| ----------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| column      | Integer | -> | Índice de la columna                                           |                  |
| row         | Integer | -> | Índice de la línea                                             |                  |
| columnCount | Integer | -> | Número de columnas                                             |                  |
| rowCount    | Integer | -> | Número de líneas                                               |                  |
| sheet       | Integer | -> | Índice de la hoja (hoja actual si se omite) |                  |
| Result      | Object  | <- | Objeto rango de celdas                                         | <!-- END REF --> |

#### Descripción

El comando `VP Cells` <!-- REF #_method_.VP Cells.Summary -->devuelve un nuevo objeto de rango que hace referencia a celdas específicas<!-- END REF -->.

En _vpAreaName_, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

El parámetro _column_ define la primera columna del rango de celdas. Pase el índice de la columna (la numeración comienza en 0) en este parámetro. Si el rango está dentro de varias columnas, también debe utilizar el parámetro _columnCount_.

En el parámetro _row_, puede definir la(s) línea(s) del rango de celdas. Pase el índice de la línea (el conteo comienza en 0) en este parámetro. Si el rango contiene varias líneas, también debe utilizar el parámetro _rowCount_.

El parámetro _columnCount_ permite definir el número total de columnas en las que se encuentra el rango. _columnCount_ debe ser mayor que 0.

El parámetro _rowCount_ permite definir el número total de líneas en las que se encuentra el rango. _rowCount_ debe ser mayor que 0.

En el parámetro opcional _sheet_, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual por defecto.

#### Ejemplo

Desea definir un objeto rango para las siguientes celdas (de la hoja actual):

![](../../assets/en/ViewPro/vp-cells.png)

El código es el siguiente:

```4d
$cells:=VP Cells("ViewProArea";2;4;2;3) // de C5 a D7
```

#### Ver también

[VP All](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)
