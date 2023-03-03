---
id: control-flow
title: Condições e loops
---

Regardless of the simplicity or complexity of a method or function, you will always use one or more of three types of programming structures. Programming structures control the flow of execution, whether and in what order statements are executed within a method. There are three types of structures:

- **Sequential**: a sequential structure is a simple, linear structure. A sequence is a series of statements that 4D executes one after the other, from first to last. A one-line routine, frequently used for object methods, is the simplest case of a sequential structure. For example: `[People]lastName:=Uppercase([People]lastName)`
- **[Branching](Concepts/cf_branching.md)**: uma estrutura de bifurcação permite que os métodos provem uma condição e tomem caminhos alternativos, dependendo do resultado. The condition is a Boolean expression, an expression that evaluates TRUE or FALSE. Uma estrutura condicional e a estrutura `If...Else...End if`, que dirige o fluxo do programa ao longo de um dos dois caminhos. A outra estrutura condicional é a estrutura `Case of... End case` que direciona fluxo de programa para um de muitas caminhos.
- **[Bucle](Concepts/cf_looping.md)**: quando se escrevem métodos, é muito comum descobrir que se necessita que uma sequência de sentenças se repita um número de vezes. To deal with this need, the 4D language provides the following looping structures:
    - `While... End while`
    - `Repeat... Until`
    - `For... End for`
    - `Para cada...Fim para cada`<br/> Os loops são controlados de duas maneiras: ou fazem loop até que uma condição seja satisfeita, ou fazem loop um número especificado de vezes. Each looping structure can be used in either way, but `While` loops and `Repeat` loops are more appropriate for repeating until a condition is met, and `For` loops are more appropriate for looping a specified number of times. `For each...End for each` allows mixing both ways and is designed to loop within objects and collections.

**Note:** 4D allows you to embed programming structures up to a "depth" of 512 levels.


## return {expression}

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R4 | Adicionado |
</details>

The `return` statement can be called from anywhere. When a `return` statement is used in a function or method, the execution of the function or method is stopped. The remaining code is not executed and the control is returned to the caller.

The `return` statement can be used to [return a value](parameters.md#return-expression) to the caller.

### Exemplo

```4d
var $message : Text
var $i : Integer While (True) //infinite loop
    $i:=$i+1
    $message+=String($i)+"A\r"  // until 5
    logConsole($message)
    If ($i=5)
        return //stops the loop
    End if 
    $message+=String($i)+"B\r"  // until 4
    logConsole($message)
End while 
$message+=String($i)+"C\r"  //never executed 
logConsole($message)

// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

```

