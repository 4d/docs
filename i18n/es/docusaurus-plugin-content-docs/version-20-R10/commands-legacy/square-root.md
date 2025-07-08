---
id: square-root
title: Square root
slug: /commands/square-root
displayed_sidebar: docs
---

<!--REF #_command_.Square root.Syntax-->**Square root** ( *Numero* ) : Real<!-- END REF-->
<!--REF #_command_.Square root.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Numero | Real | &#8594;  | Número al que se le va a calcular la raíz cuadrada |
| Resultado | Real | &#8592; | Raíz cuadrada del número |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Square root.Summary-->Square root devuelve la raíz cuadrada de *número*.<!-- END REF-->

#### Ejemplo 1 

La línea:

```4d
 $vrRaizDeDos :=Square root(2)
```

asigna el valor *1.414213562373* a la variable *$vrRaizDeDos*.

#### Ejemplo 2 

El siguiente método devuelve la hipotenusa del triángulo cuyos dos lados son pasados como parámetros:

```4d
  // Método Hipotenusa
  // Hipotenusa( real ; real ) -> real
  // Hipotenusa( ladoA ; ladoB ) -> Hipotenusa
 var $0;$1;$2 : Real
 $0:=Square root(($1^2)+($2^2))
```

Por ejemplo, Hipotenusa (4;3) devuelve 5.


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 539 |
| Hilo seguro | &check; |


