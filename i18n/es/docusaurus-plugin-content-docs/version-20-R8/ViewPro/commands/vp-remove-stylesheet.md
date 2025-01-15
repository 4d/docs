---
id: vp-remove-stylesheet
title: VP REMOVE STYLESHEET
---

<!-- REF #_method_.VP REMOVE STYLESHEET.Syntax -->

**VP REMOVE STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE STYLESHEET.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| styleName  | Text    | -> | Nombre del estilo a eliminar                                   |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

El comando `VP REMOVE STYLESHEET` <!-- REF #_method_.VP REMOVE STYLESHEET.Summary -->elimina la hoja de estilo pasada en el *styleName* del *vpAreaName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Pase la hoja de estilo a eliminar en el parámetro *styleName*.

Puede definir dónde eliminar el estilo en el parámetro opcional *sheet* utilizando el índice de la hoja (la numeración comienza en 0) o con las siguientes constantes:

- `vk current sheet`
- `vk workbook`

#### Ejemplo

Para eliminar el objeto estilo *GreenDashDotStyle* de la hoja actual:

```4d
VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")
```

#### Ver también

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)
