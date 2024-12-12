---
id: round
title: Round
slug: /commands/round
displayed_sidebar: docs
---

<!--REF #_command_.Round.Syntax-->**Round** ( *round* ; *decimais* ) : Real<!-- END REF-->
<!--REF #_command_.Round.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| round | Real | &#8594;  | Número a ser arredondado |
| decimais | Integer | &#8594;  | Número de casas decimais a arredondar |
| Resultado | Real | &#8592; | Valor arredondado ao número de casas decimais especificada por decimais |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Round.Summary-->Round retorna *numero* arredondado ao número de decimais especificado por *decimais*.<!-- END REF-->

Se *decimais*  é positivo, se arredonda a parte decimal de *numero*. Se *decimais* é negativo, a parte inteira de *número* é arredondada.

Se o dígito depois de *decimais* está entre 5 e 9, *round* arredonda ao valor superior se o número é positivo, e até o valor inferior se o número for negativo. Se o dígito depois de *decimais* está entre 0 e 4, Round arredonda até zero.

#### Exemplo 

O exemplo a seguir ilustra como Round funciona com diferentes argumentos. Cada linha atribui um número à variável *vlResult*. Os comentários descrevem os resultados:

```4d
 vlResult:=Round(16.857;2) // vlResult vale 16.86
 vlResult:=Round(32345.67;-3) // vlResult vale 32000
 vlResult:=Round(29.8725;3) // vlResult vale 29.873
 vlResult:=Round(-1.5;0) // vlResult vale –2
```

#### Ver também 

[Trunc](trunc.md)  