---
id: control-flow
title: Control flow
---

Regardless of the simplicity or complexity of a method or function, you will always use one or more of three types of programming structures. Diese Strukturen steuern den Ablauf, d. h. wie und in welcher Reihenfolge Anweisungen in einer Methode ausgeführt werden. Es gibt drei Strukturarten:

- **Sequential**: a sequential structure is a simple, linear structure. A sequence is a series of statements that 4D executes one after the other, from first to last. A one-line routine, frequently used for object methods, is the simplest case of a sequential structure. For example: `[People]lastName:=Uppercase([People]lastName)`
- **Branching**: A branching structure allows methods to test a condition and take alternative paths, depending on the result. The condition is a Boolean expression, an expression that evaluates TRUE or FALSE. One branching structure is the [`If...Else...End if`](#ifelseend-if) structure, which directs program flow along one of two paths. The other branching structure is the [`Case of...Else...End case`](#case-ofelseend-case) structure, which directs program flow to one of many paths.
- **Looping**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. To deal with this need, the 4D language provides the following looping structures:

    - [`While...End while`](#whileend-while)
    - [`Repeat...Until`](#repeatuntil)
    - [`For...End for`](#forend-for)
    - [`For each...End for each`](#for-eachend-for-each)

The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Beide Möglichkeiten lassen sich für alle Arten von Schleifen verwenden. Jedoch eignen sich `While-` und `Repeat-`Schleifen besser für das Durchlaufen, bis eine Bedingung gefunden wird und `For-`Schleifen besser für den zahlenmäßig begrenzten Durchlauf. Mit `For each...End for each` können Sie beide Arten mischen und damit Objekte und Collections durchlaufen.

**Hinweis:** 4D ermöglicht, Programmierstrukturen bis zu einer Tiefe von 512 Ebenen einzubinden.



## If...Else...End if

Die formale Syntax der Abfragefolge `If...Else...End if` lautet:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
    statement(s)
 End if
```

Beachten Sie, dass der Teil `Else` optional ist; Sie können schreiben:
```4d
 If(Boolean_Expression)
    statement(s)
 End if
```

Mit der Struktur `If...Else...End if` kann Ihre Methode zwischen zwei Aktionen wählen, je nachdem, ob die Abfrage (ein Boolean Ausdruck) TRUE oder FALSE ist. Ist der Boolean Ausdruck TRUE, werden die unmittelbar darauffolgenden Anweisungen ausgeführt. Ist der Boolean Ausdruck FALSE, werden die auf Else folgenden Anweisungen ausgeführt. Die Anweisung `Else` ist optional; ohne Else fährt die Ausführung mit der ersten Anweisung (falls vorhanden) fort, die nach `End if` kommt.

Beachten Sie, dass der Boolean Ausdruck immer voll gewertet wird. Siehe hierzu folgenden Test:

```4d
 If(MethodA & MethodB)
    ...
 End if
 End if
```

The expression is TRUE only if both methods are TRUE. Jedoch, selbst wenn _MethodA_ FALSE zurückgibt, bewertet 4D weiter _MethodB_, was unnötig Zeit verbraucht. In diesem Fall ist folgende Struktur besser geeignet:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

Das Ergebnis ist gleich, und _MethodB_ wird nur bei Bedarf bewertet.

> **Note:** The [ternary operator](../dt_boolean.md#ternary-operator) allows writing one-line conditional expressions and can replace a full sequence of [If…Else](../cf_branching.md#ifelseend-if) statements.

#### Beispiel

```4d
  // Ask the user to enter a name
 $Find:=Request(Type a name)
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("You did not enter a name.")
 End if
 End if 
```

**Tipp:** In spezifischen Fällen können Sie auch Abfragen ohne Befehlsfolge einrichten. Wenn Sie einen Algorithmus oder eine spezifische Anwendung entwickeln, können Sie auch schreiben:

```4d
 If(Boolean_Expression)
 Else
    statement(s)
 End if
```
oder:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
 End if
```

## Case of...Else...End case

Die formale Syntax der Abfragefolge `Case of...Else...End case` lautet:
```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .

    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

Beachten Sie, dass der Teil `Else` optional ist; Sie können schreiben:
```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .

    :(Boolean_Expression)
       statement(s)
 End case
```
Wie bei der Struktur `If...Else...End if` kann Ihre Methode auch mit der Struktur `Case of...Else...End case` zwischen alternativen Aktionen wählen. Im Gegensatz zur Struktur `If...Else...End` kann die Struktur `Case of...Else...End case` eine vernünftige unbegrenzte Anzahl von Boolean Ausdrücken testen und bei einer wahren Bedingung eine Aktion ausführen.

Vor jedem Boolean Ausdruck steht ein Doppelpunkt (`:`). Die Kombination aus Doppelpunkt und Boolean Ausdruck kennzeichnet eine Bedingung. Zum Beispiel ist folgende Zeile eine Bedingung:

```4d
:(bValidate=1)
```

Nur die Anweisungsfolge, die auf die erste wahre Bedingung TRUE folgt (und bis zur nächsten wahren Bedingung), wird ausgeführt. Ist keine der Bedingungen wahr (TRUE), wird keine Anweisungsfolge ausgeführt (wenn kein Teil `Else` enthalten ist).

Sie können nach der letzten Befehlsfolge eine Else Anweisung integrieren. Sind dann alle Bedingungen falsch (FALSE), wird die Anweisungsfolge nach `Else` ausgeführt.

#### Beispiel

Dieses Beispiel prüft eine numerische Variable und zeigt eine Warnung mit einem Wort an:

```4d
 Case of
    :(vResult=1) //Test if the number is 1
       ALERT("One.") Case of
    :(vResult=1) //Test if the number is 1
       ALERT("One.") //If it is 1, display an alert
    :(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    :(vResult=3) //Test if the number is 3
       ALERT("Three.") //If it is 3, display an alert
    Else //If it is not 1, 2, or 3, display an alert
       ALERT("It was not one, two, or three.")
 End case //If it is 2, display an alert
    :(vResult=3) //Test if the number is 3
       ALERT("Three.") //If it is 3, display an alert
    Else //If it is not 1, 2, or 3, display an alert
       ALERT("It was not one, two, or three.")
 End case
```

Zum Vergleich folgt hier dieselbe Methode mit der Abfrage `If...Else...End if`:

```4d
 If(vResult=1) //Test if the number is 1
    ALERT("One.") If(vResult=1) //Test if the number is 1
    ALERT("One.") //If it is 1, display an alert
 Else
    If(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    Else
       If(vResult=3) //Test if the number is 3
          ALERT("Three.") //If it is 3, display an alert
       Else //If it is not 1, 2, or 3, display an alert
          ALERT("It was not one, two, or three.")
       End if
    End if
 End if //If it is 2, display an alert
    Else
       If(vResult=3) //Test if the number is 3
          ALERT("Three.") //If it is 3, display an alert
       Else //If it is not 1, 2, or 3, display an alert
          ALERT("It was not one, two, or three.")
       If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

Beachten Sie, dass mit einer Anweisung `Case of...Else...End case` nur die erste Bedingung TRUE ausgeführt wird. Selbst wenn zwei oder mehr Bedingungen wahr sind, wird nur die Anweisung ausgeführt, die auf die erste Bedingung TRUE folgt.

Bei hierarchischen Tests sollten Sie sicherstellen, dass die Anweisungen für Bedingungen mit geringerer Hierarchie im Textablauf zuerst erscheinen. Soll zum Beispiel der Test, ob Bedingung1 zutrifft, das Testen von Bedingung1&Bedingung2 enthalten, muss Bedingung1 in der Abruffolge an letzter Stelle stehen. Zum Beispiel kann folgender Code nie die letzte Bedingung bewerten:

```4d
 Case of
    :(vResult=1)
       ... //statement(s)
    :((vResult=1) & (vCondition#2)) //this case will never be detected
       ... //statement(s)
 End case
```

Der obige Code gelangt nicht bis zur zweiten Bedingung, da der Test "vResult=1" die Schleife ohne weiteres Testen verlässt. Damit der Code korrekt arbeitet, können Sie folgendes schreiben:

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //this case will be detected first
       ... //statement(s)
    :(vResult=1)
       ... //statement(s)
 End case
```

Für hierarchisches Testen können Sie auch hierarchischen Code einsetzen.

**Tipp:** In spezifischen Fällen können Sie auch Abfragen ohne Befehlsfolge einrichten. Wenn Sie einen Algorithmus oder eine spezifische Anwendung entwickeln, können Sie auch schreiben:
```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
      ...

    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

oder:
```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
       statement(s)
       ...

    :(Boolean_Expression)
       statement(s)
    Else
 End case

    :(Boolean_Expression)
       statement(s)
    Else
 End case
```

oder:
```4d
 Case of
    Else
       statement(s)
 End case
```


## While...End while

Die formale Syntax der Abfragefolge `While...End while` lautet:

```4d
 While(Boolean_Expression)
    statement(s)
    {break}  
    {continue}
 End while
```

Eine Schleife `While...End while` führt die Anweisung innerhalb der Schleife solange aus, wie der Boolean Ausdruck wahr ist. Sie prüft den Boolean Ausdruck am Beginn der Schleife und tritt gar nicht in die Schleife ein, wenn der Ausdruck FALSE ist.

The `break` and `continue` statements are [described below](#break-and-continue).

Es ist üblich, den getesteten Wert im Boolean Ausdruck direkt vor Eintreten in die Schleife `While...End while` zu initialisieren. Den Wert initialisieren heißt, Sie setzen etwas Passendes, so dass der Boolean Ausdruck TRUE ist und `While...End while` die Schleife ausführt.

Sie müssen dem Boolean Ausdruck in der Schleife einen sinnvollen Wert zuweisen, da sonst die Schleife endlos läuft. Nachfolgende Schleife läuft endlos, da _NeverStop_ immer wahr ist:
```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

In solch einer Situation, also bei einer unkontrolliert ablaufenden Methode können Sie die Schleife über den Schrittmodus stoppen und das Problem beheben. Weitere Informationen dazu finden Sie auf der Seite [Fehlerverwaltung](error-handling.md).

#### Beispiel

```4d
 CONFIRM("Add a new record?") CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop as long as the user wants to
    ADD RECORD([aTable]) //Add a new record
 End while //The loop always ends with End while
```

In diesem Beispiel wird die Systemvariable `OK` über den Befehl `CONFIRM` gesetzt, bevor die Schleife startet. Klickt der Benutzer im Dialogfenster Bestätigen auf die Schaltfläche **OK**, wird die Systemvariable `OK` auf 1 gesetzt und die Schleife startet. Ansonsten wird die Systemvariable `OK` auf 0 gesetzt und die Schleife übersprungen. Sobald die Schleife läuft, sorgt der Befehl `ADD RECORD` dafür, dass sie weiterläuft, da er die Systemvariable `OK` auf 1 setzt, wenn der Benutzer den Datensatz sichert. Annulliert der Benutzer den letzten Datensatz,  d.h. er sichert ihn nicht, wird die Systemvariable `OK` auf 0 gesetzt und die Schleife stoppt.

## Repeat...Until

Die formale Syntax der Abfragefolge `Repeat...Until` lautet:

```4d
Repeat
    statement(s)
    {break}  
    {continue}
Until(Boolean_Expression)
```
Die Schleife `Repeat...Until` arbeitet ähnlich wie die Schleife [While...End while](flow-control.md#whileend-while), mit dem Unterschied, dass der Boolean Ausdruck nicht vor, sondern nach der Schleife getestet wird. So führt `Repeat...Until` die Schleife immer einmal aus, während `While...End while` die Schleife gar nicht ausführt, wenn am Anfang der Boolean Ausdruck falsch ist.

Ein weiterer Unterschied ist, dass `Repeat...Until` weiterläuft, bis der Boolean Ausdruck TRUE ist.

The `break` and `continue` statements are [described below](#break-and-continue).

#### Beispiel

Vergleichen Sie folgendes Beispiel mit dem Beispiel zu `While...End while`. Beachten Sie, dass der Boolean Ausdruck nicht initialisiert werden muss—es gibt keinen Befehl `CONFIRM` zum Initialisieren der Variable `OK`.

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
```

## For...End for

Die formale Syntax der Abfragefolge `For..End for` lautet:

```4d
For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
   statement(s)
    {break}  
    {continue}
End for
```

Die Schleife `For...End for` wird über eine Zählervariable gesteuert:

- *Counter_Variable* ist eine numerische Variable vom Typ Zahl oder Lange Ganzzahl. Sie wird von der Schleife `For...End for` auf den in *Start_Expression* festgelegten Wert initialisiert.
- Die Zählervariable wird nach jedem Durchlaufen der Schleife um den optionalen Wert erhöht, der in *Increment_Expression* angegeben ist. Geben Sie *Increment_Expression* nicht an, wird die Zählervariable standardmäßig um Eins (1) erhöht.
- Sobald die Zählervariable *End_Expression* durchläuft, stoppt die Schleife.

**Wichtig:** Die numerischen Ausdrücke *Start_Expression*, *End_Expression* und *Increment_Expression* werden einmal am Schleifenbeginn gewertet. Sind diese Ausdrücke Variablen, und ändern Sie eine dieser Variablen innerhalb der Schleife, hat das keine Auswirkung auf die Schleife.

**Tipp:** Für besondere Zwecke können Sie den Wert der Zählervariablen *Counter_Variable* innerhalb der Schleife ändern; das wirkt sich dann auch auf die Schleife aus.

- Im Normalfall ist *Start_Expression* kleiner als *End_Expression*.
- Sind *Start_Expression* und *End_Expression* gleich, wird die Schleife nur einmal ausgeführt.
- Ist *Start_Expression* größer als *End_Expression*, wird die Schleife gar nicht ausgeführt, außer *Increment_Expression* hat einen negativen Wert. Sehen Sie die Beispiele.

The `break` and `continue` statements are [described below](#break-and-continue).

#### Allgemeine Beispiele

1. Folgendes Beispiel führt 100 Durchläufe aus:

```4d
 For(vCounter;1;100)
  //Do something
 End for
```

2. Folgendes Beispiel durchläuft alle Elemente des Array anArray:

```4d
 For($vlElem;1;Size of array(anArray))
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

3. Folgendes Beispiel durchläuft alle Zeichen des Textes vtSomeText:

```4d
 For($vlChar;1;Length(vtSomeText))
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

4. Folgendes Beispiel durchläuft die ausgewählten Datensätze für die Tabelle [aTable]:

```4d
 FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the next record
    NEXT RECORD([aTable])
 End for
```

Die meisten der Schleifen `For...End for` in Ihren Projekten sehen wie in den oben aufgeführten Beispielen aus.

### Counter variable

#### Decrementing counter variable

Manchmal benötigen Sie in einer Schleife eine absteigende Zählervariable. Dazu muss *Start_Expression* größer als *End_Expression* sein und *Increment_Expression* einen negativen Wert haben. Folgende Beispiele führen dieselben Aktionen wie oben aus, sie zählen jedoch rückwärts:

5. Folgendes Beispiel führt 100 Durchläufe aus:

```4d
 For(vCounter;100;1;-1)
  //Do something
 End for
```

6. Folgendes Beispiel durchläuft alle Elemente des Array anArray:

```4d
 For($vlElem;Size of array(anArray);1;-1)
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

7. Folgendes Beispiel durchläuft alle Zeichen des Textes vtSomeText:

```4d
 For($vlChar;Length(vtSomeText);1;-1)
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

8. Folgendes Beispiel durchläuft die ausgewählten Datensätze für die Tabelle [aTable]:

```4d
 LAST RECORD([aTable])
 For($vlRecord;Records in selection([aTable]);1;-1)
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the previous record
    PREVIOUS RECORD([aTable])
 End for
```

#### Die Zählervariable um mehr als Eins erhöhen

Bei Bedarf können Sie *Increment_Expression* (positiv oder negativ) für absolute Werte größer als Eins einsetzen.

9. Folgende Schleife ordnet dem Array anArray nur die geraden Elemente zu:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Do something with the element #2,#4...#2n
    anArray{$vlElem}:=...
 End for
```

#### Die Ausführung der Schleife For...End for optimieren

You can use Real and Integer variables as well as interprocess, process, and local variable counters. Verwenden Sie für lange sich wiederholende Schleifen, besonders im kompilierten Modus, lokale Variablen vom Typ Lange Ganzzahl.

10. Hier ein Beispiel:

```4d
 var $vlCounter : Integer //use local Integer variables
 For($vlCounter;1;10000)
  //Do something
 End for
```

### Die Strukturen der Schleifen vergleichen

Gehen wir zurück zum ersten Beispiel in `For...End for`. Folgendes Beispiel führt 100 Durchläufe aus:
```4d
 For(vCounter;1;100)
  //Do something
 End for
```

Es ist interessant zu vergleichen, wie die Schleifen `While...End while` und `Repeat...Until` dieselbe Aktion durchführen. Ausführung mit der Schleife `While...End while`:
```4d
 $i:=1 //Initialize the counter
 While($i<=100) //Loop 100 times
  //Do something
    $i:=$i+1 //Need to increment the counter
 End while
```

Ausführung mit der Schleife `Repeat...Until`:
```4d
 $i:=1 //Initialize the counter
 Repeat
  //Do something
    $i:=$i+1 //Need to increment the counter
 Until($i=100) //Loop 100 times
```

:::tip

The `For...End for` loop is usually faster than the `While...End while` and `Repeat...Until` loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Verwenden Sie deshalb möglichst die Schleife `For...End for`.

:::


### In Schleifen eingebaute For...End for Abfragen

Sie können so viele Kontrollstrukturen verschachteln, wie Sie (vernünftigerweise) benötigen. Das sind verschachtelte `For...End for` Schleifen. Um Fehler zu vermeiden, verwenden Sie für jede Schleifenstruktur eine andere Zählervariable.

Hier zwei Beispiele:

1. Folgendes Beispiel durchläuft alle Elemente eines zweidimensionalen Array:

```4d
 For($vlElem;1;Size of array(anArray))
  //...
  //Do something with the row
  //...
    For($vlSubElem;1;Size of array(anArray{$vlElem}))
  //Do something with the element
       anArray{$vlElem}{$vlSubElem}:=...
    End for
 End for
```

2. Dieses Beispiel erstellt ein Array mit Zeigern auf alle vorhandenen Datumsfelder in der Anwendung:

```4d
 ARRAY POINTER($apDateFields;0)
 $vlElem:=0
 For($vlTable;1;Get last table number)
    If(Is table number valid($vlTable))
       For($vlField;1;Get last field number($vlTable))
          If(Is field number valid($vlTable;$vlField))
             $vpField:=Field($vlTable;$vlField)
             If(Type($vpField->)=Is date)
                $vlElem:=$vlElem+1
                INSERT IN ARRAY($apDateFields;$vlElem)
                $apDateFields{$vlElem}:=$vpField
             End if
          End if
       End for
    End if
 End for
```

## For each...End for each

Die formale Syntax der Abfragefolge `For each..End for each` lautet:

```4d
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
    {break}  
    {continue}
 End for each
```

Die Struktur `For each...End for each` durchläuft den angegebenen Eintrag *Current_item* für alle Werte von *Expression*. Der Typ *Current_item* richtet sich nach der Art von *Expression*. Die Schleife `For each...End for each` kann drei Arten von *Ausdrücken* durchlaufen:

- Collections: Schleife durch jedes Element der Collection
- Entity-Selections: Schleife durch jede Entity
- Objekte: Schleife durch jede Objekteigenschaft

Folgende Tabelle vergleicht drei Typen von `For each...End for each`:

|                                         | Schleife durch Collections                        | Schleife durch Entity-Selections | Schleife durch Objekte         |
| --------------------------------------- | ------------------------------------------------- | -------------------------------- | ------------------------------ |
| Typ Current_Item                        | Variable vom gleichen Typ wie Collection Elemente | Entity                           | Textvariable                   |
| Typ Expression                          | Collection (mit Elementen vom gleichen Typ)       | Entity-Selection                 | Objekt                         |
| Anzahl Schleifen (standardmäßig)        | Anzahl der Collection Elemente                    | Anzahl Entities in der Selection | Anzahl der Objekteigenschaften |
| Unterstützung der Parameter begin / end | Ja                                                | Ja                               | Nein                           |

- Die Anzahl Schleifen wird beim Starten berechnet und ändert sich nicht während der Durchführung. Einträge während der Schleife hinzufügen oder entfernen wird generell nicht empfohlen, da dies zu fehlenden oder überflüssigen Wiederholungen führen kann.
- Standardmäßig werden die angegebenen _Anweisungen_ für jeden Wert in *Expression* ausgeführt. Es ist jedoch möglich, die Schleife durch Testen einer Bedingung entweder am Anfang (`While`) oder am Ende der Schleife (`Until`) zu verlassen.
- Über die optionalen Parameter *begin* und *end* lassen sich in Collections und Entity-Selections Grenzen für die Schleife definieren.
- Die Schleife `For each...End for each` lässt sich für eine **shared collection** oder ein **shared object** verwenden. Muss Ihr Code ein oder mehrere Elemente der Collection oder Objekteigenschaften ändern, müssen Sie `Use...End use` verwenden. Sie können `Use...End use` je nach Bedarf wie folgt aufrufen:
    - Vor Eintreten in die Schleife, wenn Einträge zur Wahrung der Integrität gemeinsam geändert werden sollen, oder
    - Innerhalb der Schleife, wenn nur ein paar Elemente/Eigenschaften geändert werden müssen und kein Verwalten der Integrität erforderlich ist.

The `break` and `continue` statements are [described below](#break-and-continue).

### Schleife durch Collections

Beim Verwenden von `For each...End for each` mit einer _Expression_ vom Typ _Collection_ ist der Parameter _Current_Item_ eine Variable vom gleichen Typ wie die Collection Elemente. Die Anzahl Schleifen basiert standardmäßig auf der Anzahl Einträge in der Collection.

Die Collection darf nur Elemente vom gleichen Typ enthalten, sonst wird ein Fehler zurückgegeben, sobald die Variable _Current_Item_ dem ersten Wert mit einem unpassenden Typ zugewiesen wird.

Bei jeder Wiederholung der Schleife wird die Variable _Current_Item_ automatisch mit dem passenden Element der Collection gefüllt. Dabei müssen Sie folgende Punkte berücksichtigen:

- Ist die Variable _Current_Item_ vom Typ Objekt oder Collection (z.B. wenn _Expression_ eine Collection von Objekten oder von Collections ist), wird durch Ändern dieser Variablen automatisch das zutreffende Element der Collection geändert (weil Objekte und Collections beide dieselbe Referenz nutzen). Bei einer Variablen mit einem skalaren Typ wird nur die Variable geändert.
- Die Variable _Current_Item_ muss vom gleichen Typ wie die Elemente der Collection sein. Ist ein Element davon nicht vom gleichen Typ wie die Variable, wird ein Fehler generiert und die Schleife stoppt.
- Enthält die Collection Elemente mit einem Wert **Null**, wird ein Fehler generiert, wenn der Variablentyp von _Current_Item_ keine **Null** Werte unterstützt, wie z. B. der Typ Lange Ganzzahl.

#### Beispiel

Sie wollen für eine Collection mit Zahlen ein paar Statistiken berechnen:

```4d
 var $nums : Collection
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 var $item;$vEven;$vOdd;$vUnder;$vOver : Integer
 For each($item;$nums)
    If($item%2=0)
       $vEven:=$vEven+1
    Else
       $vOdd:=$vOdd+1
    End if
    Case of
       :($item<5000)
          $vUnder:=$vUnder+1
       :($item>6000)
          $vOver:=$vOver+1
    End case
 End for each
  //$vEven=3, $vOdd=4
  //$vUnder=4,$vOver=2
```

### Schleife durch Entity-Selections

When `For each...End for each` is used with an *Expression* of the *Entity selection* type, the *Current_Item* parameter is the entity that is currently processed.

Die Anzahl Schleifen basiert auf der Anzahl Entities in der Entity-Selection. Bei jeder Wiederholung der Schleife wird der Parameter *Current_Item* automatisch mit der Entity der Entity-Selection gefüllt, die gerade bearbeitet wird.

**Hinweis:** Enthält die Entity-Selection eine Entity, die zwischenzeitlich durch einen anderen Prozess entfernt wurde, wird sie während der Schleife automatisch übersprungen.

Keep in mind that any modifications applied on the current entity must be saved explicitly using `entity.save()`.

#### Beispiel

Sie wollen das Gehalt aller britischen Angestellten in einer Entity-Selection erhöhen:

```4d
 var emp : Object
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Schleife durch Objekteigenschaften

Beim Verwenden von `For each...End for each` mit einer* Expression* vom Typ Objekt ist der Parameter *Current_Item* eine Textvariable, die automatisch mit dem Namen der gerade bearbeiteten Eigenschaft gefüllt wird.

Die Eigenschaften des Objekts werden in der Reihenfolge ihrer Erstellung bearbeitet. Während der Schleife lassen sich Eigenschaften im Objekt hinzufügen oder daraus entfernen. Das verändert nicht die Anzahl Schleifen, diese basiert weiterhin auf der ursprünglichen Anzahl Eigenschaften für das Objekt.

#### Beispiel

Sie wollen die Namen in folgendem Objekt auf Großschreibung umstellen:

```4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```
Sie schreiben:

```4d
 For each(property;vObject)
    If(Value type(vObject[property])=Is text)
       vObject[property]:=Uppercase(vObject[property])
    End if
 End for each
```

```
{
    "firstname": "GREGORY",
    "lastname": "BADIKORA",
    "age": 20
}
```
### Parameter begin / end

Mit den optionalen Parametern begin und end können Sie Grenzen für die Wiederholung der Schleife definieren.

**Hinweis:** Die Parameter *begin* und *end* sind nur für Schleifen in Collections und Entity-Selections möglich, in Objekteigenschaften werden sie ignoriert.

- Im Parameter *begin* übergeben Sie die Position des Elements in *Expression*, bei der der Durchlauf startet (inkl. *begin*).
- Im Parameter *end* übergeben Sie die Position des Elements in *Expression*, bei der Durchlauf stoppt (exkl. *end*).

Wird *end* weggelassen oder ist *end* größer als die Anzahl Elemente in *Expression*, werden Elemente ab *begin* bis zum letzten Element einschließlich durchlaufen. Sind die Parameter *begin* und *end* positive Werte, geben sie die aktuellen Positionen der Elemente in *Expression* an. Ist *begin* ein negativer Wert, wird er als `begin:=begin+Expression size` berechnet (=Versatz vom Ende der *Expression*). Ist der berechnete Wert negativ, wird *begin* auf 0 gesetzt. **Hinweis:** Auch wenn *begin* negativ ist, erfolgt der Durchlauf in der standardmäßigen Reihenfolge. Ist *end* ein negativer Wert, wird er berechnet als `end:=end+Expression size`

Beispiel:
- Eine Collection enthält 10 Elemente (nummeriert von 0 bis 9)
- begin=-4 > -> begin=-4+10=6 >-> der Durchlauf startet mit dem 6. Element (#5)
- end=-2 > end=-2+10=8 > der Durchlauf stoppt vor dem 8. Element (#7), z.B. beim 7. Element.

#### Beispiel

```4d
 var $col;$col2 : Collection
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 var $item : Text
 For each($item;$col;0;3)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c"]
 For each($item;$col;-2;-1)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c","d"]
```

### Bedingungen Until und While

Sie können die Ausführung von `For each...End for each` durch Einfügen einer Bedingung `Until` oder `While` in der Schleife steuern. Ist eine Anweisung `Until(condition)` in der Schleife vorhanden, stoppt der Durchlauf, sobald condition mit `Wahr` gewertet wird. Bei einer Anweisung `While(condition)` stoppt der Durchlauf dagegen, sobald condition mit `Falsch` gewertet wird.

Sie können je nach Bedarf ein anderes Schlüsselwort verwenden:

- Die Bedingung `Until` wird am Ende jedes Durchlaufs getestet, d. h. wenn *Expression* nicht leer oder null ist, wird die Schleife mindestens einmal ausgeführt.
- Die Bedingung `While` wird am Anfang jedes Durchlaufs getestet, d. h. je nach Ergebnis der Bedingung wird die Schleife u. U. gar nicht ausgeführt.

#### Beispiel

```4d
 $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)

 $total:=0
 For each($num;$colNum)While($total<30) //tested at the beginning
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)

 $total:=1000
 For each($num;$colNum)Until($total>30) //tested at the end
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 1001 (1000+1)
```

## break and continue

All looping structures above support both `break` and `continue` statements. These statements give you more control over the loops by allowing to exit the loop and to bypass the current iteration at any moment.

### break

The `break` statement terminates the loop containing it. Control of the program flows to the statement immediately after the body of the loop.

If the `break` statement is inside a [nested loop](#nested-forend-for-looping-structures) (loop inside another loop), the `break` statement will terminate the innermost loop.


#### Beispiel

```4d
For (vCounter;1;100)
    If ($tab{vCounter}="") //if a condition becomes true
        break //end of the for loop
    End if
End for
```

### continue

The `continue` statement terminates execution of the statements in the current iteration of the current loop, and continues execution of the loop with the next iteration.

```4d
var $text : Text
For ($i; 0; 9)
    If ($i=3)
        continue //go directly to the next iteration
    End if
    $text:=$text+String($i)
End for
// $text="012456789" 

```



## return {expression}

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v19 R4  | Added   |
</details>

The `return` statement can be called from anywhere. When a `return` statement is used in a function or method, the execution of the function or method is stopped. The remaining code is not executed and the control is returned to the caller.

The `return` statement can be used to [return a value](parameters.md#return-expression) to the caller.

#### Beispiel

```4d
var $message : Text
var $i : Integer

While (True) //infinite loop
    $i:=$i+1
    $message+=String($i)+"A\r"  // until 5
    logConsole($message)
    If ($i=5)
        return //stops the loop
    End if 
    $message+=String($i)+"B\r"  // until 4
    logConsole($message)
End while 
$message+=String($i)+"C\r"  //never executed 
logConsole($message)

// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

```

