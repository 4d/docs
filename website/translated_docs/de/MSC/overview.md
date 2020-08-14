---
id: overview
title: Overview
sidebar_label: Overview
---

Das Fenster Maintenance und Security Center (MSC) enthält alle Tools zum Prüfen, Analysieren, Warten, Sichern, Komprimieren und Verschlüsseln von Datendateien. Das MSC ist in allen 4D Programmen verfügbar, also 4D Developer, 4D Server oder 4D Desktop.

**Note:** The MSC window is not available from a 4D remote connection.

Es gibt verschiedene Wege, das MSC-Fenster zu öffnen. The way it is accessed also determines the way the application project is opened: in “maintenance” mode or “standard” mode. In maintenance mode, the project is not opened by 4D, only its reference is provided to the MSC. In standard mode, the project is opened by 4D.


## Anzeige im Wartungsmodus

In maintenance mode, only the MSC window is displayed (the project is not opened by the 4D application). This means that projects that are too damaged to be opened in standard mode by 4D can nevertheless be accessed. Moreover, certain operations (compacting, repair, and so on) require the project to be opened in maintenance mode (see [Feature availability](#feature-availability)).

Es gibt zwei Stellen, das MSC im Wartungsmodus zu öffnen:

- **From the standard project opening dialog box** The standard Open dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button: ![](assets/en/MSC/MSC_standardOpen.png)
- **Help/Maintenance Security Center** menu or **MSC** button in the tool bar (project not open)  
  ![](assets/en/MSC/mscicon.png)   
  When you call this function, a standard Open file dialog appears so that you can select the *.4DProject* or *.4dz* file of the to be examined. The project will not be opened by 4D.

## Anzeige im Standardmodus

In standard mode, a project is open. Hier sind nicht alle Wartungsfunktionen verfügbar. Es gibt mehrere Möglichkeiten, das MSC Fenster zu öffnen:

- Use the **Help/Maintenance Security Center** menu or the **MSC** button in the 4D toolbar:  
  ![](assets/en/MSC/mscicon.png)
- Use the “msc” standard action that it is possible to associate with a menu command or a form object.
- Use the `OPEN SECURITY CENTER` language command.

## Verfügbarkeit der Funktionen

Je nach dem Öffnen-Modus in MSC sind bestimmte MSC Funktionen nicht verfügbar:

- Backup function is only available when the project is open (the MSC must have been opened in standard mode).
- Datenkomprimierung, Zurückfahren, Wiederherstellen, Reparieren und Verschlüsselung sind nur bei nicht-geöffneten Datendateien verwendbar, d. h. MSC muss im Wartungsmodus geöffnet sein. If these functions are tried while the project is open in standard mode, a dialog warns you that it implies that the application be closed and restarted in maintenance mode.
- In verschlüsselten Datenbanken ist für den Zugriff auf verschlüsselte Daten oder die Datei .journal ein gültiger Schlüssel zum Entschlüsseln erforderlich (siehe unter [Seite Verschlüsseln](encrypt.md)). Andernfalls sind verschlüsselte Daten nicht sichtbar. 
