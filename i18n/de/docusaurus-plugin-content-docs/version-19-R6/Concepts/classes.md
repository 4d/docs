---
id: Klassen
title: Klassen
---


## Überblick

Die 4D Programmiersprache unterstützt das Konzept **Klassen**. In der objektorientierten Programmierung definieren Sie in einer Klasse das Verhalten eines Objekts mit zugewiesenen Eigenschaften und Funktionen.

Ist eine Benutzerklasse definiert, können Sie Objekte dieser Klasse als **Instanz** überall in Ihrem Code verwenden. Jedes Objekt ist eine Instanz seiner Klasse. A class can [`extend`](#class-extends-classname) another class, and then inherits from its [functions](#function) and properties ([static](#class-constructor) and [computed](#function-get-and-function-set)).

> Das Klassenmodell in 4D ist ähnlich zu Klassen in JavaScript und basiert auf einer Kette von Prototypen.

Sie können z. B. eine Klasse `Person` mit folgender Definition erstellen:

```4d  
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : text
 $fullName:=This.firstName+" "+This.lastName

Function sayHello()->$welcome : Text
 $welcome:="Hello "+This.fullName
```

In einer Methode erstellen Sie eine "Person":

```
var $person : cs.Person //object of Person class  
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe"; fullName: "John Doe"}
$hello:=$person.sayHello() //"Hello John Doe"
```

## Klassen verwalten

### Eine Klasse definieren

Eine Benutzerklasse in 4D wird über eine spezifische Datei Methode (.4dm) definiert, die im Ordner `/Project/Sources/Classes/` gespeichert wird. Der Name der Datei ist der Klassenname.

Beim Benennen von Klassen müssen Sie folgende Regeln beachten:

- Der [Klassenname](identifiers.md#classes) muss mit den [Schreibregeln für Eigenschaftsnamen](identifiers.md#objekteigenschaften) konform sein.
- .
- Um Konflikte zu vermeiden, sollten Sie für eine Klasse und eine Tabelle in derselben Anwendung unterschiedliche Namen verwenden.

Um z.B. eine Klasse mit Namen "Polygon" zu definieren, müssen Sie folgende Datei anlegen:

Project folder Project Sources Classes Polygon.4dm

### Eine Klasse löschen

Um eine vorhandene Klasse zu löschen, können Sie:

- Auf Ihrer Festplatte im Ordner "Classes" die Klassendatei .4dm löschen,
- Die Klasse im Explorer auswählen und am unteren Rand auf das Icon ![](../assets/en/Users/MinussNew.png) klicken oder im Kontextmenü den Eintrag **In Papierkorb verschieben** wählen.

### Using the 4D interface

Beim Erstellen auf der 4D Oberfläche wird eine Datei Klasse automatisch an der passenden Stelle gespeichert, entweder über das Menü **Datei/Ablage** oder über den Explorer.

#### Menü Datei/Ablage und Werkzeugleiste

Sie erstellen eine Datei Klasse für das Projekt über den Eintrag **Neu > Klasse** im Menü **Datei/Ablage** von 4D Developer oder über das **Icon Neu** in der Werkzeugleiste.

Sie können auch die Tastenkombination **Strg+Shift+Alt+k** verwenden.

#### Explorer

Im Explorer werden Klassen auf der Seite **Methoden** in der Kategorie **Klassen** gruppiert.

Um eine neue Klasse zu erstellen:

- Wählen Sie die Kategorie **Klassen** und klicken auf die Schaltfläche ![](../assets/en/Users/PlussNew.png).
- Wählen Sie den Eintrag **Neue Klasse** am unteren Rand des Explorer-Fensters im Menü Optionen oder im Kontextmenü der Kategorie Klassen. ![](../assets/en/Concepts/newClass.png)
- Wählen Sie auf der Seite Home im Menü Optionen am unteren Rand den Eintrag **Neu > Klasse...**.

#### Unterstützung von Code für Klassen

In verschiedenen 4D Entwicklerfenstern (Code-Editor, Compiler, Debugger, Runtime-Explorer) wird Code für Klassen im allgemeinen wie eine Projektmethode mit einigen spezifischen Merkmalen verwaltet:

- Im Code-Editor gilt folgendes:
  - Klassen können nicht direkt ausgeführt werden
  - Eine Klassenfunktion ist ein Code Block
  - **Goto definition** auf ein Objekt Member sucht nach Deklarationen der Class Function; Beispiel: "$o.f()" findet "Function f".
  - **Search references** auf Deklarationen von Class Function sucht nach der Funktion, die als Objekt Member verwendet wird; Beispiel: "Function f" findet "$o.f()".
- In the Runtime explorer and Debugger, class functions are displayed with the `\&#060;ClassName&#062;` constructor or `\&#060;ClassName&#062;.\&#060;FunctionName&#062;` format.

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

Ein Objekt Klasse ist ein [shared Object](shared.md), d. h. es lässt sich aus verschiedenen 4D Prozessen gleichzeitig darauf zugreifen.

### Vererbung

Erbt eine Klasse von einer anderen Klasse (z.B.in der Definition wird das Schlüsselwort [Class extends](classes.md#class-extends-classname) verwendet), ist die übergeordnete Klasse deren [`superclass`](API/ClassClass.md#superclass).

Findet 4D eine Funktion oder Eigenschaft nicht in einer Klasse, sucht es in deren [superclass</code>](API/ClassClass.md#superclass); werden sie hier nicht gefunden, geht die Suche weiter in der Superclass der Superclass, etc., bis es keine Superclass mehr gibt (alle Objekte erben von der Superclass "Object").

## Schlüsselwörter für Klassen

In der Definition von Klassen lassen sich spezifische 4D Schlüsselwörter verwenden:

- `Function <Name>` zum Definieren von Class Functions der Objekte.
- `Function get <Name>` and `Function set <Name>` to define computed properties of the objects.
- `Class constructor` to define static properties of the objects.
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

For a class function, the `Current method name` command returns: `<ClassName>.<FunctionName>`, for example "MyClass.myFunction".

In the application code, class functions are called as member methods of the object instance and can receive [parameters](#class-function-parameters) if any. The following syntaxes are supported:

- use of the `()` operator. For example, `myObject.methodName("hello")`
- use of a "4D.Function" class member method:
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute:
> 
> - the compiler does not generate any error (which is different compared to regular methods),
> - an error is thrown by 4D only at runtime.

#### Parameter

Function parameters are declared using the parameter name and the parameter type, separated by a colon. Der Parametername muss mit den [Schreibregeln für Eigenschaftsnamen](Concepts/identifiers.md#objekteigenschaften) konform sein. Mehrere Parameter (und Typen) werden durch Strichpunkte (;) voneinander getrennt.

```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```
> If the type is not stated, the parameter will be defined as `Variant`.

The [classic 4D syntax](parameters.md#sequential-parameters) for method parameters can be used to declare class function parameters. Beide Syntaxarten lassen sich miteinander mischen. Beispiel:

```4d
Function add($x : Integer)
 var $2; $value : Integer
 var $0 : Text
 $value:=$x+$2
 $0:=String($value)
```

#### Return value

You declare the return parameter (optional) by adding an arrow (`->`) and the return parameter definition after the input parameter(s) list, or a colon (`:`) and the return parameter type only. Beispiel:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
 $result:=$x+$y
```

You can also declare the return parameter by adding only `: type` and use the [`return expression`](parameters.md#return-expression) (it will also end the function execution). Beispiel:

```4d
Function add($x : Variant; $y : Integer): Integer
 // some code
 return $x+$y
```

#### Beispiel 1

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

#### Beispiel 2

This example uses the [`return expression`](parameters.md#return-expression):

```4d
Function getRectArea($width : Integer; $height : Integer) : Integer
 If ($width > 0 && $height > 0)
  return $width * $height
 Else
  return 0
 End if
```

### `Function get` and `Function set`

#### Syntax

```4d
Function get <name>()->$result : type
// code
```

```4d
Function set <name>($parameterName : type)
// code
```

`Function get` and `Function set` are accessors defining **computed properties** in the class. A computed property is a named property with a data type that masks a calculation. When a computed property value is accessed, 4D substitutes the corresponding accessor's code:

- when the property is read, the `Function get` is executed,
- when the property is written, the `Function set` is executed.

If the property is not accessed, the code never executes.

Computed properties are designed to handle data that do not necessary need to be kept in memory. They are usually based upon persistent properties. For example, if a class object contains as persistent property the *gross price* and the *VAT rate*, the *net price* could be handled by a computed property.

In the class definition file, computed property declarations use the `Function get` (the *getter*) and `Function set` (the *setter*) keywords, followed by the name of the property.

In the class definition file, computed property declarations use the `Function get` (the *getter*) and `Function set` (the *setter*) keywords, followed by the name of the property.

In the class definition file, computed property declarations use the `Function get` (the *getter*) and `Function set` (the *setter*) keywords, followed by the name of the property. The name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

`Function get` returns a value of the property type and `Function set` takes a parameter of the property type. Both arguments must comply with standard [function parameters](#parameters).

When both functions are defined, the computed property is **read-write**. If only a `Function get` is defined, the computed property is **read-only**. In this case, an error is returned if the code tries to modify the property. If only a `Function set` is defined, 4D returns *undefined* when the property is read.

The type of the computed property is defined by the `$return` type declaration of the *getter*.

The type of the computed property is defined by the `$return` type declaration of the *getter*.

The type of the computed property is defined by the `$return` type declaration of the *getter*. It can be of any [valid property type](dt_object.md).

> Assigning *undefined* to an object property clears its value while preserving its type. In order to do that, the `Function get` is first called to retrieve the value type, then the `Function set` is called with an empty value of that type.

#### Beispiel 1

```4d  
//Class: Person.4dm

Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : Text
 $fullName:=This.firstName+" "+This.lastName

Function set fullName( $fullName : Text )
 $p:=Position(" "; $fullName)
 This.firstName:=Substring($fullName; 1; $p-1)
 This.lastName:=Substring($fullName; $p+1)
```

```4d
//in a project method
$fullName:=$person.fullName // Function get fullName() is called
$person.fullName:="John Smith" // Function set fullName() is called
```

#### Beispiel 2

```4d
Function get fullAddress()->$result : Object

 $result:=New object

 $result.fullName:=This.fullName
 $result.address:=This.address
 $result.zipCode:=This.zipCode
 $result.city:=This.city
 $result.state:=This.state
 $result.country:=This.country 
```

### `Class Constructor`

#### Syntax

```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
// code
```

A class constructor function, which can accept [parameters](#parameters), can be used to define a user class.

In that case, when you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns: `<ClassName>:constructor`, for example "MyClass:constructor".

#### Beispiel

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

#### Beispiel

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

#### Syntax

```4d
Super {( param{;...;paramN} )} {-> Object}
```

| Parameter | Typ    |    | Beschreibung                                   |
| --------- | ------ | -- | ---------------------------------------------- |
| param     | mixed  | -> | Parameter(s) to pass to the parent constructor |
| Ergebnis  | object | <- | Object's parent                                |

The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

1. Inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. In einem Constructor erscheint der Befehl `Super` alleine und muss vor dem Schlüsselwort `This` aufgerufen werden.

- If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's 4D developer to make sure calls are valid.
- If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.
- If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.

```4d
// inside myClass constructor
var $text1; $text2 : Text
Super($text1) //calls superclass constructor with a text param
This.param:=$text2 // use second param
```

2. Inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) //calls "doSomething" function  
//declared in superclasses
```

#### Beispiel 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

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

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:

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

#### Syntax

```4d
This -> Object
```

| Parameter | Typ    |    | Beschreibung   |
| --------- | ------ | -- | -------------- |
| Ergebnis  | object | <- | Current object |

The `This` keyword returns a reference to the currently processed object. In 4D, it can be used in [different contexts](https://doc.4d.com/4Dv19/help/command/page1470.html).

In most cases, the value of `This` is determined by how a function is called. Es lässt sich während der Ausführung nicht per Zuweisung setzen und kann bei jedem Aufrufen der Funktion anders sein.

When a formula is called as a member method of an object, its `This` is set to the object the method is called on. Beispiel:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

When a [class constructor](#class-constructor) function is used (with the [`new()`](API/ClassClass.md#new) function), its `This` is bound to the new object being constructed.

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

In this example, the object assigned to the variable $o doesn't have its own *f* property, it inherits it from its class. Since *f* is called as a method of $o, its `This` refers to $o.

## Class commands

Several commands of the 4D language allows you to handle class features.

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` returns the class of the object passed in parameter.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.
