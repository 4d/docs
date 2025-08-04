---
id: string
title: String
slug: /commands/string
displayed_sidebar: docs
---

<!--REF #_command_.String.Syntax-->**String** ( *expression* {; *format* {; *addTime*}} ) : Text<br/>**String** ( *expression* ; *base* ) : Text<!-- END REF-->

<!--REF #_command_.String.Params-->

| Parâmetro | Tipo          |                             | Descrição                                                                                                                                             |
| --------- | ------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| expressão | Expression    | &#8594; | Expression for which to return the string form (can be Real, Integer, Long Integer, Date, Time, Text, Boolean, Undefined, or Null) |
| format    | Integer, Text | &#8594; | Display format                                                                                                                                        |
| addTime   | Hora          | &#8594; | Time to add on if expression is a date                                                                                                                |
| base      | Integer       | &#8594; | Value between 2 and 36 that represents the radix if expression is a number                                                                            |
| Resultado | Text          | &#8592; | String form of the expression                                                                                                                         |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                    |
| ------- | --------------------------- |
| 21      | Support of *base* parameter |

</details>

## Descrição

<!--REF #_command_.String.Summary-->The **String** command returns the string form of the numeric, Date, Time, string or Boolean expression you pass in *expression*.<!-- END REF-->

If you do not pass any parameter, the string is returned with the appropriate default format. If you pass *format*, you can force the result string to be of a specific format.

The optional *addTime* parameter adds a time to a date in a combined format. It can only be used when the *expression* parameter is a date (see below).

The optional *base* parameter can only be used with a numeric *expression*, it returns the number in the specified base (see below).

### Numeric Expressions

When you use the **String** command with a numeric *expression* (Real, Integer, Long Integer), two syntaxes are available:

- **String(number{;format})**
- **String(number;base)**

:::note

The **String** function is not compatible with "Integer 64 bits" type fields in compiled mode.

:::

#### String(number{;format})

If you do not pass the optional *format* parameter, the string is returned with the default number format.

The format is specified in the same way as it would be for a [number input on a form](../FormObjects/properties_Display.md#number-format). You can also pass the name of a custom style in *format*. The custom style name must be preceded by the `|` character. Following are some examples:

| **Exemplo**                                                                         | **Resultado**                     | **Comments**                                    |
| ----------------------------------------------------------------------------------- | --------------------------------- | ----------------------------------------------- |
| String(2^15)                                                     | "32768"                           | Formato predefinido                             |
| String(2^15;"###,##0 Inhabitants")                               | "32,768 Inhabitants"              |                                                 |
| String(1/3;"##0.00000")                          | "0.33333"         |                                                 |
| String(1/3)                                                      | "0.3333333333333" | Formato predefinido(\*)      |
| String(Arctan(1)\*4)                          | "3.14159265359"   | Formato predefinido(\*)      |
| String(Arctan(1)\*4;"##0.00") | "3.14"            |                                                 |
| String(-1;"&x")                              | "0xFFFFFFFF"                      |                                                 |
| String(-1;"&$")                              | "$FFFFFFFF"                       |                                                 |
| String(0 ?+ 7;"&x")                          | "0x0080"                          |                                                 |
| String(0 ?+ 7;"&$")                          | "$80"                             |                                                 |
| String(0 ?+ 14;"&x")                         | "0x4000"                          |                                                 |
| String(0 ?+ 14;"&$")                         | "$4000"                           |                                                 |
| String(50.3;"&xml")          | "50.3"            | Always "." as decimal separator |
| String(Num(1=1);"True;;False")                | "True"                            |                                                 |
| String(Num(1=2);"True;;False")                | "False"                           |                                                 |
| String(Log(-1))                               | ""                                | Not a number                                    |
| String(1/0)                                                      | "INF"                             | Positive infinite number                        |
| String(-1/0)                                                     | "-INF"                            | Negative infinite number                        |

(\*) The algorithm for converting real values into text is based on 13 significant digits, see [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md).

#### String(number;base)

Using a *base* parameter (integer) triggers a specific mode in which you pass the radix (base) of the number to be returned. In particular, this syntax allows you to convert numbers to hexadecimal strings.

In the *base* parameter, pass the radix of the number in *expression*. You can pass any integer value between 2 and 36.

If you pass 0 in *base*, the command determines the radix depending on the *expression* value. If *expression* starts with "0x", base 16 is used. Otherwise, base 10 is used.

:::info

- This syntax strictly follows the [`toString` EcmaScript specification regarding radix handling](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tostring).
- Using this syntax with *base*=10 will not give exactly the same results as using the syntax without *base* parameter. For example, if the specified number value is not a number, the "Nan" string is returned.

:::

| **Exemplo**                                               | **Resultado** | **Comments**                                     |
| --------------------------------------------------------- | ------------- | ------------------------------------------------ |
| String(10;2)                           | "1010"        | binary string                                    |
| String(-10;2)                          | "-1010"       | binary string (negative)      |
| String(254;16)                         | "fe"          | hexadecimal string                               |
| String(-16523461; 16)                  | "-fc20c5"     | hexadecimal string (negative) |
| String(Log(-1); 10) | "NaN"         | Not a number                                     |
| String(1/0; 10)                        | "NaN"         | Not a number                                     |
| String(-1/0; 10)                       | "NaN"         | Not a number                                     |

:::note

If the specified number value is negative, the sign is preserved. This is the case even if the radix is 2; the returned string is > N, the positive binary representation of the number value preceded by a - sign.

:::

### Date Expressions

If *expression* is a Date expression and if you omit the *format* parameter, the string is returned using the default format specified in the system.

Otherwise, in the *format* parameter, you can pass:

- either a predefined format available though the following constants of the *Date Display Formats* theme (longint value):

| Parâmetros                  | Valor | Comentário                                                                                                                                      |
| --------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Blank if null date          | 100   | To be added to the format constant. Indicates that in the case of a null value, 4D must return an empty string instead of zeros |
| Date RFC 1123               | 10    | Fri, 10 Sep 2010 13:07:20 GMT (see Notes)                                                    |
| Fecha interna abreviada     | 6     | Dec 29, 2006                                                                                                                                    |
| Internal date long          | 5     | December 29, 2006                                                                                                                               |
| Internal date short         | 7     | 12/29/2006                                                                                                                                      |
| Internal date short special | 4     | 12/29/06 (but 12/29/1896 or 12/29/2096)                                                                                      |
| ISO Date                    | 8     | 2006-12-29T00:00:00 (see Notes)                                                              |
| ISO Date GMT                | 9     | 2010-09-13T16:11:53Z (see Notes)                                                             |
| System date abbreviated     | 2     | Sun, Dec 29, 2006                                                                                                                               |
| System date long            | 3     | Sunday, December 29, 2006                                                                                                                       |
| System date short           | 1     | 12/29/2006                                                                                                                                      |

Exemplos:

```4d
 $vsResult:=String(!2023-11-27!) //"11/27/2023"  
 $vsResult:=String(!2023-11-27!;Internal date long) // "November 27, 2023"  
 $vsResult:=String(!2023-11-27!;ISO Date GMT) // "2023-11-26T23:00:00Z" in French timezone  
```

- or a [customized format built upon a pattern](../Project/date-time-formats.md) (string value)\
  Examples:

```4d
 $vsResult:=String(!2023-11-27!;"EEEE d MMMM y GGGG") //"Monday 27 November 2023 Anno Domini"  
 $vsResult:=String(!2023-11-27!;"E dd/MM/yyyy zzzz") //"Mon 27/11/2023 GMT+01:00" in French timezone  
```

:::note

Formats can vary depending on system settings.

:::

#### *addTime* parameter

When processing Date expressions, you can also pass a time in the *addTime* parameter. This parameter lets you combine a date with a time so that you can generate time stamps in compliance with current standards (ISO Date GMT and Date RFC 1123 constants). These formats are particularly useful in the context of xml and Web processing. The *addTime* parameter can only be used when the *expression* parameter is a date.

This parameter can be used with both predefined or pattern-based date formats. Exemplos:

```4d
 $dateTime:=String(!2010-09-09!;ISO date GMT;Current time) //"2010-09-09T08:30:41Z"
 $dateTime2:=String(!2023-11-27!;"E dd/MM/yyyy 'at' hh:mm aa O";?11:15:00?) //"Mon 27/11/2023 at 11:15 AM GMT+1"
```

#### Notes about combined date/time predefined formats

- The ISO Date GMT format corresponds to the ISO8601 standard, containing a date and a time expressed with respect to the time zone (GMT).

```4d
 $mydate:=String(Current date;ISO Date GMT;Current time) // returns, for instance, 2010-09-13T16:11:53Z  
```

Note that the "Z" character at the end indicates the GMT format.\
If you do not pass the *addTime* parameter, the command returns the date at midnight (local time) expressed in GMT time, which may cause the date to be moved forward or back depending on the local time zone:

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

Otherwise, in the *format* parameter, you can pass:

- either a predefined format available though the following constants of the *Time Display Formats* theme (longint value):

| Parâmetros                   | Valor | Comentário                                                                                                                                                                                                                                                                                                                             |
| ---------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blank if null time           | 100   | To be added to the format constant. Indicates that in the case of a null value, 4D must return an empty string instead of zeros                                                                                                                                                                                        |
| HH MM                        | 2     | 01:02                                                                                                                                                                                                                                                                                                                  |
| HH MM AM PM                  | 5     | 1:02 AM                                                                                                                                                                                                                                                                                                                |
| HH MM SS                     | 1     | 01:02:03                                                                                                                                                                                                                                                                                               |
| Hour min                     | 4     | 1 hour 2 minutes                                                                                                                                                                                                                                                                                                                       |
| Hour min sec                 | 3     | 1 hour 2 minutes 3 seconds                                                                                                                                                                                                                                                                                                             |
| ISO time                     | 8     | 0000-00-00T01:02:03\. Corresponds to the ISO8601 standard and contains, in theory, a date and a time. Since this format does not support combined dates/times, the date part is filled with 0s. This format expresses the local time. |
| Min sec                      | 7     | 62 minutes 3 seconds                                                                                                                                                                                                                                                                                                                   |
| MM SS                        | 6     | 62:03                                                                                                                                                                                                                                                                                                                  |
| System time long             | 11    | 1:02:03 AM HNEC (Mac only)                                                                                                                                                                                                                                                          |
| System time long abbreviated | 10    | 1•02•03 AM (Mac only)                                                                                                                                                                                                                                                                                               |
| System time short            | 9     | 01:02:03                                                                                                                                                                                                                                                                                               |

Exemplos:

```4d
 $vsResult:=String(?17:30:45?;HH MM AM PM) //"5:30 PM"  
 $vsResult:=String(?17:30:45?;Hour Min Sec) //"17 hours 30 minutes 45 seconds"  
```

- or a [customized format built upon a pattern](../Project/date-time-formats.md) (string value)\
  Examples:

```4d
 $vsResult:=String(?17:30:45?;"hh:mm aa O") //"05:30 PM GMT+1"  
 $vsResult:=String(?17:30:45?;"'It is' K a") //"It is 5 PM"  
```

### String Expressions

If *expression* is of the String or Text type, the command returns the same value as the one passed in the parameter. This can be useful more particularly in generic programming using pointers.\
In this case, the *format* parameter, if passed, is ignored.

### Boolean Expressions

If *expression* is of the Boolean type, the command returns the string “True” or “False” in the language of the application (for example, “Vrai” or “Faux” in a French version of 4D).\
In this case, the *format* parameter, if passed, is ignored.

### Undefined Expressions

If *expression* is evaluated to undefined, the command returns an empty string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be undefined.

### Null Expressions

If *expression* is evaluated to Null, the command returns the "null" string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be null.

## Veja também

[Bool](bool.md)\
[Date](date.md)\
[Num](num.md)\
[Time string](time-string.md)\
[Timestamp](timestamp.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 10                          |
| Thread safe       | &check; |


