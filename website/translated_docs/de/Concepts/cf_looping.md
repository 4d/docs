---
id: Schleifen
title: Schleifenstrukturen
---

## While...End while

Die formale Syntax der Abfragefolge `If...Else...End if` lautet:

```4d
 While(Boolean_Expression)
    statement(s)
 End while
```

Eine Schleife `While...End while` führt die Anweisung innerhalb der Schleife solange aus, wie der Boolean Ausdruck TRUE ist. Sie prüft den Boolean Ausdruck am Beginn der Schleife und tritt gar nicht in die Schleife ein, wenn der Ausdruck FALSE ist.

Es ist üblich, den getesteten Wert im Boolean Ausdruck direkt vor Eintreten in die Schleife `While...End while` zu initialisieren. Den Wert initialisieren heißt, Sie setzen etwas Passendes, so dass der Boolean Ausdruck TRUE ist und `While...End while` die Schleife ausführt.

Sie müssen dem Boolean Ausdruck in der Schleife einen sinnvollen Wert zuweisen, da sonst die Schleife endlos läuft. Nachfolgende Schleife läuft endlos, da *NeverStop* immer TRUE ist:

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

In diesem Beispiel wird die Systemvariable `OK` über den Befehl `CONFIRM` gesetzt, bevor die Schleife startet. Klickt der Benutzer im Dialogfenster Bestätigen auf die Schaltfläche **OK**, wird die Systemvariable `OK` auf 1 gesetzt und die Schleife startet. Ansonsten wird die Systemvariable `OK` auf 0 gesetzt und die Schleife übersprungen. Sobald die Schleife läuft, sorgt der Befehl `ADD RECORD` dafür, dass sie weiterläuft, da er die Systemvariable `OK` auf 1 setzt, wenn der Benutzer den Datensatz sichert. Annulliert der Benutzer den letzten Datensatz, d.h. er sichert ihn nicht, wird die Systemvariable `OK` auf 0 gesetzt und die Schleife stoppt.

## Repeat...Until

Die formale Syntax der Abfragefolge `Repeat...Until` lautet:

```4d
 Repeat
    statement(s)
 Until(Boolean_Expression)
```

Die Schleife `Repeat...Until` arbeitet ähnlich wie die Schleife [While...End while](flow-control#whileend-while), mit dem Unterschied, dass der Boolean Ausdruck nicht vor, sondern nach der Schleife getestet wird. So führt `Repeat...Until` die Schleife immer einmal aus, während `While...End while` die Schleife gar nicht ausführt, wenn am Anfang der Boolean Ausdruck FALSE ist.

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

- *Counter_Variable* ist eine numerische Variable vom Typ Zahl oder Lange Ganzzahl. Sie wird von der Schleife `For...End for` auf den in *Start_Expression* festgelegten Wert initialisiert.
- Die Zählervariable wird nach jedem Durchlaufen der Schleife um den optionalen Wert, der in *Increment_Expression* angegeben ist, erhöht. Tragen Sie hier keinen Wert ein, wird die Zählervariable standardmäßig um Eins (1) erhöht.
- Sobald die Zählervariable *End_Expression* durchläuft, stoppt die Schleife.

**Wichtig:** Die numerischen Ausdrücke *Start_Expression*, *End_Expression* und *Increment_Expression* werden einmal am Schleifenbeginn gewertet. Sind diese Ausdrücke Variablen, und ändern Sie eine dieser Variablen innerhalb der Schleife, hat das keine Auswirkung auf die Schleife.

**Tipp:** Für besondere Zwecke können Sie den Wert der Zählervariablen *Counter_Variable* innerhalb der Schleife ändern; das wirkt sich dann auch auf die Schleife aus.

- Im Normalfall ist *Start_Expression* kleiner als *End_Expression*.
- Sind *Start_Expression* und *End_Expression* gleich, wird die Schleife nur einmal ausgeführt.
- Ist *Start_Expression* größer als *End_Expression*, wird die Schleife gar nicht ausgeführt, außer *Increment_Expression* hat einen negativen Wert. Sehen Sie die Beispiele.

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

Let's go back to the first `For...End for` example. Folgendes Beispiel führt 100 Durchläufe aus:

```4d
 For(vCounter;1;100)
  //Do something
 End for
```

It is interesting to see how the `While...End while` loop and `Repeat...Until` loop would perform the same action. Here is the equivalent `While...End while` loop:

```4d
 $i:=1 //Initialize the counter
 While($i<=100) //Loop 100 times
  //Do something
    $i:=$i+1 //Need to increment the counter
 End while
```

Here is the equivalent `Repeat...Until` loop:

```4d
 $i:=1 //Initialize the counter
 Repeat
  //Do something
    $i:=$i+1 //Need to increment the counter
 Until($i=100) //Loop 100 times
```

**Tip:** The `For...End for` loop is usually faster than the `While...End while` and `Repeat...Until` loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Therefore, use the `For...End for` loop whenever possible.

### Optimizing the execution of the For...End for loops

You can use Real and Long Integer variables as well as interprocess, process, and local variable counters. For lengthy repetitive loops, especially in compiled mode, use local Long Integer variables.

10. Here is an example:

```4d
 C_LONGINT($vlCounter) //use local Long Integer variables
 For($vlCounter;1;10000)
  //Do something
 End for
```

### Nested For...End for looping structures

You can nest as many control structures as you (reasonably) need. This includes nesting `For...End for` loops. To avoid mistakes, make sure to use different counter variables for each looping structure.

Here are two examples:

11. The following example goes through all the elements of a two-dimensional array:

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

12. The following example builds an array of pointers to all the date fields present in the database:

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

The formal syntax of the `For each...End for each` control flow structure is:

```4d
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
 End for each
```

The `For each...End for each` structure iterates a specified *Current_item* over all values of the *Expression*. The *Current_item* type depends on the *Expression* type. The `For each...End for each` loop can iterate through three *Expression* types:

- collections: loop through each element of the collection,
- entity selections: loop through each entity,
- objects: loop through each object property.

The following table compares the three types of `For each...End for each`:

|                                   | Loop through collections                         | Loop through entity selections      | Loop through objects        |
| --------------------------------- | ------------------------------------------------ | ----------------------------------- | --------------------------- |
| Current_Item type                 | Variable of the same type as collection elements | Entity                              | Text variable               |
| Expression type                   | Collection (with elements of the same type)      | Entity selection                    | Object                      |
| Number of loops (by default)      | Number of collection elements                    | Number of entities in the selection | Number of object properties |
| Support of begin / end parameters | Yes                                              | Yes                                 | No                          |

- The number of loops is evaluated at startup and will not change during the processing. Adding or removing items during the loop is usually not recommended since it may result in missing or redundant iterations.
- By default, the enclosed *statement(s)* are executed for each value in *Expression*. It is, however, possible to exit the loop by testing a condition either at the begining of the loop (`While`) or at the end of the loop (`Until`).
- The *begin* and *end* optional parameters can be used with collections and entity selections to define boundaries for the loop.
- The `For each...End for each` loop can be used on a **shared collection** or a **shared object**. If your code needs to modify one or more element(s) of the collection or object properties, you need to use the `Use...End use` keywords. Depending on your needs, you can call the `Use...End use` keywords: 
    - before entering the loop, if items should be modified together for integrity reasons, or
    - within the loop when only some elements/properties need to be modified and no integrity management is required. 

### Loop through collections

When `For each...End for each` is used with an *Expression* of the *Collection* type, the *Current_Item* parameter is a variable of the same type as the collection elements. By default, the number of loops is based on the number of items of the collection.

The collection must contain only elements of the same type, otherwise an error will be returned as soon as the *Current_Item* variable is assigned the first mismatched value type.

At each loop iteration, the *Current_Item* variable is automatically filled with the matching element of the collection. The following points must be taken into account:

- If the *Current_Item* variable is of the object type or collection type (i.e. if *Expression* is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If the variable is of a scalar type, only the variable will be modified.
- The *Current_Item* variable must be of the same type as the collection elements. If any collection item is not of the same type as the variable, an error is generated and the loop stops.
- If the collection contains elements with a **Null** value, an error will be generated if the *Current_Item* variable type does not support **Null** values (such as longint variables).

#### Beispiel

You want to compute some statistics for a collection of numbers:

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

### Loop through entity selections

When `For each...End for each` is used with an *Expression* of the *Entity selection* type, the *Current_Item* parameter is the entity that is currently processed.

The number of loops is based on the number of entities in the entity selection. On each loop iteration, the *Current_Item* parameter is automatically filled with the entity of the entity selection that is currently processed.

**Note:** If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop.

Keep in mind that any modifications applied on the current entity must be saved explicitly using `entity.save( )`.

#### Beispiel

You want to raise the salary of all British employees in an entity selection:

```4d
 C_OBJECT(emp)
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Loop through object properties

When `For each...End for each` is used with an *Expression* of the Object type, the *Current_Item* parameter is a text variable automatically filled with the name of the currently processed property.

The properties of the object are processed according to their order of creation. During the loop, properties can be added to or removed from the object, without modifying the number of loops that will remain based on the original number of properties of the object.

#### Beispiel

You want to switch the names to uppercase in the following object:

```4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```

You can write:

```4d
 For each(property;vObject)
    If(Value type(vObject[property])=Is text)
       vObject[property]:=Uppercase(vObject[property])
    End if
 End for each
```

    {
        "firstname": "GREGORY",
        "lastname": "BADIKORA",
        "age": 20
    }
    

### begin / end parameters

You can define bounds to the iteration using the optional begin and end parameters.

**Note:** The *begin* and *end* parameters can only be used in iterations through collections and entity selections (they are ignored on object properties).

- In the *begin* parameter, pass the element position in *Expression* at which to start the iteration (*begin* is included).
- In the *end* parameter, you can also pass the element position in *Expression* at which to stop the iteration (*end* is excluded). 

If *end* is omitted or if *end* is greater than the number of elements in *Expression*, elements are iterated from *begin* until the last one (included). If the *begin* and *end* parameters are positive values, they represent actual positions of elements in *Expression*. If *begin* is a negative value, it is recalculed as `begin:=begin+Expression size` (it is considered as the offset from the end of *Expression*). If the calculated value is negative, *begin* is set to 0. **Note:** Even if begin is negative, the iteration is still performed in the standard order. If *end* is a negative value, it is recalculed as `end:=end+Expression size`

For example:

- a collection contains 10 elements (numbered from 0 to 9)
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

### Until and While conditions

You can control the `For each...End for each` execution by adding an `Until` or a `While` condition to the loop. When an `Until(condition)` or a `While(condition)` statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to True.

You can pass either keyword depending on your needs:

- The `Until` condition is tested at the end of each iteration, so if the *Expression* is not empty or null, the loop will be executed at least once.
- The `While` condition is tested at the beginning of each iteration, so according to the condition result, the loop may not be executed at all.

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