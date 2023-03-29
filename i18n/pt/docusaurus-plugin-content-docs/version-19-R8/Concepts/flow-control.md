---
id: control-flow
title: Condições e loops
---

Independentemente da simplicidade ou da complexidade de um método ou função, sempre utilizará um ou vários dos três tipos de estruturas de programação. As estruturas de programação determinam o fluxo de execução, se serão executadas, e a ordem das linhas de instruções no método. Há três tipos de estruturas:

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

