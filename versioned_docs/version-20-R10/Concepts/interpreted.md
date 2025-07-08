---
id: interpreted-compiled
title: Interpreted and Compiled modes
---

4D applications can work in **interpreted** or **compiled** mode:

- in interpreted mode, statements are read and translated in machine language at the moment of their execution. You can add or modify the code whenever you need to, the application is automatically updated.
- in compiled mode, all methods are read and translated once, at the compilation step. Afterwards, the application only contains assembly level instructions are available, it is no longer possible to edit the code.   

The advantages of the compilation are:

- **Speed**: Your application can run from 3 to 1,000 times faster.
- **Code checking**: Your application is scanned for the consistency of code. Both logical and syntactical conflicts are detected.
- **Protection**: Once your application is compiled, you can delete the interpreted code. Then, the compiled application is functionally identical to the original, except that the structure and methods cannot be viewed or modified, deliberately or inadvertently.
- **Stand-alone double-clickable applications**: compiled applications can also be transformed into stand-alone applications with their own icon.
- **Preemptive mode**: only compiled code can be executed in preemptive processes. 

## Differences between interpreted and compiled code

Although application will work the same way in interpreted and compiled modes, there are some differences to know when you write code that will be compiled. The 4D interpreter is usually more flexible than the compiler. 

|Compiled|Interpreted|
|---|---|
|You cannot have a method with the same name as a variable.|No error is generated, but priority is given to the method|
|All variables must by typed, either through a declaration (using `var`, `#Declare`, or `Function` keywords), or by the compiler at compilation time.|Variables can be typed on-the-fly (not recommended)|
|You cannot change the data type of any variable or array.|Changing the data type of a variable or an array is possible (not recommended)|
|You cannot change a one-dimensional array to a two-dimensional array, or change a two-dimensional array to a one-dimensional array.|Possible|
|Although the compiler will type the variable for you, you should specify the data type of a variable by using declarations where the data type is ambiguous, such as in a form.||
|The `Undefined` function always returns False for variables. Variables are always defined.||
|If you have checked the "Can be run in preemptive processes" property for the method, the code must not call any thread-unsafe commands or other thread-unsafe methods.|Preemptive process properties are ignored|
|The `IDLE` command is necessary to call 4D in specific loops|It is always possible to interrupt 4D|

## Using Compiler Directives with the Interpreter

Compiler directives are not required for uncompiled applications. The interpreter automatically types each variable according to how it is used in each statement, and a variable can be freely retyped throughout the application project.

Because of this flexibility, it is possible that an application can perform differently in interpreted and compiled modes. 

For example, if you write:

```4d
var MyInt : Integer
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

Imagine a function that returns the length (number of charaters) of values that can be of any type. 

```4d
  // Calc_Length (how many characters)
  // $vp = pointer to flexible variable type, numeric, text, time, boolean

#DECLARE($vp : Pointer) -> $length : Integer
var $result : Text  
$result:=String($vp->)
$length:=Length($result)
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
