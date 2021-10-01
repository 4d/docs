---
id: collection
title: Collection
---

Collections sind sortierte Listen von Werten ähnlicher oder unterschiedlicher Typen (Text, Zahl, Datum, Objekt, Boolean, Collection oder Null).

Zum Verwalten von Variablen von Typ Collection müssen Sie Objektnotation verwenden (siehe [Grundlagen der Syntax](Concepts/dt_object.md#syntax-basics)).

Um auf ein Element der Collection zuzugreifen, müssen Sie die Elementnummer in eckigen Klammern übergeben:

```4d
collectionRef[expression]
```

Sie können jeden gültigen 4D Ausdruck übergeben, der in *Ausdruck* eine positive Ganzzahl zurückgibt. Beispiele:

```4d
 myCollection[5]  //access to 6th element of the collection
 myCollection[$var]
```

**Warnung:** Elemente in Collections werden ab 0 nummeriert.

Sie können einem Element der Collection einen Wert zuweisen oder einen Wert erhalten:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

Ist die Elementnummer höher als das letzte vorhandene Element der Collection, wird die Collection automatisch angepasst und alle dazwischenliegenden neuen Elemente erhalten einen Nullwert:

```4d
 var myCol : Collection
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
 var $colVar : Collection //creation of collection type 4D variable
 $colVar:=New collection //initialization of the collection and assignment to the 4D variable
```

### Regular oder shared Collection

Sie können zwei Arten von Collections erstellen:

- regular (non-shared) Collections mit dem Befehl [`New collection`](API/CollectionClass.md#new-collection). Diese Collection lassen sich ohne eine spezifische Zugriffskontrolle bearbeiten, aber nicht zwischen Prozessen teilen.
- shared Collections mit dem Befehl [`New shared collection`](API/CollectionClass.md#new-shared-collection). Diese Collections lassen sich zwischen Prozessen teilen, inkl. preemptive Threads. Der Zugriff auf diese Collections wird über [`Use...End use`](Concepts/shared.md#useend-use) Strukturen gesteuert.

Weitere Informationen dazu finden Sie auf der Seite [Shared Objects und Collections](Concepts/shared.md).

## Collection Funktionen

Referenzen auf 4D Collection können spezifische Klassenfunktionen nutzen, manchmal auch *Member Functions* genannt. Collection-Funktionen sind im Abschnitt [Class API Reference](API/CollectionClass.md) aufgelistet.

Beispiel:

```4d
$newCol:=$col.copy() //deep copy of $col to $newCol
$col.push(10;100) //add 10 and 100 to the collection
```

Einige Funktionen geben nach Änderung die ursprüngliche Collection zurück, so dass die Aufrufe in einer Sequenz ablaufen können:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### Parameter propertyPath


Einige Collection-Funktionen akzeptieren als Parameter einen _PropertyPath_. Dieser Parameter steht für:

- Name der Objekteigenschaft, z. B. "lastName"
- oder Pfad der Objekteigenschaft, z.B. eine Sequenz von Untereigenschaften, durch Punkte getrennt, z.B. "employee.children.firstName".

**Warnung:** Sie können bei Funktionen und Parametern PropertyPath in Eigenschaftsnamen keine Leerzeichen oder ".", "[ ]" verwenden, da 4D den Pfad dann nicht korrekt analysieren kann:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //error
```