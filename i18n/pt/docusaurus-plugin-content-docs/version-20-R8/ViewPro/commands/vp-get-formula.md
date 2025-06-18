---
id: vp-get-formula
title: VP Get formula
---

<!-- REF #_method_.VP Get formula.Syntax -->

**VP Get formula** ( *rangeObj* : Object) : Text<!-- END REF -->

<!-- REF #_method_.VP Get formula.Params -->

| Parâmetro  | Tipo   |                             | Descrição        |                  |
| ---------- | ------ | --------------------------- | ---------------- | ---------------- |
| rangeObj   | Object | ->                          | Objeto intervalo |                  |
| Resultados | Text   | <- | Formula          | <!-- END REF --> |

## Descrição

O comando `VP Get formula` <!-- REF #_method_.VP Get formula.Summary --> recupera a fórmula de uma faixa de células designadas<!-- END REF -->.

Em *rangeObj*, passe um intervalo cuja fórmula você deseja recuperar. If *rangeObj* designates multiple cells or multiple ranges, the formula of the first cell is returned. Se *rangeObj* for uma célula sem fórmula, o método devolve uma string vazia.

## Exemplo

```4d
  //set a formula
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
 
$result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"
```

## Veja também

[VP Get formulas](vp-get-formulas.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
