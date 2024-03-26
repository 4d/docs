---
id: vp-get-row-count
title: VP Get row count
---

<!-- REF #_method_.VP Get row count.Syntax -->

**VP Get row count** ( _vpAreaName_ : Text {; _sheet_ : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get row count.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome da área 4D View Pro no formulário                      |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) |                  |
| Resultados | Integer | <- | Número total de linhas                                      | <!-- END REF --> |

#### Descrição

The `VP Get row count` command <!-- REF #_method_.VP Get row count.Summary -->returns the total number of rows from the designated _sheet_<!-- END REF -->.

In _vpAreaName_, pass the name property of the 4D View Pro area. Se passar um nome que não existe, é devolvido um erro.

You can define where to get the row count in the optional _sheet_ parameter using the sheet index (counting begins at 0). Se omitido ou se você passar `vk current sheet`, a planilha atual será usada.

#### Exemplo

O código seguinte retorna o número de linhas na área 4D View Pro:

```4d
var $rowCount : Integer
$rowCount:=VP Get row count("ViewProarea")
```

#### Veja também

[VP Get column count](vp-get-column-count.md)<br/>
[VP SET COLUMN COUNT](vp-set-column-count.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
