---
id: date
title: Date
---

As variáveis, campos ou expressões de tipo data podem ter um intervalo entre 1/1/100 e 31/12/32.767.

Apesar do modo de representação de datas de C_DATE permitir trabalhar com datas até o ano 32 767, certas operações que passam pelo sistema impõe um limite inferior.

**Nota:** en el manual de Referencia del Lenguaje 4D, los parámetros de tipo Fecha en las descripciones de los comandos se denominan Fecha, salvo que se indique lo contrario.

## Constantes literais de tipo hora

Uma constante literal de tipo data está cercada de sinais de exclamação (!...!). Uma data deve ser estruturada utilizando o formato ISO (!AAAA-MM-DD!). Uma data deve ser estruturada usando o formato ISO (!YYYY-MM-DD!) Estes são alguns exemplos de constantes de datas: Estes são alguns exemplos de constantes de datas: Estes são alguns exemplos de constantes de datas:

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

A null date is specified by _!00-00-00!_.

**Consejo:** el Editor de código incluye un acceso directo para introducir una fecha null. To type a null date, enter the exclamation (!) character and press Enter.

**Notas:**

- For compatibility reasons, 4D accepts date inputs using system format with two-digit years, such as !12/04/98!. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the `SET DEFAULT CENTURY` command.
- Se marcou a opção "Utilizar a configuração regional del sistema" ( ver Página Métodos), deve utilizar o formato de data definido em seu sistema. Para sistemas dos Estados Unidos, datas são digitadas no formato mês/dia/ano, com uma barra "/" separando os valores.

## Operadores de data

| Operação             | Sintaxe       | Retorna    | Expression                   | Valor        |
| -------------------- | ------------- | ---------- | ---------------------------- | ------------ |
| Diferença de data    | Date - Date   | Number     | !2017-01-20! - !2017-01-01!  | 19           |
| Acréscimo de dia     | Data + Número | Date       | !2017-01-20! !2017-01-20!    | !2017-01-29! |
| Subtrair dia         | Data - Número | Date       | !2017-01-20! !2017-01-20!    | !2017-01-11! |
| Igual                | Date = Date   | Parâmetros | !2017-01-20! = !2017-01-01!  | True         |
|                      |               |            | !2017-01-20! !2017-01-20!    | False        |
| Desigualdade         | Date # Date   | Parâmetros | !2017-01-20! !2017-01-20!    | True         |
|                      |               |            | !2017-01-20! !2017-01-20!    | False        |
| Maior que            | Date > Date   | Parâmetros | !2017-01-20! > !2017-01-01!  | True         |
|                      |               |            | !2017-01-20! > !2017-01-20!  | False        |
| Menor que            | Date < Date   | Parâmetros | !2017-01-20! < !2017-01-20!  | True         |
|                      |               |            | !2017-01-20! < !2017-01-20!  | False        |
| Maior ou igual a     | Date >= Date  | Parâmetros | !2017-01-20! >=!2017-01-01!  | True         |
|                      |               |            | !2017-01-01!>=!2017-01-20!   | False        |
| Menor que ou igual a | Date <= Date  | Parâmetros | !2017-01-20! <= !2017-01-20! | True         |
|                      |               |            | !2017-01-20! <= !2017-01-01! | False        |
