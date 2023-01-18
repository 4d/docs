---
id: compact
title: Seite Kompakt
sidebar_label: Seite Kompakt
---

Auf dieser Seite können Sie die Funktionen zum Komprimieren der Datendatei verwenden.

## Warum Dateien komprimieren?

Komprimieren der Dateien erfüllt zwei Anforderungen:

- **Größe verringern und Dateien optimieren**: Die Dateien können nicht-verwendete Leerräume ("Löcher") enthalten. Beim Löschen von Datensätzen wird der zuvor belegte Platz in der Datei zum Leerraum. In der Regel verwendet 4D diese Leerräume soweit wie möglich erneut. Da jedoch die Datengröße unterschiedlich ist, entstehen durch sukzessives Löschen oder Ändern unweigerlich nicht-verwendbare Leerräume. Dasselbe passiert, wenn eine große Menge Daten gerade gelöscht wurde: die leeren Stellen bleiben in der Datei ohne Zuweisung. Das Verhältnis zwischen Größe der Datendatei und derzeit für die Daten genutztem Platz ist die Auslastungsrate der Daten. Eine zu geringe Rate ist zunächst Platzverschwendung, kann aber auch die Performance der Datenbank beeinträchtigen. Hier schafft Komprimieren Abhilfe, denn dadurch wird das Speichern der Daten neu organisiert und optimiert, d. h. die Löcher werden entfernt. Der Bereich “Information” fasst die Daten im Hinblick auf Fragmentierung zusammen und schlägt die auszuführenden Operationen vor. Die Registerkarte [Daten](information.md#daten) auf der Seite “Information” des MSC gibt die Fragmentierung der aktuellen Datendatei an.

- **Komplettes Updaten der Daten** mit der aktuellen Formatierung, die in der Strukturdatei festgelegt ist. Das ist hilfreich, wenn Daten aus der gleichen Tabelle in unterschiedlichen Formaten gespeichert wurden, z. B. nach einer Änderung in der Struktur der Anwendung.
> Komprimieren ist nur im Wartungsmodus verfügbar. Versuchen Sie, diese Operation im Standardmodus auszuführen, erhalten Sie die Meldung, dass die Anwendung geschlossen und im Wartungsmodus neu gestartet wird. Sie können jedoch eine Datendatei komprimieren, die nicht von der Anwendung geöffnet ist (siehe unten [Komprimiere Datensätze und Indizes](#komprimiere-datensätze-und-indizes)).

## Standard Komprimierung

Um das Komprimieren direkt zu starten, klicken Sie im MSC-Fenster auf die Schaltfläche zum Komprimieren.

![](../assets/en/MSC/MSC_compact.png)
> Da beim Komprimieren die Originaldatei dupliziert wird, ist die Schaltfläche inaktiv, wenn auf der Festplatte mit dieser Datei nicht genügend Speicherplatz vorhanden ist.

Dieser Vorgang komprimiert die Hauptdatei sowie alle Index-Dateien. 4D kopiert die Originaldateien und setzt sie in einen Ordner mit Namen **Replaced Files (Compacting)**, der neben der Originaldatei angelegt wird. Haben Sie mehrere Komprimierungen durchgeführt, wird jedes Mal ein neuer Ordner angelegt. Er lautet “Replaced Files (Compacting)_1”, “Replaced Files (Compacting)_2”, usw. Im erweiterten Modus können Sie den Ordner zum Abspeichern der Originaldateien verändern.

Ist die Operation abgeschlossen, ersetzen die komprimierten Dateien automatisch die Originaldateien. Die Anwendung ist ohne weitere Bearbeitung sofort einsatzbereit.
> Bei einer verschlüsselten Anwendung enthält die Komprimierung auch die Schritte Entschlüsselung und Verschlüsselung. Dazu ist auch der aktuelle Verschlüsselungscode erforderlich. Ist noch kein gültiger Datenschlüssel angegeben, erscheint ein Dialogfenster, dass die Passphrase oder den Datenschlüssel anfordert.

**Warnung:** Die Originaldatei wird bei jedem Repariervorgang dupliziert, was den Anwendungsordner vergrößert. Sie sollten darauf achten (besonders auf macOS, wo 4D Anwendungen als Package erscheinen), dass die Größe der Anwendung nicht exzessiv ansteigt. In diesem Fall ist es hilfreich, die Kopien der Originaldatei im Package manuell zu entfernen, damit die Größe des Package im Rahmen bleibt.

## Logbuch öffnen

Ist das Komprimieren abgeschlossen, erzeugt 4D ein Logbuch im Ordner Logs des Projekts. Hier können Sie alle ausgeführten Operationen ansehen. Es wird im XML-Format erstellt und lautet:  *ApplicationName**_Compact_Log_yyyy-mm-dd hh-mm-ss.xml*":

- *ApplicationName* ist der Name der Projektdatei ohne Endung, zum Beispiel "Rechnungen"
- *yyyy-mm-dd hh-mm-ss* ist der Zeitstempel der Datei. Er basiert auf der lokalen Systemzeit, zur der die Wartungsoperation gestartet wurde, zum Beispiel "2019-02-11 15-20-45".

Klicken Sie auf die Schaltfläche **Logbuch öffnen**, zeigt 4D das neueste Logbuch im standardmäßigen Browser des Rechners an.

## Erweiterter Modus

Die Seite Kompakt enthält die Schaltfläche **Erweitert>**. Damit öffnen Sie eine Seite mit Optionen zum Komprimieren der Datendatei.

### Komprimiere Datensätze und Indizes

Der Bereich **Komprimiere Datensätze und Indizes** enthält den Pfadnamen der aktuellen Datendatei und die Schaltfläche **[...]** zum Auswählen einer anderen Datendatei. Klicken Sie auf diese Schaltfläche, erscheint ein Standard-Öffnen Dialog, um die gewünschte Datendatei zum Komprimieren auszuwählen. Sie müssen eine Datendatei auswählen, die zur geöffneten Strukturdatei passt. Bestätigen Sie dieses Dialogfenster, erscheint der Pfadname der zu komprimierenden Datei im Fenster.

Über die Schaltfläche **[...]** können Sie vor dem Komprimieren einen anderen Ort zum Speichern der Originaldateien angeben. Diese Option ist insbesondere beim Komprimieren umfangreicher Dateien auf verschiedenen Festplatten hilfreich.

### Erzwinge Aktualisierung aller Datensätze

Ist diese Option markiert, schreibt 4D während der Komprimierung jeden Datensatz für jede Tabelle gemäß seiner Beschreibung in der Struktur erneut. Ist diese Option nicht markiert, organisiert 4D lediglich das Speichern der Daten auf der Festplatte neu. Diese Option ist in folgenden Fällen von Nutzen:

- Wenn Feldtypen in der Struktur der Anwendung nach der Dateneingabe geändert wurden. Sie haben z. B. ein Feld vom Typ Lange Ganzzahl in den Typ Zahl geändert. 4D erlaubt sogar Änderungen zwischen unterschiedlichen Typen (mit dem Risiko von Datenverlust), z. B. lässt sich ein Feld vom Typ Zahl in den Typ Text ändern und umgekehrt. In diesem Fall konvertiert 4D bereits eingegebene Daten nicht rückwirkend; Daten werden nur beim Laden und Sichern von Datensätzen konvertiert. Diese Option erzwingt die Konvertierung aller Daten.

- Wenn die Option externes Speichern für Daten vom Typ Text, Bild oder BLOB nach der Dateneingabe geändert wurde. Das kann insbesondere beim Konvertieren der Datenbanken aus einer Version älter als v13 passieren. Auch hier konvertiert 4D bereits eingegebene Daten nicht rückwirkend. Mit dieser Option können Sie erzwingen, dass alle Datensätze aktualisiert werden, damit der neue Speicherungsmodus auch auf bereits eingegebene Datensätze angewandt wird.

- Wenn Tabellen oder Felder gelöscht wurden. In diesem Fall wird der Platz der entfernten Daten beim Komprimieren mit Aktualisieren aller Datensätze wieder verwendet und so die Dateigröße verringert.
> Ist diese Option gewählt, werden alle Indizes aktualisiert.

### Komprimiere Adresstabelle

(Option nur aktiv, wenn die vorige Option markiert ist)

Diese Option baut beim Komprimieren die Adresstabelle für die Datensätze komplett neu auf. Das optimiert die Größe der Adresstabelle und ist nur sinnvoll für Datenbanken, wo umfangreiches Datenvolumen erstellt und dann wieder gelöscht wurde. In anderen Fällen ist die Optimierung nicht signifikant.

Beachten Sie, dass diese Option die Komprimierung beträchtlich verlangsamt und alle Mengen, die über den Befehl `SAVE SET` gesichert wurden, ungültig werden. Wir empfehlen außerdem dringend, in diesem Fall gesicherte Mengen zu löschen, da ihre Verwendung zur Auswahl nicht-korrekter Daten führen kann.
> - Beim Komprimieren werden auch die Datensätze von Tabellen berücksichtigt, die im Papierkorb liegen. Gibt es dort eine große Anzahl Datensätze, kann das ein weiterer Faktor sein, der die Operation verlangsamt.
> - Diese Option macht die Adresstabelle und folglich auch die Anwendung inkompatibel zum aktuellen Logbuch (sofern vorhanden). Es wird automatisch gesichert und beim nächsten Start der Anwendung muss ein neues Logbuch angelegt werden.
> - Um zu sehen, ob die Adresstabelle komprimiert werden muss, gehen Sie auf die Seite [Information](information.md) des MSC und vergleichen die Gesamtanzahl der Datensätze mit der Größe der Adresstabelle.
