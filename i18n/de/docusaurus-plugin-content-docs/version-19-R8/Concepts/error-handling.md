---
id: error-handling
title: Fehlerverwaltung
---

Fehlerverwaltung bedeutet das Vorwegnehmen und Reagieren auf Fehler, die in Ihrer Anwendung auftreten können. 4D bietet umfassende Unterstützung zum Abfangen und Melden von Fehlern zur Laufzeit und zum Untersuchen der Fehlerursachen.

Die Fehlerverwaltung erfüllt zwei Hauptanforderungen:

- potenzielle Fehler und Bugs in Ihrem Code während der Entwicklungsphase herausfinden und beheben,
- Unerwartete Fehler in Anwendungen im Einsatz abfangen und beseitigen; insbesondere können Sie Fehlermeldungen des Systems (Festplatte voll, fehlende Datei usw.) durch Ihre eigene Oberfläche ersetzen.

:::tip Good practice

It is highly recommended to install a global error-handling method on 4D Server, for all code running on the server. When 4D Server is not running [headless](../Admin/cli.md) (i.e. launched with its [administration window](../ServerWindow/overview.md)), this method would avoid unexpected dialog boxes to be displayed on the server machine. In headless mode, errors are logged in the [4DDebugLog file](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) for further analysis.

:::


## Fehler oder Status

Viele Class Functions von 4D, wie `entity.save()` oder `transporter.send()`, geben ein Objekt *status* zurück. Dieses Objekt dient zum Speichern "vorhersehbarer" Fehler in der Runtime-Umgebung, z.B. ungültiges Kennwort, gesperrte Entity, etc., welche die Ausführung des Programms nicht stoppen. Diese Art von Fehlern lässt sich über regulären Code verwalten.

Andere Fehler, wie Fehler beim Schreiben auf die Festplatte, Netzwerkfehler oder allgemein jede unerwartete Unterbrechung, sind "nicht-vorhersehbar". Diese Art von Fehlern erzeugt Ausnahmen und müssen über eine Fehlerverwaltungsmethode behandelt werden.


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
- Der Befehl `Get call chain` gibt eine Collection von Objekten zurück, die jeden Schritt der Aufruffolge der Methode im aktuellen Prozess beschreiben.


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


