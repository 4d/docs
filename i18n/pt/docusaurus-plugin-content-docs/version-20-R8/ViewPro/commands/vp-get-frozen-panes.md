---
id: vp-get-frozen-panes
title: VP Get frozen panes
---

<!-- REF #_method_.VP Get frozen panes.Syntax -->

**VP Get frozen panes** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get frozen panes.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                             |                  |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro                            |                  |
| sheet      | Integer | ->                          | Índice da folha (folha atual se omitida)           |                  |
| Resultados | Object  | <- | Objeto que contém as informações sobre as colunas e linhas congeladas | <!-- END REF --> |

#### Descrição

The `VP Get frozen panes` command <!-- REF #_method_.VP Get frozen panes.Summary -->returns an object with information about the frozen columns and rows in *vpAreaName*<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

No parâmetro opcional *sheet*, pode designar uma folha específica onde o intervalo será definido (a contagem começa em 0). Se omitido ou se você passar `vk current sheet`, a planilha atual será usada.

##### Objeto devolvido

O comando devolve um objeto que descreve as colunas e linhas congeladas. Este objeto pode conter as seguintes propriedades:

| Propriedade         | Tipo    | Descrição                                                |
| ------------------- | ------- | -------------------------------------------------------- |
| columnCount         | Integer | O número de colunas congeladas à esquerda da folha       |
| trailingColumnCount | Integer | O número de colunas congeladas à direita da folha        |
| rowCount            | Integer | O número de linhas congeladas na parte superior da folha |
| trailingRowCount    | Integer | O número de linhas congeladas na parte inferior da folha |

#### Exemplo

Pretende obter informações sobre o número de colunas e linhas congeladas:

```4d
var $panesObj : Object

 
$panesObj:=VP Get frozen panes("ViewProArea")
```

O objeto devolvido contém, por exemplo:

![](../../assets/en/ViewPro/cmd_vpGetFrozenpanes.PNG)

#### Veja também

[VP SET FROZEN PANES](vp-set-frozen-panes.md)
