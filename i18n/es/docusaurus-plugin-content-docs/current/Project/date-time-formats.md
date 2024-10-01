---
id: date-time-formats
title: Formatos fecha y hora
---

A lo largo de sus proyectos 4D, es posible que necesite dar formato a los valores de fecha y/u hora en función de las especificidades de la aplicación, la plataforma o la interfaz.

4D incluye una lista completa de patrones que puede utilizar para crear y aplicar formatos personalizados de fecha y hora en sus aplicaciones, además de los formatos por defecto. Los patrones de formato personalizados son compatibles con las siguientes funciones:

- el comando [`String`](https://doc.4d.com/4dv20R/help/command/en/page10.html),
- los comandos [`OBJECT SET FORMAT`](https://doc.4d.com/4dv20R/help/command/en/page236.html) y [`OBJECT Get format`](https://doc.4d.com/4dv20R/help/command/en/page894.html),
- el formato de fecha y hora de las propiedades del objeto de formulario, disponibles en la lista de propiedades o en las propiedades JSON [`dateFormat`](../FormObjects/properties_Display.md/#date-format) y [`timeFormat`](../FormObjects/properties_Display.md/#time-format).

## Lista de patrones

La siguiente tabla muestra todos los patrones soportados para formatos de fecha y hora.

| Símbolo | Significado                                                              | Modelo       | Ejemplo de salida                                                     |
| ------- | ------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------- |
| G       | designador de era                                                        | G, GG o GGG  | AD                                                                    |
|         |                                                                          | GGGG         | Anno Domini                                                           |
|         |                                                                          | GGGGG        | A                                                                     |
| y       | año                                                                      | yy           | 96                                                                    |
|         |                                                                          | y o yyyy     | 1996                                                                  |
| Y       | año de "Semana del año"                                                  | Y            | 1997                                                                  |
| u       | año prolongado                                                           | u            | 4601                                                                  |
| Q       | trimestre                                                                | Q            | 2                                                                     |
|         |                                                                          | QQ           | 02                                                                    |
|         |                                                                          | QQQ          | Q2                                                                    |
|         |                                                                          | QQQQ         | 2do trimestre                                                         |
|         |                                                                          | QQQQQ        | 2                                                                     |
| q       | trimestre independiente                                                  | q            | 2                                                                     |
|         |                                                                          | qq           | 02                                                                    |
|         |                                                                          | qqq          | Q2                                                                    |
|         |                                                                          | qqqq         | 2do trimestre                                                         |
|         |                                                                          | qqqqq        | 2                                                                     |
| M       | mes en año                                                               | M            | 9                                                                     |
|         |                                                                          | MM           | 09                                                                    |
|         |                                                                          | MMM          | Sept                                                                  |
|         |                                                                          | MMMM         | Septiembre                                                            |
|         |                                                                          | MMMMM        | S                                                                     |
| L       | mes independiente en año                                                 | L            | 9                                                                     |
|         |                                                                          | LL           | 09                                                                    |
|         |                                                                          | LLL          | Sept                                                                  |
|         |                                                                          | LLLL         | Septiembre                                                            |
|         |                                                                          | LLLLL        | S                                                                     |
| w       | semana del año                                                           | w            | 27                                                                    |
|         |                                                                          | ww           | 27                                                                    |
| d       | día del mes                                                              | d            | 2                                                                     |
|         |                                                                          | dd           | 2                                                                     |
| D       | día del año                                                              | D            | 189                                                                   |
| E       | día de la semana                                                         | E, EE o EEE  | Tue                                                                   |
|         |                                                                          | EEEE         | Tuesday                                                               |
|         |                                                                          | EEEEE        | T                                                                     |
|         |                                                                          | EEEEEE       | Tu                                                                    |
| e       | día de la semana local                                                   | e            | 2                                                                     |
|         |                                                                          | ee           | 02                                                                    |
|         |                                                                          | eee          | Tue                                                                   |
|         |                                                                          | eeee         | Tuesday                                                               |
|         |                                                                          | eeeee        | T                                                                     |
|         |                                                                          | eeeeee       | Tu                                                                    |
| c       | día de la semana local independiente                                     | c o cc       | 2                                                                     |
|         |                                                                          | ccc          | Tue                                                                   |
|         |                                                                          | cccc         | Tuesday                                                               |
|         |                                                                          | ccccc        | T                                                                     |
|         |                                                                          | cccccc       | Tu                                                                    |
| a       | AM o PM                                                                  | a, aa, o aaa | PM [abbrev]       |
|         |                                                                          | aaaa         | PM [wide]         |
|         |                                                                          | aaaaa        | p                                                                     |
| b       | AM, PM, mediodía, medianoche                                             | b, bb o bbb  | mid.                                                  |
|         |                                                                          | bbbb         | medianoche                                                            |
|         |                                                                          | bbbbb        | md                                                                    |
| B       | períodos de días flexibles                                               | B, BB o BBB  | at night [abbrev] |
|         |                                                                          | BBBB         | at night [wide]   |
|         |                                                                          | BBBBB        | at night [narrow] |
| h       | hora en am/pm (1~12)                  | h            | 7                                                                     |
|         |                                                                          | hh           | 07                                                                    |
| H       | hora en día (0~23)                    | H            | 0                                                                     |
|         |                                                                          | HH           | 00                                                                    |
| K       | hora en am/pm (0~11)                  | K            | 0                                                                     |
|         |                                                                          | KK           | 00                                                                    |
| k       | hora en día (1~24)                    | k            | 24                                                                    |
|         |                                                                          | kk           | 24                                                                    |
| m       | minuto en hora                                                           | m            | 4                                                                     |
|         |                                                                          | mm           | 04                                                                    |
| s       | segundo en minuto                                                        | s            | 5                                                                     |
|         |                                                                          | ss           | 05                                                                    |
| X       | Time Zone: ISO8601 basic hm?, with Z for 0               | X            | -08, +0530, Z                                                         |
|         | Zona horaria: ISO8601 hm básico, con Z                   | XX           | -0800, Z                                                              |
|         | Zona horaria: ISO8601 extendido hm, con Z                | XXX          | -08:00, Z                                             |
|         | Zona horaria: ISO8601 hms básico, con Z                  | XXXX         | -0800, -075258, Z                                                     |
|         | Zona horaria: ISO8601 hms extendido, con Z               | XXXXX        | -08:00, -07:52:58, Z  |
| x       | Zona horaria: ISO8601 hm básico, sin Z para 0            | x            | -08, +0530                                                            |
|         | Zona horaria: ISO8601 hm básico, sin Z                   | xx           | -0800, +0000                                                          |
|         | Zona horaria: ISO8601 hm extendido, sin Z                | xxx          | -08:00                                                |
|         | Zona horaria: ISO8601 hms básico, sin Z                  | xxxx         | -0800, -075258                                                        |
|         | Time Zone: ISO8601 extended hms?, without Z              | xxxxx        | -08:00, -07:52:58     |
| O       | Zona horaria: GMT localizada abreviada                   | O            | GMT-8                                                                 |
|         | Time Zone: long localized GMT (=ZZZZ) | OOOO         | GMT-08:00                                             |
| z       | Zona horaria: no específica                              | z, zz, o zzz | -0800                                                                 |
|         |                                                                          | zzzz         | GMT-08:00                                             |
|         |                                                                          | zzzzz        | -08:00, -07:52:58, Z  |
|         |                                                                          |              |                                                                       |
| '       | escape para texto                                                        | '            | '                                                                     |
| ' '     | dos comillas simples producen una                                        | ' '          | ' '                                                                   |

## Explorar modelos

### `y` vs `Y`

`y` es el año calendario, mientras que `Y` es el año basado en el número de semana. Por ejemplo, si los primeros días de enero de 2010 no son la semana #1, entonces y = 2010 pero Y = 2009 (hasta la fecha en la que comienza la primera semana de 2010).

### `L` (monopuesto) vs `M`

En algunos idiomas (ruso, eslovaco), el mes utilizado por sí solo es diferente al mes en una fecha. In "January 10, 2010", "January" is not spelled the same as in "_rendez-vous_ in January".

### `e` vs `c`

La misma observación que para `L` y `M`: `c` es para un día utilizado solo "todos los martes") y `e` es para un día en una fecha ("martes 15 de enero de 1951").

### `E` vs `e`

`e` se basa en la configuración del sistema: si la semana está definida en el sistema como que comienza un miércoles, entonces el miércoles tendrá el valor numérico "1" (o cero) mientras que "E" siempre devuelve el mismo valor (de 1 a 7 o de 0 a 6).

### Ceros a la izquierda

En general, cuando el número de letras de la cadena de formato es superior al esperado, se añaden ceros a la izquierda. Ej: "yyyyy" daría "001996".

### Partes localizadas

Algunas partes de las salidas, como "medianoche" o "martes" están localizadas, según la configuración regional.

Por ejemplo, para la hora `13:25:34`, "B" aparecerá _in the afternoon_ en un sistema estadounidense, y _après-midi_ en un sistema francés.

### Letras adicionales

Las cadenas de formato pueden contener caracteres que no deben interpretarse como caracteres de formato: si están entre "a" y "z" o "A" y "Z", deben ir entre comillas simples.

Por ejemplo:

"15:30:00" con el modelo "HH 'hours and' mm 'minutes'" produce "15 hours and 30 minutes".

### Espacios iniciales y finales

Los espacios iniciales y finales de los modelos se recortan automáticamente en las salidas. Si desea añadir espacios antes o después de la cadena resultante, debe encerrarlos entre comillas simples.

Por ejemplo:

" HH : mm : ss " ---> "09 : 10 : 25"
"' 'HH : mm : ss' '" ---> " 09 : 10 : 25 "

## Ejemplos

| Fecha u hora                             | Modelo                       | Result                           | Comentarios        |
| ---------------------------------------- | ---------------------------- | -------------------------------- | ------------------ |
| 15/06/2000                               | "QQQQ"                       | "2do trimestre"                  | localizado         |
| 17/03/2001                               | "D"                          | "76"                             | 76º día del año    |
| 17/03/1954                               | "w"                          | "11"                             | 11ª semana del año |
| 17/03/1954                               | "eeee"                       | "Miércoles"                      | localizado         |
| 15:00:00 | "a"                          | "PM"                             |                    |
| 18:00:00 | "K a"                        | "6 PM"                           |                    |
| 13:30:15 | "hh:mm aa O" | "01:30 PM GMT+1" |                    |

## Ver también

Ver [este blogpost](https://blog.4d.com/tailored-customization-for-dates-and-times) para más información sobre los formatos personalizados de fecha y hora.
