---
id: control-flow
title: Condições e loops
---

Regardless of the simplicity or complexity of a method or function, you will always use one or more of three types of programming structures. Programming structures control the flow of execution, whether and in what order statements are executed within a method. Há três tipos de estruturas:

- **Sequencial**: uma estrutura sequencial é uma estrutura simples e linear. Uma sequência é uma série de sentenças que 4D executa uma atrás da outra, da primera à última. Uma instrução de uma linha, utilizada frequentemente para os métodos dos objetos, é o caso mais simples de uma estrutura sequencial. Por exemplo: `[People]lastName:=Uppercase([People]lastName)`
- **[Branching](Concepts/cf_branching.md)**: uma estrutura de bifurcação permite que os métodos provem uma condição e tomem caminhos alternativos, dependendo do resultado. A condição é uma expressão booleana, uma expressão que avalia TRUE ou FALSE. Uma estrutura condicional e a estrutura `If...Else...End if`, que dirige o fluxo do programa ao longo de um dos dois caminhos. A outra estrutura condicional é a estrutura `Case of... End case` que direciona fluxo de programa para um de muitas caminhos.
- **[Bucle](Concepts/cf_looping.md)**: quando se escrevem métodos, é muito comum descobrir que se necessita que uma sequência de sentenças se repita um número de vezes. Para lidar com esta necessidade, a linguagem 4D oferece as estruturas de loop abaixo:
    - `While... End while`
    - `Repeat... Until`
    - `For... End for`
    - `Para cada...Fim para cada`<br/> Os loops são controlados de duas maneiras: ou fazem loop até que uma condição seja satisfeita, ou fazem loop um número especificado de vezes. Cada estrutura de looping pode ser usada de qualquer forma, mas loops`While` e `Repeat` são mais apropriados para repetir até que uma condição seja satisfeita, e loops `For` são mais apropriados para looping um número especificado de vezes. `For each... End for each` permite misturar ambas as formas e foi concebido para fazer loop dentro de objectos e colecções.

**Nota:** 4D permite incorporar estruturas de programação até uma "profundidade" de 512 níveis.


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

