---
id: classes
title: Klassen
---


## Overview

Die 4D Programmiersprache unterstützt das Konzept **Klassen**. In der objektorientierten Programmierung definieren Sie in einer Klasse das Verhalten eines Objekts mit zugewiesenen Eigenschaften und Funktionen.

Ist eine Klasse definiert, können Sie Objekte dieser Klasse als **Instanz** überall in Ihrem Code verwenden. Jedes Objekt ist eine Instanz seiner Klasse. Eine Klasse kann eine andere Klasse `erweitern` und erbt dann von deren Funktionen.

Das Klassenmodell in 4D ist ähnlich zu Klassen in JavaScript und basiert auf einer Kette von Prototypen.

### Objekt Klasse

Die Klasse ist selbst ein Objekt vom Typ "Klasse". Ein Objekt Klasse hat folgende Eigenschaften und Methoden:

- `name` (konform mit den Regeln von ECMAScript)
- Objekt `superclass` (optional, null, wenn nicht vorhanden)
- Methode `new()`, um Instanzen der Objekte in einer Klasse zu setzen.

Zusätzlich kann ein Objekt Klasse verweisen auf:

- Ein Objekt `constructor` (optional)
- Ein Objekt `prototype` mit Objekten "named function" (optional).

Ein Objekt Klasse ist ein shared Object, d. h. es lässt sich aus verschiedenen 4D Prozessen gleichzeitig darauf zugreifen.

### Nach Eigenschaft suchen und Prototyp

Alle Objekte in 4D sind intern an ein Objekt Klasse gebunden. Findet 4D eine Eigenschaft nicht in einem Objekt, sucht es im Objekt Prototyp seiner Klasse; wird sie hier nicht gefunden, sucht 4D weiter im Objekt Prototyp seiner Superklasse, usw. bis es keine Superklasse mehr gibt.

Alle Objekte erben vom Objekt Klasse als ihrer obersten Klasse im Vererbungsbaum.

```4d
  //Class: Polygon
Class constructor
C_LONGINT($1;$2)
This.area:=$1*$2

 //C_OBJECT($poly)
C_BOOLEAN($instance)
$poly:=cs.Polygon.new(4;3)

$instance:=OB Instance of($poly;cs.Polygon)  
 // true
$instance:=OB Instance of($poly;4D.Object)
 // true 
```

Beim Aufzählen der Eigenschaften eines Objekts wird der Prototyp seiner Klasse nicht mitgezählt. Demzufolge geben die Anweisung `For each` und der Befehl `JSON Stringify` nicht Eigenschaften des Objekts prototype der Klasse zurück. Die Eigenschaft des Objekts prototype einer Klasse ist eine interne ausgeblendete Eigenschaft.

### Definition einer Klasse

Eine Datei Benutzerklasse definiert ein Objektmodell, auf das sich über die Class Member Method `new()` im Code der Anwendung eine Instanz setzen lässt. In der Datei Klasse verwenden Sie in der Regel spezifische [Class Keywords](#class-keywords) und [Class Befehle](#class-commands).

Beispiel:

```4d
//Class: Person.4dm
Class constructor
  C_TEXT($1) // FirstName
  C_TEXT($2) // LastName
  This.firstName:=$1
  This.lastName:=$2
```

In einer Methode erstellen Sie eine "Person":

    C_OBJECT($o)
    $o:=cs.Person.new("John";"Doe")  
    // $o: {firstName: "John";lastName: "Doe" }
    

Sie könnten auch eine leere Datei Klasse erstellen und Instanzen auf leere Objekte setzen. Legen Sie z.B. die Datei Klasse `Empty.4dm` wie folgt an:

```4d
//Empty.4dm class file
//Nothing
```

Können Sie in einer Methode wie folgt schreiben:

```4d
$o:=cs.Empty.new()  
//$o : {}
$cName:=OB Class($o).name //"Empty"
```

## Stores für Klassen

Klassen sind über Stores für Klassen verfügbar. Es gibt folgende Stores für Klassen:

- Ein Store für in 4D integrierte Klassen. Er wird über den Befehl `4D` zurückgegeben.
- Ein Store für Klassen pro geöffneter Anwendung oder Komponente. Er wird über den Befehl `cs` zurückgegeben. Das sind "Benutzerklassen".

Sie können z.B. für ein Objekt von myClass mit der Anweisung `cs.myClass.new()` eine neue Instanz erstellen (`cs` bedeutet *classtore*).

## Benutzerklassen verwalten

### Datei Klasse

Eine Benutzerklasse in 4D wird über eine spezifische Datei Methode (.4dm) definiert, die im Ordner `/Project/Sources/Classes/` gespeichert wird. Der Name der Datei ist der Klassenname.

Um z.B. eine Klasse mit Namen "Polygon" zu definieren, müssen Sie folgende Datei anlegen:

- Ordner der Anwendung 
    + Project 
        * Sources 
            - Klassen 
                + Polygon.4dm

### Klassennamen

Beim Benennen von Klassen müssen Sie folgende Regeln beachten:

- Der Klassenname muss mit den Regeln von ECMAScript konform sein. 
- Es wird zwischen Groß- und Kleinschreibung unterschieden.
- Um Konflikte zu vermeiden, sollten Sie für eine Klasse und eine Tabelle in derselben Anwendung unterschiedliche Namen verwenden. 

### 4D Entwickleroberfläche

Beim Erstellen auf der 4D Entwickleroberfläche wird eine Datei Klasse automatisch an der passenden Stelle gespeichert, entweder über das Menü **Datei/Ablage** oder über den Explorer.

#### Menü Datei/Ablage und Werkzeugleiste

Sie erstellen eine Datei Klasse für das Projekt über den Eintrag **Neu > Klasse** im Menü **Datei/Ablage** oder über das **Icon Neu** in der Werkzeugleiste.

Sie können auch die Tastenkombination **Strg+Shift+Alt+k** verwenden.

#### Explorer

Im Explorer werden Klassen auf der Seite **Methoden** in der Kategorie **Klassen** gruppiert.

Um eine neue Klasse zu erstellen:

- Wählen Sie die Kategorie **Klassen** und klicken auf die Schaltfläche![](assets/en/Users/PlussNew.png).
- Wählen Sie am unteren Rand des Explorer-Fensters im Menü Optionen oder im Kontextmenü der Kategorie Klassen den Eintrag **Neue Klasse**. ![](assets/en/Concepts/newClass.png)
- Wählen Sie auf der Seite Home im Menü Optionen am unteren Rand den Eintrag **Neu > Klasse...**. 

#### Unterstützung von Code für Klassen

In verschiedenen 4D Entwicklerfenstern (Code-Editor, Compiler, Debugger, Runtime-Explorer) wird Code für Klassen im allgemeinen wie eine Projektmethode mit einigen spezifischen Merkmalen verwaltet:

- Im Code-Editor gilt folgendes: 
    - Es kann keine Klasse laufen
    - Eine Klassenfunktion ist ein Code Block 
    - **Goto definition** auf ein Object Member sucht nach Deklarationen der Class Function; Beispiel: "$o.f()" findet "Function f".
    - **Search references** auf Deklarationen von Class Function sucht nach der Funktion, die als Object Member verwendet wird; Beispiel: "Function f" findet "$o.f()".
- Im Runtime-Explorer und Debugger werden Class Functions mit dem Format \<ClassName> Constructor oder \.\ angezeigt.<ClassName> <FunctionName> 

### Eine Klasse löschen

Um eine vorhandene Klasse zu löschen, können Sie:

- Auf Ihrer Festplatte im Ordner "Classes" die Klassendatei .4dm löschen,
- Die Klasse im Explorer auswählen und am unteren Rand auf das Icon ![](assets/en/Users/MinussNew.png) klicken oder im Kontextmenü den Eintrag **In Papierkorb verschieben** wählen. 

## Schlüsselwörter für Klassen

In der Definition von Klassen lassen sich spezifische 4D Schlüsselwörter verwenden:

- `Function <Name>` zum Definieren von Member Methods der Objekte. 
- `Class constructor` zum Definieren der Eigenschaften der Objekte (z.B. prototype).
- `Class extends <ClassName>` zum Definieren der Vererbung.

### Function der Klasse

#### Syntax

```js
Function <name>
// code
```

Functions der Klasse sind Eigenschaften des Objekts prototye der Klasse des Eigentümers. Das sind Objekte der Klasse "Function".

In der Datei mit der Definition der Klasse verwenden Function Deklarationen das Schlüsselwort `Function` und den Namen von Function. Der Name muss mit den Regeln von ECMAScript konform sein.

Innerhalb einer Function wird `This` als Instanz des Objekts verwendet. Beispiel:

```4d
Function getFullName
  C_TEXT($0)
  $0:=This.firstName+" "+Uppercase(This.lastName)

Function getAge
  C_LONGINT($0)
  $0:=(Current date-This.birthdate)/365.25
```

Der Befehl `Current method name` gibt für eine Function zurück: "*\<ClassName>.\<FunctionName>*", z.B. "MyClass.myMethod".

Im Code der Anwendung werden Functions der Klasse als Member Methods der Instanz des Objekts aufgerufen und können Parameter empfangen, falls vorhanden. Folgende Syntaxarten werden unterstützt

- Verwendung des Operators `()` For example `myObject.methodName("hello")`.
- use of a "Function" class member methods 
    - `apply()`
    - `call()`

> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute:  
> - the compiler does not generate any error (which is different compared to regular methods), - an error is thrown by 4D only at runtime.

#### Example

```4d
// Class: Rectangle
Class Constructor
    C_LONGINT($1;$2)
    This.name:="Rectangle"
    This.height:=$1
    This.width:=$2

// Function definition
Function getArea
    C_LONGINT($0)
    $0:=(This.height)*(This.width)

```

```4d
// In a project method
C_OBJECT($o)  
C_REAL($area)

$o:=cs.Rectangle.new()  
$area:=$o.getArea(50;100) //5000
```

### Class constructor

#### Syntax

```js
// Class: MyClass
Class Constructor
// code
```

A class constructor function, which can accept parameters, can be used to define a user class.

In that case, when you call the `new()` class member method, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns: "*\<ClassName>.constructor*", for example "MyClass.constructor".

#### Example:

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor
C_TEXT($1)
This.name:=$1
```

```4d
// In a project method
// You can instantiate an object
C_OBJECT($o)
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```

### Class extends \<ClassName>

#### Syntax

```js
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D.Object which is extended by default for user classes)
- A user class cannot extend a user class from another database or component.
- A user class cannot extend itself.
- It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a"). 

Breaking such a rule is not detected by the code editor or the interpreter, only the compiler and `check syntax` will throw an error in this case.

An extended class can call the constructor of its parent class using the [`Super`](#super) command.

#### Example

This example creates a class called `Square` from a class called `Polygon`.

```4d
  //Class: Square
  //path: Classes/Square.4dm 

 Class extends Polygon

 Class constructor
 C_LONGINT($1)

  // It calls the parent class's constructor with lengths
  // provided for the Polygon's width and height
Super($1;$1)
  // In derived classes, Super must be called before you
  // can use 'This'
 This.name:="Square"

Function getArea
C_LONGINT($0)
$0:=This.height*This.width
```

### Super

#### Super {( param{;...;paramN} )} {-> Object}

| Parameter | Type   |    | Description                                    |
| --------- | ------ | -- | ---------------------------------------------- |
| param     | mixed  | -> | Parameter(s) to pass to the parent constructor |
| Result    | object | <- | Object's parent                                |


The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

- inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used. 
    - If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's 4D developer to make sure calls are valid. 
    - If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated. 
    - If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.

```4d
  // inside myClass constructor
 C_TEXT($1;$2)
 Super($1) //calls superclass constructor with a text param
 This.param:=$2 // use second param
```

- inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
 Super.doSomething(42) //calls "doSomething" function  
    //declared in superclasses
```

#### Example 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

```4d
  //Class: Rectangle

 Class constructor
 C_LONGINT($1;$2)
 This.name:="Rectangle"
 This.height:=$1
 This.width:=$2

 Function sayName
 ALERT("Hi, I am a "+This.name+".")

 Function getArea
 C_LONGINT($0)
 $0:=This.height*This.width
```

```4d
  //Class: Square

 Class extends Rectangle

 Class constructor
 C_LONGINT($1)

  // It calls the parent class's constructor with lengths
  // provided for the Rectangle's width and height
 Super($1;$1)

  // In derived classes, Super must be called before you
  // can use 'This'
 This.name:="Square"
```

#### Example 2

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:

```4d
  //Class: Rectangle

 Function nbSides
 C_TEXT($0)
 $0:="I have 4 sides"
```

You also created the `Square` class with a function calling the superclass function:

```4d
  //Class: Square

 Class extends Rectangle

 Function description
 C_TEXT($0)
 $0:=Super.nbSides()+" which are all equal"
```

Then you can write in a project method:

```4d
 C_OBJECT($square)
 C_TEXT($message)
 $square:=cs.Square.new()
 $message:=$square.description() //I have 4 sides which are all equal
```

### This

#### This -> Object

| Parameter | Type   |    | Description    |
| --------- | ------ | -- | -------------- |
| Result    | object | <- | Current object |


The `This` keyword returns a reference to the currently processed object. In 4D, it can be used in [different contexts](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).

In most cases, the value of `This` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

When a formula is called as a member method of an object, its `This` is set to the object the method is called on. For example:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

When a [class constructor](#class-constructor) function is used (with the `new()` keyword), its `This` is bound to the new object being constructed.

```4d
  //Class: ob

Class Constructor  
    // Create properties on This as
    // desired by assigning to them
    This.a:=42 
```

```4d
    // in a 4D method  
$o:=cs.ob.new()
$val:=$o.a //42
```

> When calling the superclass constructor in a constructor using the [Super](#super) keyword, keep in mind that `This` must not be called before the superclass constructor, otherwise an error is generated. See [this example](#example-1).

In any cases, `This` refers to the object the method was called on, as if the method were on the object.

```4d
  //Class: ob

 Function f
    $0:=This.a+This.b
```

Then you can write in a project method:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```

In this example, the object assigned to the variable $o doesn't have its own *f* property, it inherits it from its class. Since *f* is called as a method of $o, its `This` refers to $o.

## Class commands

Several commands of the 4D language allows you to handle class features.

### OB Class

#### OB Class ( object ) -> Object | Null

`OB Class` returns the class of the object passed in parameter.

### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.