---
id: interpreted-compiled
title: Modos interpretado y compilado
---

4D applications can work in **interpreted** or **compiled** mode:

- in interpreted mode, statements are read and translated in machine language at the moment of their execution. You can add or modify the code whenever you need to, the application is automatically updated.
- in compiled mode, all methods are read and translated once, at the compilation step. Afterwards, the application only contains assembly level instructions are available, it is no longer possible to edit the code.

The advantages of the compilation are:

- **Velocidad**: su base de datos se ejecuta de 3 a 1.000 veces más rápido.
- **Verificación del código**: su aplicación de base de datos se analiza para comprobar la coherencia del código. Both logical and syntactical conflicts are detected.
- **Protección:**: una vez compilada su base, puede eliminar el código interpretado. Entonces, la base compilada es funcionalmente idéntica a la original, excepto que la estructura y los métodos no pueden ser vistos o modificados, deliberada o inadvertidamente.
- **Aplicaciones independientes con doble clic**: las bases compiladas también pueden transformarse en aplicaciones independientes (archivos.EXE) con su propio icono.
- **Preemptive mode**: only compiled code can be executed in preemptive processes.

## Differences between interpreted and compiled code
Although application will work the same way in interpreted and compiled modes, there are some differences to know when you write code that will be compiled. The 4D interpreter is usually more flexible than the compiler.

| Compiled                                                                                                                                                                               | Interpreted                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| You cannot have a method with the same name as a variable.                                                                                                                             | No error is generated, but priority is given to the method                     |
| All variables must by typed, either through a compiler directive (ex: `C_LONGINT`), or by the compiler at compilation time.                                                            | Variables can be typed on-the-fly (not recommended)                            |
| You cannot change the data type of any variable or array.                                                                                                                              | Changing the data type of a variable or an array is possible (not recommended) |
| You cannot change a one-dimensional array to a two-dimensional array, or change a two-dimensional array to a one-dimensional array.                                                    | Possible                                                                       |
| Although the compiler will type the variable for you, you should specify the data type of a variable by using compiler directives where the data type is ambiguous, such as in a form. |                                                                                |
| The `Undefined` function always returns False for variables. Variables are always defined.                                                                                             |                                                                                |
| If you have checked the "Can be run in preemptive processes" property for the method, the code must not call any thread-unsafe commands or other thread-unsafe methods.                | Preemptive process properties are ignored                                      |
| The `IDLE` command is necessary to call 4D in specific loops                                                                                                                           | It is always possible to interrupt 4D                                          |

## Using Compiler Directives with the Interpreter

Las bases no compiladas no requieren directivas del compilador. El intérprete digita automáticamente cada variable en función de cómo se utilice en cada declaración, y una variable puede volver a escribirse libremente en toda la base.

Debido a esta flexibilidad, es posible que una base de tenga un rendimiento diferente en modo interpretado y compilado.

For example, if you write:

```4d
C_LONGINT(MyInt)
```

y en otra parte de la base, se escribe:
```4d
MyInt:=3.1416
```

In this example, `MyInt` is assigned the same value (3) in both the interpreted and compiled modes, provided the compiler directive is interpreted *prior* to the assignment statement.

The 4D interpreter uses compiler directives to type variables. When the interpreter encounters a compiler directive, it types the variable according to the directive. If a subsequent statement tries to assign an incorrect value (e.g., assigning an alphanumeric value to a numeric variable) the assignment will not take place and will generate an error.

El orden en el que aparecen las dos declaraciones es irrelevante para el compilador, porque primero busca en toda la base las directivas del compilador. The interpreter, however, is not systematic. It interprets statements in the order in which they are executed. That order, of course, can change from session to session, depending on what the user does. Por esta razón, es importante diseñar su base de datos de manera que las directivas del compilador se ejecuten antes de cualquier declaración que contenga las variables declaradas.


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
