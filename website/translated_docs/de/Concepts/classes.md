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

```
C_OBJECT($o)
$o:=cs.Person.new("John";"Doe")  
// $o: {firstName: "John";lastName: "Doe" }
```

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


### Eine Klasse löschen

Um eine vorhandene Klasse zu löschen, können Sie:

- Auf Ihrer Festplatte im Ordner "Classes" die Klassendatei .4dm löschen,
- Die Klasse im Explorer auswählen und am unteren Rand auf das Icon ![](assets/en/Users/MinussNew.png) klicken oder im Kontextmenü den Eintrag **In Papierkorb verschieben** wählen.


## Schlüsselwörter für Klassen

In der Definition von Klassen lassen sich spezifische 4D Schlüsselwörter verwenden:

- `Function <Name>` zum Definieren von Member Methods der Objekte.
- `Class constructor` zum Definieren der Eigenschaften der Objekte (z.B. prototype).
- `Class extends <ClassName>` zum Definieren der Vererbung.


### Class Function

#### Syntax

```js
Function <name>
// code
```

Class Functions sind Eigenschaften des Objekts prototype der Klasse des Eigentümers. Das sind Objekte der Klasse "Function".

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

- Verwendung des Operators `()` Zum Beispiel verwendet  `myObject.methodName("hello")`.
- eine der Class member Methods "Function"
    - `apply()`
    - `call()`


> **Thread-safety Warnung:** Ist eine Class Function nicht thread-safe und wird von einer Methode mit der Option "Als preemptive Prozess starten" aufgerufen:  
> - generiert der Compiler keinen Fehler (im Unterschied zu regulären Methoden), - gibt 4D einen Fehler nur im laufenden Betrieb aus.


#### Beispiel

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


### Class Constructor

#### Syntax

```js
// Class: MyClass
Class Constructor
// code
```

Mit einer Function Class Constructor, die Parameter zulässt, lässt sich eine Benutzerklasse definieren.

Dann wird beim Aufrufen der Member Method `new()` der Klasse der Class Constructor mit den optional in `new()` übergebenen Parametern aufgerufen.

Für eine Function Class Constructor gibt der Befehl `Current method name` zurück: "*\<ClassName>.constructor*", zum Beispiel "MyClass.constructor".


#### Beispiel:

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

Das Schlüsselwort  `Class extends` dient beim Deklarieren der Klasse zum Erstellen einer Benutzerklasse, die ein Kind einer anderen Benutzerklasse ist. Die Unterklasse erbt alle Funktionen von der übergeordneten Klasse.

Für Erweiterungen einer Klasse gelten folgende Regeln:

- Eine Benutzerklasse kann keine vorgegebene Klasse erweitern (außer 4D.Object, die standardmäßig für Benutzerklassen erweitert wird.)
- Eine Benutzerklasse kann keine Benutzerklasse aus einem anderen Projekt bzw. einer Komponente erweitern. .
- Eine Benutzerklasse kann sich nicht selbst erweitern.
- Klassen lassen sich nicht kreisförmig erweitern (z.B. "a" erweitert "b", das wieder "a" erweitert).

Ein Verstoß gegen eine dieser Regeln wird weder vom Code-Editor noch vom Interpreter erkannt, in diesem Fall lösen nur der Compiler und `Syntaxprüfung` einen Fehler aus.

Eine erweiterte Klasse kann den Constructor seiner übergeordneten Klasse über den Befehl [`Super`](#super) aufrufen.

#### Beispiel

Dieses Beispiel erstellt eine Klasse mit Namen `Square` aus einer Klasse mit Namen `Polygon`.

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

| Parameter | Typ    |    | Beschreibung                                 |
| --------- | ------ | -- | -------------------------------------------- |
| param     | mixed  | -> | Parameter für den übergeordneten Constructor |
| Ergebnis  | object | <- | Überordnung des Objekts                      |

Mit dem Schlüsselwort  `Super` lassen sich Aufrufe zur  `superclass`, z.B. die übergeordnete Klasse.

`Super` dient für zwei unterschiedliche Zwecke:

- innerhalb des [Constructor Code](#class-constructor) ist `Super` ein Befehl zum Aufrufen des Constructor der Superklasse. In einem Constructor erscheint der Befehl `Super` alleine und muss vor dem Schlüsselwort `This` aufgerufen werden.
    - Werden nicht alle Class Constructors im Vererbungsbaum korrekt aufgerufen, wird der Fehler -10748 generiert. Der 4D Entwickler muss sicherstellen, dass Aufrufe gültig sind.
    - Wird `This` in einem Objekt aufgerufen, dessen Superklassen nicht aufgebaut wurden, wird Fehler -10743 generiert.
    - Wird `Super` in der Reichweite eines Objekts aufgerufen oder in einem Objekt, dessen Constructor der Superklasse bereits aufgerufen wurde, wird Fehler -10746 generiert.

```4d
// inside myClass constructor
 C_TEXT($1;$2)
 Super($1) //calls superclass constructor with a text param
 This.param:=$2 // use second param
```

- Innerhalb einer [Class Member Function](#class-function) bezeichnet `Super` den Prototyp der Superklasse und erlaubt, eine Function in der Hierarchie der Superklasse aufzurufen.

```4d
 Super.doSomething(42) //calls "doSomething" function  
    //declared in superclasses
```

#### Beispiel 1

Dieses Beispiel zeigt die Verwendung von `Super` in einem Class Constructor. Dieser Befehl sorgt dafür, dass Teile des Constructors, die für `Rectangle` und `Square` gleich sind, nicht dupliziert werden.

```4d
// Class: Rectangle

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

#### Beispiel 2

Dieses Beispiel zeigt die Verwendung von  `Super` in einer Class Member Method. Sie haben die Klasse `Rectangle` mit einer Function:

```4d
  //Class: Rectangle

 Function nbSides
 C_TEXT($0)
 $0:="I have 4 sides"
```

Und die Klasse  `Square` mit einer Function, die die Superclass Function aufruft::

```4d
  //Class: Square

 Class extends Rectangle

 Function description
 C_TEXT($0)
 $0:=Super.nbSides()+" which are all equal"
```

Dann können Sie in einer Projektmethode schreiben:

```4d
 C_OBJECT($square)
 C_TEXT($message)
 $square:=cs.Square.new()
 $message:=$square.description() //I have 4 sides which are all equal
```

### This

#### This -> Object

| Parameter | Typ    |    | Beschreibung     |
| --------- | ------ | -- | ---------------- |
| Ergebnis  | object | <- | Aktuelles Objekt |

Das Schlüsselwort  `This` gibt eine Referenz auf das zu bearbeitende Objekt zurück. In 4D lässt es sich in [verschiedenen Kontexten](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html) verwenden.

In den meisten Fällen bestimmt der Wert von `This`, wie eine Function aufgerufen wird. Es lässt sich während der Ausführung nicht per Zuweisung setzen und kann bei jedem Aufrufen der Funktion anders sein.

Wird eine Formel als Member Method eines Objekts aufgerufen, wird das dazugehörige `This` auf das Objekt gesetzt, wo die Methode aufgerufen wird. Zum Beispiel:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

Mit der Function [Class Constructor](#class-constructor) mit dem Schlüsselwort `new()` wird das dazugehörige `This` an das neue Objekt in Konstruktion gebunden.

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

> Rufen Sie den Superclass Constructor in einen Constructor mit [Super](#super) auf, darf `This` nicht vor dem Superclass Constructor aufgerufen werden, sonst wird ein Fehler generiert. Siehe [dieses Beispiel](#example-1).


In jedem Fall bezieht sich `This` auf das Objekt, in dem die Methode aufgerufen wurde, als ob die Methode im Objekt wäre.

```4d
  //Class: ob

 Function f
    $0:=This.a+This.b
```

Dann können Sie in einer Projektmethode schreiben:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```
In diesem Beispiel hat das der Variablen $o zugewiesene Objekt keine eigene Eigenschaft *f*, sondern erbt sie von der dazugehörigen Klasse. Da *f* als eine Methode von $o, aufgerufen wird, bezieht sich das dazugehörige `This` auf $o.


## Befehle für Klassen

Einige Befehle der 4D Programmiersprache eignen sich zum Verwalten von Features für Klassen.


### OB Class

#### OB Class ( object ) -> Object | Null

`OB Class` gibt die Klasse des Objekts zurück, das im Parameter übergeben ist.


### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` gibt `wahr` zurück, wenn `object` zu `class` gehört oder zu einer seiner geerbten Klassen, sonst `false`.
