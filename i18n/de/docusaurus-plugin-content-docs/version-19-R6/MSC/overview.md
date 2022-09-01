---
id: overview
title: Überblick
sidebar_label: Überblick
---

Das Fenster Maintenance und Security Center (MSC) enthält alle Tools zum Prüfen, Analysieren, Warten, Sichern, Komprimieren und Verschlüsseln von Datendateien. Das MSC ist in allen 4D Programmen verfügbar, also 4D Developer, 4D Server oder 4D Desktop.

**Hinweis:** Das MSC Fenster ist in einer 4D remote Verbindung nicht verfügbar.

Es gibt verschiedene Wege, das MSC-Fenster zu öffnen. Die Art des Zugriffs bestimmt auch die Art, wie das Anwendungsprojekt geöffnet wird: im Wartungs- oder im Standardmodus. Im Wartungsmodus wird das Projekt nicht durch 4D geöffnet, sondern nur ihre Referenz an das MSC geliefert. Im Standardmodus wird das Projekt von 4D geöffnet.


## Anzeige im Wartungsmodus

Im Wartungsmodus erscheint nur das MSC-Fenster, d. h. das Projekt wird nicht vom 4D Programm geöffnet. Das bedeutet, dass auch Zugriff auf Projekte möglich ist, die sich wegen Beschädigung nicht im Standardmodus öffnen lassen. Außerdem müssen Sie für bestimmte Operationen, wie Komprimieren, Reparieren u. ä. das Projekt im Wartungsmodus öffnen (siehe unter [Verfügbarkeit der Funktionen](#verfügbarkeit-der-funktionen)).

Es gibt zwei Stellen, das MSC im Wartungsmodus zu öffnen:

- **From the standard project opening dialog box** The standard Open dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button: ![](../assets/en/MSC/MSC_standardOpen.png)
- Über das Menü **Hilfe/Maintenance Security Center** oder die Schaltfläche **MSC** in der Toolbar (Projekt ist nicht geöffnet)  
  ![](../assets/en/MSC/mscicon.png)   
  Auf dem Bildschirm erscheint der Standard-Öffnen Dialog, in dem Sie das *4DProjekt* oder die *.4dz* Datei zum Prüfen auswählen können. Dabei öffnet 4D nicht das Projekt selbst.

## Anzeige im Standardmodus

Im Standardmodus wird ein Projekt geöffnet. Hier sind nicht alle Wartungsfunktionen verfügbar. Es gibt mehrere Möglichkeiten, das MSC Fenster zu öffnen:

- Über das Menü **Hilfe/Maintenance Security Center** oder die Schaltfläche **MSC** in der 4D Toolbar  
  ![](../assets/en/MSC/mscicon.png)
- Über die Standardaktion “msc”, die Sie einem Menübefehl oder einem Formularobjekt zuordnen können.
- Über den 4D Befehl `OPEN SECURITY CENTER`

## Verfügbarkeit der Funktionen

Je nach dem Öffnen-Modus in MSC sind bestimmte MSC Funktionen nicht verfügbar:

- Die Backup-Funktion ist nur verfügbar, wenn das Projekt geöffnet ist, d. h. MSC muss im Standardmodus geöffnet sein.
- Datenkomprimierung, Zurückfahren, Wiederherstellen, Reparieren und Verschlüsselung sind nur bei nicht-geöffneten Datendateien verwendbar, d. h. MSC muss im Wartungsmodus geöffnet sein. Versuchen Sie, diese Funktionen bei im Standardmodus geöffnetem Projekt aufzurufen, erscheint ein Dialogfenster, um die Anwendung zu schließen und im Wartungsmodus erneut aufzurufen.
- In verschlüsselten Datenbanken ist für den Zugriff auf verschlüsselte Daten oder die Datei .journal ein gültiger Schlüssel zum Entschlüsseln erforderlich (siehe unter [Seite Verschlüsseln](encrypt.md)). Andernfalls sind verschlüsselte Daten nicht sichtbar. 
