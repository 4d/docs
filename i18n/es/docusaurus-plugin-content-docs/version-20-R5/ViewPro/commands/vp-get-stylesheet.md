---
id: vp-get-stylesheets
title: VP Get stylesheet
---

<!-- REF #_method_.VP Get stylesheet.Syntax -->

**VP Get stylesheet** ( _vpAreaName_ : Text ; _styleName_ : Text { ; _sheet_ : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get stylesheet.Params -->

| Parámetros | Tipo    |                             | Descripción                                                    |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro                   |                  |
| styleName  | Text    | ->                          | Nombre del estilo                                              |                  |
| sheet      | Integer | ->                          | Índice de la hoja (hoja actual si se omite) |                  |
| Result     | Object  | <- | Objeto hoja de estilo                                          | <!-- END REF --> |

#### Descripción

El comando `VP Get stylesheet` <!-- REF #_method_.VP Get stylesheet.Summary -->devuelve el objeto de hoja de estilo _styleName_ que contiene los valores de las propiedades que se han definido<!-- END REF -->.

En _vpAreaName_, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En _styleName_, pase el nombre de la hoja de estilo a obtener.

Puede definir dónde obtener la hoja de estilo en el parámetro opcional _sheet_ utilizando el índice de la hoja (la numeración comienza en 0) o con las siguientes constantes:

- `vk current sheet`
- `vk workbook`

#### Ejemplo

El código siguiente:

```4d
$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")
```

... devolverá el objeto estilo _GreenDashDotStyle_ de la hoja actual:

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
