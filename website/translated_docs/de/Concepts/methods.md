---
id: methods
title: Methoden
---


Eine Methode ist in der Regel ein Stück Code, der eine oder mehrere Aktionen ausführt. In der 4D Programmiersprache gibt es zwei Kategorien von Methoden:

- **Integrierte Methoden**, die 4D oder third-party Entwickler liefern und sich nur in Ihrem Code aufrufen lassen. Zu integrierten Methoden gehören:
    - Befehle und Funktionen des 4D API (Application Programming Interface), wie z. B. `ALERT` oder `Current date`.
    - Methoden, die Collections oder native Objekten zugewiesen sind, wie z.B. `collection.orderBy()` oder `entity.save()`.
    - Befehle aus Plug-Ins oder Komponenten, die von 4D oder third-Party Entwicklern kommen, wie z. B. `SVG_New_arc`.

    Weitere Informationen dazu finden Sie im Handbuch *4D Programmiersprache* oder spezifischen Handbüchern zu Plug-Ins oder Komponenten.

- **Projektmethoden**, wo Sie eigenen Code zum Ausführen beliebiger eigener Aktionen schreiben können. Eine einmal erstellte Projektmethode wird Teil der Programmierung der Anwendung, in der sie angelegt wurde. Eine Projektmethode besteht aus Anweisungen; jede Anweisung ist eine Zeile in der Methode. Eine Anweisung führt eine Aktion aus, die einfach oder komplex sein kann. Obwohl eine Anweisung immer in einer Zeile steht, kann diese Zeile so lang wie erforderlich sein (bis zu 32.000 Zeichen, was für die meisten Fälle ausreichen dürfte). Eine Projektmethode kann max. 2 GB groß sein oder bis zu 32.000 Code-Zeilen enthalten.

**Hinweis:** 4D bietet auch spezifische Methoden, die bei bestimmten Datenbank- oder Formularereignissen automatisch ausgeführt werden. Weitere Informationen dazu finden Sie unter[ Spezialisierte Methoden](#specialized-methods).


## Projektmethoden aufrufen

Eine Projektmethode kann je nach Ausführung und Verwendung folgende Rolle haben:

- Unterroutine und Funktion
- An Objekt gebundene Methode
- Menümethode
- Prozessmethode
- Auf Ereignis oder Fehler bezogene Methode

### Unterroutine und Funktion
Eine Unterroutine ist eine Projektmethode, die man sich als Diener vorstellen kann. Sie führt die Aufgaben (tasks) aus, deren Durchführung andere Methoden anfordern. Eine Funktion ist eine Unterroutine, die einen Wert an die Methode zurückgibt, die sie aufgerufen hat.

Eine einmal erstellte Projektmethode wird Teil der Programmierung der Anwendung, in der sie angelegt wurde. Sie können die Projektmethode dann in anderen Projektmethoden oder [vordefinierten Methoden](#predefined-methods) genauso wie einen in 4D integrierten Befehl aufrufen. Eine so verwendete Projektmethode heißt Unterroutine.

Sie verwenden Unterroutinen, um:

- Sich wiederholendes Programmieren zu reduzieren
- Ihre Methoden klarer zu gliedern
- Ihre Methoden schneller zu ändern
- Ihren Code modular aufzuteilen

Wir gehen beispielsweise von einer Datenbank Kunden aus. Bei der individuellen Gestaltung stellen Sie fest, dass sich einige Vorgänge wiederholen, wie einen Kunden finden oder einen Datensatz ändern. Der Code dafür könnte folgendermaßen aussehen:

```4d
  // Look for a customer
 QUERY BY EXAMPLE([Customers])
  // Select the input form
 FORM SET INPUT([Customers];"Data Entry")
  // Modify the customer's record
 MODIFY RECORD([Customers])
```

Arbeiten Sie ohne Unterroutinen, müssen Sie den Code jedes Mal schreiben, wenn Sie einen Kundendatensatz ändern wollen. Passiert das in Ihrer Anwendung an zehn Stellen, müssen Sie den Code zehnmal schreiben. Mit Unterroutinen schreiben Sie den Code nur einmal. Das ist der erste Vorteil von Unterroutinen - die Menge an Code reduzieren.

Wir legen den oben beschriebenen Code in einer Methode mit Namen `MODIFY CUSTOMER` an. Soll diese Methode in einer anderen Methode ausgeführt werden, müssen Sie nur den Namen einsetzen. Wollen Sie beispielsweise einen Kundendatensatz ändern und dann den Datensatz drucken, schreiben Sie folgende Methode:

```4d
 MODIFY CUSTOMER
 PRINT SELECTION([Customers])
```

Das vereinfacht Ihre Methode drastisch. Im Beispiel müssen Sie nicht wissen, wie die Methode `MODIFY CUSTOMER` arbeitet, sondern nur was sie tut. Dies ist der zweite Vorteil von Unterroutinen - Ihre Methoden klarer gliedern. Sie erweitern sozusagen die 4D Programmiersprache.

Wollen Sie in dieser Beispielanwendung die Methode zum Auffinden von Kunden ändern, müssen Sie nur eine und nicht zehn Methoden ändern. Ein weiterer Vorteil von Unterroutinen - Methoden lassen sich schnell ändern.

Mit Unterroutinen machen Sie Ihren Code modular. Das bedeutet, Sie unterteilen Ihren Code in Module (Unterroutinen), die jeweils einen logischen Vorgang (task) ausführen. Betrachten Sie folgenden Code aus einer Anwendung für Kontoführung:

```4d
 FIND CLEARED CHECKS ` Find the cleared checks
 RECONCILE ACCOUNT ` Reconcile the account
 PRINT CHECK BOOK REPORT ` Print a checkbook report
```

Auch für jemanden, der die Anwendung nicht kennt, ist klar, was der Code ausführt. Er muss nicht jede Unterroutine untersuchen, die evtl. aus vielen Zeilen besteht und komplexe Operationen ausführt. Wichtig ist, dass die Tasks ausgeführt werden. Wir empfehlen, den Code möglichst in logische Vorgänge oder Module aufzuteilen.

### An Objekt gebundene Methode

Sie können Ihre Projektmethoden in **formula** Objekten einkapseln und von Ihren Objekten aus aufrufen.

Mit der Methode `Formula` oder `Formula from string` können Sie native Formelobjekte erstellen, die Sie in Objekteigenschaften einbinden können. So können Sie eigene Objektmethoden einbinden.

To execute a method stored in an object property, use the **( )** operator after the property name. Beispiel:

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

You can also [pass parameters](Concepts/parameters.md) to your formula when you call it by using $1, $2… just like with 4D project methods:

```4d
//fullName method
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```
You can encapsulate `fullName` in an object:
```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith")
//$result = "John Smith"
// equivalent to $result:=fullName("param1";"param2")
```
Combined with the `This`function, such object methods allow writing powerful generic code. Beispiel:

```4d
//fullName2 method
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```
Then the method acts like a new, calculated attribute that can be added to other attributes:

```4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //add the method  

$result:=$o.fullName()
//$result = "Jim Wesson"
```



Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):

```4d
$o:=$f.message //returns the formula object in $o
```

### Menu Methods
A menu method is invoked when you select the custom menu command to which it is attached. You assign the method to the menu command using the Menu editor or a command of the "Menus" theme. The method executes when the menu command is chosen. This process is one of the major aspects of customizing a database. By creating custom menus with menu methods that perform specific actions, you personalize your database.

Custom menu commands can cause one or more activities to take place. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the `ADD RECORD` command until the user cancels the data entry activity.

Automating sequences of activities is a very powerful capability of the programming language. Using custom menus, you can automate task sequences and thus provide more guidance to users of the database.


### Process Methods

A **process method** is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a Worker process. Note that a menu method attached to a menu command with *Start a New Process* property is also the process method for the newly started process.

### Event and Error catching Methods
An **event catching method** runs in a separate process as the process method for catching events. Usually, you let 4D do most of the event handling for you. For example, during data entry, 4D detects keystrokes and clicks, then calls the correct object and form methods so you can respond appropriately to the events from within these methods. For more information, see the description of the command `ON EVENT CALL`.

An **error catching method** is an interrupt-based project method. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command `ON ERR CALL`.

## Recursive Project Methods

Project methods can call themselves. Beispiel:

- The method A may call the method B which may call A, so A will call B again and so on.
- A method can call itself.

This is called recursion. The 4D language fully supports recursion.

Here is an example. Let’s say you have a `[Friends and Relatives]` table composed of this extremely simplified set of fields:
- `[Friends and Relatives]Name`
- `[Friends and Relatives]ChildrensName`

For this example, we assume the values in the fields are unique (there are no two persons with the same name). Given a name, you want to build the sentence “A friend of mine, John who is the child of Paul who is the child of Jane who is the child of Robert who is the child of Eleanor, does this for a living!”:

1. You can build the sentence in this way:

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

2. You can also build it this way:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

with the recursive function `Genealogy of` listed here:

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

Note the `Genealogy of` method which calls itself.

The first way is an **iterative algorithm**. The second way is a **recursive algorithm**.

When implementing code for cases like the previous example, it is important to note that you can always write methods using iteration or recursion. Typically, recursion provides more concise, readable, and maintainable code, but using it is not mandatory.

Some typical uses of recursion in 4D are:

- Treating records within tables that relate to each other in the same way as in the example.
- Browsing documents and folders on your disk, using the commands `FOLDER LIST` and `DOCUMENT LIST`. A folder may contain folders and documents, the subfolders can themselves contain folders and documents, and so on.

**Important:** Recursive calls should always end at some point. In the example, the method `Genealogy of` stops calling itself when the query returns no records. Without this condition test, the method would call itself indefinitely; eventually, 4D would return a “Stack Full” error becuase it would no longer have space to “pile up” the calls (as well as parameters and local variables used in the method).


## Specialized Methods

In addition to generic **project methods**, 4D supports several specific method types, that are automatically called depending on events:

| Typ                              | Calling context                                                                          | Accepts parameters | Beschreibung                                                                                                                                                         |
| -------------------------------- | ---------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Object (widget) method**       | Automatic, when an event involves the object to which the method is attached             | Nein               | Property of a form object (also called widget)                                                                                                                       |
| **Form method**                  | Automatic, when an event involves the form to which the method is attached               | Nein               | Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes. |
| **Trigger** (aka *Table method*) | Automatic, each time that you manipulate the records of a table (Add, Delete and Modify) | Nein               | Property of a table. Triggers are methods that can prevent “illegal” operations with the records of your database.                                                   |
| **Database method**              | Automatic, when a working session event occurs                                           | Yes (predefined)   | There are 16 database methods in 4D. See Database methods section                                                                                                    |
