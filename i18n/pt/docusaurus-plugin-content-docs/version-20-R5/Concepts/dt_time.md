---
id: time
title: Hora
---

As variáveis, campos ou expressões de tipo Hora podem pertencer a um intervalo entre 00:00:00 e 596,000:00:00.

As horas são em formato de 24 horas.

Um valor de Hora pode ser tratado como um número. O número retornado de uma Hora será o número de segundos desde a maia noite (00:00:00) contidos nesse valor de hora.

**Note:** In the _4D Language Reference_ manual, Time parameters in command descriptions are denoted as Time, except when marked otherwise.

## Constantes literais de tipo hora

Uma constante hora está rodeada por sinais de interrogação (?....?).

A time literal constant is ordered hour:minute:second, with a colon (:) setting off each part. Times are specified in 24-hour format. As horas são especificadas no formato de 24 horas.

Aqui são exemplos de constantes de tipo hora:

```4d
?00:00:00? ` midnight
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minute, and 59 seconds
```

Uma hora nula se escreve ?00:00:00?

**Tip:** The Code Editor includes a shortcut for entering a null time. To type a null time, enter the question mark (?) character and press Enter.

## Operadores de horas

| Operação        | Sintaxe        | Retorna    | Expression                                                                              | Valor                                      |
| --------------- | -------------- | ---------- | --------------------------------------------------------------------------------------- | ------------------------------------------ |
| Adição          | Hora + Hora    | Hora       | ?02:03:04? + ?01:02:03? | ?03:05:07? |
| Subtração       | Hora – Hora    | Hora       | ?02:03:04? ?02:03:04?   | ?01:01:01? |
| Adição          | Hora + Número  | Number     | ?02:03:04? ?01:02:03?   | 7449                                       |
| Subtração       | Hora – Número  | Number     | ?02:03:04? ?02:03:04?   | 7319                                       |
| Multiplicação   | Hora \* Número | Number     | ?02:03:04? ?02:03:04?   | 14768                                      |
| Divisão         | Hora / Número  | Number     | ?02:03:04? ?02:03:04?   | 3692                                       |
| Divisão inteira | Hora \ Número  | Number     | ?02:03:04? ?02:03:04?   | 3692                                       |
| Módulo          | Hora % Hora    | Hora       | ?20:10:00? % ?04:20:00? | ?02:50:00? |
| Módulo          | Hora % Número  | Number     | ?02:03:04? ?02:03:04?   | 0                                          |
| Igual           | Hora = Hora    | Parâmetros | ?01:02:03? ?01:02:03?   | True                                       |

```
		||||?01:02:03? = ?01:02:04?	|False|
```

|Inequality	|Time # Time	|Boolean	|?01:02:03? ?01:02:03?	|True|
||||?01:02:03? ?01:02:03?	|False|
|Greater than	|Time > Time	|Boolean	|?01:02:04? > ?01:02:03?	|True|
||||		?01:02:03? > ?01:02:03?	|False|
|Less than	|Time < Time	|Boolean	|?01:02:03? < ?01:02:04?	|True|
||||	?01:02:03? < ?01:02:03?	|False|
|Greater than or equal to	|Time >= Time	|Boolean	|?01:02:03? >=?01:02:03?	|True|
||||?01:02:03? >=?01:02:04?	|False|
|Less than or equal to	|Time <= Time	|Boolean	|?01:02:03? <=?01:02:03?|	True|
||||?01:02:04? <=?01:02:03?	|False|

### Exemplo 1

To obtain a time expression from an expression that combines a time expression with a number, use the commands `Time` and `Time string`.

You can combine expressions of the time and number types using the `Time` or `Current time` functions:

```4d
	//The following line assigns to $vlSeconds the number of seconds   
	//that will be elapsed between midnight and one hour from now
$vlSeconds:=Current time+3600
	//The following line assigns to $vHSoon the time it will be in one hour
$vhSoon:=Time(Current time+3600)
```

A segunda linha pode ser escrita de forma mais simples:

```4d
  // The following line assigns to $vHSoon the time it will be in one hour
 $vhSoon:=Current time+?01:00:00?
```

### Exemplo 2

O operador Modulo pode ser usado, mais concretamente, para somar tempos que considerem o formato de 24 horas:

```4d
$t1:=?23:00:00? // It is 23:00 hours
  // We want to add 2 and a half hours
$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?
$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 hour the next morning
```
