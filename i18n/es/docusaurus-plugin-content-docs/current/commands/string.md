---
id: string
title: String
slug: /commands/string
displayed_sidebar: docs
---

<!--REF #_command_.String.Syntax-->**String** ( *expression* {; *format* {; *addTime*}} ) : Text<br/>**String** ( *expression* ; *base* ) : Text<!-- END REF-->

<!--REF #_command_.String.Params-->

| Parámetros | Tipo          |                             | Descripción                                                                                                                              |
| ---------- | ------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| expression | Expression    | &#8594; | Expresión a convertir en cadena (puede ser Real, Integer, Long Integer, Date, Time, Text, Boolean, Undefined, o Null) |
| format     | Integer, Text | &#8594; | Formato de visualización                                                                                                                 |
| addTime    | Time          | &#8594; | Hora a combinar si *expression* es una fecha                                                                                             |
| base       | Integer       | &#8594; | Valor entre 2 y 36 que representa la base si *expression* es un número                                                                   |
| Resultado  | Text          | &#8592; | expresión convertida en cadena alfanumérica                                                                                              |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones               |
| ----------- | ---------------------------- |
| 21          | Soporte del parámetro *base* |

</details>

## Descripción

<!--REF #_command_.String.Summary-->El comando **String** devuelve en forma de cadena alfanumérica la expresión numérica, fecha, hora, cadena o booleana que se pasa en *expression*.<!-- END REF-->

Si no pasa ningún otro parámetro, la cadena se devuelve con el formato apropiado por defecto. Si pasa *format*, puede forzar que la cadena resultante tenga un formato específico.

El parámetro opcional *addTime* añade una hora a una fecha en un formato combinado. Sólo puede utilizarse cuando el parámetro *expression* es una fecha (ver abajo).

El parámetro opcional *base* sólo puede utilizarse con una *expresión numérica*, devuelve el número en la base especificada (ver más abajo).

### Expresiones numéricas

Cuando se utiliza el comando **String** con una *expression* numérica (Real, Integer, Long Integer), hay dos sintaxis disponibles:

- **String(number{;format})**
- **String(number;base)**

:::note

La función **String** no es compatible con campos de tipo "Integer 64 bits" en modo compilado.

:::

#### String(number{;format})

Si no se pasa el parámetro opcional *format*, la cadena se devuelve con el formato numérico por defecto.

El formato se especifica del mismo modo que se haría para una [entrada numérica en un formulario](../FormObjects/properties_Display.md#number-format). También puede pasar el nombre de un estilo personalizado en *format*. El nombre del estilo personalizado debe ir precedido del caracter `|`. He aquí algunos ejemplos:

| **Ejemplo**                                                                         | **Resultado**                     | **Comentarios**                                    |
| ----------------------------------------------------------------------------------- | --------------------------------- | -------------------------------------------------- |
| String(2^15)                                                     | "32768"                           | Formato por defecto                                |
| String(2^15;"###,##0 Inhabitants")                               | "32,768 Inhabitants"              |                                                    |
| String(1/3;"##0.00000")                          | "0.33333"         |                                                    |
| String(1/3)                                                      | "0.3333333333333" | Formato por defecto(\*)         |
| String(Arctan(1)\*4)                          | "3.14159265359"   | Formato por defecto(\*)         |
| String(Arctan(1)\*4;"##0.00") | "3.14"            |                                                    |
| String(-1;"&x")                              | "0xFFFFFFFF"                      |                                                    |
| String(-1;"&$")                              | "$FFFFFFFF"                       |                                                    |
| String(0 ?+ 7;"&x")                          | "0x0080"                          |                                                    |
| String(0 ?+ 7;"&$")                          | "$80"                             |                                                    |
| String(0 ?+ 14;"&x")                         | "0x4000"                          |                                                    |
| String(0 ?+ 14;"&$")                         | "$4000"                           |                                                    |
| String(50.3;"&xml")          | "50.3"            | Siempre "." como separador decimal |
| String(Num(1=1);"True;;False")                | "True"                            |                                                    |
| String(Num(1=2);"True;;False")                | "False"                           |                                                    |
| String(Log(-1))                               | ""                                | No es un número                                    |
| String(1/0)                                                      | "INF"                             | Número infinito positivo                           |
| String(-1/0)                                                     | "-INF"                            | Número infinito negativo                           |

(\*) El algoritmo para convertir valores reales en texto se basa en 13 dígitos significativos, ver [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md).

#### String(number;base)

El uso de un parámetro *base* (integer) activa un modo específico en el que se pasa en la base del número a devolver. En concreto, esta sintaxis permite convertir números en cadenas hexadecimales.

En el parámetro *base*, pase la base del número en *expression*. Puede pasar cualquier valor entero entre 2 y 36.

Si pasa 0 en *base*, el comando determina la base dependiendo del valor de *expression*. Si *expression* empieza por "0x", se utiliza base 16. En caso contrario, se utiliza la base 10.

:::info

- Esta sintaxis sigue estrictamente la especificación [`toString` EcmaScript sobre el manejo del radix](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tostring).
- Utilizar esta sintaxis con *base*=10 no dará exactamente los mismos resultados que utilizar la sintaxis sin el parámetro *base*. Por ejemplo, si el valor numérico especificado no es un número, se devuelve la cadena "NaN".

:::

| **Ejemplo**                                               | **Resultado** | **Comentarios**                                  |
| --------------------------------------------------------- | ------------- | ------------------------------------------------ |
| String(10;2)                           | "1010"        | cadena binaria                                   |
| String(-10;2)                          | "-1010"       | cadena binaria (negativa)     |
| String(254;16)                         | "fe"          | cadena hexadecimal                               |
| String(-16523461; 16)                  | "-fc20c5"     | cadena hexadecimal (negativa) |
| String(Log(-1); 10) | "NaN"         | No es un número                                  |
| String(1/0; 10)                        | "NaN"         | No es un número                                  |
| String(-1/0; 10)                       | "NaN"         | No es un número                                  |

:::note

Si el valor del número especificado es negativo, el signo se conserva. Este es el caso incluso si la base es 2; la cadena devuelta es > N, la representación binaria positiva del valor numérico precedido por un signo -.

:::

### Expresiones de tipo Date

Si *expression* es una expresión de tipo Date y si omite el parámetro *format*, la cadena se devuelve utilizando el formato por defecto especificado en el sistema.

De lo contrario, en el parámetro *format*, puede pasar:

- o bien un formato predefinido disponible a través de las siguientes constantes del tema *Formatos de visualización de las fechas* (valor longint):

| Constante                   | Valor | Comentario                                                                                                                               |
| --------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Blank if null date          | 100   | Se añade a la constante format. Indica que en caso de un valor null, 4D debe devolver una cadena vacía en lugar de ceros |
| Date RFC 1123               | 10    | Fri, 10 Sep 2010 13:07:20 GMT (ver Notas)                                             |
| Internal date abbreviated   | 6     | 29 dic 2006                                                                                                                              |
| Internal date long          | 5     | 29 diciembre 2006                                                                                                                        |
| Internal date short         | 7     | 12/29/2006                                                                                                                               |
| Internal date short special | 4     | 29/12/06 (pero 29/12/1896 o 29/12/2096)                                                                               |
| ISO Date                    | 8     | 2006-12-29T00:00:00 (ver Notas)                                                       |
| ISO Date GMT                | 9     | 2010-09-13T16:11:53Z (ver Notas)                                                      |
| System date abbreviated     | 2     | dom, 29 dic 2006                                                                                                                         |
| System date long            | 3     | Domingo, 29 diciembre 2006                                                                                                               |
| System date short           | 1     | 12/29/2006                                                                                                                               |

Ejemplos:

```4d
 $vsResult:=String(!2023-11-27!) //"11/27/2023"  
 $vsResult:=String(!2023-11-27!;Internal date long) // "November 27, 2023"  
 $vsResult:=String(!2023-11-27!;ISO Date GMT) // "2023-11-26T23:00:00Z" in French timezone  
```

- o un [formato personalizado basado en un modelo](../Project/date-time-formats.md) (valor cadena)  
  Ejemplos:

```4d
 $vsResult:=String(!2023-11-27!;"EEEE d MMMM y GGGG") //"Lunes 27 de Noviembre de 2023 Anno Domini"  
 $vsResult:=String(!2023-11-27!;"E dd/MM/yyyy zzzz") //"Lun 27/11/2023 GMT+01:00" en la zona horaria francesa  
```

:::note

Los formatos pueden variar en función de la configuración del sistema.

:::

#### Parámetro *addTime*

Al procesar expresiones de fecha, también puede pasar una hora en el parámetro *addTime*. Este parámetro permite combinar una fecha con una hora para generar marcas de tiempo conformes a las normas vigentes (constantes ISO Date GMT y Date RFC 1123). Estos formatos son especialmente útiles en el contexto del procesamiento xml y Web. El parámetro *addTime* solo puede utilizarse cuando el parámetro *expression* es una fecha.

Este parámetro puede utilizarse con formatos de fecha predefinidos o basados en patrones. Ejemplos:

```4d
 $dateTime:=String(!2010-09-09!;ISO date GMT;Current time) //"2010-09-09T08:30:41Z"
 $dateTime2:=String(!2023-11-27!;"E dd/MM/yyyy 'at' hh:mm aa O";?11:15:00?) //"Mon 27/11/2023 at 11:15 AM GMT+1"
```

#### Notas sobre los formatos combinados fecha/hora

- El formato ISO Date GMT corresponde a la norma ISO8601 y contiene una fecha y una hora expresadas con respecto a la zona horaria (GMT).

```4d
 $mydate:=String(Current date;ISO Date GMT;Current time) // devuelve, por ejemplo, 2010-09-13T16:11:53Z  
```

Tenga en cuenta que el caracter "Z" al final indica el formato GMT.  
Si no se pasa el parámetro *addTime*, el comando devuelve la fecha a medianoche (hora local) expresada en hora GMT, lo que puede hacer que la fecha se adelante o se retrase dependiendo de la zona horaria local:

```4d
 $mydate:=String(!13/09/2010!;ISO Date GMT) // devuelve 2010-09-12T22:00:00Z en Francia  
```

- El formato ISO Date es similar al formato ISO Date GMT, salvo que expresa la fecha y la hora sin tener en cuenta la zona horaria. Tenga en cuenta que, dado que este formato no cumple la norma ISO8601, su uso debe reservarse para fines muy específicos.

```4d
 $mydate:=String(!13/09/2010!;ISO Date) // devuelve 2010-09-13T00:00:00 independientemente de la zona horaria  
 $mydate:=String(Current date;ISO Date;Current time) // devuelve 2010-09-13T18:11:53  
```

- El formato Date RFC 1123 formatea una combinación fecha/hora según el estándar definido por RFC 822 y 1123\. Este formato es necesario, por ejemplo, para establecer la fecha de caducidad de las cookies en un encabezado HTTP.

```4d
 $mydate:=String(Current date;Date RFC 1123;Current time) // devuelve, por ejemplo Fri, 10 Sep 2010 13:07:20 GMT  
```

La hora expresada tiene en cuenta la zona horaria (zona GMT). Si solo pasa una fecha, el comando devuelve la fecha a medianoche (hora local) expresada en hora GMT, lo que puede hacer que la fecha se adelante o se atrase en función de la zona horaria local:

```4d
 $mydate:=String(!2010-09-09!;Date RFC 1123) // devuelve Wed, 08 Sep 2010 22:00:00 GMT  
```

### Expresiones de tipo hora

Si *expression* es una expresión de tiempo y omite el parámetro *format*, la cadena se devuelve utilizando el formato predeterminado HH:MM:SS.

De lo contrario, en el parámetro *format*, puede pasar:

- o bien un formato predefinido disponible a través de las siguientes constantes del tema *Formatos de visualización de las horas* (valor longint):

| Constante                    | Valor | Comentario                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blank if null time           | 100   | Se añade a la constante format. Indica que en caso de un valor null, 4D debe devolver una cadena vacía en lugar de ceros                                                                                                                                                                                              |
| HH MM                        | 2     | 01:02                                                                                                                                                                                                                                                                                                                 |
| HH MM AM PM                  | 5     | 1:02 AM                                                                                                                                                                                                                                                                                                               |
| HH MM SS                     | 1     | 01:02:03                                                                                                                                                                                                                                                                                              |
| Hour min                     | 4     | 1 hora 2 minutos                                                                                                                                                                                                                                                                                                                      |
| Hora min seg                 | 3     | 1 hora 2 minutos 3 segundos                                                                                                                                                                                                                                                                                                           |
| ISO time                     | 8     | 0000-00-00T01:02:03\. Corresponde a la norma ISO8601 y contiene, en teoría, una fecha y una hora. Dado que este formato no admite fechas/horas combinadas, la parte de la fecha se llena con 0s. Este formato expresa la hora local. |
| Min sec                      | 7     | 62 minutos 3 segundos                                                                                                                                                                                                                                                                                                                 |
| MM SS                        | 6     | 62:03                                                                                                                                                                                                                                                                                                                 |
| System time long             | 11    | 1:02:03 AM HNEC (sólo Mac)                                                                                                                                                                                                                                                         |
| System time long abbreviated | 10    | 1-02-03 AM (sólo Mac)                                                                                                                                                                                                                                                                                              |
| System time short            | 9     | 01:02:03                                                                                                                                                                                                                                                                                              |

Ejemplos:

```4d
 $vsResult:=String(?17:30:45?;HH MM AM PM) //"5:30 PM"  
 $vsResult:=String(?17:30:45?;Hour Min Sec) //"17 horas 30 minutos 45 segundos"  
```

- o un [formato personalizado basado en un modelo](../Project/date-time-formats.md) (valor cadena)  
  Ejemplos:

```4d
 $vsResult:=String(?17:30:45?;"hh:mm aa O") //"05:30 PM GMT+1"  
 $vsResult:=String(?17:30:45?;"'It is' K a") //"It is 5 PM"  
```

### Expresiones de tipo cadena

Si *expression* es de tipo Alfa o Texto, el comando devuelve el mismo valor que el pasado en el parámetro. Esto puede ser útil sobre todo en la programación genérica que utiliza punteros.  
En este caso, el parámetro *format*, si se pasa, se ignora.

### Expresiones booleanas

Si *expression* es de tipo booleano, el comando devuelve la cadena "True" o "False" en el idioma de la aplicación (por ejemplo, "Vrai" o "Faux" en una versión francesa de 4D).  
En este caso, el parámetro *format*, si se pasa, se ignora.

### Expresiones indefinidas

Si *expression* se evalúa como indefinida, el comando devuelve una cadena vacía. Esto es útil cuando se espera que el resultado de una expresión (por ejemplo, un atributo de objeto) sea una cadena de caracteres, aunque pueda ser indefinida.

### Expresiones nulas

Si *expression* se evalúa como Null, el comando devuelve la cadena "null". Esto es útil cuando se espera que el resultado de una expresión (por ejemplo, un atributo de objeto) sea una cadena de caracteres, aunque pueda ser null.

## Ver también

[Bool](../commands-legacy/bool.md)  
[Date](../commands-legacy/date.md)  
[Num](num.md)  
[Time string](../commands-legacy/time-string.md)  
[Timestamp](../commands-legacy/timestamp.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 10                          |
| Hilo seguro       | &check; |


