---
id: vp-set-values
title: VP SET VALUES
---

<!-- REF #_method_.VP SET VALUES.Syntax -->

**VP SET VALUES** ( *rangeObj* : Object ; *valuesCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUES.Params -->

| Parâmetro | Tipo       |    | Descrição          |                  |
| --------- | ---------- | -- | ------------------ | ---------------- |
| rangeObj  | Object     | -> | Objeto intervalo   |                  |
| valuesCol | Collection | -> | Coleção de valores | <!-- END REF --> |

## Descrição

O comando `VP SET VALUES` <!-- REF #_method_.VP SET VALUES.Summary -->atribui uma coleção de valores que começa no intervalo de células especificado<!-- END REF -->.

Em *rangeObj*, passe um intervalo para a célula (criada com [`VP Cell`](vp-cell.md)) cujo valor você deseja especificar. A célula definida no *rangeObj* é usada para determinar o ponto de partida.

> - Se *rangeObj* não for um intervalo de células, somente a primeira célula do intervalo será usada.
> - Se *rangeObj* incluir vários intervalos, somente a primeira célula do primeiro intervalo será usada.

O parâmetro *valuesCol* é bidimensional:

- A coleção de primeiro nível contém subcoleções de valores. Cada subcolecção define uma linha. Passa uma coleção vazia para saltar uma linha.
- Cada subcoleção define os valores das células para a linha. Os valores podem ser Integer, Real, Boolean, Text, Date, Null ou Object. Se o valor for um objeto, pode ter as seguintes propriedades:

| Propriedade | Tipo                                     | Descrição                                          |
| ----------- | ---------------------------------------- | -------------------------------------------------- |
| value       | Integer, Real, Boolean, Text, Date, Null | Valor da célula (exceto - time) |
| time        | Real                                     | Valor hora (em segundos)        |

## Exemplo

```4d
$param:=New collection
$param.push(New collection(1;2;3;False)) //first row, 4 values
$param.push(New collection) //second row, untouched
$param.push(New collection(4;5;Null;"hello";"world")) // third row, 5 values
$param.push(New collection(6;7;8;9)) // fourth row, 4 values
$param.push(New collection(Null;New object("value";Current date;"time";42))) //fifth row, 1 value
   
VP SET VALUES(VP Cell("ViewProArea";2;1);$param)
```

![](../../assets/en/ViewPro/cmd_vpSetValues.PNG)

## Veja também

[VP Get formulas](vp-get-formulas.md)<br/>
[VP Get value](vp-get-value.md)<br/>
[VP Get Values](vp-get-values.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUE](vp-set-value.md)
