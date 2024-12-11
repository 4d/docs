---
id: trunc
title: Trunc
slug: /commands/trunc
displayed_sidebar: docs
---

<!--REF #_command_.Trunc.Syntax-->**Trunc** ( *Numero* ; *decimales* ) : Real<!-- END REF-->
<!--REF #_command_.Trunc.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Numero | Real | &#8594;  | Número a truncar |
| decimales | Integer | &#8594;  | Número de lugares decimales a conservar |
| Resultado | Real | &#8592; | Número truncado a partir del número decimales especificado por decimales |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Trunc.Summary-->Trunc devuelve *número* con su parte decimal truncada a partir del número de decimales especificado por *decimales*.<!-- END REF--> Trunc siempre redondea hacia el valor inferior.

Si *decimales e*s positivo, *número* se trunca por la parte decimal. Si *decimales* es negativo, el truncamiento se hace sobre la parte entera del número.

#### Ejemplo 

El siguiente ejemplo ilustra la manera cómo Trunc funciona con diferentes argumentos. Cada línea asigna un número a la variable *vlResult*. Los comentarios describen los resultados:

```4d
 vlResult:=Trunc(216.897;1) // vlResult vale 216.8
 vlResult:=Trunc(216.897;-1) // vlResult vale 210
 vlResult:=Trunc(-216.897;1) // vlResult vale –216.9
 vlResult:=Trunc(-216.897;-1) // vlResult vale –220
```

#### Ver también 

[Round](round.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 95 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


