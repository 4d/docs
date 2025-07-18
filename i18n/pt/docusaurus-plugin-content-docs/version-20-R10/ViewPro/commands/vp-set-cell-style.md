---
id: vp-set-cell-style
title: VP SET CELL STYLE
---

<!-- REF #_method_.VP SET CELL STYLE.Syntax -->

**VP SET CELL STYLE** ( *rangeObj* : Object  ; *styleObj*  : Object) <!-- END REF -->

<!-- REF #_method_.VP SET CELL STYLE.Params -->

| Parâmetro | Tipo   |    | Descrição        |                  |
| --------- | ------ | -- | ---------------- | ---------------- |
| rangeObj  | Object | -> | Objeto intervalo |                  |
| styleObj  | Object | -> | Objecto estilo   | <!-- END REF --> |

## Descrição

The `VP SET CELL STYLE` command <!-- REF #_method_.VP SET CELL STYLE.Summary -->applies the style(s) defined in the *styleObj* to the cells defined in the *rangeObj*<!-- END REF -->.

Em *rangeObj*, passe um intervalo de células em que o estilo será aplicado. Se *rangeObj* contiver várias células, o estilo será aplicado a cada célula.

> Borders applied with `VP SET CELL STYLE` will be applied to each cell of the *rangeObj*, as opposed to the [VP SET BORDER](vp-set-border.md) command which applies borders to the *rangeObj* as a whole.

O parâmetro *styleObj* permite que você passe um objeto contendo configurações de estilo. Pode utilizar uma folha de estilos existente ou criar um novo estilo. If the *styleObj* contains both an existing style sheet and additional style settings, the existing style sheet is applied first, followed by the additional settings.

Para remover um estilo e reverter para as configurações de estilo padrão (se houver), passe um valor NULL:

- o fato de dar ao parâmetro *styleObj* um valor NULL removerá todas as configurações de estilo do parâmetro *rangeObj*,
- atribuir um valor NULL a um atributo removerá esse atributo específico de *rangeObj*.

Para obter mais informações sobre objetos de estilo e folhas de estilo, consulte o parágrafo [Objetos de estilo](../configuring.md#style-objects).

## Exemplo

```4d
$style:=New object
$style.font:="8pt Arial"
$style.backColor:="Azure"
$style.foreColor:="red"
$style.hAlign:=1
$style.isVerticalText:=True
$style.borderBottom:=New object("color";"#800080";"style";vk line style thick)
$style.backgroundImage:=Null //remover um atributo específico
 
VP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)
```

![](../../assets/en/ViewPro/cmd_vpSetCellStyle.PNG)

## Veja também

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP Get cell style](vp-get-cell-style.md)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET BORDER](vp-set-border.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)