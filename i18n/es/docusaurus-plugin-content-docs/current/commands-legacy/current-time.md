---
id: current-time
title: Current time
slug: /commands/current-time
displayed_sidebar: docs
---

<!--REF #_command_.Current time.Syntax-->**Current time** {( * )} : Time<!-- END REF-->
<!--REF #_command_.Current time.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Devuelve la hora actual del servidor |
| Resultado | Time | &#8592; | Hora actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Current time.Summary-->El comando Current time devuelve la hora actual del reloj de sistema.<!-- END REF--> 

La hora actual siempre está entre *00:00:00* y *23:59:59*. Utilice [String](string.md "String") o [Time string](time-string.md "Time string") para convertir en cadena la expresión de tipo hora devuelta por Current time.

**4D Server:** si utiliza el parámetro (\*) cuando ejecuta esta función en un equipo 4D Client, la función devuelve la hora actual del servidor.

#### Ejemplo 1 

El siguiente ejemplo le muestra cómo medir la duración de una operación. Acá, LongOperation es un método que necesita ser cronometrado:

```4d
 $vhStartTime:=((Current date-!1980-01-01!)*86400)+Current time //Guardar la hora de inicio, segundos después de 1.1.1980
 LongOperation //Realizar la operación
 $vhEndTime:=((Current date-!1980-01-01!)*86400)+Current time
 ALERT("The operation took "+String($vhEndTime-$vhStartTime)+" seconds.") //Mostrar la duración de la operación
```

#### Ejemplo 2 

El siguiente ejemplo extrae las horas, minutos y segundos de la hora actual:

```4d
 $vhAhora:=Current time
 ALERT("La hora actual es: "+String($vhAhora\3600))
 ALERT("El minuto actual es: "+String(($vhAhora\60)%60))
 ALERT("El segundo actual es: "+String($vhAhora%60))
```

#### Ver también 

[Milliseconds](milliseconds.md)  
[String](string.md)  
[Tickcount](tickcount.md)  