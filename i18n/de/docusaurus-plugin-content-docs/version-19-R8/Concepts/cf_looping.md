---
id: looping
title: Schleifenstrukturen
---

Schleifenstrukturen wiederholen eine Abfolge von Anweisungen, bis eine Bedingung gefunden wird oder eine Anzahl an Durchläufen erreicht ist.


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

### Beispiel

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

### Beispiel

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

### Allgemeine Beispiele

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

### Variablenzähler verringern

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

### Die Zählervariable um mehr als Eins erhöhen

Bei Bedarf können Sie *Increment_Expression* (positiv oder negativ) für absolute Werte größer als Eins einsetzen.

9. Folgende Schleife ordnet dem Array anArray nur die geraden Elemente zu:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Do something with the element #2,#4...#2n
    anArray{$vlElem}:=...
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
**Tipp:** Die Schleife `For...End for` ist normalerweise schneller als die Schleifen `While...End while` und `Repeat...Until`, da 4D die Bedingung für jeden Schleifenzyklus intern abfragt und dann den Zähler erhöht. Verwenden Sie deshalb möglichst die Schleife `For...End for`.

### Die Ausführung der Schleife For...End for optimieren

Sie können als Zähler Variablen vom Typ Zahl und Lange Ganzzahl, aber auch Interprozess-, Prozess- und lokale Variablen verwenden. Verwenden Sie für lange sich wiederholende Schleifen, besonders im kompilierten Modus, lokale Variablen vom Typ Lange Ganzzahl.

10. Hier ein Beispiel:

```4d
 C_LONGINT($vlCounter) //use local Long Integer variables
 For($vlCounter;1;10000)
  //Do something
 End for
```

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
 C_COLLECTION($nums)
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)
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

Beim Verwenden von `For each...End for each` mit einer _Expression_ vom Typ _Entity-Selection_ ist der Parameter _Current_Item_ die Entity, die gerade bearbeitet wird.

Die Anzahl Schleifen basiert auf der Anzahl Entities in der Entity-Selection. Bei jeder Wiederholung der Schleife wird der Parameter *Current_Item* automatisch mit der Entity der Entity-Selection gefüllt, die gerade bearbeitet wird.

**Hinweis:** Enthält die Entity-Selection eine Entity, die zwischenzeitlich durch einen anderen Prozess entfernt wurde, wird sie während der Schleife automatisch übersprungen.

Beachten Sie, dass jede Änderung in der aktuellen Entity explizit mit `entity.save( )` gesichert werden muss.

#### Beispiel

Sie wollen das Gehalt aller britischen Angestellten in einer Entity-Selection erhöhen:

```4d
 C_OBJECT(emp)
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
 C_COLLECTION($col;$col2)
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 C_TEXT($item)
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

## `break` and `continue`

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
