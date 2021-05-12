---
id: time
title: Hora
---

Las variables, campos o expresiones de tipo Hora pueden estar comprendidas entre 00:00:00 y 596,000:00:00.

Las horas están en formato de 24 horas.

Un valor de tiempo puede ser tratado como un número. El número devuelto de una hora es el número de segundos desde la medianoche (00:00:00) que representa esa hora.

**Note:** In the *4D Language Reference* manual, Time parameters in command descriptions are denoted as Time, except when marked otherwise.

## Time literals

Una constante hora está rodeada de signos de interrogación (?...?).

Una constante hora se ordena hora:minuto:segundo, con dos puntos (:) para separar cada parte. Las horas se especifican en formato de 24 horas.

Estos son algunos ejemplos de constantes de tipo hora:

```4d
?00:00:00? ` midnight
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minute, and 59 seconds
```

Una hora nula se escribe ?00:00:00?

**Consejo:** el Editor de métodos incluye un acceso directo para introducir una hora nula. Para escribir una hora nula, introduzca el carácter de interrogante (?) y pulse Intro.

## Time operators

| Operation                | Syntax         | Returns  | Expression              | Value      |
| ------------------------ | -------------- | -------- | ----------------------- | ---------- |
| Addition                 | Time + Time    | Hora     | ?02:03:04? + ?01:02:03? | ?03:05:07? |
| Subtraction              | Time – Time    | Hora     | ?02:03:04? – ?01:02:03? | ?01:01:01? |
| Addition                 | Time + Number  | Number   | ?02:03:04? + 65         | 7449       |
| Subtraction              | Time – Number  | Number   | ?02:03:04? – 65         | 7319       |
| Multiplication           | Time * Number  | Number   | ?02:03:04? * 2          | 14768      |
| Division                 | Time / Number  | Number   | ?02:03:04? / 2          | 3692       |
| Longint division         | Time \ Number | Number   | ?02:03:04? \ 2         | 3692       |
| Modulo                   | Time % Time    | Hora     | ?20:10:00? % ?04:20:00? | ?02:50:00? |
| Modulo                   | Time % Number  | Number   | ?02:03:04? % 2          | 0          |
| Equality                 | Time = Time    | Booleano | ?01:02:03? = ?01:02:03? | True       |
|                          |                |          | ?01:02:03? = ?01:02:04? | False      |
| Inequality               | Time # Time    | Booleano | ?01:02:03? # ?01:02:04? | True       |
|                          |                |          | ?01:02:03? # ?01:02:03? | False      |
| Greater than             | Time > Time    | Booleano | ?01:02:04? > ?01:02:03? | True       |
|                          |                |          | ?01:02:03? > ?01:02:03? | False      |
| Less than                | Time < Time    | Booleano | ?01:02:03? < ?01:02:04? | True       |
|                          |                |          | ?01:02:03? < ?01:02:03? | False      |
| Greater than or equal to | Time >= Time   | Booleano | ?01:02:03? >=?01:02:03? | True       |
|                          |                |          | ?01:02:03? >=?01:02:04? | False      |
| Less than or equal to    | Time <= Time   | Booleano | ?01:02:03? <=?01:02:03? | True       |
|                          |                |          | ?01:02:04? <=?01:02:03? | False      |

### Example 1

Para obtener una expresión de tipo hora a partir de una expresión que combina una expresión de hora con un número, utilice los comandos `Time` y `Time string`.

Puede combinar expresiones de los tipos hora y número utilizando las funciones `Time` o `Current time`:

```4d
    //The following line assigns to $vlSeconds the number of seconds   
    //that will be elapsed between midnight and one hour from now
$vlSeconds:=Current time+3600
    //The following line assigns to $vHSoon the time it will be in one hour
$vhSoon:=Time(Current time+3600)
```

La segunda línea podría escribirse de forma más sencilla:

```4d
  // The following line assigns to $vHSoon the time it will be in one hour
 $vhSoon:=Current time+?01:00:00?
```

### Example 2

El operador Modulo puede utilizarse, más concretamente, para sumar tiempos que tengan en cuenta el formato de 24 horas:

```4d
$t1:=?23:00:00? // It is 23:00 p.m.
  // We want to add 2 and a half hours
$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?
$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 a.m. the next morning
```

