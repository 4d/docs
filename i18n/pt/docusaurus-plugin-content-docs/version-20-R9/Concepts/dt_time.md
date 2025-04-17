---
id: time
title: Hora
---

As variáveis, campos ou expressões de tipo Hora podem pertencer a um intervalo entre 00:00:00 e 596,000:00:00.

As horas são em formato de 24 horas.

Um valor de Hora pode ser tratado como um número. O número retornado de uma Hora será o número de segundos desde a maia noite (00:00:00) contidos nesse valor de hora.

**Nota:** No manual *4D Language Reference*, os parâmetros de tempo nas descrições de comandos são indicados como Time, exceto quando indicado de outra forma.

## Constantes literais de tipo hora

Uma constante hora está rodeada por sinais de interrogação (?....?).

A time literal constant is ordered hour:minute:second, with a colon (:) setting off each part. Times are specified in 24-hour format. As horas são especificadas no formato de 24 horas.

Aqui são exemplos de constantes de tipo hora:

```4d
?00:00:00? //midnight
?09:30:00? //9:30 am
?13:01:59? //1 pm, 1 minute, and 59 seconds
```

Uma hora nula se escreve ?00:00:00?

**Dica:** O Editor de Código inclui um atalho para inserir um horário nulo. Para digitar um tempo nulo, digite o ponto de interrogação (?) e pressione Enter.

## Operadores de horas

| Operação             | Sintaxe                               | Retorna    | Expression                                                                                                       | Valor                                      |
| -------------------- | ------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Adição               | Hora + Hora                           | Hora       | ?02:03:04? + ?01:02:03?                          | ?03:05:07? |
| Subtração            | Hora – Hora                           | Hora       | ?02:03:04? ?02:03:04?                            | ?01:01:01? |
| Adição               | Hora + Número                         | Number     | ?02:03:04? ?02:03:04?                            | 7449                                       |
| Subtração            | Hora – Número                         | Number     | ?02:03:04? ?02:03:04?                            | 7319                                       |
| Multiplicação        | Hora \* Número                        | Number     | ?02:03:04? ?02:03:04?                            | 14768                                      |
| Divisão              | Hora / Número                         | Number     | ?02:03:04? ?02:03:04?                            | 3692                                       |
| Divisão inteira      | Hora \ Número                         | Number     | ?02:03:04? ?02:03:04?                            | 3692                                       |
| Módulo               | Hora % Hora                           | Hora       | ?20:10:00? % ?04:20:00?                          | ?02:50:00? |
| Módulo               | Hora % Número                         | Number     | ?02:03:04? ?02:03:04?                            | 0                                          |
| Igual                | Hora = Hora                           | Parâmetros | ?01:02:03? ?01:02:03?                            | True                                       |
|                      |                                       |            | ?01:02:03? ?01:02:03?                            | False                                      |
| Desigualdade         | Hora # Hora                           | Parâmetros | ?01:02:03? ?01:02:03?                            | True                                       |
|                      |                                       |            | ?01:02:03? ?01:02:03?                            | False                                      |
| Maior que            | Time > Time                           | Parâmetros | ?01:02:03? > ?01:02:03?                          | True                                       |
|                      |                                       |            | ?01:02:03? > ?01:02:03?                          | False                                      |
| Menor que            | Time < Time  | Parâmetros | ?01:02:03? < ?01:02:04? | True                                       |
|                      |                                       |            | ?01:02:03? < ?01:02:03? | False                                      |
| Maior ou igual a     | Time >= Time                          | Parâmetros | ?01:02:03? >=?01:02:03?                          | True                                       |
|                      |                                       |            | ?01:02:03? >=?01:02:04?                          | False                                      |
| Menor que ou igual a | Time <= Time | Parâmetros | ?01:02:03? <=?01:02:03? | True                                       |
|                      |                                       |            | ?01:02:03? <=?01:02:03? | False                                      |

### Exemplo 1

Para obter uma expressão de tempo de uma expressão que combina uma expressão de tempo com um número, use os comandos `Hora` e `String do tempo`.

Você pode combinar expressões dos tipos hora e número utilizando as funções `Time` ou `Current time`:

```4d
	//A linha a seguir atribui a $vlSeconds o número de segundos   
	//que serão decorridos entre meia-noite e uma hora a partir de agora
$vlSeconds:=Current time+3600
	//A linha a seguir atribui a $vHSoon o horário que será em uma hora
$vhSoon:=Time(Current time+3600)
```

A segunda linha pode ser escrita de forma mais simples:

```4d
  // A linha a seguir atribui a $vHSoon a hora que será em uma hora
 $vhSoon:=Hora atual+?01:00:00?
```

### Exemplo 2

O operador Modulo pode ser usado, mais concretamente, para somar tempos que considerem o formato de 24 horas:

```4d
$t1:=?23:00? // É 23:00 horas
  // Queremos adicionar 2 horas e meia
$t2:=$t1 +?02:30:00? // Com uma adição simples, $t2 é ?25:30:00?
$t2:=($t1 +? 2:30:00?)%?24:00:00? // $t2 é ?01:30:00? e é 1:30 hora na manhã seguinte
```
