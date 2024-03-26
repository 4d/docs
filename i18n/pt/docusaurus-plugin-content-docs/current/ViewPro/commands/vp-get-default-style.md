---
id: vp-get-default-style
title: VP Get default style
---

<!-- REF #_method_.VP Get default style.Syntax -->

**VP Get default style** ( _vpAreaName_ : Text { ; _sheet_ :  Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get default style.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome da área 4D View Pro no formulário                      |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) |                  |
| Resultados | Object  | <- | Configurações de estilo padrão                              | <!-- END REF --> |

#### Descrição

The `VP Get default style` command <!-- REF #_method_.VP Get default style.Summary -->returns a default style object for a sheet<!-- END REF -->. The returned object contains basic document rendering properties as well as the default style settings (if any) previously set by the [VP SET DEFAULT STYLE](vp-set-default-style.md) method. For more information about style properties, see [Style Objects & Style Sheets](../configuring.md#style-objects--style-sheets).

In _vpAreaName_, pass the name property of the 4D View Pro area. Se passar um nome que não existe, é devolvido um erro.

You can define where to get the column count in the optional _sheet_ parameter using the sheet index (counting begins at 0). Se omitido ou se você passar `vk current sheet`, a planilha atual será usada.

#### Exemplo

Para obter os detalhes sobre o estilo predefinido para este documento:

![](../../assets/en/ViewPro/cmd_vpGetDefaultStyle.PNG)

Este código:

```4d
$defaultStyle:=VP Get default style("myDoc")
```

will return this information in the _$defaultStyle_ object:

```4d
{
 backColor:#E6E6FA,
 hAlign:0,
 vAlign:0,
 font:12pt papyrus
}
```

#### Veja também

[VP Get cell style](vp-get-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
