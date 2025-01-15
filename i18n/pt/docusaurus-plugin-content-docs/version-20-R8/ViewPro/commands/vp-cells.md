---
id: vp-cells
title: VP Cells
---

<!-- REF #_method_.VP Cells.Syntax -->

**VP Cells** ( *vpAreaName* : Text ; *column*: Integer ; *row*: Integer ; *columnCount* : Integer ; *rowCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

<!-- REF #_method_.VP Cells.Params -->

| Parâmetro   | Tipo    |                             | Descrição                                                   |                  |
| ----------- | ------- | --------------------------- | ----------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | ->                          | Nome de objeto formulário área 4D View Pro                  |                  |
| column      | Integer | ->                          | Índice de coluna                                            |                  |
| row         | Integer | ->                          | Índice de linha                                             |                  |
| columnCount | Integer | ->                          | Número de colunas                                           |                  |
| rowCount    | Integer | ->                          | Número de linhas                                            |                  |
| sheet       | Integer | ->                          | Índice da folha (folha atual se omitida) |                  |
| Resultados  | Object  | <- | Objeto intervalo de células                                 | <!-- END REF --> |

#### Descrição

O comando `VP Cells` <!-- REF #_method_.VP Cells.Summary -->retorna um novo objeto de intervalo que faz referência a células específicas<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

O parâmetro *column* define a primeira coluna do intervalo de células. Passar o índice da coluna (a contagem começa em 0) neste parâmetro. Se o intervalo estiver em várias colunas, você também deverá usar o parâmetro *columnCount*.

No parâmetro *linha*, você pode definir a(s) linha(s) da posição da faixa de célula. Passar o índice da linha (a contagem começa em 0) neste parâmetro. Se o intervalo estiver dentro de várias linhas, você também deverá usar o parâmetro *rowCount*.

O parâmetro *columnCount* permite que você defina o número total de colunas em que o intervalo se encontra. *columnCount* deve ser maior que 0.

O parâmetro *rowCount* permite que você defina o número total de linhas em que o intervalo se encontra. \*rowCount tem de ser superior a 0.

No parâmetro opcional *sheet*, pode designar uma folha específica onde o intervalo será definido (a contagem começa em 0). Se for omitido ou se passar vk current sheet, é utilizada a folha de cálculo atual.

#### Exemplo

Você deseja definir um objeto de intervalo para as seguintes células (na planilha atual):

![](../../assets/en/ViewPro/vp-cells.png)

O código seria:

```4d
$cells:=VP Cells("ViewProArea";2;4;2;3) // C5 a D7
```

#### Veja também

[VP All](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)
