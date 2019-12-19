---
id: Arrays
title: Arrays
---

Ein **Array** ist eine sortierte Reihe von **Variablen** des gleichen Typs. Jede Variable wird als **Element** des Array bezeichnet. Ein Array erhält seine Größe beim Erstellen; Sie können die Größe beliebig oft verändern durch Hinzufügen, Ändern oder Löschen von Elementen oder über den Befehl, der es erstellt hat. Array Elemente werden von 1 bis N durchnumeriert, wobei N die Größe des Array ist. Ein Array hat immer ein spezielles [Element Null](#using-the-element-zero-of-an-array). Arrays sind 4D Variablen. Ein Array hat, wie jede Variable, eine Reichweite und wendet bis auf wenige Ausnahmen die Regeln der 4D Programmiersprache an.

> In den meisten Fällen empfiehlt es sich, **Collections** anstelle von **Arrays** zu verwenden. Collections sind flexibler und bieten ein breites Spektrum an spezifischen Methoden. Weitere Informationen dazu finden Sie im Abschnitt [Collection](Concepts/dt_collection.md).

## Arrays erstellen

Sie erstellen ein Array mit einem Befehl unter dem Thema "Array", der ein Array deklariert. Jeder dieser Befehle kann ein- oder zweidimensionale Arrays erstellen oder in der Größe anpassen. Weitere Informationen zu zweidimensionalen Arrays finden Sie im Abschnitt [zweidimensionale Arrays](#two-dimensional-arrays).

Folgende Code-Zeile erstellt (deklariert) ein Array vom Typ Ganzzahl mit 10 Elementen:

```code4d
 ARRAY INTEGER(aiAnArray;10)
```

Dann passt folgende Code-Zeile dieses Array auf 20 Elemente an:

```code4d
ARRAY INTEGER(aiAnArray;20)
```

und folgende Code-Zeile passt dieses Array auf keine Elemente an:

```code4d
ARRAY INTEGER(aiAnArray;0)
```

## Werte in Arrays zuweisen

Auf Elemente in einem Array verweisen Sie über geschweifte Klammern ({…}). Die Nummer innerhalb der Klammern bezieht sich auf ein bestimmtes Element; sie heißt Elementnummer. Folgender Code fügt fünf Namen in das Array mit Namen atNames ein und zeigt sie dann in Fenstern mit Meldungen an:

```code4d
 ARRAY TEXT(atNames;5)
 atNames{1}:="Richard"
 atNames{2}:="Sarah"
 atNames{3}:="Sam"
 atNames{4}:="Jane"
 atNames{5}:="John"
 For($vlElem;1;5)
    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})
 End for
```

Beachten Sie die Syntax atNames{$vlElem}. Sie können das Element auch über eine Variable vom Typ Zahl ansprechen, z. B. atNames{$vlElem}. Über eine Schleife (`For...End for`, `Repeat...Until` oder `While...End while`) können kompakte Teile des Code alle oder bestimmte Elemente in einem Array ansprechen.

**Wichtig:** Achten Sie darauf, dass Sie den Zuweisungsoperator (:=) nicht mit dem Vergleichsoperator ist gleich (=) verwechseln. Zuweisen und Vergleichen sind ganz unterschiedliche Operationen.

### Ein Array einem anderen Array zuweisen

Im Gegensatz zu Variablen vom Typ Text oder String können Sie ein Array nicht einem anderen zuweisen. Dafür müssen Sie den Befehl `COPY ARRAY` verwenden.

## Element Null eines Array verwenden

Ein Array hat immer ein Element Null. Das Element Null erscheint zwar nicht in einem Array für ein Formularobjekt, kann jedoch ohne Einschränkung (*) in der Programmiersprache eingesetzt werden.

Hier ein weiteres Beispiel: Sie möchten eine Aktion nur ausführen, wenn Sie ein anderes Element als das zuvor gewählte anklicken. Dazu müssen Sie jedes ausgewählte Element verfolgen. Dafür könnten Sie eine Prozessvariable mit der Elementnummer des ausgewählten Elements einsetzen oder das Element Null des Array:

```code4d
  // atNames scrollable area object method
 Case of
    :(Form event=On Load)
  // Initialize the array (as shown further above)
       ARRAY TEXT(atNames;5)
  // ...
  // Initialize the element zero with the number
  // of the current selected element in its string form
  // Here you start with no selected element
       atNames{0}:="0"

    :(Form event=On Unload)
  // We no longer need the array
       CLEAR VARIABLE(atNames)

    :(Form event=On Clicked)
       If(atNames#0)
          If(atNames#Num(atNames{0}))
             vtInfo:="You clicked on: "+atNames{atNames}+" and it was not selected before."
             atNames{0}:=String(atNames)
          End if
       End if
    :(Form event=On Double Clicked)
       If(atNames#0)
          ALERT("You double clicked on: "+atNames{atNames}
       End if
 End case
```

(*) However, there is one exception: in an array type List Box, the zero element is used internally to store the previous value of an element being edited, so it is not possible to use it in this particular context.

## Two-dimensional Arrays

Each of the array declaration commands can create or resize one-dimensional or two-dimensional arrays. Example:

```code4d
 ARRAY TEXT(atTopics;100;50) // Creates a text array composed of 100 rows of 50 columns
```

Two-dimensional arrays are essentially language objects; you can neither display nor print them.

In the previous example:

- atTopics is a two-dimensional array
- atTopics{8}{5} is the 5th element (5th column...) of the 8th row
- atTopics{20} is the 20th row and is itself a one-dimensional array
- (atTopics) returns 100, which is the number of rows
- (atTopics{17}) returns 50, which the number of columns for the 17th row

In the following example, a pointer to each field of each table in the database is stored in a two-dimensional array:

```code4d
 C_LONGINT($vlLastTable;$vlLastField)
 C_LONGINT($vlFieldNumber)
  // Create as many rows (empty and without columns) as there are tables
 $vlLastTable:=Get last table number
 ARRAY POINTER(<>apFields;$vlLastTable;0) //2D array with X rows and zero columns
  // For each table
 For($vlTable;1;$vlLastTable)
    If(Is table number valid($vlTable))
       $vlLastField:=Get last field number($vlTable)
  // Give value of elements
       $vlColumnNumber:=0
       For($vlField;1;$vlLastField)
          If(Is field number valid($vlTable;$vlField))
             $vlColumnNumber:=$vlColumnNumber+1
  //Insert a column in a row of the table underway
             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)
  //Assign the "cell" with the pointer
             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)
          End if
       End for
    End if
 End for
```

Provided that this two-dimensional array has been initialized, you can obtain the pointers to the fields for a particular table in the following way:

```code4d
  // Get the pointers to the fields for the table currently displayed at the screen:
 COPY ARRAY(◊apFields{Table(Current form table)};$apTheFieldsIamWorkingOn)
  // Initialize Boolean and Date fields
 For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))
    Case of
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)
          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)
          $apTheFieldsIamWorkingOn{$vlElem}->:=True
    End case
 End for
```

**Note:** As this example suggests, rows of a two-dimensional arrays can be the same size or different sizes.

## Arrays and Memory

Unlike the data you store on disk using tables and records, an array is always held in memory in its entirety.

For example, if all US zip codes were entered in the [Zip Codes] table, it would contain about 100,000 records. In addition, that table would include several fields: the zip code itself and the corresponding city, county, and state. If you select only the zip codes from California, the 4D database engine creates the corresponding selection of records within the [Zip Codes] table, and then loads the records only when they are needed (i.e., when they are displayed or printed). In order words, you work with an ordered series of values (of the same type for each field) that is partially loaded from the disk into the memory by the database engine of 4D.

Doing the same thing with arrays would be prohibitive for the following reasons:

- In order to maintain the four information types (zip code, city, county, state), you would have to maintain four large arrays in memory.
- Because an array is always held in memory in its entirety, you would have to keep all the zip codes information in memory throughout the whole working session, even though the data is not always in use.
- Again, because an array is always held in memory in its entirety, each time the database is started and then quit, the four arrays would have to be loaded and then saved on the disk, even though the data is not used or modified during the working session.

**Conclusion:** Arrays are intended to hold reasonable amounts of data for a short period of time. On the other hand, because arrays are held in memory, they are easy to handle and quick to manipulate.

However, in some circumstances, you may need to work with arrays holding hundreds or thousands of elements. The following table lists the formulas used to calculate the amount of memory used for each array type:

| Array Type      | Formula for determining Memory Usage in Bytes                        |
| --------------- | -------------------------------------------------------------------- |
| Blob            | (1+number of elements) * 12 + Sum of the size of each blob           |
| Boolean         | (31+number of elements)\8                                           |
| Date            | (1+number of elements) * 6                                           |
| Integer         | (1+number of elements) * 2                                           |
| Long Integer    | (1+number of elements) * 4                                           |
| Object          | (1+number of elements) * 8 + Sum of the size of each object          |
| Picture         | (1+number of elements) * 8 + Sum of the size of each picture         |
| Pointer         | (1+number of elements) * 8 + Sum of the size of each pointer         |
| Real            | (1+number of elements) * 8                                           |
| Text            | (1+number of elements) * 20 + (Sum of the length of each text) * 2 |
| Time            | (1+number of elements) * 4                                           |
| Two-dimensional | (1+number of elements) * 16 + Sum of the size of each array          |

**Notes:**

- The size of a text in memory is calculated using this formula: ((Length + 1) * 2)
- A few additional bytes are required to keep track of the selected element, the number of elements, and the array itself.