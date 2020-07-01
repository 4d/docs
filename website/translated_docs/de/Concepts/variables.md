---
id: variables
title: Variablen
---

Daten in 4D werden auf zwei ganz unterschiedliche Weisen gespeichert. **Felder** speichern Daten permanent auf der Festplatte, **Variablen**speichern Daten temporär im Speicher.

Beim Einrichten Ihrer 4D Datenbank legen Sie die Namen und Typen Ihrer Datenfelder fest. Variablen sind ganz ähnlich—Sie geben diesen auch Namen und verschiedene Typen (siehe unter [Datentypen](Concepts/data-types.md)).

Variablen sind Objekte der Programmiersprache; Sie können Variablen erstellen und verwenden, die nie auf dem Bildschirm erscheinen. In Ihren Formularen können Sie Variablen (außer Zeiger und BLOB) auf dem Bildschirm anzeigen, Daten in sie eingeben und sie in Berichten drucken. Auf diese Weise verhalten sich eingebbare und nicht-eingebbare Variablenbereiche wie Felder und haben dieselben integrierten Kontrollen beim Erstellen. Variablen in Formularen können auch Schaltflächen, Listboxen, rollbare Bereiche, Bildschaltflächen, usw. steuern oder Ergebnisse von Berechnungen anzeigen, die nicht gesichert werden müssen.

## Variablen erstellen

Sie erstellen Variablen durch Deklarieren über einen Befehl im Kapitel "Compiler" oder "Arrays".

**Hinweis:** Arrays sind ein besonderer Variablentyp. Ein Array ist eine sortierte Reihe von Variablen desselben Typs. Weitere Informationen dazu finden Sie unter [Arrays](Concepts/arrays.md).

Wollen Sie z. B. eine Textvariable definieren, schreiben Sie:

```4d
 C_TEXT(myText)
```

**Hinweis:** Auch wenn es normalerweise nicht empfehlenswert ist, können Sie Variablen einfach durch ihre Verwendung erstellen; Sie müssen sie nicht unbedingt mit Typ definieren, wie es bei Feldern erforderlich ist. Beispiel: Für eine Variable, die das aktuelle Datum plus 30 Tage angibt, können Sie schreiben:

```4d
 MyDate:=Current date+30 //MyDate is created and gets the current date plus 30 days
```

Ist die Variable angelegt, können Sie diese überall in Ihrer Anwendung verwenden, wo sie benötigt wird. Sie wollen z.B. eine Textvariable in einem Feld vom gleichen Typ speichern:

```4d
 [MyTable]MyField:=MyText
```

Hier sehen Sie einige grundlegende Variablendeklarationen:

```4d
<br /> C_BLOB(vxMyBlob) // Die Prozessvariable vxMyBlob ist als eine Variable vom Typ BLOB deklariert
 C_DATE($vdCurDate) // Die lokale Variable $vdCurDate ist als eine Variable vom Typ Datum deklariert
 C_LONGINT(vg1;vg2;vg3) // Die 3 Prozessvariablen vg1, vg2 und vg3 sind als Variablen vom Type Lange Ganzzahl deklariert  
 C_OBJECT($vObj) // Die lokale Variable $vObj ist als eine Variable vom Typ Objekt deklariert
 C_COLLECTION($vCol) // Die lokale Variable $vCol ist als eine Variable vom Typ Collection deklariert
 ARRAY LONGINT(alAnArray;10) //Die Prozessvariable alAnArray ist als ein Array vom Typ Lange Ganzzahl mit 10 Elementen deklariert
```

## Assigning Data

Daten lassen sich in Variablen und Arrays setzen und daraus kopieren. Daten in eine Variable setzen heißt, **der Variablen die Daten zuweisen**. Das geschieht über den Zuweisungsoperator (:=). Der Zuweisungsoperator wird auch verwendet, um Feldern Daten zuzuweisen.

Der Zuweisungsoperator ist wesentlich, um eine Variable zu erstellen und Daten in sie einzusetzen. Sie schreiben den Namen der gewünschten Variablen auf die linke Seite des Zuweisungsoperators. Beispiel:

```4d
MyNumber:=3
```

erstellt die Variable * MyNumber* und setzt die Zahl 3 ein. Existiert MyNumber bereits, wird einfach die Zahl 3 eingesetzt.

Natürlich wären Variablen nicht sehr hilfreich, wenn Sie keine Daten daraus erhalten könnten. Sie verwenden wieder den Zuweisungsoperator. If you need to put the value of MyNumber in a field called [Products]Size, you would write *MyNumber* on the right side of the assignment operator:

```4d
[Products]Size:=MyNumber
```

In this case, *[Products]Size* would be equal to 3. This example is rather simple, but it illustrates the fundamental way that data is transferred from one place to another by using the language.

You assign data to array elements by using curly braces ({...}):

```4d
atNames{1}:="Richard"
```

## Local, Process, and Interprocess variables

You can create three types of variables: **local**, **process**, and **interprocess**. The difference between the three types of elements is their scope, or the objects to which they are available.

### Local variables

A local variable is, as its name implies, local to a method—accessible only within the method in which it was created and not accessible outside of that method. Being local to a method is formally referred to as being “local in scope.” Local variables are used to restrict a variable so that it works only within the method.

You may want to use a local variable to:

- Avoid conflicts with the names of other variables
- Use data temporarily
- Reduce the number of process variables

The name of a local variable always starts with a dollar sign ($) and can contain up to 31 additional characters. If you enter a longer name, 4D truncates it to the appropriate length.

When you are working in a database with many methods and variables, you often find that you need to use a variable only within the method on which you are working. You can create and use a local variable in the method without worrying about whether you have used the same variable name somewhere else.

Frequently, in a database, small pieces of information are needed from the user. The `Request` command can obtain this information. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. You usually do not need to keep this information in your methods for very long. This is a typical way to use a local variable. Hier ein Beispiel:

```4d
 $vsID:=Request("Please enter your ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

This method simply asks the user to enter an ID. It puts the response into a local variable, $vsID, and then searches for the ID that the user entered. When this method finishes, the $vsID local variable is erased from memory. This is fine, because the variable is needed only once and only in this method.

**Note:** Parameters $1, $2... passed to methods are local variables. For more information, please refer to [Parameters](Concepts/parameters.md).

### Process variables

A process variable is available only within a process. It is accessible to the process method and any other method called from within the process.

A process variable does not have a prefix before its name. Der Name der Prozessvariablen kann max. 31 Zeichen lang sein.

In interpreted mode, variables are maintained dynamically; they are created and erased from memory “on the fly.” In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. For example, the variable myVar is one variable in the process P_1 and another one in the process P_2.

A process can “peek and poke” process variables from another process using the commands `GET PROCESS VARIABLE` and `SET PROCESS VARIABLE`. It is good programming practice to restrict the use of these commands to the situation for which they were added to 4D:

- Interprocess communication at specific places or your code
- Handling of interprocess drag and drop
- In Client/Server, communication between processes on client machines and the stored procedures running on the server machines

For more information, see the chapter **Processes** and the description of these commands.

### Interprocess variables

Interprocess variables are available throughout the database and are shared across all cooperative processes. They are primarily used to share information between processes.

> Use of interprocess variables is not recommended since they are not available from preemptive processes and tend to make the code less maintainable.

The name of an interprocess variable always begins with the symbols (<>) — a “less than” sign followed by a “greater than” sign— followed by 31 characters.

In Client/Server, each machine (Client machines and Server machine) share the same definition of interprocess variables, but each machine has a different instance for each variable.