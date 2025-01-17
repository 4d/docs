---
id: int
title: Int
slug: /commands/int
displayed_sidebar: docs
---

<!--REF #_command_.Int.Syntax-->**Int** ( *Numero* ) : Real<!-- END REF-->
<!--REF #_command_.Int.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Numero | Real | &#8594;  | Número cuya parte entera se devuelve |
| Resultado | Real | &#8592; | Parte entera de número |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Int.Summary-->Int devuelve la parte entera de *número,* redondeando al entero inferior.<!-- END REF--> 

#### Ejemplo 

El siguiente ejemplo ilustra el funcionamiento de Int para números positivos y negativos. Note que la porción decimal del número se elimina:

```4d
 vlResult:=Int(123.4) // vlResult vale 123
 vlResult:=Int(-123.4) // vlResult vale –124
```

#### Ver también 

[Dec](dec.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 8 |
| Hilo seguro | &check; |


