---
id: vp-set-default-style
title: VP SET DEFAULT STYLE
---

<!-- REF #_method_.VP SET DEFAULT STYLE.Syntax -->

**VP SET DEFAULT STYLE** ( _vpAreaName_ : Text ; _styleObj_ : Object { ; _sheet_ : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET DEFAULT STYLE.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                |                  |
| ---------- | ------- | -- | -------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro               |                  |
| styleObj   | Object  | -> | Objecto estilo                                           |                  |
| sheet      | Integer | -> | Sheet index (default = current sheet) | <!-- END REF --> |

#### Descrição

The `VP SET DEFAULT STYLE` command <!-- REF #_method_.VP SET DEFAULT STYLE.Summary -->defines the style in the _styleObj_ as the default style for a _sheet_<!-- END REF -->.

Em _vpAreaName_, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

The _styleObj_ lets you pass an object containing style settings. Você pode usar uma folha de estilo existente ou criar um estilo. For more information, see the [Style objects](../configuring.md#style-objects) paragraph.

In the optional _sheet_ parameter, you can designate a specific spreadsheet where the style will be defined. Se omitido, a planilha atual será utilizada por padrão. Você pode selecionar explicitamente a planilha atual com a seguinte constante:

- `vk current sheet`

#### Exemplo

```4d
$style:=New object
$style.hAlign:=vk horizontal align left
$style.font:="12pt papyrus"
$style.backColor:="#E6E6FA" //cor roxa clara
 
VP SET DEFAULT STYLE("myDoc";$style)
```

![](../../assets/en/ViewPro/cmd_vpSetDefaultStyle.PNG)

#### Veja também

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP Get default style](vp-get-default-style.md)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET BORDER](vp-set-border.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)
