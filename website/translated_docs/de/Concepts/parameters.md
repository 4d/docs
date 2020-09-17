---
id: parameters
title: Parameters
---


## Overview

Sie werden öfters sehen, dass Sie Ihren Methoden und Funktionen Daten übergeben müssen. This is easily done with parameters.

**Parameter** (oder **Argumente**) sind Datenteile, die eine Methode oder eine Class Function zum Ausführen ihrer Aufgaben benötigen. The terms *parameter* and *argument* are used interchangeably throughout this manual. Parameters are also passed to built-in 4D commands. In this example, the string “Hello” is an argument to the `ALERT` built-in command:

```4d
ALERT("Hello")
```

Parameter werden Methoden oder Class Functions auf diesselbe Weise übergeben. Erlaubt beispielsweise eine Class Function mit Namen `getArea()` zwei Parameter, könnte ein Aufruf der Class Function wie folgt aussehen:

```
$area:=$o.getArea(50;100)
```

Oder erlaubt beispielsweise eine Projektmethode mit Namen `DO_SOMETHING` drei Parameter, könnte ein Aufruf der Methode wie folgt aussehen:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

Die Eingabeparameter werden durch Strichpunkte (;) voneinander getrennt.

The same principles are used when methods are executed through dedicated commands, for example:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pass the !05/05/20! date as parameter to the SetCalendarDate  
//in the context of a subform
```

Daten können auch von Methoden und Class Functions **zurückgegeben** werden. Folgende Zeile ist beispielsweise eine Anweisung mit dem integrierten Befehl `Length`, um die Länge eines String zurückzugeben. The statement puts the value returned by `Length` in a variable called *MyLength*. Here is the statement:

```4d
MyLength:=Length("How did I get here?")
```

Any subroutine can return a value. Pro Methode oder Class Function lässt sich nur ein einzelner Ausgabeparameter deklarieren.

Eingabe- und Ausgabewerte werden im Moment des Aufrufs [bewertet](#values-or-references) und in lokale Variablen innerhalb der aufgerufenen Class Function oder Methode kopiert. Es gibt zwei Syntaxarten, um Variablenparameter im aufgerufenen Code zu deklarieren:

- [benannte Variablen](#named-parameters) (in den meisten Fällen empfohlen) oder
- [sequentiell nummerierte Variablen](#sequential-parameters).


> Zum Deklarieren von Parametern lassen sich die beiden Arten [benannt](#named-parameters) und [sequentiell](#sequential-parameters) uneingeschränkt miteinander mischen. Beispiel:
> 
> ```4d
Function add($x : Integer)
  var $0;$2 : Integer
  $0:=$x+$2
```




## Named parameters

In den aufgerufenen Methoden oder Class Functions werden Parameterwerte lokalen Variablen zugewiesen. Sie deklarieren Parameter mit einem**Parameternamen** und mit einem **Parametertyp**, getrennt durch Strichpunkt.

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


The following rules apply:

- Die Zeile zum Deklarieren muss die erste Zeile des Methoden- oder Function-Code sein, sonst erscheint ein Fehler (davor können nur Kommentare oder Zeilenumbrüche stehen).
- Parameternamen müssen mit einem `$` Zeichen beginnen und mit den [Schreibregeln für Eigenschaftsnamen](Concepts/dt_object.md#object-property-identifiers) konform sein.
- Mehrere Parameter (und Typen) werden durch Strichpunkte (;) voneinander getrennt.
- Eine Syntax über mehrere Zeilen wird unterstützt (mit den Zeichen "\\").


Sie können z. B. eine Function `getArea()` mit zwei Parametern aufrufen:

```
$area:=$o.getArea(50;100)
```

Im Code der Class Function wird der Wert jedes Parameters in den entsprechenden deklarierten Parameter kopiert:

```4d    
// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
    $area:=$width*$height
```
> Ist kein Typ definiert, wird der Parameter als `Variant` definiert.

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

### Zurückgegebener Wert

Sie deklarieren den Rückgabeparameter einer Funktion mit einem Pfeil (->) und der Definition des Parameters nach der Liste der Eingabeparameter. Beispiel:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

Sie können den Rückgabeparameter auch nur mit `: type` deklarieren. Er ist dann automatisch über `$0` verfügbar ([siehe unten sequentielle Parameter](#returned-value-1)). Beispiel:

```4d
Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
```


### Unterstützte Datentypen

Mit benannten Parametern können Sie dieselben Datentypen wie für [ das Schlüsselwort `var` ](variables.md#using-the-var-keyword), verwenden, inkl. Objekte von Klassen.  Beispiel:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```





## Sequentielle Parameter

Als Alternative zur Syntax [benannte Parameter](#named-parameters) können Sie Parameter über fortlaufend nummerierte Variablen deklarieren: **$1**, **$2**, **$3**, usw. The numbering of the local variables represents the order of the parameters.

> Auch wenn Class Functions diese Syntax unterstützen, empfehlen wir hier, die Syntax [benannte Parameter](#named-parameters) zu verwenden.

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


### Zurückgegebener Wert

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

Der zurückgegebene Wert `$0` ist eine lokale Variable innerhalb der Unterroutine. It can be used as such within the subroutine. For example, you can write:

```4d
// Do_something
$0:=Uppercase($1)
ALERT($0)
```

In diesem Beispiel wird `$0` zuerst der Wert von `$1` zugewiesen und dann als Parameter für den Befehl`ALERT` verwendet. Within the subroutine, you can use `$0` in the same way you would use any other local variable. It is 4D that returns the value of `$0` (as it is when the subroutine ends) to the called method.


### Unterstützte Datentypen

Sie können jeden [Ausdruck](Concepts/quick-tour.md#expression-types) als sequentiellen Parameter verwenden, außer:

- tables
- arrays

Tables or array expressions can only be passed [as reference using a pointer](Concepts/dt_pointer.md#pointers-as-parameters-to-methods).

### Parameter indirection

4D project methods accept a variable number of parameters of the same type, starting from the right. This principle is called **parameter indirection**. Using the `Count parameters` command you can then address those parameters with a `For...End for` loop and the parameter indirection syntax.

> Die Parameter Indirektion lässt sich nur mit der [sequentiellen](#sequential-parameters) Syntax verwenden.

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


As with other local variables, it is not mandatory to declare generic parameters by compiler directive. However, it is recommended to avoid any ambiguity. To declare these parameters, you use a compiler directive to which you pass ${N} as a parameter, where N specifies the first generic parameter.

```4d
 C_LONGINT(${4})
```

This command means that starting with the fourth  parameter (included), the method can receive a variable number of parameters of longint type. $1, $2 and $3 can be of any data type. However, if you use $2 by indirection, the data type used will be the generic type. Thus, it will be of the data type Longint, even if for you it was, for instance, of the data type Real.

> Die Nummer in der Deklaration muss eine Konstante und keine Variable sein.


### Parameter für kompilierten Modus deklarieren

Auch wenn es im [interpretierten Modus](Concepts/interpreted.md) nicht zwingend ist, sollten Sie jeden Parameter in den aufgerufenen Methoden oder Functions deklarieren, um Probleme zu vermeiden.

Mit der Syntax [benannte Variable](#named-parameters), werden Parameter automatisch über das Schlüsselwort `#DECLARE` oderden Prototyp `Function` deklariert. Beispiel:

```4d
Function add($x : Variant; $y : Integer)-> $result : Integer
    // all parameters are declared with their type
```


Bei der Syntax sequentielle Variable müssen Sie sicherstellen, dass alle Parameter sauber deklariert sind. In the following example, the `Capitalize` project method accepts a text parameter and returns a text result:

```4d
  // Capitalize Project Method
  // Capitalize ( Text ) -> Text
  // Capitalize ( Source string ) -> Capitalized string

 C_TEXT($0;$1)
 $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))
```

Using commands such as `New process` with process methods that accept parameters also require that parameters are explicitely declared in the called method. Beispiel:

```4d
C_TEXT($string)
C_LONGINT($idProc;$int)
C_OBJECT($obj)

$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)
```

This code can be executed in compiled mode only if "foo_method" declares its parameters:

```4d
//foo_method
C_TEXT($1)
C_LONGINT($2)
C_OBJECT($3)
...
```

> Für den kompilierten Modus können Sie alle Parameter von lokalen Variablen für Projektmethoden in einer spezifischen Methode gruppieren, deren Namen mit "Compiler" beginnt. Within this method, you can predeclare the parameters for each method, for example:
```4d  
 // Compiler_method
 C_REAL(OneMethodAmongOthers;$1) 
```
See [Interpreted and compiled modes](Concepts/interpreted.md) page for more information.

Parameter declaration is also mandatory in the following contexts (these contexts do not support declaration in a "Compiler" method):

- Datenbankmethoden - Zum Beispiel erhält die `Datenbankmethode On Web Connection` die sechs Parameter $1 bis $6 vom Datentyp Text. At the beginning of the database method, you must write (even if all parameters are not used):

```4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

> Sie können auch [benannte Parameter](#named-parameters) mit dem Schlüsselwort `#DECLARE` verwende.

- Trigger - Der Parameter $0 (Lange Ganzzahl), der das Ergebnis eines Trigger ist, wird vom Compiler typisiert, wenn der Parameter nicht explizit deklariert wurde. Nevertheless, if you want to declare it, you must do so in the trigger itself.

- Form objects that accept the `On Drag Over` form event - The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the object method. **Note:** The compiler does not initialize the $0 parameter. So, as soon as you use the `On Drag Over` form event, you must initialize $0. Beispiel:

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




## Objekteigenschaften als benannte Parameter verwenden

Using objects as parameters allow you to handle **named parameters**. This programming style is simple, flexible, and easy to read.

For example, using the `CreatePerson` method:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

In the `ChangeAge` method you can write:

```4d
  //ChangeAge
 var $1; $para : Object
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
 var $1; $para : Object
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
var $1;$para : Object
$para:=$1  
If ($para.toAdd=Null)
    $para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

The power here is that you will not need to change your existing code. It will always work as in the previous version, but if necessary, you can use another value than 10 years.

With named variables, any parameter can be optional. In the above example, all parameters are optional and anyone can be given, in any order.




## Eingabe- und Ausgabevariablen

Within the subroutine, you can use the parameters $1, $2... in the same way you would use any other local variable. However, in the case where you use commands that modify the value of the variable passed as parameter (for example `Find in field`), the parameters $1, $2, and so on cannot be used directly. You must first copy them into standard local variables (for example: `$myvar:=$1`).




## Optional parameters

In the *4D Language Reference* manual, the { } characters (braces) indicate optional parameters. For example, `ALERT (message{; okButtonTitle})` means that the *okButtonTitle* parameter may be omitted when calling the command. You can call it in the following ways:

```4d
ALERT("Are you sure?";"Yes I am") //2 parameters
ALERT("Time is over") //1 parameter
```

4D project methods also accept such optional parameters, starting from the right. The issue with optional parameters is how to handle the case where some of them are missing in the called method - it should never produce an error. A good practice is to assign default values to unused parameters.

> Werden optionale Parameter in Ihren Methoden benötigt, können Sie [Objekteigenschaften als benannte Parameter](#using-objects-properties-as-named-parameters) verwenden. Das ist ein flexibler Weg zum Verwalten variabler Parameteranzahlen.

Using the `Count parameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received.

The following example displays a text message and can insert the text into a document on disk or in a 4D Write Pro area:

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
After this project method has been added to your application, you can write:

```4d  
APPEND TEXT(vtSomeText) //Will only display the  message
APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path
APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
```




## Values or references

Übergeben Sie einen Parameter, bewertet 4D den Parameterausdruck immer im Kontext der aufrufenden Methode und setzt den **Ergebniswert** in die lokalen Variablen in der Class Function oder Unterroutine. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Da die Reichweite lokal ist, verändert ein geänderter Parameterwert in der Class Funktion/Unterroutine nicht den Wert in der aufrufenden Methode. Beispiel:

```4d
    //Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)

    //Here is the code of the method DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

The alert box displayed by `DO_SOMETHING` will read "WILLIAMS" and the alert box displayed by `MY_METHOD` will read "williams". The method locally changed the value of the parameter $1, but this does not affect the value of the field `[People]Name` passed as parameter by the method `MY_METHOD`.

There are two ways to make the method `DO_SOMETHING` change the value of the field:

1. Rather than passing the field to the method, you pass a pointer to it, so you would write:

```4d
  //Here is some code from the method MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)

  //Here the code of the method DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Here the parameter is not the field, but a pointer to it. Therefore, within the `DO SOMETHING` method, $1 is no longer the value of the field but a pointer to the field. The object **referenced** by $1 ($1-> in the code above) is the actual field. Consequently, changing the referenced object goes beyond the scope of the subroutine, and the actual field is affected. In this example, both alert boxes will read "WILLIAMS".

2. Rather than having the method `DO_SOMETHING` "doing something," you can rewrite the method so it returns a value. Thus you would write:

```4d
    //Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

    //Here the code of the method DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

This second technique of returning a value by a subroutine is called “using a function.” Weitere Informationen dazu finden Sie im Abschnitt [Rückgabewerte](#returning-values).


### Particular cases: objects and collections

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal *pointer*).

Consequently, when using such data types as parameters, `$1, $2...` do not contain *values* but *references*. Modifying the value of the `$1, $2...` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for [pointers](Concepts/dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

For example, consider the `CreatePerson` method that creates an object and sends it as a parameter:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

The `ChangeAge` method adds 10 to the Age attribute of the received object

```4d
  //ChangeAge
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
```

When you execute the `CreatePerson` method, both alert boxes will read "50" since the same object reference is handled by both methods.

**4D Server:** When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. In these cases, copies of object and collection parameters are sent instead of references.


