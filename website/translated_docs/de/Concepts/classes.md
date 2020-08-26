---
id: classes
title: Klassen
---


## Overview

Die 4D Programmiersprache unterstützt das Konzept **Klassen**. In der objektorientierten Programmierung definieren Sie in einer Klasse das Verhalten eines Objekts mit zugewiesenen Eigenschaften und Funktionen.

Ist eine Benutzerklasse definiert, können Sie Objekte dieser Klasse als **Instanz** überall in Ihrem Code verwenden. Jedes Objekt ist eine Instanz seiner Klasse. Eine Klasse kann eine andere Klasse [erweitern](#class-extends-classname) und erbt dann von deren Funktionen.

> Das Klassenmodell in 4D ist ähnlich zu Klassen in JavaScript und basiert auf einer Kette von Prototypen.

Sie können z. B. eine Klasse `Person` mit folgender Definition erstellen:

```4d  
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname
```

In einer Methode erstellen Sie eine "Person":

```
var $o : cs.Person //object of Person class
$o:=cs.Person.new("John";"Doe")
// $o:{firstName: "John"; lastName: "Doe" }
```



## Klassen verwalten

### Definition einer Klasse

Eine Benutzerklasse in 4D wird über eine spezifische Datei Methode (.4dm) definiert, die im Ordner `/Project/Sources/Classes/` gespeichert wird. Der Name der Datei ist der Klassenname.

Beim Benennen von Klassen müssen Sie folgende Regeln beachten:

- Ein Klassenname muss mit den [ Schreibregeln für Eigenschaftsnamen](Concepts/dt_object.md#object-property-identifiers) konform sein.
- Es wird zwischen Groß- und Kleinschreibung unterschieden.
- Um Konflikte zu vermeiden, sollten Sie für eine Klasse und eine Tabelle in derselben Anwendung unterschiedliche Namen verwenden.

Um z.B. eine Klasse mit Namen "Polygon" zu definieren, müssen Sie folgende Datei anlegen:

- Project folder
    + Project
        * Sources
            - Klassen
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

- Wählen Sie die Kategorie **Klassen** und klicken auf die Schaltfläche![](assets/en/Users/PlussNew.png).
- Wählen Sie den Eintrag **Neue Klasse** am unteren Rand des Explorer-Fensters im Menü Optionen oder im Kontextmenü der Kategorie Klassen. ![](assets/en/Concepts/newClass.png)
- Wählen Sie auf der Seite Home im Menü Optionen am unteren Rand den Eintrag **Neu > Klasse...**.

#### Unterstützung von Code für Klassen

In verschiedenen 4D Entwicklerfenstern (Code-Editor, Compiler, Debugger, Runtime-Explorer) wird Code für Klassen im allgemeinen wie eine Projektmethode mit einigen spezifischen Merkmalen verwaltet:

- Im Code-Editor gilt folgendes:
    - Es kann keine Klasse laufen
    - Eine Klassenfunktion ist ein Code Block
    - **Goto definition** auf ein Objekt Member sucht nach Deklarationen der Class Function; Beispiel: "$o.f()" findet "Function f".
    - **Search references** auf Deklarationen von Class Function sucht nach der Funktion, die als Objekt Member verwendet wird; Beispiel: "Function f" findet "$o.f()".
- Im Runtime-Explorer und Debugger werden Class Functions mit dem Format \<ClassName> Constructor oder \.\ angezeigt.<ClassName> <FunctionName> format.

## Stores für Klassen

Klassen sind über Stores für Klassen verfügbar. Es gibt zwei Stores:

- `cs` Store für Benutzerklassen
- `4D` Store für vorgegebene Klassen


### cs

#### cs -> classStore

| Parameter  | Typ    |    | Beschreibung                                         |
| ---------- | ------ | -- | ---------------------------------------------------- |
| classStore | object | <- | Store der Benutzerklasse für Projekt oder Komponente |

Der Befehl `cs` gibt den Store der Benutzerklassen für das aktuelle Projekt oder die Komponente zurück. Er gibt alle Benutzerklassen zurück, die im geöffneten Projekt bzw. der Komponente [definiert](#class-definition) sind. Standardmäßig sind nur [ORDA Klassen](ORDA/ordaClasses.md) des Projekts verfügbar.

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

Der Befehl `4D` gibt den Store für in 4D vorgegebene Klassen zurück. Er bietet Zugriff auf spezifische APIs wie [CryptoKey](API/CryptoKey.md).

#### Beispiel

Einen neuen Schlüssel in der Klasse `CryptoKey` erstellen:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```



## Klassen in Ihrem Code verwenden


### Objekt Klasse

Ist in einem Projekt eine Klasse [definiert](#class-definition), wird sie in die 4D Programmiersprache Umgebung geladen. Die Klasse ist selbst ein Objekt vom Typ "Klasse". Ein Objekt Klasse hat folgende Eigenschaften und Methoden:

- String `name`
- Objekt `superclass` (optional, null, wenn nicht vorhanden)
- Methode `new()`, um Instanzen der Objekte in einer Klasse zu setzen.

Zusätzlich kann ein Objekt Klasse verweisen auf:
- Ein Objekt

constructor`</a> (optional),</li>
<li>Ein Objekt <code>prototype` mit Objektnamen [function](#function) (optional).</li> </ul> 
  
  Ein Objekt Klasse ist ein shared Object, d. h. es lässt sich aus verschiedenen 4D Prozessen gleichzeitig darauf zugreifen.
  
  



### Methode new()



#### cs.\<ClassName>.new() -> classObject

| Parameter   | Typ    |    | Beschreibung                         |
| ----------- | ------ | -- | ------------------------------------ |
| classObject | object | <- | Neues Objekt der \<ClassName> class |


Die Methode `new()` erstellt und gibt ein Objekt zurück, das eine neue Instanz der Klasse `<ClassName>` ist, in der es aufgerufen wird. Es ist automatisch in allen Klassen aus dem [Store](#class-stores) `cs` verfügbar. 

Wird sie in einer nicht-vorhandenen Klasse aufgerufen, wird ein Fehler zurückgegeben. 



#### Beispiel

Eine neue Instanz der Klasse Person anlegen:



```4d
var $person : cs.Person //for accurate autocompletion  
$person:=cs.Person.new() //create the new instance  
//$Person contains functions of the class
```


Beachten Sie, dass Sie auch Instanzen von leeren Objekten erstellen können. Legen Sie z.B. die Datei Klasse `Empty.4dm` wie folgt an: 



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




### Nach Eigenschaft suchen und Prototyp

Alle Objekte in 4D sind intern an ein Objekt Klasse gebunden. Findet 4D eine Eigenschaft nicht in einem Objekt, sucht es im Objekt Prototyp seiner Klasse; wird sie hier nicht gefunden, sucht 4D weiter im Objekt Prototyp seiner Superklasse, usw. bis es keine Superklasse mehr gibt.

Alle Objekte erben vom Objekt Klasse als ihrer obersten Klasse im Vererbungsbaum.



```4d
//Class: Polygon
Class constructor($width : Integer; $height : Integer)
    This.area:=$width*$height

    //var $poly : Object
    var $instance : Boolean
    $poly:=cs.Polygon.new(4;3)

    $instance:=OB Instance of($poly;cs.Polygon)
    // true
    $instance:=OB Instance of($poly;4D.Object)
    // true
```


Beim Aufzählen der Eigenschaften eines Objekts wird der Prototyp seiner Klasse nicht mitgezählt. Demzufolge geben die Anweisung `For each` und der Befehl `JSON Stringify` nicht Eigenschaften des Objekts prototype der Klasse zurück. Die Eigenschaft des Objekts prototype einer Klasse ist eine interne ausgeblendete Eigenschaft.





## Schlüsselwörter für Klassen

In der Definition von Klassen lassen sich spezifische 4D Schlüsselwörter verwenden:

- `Function <Name>` zum Definieren von Member Methods der Objekte.
- `Class constructor` zum Definieren der Eigenschaften der Objekte (z.B. prototype).
- `Class extends <ClassName>` zum Definieren der Vererbung.




### Function



#### Syntax



```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```


Class Functions sind Eigenschaften des Objekts prototype der Klasse des Eigentümers. Das sind Objekte der Klasse "Function". 

In der Datei mit der Definition der Klasse verwenden Function Deklarationen das Schlüsselwort `Function` und den Namen von Function. Der Function Name muss mit den [ Schreibregeln für Eigenschaftsnamen](Concepts/dt_object.md#object-property-identifiers) konform sein.



> **Tipp:** Namen, die mit einem Unterstrich (_) beginnen, werden beim automatischen Vervollständigen (autocompletion) im Code-Editor nicht berücksichtigt. Schreiben Sie z.B. `Function _myPrivateFunction` in `MyClass`, wird das nicht im Code-Editor vorgeschlagen, wenn Sie `"cs.MyClass` eingeben.  

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

Im Code der Anwendung werden Class Functions als Member Methods der Instanz des Objekts aufgerufen und können [Parameter](#class-function-parameters) empfangen, falls vorhanden. Folgende Syntaxarten werden unterstützt

- Verwendung des Operators `()` Zum Beispiel, `myObject.methodName("hello")`
- Verwendung einer Class Member Method "Function": 
      - `apply()`
    - `call()`



> **Thread-Safety Warning:** Ist eine Class Function nicht thread-safe und wird mit einer Methode mit dem Attribut "Can be run in preemptive process" aufgerufen:</br> - generiert der Compiler keinen Fehler (im Unterschied zu regulären Methoden),</br> - Gibt 4D nur im laufenden Betrieb einen Fehler aus.






#### Parameter

Function Parameter werden mit Name und Typ des Parameters, getrennt durch Strichpunkt, deklariert. Der Parametername muss mit den Schreibregeln für Eigenschaftsnamen [ konform sein](Concepts/dt_object.md#object-property-identifiers). Mehrere Parameter (und Typen) werden durch Strichpunkte (;) voneinander getrennt. 



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



> Mit der [klassischen 4D Syntax](parameters.md#sequential-parameters) für Parameter von Methoden lassen sich Parameter von Class Function deklarieren. Beide Syntaxarten lassen sich miteinander mischen. Zum Beispiel:
> 
> ```4d
> Function add($x : Integer)
>   var $2; $value : Integer
>   var $0 : Text
>   $value:=$x+$2
>   $0:=String($value)
> ```





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

In diesem Fall wird der Class Constructur beim Aufrufen der Class Member Method `new()` mit den Parametern aufgerufen, die optional in der Function `new()` übergeben wurden.

Für eine Class Constructor Function gibt der Befehl `Current method name` zurück: "*\<ClassName>.constructor*", z.B. "MyClass.constructor".





#### Beispiel:



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


Das Schlüsselwort `Class extends` dient in der Deklaration der Klasse zum Erstellen einer Benutzerklasse, die eine Unterklasse einer anderen Benutzerklasse ist. Die Unterklasse erbt alle Functions der übergeordneten Klasse.

Für Class Extension gelten folgende Regeln:

- Eine Benutzerklasse kann keine integrierte Klasse erweitern (außer 4D.Object, die für Benutzerklassen standardmäßig erweitert wird)
- Eine Benutzerklasse kann keine  Benutzerklasse aus einem anderen Projekt bzw. Komponente erweitern.
- Eine Benutzerklasse kann sich nicht selbst erweitern.
- Eine Benutzerklasse lässt sich nicht kreisförmig erweitern (z.B. "a" erweitert "b", das wiederum "a" erweitert).

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




### Super




#### Super {( param{;...;paramN} )} {-> Object}

| Parameter | Type   |    | Description                                    |
| --------- | ------ | -- | ---------------------------------------------- |
| param     | mixed  | -> | Parameter(s) to pass to the parent constructor |
| Result    | object | <- | Object's parent                                |


The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

- inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. In einem Konstruktor erscheint der Befehl `Super` alleine und muss vor dem Schlüsselwort `This` aufgerufen werden.
  
      - Werden nicht alle Class Constructors im Vererbungsbaum korrekt aufgerufen, wird der Fehler -10748 generiert. It's 4D developer to make sure calls are valid.
    - If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.

    - If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.



```4d
// inside myClass constructor
var $text1; $text2 : Text
Super($text1) //calls superclass constructor with a text param
This.param:=$text2 // use second param
```


- inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.



```4d
Super.doSomething(42) //calls "doSomething" function  
//declared in superclasses
```




#### Example 1

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




#### Example 2

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




### OB Class



#### OB Class ( object ) -> Object | Null

`OB Class` returns the class of the object passed in parameter. 




### OB Instance of



#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.
