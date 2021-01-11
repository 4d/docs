---
id: classes
title: Klassen
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

- A [class name](identifiers.md#classes) must be compliant with [property naming rules](identifiers.md#object-properties).
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

In the various 4D windows (code editor, compiler, debugger, runtime explorer), class code is basically handled like a project method with some specificities:

- Im Code-Editor gilt folgendes:
    - Klassen können nicht direkt ausgeführt werden
    - Eine Klassenfunktion ist ein Code Block
    - **Goto definition** auf ein Objekt Member sucht nach Deklarationen der Class Function; Beispiel: "$o.f()" findet "Function f".
    - **Search references** auf Deklarationen von Class Function sucht nach der Funktion, die als Objekt Member verwendet wird; Beispiel: "Function f" findet "$o.f()".
- Im Runtime-Explorer und Debugger werden Class Functions mit dem <ClassName> Constructor<ClassName> Constructor oder <ClassName>.<FunctionName><ClassName> <FunctionName> Format angezeigt.

## Stores für Klassen

Klassen sind über Stores für Klassen verfügbar. Es gibt zwei Stores:

- `cs` Store für Benutzerklassen
- `4D` Store für vorgegebene Klassen


### cs

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

### 4D

#### 4D -> classStore

| Parameter  | Typ    |    | Beschreibung         |
| ---------- | ------ | -- | -------------------- |
| classStore | object | <- | Store für 4D Klassen |

Der Befehl `4D` gibt den Store für in 4D vorgegebene Klassen zurück. Er bietet Zugriff auf spezifische APIs wie [CryptoKey](API/cryptoKeyClass.md).

#### Beispiel

Einen neuen Schlüssel in der Klasse `CryptoKey` erstellen:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```




## Objekt Class

Ist in einem Projekt eine Klasse [definiert](#eine-klasse-definieren), wird sie in die 4D Programmiersprache Umgebung geladen. Eine Klasse ist selbst ein Objekt der Klasse ["class"](API/classClass.md). Ein Objekt class hat folgende Eigenschaften und Funktionen:

- String [`name`](API/classClass.md#name)
- Objekt [`superclass`](API/classClass.md#superclass) (optional, null, wenn nicht vorhanden)
- Funktion [`new()`](API/classClass.md#new), um Instanzen der Objekte einer Klasse zu setzen.

In addition, a class object can reference a [`constructor`](#class-constructor) object (optional).

Ein Objekt class ist ein [shared object](shared.md), d. h. es lässt sich aus verschiedenen 4D Prozessen gleichzeitig darauf zugreifen.

### Inheritance

If a class inherits from another class (i.e. the [Class extends](classes.md#class-extends-classname) keyword is used in its definition), the parent class is its [`superclass`](API/classClass.md#superclass).

When 4D does not find a function or a property in a class, it searches it in its [`superclass`](API/classClass.md#superclass); if not found, 4D continues searching in the superclass of the superclass, and so on until there is no more superclass (all objects inherit from the "Object" superclass).


## Schlüsselwörter für Klassen

In der Definition von Klassen lassen sich spezifische 4D Schlüsselwörter verwenden:

- `Function <Name>` to define class functions of the objects.
- `Class constructor` to define the properties of the objects.
- `Class extends <ClassName>` zum Definieren der Vererbung.


### Function

#### Syntax

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

Class functions are specific properties of the class. They are objects of the [4D.Function](API/formulaClass.md#about-4dfunction-objects) class.

In der Datei mit der Definition der Klasse verwenden Function Deklarationen das Schlüsselwort `Function` und den Namen von Function. The function name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

> **Tipp:** Namen, die mit einem Unterstrich (_) beginnen, werden beim automatischen Vervollständigen (autocompletion) im 4D Code-Editor unterdrückt und nicht vorgeschlagen. Schreiben Sie z.B. `Function _myPrivateFunction` in `MyClass`, wird das nicht im Code-Editor vorgeschlagen, wenn Sie `"cs.MyClass` eingeben.

Direkt nach dem Namen von Function lassen sich passende [Parameter](#parameters) angeben mit zugewiesenem Namen und Datentyp, inkl. Rückgabeparameter (optional). Beispiel:

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

- Verwendung des Operators `()` For example, `myObject.methodName("hello")`
- use of a "4D.Function" class member method:
    - [`apply()`](API/formulaClass.md#apply)
    - [`call()`](API/formulaClass.md#call)

> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute: - the compiler does not generate any error (which is different compared to regular methods), - an error is thrown by 4D only at runtime.




#### Parameters

Function parameters are declared using the parameter name and the parameter type, separated by a colon. The parameter name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties). Mehrere Parameter (und Typen) werden durch Strichpunkte (;) voneinander getrennt.

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
> Mit der [klassischen 4D Syntax](parameters.md#sequentielle-parameter) für Parameter von Methoden lassen sich Parameter von Class Function deklarieren. Beide Syntaxarten lassen sich miteinander mischen. Zum Beispiel:
> 
> ```4d
Function add($x : Integer)
  var $2; $value : Integer
  var $0 : Text
  $value:=$x+$2
  $0:=String($value)
```



#### Beispiel

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

$rect:=cs.Rectangle.new()  
$area:=$rect.getArea(50;100) //5000
```



### Class Constructor

#### Syntax

```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
```

Eine Function Class Constructor, die [Parameter](#parameters) zulässt, lässt sich zum Definieren einer Benutzerklasse verwenden.

In that case, when you call the [`new()`](API/classClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns: "*\<ClassName>.constructor*", for example "MyClass.constructor".



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




### Class extends \<ClassName>

#### Syntax

```4d
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. Die Unterklasse erbt alle Functions der übergeordneten Klasse.

Für Class Extension gelten folgende Regeln:

- Eine Benutzerklasse kann keine vorgegebene Klasse erweitern (außer 4D.Object, die für Benutzerklassen standardmäßig erweitert wird)
- Eine Benutzerklasse kann keine  Benutzerklasse aus einem anderen Projekt bzw. Komponente erweitern.
- Eine Benutzerklasse kann sich nicht selbst erweitern.
- Eine Benutzerklasse lässt sich nicht kreisförmig erweitern (z.B. "a" erweitert "b", das wiederum "a" erweitert).

Ein Verstoß gegen eine dieser Regeln wird weder vom Code-Editor noch vom Interpreter erkannt, in diesem Fall lösen nur der Compiler und `Syntaxprüfung` einen Fehler aus.

Eine erweiterte Klasse kann den Constructor seiner übergeordneten Klasse über den Befehl [`Super`](#super) aufrufen.

#### Beispiel

Dieses Beispiel erstellt eine Klasse mit Namen `Square` aus einer Klasse mit Namen `Polygon`.

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

### Super


#### Super {( param{;...;paramN} )} {-> Object}

| Parameter | Typ    |    | Beschreibung                                 |
| --------- | ------ | -- | -------------------------------------------- |
| param     | mixed  | -> | Parameter für den übergeordneten Constructor |
| Ergebnis  | object | <- | Überordnung des Objekts                      |

Mit dem Schlüsselwort `Super` lassen sich Aufrufe zur   `Superklasse` machen, z.B. zur übergeordneten Klasse.

`Super` dient für zwei unterschiedliche Zwecke:

- Innerhalb des [Constructor Code](#class-constructor) ist `Super` ein Befehl zum Aufrufen des Constructor der Superklasse. In einem Constructor erscheint der Befehl `Super` alleine und muss vor dem Schlüsselwort `This` aufgerufen werden.
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

Dieses Beispiel zeigt die Verwendung von `Super` in einer Class Member Method. Sie haben die Klasse `Rectangle` mit einer Function angelegt:

```4d
//Class: Rectangle

Function nbSides()
    var $0 : Text
    $0:="I have 4 sides"
```

Und die Klasse `Square` mit einer Function, die die Superclass Function aufruft:

```4d
//Class: Square

Class extends Rectangle

Function description()
    var $0 : Text
    $0:=Super.nbSides()+" which are all equal"
```

Dann können Sie in einer Projektmethode schreiben:

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() //I have 4 sides which are all equal
```

### This

#### This -> Object

| Parameter | Typ    |    | Beschreibung     |
| --------- | ------ | -- | ---------------- |
| Ergebnis  | object | <- | Aktuelles Objekt |

Das Schlüsselwort `This` gibt eine Referenz auf das gerade bearbeitete Objekt zurück. In 4D lässt es sich in [verschiedenen Kontexten](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html) verwenden.

In den meisten Fällen bestimmt der Wert von `This`, wie eine Function aufgerufen wird. Es lässt sich während der Ausführung nicht per Zuweisung setzen und kann bei jedem Aufrufen der Funktion anders sein.

Wird eine Formel als Member Method eines Objekts aufgerufen, wird das dazugehörige `This` auf das Objekt gesetzt, wo die Methode aufgerufen wird. For example:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

When a [class constructor](#class-constructor) function is used (with the [`new()`](API/classClass.md#new) function), its `This` is bound to the new object being constructed.

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

Function f()
    $0:=This.a+This.b
```

Then you can write in a project method:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```
In this example, the object assigned to the variable $o doesn't have its own *f* property, it inherits it from its class. Da *f* als eine Methode von $o, aufgerufen wird, bezieht sich das dazugehörige `This` auf $o.


## Befehle für Klassen

Einige Befehle der 4D Programmiersprache eignen sich zum Verwalten von Features für Klassen.


### OB Class

#### OB Class ( object ) -> Object | Null

`OB Class` gibt die Klasse des Objekts zurück, das im Parameter übergeben ist.


### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` gibt `wahr` zurück, wenn `object` zu `class` gehört oder zu einer seiner geerbten Klassen, sonst `false`.
