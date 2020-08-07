---
id: variables
title: Variablen
---

Daten in 4D werden auf zwei ganz unterschiedliche Weisen gespeichert. **Fields** store data permanently on disk; **variables** store data temporarily in memory.

Beim Einrichten Ihrer 4D Datenbank legen Sie die Namen und Typen Ihrer Datenfelder fest. Variablen sind ganz ähnlich—Sie geben diesen auch Namen und verschiedene Typen (siehe unter [Datentypen](Concepts/data-types.md)).

Ist die Variable angelegt, können Sie diese überall in Ihrer Anwendung verwenden, wo sie benötigt wird. Sie wollen z. B. eine Textvariable in einem Feld vom gleichen Typ speichern:

```4d
 [MyTable]MyField:=MyText
```


Variablen sind Objekte der Programmiersprache; Sie können Variablen erstellen und verwenden, die nie auf dem Bildschirm erscheinen. In Ihren Formularen können Sie Variablen (außer Zeiger und BLOB) auf dem Bildschirm anzeigen, Daten in sie eingeben und sie in Berichten drucken. Auf diese Weise verhalten sich eingebbare und nicht-eingebbare Variablenbereiche wie Felder und haben dieselben integrierten Kontrollen beim Erstellen. Variablen in Formularen können auch Schaltflächen, Listboxen, rollbare Bereiche, Bildschaltflächen, usw. steuern oder Ergebnisse von Berechnungen anzeigen, die nicht gesichert werden müssen.

## Variablen erstellen

Sie erstellen Variablen, indem Sie diese deklarieren. Die 4D Programmiersprache bietet zwei Wege zum Deklarieren von Variablen:

- Über das Schlüsselwort `var` (empfohlen, besonders wenn Ihr Code Objekte und Klassen verwendet),
- Über Befehle der 4D Programmiersprache in den Kapiteln "Compiler" oder "Arrays" (überholt, nur in der klassischen Programmiersprache).

**Note:** Although it is usually not recommended, you can create basic variables simply by using them; you do not necessarily need to formally define them. Beispiel: Für eine Variable, die das aktuelle Datum plus 30 Tage angibt, können Sie schreiben:

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

`varName` is the variable name, it must comply with the [4D rules](Concepts/identifiers.md) about identifiers.   
This syntax only supports [local and process variables](#local-process-and-interprocess-variables) declarations, thus excluding [interprocess variables](#interprocess-variables) and [arrays](Concepts/arrays.md).

`varTyp` kann folgendes sein:

- [Datentyp](Concepts/data-types.md), dann enthält die Variable einen Wert vom deklarierten Typ
- [Referenz auf eine Klasse](Concepts/classes.md) (4D Klasse oder Benutzerklasse), dann enthält die Variable die Referenz auf ein Objekt der definierten Klasse.

If `varType` is omitted, a variable of the **variant** type is created.

Nachfolgende Liste zeigt alle unterstützten Werte für `varTyp`:

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      varTyp
    </th>
    
    <th>
      Contents
    </th>
  </tr>
  
  <tr>
    <td>
      Text
    </td>
    
    <td>
      Textwert
    </td>
  </tr>
  
  <tr>
    <td>
      Datum
    </td>
    
    <td>
      Datumswert
    </td>
  </tr>
  
  <tr>
    <td>
      Zeit
    </td>
    
    <td>
      Zeitwert
    </td>
  </tr>
  
  <tr>
    <td>
      Boolean
    </td>
    
    <td>
      Boolean Wert
    </td>
  </tr>
  
  <tr>
    <td>
      Ganzzahl
    </td>
    
    <td>
      Wert Lange Ganzzahl
    </td>
  </tr>
  
  <tr>
    <td>
      Zahl
    </td>
    
    <td>
      Zahlenwert
    </td>
  </tr>
  
  <tr>
    <td>
      Zeiger
    </td>
    
    <td>
      Zeigerwert
    </td>
  </tr>
  
  <tr>
    <td>
      Bild
    </td>
    
    <td>
      Bildwert
    </td>
  </tr>
  
  <tr>
    <td>
      Blob
    </td>
    
    <td>
      BLOB Wert
    </td>
  </tr>
  
  <tr>
    <td>
      Collection
    </td>
    
    <td>
      Collection Wert
    </td>
  </tr>
  
  <tr>
    <td>
      Variant
    </td>
    
    <td>
      Variant Wert
    </td>
  </tr>
  
  <tr>
    <td>
      Objekt
    </td>
    
    <td>
      Objekt mit Standardklasse (4D.Objekt)
    </td>
  </tr>
  
  <tr>
    <td>
      4D.\<className>
    </td>
    
    <td>
      Objekt des 4D Klassennamens
    </td>
  </tr>
  
  <tr>
    <td>
      cs.\<className>
    </td>
    
    <td>
      Objekt des Benutzerklassennamens
    </td>
  </tr>
</table>

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

> **Compatibility Note:** This feature is deprecated as of 4D v18 R3. Es wird empfohlen, das Schlüsselwort [var](#using-the-var-keyword) zu verwenden.

Über Direktiven von Compiler-Befehlen können Sie Grundtypen von Variablen deklarieren.

Wollen Sie z. B. eine Textvariable definieren, schreiben Sie:

```4d
 C_TEXT(myText)
```

Hier sehen Sie einige grundlegende Variablendeklarationen:

```4d
 C_BLOB(vxMyBlob) // Die Prozessvariable vxMyBlob ist als eine Variable vom Typ BLOB deklariert
 C_DATE($vdCurDate) // Die lokale Variable $vdCurDate ist als eine Variable vom Typ Datum deklariert
 C_LONGINT(vg1;vg2;vg3) // Die 3 Prozessvariablen vg1, vg2 und vg3 sind als Variablen vom Type Lange Ganzzahl deklariert  
 C_OBJECT($vObj) // Die lokale Variable $vObj ist als eine Variable vom Typ Objekt deklariert
 C_COLLECTION($vCol) // Die lokale Variable $vCol ist als eine Variable vom Typ Collection deklariert
 ARRAY LONGINT(alAnArray;10) //Die Prozessvariable alAnArray ist als ein Array vom Typ Lange Ganzzahl mit 10 Elementen deklariert
```

**Note:** Arrays are a particular type of variables. Ein Array ist eine sortierte Reihe von Variablen desselben Typs. Weitere Informationen dazu finden Sie unter [Arrays](Concepts/arrays.md).


## Daten zuweisen

Daten lassen sich in Variablen und Arrays setzen und daraus kopieren. Putting data into a variable is called **assigning the data to the variable** and is done with the assignment operator (:=). Der Zuweisungsoperator wird auch verwendet, um Feldern Daten zuzuweisen.

Der Zuweisungsoperator ist wesentlich, um eine Variable zu erstellen und Daten in sie einzusetzen. Sie schreiben den Namen der gewünschten Variablen auf die linke Seite des Zuweisungsoperators. Beispiel:

```4d
MyNumber:=3
```

creates the variable _MyNumber_ and puts the number 3 into it. Existiert MyNumber bereits, wird einfach die Zahl 3 eingesetzt.

> In der Regel wird davon abgeraten, Variablen [ohne Deklarieren eines Typs](#creating-variables) zu erstellen.

Natürlich wären Variablen nicht sehr hilfreich, wenn Sie keine Daten daraus erhalten könnten. Sie verwenden wieder den Zuweisungsoperator. If you need to put the value of MyNumber in a field called [Products]Size, you would write _MyNumber_ on the right side of the assignment operator:

```4d
[Products]Size:=MyNumber
```

In this case, _[Products]Size_ would be equal to 3. Dieses Beispiel ist ganz einfach, aber es zeigt, wie Daten über Programmierung von einer Stelle an eine andere übertragen werden.

Daten an Elemente eines Array weisen Sie über geschweifte Klammern zu, also {...}:

```4d
atNames{1}:="Richard"
```

## Lokale, Prozess- und Interprozessvariablen

You can create three types of variables: **local**, **process**, and **interprocess**. Der Unterschied sind die jeweilige Reichweite oder die Objekte, für die sie verfügbar sind.

### Lokale Variable

Wie schon der Name sagt, gilt sie lokal für eine Methode, d. h. sie ist nur in der Methode verfügbar, wo sie erstellt wurde. Außerhalb dieser Methode ist sie nicht zugänglich. Being local to a method is formally referred to as being “local in scope.” Local variables are used to restrict a variable so that it works only within the method.

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

**Note:** Parameters $1, $2... passed to methods are local variables. Weitere Informationen dazu finden Sie unter [Parameter](Concepts/parameters.md).

### Prozessvariablen

Eine Prozessvariable ist nur innerhalb eines Prozesses verfügbar. Sie ist in der Prozessmethode oder einer anderen Methode innerhalb des Prozesses verfügbar.

Der Name der Prozessvariable hat kein vorangestelltes Zeichen. Der Name der Prozessvariablen kann max. 31 Zeichen lang sein.

In interpreted mode, variables are maintained dynamically; they are created and erased from memory “on the fly.” In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. So ist die Variable myVar eine Variable im Prozess P_1 und eine andere im Prozess P_2.

Ein Prozess kann über die Befehle `GET PROCESS VARIABLE` und `SET PROCESS VARIABLE` Prozessvariablen aus einem anderen Prozess "erspähen und anstoßen". Es ist eine gute Programmierpraxis, diese Befehle nur für die Situation anzuwenden, für die sie in 4D hinzugefügt wurden:

- Kommunikation auf Interprozessebene an spezifischen Stellen in Ihrem Code
- Verwalten von Drag-and-Drop auf Interprozessebene
- Im Client-/Server-Betrieb zur Kommunikation zwischen Prozessen auf Client-Rechnern und den Serverprozeduren auf Server Rechnern

For more information, see the chapter **Processes** and the description of these commands.

### Interprozessvariablen

Interprozessvariablen sind in der gesamten Anwendung verfügbar und werden über alle kooperativen Prozesse gemeinsam genutzt. Sie dienen hauptsächlich dazu, Information in verschiedenen Prozessen gemeinsam zu nutzen.

> Die Verwendung von Interprozessvariablen wird nicht empfohlen, da sie in preemptive Prozessen nicht verfügbar sind und u.U. die Verwaltung des Code erschweren können.

Der Name einer Interprozessvariablen beginnt mit den Symbolen <> — ein Zeichen “kleiner als” gefolgt von einem Zeichen “größer als” — und kann bis zu 31 zusätzliche Zeichen enthalten.

Im Client-/Server-Betrieb kann jeder Rechner (Client oder Server) dieselbe Definition von Interprozessvariablen gemeinsam nutzen, jedoch hat jeder Rechner pro Variable eine andere Instanz.


