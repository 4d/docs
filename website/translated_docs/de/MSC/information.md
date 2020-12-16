---
id: information
title: Seite Information
sidebar_label: Seite Information
---

Die Seite “Information” liefert Informationen über die 4D Umgebung und die Systemumgebung, die Dateien der Datenbank und der Anwendung. Über die Registerkarten am oberen Rand können Sie die einzelnen Seiten aufrufen.

## Programm

This page indicates the name, version and location of the application as well as the active 4D folder (for more information about the active 4D folder, refer to the description of the `Get 4D folder` command in the *4D Language Reference* manual).

Der mittlere Bereich gibt Name und Speicherort der Projektdatei und der Datendatei der Datenbank und des Logbuchs (wenn vorhanden) an. Der untere Bereich zeigt den Namen des 4D Lizenzinhabers, die Art der Lizenz, und bei aktivierten Kennwörtern auch den Anwendernamen. Ist das nicht der Fall, erscheint als Anwendername Designer.

- **Display and selection of pathnames**: On the **Program** tab, pathnames are displayed in pop-up menus containing the folder sequence as found on the disk:  
  ![](assets/en/MSC/MSC_popup.png) If you select a menu item (disk or folder), it is displayed in a new system window. The **Copy the path** command copies the complete pathname as text to the clipboard, using the separators of the current platform.

- **"Licenses" Folder** The **"Licenses" Folder** button displays the contents of the active Licenses folder in a new system window. Alle Lizenzdateien, die in Ihrer 4D Umgebung installiert sind, sind in diesem Ordner auf Ihrer Festplatte zusammengefasst. Beim Öffnen über einen Web Browser erscheinen die Informationen über die enthaltenen Lizenzen und ihre Merkmale. Der Speicherort des Ordners Licenses kann je nach Version Ihres Betriebssystems variieren. For more information about the location of this folder, refer to the `Get 4D folder` command. ***Note:** You can also access this folder from the “Update License” dialog box (available in the Help menu).*

## Tabellen

Diese Seite gibt einen Überblick über die Tabellen in Ihrer Anwendung:

![](assets/en/MSC/MSC_Tables.png)
> Information auf dieser Seite ist im Standardmodus und im Wartungsmodus verfügbar.

Die Seite listet alle Tabellen der Datenbank - auch die ausgeblendeten - mit den dazugehörigen Merkmalen:

- **ID**: Internal number of the table.
- **Tables**: Name of the table. Namen von gelöschten Tabellen erscheinen in Klammern (wenn sie noch im Papierkorb sind).
- **Records**: Total number of records in the table. If a record is damaged or cannot be read, *Error* is displayed instead of the number. Dann können Sie abwägen, ob Sie die Tools zum Prüfen und Reparieren einsetzen.
- **Fields**: Number of fields in the table. Ausgeblendete Felder werden mitgezählt, gelöschte Felder dagegen nicht.
- **Indexes**: Number of indexes of any kind in the table
- **Encryptable**: If checked, the **Encryptable** attribute is selected for the table at the structure level (see Encryptable paragraph in the Design Reference Manual).
- **Encrypted**: If checked, the records of the table are encrypted in the data file. ***Note:** Any inconstency between Encryptable and Encrypted options requires that you check the encryption status of the data file in the **Encrypt page** of the database. *
- **Address Table Size**: Size of the address table for each table. In der Adresstabelle wird pro angelegtem Datensatz in der Tabelle intern ein Element gespeichert. Es verbindet Datensätze mit ihrer physikalischen Adresse. Aus Performance Gründen wird sie beim Löschen von Datensätzen nicht angepasst, so dass ihre Größe von der aktuellen Anzahl der Datensätze in der Tabelle abweichen kann. Bei einem deutlichen Unterschied können Sie die Größe der Adresstabelle über die Option "Komprimiere Adresstabelle" optimieren (siehe Seite [Kompakt](compact.md)). ***Note:** Differences between address table size and record number can also result from an incident during the cache flush.*



## Daten

The **Data** page provides information about the available and used storage space in the data file.
> Diese Seite ist im Wartungsmodus nicht verfügbar

Diese Angaben werden grafisch dargestellt:

![](assets/en/MSC/MSC_Data.png)
> Diese Seite berücksichtigt keine Daten, die außerhalb der Datendatei gespeichert sind (siehe "Daten extern speichern").

Zu stark fragmentierte Dateien senken die Performance der Festplatte und somit der Datenbank. Bei zu niedriger Auslastungsrate zeigt 4D ein Icon als gelbes Warndreieck und meldet, dass Komprimieren notwendig ist. Das Icon erscheint in der Schaltfläche Information und in der Registerkarte der entsprechenden Datei:![](assets/en/MSC/MSC_infowarn.png)

Das Warndreieck erscheint auch in der Schaltfläche Komprimieren auf der Seite [Kompakt](compact.md): ![](assets/en/MSC/MSC_compactwarn.png)
