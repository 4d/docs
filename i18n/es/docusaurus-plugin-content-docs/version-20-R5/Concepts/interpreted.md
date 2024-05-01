---
id: interpreted-compiled
title: Modos interpretado y compilado
---

4D applications can work in **interpreted** or **compiled** mode:

- en modo interpretado, las declaraciones se leen y se traducen en lenguaje máquina en el momento de su ejecución. Puede añadir o modificar el código siempre que lo necesite, la aplicación se actualiza automáticamente.
- en modo compilado, todos los métodos se leen y traducen una vez, en el paso de compilación. Después, la aplicación sólo contiene instrucciones a nivel de ensamblaje, ya no es posible editar el código.

Las ventajas de la compilación son:

- **Speed**: Your application can run from 3 to 1,000 times faster.
- **Code checking**: Your application is scanned for the consistency of code. Se detectan tanto los conflictos lógicos como los sintácticos.
- **Protection**: Once your application is compiled, you can delete the interpreted code. Entonces, la aplicación compilada es funcionalmente idéntica a la original, excepto que la estructura y los métodos no pueden ser vistos o modificados, deliberada o inadvertidamente.
- **Stand-alone double-clickable applications**: compiled applications can also be transformed into stand-alone applications with their own icon.
- **Preemptive mode**: only compiled code can be executed in preemptive processes.

## Diferencias entre el código interpretado y el compilado

Aunque la aplicación funcionará de la misma manera en modo interpretado y compilado, hay algunas diferencias que hay que conocer cuando se escribe código que será compilado. El intérprete de 4D suele ser más flexible que el compilador.

| Compilado                                                                                                                                                                                                      | Interpretado                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| No se puede tener un método con el mismo nombre que una variable.                                                                                                                              | No se genera ningún error, pero se da prioridad al método                                            |
| All variables must by typed, either through a declaration (using `var`, `#Declare`, or `Function` keywords), or by the compiler at compilation time.                        | Las variables se pueden escribir sobre la marcha (no se recomienda)               |
| No se puede cambiar el tipo de datos de ninguna variable o array.                                                                                                                              | Es posible cambiar el tipo de datos de una variable o un array (no se recomienda) |
| No se puede cambiar un array unidimensional a uno bidimensional, ni cambiar un array bidimensional a uno unidimensional.                                                                       | Posible                                                                                              |
| Aunque el compilador escribirá la variable por usted, debe especificar el tipo de datos de una variable mediante declaraciones en las que el tipo de datos sea ambiguo, como en un formulario. |                                                                                                      |
| The `Undefined` function always returns False for variables. Las variables siempre están definidas.                                                                            |                                                                                                      |
| Si has marcado la propiedad "Puede ser ejecutado en procesos apropiativos" para el método, el código no debe llamar a ningún comando hilo no seguro u otros métodos hilo no seguro.            | Se ignoran las propiedades de los procesos preventivos                                               |
| The `IDLE` command is necessary to call 4D in specific loops                                                                                                                                                   | Siempre es posible interrumpir 4D                                                                    |

## Utilizar las directivas del compilador con el intérprete

Las aplicaciones no compiladas no requieren directivas del compilador. El intérprete digita automáticamente cada variable en función de cómo se utilice en cada declaración, y una variable puede volver a escribirse libremente en el proyecto de aplicación.

Debido a esta flexibilidad, es posible que una aplicación tenga un rendimiento diferente en modo interpretado y compilado.

Por ejemplo, si se escribe:

```4d
var MyInt : Integer
```

y en otra parte del proyecto, escribe:

```4d
MyInt:=3.1416
```

In this example, `MyInt` is assigned the same value (3) in both the interpreted and compiled modes, provided the compiler directive is interpreted _prior_ to the assignment statement.

El intérprete 4D utiliza directivas de compilador para escribir las variables. Cuando el intérprete encuentra una directiva de compilador, escribe la variable según la directiva. Si una declaración posterior intenta asignar un valor incorrecto (por ejemplo, asignar un valor alfanumérico a una variable numérica) la asignación no tendrá lugar y generará un error.

El orden en el que aparecen las dos declaraciones es irrelevante para el compilador, porque primero busca en todo el proyecto para las directivas del compilador. El intérprete, sin embargo, no es sistemático. Interpreta las declaraciones en el orden de ejecución. Ese orden, por supuesto, puede cambiar de una sesión a otra, dependiendo de lo que haga el usuario. Por esta razón, es importante diseñar su proyecto de manera que las directivas del compilador se ejecuten antes de cualquier declaración que contenga las variables declaradas.

## Utilización de punteros para evitar la reescritura

Una variable no se puede volver a escribir. Sin embargo, es posible utilizar un puntero para referirse a variables de diferentes tipos de datos. Por ejemplo, el siguiente código está permitido tanto en modo interpretado como compilado:

```4d
var $p : Pointer
var $name : Text
var $age : Integer

$name:="Smith"
$age:=50

$p:=->$name //text target for the pointer
$p->:="Wesson" //assigns a text value

$p:=->$age  
// new target of different type for the pointer
$p->:=55 //assigns a number value
```

Imagine una función que devuelve la longitud (número de caracteres) de valores de todo tipo.

```4d
  // Calc_Length (how many characters)
  // $vp = pointer to flexible variable type, numeric, text, time, boolean

#DECLARE($vp : Pointer) -> $length : Integer
var $result : Text  
$result:=String($vp->)
$length:=Length($result)
```

Entonces se puede llamar a este método:

```4d
$var1:="my text"
$var2:=5.3
$var3:=?10:02:24?
$var4:=True

$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)

ALERT("Total length: "+String($vLength))
```
