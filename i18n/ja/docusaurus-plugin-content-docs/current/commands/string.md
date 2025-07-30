---
id: string
title: 文字列
slug: /commands/string
displayed_sidebar: docs
---

<!--REF #_command_.String.Syntax-->**String** ( *expression* {; *format* {; *addTime*}} ) : Text<br/>**String** ( *expression* ; *base* ) : Text<!-- END REF-->

<!--REF #_command_.String.Params-->

| 引数      | 型             |                             | 説明                                                                            |
| ------- | ------------- | --------------------------- | ----------------------------------------------------------------------------- |
| 式       | 式             | &#8594; | 文字列式を返したい式 (実数、整数、倍長整数、日付、時間、文字列、 テキスト、ブール、未定義、Null を指定可能) |
| format  | Integer, Text | &#8594; | 表示フォーマット                                                                      |
| addTime | Time          | &#8594; | expressionが日付の時、追加する時間                                                        |
| base    | Integer       | &#8594; | 式が数値の場合に、基数を表す2 から36 までの値                                                     |
| 戻り値     | Text          | &#8592; | 式の文字列の形式                                                                      |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース | 内容             |
| ---- | -------------- |
| 21   | *base* 引数のサポート |

</details>

## 説明

<!--REF #_command_.String.Summary-->**String** コマンドは、*expression* に渡した数値、日付、時間、文字列、またはブールを文字列に変換します。<!-- END REF-->

引数を何も渡さなかった場合、適切なデフォルトの形式の文字列で返されます。 *format* を指定すると、結果の文字列は指定した形式になります。

オプションの*addTime* 引数は、日付に時間を複合フォーマットで追加します。 この引数は *expression* 引数が日付型の時にのみ使用できます (後述)。

The optional *base* parameter can only be used with a numeric *expression*, it returns the number in the specified base (see below).

### 数値式

When you use the **String** command with a numeric *expression* (Real, Integer, Long Integer), two syntaxes are available:

- **String(number{;format})**
- **String(number;base)**

:::note

The **String** function is not compatible with "Integer 64 bits" type fields in compiled mode.

:::

#### String(number{;format})

If you do not pass the optional *format* parameter, the string is returned with the default number format.

The format is specified in the same way as it would be for a [number input on a form](../FormObjects/properties_Display.md#number-format). You can also pass the name of a custom style in *format*. The custom style name must be preceded by the `|` character. Following are some examples:

| **Example**                                                                         | **戻り値**                           | **コメント**                                        |
| ----------------------------------------------------------------------------------- | --------------------------------- | ----------------------------------------------- |
| String(2^15)                                                     | "32768"                           | デフォルトのフォーマット                                    |
| String(2^15;"###,##0 Inhabitants")                               | "32,768 Inhabitants"              |                                                 |
| String(1/3;"##0.00000")                          | "0.33333"         |                                                 |
| String(1/3)                                                      | "0.3333333333333" | デフォルトのフォーマット(\*)             |
| String(Arctan(1)\*4)                          | "3.14159265359"   | デフォルトのフォーマット(\*)             |
| String(Arctan(1)\*4;"##0.00") | "3.14"            |                                                 |
| String(-1;"&x")                              | "0xFFFFFFFF"                      |                                                 |
| String(-1;"&$")                              | "$FFFFFFFF"                       |                                                 |
| String(0 ?+ 7;"&x")                          | "0x0080"                          |                                                 |
| String(0 ?+ 7;"&$")                          | "$80"                             |                                                 |
| String(0 ?+ 14;"&x")                         | "0x4000"                          |                                                 |
| String(0 ?+ 14;"&$")                         | "$4000"                           |                                                 |
| String(50.3;"&xml")          | "50.3"            | Always "." as decimal separator |
| String(Num(1=1);"True;;False")                | "true"                            |                                                 |
| String(Num(1=2);"True;;False")                | "false"                           |                                                 |
| String(Log(-1))                               | ""                                | Not a number                                    |
| String(1/0)                                                      | "INF"                             | Positive infinite number                        |
| String(-1/0)                                                     | "-INF"                            | Negative infinite number                        |

(\*) The algorithm for converting real values into text is based on 13 significant digits, see [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md).

#### String(number;base)

Using a *base* parameter (integer) triggers a specific mode in which you pass the radix (base) of the number to be returned. In particular, this syntax allows you to convert numbers to hexadecimal strings.

*base* 引数には、*expression* 引数の基数の数字を渡します。 ここには2 から36 までの任意の整数値を渡すことができます。

*base* 引数に0 を渡した場合、コマンドは*expression* 引数の値に応じて基数を決定します。 *expression* の値が"0x" で始まる場合、16 進数が使用されます。 それ以外の場合、10 進数が使用されます。

:::info

- This syntax strictly follows the [`toString` EcmaScript specification regarding radix handling](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number.prototype.tostring).
- *base*=10 のシンタックスを使用した場合、 *base* 引数を使用しなかったシンタックスと全く同じ結果は返しません。 For example, if the specified number value is not a number, the "Nan" string is returned.

:::

| **Example**                                               | **戻り値**   | **コメント**                                         |
| --------------------------------------------------------- | --------- | ------------------------------------------------ |
| String(10;2)                           | "1010"    | binary string                                    |
| String(-10;2)                          | "-1010"   | binary string (negative)      |
| String(254;16)                         | "fe"      | hexadecimal string                               |
| String(-16523461; 16)                  | "-fc20c5" | hexadecimal string (negative) |
| String(Log(-1); 10) | "NaN"     | Not a number                                     |
| String(1/0; 10)                        | "NaN"     | Not a number                                     |
| String(-1/0; 10)                       | "NaN"     | Not a number                                     |

:::note

If the specified number value is negative, the sign is preserved. This is the case even if the radix is 2; the returned string is > N, the positive binary representation of the number value preceded by a - sign.

:::

### Date Expressions

If *expression* is a Date expression and if you omit the *format* parameter, the string is returned using the default format specified in the system.

Otherwise, in the *format* parameter, you can pass:

- either a predefined format available though the following constants of the *Date Display Formats* theme (longint value):

| 定数                          | 値   | 説明                                                                                                                                              |
| --------------------------- | --- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Blank if null date          | 100 | To be added to the format constant. Indicates that in the case of a null value, 4D must return an empty string instead of zeros |
| Date RFC 1123               | 10  | Fri, 10 Sep 2010 13:07:20 GMT (see Notes)                                                    |
| Internal date abbreviated   | 6   | Dec 29, 2006                                                                                                                                    |
| Internal date long          | 5   | December 29, 2006                                                                                                                               |
| Internal date short         | 7   | 12/29/2006                                                                                                                                      |
| Internal date short special | 4   | 12/29/06 (but 12/29/1896 or 12/29/2096)                                                                                      |
| ISO Date                    | 8   | 2006-12-29T00:00:00 (see Notes)                                                              |
| ISO Date GMT                | 9   | 2010-09-13T16:11:53Z (see Notes)                                                             |
| System date abbreviated     | 2   | Sun, Dec 29, 2006                                                                                                                               |
| System date long            | 3   | Sunday, December 29, 2006                                                                                                                       |
| System date short           | 1   | 12/29/2006                                                                                                                                      |

例:

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

This parameter can be used with both predefined or pattern-based date formats. 例:

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

| 定数                           | 値   | 説明                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------- | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blank if null time           | 100 | To be added to the format constant. Indicates that in the case of a null value, 4D must return an empty string instead of zeros                                                                                                                                                                                        |
| HH MM                        | 2   | 01:02                                                                                                                                                                                                                                                                                                                  |
| HH MM AM PM                  | 5   | 1:02 AM                                                                                                                                                                                                                                                                                                                |
| HH MM SS                     | 1   | 01:02:03                                                                                                                                                                                                                                                                                               |
| Hour min                     | 4   | 1 hour 2 minutes                                                                                                                                                                                                                                                                                                                       |
| Hour min sec                 | 3   | 1 hour 2 minutes 3 seconds                                                                                                                                                                                                                                                                                                             |
| ISO time                     | 8   | 0000-00-00T01:02:03\. Corresponds to the ISO8601 standard and contains, in theory, a date and a time. Since this format does not support combined dates/times, the date part is filled with 0s. This format expresses the local time. |
| Min sec                      | 7   | 62 minutes 3 seconds                                                                                                                                                                                                                                                                                                                   |
| MM SS                        | 6   | 62:03                                                                                                                                                                                                                                                                                                                  |
| System time long             | 11  | 1:02:03 AM HNEC (Mac only)                                                                                                                                                                                                                                                          |
| System time long abbreviated | 10  | 1•02•03 AM (Mac only)                                                                                                                                                                                                                                                                                               |
| System time short            | 9   | 01:02:03                                                                                                                                                                                                                                                                                               |

例:

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

### 文字列式

If *expression* is of the String or Text type, the command returns the same value as the one passed in the parameter. This can be useful more particularly in generic programming using pointers.\
In this case, the *format* parameter, if passed, is ignored.

### ブール式

If *expression* is of the Boolean type, the command returns the string “True” or “False” in the language of the application (for example, “Vrai” or “Faux” in a French version of 4D).\
In this case, the *format* parameter, if passed, is ignored.

### 未定義式

If *expression* is evaluated to undefined, the command returns an empty string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be undefined.

### Null Expressions

If *expression* is evaluated to Null, the command returns the "null" string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be null.

## 参照

[Bool](bool.md)\
[Date](date.md)\
[Num](num.md)\
[Time string](time-string.md)\
[Timestamp](timestamp.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 10                          |
| スレッドセーフ | &check; |


