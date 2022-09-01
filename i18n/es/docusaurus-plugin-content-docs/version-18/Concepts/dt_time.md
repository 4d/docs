---
id: time
title: Hora
---

- Las variables, campos o expresiones de tipo Hora pueden estar comprendidas entre 00:00:00 y 596,000:00:00.
- Las horas están en formato de 24 horas.
- Un valor de tiempo puede ser tratado como un número. El número devuelto de una hora es el número de segundos desde la medianoche (00:00:00) que representa esa hora.

**Nota:** en el manual de referencia del lenguaje 4D, los parámetros de tipo Hora en las descripciones de los comandos se llaman Hora, excepto cuando se indique lo contrario.

## Constantes literales de tipo hora

Una constante hora está rodeada de signos de interrogación (?...?).

Una constante hora se ordena hora:minuto:segundo, con dos puntos (:) para separar cada parte. Las horas se especifican en formato de 24 horas.

Estos son algunos ejemplos de constantes de tipo hora:

```4d
?00:00:00? ?00:00:00? ?00:00:00? ` media noche
?09:30:00? ?00:00:00? ` media noche
?09:30:00? ` 9:30 am
?13:01:59? ?00:00:00? ` media noche
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` media noche
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` media noche
?09:30:00? ` 9:30 am
?13:01:59? ?00:00:00? ` media noche
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` media noche
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` media noche
?09:30:00? ` 9:30 am
?13:01:59? ?00:00:00? ` media noche
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` midnight
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minute, and 59 seconds
```

Una hora nula se escribe ?00:00:00?

**Consejo:** el Editor de métodos incluye un acceso directo para introducir una hora nula. Para escribir una hora nula, introduzca el carácter de interrogante (?) y pulse Intro.

## Operadores de horas

| Operación         | Sintaxis       | Devuelve | Expression                                                                                                 | Value      |
| ----------------- | -------------- | -------- | ---------------------------------------------------------------------------------------------------------- | ---------- |
| Adición           | Hora + Hora    | Hora     | ?02:03:04? ?02:03:04? + ?01:02:03?                                                                         | ?03:05:07? |
| Resta             | Hora – Hora    | Hora     | ?02:03:04? – ?01:02:03?                                                                                    | ?01:01:01? |
| Adición           | Hora + Número  | Number   | ?02:03:04? ?02:03:04? + 65                                                                                 | 7449       |
| Resta             | Hora – Número  | Number   | ?02:03:04? – 65                                                                                            | 7319       |
| Multiplicación    | Hora * Número  | Number   | ?02:03:04? * 2                                                                                             | 14768      |
| División          | Hora / Número  | Number   | ?02:03:04? ?02:03:04? / 2                                                                                  | 3692       |
| División entera   | Hora \ Número | Number   | ?02:03:04? \ 2                                                                                            | 3692       |
| Módulo            | Hora % Hora    | Hora     | ?20:10:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? | ?02:50:00? |
| Módulo            | Hora % Número  | Number   | ?02:03:04? ?02:03:04? % 2                                                                                  | 0          |
| Igual             | Hora = Hora    | Boolean  | ?01:02:03? ?01:02:03? = ?01:02:03?                                                                         | True       |
|                   |                |          | ?01:02:03? ?01:02:03? = ?01:02:04?                                                                         | False      |
| Desigualdad       | Hora # Hora    | Boolean  | ?01:02:03? # ?01:02:04?                                                                                    | True       |
|                   |                |          | ?01:02:03? # ?01:02:03?                                                                                    | False      |
| Mayor que         | Hora > Hora    | Boolean  | ?01:02:03? # ?01:02:04? ?01:02:03? ?01:02:04? > ?01:02:03?                                                 | True       |
|                   |                |          | ?01:02:03? ?01:02:03? ?01:02:04? > ?01:02:03?                                                              | False      |
| Menor que         | Hora < Hora    | Boolean  | ?01:02:03? ?01:02:03? < ?01:02:04?                                                                         | True       |
|                   |                |          | ?01:02:03? ?01:02:03? < ?01:02:03?                                                                         | False      |
| Mayor o igual que | Hora >= Hora   | Boolean  | ?01:02:03? ?01:02:03? >=?01:02:03?                                                                         | True       |
|                   |                |          | ?01:02:03? ?01:02:04? > ?01:02:03?                                                                         | False      |
| Menor o igual que | Hora <= Hora   | Boolean  | ?01:02:03? ?01:02:03? <=?01:02:03?                                                                         | True       |
|                   |                |          | ?01:02:03? # ?01:02:04? ?01:02:03? <=?01:02:03?                                                            | False      |

### Ejemplo 1

Para obtener una expresión de tipo hora a partir de una expresión que combina una expresión de hora con un número, utilice los comandos `Time` y `Time string`.

Puede combinar expresiones de los tipos hora y número utilizando las funciones `Time` o `Current time`:

```4d
    //La siguiente línea asigna a $vlSeconds el número de segundos   
    //que transcurrirán entre la medianoche y una hora a partir de ahora
$vlSeconds:=Current time+3600
    //La siguiente línea asigna a $vHSoon la hora que será dentro de una hora
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
$t1:=?23:00:00? // Son las 23:00 p.m. // Son las 23:00 p.m.
  // We want to add 2 and a half hours
$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?
$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 a.m. the next morning // Con una simple adición, $t2 es ?25:30:00?
$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 es ?01:30:00? y es 1:30 a.m. a la mañana siguiente
```
