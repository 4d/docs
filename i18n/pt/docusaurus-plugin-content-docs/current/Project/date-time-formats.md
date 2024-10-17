---
id: date-time-formats
title: Formatos data e hora
---

Throughout your 4D projects, you might need to format date and/or time values according to the specificities of the application, the platform, or the interface.

4D includes a comprehensive list of patterns that you can use to create and apply customized date and time formats in your applications, in addition to default formats. Customized format patterns are supported by the following features:

- o comando [`String`](https://doc.4d.com/4dv20R/help/command/en/page10.html),
- the [`OBJECT SET FORMAT`](https://doc.4d.com/4dv20R/help/command/en/page236.html) and [`OBJECT Get format`](https://doc.4d.com/4dv20R/help/command/en/page894.html) commands,
- the date and time format form object properties, available from the Property list or the [`dateFormat`](../FormObjects/properties_Display.md/#date-format) and [`timeFormat`](../FormObjects/properties_Display.md/#time-format) JSON properties.

## Lista de padrões

The following table lists all supported patterns for date and time formats.

| Símbolo | Significado                                                              | Padrão        | Exemplo de saída                                                      |
| ------- | ------------------------------------------------------------------------ | ------------- | --------------------------------------------------------------------- |
| G       | designador de era                                                        | G, GGG ou GGG | AD                                                                    |
|         |                                                                          | GGGG          | Anno Domini                                                           |
|         |                                                                          | GGGGG         | A                                                                     |
| y       | ano                                                                      | yy            | 96                                                                    |
|         |                                                                          | y ou yyyy     | 1996                                                                  |
| Y       | ano da "Semana do ano"                                                   | Y             | 1997                                                                  |
| u       | ano prolongado                                                           | u             | 4601                                                                  |
| Q       | trimestre                                                                | Q             | 2                                                                     |
|         |                                                                          | QQ            | 02                                                                    |
|         |                                                                          | QQQ           | Q2                                                                    |
|         |                                                                          | QQQQ          | 2º trimestre                                                          |
|         |                                                                          | QQQQQ         | 2                                                                     |
| q       | trimestre autônomo                                                       | q             | 2                                                                     |
|         |                                                                          | qq            | 02                                                                    |
|         |                                                                          | qqq           | Q2                                                                    |
|         |                                                                          | qqqq          | 2º trimestre                                                          |
|         |                                                                          | qqqqq         | 2                                                                     |
| M       | mês no ano                                                               | M             | 9                                                                     |
|         |                                                                          | MM            | 09                                                                    |
|         |                                                                          | MMM           | Set                                                                   |
|         |                                                                          | MMMM          | Setembro                                                              |
|         |                                                                          | MMMMM         | S                                                                     |
| L       | mês autônomo no ano                                                      | L             | 9                                                                     |
|         |                                                                          | LL            | 09                                                                    |
|         |                                                                          | LLL           | Set                                                                   |
|         |                                                                          | LLLL          | Setembro                                                              |
|         |                                                                          | LLLLL         | S                                                                     |
| w       | semana do ano                                                            | w             | 27                                                                    |
|         |                                                                          | ww            | 27                                                                    |
| d       | dia no mês                                                               | d             | 2                                                                     |
|         |                                                                          | dd            | 2                                                                     |
| D       | dia do ano                                                               | D             | 189                                                                   |
| E       | dia da semana                                                            | E, EE ou EEE  | Tue                                                                   |
|         |                                                                          | EEEE          | Tuesday                                                               |
|         |                                                                          | EEEEE         | T                                                                     |
|         |                                                                          | EEEEEE        | Tu                                                                    |
| e       | dia da semana local                                                      | e             | 2                                                                     |
|         |                                                                          | ee            | 02                                                                    |
|         |                                                                          | eee           | Tue                                                                   |
|         |                                                                          | eeee          | Tuesday                                                               |
|         |                                                                          | eeeee         | T                                                                     |
|         |                                                                          | eeeeee        | Tu                                                                    |
| c       | stand-alone local day of week                                            | c ou cc       | 2                                                                     |
|         |                                                                          | ccc           | Tue                                                                   |
|         |                                                                          | cccc          | Tuesday                                                               |
|         |                                                                          | ccccc         | T                                                                     |
|         |                                                                          | cccccc        | Tu                                                                    |
| a       | AM ou PM                                                                 | a, aa, ou aaa | PM [abbrev]       |
|         |                                                                          | aaaa          | PM [wide]         |
|         |                                                                          | aaaaa         | p                                                                     |
| b       | AM, PM, meio-dia, meia-noite                                             | b, bb ou bbb  | mid.                                                  |
|         |                                                                          | bbbb          | meia-noite                                                            |
|         |                                                                          | bbbbb         | md                                                                    |
| B       | flexible day periods                                                     | B, BB ou BBB  | at night [abbrev] |
|         |                                                                          | BBBB          | at night [wide]   |
|         |                                                                          | BBBBB         | at night [narrow] |
| h       | hora em am/pm (1~12)                  | h             | 7                                                                     |
|         |                                                                          | hh            | 07                                                                    |
| H       | hora no dia (0~23)                    | H             | 0                                                                     |
|         |                                                                          | HH            | 00                                                                    |
| K       | hora em am/pm (0~11)                  | K             | 0                                                                     |
|         |                                                                          | KK            | 00                                                                    |
| k       | hora no dia (1~24)                    | k             | 24                                                                    |
|         |                                                                          | kk            | 24                                                                    |
| m       | minuto em hora                                                           | m             | 4                                                                     |
|         |                                                                          | mm            | 04                                                                    |
| s       | segundo em minuto                                                        | s             | 5                                                                     |
|         |                                                                          | ss            | 05                                                                    |
| X       | Time Zone: ISO8601 basic hm?, with Z for 0               | X             | -08, +0530, Z                                                         |
|         | Zona de tempo: ISO8601 hm, com Z                         | XX            | -0800, Z                                                              |
|         | Time Zone: ISO8601 extended hm, with Z                   | XXX           | -08:00, Z                                             |
|         | Time Zone: ISO8601 basic hms?, with Z                    | XXXX          | -0800, -075258, Z                                                     |
|         | Time Zone: ISO8601 extended hms?, with Z                 | XXXXX         | -08:00, -07:52:58, Z  |
| x       | Time Zone: ISO8601 basic hm?, without Z for 0            | x             | -08, +0530                                                            |
|         | Time Zone: ISO8601 basic hm, without Z                   | xx            | -800                                                                  |
|         | Time Zone: ISO8601 extended hm, without Z                | xxx           | -08:00                                                |
|         | Time Zone: ISO8601 basic hms?, without Z                 | xxxx          | -0800, -075258                                                        |
|         | Time Zone: ISO8601 extended hms?, without Z              | xxxxx         | -08:00, -07:52:58     |
| O       | Fuso horário: GMT localizado curto                       | O             | GMT-8                                                                 |
|         | Time Zone: long localized GMT (=ZZZZ) | OOOO          | GMT-08:00                                             |
| z       | Time Zone: specific non-location                         | z, zz ou zzz  | -0800                                                                 |
|         |                                                                          | zzzz          | GMT-08:00                                             |
|         |                                                                          | zzzzz         | -08:00, -07:52:58, Z  |
|         |                                                                          |               |                                                                       |
| '       | escape for text                                                          | '             | '                                                                     |
| ' '     | duas aspas simples produzem uma                                          | ' '           | ' '                                                                   |

## Explorando padrões

### `y` vs `Y`

`y` es el año calendario, mientras que `Y` es el año basado en el número de semana. For example, if the first days of January 2010 are not week #1, then y = 2010 but Y = 2009 (until the date where the 1st week of 2010 begins).

### `L` (monopuesto) vs `M`

In some languages (Russian, Slovak), the month used alone is different from the month in a date. In "January 10, 2010", "January" is not spelled the same as in "_rendez-vous_ in January".

### `e` vs `c`

Same remark as for `L` and `M`: `c` is for a day used alone "every tuesday") and `e` is for a day in a date ("Tuesday January 15, 1951").

### `E` vs `e`

`e` se basa en la configuración del sistema: si la semana está definida en el sistema como que comienza un miércoles, entonces el miércoles tendrá el valor numérico "1" (o cero) mientras que "E" siempre devuelve el mismo valor (de 1 a 7 o de 0 a 6).

### Zeros à esquerda

In general, when the number of letters in the formatting string is higher than the expected number, leading zeros are added. Ex: "yyyyyy" daria "001996".

### Peças localizadas

Some parts of the outputs, such as "midnight" or "Tuesday" are localized, according to regional settings.

Por ejemplo, para la hora `13:25:34`, "B" aparecerá _in the afternoon_ en un sistema estadounidense, y _après-midi_ en un sistema francés.

### Letras extras

Formatting strings can contain characters not to be interpreted as formatting characters: if they are between "a" and "z" or "A" and "Z", they must be enclosed in single quotes.

Por exemplo:

"15:30:00" with pattern "HH 'hours and' mm 'minutes'" produces "15 hours and 30 minutes".

### Espaços iniciais e finais

Starting and ending spaces in patterns are automatically trimmed in outputs. If you want to add spaces before or after the resulting string, you must enclose them in single quotes.

Por exemplo:

" HH : mm : ss " ---> "09 : 10 : 25"
"' 'HH : mm : ss' '" ---> " 09 : 10 : 25 "

## Exemplos

| Data ou hora                             | Padrão                       | Resultados                       | Comentários       |
| ---------------------------------------- | ---------------------------- | -------------------------------- | ----------------- |
| 15/06/2000                               | "QQQQ"                       | "2º trimestre"                   | localizado        |
| 17/03/2001                               | "D"                          | "76"                             | 76º dia do ano    |
| 17/03/1954                               | "w"                          | "11"                             | 11ª semana do ano |
| 17/03/1954                               | "eeee"                       | "Quarta-feira"                   | localizado        |
| 15:00:00 | "a"                          | "PM"                             |                   |
| 18:00:00 | "K a"                        | "6 PM"                           |                   |
| 13:30:15 | "hh:mm aa O" | "01:30 PM GMT+1" |                   |

## Veja também

Ver [este blogpost](https://blog.4d.com/tailored-customization-for-dates-and-times) para más información sobre los formatos personalizados de fecha y hora.
