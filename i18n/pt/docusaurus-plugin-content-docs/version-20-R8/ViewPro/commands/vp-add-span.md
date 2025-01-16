---
id: vp-add-span
title: VP ADD SPAN
---

<!-- REF #_method_.VP ADD SPAN.Syntax -->

**VP ADD SPAN** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SPAN.Params -->

| Parâmetro | Tipo   |    | Descrição        |                  |
| --------- | ------ | -- | ---------------- | ---------------- |
| rangeObj  | Object | -> | Objeto intervalo | <!-- END REF --> |

#### Descrição

O comando `VP ADD SPAN` combina as células em *rangeObj* como um único intervalo de células.

Em *rangeObj*, passe um objeto de intervalo de células. As células do intervalo são unidas para criar uma célula maior que se estende por várias colunas ou linhas. Você pode passar vários intervalos de células para criar vários intervalos ao mesmo tempo. Note que se os intervalos de células se sobrepuserem, apenas o primeiro intervalo de células é utilizado.

> - Só são apresentados os dados da célula superior esquerda. Os dados nas outras células combinadas ficam ocultos até que a extensão seja removida.
> - Os dados ocultos em células estendidas podem ser acessados por meio de fórmulas (começando com a célula superior esquerda).

#### Exemplo

Para abranger as células do primeiro trimestre e do segundo trimestre nas duas células ao lado delas, e a célula da área sul nas duas linhas abaixo dela:

![initial-document](../../assets/en/ViewPro/vp-add-span.png)

```4d
 // Intervalo do primeiro trimestre
 $q1:=VP Cells("ViewProArea";2;3;3;1)
 
  // Intervalo do segundo trimestre
 $q2:=VP Cells("ViewProArea";5;3;3;1)
 
  // Intervalo da área sul
 $south:=VP Cells("ViewProArea";0;5;1;3)
 
 VP ADD SPAN(VP Combine ranges($q1;$q2;$south))
```

![vp-add-span-result](../../assets/en/ViewPro/vp-add-span-2.png)

#### Veja também

[4D View Pro Range Object Properties](../getting-started.md#using-range-objects)<br/>
[VP Get spans](vp-get-spans.md)<br/>
[VP REMOVE SPAN](vp-remove-span.md)
