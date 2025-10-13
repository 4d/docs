---
id: vp-row
title: VP Row
---

<!-- REF #_method_.VP Row.Syntax -->

**VP Row** ( *vpAreaName* : Text; *row* : Integer { ; *rowCount* : Integer { ; *sheet* : Integer } } ) : Object <!-- END REF -->

<!-- REF #_method_.VP Row.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                   |                  |
| ---------- | ------- | --------------------------- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro                  |                  |
| row        | Integer | ->                          | Índice de linha                                             |                  |
| rowCount   | Integer | ->                          | Número de linhas                                            |                  |
| sheet      | Integer | ->                          | Índice da folha (folha atual se omitida) |                  |
| Resultados | Object  | <- | Objeto intervalo de linha(s)             | <!-- END REF --> |

## Descrição

O comando `VP Row` <!-- REF #_method_.VP Row.Summary -->retorna um novo objeto de intervalo referenciando uma linha ou linhas<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

O parâmetro *row* define a primeira linha do intervalo de linhas. Passar o índice da linha (a contagem começa em 0) neste parâmetro. Se o intervalo contém várias linhas, você também deve usar o parâmetro opcional *rowCount*.

O parâmetro *rowCount* opcional permite que você defina o número total de linhas do intervalo. \*rowCount tem de ser superior a 0. Se for omisso, o valor será definido como 1 por padrão.

No parâmetro opcional *sheet*, pode designar uma folha específica onde o intervalo será definido (a contagem começa em 0). Se não for especificada, a folha de cálculo atual é utilizada por padrão. Você pode selecionar explicitamente a planilha atual com a seguinte constante:

- `vk current sheet`

## Exemplo

Se quiser definir um objeto de intervalo para a linha exibida abaixo (na planilha atual):

![](../../assets/en/ViewPro/cmd_vpRow.PNG)

Você pode escrever:

```4d
$row:=VP Row("ViewProArea";9) // linha 10
```

## Veja também

[VP All](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)

