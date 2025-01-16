---
id: dec
title: Dec
slug: /commands/dec
displayed_sidebar: docs
---

<!--REF #_command_.Dec.Syntax-->**Dec** ( *Numero* ) : Real<!-- END REF-->
<!--REF #_command_.Dec.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Numero | Real | &#8594;  | Número cuya parte decimal se devuelve |
| Resultado | Real | &#8592; | Parte decimal de número |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Dec.Summary-->Dec devuelve la parte decimal de *número*.<!-- END REF--> El valor devuelto siempre es positivo o cero.

#### Ejemplo 

El siguiente ejemplo utiliza un valor monetario expresado como un número real, y extrae la parte de dólares y la parte de centavos. SivrCantidad es 7.31, luego *vlDolares* vale 7 y *vlCents* 31:

```4d
 vlDolares:=Int(vrCantidad) // Obtener los dólares
 vlCents:=Dec(vrCantidad)*100 // Obtener la parte decimal
```

#### Ver también 

[Int](int.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 9 |
| Hilo seguro | &check; |


