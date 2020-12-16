---
id: verify
title: Seite Prüfen
sidebar_label: Seite Prüfen
---

Auf dieser Seite können Sie die Datenintegrität überprüfen. Die Überprüfung lässt sich in Datensätzen und/oder Indizes durchführen. Diese Funktionalität prüft nur die Datenintegrität. Bei Fehlern oder notwendigen Reparaturen erhalten Sie eine Meldung, die [Seite Reparieren](repair.md) zu verwenden.


## Aktionen

Die Seite enthält die Schaltflächen für Aktionen, über die Sie direkt auf die Funktionen zum Überprüfen zugreifen können.
> Ist die Datenbank verschlüsselt, wird auch die Gültigkeit der verschlüsselten Datenkonsistenz überprüft. Ist noch kein gültiger Datenschlüssel angegeben, erscheint ein Dialogfenster, dass die Passphrase oder den Datenschlüssel anfordert.


- **Verify the records and the indexes:** Starts the total data verification procedure.
- **Verify the records only**: Starts the verification procedure for records only (indexes are not verified).
- **Verify the indexes only**: Starts the verification procedure for indexes only (records are not verified).
> Sie können Datensätze und Indizes auch im Detail Tabelle für Tabelle überprüfen. Weitere Informationen dazu finden Sie im unteren Abschnitt.


## Logbuch öffnen

Bei allen Überprüfungsarten generiert 4D ein Logbuch im Ordner `Logs` der Datenbank. Hier erscheinen alle durchgeführten Überprüfungen und evtl. gefundene Fehler. Gibt es keine Fehler, wird das durch [OK] angezeigt. It is created in XML format and is named: *DatabaseName*_Verify_Log_*yyyy-mm-dd hh-mm-ss*.xml where:

- *DatabaseName* is the name of the project file without any extension, for example "Invoices",
- *yyyy-mm-dd hh-mm-ss* is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.


## Details

The **Table list** button displays a detailed page that can be used to view and select the actual records and indexes to be checked:

![](assets/en/MSC/MSC_Verify.png)


Sie können bestimmte Einträge zum Überprüfen angeben, um so Zeit bei der Überprüfung zu sparen.

Die Hauptliste zeigt alle Tabellen der Datenbank. Sie können für jede Tabelle die Überprüfung auf Datensätze bzw. Indizes eingrenzen. Klicken Sie auf den Pfeil vor der Tabelle, um die Tabelle oder indizierte Datenfelder aufzuklappen und markieren Sie die Ankreuzfelder je nach gewünschter Aktion. Standardmäßig ist alles ausgewählt. You can also use the **Select all**, **Deselect all**, **All records** and **All indexes** shortcut buttons.

Die Spalte “Aktion” gibt für jede Zeile die auszuführenden Operationen an. Bei aufgeklappter Tabelle zeigen die Zeilen “Datensätze” und “Indizierte Felder” die Anzahl der betroffenen Einträge an.

Die Spalte „Status“ zeigt den Überprüfungsstatus für jeden Eintrag mit dem entsprechenden Symbol an:

| ![](assets/en/MSC/MSC_OK.png)  | Überprüfung ausgeführt, keine Probleme    |
| ------------------------------ | ----------------------------------------- |
| ![](assets/en/MSC/MSC_KO2.png) | Überprüfung ausgeführt, Probleme gefunden |
| ![](assets/en/MSC/MSC_KO3.png) | Überprüfung zum Teil ausgeführt           |
| ![](assets/en/MSC/MSC_KO.png)  | Überprüfung nicht ausgeführt              |

Click on **Verify** to begin the verification or on **Standard** to go back to the standard page.

The **Open log file** button can be used to display the log file in the default browser of the machine (see [Open log file](#open-log-file) above).
> Die Standardseite berücksichtigt keine Änderungen, die auf der Detailseite gemacht wurden: Klicken Sie auf der Standardseite auf eine Schaltfläche zum Überprüfen, werden alle Einträge überprüft. Die auf der Detailseite definierten Einstellungen bleiben jedoch von einer Sitzung zur nächsten erhalten.
