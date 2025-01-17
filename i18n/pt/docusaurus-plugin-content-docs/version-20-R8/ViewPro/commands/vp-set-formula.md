---
id: vp-set-formula
title: VP SET FORMULA
---

<!-- REF #_method_.VP SET FORMULA.Syntax -->

**VP SET FORMULA** ( *rangeObj* : Object ; *formula* : Text { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULA.Params -->

| Parâmetro     | Tipo   |    | Descrição            |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto intervalo     |                  |
| formula       | Text   | -> | Fórmula ou método 4D |                  |
| formatPattern | Text   | -> | Formato do campo     | <!-- END REF --> |

#### Descrição

The `VP SET FORMULA` command <!-- REF #_method_.VP SET FORMULA.Summary -->assigns a specified formula or 4D method to a designated cell range<!-- END REF -->.

Em *rangeObj*, passe um intervalo de células (criado, por exemplo, com [`VP Cell`](vp-cell.md) ou [`VP Column`](vp-column.md)) cujo valor você deseja especificar. Se *rangeObj* incluir várias células, a fórmula especificada será vinculada em cada célula.

The *formula* parameter specifies a formula or 4D method name to be assigned to the *rangeObj*.

> If the *formula* is a string, use the period `.` as numerical separator and the comma `,` as parameter separator.
> Se um método 4D for usado, ele deverá ser permitido com o comando [`VP SET ALLOWED METHODS`](vp-set-allowed-methods.md).

O *formatPattern* opcional define um [padrão](../configuring.md#cell-format) para a *fórmula*.

You remove the formula in *rangeObj* by replacing it with an empty string ("").

#### Exemplo 1

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
```

#### Exemplo 2

Para remover a fórmula:

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"")
```

#### Exemplo 3

```4d
VP SET FORMULA($range; "SUM(A1,B7,C11)") //"," para separar parâmetros
```

#### Veja também

[Cell format](../configuring.md#cell-format)<br/>
[VP Get Formula](vp-get-formula.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUE](vp-set-value.md)
