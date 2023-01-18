---
id: verify
title: Seite Prüfen
sidebar_label: Seite Prüfen
---

Auf dieser Seite können Sie die Datenintegrität überprüfen. Die Überprüfung lässt sich in Datensätzen und/oder Indizes durchführen. Diese Funktionalität prüft nur die Datenintegrität. Bei Fehlern oder notwendigen Reparaturen erhalten Sie eine Meldung, die [Seite Reparieren](repair.md) zu verwenden.

## Aktionen

Die Seite enthält die Schaltflächen für Aktionen, über die Sie direkt auf die Funktionen zum Überprüfen zugreifen können.
> Ist die Datenbank verschlüsselt, wird auch die Gültigkeit der verschlüsselten Datenkonsistenz überprüft. Ist noch kein gültiger Datenschlüssel angegeben, erscheint ein Dialogfenster, dass die Passphrase oder den Datenschlüssel anfordert.

- **Datensätze und Indizes prüfen:** Startet den kompletten Prozess zum Überprüfen der Daten.
- **Nur Datensätze prüfen**: Startet nur den Prozess zum Überprüfen der Datensätze, d. h. Indizes werden nicht geprüft.
- **Nur Indizes prüfen**: Startet nur den Prozess zum Überprüfen der Indizes, d. h. Datensätze werden nicht geprüft.
> > Verification of records and indexes can also be carried out in detail mode, table by table (see the Details section below).

## Logbuch öffnen

Bei allen Überprüfungsarten generiert 4D ein Logbuch im Ordner `Logs` der Anwendung. Hier erscheinen alle durchgeführten Überprüfungen und evtl. gefundene Fehler. Gibt es keine Fehler, wird das durch [OK] angezeigt. It is created in XML format and is named: *ApplicationName**Verify_Log**yyyy-mm-dd hh-mm-ss*.xml where:

- *ApplicationName* ist der Name der Projektdatei ohne Endung, zum Beispiel "Rechnungen"
- *yyyy-mm-dd hh-mm-ss* ist der Zeitstempel der Datei. Er basiert auf der lokalen Systemzeit, zur der die Wartungsoperation gestartet wurde, zum Beispiel "2019-02-11 15-20-45".

Klicken Sie auf die Schaltfläche **Logbuch öffnen**, zeigt 4D das neueste Logbuch im standardmäßigen Browser des Rechners an.

## Details

Die Schaltfläche **Tabellenliste** öffnet die Seite mit ausführlichen Angaben zur Überprüfung. Hier können Sie die aktuell zu prüfenden Datensätze und Indizes ansehen und auswählen:

![](../assets/en/MSC/MSC_Verify.png)

Sie können bestimmte Einträge zum Überprüfen angeben, um so Zeit bei der Überprüfung zu sparen.

Die Hauptliste zeigt alle Tabellen der Datenbank. Sie können für jede Tabelle die Überprüfung auf Datensätze bzw. Indizes eingrenzen. Klicken Sie auf den Pfeil vor der Tabelle, um die Tabelle oder indizierte Datenfelder aufzuklappen und markieren Sie die Ankreuzfelder je nach gewünschter Aktion. Standardmäßig ist alles ausgewählt. Sie können dafür auch am rechten Rand die Schaltflächen **Alles auswählen**, **Alles abwählen**, **Alle Datensätze** und **Alle Indizes** verwenden.

Die Spalte “Aktion” gibt für jede Zeile die auszuführenden Operationen an. Bei aufgeklappter Tabelle zeigen die Zeilen “Datensätze” und “Indizierte Felder” die Anzahl der betroffenen Einträge an.

Die Spalte „Status“ zeigt den Überprüfungsstatus für jeden Eintrag mit dem entsprechenden Symbol an:

| ![](../assets/en/MSC/MSC_OK.png)  | Überprüfung ausgeführt, keine Probleme    |
| --------------------------------- | ----------------------------------------- |
| ![](../assets/en/MSC/MSC_KO2.png) | Überprüfung ausgeführt, Probleme gefunden |
| ![](../assets/en/MSC/MSC_KO3.png) | Überprüfung zum Teil ausgeführt           |
| ![](../assets/en/MSC/MSC_KO.png)  | Überprüfung nicht ausgeführt              |

Klicken Sie am unteren Rand rechts auf die Schaltfläche **Prüfen**, um die Überprüfung zu starten oder links auf die Schaltfläche **Standard**, um zur Standardseite zurückzukehren.

Klicken Sie auf die Schaltfläche **Logbuch anzeigen**, zeigt 4D das Logbuch im standardmäßigen Browser des Rechners (siehe oberen Abschnitt [Logbuch öffnen](#logbuch-öffnen)).
> Die Standardseite berücksichtigt keine Änderungen, die auf der Detailseite gemacht wurden: Klicken Sie auf der Standardseite auf eine Schaltfläche zum Überprüfen, werden alle Einträge überprüft. Die auf der Detailseite definierten Einstellungen bleiben jedoch von einer Sitzung zur nächsten erhalten.
