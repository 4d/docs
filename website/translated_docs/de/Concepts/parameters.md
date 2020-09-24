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

Dassselbe Prinzip gilt, wenn Methoden durch bestimmte Befehle ausgeführt werden, zum Beispiel:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  
//pass the !05/05/10! date as parameter to the SetCalendarDate  
// in the context of a subform
```

**Hinweis:** Für eine gute Ausführung von Code müssen Sie sicherstellen, dass alle Parameter `$1`, `$2`... innerhalb der aufgerufenen Methoden korrekt deklariert sind (siehe unten [Parameter deklarieren](#declaring-parameters)).


### Unterstützte Ausdrücke

Sie können jeden [Ausdruck](Concepts/quick-tour.md#expression-types) als Parameter verwenden, außer:

- Tabellen
- Arrays

Tabellen oder Array Ausdrücke lassen sich nur [über einen Zeiger als Referenz übergeben](Concepts/dt_pointer.md#pointers-as-parameters-to-methods).


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

Das Funktionsergebnis `$0` ist eine lokale Variable innerhalb der Unterroutine. Sie lässt sich als solche innerhalb der Unterroutine verwenden. So wird im vorigen Beispiel `DO SOMETHING` `$0` zuerst der Wert von `$1` zugewiesen, dann als Parameter für den Befehl`ALERT` verwendet. Innerhalb der Unterroutine können Sie `$0` auf dieselbe Weise wie jede andere lokale Variable verwenden. Es ist 4D, das den Wert von`$0` (genauso wenn die Unterroutine endet) an die aufgerufene Methode zurückgibt.


## Parameter deklarieren

Auch wenn es im [interpretierten Modus](Concepts/interpreted.md) nicht zwingend ist, müssen Sie jeden Parameter in den aufgerufenen Methoden deklarieren, um Probleme zu vermeiden.

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
Weitere Informationen dazu finden Sie auf der Seite [Interpretierter und komplierter Modus](Concepts/interpreted.md).

Deklarieren der Parameter ist auch in folgenden Kontexten zwingend (sie unterstützen nicht die Deklaration in einer "Compiler" Methode):

- Datenbankmethoden - Zum Beispiel erhält die `Datenbankmethode On Web Connection` sechs Parameter, $1 bis $6, vom Datentyp Text. Zu Beginn der Datenbankmethode müssen Sie schreiben (selbst wenn keiner der Parameter genutzt wird):

```4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

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

## Werte oder Referenzen

Übergeben Sie einen Parameter, bewertet 4D den Parameterausdruck immer im Kontext der aufrufenden Methode und setzt den **Ergebniswert** in die lokalen Variablen $1, $2... in der Unterroutine (siehe [Parameter verwenden](#using-parameters)). Die lokalen Variablen/Parameter sind nicht die aktuellen Felder, Variablen oder Ausdrücke, die von der aufrufenden Methode übergeben werden; sie enthalten nur die Werte, die übergeben wurden. Da ein Parameterwert nur lokal gültig ist, wird bei einer Änderung in der Unterroutine nicht der Wert in der aufrufenden Methode geändert. Beispiel:

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

Hier ist der Parameter nicht das Feld, sondern ein Zeiger auf das Feld. Deshalb ist $1 in der Methode `DO SOMETHING` nicht mehr der Wert des Felders, sondern ein Zeiger auf das Feld. The object **referenced** by $1 ($1-> in the code above) is the actual field. Consequently, changing the referenced object goes beyond the scope of the subroutine, and the actual field is affected. In this example, both alert boxes will read "WILLIAMS".

2. Rather than having the method `DO_SOMETHING` "doing something," you can rewrite the method so it returns a value. Thus you would write:

```4d
    //Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

    //Here the code of the method DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

This second technique of returning a value by a subroutine is called “using a function.” This is described in the [Functions](#functions) paragraph.


### Particular cases: objects and collections

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal *pointer*).

Consequently, when using such data types as parameters, `$1, $2...` do not contain *values* but *references*. Modifying the value of the `$1, $2...` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for [pointers](Concepts/dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

For example, consider the `CreatePerson` method that creates an object and sends it as a parameter:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

The `ChangeAge` method adds 10 to the Age attribute of the received object

```4d
  //ChangeAge
 C_OBJECT($1)
 $1.Age:=$1.Age+10
 ALERT(String($1.Age))
```

When you execute the `CreatePerson` method, both alert boxes will read "50" since the same object reference is handled by both methods.

**4D Server:** When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. In these cases, copies of object and collection parameters are sent instead of references.


## Named parameters

Using objects as parameters allow you to handle **named parameters**. This programming style is simple, flexible, and easy to read.

For example, using the `CreatePerson` method:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```
In the `ChangeAge` method you can write:

```4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

This provides a powerful way to define [optional parameters](#optional-parameters) (see also below). To handle missing parameters, you can either:
- check if all expected parameters are provided by comparing them to the `Null` value, or
- preset parameter values, or
- use them as empty values.

In the `ChangeAge` method above, both Age and Name properties are mandatory and would produce errors if they were missing. To avoid this case, you can just write:

```4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```
Then both parameters are optional; if they are not filled, the result will be " is 10 years old", but no error will be generated.

Finally, with named parameters, maintaining or refactoring applications is very simple and safe. Imagine you later realize that adding 10 years is not always appropriate. You need another parameter to set how many years to add. You write:

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
The power here is that you will not need to change your existing code. It will always work as in the previous version, but if necessary, you can use another value than 10 years.

With named variables, any parameter can be optional. In the above example, all parameters are optional and anyone can be given, in any order.


## Optional parameters

In the *4D Language Reference* manual, the { } characters (braces) indicate optional parameters. For example, `ALERT (message{; okButtonTitle})` means that the *okButtonTitle* parameter may be omitted when calling the command. You can call it in the following ways:
```4d
ALERT("Are you sure?";"Yes I am") //2 parameters
ALERT("Time is over") //1 parameter
```

4D project methods also accept such optional parameters, starting from the right. The issue with optional parameters is how to handle the case where some of them are missing in the called method - it should never produce an error. A good practice is to assign default values to unused parameters.

> When optional parameters are needed in your methods, you might also consider using [Named parameters](#named-parameters) which provide a flexible way to handle variable numbers of parameters.

Using the `Count parameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received.

The following example displays a text message and can insert the text into a document on disk or in a 4D Write Pro area:

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
After this project method has been added to your application, you can write:

```4d  
APPEND TEXT(vtSomeText) //Will only display the  message
APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path
APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
```


## Parameter indirection

4D project methods accept a variable number of parameters of the same type, starting from the right. This principle is called **parameter indirection**. Using the `Count parameters` command you can then address those parameters with a `For...End for` loop and the parameter indirection syntax.

In the following example, the project method `SEND PACKETS` accepts a time parameter followed by a variable number of text parameters:

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

Parameter indirection is best managed if you respect the following convention: if only some of the parameters are addressed by indirection, they should be passed after the others. Within the method, an indirection address is formatted: ${$i}, where $i is a numeric variable. ${$i} is called a **generic parameter**.

For example, consider a function that adds values and returns the sum formatted according to a format that is passed as a parameter. Each time this method is called, the number of values to be added may vary. We must pass the values as parameters to the method and the format in the form of a character string. The number of values can vary from call to call.

This function is called in the following manner:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)

```

In this case, the calling method will get the string “182.70”, which is the sum of the numbers, formatted as specified. The function's parameters must be passed in the correct order: first the format and then the values.

Here is the function, named `MySum`:
```4d
 $Sum:=0
 For($i;2;Count parameters)
    $Sum:=$Sum+${$i}
 End for
 $0:=String($Sum;$1)
```

This function can now be called in various ways:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)
 Result:=MySum("000";1;18;4;23;17)
```


### Declaring generic parameters

As with other local variables, it is not mandatory to declare generic parameters by compiler directive. However, it is recommended to avoid any ambiguity. To declare these parameters, you use a compiler directive to which you pass ${N} as a parameter, where N specifies the first generic parameter.

```4d
 C_LONGINT(${4})
```

This command means that starting with the fourth  parameter (included), the method can receive a variable number of parameters of longint type. $1, $2 and $3 can be of any data type. However, if you use $2 by indirection, the data type used will be the generic type. Thus, it will be of the data type Longint, even if for you it was, for instance, of the data type Real.

**Note:** The number in the declaration has to be a constant and not a variable.
