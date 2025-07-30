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

Si no pasa ningún parámetro, la cadena se devuelve con el formato apropiado por defecto. Si pasa *format*, puede forzar que la cadena resultante tenga un formato específico.

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

El formato se especifica del mismo modo que se haría para una [entrada numérica en un formulario](../FormObjects/properties_Display.md#number-format). También puede pasar el nombre de un estilo personalizado en *format*. The custom style name must be preceded by the `|` character. He aquí algunos ejemplos:

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
| String(-1/0)                                                     | "-INF"                            | Negative infinite number                           |

(\*) El algoritmo para convertir valores reales en texto se basa en 13 dígitos significativos, ver [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md).

#### String(number;base)

El uso de un parámetro *base* (integer) activa un modo específico en el que se pasa en la base del número a devolver. En concreto, esta sintaxis permite convertir números en cadenas hexadecimales.

En el parámetro *base*, pase la base del número en *expression*. Puede pasar cualquier valor entero entre 2 y 36.

Si pasa 0 en *base*, el comando determina la base dependiendo del valor de *expression*. Si *expression* empieza por "0x", se utiliza base 16. En caso contrario, se utiliza la base 10.

:::info

- Esta sintaxis sigue estrictamente la especificación [`toString` EcmaScript sobre el manejo del radix](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tostring).
- Utilizar esta sintaxis con *base*=10 no dará exactamente los mismos resultados que utilizar la sintaxis sin el parámetro *base*. Por ejemplo, si el valor numérico especificado no es un número, se devuelve la cadena "Nan".

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

- o un [formato personalizado basado en un modelo](../Project/date-time-formats.md) (valor cadena)\
  Ejemplos:

```4d
 $vsResult:=String(!2023-11-27!;"EEEE d MMMM y GGGG") //"Lunes 27 de Noviembre de 2023 Anno Domini"  
 $vsResult:=String(!2023-11-27!;"E dd/MM/yyyy zzzz") //"Lun 27/11/2023 GMT+01:00" en la zona horaria francesa  
```

:::note

Los formatos pueden variar en función de la configuración del sistema.

:::

#### Parámetro *addTime*

Al procesar expresiones de fecha, también puede pasar una hora en el parámetro *addTime*. Este parámetro permite combinar una fecha con una hora para generar marcas de tiempo conformes a las normas vigentes (constantes ISO Date GMT y Date RFC 1123). These formats are particularly useful in the context of xml and Web processing. The *addTime* parameter can only be used when the *expression* parameter is a date.

This parameter can be used with both predefined or pattern-based date formats. Ejemplos:

```4d
 $dateTime:=String(!2010-09-09!;ISO date GMT;Current time) //"2010-09-09T08:30:41Z"
 $dateTime2:=String(!2023-11-27!;"E dd/MM/yyyy 'at' hh:mm aa O";?11:15:00?) //"Mon 27/11/2023 at 11:15 AM GMT+1"
```

#### Notes about combined date/time predefined formats

- The ISO Date GMT format corresponds to the ISO8601 standard, containing a date and a time expressed with respect to the time zone (GMT).

```4d
 $mydate:=String(Current date;ISO Date GMT;Current time) // devuelve, por ejemplo, 2010-09-13T16:11:53Z  
```

Tenga en cuenta que el carácter "Z" al final indica el formato GMT.\
Si no se pasa el parámetro *addTime*, el comando devuelve la fecha a medianoche (hora local) expresada en hora GMT, lo que puede hacer que la fecha se adelante o se retrase dependiendo de la zona horaria local:

```4d
 $mydate:=String(!13/09/2010!;ISO Date GMT) // returns 2010-09-12T22:00:00Z in France  
```

- The ISO Date format is similar to the ISO Date GMT, except that it expresses the date and time without respect to the time zone. Note that since this format does not comply with the ISO8601 standard, its use should be reserved for very specific purposes.

```4d
 $mydate:=String(!13/09/2010!;ISO Date) // returns 2010-09-13T00:00:00 regardless of the time zone  
 $mydate:=String(Current date;ISO Date;Current time) // returns 2010-09-13T18:11:53  
```

- The Date RFC 1123 format formats a date/time combination according to the standard defined by RFC 822 and 1123\. You need this format for example to set the expiration date for cookies in an HTTP header.

```4d
 $mydate:=String(Current date;Date RFC 1123;Current time) // returns, for example Fri, 10 Sep 2010 13:07:20 GMT  
```

The time expressed takes the time zone into account (GMT zone). If you only pass a date, the command returns the date at midnight (local time) expressed in GMT time which may cause the date to be moved forward or back depending on the local time zone:

```4d
 $mydate:=String(!2010-09-09!;Date RFC 1123) // returns Wed, 08 Sep 2010 22:00:00 GMT  
```

### Time Expressions

If *expression* is a Time expression and if you omit the *format* parameter, the string is returned using the default HH:MM:SS format.

De lo contrario, en el parámetro *format*, puede pasar:

- either a predefined format available though the following constants of the *Time Display Formats* theme (longint value):

| Constante                    | Valor | Comentario                                                                                                                                                                                                                                                                                                                             |
| ---------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blank if null time           | 100   | Se añade a la constante format. Indica que en caso de un valor null, 4D debe devolver una cadena vacía en lugar de ceros                                                                                                                                                                                               |
| HH MM                        | 2     | 01:02                                                                                                                                                                                                                                                                                                                  |
| HH MM AM PM                  | 5     | 1:02 AM                                                                                                                                                                                                                                                                                                                |
| HH MM SS                     | 1     | 01:02:03                                                                                                                                                                                                                                                                                               |
| Hour min                     | 4     | 1 hour 2 minutes                                                                                                                                                                                                                                                                                                                       |
| Hora min seg                 | 3     | 1 hora 2 minutos 3 segundos                                                                                                                                                                                                                                                                                                            |
| ISO time                     | 8     | 0000-00-00T01:02:03\. Corresponds to the ISO8601 standard and contains, in theory, a date and a time. Since this format does not support combined dates/times, the date part is filled with 0s. This format expresses the local time. |
| Min sec                      | 7     | 62 minutes 3 seconds                                                                                                                                                                                                                                                                                                                   |
| MM SS                        | 6     | 62:03                                                                                                                                                                                                                                                                                                                  |
| System time long             | 11    | 1:02:03 AM HNEC (sólo Mac)                                                                                                                                                                                                                                                          |
| System time long abbreviated | 10    | 1•02•03 AM (Mac only)                                                                                                                                                                                                                                                                                               |
| System time short            | 9     | 01:02:03                                                                                                                                                                                                                                                                                               |

Ejemplos:

```4d
 $vsResult:=String(?17:30:45?;HH MM AM PM) //"5:30 PM"  
 $vsResult:=String(?17:30:45?;Hour Min Sec) //"17 hours 30 minutes 45 seconds"  
```

- o un [formato personalizado basado en un modelo](../Project/date-time-formats.md) (valor cadena)\
  Ejemplos:

```4d
 $vsResult:=String(?17:30:45?;"hh:mm aa O") //"05:30 PM GMT+1"  
 $vsResult:=String(?17:30:45?;"'It is' K a") //"It is 5 PM"  
```

### String Expressions

If *expression* is of the String or Text type, the command returns the same value as the one passed in the parameter. This can be useful more particularly in generic programming using pointers.\
In this case, the *format* parameter, if passed, is ignored.

### Expresiones booleanas

If *expression* is of the Boolean type, the command returns the string “True” or “False” in the language of the application (for example, “Vrai” or “Faux” in a French version of 4D).\
In this case, the *format* parameter, if passed, is ignored.

### Expresiones indefinidas

If *expression* is evaluated to undefined, the command returns an empty string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be undefined.

### Null Expressions

If *expression* is evaluated to Null, the command returns the "null" string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be null.

## Ver también

[Bool](bool.md)\
[Date](date.md)\
[Num](num.md)\
[Time string](time-string.md)\
[Timestamp](timestamp.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 10                          |
| Hilo seguro       | &check; |


