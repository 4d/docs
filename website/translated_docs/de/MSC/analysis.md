---
id: Analyse
title: Seite Aktivität Analyse
sidebar_label: Seite Aktivität Analyse
---

Auf der Seite Aktivität Analyse des MSC können Sie den Inhalt des aktuellen Logbuchs betrachten. Diese Funktion ist hilfreich, um die Verwendung der Datenbank zu analysieren oder die Operationen herauszufinden, die Fehler verursachen oder die Funktionsweise beeinträchtigen. Läuft die Anwendung im Client-/Server-Modus, können Sie auch die Operationen auf jedem Client-Rechner überprüfen.
> Sie können die in den Daten der Anwendung ausgeführten Operationen auch zurückfahren (rollback). Weitere Informationen dazu finden Sie auf der [Seite Zurückfahren](rollback.md).

![](assets/en/MSC/MSC_analysis.png)

Jede im Logbuch gespeicherte Operation erscheint als eine Zeile. Die Spalten liefern verschiedene Informationen zur Operation. Durch Anklicken der Kopfteile können Sie die Spalten beliebig umstellen.

Über diese Informationen können Sie die Quelle und den Kontext jeder Operation identifizieren:

- **Operation**: Sequence number of operation in the log file.
- **Action**: Type of operation performed on the data. Diese Spalte kann eine der nachfolgenden Operationen anzeigen:
    - Öffnen der Datendatei: Datendatei öffnen
    - Schließen der Datendatei: Eine geöffnete Datendatei wird geschlossen
    - Erstellen eines Kontexts: Einen Prozess erstellen, der einen Ausführungskontext angibt
    - Schließen eines Kontexts: Prozess schließen
    - Hinzufügen: Einen Datensatz erstellen und speichern
    - BLOB hinzufügen: Ein BLOB in einem BLOB Feld speichern
    - Löschen: Datensatz gelöscht
    - Ändern: Datensatz geändert
    - Starten der Transaktion: Transaktion gestartet
    - Bestätigen der Transaktion: Transaktion bestätigt
    - Abbrechen der Transaktion: Transaktion annulliert
    - Update context: Change in extra data (e.g. a call to `CHANGE CURRENT USER` or `SET USER ALIAS`).

- **Table**: Table to which the added/deleted/modified record or BLOB belongs.
- **Primary Key/BLOB**: contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation.
- **Process**: Internal number of process in which the operation was carried out. Diese interne Nummer entspricht dem Kontext der Operation.
- **Size**: Size (in bytes) of data processed by the operation.
- **Date and Hour**: Date and hour when the operation was performed.
- **System User**: System name of the user that performed the operation. In client-server mode, the name of the client-side machine is displayed; in single-user mode, the session name of the user is displayed.
- **4D User**: 4D user name of the user that performed the operation. If an alias is defined for the user, the alias is displayed instead of the 4D user name.
- **Values**: Values of fields for the record in the case of addition or modification. The values are separated by “;”. Only values represented in alphanumeric form are displayed.  
  ***Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*
- **Records**: Record number.

Click on **Analyze** to update the contents of the current log file of the selected database (named by default dataname.journal). Mit der Schaltfläche Anzeigen wählen und öffnen Sie ein anderes Logbuch der Datenbank. The **Export...** button can be used to export the contents of the file as text.


