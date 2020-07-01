---
id: variables
title: Variablen
---

Daten in 4D werden auf zwei ganz unterschiedliche Weisen gespeichert. **Felder** speichern Daten permanent auf der Festplatte, **Variablen**speichern Daten temporär im Speicher.

Beim Einrichten Ihrer 4D Datenbank legen Sie die Namen und Typen Ihrer Datenfelder fest. Variablen sind ganz ähnlich—Sie geben diesen auch Namen und verschiedene Typen (siehe unter [Datentypen](Concepts/data-types.md)).

Variablen sind Objekte der Programmiersprache; Sie können Variablen erstellen und verwenden, die nie auf dem Bildschirm erscheinen. In Ihren Formularen können Sie Variablen (außer Zeiger und BLOB) auf dem Bildschirm anzeigen, Daten in sie eingeben und sie in Berichten drucken. Auf diese Weise verhalten sich eingebbare und nicht-eingebbare Variablenbereiche wie Felder und haben dieselben integrierten Kontrollen beim Erstellen. Variablen in Formularen können auch Schaltflächen, Listboxen, rollbare Bereiche, Bildschaltflächen, usw. steuern oder Ergebnisse von Berechnungen anzeigen, die nicht gesichert werden müssen.

## Variablen erstellen

Sie erstellen Variablen durch Deklarieren über einen Befehl im Kapitel "Compiler" oder "Arrays".

**Hinweis:** Arrays sind ein besonderer Variablentyp. Ein Array ist eine sortierte Reihe von Variablen desselben Typs. Weitere Informationen dazu finden Sie unter [Arrays](Concepts/arrays.md).

Wollen Sie z. B. eine Textvariable definieren, schreiben Sie:

```4d
 C_TEXT(myText)
```

**Hinweis:** Auch wenn es normalerweise nicht empfehlenswert ist, können Sie Variablen einfach durch ihre Verwendung erstellen; Sie müssen sie nicht unbedingt mit Typ definieren, wie es bei Feldern erforderlich ist. Beispiel: Für eine Variable, die das aktuelle Datum plus 30 Tage angibt, können Sie schreiben:

```4d
 MyDate:=Current date+30 //MyDate is created and gets the current date plus 30 days
```

Ist die Variable angelegt, können Sie diese überall in Ihrer Anwendung verwenden, wo sie benötigt wird. Sie wollen z.B. eine Textvariable in einem Feld vom gleichen Typ speichern:

```4d
 [MyTable]MyField:=MyText
```

Hier sehen Sie einige grundlegende Variablendeklarationen:

```4d
<br /> C_BLOB(vxMyBlob) // Die Prozessvariable vxMyBlob ist als eine Variable vom Typ BLOB deklariert
 C_DATE($vdCurDate) // Die lokale Variable $vdCurDate ist als eine Variable vom Typ Datum deklariert
 C_LONGINT(vg1;vg2;vg3) // Die 3 Prozessvariablen vg1, vg2 und vg3 sind als Variablen vom Type Lange Ganzzahl deklariert  
 C_OBJECT($vObj) // Die lokale Variable $vObj ist als eine Variable vom Typ Objekt deklariert
 C_COLLECTION($vCol) // Die lokale Variable $vCol ist als eine Variable vom Typ Collection deklariert
 ARRAY LONGINT(alAnArray;10) //Die Prozessvariable alAnArray ist als ein Array vom Typ Lange Ganzzahl mit 10 Elementen deklariert
```

## Assigning Data

Daten lassen sich in Variablen und Arrays setzen und daraus kopieren. Daten in eine Variable setzen heißt, **der Variablen die Daten zuweisen**. Das geschieht über den Zuweisungsoperator (:=). Der Zuweisungsoperator wird auch verwendet, um Feldern Daten zuzuweisen.

Der Zuweisungsoperator ist wesentlich, um eine Variable zu erstellen und Daten in sie einzusetzen. Sie schreiben den Namen der gewünschten Variablen auf die linke Seite des Zuweisungsoperators. Beispiel:

```4d
MyNumber:=3
```

erstellt die Variable * MyNumber* und setzt die Zahl 3 ein. Existiert MyNumber bereits, wird einfach die Zahl 3 eingesetzt.

Natürlich wären Variablen nicht sehr hilfreich, wenn Sie keine Daten daraus erhalten könnten. Sie verwenden wieder den Zuweisungsoperator. Wollen Sie den Wert von MyNumber z.B. in ein Feld mit Namen [Products]Size setzen, schreiben Sie * MyNumber* auf die rechte Seite des Zuweisungsoperators:

```4d
[Products]Size:=MyNumber
```

In diesem Fall ist *[Products]Size* gleich 3. Dieses Beispiel ist ganz einfach, aber es zeigt, wie Daten über Programmierung von einer Stelle an eine andere übertragen werden.

Daten an Elemente eines Array weisen Sie über geschweifte Klammern zu, also {...}:

```4d
atNames{1}:="Richard"
```

## Local, Process, and Interprocess variables

Sie können drei Variablentypen erstellen: **lokal**, **Prozess** und **Interprozess**. Der Unterschied zwischen den Typen sind ihre Reichweite oder die Objekte, für die sie verfügbar sind.

### Lokale Variable

A local variable is, as its name implies, local to a method—accessible only within the method in which it was created and not accessible outside of that method. Die lokale Zuordnung zu einer Methode heißt formell "Lokale Reichweite". Lokale Variablen dienen zur Einschränkung einer Variablen, so dass sie nur innerhalb der Methode funktioniert.

Sie verwenden eine lokale Variable, um:

- Namenskonflikte mit anderen Variablen zu vermeiden
- Daten temporär zu verwenden
- Die Anzahl der Prozessvariablen zu verringern

Der Name einer lokalen Variable startet immer mit dem Dollarzeichen ($) und kann bis zu 31 zusätzliche Zeichen enthalten. Falls Sie einen längeren Namen eingeben, kürzt 4D ihn auf die passende Länge.

In einer Anwendung mit vielen Methoden und Variablen erkennen Sie oft, dass Sie eine Variable nur in der Methode benötigen, in der Sie arbeiten. Sie können eine lokale Variable in der Methode anlegen bzw. verwenden und müssen sich keine Gedanken machen, ob Sie den gleichen Variablennamen bereits irgendwo anders verwendet haben.

Häufig benötigt eine Anwendung nur Detailinformationen vom Benutzer. Dafür gibt es den Befehl `Request`. Er zeigt ein Dialogfenster mit einer Meldung, die den Benutzer zu einer Antwort auffordert. Gibt der Benutzer die Antwort ein, gibt der Befehl diese Angaben zurück. In der Regel müssen Sie diese Angaben nicht sehr lange in Ihren Methoden halten. Dies ist ein typischer Anwendungsbereich für eine lokale Variable. Hier ein Beispiel:

```4d
 $vsID:=Request("Please enter your ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

Diese Methode fordert den Benutzer auf, eine ID einzugeben. Sie setzt die Antwort in eine lokale Variable $vsID und sucht dann nach der ID, die der Benutzer eingegeben hat. Ist die Methode abgeschlossen, wird die lokale Variable $vsID aus dem Speicher entfernt. Das ist gut so, denn die Variable wird nur einmal und nur in dieser Methode benötigt.

**Hinweis:** Die Parameter $1, $2... in Methoden sind lokale Variablen. Weitere Informationen dazu finden Sie unter [Parameter](Concepts/parameters.md).

### Process variables

A process variable is available only within a process. It is accessible to the process method and any other method called from within the process.

A process variable does not have a prefix before its name. Der Name der Prozessvariablen kann max. 31 Zeichen lang sein.

In interpreted mode, variables are maintained dynamically; they are created and erased from memory “on the fly.” In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. For example, the variable myVar is one variable in the process P_1 and another one in the process P_2.

A process can “peek and poke” process variables from another process using the commands `GET PROCESS VARIABLE` and `SET PROCESS VARIABLE`. It is good programming practice to restrict the use of these commands to the situation for which they were added to 4D:

- Interprocess communication at specific places or your code
- Handling of interprocess drag and drop
- In Client/Server, communication between processes on client machines and the stored procedures running on the server machines

For more information, see the chapter **Processes** and the description of these commands.

### Interprocess variables

Interprocess variables are available throughout the database and are shared across all cooperative processes. They are primarily used to share information between processes.

> Use of interprocess variables is not recommended since they are not available from preemptive processes and tend to make the code less maintainable.

The name of an interprocess variable always begins with the symbols (<>) — a “less than” sign followed by a “greater than” sign— followed by 31 characters.

In Client/Server, each machine (Client machines and Server machine) share the same definition of interprocess variables, but each machine has a different instance for each variable.