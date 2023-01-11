---
id: methods
title: Methods
---


Eine Methode ist in der Regel ein Stück Code, der eine oder mehrere Aktionen ausführt. Eine Methode besteht aus Anweisungen; jede Anweisung ist eine Zeile in der Methode. Eine Anweisung führt eine Aktion aus, die einfach oder komplex sein kann. Obwohl eine Anweisung immer in einer Zeile steht, kann diese Zeile so lang wie erforderlich sein (bis zu 32.000 Zeichen, was für die meisten Fälle ausreichen dürfte).

Eine Methode kann max. 2 GB groß sein oder bis zu 32.000 Code-Zeilen enthalten.

## Methodentypen

In der 4D Programmiersprache gibt es verschiedene Kategorien von Methoden. Die Kategorie richtet sich danach, wie die Methode aufgerufen wird:

| Typ                                              | Kontext des Aufrufs                                                                                                         | Akzeptiert Parameter | Beschreibung                                                                                                                                                                                                     |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Projektmethode**                               | Bei Bedarf, wenn der Name einer Projektmethode aufgerufen wird (siehe [Projektmethoden aufrufen](#calling-project-methods)) | Ja                   | Kann beliebigen Code zum Ausführen eigener Aktionen enthalten. Eine einmal erstellte Projektmethode wird Teil der Programmierung des Projekts.                                                                   |
| **Objekt (Widget) Methode**                      | Automatisch, wenn ein Ereignis das Objekt betrifft, dem die Methode zugeordnet ist                                          | Nein                 | Eigenschaft eines Formularobjekts (auch Widget genannt)                                                                                                                                                          |
| **Formularmethode**                              | Automatisch, wenn ein Ereignis das Formular betrifft, dem die Methode zugeordnet ist                                        | Nein                 | Eigenschaft eines Formulars. Sie können eine Formularmethode zum Verwalten von Daten und Objekten verwenden. Für diese Zwecke ist es jedoch generell einfacher und effizienter, eine Objektmethode zu verwenden. |
| **Trigger** (auch bekannt als *Tabellenmethode*) | Automatisch, jedes Mal wenn Sie die Datensätze einer Tabelle bearbeiten (Hinzufügen, Löschen, Ändern)                       | Nein                 | Eigenschaft einer Tabelle. Trigger sind Methoden, die “illegale” Operationen mit Datensätzen in Ihrer Datenbank verhindern.                                                                                      |
| **Datenbankmethoden**                            | Automatisch, wenn ein Ereignis in der Arbeitssitzung eintritt                                                               | Ja (vordefiniert)    | There are 16 database methods in 4D. See Database methods section Siehe Abschnitt zu Datenbankmethoden                                                                                                           |

> Die 4D Programmiersprache unterstützt auch **Class functions**, die im Kontext der Instanz eines Objekts aufgerufen werden. Class Functions können integriert sein (*z.B.* `collection.orderBy()` oder `entity.save()`) oder vom 4D Entwickler [erstellt worden sein](classes.md#class-function).

## Projektmethoden aufrufen

Eine Projektmethode kann je nach Ausführung und Verwendung folgende Rolle haben:

- Unterroutine
- Objekt Formel
- Menümethode
- Prozessmethode
- Auf Ereignis oder Fehler bezogene Methode

You can also execute your project methods manually, for testing purpose for example.

### Unterroutinen

Eine Unterroutine ist eine Projektmethode, die man sich als Diener vorstellen kann. Sie führt die Aufgaben (tasks) aus, deren Durchführung andere Methoden anfordern. Eine Funktion ist eine Unterroutine, die einen Wert an die Methode zurückgibt, die sie aufgerufen hat.

Eine einmal erstellte Projektmethode wird Teil der Programmierung des Projekts, in dem sie angelegt wurde. Sie können die Projektmethode dann in einer anderen Methode (Projektmethode, Objektmethode …) genauso wie einen in 4D integrierten Befehl aufrufen. Eine so verwendete Projektmethode heißt Unterroutine.

Sie verwenden Unterroutinen, um:

- Sich wiederholendes Programmieren zu reduzieren
- Ihre Methoden klarer zu gliedern
- Ihre Methoden schneller zu ändern
- Ihren Code modular aufzuteilen

Wir gehen beispielsweise von einem Projekt Kunden aus. Bei der individuellen Gestaltung stellen Sie fest, dass sich einige Vorgänge wiederholen, wie einen Kunden finden oder einen Datensatz ändern. Der Code dafür könnte folgendermaßen aussehen:

```4d
  // Look for a customer
 QUERY BY EXAMPLE([Customers])
  // Select the input form
 FORM SET INPUT([Customers];"Data Entry")
  // Modify the customer's record
 MODIFY RECORD([Customers])
```

Arbeiten Sie ohne Unterroutinen, müssen Sie den Code jedes Mal schreiben, wenn Sie einen Kundendatensatz ändern wollen. Passiert das in Ihrem Projekt an zehn Stellen, müssen Sie den Code zehnmal schreiben. Mit Unterroutinen schreiben Sie den Code nur einmal. Das ist der erste Vorteil von Unterroutinen - die Menge an Code reduzieren.

Wir legen den oben beschriebenen Code in einer Methode mit Namen `MODIFY CUSTOMER` an. Soll diese Methode in einer anderen Methode ausgeführt werden, müssen Sie nur den Namen einsetzen. Wollen Sie beispielsweise einen Kundendatensatz ändern und dann den Datensatz drucken, schreiben Sie folgende Methode:

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

Das vereinfacht Ihre Methode drastisch. Im Beispiel müssen Sie nicht wissen, wie die Methode `MODIFY CUSTOMER` arbeitet, sondern nur was sie tut. Dies ist der zweite Vorteil von Unterroutinen - Ihre Methoden klarer gliedern. Sie erweitern sozusagen die 4D Programmiersprache.

Wollen Sie in dieser Beispielanwendung die Methode zum Auffinden von Kunden ändern, müssen Sie nur eine und nicht zehn Methoden ändern. Ein weiterer Vorteil von Unterroutinen - Methoden lassen sich schnell ändern.

Mit Unterroutinen machen Sie Ihren Code modular. Das bedeutet, Sie unterteilen Ihren Code in Module (Unterroutinen), die jeweils einen logischen Vorgang (task) ausführen. Betrachten Sie folgenden Code aus einer Anwendung für Kontoführung:

```4d
 FIND_CLEARED_CHECKS //Find the cleared checks
 RECONCILE_ACCOUNT //Reconcile the account
 PRINT_CHECK_BOOK_REPORT //Print a checkbook report
```

Auch für jemanden, der die Anwendung nicht kennt, ist klar, was der Code ausführt. Er muss nicht jede Unterroutine untersuchen, die evtl. aus vielen Zeilen besteht und komplexe Operationen ausführt. Wichtig ist, dass die Tasks ausgeführt werden. Wir empfehlen, den Code möglichst in logische Vorgänge oder Module aufzuteilen.

### Objekt Formel

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

Eine Menümethode wird in der Anwendungsumgebung aufgerufen, wenn Sie den dazugehörigen eigenen Menübefehl auswählen. Sie weisen die Methode dem Menübefehl im Methodeneditor zu oder über einen Befehl aus dem Kapitel "Menüs". Die Methoden wird ausgeführt, wenn der Menübefehl ausgewählt wird. Durch Einrichten eigener Menüs mit dazugehörigen Menümethoden, die bestimmte Aktionen ausführen, erstellen Sie eigene Oberflächen für Ihre Desktop-Anwendungen.

Mit eigenen Menübefehlen können eine oder mehrere Aktivitäten ausgelöst werden. Ein Menübefehl für die Eingabe von Datensätzen kann beispielsweise zwei Tasks ausführen: Das entsprechende Eingabeformular anzeigen und den Befehl `ADD RECORD` aufrufen, bis der Benutzer die Eingabe von Daten beendet.

Das automatisierte Ablaufen mehrerer Aktivitäten ist eine Leistungsstärke der Programmiersprache. Über eigene Menüs automatisieren Sie mehrere Tasks und bieten Benutzern eine bessere Führung.

### Prozessmethode

Eine **Prozessmethode** wird aufgerufen, wenn ein Prozess startet. Der Prozess dauert nur solange, wie die Prozessmethode ausgeführt wird, außer es ist ein Worker Prozess. Beachten Sie, dass eine Menümethode, die einem Menübefehl mit der Eigenschaft* Starte neuen Prozess* zugeordnet ist, gleichzeitig die Prozessmethode für den neu gestarteten Prozess ist.

### Auf Ereignis oder Fehler bezogene Methode

Eine **ereignisbezogene Methode** läuft in einem eigenen Prozess, wie eine Prozessmethode, die Ereignisse abfängt. Normalerweise verwaltet 4D die meisten Ereignisse automatisch für Sie. Beispielsweise bei der Dateneingabe nimmt 4D Tastaturkürzel und Klicks wahr, ruft die entsprechenden Objekt- und Formularmethoden auf, so dass Sie von diesen Methoden aus auf die Ereignisse entsprechend antworten können. Weitere Informationen dazu finden Sie unter dem Befehl `ON EVENT CALL`.

Eine **fehlerbezogene Methode** ist eine unterbrechende Projektmethode. Immer wenn ein Fehler oder eine Ausnahme auftreten, läuft diese Methode in dem Prozess ab, in welchem sie installiert ist. Weitere Informationen dazu finden Sie unter dem Befehl `ON ERR CALL`.

### Execution mode

Project methods written in your application are usually called automatically during the use of the application via menu commands, buttons, other methods, and so on. As for database methods, they are executed in relation to specific events that occur in the application.

However, for testing and debugging purposes, 4D lets you manually execute project methods and certain database methods in Design mode. In this case, it is possible to run the method in a new process and/or directly in Debug mode, in order to check its execution step by step.

The following execution modes are available:

- Die Methode A ruft die Methode B auf, die A aufruft, so ruft A wieder B auf, usw.
- Eine Methode kann sich selbst aufrufen.

#### From the Code Editor

Each [**Code Editor**](../code-editor/overview.md) window has a button that can be used to run the current method. Using the menu associated with this button, you can choose the type of execution desired.

This button is only active for project methods and for the following database methods:

- On Startup
- On Exit
- On Server Startup
- On Server Shutdown

From the [Code Editor](../code-editor/overview.md) window,

#### From the Execute Method dialog box

Einige typische Verwendungen für Rekursion in 4D sind:

This dialog box lists all the project methods of the database, including shared project methods of components. On the other hand, project methods that have been declared invisible will not appear.

To execute a project method, simply select its name in the list and click on **Execute**. To run a method step by step in Debug mode, click on **Debug**. For more information about the 4D debugger, refer to the [Debugging](../Debugging/basics.md) section.

If you check the **New Process** check box, the method you selected executes in another process. If the method is performing a time-consuming task such as printing a large set of records, you can continue to work with your database, adding records to a table, creating a graph to display data, and so on. For more information about processes, refer to [Processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) the 4D *Language Reference* manual.

To modify the properties of a project method:

- If you want the method to be executed on the server machine rather than on the client machine, select the **On 4D Server** option in the To be executed menu. In this case, a new process, call the *stored procedure*, is created on the server machine in order to execute the method. This option can be used to reduce network traffic and optimize the functioning of 4D Server, in particular for methods that call data stored on the disk. All types of methods can be executed on the server machine or on another client machine, except for those that modify the user interface. In this case, stored procedures are ineffective.
- You can also choose to run the method on another client workstation. Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the [REGISTER CLIENT](https://doc.4d.com/4Dv19R5/4D/19-R5/REGISTER-CLIENT.301-5830908.en.html).

By default, the **locally** option is selected. With the 4D single-user version, this is the only option available.

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
