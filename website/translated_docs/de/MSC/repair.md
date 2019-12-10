---
id: Reparieren
title: Seite Reparieren
sidebar_label: Seite Reparieren
---

Auf dieser Seite wählen Sie Optionen zum Reparieren der Datendatei bei Beschädigung. Diese Funktionen verwenden Sie in der Regel nur auf Anforderung von 4D, wenn beim Öffnen der Datenbank Unregelmäßigkeiten auftreten oder nach einer [Überprüfung](verify.md).

**Warnung:** Die Originaldatei wird bei jedem Repariervorgang dupliziert, was den Anwendungsordner vergrößert. Sie sollten darauf achten (besonders auf macOS, wo 4D Anwendungen als Package erscheinen), dass die Größe der Anwendung nicht exzessiv ansteigt. In diesem Fall ist es hilfreich, die Kopien der Originaldatei im Package manuell zu entfernen, damit die Größe des Package im Rahmen bleibt.

> Reparieren ist nur im Wartungsmodus verfügbar. Versuchen Sie, diese Operation im Standardmodus auszuführen, erscheint eine Meldung, dass die Anwendung geschlossen und im Wartungsmodus geöffnet wird.
> 
> Bei einer verschlüsselten Anwendung enthält das Reparieren auch die Schritte Entschlüsselung und Verschlüsselung. Dazu ist auch der aktuelle Verschlüsselungscode erforderlich. Ist noch kein gültiger Verschlüsselungscode angegeben, erscheint ein Dialogfenster, das die Passphrase oder den Verschlüsselungscode anfordert (siehe Seite Verschlüsseln).

## File overview

### Datendatei reparieren

Pathname of the current data file. Über die Schaltfläche ** [...]** können Sie eine andere Datendatei auswählen. Klicken Sie auf diese Schaltfläche, erscheint ein Standard-Öffnen Dialog, um die gewünschte Datendatei zum Reparieren auszuwählen. Bei der [Standard Reparatur](#standard_repair) müssen Sie eine Datendatei wählen, die mit der geöffneten Projektdatei kompatibel ist. Bei [Reparieren nach Datensatzheader](#recover-by-record-headers) können Sie jede Datendatei wählen. Bestätigen Sie dieses Dialogfenster, erscheint der Pfadname der Datei zum Reparieren im Fenster.

### Ordner Backup der Originaldateien

Standardmäßig wird die Originaldatei vor dem Reparieren dupliziert und im Unterordner “Replaced files (repairing)” im Datenbank-Ordner abgelegt. Über die zweite Schaltfläche **[...]** können Sie vor dem Reparieren einen anderen Ort zum Speichern der Originaldateien angeben. Diese Möglichkeit ist insbesondere beim Reparieren umfangreicher Dateien auf verschiedenen Festplatten hilfreich.

### Reparierte Dateien

4D erstellt eine neue leere Datendatei an der Stelle der Originaldatei. Die Originaldatei wird in den Ordner mit Namen "\Ersetzte Dateien (Reparatur) Datum Zeit" geschoben. Seine Position wird im Bereich "Backup der Original Dateien" definiert. Standardmäßig ist der Ordner der Datenbank angegeben. Die leere Datei wird mit den wiederhergestellten Daten gefüllt.

## Standard Reparatur

Wählen Sie diese Option, wenn nur wenige Datensätze oder Indizes beschädigt sind (Adresstabellen sind intakt). Die Daten werden komprimiert und repariert. Diese Art der Reparatur lässt sich nur ausführen, wenn Datendatei und Strukturdatei zueinander passen.

Ist die Reparatur abgeschlossen, erscheint die Seite "Reparieren" des MSC. Eine Meldung gibt an, ob die Reparatur erfolgreich war. In diesem Fall können Sie die Datenbank sofort öffnen. ![](assets/en/MSC/MSC_RepairOK.png)

## Wiederherstellen nach Datensatzheader

Verwenden Sie diese Reparatur auf niederer Ebene nur, wenn die Datendatei ernsthaft beschädigt ist und alle anderen Lösungen, wie Wiederherstellen über ein Backup, Standard Reparatur wirkungslos geblieben sind.

4D Datensätze sind unterschiedlich groß. Deshalb muss die Stelle, wo sie auf der Festplatte in einer spezifischen Tabelle, genannt Adresstabelle, gespeichert sind, beibehalten werden, um sie wieder zu finden. Das Programm greift deshalb auf die Adresse des Datensatzes über einen Index und eine Adresstabelle zu. Sind nur Datensätze oder Indizes beschädigt, reicht die Standardreparatur in der Regel aus, um das Problem zu lösen. Ist dagegen die Adresstabelle selbst betroffen, ist ein komplexeres Wiederherstellen erforderlich, da diese Tabelle wiederhergestellt werden muss. Dazu verwendet das MSC die Marker, die im Kopfteil jedes Datensatzes angelegt sind. Sie sind vergleichbar mit einem Inhaltsverzeichnis des Datensatzes, inkl. aller wichtigen Informationen, über die sich die Adresstabelle rekonstruieren lässt.

> Haben Sie in der Datenbankstruktur in den Tabelleneigenschaften die Option </strong>Datensätze definitiv löschen</strong> deaktiviert, können nach dem Wiederherstellen nach Datensatzheader zuvor gelöschte Datensätze wieder erscheinen. Wiederherstellen nach Kopfteil berücksichtigt keine Einschränkungen zur Datenintegrität. So erhalten Sie nach Ausführen dieser Operation u. U. doppelte Werte in einmaligen Feldern oder NULL Werte mit Feldern, für die **Nie Null** definiert wurde.

Klicken Sie auf die Schaltfläche **Scannen und Reparieren**, scannt 4D die Datendatei komplett. Ist die Operation abgeschlossen, erscheint folgendes Fenster:

![](assets/en/MSC/mscrepair2.png)

> Ließen sich alle Datensätze und alle Tabellen zuordnen, erscheint nur der Hauptbereich.

Der Bereich "Datensätze in Datendatei gefunden" besteht aus zwei Tabellen mit den Informationen aus dem Scan-Vorgang.

- Die erste Tabelle zeigt die Information aus dem Scannen der Datendatei. Jede Zeile enthält eine Gruppe der wiederherstellbaren Datensätze in der Datendatei:
    
    - Die Spalte **Reihenfolge** gibt die Reihenfolge der Wiederherstellung für die Gruppe der Datensätze an. 
    - Die Spalte **Anzahl** zeigt die Anzahl der Tabellen, die der Gruppe zugewiesen wurden.
    - Die Spalte **Zieltabelle** gibt die Namen der Tabellen an, die automatisch den Gruppen der identifizierten Datensätze zugewiesen wurden. Die Namen der dazugehörigen Tabellen erscheinen automatisch in grün. Groups that were not assigned, i.e. tables that could not be associated with any records appear in red.
    - The **Recover** column lets you indicate, for each group, whether you want to recover the records. By default, this option is checked for every group with records that can be associated with a table.
- The second table lists the tables of the project file.

### Manual assigning

If several groups of records could not be assigned to tables due to a damaged address table, you can assign them manually. To do this, first select an unassigned group of records in the first table. The "Content of the records" area then displays a preview of the contents of the first records of the group to make it easier to assign them:

![](assets/en/MSC/mscrepair3.png)

Next select the table you want to assign to the group in the "Unassigned tables" table and click on the **Identify table** button. You can also assign a table using drag and drop. The group of records is then associated with the table and it will be recovered in this table. The names of tables that are assigned manually appear in black. Use the **Ignore records** button to remove the association made manually between the table and the group of records.

## Logbuch öffnen

After repair is completed, 4D generates a log file in the Logs folder of the database. Hier können Sie alle ausgeführten Operationen ansehen. It is created in XML format and named: *DatabaseName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml*" where:

- *DatabaseName* ist der Name der Projektdatei ohne Endung, zum Beispiel "Rechnungen"
- *yyyy-mm-dd hh-mm-ss* ist der Zeitstempel der Datei. Er basiert auf der lokalen Systemzeit, zur der die Wartungsoperation gestartet wurde, zum Beispiel "2019-02-11 15-20-45".

Klicken Sie auf die Schaltfläche **Logbuch öffnen**, zeigt 4D das neueste Logbuch im standardmäßigen Browser des Rechners.