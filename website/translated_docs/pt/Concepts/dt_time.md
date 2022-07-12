---
id: time
title: Hora
---

As variáveis, campos ou expressões de tipo Hora podem pertencer a um intervalo entre 00:00:00 e 596,000:00:00.

As Horas estão no formato 24 horas.

Um valor de Hora pode ser tratado como um número. O número retornado de uma Hora será o número de segundos desde a maia noite (00:00:00) contidos nesse valor de hora.

**Note:** In the *4D Language Reference* manual, Time parameters in command descriptions are denoted as Time, except when marked otherwise.

## Constantes literais de tipo hora

Uma constante hora está rodeada por sinais de interrogação (?....?).

Uma constante hora se ordena hora:minuto:segundo, com dois pontos (:) para separar cada parte. As horas são especificadas no formato de 24 horas.

Aqui são exemplos de constantes de tipo hora:

```4d
?00:00:00? ` meia noite
?09:30:00? ` 9:30 am
?13:01:59? ` 1 pm, 1 minuto, e 59 segundos
```

Uma hora nula se escreve ?00:00:00?

**Tip:** The Code Editor includes a shortcut for entering a null time. Para escrever uma hora nula, introduza o sinal de interrogação (?) e aperte Enter.

## Operadores de horas

| Operação                 | Sintaxe        | Retorna  | Expressão               | Value      |
| ------------------------ | -------------- | -------- | ----------------------- | ---------- |
| Addition                 | Hora + Hora    | Hora     | ?02:03:04? + ?01:02:03? | ?03:05:07? |
| Subtraction              | Hora – Hora    | Hora     | ?02:03:04? ?01:02:03?   | ?01:01:01? |
| Addition                 | Hora + Número  | Número   | ?02:03:04? ?01:02:03?   | 7449       |
| Subtraction              | Hora – Número  | Número   | ?02:03:04? ?01:02:03?   | 7319       |
| Multiplication           | Hora * Número  | Número   | ?02:03:04? ?01:02:03?   | 14768      |
| Division                 | Hora / Número  | Número   | ?02:03:04? ?02:03:04?   | 3692       |
| Longint division         | Hora \ Número | Número   | ?02:03:04? ?01:02:03?   | 3692       |
| Módulo                   | Hora % Hora    | Hora     | ?20:10:00? % ?04:20:00? | ?02:50:00? |
| Módulo                   | Hora % Número  | Número   | ?02:03:04? % 2          | 0          |
| Igual                    | Hora = Hora    | Booleano | ?01:02:03? >=?01:02:03? | True       |
|                          |                |          | ?01:02:03? ?01:02:04?   | False      |
| Desigualdade             | Hora # Hora    | Booleano | ?01:02:03? ?01:02:03?   | True       |
|                          |                |          | ?01:02:03? ?01:02:03?   | False      |
| Greater than             | Hora > Hora    | Booleano | ?01:02:03? < ?01:02:04? | True       |
|                          |                |          | ?01:02:03? < ?01:02:04? | False      |
| Menor que                | Hora < Hora    | Booleano | ?01:02:03? ?01:02:04?   | True       |
|                          |                |          | ?01:02:03? ?01:02:03?   | False      |
| Greater than or equal to | Hora >= Hora   | Booleano | ?01:02:03? >=?01:02:03? | True       |
|                          |                |          | ?01:02:03? >=?01:02:04? | False      |
| Less than or equal to    | Hora <= Hora   | Booleano | ?01:02:03? <=?01:02:03? | True       |
|                          |                |          | ?01:02:03? <=?01:02:03? | False      |

### Exemplo 1

Para obter uma expressão de tipo hora a partir de uma expressão que combina uma expressão de hora com um número, utilize os comandos `Time` e `Time string`.

Pode combinar expressões dos tipos hora e número utilizando as funções `Time` ou `Current time`:

```4d
    //A linha abaixo atribuir a $vlSeconds o número de segundos   
    //que estão entre meia noite e uma hora a partir de agora
$vlSeconds:=Current time+3600
    //A linha abaixo atribui a $vHSoon a hora que será em uma hora de tempo
$vhSoon:=Time(Current time+3600)
```

A segunda linha pode ser escrita de forma mais simples:

```4d
  //A linha abaixo atribui a $vHSoon a hora que será em uma hora
 $vhSoon:=Current time+?01:00:00?
```

### Exemplo 2

O operador Modulo pode ser usado, mais concretamente, para somar tempos que considerem o formato de 24 horas:

```4d
$t1:=?23:00:00? $t1:=?23:00:00? // Com uma simples adição, $t2 é?25:30:00?
$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 é ?01:30:00? // It is 23:00 hours
  // We want to add 2 and a half hours
$t2:=$t1 +?02:30:00?
```

