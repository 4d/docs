---
id: pointer
title: Zeiger
---

Eine Variable oder ein Ausdruck vom Typ Zeiger verweist auf eine andere Variable (inkl. Arrays und Array Elemente), Tabelle, Datenfeld oder Objekt. Ein Datenfeld kann nicht vom Typ Zeiger sein.

Mit Hilfe der Zeiger können Sie Ihre Methoden strukturunabhängig schreiben und dadurch Ihre Programme übertragbarer gestalten. Sie können mit der Programmiersprache auf verschiedene Objekte, wie Tabellen, Datenfelder, Variablen, Objekte und Arrays, einfach über ihre Namen zugreifen. Jedoch ist es oft hilfreich, auf diese Elemente zuzugreifen, ohne ihre Namen zu kennen. Das können Sie mit Zeigern tun.

Das Konzept hinter Zeigern begegnet Ihnen auch im täglichen Leben. Oft verweisen Sie auf etwas, ohne die Identität exakt zu kennen. Sie sagen normalerweise zu einem Freund: "Lass uns eine Fahrt in Deinem Auto machen", anstatt "Lass uns eine Fahrt in dem Auto mit dem Kennzeichen M-AX-1234 machen". In diesem Fall verweisen Sie auf das Auto mit dem Kennzeichen M-AX-1234 über den Begriff "Dein Auto". For example, you might say to a friend, “Let’s go for a ride in your car” instead of “Let’s go for a ride in the car with license plate 123ABD.” In this case, you are referencing the car with license plate 123ABD by using the phrase “your car.” The phrase “car with license plate 123ABD” is like the name of an object, and using the phrase “your car” is like using a pointer to reference the object.

Die Möglichkeit, auf etwas zu verweisen, ohne die Identität exakt zu kennen, hat einige Vorteile. Ihr Freund kann ein neues Auto haben, und die Aussage "mit Deinem Auto" passt weiterhin, denn es bleibt ein Auto und gehört Ihrem Freund. Zeiger arbeiten auf dieselbe Weise. Ein Zeiger kann beispielsweise einmal auf ein numerisches Datenfeld mit Namen Alter verweisen und später auf eine numerische Variable, umbenannt in Rentenalter. In beiden Fällen zeigt der Zeiger auf numerische Daten, die sich in einer Berechnung verwenden lassen.

Mit Zeigern können Sie auf Tabellen, Datenfelder, Variablen, Arrays und seine Elemente, und Objekte verweisen. Folgende Tabelle zeigt ein Beispiel für jeden Datentyp:

| Typ           | Referenz                | Verwenden                | Zuweisen                 |
| ------------- | ----------------------- | ------------------------ | ------------------------ |
| Tabelle       | vpTable:=->[Table]      | DEFAULT TABLE(vpTable->) | ----                     |
| Datenfeld     | vpField:=->[Table]Field | ALERT(vpField->)         | vpField->:="John"        |
| Variable      | vpVar:=->Variable       | ALERT(vpVar->)           | vpVar->:="John"          |
| Array         | vpArr:=->Array          | SORT ARRAY(vpArr->;>)    | COPY ARRAY (Arr;vpArr->) |
| Array Element | vpElem:=->Array{1}      | ALERT (vpElem->)         | vpElem->:="John"         |
| Objekt        | vpObj:=->myObject       | ALERT (vpObj->myProp)    | vpObj->myProp:="John"    |


## Zeiger verwenden

Wir erläutern die Verwendung von Zeigern an einem Beispiel. Dieses Beispiel zeigt, wie Sie über einen Zeiger auf eine Variable zugreifen können. Wir erstellen zuerst eine Variable:

```4d
$MyVar:="Hello"
```
$MyVar is now a variable containing the string “Hello.” We can now create a pointer to $MyVar: Nun können wir einen Zeiger auf $MyVar erstellen:

```4d
C_POINTER($MyPointer)  
$MyPointer:=->$MyVar
```
Das Symbol -> bedeutet "setze Zeiger auf". Es ist die Kombination aus einem Bindestrich und dem Zeichen “größer als”. The -> symbol means “get a pointer to.” This symbol is formed by a dash followed by a “greater than” sign. In this case, it gets the pointer that references or “points to” $MyVar. Dieser Zeiger wird mit dem Zuordnungsoperator dem Zeiger MyPointer zugewiesen.

$MyPointer ist nun eine Variable mit einem Zeiger auf $MyVar. $MyPointer enthält nicht “Hello”, den Wert von $MyVar, vielmehr erhalten Sie diesen Wert über $MyPointer. Folgender Ausdruck gibt den Wert in $MyVar zurück:
```4d
$MyPointer->
```

In diesem Fall gibt er die Zeichenkette “Hello” zurück. Das Symbol -> nach dem Zeiger verweist auf das Objekt, auf das gezeigt wird. Das nennt man Dereferenzierung.

Es ist wichtig zu verstehen, dass Sie einen Zeiger gefolgt vom Symbol -> überall verwenden können, wo Sie das Objekt verwenden könnten, auf das der Zeiger zeigt. Das bedeutet, Sie können den Ausdruck $MyPointer-> überall verwenden, wo Sie auch die ursprüngliche Variable $MyVar einsetzen können. Folgende Programmierzeile zeigt z. B. eine Warnung mit dem darin enthaltenen Wort Hello:
```4d
ALERT($MyPointer->)
```

Über $MyPointer können Sie auch den Inhalt von $MyVar ändern. Folgende Anweisung speichert die Zeichenkette "Goodbye" in der Variablen $MyVar:
```4d
$MyPointer->:="Goodbye"
```
Wie Sie sehen, verhält sich der Ausdruck $MyPointer-> wie die Variable $MyVar. Die beiden nachfolgenden Zeilen führen dieselbe Aktion aus—beide zeigen eine Warnung mit dem aktuellen Wert der Variablen $MyVar:

```4d
ALERT($MyPointer->)
ALERT($MyVar)
```
Die beiden folgenden Zeilen führen dieselbe Aktion aus—beide weisen der Variablen $MyVar die Zeichenkette "Goodbye" zu:
```4d
$MyPointer->:="Goodbye"
$MyVar:="Goodbye"
```

## Zeigeroperatoren

Es gilt folgendes:
```4d
  ` vPtrA and vPtrB point to the same object
 vPtrA:=->anObject
 vPtrB:=->anObject
  ` vPtrC points to another object
 vPtrC:=->anotherObject
```

| Operation    | Syntax          | Ergibt  | Ausdruck      | Wert   |
| ------------ | --------------- | ------- | ------------- | ------ |
| Gleichheit   | Zeiger = Zeiger | Boolean | vPtrA = vPtrB | Wahr   |
|              |                 |         | vPtrA = vPtrC | Falsch |
| Ungleichheit | Zeiger # Zeiger | Boolean | vPtrA # vPtrC | Wahr   |
|              |                 |         | vPtrA # vPtrB | Falsch |

## Zeiger verwenden
### Zeiger auf Tabellen
Überall, wo die Programmiersprache eine Tabelle erwartet, können Sie einen Zeiger erstellen, der auf die Tabelle zeigt. Sie definieren den Zeiger auf eine Tabelle folgendermaßen:
```4d
$TablePtr:=->[anyTable]
```
Sie können einen Zeiger über die Funktion `Table` einrichten:
```4d  
$TablePtr:=Table(20)
```
oder den dereferenzierten Zeiger in Befehlen verwenden:
```4d  
DEFAULT TABLE($TablePtr->)
```
### Zeiger auf Datenfelder
Überall, wo die Programmiersprache ein Datenfeld erwartet, können Sie einen Zeiger verwenden, der das Datenfeld anspricht. Sie definieren den Zeiger auf ein Datenfeld folgendermaßen:
```4d
$FieldPtr:=->[aTable]ThisField
```

Sie können einen Zeiger über die Funktion `Field` einrichten:
```4d
$FieldPtr:=Field(1;2)
```

oder den dereferenzierten Zeiger in Befehlen verwenden:
```4d
OBJECT SET FONT($FieldPtr->;"Arial")
```

### Zeiger auf lokale Variablen

Bei Verwendung von Zeigern auf Prozess- oder lokale Variablen müssen Sie sicherstellen, dass die Variable, auf die gezeigt wird, bereits eingerichtet ist. Beachten Sie folgendes: Lokale Variablen werden gelöscht, wenn die Ausführung der Methode, welche diese erstellt hat, beendet ist; Prozessvariablen werden mit Beenden des Prozesses gelöscht, der sie erstellt hat. Ruft ein Zeiger eine Variable auf, die nicht mehr existiert, verursacht das im interpretierten Modus einen Syntaxfehler (Variable nicht definiert), im kompilierten Modus kann dies hingegen zu einem ernsteren Fehler führen.

Über Zeiger auf lokale Variablen lassen sich in vielen Fällen Prozessvariablen sichern. Zeiger auf lokale Variablen lassen sich nur im gleichen Prozess verwenden. Zeigen Sie einen Zeiger auf eine lokale Variable an, die in einer anderen Methode deklariert wurde, erscheint im Debugger der ursprüngliche Methodenname nach dem Zeiger in Klammern. Schreiben Sie zum Beispiel in Method1:
```4d
 $MyVar:="Hello world"
 Method2(->$MyVar)
```
Zeigt der Debugger in Method2 $1 wie folgt an:

| $1 | ->$MyVar (Method1) |
| -- | ------------------ |
|    |                    |

Der Wert von $1 lautet:

| $MyVar (Method1) | "Hello world" |
| ---------------- | ------------- |
|                  |               |

### Zeiger auf Array Elemente
Sie können einen Zeiger auf ein Array Element erstellen. Im folgenden Beispiel wird ein Array erstellt und dem ersten Element des Array ein Zeiger auf die Variable $ElemPtr zugewiesen:
```4d
ARRAY REAL($anArray;10) //Create an array
$ElemPtr:=->$anArray{1} //Create a pointer to the array element
```

Sie können den dereferenzierten Zeiger verwenden, um dem Element einen Wert zuzuweisen, z.B:
```4d
$ElemPtr->:=8
```

### Zeiger auf Arrays
Sie können auch einen Zeiger erstellen, der auf ein Array zeigt. Folgende Anweisung erstellt ein Array und weist dem Array einen Zeiger auf die Variable $ArrPtr zu:
```4d
ARRAY REAL($anArray;10) //Create an array
$ArrPtr:=->$anArray //Create a pointer to the array
```
Beachten Sie, dass der Zeiger das Array anspricht und nicht ein Element dieses Arrays. Sie können den soeben angelegten Zeiger folgendermaßen einsetzen:
```4d
SORT ARRAY($ArrPtr->;>) //Sort the array
```
oder über den Zeiger das 4. Element des Arrays ansprechen:
```4d
 ArrPtr->{4}:=84
```

### Zeiger als Parameter in Methoden
Sie können einen Zeiger als Parameter in einer Methode übergeben. In der Methode können Sie das über den Zeiger angesprochene Objekt ändern. Zum Beispiel enthält die Methode `takeTwo` zwei Parameter in Form von Zeigern. Sie wandelt das erste angesprochene Objekt in Großbuchstaben um, das zweite in Kleinbuchstaben. Die Projektmethode lautet wie folgt:
```4d
  //takeTwo project method
  //$1 – Pointer to a string field or variable. Change this to uppercase.
  //$2 – Pointer to a string field or variable. Change this to lowercase.
 $1->:=Uppercase($1->)
 $2->:=Lowercase($2->)
```

Nachfolgende Zeile wandelt über die Methode `takeTwo` ein Datenfeld in Großbuchstaben um und eine Variable in Kleinbuchstaben:
```  
takeTwo(->[myTable]myField;->$MyVar)
```

Enthält das Datenfeld [myTable]myField den String "jones", wird es umgewandelt in "JONES". Enthält die Variable $MyVar den String "HELLO", wird er umgewandelt in "Hello".

Achten Sie darauf, dass in der Methode takeTwo und immer, wenn Sie Zeiger verwenden, das angesprochene Objekt vom richtigen Datentyp ist. Im vorigen Beispiel muss der Zeiger ein Objekt vom Typ String oder Text ansprechen.

### Zeiger auf Zeiger
Wenn Sie es komplexer machen wollen, können Sie auch Zeiger verwenden, die auf andere Zeiger verweisen. Nehmen wir dieses Beispiel:
```4d
 $MyVar:="Hello"
 $PointerOne:=->$MyVar
 $PointerTwo:=->$PointerOne
 ($PointerTwo->)->:="Goodbye"
 ALERT(($PointerTwo->)->)
```
Es zeigt eine Meldung mit dem Inhalt “Goodbye”.

Im folgenden werden die einzelnen Zeilen erläutert:

- $MyVar:="Hello" --> This line puts the string "Hello" into the variable $MyVar.
- $PointerOne:=->$MyVar --> $PointerOne now contains a pointer to $MyVar.
- $PointerTwo:=->$PointerOne --> $PointerTwo (a new variable) contains a pointer to $PointerOne, which in turn points to $MyVar.
- ($PointerTwo->)->:="Goodbye" --> $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Deshalb verweist ($PointerTwo->)-> auf den Inhalt von $MyVar. In diesem Beispiel ist also der Variablen $MyVar "Goodbye" zugewiesen.
- ALERT (($PointerTwo->)->) --> Same thing: $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Deshalb verweist ($PointerTwo->)-> auf den Inhalt von $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar.

Die folgende Zeile setzt "Hello" in $MyVar:
```4d
($PointerTwo->)->:="Hello"
```

Die folgende Zeile nimmt "Hello" aus $MyVar und setzt es in $NewVar:
```
$NewVar:=($PointerTwo->)->
```

**Wichtig:** Bei mehrfacher Dereferenzierung müssen Sie mit Klammern arbeiten.
