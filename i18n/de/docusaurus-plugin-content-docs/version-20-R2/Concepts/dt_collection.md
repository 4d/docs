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

## Instantiation

Collections must have been instantiated, otherwise trying to read or modify their elements will generate a syntax error.

Collection instantiation can be done in one of the following ways:

- using the [`New collection`](../API/CollectionClass.md#new-collection) command,
- using the `[]` operator.

:::info

Several 4D commands and functions return collections, for example [`Get Monitored Activity`](https://doc.4d.com/4dv19R/help/command/en/page1713.html) or [`collection.copy`](../API/CollectionClass.md#copy). In this case, it is not necessary to instantiate explicitely the collection, the 4D language does it for you.

:::

### `New collection` command

The [`New collection`](../API/CollectionClass.md#new-collection) command creates a new empty or prefilled collection and returns its reference.

Beispiele:

```4d
 var $colVar : Collection //declaration of a collection type 4D variable
 $colVar:=New collection //instantiation of the collection and assignment to the 4D variable

 var $colFilled : Collection
 $colFilled:=New collection("a";"b";1;42;{}) //instantiation and assignment of a prefilled collection
```

### `[]` operator

The `[]` operator allows you to create a **collection literal**. A collection literal is a list of zero or more expressions, each of which represents a collection element, enclosed in square brackets (`[]`). When you create a collection using a collection literal, it is instantiated with the specified values as its elements, and its length is set to the number of arguments specified.

Since any element is considered an expression, you can create sub-collections using `[]` in elements.  You can also create and reference **object literals**.

If an element is undefined, it will appear as Null in the collection.

Beispiele:

```4d
var $col1; $col2; $users : Collection
$col1:=[] //empty collection
$col2:=[1;2;3;4;5;6] //collection of numbers
//collection of objects
$users:=[{name: "Alice"; \
    height: 183; \
    eyecolor: "hazel"; \
    id: $col2[5]\
    }; \
    {name: "Bob"; \
    height: 172; \
    eyecolor: "blue"\
    }]
```

:::note

If you create a collection literal containing a single element, make sure you do not use a name corresponding to an existing table name, otherwise the table syntax `[tableName]` will take priority.

:::



### Regular oder shared Collection

Sie können zwei Arten von Collections erstellen:

- regular (non-shared) collections, using the [`New collection`](API/CollectionClass.md#new-collection) command or collection literal syntax (`[]`). Diese Collection lassen sich ohne eine spezifische Zugriffskontrolle bearbeiten, aber nicht zwischen Prozessen teilen.
- shared Collections mit dem Befehl [`New shared collection`](API/CollectionClass.md#new-shared-collection). Diese Collections lassen sich zwischen Prozessen teilen, inkl. preemptive Threads. Der Zugriff auf diese Collections wird über [`Use...End use`](Concepts/shared.md#useend-use) Strukturen gesteuert.

For more information, refer to the [Shared objects and collections](shared.md) section.

## Collection Funktionen

Referenzen auf 4D Collection können spezifische Klassenfunktionen nutzen, manchmal auch *Member Functions* genannt. Collection functions are listed in the [Class API Reference](../API/CollectionClass.md) section.

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

**Warning:** When using functions and *propertyPath* parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //error
```