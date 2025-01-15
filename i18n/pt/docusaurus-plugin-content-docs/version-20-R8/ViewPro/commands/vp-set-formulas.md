---
id: vp-set-formulas
title: VP SET FORMULAS
---

<!-- REF #_method_.VP SET FORMULAS.Syntax -->

**VP SET FORMULAS** ( *rangeObj* : Object ; *formulasCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULAS.Params -->

| Parâmetro   | Tipo       |    | Descrição                   |                  |
| ----------- | ---------- | -- | --------------------------- | ---------------- |
| rangeObj    | Object     | -> | Objeto intervalo de células |                  |
| formulasCol | Collection | -> | Colecção de fórmulas        | <!-- END REF --> |

#### Descrição

The `VP SET FORMULAS` command <!-- REF #_method_.VP SET FORMULAS.Summary -->assigns a collection of formulas starting at the specified cell range<!-- END REF -->.

Em *rangeObj*, passe um intervalo da célula (criada com [VP Cell](vp-cell.md)) cuja fórmula você deseja especificar. Se *rangeObj* incluir vários intervalos, somente o primeiro será usado.

O parâmetro *formulasCol* é uma coleção bidimensional:

- A coleção de primeiro nível contém subcoleções de fórmulas. Cada subcolecção define uma linha.
- Cada subcoleção define os valores das células para a linha. Values must be text elements containing the formulas to assign to the cells.

> If the formula is a string, use the period `.` as numerical separator and the comma `,` as parameter separator.
> Se um método 4D for usado, ele deverá ser permitido com o comando [`VP SET ALLOWED METHODS`](vp-set-allowed-methods.md).

You remove the formulas in *rangeObj* by replacing them with an empty string ("").

#### Exemplo 1

```4d
$formulas:=New collection
$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // Primeira linha
$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Segunda linha

 
VP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Definir as células com as fórmulas
```

*myMethod*:

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
