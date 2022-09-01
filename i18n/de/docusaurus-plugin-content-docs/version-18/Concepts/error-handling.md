---
id: error-handling
title: Fehlerverwaltung
---

Fehlerverwaltung bedeutet das Vorwegnehmen und Reagieren auf Fehler, die in Ihrer Anwendung auftreten können. 4D bietet umfassende Unterstützung zum Abfangen und Melden von Fehlern zur Laufzeit und zum Untersuchen der Fehlerursachen.

Die Fehlerverwaltung erfüllt zwei Hauptanforderungen:

- potenzielle Fehler und Bugs in Ihrem Code während der Entwicklungsphase herausfinden und beheben,
- Unerwartete Fehler in Anwendungen im Einsatz abfangen und beseitigen; insbesondere können Sie Fehlermeldungen des Systems (Festplatte voll, fehlende Datei usw.) durch Ihre eigene Oberfläche ersetzen.
> > It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. Denn solch eine Methode kann vermeiden, dass unerwartete Dialogfenster auf dem Serverrechner erscheinen, und außerdem Fehler in einer speziellen Datei für weitere Analysen protokollieren.

## Fehlerverwaltungsmethode installieren

In 4D werden alle Fehler über eine spezifische Projektmethode ausfindig gemacht und verwaltet. Das ist die **Fehlerverwaltungs- oder Fehlerauffindmethode**.

Diese Projektmethode wird für den aktuellen Prozess installiert und automatisch für jeden Fehler aufgerufen, der im Prozess auftritt, sei es im interpretierten oder im kompilierten Modus. Um sie zu *installieren*, rufen Sie den Befehl `ON ERR CALL` auf und setzen den Namen der Projektmethode als Parameter. Beispiel:

```4d
ON ERR CALL("IO_ERRORS") //Installs the error-handling method
```

Wollen Sie das Auffinden von Fehlern abbrechen und wieder an 4D übergeben, rufen Sie `ON ERR CALL` mit einem leeren String auf:
```4d
ON ERR CALL("") //gives back control to 4D
```

### Reichweite und Komponenten

Sie können eine einzige Fehlerverwaltungsmethode für die gesamte Anwendung definieren oder für jedes Modul eine eigene Methode. Sie können jedoch immer nur eine Methode pro Prozess installieren.

Eine Fehlerverwaltungsmethode, die über den Befehl `ON ERR CALL` eingerichtet wurde, gilt nur für die laufende Anwendung. Erzeugt eine **Komponente** einen Fehler, wird nicht die Fehlerverwaltungsmethode `ON ERR CALL` der Host-Datenbank aufgerufen, und umgekehrt.

Mit dem Befehl `Method called on error` erfahren Sie den Namen der Methode, die über den Befehl `ON ERR CALL` für den aktuellen Prozess installiert wurde. Er ist besonders hilfreich im Zusammenhang mit Komponenten, da Sie damit die Fehlerverwaltungsmethode der Host Datenbank zeitweise ändern und dann wiederherstellen können:

```4d
 $methCurrent:=Method called on error
 ON ERR CALL("NewMethod")
  //If the document cannot be opened, an error is generated
 $ref:=Open document("MyDocument")
  //Reinstallation of previous method
 ON ERR CALL($methCurrent)

```

### Fehlerverwaltung in der Methode

In einer eigenen Fehlermethode erhalten Sie verschiedene Angaben, die zum Identifizieren des Fehlers dienen:

- 4D automatically maintains a number of variables called **system variables**, meeting different needs (see the *4D Language Reference manual*):

  - `Error` (Lange Ganzzahl): Fehlernummer
  - `Error method` (Text): Namen der Methode, die den Fehler ausgelöst hat
  - `Error line` (Lange Ganzzahl): Zeilennummer in der Methode, die den Fehler ausgelöst hat.
  - `Error formula` (Text): Formel des 4D Code (Rohtext), der den Fehler verursacht hat.

- Der Befehl `GET LAST ERROR STACK` gibt Informationen über den aktuellen Fehlerstapel der 4D Anwendung zurück.
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
