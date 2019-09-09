---
id: overview
title: Overview
sidebar_label: Overview
---

Das Fenster Maintenance und Security Center (MSC) enthält alle Tools zum Prüfen, Analysieren, Warten, Sichern, Komprimieren und Verschlüsseln von Daten- und Strukturdateien. Das MSC ist in allen 4D Programmen verfügbar, also 4D Developer, 4D Server oder 4D Desktop.

**Hinweis:** Das MSC Fenster ist in einer 4D remote Verbindung nicht verfügbar.

Es gibt verschiedene Wege, das MSC-Fenster zu öffnen. Die Art des Zugriffs bestimmt auch die Art, wie die Datenbank geöffnet wird: im Wartungs- oder im Standardmodus. Im Wartungsmodus wird die Datenbank nicht durch 4D geöffnet, sondern nur ihre Referenz an MSC geliefert. Im Standardmodus wird die Datenbank von 4D geöffnet.

## Anzeige im Wartungsmodus

Im Wartungsmodus erscheint nur das MSC-Fenster, d. h. die Datenbank wird nicht vom 4D Programm geöffnet. Das bedeutet, dass auch Zugriff auf Datenbanken möglich ist, die sich wegen Beschädigung nicht im Standardmodus öffnen lassen. Außerdem müssen Sie für bestimmte Operationen, wie Komprimieren, Reparieren u. ä. die Datenbank im Wartungsmodus öffnen (siehe unter [Feature availability](#feature-availability)).

Es gibt zwei Stellen, das MSC im Wartungsmodus zu öffnen:

- **Über den Standard-Öffnen Dialog** Der Standarddialog zum Öffnen der Datenbank enthält in der rechten unteren Ecke die Schaltfläche **Öffnen** mit einem PopUp-Menü, in dem Sie die Option **Maintenance Security Center** anklicken können. ![](assets/en/MSC/MSC_standardOpen.png)
- Über das Menü **Hilfe/Maintenance Security Center** oder die Schaltfläche **MSC** in der Toolbar (Die Datenbank ist nicht geöffnet)  
    ![](assets/en/MSC/mscicon.png)  
    Auf dem Bildschirm erscheint der Standard-Öffnen Dialog, in dem Sie die entsprechende Datenbank auswählen können. Dabei öffnet 4D nicht die Datenbank.

## Anzeige im Standardmodus

Im Standardmodus wird eine Datenbank geöffnet. Hier sind nicht alle Wartungsfunktionen verfügbar. Es gibt mehrere Möglichkeiten, das MSC Fenster zu öffnen:

- Über das Menü **Hilfe/Maintenance Security Center** oder die Schaltfläche **MSC** in der 4D Toolbar:  
    ![](assets/en/MSC/mscicon.png) 
- Über die Standardaktion “msc”, die Sie einem Menübefehl oder einem Formularobjekt zuordnen können (siehe Abschnitt "Standard actions").

- Über den 4D Befehl ```OPEN SECURITY CENTER``` .

## Verfügbarkeit der Funktionen

Je nach dem Öffnen-Modus in MSC sind bestimmte MSC Funktionen nicht verfügbar:

- Die Backup-Funktion ist nur verfügbar, wenn die Datenbank geöffnet ist, d. h. MSC muss im Standardmodus geöffnet sein.
- Datenkomprimierung, Zurückfahren, Wiederherstellen, Reparieren und Verschlüsselung sind nur bei nicht-geöffneten Datendateien verwendbar, d. h. MSC muss im Wartungsmodus geöffnet sein. Versuchen Sie, diese Funktionen bei im Standardmodus geöffneter Datenbank aufzurufen, erscheint ein Dialogfenster, um die Anwendung zu schließen und im Wartungsmodus erneut aufzurufen.
- In verschlüsselten Datenbanken ist für den Zugriff auf verschlüsselte Daten oder die Datei .journal ein gültiger Schlüssel zum Entschlüsseln erforderlich (siehe unter [Encrypt page](encrypt.md)). Otherwise, encrypted data is not visible.