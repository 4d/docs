---
id: version-18.0-analysis
title: Seite Aktivität Analyse
sidebar_label: Seite Aktivität Analyse
original_id: Analyse
---

Auf der Seite Aktivität Analyse des MSC können Sie den Inhalt des aktuellen Logbuchs betrachten. Diese Funktion ist hilfreich, um die Verwendung der Datenbank zu analysieren oder die Operationen herauszufinden, die Fehler verursachen oder die Funktionsweise beeinträchtigen. Läuft die Anwendung im Client-/Server-Modus, können Sie auch die Operationen auf jedem Client-Rechner überprüfen.

> Sie können die in den Daten der Anwendung ausgeführten Operationen auch zurückfahren (rollback). Weitere Informationen dazu finden Sie auf der [Seite Zurückfahren](rollback.md).

![](assets/en/MSC/MSC_analysis.png)

Jede im Logbuch gespeicherte Operation erscheint als eine Zeile. Die Spalten liefern verschiedene Informationen zur Operation. Durch Anklicken der Kopfteile können Sie die Spalten beliebig umstellen.

Über diese Informationen können Sie die Quelle und den Kontext jeder Operation identifizieren:

- **Operation**: Sequenznummer der Operation im Logbuch.
- **Aktion**: Art der in den Daten ausgeführten Operation. Diese Spalte kann eine der nachfolgenden Operationen anzeigen:
    
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
- **Tabelle**: Tabelle, zu welcher der hinzugefügte/gelöschte/geänderte Datensatz bzw. das BLOB gehört

- **Primärschlüssel/BLOB**: Inhalt des Primärschlüssels für jeden Datensatz (besteht der Primärschlüssel aus mehreren Feldern, sind die einzelnen Werte durch Strichpunkte voneinander getrennt) oder Sequenznummer des BLOB, welche an der Operation beteiligt ist.
- **Prozess**: Interne Nummer des Prozesses, in dem die Operation ausgeführt wurde. Diese interne Nummer entspricht dem Kontext der Operation.
- **Größe**: Größe (in Bytes) der Daten, die durch die Operation bearbeitet werden.
- **Datum und Uhrzeit**: Datum und Uhrzeit, zu der die Operation ausgeführt wurde.
- **User**: Name of the user that performed the operation. In client-server mode, the name of the client-side machine is displayed; in single-user mode, the ID of the user is displayed. If the 4D passwords are not enabled, this column is blank.
- **Values**: Values of fields for the record in the case of addition or modification. The values are separated by “;”. Only values represented in alphanumeric form are displayed.  
    ***Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*
- **Records**: Record number.

Klicken Sie am unteren Rand auf die Schaltfläche **Analysieren**, um den Inhalt des aktuellen Logbuchs der ausgewählten Datenbank anzuzeigen. Es hat in 4D standardmäßig den Namen dataname.journal. Mit der Schaltfläche Anzeigen wählen und öffnen Sie ein anderes Logbuch der Datenbank. Mit der Schaltfläche **Exportieren** exportieren Sie den Inhalt der Datei als Text.