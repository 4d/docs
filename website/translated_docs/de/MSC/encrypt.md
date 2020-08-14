---
id: encrypt
title: Seite Verschlüsseln
sidebar_label: Seite Verschlüsseln
---

You can use this page to encrypt or *decrypt* (i.e. remove encryption from) the data file, according to the **Encryptable** attribute status defined for each table in the database. For detailed information about data encryption in 4D, please refer to the "Encrypting data" section in the *Design Reference* manual.

Bei jeder Operation Verschlüsselung/Entschlüsselung wird ein neuer Ordner angelegt. It is named "Replaced Files (Encrypting) *yyyy-mm-dd hh-mm-ss*> or "Replaced Files (Decrypting) *yyyy-mm-dd hh-mm-ss*".
> Verschlüsselung ist nur im [Wartungsmodus](overview.md#display-in-maintenance-mode) verfügbar. If you attempt to carry out this operation in standard mode, a warning dialog will inform you that the application will be closed and restarted in maintenance mode

**Warnung:**
- Encrypting a data file is a lengthy operation. Währenddessen erscheint ein Ablaufbalken (den der Benutzer unterbrechen kann). Note also that an application encryption operation always includes a compacting step.
- Jeder Verschlüsselungsvorgang produziert eine Kopie der Datendatei, was den Anwendungsordner vergrößert. Sie sollten darauf achten (besonders auf macOS, wo 4D Anwendungen als Package erscheinen), dass die Größe der Anwendung nicht exzessiv ansteigt. In diesem Fall ist es hilfreich, die Kopien der Originaldatei im Package manuell zu entfernen, damit die Größe des Package im Rahmen bleibt.

## Daten zum ersten Mal verschlüsseln
Beim ersten Verschlüsseln Ihrer Daten über das MSC sind folgende Schritte erforderlich:

1. In the Structure editor, check the **Encryptable** attribute for each table whose data you want to encrypt. Weitere Informationen dazu finden Sie im Abschnitt "Tabelleneigenschaften".
2. Öffnen Sie die Seite Verschlüsseln des MSC. If you open the page without setting any tables as **Encryptable**, the following message is displayed in the page: ![](assets/en/MSC/MSC_encrypt1.png) Otherwise, the following message is displayed: ![](assets/en/MSC/MSC_encrypt2.png)<p> This means that the **Encryptable** status for at least one table has been modified and the data file still has not been encrypted. **Note: **The same message is displayed when the **Encryptable** status has been modified in an already encrypted data file or after the data file has been decrypted (see below).
3. Click on the Encrypt picture button.  
   ![](assets/en/MSC/MSC_encrypt3.png)  
   You will be prompted to enter a passphrase for your data file: ![](assets/en/MSC/MSC_encrypt4.png) The passphrase is used to generate the data encryption key. Eine Passphrase ist eine sicherere Version als ein Kennwort, da sie eine größere Anzahl Zeichen enthalten kann. For example, you could enter a passphrases such as "We all came out to Montreux" or "My 1st Great Passphrase!!" The security level indicator can help you evaluate the strength of your passphrase: ![](assets/en/MSC/MSC_encrypt5.png) (deep green is the highest level)
4. Geben Sie zum Bestätigen Ihre gesicherte Passphrase ein.

Dann wird der Prozess zum Verschlüsseln gestartet. If the MSC was opened in standard mode, the application is reopened in maintenance mode.

4D bietet an, den Verschlüsselungscode zu sichern (siehe unten im Absatz [Verschlüsselungscode sichern](#verschlusselungscode-sichern)). Sie können das gleich oder später machen. Sie können auch das Logbuch zur Verschlüsselung öffnen.

War der Prozess zum Verschlüsseln erfolgreich, zeigt die Seite Verschlüsseln Schaltflächen für Wartungsoperationen beim Verschlüsseln.

**Warning:** During the encryption operation, 4D creates a new, empty data file and fills it with data from the original data file. Datensätze aus "verschlüsselbaren" Tabellen werden verschlüsselt und dann kopiert, andere Datensätze werden nur kopiert. (Außerdem wird eine Komprimierung durchgeführt). War die Operation erfolgreich, wird die ursprüngliche Datendatei in den Ordner "Replaced Files (Encrypting)" geschoben. If you intend to deliver an encrypted data file, make sure to move/remove any unencrypted data file from the application folder beforehand.

## Wartungsoperationen beim Verschlüsseln
When an application is encrypted (see above), the Encrypt page provides several encryption maintenance operations, corresponding to standard scenarios. ![](assets/en/MSC/MSC_encrypt6.png)


### Den aktuellen Verschlüsselungscode für Daten liefern
Aus Sicherheitsgründen wird bei allen Wartungsoperationen für Verschlüsselung der aktuelle Verschlüsselungscode der Daten angefordert.

- Wurde der Verschlüsselungscode für Daten bereits in den 4D Schlüsselbund (1) geladen, verwendet 4D ihn automatisch wieder.
- Wird kein Verschlüsselungscode für Daten gefunden, müssen Sie ihn liefern. Es erscheint folgendes Dialogfenster: ![](assets/en/MSC/MSC_encrypt7.png)

An dieser Stelle haben Sie zwei Möglichkeiten:
- enter the current passphrase(2) and click **OK**. ODER
- connect a device such as a USB key and click the **Scan devices** button.

(1) The 4D keychain stores all valid data encrpytion keys entered during the application session.   
(2) The current passphrase is the passphrase used to generate the current encryption key.

Ist die Eingabe korrekt, startet 4D in allen Fällen erneut im Wartungsmodus (falls das noch nicht der Fall ist) und führt die Operation aus.

### Daten mit dem aktuellen Verschlüsselungscode erneut verschlüsseln

This operation is useful when the **Encryptable** attribute has been modified for one or more tables containing data. Zur Vermeidung von Inkonsistenzen in der Datendatei erlaubt 4D in solchen Fällen keinen Schreibzugriff auf die Datensätze dieser Tabellen in der Anwendung. Die Daten müssen dann erneut verschlüsselt werden, um wieder einen gültigen Verschlüsselungsstatus herzustellen.

1. Click on **Re-encrypt data with the current encryption key**.
2. Geben Sie den aktuellen Verschlüsselungscode für Daten ein.

Die Datendatei wird erneut ordnungsgemäß mit dem aktuellen Schlüssel verschlüsselt und es erscheint eine Meldung als Bestätigung: ![](assets/en/MSC/MSC_encrypt8.png)

### Passphrase verändern und Daten erneut verschlüsseln
Diese Operation bietet sich an, wenn Sie Ihren aktuellen Verschlüsselungscode für Daten verändern müssen, um bestimmte Sicherheitsregeln einzuhalten (z. B. wenn ein Admin das Unternehmen verlassen hat).

1. Click on **Change your passphrase and re-encrypt data**.
2. Geben Sie den aktuellen Verschlüsselungscode für Daten ein.
3. Geben Sie die neue Passphrase ein. Für zusätzliche Sicherheit werden Sie aufgefordert, diese ein zweites Mal einzugeben: ![](assets/en/MSC/MSC_encrypt9.png) Die Datendatei wird mit dem neuen Schlüssel verschlüsselt und es erscheint eine Meldung als Bestätigung. ![](assets/en/MSC/MSC_encrypt8.png)

### Alle Daten entschlüsseln
Diese Operation entfernt jede Verschlüsselung aus der Datendatei. Sollen Ihre Daten nicht länger verschlüsselt sein:

1. Click on **Decrypt all data**.
2. Geben Sie den aktuellen Verschlüsselungscode für Daten ein (siehe unter Den aktuellen Verschlüsselungscode für Daten liefern).

Die Datendatei wird komplett entschlüsselt und es erscheint eine Meldung als Bestätigung: ![](assets/en/MSC/MSC_encrypt10.png)
> Ist die Datendatei entschlüsselt, passt der Verschlüsselungsstatus der Tabellen nicht mehr zur Eigenschaft Verschlüsselbar. To restore a matching status, you must deselect all **Encryptable** attributes at the database structure level.

## Verschlüsselungscode sichern

In 4D können Sie den Verschlüsselungscode für Daten in einer spezifischen Datei speichern. Storing this file on an external device such a USB key will facilitate the use of an encrypted application, since the user would only need to connect the device to provide the key before opening the application in order to access encrypted data.

Sie können den Verschlüsselungscode jedes Mal sichern, wenn eine neue Passphrase angelegt wird:

- when the application is encrypted for the first time,
- when the application is re-encrypted with a new passphrase.

Aufeinanderfolgende Verschlüsselungscodes lassen sich auf dem gleichen Gerät speichern.

## Logbuch
After an encryption operation has been completed, 4D generates a file in the Logs folder of the application. It is created in XML format and named "*ApplicationName_Encrypt_Log_yyyy-mm-dd hh-mm-ss.xml*" or "*ApplicationName_Decrypt_Log_yyyy-mm-dd hh-mm-ss.xml*".

Immer wenn ein neues Logbuch angelegt wurde, erscheint auf der Seite Verschlüsselt unten die Schaltfläche Logbuch anzeigen.

Das Logbuch listet alle internen Operationen, die während dem Prozess Verschlüsseln/Entschlüsseln ausgeführt werden, sowie evtl. aufgetretene Fehler.
