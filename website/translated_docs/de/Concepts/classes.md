---
id: classes
title: Classes
---


## Überblick

Die 4D Programmiersprache unterstützt das Konzept **Klassen**. In der objektorientierten Programmierung definieren Sie in einer Klasse das Verhalten eines Objekts mit zugewiesenen Eigenschaften und Funktionen.

Ist eine Benutzerklasse definiert, können Sie Objekte dieser Klasse als **Instanz** überall in Ihrem Code verwenden. Jedes Objekt ist eine Instanz seiner Klasse. Eine Klasse kann eine andere Klasse [`erweitern`](#class-extends-classname) und erbt dann von deren [Function](#function).

> Das Klassenmodell in 4D ist ähnlich zu Klassen in JavaScript und basiert auf einer Kette von Prototypen.

Sie können z. B. eine Klasse `Person` mit folgender Definition erstellen:

```4d  
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function sayHello()->$welcome : Text
    $welcome:="Hello "+This.firstName+" "+This.lastName
```

In einer Methode erstellen Sie eine "Person":

```
var $person : cs.Person //object of Person class  
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe" }
$hello:=$person.sayHello() //"Hello John Doe"
```



## Klassen verwalten

### Eine Klasse definieren

Eine Benutzerklasse in 4D wird über eine spezifische Datei Methode (.4dm) definiert, die im Ordner `/Project/Sources/Classes/` gespeichert wird. Der Name der Datei ist der Klassenname.

Beim Benennen von Klassen müssen Sie folgende Regeln beachten:

- Der [Klassenname](identifiers.md#classes) muss mit den [Schreibregeln für Eigenschaftsnamen](identifiers.md#objekteigenschaften) konform sein.
- Es wird zwischen Groß- und Kleinschreibung unterschieden.
- Um Konflikte zu vermeiden, sollten Sie für eine Klasse und eine Tabelle in derselben Anwendung unterschiedliche Namen verwenden.

Um z.B. eine Klasse mit Namen "Polygon" zu definieren, müssen Sie folgende Datei anlegen:

- Project folder
    + Project
        * Sources
            - Classes
                + Polygon.4dm

### Eine Klasse löschen

Um eine vorhandene Klasse zu löschen, können Sie:

- Auf Ihrer Festplatte im Ordner "Classes" die Klassendatei .4dm löschen,
- Die Klasse im Explorer auswählen und am unteren Rand auf das Icon ![](assets/en/Users/MinussNew.png) klicken oder im Kontextmenü den Eintrag **In Papierkorb verschieben** wählen.


### 4D Oberfläche verwenden

Beim Erstellen auf der 4D Oberfläche wird eine Datei Klasse automatisch an der passenden Stelle gespeichert, entweder über das Menü **Datei/Ablage** oder über den Explorer.

#### Menü Datei/Ablage und Werkzeugleiste

Sie erstellen eine Datei Klasse für das Projekt über den Eintrag **Neu > Klasse** im Menü **Datei/Ablage** von 4D Developer oder über das **Icon Neu** in der Werkzeugleiste.

Sie können auch die Tastenkombination **Strg+Shift+Alt+k** verwenden.

#### Explorer

Im Explorer werden Klassen auf der Seite **Methoden** in der Kategorie **Klassen** gruppiert.

Um eine neue Klasse zu erstellen:

- Wählen Sie die Kategorie **Klassen** und klicken auf die Schaltfläche ![](assets/en/Users/PlussNew.png).
- Wählen Sie den Eintrag **Neue Klasse** am unteren Rand des Explorer-Fensters im Menü Optionen oder im Kontextmenü der Kategorie Klassen. ![](assets/en/Concepts/newClass.png)
- Wählen Sie auf der Seite Home im Menü Optionen am unteren Rand den Eintrag **Neu > Klasse...**.

#### Unterstützung von Code für Klassen

In verschiedenen 4D Entwicklerfenstern (Code-Editor, Compiler, Debugger, Runtime-Explorer) wird Code für Klassen im allgemeinen wie eine Projektmethode mit einigen spezifischen Merkmalen verwaltet:

- Im Code-Editor gilt folgendes:
    - Klassen können nicht direkt ausgeführt werden
    - Eine Klassenfunktion ist ein Code Block
    - **Goto definition** auf ein Objekt Member sucht nach Deklarationen der Class Function; Beispiel: "$o.f()" findet "Function f".
    - **Search references** auf Deklarationen von Class Function sucht nach der Funktion, die als Objekt Member verwendet wird; Beispiel: "Function f" findet "$o.f()".
- Im Runtime-Explorer und Debugger werden Class Functions mit dem \<ClassName> Constructor oder \<ClassName> <FunctionName> Format angezeigt.

## Stores für Klassen

Klassen sind über Stores für Klassen verfügbar. Es gibt zwei Stores:

- `cs` Store für Benutzerklassen
- `4D` Store für vorgegebene Klassen


### `cs`

#### cs -> classStore

| Parameter  | Typ    |    | Beschreibung                                         |
| ---------- | ------ | -- | ---------------------------------------------------- |
| classStore | object | <- | Store der Benutzerklasse für Projekt oder Komponente |

Der Befehl `cs` gibt den Store der Benutzerklassen für das aktuelle Projekt oder die Komponente zurück. Er gibt alle Benutzerklassen zurück, die im geöffneten Projekt bzw. der Komponente [definiert](#eine-klasse-definieren) sind. Standardmäßig sind nur [ORDA Klassen](ORDA/ordaClasses.md) des Projekts verfügbar.

#### Beispiel

Eine neue Instanz eines Objekts von `myClass` erstellen:

```4d
$instance:=cs.myClass.new()
```

### `4D`

#### 4D -> classStore

| Parameter  | Typ    |    | Beschreibung         |
| ---------- | ------ | -- | -------------------- |
| classStore | object | <- | Store für 4D Klassen |

Der Befehl `4D` gibt den Store für in 4D vorgegebene Klassen zurück. Er bietet Zugriff auf spezifische APIs wie [CryptoKey](API/CryptoKeyClass.md).

#### Beispiel

Einen neuen Schlüssel in der Klasse `CryptoKey` erstellen:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```




## Objekt Class

Ist in einem Projekt eine Klasse [definiert](#eine-klasse-definieren), wird sie in die 4D Programmiersprache Umgebung geladen. Eine Klasse ist selbst ein Objekt der Klasse ["class"](API/ClassClass.md). Ein Objekt class hat folgende Eigenschaften und Funktionen:

- String [`name`](API/ClassClass.md#name)
- Objekt [`superclass`](API/ClassClass.md#superclass) (null, wenn nicht vorhanden)
- Funktion [`new()`](API/ClassClass.md#new), um Instanzen der Objekte einer Klasse zu setzen.

Ein Objekt class kann zusätzlich auf ein Objekt [`constructor`](#class-constructor) verweisen (optional).

Ein Objekt class ist ein [shared object](shared.md), d. h. es lässt sich aus verschiedenen 4D Prozessen gleichzeitig darauf zugreifen.

### Vererbung

Erbt eine Klasse von einer anderen Klasse (z.B.in der Definition wird das Schlüsselwort [Class extends](classes.md#class-extends-classname) verwendet), ist die übergeordnete Klasse deren [`superclass`](API/ClassClass.md#superclass).

Findet 4D eine Funktion oder Eigenschaft nicht in einer Klasse, sucht es in deren [superclass</code>](API/ClassClass.md#superclass); werden sie hier nicht gefunden, geht die Suche weiter in der Superclass der Superclass, etc., bis es keine Superclass mehr gibt (alle Objekte erben von der Superclass "Object").


## Schlüsselwörter für Klassen

In der Definition von Klassen lassen sich spezifische 4D Schlüsselwörter verwenden:

- `Function <Name>` zum Definieren von Class Functions der Objekte.
- `Class constructor` zum Definieren der Eigenschaften der Objekte.
- `Class extends <ClassName>` zum Definieren der Vererbung.


### `Function`

#### Syntax

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

Class Functions sind spezifische Eigenschaften der Klasse. Es sind Objekte der Klasse [4D.Function](API/FunctionClass.md#about-4dfunction-objects).

In der Datei mit der Definition der Klasse verwenden Function Deklarationen das Schlüsselwort `Function` und den Namen von Function. Der Function Name muss mit den [ Schreibregeln für Eigenschaftsnamen](Concepts/identifiers.md#objekteigenschaften) konform sein.

> **Tipp:** Namen, die mit einem Unterstrich (_) beginnen, werden beim automatischen Vervollständigen (autocompletion) im 4D Code-Editor unterdrückt und nicht vorgeschlagen. Schreiben Sie z.B. `Function _myPrivateFunction` in `MyClass`, wird das nicht im Code-Editor vorgeschlagen, wenn Sie `"cs.MyClass` eingeben.

Direkt nach dem Namen von Function lassen sich passende [Parameter](#parameter) angeben mit zugewiesenem Namen und Datentyp, inkl. Rückgabeparameter (optional). Beispiel:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Innerhalb einer Class Function wird der Befehl `This` als Instanz des Objekts verwendet. Beispiel:

```4d  
Function setFullname($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function getFullname()->$fullname : Text
    $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

Der Befehl `Current method name` gibt für eine Class Function zurück: "*\<ClassName>.\<FunctionName>*", z.B. "MyClass.myMethod".

Im Code der Anwendung werden Class Functions als Member Methods der Instanz des Objekts aufgerufen und können [Parameter](#parameter) empfangen, falls vorhanden. Folgende Syntaxarten werden unterstützt

- Verwendung des Operators `()` Zum Beispiel, `myObject.methodName("hello")`
- Verwendung einer Class Member Method "4D.Function":
    - [`apply()`](API/FunctionClass.md#apply)
    - [`call()`](API/FunctionClass.md#call)

> **Thread-Safety Warnung:** Ist eine Class Function nicht thread-safe und wird mit einer Methode mit der Option "In preemptive Prozess starten" aufgerufen:</br> - generiert der Compiler keinen Fehler (im Unterschied zu regulären Methoden),</br> - Gibt 4D nur im laufenden Betrieb einen Fehler aus.




#### Parameter

Function Parameter werden mit Name und Typ des Parameters, getrennt durch Komma, deklariert. Der Parametername muss mit den [Schreibregeln für Eigenschaftsnamen](Concepts/identifiers.md#objekteigenschaften) konform sein. Mehrere Parameter (und Typen) werden durch Strichpunkte (;) voneinander getrennt.

```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```
> Ist kein Typ angegeben, wird der Parameter als `Variant` deklariert.

Den Rückgabeparameter (optional) deklarieren Sie mit einem Pfeil (->) und der entsprechenden Definition nach der Liste der Eingabeparameter. Zum Beispiel:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
```

Sie können den Rückgabeparameter auch nur durch Hinzufügen von `: type` deklarieren, dann ist er automatisch durch $0 verfügbar. Zum Beispiel:

```4d
Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
```
> Mit der [klassischen 4D Syntax](parameters.md#sequentielle-parameter) für Parameter von Methoden lassen sich Parameter von Class Function deklarieren. Beide Syntaxarten lassen sich miteinander mischen. For example:
> 
> ```4d
> Function add($x : Integer)
>   var $2; $value : Integer
>   var $0 : Text
>   $value:=$x+$2
>   $0:=String($value)
> ```



#### Example

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width

// Function definition
Function getArea()->$result : Integer
    $result:=(This.height)*(This.width)
```

```4d
// In a project method

var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
```



### `Class Constructor`

#### Syntax

```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
```

Eine Function Class Constructor, die [Parameter](#parameter) zulässt, lässt sich zum Definieren einer Benutzerklasse verwenden.

In that case, when you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns: "*\<ClassName>:constructor*", for example "MyClass:constructor".



#### Example:

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text)
    This.name:=$name
```

```4d
// In a project method
// You can instantiate an object
var $o : cs.MyClass
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```




### `Class extends <ClassName>`

#### Syntax

```4d
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D.Object which is extended by default for user classes)
- A user class cannot extend a user class from another project or component.
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

Class constructor ($side : Integer)

    // It calls the parent class's constructor with lengths
    // provided for the Polygon's width and height
    Super($side;$side)
    // In derived classes, Super must be called before you
    // can use 'This'
    This.name:="Square"

    Function getArea()
        C_LONGINT($0)
        $0:=This.height*This.width
```

### `Super`


#### Super {( param{;...;paramN} )} {-> Object}

| Parameter | Type   |    | Description                                    |
| --------- | ------ | -- | ---------------------------------------------- |
| param     | mixed  | -> | Parameter(s) to pass to the parent constructor |
| Result    | object | <- | Object's parent                                |

The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

- inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. In einem Constructor erscheint der Befehl `Super` alleine und muss vor dem Schlüsselwort `This` aufgerufen werden.
    - Werden nicht alle Class Constructors im Vererbungsbaum korrekt aufgerufen, wird der Fehler -10748 generiert. Der 4D Entwickler muss sicherstellen, dass Aufrufe gültig sind.
    - Wird `This` in einem Objekt aufgerufen, dessen Superklassen nicht aufgebaut wurden, wird Fehler -10743 generiert.

    - Wird `Super` in der Reichweite eines Objekts aufgerufen oder in einem Objekt, dessen Constructor der Superklasse bereits aufgerufen wurde, wird Fehler  -10746 generiert.

```4d
// inside myClass constructor
var $text1; $text2 : Text
Super($text1) //calls superclass constructor with a text param
This.param:=$text2 // use second param
```

- Innerhalb einer [Class Member Function](#function) bezeichnet  `Super` den Prototypen der Superclass und ermöglicht, eine Function der Superclass Hierarchie aufzurufen.

```4d
Super.doSomething(42) //calls "doSomething" function  
//declared in superclasses
```

#### Beispiel 1

Dieses Beispiel zeigt die Verwendung von `Super` in einem Class Constructor. Dieser Befehl sorgt dafür, dass Teile des Constructors, die für `Rectangle` und `Square` gleich sind, nicht dupliziert werden.

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width


Function sayName()
    ALERT("Hi, I am a "+This.name+".")

// Function definition
Function getArea()
    var $0 : Integer
    $0:=(This.height)*(This.width)
```

```4d
//Class: Square

Class extends Rectangle

Class constructor ($side : Integer)

    // It calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    Super($side;$side)
    // In derived classes, Super must be called before you
    // can use 'This'
    This.name:="Square"

Function getArea()
    C_LONGINT($0)
    $0:=This.height*This.width
```

#### Beispiel 2

Dieses Beispiel zeigt die Verwendung von `Super` in einer Class Member Method. You created the `Rectangle` class with a function:

```4d
//Class: Rectangle

Function nbSides()
    var $0 : Text
    $0:="I have 4 sides"
```

You also created the `Square` class with a function calling the superclass function:

```4d
//Class: Square

Class extends Rectangle

Function description()
    var $0 : Text
    $0:=Super.nbSides()+" which are all equal"
```

Then you can write in a project method:

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() //I have 4 sides which are all equal
```

### `This`

#### This -> Object

| Parameter | Type   |    | Description    |
| --------- | ------ | -- | -------------- |
| Result    | object | <- | Current object |

The `This` keyword returns a reference to the currently processed object. In 4D lässt es sich in [verschiedenen Kontexten](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html) verwenden.

In den meisten Fällen bestimmt der Wert von `This`, wie eine Function aufgerufen wird. Es lässt sich während der Ausführung nicht per Zuweisung setzen und kann bei jedem Aufrufen der Funktion anders sein.

Wird eine Formel als Member Method eines Objekts aufgerufen, wird das dazugehörige `This` auf das Objekt gesetzt, wo die Methode aufgerufen wird. Beispiel:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

Bei Verwendung einer Function [class constructor](#class-constructor) (mit der Function [`new()`](API/classClass.md#new)), wird ihr `This` an das neue Objekt in Konstruktion gebunden.

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

> Beachten Sie beim Aufrufen des Superclass Constructor in einem Constructor mit dem Schlüsselwort [Super](#super), dass  `This` nicht vor dem Superclass Constructor aufgerufen wird, sonst wird ein Fehler generiert. Siehe [dieses Beispiel](#beispiel-1-1).


In allen Fällen bezieht sich `This` auf das Objekt, wo die Methode aufgerufen wurde, als ob sie im Objekt wäre.

```4d
//Class: ob

Function f()
    $0:=This.a+This.b
```

Dann können Sie in einer Projektmethode schreiben:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```
In diesem Beispiel hat das der Variable $o zugewiesene Objekt keine eigene Eigenschaft *f*, sondern erbt sie von seiner Klasse. Da *f* als eine Methode von $o, aufgerufen wird, bezieht sich das dazugehörige `This` auf $o.


## Befehle für Klassen

Einige Befehle der 4D Programmiersprache eignen sich zum Verwalten von Features für Klassen.


### OB Class

#### OB Class ( object ) -> Object | Null

`OB Class` gibt die Klasse des Objekts zurück, das im Parameter übergeben ist.


### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` gibt `wahr` zurück, wenn `object` zu `class` gehört oder zu einer seiner geerbten Klassen, sonst `false`.
