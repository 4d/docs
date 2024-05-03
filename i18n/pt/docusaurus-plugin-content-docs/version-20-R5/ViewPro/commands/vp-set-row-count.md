---
id: vp-set-row-count
title: VP SET ROW COUNT
---

<!-- REF #_method_.VP SET ROW COUNT.Syntax -->

**VP SET ROW COUNT** ( _vpAreaName_ : Text ; _rowCount_ : Integer { ; _sheet_ : Integer }  ) <!-- END REF -->

<!-- REF #_method_.VP SET ROW COUNT.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                  |                  |
| rowCount   | Integer | -> | Número de linhas                                            |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) | <!-- END REF --> |

#### Descrição

The `VP SET ROW COUNT` command <!-- REF #_method_.VP SET ROW COUNT.Summary -->defines the total number of rows in _vpAreaName_<!-- END REF -->.

Em _vpAreaName_, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Pass the total number of rows in the _rowCount_ parameter. \*rowCount tem de ser superior a 0.

In the optional _sheet_ parameter, you can designate a specific spreadsheet where the _rowCount_ will be applied (counting begins at 0). Se omitido, a planilha atual será utilizada por padrão. Você pode selecionar explicitamente a planilha atual com a seguinte constante:

- `vk current sheet`

#### Exemplo

O código seguinte define cinco linhas na área 4D View Pro:

```4d
VP SET ROW COUNT("ViewProArea";5)
```

![](../../assets/en/ViewPro/cmd_vpSetRowCount.PNG)

#### Veja também

[VP Get column count](vp-get-column-count.md)<br/>
[VP get row-count](vp-get-row-count.md)<br/>
[VP SET COLUMN COUNT](vp-set-column-count.md)
