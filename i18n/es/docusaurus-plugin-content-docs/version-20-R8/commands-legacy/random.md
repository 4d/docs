---
id: random
title: Random
slug: /commands/random
displayed_sidebar: docs
---

<!--REF #_command_.Random.Syntax-->**Random**  : Integer<!-- END REF-->
<!--REF #_command_.Random.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número aleatorio |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Random.Summary-->Random devuelve un valor entero aleatorio entre 0 y 32 767 (inclusive).<!-- END REF-->

Para definir un rango de enteros, utilice esta fórmula:

```4d
 (Random%(vEnd-vStart+1))+vStart
```

El valor *vStart* es el primer número del intervalo, y el valor *vEnd* es el último.

#### Ejemplo 

El siguiente ejemplo asigna un valor aleatorio entre 10 y 30 a la variable *vlResult*:

```4d
 vlResult:=(Random%21)+10
```


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 100 |
| Hilo seguro | &check; |


