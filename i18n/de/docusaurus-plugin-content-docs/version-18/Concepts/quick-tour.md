---
id: quick-tour
title: Schnelle Tour
sidebar_label: Schnelle Tour
---

Mit der 4D Programmiersprache lässt sich die gängige Meldung "Hello, world!" auf dem Bildschirm auf verschiedenen Wegen erzeugen. Der einfachste Weg ist, eine Zeile in eine Projektmethode setzen:

```4d  
ALERT("Hello, World!")
```

Dieser Code zeigt ein standardmäßiges Dialogfenster der Plattform mit der Meldung "Hello, World!" mit der Schaltfläche OK. Zum Ausführen des Code klicken Sie einfach im Methodeneditor auf die Schaltfläche zum Ausführen:

![alt-text](../assets/en/Concepts/helloworld.png)

Sie können diesen Code auch einer Schaltfläche in einem Formular zuordnen und das Formular ausführen. Klicken Sie auf diese Schaltfläche, erscheint das Dialogfenster mit der Meldung. In jedem Fall haben Sie gerade Ihre erste Zeile mit 4D Code ausgeführt!

## Werte zuweisen

Daten lassen sich in Variablen, Felder, Array Elemente etc. setzen und daraus kopieren. Daten in eine Variable setzen heißt, der Variablen die Daten zuweisen. Das geschieht über den Zuweisungsoperator (:=). Der Zuweisungsoperator wird auch verwendet, um Feldern oder Array Elementen Daten zuzuweisen.

```4d
$MyNumber:=3 //assigns 3 to MyNumber variable  
[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field
arrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element
MyVar:=Length("Acme") //assigns the result of the function (4) to MyVar
$myDate:=!2018/01/21! //assigns a date literal
$myHour:=?08:12:55? //assigns a time literal
```

Der Zuordnungsoperator := unterscheidet sich von den anderen Operatoren. Er kombiniert nicht Ausdrücke zu einem neuen, sondern kopiert die Werte des Ausdrucks auf seiner rechten Seite in die Variable oder das Feld auf seiner linken Seite.

**Wichtig:** Verwechseln Sie NICHT den Zuweisungsoperator := mit dem Vergleichsoperator ist gleich =. Es wurde absichtlich ein anderer Zuweisungsoperator (und nicht =) gewählt, um Probleme und Verwirrung zu vermeiden, die in anderen Programmiersprachen oft mit == oder === auftreten. Denn solche Fehler sind für den Compiler nur schwer zu erkennen und führen zu einer zeitaufwändigen Fehlerbehebung.

## Variablen

Die 4D Sprache ist stark typisiert, obwohl in vielen Fällen eine gewisse Flexibilität erlaubt ist. Sie erstellen eine typisierte Variable mit einem `C_XXX` Befehl. Um z. B. eine Variable vom Typ Datum zu erstellen, können Sie schreiben:

```4d
C_DATE(MyDate) //Date type for MyDate variable
```

Auch wenn es normalerweise nicht empfehlenswert ist, können Sie Variablen einfach durch ihre Verwendung erstellen; Sie müssen sie nicht unbedingt mit Typ definieren, wie es bei Feldern erforderlich ist. Beispiel: Für eine Variable, die das aktuelle Datum plus 30 Tage angibt, können Sie schreiben:

```4d
MyOtherDate:=Current date+30
```

The line of code reads “MyOtherDate gets the current date plus 30 days.” This line declares the variable, assigns it with both the (temporary) date type and a content. Diese Zeile erstellt die Variable, weist ihr den Datentyp (temporär) und einen Inhalt zu. Eine per Zuweisung erstellte Variable wird als typlos interpretiert, d. h. sie kann mit anderen Typen in anderen Zeilen zugewiesen werden und ändert dann den Typ dynamisch. Eine mit `C_XXX` typisierte Variable kann ihren Typ nicht ändern. Im kompilierten Modus lässt sich der Typ nie verändern, unabhängig wie die Variable erstellt wurde.

## Befehle

4D Befehle sind integrierte Methoden zum Ausführen einer Aktion. Alle 4D Befehle, wie z. B. `CREATE RECORD` oder `ALERT` werden im Handbuch _4D Programmiersprache_ beschrieben und sind nach Themen gruppiert. Befehle werden oft mit Parametern verwendet, die in Klammern () und durch Strichpunkt (;) voneinander getrennt übergeben werden. Beispiel:

```4d
COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
```

Einige Befehle sind an Collections oder Objekte gebunden. In diesem Fall werden sie Methoden genannt und mit der Objektnotation verwendet. Beispiel:

```4d
$c:=New collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

Über 4D Plug-Ins oder 4D Komponenten können Sie Ihre 4D Entwicklungsumgebung mit weiteren Befehlen ausbauen.

Die 4D User Community oder 3rd-Party Entwickler bieten auf dem Markt viele Plug-Ins für spezifische Bereiche an. Es gibt zum Beispiel das [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) auf macOS:

```4d
PDF REMOVE PAGE(path;page)
```

4D SVG ist ein Beispiel für eine Utility-Komponente, welche die Funktionsweise Ihrer Anwendung erweitert:

```4d
//drawing a picture
svgRef:=SVG_New
objectRef:=SVG_New_arc(svgRef;100;100;90;90;180)
```

4D SVG ist in 4D enthalten.

## Konstanten

4D bietet einen umfangreichen Satz vordefinierter Konstanten, deren Werte per Name zugänglich sind. Zum Beispiel ist `Read Mode` eine Konstante (Wert 2). Vordefinierte Konstanten erscheinen im Methodeneditor standardmäßig unterstrichen. Das sorgt für leichter lesbaren Code.

```4d
vRef:=Open document("PassFile";"TEXT";Read Mode) // open doc in read only mode
```

## Methods

4D bietet eine große Anzahl integrierter Methoden (oder Befehle), lässt Sie aber auch eigene **Projektmethoden** erstellen. Projektmethoden sind vom Entwickler definierte Methoden, die Befehle, Operatoren und andere Teile der Programmiersprache enthalten. Projektmethoden sind generische Methoden. Es gibt auch andere Methodenarten: Objektmethoden, Formularmethoden, Tabellenmethoden (Trigger) und Datenbankmethoden.

Eine Methode besteht aus Anweisungen; jede Anweisung ist eine Zeile in der Methode. Eine Anweisung führt eine Aktion aus, die einfach oder komplex sein kann.

Zum Beispiel ist die folgende Zeile eine Anweisung, die ein Dialogfenster zum Bestätigen anzeigt:

```4d
CONFIRM("Do you really want to close this account?";"Yes";"No")
```

Eine Methode enthält auch Abfragen und Schleifen, die den Ablauf der Ausführung steuern. 4D Methoden unterstützen die Abfragen `If...Else...End if` und `Case of...Else...End case` sowie die Schleifen `While...End while`, `Repeat...Until`, `For...End for` und `For each...End for each`:

Folgendes Beispiel durchläuft alle Zeichen des Textes vtSomeText:

```4d
For($vlChar;1;Length(vtSomeText))
 //Do something with the character if it is a TAB
 If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
 End if
End for
```

Eine Projektmethode kann eine andere Projektmethode mit oder ohne Parameter (Argumente) aufrufen. Parameter stehen in Klammern nach dem Methodennamen. Sie sind durch Strichpunkt (;) voneinander getrennt. The parameters are available within the called method as consecutively numbered local variables: $1, $2,…, $n. A method can return a single value in the $0 parameter. Eine Methode kann einen einzelnen Wert im Parameter $0 zurückgeben. Wenn Sie eine Methode aufrufen, geben Sie einfach ihren Namen ein:

```4d
$myText:="hello"
$myText:=Do_Something($myText) //Call the Do_Something method
ALERT($myText) //"HELLO"

  //Here the code of the method Do_Something
$0:=Uppercase($1)
```

## Datentypen

In der Programmiersprache werden die verschiedenen Arten von Daten zum Bearbeiten als Datentypen bezeichnet. Es gibt grundlegende Datentypen (String, numerisch, Datum, Zeit, Boolean, Bild, Zeiger, Arrays) und zusammengesetzte Datentypen (BLOBs, Objekte, Collections).

Beachten Sie, dass sich die Datentypen String und numerisch mehr als einem Datenfeldtyp zuweisen lassen. Werden Daten in ein Feld gesetzt, konvertiert die Sprache die Daten automatisch in den korrekten Typ für das Feld. So werden zum Beispiel bei einem Feld vom Typ Ganzzahl die Daten automatisch als numerisch behandelt. Das bedeutet, Sie müssen sich keine Gedanken beim Mischen ähnlicher Datenfeldtypen machen; den das verwaltet die Programmiersprache für Sie.

Es ist jedoch wichtig, dass Sie nicht unterschiedliche Datentypen miteinander mischen. So macht es keinen Sinn, "ABC" in einem Feld oder einer Variablen vom Typ Datum zu speichern. In den meisten Fällen ist 4D sehr tolerant und versucht, das was Sie tun, sinnvoll zu machen. Fügen Sie zum Beispiel einem Datum eine Zahl hinzu, nimmt 4D an, dass Sie dem Datum diese Anzahl Tage hinzufügen wollen. Versuchen Sie dagegen, einem Datum einen String hinzuzufügen, sagt Ihnen 4D, dass das nicht funktionieren kann.

In manchen Fällen müssen Sie Daten als einen Typ speichern und als anderen Typ verwenden. Die Programmiersprache enthält eine ganze Reihe von Befehlen, mit denen Sie einen Datentyp in einen anderen konvertieren können. Sie müssen zum Beispiel eine Artikelnummer erstellen, die mit einer Zahl beginnt und mit Zeichen wie "abc" endet. In diesem Fall schreiben Sie:

```4d
[Products]Part Number:=String(Number)+"abc"
```

Ist _Number_ 17, dann erhält _[Products]Part Number_ den String “17abc”.

Die komplette Übersicht der Datentypen finden Sie im Abschnitt [Datentypen](Concepts/data-types.md).

## Objekte und Collections

Sie können Objekte und Collections der 4D Programmiersprache mit der Objektnotation verwalten, um ihre Werte zu erhalten oder zu setzen. Beispiel:

```4d
employee.name:="Smith"
```

Sie können auch ein String in eckigen Klammern verwenden, zum Beispiel:

```4d
$vName:=employee["name"]
```

Da der Wert einer Objekteigenschaft ein Objekt oder eine Collection sein kann, akzeptiert Objektnotation eine Folge von Symbolen, um auf Untereigenschaften zuzugreifen, wie zum Beispiel:

```4d
$vAge:=employee.children[2].age
```

Sie müssen folgendes beachten: Ist der Wert der Objekteigenschaft ein Objekt mit einer eingebundenen Methode (eine Formel), müssen Sie an den Eigenschaftsnamen Klammern () anfügen, um die Methode auszuführen:

```
$f:=New object
$f.message:=New formula(ALERT("Hello world!"))
$f.message() //displays "Hello world!"
$f.message() //displays "Hello world!"
```

Um auf ein Element der Collection zuzugreifen, müssen Sie die Elementnummer in eckigen Klammern übergeben:

```4d
C_COLLECTION(myColl)
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  //access to 4th element of the collection
```

## Operatoren

In der Programmiersprache kommt es selten vor, dass Sie nur einen Datenteil wollen. Es ist eher so, dass Sie etwas für oder mit diesen Daten durchführen wollen. Dafür verwenden Sie Operatoren. Operatoren führen in der Regel mit 2 Teilen von Daten eine Operation aus, die ein neues Datenteil ergeben. Sie kennen bereits viele Operatoren. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3.

| Operator | Operation      | Beispiel       |
| -------- | -------------- | -------------- |
| +        | Addition       | 1 + 2 ergibt 3 |
| –        | Subtraktion    | 3 - 2 ergibt 1 |
| *        | Multiplikation | 2 * 3 ergibt 6 |
| /        | Division       | 6 / 2 ergibt 3 |

Numerische Operatoren sind ein Typ der verfügbaren Operatoren. 4D unterstützt viele verschiedene Datentypen, wie Zahlen, Text, Datum und Bilder. So gibt es auch Operatoren, um Operationen mit den verschiedenen Datentypen auszuführen.

Je nach Datentyp werden die gleichen Symbole oft für verschiedene Operationen verwendet. Zum Beispiel führt das Pluszeichen (+) je nach Datentyp unterschiedliche Operationen aus:

| Datentyp       | Operation      | Beispiel                                                                                        |
| -------------- | -------------- | ----------------------------------------------------------------------------------------------- |
| Zahl           | Addition       | 1 + 2 addiert die Zahlen und ergibt 3                                                           |
| String         | Zusammenfügung | "Hello " + "there" verbindet bzw. setzt die Strings zusammen und ergibt "Hello there"           |
| Datum und Zahl | Datumsaddition | !1989-01-01! + 20 addiert 20 Tage zum Datum 1. Januar 1989 und ergibt das Datum 21. Januar 1989 |

## Ausdrücke

Ausdrücke werden gesetzt und geben einen Wert zurück. Tatsächlich verwenden Sie in der 4D Programmiersprache andauernd Ausdrücke und betrachten sie eher als den Wert, den sie darstellen. Ausdrücke werden manchmal auch als Formeln bezeichnet.

Ausdrücke setzen sich aus fast allen anderen Teilen der Programmiersprache zusammen: Befehle, Operatoren, Variablen, Felder, Objekteigenschaften und Elemente von Collections. Mit Ausdrücken erstellen Sie Anweisungen (Code-Zeilen), die sie dann zum Erstellen von Methoden verwenden. Die Programmiersprache verwendet Ausdrücke überall, wo sie einen Teil von Daten braucht.

Ausdrücke stehen selten “allein”. Expressions rarely “stand alone.” There are several places in 4D where an expression can be used by itself. Das gilt für:

- Formulareditor (Formel anwenden, Suche mit Formel, Sortiere nach Formel)
- Befehl `EXECUTE FORMULA`
- Eigenschaftenliste, wo ein Ausdruck als Datenquelle für die meisten der Widgets dient
- Debugger, wo sich der Wert des Ausdrucks prüfen lässt
- Schnellberichteditor als Formel für eine Spalte

### Ausdruckstypen

Sie beziehen sich auf einen Ausdruck über den Datentyp, den er zurückgibt. Es gibt folgende Typen. Die folgende Übersicht zeigt Beispiele für die verschiedenen Ausdruckstypen.

| Ausdruck                 | Typ                | Beschreibung                                                                                                                                                                          |
| ------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| “Hello”                  | String             | Das Wort Hello ist eine String Konstante, angegeben in doppelten Anführungszeichen.                                                                                                   |
| “Hello ” + “there”       | String             | Die beiden Strings “Hello ” und “there” werden mit dem String Operator (+) zusammengefügt. Der String “Hello there” wird zurückgegeben.                                               |
| “Mr. ” + [People]Name    | String             | Zwei Strings werden zusammengefügt: Der String "Mr." und der aktuelle Wert den Datenfelds Name in der Tabelle People. Enthält das Feld “Smith”, gibt der Ausdruck “Mr. Smith” zurück. |
| Uppercase("smith")       | String             | Dieser Ausdruck verwendet den 4D Befehl `Uppercase`, um den String “smith” in Großbuchstaben umzuwandeln. Er gibt “SMITH” zurück.                                                     |
| 4                        | Zahl               | Dies ist die numerische Konstante 4.                                                                                                                                                  |
| 4 * 2                    | Zahl               | Die beiden Zahlen 4 und 2 werden mit dem Operator (*) multipliziert. Das ergibt die Zahl 8.                                                                                           |
| myButton                 | Zahl               | Dies ist eine Variable, die einer Schaltfläche zugeordnet ist. Sie gibt den aktuellen Wert der Schaltfläche zurück: 1 wenn sie angeklickt wurde, 0 wenn nicht.                        |
| !1997-01-25!             | Datum              | Dies ist eine Datumskonstante für das Datum 1/25/97 (January 25, 1997).                                                                                                               |
| Current date+ 30         | Datum              | Dies ist ein Datumsausdruck mit dem Befehl `Current date`, um das heutige Datum zu erhalten. Er fügt zum heutigen Datum 30 Tage hinzu und gibt das neue Datum zurück.                 |
| ?8:05:30?                | Zeit               | Dies ist eine Zeitkonstante, die 8 Stunden, 5 Minuten und 20 Sekunden darstellt.                                                                                                      |
| ?2:03:04? + ?1:02:03?    | Zeit               | Dieser Ausdruck fügt zwei Zeiten zusammen und gibt die Zeit 3:05:07 zurück.                                                                                                           |
| Wahr                     | Boolean            | Dieser Befehl gibt den Boolean Wert TRUE zurück.                                                                                                                                      |
| 10 # 20                  | Boolean            | Dies ist ein logischer Vergleich zwischen zwei Zahlen. Das Nummernzeichen (#) bedeutet "ist ungleich zu". Da 10 "ungleich zu" 20 ist, gibt der Ausdruck TRUE zurück.                  |
| “ABC” = “XYZ”            | Boolean            | Dies ist ein logischer Vergleich zwischen zwei Strings. Sie sind ungleich, also gibt der Ausdruck FALSE zurück.                                                                       |
| My Picture + 50          | Bild               | Dieser Ausdruck nimmt das Bild in My Picture, verschiebt es um 50 Pixel nach rechts und gibt das verschobene Bild zurück.                                                             |
| ->[People]Name           | Zeiger             | Dieser Ausdruck gibt einen Zeiger auf das Feld [People]Name zurück.                                                                                                                   |
| Table (1)                | Zeiger             | Dies ist ein Befehl, der einen Zeiger auf die erste Tabelle zurückgibt.                                                                                                               |
| JSON Parse (MyString)    | Objekt             | Dies ist ein Befehl, der MyString als ein Objekt zurückgibt (bei geeignetem Format)                                                                                                   |
| JSON Parse (MyJSONArray) | Collection         | Dies ist ein Befehl, der MyJSONArray als eine Collection zurückgibt (bei geeignetem Format)                                                                                           |
| Form.pageNumber          | Objekteigenschaft  | Eine Objekteigenschaft ist ein Ausdruck, der jeder unterstützte Typ sein kann                                                                                                         |
| Col[5]                   | Collection Element | Ein Collection Element ist ein Ausdruck, der jeder unterstützte Typ sein kann                                                                                                         |
| $entitySel[0]            | Entity             | Ein Element einer ORDA Entity-Selection ist ein Ausdruck vom Typ Entity. Diese Art Ausdruck ist **nicht-zuweisbar**                                                                   |

### Zuweisbare und nicht-zuweisbare Ausdrücke

Ein Ausdruck kann einfach eine wortgetreue Konstante sein, wie die Zahl 4 oder der String "Hello", oder eine Variable wie `$myButton`. Er kann auch Operatoren verwenden. Zum Beispiel ist 4 + 2 ein Ausdruck, der den Operator (+) zum Addieren von zwei Zahlen verwendet und das Ergebnis 6 zurückgibt. Diese Ausdrücke sind in allen Fällen **nicht-zuweisbar**, d.h. Sie können ihnen keinen Wert zuweisen. In 4D können Ausdrücke **zuweisbar** sein. An expression is assignable when it can be used on the left side of an assignation. Beispiel:

```4d  
//$myVar variable is assignable, you can write:  
$myVar:="Hello" //assign "Hello" to myVar
//Form.pageNumber is assignable, you can write:  
Form.pageNumber:=10 //assign 10 to Form.pageNumber
//Form.pageTotal-Form.pageNumber is not assignable:
Form.pageTotal- Form.pageNumber:=10 //error, non-assignable
```

Im allgemeinen sind Ausdrücke mit Operator nicht-zuweisbar. Beispiel: `[Person]FirstName+" "+[Person]LastName` ist nicht zuweisbar.

## Zeiger

Die 4D Programmiersprache bietet eine fortschrittliche Implementierung von Zeigern zum Schreiben von leistungsfähigem und modularem Code. Mit Zeigern können Sie auf Tabellen, Datenfelder, Variablen, Arrays und Array Elemente verweisen.

Ein Zeiger wird mit dem Symbol "->" vor dem Elementnamen erstellt und durch das Symbol "->" nach dem Elementnamen wieder aufgelöst (dereferenziert).

```4d
MyVar:="Hello"
MyPointer:=->MyVar
ALERT(MyPointer->)
```

## Kommentare

Kommentare sind inaktive Zeilen von Code. Diese Zeilen werden nicht von der 4D Programmiersprache interpretiert und nicht ausgeführt, wenn der Code aufgerufen wird.

Es gibt zwei Varianten zum Erstellen von Kommentaren:

- `//` für einzeilige Kommentare
- `/*...*/` für eingebundene oder mehrzeilige Kommentare.

Beide Varianten lassen sich gleichzeitig verwenden.

#### Einzeilige Kommentare (//)

Fügen Sie `//` am Beginn einer Zeile oder nach einer Anweisung hinzu. Beispiel:

```4d
//This is a comment
For($vCounter;1;100) //Starting loop
  //comment
  //comment
  //comment
 End for
```

#### Eingebundene oder mehrzeilige Kommentare (/**/)

Umklammern Sie Inhalt mit den Zeichen `/*` ... `*/`, um eingebundene Kommentare oder mehrzeilige Kommentarblöcke zu erstellen. Beide Arten beginnen mit ` /*` und enden mit `*/`.

- **Eingebundene Kommentare** können überall im Code eingefügt werden. Beispiel:

```4d
For /* inline comment */ ($vCounter;1;100)
 ...
End for
End for
```

- **Mehrzeilige Kommentarblöcke** können eine unbegrenzte Anzahl Zeilen haben. Sie können verschachtelt sein und jeder Unterblock lässt sich auch auf- oder zuklappen. Beispiel:

```4d
For ($vCounter;1;100)
/*
comments  
 /*
 other comments
 */
*/
...
End for
End for
```
