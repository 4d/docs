---
id: methods
title: Methoden
---


## Overview

Eine Methode ist in der Regel ein Stück Code, der eine oder mehrere Aktionen ausführt. Eine Methode besteht aus Anweisungen; jede Anweisung ist eine Zeile in der Methode. Eine Anweisung führt eine Aktion aus, die einfach oder komplex sein kann. Obwohl eine Anweisung immer in einer Zeile steht, kann diese Zeile so lang wie erforderlich sein (bis zu 32.000 Zeichen, was für die meisten Fälle ausreichen dürfte).

The maximum size of a method is limited to 2 GB of text or 32,000 lines of code.

## Method Types

In the 4D Language, there are several categories of methods. The category depends on how they can be called:

| Typ                              | Calling context                                                                                             | Accepts parameters | Beschreibung                                                                                                                                                         |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Projektmethode**               | On demand, when the project method name is called (see [Calling project methods](#calling-project-methods)) | Ja                 | Can contain any code to execute any custom actions. Once a project method is created, it becomes part of the language of the project.                                |
| **Object (widget) method**       | Automatic, when an event involves the object to which the method is attached                                | Nein               | Property of a form object (also called widget)                                                                                                                       |
| **Form method**                  | Automatic, when an event involves the form to which the method is attached                                  | Nein               | Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes. |
| **Trigger** (aka *Table method*) | Automatic, each time that you manipulate the records of a table (Add, Delete and Modify)                    | Nein               | Property of a table. Triggers are methods that can prevent “illegal” operations with the records of your database.                                                   |
| **Database method**              | Automatic, when a working session event occurs                                                              | Yes (predefined)   | There are 16 database methods in 4D. See Database methods section                                                                                                    |


> The 4D Language also supports **Class functions**, that can be called in the context of an object instance. Class functions can be built-in (*e.g.* `collection.orderBy()` or `entity.save()`), or [created by the 4D developer](classes.md#class-function).


## Projektmethoden aufrufen

Eine Projektmethode kann je nach Ausführung und Verwendung folgende Rolle haben:

- Subroutine
- Object formula
- Menümethode
- Prozessmethode
- Auf Ereignis oder Fehler bezogene Methode

### Subroutines

Eine Unterroutine ist eine Projektmethode, die man sich als Diener vorstellen kann. Sie führt die Aufgaben (tasks) aus, deren Durchführung andere Methoden anfordern. Eine Funktion ist eine Unterroutine, die einen Wert an die Methode zurückgibt, die sie aufgerufen hat.

When you create a project method, it becomes part of the language of the project in which you create it. You can then call the project method from another method (project method, object method...) in the same way that you call 4D’s built-in commands. Eine so verwendete Projektmethode heißt Unterroutine.

Sie verwenden Unterroutinen, um:

- Sich wiederholendes Programmieren zu reduzieren
- Ihre Methoden klarer zu gliedern
- Ihre Methoden schneller zu ändern
- Ihren Code modular aufzuteilen

For example, let’s say you have a project of customers. As you customize the project, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. Der Code dafür könnte folgendermaßen aussehen:

```4d
  // Look for a customer
 QUERY BY EXAMPLE([Customers])
  // Select the input form
 FORM SET INPUT([Customers];"Data Entry")
  // Modify the customer's record
 MODIFY RECORD([Customers])
```

Arbeiten Sie ohne Unterroutinen, müssen Sie den Code jedes Mal schreiben, wenn Sie einen Kundendatensatz ändern wollen. If there are ten places in your project where you need to do this, you will have to write the code ten times. Mit Unterroutinen schreiben Sie den Code nur einmal. Das ist der erste Vorteil von Unterroutinen - die Menge an Code reduzieren.

If the previously described code was a method called `MODIFY_CUSTOMER`, you would execute it simply by using the name of the method in another method. Wollen Sie beispielsweise einen Kundendatensatz ändern und dann den Datensatz drucken, schreiben Sie folgende Methode:

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

Das vereinfacht Ihre Methode drastisch. In the example, you do not need to know how the `MODIFY_CUSTOMER` method works, just what it does. Dies ist der zweite Vorteil von Unterroutinen - Ihre Methoden klarer gliedern. Sie erweitern sozusagen die 4D Programmiersprache.

If you need to change your method of finding customers in this example project, you will need to change only one method, not ten. Ein weiterer Vorteil von Unterroutinen - Methoden lassen sich schnell ändern.

Mit Unterroutinen machen Sie Ihren Code modular. Das bedeutet, Sie unterteilen Ihren Code in Module (Unterroutinen), die jeweils einen logischen Vorgang (task) ausführen. Consider the following code from a checking account project:

```4d
 FIND_CLEARED_CHECKS //Find the cleared checks
 RECONCILE_ACCOUNT //Reconcile the account
 PRINT_CHECK_BOOK_REPORT //Print a checkbook report
```

Even for someone who doesn’t know the project, it is clear what this code does. Er muss nicht jede Unterroutine untersuchen, die evtl. aus vielen Zeilen besteht und komplexe Operationen ausführt. Wichtig ist, dass die Tasks ausgeführt werden. Wir empfehlen, den Code möglichst in logische Vorgänge oder Module aufzuteilen.


### Object formulas

Sie können Ihre Projektmethoden in **formula** Objekten einkapseln und von Ihren Objekten aus aufrufen.

Mit der Methode `Formula` oder `Formula from string` können Sie native Formelobjekte erstellen, die Sie in Objekteigenschaften einbinden können. So können Sie eigene Objektmethoden einbinden.

Zum Ausführen einer Methode, die in einer Objekteigenschaft gespeichert ist, setzen Sie nach dem Eigenschaftsnamen den Operator **( )**. Beispiel:

```4d
//myAlert
ALERT("Hello world!")
```

Dann lässt sich `myAlert` in jedes Objekt einbinden und aufrufen:

```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //displays "Hello world!"
```

Die Syntax mit Klammern wird auch unterstützt:

```4d
$o["custom_Alert"]() //displays "Hello world!"
```

Sie können auch [Parameter](Concepts/parameters.md) in Ihrer Formel übergeben, wenn Sie diese, wie in 4D Projektmethoden, mit $1, $2… aufrufen:

```4d
//fullName method
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

Sie können `fullName` in ein Objekt einbinden:

```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// equivalent to $result:=fullName("param1";"param2")
```

In Kombination mit der Funktion `This` können Sie mit solchen Objektmethoden leistungsstarken generischen Code schreiben. Beispiel:

```4d
//fullName2 method
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

Die Methode arbeitet dann wie ein neues berechnetes Attribut, dass sich in andere Attribute einfügen lässt:

```4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //add the method  

$result:=$o.fullName() 
//$result = "Jim Wesson"
```



Beachten Sie, dass eine objektgebundene Methode, selbst wenn sie keine Parameter hat, zum Ausführen mit Klammern ( ) aufgerufen werden muss. Sonst wird nur die Objekteigenschaft aufgerufen und sie gibt eine neue Referenz zur Formel zurück (und führt sie nicht aus):

```4d
$o:=$f.message //returns the formula object in $o
```

### Menümethode
Eine Menümethode wird in der Anwendungsumgebung aufgerufen, wenn Sie den dazugehörigen eigenen Menübefehl auswählen. Sie weisen die Methode dem Menübefehl im Methodeneditor zu oder über einen Befehl aus dem Kapitel "Menüs". Die Methoden wird ausgeführt, wenn der Menübefehl ausgewählt wird. By creating custom menus with menu methods that perform specific actions, you create custom interfaces for your desktop applications.

Mit eigenen Menübefehlen können eine oder mehrere Aktivitäten ausgelöst werden. Ein Menübefehl für die Eingabe von Datensätzen kann beispielsweise zwei Tasks ausführen: Das entsprechende Eingabeformular anzeigen und den Befehl `ADD RECORD` aufrufen, bis der Benutzer die Eingabe von Daten beendet.

Das automatisierte Ablaufen mehrerer Aktivitäten ist eine Leistungsstärke der Programmiersprache. Using custom menus, you can automate task sequences and thus provide more guidance to users of the application.


### Prozessmethode

Eine **Prozessmethode** wird aufgerufen, wenn ein Prozess startet. Der Prozess dauert nur solange, wie die Prozessmethode ausgeführt wird, außer es ist ein Worker Prozess. Beachten Sie, dass eine Menümethode, die einem Menübefehl mit der Eigenschaft* Starte neuen Prozess* zugeordnet ist, gleichzeitig die Prozessmethode für den neu gestarteten Prozess ist.

### Auf Ereignis oder Fehler bezogene Methode
Eine **ereignisbezogene Methode** läuft in einem eigenen Prozess, wie eine Prozessmethode, die Ereignisse abfängt. Normalerweise verwaltet 4D die meisten Ereignisse automatisch für Sie. Beispielsweise bei der Dateneingabe nimmt 4D Tastaturkürzel und Klicks wahr, ruft die entsprechenden Objekt- und Formularmethoden auf, so dass Sie von diesen Methoden aus auf die Ereignisse entsprechend antworten können. Weitere Informationen dazu finden Sie unter dem Befehl `ON EVENT CALL`.

Eine **fehlerbezogene Methode** ist eine unterbrechende Projektmethode. Immer wenn ein Fehler oder eine Ausnahme auftreten, läuft diese Methode in dem Prozess ab, in welchem sie installiert ist. Weitere Informationen dazu finden Sie unter dem Befehl `ON ERR CALL`.

## Rekursive Projektmethoden

Projektmethoden können sich auch selbst aufrufen. Beispiel:

- Die Methode A ruft die Methode B auf, die A aufruft, so ruft A wieder B auf, usw.
- Eine Methode kann sich selbst aufrufen.

Das nennt man Rekursion. Die 4D Programmiersprache unterstützt Rekursivität.

Hier ein Beispiel. Wir haben eine Tabelle `[Friends and Relatives]`, die extrem vereinfacht, so aussieht:
- `[Friends and Relatives]Name`
- `[Friends and Relatives]ChildrensName`

Für dieses Beispiel nehmen wir an, dass die Werte der Datenfelder einmalig sind, d. h. es gibt nicht zwei Personen mit demselben Namen. Sie wollen für einen gegebenen Namen folgenden Satz erstellen: “John, mein Freund, der das Kind ist von Paul, der das Kind ist von Jane, die das Kind ist von Robert, der das Kind ist von Eleanor, tut dies für sein Leben gern!”:

1. Sie können den Satz folgendermaßen anlegen:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       $vtTheWholeStory:="A friend of mine, "+$vsName
       Repeat
          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)
          $vlQueryResult:=Records in selection([Friends and Relatives])
          If($vlQueryResult>0)
             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name
             $vsName:=[Friends and Relatives]Name
          End if
       Until($vlQueryResult=0)
       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"
       ALERT($vtTheWholeStory)
    End if
 End if
```

2. oder folgendermaßen:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

mit der rekursiven Methode `Genealogy of`:

```4d
  ` Genealogy of project method
  ` Genealogy of ( String ) -> Text
  ` Genealogy of ( Name ) -> Part of sentence

 $0:=$1
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)
 If(Records in selection([Friends and Relatives])>0)
    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

Beachten Sie die Methode `Genealogy of`, die sich selbst aufruft.

Die erste Möglichkeit ist ein **iterativer Algorithmus**,  die zweite ein **rekursiver Algorithmus**.

Sie können beim Einfügen von Code wie im oben aufgeführten Beispiel sowohl iterative als auch rekursive Methoden schreiben. Rekursion macht die Programmierung im allgemeinen präziser, leichter zu lesen und zu warten, sie ist jedoch nicht zwingend.

Einige typische Verwendungen für Rekursion in 4D sind:

- Datensätze in Tabellen bearbeiten, die wie im obigen Beispiel miteinander verknüpft sind.
- Dokumente und Ordner auf Ihrer Festplatte mit den Befehlen `FOLDER LIST` und `DOCUMENT LIST` durchlaufen. Ein Ordner kann Ordner und Dokumente enthalten, die Unterordner selbst können Ordner und Dokumente enthalten, usw.

**Wichtig:** Rekursive Abfragen sollten immer an einem bestimmten Punkt enden. Im Beispiel ruft sich die Methode `Genealogy of` nicht mehr selbst auf, wenn die Suche keinen Datensatz zurückgibt. Ohne Abfragen dieser Bedingung würde sich die Methode endlos aufrufen; 4D gibt dann evtl. eine Fehlermeldung “Speicher voll” zurück, da es keinen Platz mehr hat zum Stapeln der Aufrufe (so wie bei den in der Methode verwendeten Parametern und lokalen Variablen).
