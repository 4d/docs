---
id: vp-column
title: VP Column
---

<!-- REF #_method_.VP Column.Syntax -->

**VP Column** ( *vpAreaName* : Text ; *column*: Integer ; *columnCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Column.Params -->

| Parâmetro   | Tipo    |                             | Descrição                                                   |                  |
| ----------- | ------- | --------------------------- | ----------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | ->                          | Nome de objeto formulário área 4D View Pro                  |                  |
| column      | Integer | ->                          | Índice de coluna                                            |                  |
| columnCount | Integer | ->                          | Número de colunas                                           |                  |
| sheet       | Integer | ->                          | Índice da folha (folha atual se omitida) |                  |
| Resultados  | Object  | <- | Objeto intervalo de células                                 | <!-- END REF --> |

#### Descrição

O comando `VP Column` <!-- REF #_method_.VP Column.Summary -->retorna um novo objeto de intervalo que faz referência a uma coluna ou colunas específicas<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

O parâmetro *column* define a primeira coluna do intervalo de colunas. Passar o índice da coluna (a contagem começa em 0) neste parâmetro. Se o intervalo contiver várias colunas, você também deverá usar o parâmetro opcional *columnCount*.

O parâmetro opcional *columnCount* permite que você defina o número total de colunas do intervalo. *columnCount* deve ser maior que 0. Se for omitido, o valor será definido como 1 por padrão e um intervalo de tipo de coluna será criado.

No parâmetro opcional *sheet*, pode designar uma folha específica onde o intervalo será definido (a contagem começa em 0). Se for omitido ou se passar vk current sheet, é utilizada a folha de cálculo atual.

#### Exemplo

Se quiser definir um objeto de intervalo para a coluna mostrada abaixo (na planilha atual):

![](../../assets/en/ViewPro/cmd_vpColumn.PNG)

O código seria:

```4d
 $column:=VP Column("ViewProArea";3) // coluna D
```

#### Veja também

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)
