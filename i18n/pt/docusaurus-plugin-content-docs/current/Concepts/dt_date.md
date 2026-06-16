---
id: date
title: Date
---

As variáveis, campos ou expressões de tipo data podem ter um intervalo entre 1/1/100 e 31/12/32.767.

Apesar do modo de representação de datas de C_DATE permitir trabalhar com datas até o ano 32 767, certas operações que passam pelo sistema impõe um limite inferior.

\*\*Nota: No manual de referência da linguagem 4D, os parâmetros de data nas descrições de comandos são indicados como Date, exceto quando indicado de outra forma.

## Constantes literais de tipo hora

Uma constante literal de tipo data está cercada de sinais de exclamação (!...!). Uma data deve ser estruturada utilizando o formato ISO (!AAAA-MM-DD!). Uma data deve ser estruturada usando o formato ISO (!YYYY-MM-DD!) Estes são alguns exemplos de constantes de datas: Estes são alguns exemplos de constantes de datas: Estes são alguns exemplos de constantes de datas:

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

Uma data nula é especificada por *!00-00-00!*.

\*\*Dica: o Editor de métodos inclui um acesso direto para introduzir uma hora nula. Para digitar uma data nula, digite a exclamação (!) e pressione Enter.

**Notas:**

- For compatibility reasons, 4D accepts date inputs using system format with two-digit years, such as !12/04/98!. Para ver se um ano com dois dígitos será assumido como pertencente ao século XX ou XXI depende de se ele for maior ou menor que 30, a menos que essa configuração padrão tenha sido alterada usando o comando `SET DEFAULT CENTURY`.
- Se marcou a opção "Utilizar a configuração regional del sistema" ( ver Página Métodos), deve utilizar o formato de data definido em seu sistema. Para sistemas dos Estados Unidos, datas são digitadas no formato mês/dia/ano, com uma barra "/" separando os valores.

## Operadores de data

| Operação             | Sintaxe                               | Retorna    | Expression                  | Valor        |
| -------------------- | ------------------------------------- | ---------- | --------------------------- | ------------ |
| Diferença de data    | Date - Date                           | Number     | !2017-01-20! - !2017-01-01! | 19           |
| Acréscimo de dia     | Data + Número                         | Date       | !2017-01-20! !2017-01-20!   | !2017-01-29! |
| Subtrair dia         | Data - Número                         | Date       | !2017-01-20! !2017-01-20!   | !2017-01-11! |
| Igual                | Date = Date                           | Parâmetros | !2017-01-20! = !2017-01-01! | True         |
|                      |                                       |            | !2017-01-20! !2017-01-20!   | False        |
| Desigualdade         | Date # Date                           | Parâmetros | !2017-01-20! !2017-01-20!   | True         |
|                      |                                       |            | !2017-01-20! !2017-01-20!   | False        |
| Maior que            | Date > Date                           | Parâmetros | !2017-01-20! !2017-01-20!   | True         |
|                      |                                       |            | !2017-01-20! !2017-01-20!   | False        |
| Menor que            | Date < Date  | Parâmetros | !2017-01-20! !2017-01-20!   | True         |
|                      |                                       |            | !2017-01-20! !2017-01-20!   | False        |
| Maior ou igual a     | Date >= Date                          | Parâmetros | !2017-01-20! !2017-01-20!   | True         |
|                      |                                       |            | !2017-01-01!>=!2017-01-20!  | False        |
| Menor que ou igual a | Date <= Date | Parâmetros | !2017-01-20! !2017-01-20!   | True         |
|                      |                                       |            | !2017-01-20! !2017-01-20!   | False        |

## Conversion of dates from JavaScript

Since dates in JavaScript are objects, they are sent to 4D as text containing their JSON form like any other object. This principle is implemented in particular when using [JSON commands](../commands/theme/JSON) or [Web Areas](../FormObjects/webArea_overview.md).

The JSON form of JavaScript Date objects follows the ISO 8601 standard, for example "2013-08-23T00:00:00Z". It is your responsibility to convert this text into a 4D date. Two solutions are available:

Using the [`JSON Parse`](../commands/json-parse) command:

```4d
 var $dateIso : Text // reception of a date in ISO format
 var $date4D : Date 
 $date4D:=JSON Parse("\""+$dateIso+"\"";Is date))
```

Using the [`Date`](../commands/date) command:

```4d
 var $dateIso : Text // reception of a date in ISO format
 var $date4D : Date 
 $date4D:=Date($dateIso)
```

Note the difference between these two solutions: [`JSON Parse`](../commands/json-parse) respects the [conversion mode set using the `SET DATABASE PARAMETER`](../commands/set-database-parameter#dates-inside-objects-85) (if any), while [`Date`](../commands/date) is not subject to this. Conversion using the [`Date`](../commands/date) command always takes the local time zone into account.

:::note

When the current date storage setting is [`date type`](../commands/set-database-parameter#dates-inside-objects-85) (default), JSON date strings in "YYYY-MM-DD" format are automatically handled as date values by the [`JSON Parse`](../commands/json-parse) and [`Date`](../commands/date) commands.

:::
