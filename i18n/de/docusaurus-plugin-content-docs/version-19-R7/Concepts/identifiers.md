---
id: identifiers
title: Namensregeln
---

Dieser Abschnitt beschreibt die Konventionen und Regeln zum Bezeichnen verschiedener Elemente in der 4D Programmiersprache, wie Variablen, Objekteigenschaften, Tabellen, Formulare, etc.

> Bei Verwenden nicht-romanischer Zeichen in Namen kann die max. Länge kürzer sein.

## Arrays

Für Namen von Arrays gelten dieselben Regeln wie für [Variablen](#variablen).

## Klassen

Ein Klassenname kann bis zu 31 Zeichen enthalten.

Ein Klassenname muss mit den [ Schreibregeln für Eigenschaftsnamen ](#objekteigenschaften) für Punkt-Notation konform sein.

> Um Konflikte zu vermeiden, sollten Sie für eine Klasse und eine [Tabelle](#tables) in derselben Anwendung unterschiedliche Namen verwenden.

## Funktionen

Funktionsnamen müssen mit den [Schreibregeln für Eigenschaftsnamen](#objekteigenschaften) für Punkt-Notation konform sein.

> **Tipp:** Namen, die mit einem Unterstrich (_) beginnen, werden beim automatischen Vervollständigen (autocompletion) im 4D Code-Editor unterdrückt und nicht vorgeschlagen.

## Objekteigenschaften

Der Name einer Objekteigenschaft (auch Objekt*attribut* genannt) kann bis zu 255 Zeichen enthalten.

Objekteigenschaften können auf skalare Werte, ORDA Elemente, Class Functions, andere Objekte, etc. verweisen. Object properties can reference scalar values, ORDA elements, class functions, other objects, etc. Whatever their nature, object property names must follow the following rules **if you want to use the [dot notation](dt_object.md#object-properties)**:

- Ein Eigenschaftsname muss mit einem Buchstaben, Unterstrich oder Dollarzeichen "$" beginnen.
- Folglich kann der Name einen beliebigen Buchstaben, eine Ziffer, das Unterstrichzeichen ("_") oder das Dollarzeichen ("$") enthalten.
- Es wird zwischen Groß- und Kleinschreibung unterschieden.

Beispiele:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

> Verwenden Sie die **String-Notation** in eckigen Klammern, können Eigenschaftsnamen ein beliebiges Zeichen enthalten, z. B: `myObject["1. First property"]`).

Siehe auch unter [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

## Parameter

Parameternamen müssen mit einem `$` Zeichen beginnen und dieselben Regeln wie [Variablennamen](#variablen) beachten.

Beispiele:

```4d
Function getArea($width : Integer; $height : Integer)-> $area : Integer

#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object
```

## Projektmethoden

Der Name einer Projektmethode kann bis zu 31 Zeichen enthalten.

- Er muss mit einem Buchstaben, Unterstrich oder einer Ziffer beginnen
- Folglich kann der Name einen beliebigen Buchstaben, eine Ziffer, das Unterstrichzeichen ("_") oder Leerzeichen enthalten.
- Verwenden Sie keine reservierten Namen, wie 4D Befehlsnamen (`Date`, `Time`, etc), Schlüsselwörter (`If`, `For`, etc.), oder Konstantennamen (`Euro`, `Black`, `Friday`, etc.).
- Es wird zwischen Groß- und Kleinschreibung unterschieden.

Beispiele:

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Tipp:** Es ist eine gute Programmiertechnik, dieselbe Namenskonvention wie von 4D für integrierte Methoden zu verwenden. Verwenden Sie Großschreibung für Methoden; Kleinschreibung mit großem Anfangsbuchstaben für Methoden, die einen Wert zurückgeben. Öffnen Sie dann ein Projekt nach einigen Monaten für eine Wartung, erkennen Sie im Explorer Fenster bereits an der Schreibweise des Namens, ob die Methode ein Ergebnis zurückgibt.

 > Wenn Sie eine Methode aufrufen, geben Sie einfach ihren Namen ein. Einige in 4D integrierte Befehle wie z. B. `ON EVENT CALL`, sowie alle Plug-In Befehle erwarten dagegen den Namen der Methode als String, wenn ein Parameter für die Methode übergeben wurde.

Beispiele:

```4d
 //This command expects a method (function) or formula
QUERY BY FORMULA([aTable];Special query)
 //This command expects a method (procedure) or statement
APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //But this command expects a method name
ON EVENT CALL("HANDLE EVENTS")
```

## Tabellen und Felder

Eine Tabelle kennzeichnen Sie durch eckige Klammern um den Tabellennamen: \ [...]. Ein Feld kennzeichnen Sie durch Angabe der dazugehörigen Tabelle, gefolgt von dem Feldnamen.

Der Tabellenname und Feldname kann max. 31 Zeichen lang sein.

- Ein Tabellen- oder Feldname muss mit einem Buchstaben, Unterstrich oder Dollarzeichen "$" beginnen
- Der Name kann Buchstaben, Zahlen, Leerzeichen und den Unterstrich ("_") enthalten.
- Verwenden Sie keine reservierten Namen, wie 4D Befehlsnamen (`Date`, `Time`, etc), Schlüsselwörter (`If`, `For`, etc.), oder Konstantennamen (`Euro`, `Black`, `Friday`, etc.).
- Bei Verwalten der Anwendung via SQL gelten zusätzliche Regeln: nur die Zeichen _0123456789abcdefghijklmnopqrstuvwxyz werden akzeptiert, und ein Name darf keine SQL Schlüsselwörter (Befehl, Attribut, etc.) enthalten.

Beispiele:

```4d
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)

```

> Um Konflikte zu vermeiden, sollten Sie für eine [Klasse](#classes) und eine Tabelle in derselben Anwendung unterschiedliche Namen verwenden.

## Variablen

The name of a variable can be up to 31 characters, not including the scope symbols (`$` or `<>`).

- A variable name must begin with a letter, an underscore, or a dollar ("$") for [parameters](parameters.md) and [local variables](variables.md#local-variables), or `<>` for [interprocess variables](variables.md#interprocess-variables).
- Eine Ziffer als erstes Zeichen ist erlaubt, wird aber nicht empfohlen, da die [Deklaration mit `var` ](variables.md#das-schlüsselwort-var-verwenden) dies nicht unterstützt.
- Folglich kann der Name einen beliebigen Buchstaben, eine Ziffer und das Unterstrichzeichen ("_") enthalten.
- Leerzeichen sind erlaubt, werden aber nicht empfohlen, da die [Deklaration mit `var` ](variables.md#using-the-var-keyword) dies nicht unterstützt.
- Verwenden Sie keine reservierten Namen, wie 4D Befehlsnamen (`Date`, `Time`, etc), Schlüsselwörter (`If`, `For`, etc.), oder Konstantennamen (`Euro`, `Black`, `Friday`, etc.).
- Es wird nicht zwischen Groß- und Kleinschreibung unterschieden.

Beispiele:

```4d
For($vlRecord;1;100) //local variable
$vsMyString:="Hello there" //local variable
var $vName; $vJob : Text //local variables 
If(bValidate=1) //process variable
<>vlProcessID:=Current process() //interprocess variable
```

## Andere Namen

Die 4D Programmiersprache verwaltet die Namen einiger Elemente als String: **Formulare**, **Formularobjekte**, **temporäre Auswahlen**, **Prozesse**, **Mengen**, **Menüleisten**, etc.

Such string names can contain up to 255 characters, not including the `$` or `<>` characters (if any).

- String-Namen können beliebige Zeichen enthalten.
- Es wird nicht zwischen Groß- und Kleinschreibung unterschieden.

Beispiele:

```4d
DIALOG([Storage];"Note box"+String($vlStage))
OBJECT SET FONT(*;"Binfo";"Times")
USE NAMED SELECTION([Customers];"Closed")//Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode") //Interprocess Named Selection
 //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
CREATE SET([Customers];"Customer Orders")//Process set
USE SET("<>Deleted Records") //Interprocess set
If(Records in set("$Selection"+String($i))>0) //Client set

```
