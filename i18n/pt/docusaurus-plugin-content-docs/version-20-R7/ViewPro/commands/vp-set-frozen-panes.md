---
id: vp-set-frozen-panes
title: VP SET FROZEN PANES
---

<!-- REF #_method_.VP SET FROZEN PANES.Syntax -->

**VP SET FROZEN PANES** ( *vpAreaName* : Text ; *paneObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET FROZEN PANES.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                             |
| ---------- | ------- | -- | --------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                            |
| paneObj    | Object  | -> | Objeto que contém as informações sobre as colunas e linhas congeladas |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida)           |

<!-- END REF -->

#### Descrição

The `VP SET FROZEN PANES` command <!-- REF #_method_.VP SET FROZEN PANES.Summary -->sets the frozen status of the columns and rows in the *paneObj* so they are always displayed in the *vpAreaName*<!-- END REF -->. Colunas congeladas e linhas são fixas no lugar e não se movem quando o resto do documento for rolado. Uma linha sólida é exibida para indicar que as colunas e linhas estão congeladas. O local da linha depende de onde a coluna congelada ou a linha está na folha:

- **Columns on the left or right**: For columns on the left of the sheet, the line is displayed on the right side of the last frozen column. Para colunas no lado direito da folha, a linha é exibida no lado esquerdo da primeira coluna congelada.
- **Linhas na parte superior ou inferior**: para linhas na parte superior da planilha, a linha é exibida abaixo da última linha congelada. Para linhas na parte inferior da folha, a linha é exibida acima da primeira linha congelada.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

You can pass an object defining the columns and rows to freeze in the *paneObj* parameter. Definindo o valor de qualquer uma das colunas ou das propriedades da linha igual a zero resets (descongelados) a propriedade. Se uma propriedade for definida para menos de zero, o comando não fará nada. Pode passar:

| Propriedade         | Tipo    | Descrição                                                |
| ------------------- | ------- | -------------------------------------------------------- |
| columnCount         | Integer | O número de colunas congeladas à esquerda da folha       |
| trailingColumnCount | Integer | O número de colunas congeladas à direita da folha        |
| rowCount            | Integer | O número de linhas congeladas na parte superior da folha |
| trailingRowCount    | Integer | O número de linhas congeladas na parte inferior da folha |

No parâmetro opcional *sheet*, pode designar uma folha específica onde o intervalo será definido (a contagem começa em 0). Se omitido, a planilha atual será utilizada por padrão. Você pode selecionar explicitamente a planilha atual com a seguinte constante:

- `vk current sheet`

#### Exemplo

Você deseja congelar as três primeiras colunas à esquerda, duas colunas à direita e a primeira linha:

```4d
C_OBJECT($panes)
 
$panes:=New object
$panes.columnCount:=3
$panes.trailingColumnCount:=2
$panes.rowCount:=1
 
VP SET FROZEN PANES("ViewProArea";$panes)
```

![](../../assets/en/ViewPro/cmd_vpSetFrozenPanes.PNG)

#### Veja também

[VP Get frozen panes](vp-get-frozen-panes.md)