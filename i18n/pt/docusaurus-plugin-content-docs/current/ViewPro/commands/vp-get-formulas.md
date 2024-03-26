---
id: vp-get-formulas
title: VP Get formulas
---

<!-- REF #_method_.VP Get formulas.Syntax -->

**VP Get formulas** ( _rangeObj_ : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get formulas.Params -->

| Parâmetro  | Tipo       |    | Descrição                         |                  |
| ---------- | ---------- | -- | --------------------------------- | ---------------- |
| rangeObj   | Object     | -> | Objeto intervalo                  |                  |
| Resultados | Collection | <- | Coleção de valores de uma fórmula | <!-- END REF --> |

#### Descrição

The `VP Get formulas` command <!-- REF #_method_.VP Get formulas.Summary -->retrieves the formulas from a designated _rangeObj_<!-- END REF -->.

In _rangeObj_, pass a range whose formulas you want to retrieve. If _rangeObj_ designates multiple ranges, the formula of the first range is returned. If _rangeObj_ does not contain any formulas, the command returns an empty string.

A coleção devolvida é bidimensional:

- A coleção de primeiro nível contém subcoleções de fórmulas. Cada subcolecção representa uma linha.
- Cada subcoleção define os valores das células para a linha. The first-level collection contains subcollections of formulas.

#### Exemplo

Você deseja recuperar as fórmulas nas colunas Sum e Average desse documento:

![](../../assets/en/ViewPro/cmd_vpGetFormulas.PNG)

Pode utilizar este código:

```4d
$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))
//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]
//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]
//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]
```

#### Veja também

[VP Get formula](vp-get-formula.md)<br/>
[VP Get values](vp-get-values.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUES](vp-set-values.md)
