---
id: identifiers
title: Namensregeln
---

Dieser Abschnitt beschreibt die Konventionen und Regeln zum Bezeichnen verschiedener Elemente in der 4D Programmiersprache, wie Variablen, Tabellen, Objekte, Formulare, etc.


## Grundregeln
Die folgenden Regeln gelten für alle 4D Frameworks.

- Ein Name kann nur mit einem Buchstaben, einem Unterstrich oder einem Dollarzeichen ("$") beginnen. (Beachten Sie, dass das Dollarzeichen ein Element auf lokaler Ebene kennzeichnen kann, siehe unten.)
- Der Name kann Buchstaben, Zahlen, Leerzeichen und den Unterstrich ("_") enthalten.
- Punkte (".") und Klammern ("[ ]") sind in Tabellen-, Feld-, Methoden- oder Variablennamen nicht erlaubt.
- Kommas, Schrägstriche, Anführungszeichen und Doppelpunkte sind nicht erlaubt.
- Zeichen, die für Operatoren reserviert sind, wie z.B. * und +, sind nicht erlaubt.
- Verwenden Sie keine reservierten Namen, d.h. 4D Befehlsnamen (`Date`, `Time`, usw.), Schlüsselwörter (If, For, usw.) und Konstanten.
- Überflüssige Leerzeichen werden ignoriert.

### Zusätzliche Regeln für Namen von Objekteigenschaften und ORDA

- Leerzeichen sind nicht erlaubt.
- und Klammern ("[ ]") sind nicht erlaubt.
- Bei den Namen wird zwischen Groß- und Kleinschreibung unterschieden.

### Zusätzliche Regeln für SQL

- Nur die Zeichen _0123456789abcdefghijklmnopqrstuvwxyz werden akzeptiert.
- Namen dürfen keine SQL Schlüsselwörter enthalten, wie command, attribute, etc.

**Hinweis:** Der SQL-Bereich des Inspektors im Struktureditor zeigt automatisch alle nicht-zugelassenen Zeichen im Namen einer Tabelle oder eines Feldes an.




## Arrays

Ein Array kennzeichnen Sie durch seinen Namen. Das ist der Name, den Sie beim Erstellen des Array übergeben haben, z. B. ARRAY LONGINT. Arrays are variables, and like variables, the name of an array can be up to 31 characters, not including the scope symbols, and there are three different types of arrays:

- The name of a **local** array is preceded by the dollar sign ($).
- The name of a **process** array cannot start with the <> symbols nor the dollar sign $).
- The name of an **interprocess** array is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

Beispiele:
```4d
ARRAY TEXT($atSubjects;Records in table([Topics])) //local array
SORT ARRAY(asKeywords;>) //process array
ARRAY BOOLEAN(<>settings;Records in table([MySettings])) //interprocess array
```


### Elemente von Arrays
Sie verweisen auf ein Element eines Interprozess-, Prozess- oder lokalen Array mit geschweiften Klammern ({…}). Das angesprochene Element ist ein numerischer Ausdruck.

Beispiele:
```4d   
    //Addressing an element of a local array
If($asKeywords{1}="Stop")
$atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{Size of array($aiBigArray)}
```

### Elemente von zweidimensionalen Arrays
Sie verweisen auf ein Element eines zweidimensionalen Array mit doppelt geschweiften Klammern ({…}).   Das angesprochene Element besteht aus zwei numerischen Ausdrücken in zwei Sätzen geschweifter Klammern.

Beispiele:
```4d 
    //Addressing an element of a two-dimensional process array
If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}
```

## Felder

Ein Datenfeld kennzeichnen Sie durch die vorangestellte Tabelle, zu der dieses Datenfeld gehört. Der Name des Datenfelds folgt unmittelbar auf den Tabellennamen. Der Datenfeldname kann max. 31 Zeichen lang sein.

Beispiele:
```4d
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)
```

## Formularobjekte

Sie geben ein Formularobjekt über einen Namen als String mit vorangestelltem Parameter * an. Der Name eines Formularobjekts kann bis zu 255 Zeichen enthalten.

Beispiel:
```4d
OBJECT SET FONT(*;"Binfo";"Times")
```

**Hinweis:** Verwechseln Sie nicht Formularobjekte (Schaltflächen, Listboxen, eingebbare Variablen, etc.) und Objekte in der 4D Programmiersprache. Objekte der 4D Programmiersprache werden über Objektnotation oder spezifische Befehle erstellt und verwaltet.

## Formulare

Ein Formular kennzeichnen Sie durch einen String Ausdruck, der dessen Namen darstellt. Ein Formularname kann max. 31 Zeichen lang sein.

Beispiele:
```4d
FORM SET INPUT([People];"Input")
FORM SET OUTPUT([People];"Output")
DIALOG([Storage];"Note box"+String($vlStage))
```

## Temporäre Auswahlen

A named selection name can contain up to 255 characters, not including scope character(s).

- You denote a **process** named selection by using a string expression that represents its name (which cannot start with the <> symbols nor the dollar sign $).
- You denote an **interprocess** named selection if its name is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.

Beispiele:
```4d
USE NAMED SELECTION([Customers];"Closed")//Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection
```


## Objektattribute

You designate an object attribute (also called object property) by placing a point (".") between the name of the object and the name of the attribute. Ein Attributsname kann bis zu 255 Zeichen lang sein und unterscheidet zwischen Groß- und Kleinschreibung.

Beispiele:
```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

**Note:** Additional rules apply to object attribute names (they must comply with the ECMAScript specification). For more information, see \[additional rules above\](#additional-rules-for-object-property-and-ORDA names) and [Object property identifiers](Concepts/dt_object.md#object-property-identifiers).


## Plug-In Befehle

Einen Plug-In Befehl kennzeichnen Sie durch den Namen, wie vom Plug-In definiert. Ein Plug-In Befehl kann max. 31 Zeichen lang sein.

Beispiele:
```4d
$error:=SMTP_From($smtp_id;"henry@gmail.com")
```

## Prozesse

A process name can contain up to 255 characters, not including scope character.

In the single-user version, or in Client/Server on the Client side, there are two process scopes: **global** or **local**.

- You denote a **global** process by using a string expression that represents its name (which cannot start with the dollar sign $).
- You denote a **local** process if the name of the process is preceded by a dollar ($) sign.

Beispiele:
```4d
    //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
    //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
```


## Projektmethoden

Eine Projektmethode (Prozedur und Funktion) kennzeichnen Sie durch ihren Namen. Ein Methodenname kann bis zu 31 Zeichen enthalten.

**Hinweis:** Eine Projektmethode, die kein Ergebnis zurückgibt, heißt auch Prozedur. Eine Projektmethode, die ein Ergebnis zurückgibt, heißt auch Funktion.

Beispiele:
```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Tipp:** Es ist eine gute Programmiertechnik, dieselbe Namenskonvention wie von 4D für integrierte Methoden zu verwenden. Großschreibung für Prozeduren; Kleinschreibung mit großem Anfangsbuchstaben für Funktionen. By doing so, when you reopen a project for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window.

**Hinweis:** Zum Aufrufen einer Methode tippen Sie einfach ihren Namen ein. Einige in 4D integrierte Befehle wie z. B. `ON EVENT CALL`, sowie alle Plug-In Befehle erwarten dagegen den Namen der Methode als String, wenn ein Parameter für die Methode übergeben wurde. Beispiele:
```4d
    //This command expects a method (function) or formula
QUERY BY FORMULA([aTable];Special query)
    //This command expects a method (procedure) or statement
APPLY TO SELECTION([Employees];INCREASE SALARIES)
    //But this command expects a method name
ON EVENT CALL("HANDLE EVENTS")
```

Projektmethoden können Parameter (Argumente) akzeptieren. Parameter stehen in Klammern nach dem Methodennamen. Sie sind durch Strichpunkt (;) voneinander getrennt. Die Parameter sind innerhalb der aufgerufenen Methode als durchnumerierte lokale Variablen verfügbar: $1, $2,…, $n. Mehrere aufeinanderfolgende (und letzte) Parameter können Sie mit der Syntax ${n} ansprechen, wobei n die Nummer des Parameters ist.

Innerhalb einer Funktion enthält die lokale Variable $0 den zurückzugebenden Wert.

Beispiele:
```4d
    //Within DROP SPACES $1 is a pointer to the field [People]Name
DROP SPACES(->[People]Name)

    //Within Calc creator:
    //- $1 is numeric and equal to 1
    //- $2 is numeric and equal to 5
    //- $3 is text or string and equal to "Nice"
    //- The result value is assigned to $0
$vsResult:=Calc creator(1;5;"Nice")

    //Within Dump:
    //- The three parameters are text or string
    //- They can be addressed as $1, $2 or $3
    //- They can also be addressed as, for instance, ${$vlParam} where $vlParam is 1, 2 or 3
    //- The result value is assigned to $0
vtClone:=Dump("is";"the";"it")
```

## Mengen

A set name can contain up to 255 characters, not including scope character()s).

- You denote a **process** set by using a string expression that represents its name (which cannot start with the <> symbols or the dollar sign $).
- You denote an **interprocess** set if the name of the set is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign.
- On 4D Server, the name of a **client** set is preceded by the dollar sign ($). Der Name der Client-Menge kann ohne das Dollarzeichen bis zu 255 Zeichen lang sein.

> Sets are maintained on the Server machine. In bestimmten Fällen, wie mehr Effizienz oder für spezielle Zwecke, benötigen Sie Mengen lokal auf dem Client-Rechner. To do so, you use client sets.

Beispiele:
```4d
CREATE SET([Customers];"Customer Orders")//Process set
USE SET("<>Deleted Records") //Interprocess set
If(Records in set("$Selection"+String($i))>0) //Client set
```




## Tabellen

Eine Tabelle kennzeichnen Sie durch eckige Klammern: [...]. Der Tabellenname kann max. 31 Zeichen lang sein.

Beispiele:
```4d
DEFAULT TABLE([Orders])
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
```

## Variablen

The name of a variable can be up to 31 characters, not including the scope symbols.

- You designate a **local** variable by placing a dollar sign ($) before the variable name.
- You designate a **process** variable by using its name (which cannot start with the <> symbols nor the dollar sign $)
- You designate an **interprocess** variable by preceding the name of the variable with the symbols (<>) — a “less than” sign followed by a “greater than” sign.

Beispiele:

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
If(bValidate=1) //process variable
<>vlProcessID:=Current process //interprocess variable
```



## Summary of Identifiers

Nachfolgende Tabelle zeigt die Übersicht der Namenskonventionen in 4D.

| Name                       | Max. Länge | Beispiel                   |
| -------------------------- | ---------- | -------------------------- |
| Tabelle                    | 31         | [Invoices]                 |
| Datenfeld                  | 31         | [Employees]Last Name       |
| Interprozessvariable/Array | <> + 31    | <>vlNextProcessID          |
| Prozessvariable/Array      | 31         | vsCurrentName              |
| Lokale Variable/Array      | $ + 31     | $vlLocalCounter            |
| Objektattribut             | 255        | $o.myAttribute             |
| Formular                   | 31         | "My Custom Web Input"      |
| Formularobjekt             | 255        | "MyButton"                 |
| Projektmethode             | 31         | M_ADD_CUSTOMERS          |
| Plug-In Routine            | 31         | PDF SET ROTATION           |
| Interprozessmenge          | <> + 255   | "<>Records to be Archived" |
| Prozessmenge               | 255        | "Current selected records" |
| Client-Menge               | $ + 255    | "$Previous Subjects"       |
| Temporäre Auswahl          | 255        | "Employees A to Z"         |
| Temporäre Auswahl          | <> + 255   | "<>Employees Z to A"       |
| Lokaler Prozess            | $ + 255    | "$Follow Events"           |
| Globaler Prozess           | 255        | "*P_INVOICES_MODULE*"    |
| Semaphore                  | 255        | "mysemaphore"              |

**Hinweis:** Bei Verwenden nicht-romanischer Zeichen in Namen kann die max. Länge kürzer sein.

## Namenskonflikte lösen

Be sure to use unique names for the different elements in your project. If a particular element has the same name as another element of a different type (for example, if a field is named Person and a variable is also named Person), 4D uses a priority system.

4D identifiziert Namen in Prozeduren in folgender Reihenfolge:

1. Felder
2. Befehle
3. Methoden
4. Plug-In Routinen
5. Vordefinierte Konstanten
6. Variablen

Beispiel: In 4D gibt es den Befehl mit Namen `Date`. Nennen Sie eine Methode *Date*, wertet 4D diese als den integrierten Befehl `Date` und nicht als Ihre Methode. Ihre Methode wird nicht aufgerufen. Haben Sie dagegen ein Datenfeld mit dem Namen “Date” angelegt, versucht 4D, dieses Datenfeld anstatt des Befehls `Date` zu benutzen.

