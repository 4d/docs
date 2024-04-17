---
id: vp-remove-stylesheet
title: VP REMOVE STYLESHEET
---

<!-- REF #_method_.VP REMOVE STYLESHEET.Syntax -->

**VP REMOVE STYLESHEET** ( _vpAreaName_ : Text ; _styleName_ : Text { ; _sheet_ : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE STYLESHEET.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                  |                  |
| styleName  | Text    | -> | Nome do estilo a remover                                    |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) | <!-- END REF --> |

#### Descrição

The `VP REMOVE STYLESHEET` command <!-- REF #_method_.VP REMOVE STYLESHEET.Summary -->removes the style sheet passed in the _styleName_ from the _vpAreaName_<!-- END REF -->.

Em _vpAreaName_, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Pass the style sheet to remove in the _styleName_ parameter.

You can define where to remove the style in the optional _sheet_ parameter using the sheet index (counting begins at 0) or with the following constants:

- `vk current sheet`
- `vk workbook`

#### Exemplo

To remove the _GreenDashDotStyle_ style object from the current sheet:

```4d
VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")
```

#### Veja também

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)
