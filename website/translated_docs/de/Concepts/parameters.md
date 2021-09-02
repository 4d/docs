---
id: parameters
title: Parameter
---


Sie werden öfters sehen, dass Sie Ihren Methoden und Funktionen Daten übergeben müssen. Das lässt sich leicht mit Parametern durchführen.

## Überblick

**Parameter** (oder **Argumente**) sind Datenteile, die eine Methode oder eine Class Function zum Ausführen ihrer Aufgaben benötigen. Die Begriffe *Parameter* und *Argument* werden in der Dokumentation ohne Unterscheidung verwendet. Parameter werden auch in den integrierten 4D Befehlen verwendet. In diesem Beispiel ist der String “Hello” ein Argument des 4D Befehls `ALERT`:

```4d
ALERT("Hello")
```

Parameter werden Methoden oder Class Functions auf dieselbe Weise übergeben. Erlaubt beispielsweise eine Class Function mit Namen `getArea()` zwei Parameter, könnte ein Aufruf der Class Function wie folgt aussehen:

```
$area:=$o.getArea(50;100)
```

Oder erlaubt beispielsweise eine Projektmethode mit Namen `DO_SOMETHING` drei Parameter, könnte ein Aufruf der Methode wie folgt aussehen:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

Die Eingabeparameter werden durch Strichpunkte (;) voneinander getrennt.

Dasselbe Prinzip gilt, wenn Methoden durch bestimmte Befehle ausgeführt werden, zum Beispiel:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pass the !05/05/20! date as parameter to the SetCalendarDate  
//in the context of a subform
```

Daten können auch von Methoden und Class Functions **zurückgegeben** werden. Folgende Zeile ist beispielsweise eine Anweisung mit dem integrierten Befehl `Length`, um die Länge eines String zurückzugeben. Die Anweisung setzt den von `Length` zurückgegebenen Wert in eine Variable mit Namen *MyLength*. Hier sehen Sie die Anweisung:

```4d
MyLength:=Length("How did I get here?")
```

Jede Subroutine kann einen Wert zurückgeben. Pro Methode oder Class Function lässt sich nur ein einzelner Ausgabeparameter deklarieren.

Eingabe- und Ausgabewerte werden im Moment des Aufrufs [bewertet](#werte-oder-referenzen) und in lokale Variablen innerhalb der aufgerufenen Class Function oder Methode kopiert. Es gibt zwei Syntaxarten, um Variablenparameter im aufgerufenen Code zu deklarieren:

- [benannte Variablen](#parameter-mit-namen) (in den meisten Fällen empfohlen) oder
- [sequentiell nummerierte Variablen](#sequentielle-parameter).


Both [named](#named-parameters) and [sequential](#sequential-parameters) syntaxes can be mixed with no restriction to declare parameters. Beispiel:

```4d
Function add($x : Integer)
    var $0;$2 : Integer
    $0:=$x+$2
```




## Parameter mit Namen

In den aufgerufenen Methoden oder Class Functions werden Parameterwerte lokalen Variablen zugewiesen. Sie deklarieren Parameter mit einem **Parameternamen** und mit einem **Parametertyp**, getrennt durch Strichpunkt.

- Für Class Functions werden Parameter über das Schlüsselwort `Function` deklariert.
- Für Methoden (Projektmethoden, Formularobjektmethoden, Datenbankmethoden und Trigger) werden Parameter über das Schlüsselwort `#DECLARE` zu Beginn des Methodencode deklariert.

Beispiele:

```4d
Function getArea($width : Integer; $height : Integer) -> $area : Integer
```

```4d  
 //myProjectMethod
#DECLARE ($i : Integer) -> $myResult : Object
```


Es gelten folgende Regeln:

- Die Zeile zum Deklarieren muss die erste Zeile des Methoden- oder Function-Code sein, sonst erscheint ein Fehler (davor können nur Kommentare oder Zeilenumbrüche stehen).
- Parameternamen müssen mit einem `$` Zeichen beginnen und mit den [Schreibregeln für Eigenschaftsnamen](dt_object.md#identifier-für-objekteigenschaft) konform sein.
- Mehrere Parameter (und Typen) werden durch Strichpunkte (;) voneinander getrennt.
- Eine Syntax über mehrere Zeilen wird unterstützt (mit den Zeichen "\\").


Sie können z. B. eine Function `getArea()` mit zwei Parametern aufrufen:

```4d
$area:=$o.getArea(50;100)
```

Im Code der Class Function wird der Wert jedes Parameters in den entsprechenden deklarierten Parameter kopiert:

```4d    
// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
    $area:=$width*$height
```
> If the type is not defined, the parameter will be defined as [`Variant`](dt_variant.md).

Alle Arten von 4D Methoden unterstützen das Schlüsselwort `#DECLARE`, inkl. Datenbankmethoden. Sie können z. B. in der Datenbankmethode `On Web Authentication` benannte Parameter deklarieren:

```4d    
    // On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean
$entitySelection:=ds.User.query("login=:1"; $user)
// Check hash password...
```

### Rückgabewert

Sie deklarieren den Rückgabeparameter einer Funktion mit einem Pfeil (->) und der Definition des Parameters nach der Liste der Eingabeparameter. Beispiel:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

Sie können den Rückgabeparameter auch nur mit `: type` deklarieren. Er ist dann automatisch über `$0` verfügbar ([siehe unten sequentielle Syntax](#rückgabewert-1)). Beispiel:

```4d
Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
```


### Unterstützte Datentypen

Mit benannten Parametern können Sie dieselben Datentypen wie für [ das Schlüsselwort `var` ](variables.md#das schlüsselwort-var-verwenden) verwenden, inkl. Objekte von Klassen.  Beispiel:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```





## Sequentielle Parameter

Als Alternative zur Syntax [benannte Parameter](#parameter-mit-namen) können Sie Parameter über fortlaufend nummerierte Variablen deklarieren: **$1**, **$2**, **$3**, usw. Die Nummerierung der lokalen Variablen zeigt die Reihenfolge der Parameter.

> Auch wenn Class Functions diese Syntax unterstützen, empfehlen wir hier, die Syntax [benannte Parameter](#parameter-mit-namen) zu verwenden.

Sie können z. B. eine Projektmethode `DO_SOMETHING` mit drei Parametern aufrufen:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

Im Code der Methode wird der Wert jedes Parameters automatisch in die Variablen $1, $2, $3 kopiert:

```4d
  //Code of the method DO_SOMETHING
  //Assuming all parameters are of the text type
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contains the $WithThis parameter
  //$2 contains the $AndThat parameter
  //$3 contains the $ThisWay parameter
```


### Rückgabewert

Der zurückzugebende Wert wird automatisch in die lokale Variable `$0` gesetzt.


Zum Beispiel gibt die folgende Methode mit Namen `Uppercase4` einen String zurück, der seine ersten vier Zeichen in Großbuchstaben gesetzt hat:

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

Hier ein Beispiel mit der Methode Uppercase4:

```4d
$NewPhrase:=Uppercase4("This is good.")
```

Die Variable *$NewPhrase* erhält “THIS is good.”

Der zurückgegebene Wert `$0` ist eine lokale Variable innerhalb der Unterroutine. Sie lässt sich als solche innerhalb der Unterroutine verwenden. Sie schreiben zum Beispiel:

```4d
// Do_something
$0:=Uppercase($1)
ALERT($0)
```

In diesem Beispiel wird `$0` zuerst der Wert von `$1` zugewiesen und dann als Parameter für den Befehl`ALERT` verwendet. Innerhalb der Unterroutine können Sie `$0` auf dieselbe Weise wie jede andere lokale Variable verwenden. Es ist 4D, das den Wert von `$0` (genauso wenn die Unterroutine endet) an die aufgerufene Methode zurückgibt.


### Unterstützte Datentypen

Sie können jeden [Ausdruck](schnelle-tour.md#ausdruckstypen) als sequentiellen Parameter verwenden, außer:

- Tabellen
- arrays

Tabellen oder Array Ausdrücke lassen sich nur [über einen Zeiger als Referenz übergeben](dt_pointer.md#zeiger-als-parameter-in-methoden).

## Parameter indirection (${$i})

4D Projektmethoden akzeptieren eine variable Anzahl von Parametern desselben Typs, beginnend von rechts. Dieses Prinzip wird **Parameter Indirektion** genannt. Using the [`Count parameters`](https://doc.4d.com/4dv19/help/command/en/page259.html) command you can then address those parameters with a `For...End for` loop and the parameter indirection syntax. Within the method, an indirection address is formatted `${$i}`, where `$i` is a numeric variable. `${$i}` is called a **generic parameter**.

Im folgenden Beispiel akzeptiert die Projektmethode `SEND PACKETS` einen Parameter Time mit einer variablen Anzahl von Textparametern:

```4d
  //SEND PACKETS Project Method
  //SEND PACKETS ( Time ; Text { ; Text2... ; TextN } )
  //SEND PACKETS ( docRef ; Data { ; Data2... ; DataN } )

 C_TIME($1)
 C_TEXT(${2}) //generic parameter declaration
 C_LONGINT($vlPacket)

 For($vlPacket;2;Count parameters)
    SEND PACKET($1;${$vlPacket})
 End for
```

> Die Indirektion von Parametern funktioniert am besten, wenn Sie die folgende Regel beachten: Werden nur einige der Parameter durch Indirektion angesprochen, sollten sie nach den anderen übergeben werden.



### Using generic parameters

Consider a method that adds values and returns the sum formatted according to a format that is passed as a parameter. Bei jedem Aufruf dieser Methode kann die Anzahl der zu addierenden Werte variieren. Wir müssen die Werte als Parameter an die Methode und das Format in Form einer Zeichenkette übergeben. Die Anzahl der Werte kann von Aufruf zu Aufruf variieren.

This method is called in the following manner:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)

```

In this case, the calling method will get the string "182.70", which is the sum of the numbers, formatted as specified. The method's parameters must be passed in the correct order: first the format and then the values.

Here is the method, named `MySum`:

```4d
 $Sum:=0
 For($i;2;Count parameters)
    $Sum:=$Sum+${$i}
 End for
 $0:=String($Sum;$1)
```

This method can now be called in various ways:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)
 Result:=MySum("000";1;2;3;200)
```

Note that even if you declared one or more parameters in the method, you can always pass the number of parameters that you want. In this case, extra parameters are all available through the `${$i}` syntax and their type is [Variant](dt_variant.md). You just need to make sure parameters exist, thanks to the [`Count parameters`](https://doc.4d.com/4dv19/help/command/en/page259.html) command. Beispiel:

```4d
#DECLARE($param1 : Text) //we declare a single parameter, but we can get more
MESSAGE( "First parameter: "+$param1)
For($i;2;Count parameters)
    MESSAGE( "parameter "+string($i)+": " +String(${$i}))
End for
```


### Generische Parameter deklarieren

Analog zu anderen lokalen Variablen müssen auch generische Parameter nicht zwingend über Compiler Direktive aufgerufen werden. Es wird jedoch empfohlen, um jegliche Zweideutigkeiten zu vermeiden. Non-declared generic parameters automatically get the [Variant](dt_variant.md) type.

To declare generic parameters parameters, you use a compiler directive to which you pass ${N} as a parameter, where N specifies the first generic parameter.

```4d
 C_LONGINT(${4})
```

> Declaring generic parameters can only be done with the [sequential syntax](#sequential-parameters).

Dieser Befehl bedeutet, dass die Methode ab dem 4. Parameter (eingeschlossen) eine variable Anzahl an Parametern vom Typ Lange Ganzzahl empfangen kann. $1, $2 und $3 können einen beliebigen Datentyp haben. Nutzen Sie jedoch $2 per Indirektion, wird als Datentyp der generische Typ verwendet. Es wird also der Datentyp Lange Ganzzahl sein, auch wenn es für Sie z. B. der Datentyp Zahl war.

> Die Nummer in der Deklaration muss eine Konstante und keine Variable sein.





## Parameter für kompilierten Modus deklarieren

Auch wenn es im [interpretierten Modus](interpreted-compiled.md) nicht zwingend ist, sollten Sie jeden Parameter in den aufgerufenen Methoden oder Functions deklarieren, um Probleme zu vermeiden.

Mit der Syntax [benannte Variable](#parameter-mit-namen), werden Parameter automatisch über das Schlüsselwort `#DECLARE` oder den Prototyp `Function` deklariert. Beispiel:

```4d
Function add($x : Variant; $y : Integer)-> $result : Integer
    // all parameters are declared with their type
```


When using the [sequential variable syntax](#sequential-parameters), you need to make sure all parameters are properly declared. Im folgenden Beispiel akzeptiert die Projektmethode `Capitalize` einen Textparameter und gibt ein Textergebnis zurück:

```4d
  // Capitalize Project Method
  // Capitalize ( Text ) -> Text
  // Capitalize ( Source string ) -> Capitalized string

 C_TEXT($0;$1)
 $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))
```

Auch wenn Sie Befehle wie `New process` mit Prozessmethoden verwenden, die Parameter akzeptieren, müssen Sie Parameter explizit in der aufgerufenen Methode deklarieren. Beispiel:

```4d
C_TEXT($string)
C_LONGINT($idProc;$int)
C_OBJECT($obj)

$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)
```

Diese Methode lässt sich im kompilierten Modus nur ausführen, wenn "foo_method" ihre Parameter deklariert:

```4d
//foo_method
C_TEXT($1)
C_LONGINT($2)
C_OBJECT($3)
...
```

> Für den kompilierten Modus können Sie alle Parameter von lokalen Variablen für Projektmethoden in einer spezifischen Methode gruppieren, deren Namen mit "Compiler" beginnt. In dieser Methode können Sie die Parameter für jede Methode vorab deklarieren, zum Beispiel:
```4d  
 // Compiler_method
 C_REAL(OneMethodAmongOthers;$1) 
```
Weitere Informationen dazu finden Sie auf der Seite [Interpretierter und kompilierter Modus](interpreted-compiled.md).

Deklarieren der Parameter ist auch in folgenden Kontexten zwingend (sie unterstützen nicht die Deklaration in einer "Compiler" Methode):

- Datenbankmethoden - Zum Beispiel erhält die `Datenbankmethode On Web Connection` die sechs Parameter $1 bis $6 vom Datentyp Text. Zu Beginn der Datenbankmethode müssen Sie schreiben (selbst wenn keiner der Parameter genutzt wird):

```4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

> Sie können auch [benannte Parameter](#parameter-mit-namen) mit dem Schlüsselwort `#DECLARE` verwende.

- Trigger - Der Parameter $0 (Lange Ganzzahl), der das Ergebnis eines Trigger ist, wird vom Compiler typisiert, wenn der Parameter nicht explizit deklariert wurde. Wollen Sie ihn jedoch deklarieren, müssen Sie das direkt im Trigger tun.

- Formularobjekte mit dem Formularereignis `On Drag Over` - Der Parameter $0 (Lange Ganzzahl), der das Ergebnis des Formularereignisses `On Drag Over` ist, wird vom Compiler typisiert, wenn der Parameter nicht explizit deklariert wurde. Wollen Sie ihn jedoch deklarieren, müssen Sie das direkt in der Objektmethode tun. **Hinweis:** Der Compiler initialisiert nicht den Parameter $0, d. h. sobald Sie das Formularereignis`On Drag Over` verwenden, müssen Sie $0 initialisieren. Beispiel:

```4d
 C_LONGINT($0)
 If(Form event=On Drag Over)
    $0:=0
    ...
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 End if
```

## Wrong parameter type

Calling a parameter with an wrong type is an [error](error-handling.md) that prevents correct execution. For example, if you write the following methods:

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) //wrong type, text expected
```

This case is handled by 4D depending on the context:

- in [compiled projects](interpreted.md), an error is generated at the compilation step whenever possible. Otherwise, an error is generated when the method is called.
- in interpreted projects:
    + if the parameter was declared using the [named syntax](#named-parameters) (`#DECLARE` or `Function`), an error is generated when the method is called.
    + if the parameter was declared using the [sequential syntax](#sequential-parameters) (`C_XXX`), no error is generated, the called method receives an empty value of the expected type.





## Eingabe- und Ausgabevariablen

Innerhalb der Unterroutine können Sie die Parameter $1, $2... auf dieselbe Weise wie jede andere lokale Variable verwenden. Dagegen lassen sich bei Befehlen, die den Wert der als Parameter übergebenen Variablen verändern, wie z. B. `Find in field` die Parameter $1, $2, usw. nicht direkt verwenden. Sie müssen sie erst in standardmäßige lokale Variablen kopieren, wie z. B. `$myvar=$1`.



## Objekteigenschaften als benannte Parameter verwenden

Bei Objekten als Parameter können Sie auch **Parameter mit Namen** verwalten. Dieser Programmierstil ist einfach, flexibel und leicht lesbar.

Wir verwenden zum Beispiel die Methode `CreatePerson`:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

In der Methode `ChangeAge` schreiben Sie:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

Das ist eine leistungsstarke Möglichkeit zum Definieren von [optionale Parameter](#optional-parameters) (siehe auch unten). Fehlende Parameter können Sie wie folgt verwalten:
- Sie prüfen, ob alle erwarteten Parameter geliefert werden, durch Vergleichen mit dem Wert `Null`, oder
- Sie setzen Parameterwerte vorab, oder
- Sie verwenden sie als leere Werte.

In der oberen Methode `ChangeAge` sind die beiden Eigenschaften Age und Name zwingend und würden Fehler produzieren, falls sie fehlen. Um das zu vermeiden, schreiben Sie einfach:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```
Dann sind beide Parameter optional; werden sie nicht gefüllt, ist das Ergebnis "is 10 years old" und es wird kein Fehler generiert.

Letztendlich ist die Wartung und Umgestaltung von Anwendungen, die Parameter mit Namen verwenden, sehr einfach und sicher. Sie könnten beispielsweise später feststellen, dass 10 Jahre hinzufügen nicht immer geeignet ist. Sie benötigen einen anderen Parameter zum festsetzen, wieviel Jahre hinzugefügt werden sollen. Dazu schreiben Sie:

```4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

//ChangeAge
var $1;$para : Object
$para:=$1  
If ($para.toAdd=Null)
    $para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

Hier ist der Vorteil, dass Sie Ihren vorhandenen Code nicht verändern müssen. Er wird immer wie in der vorigen Version funktionieren, aber bei Bedarf können Sie einen anderen Wert als 10 Jahre verwenden.

Bei Variablen mit Namen kann jeder Parameter optional sein. Im oberen Beispiel sind alle Parameter optional und jeder kann gegeben sein, in beliebiger Reihenfolge.



## Optionale Parameter

Im Handbuch *4D Programmiersprache* geben geschweifte Klammern { } optionale Parameter an. So bedeutet `ALERT (message{; okButtonTitle})`, dass der Befehl ohne den Parameter *okButtonTitle* aufgerufen werden kann. Sie können ihn auf folgende Weise aufrufen:

```4d
ALERT("Are you sure?";"Yes I am") //2 parameters
ALERT("Time is over") //1 parameter
```

Auch 4D Projektmethoden akzeptieren solche optionalen Parameter, gestartet von rechts. Das Problem bei optionalen Parametern ist, wie sie sich verwalten lassen, wenn welche in der aufgerufenen Methode fehlen - das sollte nie einen Fehler produzieren. Eine gute Praxis ist, den nicht-verwendeten Parametern Standardwerte zuzuweisen.

> Werden optionale Parameter in Ihren Methoden benötigt, können Sie [Objekteigenschaften als benannte Parameter](#objekteigenschaften-als-genannte parameter-verwenden) verwenden. Das ist ein flexibler Weg zum Verwalten variabler Parameteranzahlen.

Über den Befehl `Count parameters` in der aufgerufenen Methode können Sie die aktuelle Anzahl der Parameter abfragen und je nach dem, was Sie bekommen, unterschiedliche Operationen ausführen.

Folgendes Beispiel zeigt eine Textmeldung und kann den Text in ein Dokument auf der Festplatte oder in einen 4D Write Pro Bereich einfügen:

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 Method($message : Text; $path : Text; $wpArea : Object)

 ALERT($message)
 If(Count parameters>=3)
    WP SET TEXT($wpArea;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($path;$message)
    End if
 End if
```
Nach Hinzufügen dieser Projektmethode in Ihrer Anwendung können Sie schreiben:

```4d  
APPEND TEXT(vtSomeText) //Will only display the  message
APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path
APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
```




## Werte oder Referenzen

Übergeben Sie einen Parameter, bewertet 4D den Parameterausdruck immer im Kontext der aufrufenden Methode und setzt den **Ergebniswert** in die lokalen Variablen in der Class Function oder Unterroutine. Die lokalen Variablen/Parameter sind nicht die aktuellen Felder, Variablen oder Ausdrücke, die von der aufrufenden Methode übergeben werden; sie enthalten nur die Werte, die übergeben wurden. Da die Reichweite lokal ist, verändert ein geänderter Parameterwert in der Class Funktion/Unterroutine nicht den Wert in der aufrufenden Methode. Beispiel:

```4d
    //Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)

    //Here is the code of the method DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

Die von `DO_SOMETHING` angezeigte Meldung liest "WILLIAMS", die von `MY_METHOD` angezeigte Meldung liest "williams". Die Methode hat lokal den Wert des Parameters $1 lokal geändert. Das beeinflusst aber nicht den Wert des Feldes `[People]Name`, der von der Methode `MY_METHOD` als Parameter übergeben wurde.

Es gibt zwei Wege, damit die Methode `DO_SOMETHING` den Wert des Feldes verändert:

1. Anstatt das Feld in der Methode zu übergeben, setzen Sie einen Zeiger auf das Feld. Sie schreiben folgendes:

```4d
  //Here is some code from the method MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)

  //Here the code of the method DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Hier ist der Parameter nicht das Feld, sondern ein Zeiger auf das Feld. Deshalb ist $1 in der Methode `DO SOMETHING` nicht mehr der Wert des Feldes, sondern ein Zeiger darauf. Das **referenzierte** Objekt durch $1(im Code oben $1->) ist das aktuelle Feld. Das bedeutet, dass eine Änderung des referenzierten Objekts über die Reichweite der Unterroutine hinausgeht und das aktuelle Feld beeinflusst. In diesem Beispiel lesen beide Meldungen "WILLIAMS".

2. Anstatt die Methode `DO_SOMETHING` "etwas tun lassen", können Sie die Methode umschreiben, so dass sie einen Wert zurückgibt. Sie schreiben wie folgt:

```4d
    //Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

    //Here the code of the method DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

Dieser zweite Weg (durch eine Unterroutine einen Wert zurückgeben) wird "eine Funktion verwenden" genannt. Weitere Informationen dazu finden Sie im Abschnitt [Rückgabewerte](#rückgabewert).


### Sonderfälle: Objekte und Collections

Daten vom Typ Objekt und Collection werden automatisch über eine Referenz verwaltet (wie ein interner *Zeiger*).

Werden also solche Datentypen als Parameter verwendet, enthalten `$1, $2...` keine *Werte*, sondern *Referenzen*. Eine Änderung des Werts von Parameter `$1, $2...` in der Unterroutine wird überall, wo Quellobjekt oder Collection verwendet wird, weitergegeben. Das ist dasselbe Prinzip wie für [Zeiger](dt_pointer.md#zeiger-als-parameter-in-methoden), außer dass die Parameter `$1, $2...` in der Unterroutine nicht dereferenziert werden müssen.

Nehmen wir z. B. die Methode `CreatePerson`, die ein Objekt erstellt und es als Parameter sendet:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

Die Methode `ChangeAge` fügt dem Attribut Age des empfangenen Objekts 10 hinzu

```4d
  //ChangeAge
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
```

Führen Sie die Methode `CreatePerson` aus, zeigen beide Meldungen "50", da beide Methoden dieselbe Objektreferenz verwalten.

**4D Server:** Bei Parametern in Methoden, die nicht auf demselben Rechner ausgeführt werden (z. B. mit der Option "auf Server ausführen"), lassen sich Referenzen nicht verwenden. In solchen Fällen werden keine Referenzen, sondern Kopien der Objekt und Collection Parameter gesendet.


