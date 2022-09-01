---
id: identifiers
title: Namensregeln
---

Dieser Abschnitt beschreibt die Konventionen und Regeln zum Bezeichnen verschiedener Elemente in der 4D Programmiersprache, wie Variablen, Tabellen, Objekte, Formulare, etc.

## Grundregeln

Die folgenden Regeln gelten für alle 4D Frameworks.

- Ein Name muss mit einem Buchstaben, einem Unterstrich oder einem Dollarzeichen ("$") beginnen (Beachten Sie, dass das Dollarzeichen ein Element auf lokaler Ebene kennzeichnen kann, siehe unten.).
- Der Name kann Buchstaben, Zahlen, Leerzeichen und den Unterstrich ("_") enthalten.
- Punkte (".") Periods (".") and brackets ("[ ]") are not allowed in table, field, method, or variable names.
- Kommas, Schrägstriche, Anführungszeichen und Doppelpunkte sind nicht erlaubt.
- Zeichen, die für Operatoren reserviert sind, wie z.B. * und +, sind nicht erlaubt.
- Verwenden Sie keine reservierten Namen, d.h. 4D Befehlsnamen (`Date`, `Time`, usw.), Schlüsselwörter (If, For, usw.) und Konstanten.
- Leerzeichen am Anfang oder Ende werden ignoriert, können aber innerhalb des Namens verwendet werden.

### Zusätzliche Regeln für Namen von Objekteigenschaften und ORDA

- Leerzeichen sind nicht erlaubt.
- Punkte (".") Periods (".") and brackets ("[ ]") are not allowed.
- Wichtig: Groß- und Kleinschreibung wird unterschieden.

### Zusätzliche Regeln für SQL

- Nur die Zeichen _0123456789abcdefghijklmnopqrstuvwxyz werden akzeptiert.
- Namen dürfen keine SQL Schlüsselwörter enthalten, wie command, attribute, etc.

**Hinweis:** Der SQL-Bereich des Inspektors im Struktureditor zeigt automatisch alle nicht-zugelassenen Zeichen im Namen einer Tabelle oder eines Feldes an.

## Tabellen

Eine Tabelle kennzeichnen Sie durch eckige Klammern: [...]. Der Tabellenname kann max. 31 Zeichen lang sein.

Beispiele:

```4d
DEFAULT TABLE([Orders])
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
```

## Felder

Ein Datenfeld kennzeichnen Sie durch die vorangestellte Tabelle, zu der dieses Datenfeld gehört. Der Name des Datenfelds folgt unmittelbar auf den Tabellennamen. Der Datenfeldname kann max. 31 Zeichen lang sein.

Beispiele:

```4d
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)
```

## Interprozessvariablen

You designate an interprocess variable by preceding the name of the variable with the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

The name of an interprocess variable can be up to 31 characters, not including the `<>` symbols.

Beispiele:

```4d
<>vlProcessID:=Current process
<>vsKey:=Char(KeyCode)
If(<>vtName#"")
```

## Prozessvariablen

You designate a process variable by using its name (which cannot start with the `<>` symbols nor the dollar sign $). Der Name der Prozessvariablen kann max. 31 Zeichen lang sein.

Beispiele:

```4d
<>vrGrandTotal:=Sum([Accounts]Amount)
If(bValidate=1)
vsCurrentName:=""
```

## Lokale Variablen

Eine lokale Variable kennzeichnen Sie durch das vorangestellte Dollarzeichen ($). Der Name einer lokalen Variable kann ohne Dollarzeichen max. 31 Zeichen lang sein.

Beispiele:

```4d
For($vlRecord;1;100)
If($vsTempVar="No")
$vsMyString:="Hello there"
```

## Arrays

Ein Array kennzeichnen Sie durch seinen Namen. Das ist der Name, den Sie beim Erstellen des Array übergeben haben, z. B. ARRAY LONGINT. Arrays sind Variablen, von daher gibt es in Bezug auf die Reichweite, wie bei Variablen auch drei Array-Typen:

- Interprozess-Arrays
- Prozess-Arrays
- Lokale Arrays

### Interprozess-Arrays

The name of an interprocess array is preceded by the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

An interprocess array name can contain up to 31 characters, not including the `<>` symbols.

Beispiele:

```4d
ARRAY TEXT(<>atSubjects;Records in table([Topics]))
SORT ARRAY(<>asKeywords;>)
ARRAY INTEGER(<>aiBigArray;10000)
```

### Prozess-Arrays

You designate a process array by using its name (which cannot start with the `<>` symbols nor the dollar sign $). Der Name des Prozess-Array kann bis zu 31 Zeichen lang sein.

Beispiele:

```4d
ARRAY TEXT(atSubjects;Records in table([Topics]))
SORT ARRAY(asKeywords;>)
ARRAY INTEGER(aiBigArray;10000)
```

### Lokale Arrays

Der Name eines lokalen Array beginnt mit dem Dollarzeichen ($) Der Name eines lokalen Array kann ohne Dollarzeichen max. 31 Zeichen lang sein.

Beispiele:

```4d
ARRAY TEXT($atSubjects;Records in table([Topics]))
SORT ARRAY($asKeywords;>)
ARRAY INTEGER($aiBigArray;10000)
```

### Elemente von Arrays

Sie verweisen auf ein Element eines Interprozess-, Prozess- oder lokalen Array mit geschweiften Klammern ({…}). Das angesprochene Element ist ein numerischer Ausdruck.

Beispiele:

```4d  
 //Addressing an element of an interprocess array
If(<>asKeywords{1}="Stop")
<>atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}

 //Addressing an element of a process array
If(asKeywords{1}="Stop")
atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{Size of array(aiBigArray)}

 //Addressing an element of a local array
If($asKeywords{1}="Stop")
$atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{Size of array($aiBigArray)}
```

### Elemente von zweidimensionalen Arrays

You reference an element of a two-dimensional array by using the curly braces ({…}) twice.   Das angesprochene Element besteht aus zwei numerischen Ausdrücken in zwei Sätzen geschweifter Klammern.

Beispiele:

```4d
 //Addressing an element of a two-dimensional interprocess array
If(<>asKeywords{$vlNextRow}{1}="Stop")
<>atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}

 //Addressing an element of a two-dimensional process array
If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}

 //Addressing an element of a two-dimensional local array
If($asKeywords{$vlNextRow}{1}="Stop")
$atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}
```

## Objektattribute

When object notation is enabled, you designate an object attribute (also called object property) by placing a point (".") between the name of the object (or attribute) and the name of the attribute. zwischen dem Namen des Objekts (oder Attributs) und dem Namen des Attributs. Ein Attributsname kann bis zu 255 Zeichen lang sein und unterscheidet zwischen Groß- und Kleinschreibung.

Beispiele:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

**Hinweis:** Für Namen von Objektattributen gelten zusätzliche Regeln (sie müssen konform zur ECMAScript Spezifikation sein). Weitere Informationen dazu finden Sie unter [Identifier für Objekteigenschaft](Concepts/dt_object.md#object-property-identifiers).

## Forms

Ein Formular kennzeichnen Sie durch einen String Ausdruck, der dessen Namen darstellt. Ein Formularname kann max. 31 Zeichen lang sein.

Beispiele:

```4d
FORM SET INPUT([People];"Input")
FORM SET OUTPUT([People];"Output")
DIALOG([Storage];"Note box"+String($vlStage))
```

## Formularobjekte

Sie geben ein Formularobjekt über einen Namen als String mit vorangestelltem Parameter * an. Der Name eines Formularobjekts kann bis zu 255 Zeichen enthalten.

Beispiel:

```4d
OBJECT SET FONT(*;"Binfo";"Times")
```

**Hinweis:** Verwechseln Sie nicht Formularobjekte (Schaltflächen, Listboxen, eingebbare Variablen, etc.) und Objekte in der 4D Programmiersprache. Objekte der 4D Programmiersprache werden über Objektnotation oder spezifische Befehle erstellt und verwaltet.

## Projektmethoden

Eine Projektmethode (Prozedur und Funktion) kennzeichnen Sie durch ihren Namen. Ein Methodenname kann bis zu 31 Zeichen enthalten.

**Hinweis:** Eine Projektmethode, die kein Ergebnis zurückgibt, heißt auch Prozedur. Eine Projektmethode, die ein Ergebnis zurückgibt, heißt auch Funktion.

Beispiele:

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Tipp:** Es ist eine gute Programmiertechnik, dieselbe Namenskonvention wie von 4D für integrierte Methoden zu verwenden. Großschreibung für Prozeduren; Kleinschreibung mit großem Anfangsbuchstaben für Funktionen. Öffnen Sie dann eine Datenbank nach einigen Monaten für eine Wartung, erkennen Sie im Explorer Fenster bereits an der Schreibweise des Namens, ob die Methode ein Ergebnis zurückgibt.

**Hinweis:** Zum Aufrufen einer Methode tippen Sie einfach ihren Namen ein. Einige in 4D integrierte Befehle wie z. B. `ON EVENT CALL`, sowie alle Plug-In Befehle erwarten dagegen den Namen der Methode als String, wenn ein Parameter für die Methode übergeben wurde. Beispiel:

Beispiele:

```4d
 //This command expects a method (function) or formula
QUERY BY FORMULA([aTable];Special query)
 //This command expects a method (procedure) or statement
APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //But this command expects a method name
ON EVENT CALL("HANDLE EVENTS")
```

Projektmethoden können Parameter (Argumente) akzeptieren. Parameter stehen in Klammern nach dem Methodennamen. Sie sind durch Strichpunkt (;) voneinander getrennt. The parameters are available within the called method as consecutively numbered local variables: $1, $2,…, $n. A method can return a single value in the $0 parameter. The parameters are available within the called method as consecutively numbered local variables: $1, $2,…, $n. In addition, multiple consecutive (and last) parameters can be addressed with the syntax ${n}where n, numeric expression, is the number of the parameter.

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

## Plug-In Befehle

Einen Plug-In Befehl kennzeichnen Sie durch den Namen, wie vom Plug-In definiert. Ein Plug-In Befehl kann max. 31 Zeichen lang sein.

Beispiele:

```4d
$error:=SMTP_From($smtp_id;"henry@gmail.com")
```

## Mengen

In Bezug auf die Reichweite gibt es zwei Arten von Mengen:

- Interprozessmengen
- Prozessmengen

4D Server enthält auch:

- Client-Mengen

### Interprozessmengen

A set is an interprocess set if the name of the set is preceded by the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

An interprocess set name can contain up to 255 characters, not including the `<>` symbols.

### Prozessmengen

You denote a process set by using a string expression that represents its name (which cannot start with the `<>` symbols or the dollar sign $). Der Name der Prozessmenge kann bis zu 255 Zeichen lang sein.

### Client-Mengen

Der Name eines Client beginnt mit dem Dollarzeichen ($). Der Name der Client-Menge kann ohne das Dollarzeichen bis zu 255 Zeichen lang sein.

**Hinweis:** Mengen werden auf dem Server-Rechner gehalten. In bestimmten Fällen, wie mehr Effizienz oder für spezielle Zwecke, benötigen Sie Mengen lokal auf dem Client-Rechner. Dafür verwenden Sie Client-Mengen.

Beispiele:

```4d
 //Interprocess sets
USE SET("<>Deleted Records")
CREATE SET([Customers];"<>Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
 //Process sets
USE SET("Deleted Records")
CREATE SET([Customers];"Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
 //Client sets
USE SET("$Deleted Records")
CREATE SET([Customers];"$Customer Orders")
If(Records in set("$Selection"+String($i))>0)
```

## Temporäre Auswahlen

In Bezug auf die Reichweite gibt es zwei Arten von temporären Mengen:

- Temporäre Interprozessauswahlen
- Temporäre Prozessauswahlen

### Temporäre Interprozessauswahlen

A named selection is an interprocess named selection if its name is preceded by the symbols (`<>`) — a “less than” sign followed by a “greater than” sign.

An interprocess named selection name can contain up to 255 characters, not including the `<>` symbols.

### Temporäre Prozessauswahlen

You denote a process named selection by using a string expression that represents its name (which cannot start with the `<>` symbols nor the dollar sign $). Der Name einer temporären Auswahl kann bis zu 255 Zeichen enthalten.

Beispiele:

```4d
 //Interprocess Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
 //Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
```

## Prozesse

In der Einzelplatzversion bzw. im Client/Server-Betrieb auf der Client-Seite gibt es zwei Arten:

- Globale Prozesse
- Lokale Prozesse

### Globale Prozesse

Einen globalen Prozess kennzeichnen Sie durch einen String Ausdruck, der seinen Namen darstellt (Er darf nicht mit dem Dollarzeichen $ beginnen). Der Prozessname kann bis zu 255 Zeichen lang sein.

### Lokale Prozesse

Der Name eines lokalen Prozesses beginnt mit dem Dollarzeichen $. You denote a local process if the name of the process is preceded by a dollar ($) sign. The process name can contain up to 255 characters, not including the dollar sign.

Beispiele:

```4d
 //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
```

## Zusammenfassung der Namenskonventionen

Nachfolgende Tabelle zeigt die Übersicht der Namenskonventionen in 4D.

| Name                       | Max. Länge       | Beispiel                           |
| -------------------------- | ---------------- | ---------------------------------- |
| Tabelle                    | 31               | [Invoices]                         |
| Datenfeld                  | 31               | [Employees]Last Name               |
| Interprozessvariable/Array | `<>` + 31  | `<>vlNextProcessID`          |
| Prozessvariable/Array      | 31               | vsCurrentName                      |
| Lokale Variable/Array      | $ + 31           | $vlLocalCounter                    |
| Objektattribut             | 255              | $o.myAttribute                     |
| Formular                   | 31               | "My Custom Web Input"              |
| Formularobjekt             | 255              | "MyButton"                         |
| Projektmethode             | 31               | M_ADD_CUSTOMERS                  |
| Plug-In Routine            | 31               | PDF SET ROTATION                   |
| Interprozessmenge          | `<>` + 255 | `"<>Records to be Archived"` |
| Prozessmenge               | 255              | "Current selected records"         |
| Client-Menge               | $ + 255          | "$Previous Subjects"               |
| Temporäre Auswahl          | 255              | "Employees A to Z"                 |
| Temporäre Auswahl          | `<>` + 255 | `"<>Employees Z to A"`       |
| Lokaler Prozess            | $ + 255          | "$Follow Events"                   |
| Globaler Prozess           | 255              | "*P_INVOICES_MODULE*"            |
| Semaphore                  | 255              | "mysemaphore"                      |

**Hinweis:** Bei Verwenden nicht-romanischer Zeichen in Namen kann die max. Länge kürzer sein.

## Namenskonflikte lösen

Achten Sie darauf, dass die Namen für die verschiedenen Elemente in Ihrer Anwendung einmalig sind. Hat ein Element denselben Namen wie ein anderes Element (beispielsweise ein Datenfeld und eine Variable mit demselben Namen Person), arbeitet 4D mit einer Prioritätenliste.

4D identifiziert Namen in Prozeduren in folgender Reihenfolge:

1. Felder
2. Befehle
3. Methods
4. Plug-In Routinen
5. Vordefinierte Konstanten
6. Variablen

Beispiel: In 4D gibt es den Befehl mit Namen `Date`. Nennen Sie eine Methode *Date*, wertet 4D diese als den integrierten Befehl `Date` und nicht als Ihre Methode. Ihre Methode wird nicht aufgerufen. Haben Sie dagegen ein Datenfeld mit dem Namen “Date” angelegt, versucht 4D, dieses Datenfeld anstatt des Befehls `Date` zu benutzen.
