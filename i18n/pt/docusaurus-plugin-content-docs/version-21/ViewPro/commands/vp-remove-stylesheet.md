---
id: vp-remove-stylesheet
title: VP REMOVE STYLESHEET
---

<!-- REF #_method_.VP REMOVE STYLESHEET.Syntax -->

**VP REMOVE STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE STYLESHEET.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                  |                  |
| styleName  | Text    | -> | Nome do estilo a remover                                    |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) | <!-- END REF --> |

## Descrição

O comando `VP REMOVER STYLESHEET` <!-- REF #_method_.VP REMOVER STYLESHEET.Summary --> remove a folha de estilo passada no *styleName* do *vpAreaName*<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Passe a folha de estilo para remover no parâmetro *styleName*.

You can define where to remove the style in the optional *sheet* parameter using the sheet index (counting begins at 0) or with the following constants:

- `vk current sheet`
- `vk workbook`

## Exemplo

Para remover o objeto de estilo *GreenDashDotStyle* da folha atual:

```4d
VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")
```

## Veja também

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)