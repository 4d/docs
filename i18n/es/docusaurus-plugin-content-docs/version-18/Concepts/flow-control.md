---
id: control-flow
title: Condiciones y bucles
---

Independientemente de la simplicidad o la complejidad de un método, siempre utilizará uno o varios de los tres tipos de estructuras de programación. Las estructuras de programación determinan el flujo de ejecución, si se ejecutan y el orden de las líneas de instrucciones dentro de un método. Hay tres tipos de estructuras:

- **Sequential**: a sequential structure is a simple, linear structure. A sequence is a series of statements that 4D executes one after the other, from first to last. A one-line routine, frequently used for object methods, is the simplest case of a sequential structure. For example: `[People]lastName:=Uppercase([People]lastName)`
- **[Branching](Concepts/cf_branching.md)**: una estructura de bifurcación permite que los métodos prueben una condición y tomen caminos alternativos, dependiendo del resultado. The condition is a Boolean expression, an expression that evaluates TRUE or FALSE. Una estructura condicional es la estructura `If...Else...End if`, que dirige el flujo del programa a lo largo de uno de los dos caminos. The other branching structure is the `Case of... Else...End case` structure, which directs program flow to one of many paths.
- **[Bucle](Concepts/cf_looping.md)**: cuando se escriben métodos, es muy común encontrarse con que se necesita que una secuencia de sentencias se repita un número de veces. To deal with this need, the 4D language provides the following looping structures:
  - `While...End while`
  - `Repeat...Until`
  - `For...End for`
  - `For each...End for each`<br/> Los bucles se controlan de dos maneras: o bien hacen un bucle hasta que se cumpla una condición, o bien hacen un bucle un número determinado de veces. Cada estructura de bucle puede utilizarse de cualquier manera, pero los bucles `While` y los bucles `Repeat` son más apropiados para repetir hasta que se cumpla una condición, y los bucles `For` son más apropiados para hacer un bucle un número determinado de veces. `For each...End for each` permite la mezcla en ambos sentidos y está diseñado para realizar bucles dentro de objetos y colecciones.

**Nota:** 4D permite anidar estructuras de programación hasta una "profundidad" de 512 niveles.
