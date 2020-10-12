---
id: collection
title: Collection
---

Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null).

Collection type variables are managed using object notation (see [Syntax basics](Concepts/dt_object.md#syntax-basics)).

Um auf ein Element der Collection zuzugreifen, müssen Sie die Elementnummer in eckigen Klammern übergeben:

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in *expression*. Beispiele:

```4d
 myCollection[5]  //access to 6th element of the collection
 myCollection[$var]
```

**Warnung:** Elemente in Collections werden ab 0 nummeriert.

You can assign a value to a collection element or get a collection element value:

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

- regular (non-shared) collections, using the [`New collection`](API/collectionClass.md#new-collection) command. Diese Collection lassen sich ohne eine spezifische Zugriffskontrolle bearbeiten, aber nicht zwischen Prozessen teilen.
- shared collections, using the [`New shared collection`](API/collectionClass.md#new-shared-collection) command. Diese Collections lassen sich zwischen Prozessen teilen, inkl. preemptive Threads. Access to these collections is controlled by [`Use...End use`](Concepts/shared.md#useend-use) structures.

Weitere Informationen dazu finden Sie auf der Seite [Shared Objects und Collections](Concepts/shared.md).

## Collection functions

4D collection references benefit from special class functions (sometimes named *member functions*). Collection functions are listed in the [Class API Reference](API/collectionClass.md) section.

Beispiel:

```4d
$newCol:=$col.copy() //deep copy of $col to $newCol
$col.push(10;100) //add 10 and 100 to the collection
```

Some functions return the original collection after modification, so that you can run the calls in a sequence:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### Parameter propertyPath


Several functions accept a _propertyPath_ as parameter. Dieser Parameter steht für:

- Name der Objekteigenschaft, z. B. "lastName"
- oder Pfad der Objekteigenschaft, z.B. eine Sequenz von Untereigenschaften, durch Punkte getrennt, z.B. "employee.children.firstName".

**Warning:** When using functions and propertyPath parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //error
```