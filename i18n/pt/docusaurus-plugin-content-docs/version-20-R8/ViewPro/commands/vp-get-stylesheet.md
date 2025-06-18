---
id: vp-get-stylesheets
title: VP Get stylesheet
---

<!-- REF #_method_.VP Get stylesheet.Syntax -->

**VP Get stylesheet** ( *vpAreaName* : Text ; *styleName* : Text { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get stylesheet.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                   |                  |
| ---------- | ------- | --------------------------- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro                  |                  |
| styleName  | Text    | ->                          | Nome do estilo                                              |                  |
| sheet      | Integer | ->                          | Índice da folha (folha atual se omitida) |                  |
| Resultados | Object  | <- | Objeto da folha de estilo                                   | <!-- END REF --> |

## Descrição

O comando `VP Get stylesheet` <!-- REF #_method_.VP Get stylesheet.Summary --> retorna o objeto da folha de estilo *styleName* que contém os valores da propriedade que foram definidos<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Em *styleName*, passe o nome da folha de estilo a obter.

You can define where to get the style sheet in the optional *sheet* parameter using the sheet index (counting begins at 0) or with the following constants:

- `vk current sheet`
- `vk workbook`

## Exemplo

O seguinte código:

```4d
$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")
```

... retorna o objeto estilo *GreenDashDotStyle* da folha atual:

```4d
{
backColor:green,
borderBottom:{color:green,style:10},
borderLeft:{color:green,style:10},
borderRight:{color:green,style:10},
borderTop:{color:green,style:10}
}
```

## Veja também

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)