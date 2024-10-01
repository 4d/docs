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

Uma data nula é especificada por _!00-00-00!_.

\*\*Dica: o Editor de métodos inclui um acesso direto para introduzir uma hora nula. Para digitar uma data nula, digite a exclamação (!) e pressione Enter.

**Notas:**

- For compatibility reasons, 4D accepts date inputs using system format with two-digit years, such as !12/04/98!. Para ver se um ano com dois dígitos será assumido como pertencente ao século XX ou XXI depende de se ele for maior ou menor que 30, a menos que essa configuração padrão tenha sido alterada usando o comando `SET DEFAULT CENTURY`.
- Se marcou a opção "Utilizar a configuração regional del sistema" ( ver Página Métodos), deve utilizar o formato de data definido em seu sistema. Para sistemas dos Estados Unidos, datas são digitadas no formato mês/dia/ano, com uma barra "/" separando os valores.

## Operadores de data

| Operação             | Sintaxe                               | Retorna    | Expression                                            | Valor        |
| -------------------- | ------------------------------------- | ---------- | ----------------------------------------------------- | ------------ |
| Diferença de data    | Date - Date                           | Number     | !2017-01-20! - !2017-01-01!                           | 19           |
| Acréscimo de dia     | Data + Número                         | Date       | !2017-01-20! !2017-01-20!                             | !2017-01-29! |
| Subtrair dia         | Data - Número                         | Date       | !2017-01-20! !2017-01-20!                             | !2017-01-11! |
| Igual                | Date = Date                           | Parâmetros | !2017-01-20! = !2017-01-01!                           | True         |
|                      |                                       |            | !2017-01-20! !2017-01-20!                             | False        |
| Desigualdade         | Date # Date                           | Parâmetros | !2017-01-20! !2017-01-20!                             | True         |
|                      |                                       |            | !2017-01-20! !2017-01-20!                             | False        |
| Maior que            | Date > Date                           | Parâmetros | !2017-01-20! > !2017-01-01!                           | True         |
|                      |                                       |            | !2017-01-20! > !2017-01-20!                           | False        |
| Menor que            | Date < Date  | Parâmetros | !2017-01-20! < !2017-01-20!  | True         |
|                      |                                       |            | !2017-01-20! < !2017-01-20!  | False        |
| Maior ou igual a     | Date >= Date                          | Parâmetros | !2017-01-20! >=!2017-01-01!                           | True         |
|                      |                                       |            | !2017-01-01!>=!2017-01-20!                            | False        |
| Menor que ou igual a | Date <= Date | Parâmetros | !2017-01-20! <= !2017-01-20! | True         |
|                      |                                       |            | !2017-01-20! <= !2017-01-01! | False        |
