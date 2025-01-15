---
id: vp-set-sheet-name
title: VP SET SHEET NAME
---

<!-- REF #_method_.VP SET SHEET NAME.Syntax -->

**VP SET SHEET NAME** ( *vpAreaName* : Text ; *name* : Text {; *sheet*: Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHEET NAME.Params -->

| Parámetros | Tipo    |    | Descripción                                  |                  |
| ---------- | ------- | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro |                  |
| name       | Text    | -> | Nuevo nombre para la hoja                    |                  |
| sheet      | Integer | -> | Índice de la hoja a renombrar                | <!-- END REF --> |

#### Descripción

El comando `VP SET SHEET NAME` <!-- REF #_method_.VP SET SHEET NAME.Summary -->cambia el nombre de una hoja del documento cargado en *vpAreaName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *name*, pase un nuevo nombre para la hoja.

En *sheet*, pase el índice de la hoja a renombrar.

> La indexación comienza en 0.

Si no se pasa *sheet*, el comando renombra la hoja actual.

El nuevo nombre no puede contener los siguientes caracteres: `*, :, [, ], ?,\,/`

El comando no hace nada si:

- el nuevo nombre contiene caracteres prohibidos
- el nuevo valor del nombre está en blanco
- el nuevo nombre ya existe
- el índice *sheet* pasado no existe

#### Ejemplo

Establezca el nombre de la tercera hoja como "Total first quarter":

```4d
VP SET SHEET NAME("ViewProArea";"Total first quarter";2)
```

![](../../assets/en/ViewPro/vp-sheet-index-name.png)
