---
id: vp-set-column-count
title: VP SET COLUMN COUNT
---

<!-- REF #_method_.VP SET COLUMN COUNT.Syntax -->

**VP SET COLUMN COUNT** ( *vpAreaName* : Text , *columnCount* : Integer { , *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET COLUMN COUNT.Params -->

| Parámetros  | Tipo    |    | Descripción                                                    |                  |
| ----------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| columnCount | Integer | -> | Número de columnas                                             |                  |
| sheet       | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

El comando `VP SET COLUMN COUNT` <!-- REF #_method_.VP SET COLUMN COUNT.Summary -->define el número total de columnas en *vpAreaName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Pase el número total de columnas en el parámetro *columnCount*. *columnCount* debe ser mayor que 0.

En el parámetro opcional *sheet*, puede designar una hoja de cálculo específica en la que se aplicará *columnCount* (el conteo comienza en 0). Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

- `vk current sheet`

#### Ejemplo

El siguiente código define cinco columnas en el área de 4D View Pro:

```4d
VP SET COLUMN COUNT("ViewProArea";5)
```

![](../../assets/en/ViewPro/cmd_vpSetColumnCount.PNG)

#### Ver también

[VP Get column count](vp-get-column-count.md)<br/>
[VP Get row count](vp-get-row-count.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
