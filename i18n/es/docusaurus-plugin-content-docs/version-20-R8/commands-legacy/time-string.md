---
id: time-string
title: Time string
slug: /commands/time-string
displayed_sidebar: docs
---

<!--REF #_command_.Time string.Syntax-->**Time string** ( *segundos* ) : Text<!-- END REF-->
<!--REF #_command_.Time string.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| segundos | Integer, Time | &#8594;  | Segundos desde la media noche |
| Resultado | Text | &#8592; | Hora como una cadena en formato 24 horas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Time string.Summary-->El comando Time string devuelve la cadena de la expresión tipo hora que usted pasó en *segundos*.<!-- END REF-->

El formato de la cadena es HH:MM:SS.

Si pasa un número de segundos superior al número de segundos que hay en un día (86 400), Time string sigue añadiendo horas, minutos y segundos. Por ejemplo, Time string (86401) devuelve 24:00:01.

**Nota:** si necesita el formato de la cadena de la expresión de tipo hora en una variedad de formatos, utilice [String](string.md "String").

#### Ejemplo 

El siguiente muestra una caja de alerta con el mensaje, “46 800 segundos representan 13:00:00.”

```4d
 ALERT("46800 segundos representan "+Time string(46800))
```

#### Ver también 

[String](string.md)  
[Time](time.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 180 |
| Hilo seguro | &check; |


