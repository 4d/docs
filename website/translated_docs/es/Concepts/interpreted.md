---
id: interpreted-compiled
title: Modos interpretado y compilado
---

Las aplicaciones 4D pueden funcionar en modo **interpretado** o **compilado**:

- en modo interpretado, las declaraciones se leen y se traducen en lenguaje máquina en el momento de su ejecución. Puede añadir o modificar el código siempre que lo necesite, la aplicación se actualiza automáticamente.
- en modo compilado, todos los métodos se leen y traducen una vez, en el paso de compilación. Después, la aplicación sólo contiene instrucciones a nivel de ensamblaje, ya no es posible editar el código.

Las ventajas de la compilación son:

- **Velocidad**: su base aplicación se ejecuta de 3 a 1.000 veces más rápido.
- **Verificación del código**: su aplicación se analiza para comprobar la consistencia del código. Se detectan tanto los conflictos lógicos como los sintácticos.
- **Protección:**: una vez compilada su aplicación, puede eliminar el código interpretado. Entonces, la aplicación compilada es funcionalmente idéntica a la original, excepto que la estructura y los métodos no pueden ser vistos o modificados, deliberada o inadvertidamente.
- **Aplicaciones independientes con doble clic**: las aplicaciones compiladas también pueden transformarse en aplicaciones independientes (archivos.EXE) con su propio icono.
- **Modo apropiativo**: sólo se puede ejecutar código compilado en procesos apropiativos.

## Diferencias entre el código interpretado y el compilado
Aunque la aplicación funcionará de la misma manera en modo interpretado y compilado, hay algunas diferencias que hay que conocer cuando se escribe código que será compilado. El intérprete de 4D suele ser más flexible que el compilador.

| Compilado                                                                                                                                                                                                | Interpretado                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| No se puede tener un método con el mismo nombre que una variable.                                                                                                                                        | No se genera ningún error, pero se da prioridad al método                         |
| Todas las variables deben ser tipificadas, ya sea a través de una directiva del compilador (ej.: `C_LONGINT`), o por el compilador en tiempo de compilación.                                             | Las variables se pueden escribir sobre la marcha (no se recomienda)               |
| No se puede cambiar el tipo de datos de ninguna variable o array.                                                                                                                                        | Es posible cambiar el tipo de datos de una variable o un array (no se recomienda) |
| No se puede cambiar un array unidimensional a uno bidimensional, ni cambiar un array bidimensional a uno unidimensional.                                                                                 | Posible                                                                           |
| Aunque el compilador escribirá la variable por usted, debe especificar el tipo de datos de una variable utilizando directivas del compilador cuando el tipo de datos sea ambiguo, como en un formulario. |                                                                                   |
| La función `Undefined` siempre devuelve False para las variables. Las variables siempre están definidas.                                                                                                 |                                                                                   |
| Si has marcado la propiedad "Puede ser ejecutado en procesos apropiativos" para el método, el código no debe llamar a ningún comando hilo no seguro u otros métodos hilo no seguro.                      | Preemptive process properties are ignored                                         |
| The `IDLE` command is necessary to call 4D in specific loops                                                                                                                                             | It is always possible to interrupt 4D                                             |

## Using Compiler Directives with the Interpreter

Compiler directives are not required for uncompiled applications. The interpreter automatically types each variable according to how it is used in each statement, and a variable can be freely retyped throughout the application project.

Because of this flexibility, it is possible that an application can perform differently in interpreted and compiled modes.

For example, if you write:

```4d
C_LONGINT(MyInt)
```

and elsewhere in the project, you write:
```4d
MyInt:=3.1416
```

In this example, `MyInt` is assigned the same value (3) in both the interpreted and compiled modes, provided the compiler directive is interpreted *prior* to the assignment statement.

The 4D interpreter uses compiler directives to type variables. When the interpreter encounters a compiler directive, it types the variable according to the directive. If a subsequent statement tries to assign an incorrect value (e.g., assigning an alphanumeric value to a numeric variable) the assignment will not take place and will generate an error.

The order in which the two statements appear is irrelevant to the compiler, because it first scans the entire project for compiler directives. The interpreter, however, is not systematic. It interprets statements in the order in which they are executed. That order, of course, can change from session to session, depending on what the user does. For this reason, it is important to design your project so that your compiler directives are executed prior to any statements containing declared variables.


## Using pointers to avoid retyping

A variable cannot be retyped. However, it is possible to use a pointer to refer to variables of different data types. For example, the following code is allowed in both interpreted and compiled modes:

```4d
C_POINTER($p)
C_TEXT($name)
C_LONGINT($age)

$name:="Smith"
$age:=50

$p:=->$name //text target for the pointer
$p->:="Wesson" //assigns a text value

$p:=->$age  
// new target of different type for the pointer
$p->:=55 //assigns a number value
```

Imagine a function that returns the length (number of charaters) of values that can be of any type.

```4d
  // Calc_Length (how many characters)
  // $1 = pointer to flexible variable type, numeric, text, time, boolean

C_POINTER($1)
C_TEXT($result)  
C_LONGINT($0)
$result:=String($1->)
$0:=Length($result)
```

Then this method can be called:
```4d
$var1:="my text"
$var2:=5.3
$var3:=?10:02:24?
$var4:=True

$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)

ALERT("Total length: "+String($vLength))
```
