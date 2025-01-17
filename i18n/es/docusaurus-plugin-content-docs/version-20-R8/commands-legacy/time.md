---
id: time
title: Time
slug: /commands/time
displayed_sidebar: docs
---

<!--REF #_command_.Time.Syntax-->**Time** ( *valHora* ) : Time<!-- END REF-->
<!--REF #_command_.Time.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| valHora | Text, Integer | &#8594;  | Valor a devolver en forma de hora |
| Resultado | Time | &#8592; | Hora especificada por horaCadena |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Time.Summary-->El comando Time devuelve una expresión de tipo Hora equivalente a la hora especificada en el parámetro *valHora*.<!-- END REF-->

El parámetro *valHora* debe contener:

* una cadena que contenga una hora expresada en uno de los siguientes formatos de hora estándar de 4D correspondientes al lenguaje de su sistema (para mayor información, consulte la descripción del comando [String](string.md)).
* un entero largo que representa el número de segundos transcurridos desde 00:00:00.

**Nota:** si la expresión *valHora* se evalúa como indefinida, **Time** devuelve una hora vacía (00:00:00). Esto es útil cuando se espera que el resultado de una expresión (por ejemplo, un atributo objeto) sea una hora, incluso si puede ser indefinida.

#### Ejemplo 1 

El siguiente ejemplo muestra una caja de alerta con el mensaje “1:00 P.M. = 13 horas 0 minutos”:

```4d
 ALERT("1:00 P.M. = "+String(Time("13:00:00");Hour Min))
```

#### Ejemplo 2 

Puede expresar todo valor numérico como una hora:

```4d
 vTime:=Time(10000)
  //vTime is 02:46:40
 vTime2:=Time((60*60)+(20*60)+5200)
  //vTime2 is 02:46:40
```

#### Ver también 

[ARRAY TIME](array-time.md)  
[Bool](bool.md)  
[String](string.md)  
[Time string](time-string.md)  
[Timestamp](timestamp.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 179 |
| Hilo seguro | &check; |


