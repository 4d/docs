---
id: interpreted-compiled
title: Modos interpretado e compilado
---

As aplicações 4D podem funcionar no modo **interpretado** ou **compilado**:

- no modo interpretado, as declarações são lidas e traduzidas em linguagem de máquina no momento da sua execução. Pode adicionar ou modificar o código sempre que precisar, a aplicação é actualizada automaticamente.
- no modo compilado, todos os métodos são lidos e traduzidos uma vez, na etapa de compilação. Posteriormente, a aplicação contém apenas instruções de nível de montagem, já não é possível editar o código.

As vantagens da compilação são:

- **Speed**: Your database can run from 3 to 1,000 times faster.
- **Code checking**: Your database application is scanned for the consistency of code. São detectados conflitos tanto lógicos como sintácticos.
- **Protection**: Once your database is compiled, you can delete the interpreted code. Then, the compiled database is functionally identical to the original, except that the structure and methods cannot be viewed or modified, deliberately or inadvertently.
- **Stand-alone double-clickable applications**: compiled databases can also be transformed into stand-alone applications (.EXE files) with their own icon.
- **Modo preemptivo**: só codigo compilado pode ser executado em processos preemptivos.

## Diferenças entre código interpretado e compilado
Apesar de aplicações funcionarem da mesma forma em modo compilado e interpretado, há diferenças quando escrever código que será compilado. O 4D interpreter é mais flexível que o compilador.

| Compilado                                                                                                                                                                              | Interpretado                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Não pode ter um método com o mesmo nome que uma variável.                                                                                                                              | Nenhum erro é gerado, mas prioridade é dada ao método                          |
| Todas as variáveis devem ser digitadas, seja através de uma diretiva do compilador (ex: `C_LONGINT`), ou pelo compilador no momento da compilação.                                     | As variáveis podem ser digitadas no momento (mas não é recomendado)            |
| You cannot change the data type of any variable or array.                                                                                                                              | Changing the data type of a variable or an array is possible (not recommended) |
| You cannot change a one-dimensional array to a two-dimensional array, or change a two-dimensional array to a one-dimensional array.                                                    | Possível                                                                       |
| Although the compiler will type the variable for you, you should specify the data type of a variable by using compiler directives where the data type is ambiguous, such as in a form. |                                                                                |
| A função `Undefined` retorna sempre False para variáveis. As variáveis são sempre definidas.                                                                                           |                                                                                |
| If you have checked the "Can be run in preemptive processes" property for the method, the code must not call any thread-unsafe commands or other thread-unsafe methods.                | Preemptive process properties are ignored                                      |
| The `IDLE` command is necessary to call 4D in specific loops                                                                                                                           | É sempre possível interromper 4D                                               |

## Utilização de directivas de compilação com o Intérprete

Compiler directives are not required for uncompiled databases. The interpreter automatically types each variable according to how it is used in each statement, and a variable can be freely retyped throughout the database.

Because of this flexibility, it is possible that a database can perform differently in interpreted and compiled modes.

Por exemplo, se escrever:

```4d
C_LONGINT(MyInt)
```

and elsewhere in the database, you write:
```4d
MyInt:=3.1416
```

In this example, `MyInt` is assigned the same value (3) in both the interpreted and compiled modes, provided the compiler directive is interpreted *prior* to the assignment statement.

The 4D interpreter uses compiler directives to type variables. When the interpreter encounters a compiler directive, it types the variable according to the directive. If a subsequent statement tries to assign an incorrect value (e.g., assigning an alphanumeric value to a numeric variable) the assignment will not take place and will generate an error.

The order in which the two statements appear is irrelevant to the compiler, because it first scans the entire database for compiler directives. The interpreter, however, is not systematic. It interprets statements in the order in which they are executed. That order, of course, can change from session to session, depending on what the user does. For this reason, it is important to design your database so that your compiler directives are executed prior to any statements containing declared variables.


## Using pointers to avoid retyping

Uma variável não pode ser redigida de novo. However, it is possible to use a pointer to refer to variables of different data types. For example, the following code is allowed in both interpreted and compiled modes:

```4d
C_POINTER($p)
C_TEXT($name)
C_LONGINT($age)

$name:="Smith"
$age:=50

$p:=->$name //alvo de texto para o ponteiro
$p->:="Wesson" //atribui um valor de texto

$p:=->$age  
//novo alvo de tipo diferente para o ponteiro
$p->:=55 //atribui um valor numérico
```

Imagine a function that returns the length (number of charaters) of values that can be of any type.

```4d
  // Calc_Length (how many characters)
  // $1 = pointer to flexible variable type, numeric, text, time, boolean C_POINTER($1)
C_TEXT($result) C_LONGINT($0)
$result:=String($1->)
$0:=Length($result)
```

Em seguida, este método pode ser chamado:
```4d
$var1:="my text"
$var2:=5.3
$var3:=?10:02:24?
$var4:=True

$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4) ALERT("Total length: "+String($vLength))
```
