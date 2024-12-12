---
id: round
title: Round
slug: /commands/round
displayed_sidebar: docs
---

<!--REF #_command_.Round.Syntax-->**Round** ( *redond* ; *decimales* ) : Real<!-- END REF-->
<!--REF #_command_.Round.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| redond | Real | &#8594;  | Número a redondear |
| decimales | Integer | &#8594;  | Número de lugares decimales a redondear |
| Resultado | Real | &#8592; | Número redondeado para el número de lugares decimales especificado por decimales |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Round.Summary-->Round devuelve *número* redondeado al número de decimales especificado por *decimales*.<!-- END REF-->

Si *decimales e*s positivo, se redondea la parte decimal de *número*. Si *decimales* es negativo, se redondea la parte entera de *número*.

Si la cifra después del número de decimales definido por *decimales e*stá entre 5 y 9, *redond* redondea al valor superior si el número es positivo, y hacia el valor inferior si el número es negativo. Si el digito después de *decimales* está entre 0 y 4, Round redondea hacia cero.

#### Ejemplo 

El siguiente ejemplo ilustra cómo Redondeo funciona con diferentes argumentos. Cada línea asigna un número a la variable *vlResult*. Los comentarios describen los resultados:

```4d
 vlResult:=Round(16.857;2) // vlResult vale 16.86
 vlResult:=Round(32345.67;-3) // vlResult vale 32000
 vlResult:=Round(29.8725;3) // vlResult vale 29.873
 vlResult:=Round(-1.5;0) // vlResult vale –2
```

#### Ver también 

[Trunc](trunc.md)  