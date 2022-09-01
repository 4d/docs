---
id: control-flow
title: Condiciones y bucles
---

Regardless of the simplicity or complexity of a method or function, you will always use one or more of three types of programming structures. Las estructuras de programación determinan el flujo de ejecución, si se ejecutan y el orden de las líneas de instrucciones dentro de un método. Hay tres tipos de estructuras:

- **Secuencial**: una estructura secuencial es una estructura simple y lineal. Una secuencia es una serie de sentencias que 4D ejecuta una tras otra, de la primera a la última. Una instrucción de una línea, utilizada frecuentemente para los métodos de los objetos, es el caso más simple de una estructura secuencial. Por ejemplo: `[People]lastName:=Uppercase([People]lastName)`
- **[Branching](Concepts/cf_branching.md)**: una estructura de bifurcación permite que los métodos prueben una condición y tomen caminos alternativos, dependiendo del resultado. La condición es una expresión booleana, una expresión que evalúa TRUE o FALSE. Una estructura condicional es la estructura `If...Else...End if`, que dirige el flujo del programa a lo largo de uno de los dos caminos. The other branching structure is the `Case of... Else...End case` structure, which directs program flow to one of many paths.
- **[Bucle](Concepts/cf_looping.md)**: cuando se escriben métodos, es muy común encontrarse con que se necesita que una secuencia de sentencias se repita un número de veces. Para hacer frente a esta necesidad, el lenguaje 4D ofrece las siguientes estructuras de bucle:
    - `While...End while`
    - `Repeat...Until`
    - `For...End for`
    - `For each...End for each`<br/> Los bucles se controlan de dos maneras: o bien hacen un bucle hasta que se cumpla una condición, o bien hacen un bucle un número determinado de veces. Cada estructura de bucle puede utilizarse de cualquier manera, pero los bucles `While` y los bucles `Repeat` son más apropiados para repetir hasta que se cumpla una condición, y los bucles `For` son más apropiados para hacer un bucle un número determinado de veces. `For each...End for each` permite la mezcla en ambos sentidos y está diseñado para realizar bucles dentro de objetos y colecciones.

**Nota:** 4D permite anidar estructuras de programación hasta una "profundidad" de 512 niveles.


## return {expression}

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R4  | Añadidos       |
</details>

The `return` statement can be called from anywhere. When a `return` statement is used in a function or method, the execution of the function or method is stopped. The remaining code is not executed and the control is returned to the caller.

The `return` statement can be used to [return a value](parameters.md#return-expression) to the caller.

### Ejemplo

```4d
var $message : Text
var $i : Integer

While (True) //infinite loop
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

