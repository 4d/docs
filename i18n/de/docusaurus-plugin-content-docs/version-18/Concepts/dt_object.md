---
id: object
title: Objekte
---

Variablen, Felder oder Ausdrücke vom Typ Objekt können verschiedene Datentypen enthalten. Die Struktur von "native" 4D Objekten basiert auf dem klassischen Prinzip von "Eigenschaft/Wert" bzw. "Key/Value" Paaren. Die Syntax dieser Objekte basiert auf JSON Notation:

- Ein Eigenschaftenname ist immer ein Text, z. B. "Name".

- Der Wert einer Eigenschaft kann einer der folgenden Typen sein:
    - numerisch (Zahl, Ganzzahl, etc.)
    - Text
    - Null
    - Boolean
    - Zeiger (als solcher gespeichert, wird beim Verwenden der Funktion `JSON Stringify` oder beim Kopieren bewertet)
    - Datum (Datumstyp oder ISO Datumsformat)
    - Objekt (Objekte können in mehrere Stufen verschachtelt sein)
    - Bild (*)
    - collection

(*) Bei Darstellung als Text im Debugger oder Export in JSON zeigen die Eigenschaften des Objekts Bild "[Objekt Bild]" an.

**Warnung:** Beachten Sie, dass Attributnamen zwischen Groß- und Kleinschreibung unterscheiden.

Variablen, Felder oder Ausdrücke vom Typ Objekt verwalten Sie über Befehle im Kapitel **Objekte (Sprache**), oder über die Objektnotation (siehe [Grundlagen der Syntax](Concepts/dt_object.md#syntax-basics)). Über spezifische Befehle im Kapitel Suchen wie `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE` oder `ORDER BY ATTRIBUTE` können Sie mit Objektfeldern arbeiten.

Jeder Eigenschaftswert, auf den über Objektnotation zugegriffen wird, wird als ein Ausdruck gewertet. Ist Objektnotation in Ihrer Anwendung aktiviert (siehe unten), können Sie solche Werte überall verwenden, wo 4D Ausdrücke erwartet werden:

- In 4D Code, entweder in den Methoden (Methodeneditor) oder extern geschrieben (Formeln, Dateien mit 4D Tags, die mit PROCESS 4D TAGS oder dem Web Server bearbeitet werden, Exportdateien, 4D Write Pro Dokumente...),
- In den Bereichen Ausdruck des Debugger und des Runtime Explorer,
- In der Eigenschaftenliste des Formulareditors für Formularobjekte: Felder vom Typ Variable oder Ausdruck, sowie verschiedene Auswahl Listboxen und Spalten Ausdrücke (Datenquelle, Hintergrundfarbe, Stil oder Schriftfarbe).

## Initialisierung

Objekte müssen initialisiert sein, z. B. mit dem Befehl `New object`, sonst wird beim Versuch, ihre Elemente zu lesen oder zu modifizieren, ein Syntaxfehler erzeugt.

Beispiel:
```4d
 C_OBJECT($obVar) //creation of an object type 4D variable
 $obVar:=New object //initialization of the object and assignment to the 4D variable
```

### Regular oder shared Object

Sie können zwei Arten von Objekten erstellen:

- regular (non-shared) objects mit dem Befehl `New object`. Diese Objekte lassen sich ohne eine spezifische Zugriffskontrolle bearbeiten, aber nicht zwischen Prozessen teilen.
- shared objects mit dem Befehl `New shared object`. Diese Objekte lassen sich zwischen Prozessen teilen, inkl. preemptive Threads. Der Zugriff auf diese Objekte wird über `Use...End use` Strukturen gesteuert. Weitere Informationen dazu finden Sie auf der Seite [Shared Objects und Collections](Concepts/shared.md).


## Grundlagen der Syntax

Mit Objektnotation können Sie auf Werte von Objekteigenschaften über eine Kette von Tokens zugreifen.

### Objekteigenschaften

Objektnotation bietet zwei Wege, um auf Objekteigenschaften zuzugreifen:

- using a "dot" symbol: > object.propertyName

Beispiel:
```4d
     employee.name:="Smith"
```

- using a string within square brackets: > object["propertyName"]

Beispiele:
```4d
     $vName:=employee["name"]
     //or also:
     $property:="name"
     $vName:=employee[$property]

```

Da der Wert einer Objekteigenschaft ein Objekt oder eine Collection sein kann, akzeptiert Objektnotation eine Folge von Symbolen, um auf Untereigenschaften zuzugreifen, wie zum Beispiel:
```4d
 $vAge:=employee.children[2].age
```
Objektnotation ist in allen Elementen der Programmiersprache verfügbar, die ein Objekt enthalten oder zurückgeben, wie z.B:

- **Die Objekte selbst** (gespeichert in Variablen, Feldern, Objekteigenschaften, Objekt Arrays oder Collection Elementen). Beispiele:

```4d
     $age:=$myObjVar.employee.age //variable
     $addr:=[Emp]data_obj.address //field
     $city:=$addr.city //property of an object
     $pop:=$aObjCountries{2}.population //object array
     $val:=$myCollection[3].subvalue //collection element
```
- **4D Befehle**, die Objekte zurückgeben. Beispiel:

```4d
     $measures:=Get database measures.DB.tables
```

- **Projektmethoden**, die Objekte zurückgeben. Beispiel:

```4d
      // MyMethod1
     C_OBJECT($0)
     $0:=New object("a";10;"b";20)

      //myMethod2
     $result:=MyMethod1.a //10
```

- **Collections** Example:

```4d
     myColl.length //size of the collection
```

### Zeiger
**Vorbemerkung:** Da Objekte immer per Referenz übergeben werden, sind normalerweise keine Zeiger erforderlich. 4D verwendet bei Objekten intern automatisch einen ähnlichen Mechanismus wie bei einem Zeiger. Das minimiert Speicherplatz, Sie können die Parameter verändern und Änderungen zurückgeben. Folglich benötigen Sie eigentlich keine Zeiger. Wollen Sie jedoch Zeiger verwenden, können Sie über Zeiger auf Eigenschaftswerte zugreifen.

Die Objektnotation mit Zeigern ist ähnlich wie die Objektnotation direkt mit Objekten, der Unterschied ist Weglassen des Zeichens "Punkt".

- Direkter Zugriff:
> pointerOnObject->propertyName

- Zugriff über Name:
> pointerOnObject->["propertyName"]

Beispiel:

```4d
 C_OBJECT(vObj)
 C_POINTER(vPtr)
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```

### Wert Null

Die Objektnotation unterstützt den **Nullwert** über die Funktion **Null**. Damit können Sie Objekteigenschaften oder Collection Elementen den Nullwert zuweisen oder vergleichen, zum Beispiel:

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

Weitere Informationen dazu finden Sie unter dem Befehl `Null`.

### Wert Undefiniert

Das Bewerten einer Objekteigenschaft kann manchmal einen undefinierten Wert ergeben. Wenn Sie versuchen, undefinierte Ausdrücke zu lesen oder zuzuweisen, generiert 4D normalerweise Fehler. Das passiert jedoch nicht in folgenden Fällen:

- Lesen der Eigenschaft eines undefinierten Objekts oder Werts gibt undefiniert zurück; Variablen (außer Arrays) einen undefinierten Wert zuweisen hat dieselbe Wirkung, wie CLEAR VARIABLE aufrufen:

```4d
     C_OBJECT($o)
     C_LONGINT($val)
     $val:=10 //$val=10
     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable
      //$val=0
```

- Lesen der Eigenschaft **length** einer undefinierten Collection ergibt 0:

```4d
     C_COLLECTION($c) //variable created but no collection is defined
     $size:=$c.length //$size = 0
```

- Ein undefinierter Wert in einer Projektmethode wird automatisch in 0 oder "" konvertiert, je nach dem deklarierten Parametertyp.

```4d
     C_OBJECT($o)
     mymethod($o.a) //pass an undefined parameter

      //In mymethod method
     C_TEXT($1) //parameter type is text
      // $1 contains ""
```

- Ein bedingter Ausdruck wird automatisch in Falsch konvertiert, wenn er über If und Case of als undefiniert gewertet wird:

```4d
     C_OBJECT($o)
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```

- Einer vorhandenen Objekteigenschaft einen undefinierten Wert zuweisen, initialisiert je nach Typ ihren Wert neu oder hebt ihn auf:
 - Objekt, Collection, Zeiger: Null
 - Bild: Leeres Bild
 - Boolean: Falsch
 - String: ""
 - Zahl: 0
 - Datum: !00-00-00! wenn die Einstellung "Verwende Datumstyp anstelle von ISO Datumsformat in Objekten" aktiviert ist, sonst ""
 - Zeit: 0 (Anzahl ms)
 - Undefiniert, Null: keine Änderung

```4d
     C_OBJECT($o)
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- Einer nicht vorhandenen Objekteigenschaft einen undefinierten Wert zuweisen, führt nichts aus.

Erwartet Ihr 4D Code Ausdrücke eines bestimmten Typs, können Sie sicherstellen, dass diese den korrekten Typ haben, selbst wenn sie als undefiniert bewertet werden. Dazu übergeben Sie die passenden 4D Befehle `String`, `Num`, `Date`, `Time`, `Bool`. Sie geben einen leeren Wert des angegebenen Typs zurück, wenn der Ausdruck als undefiniert bewertet wird. Beispiel:

```4d
 $myString:=Lowercase(String($o.a.b)) //make sure you get a string value even if undefined
  //to avoid errors in the code
```

## Identifier für Objekteigenschaft

Die Namensvergabe für Token, z.B. Namen von Objekteigenschaften, auf die über Objektnotation zugegriffen wird, ist restriktiver als für standardmäßige 4D Objektnamen. Sie müssen die Regeln für JavaScript Identifier berücksichtigen (siehe [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)):

- Das erste Zeichen muss ein Buchstabe, ein Unterstrich (_) oder ein Dollarzeichen sein ($),
- Nachfolgende Zeichen können ein Buchstabe, Digit, Unterstrich oder Dollarzeichen sein. Leerzeichen sind NICHT erlaubt.
- Groß- und Kleinschreibung wird berücksichtigt.

**Hinweis:**

- Die Verwendung eines Tabellenfeldes als Collection Index, wie z.B. a.b[[Table1]Id], ist nicht erlaubt. Sie müssen eine Variable dazwischen setzen.
- Bei Objektattributen, die als String in eckige Klammern gesetzt sind, müssen Sie keine ECMA Schreibregeln beachten. Beispiel: Das Attribut $o["My Att"] ist in 4D trotz Leerzeichen gültig. Sie können dann jedoch mit diesem Attribut keine Objektnotation verwenden.


## Beispiele
Der Einsatz von Objektnotation im 4D Code vereinfacht die Verwaltung von Objekten. Beachten Sie, dass die Befehlsnotation weiterhin voll unterstützt wird.

- Objekte schreiben und lesen (dieses Beispiel vergleicht Objektnotation und Befehlsnotation miteinander):

```4d
  // Using the object notation
 C_OBJECT($myObj) //declares a 4D variable object
 $myObj:=New object //creates an object and assigns to the variable
 $myObj.age:=56
 $age:=$myObj.age //56

  // Using the command notation
 C_OBJECT($myObj2) //declares a 4D variable object
 OB SET($myObj2;"age";42) //creates an object and adds the age property
 $age:=OB Get($myObj2;"age") //42

  // Of course, both notations can be mixed
 C_OBJECT($myObj3)
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age //10
```

- Eine Eigenschaft erstellen und Werte, inkl. Objekte, zuweisen:

```4d
 C_OBJECT($Emp)
 $Emp:=New object
 $Emp.city:="London" //creates the city property and sets its value to "London"
 $Emp.city:="Paris" //modifies the city property
 $Emp.phone:=New object("office";"123456789";"home";"0011223344")
  //creates the phone property and sets its value to an object
```

- Einen Wert in einem Unterobjekt erhalten, ist mit Objektnotation ganz einfach:

```4d
 $vCity:=$Emp.city //"Paris"
 $vPhone:=$Emp.phone.home //"0011223344"
```
- Mit dem Operator [ ] können Sie auf Eigenschaften als String zugreifen

```4d
 $Emp["city"]:="Berlin" //modifies the city property
  //this can be useful for creating properties through variables
 C_TEXT($addr)
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  // creates 4 empty properties "address1...address4" in the $Emp object
```
