---
id: not
title: Not
slug: /commands/not
displayed_sidebar: docs
---

<!--REF #_command_.Not.Syntax-->**Not** ( *booleano* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Not.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| booleano | Boolean | &srarr; | Valor booleano a negar |
| Resultado | Boolean | &larr; | Opuesto del booleano |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Not.Summary-->La función Not devuelve la negación del *booleano*, cambiando Verdadero por Falso o Falso por Verdadero.<!-- END REF-->

#### Ejemplo 

Este ejemplo asigna primero Verdadero a una variable, luego cambia el valor de la variable a Falso, y luego nuevamente a Verdadero.

```4d
 vResultado:=True // vResultado toma el valor Verdadero
 vResultado:=Not(vResultado) // vResultado toma el valor Falso
 vResultado:=Not(vResultado) // vResultado toma el valor Verdadero
```

#### Ver también 

[False](false.md)  
[True](true.md)  