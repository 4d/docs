---
id: control-flow
title: Condiciones y bucles
---

Independientemente de la simplicidad o la complejidad de un método, siempre utilizará uno o varios de los tres tipos de estructuras de programación. Las estructuras de programación determinan el flujo de ejecución, si se ejecutan y el orden de las líneas de instrucciones dentro de un método. Hay tres tipos de estructuras:

- **Secuencial**: una estructura secuencial es una estructura simple y lineal. Una secuencia es una serie de sentencias que 4D ejecuta una tras otra, de la primera a la última. Una instrucción de una línea, utilizada frecuentemente para los métodos de los objetos, es el caso más simple de una estructura secuencial. Por ejemplo: `[People]lastName:=Uppercase([People]lastName)`
- **[Branching](Concepts/cf_branching.md)**: una estructura de bifurcación permite que los métodos prueben una condición y tomen caminos alternativos, dependiendo del resultado. La condición es una expresión booleana, una expresión que evalúa TRUE o FALSE. Una estructura condicional es la estructura `If...Else...End if`, que dirige el flujo del programa a lo largo de uno de los dos caminos. La otra estructura condicional es la estructura `Case of... Else...End case`, que dirige el flujo del programa a una de las muchas alternativas.
- **[Bucle](Concepts/cf_looping.md)**: cuando se escriben métodos, es muy común encontrarse con que se necesita que una secuencia de sentencias se repita un número de veces. Para hacer frente a esta necesidad, el lenguaje 4D ofrece las siguientes estructuras de bucle:
    - `While...End while`
    - `Repeat...Until`
    - `For...End for`
    - End for each</code><br> Los bucles se controlan de dos maneras: o bien hacen un bucle hasta que se cumpla una condición, o bien hacen un bucle un número determinado de veces. Cada estructura de bucle puede utilizarse de cualquier manera, pero los bucles `While` y los bucles `Repeat` son más apropiados para repetir hasta que se cumpla una condición, y los bucles `For` son más apropiados para hacer un bucle un número determinado de veces. End for each</code> permite la mezcla en ambos sentidos y está diseñado para realizar bucles dentro de objetos y colecciones.

**Nota:** 4D permite anidar estructuras de programación hasta una "profundidad" de 512 niveles. 
