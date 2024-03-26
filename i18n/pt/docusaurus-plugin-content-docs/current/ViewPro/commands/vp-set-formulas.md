---
id: vp-set-formulas
title: VP SET FORMULAS
---

<!-- REF #_method_.VP SET FORMULAS.Syntax -->

**VP SET FORMULAS** ( _rangeObj_ : Object ; _formulasCol_ : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULAS.Params -->

| Parâmetro   | Tipo       |    | Descrição                   |                  |
| ----------- | ---------- | -- | --------------------------- | ---------------- |
| rangeObj    | Object     | -> | Objeto intervalo de células |                  |
| formulasCol | Collection | -> | Colecção de fórmulas        | <!-- END REF --> |

#### Descrição

The `VP SET FORMULAS` command <!-- REF #_method_.VP SET FORMULAS.Summary -->assigns a collection of formulas starting at the specified cell range<!-- END REF -->.

In _rangeObj_, pass a range of the cell (created with [VP Cell](vp-cell.md)) whose formula you want to specify. If _rangeObj_ includes multiple ranges, only the first range is used.

The _formulasCol_ is a two-dimensional collection:

- A coleção de primeiro nível contém subcoleções de fórmulas. Cada subcolecção define uma linha.
- Cada subcoleção define os valores das células para a linha. Values must be text elements containing the formulas to assign to the cells.

> If the formula is a string, use the period `.` as numerical separator and the comma `,` as parameter separator.
> If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](vp-set-allowed-methods.md) command.

You remove the formulas in _rangeObj_ by replacing them with an empty string ("").

#### Exemplo 1

```4d
$formulas:=New collection
$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // First row
$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Second row

 
VP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Set the cells with the formulas
```

_myMethod_:

```4d
$0:=$1*3.33
```

![](../../assets/en/ViewPro/cmd_vpSetFormulas.PNG)

#### Exemplo 2

Para remover fórmulas:

```4d
$formulas:=New collection
$formulas.push(New collection("";"")) // first collection
$formulas.push(New collection("";"")) // second collection
 
VP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Assign to cells
```

#### Veja também

[VP Get Formulas](vp-get-formulas.md)<br/>
[VP GET VALUES](vp-get-values.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET VALUES](vp-set-values.md)
