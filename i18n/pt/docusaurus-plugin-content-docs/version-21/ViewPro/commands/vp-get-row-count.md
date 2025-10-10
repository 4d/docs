---
id: vp-get-row-count
title: VP Get row count
---

<!-- REF #_method_.VP Get row count.Syntax -->

**VP Get row count** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get row count.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                   |                  |
| ---------- | ------- | --------------------------- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nome da área 4D View Pro no formulário                      |                  |
| sheet      | Integer | ->                          | Índice da folha (folha atual se omitida) |                  |
| Resultados | Integer | <- | Número total de linhas                                      | <!-- END REF --> |

## Descrição

O comando `VP Get row count` <!-- REF #_method_.VP Get row count.Summary -->retorna o número total de linhas da *sheet* designada<!-- END REF -->.

Em *vpAreaName*, passe o nome da propriedade da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Pode definir onde obter o número de linhas no parâmetro opcional *sheet* utilizando o índice da folha (a numeração começa em 0). Se omitido ou se você passar `vk current sheet`, a planilha atual será usada.

## Exemplo

O código seguinte retorna o número de linhas na área 4D View Pro:

```4d
var $rowCount : Integer
$rowCount:=VP Get row count("ViewProarea")
```

## Veja também

[VP Get column count](vp-get-column-count.md)<br/>
[VP SET COLUMN COUNT](vp-set-column-count.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)