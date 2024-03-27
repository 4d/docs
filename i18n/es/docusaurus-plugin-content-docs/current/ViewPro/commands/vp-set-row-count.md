---
id: vp-set-row-count
title: VP SET ROW COUNT
---

<!-- REF #_method_.VP SET ROW COUNT.Syntax -->

**VP SET ROW COUNT** ( _vpAreaName_ : Text ; _rowCount_ : Integer { ; _sheet_ : Integer }  ) <!-- END REF -->

<!-- REF #_method_.VP SET ROW COUNT.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| rowCount   | Integer | -> | Número de líneas                                               |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

El comando `VP SET ROW COUNT` <!-- REF #_method_.VP SET ROW COUNT.Summary -->define el número total de filas en _vpAreaName_<!-- END REF -->.

En _vpAreaName_, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Pase el número total de líneas en el parámetro _rowCount_. _rowCount_ debe ser mayor que 0.

En el parámetro opcional _sheet_, puede designar una hoja de cálculo específica en la que se aplicará _rowCount_ (el conteo comienza en 0). Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

- `vk current sheet`

#### Ejemplo

El siguiente código define cinco líneas en el área 4D View Pro:

```4d
VP SET ROW COUNT("ViewProArea";5)
```

![](../../assets/en/ViewPro/cmd_vpSetRowCount.PNG)

#### Ver también

[VP Get column count](vp-get-column-count.md)<br/>
[VP get row-count](vp-get-row-count.md)<br/>
[VP SET COLUMN COUNT](vp-set-column-count.md)
