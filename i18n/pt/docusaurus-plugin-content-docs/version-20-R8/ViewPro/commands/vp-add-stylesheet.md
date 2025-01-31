---
id: vp-add-stylesheet
title: VP ADD STYLESHEET
---

<!-- REF #_method_.VP ADD STYLESHEET.Syntax -->

**VP ADD STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text ; *styleObj* : Object { ; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP ADD STYLESHEET.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                  |                  |
| styleName  | Text    | -> | Nome do estilo                                              |                  |
| styleObj   | Object  | -> | Objeto que define as propriedades do atributo               |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) | <!-- END REF --> |

#### Descrição

O comando `VP ADD STYLESHEET` <!-- REF #_method_.VP ADD STYLESHEET. Resumo -->cria ou modifica a folha de estilo *styleName* com base na combinação das propriedades especificadas em *styleObj* no documento aberto <!-- END REF -->. .

> As folhas de estilo criadas por esse comando são salvas com o documento.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

O parâmetro *styleName* permite que você atribua um nome à folha de estilos. Se o nome já estiver sendo usado no mesmo escopo, a nova folha de estilo substituirá a existente. Note que pode utilizar o mesmo nome para diferentes âmbitos (ver abaixo).

No *styleObj*, designe as configurações da folha de estilo (por exemplo, fonte, decoração de texto, alinhamento, bordas etc.). Para obter a lista completa de propriedades de estilo, consulte [Propriedades dos objetos de estilo](../configuring.md#style-object-properties).

Você pode designar onde definir a folha de estilos no parâmetro opcional sheet usando o índice da folha (a indexação começa em 0) ou com as seguintes constantes:

- `vk current sheet`
- `vk workbook`

Se uma folha de estilo *styleName* for definida no nível da pasta de trabalho e em um nível de planilha, o nível da planilha terá prioridade sobre o nível da pasta de trabalho quando a folha de estilo for definida.

To apply the style sheet, use the [VP SET DEFAULT STYLE](vp-set-default-style.md) or [VP SET CELL STYLE](vp-set-cell-style.md) commands.

#### Exemplo

O seguinte código:

```4d
$styles:=New object
$styles.backColor:="green"
 
//Line Border Object
$borders:=New object("color"; "green"; "style";vk line style medium dash dot)
 
$styles.borderBottom:=$borders
$styles.borderLeft:=$borders
$styles.borderRight:=$borders
$styles.borderTop:=$borders
 
VP ADD STYLESHEET("ViewProArea"; "GreenDashDotStyle";$styles)
 
//Para aplicar o estilo
VP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name"; "GreenDashDotStyle"))
```

criará e aplicará o seguinte objeto estilo denominado *GreenDashDotStyle*:

```
{
 backColor:green,
 borderBottom:{color:green,style:10},
 borderLeft:{color:green,style:10},
 borderRight:{color:green,style:10},
 borderTop:{color:green,style:10}
}
```

#### Veja também

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
