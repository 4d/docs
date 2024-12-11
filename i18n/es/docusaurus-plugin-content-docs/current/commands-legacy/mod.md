---
id: mod
title: Mod
slug: /commands/mod
displayed_sidebar: docs
---

<!--REF #_command_.Mod.Syntax-->**Mod** ( *número1* ; *número2* ) : Real<!-- END REF-->
<!--REF #_command_.Mod.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| número1 | Integer | &#8594;  | Número a dividir |
| número2 | Integer | &#8594;  | Número divisor |
| Resultado | Real | &#8592; | Devuelve el resto de la división |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Mod.Summary-->El comando Mod devuelve el resto de la división entera de *número1* entre *número2*.<!-- END REF-->  
• Mod acepta expresiones de tipo Entero, Entero largo y Reales. Sin embargo, si *número1* o *número2* son números reales, los números primeros son redondeados y luego se calcula Mod.   
• Sea cuidadoso cuando utilice Mod con números reales de gran tamaño (sobre 2^31), ya que en este caso, su operación podría alcanzar los límites de las capacidades de cálculo de los procesadores estándar.

Igualmente puede utilizar el operador *%* para calcular el resto (ver *Operadores numéricos*).

**Advertencia:** el operador *%* devuelve resultados válidos con expresiones de tipo Entero y Entero largo. Para calcular el módulo de valores reales, debe utilizar el comando Mod.

#### Ejemplo 

El siguiente ejemplo ilustra el funcionamiento de Mod con diferentes argumentos. Cada línea asigna un número a la variable *vlResult*. Los comentarios describen los resultados:

```4d
 vlResult:=Mod(3;2) // vlResult vale 1
 vlResult:=Mod(4;2) // vlResult vale 0
 vlResult:=Mod(3.5;2) // vlResult vale 0
```


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 98 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


