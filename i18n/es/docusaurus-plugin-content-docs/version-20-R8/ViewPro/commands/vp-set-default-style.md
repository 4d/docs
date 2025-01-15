---
id: vp-set-default-style
title: VP SET DEFAULT STYLE
---

<!-- REF #_method_.VP SET DEFAULT STYLE.Syntax -->

**VP SET DEFAULT STYLE** ( *vpAreaName* : Text ; *styleObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET DEFAULT STYLE.Params -->

| Parámetros | Tipo    |    | Descripción                                                      |                  |
| ---------- | ------- | -- | ---------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                     |                  |
| styleObj   | Object  | -> | Objeto style                                                     |                  |
| sheet      | Integer | -> | Índice de la hoja (por defecto = hoja actual) | <!-- END REF --> |

#### Descripción

El comando `VP SET DEFAULT STYLE` <!-- REF #_method_.VP SET DEFAULT STYLE.Summary -->define el estilo en el *styleObj* como el estilo por defecto para una *sheet*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

El parámetro *styleObj* le permite pasar un objeto que contiene los parámetros de estilo. Puede utilizar una hoja de estilo existente o puede crear un nuevo estilo. Para más información, consulte el párrafo (../configuring.md#style-objects).

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el estilo. Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

- `vk current sheet`

#### Ejemplo

```4d
$style:=New object
$style.hAlign:=vk horizontal align left
$style.font:="12pt papyrus"
$style.backColor:="#E6E6FA" //coleor mordado claro
 
VP SET DEFAULT STYLE("myDoc";$style)
```

![](../../assets/en/ViewPro/cmd_vpSetDefaultStyle.PNG)

#### Ver también

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP Get default style](vp-get-default-style.md)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET BORDER](vp-set-border.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)
