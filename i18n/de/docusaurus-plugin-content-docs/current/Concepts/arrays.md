---
id: Arrays
title: Arrays
---

Ein **Array** ist eine sortierte Reihe von **Variablen** des gleichen Typs. Jede Variable wird als **Element** des Array bezeichnet. Ein Array erhält seine Größe beim Erstellen; Sie können die Größe beliebig oft verändern durch Hinzufügen, Ändern oder Löschen von Elementen oder über den Befehl, der es erstellt hat. Array Elemente werden von 1 bis N durchnummeriert, wobei N die Größe des Array ist. Ein Array hat immer ein spezielles [Element Null](#using-the-element-zero-of-an-array). Arrays sind 4D Variablen. Ein Array hat, wie jede Variable, eine Reichweite und wendet bis auf wenige Ausnahmen die Regeln der 4D Programmiersprache an.

> In den meisten Fällen empfiehlt es sich, **Collections** anstelle von **Arrays** zu verwenden. Collections sind flexibler und bieten ein breites Spektrum an spezifischen Methoden. Weitere Informationen dazu finden Sie im Abschnitt [Collection](Concepts/dt_collection.md).


## Arrays erstellen

Sie erstellen ein Array mit einem Befehl unter dem Thema "Array", der ein Array deklariert. Jeder dieser Befehle kann ein- oder zweidimensionale Arrays erstellen oder in der Größe anpassen. Weitere Informationen zu zweidimensionalen Arrays finden Sie im Abschnitt [zweidimensionale Arrays](#two-dimensional-arrays).

Folgende Code-Zeile erstellt (deklariert) ein Array vom Typ Ganzzahl mit 10 Elementen:

```4d
 ARRAY INTEGER(aiAnArray;10)
```

Dann passt folgende Code-Zeile dieses Array auf 20 Elemente an:
```4d
ARRAY INTEGER(aiAnArray;20)
```

und folgende Code-Zeile passt dieses Array auf keine Elemente an:
```4d
ARRAY INTEGER(aiAnArray;0)
```

## Werte in Arrays zuweisen

Auf Elemente in einem Array verweisen Sie über geschweifte Klammern ({…}). Die Nummer innerhalb der Klammern bezieht sich auf ein bestimmtes Element; sie heißt Elementnummer. Folgender Code fügt fünf Namen in das Array mit Namen atNames ein und zeigt sie dann in Fenstern mit Meldungen an:

```4d
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
Beachten Sie die Syntax atNames{$vlElem}. Sie können das Element auch über eine Variable vom Typ Zahl ansprechen, z. B. atNames{3}. Über eine Schleife (`For...End for`, `Repeat...Until` oder `While...End while`) können kompakte Teile des Code alle oder bestimmte Elemente in einem Array ansprechen.

**Wichtig:** Achten Sie darauf, dass Sie den Zuweisungsoperator (:=) nicht mit dem Vergleichsoperator ist gleich (=) verwechseln. Zuweisen und Vergleichen sind ganz unterschiedliche Operationen.


### Ein Array einem anderen Array zuweisen
Im Gegensatz zu Variablen vom Typ Text oder String können Sie ein Array nicht einem anderen zuweisen. Dafür müssen Sie den Befehl `COPY ARRAY` verwenden (zuweisen).


## Element Null

Ein Array hat immer ein Element Null. Das Element Null erscheint zwar nicht in einem Array für ein Formularobjekt, kann jedoch ohne Einschränkung (*) in der Programmiersprache eingesetzt werden.

Hier ein Beispiel: Sie wollen ein Formularobjekt mit einem Textwert initialisieren, jedoch ohne Setzen eines Standardwerts. Hierfür können Sie das Element Null des Array verwenden:

```4d
  // method for a combo box or drop-down list  
  // bound to atName variable array
 Case of
    :(Form event code=On Load)
  // Initialize the array (as shown further above)  
  // But use the element zero
        ARRAY TEXT(atName;5)
        atName{0}:=Please select an item"
        atName{1}:="Text1"
        atName{2}:="Text2"
        atName{3}:="Text3"
        atName{4}:="Text4"
        atName{5}:="Text5"
    // Position the array to element 0
        atName:=0
 End case
```

(*) Es gibt eine Ausnahme: In einem Array vom Typ Listbox wird das Element Null intern zum Speichern des vorigen Wertes eines Elements in Bearbeitung verwendet. Sie können es also in diesem spezifischen Kontext nicht verwenden.


## Zweidimensionale Arrays

Jeder Befehl zum Erstellen von Arrays kann ein- oder zweidimensionale Arrays erstellen bzw. in der Größe anpassen. Beispiel:

```4d
 ARRAY TEXT(atTopics;100;50) // Creates a text array composed of 100 rows of 50 columns
```

Zweidimensionale Arrays sind Objekte der Programmiersprache; von daher lassen sie sich weder anzeigen noch ausdrucken.

Im oben angezeigten Beispiel gilt:

- atTopics ist ein zweidimensionales Array
- atTopics{8}{5} ist das 5. Element (5. Spalte...) der 8. Reihe
- atTopics{20} ist die 20. Reihe und selbst ein eindimensionales Array
- `Größe des Array(atTopics)` gibt 100 zurück, das ist die Anzahl der Reihen
- `Größe des Array(atTopics{17})` gibt 50 zurück, das ist die Anzahl der Spalten für die 17. Reihe

Folgendes Beispiel speichert für jedes Datenfeld jeder Tabelle einen Zeiger in einem zweidimensionalen Array:

```4d
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

Vorausgesetzt, dieses zweidimensionale Array wurde initialisiert, erhalten Sie nun die Zeiger auf die Datenfelder für eine bestimmte Tabelle:

```4d
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

**Hinweis:** Wie Sie in diesem Beispiel sehen, können Reihen in zweidimensionalen Arrays dieselbe oder verschiedene Größen haben.

## Arrays und Speicher

Ein Array wird im Gegensatz zu Daten, die Sie in Tabellen und Datensätzen auf der Festplatte speichern, immer vollständig im Speicher gehalten.

Geben Sie zum Beispiel alle Postleitzahlen in einer Tabelle [PLZ] ein, enthält sie ca. 10.000 Datensätze. Die Tabelle enthält zusätzlich weitere Datenfelder, wie Landeskennzahl und Stadt. Wählen Sie nun das Postleitzahlengebiet 8, erstellt die 4D Datenbank-Engine die entsprechende Datensatzauswahl in der Tabelle [PLZ] und lädt die Datensätze nur bei Bedarf, also z.B. zum Anzeigen auf dem Bildschirm oder zum Drucken. Mit anderen Worten, Sie arbeiten mit einer geordneten Reihe von Werten vom selben Typ pro Datenfeld, die die Engine von 4D teilweise von der Festplatte in den Speicher lädt.

Dieses Vorgehen ist für Arrays undenkbar. Das hat folgende Gründe:

- Zum Verwalten der drei Informationstypen (Landeskennzahl, Postleitzahl, Stadt) müssten Sie drei umfangreiche Arrays im Speicher halten.
- Da ein Array immer vollständig im Speicher gehalten wird, müssten Sie alle Informationen dieser Arrays während der ganzen Arbeitssitzung im Speicher halten, auch wenn die Daten nicht ständig in Gebrauch sind.
- Diese Arrays müssten bei jedem Starten der Anwendung komplett geladen und dann beim Beenden auf der Festplatte gesichert werden, selbst wenn die Daten während der ganzen Arbeitssitzung weder benutzt noch verändert wurden.

**Fazit:** In Arrays sollten überschaubare Datenmengen für eine kurze Zeitspanne gehalten werden. Andererseits sind Arrays, da sie im Hauptspeicher gehalten werden, sehr schnell und leicht zu verwalten.

Unter bestimmten Umständen müssen Sie jedoch Arrays mit hunderten oder tausenden von Elementen einsetzen. Nachfolgende Tabelle zeigt die Formel zum Berechnen der Speicherbelegung für jeden Array-Typ:

| Array-Typ       | Formel für Speicherbelegung in Bytes                                |
| --------------- | ------------------------------------------------------------------- |
| Blob            | (1+Anzahl der Elemente) * 12 + Summe der Größe jedes Blob           |
| Boolean         | (31+Anzahl der Elemente) / 8                                        |
| Datum           | (1+Anzahl der Elemente) * 6                                         |
| Ganzzahl        | (1+Anzahl der Elemente) * 2                                         |
| Lange Ganzzahl  | (1+Anzahl der Elemente) * 4                                         |
| Objekt          | (1+Anzahl der Elemente) * 8 + Summe der Größe jedes Objekts         |
| Bild            | (1+Anzahl der Elemente) * 8 + Summe der Größe jedes Bilds           |
| Zeiger          | (1+Anzahl der Elemente) * 8 + Summe der Größe jedes Zeigers         |
| Zahl            | (1+Anzahl der Elemente) * 8                                         |
| Text            | (1+Anzahl der Elemente) * 20 + (Summe der Länge jedes Textes) * 2 |
| Zeit            | (1+Anzahl der Elemente) * 4                                         |
| Zweidimensional | (1+Anzahl der Elemente) * 16 + Summe der Größe jedes Array          |

**Hinweise:**

- Die Größe eines Textes im Speicher wird mit der Formel ((Länge + 1)* 2) berechnet
- Ein paar zusätzliche Bytes werden benötigt, um das ausgewählte Element, die Anzahl der Elemente und das Array selbst zu verwalten.