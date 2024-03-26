---
id: vp-set-default-style
title: VP SET DEFAULT STYLE
---

<!-- REF #_method_.VP SET DEFAULT STYLE.Syntax -->

**VP SET DEFAULT STYLE** ( _vpAreaName_ : Text ; _styleObj_ : Object { ; _sheet_ : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET DEFAULT STYLE.Params -->

| Parámetros | Tipo    |    | Descripción                                                      |                  |
| ---------- | ------- | -- | ---------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                     |                  |
| styleObj   | Object  | -> | Objeto style                                                     |                  |
| sheet      | Integer | -> | Índice de la hoja (por defecto = hoja actual) | <!-- END REF --> |

#### Descripción

The `VP SET DEFAULT STYLE` command <!-- REF #_method_.VP SET DEFAULT STYLE.Summary -->defines the style in the _styleObj_ as the default style for a _sheet_<!-- END REF -->.

En _vpAreaName_, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

The _styleObj_ lets you pass an object containing style settings. Puede utilizar una hoja de estilo existente o puede crear un nuevo estilo. For more information, see the [Style objects](../configuring.md#style-objects) paragraph.

In the optional _sheet_ parameter, you can designate a specific spreadsheet where the style will be defined. Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

- `vk current sheet`

#### Ejemplo

```4d
$style:=New object
$style.hAlign:=vk horizontal align left
$style.font:="12pt papyrus"
$style.backColor:="#E6E6FA" //light purple color
 
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
