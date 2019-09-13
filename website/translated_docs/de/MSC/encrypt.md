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

**Warnung:** 4D erstellt beim Verschlüsseln eine neue leere Datendatei und füllt sie mit Daten aus der ursprünglichen Datendatei. Datensätze aus "verschlüsselbaren" Tabellen werden verschlüsselt und dann kopiert, andere Datensätze werden nur kopiert. (Außerdem wird eine Komprimierung durchgeführt). If the operation is successful, the original data file is moved to a "Replaced Files (Encrypting)" folder. If you intend to deliver an encrypted data file, make sure to move/remove any unencrypted data file from the database folder beforehand.

## Encryption maintenance operations

When a database is encrypted (see above), the Encrypt page provides several encryption maintenance operations, corresponding to standard scenarios. ![](assets/en/MSC/MSC_encrypt6.png)

### Providing the current data encryption key

For security reasons, all encryption maintenance operations require that the current data encryption key be provided.

- If the data encryption key is already loaded in the 4D keychain(*), it is automatically reused by 4D.
- If the data encryption key is not found, you must provide it. The following dialog is displayed: ![](assets/en/MSC/MSC_encrypt7.png)

At this step, you have two options:

- enter the current passphrase(**) and click **OK**. OR
- connect a device such as a USB key and click the **Scan devices** button. (*) The 4D keychain stores all valid data encrpytion keys entered during the application session. (**) The current passphrase is the passphrase used to generate the current encryption key. 

In all cases, if valid information is provided, 4D restarts in maintenance mode (if not already the case) and executes the operation.

### Re-encrypt data with the current encryption key

This operation is useful when the **Encryptable** attribute has been modified for one or more tables containing data. In this case, to prevent inconsistencies in the data file, 4D disallows any write access to the records of the tables in the application. Re-encrypting data is then necessary to restore a valid encryption status.

1. Click on **Re-encrypt data with the current encryption key**.
2. Enter the current data encryption key.

The data file is properly re-encrypted with the current key and a confirmation message is displayed: ![](assets/en/MSC/MSC_encrypt8.png)

### Change your passphrase and re-encrypt data

This operation is useful when you need to change the current encryption data key. For example, you may need to do so to comply with security rules (such as requiring changing the passphrase every three months).

1. Click on **Change your passphrase and re-encrypt data**.
2. Enter the current data encryption key.
3. Enter the new passphrase (for added security, you are prompted to enter it twice): ![](assets/en/MSC/MSC_encrypt9.png) The data file is encrypted with the new key and the confirmation message is displayed. ![](assets/en/MSC/MSC_encrypt8.png)

### Decrypt all data

This operation removes all encryption from the data file. If you no longer want to have your data encrypted:

1. Click on **Decrypt all data**.
2. Enter the current data encryption key (see Providing the current data encryption key).

The data file is fully decrypted and a confirmation message is displayed: ![](assets/en/MSC/MSC_encrypt10.png)

> Once the data file is decrypted, the encryption status of tables do not match their Encryptable attributes. To restore a matching status, you must deselect all **Encryptable** attributes at the database structure level.

## Saving the encryption key

4D allows you to save the data encryption key in a dedicated file. Storing this file on an external device such a USB key will facilitate the use of an encrypted database, since the user would only need to connect the device to provide the key before opening the database in order to access encrypted data.

You can save the encryption key each time a new passphrase has been provided:

- when the database is encrypted for the first time,
- when the database is re-encrypted with a new passphrase.
- Successive encryption keys can be stored on the same device.

## Log file

After an encryption operation has been completed, 4D generates a file in the Logs folder of the database. It is created in XML format and named "*DatabaseName_Encrypt_Log_yyyy-mm-dd hh-mm-ss.xml*" or "*DatabaseName_Decrypt_Log_yyyy-mm-dd hh-mm-ss.xml*".

An Open log file button is displayed on the MSC page each time a new log file has been generated.

The log file lists all internal operations executed pertaining to the encryption/decryption process, as well as errors (if any).