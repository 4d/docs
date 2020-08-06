---
id: repair
title: Seite Reparieren
sidebar_label: Seite Reparieren
---

Auf dieser Seite wählen Sie Optionen zum Reparieren der Datendatei bei Beschädigung. Diese Funktionen verwenden Sie in der Regel nur auf Anforderung von 4D, wenn beim Öffnen der Datenbank Unregelmäßigkeiten auftreten oder nach einer [Überprüfung](verify.md).

**Warning:** Each repair operation involves the duplication of the original file, which increases the size of the application folder. Sie sollten darauf achten (besonders auf macOS, wo 4D Anwendungen als Package erscheinen), dass die Größe der Anwendung nicht exzessiv ansteigt. In diesem Fall ist es hilfreich, die Kopien der Originaldatei im Package manuell zu entfernen, damit die Größe des Package im Rahmen bleibt.
> Reparieren ist nur im Wartungsmodus verfügbar. Versuchen Sie, diese Operation im Standardmodus auszuführen, erscheint eine Meldung, dass die Anwendung geschlossen und im Wartungsmodus geöffnet wird.
> Bei einer verschlüsselten Anwendung enthält das Reparieren auch die Schritte Entschlüsselung und Verschlüsselung. Dazu ist auch der aktuelle Verschlüsselungscode erforderlich. Ist noch kein gültiger Verschlüsselungscode angegeben, erscheint ein Dialogfenster, das die Passphrase oder den Verschlüsselungscode anfordert (siehe Seite Verschlüsseln).

## Datei Überblick

### Datendatei reparieren
Pfadname der aktuellen Datendatei. The **[...]** button can be used to specify another data file. Klicken Sie auf diese Schaltfläche, erscheint ein Standard-Öffnen Dialog, um die gewünschte Datendatei zum Reparieren auszuwählen. Bei der [Standard Reparatur](#standard_repair) müssen Sie eine Datendatei wählen, die mit der geöffneten Projektdatei kompatibel ist. Bei [Reparieren nach Datensatzheader](#recover-by-record-headers) können Sie jede Datendatei wählen. Bestätigen Sie dieses Dialogfenster, erscheint der Pfadname der Datei zum Reparieren im Fenster.

### Ordner Backup der Originaldateien
Standardmäßig wird die Originaldatei vor dem Reparieren dupliziert  und im Unterordner “Replaced files (repairing)” im Datenbank-Ordner abgelegt. The second **[...]** button can be used to specify another location for the original files to be saved before repairing begins. Diese Möglichkeit ist insbesondere beim Reparieren umfangreicher Dateien auf verschiedenen Festplatten hilfreich.

### Reparierte Dateien
4D erstellt eine neue leere Datendatei an der Stelle der Originaldatei. Die Originaldatei wird in den Ordner mit Namen "\Ersetzte Dateien (Reparatur) Datum Zeit" geschoben. Seine Position wird im Bereich "Backup der Original Dateien" definiert. Standardmäßig ist der Ordner der Datenbank angegeben. Die leere Datei wird mit den wiederhergestellten Daten gefüllt.


## Standard Reparatur

Wählen Sie diese Option, wenn nur wenige Datensätze oder Indizes beschädigt sind (Adresstabellen sind intakt). Die Daten werden komprimiert und repariert. Diese Art der Reparatur lässt sich nur ausführen, wenn Datendatei und Strukturdatei zueinander passen.

Ist die Reparatur abgeschlossen, erscheint die Seite "Reparieren" des MSC. Eine Meldung gibt an, ob die Reparatur erfolgreich war. In diesem Fall können Sie die Datenbank sofort öffnen. ![](assets/en/MSC/MSC_RepairOK.png)

## Wiederherstellen nach Datensatzheader
Verwenden Sie diese Reparatur auf niederer Ebene nur, wenn die Datendatei ernsthaft beschädigt ist und alle anderen Lösungen, wie Wiederherstellen über ein Backup, Standard Reparatur wirkungslos geblieben sind.

4D Datensätze sind unterschiedlich groß. Deshalb muss die Stelle, wo sie auf der Festplatte in einer spezifischen Tabelle, genannt Adresstabelle, gespeichert sind, beibehalten werden, um sie wieder zu finden. Das Programm greift deshalb auf die Adresse des Datensatzes über einen Index und eine Adresstabelle zu. Sind nur Datensätze oder Indizes beschädigt, reicht die Standardreparatur in der Regel aus, um das Problem zu lösen. Ist dagegen die Adresstabelle selbst betroffen, ist ein komplexeres Wiederherstellen erforderlich, da diese Tabelle wiederhergestellt werden muss. Dazu verwendet das MSC die Marker, die im Kopfteil jedes Datensatzes angelegt sind. Sie sind vergleichbar mit einem Inhaltsverzeichnis des Datensatzes, inkl. aller wichtigen Informationen, über die sich die Adresstabelle rekonstruieren lässt.

> If you have deselected the **Records definitively deleted** option in the properties of a table in the database structure, performing a recovery by header markers may cause records that were previously deleted to reappear. Wiederherstellen nach Kopfteil berücksichtigt keine Einschränkungen zur Datenintegrität. More specifically, after this operation you may get duplicated values with unique fields or NULL values with fields declared **Never Null**.

When you click on **Scan and repair...**, 4D performs a complete scan of the data file. Ist die Operation abgeschlossen, erscheint folgendes Fenster:

![](assets/en/MSC/mscrepair2.png)
> Ließen sich alle Datensätze und alle Tabellen zuordnen, erscheint nur der Hauptbereich.

Der Bereich "Datensätze in Datendatei gefunden" besteht aus zwei Tabellen mit den Informationen aus dem Scan-Vorgang.

- Die erste Tabelle zeigt die Information aus dem Scannen der Datendatei. Jede Zeile enthält eine Gruppe der wiederherstellbaren Datensätze in der Datendatei:
    - The **Order** column indicates the recovery order for the group of records.
    - The **Count** column indicates the number of the records in the table.
    - The **Destination table** column indicates the names of tables that were automatically assigned to the groups of identified records. Die Namen der dazugehörigen Tabellen erscheinen automatisch in grün. Nicht zugewiesene Gruppen, z.B. Tabellen, die keinen Datensätzen zugeordnet werden konnten, erscheinen in rot.
    - The **Recover** column lets you indicate, for each group, whether you want to recover the records. Diese Option ist standardmäßig für jede Gruppe mit Datensätzen markiert, die einer Tabelle zugeordnet werden können.

- Die zweite Tabelle zeigt die Tabellen der Projekt-Datei.


### Manuell zuweisen
Ließen sich einige Datensatzgruppen aufgrund einer beschädigten Adresstabelle keinen Tabellen zuweisen, können Sie diese manuell zuweisen. Dazu wählen Sie zuerst im ersten Bereich eine nicht zugewiesene Gruppe aus. Zur leichteren Zuordnung zeigt der untere Bereich "Inhalt der Datensätze" eine Vorschau vom Inhalt der ersten Datensätze:

![](assets/en/MSC/mscrepair3.png)

Next select the table you want to assign to the group in the "Unassigned tables" table and click on the **Identify table** button. Sie können eine Tabelle auch per Drag-and-Drop zuweisen. Die Datensatzgruppe wird dann der Tabelle zugewiesen und in dieser Tabelle wiederhergestellt. Die per Hand zugewiesenen Tabellennamen erscheinen in schwarz. Use the **Ignore records** button to remove the association made manually between the table and the group of records.


## Logbuch öffnen

Ist das Reparieren abgeschlossen, erzeugt 4D ein Logbuch im Ordner Logs der Datenbank. Hier können Sie alle ausgeführten Operationen ansehen. Es wird im XML-Format erstellt und lautet:  *DatabaseName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml*":

- *DatabaseName* is the name of the project file without any extension, for example "Invoices",
- *yyyy-mm-dd hh-mm-ss* is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.