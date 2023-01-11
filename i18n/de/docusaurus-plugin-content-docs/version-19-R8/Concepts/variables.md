---
id: variables
title: Variablen
---

Daten in 4D werden auf zwei ganz unterschiedliche Weisen gespeichert. **Felder** speichern Daten permanent auf der Festplatte, **Variablen** speichern Daten temporär im Speicher.

Beim Einrichten Ihrer 4D Datenbank legen Sie die Namen und Typen Ihrer Datenfelder fest. Variablen sind ganz ähnlich—Sie geben diesen auch Namen und verschiedene Typen (siehe unter [Datentypen](Concepts/data-types.md)).

Ist die Variable angelegt, können Sie diese überall in Ihrer Anwendung verwenden, wo sie benötigt wird. Sie wollen z. B. eine Textvariable in einem Feld vom gleichen Typ speichern:

```4d
 [MyTable]MyField:=MyText
```

Variablen sind Objekte der Programmiersprache; Sie können Variablen erstellen und verwenden, die nie auf dem Bildschirm erscheinen. In Ihren Formularen können Sie Variablen (außer Zeiger und BLOB) auf dem Bildschirm anzeigen, Daten in sie eingeben und sie in Berichten drucken. Auf diese Weise verhalten sich eingebbare und nicht-eingebbare Variablenbereiche wie Felder und haben dieselben integrierten Kontrollen beim Erstellen. Variablen in Formularen können auch Schaltflächen, Listboxen, rollbare Bereiche, Bildschaltflächen, usw. steuern oder Ergebnisse von Berechnungen anzeigen, die nicht gesichert werden müssen.

## Variablen erstellen

Sie erstellen Variablen, indem Sie diese deklarieren. Die 4D Programmiersprache bietet zwei Wege zum Deklarieren von Variablen:

- Über das Schlüsselwort `var` (empfohlen, besonders wenn Ihr Code Objekte und Klassen verwendet),
- über Befehle der 4D Programmiersprache in den Kapiteln "Compiler" oder "Arrays" (nur in der klassischen Programmiersprache).

**Hinweis:** Auch wenn wir davon abraten, können Sie Variablen einfach durch ihre Verwendung erstellen; Sie müssen sie nicht formell mit Typ definieren. Beispiel: Für eine Variable, die das aktuelle Datum plus 30 Tage angibt, können Sie schreiben:

```4d
 MyDate:=Current date+30 //MyDate is created  
 // 4D guesses it is of date type  
 // and assigns the current date plus 30 days
```

### Das Schlüsselwort `var` verwenden

Es wird empfohlen, Variablen mit dem Schlüsselwort `var` zu deklarieren, da sich mit dieser Syntax Objektvariablen mit Klassen verbinden lassen. Diese Syntax verbessert die Vorschläge und type-ahead Features im Code-Editor.

Für eine Variable von beliebigem Typ verwenden Sie folgende Syntax:

`var <varName>{; <varName2>;...}{ : <varType>}`

Beispiel:

```4d
var $myText : Text  //a text variable
var myDate1; myDate2 : Date  //several date variables
var $myFile : 4D.File  //a file class object variable
var $myVar //a variant variable
```

`varName` is the variable name, it must comply with the [4D rules](Concepts/identifiers.md) about identifiers. This syntax only supports [local and process variables](#local-process-and-interprocess-variables) declarations, thus excluding [interprocess variables](#interprocess-variables) and [arrays](Concepts/arrays.md).

`varTyp` kann folgendes sein:

- [Datentyp](Concepts/data-types.md), dann enthält die Variable einen Wert vom deklarierten Typ
- [Referenz auf eine Klasse](Concepts/classes.md) (4D Klasse oder Benutzerklasse), dann enthält die Variable die Referenz auf ein Objekt der definierten Klasse.

Ist `varTyp` nicht übergeben, wird eine Variable vom Typ **variant** erstellt.

Nachfolgende Liste zeigt alle unterstützten Werte für `varTyp`:

| varTyp                 | Inhalt                                |
| ---------------------- | ------------------------------------- |
| `Text`                 | Textwert                              |
| `Datum`                | Datumswert                            |
| `Zeit`                 | Zeitwert                              |
| `Boolean`              | Boolean Wert                          |
| `Ganzzahl`             | Wert Lange Ganzzahl                   |
| `Zahl`                 | Zahlenwert                            |
| `Zeiger`               | Zeigerwert                            |
| `Bild`                 | Bildwert                              |
| `Blob`                 | Scalar Blob value                     |
| `Collection`           | Collection Wert                       |
| `Variant`              | Variant Wert                          |
| `Objekt`               | Objekt mit Standardklasse (4D.Objekt) |
| `4D.<className>` | Objekt des 4D Klassennamens           |
| `cs.<className>` | Objekt des Benutzerklassennamens      |

#### Beispiele

- Einfache lokale Variable bzw. Prozessvariable deklarieren:

```4d
var $myText; myText; $vt : Text
var myVar //variant

var $o : Object    
//equivalent to:  
var $o : 4D.Object
//also equivalent to C_OBJECT($o)
```

- Objektvariablen der 4D Klasse deklarieren:

```4d
var $myFolder : 4D.Folder
var $myFile : 4D.File
```

- Objektvariablen der Benutzerklasse deklarieren:

```4d
var $myClass : cs.MyClass
var $dataclass : cs.Employee
var $entity : cs.EmployeeEntity
```

### Eine C_Direktive verwenden

> **Hinweis zur Kompatibilität:**Dieses Feature wird zum Deklarieren von Variablen in Methoden nicht empfohlen. Es wird empfohlen, das Schlüsselwort [var](#das-schlüsselwort-var-verwenden) zu verwenden.

Über Direktiven von Compiler-Befehlen können Sie Grundtypen von Variablen deklarieren.

Wollen Sie z. B. eine Textvariable definieren, schreiben Sie:

```4d
 C_TEXT(myText)
```

Hier sehen Sie einige grundlegende Variablendeklarationen:

```4d
 C_BLOB(vxMyBlob) // Die Prozessvariable vxMyBlob ist deklariert als eine Variable vom Typ BLOB
 C_DATE($vdCurDate) // Die lokale Variable $vdCurDate ist deklariert als eine Variable vom Typ Datum
 C_LONGINT(vg1;vg2;vg3) // Die 3 Prozessvariablen vg1, vg2 und vg3 sind deklariert als Variablen vom Typ Lange Ganzzahl
 C_OBJECT($vObj) // Die lokale Variable $vObj ist deklariert als eine Variable vom Typ Objekt
 C_COLLECTION($vCol) // Die lokale Variable $vCol ist deklariert als eine Variable vom Typ Collection
```

**Hinweis:** Arrays sind ein spezieller Variablentyp (ein Array ist eine sortierte Reihe von Variablen vom gleichen Typ). Arrays werden mit spezifischen Befehlen deklariert, wie z.B. `ARRAY LONGINT(alAnArray;10)`. Weitere Informationen dazu finden Sie unter [Arrays](Concepts/arrays.md).

## Daten zuweisen

Daten lassen sich in Variablen und Arrays setzen und daraus kopieren. Daten in eine Variable setzen heißt, **der Variablen die Daten zuweisen**. Das geschieht über den Zuweisungsoperator (:=). Der Zuweisungsoperator wird auch verwendet, um Feldern Daten zuzuweisen.

Der Zuweisungsoperator ist wesentlich, um eine Variable zu erstellen und Daten in sie einzusetzen. Sie schreiben den Namen der gewünschten Variablen auf die linke Seite des Zuweisungsoperators. Beispiel:

```4d
MyNumber:=3
```

erstellt die Variable _ MyNumber_ und setzt die Zahl 3 ein. Existiert MyNumber bereits, wird einfach die Zahl 3 eingesetzt.

> In der Regel wird davon abgeraten, Variablen [ohne Deklarieren eines Typs](#variablen-erstellen) zu erstellen.

Natürlich wären Variablen nicht sehr hilfreich, wenn Sie keine Daten daraus erhalten könnten. Sie verwenden wieder den Zuweisungsoperator. Wollen Sie den Wert von MyNumber z.B. in ein Feld mit Namen [Products]Size setzen, schreiben Sie _ MyNumber_ auf die rechte Seite des Zuweisungsoperators:

```4d
[Products]Size:=MyNumber
```

In diesem Fall ist _[Products]Size_ gleich 3. Dieses Beispiel ist ganz einfach, aber es zeigt, wie Daten über Programmierung von einer Stelle an eine andere übertragen werden.

Daten an Elemente eines Array weisen Sie über geschweifte Klammern zu, also {...}:

```4d
atNames{1}:="Richard"
```

## Lokale, Prozess- und Interprozessvariablen

Sie können drei Variablentypen erstellen: **lokal**, **Prozess** und **Interprozess**. Der Unterschied sind die jeweilige Reichweite oder die Objekte, für die sie verfügbar sind.

### Lokale Variable

Wie schon der Name sagt, gilt sie lokal für eine Methode, d. h. sie ist nur in der Methode verfügbar, wo sie erstellt wurde. Außerhalb dieser Methode ist sie nicht zugänglich. Lokal zu einer Methode bedeutet formell "lokal in Reichweite". Being local to a method is formally referred to as being “local in scope.” Local variables are used to restrict a variable so that it works only within the method.

Sie verwenden eine lokale Variable, um:

- Namenskonflikte mit anderen Variablen zu vermeiden
- Daten temporär zu verwenden
- Die Anzahl der Prozessvariablen zu verringern

Der Name einer lokalen Variable startet immer mit dem Dollarzeichen ($) und kann bis zu 31 zusätzliche Zeichen enthalten. Geben Sie einen längeren Namen ein, kürzt 4D ihn auf die passende Länge.

In einer Anwendung mit vielen Methoden und Variablen kommt es oft vor, dass Sie eine Variable nur in der Methode benötigen, in der Sie arbeiten. Sie können eine lokale Variable in der Methode anlegen bzw. verwenden und müssen sich keine Gedanken machen, ob Sie den gleichen Variablennamen bereits irgendwo anders verwendet haben.

Häufig benötigt eine Anwendung nur eine kurze Info vom Benutzer. Dafür gibt es den Befehl `Request`. Er zeigt ein Dialogfenster mit einer Meldung, die den Benutzer zu einer Antwort auffordert. Gibt der Benutzer die Antwort ein, gibt der Befehl diese Angaben zurück. In der Regel müssen Sie diese Angaben nicht sehr lange in Ihren Methoden halten. Dies ist ein typischer Anwendungsbereich für eine lokale Variable. Hier ein Beispiel:

```4d
 $vsID:=Request("Please enter your ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

Diese Methode fordert den Benutzer auf, eine ID einzugeben. Sie setzt die Antwort in eine lokale Variable $vsID und sucht dann nach der ID, die der Benutzer eingegeben hat. Ist die Methode abgeschlossen, wird die lokale Variable $vsID aus dem Speicher entfernt. Das ist gut so, denn die Variable wird nur einmal und nur in dieser Methode benötigt.

**Hinweis:** Die in einer Methode übergebenen Parameter $1, $2... sind lokale Variablen. Weitere Informationen dazu finden Sie unter [Parameter](Concepts/parameters.md).

### Prozessvariablen

Eine Prozessvariable ist nur innerhalb eines Prozesses verfügbar. Sie ist in der Prozessmethode oder einer anderen Methode innerhalb des Prozesses verfügbar.

Der Name der Prozessvariable hat kein vorangestelltes Zeichen. Der Name der Prozessvariablen kann max. 31 Zeichen lang sein.

Im interpretierten Modus werden Variablen dynamisch verwaltet; sie werden erstellt und “on the fly” aus dem Speicher entfernt. In interpreted mode, variables are maintained dynamically; they are created and erased from memory “on the fly.” In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. So ist die Variable myVar eine Variable im Prozess P_1 und eine andere im Prozess P_2.

Ein Prozess kann über die Befehle `GET PROCESS VARIABLE` und `SET PROCESS VARIABLE` Prozessvariablen aus einem anderen Prozess "erspähen und anstoßen". Es ist eine gute Programmierpraxis, diese Befehle nur für die Situation anzuwenden, für die sie in 4D hinzugefügt wurden:

- Kommunikation auf Interprozessebene an spezifischen Stellen in Ihrem Code
- Verwalten von Drag-and-Drop auf Interprozessebene
- Im Client-/Server-Betrieb zur Kommunikation zwischen Prozessen auf Client-Rechnern und den Serverprozeduren auf Server Rechnern

Weitere Informationen dazu finden Sie im Kapitel **Prozesse** und in der Beschreibung dieser Befehle.

### Interprozessvariablen

Interprozessvariablen sind im gesamten Projekt verfügbar und werden über alle kooperativen Prozesse gemeinsam genutzt. Sie dienen hauptsächlich dazu, Information in verschiedenen Prozessen gemeinsam zu nutzen.

> Die Verwendung von Interprozessvariablen wird nicht empfohlen, da sie in preemptive Prozessen nicht verfügbar sind und u.U. die Verwaltung des Code erschweren können.

The name of an interprocess variable always begins with the symbols `<>` — a “less than” sign followed by a “greater than” sign— followed by 31 characters.

Im Client-/Server-Betrieb kann jeder Rechner (Client oder Server) dieselbe Definition von Interprozessvariablen gemeinsam nutzen, jedoch hat jeder Rechner pro Variable eine andere Instanz.
