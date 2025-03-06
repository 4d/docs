---
id: set-real-comparison-level
title: SET REAL COMPARISON LEVEL
slug: /commands/set-real-comparison-level
displayed_sidebar: docs
---

<!--REF #_command_.SET REAL COMPARISON LEVEL.Syntax-->**SET REAL COMPARISON LEVEL** ( *epsilon* )<!-- END REF-->
<!--REF #_command_.SET REAL COMPARISON LEVEL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| epsilon | Real | &#8594;  | Valor epsilon para comparações de igualdade entre reais |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET REAL COMPARISON LEVEL.Summary-->O comando **SET REAL COMPARISON LEVEL**  retorna o valor epsilon utilizado por 4D para fazer comparações de igualdade de valores e expressões de tipo real.<!-- END REF-->

Um computador sempre realiza cálculos aproximados sobre reais; portanto, as provas de igualdade de valores reais devem ter em conta esta aproximação. 4D faz isto quando compara números reais provando se a diferença entre dois valores é superior ou não a um certo valor. Este valor é chamado **epsilon** e funciona desta maneira: 

Dados dois números reais *a* e *b*, se [Abs](abs.md)(a-b) é maior a epsilon, os números são considerados como diferentes; do contrário, os números são considerados iguais.

Como padrão, 4D, define o valor epsilon em 10 à potência menos 6 (10^-6). Por favor note que o valor *epsilon* sempre deve ser positivo. Exemplos:

* *0.00001=0.00002* retorna Falso, porque a diferença *0.00001* é maior que *10^-6*.
* *0.000001=0.000002* retorna Verdadeiro, porque a diferença *0.000001* não é maior que *10^-6*.
* *0.000001=0.000003* retorna Falso, porque a diferença *0.000002 é* maior que *10^-6*.

Utilizando **SET REAL COMPARISON LEVEL** , pode aumentar ou reduzir o valor epsilon, em função de suas necessidades.

**Advertência:** geralmente, não necessitará utilizar este comando para modificar o valor epsilon como padrão.

**IMPORTANTE:** modificar o epsilon só afeta a comparação de igualdade de reais. Não tem efeito nos outros cálculos e visualizações de valores reais.

**Nota** O comando **SET REAL COMPARISON LEVEL** não tem efeito em pesquisas e ordenações realizadas com campos do tipo Real. Apenas aplica a linguagem 4D.


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 623 |
| Thread-seguro | &cross; |


