---
id: vp-get-column-count
title: VP Get column count
---

<!-- REF #_method_.VP Get column count.Syntax -->

**VP Get column count** ( _vpAreaName_ : Text { ; _sheet_ :  Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get column count.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome da área 4D View Pro no formulário                      |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) |                  |
| Resultados | Integer | <- | Número total de colunas                                     | <!-- END REF --> |

#### Descrição

The `VP Get column count` command <!-- REF #_method_.VP Get column count.Summary -->returns the total number of columns from the designated _sheet_<!-- END REF -->.

In _vpAreaName_, pass the name property of the 4D View Pro area. Se passar um nome que não existe, é devolvido um erro.

You can define where to get the column count in the optional _sheet_ parameter using the sheet index (counting begins at 0). Se omitido ou se você passar `vk current sheet`, a planilha atual será usada.

#### Exemplo

O código seguinte retorna o número de colunas na área 4D View Pro:

```4d
C_INTEGER($colCount)
$colCount:=VP Get column count("ViewProarea")
```

#### Veja também

[VP Get row count](vp-get-row-count.md)<br/>
[VP SET COLUMN COUNT](vp-set-column-count.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
