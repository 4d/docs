---
id: date
title: Date
---

As variáveis, campos ou expressões de tipo data podem ter um intervalo entre 1/1/100 e 31/12/32.767.

Apesar do modo de representação de datas de C_DATE permitir trabalhar com datas até o ano 32 767, certas operações que passam pelo sistema impõe um limite inferior.

**Note:** In the 4D Language Reference manual, Date parameters in command descriptions are denoted as Date, except when marked otherwise.

## Constantes literais de tipo hora

Uma constante literal de tipo data está cercada de sinais de exclamação (!...!). Uma data deve ser estruturada utilizando o formato ISO (!AAAA-MM-DD!). Uma data deve ser estruturada usando o formato ISO (!YYYY-MM-DD!) Estes são alguns exemplos de constantes de datas: Estes são alguns exemplos de constantes de datas: Estes são alguns exemplos de constantes de datas:

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

A null date is specified by _!00-00-00!_.

**Tip:** The Code Editor includes a shortcut for entering a null date. To type a null date, enter the exclamation (!) character and press Enter.

**Notas:**

- Por razões de compatibilidade, 4D aceita que coloque anos como datas com apenas dois dígitos. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the `SET DEFAULT CENTURY` command.
- Se marcou a opção "Utilizar a configuração regional del sistema" ( ver Página Métodos), deve utilizar o formato de data definido em seu sistema. Para sistemas dos Estados Unidos, datas são digitadas no formato mês/dia/ano, com uma barra "/" separando os valores.

## Operadores de data

| Operação          | Sintaxe       | Retorna    | Expression                  | Valor        |
| ----------------- | ------------- | ---------- | --------------------------- | ------------ |
| Diferença de data | Date - Date   | Number     | !2017-01-20! - !2017-01-01! | 19           |
| Acréscimo de dia  | Data + Número | Date       | !2017-01-20! !2017-01-20!   | !2017-01-29! |
| Subtrair dia      | Data - Número | Date       | !2017-01-20! !2017-01-20!   | !2017-01-11! |
| Igual             | Date = Date   | Parâmetros | !2017-01-20! = !2017-01-01! | True         |

```
	||	||!2017-01-20! = !2017-01-01!	|False|
```

|Inequality	|Date # Date	|Boolean	|!2017-01-20! !2017-01-20!	|True|
||||!2017-01-20! !2017-01-20!	|False|
|Greater than	|Date > Date	|Boolean	|!2017-01-20! > !2017-01-01!	|True|
||||!2017-01-20! > !2017-01-20!	|False|
|Less than	|Date < Date	|Boolean	|!2017-01-01! < !2017-01-20!	|True|
||||!2017-01-20! < !2017-01-20!	|False|
|Greater than or equal to	|Date >= Date	|Boolean	|!2017-01-20! >=!2017-01-01!	|True|
||||!2017-01-01!>=!2017-01-20!	|False|
|Less than or equal to	|Date <= Date	|Boolean	|!2017-01-01! <= !2017-01-20!|	True|
||||	!2017-01-20! <= !2017-01-01!|	False|
