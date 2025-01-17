---
id: year-of
title: Year of
slug: /commands/year-of
displayed_sidebar: docs
---

<!--REF #_command_.Year of.Syntax-->**Year of** ( *fecha* ) : Integer<!-- END REF-->
<!--REF #_command_.Year of.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fecha | Date | &#8594;  | Fecha para la cual devolver el año |
| Resultado | Integer | &#8592; | Número indicando el año de la fecha |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Year of.Summary-->El comando Year of devuelve el año de *fecha*.<!-- END REF-->

#### Ejemplo 1 

El siguiente ejemplo muestra el uso de Year of. Los resultados se asignan a la variable *vResult*.

```4d
 vResult:=Year of(!25/12/92!) // vResult toma el valor 1992
 vResult:=Year of(!25/12/1992!) // vResult toma el valor 1992
 vResult:=Year of(!25/12/1892!) // vResult toma el valor 1892
 vResult:=Year of(!25/12/2092!) // vResult toma el valor 2092
 vResult:=Year of(Current date) // vResult toma el valor del año de la fecha actual
```

#### Ejemplo 2 

Ver el ejemplo del comando [Current date](current-date.md "Current date").

#### Ver también 

[Day of](day-of.md)  
[Month of](month-of.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 25 |
| Hilo seguro | &check; |


