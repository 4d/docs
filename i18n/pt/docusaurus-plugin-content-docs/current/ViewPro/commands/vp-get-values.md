---
id: vp-get-values
title: VP Get values
---

<!-- REF #_method_.VP Get values.Syntax -->

**VP Get values** ( _rangeObj_ : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get values.Params -->

| Parâmetro  | Tipo       |    | Descrição          |                  |
| ---------- | ---------- | -- | ------------------ | ---------------- |
| rangeObj   | Object     | -> | Objeto intervalo   |                  |
| Resultados | Collection | <- | Coleção de valores | <!-- END REF --> |

#### Descrição

The `VP Get values` command <!-- REF #_method_.VP Get values.Summary --> retrieves the values from the designated _rangeObj_<!-- END REF -->.

In _rangeObj_, pass a range whose values you want to retrieve. If _rangeObj_ includes multiple ranges, only the first range is used.

The collection returned by `VP Get values` contains a two-dimensional collection:

- Cada elemento da coleção de primeiro nível representa uma linha e contém uma subcoleção de valores.
- Cada subcoleção contém valores de células para a linha. Values can be Integer, Real, Boolean, Text, Object, or Null. Se um valor for uma data ou hora, é retornado em um objeto com as propriedades abaixo:

| Propriedade | Tipo | Descrição                                                                  |
| ----------- | ---- | -------------------------------------------------------------------------- |
| value       | Date | Valor da célula (exceto - time)                         |
| time        | Real | Valor hora (em segundos) se o valor for do tipo data js |

Datas ou horas são tratadas como um datetime e são completadas da forma abaixo:

- valor hora - a parte da data é preenchida como 30 de dezembro de 1899
- valor data - a porção hora é completa como meia noite (00:00:00:000)

#### Exemplo

Pretende obter valores de C4 a G6:

![](../../assets/en/ViewPro/cmd_vpGetValues.PNG)

```4d
$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))
// $result[0]=[4,5,null,hello,world]
// $result[1]=[6,7,8,9,null]
// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]
```

#### Veja também

[VP Get formulas](vp-get-formulas.md)<br/>
[VP Get value](vp-get-value.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUES](vp-set-values.md)
