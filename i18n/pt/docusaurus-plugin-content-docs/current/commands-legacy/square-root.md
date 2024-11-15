---
id: square-root
title: Square root
slug: /commands/square-root
displayed_sidebar: docs
---

<!--REF #_command_.Square root.Syntax-->**Square root** ( *numero* ) : Real<!-- END REF-->
<!--REF #_command_.Square root.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numero | Real | &#8594;  | Número cuja raiz quadrada é calculada |
| Resultado | Real | &#8592; | Raiz quadrada do número |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Square root.Summary-->Square root retorna a raiz quadrada de *numero*.<!-- END REF-->

#### Exemplo 1 

A linha: 

```4d
 $vrRaizDeDois :=Square root(2)
```

atribui o valor *1.414213562373* a variável *$vrRaizDeDois*.

#### Exemplo 2 

O método a seguir retorna a hipotenusa do triângulo cujos dois lados são passados como parâmetros: 

```4d
  // Método Hipotenusa
  // Hipotenusa( real ; real ) -> real
  // Hipotenusa( ladoA ; ladoB ) -> Hipotenusa
 var $0;$1;$2 : Real
 $0:=Square root(($1^2)+($2^2))
```

Por exemplo, Hipotenusa (4;3) devolve 5.
