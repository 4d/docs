---
id: looping
title: Schleifenstrukturen
---

## While...End while
Die formale Syntax der Abfragefolge `While...End while` lautet:
```4d
 While(Boolean_Expression)
    statement(s)
 End while
```
Eine Schleife `While...End while` führt die Anweisung innerhalb der Schleife solange aus, wie der Boolean Ausdruck wahr ist. Sie prüft den Boolean Ausdruck am Beginn der Schleife und tritt gar nicht in die Schleife ein, wenn der Ausdruck FALSE ist.

Es ist üblich, den getesteten Wert im Boolean Ausdruck direkt vor Eintreten in die Schleife `While...End while` zu initialisieren. Den Wert initialisieren heißt, Sie setzen etwas Passendes, so dass der Boolean Ausdruck TRUE ist und `While...End while` die Schleife ausführt.

Sie müssen dem Boolean Ausdruck in der Schleife einen sinnvollen Wert zuweisen, da sonst die Schleife endlos läuft. The following loop continues forever because _NeverStop_ is always TRUE:
```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

In solch einer Situation, also bei einer unkontrolliert ablaufenden Methode können Sie die Schleife über den Schrittmodus stoppen und das Problem beheben. Weitere Informationen dazu finden Sie auf der Seite [Fehlerverwaltung](error-handling.md).

### Beispiel

```4d
 CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop as long as the user wants to
    ADD RECORD([aTable]) //Add a new record
 End while //The loop always ends with End while
```

In diesem Beispiel wird die Systemvariable `OK` über den Befehl `CONFIRM` gesetzt, bevor die Schleife startet. If the user clicks the **OK** button in the confirmation dialog box, the `OK` system variable is set to 1 and the loop starts. Ansonsten wird die Systemvariable `OK` auf 0 gesetzt und die Schleife übersprungen. Sobald die Schleife läuft, sorgt der Befehl `ADD RECORD` dafür, dass sie weiterläuft, da er die Systemvariable `OK` auf 1 setzt, wenn der Benutzer den Datensatz sichert. Annulliert der Benutzer den letzten Datensatz,  d.h. er sichert ihn nicht, wird die Systemvariable `OK` auf 0 gesetzt und die Schleife stoppt.

## Repeat...Until

Die formale Syntax der Abfragefolge `Repeat...Until` lautet:
```4d
 Repeat
    statement(s)
 Until(Boolean_Expression)
```
Die Schleife `Repeat...Until` arbeitet ähnlich wie die Schleife [While...End while](flow-control#whileend-while), mit dem Unterschied, dass der Boolean Ausdruck nicht vor, sondern nach der Schleife getestet wird. So führt `Repeat...Until` die Schleife immer einmal aus, während `While...End while` die Schleife gar nicht ausführt, wenn am Anfang der Boolean Ausdruck falsch ist.

Ein weiterer Unterschied ist, dass `Repeat...Until` weiterläuft, bis der Boolean Ausdruck TRUE ist.

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
 End for
```

Die Schleife `For...End for` wird über eine Zählervariable gesteuert:

- The counter variable *Counter_Variable* is a numeric variable (Real or Long Integer) that the `For...End for` loop initializes to the value specified by *Start_Expression*.
- Each time the loop is executed, the counter variable is incremented by the value specified in the optional value *Increment_Expression*. If you do not specify *Increment_Expression*, the counter variable is incremented by one (1), which is the default.
- When the counter variable passes the *End_Expression* value, the loop stops.

**Important:** The numeric expressions *Start_Expression*, *End_Expression* and *Increment_Expression* are evaluated once at the beginning of the loop. Sind diese Ausdrücke Variablen, und ändern Sie eine dieser Variablen innerhalb der Schleife, hat das keine Auswirkung auf die Schleife.

**Tip:** However, for special purposes, you can change the value of the counter variable *Counter_Variable* within the loop; this will affect the loop.

- Usually *Start_Expression* is less than *End_Expression*.
- If *Start_Expression* and *End_Expression* are equal, the loop will execute only once.
- If *Start_Expression* is greater than *End_Expression*, the loop will not execute at all unless you specify a negative *Increment_Expression*. Sehen Sie die Beispiele.

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

Die meisten der Schleifen `For...End for` in Ihrer Datenbank sehen wie in den oben aufgeführten Beispielen aus.

### Variablenzähler verringern

Manchmal benötigen Sie in einer Schleife eine absteigende Zählervariable. To do so, you must specify *Start_Expression* greater than *End_Expression* and a negative *Increment_Expression*. Folgende Beispiele führen dieselben Aktionen wie oben aus, sie zählen jedoch rückwärts:

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

If you need to, you can use an *Increment_Expression* (positive or negative) whose absolute value is greater than one.

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
**Tip:** The `For...End for` loop is usually faster than the `While...End while` and `Repeat...Until` loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Verwenden Sie deshalb möglichst die Schleife `For...End for`.

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

11. Folgendes Beispiel durchläuft alle Elemente eines zweidimensionalen Array:

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

12. Dieses Beispiel erstellt ein Array mit Zeigern auf alle vorhandenen Datumsfelder in der Anwendung:

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
 End for each
```

The `For each...End for each` structure iterates a specified *Current_item* over all values of the *Expression*. The *Current_item* type depends on the *Expression* type. The `For each...End for each` loop can iterate through three *Expression* types:

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
- By default, the enclosed _statement(s)_ are executed for each value in *Expression*. Es ist jedoch möglich, die Schleife durch Testen einer Bedingung entweder am Anfang (`While`) oder am Ende der Schleife (`Until`) zu verlassen.
- The *begin* and *end* optional parameters can be used with collections and entity selections to define boundaries for the loop.
- The `For each...End for each` loop can be used on a **shared collection** or a **shared object**. Muss Ihr Code ein oder mehrere Elemente der Collection oder Objekteigenschaften ändern, müssen Sie `Use...End use` verwenden. Sie können `Use...End use` je nach Bedarf wie folgt aufrufen:
    - Vor Eintreten in die Schleife, wenn Einträge zur Wahrung der Integrität gemeinsman geändert werden sollen, oder
    - Innerhalb der Schleife, wenn nur ein paar Elemente/Eigenschaften geändert werden müssen und kein Verwalten der Integrität erforderlich ist.

### Schleife durch Collections

When `For each...End for each` is used with an _Expression_ of the _Collection_ type, the _Current_Item_ parameter is a variable of the same type as the collection elements. Die Anzahl Schleifen basiert standardmäßig auf der Anzahl Einträge in der Collection.

The collection must contain only elements of the same type, otherwise an error will be returned as soon as the _Current_Item_ variable is assigned the first mismatched value type.

At each loop iteration, the _Current_Item_ variable is automatically filled with the matching element of the collection. Dabei müssen Sie folgende Punkte berücksichtigen:

- If the _Current_Item_ variable is of the object type or collection type (i.e. if _Expression_ is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). Bei einer Variablen mit einem skalaren Typ wird nur die Variable geändert.
- The _Current_Item_ variable must be of the same type as the collection elements. Ist ein Element davon nicht vom gleichen Typ wie die Variable, wird ein Fehler generiert und die Schleife stoppt.
- If the collection contains elements with a **Null** value, an error will be generated if the _Current_Item_ variable type does not support **Null** values (such as longint variables).

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

When `For each...End for each` is used with an _Expression_ of the _Entity selection_ type, the _Current_Item_ parameter is the entity that is currently processed.

Die Anzahl Schleifen basiert auf der Anzahl Entities in der Entity-Selection. On each loop iteration, the *Current_Item* parameter is automatically filled with the entity of the entity selection that is currently processed.

**Note:** If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop.

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

When `For each...End for each` is used with an *Expression* of the Object type, the *Current_Item* parameter is a text variable automatically filled with the name of the currently processed property.

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

**Note:** The *begin* and *end* parameters can only be used in iterations through collections and entity selections (they are ignored on object properties).

- In the *begin* parameter, pass the element position in *Expression* at which to start the iteration (*begin* is included).
- In the *end* parameter, you can also pass the element position in *Expression* at which to stop the iteration (*end* is excluded).

If *end* is omitted or if *end* is greater than the number of elements in *Expression*, elements are iterated from *begin* until the last one (included). If the *begin* and *end* parameters are positive values, they represent actual positions of elements in *Expression*. If *begin* is a negative value, it is recalculed as `begin:=begin+Expression size` (it is considered as the offset from the end of *Expression*). If the calculated value is negative, *begin* is set to 0. **Note:** Even if begin is negative, the iteration is still performed in the standard order. If *end* is a negative value, it is recalculed as `end:=end+Expression size`

Beispiel:
- Eine Collection enthält 10 Elemente (nummeriert von 0 bis 9)
- begin=-4 -> begin=-4+10=6 -> iteration starts at the 6th element (#5)
- end=-2 -> end=-2+10=8 -> iteration stops before the 8th element (#7), i.e. at the 7th element.

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

- The `Until` condition is tested at the end of each iteration, so if the *Expression* is not empty or null, the loop will be executed at least once.
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

