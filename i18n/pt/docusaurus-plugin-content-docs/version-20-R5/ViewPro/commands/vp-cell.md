---
id: vp-cell
title: VP Cell
---

<!-- REF #_method_.VP Cell.Syntax -->

**VP Cell** ( _vpAreaName_ ; _column_ : Integer ; _row_ : Integer ; Text { ; _sheet_ : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP Cell.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |
| ---------- | ------- | -- | ----------------------------------------------------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                  |
| column     | Longint | -> | Índice de coluna                                            |
| row        | Longint | -> | Índice de linha                                             |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) |
| Resultados | Object  | <- | Objeto intervalo de uma única célula                        |

<!-- END REF -->

#### Descrição

O comando `VP Cell` <!-- REF #_method_.VP Cell.Summary -->retorna um novo objeto de intervalo que faz referência a uma célula específica<!-- END REF -->.

> Este comando destina-se a intervalos de uma única célula. To create a range object for multiple cells, use the [VP Cells](vp-cells.md) command.

Em _vpAreaName_, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

O parâmetro _column_ define a coluna da posição do intervalo de células. Passe o índice da coluna neste parâmetro.

O parâmetro _row_ define a linha da posição do intervalo de células. Passar o índice da linha neste parâmetro.

No parâmetro opcional _sheet_, você pode indicar o índice da planilha em que o intervalo será definido. Se for omitido ou se passar vk current sheet, é utilizada a folha de cálculo atual.

> a indexação começa em 0.

#### Exemplo

Se quiser definir um objeto de intervalo para a célula mostrada abaixo (na planilha atual):

![vp-cell](../../assets/en/ViewPro/cmd_vpCell.png)

O código seria:

```4d
$cell:=VP Cell("ViewProArea";2;4) // C5
```

#### Veja também

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)
