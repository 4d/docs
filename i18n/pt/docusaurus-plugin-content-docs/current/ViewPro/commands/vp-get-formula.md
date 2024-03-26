---
id: vp-get-formula
title: VP Get formula
---

<!-- REF #_method_.VP Get formula.Syntax -->

**VP Get formula** ( _rangeObj_ : Object) : Text<!-- END REF -->

<!-- REF #_method_.VP Get formula.Params -->

| Parâmetro  | Tipo   |    | Descrição        |                  |
| ---------- | ------ | -- | ---------------- | ---------------- |
| rangeObj   | Object | -> | Objeto intervalo |                  |
| Resultados | Text   | <- | Formula          | <!-- END REF --> |

#### Descrição

The `VP Get formula` command <!-- REF #_method_.VP Get formula.Summary -->retrieves the formula from a designated cell range<!-- END REF -->.

In _rangeObj_, pass a range whose formula you want to retrieve. If _rangeObj_ designates multiple cells or multiple ranges, the formula of the first cell is returned. If _rangeObj_ is a cell that does not contain a formula, the method returns an empty string.

#### Exemplo

```4d
  //set a formula
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
 
$result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"
```

#### Veja também

[VP Get formulas](vp-get-formulas.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
