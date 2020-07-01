---
id: variables
title: Variablen
---

Data in 4D is stored in two fundamentally different ways. **Fields** store data permanently on disk; **variables** store data temporarily in memory.

When you set up your 4D database, you specify the names and types of fields that you want to use. Variables are much the same—you also give them names and different types (see [Data types](Concepts/data-types.md)).

Ist die Variable angelegt, können Sie diese überall in Ihrer Anwendung verwenden, wo sie benötigt wird. For example, you might need to store a text variable in a field of same type:

```4d
 [MyTable]MyField:=MyText
```

Variablen sind Objekte der Programmiersprache; Sie können Variablen erstellen und verwenden, die nie auf dem Bildschirm erscheinen. In Ihren Formularen können Sie Variablen (außer Zeiger und BLOB) auf dem Bildschirm anzeigen, Daten in sie eingeben und sie in Berichten drucken. Auf diese Weise verhalten sich eingebbare und nicht-eingebbare Variablenbereiche wie Felder und haben dieselben integrierten Kontrollen beim Erstellen. Variablen in Formularen können auch Schaltflächen, Listboxen, rollbare Bereiche, Bildschaltflächen, usw. steuern oder Ergebnisse von Berechnungen anzeigen, die nicht gesichert werden müssen.

## Declaring Variables

You create variables by declaring them. The 4D language offers two ways to declare variables:

- using the `var` keyword (recommended, specially if your code uses objects and classes),
- using one of the "Compiler" or "Arrays" theme 4D language commands (deprecated, classic language only). 

**Note:** Although it is usually not recommended, you can create basic variables simply by using them; you do not necessarily need to formally define them. For example, to declare a variable that will hold the current date plus 30 days, you can write:

```4d
 MyDate:=Current date+30 //MyDate is created  
 // 4D guesses it is of date type  
 // and assigns the current date plus 30 days
```

### Using the `var` keyword

Declaring variables using the `var` keyword is recommended since this syntax allows you to bind object variables with classes. Using this syntax enhances code editor suggestions and type-ahead features.

To declare a variable of any type with the `var` keyword, use the following syntax:

`var <varName>{, <varName2>,...}{ : <varType>}`

Beispiel:

```4d
var $myText : Text  //a text variable
var myDate1, myDate2 : Date  //several date variables
var $myFile : 4D.File  //a file class object variable
var $myVar //a variant variable
```

`varName` is the variable name, it must comply with the [4D rules](Concepts/identifiers.md) about identifiers.  
This syntax only supports [local and process variables](#local-process-and-interprocess-variables) declarations, thus excluding [interprocess variables](#interprocess-variables) and [arrays](Concepts/arrays.md).

`varType` can be:

- a [basic type](Concepts/data-types.md), in which case the variable contains a value of the declared type, 
- a [class reference](Concepts/classes.md) (4D class or user class), in which case the variable contains a reference to an object of the defined class.

If `varType` is omitted, a variable of the **variant** type is created.

The following table lists all supported `varType` values:

<table>
  <tr>
    <th>
      varType
    </th>
    
    <th>
      Contents
    </th>
  </tr>
  
  <tr>
    <td>
      Text
    </td>
    
    <td>
      Text value
    </td>
  </tr>
  
  <tr>
    <td>
      Datum
    </td>
    
    <td>
      Date value
    </td>
  </tr>
  
  <tr>
    <td>
      Zeit
    </td>
    
    <td>
      Time value
    </td>
  </tr>
  
  <tr>
    <td>
      Boolean
    </td>
    
    <td>
      Boolean value
    </td>
  </tr>
  
  <tr>
    <td>
      Ganzzahl
    </td>
    
    <td>
      Long integer value
    </td>
  </tr>
  
  <tr>
    <td>
      Zahl
    </td>
    
    <td>
      Real value
    </td>
  </tr>
  
  <tr>
    <td>
      Zeiger
    </td>
    
    <td>
      Pointer value
    </td>
  </tr>
  
  <tr>
    <td>
      Bild
    </td>
    
    <td>
      Picture value
    </td>
  </tr>
  
  <tr>
    <td>
      Blob
    </td>
    
    <td>
      BLOB value
    </td>
  </tr>
  
  <tr>
    <td>
      Collection
    </td>
    
    <td>
      Collection value
    </td>
  </tr>
  
  <tr>
    <td>
      Variant
    </td>
    
    <td>
      Variant value
    </td>
  </tr>
  
  <tr>
    <td>
      Objekt
    </td>
    
    <td>
      Object with default class (4D.Object)
    </td>
  </tr>
  
  <tr>
    <td>
      4D.\<className>
    </td>
    
    <td>
      Object of the 4D class name
    </td>
  </tr>
  
  <tr>
    <td>
      cs.\<className>
    </td>
    
    <td>
      Object of the user class name
    </td>
  </tr>
</table>

#### Beispiele

- To declare local and process basic variables:

```4d
var $myText, myText, $vt : Text
var myVar //variant

var $o : Object    
//equivalent to:  
var $o : 4D.Object
//also equivalent to C_OBJECT($o)
```

- To declare object variables of 4D class:

```4d
var $myFolder : 4D.Folder
var $myFile : 4D.File
```

- To declare object variables of user class:

```4d
var $myClass : cs.MyClass
var $dataclass : cs.Employee
var $entity : cs.EmployeeEntity
```

### Using a C_ directive

> **Compatibility Note:** This feature is deprecated as of 4D v18 R3. It is now recommended to use the [var](#using-the-var-keyword) keyword.

Directives from the "Compiler" theme commands allow you to declare variables of basic types.

Wollen Sie z. B. eine Textvariable definieren, schreiben Sie:

```4d
 C_TEXT(myText)
```

Hier sehen Sie einige grundlegende Variablendeklarationen:

```4d
 C_BLOB(vxMyBlob) // Die Prozessvariable vxMyBlob ist als eine Variable vom Typ BLOB deklariert
 C_DATE($vdCurDate) // Die lokale Variable $vdCurDate ist als eine Variable vom Typ Datum deklariert
 C_LONGINT(vg1;vg2;vg3) // Die 3 Prozessvariablen vg1, vg2 und vg3 sind als Variablen vom Type Lange Ganzzahl deklariert  
 C_OBJECT($vObj) // Die lokale Variable $vObj ist als eine Variable vom Typ Objekt deklariert
 C_COLLECTION($vCol) // Die lokale Variable $vCol ist als eine Variable vom Typ Collection deklariert
 ARRAY LONGINT(alAnArray;10) //Die Prozessvariable alAnArray ist als ein Array vom Typ Lange Ganzzahl mit 10 Elementen deklariert
```

**Note:** Arrays are a particular type of variables. Ein Array ist eine sortierte Reihe von Variablen desselben Typs. Weitere Informationen dazu finden Sie unter [Arrays](Concepts/arrays.md).

## Assigning Data

Daten lassen sich in Variablen und Arrays setzen und daraus kopieren. Daten in eine Variable setzen heißt, **der Variablen die Daten zuweisen**. Das geschieht über den Zuweisungsoperator (:=). Der Zuweisungsoperator wird auch verwendet, um Feldern Daten zuzuweisen.

The assignment operator is a primary way to create a variable and to put data into it. Sie schreiben den Namen der gewünschten Variablen auf die linke Seite des Zuweisungsoperators. Beispiel:

```4d
MyNumber:=3
```

erstellt die Variable * MyNumber* und setzt die Zahl 3 ein. Existiert MyNumber bereits, wird einfach die Zahl 3 eingesetzt.

> It is usually not recommended to create variables without [declaring their type](#creating-variables).

Natürlich wären Variablen nicht sehr hilfreich, wenn Sie keine Daten daraus erhalten könnten. Sie verwenden wieder den Zuweisungsoperator. Wollen Sie den Wert von MyNumber z.B. in ein Feld mit Namen [Products]Size setzen, schreiben Sie * MyNumber* auf die rechte Seite des Zuweisungsoperators:

```4d
[Products]Size:=MyNumber
```

In diesem Fall ist *[Products]Size* gleich 3. Dieses Beispiel ist ganz einfach, aber es zeigt, wie Daten über Programmierung von einer Stelle an eine andere übertragen werden.

Daten an Elemente eines Array weisen Sie über geschweifte Klammern zu, also {...}:

```4d
atNames{1}:="Richard"
```

## Local, Process, and Interprocess variables

Sie können drei Variablentypen erstellen: **lokal**, **Prozess** und **Interprozess**. Der Unterschied zwischen den Typen sind ihre Reichweite oder die Objekte, für die sie verfügbar sind.

### Lokale Variable

A local variable is, as its name implies, local to a method—accessible only within the method in which it was created and not accessible outside of that method. Die lokale Zuordnung zu einer Methode heißt formell "Lokale Reichweite". Lokale Variablen dienen zur Einschränkung einer Variablen, so dass sie nur innerhalb der Methode funktioniert.

Sie verwenden eine lokale Variable, um:

- Namenskonflikte mit anderen Variablen zu vermeiden
- Daten temporär zu verwenden
- Die Anzahl der Prozessvariablen zu verringern

Der Name einer lokalen Variable startet immer mit dem Dollarzeichen ($) und kann bis zu 31 zusätzliche Zeichen enthalten. Falls Sie einen längeren Namen eingeben, kürzt 4D ihn auf die passende Länge.

In einer Anwendung mit vielen Methoden und Variablen kommt es oft vor, dass Sie eine Variable nur in der Methode benötigen, in der Sie arbeiten. Sie können eine lokale Variable in der Methode anlegen bzw. verwenden und müssen sich keine Gedanken machen, ob Sie den gleichen Variablennamen bereits irgendwo anders verwendet haben.

Häufig benötigt eine Anwendung nur eine kurze Info vom Benutzer. Dafür gibt es den Befehl `Request`. Er zeigt ein Dialogfenster mit einer Meldung, die den Benutzer zu einer Antwort auffordert. Gibt der Benutzer die Antwort ein, gibt der Befehl diese Angaben zurück. In der Regel müssen Sie diese Angaben nicht sehr lange in Ihren Methoden halten. Dies ist ein typischer Anwendungsbereich für eine lokale Variable. Hier ein Beispiel:

```4d
 $vsID:=Request("Please enter your ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

Diese Methode fordert den Benutzer auf, eine ID einzugeben. Sie setzt die Antwort in eine lokale Variable $vsID und sucht dann nach der ID, die der Benutzer eingegeben hat. Ist die Methode abgeschlossen, wird die lokale Variable $vsID aus dem Speicher entfernt. Das ist gut so, denn die Variable wird nur einmal und nur in dieser Methode benötigt.

**Hinweis:** Die Parameter $1, $2... in Methoden sind lokale Variablen. Weitere Informationen dazu finden Sie unter [Parameter](Concepts/parameters.md).

### Prozessvariablen

Eine Prozessvariable ist nur innerhalb eines Prozesses verfügbar. It is accessible to the process method and any other method called from within the process.

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