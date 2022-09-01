---
id: parameters
title: Parameter
---


## Parameter verwenden

Sie werden öfters sehen, dass Sie Ihren Methoden Daten übergeben müssen. Das lässt sich leicht mit Parametern durchführen.

**Parameter** (oder **Argumente**) sind Datenteile, die eine Methode zum Ausführen ihrer Aufgaben benötigen. Die Begriffe *Parameter* und *Argument* werden in der Dokumentation ohne Unterscheidung verwendet. Parameter werden auch in den integrierten 4D Befehlen verwendet. In diesem Beispiel ist der String “Hello” ein Argument des 4D Befehls `ALERT`:

```4d
ALERT("Hello")
```

Parameter werden Methoden auf dieselbe Weise übergeben. Akzeptiert beispielsweise eine Projektmethode mit Namen DO_SOMETHING drei Parameter, könnte ein Aufruf der Methode wie folgt aussehen:

```4d
DO SOMETHING(WithThis;AndThat;ThisWay)
```
Parameter werden durch Strichpunkte (;) voneinander getrennt. Ihr Wert wird im Moment des Aufrufs bewertet.

In der Unterroutine (die aufgerufene Methode) wird der Wert jedes Parameters automatisch in fortlaufend nummerierte lokale Variablen kopiert: $1, $2, $3, usw. Die Nummerierung der lokalen Variablen zeigt die Reihenfolge der Parameter.

```4d
  //Code of the method DO SOMETHING
  //Assuming all parameters are of the text type
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contains the WithThis parameter
  //$2 contains the AndThat parameter
  //$3 contains the ThisWay parameter
```

Innerhalb der Unterroutine können Sie die Parameter $1, $2... auf dieselbe Weise wie jede andere lokale Variable verwenden. Dagegen lassen sich bei Befehlen, die den Wert der als Parameter übergebenen Variablen verändern, wie z. B. `Find in field` die Parameter $1, $2, usw. nicht direkt verwenden. Sie müssen sie erst in standardmäßige lokale Variablen kopieren, wie z. B. `$myvar=$1`.

Dasselbe Prinzip gilt, wenn Methoden durch bestimmte Befehle ausgeführt werden, zum Beispiel:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  
//pass the !05/05/10!  
//pass the !05/05/10! date as parameter to the SetCalendarDate  
// in the context of a subform
```

**Hinweis:** Für eine gute Ausführung von Code müssen Sie sicherstellen, dass alle Parameter `$1`, `$2`... innerhalb der aufgerufenen Methoden korrekt deklariert sind (siehe unten [Parameter deklarieren](#declaring-parameters)).


### Unterstützte Ausdrücke

Sie können jeden [Ausdruck](Concepts/quick-tour.md#ausdruckstypen) als Parameter verwenden, außer:

- Tabellen
- Arrays

Tabellen oder Array Ausdrücke lassen sich nur [über einen Zeiger als Referenz übergeben](Concepts/dt_pointer.md#zeiger-als-parameter-in-methoden).


## Funktionen

Daten können von Methoden zurückgegeben werden. Eine Methode, die einen Wert zurückgibt, heißt Funktion.

4D oder 4D Plug-In Befehle, die einen Wert zurückgeben, werden auch Funktionen genannt.

Folgende Zeile ist beispielsweise eine Anweisung mit der integrierten Funktion `Length`, um die Länge eines String zurückzugeben. Die Anweisung setzt den von `Length` zurückgegebenen Wert in eine Variable mit Namen *MyLength*. Hier sehen Sie die Anweisung:

```4d
MyLength:=Length("How did I get here?")
```

Jede Subroutine kann einen Wert zurückgeben. Der zurückzugebende Wert wird automatisch in die lokale Variable `$0` gesetzt.

Zum Beispiel gibt die folgende Funktion mit Namen `Uppercase4` einen String zurück, der seine ersten vier Zeichen in Großbuchstaben gesetzt hat:

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

Hier ein Beispiel mit der Funktion Uppercase4:

```4d
NewPhrase:=Uppercase4("This is good.")
```

Die Variable *$NewPhrase* erhält “THIS is good.”

Das Funktionsergebnis `$0` ist eine lokale Variable innerhalb der Unterroutine. Sie lässt sich als solche innerhalb der Unterroutine verwenden. It can be used as such within the subroutine. Innerhalb der Unterroutine können Sie `$0` auf dieselbe Weise wie jede andere lokale Variable verwenden. Es ist 4D, das den Wert von `$0` (genauso wenn die Unterroutine endet) an die aufgerufene Methode zurückgibt.


## Parameter deklarieren

Auch wenn es im [interpretierten Modus](Concepts/interpreted-compiled.md) nicht zwingend ist, müssen Sie jeden Parameter in den aufgerufenen Methoden deklarieren, um Probleme zu vermeiden.

Im folgenden Beispiel deklariert die Projektmethode `OneMethodAmongOthers` drei Parameter:

```4d
  // OneMethodAmongOthers Project Method
  // OneMethodAmongOthers ( Real ; Date { ; Long } )
  // OneMethodAmongOthers ( Amount ; Date { ; Ratio } )

 C_REAL($1) // 1st parameter is of type Real
 C_DATE($2) // 2nd parameter is of type Date
 C_LONGINT($3) // 3rd parameter is of type Long Integer
```

Im folgenden Beispiel akzeptiert die Projektmethode `Capitalize` einen Textparameter und gibt ein Textergebnis zurück:

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

**Hinweis:** Für den kompilierten Modus können Sie alle Parameter von lokalen Variablen für Projektmethoden in einer spezifischen Methode gruppieren, deren Namen mit "Compiler" beginnt. In dieser Methode können Sie die Parameter für jede Methode vorab deklarieren, zum Beispiel:
```4d
 C_REAL(OneMethodAmongOthers;$1)
```
Weitere Informationen dazu finden Sie auf der Seite [Interpretierter und kompilierter Modus](Concepts/interpreted-compiled.md).

Deklarieren der Parameter ist auch in folgenden Kontexten zwingend (sie unterstützen nicht die Deklaration in einer "Compiler" Methode):

- Database methods For example, the `On Web Connection Database Method` receives six parameters, $1 to $6, of the data type Text. Zu Beginn der Datenbankmethode müssen Sie schreiben (selbst wenn keiner der Parameter genutzt wird):

```4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

- Triggers The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Wollen Sie ihn jedoch deklarieren, müssen Sie das direkt im Trigger tun.

- Form objects that accept the `On Drag Over` form event The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Wollen Sie ihn jedoch deklarieren, müssen Sie das direkt in der Objektmethode tun. **Hinweis:** Der Compiler initialisiert nicht den Parameter $0, d. h. sobald Sie das Formularereignis`On Drag Over` verwenden, müssen Sie $0 initialisieren. Beispiel:
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
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 End if
```

## Werte oder Referenzen

Übergeben Sie einen Parameter, bewertet 4D den Parameterausdruck immer im Kontext der aufrufenden Methode und setzt den **Ergebniswert** in die lokalen Variablen $1, $2... in der Unterroutine (siehe [Parameter verwenden](#using-parameters)). Die lokalen Variablen/Parameter sind nicht die aktuellen Felder, Variablen oder Ausdrücke, die von der aufrufenden Methode übergeben werden; sie enthalten nur die Werte, die übergeben wurden. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Beispiel:

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

This second technique of returning a value by a subroutine is called “using a function.” This is described in the [Returning values](#returning-values) paragraph. Weitere Informationen dazu finden Sie im Abschnitt [Funktionen](#functions).


### Sonderfälle: Objekte und Collections

Daten vom Typ Objekt und Collection werden automatisch über eine Referenz verwaltet (wie ein interner *Zeiger*).

Werden also solche Datentypen als Parameter verwendet, enthalten `$1, $2...` keine *Werte*, sondern *Referenzen*. Eine Änderung des Werts von Parameter `$1, $2...` in der Unterroutine wird überall, wo Quellobjekt oder Collection verwendet wird, weitergegeben. Das ist dasselbe Prinzip wie für [Zeiger](Concepts/dt_pointer.md#zeiger-als-parameter-in-methoden), außer dass die Parameter `$1, $2...` in der Unterroutine nicht dereferenziert werden müssen.

Nehmen wir z. B. die Methode `CreatePerson`, die ein Objekt erstellt und es als Parameter sendet:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

Die Methode `ChangeAge` fügt dem Attribut Age des empfangenen Objekts 10 hinzu

```4d
  //ChangeAge
 C_OBJECT($1)
 $1.Age:=$1.Age+10
 ALERT(String($1.Age))
```

Führen Sie die Methode `CreatePerson` aus, zeigen beide Meldungen "50", da beide Methoden dieselbe Objektreferenz verwalten.

**4D Server:** Bei Parametern in Methoden, die nicht auf demselben Rechner ausgeführt werden (z. B. mit der Option "auf Server ausführen"), lassen sich Referenzen nicht verwenden. In solchen Fällen werden keine Referenzen, sondern Kopien der Objekt und Collection Parameter gesendet.


## Parameter mit Namen

Bei Objekten als Parameter können Sie auch **Parameter mit Namen** verwalten. Dieser Programmierstil ist einfach, flexibel und leicht lesbar.

Wir verwenden zum Beispiel die Methode `CreatePerson`:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```
In der Methode `ChangeAge` schreiben Sie:

```4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

Das ist eine leistungsstarke Möglichkeit zum Definieren von [optionale Parameter](#optionale-parameter) (siehe auch unten). Fehlende Parameter können Sie wie folgt verwalten:
- Sie prüfen, ob alle erwarteten Parameter geliefert werden, durch Vergleichen mit dem Wert `Null`, oder
- Sie setzen Parameterwerte vorab, oder
- Sie verwenden sie als leere Werte.

In der oberen Methode `ChangeAge` sind die beiden Eigenschaften Age und Name zwingend und würden Fehler produzieren, falls sie fehlen. Um das zu vermeiden, schreiben Sie einfach:

```4d
  //ChangeAge
 C_OBJECT($1;$para)
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
C_OBJECT($1;$para)
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

> Werden optionale Parameter in Ihren Methoden benötigt, können Sie Objekteigenschaften als [Parameter mit Namen](#named-parameters) verwenden. Das ist ein flexibler Weg zum Verwalten variabler Parameteranzahlen.

Über den Befehl `Count parameters` in der aufgerufenen Methode können Sie die aktuelle Anzahl der Parameter abfragen und je nach dem, was Sie bekommen, unterschiedliche Operationen ausführen.

Folgendes Beispiel zeigt eine Textmeldung und kann den Text in ein Dokument auf der Festplatte oder in einen 4D Write Pro Bereich einfügen:

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 C_TEXT($1;$2)
 C_OBJECT($3)

 ALERT($1)
 If(Count parameters>=3)
    WP SET TEXT($3;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($2;$1)
    End if
 End if
```
Nach Hinzufügen dieser Projektmethode in Ihrer Anwendung können Sie schreiben:

```4d  
APPEND TEXT(vtSomeText) //Will only display the  message
APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path
APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
```


## Parameter Indirektion

4D Projektmethoden akzeptieren eine variable Anzahl von Parametern desselben Typs, beginnend von rechts. Dieses Prinzip wird **Parameter Indirektion** genannt. Mit dem Befehl `Count parameters` können Sie dann solche Parameter mit einer `For...End for`-Schleife und der Syntax Parameter Indirektion ansprechen.

Im folgenden Beispiel akzeptiert die Projektmethode `SEND PACKETS` einen Parameter Time mit einer variablen Anzahl von Textparametern:

```4d
  //SEND PACKETS Project Method
  //SEND PACKETS ( Time ; Text { ; Text2... ; TextN } )
  //SEND PACKETS ( docRef ; Data { ; Data2... ; DataN } )

 C_TIME($1)
 C_TEXT(${2})
 C_LONGINT($vlPacket)

 For($vlPacket;2;Count parameters)
    SEND PACKET($1;${$vlPacket})
 End for
```

Die Indirektion von Parametern funktioniert am besten, wenn Sie die folgende Regel beachten: Werden nur einige der Parameter durch Indirektion angesprochen, sollten sie nach den anderen übergeben werden. Innerhalb der Methode wird eine Indirektions-Adresse formatiert: ${$i}, wobei $i eine numerische Variable ist. ${$i} wird **generischer Parameter** genannt.

Betrachten Sie beispielsweise eine Funktion, die Werte addiert und die Summe in einem Format zurückgibt, das als Parameter übergeben ist. Bei jedem Aufruf dieser Methode kann die Anzahl der zu addierenden Werte variieren. Wir müssen die Werte als Parameter an die Methode und das Format in Form einer Zeichenkette übergeben. Die Anzahl der Werte kann von Aufruf zu Aufruf variieren.

Diese Funktion wird folgendermaßen aufgerufen:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)

```

In diesem Fall erhält die aufrufende Methode den String “182.70”, das ist die Summe der Zahlen im angegebenen Format. Die Parameter der Funktion müssen in der richtigen Reihenfolge sein: erst das Format, dann die Werte.

Hier ist die Funktion, genannt `MySum`:
```4d
 $Sum:=0
 For($i;2;Count parameters)
    $Sum:=$Sum+${$i}
 End for
 $0:=String($Sum;$1)
```

Sie lässt sich auf unterschiedliche Weise aufrufen:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)
 Result:=MySum("000";1;18;4;23;17)
```


### Generische Parameter deklarieren

Analog zu anderen lokalen Variablen müssen auch generische Parameter nicht zwingend über Compiler Direktive aufgerufen werden. Es wird jedoch empfohlen, um jegliche Zweideutigkeiten zu vermeiden. Zum Deklarieren dieser Parameter verwenden Sie eine Compiler Direktive, in der Sie ${N} als Parameter übergeben, wobei N den ersten generischen Parameter angibt.

```4d
 C_LONGINT(${4})
```

Dieser Befehl bedeutet, dass die Methode ab dem 4. Parameter (eingeschlossen) eine variable Anzahl an Parametern vom Typ Lange Ganzzahl empfangen kann. $1, $2 und $3 können einen beliebigen Datentyp haben. Nutzen Sie jedoch $2 per Indirektion, wird als Datentyp der generische Typ verwendet. $1, $2 and $3 can be of any data type.

**Hinweis:** Die Zahl in der Deklaration muss eine feste Größe und keine Variable sein.
