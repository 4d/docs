---
id: time
title: Hora
---

Las variables, campos o expresiones de tipo Hora pueden estar comprendidas entre 00:00:00 y 596,000:00:00.

Las horas están en formato de 24 horas.

Un valor de tiempo puede ser tratado como un número. El número devuelto de una hora es el número de segundos desde la medianoche (00:00:00) que representa esa hora.

**Note:** In the _4D Language Reference_ manual, Time parameters in command descriptions are denoted as Time, except when marked otherwise.

## Constantes literales de tipo hora

Una constante hora está rodeada de signos de interrogación (?...?).

Una constante hora se ordena hora:minuto:segundo, con dos puntos (:) para separar cada parte. Las horas se especifican en formato de 24 horas.

Estos son algunos ejemplos de constantes de tipo hora:

```4d
?00:00:00? ` midnight
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minute, and 59 seconds
```

Una hora nula se escribe ?00:00:00?

**Tip:** The Code Editor includes a shortcut for entering a null time. To type a null time, enter the question mark (?) character and press Enter.

## Operadores de horas

| Operación       | Sintaxis       | Devuelve | Expression                                                                                                                                                                                                                                                                                                                                                                                                 | Valor                                      |
| --------------- | -------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Adición         | Hora + Hora    | Hora     | ?02:03:04? ?02:03:04? + ?01:02:03?                                                                                                                                                                                                                                                                         | ?03:05:07? |
| Resta           | Hora – Hora    | Hora     | ?02:03:04? – ?01:02:03?                                                                                                                                                                                                                                                                                                                    | ?01:01:01? |
| Adición         | Hora + Número  | Number   | ?02:03:04? ?02:03:04? + 65                                                                                                                                                                                                                                                                                                                 | 7449                                       |
| Resta           | Hora – Número  | Number   | ?02:03:04? – 65                                                                                                                                                                                                                                                                                                                                                            | 7319                                       |
| Multiplicación  | Hora \* Número | Number   | ?02:03:04? \* 2                                                                                                                                                                                                                                                                                                                                                            | 14768                                      |
| División        | Hora / Número  | Number   | ?02:03:04? ?02:03:04? / 2                                                                                                                                                                                                                                                                                                                  | 3692                                       |
| División entera | Hora \ Número  | Number   | ?02:03:04? \ 2                                                                                                                                                                                                                                                                                                                                                             | 3692                                       |
| Módulo          | Hora % Hora    | Hora     | ?20:10:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? | ?02:50:00? |
| Módulo          | Hora % Número  | Number   | ?02:03:04? ?02:03:04? % 2                                                                                                                                                                                                                                                                                                                  | 0                                          |
| Igual           | Hora = Hora    | Boolean  | ?01:02:03? ?01:02:03? = ?01:02:03?                                                                                                                                                                                                                                                                         | True                                       |

```
		||||?01:02:03? = ?01:02:04?	|False|
```

|Inequality	|Time # Time	|Boolean	|?01:02:03? # ?01:02:04?	|True|
||||?01:02:03? # ?01:02:03?	|False|
|Greater than	|Time > Time	|Boolean	|?01:02:04? > ?01:02:03?	|True|
||||		?01:02:03? > ?01:02:03?	|False|
|Less than	|Time < Time	|Boolean	|?01:02:03? < ?01:02:04?	|True|
||||	?01:02:03? < ?01:02:03?	|False|
|Greater than or equal to	|Time >= Time	|Boolean	|?01:02:03? >=?01:02:03?	|True|
||||?01:02:03? >=?01:02:04?	|False|
|Less than or equal to	|Time <= Time	|Boolean	|?01:02:03? <=?01:02:03?|	True|
||||?01:02:04? <=?01:02:03?	|False|

### Ejemplo 1

To obtain a time expression from an expression that combines a time expression with a number, use the commands `Time` and `Time string`.

You can combine expressions of the time and number types using the `Time` or `Current time` functions:

```4d
	//The following line assigns to $vlSeconds the number of seconds   
	//that will be elapsed between midnight and one hour from now
$vlSeconds:=Current time+3600
	//The following line assigns to $vHSoon the time it will be in one hour
$vhSoon:=Time(Current time+3600)
```

La segunda línea podría escribirse de forma más sencilla:

```4d
  // La siguiente línea asigna a $vHSoon la hora que será en una hora
 $vhSoon:=Current time+?01:00:00?
```

### Ejemplo 2

El operador Modulo puede utilizarse, más concretamente, para sumar tiempos que tengan en cuenta el formato de 24 horas:

```4d
$t1:=?23:00:00? // It is 23:00 hours
  // We want to add 2 and a half hours
$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?
$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 hour the next morning
```
