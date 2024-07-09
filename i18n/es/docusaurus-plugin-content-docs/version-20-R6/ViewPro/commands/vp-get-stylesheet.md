---
id: vp-get-stylesheets
title: VP Get stylesheet
---

<!-- REF #_method_.VP Get stylesheet.Syntax -->

**VP Get stylesheet** ( *vpAreaName* : Text ; *styleName* : Text { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get stylesheet.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| styleName  | Text    | -> | Nombre del estilo                                              |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) |                  |
| Result     | Object  | <- | Objeto hoja de estilo                                          | <!-- END REF --> |

#### Descripción

The `VP Get stylesheet` command <!-- REF #_method_.VP Get stylesheet.Summary -->returns the *styleName* style sheet object containing the property values which have been defined<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En *styleName*, pase el nombre de la hoja de estilo a obtener.

You can define where to get the style sheet in the optional *sheet* parameter using the sheet index (counting begins at 0) or with the following constants:

- `vk current sheet`
- `vk workbook`

#### Ejemplo

El código siguiente:

```4d
$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")
```

... devolverá el objeto estilo *GreenDashDotStyle* de la hoja actual:

```4d
{
backColor:green,
borderBottom:{color:green,style:10},
borderLeft:{color:green,style:10},
borderRight:{color:green,style:10},
borderTop:{color:green,style:10}
}
```

#### Ver también

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)
