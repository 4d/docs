---
id: method-get-modification-date
title: METHOD GET MODIFICATION DATE
slug: /commands/method-get-modification-date
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET MODIFICATION DATE.Syntax-->**METHOD GET MODIFICATION DATE** ( *ruta* ; *fechaMod* ; *horaMod* {; *operador*} )<!-- END REF-->
<!--REF #_command_.METHOD GET MODIFICATION DATE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta | Text, Text array | &#8594;  | Texto o array texto que contiene una o más rutas de acceso |
| fechaMod | Date, Date array | &#8592; | Fecha(s) de modificación de métodos(s) |
| horaMod | Time, Integer array | &#8592; | Hora(s) de modificación de métodos(s) |
| operador | * | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.METHOD GET MODIFICATION DATE.Summary-->El comando **METHOD GET MODIFICATION DATE** devuelve en los parámetros *fechaMod* y *horaMod* las fechas y horas de la última modificación de los métodos designados por el parámetro *ruta*.<!-- END REF-->

Puede utilizar dos tipos de sintaxis, basadas en arrays o variables:  

```4d
 var tVpath : Text // variables
 var vDate : Date
 var vTime : Time
 METHOD GET MODIFICATION DATE(tVpath;vDate;vTime) // fecha y hora de un solo método
```

```4d
 ARRAY TEXT(arrPaths;0) // arrays
 ARRAY DATE(arrDates;0)
 ARRAY LONGINT(arrTimes;0)
 METHOD GET MODIFICATION DATE(arrPaths;arrDates;arrTimes) // fechas y horas de varios métodos
```

No es posible combinar las dos sintaxis. 

Si el comando se ejecuta desde un componente, se aplica por defecto a los métodos del componente. Si pasa el parámetro *\**, accede a los métodos de la base local.

#### Ejemplo 1 

Quiere conocer las fechas y horas de modificación por varios métodos:

```4d
 ARRAY TEXT(arrPaths;0)
 APPEND TO ARRAY(arrPaths;"MyMethod1")
 APPEND TO ARRAY(arrPaths;"MyMethod2")
 ...
 ARRAY DATE(arrDates;0)
 ARRAY LONGINT(arrTimes;0)
 METHOD GET MODIFICATION DATE(arrPaths;arrDates;arrTimes)
```

#### Ejemplo 2 

Quiere obtener las fechas de modificación de los métodos de un módulo con el prefijo "Web\_". No se puede utilizar el símbolo "@" en una ruta; Sin embargo, puede escribir:

```4d
 ARRAY TEXT($_webMethod;0)
 METHOD GET NAMES($_webMethod;"Web_@")
 ARRAY DATE($_date;0)
 ARRAY LONGINT($_time;0)
 METHOD GET MODIFICATION DATE($_webMethod;$_date;$_time)
```

  


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1170 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


