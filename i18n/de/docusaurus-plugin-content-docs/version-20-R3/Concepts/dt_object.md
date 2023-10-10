---
id: object
title: Objekt
---

Variablen, Felder oder Ausdrücke vom Typ Objekt können verschiedene Datentypen enthalten. The structure of native 4D objects is based on the classic principle of "property/value" pairs. Die Syntax dieser Objekte basiert auf JSON Notation:

- Ein Eigenschaftenname ist immer ein Text, z. B. "Name". Er muss [spezifische Regeln](identifiers.md#objekteigenschaften) einhalten.

- Der Wert einer Eigenschaft kann einer der folgenden Typen sein:
    - numerisch (Zahl, Ganzzahl, etc.)
    - Text
    - Null
    - boolean
    - Zeiger (als solcher gespeichert, wird beim Verwenden der Funktion `JSON Stringify` oder beim Kopieren bewertet)
    - Datum (Datumstyp oder ISO Datumsformat)
    - Objekt(1) (Objekte können in mehrere Stufen verschachtelt sein)
    - Bild(2)
    - collection

(1) ORDA Objekte wie [Entities](ORDA/dsMapping.md#entity) oder [Entity Selections](ORDA/dsMapping.md#entity-selection) lassen sich nicht in **Feldern vom Typ Objekt** speichern; sie werden jedoch voll in **Objektvariablen** im Speicher unterstützt.

(2) Bei Darstellung als Text im Debugger oder Export in JSON zeigen die Eigenschaften des Objekts Bild "[Objekt Bild]" an.

:::caution

Keep in mind that property names differentiate between upper and lower case.

:::


You manage Object type variables, fields or expressions using the [object notation](dt_object.md#syntax-basics) or the commands available in the **Objects (Language)** theme. Über spezifische Befehle im Kapitel **Suchen** wie `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE` oder `ORDER BY ATTRIBUTE` können Sie mit Objektfeldern arbeiten.

Jeder Eigenschaftswert, auf den über Objektnotation zugegriffen wird, wird als ein Ausdruck gewertet. Sie können solche Werte überall verwenden, wo 4D Ausdrücke erwartet werden:

- in 4D code, either written in the methods (Code Editor) or externalized (formulas, 4D tags files processed by `PROCESS 4D TAGS` or the Web Server, export files, 4D Write Pro documents...),
- In den Bereichen Ausdruck des Debugger und des Runtime Explorer,
- In der Eigenschaftenliste des Formulareditors für Formularobjekte: Felder vom Typ Variable oder Ausdruck, sowie verschiedene Auswahl Listboxen und Spalten Ausdrücke (Datenquelle, Hintergrundfarbe, Stil oder Schriftfarbe).

## Instantiation

Objects must have been instantiated, otherwise trying to read or modify their properties will generate a syntax error.

Object instantiation can be done in one of the following ways:

- using the [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) command,
- using the `{}` operator.

:::info

Several 4D commands and functions return objects, for example [`Get database measures`](https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html) or [`File`](../API/FileClass.md#file). In this case, it is not necessary to instantiate explicitely the object, the 4D language does it for you.

:::



### `New object` command

The [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) command creates a new empty or prefilled object and returns its reference.

Beispiele:

```4d
 var $obVar : Object //declaration of an object type 4D variable
 $obVar:=New object //instantiation of an object and assignment to the 4D variable

 var $obFilled : Object 
 $obFilled:=New object("name";"Smith";"age";42) //instantiation and assignment of a prefilled object
```


### `{}` operator

The `{}` operator allows you to create an **object literal**. An object literal is a semi-column separated list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`). The object literal syntax creates empty or filled objects.

Since any property value is considered an expression, you can create sub-objects using `{}` in property values.  You can also create and reference **collection literals**.

Beispiele:

```4d
 var $o ; $o2 ; $o3 : Object //declaration of object variables
 $o := {} // instantiation of an empty object 
 $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instantiation of an object
        // with properties {"a":"foo","b":42,"c":{},"d":false})

    // same properties using variables
 var $a : Text
 var $b : Number
 var $c : Object
 $a:="foo"
 $b:=42
 $c:={}
 $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}

```

You can mix the `New object` and literal syntaxes:

```4d
$o:={\
    ob1: {age: 42}; \
    ob2: New object("message"; "Hello"); \
    form1: Formula(return This.ob1.age+10); \
    form2 : Formula(ALERT($1)); \
    col: [1; 2; 3; 4; 5; 6]\
    }

$o.form1()  //52
$o.form2($o.ob2.message)  // displays Hello
$col:=$o.col[5] //6
```




### Regular oder shared Object

Sie können zwei Arten von Objekten erstellen:

- regular (non-shared) objects, using the [`New object`](https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html) command or object literal syntax (`{}`). Diese Objekte lassen sich ohne eine spezifische Zugriffskontrolle bearbeiten, aber nicht zwischen Prozessen teilen.
- shared objects, using the [`New shared object`](https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html) command. Diese Objekte lassen sich zwischen Prozessen teilen, inkl. preemptive Threads. Der Zugriff auf diese Objekte wird über `Use...End use` Strukturen gesteuert. For more information, refer to the [Shared objects and collections](shared.md) section.


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
     #DECLARE -> $o : Object
     $o:=New object("a";10;"b";20)

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
 var vObj : Object
 var vPtr : Pointer
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

For more information, please refer to [Null and Undefined](dt_null_undefined.md).

### Wert Undefiniert

Das Bewerten einer Objekteigenschaft kann manchmal einen undefinierten Wert ergeben. Wenn Sie versuchen, undefinierte Ausdrücke zu lesen oder zuzuweisen, generiert 4D normalerweise Fehler. Das passiert jedoch nicht in folgenden Fällen:

- Reading a property of an undefined object or value returns undefined; assigning an undefined value to variables (except arrays) has the same effect as calling [`CLEAR VARIABLE`](https://doc.4d.com/4dv19R/help/command/en/page89.html) with them:

```4d
     var $o : Object
     var $val : Integer
     $val:=10 //$val=10
     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable
      //$val=0
```

- Lesen der Eigenschaft **length** einer undefinierten Collection ergibt 0:

```4d
     var $c : Collection //variable created but no collection is defined
     $size:=$c.length //$size = 0
```

- Ein undefinierter Wert in einer Projektmethode wird automatisch in 0 oder "" konvertiert, je nach dem deklarierten Parametertyp.

```4d
     var $o : Object
     mymethod($o.a) //pass an undefined parameter

      //In mymethod method
     #Declare ($myText : Text) //parameter type is text
      // $myText contains ""
```

- Ein bedingter Ausdruck wird automatisch in Falsch konvertiert, wenn er über If und Case of als undefiniert gewertet wird:

```4d
     var $o : Object
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
     var $o : Object
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- Einer nicht vorhandenen Objekteigenschaft einen undefinierten Wert zuweisen, führt nichts aus.


Erwartet Ihr 4D Code Ausdrücke eines bestimmten Typs, können Sie sicherstellen, dass diese den korrekten Typ haben, selbst wenn sie als undefiniert bewertet werden. Dazu übergeben Sie die passenden 4D Befehle `String`, `Num`, `Date`, `Time`, `Bool`. Sie geben einen leeren Wert des angegebenen Typs zurück, wenn der Ausdruck als undefiniert bewertet wird. Beispiel:

```4d
 $myString:=Lowercase(String($o.a.b)) //make sure you get a string value even if undefined
  //to avoid errors in the code
```

For more information, please refer to [Null and Undefined](dt_null_undefined.md)

## Beispiele

Der Einsatz von Objektnotation im 4D Code vereinfacht die Verwaltung von Objekten. Beachten Sie, dass die Befehlsnotation weiterhin voll unterstützt wird.

- Objekte schreiben und lesen (dieses Beispiel vergleicht Objektnotation und Befehlsnotation miteinander):

```4d
  // Using the object notation
 var $myObj : Object //declares a 4D variable object
 $myObj:={} //creates an object literal and assigns it to the variable
 $myObj.age:=56
 $age:=$myObj.age //56

  // Using the command notation
 var $myObj2 : Object //declares a 4D variable object
 OB SET($myObj2;"age";42) //creates an object and adds the age property
 $age:=OB Get($myObj2;"age") //42

  // Of course, both notations can be mixed
 var $myObj3 : Object
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age //10
```

- Eine Eigenschaft erstellen und Werte, inkl. Objekte, zuweisen:

```4d
 var $Emp : Object
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
 var $addr : Text
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  // creates 4 empty properties "address1...address4" in the $Emp object
```
