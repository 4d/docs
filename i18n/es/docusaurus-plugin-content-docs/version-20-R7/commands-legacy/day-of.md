---
id: day-of
title: Day of
slug: /commands/day-of
displayed_sidebar: docs
---

<!--REF #_command_.Day of.Syntax-->**Day of** ( *fecha* ) : Integer<!-- END REF-->
<!--REF #_command_.Day of.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fecha | Date | &#8594;  | Fecha para la cual devolver el día |
| Resultado | Integer | &#8592; | Día del mes de la fecha |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Day of.Summary-->El comando Day of devuelve el día del mes de *fecha*.<!-- END REF-->

**Nota:** Day of devuelve un valor entre 1 y 31\. Para obtener el día de la semana de una fecha, utilice el comando [Day number](day-number.md "Day number").

#### Ejemplo 1 

El siguiente ejemplo muestra el uso de Day of. Los valores se asignan a la variable *vResult*. Los comentarios describen el valor en *vResult*:

```4d
 vResult:=Day of(!25/12/92!) // vResult recibe el valor 25
 vResult:=Day of(Current date) // vResult toma el valor del día de la fecha actual
```

#### Ejemplo 2 

Ver el ejemplo para el comando [Current date](current-date.md "Current date").

#### Ver también 

[Day number](day-number.md)  
[Month of](month-of.md)  
[Year of](year-of.md)  