---
id: interpreted-compiled
title: Interpreted and Compiled modes
---

4D Anwendungen können im **interpretierten** oder **kompilierten** Modus laufen:

- Im interpretierten Modus werden Anweisungen im Moment der Ausführung gelesen und in Maschinensprache übersetzt. Sie können den Code immer, wenn Sie es benötigen, ergänzen oder verändern, die Anwendung wird automatisch aktualisiert.
- Im kompilierten Modus werden alle Methoden während dem Kompilieren auf einmal gelesen und übersetzt. Afterwards, the application only contains assembly level instructions are available, it is no longer possible to edit the code.

Die Vorteile von Kompilieren sind:

- **Speed**: Your application can run from 3 to 1,000 times faster.
- **Code checking**: Your application is scanned for the consistency of code. 4D Compiler findet sowohl logische als auch Syntaxfehler.
- **Protection**: Once your application is compiled, you can delete the interpreted code. Then, the compiled application is functionally identical to the original, except that the structure and methods cannot be viewed or modified, deliberately or inadvertently.
- **Stand-alone double-clickable applications**: compiled applications can also be transformed into stand-alone applications (.EXE files) with their own icon.
- **Preemptive Modus**: Nur kompilierter Code lässt sich in preemptive Prozessen ausführen.

## Differences between interpreted and compiled code
Although application will work the same way in interpreted and compiled modes, there are some differences to know when you write code that will be compiled. The 4D interpreter is usually more flexible than the compiler.

| Kompiliert                                                                                                                                                                                         | Interpretiert                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Sie können keine Methode mit demselben Name wie eine Variable haben.                                                                                                                               | Es wird kein Fehler generiert, jedoch erhält die Methode Priorität                   |
| Alle Variablen müssen typisiert sein, entweder über eine Compiler-Direktive (z. B. `C_LONGINT`) oder durch den Compiler beim Kompilieren.                                                          | Variablen lassen sich spontan typisieren (nicht empfohlen)                           |
| Sie können den Datentyp von Variablen oder Arrays nicht ändern.                                                                                                                                    | Der Datentyp einer Variablen oder eines Array lässt sich verändern (nicht empfohlen) |
| Sie können ein eindimensionales Array nicht in ein zweidimensionales Array umwandeln und umgekehrt.                                                                                                | Ist möglich                                                                          |
| Auch wenn der Compiler den Typ der Variablen für Sie festlegt, sollten Sie bei zweideutigen Datentypen, wie z. B. in einem Formular, den Datentyp der Variablen mit Compiler-Befehlen deklarieren. |                                                                                      |
| Die Funktion `Undefined` gibt für Variablen immer den Wert Falsch zurück. Variablen sind immer definiert.                                                                                          |                                                                                      |
| Ist für die Methode die Eigenschaft "Als preemptive Prozess starten" markiert, darf der Code weder thread-unsafe Befehle oder andere thread-unsafe Methoden aufrufen.                              | Preemptive Prozesseigenschaften werden ignoriert                                     |
| Der Befehl `IDLE` ist notwendig, um 4D in spezifischen Schleifen aufzurufen                                                                                                                        | Es ist immer möglich, 4D zu unterbrechen                                             |

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
