---
id: restore
title: Seite Wiederherstellen
sidebar_label: Seite Wiederherstellen
---

Über die Seite **Wiederherstellen** können Sie ein Archiv der aktuellen Anwendung manuell wiederherstellen. Hier können Sie auch verschiedene Optionen zum Steuern der Wiederherstellung festlegen:

![](../assets/en/MSC/MSC_restore.png)

> Das automatische Wiederherstellungssystem von 4D stellt Anwendungen wieder her und integriert bei Bedarf das Logbuch der Daten.

Der linke Bereich enthält die vorhandenen Backups der Anwendung. Sie können auch unter dem linken Bereich auf die Schaltfläche **Wählen** klicken, um ein Archiv an anderer Stelle zu öffnen. Es wird dann zur Liste der Archive hinzugefügt.

Wählen Sie hier ein Backup aus, erscheinen im rechten Teil des Fensters Informationen über dieses Backup:

- **Pfad**: Vollständiger Pfadname der gewählten Backup-Datei. Mit der Schaltfläche Anzeigen öffnen Sie die Backup-Datei in einem Systemfenster.
- **Datum und Zeit**: Datum und Uhrzeit des Backup.
- **Inhalt**: Inhalt der Backup-Datei. Neben jedem Eintrag in der Liste gibt es ein Ankreuzfeld, über das Sie angeben, ob er wiederhergestellt werden soll. Sie können auch die Schaltflächen** Alles aktivieren** oder **Nichts aktivieren** verwenden, um die Liste der Einträge zusammenzustellen, die Sie wiederherstellen wollen.
- **Zielordner für wiederherstellte Dateien auswählen**: Ordner, in dem die wiederhergestellten Dateien abgelegt werden. 4D legt die wiederhergestellten Dateien standardmäßig in einem Ordner mit Namen "Archivname" (ohne Endung) ab, der neben dem Projektordner liegt. Wollen Sie das Ziel ändern, klicken Sie unter dem Bereich auf die Schaltfläche **[...]** und geben einen anderen Ordner an.

Die Schaltfläche **Wiederherstellen** startet die manuelle Wiederherstellung der gewählten Elemente.

## Mehrere Logbücher der Daten nacheinander integrieren

Mit der Option **Logbuch/Logbücher nach Wiederherstellung integrieren** können Sie mehrere Logbücher hintereinander in eine Anwendung integrieren. Haben Sie z.B. 4 Logbücher (.4BL) passend zu 4 Backups, können Sie das erste Backup wiederherstellen und dann die Logbücher (data log) der Reihe nach integrieren. Auf diese Weise können Sie z. B. eine Datei wiederherstellen, auch wenn die letzten Backup-Dateien fehlen.

Ist diese Option markiert, zeigt 4D nach dem Wiederherstellen den Standard Öffnen-Dialog. Hier können Sie das entsprechende Logbuch auswählen. Der Öffnen-Dialog erscheint erneut nach jeder Integration, bis er abgebrochen wird.

## Eine verschlüsselte Anwendung wiederherstellen

Beachten Sie, dass sich der Verschlüsselungscode (Passphrase) bei mehreren Versionen der Backup Dateien (.4BK), Logbücher (.4BL) und der aktuellen Anwendung geändert haben kann. Es müssen immer passende Verschlüsselungscodes angegeben werden.

Beim Wiederherstellen eines Backup und Integration des aktuellen Logbuchs in eine verschlüsselte Anwendung gilt folgendes:

- Stellen Sie ein Backup mit einer alten Passphrase her, ist diese Passphrase beim nächsten Starten der Anwendung erforderlich.
- Nach dem Verschlüsseln läuft beim Öffnen einer verschlüsselten Datendatei ein Backup und es wird ein neues Logbuch erstellt. Deshalb ist es nicht möglich, eine Datei .4BK, die einen Verschlüsselungscode hat, wiederherzustellen und .4BL Dateien, die einen anderen Verschlüsselungscode haben, zu integrieren.

Nachfolgende Übersicht zeigt die Vorgehensweise bei einer Operation Backup/Wiederherstellen mit mehreren Schlüsseln:


| Operation                         | Generierte Dateien                                     | Kommentar                                                                                                                                                                                                                                            |
| --------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Neue Datendatei                   |                                                        |                                                                                                                                                                                                                                                      |
| Daten hinzufügen (Datensatz # 1)  |                                                        |                                                                                                                                                                                                                                                      |
| Backup Anwendung                  | 0000.4BL und 0001.4BK                                  |                                                                                                                                                                                                                                                      |
| Daten hinzufügen (Datensatz # 2)  |                                                        |                                                                                                                                                                                                                                                      |
| Backup Anwendung                  | 0001.4BL und 0002.4BK                                  |                                                                                                                                                                                                                                                      |
| Daten hinzufügen (Datensatz # 3)  |                                                        |                                                                                                                                                                                                                                                      |
| Datendatei mit key1 verschlüsseln | Datei 0003.4BK (verschlüsselt mit key1)                | Verschlüsselung sichert Originaldateien (inkl. Journal) im Ordner "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". Beim Öffnen der verschlüsselten Datendatei wird ein neues Journal erstellt und ein Backup zum Aktivieren dieses Journals gemacht |
| Daten hinzufügen (Datensatz #4)   |                                                        |                                                                                                                                                                                                                                                      |
| Backup Anwendung                  | Dateien 0003.4BL und 0004.4BK (verschlüsselt mit key1) | Wir können 0003.4BK wiederherstellen und 0003.4BL integrieren                                                                                                                                                                                        |
| Daten hinzufügen (Datensatz # 5)  |                                                        |                                                                                                                                                                                                                                                      |
| Backup Anwendung                  | Dateien 0004.4BL und 0005.4BK (verschlüsselt mit key1) | Wir können 0003.4BK wiederherstellen und 0003.4BL + 0004.4BL integrieren. Wir können 0004.4BK wiederherstellen und 0004.4BL integrieren                                                                                                              |
| Daten hinzufügen (Datensatz # 6)  |                                                        |                                                                                                                                                                                                                                                      |
| Datendatei mit key2 verschlüsseln | Datei 0006.4BK (verschlüsselt mit key2)                | Verschlüsselung sichert Originaldateien (inkl. Journal) im Ordner "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". Beim Öffnen der verschlüsselten Datendatei wird ein neues Journal erstellt und ein Backup zum Aktivieren dieses Journals gemacht |
| Daten hinzufügen (Datensatz # 7)  |                                                        |                                                                                                                                                                                                                                                      |
| Backup Anwendung                  | Dateien 0006.4BL und 0007.4BK (verschlüsselt mit key2) | Wir können 0006.4BK wiederherstellen und 0006.4BL integrieren                                                                                                                                                                                        |
| Daten hinzufügen (Datensatz # 8)  |                                                        |                                                                                                                                                                                                                                                      |
| Backup Anwendung                  | Dateien 0007.4BL und 0008.4BK (verschlüsselt mit key2) | Wir können 0006.4BK wiederherstellen und 0006.4BL + 0007.4BL integrieren. Wir können 0007.4BK wiederherstellen und 0007.4BL integrieren                                                                                                              |
> Beim Wiederherstellen eines Backup .4BK und Integrieren eines oder mehrerer Logbücher .4BL müssen diese Dateien denselben Verschlüsselungscode haben. Wird während dem Integrieren der .4BL Datei im 4D Schlüsselbund kein gültiger Verschlüsselungscode gefunden, wird ein Fehler generiert.
> 
> Haben Sie aufeinanderfolgende Datenschlüssel auf einem externen Gerät gespeichert und wird es angeschlossen, wird beim Wiederherstellen des Backup und Integrieren der Logbücher automatisch der jeweils passende Schlüssel gefunden.
