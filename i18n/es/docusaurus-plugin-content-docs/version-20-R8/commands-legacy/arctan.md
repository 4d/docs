---
id: arctan
title: Arctan
slug: /commands/arctan
displayed_sidebar: docs
---

<!--REF #_command_.Arctan.Syntax-->**Arctan** ( *Numero* ) : Real<!-- END REF-->
<!--REF #_command_.Arctan.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Numero | Real | &#8594;  | Tangente para la cual calcular el ángulo |
| Resultado | Real | &#8592; | Ángulo en radianes |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Arctan.Summary-->Arctan devuelve el ángulo, expresado en radianes, de la tangente *número*.<!-- END REF-->4D ofrece las constantes predefinidas *Pi*, Degree, y Radian. *Pi* devuelve el número Pi (3.14159...), Degree devuelve el valor en radianes de un grado (0.01745...) y Radian devuelve el valor en grados de un radián (57.29577...).

#### Ejemplo 

El siguiente ejemplo muestra el valor de Pi:

```4d
 ALERT("Pi es igual a: "+String(4*Arctan(1)))
```

#### Ver también 

[Cos](cos.md)  
[Sin](sin.md)  
[Tan](tan.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 20 |
| Hilo seguro | &check; |


