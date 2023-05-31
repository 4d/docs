---
id: control-flow
title: Control flow overview
---

Independentemente da simplicidade ou da complexidade de um método, sempre utilizará um ou vários dos três tipos de estruturas de programação. As estruturas de programação determinam o fluxo de execução, se serão executadas, e a ordem das linhas de instruções dentro do método. Há três tipos de estruturas:

- **Sequencial**: uma estrutura sequencial é uma estrutura simples e linear. Uma sequência é uma série de sentenças que 4D executa uma atrás da outra, da primera à última. Uma instrução de uma linha, utilizada frequentemente para os métodos dos objetos, é o caso mais simples de uma estrutura sequencial. Por exemplo: `[People]lastName:=Uppercase([People]lastName)`
- **[Branching](Concepts/cf_branching.md)**: A branching structure allows methods to test a condition and take alternative paths, depending on the result. A condição é uma expressão booleana, uma expressão que avalia TRUE ou FALSE Uma estrutura condicional e a estrutura `If... One branching structure is the <code>If...Else...End if` structure, which directs program flow along one of two paths. The other branching structure is the `Case of...Else...End case` structure, which directs program flow to one of many paths.
- **[Looping](Concepts/cf_looping.md)**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. Para lidar com esta necessidade, a linguagem 4D oferece as estruturas de loop abaixo:
    - `While... End while`
    - `Repeat... Until`
    - `For...End for`
    - `For each...End for each`<br/> The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Cada estrutura de looping pode ser usada de qualquer forma, mas loops`While`  e `Repeat` são mais apropriados para repetir até que uma condição seja satisfeita, e loops `For` são mais apropriados para looping um número especificado de vezes. `For each... End for each` permite misturar ambas as formas e foi concebido para fazer loop dentro de objectos e colecções.

**Nota:** 4D permite incorporar estruturas de programação até uma "profundidade" de 512 níveis.


## return {expression}

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R4 | Adicionado |
</details>

A declaração `return` pode ser chamada de qualquer lugar. Quando uma declaração `return` é utilizada numa função ou método, a execução da função ou método é interrompida. O código restante não é executado e o controlo é devolvido ao autor da chamada.

A declaração `return` pode ser utilizada para [devolver um valor](parameters.md#return-expression) ao autor da chamada.

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

