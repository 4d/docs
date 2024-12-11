---
id: trunc
title: Trunc
slug: /commands/trunc
displayed_sidebar: docs
---

<!--REF #_command_.Trunc.Syntax-->**Trunc** ( *numero* ; *decimais* ) : Real<!-- END REF-->
<!--REF #_command_.Trunc.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numero | Real | &#8594;  | Número a ser truncado |
| decimais | Integer | &#8594;  | Número de decimais usadas para truncar |
| Resultado | Real | &#8592; | Número com a parte decimal truncada ao número de casas decimais especificada por Decimais |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Trunc.Summary-->Trunc retorna *numero* com sua parte decimal truncada a partir do número de decimais especificada por *decimais*.<!-- END REF--> Trunc sempre arredonda até o valor inferior.

Se *decimais* é positivo, *numero* se trunca pela parte decimal. Se *decimais* é negativo, o truncamento é feito sobre a parte inteira do número.

#### Exemplo 

O exemplo a seguir ilustra a maneira como **Trunc** funciona com diferentes argumentos. Cada linha atribui um número à variável *vlResult*. Os comentários descrevem os resultados:

```4d
 vlResult:=Trunc(216.897;1) // vlResult vale 216.8
 vlResult:=Trunc(216.897;-1) // vlResult vale 210
 vlResult:=Trunc(-216.897;1) // vlResult vale –216.9
 vlResult:=Trunc(-216.897;-1) // vlResult vale –220
```

#### Ver também 

[Round](round.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 95 |
| Thread-seguro | &check; |
| Proibido no servidor ||


