---
id: collection
title: Collection
---

Eine Collection ist eine Sammlung von Werten unterschiedlicher Typen (Text, Zahl, Objekt, Boolean, Collection oder Null).

Zum Verwalten von Variablen von Typ Collection müssen Sie Objektnotation verwenden (siehe [Syntaxregeln](Concepts/dt_object.md#syntax-basics)).

Um auf ein Element der Collection zuzugreifen, müssen Sie die Elementnummer in eckigen Klammern übergeben:

```4d
collectionRef[expression]
```

Sie können jeden gültigen 4D Ausdruck übergeben, der in Ausdruck eine positive Ganzzahl zurückgibt. Beispiele:

```4d
 myCollection[5]  //access to 6th element of the collection
 myCollection[$var]
```

**Warning:** Collection elements are numbered from 0.

Über Objektnotation können Sie einem Element der Collection einen Wert zuweisen oder einen Wert erhalten:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

Ist die Elementnummer höher als das letzte vorhandene Element der Collection, wird die Collection automatisch angepasst und alle dazwischenliegenden neuen Elemente erhalten einen Nullwert:

```4d
 C_COLLECTION(myCol)
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Initialisierung

Collections müssen initialisiert sein, z. B. mit dem Befehl `New collection`, sonst wird beim Versuch, ihre Elemente zu lesen oder zu modifizieren, ein Syntaxfehler erzeugt.

Beispiel:
```4d
 C_COLLECTION($colVar) //creation of collection type 4D variable
 $colVar:=New collection //initialization of the collection and assignment to the 4D variable
```

### Regular oder shared Collection

Sie können zwei Arten von Collections erstellen:

- regular (non-shared) Collections mit dem Befehl `New collection`. Diese Collection lassen sich ohne eine spezifische Zugriffskontrolle bearbeiten, aber nicht zwischen Prozessen teilen.
- shared Collections mit dem Befehl `New shared collection`. Diese Collections lassen sich zwischen Prozessen teilen, inkl. preemptive Threads. Der Zugriff auf diese Collections wird über `Use...End use` Strukturen gesteuert. Weitere Informationen dazu finden Sie auf der Seite [Shared Objects und Collections](Concepts/shared.md).

## Collection Methoden

4D collection references benefit from special methods (sometimes named *member functions*). Sie lassen sich über Objektnotation auf Collection Referenzen mit folgender Syntax verwenden:

> {$result:=}myCollection.memberFunction( {params} )

Beachten Sie, dass eine member method auch ohne definierte Parameter in runden Klammern () stehen muss, sonst wird ein Syntaxfehler erzeugt.

Beispiel:

```4d
$newCol:=$col.copy() //deep copy of $col to $newCol
$col.push(10;100) //add 10 and 100 to the collection
```

Einige Methoden geben nach Änderung die ursprüngliche Collection zurück, so dass die Aufrufe in einer Sequenz ablaufen können:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### Parameter propertyPath


Several methods accept a _propertyPath_ as parameter. Dieser Parameter steht für:

- Name der Objekteigenschaft, z. B. "lastName"
- oder Pfad der Objekteigenschaft, z.B. eine Sequenz von Untereigenschaften, durch Punkte getrennt, z.B. "employee.children.firstName".

**Warning:** When using methods and propertyPath parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //error
```