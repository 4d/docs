---
id: time
title: Hora
---

As variáveis, campos ou expressões de tipo Hora podem pertencer a um intervalo entre 00:00:00 e 596,000:00:00.

As Horas estão no formato 24 horas.

Um valor de Hora pode ser tratado como um número. O número retornado de uma Hora será o número de segundos desde a maia noite (00:00:00) contidos nesse valor de hora.

**Note:** In the *4D Language Reference* manual, Time parameters in command descriptions are denoted as Time, except when marked otherwise.

## Time literals

Uma constante hora está rodeada por sinais de interrogação (?....?).

Uma constante hora se ordena hora:minuto:segundo, com dois pontos (:) para separar cada parte. As horas são especificadas no formato de 24 horas.

Aqui são exemplos de constantes de tipo hora:

```4d
?00:00:00? ` midnight
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minute, and 59 seconds
```

Uma hora nula se escreve ?00:00:00?

**Dica:** o Editor de métodos inclui um acesso direto para introduzir uma hora nula. Para escrever uma hora nula, introduza o sinal de interrogação (?) e aperte Enter.

## Time operators

| Operation                | Sintaxe        | Returns  | Expression              | Value      |
| ------------------------ | -------------- | -------- | ----------------------- | ---------- |
| Addition                 | Time + Time    | Hora     | ?02:03:04? + ?01:02:03? | ?03:05:07? |
| Subtraction              | Time – Time    | Hora     | ?02:03:04? – ?01:02:03? | ?01:01:01? |
| Addition                 | Time + Number  | Número   | ?02:03:04? + 65         | 7449       |
| Subtraction              | Time – Number  | Número   | ?02:03:04? – 65         | 7319       |
| Multiplication           | Time * Number  | Número   | ?02:03:04? * 2          | 14768      |
| Division                 | Time / Number  | Número   | ?02:03:04? / 2          | 3692       |
| Longint division         | Time \ Number | Número   | ?02:03:04? \ 2         | 3692       |
| Modulo                   | Time % Time    | Hora     | ?20:10:00? % ?04:20:00? | ?02:50:00? |
| Modulo                   | Time % Number  | Número   | ?02:03:04? % 2          | 0          |
| Equality                 | Time = Time    | Booleano | ?01:02:03? = ?01:02:03? | True       |
|                          |                |          | ?01:02:03? = ?01:02:04? | False      |
| Inequality               | Time # Time    | Booleano | ?01:02:03? # ?01:02:04? | True       |
|                          |                |          | ?01:02:03? # ?01:02:03? | False      |
| Greater than             | Time > Time    | Booleano | ?01:02:04? > ?01:02:03? | True       |
|                          |                |          | ?01:02:03? > ?01:02:03? | False      |
| Less than                | Time < Time    | Booleano | ?01:02:03? < ?01:02:04? | True       |
|                          |                |          | ?01:02:03? < ?01:02:03? | False      |
| Greater than or equal to | Time >= Time   | Booleano | ?01:02:03? >=?01:02:03? | True       |
|                          |                |          | ?01:02:03? >=?01:02:04? | False      |
| Less than or equal to    | Time <= Time   | Booleano | ?01:02:03? <=?01:02:03? | True       |
|                          |                |          | ?01:02:04? <=?01:02:03? | False      |

### Example 1

Para obter uma expressão de tipo hora a partir de uma expressão que combina uma expressão de hora com um número, utilize os comandos `Time` e `Time string`.

Pode combinar expressões dos tipos hora e número utilizando as funções `Time` ou `Current time`:

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

### Example 2

O operador Modulo pode ser usado, mais concretamente, para somar tempos que considerem o formato de 24 horas:

```4d
$t1:=?23:00:00? // It is 23:00 hours
  // We want to add 2 and a half hours
$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?
$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 hour the next morning
```

