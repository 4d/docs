---
id: error-handling
title: Fehlerverwaltung
---

Fehlerverwaltung bedeutet das Vorwegnehmen und Reagieren auf Fehler, die in Ihrer Anwendung auftreten können. 4D bietet umfassende Unterstützung zum Abfangen und Melden von Fehlern zur Laufzeit und zum Untersuchen der Fehlerursachen.

Die Fehlerverwaltung erfüllt zwei Hauptanforderungen:

- potenzielle Fehler und Bugs in Ihrem Code während der Entwicklungsphase herausfinden und beheben,
- Unerwartete Fehler in Anwendungen im Einsatz abfangen und beseitigen; insbesondere können Sie Fehlermeldungen des Systems (Festplatte voll, fehlende Datei usw.) durch Ihre eigene Oberfläche ersetzen.

Basically, there are two ways to handle errors in 4D. You can [install an error-handling method](#installing-an-error-handling-method), or write a [`Try()` keyword](#tryexpression) before pieces of code that call a function, method, or expression that can throw an error.

:::tip Good practice

It is highly recommended to install a global error-handling method on 4D Server, for all code running on the server. When 4D Server is not running [headless](../Admin/cli.md) (i.e. launched with its [administration window](../ServerWindow/overview.md)), this method would avoid unexpected dialog boxes to be displayed on the server machine. In headless mode, errors are logged in the [4DDebugLog file](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) for further analysis.

:::


## Fehler oder Status

Viele Class Functions von 4D, wie `entity.save()` oder `transporter.send()`, geben ein Objekt *status* zurück. Dieses Objekt dient zum Speichern "vorhersehbarer" Fehler in der Runtime-Umgebung, z.B. ungültiges Kennwort, gesperrte Entity, etc., welche die Ausführung des Programms nicht stoppen. Diese Art von Fehlern lässt sich über regulären Code verwalten.

Andere Fehler, wie Fehler beim Schreiben auf die Festplatte, Netzwerkfehler oder allgemein jede unerwartete Unterbrechung, sind "nicht-vorhersehbar". This category of errors generates exceptions and needs to be handled through an error-handling method or a `Try()` keyword.


## Fehlerverwaltungsmethode installieren

In 4D, all errors can be caught and handled by specific project methods, named **error-handling** (or **error-catching**) methods.

Once installed, error handlers are automatically called in interpreted or compiled mode in case of error in the 4D application or one of its components. A different error handler can be called depending on the execution context (see below).

To *install* an error-handling project method, you just need to call the [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) command with the project method name and (optionnally) scope as parameters. Beispiel:

```4d
ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method
```

To stop catching errors for an execution context and give back hand, call `ON ERR CALL` with an empty string:

```4d
ON ERR CALL("";ek local) //gives back control for the local process
```

The  [`Method called on error`](https://doc.4d.com/4dv19/help/command/en/page704.html) command allows you to know the name of the method installed by `ON ERR CALL` for the current process. Er ist besonders hilfreich bei generischem Code, da Sie damit die Fehlerverwaltungsmethode zeitweise ändern und dann wiederherstellen können:

```4d
 $methCurrent:=Method called on error(ek local)
 ON ERR CALL("NewMethod";ek local)
  //If the document cannot be opened, an error is generated
 $ref:=Open document("MyDocument")
  //Reinstallation of previous method
 ON ERR CALL($methCurrent;ek local)

```

### Reichweite und Komponenten

An error-handling method can be set for different execution contexts:

- for the **current process**- a local error handler will be only called for errors that occurred in the current process of the current project,
- for the **whole application**- a global error handler will be called for all errors that occurred in the application execution context of the current project,
- from the **components**- this error handler is defined in a host project and will be called for all errors that occurred in the components when they were not already caught by a component handler.

Beispiele:

```4d
ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method
ON ERR CALL("globalHandler";ek global) //Installs a global error-handling method
ON ERR CALL("componentHandler";ek errors from components) //Installs an error-handling method for components
```

You can install a global error handler that will serve as "fallback" and specific local error handlers for certain processes. A global error handler is also useful on the server to avoid error dialogs on the server when run with interface.

Sie können eine einzige Fehlerverwaltungsmethode für die gesamte Anwendung definieren oder für jedes Modul eine eigene Methode. However, only one method can be installed per execution context and per project.

When an error occurs, only one method is called, as described in the following diagram:

![error management](../assets/en/Concepts/error-schema.png)


### Fehlerverwaltung in der Methode

Within a custom error method, you have access to several pieces of information that will help you identifying the error:

- dedicated system variables:

  - `Error` (Lange Ganzzahl): Fehlernummer
  - `Error method` (Text): Namen der Methode, die den Fehler ausgelöst hat
  - `Error line` (Lange Ganzzahl): Zeilennummer in der Methode, die den Fehler ausgelöst hat.
  - `Error formula` (Text): Formel des 4D Code (Rohtext), der den Fehler verursacht hat.

:::info

4D automatically maintains a number of variables called **system variables**, meeting different needs. See the *4D Language Reference manual*.

:::

- the [`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1799.html) command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/en/page1015.html) command that returns the same information as arrays.
- Der Befehl `Call chain` gibt eine Collection von Objekten zurück, die jeden Schritt der Aufruffolge der Methode im aktuellen Prozess beschreiben.


#### Beispiel

Hier sehen Sie ein einfaches Fehlerverwaltungssystem:

```4d
//installing the error handling method
 ON ERR CALL("errorMethod")
 //... executing code
 ON ERR CALL("") //giving control back to 4D
```

```4d
// errorMethod project method
 If(Error#1006) //this is not a user interruption
    ALERT("The error "+String(Error)+" occurred". The code in question is: \""+Error formula+"\"")
 End if
```

### Leere Fehlerverwaltungsmethode verwenden

Wollen Sie hauptsächlich, dass das Dialogfenster für Standardfehler ausgeblendet wird, können Sie eine leere Fehlerverwaltungsmethode installieren. Die Systemvariable `Error` lässt sich in jeder Methode testen, z.B. auch außerhalb der Fehlerverwaltungsmethode:

```4d
ON ERR CALL("emptyMethod") //emptyMethod exists but is empty
$doc:=Open document( "myFile.txt")
If (Error=-43)
    ALERT("File not found.")
End if
ON ERR CALL("")
End if
ON ERR CALL("")
```


## Try(expression)

The `Try(expression)` statement allows you to test a single-line expression in its actual execution context (including, in particular, local variable values) and to intercept errors it throws so that the 4D error dialog box is not displayed. Using `Try(expression)` provides an easy way to handle simple error cases with a very low number of code lines, and without requiring an error-handling method.

The formal syntax of the `Try(expression)` statement is:

```4d

Try (expression) : any | Undefined

```

*expression* can be any valid expression.

If an error occurred during its execution, it is intercepted and no error dialog is displayed, whether an [error-handling method](#installing-an-error-handling-method) was installed or not before the call to `Try()`. If *expression* returns a value, `Try()` returns the last evaluated value, otherwise it returns `Undefined`.

You can handle the error(s) using the [`Last errors`](https://doc.4d.com/4dv20/help/command/en/page1799.html) command. If *expression* throws an error within a stack of `Try()` calls, the execution flow stops and returns to the latest executed `Try()` (the first found back in the call stack).

:::note

If an [error-handling method](#installing-an-error-handling-method) is installed by *expression*, it is called in case of error.

:::


### Beispiele

1. You want to display the contents of a file if the file can be open without error, and if its contents can be read. Sie schreiben:

```4d
var $text : Text
var $file : 4D.File := File("/RESOURCES/myFile.txt")
var $fileHandle : 4D.FileHandle := Try($file.open())
If ($fileHandle # Null)
  $text:=Try($fileHandle.readText()) || "Error reading the file"
End if
```


2. You want to handle the divide by zero error. In this case, you want to return 0 and throw an error:

```4d
function divide( $p1: real; $p2: real)-> $result: real
  if ($p2=0)
     $result:=0 //only for clarity (0 is the default for reals)
     throw(-12345; "Division by zero")
  else
    $result:=$p1/$p2
  end if

function test()
  $result:=Try(divide($p1;$p2))
  If (Last errors # null)
    ALERT("Error")
  End if

```

3. You want to handle both [predictable and non-predictable](#error-or-status) errors:

```4d
var $e:=ds.Employee.new()
$e.name:="Smith"
$status:=Try($e.save()) //catch predictable and non-predictable errors
If ($status.success)
   ALERT( "Success")
Else
   ALERT( "Error: "+JSON Stringify($status.errors))
End if

``` 




