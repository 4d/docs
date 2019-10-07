---
id: encrypt
title: Seite Verschlüsseln
sidebar_label: Seite Verschlüsseln
---

Auf dieser Seite können Sie die Datendatei verschlüsseln oder *entschlüsseln* (z.B. die Verschlüsselung entfernen). Das richtet sich nach der Eigenschaft **Verschlüsselbar**, die für jede Tabelle in der Anwendung gesetzt werden kann. Weitere Informationen dazu finden Sie im Abschnitt "Daten verschlüsseln".

Bei jeder Operation Verschlüsselung/Entschlüsselung wird ein neuer Ordner angelegt. Er lautet "Replaced Files (Encrypting) *yyyy-mm-dd hh-mm-ss*> oder "Replaced Files (Decrypting) *yyyy-mm-dd hh-mm-ss*".

> Verschlüsselung ist nur im [Wartungsmodus](overview.md#display-in-maintenance-mode) verfügbar. Versuchen Sie, diese Operation im Standardmodus auszuführen, erscheint eine Meldung, dass die Anwendung geschlossen und im Wartungsmodus geöffnet wird.

**Warnung:**

- Das Verschlüsseln einer Anwendung ist eine längere Operation. Währenddessen erscheint ein Ablaufbalken (den der Benutzer unterbrechen kann). Beachten Sie auch, dass beim Verschlüsselungsprozess immer eine Komprimierung durchgeführt wird.
- Jeder Verschlüsselungsvorgang produziert eine Kopie der Datendatei, was den Anwendungsordner vergrößert. Sie sollten darauf achten (besonders auf macOS, wo 4D Anwendungen als Package erscheinen), dass die Größe der Anwendung nicht exzessiv ansteigt. In diesem Fall ist es hilfreich, die Kopien der Originaldatei im Package manuell zu entfernen, damit die Größe des Package im Rahmen bleibt.

## Daten zum ersten Mal verschlüsseln

Beim ersten Verschlüsseln Ihrer Daten über das MSC sind folgende Schritte erforderlich:

1. Markieren Sie im Struktureditor über das Inspektorfenster für jede Tabelle, die verschlüsselbar sein soll, die Eigenschaft **Verschlüsselbar**. Weitere Informationen dazu finden Sie im Abschnitt "Tabelleneigenschaften". 
2. Öffnen Sie die Seite Verschlüsseln des MSC. Haben Sie für keine Tabelle die Eigenschaft **Verschlüsselbar** gewählt, erscheint auf der Seite folgende Meldung: ![](assets/en/MSC/MSC_encrypt1.png) Andernfalls erscheint diese Meldung: ![](assets/en/MSC/MSC_encrypt2.png) Das bedeutet, dass der Status **Verschlüsselbar** für mindestens eine Tabelle geändert wurde und die Datendatei noch nicht verschlüsselt ist. **Hinweis: Sie erhalten die gleiche Meldung, wenn der Status Verschlüsselbar** in einer bereits verschlüsselten Datendatei geändert oder die Datendatei entschlüsselt wurde (siehe unten).
3. Klicken Sie auf die Schaltfläche Verschlüsseln.  
    ![](assets/en/MSC/MSC_encrypt3.png)  
    Sie erhalten ein Dialogfenster zum Eingeben einer Passphrase für Ihre Datendatei: ![](assets/en/MSC/MSC_encrypt4.png) Die Passphrase dient zum Generieren des Verschlüsselungscode für die Daten. Eine Passphrase ist eine sicherere Version als ein Kennwort, da sie eine größere Anzahl Zeichen enthalten kann. Sie können beispielsweise einen kompletten Satz eingeben, wie "Wir kommen alle nach Massenhausen" oder "Meine 1. große Passphrase!!" Der Indikator für die Sicherheitsstufe zeigt an, wie hoch die eingegebene Passphrase bewertet wird: ![](assets/en/MSC/MSC_encrypt5.png) (komplett grün ist die höchste Stufe)
4. Geben Sie zum Bestätigen Ihre gesicherte Passphrase ein. 

Dann wird der Prozess zum Verschlüsseln gestartet. Wurde das MSC im Standardmodus geöffnet, wird die Anwendung geschlossen und erneut im Wartungsmodus geöffnet.

4D bietet an, den Verschlüsselungscode zu sichern (siehe unten im Absatz [Verschlüsselungscode sichern](#verschlusselungscode-sichern)). Sie können das gleich oder später machen. Sie können auch das Logbuch zur Verschlüsselung öffnen.

War der Prozess zum Verschlüsseln erfolgreich, zeigt die Seite Verschlüsseln Schaltflächen für Wartungsoperationen beim Verschlüsseln.

**Warnung:** 4D erstellt beim Verschlüsseln eine neue leere Datendatei und füllt sie mit Daten aus der ursprünglichen Datendatei. Datensätze aus "verschlüsselbaren" Tabellen werden verschlüsselt und dann kopiert, andere Datensätze werden nur kopiert. (Außerdem wird eine Komprimierung durchgeführt). War die Operation erfolgreich, wird die ursprüngliche Datendatei in den Ordner "Replaced Files (Encrypting)" geschoben. Wollen Sie eine verschlüsselte Datendatei ausliefern, stellen Sie sicher, dass zuvor alle unverschlüsselten Datendateien aus dem Anwendungsordner verschoben/entfernt wurden.

## Wartungsoperationen beim Verschlüsseln

Beim Verschlüsseln einer Anwendung (siehe oben) bietet die Seite Verschlüsseln verschiedene Möglichkeiten für standardmäßige Operationen. ![](assets/en/MSC/MSC_encrypt6.png)

### Den aktuellen Verschlüsselungscode für Daten liefern

Aus Sicherheitsgründen wird bei allen Wartungsoperationen für Verschlüsselung der aktuelle Verschlüsselungscode der Daten angefordert.

- If the data encryption key is already loaded in the 4D keychain(1), it is automatically reused by 4D.
- Wird kein Verschlüsselungscode für Daten gefunden, müssen Sie ihn liefern. Es erscheint folgendes Dialogfenster: ![](assets/en/MSC/MSC_encrypt7.png)

An dieser Stelle haben Sie zwei Möglichkeiten:

- enter the current passphrase(2) and click **OK**. ODER
- Sie schließen ein Gerät, z. B. einen USB Key an und klicken auf die Schaltfläche **Gerät scannen**. 

(1) The 4D keychain stores all valid data encrpytion keys entered during the application session.  
(2) The current passphrase is the passphrase used to generate the current encryption key.

Ist die Eingabe korrekt, startet 4D in allen Fällen erneut im Wartungsmodus (falls das noch nicht der Fall ist) und führt die Operation aus.

### Daten mit dem aktuellen Verschlüsselungscode erneut verschlüsseln

Diese Operation ist hilfreich, wenn der Status **Verschlüsselbar** für eine oder mehrere Tabellen mit Daten geändert wurde. Zur Vermeidung von Inkonsistenzen in der Datendatei erlaubt 4D in solchen Fällen keinen Schreibzugriff auf die Datensätze dieser Tabellen in der Anwendung. Die Daten müssen dann erneut verschlüsselt werden, um wieder einen gültigen Verschlüsselungsstatus herzustellen.

1. Markieren Sie die Option **Daten mit dem aktuellen Schlüssel wieder verschlüsseln**.
2. Geben Sie den aktuellen Verschlüsselungscode für Daten ein.

The data file is properly re-encrypted with the current key and a confirmation message is displayed: ![](assets/en/MSC/MSC_encrypt8.png)

### Passphrase verändern und Daten erneut verschlüsseln

This operation is useful when you need to change the current encryption data key. For example, you may need to do so to comply with security rules (such as requiring changing the passphrase every three months).

1. Wählen Sie die Option **Ändern Sie Ihre Passphrase und verschlüsseln Sie die Daten erneut**.
2. Geben Sie den aktuellen Verschlüsselungscode für Daten ein.
3. Geben Sie die neue Passphrase ein. Für zusätzliche Sicherheit werden Sie aufgefordert, diese ein zweites Mal einzugeben: ![](assets/en/MSC/MSC_encrypt9.png) Die Datendatei wird mit dem neuen Schlüssel verschlüsselt und es erscheint eine Meldung als Bestätigung. ![](assets/en/MSC/MSC_encrypt8.png)

### Alle Daten entschlüsseln

This operation removes all encryption from the data file. If you no longer want to have your data encrypted:

1. Klicken Sie auf die Option **Alle Daten entschlüsseln**.
2. Geben Sie den aktuellen Verschlüsselungscode für Daten ein (siehe unter Den aktuellen Verschlüsselungscode für Daten liefern).

The data file is fully decrypted and a confirmation message is displayed: ![](assets/en/MSC/MSC_encrypt10.png)

> Ist die Datendatei entschlüsselt, passt der Verschlüsselungsstatus der Tabellen nicht mehr zur Eigenschaft Verschlüsselbar. Um den passenden Status wiederherzustellen, müssen Sie alle Eigenschaften **Verschlüsselbar** auf der Strukturebene der Anwendungen abwählen.

## Verschlüsselungscode sichern

4D allows you to save the data encryption key in a dedicated file. Storing this file on an external device such a USB key will facilitate the use of an encrypted database, since the user would only need to connect the device to provide the key before opening the database in order to access encrypted data.

You can save the encryption key each time a new passphrase has been provided:

- wenn die Anwendung zum ersten Mal verschlüsselt wird
- wenn die Anwendung mit einer neuen Passphrase erneut verschlüsselt wird.

Successive encryption keys can be stored on the same device.

## Logbuch

After an encryption operation has been completed, 4D generates a file in the Logs folder of the database. It is created in XML format and named "*DatabaseName_Encrypt_Log_yyyy-mm-dd hh-mm-ss.xml*" or "*DatabaseName_Decrypt_Log_yyyy-mm-dd hh-mm-ss.xml*".

An Open log file button is displayed on the MSC page each time a new log file has been generated.

The log file lists all internal operations executed pertaining to the encryption/decryption process, as well as errors (if any).