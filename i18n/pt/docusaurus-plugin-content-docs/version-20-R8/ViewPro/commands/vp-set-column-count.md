---
id: vp-set-column-count
title: VP SET COLUMN COUNT
---

<!-- REF #_method_.VP SET COLUMN COUNT.Syntax -->

**VP SET COLUMN COUNT** ( *vpAreaName* : Text , *columnCount* : Integer { , *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET COLUMN COUNT.Params -->

| Parâmetro   | Tipo    |    | Descrição                                                   |                  |
| ----------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nome de objeto formulário área 4D View Pro                  |                  |
| columnCount | Integer | -> | Número de colunas                                           |                  |
| sheet       | Integer | -> | Índice da folha (folha atual se omitida) | <!-- END REF --> |

#### Descrição

The `VP SET COLUMN COUNT` command <!-- REF #_method_.VP SET COLUMN COUNT.Summary -->defines the total number of columns in *vpAreaName*<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Passe o número total de colunas no parâmetro *columnCount*. *columnCount* deve ser maior que 0.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the *columnCount* will be applied (counting begins at 0). Se omitido, a planilha atual será utilizada por padrão. Você pode selecionar explicitamente a planilha atual com a seguinte constante:

- `vk current sheet`

#### Exemplo

O código seguinte define cinco colunas na área 4D View Pro:

```4d
VP SET COLUMN COUNT("ViewProArea";5)
```

![](../../assets/en/ViewPro/cmd_vpSetColumnCount.PNG)

#### Veja também

[VP Get column count](vp-get-column-count.md)<br/>
[VP Get row count](vp-get-row-count.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
