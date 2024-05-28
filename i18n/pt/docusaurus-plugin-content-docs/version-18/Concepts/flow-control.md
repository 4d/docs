---
id: control-flow
title: Visão geral do fluxo de controle
---

Regardless of the simplicity or complexity of a method, you will always use one or more of three types of programming structures. As estruturas de programação determinam o fluxo de execução, se serão executadas, e a ordem das linhas de instruções dentro do método. Há três tipos de estruturas:

- **Sequencial**: uma estrutura sequencial é uma estrutura simples e linear. Uma sequência é uma série de sentenças que 4D executa uma atrás da outra, da primera à última. Uma instrução de uma linha, utilizada frequentemente para os métodos dos objetos, é o caso mais simples de uma estrutura sequencial. Por exemplo: `[People]lastName:=Uppercase([People]lastName)`
- **[Branching](Concepts/cf_branching.md)**: A branching structure allows methods to test a condition and take alternative paths, depending on the result. A condição é uma expressão booleana, uma expressão que avalia TRUE ou FALSE. One branching structure is the `If...Else...End if` structure, which directs program flow along one of two paths. The other branching structure is the `Case of...Else...End case` structure, which directs program flow to one of many paths.
- **[Looping](Concepts/cf_looping.md)**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. Para lidar com esta necessidade, a linguagem 4D oferece as estruturas de loop abaixo:
  - `While... End while`
  - `Repeat... Until`
  - `For...End for`
  - `For each...End for each`<br/> The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Cada estrutura de looping pode ser usada de qualquer forma, mas loops`While`  e `Repeat` são mais apropriados para repetir até que uma condição seja satisfeita, e loops `For` são mais apropriados para looping um número especificado de vezes. `For each... End for each` permite misturar ambas as formas e foi concebido para fazer loop dentro de objectos e colecções.

**Nota:** 4D permite incorporar estruturas de programação até uma "profundidade" de 512 níveis.
