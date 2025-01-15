---
id: vp-column
title: VP Column
---

<!-- REF #_method_.VP Column.Syntax -->

**VP Column** ( *vpAreaName* : Text ; *column*: Integer ; *columnCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Column.Params -->

| Parámetros  | Tipo    |                             | Descripción                                                    |                  |
| ----------- | ------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | ->                          | Nombre de objeto formulario área 4D View Pro                   |                  |
| column      | Integer | ->                          | Índice de la columna                                           |                  |
| columnCount | Integer | ->                          | Número de columnas                                             |                  |
| sheet       | Integer | ->                          | Índice de la hoja (hoja actual si se omite) |                  |
| Result      | Object  | <- | Objeto rango de celdas                                         | <!-- END REF --> |

#### Descripción

El comando `VP Column` <!-- REF #_method_.VP Column.Summary -->devuelve un nuevo objeto de rango que hace referencia a una columna o columnas específicas<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

El parámetro *column* define la primera columna del rango. Pase el índice de la columna (el conteo comienza en 0) en este parámetro. Si el rango contiene varias columnas, también debe utilizar el parámetro opcional *columnCount*.

El parámetro opcional *columnCount* permite definir el número total de columnas en las que se encuentra el rango. *columnCount* debe ser mayor que 0. Si se omite, el valor se establecerá en 1 por defecto y se creará un rango de tipo de columna.

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual por defecto.

#### Ejemplo

Desea definir un objeto rango para la columna mostrada abajo (en la hoja actual):

![](../../assets/en/ViewPro/cmd_vpColumn.PNG)

El código es el siguiente:

```4d
 $column:=VP Column("ViewProArea";3) // columna D
```

#### Ver también

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)
