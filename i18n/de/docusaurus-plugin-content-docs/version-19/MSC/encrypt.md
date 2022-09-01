---
id: encrypt
title: Seite Verschlüsseln
sidebar_label: Seite Verschlüsseln
---

Auf dieser Seite können Sie die Datendatei verschlüsseln oder *entschlüsseln* (z.B. die Verschlüsselung entfernen). Das richtet sich nach der Eigenschaft **Verschlüsselbar**, die für jede Tabelle in der Anwendung gesetzt werden kann.

> Weitere Informationen dazu finden Sie im Abschnitt "Daten verschlüsseln" des 4D Handbuchs *Designmodus*. You can also read the [A deeper look into 4D data encryption](https://blog.4d.com/a-deeper-look-into-4d-data-encryption/) blog post.

Bei jeder Operation Verschlüsselung/Entschlüsselung wird ein neuer Ordner angelegt. Er lautet "Replaced Files (Encrypting) *yyyy-mm-dd hh-mm-ss*> oder "Replaced Files (Decrypting) *yyyy-mm-dd hh-mm-ss*".
> Verschlüsselung ist nur im [Wartungsmodus](overview.md#anzeige-im-wartungsmodus) verfügbar. Versuchen Sie, diese Operation im Standardmodus auszuführen, erhalten Sie die Meldung, dass die Anwendung geschlossen und im Wartungsmodus neu gestartet wird

**Warnung:**

- Das Verschlüsseln einer Anwendung ist eine längere Operation. Währenddessen erscheint ein Ablaufbalken (den der Benutzer unterbrechen kann). Beachten Sie auch, dass beim Verschlüsselungsprozess immer eine Komprimierung durchgeführt wird.
- Jeder Verschlüsselungsvorgang produziert eine Kopie der Datendatei, was den Anwendungsordner vergrößert. Sie sollten darauf achten (besonders auf macOS, wo 4D Anwendungen als Package erscheinen), dass die Größe der Anwendung nicht exzessiv ansteigt. In diesem Fall ist es hilfreich, die Kopien der Originaldatei im Package manuell zu entfernen, damit die Größe des Package im Rahmen bleibt.

## Daten zum ersten Mal verschlüsseln

Beim ersten Verschlüsseln Ihrer Daten über das MSC sind folgende Schritte erforderlich:

1. Markieren Sie im Struktureditor über das Inspektorfenster für jede Tabelle, die verschlüsselbar sein soll, die Eigenschaft **Verschlüsselbar**. Weitere Informationen dazu finden Sie im Abschnitt "Tabelleneigenschaften".
2. Öffnen Sie die Seite Verschlüsseln des MSC. If you open the page without setting any tables as **Encryptable**, the following message is displayed in the page: ![](../assets/en/MSC/MSC_encrypt1.png) Otherwise, the following message is displayed: ![](../assets/en/MSC/MSC_encrypt2.png) This means that the **Encryptable** status for at least one table has been modified and the data file still has not been encrypted. **Note:**The same message is displayed when the **Encryptable** status has been modified in an already encrypted data file or after the data file has been decrypted (see below).
3. Click on the Encrypt picture button.  
   ![](../assets/en/MSC/MSC_encrypt3.png)  
   You will be prompted to enter a passphrase for your data file: ![](../assets/en/MSC/MSC_encrypt4.png) The passphrase is used to generate the data encryption key. Eine Passphrase ist eine sicherere Version als ein Kennwort, da sie eine größere Anzahl Zeichen enthalten kann. Sie können beispielsweise einen kompletten Satz eingeben, wie "Wir kommen alle nach Massenhausen" oder "Meine 1. große Passphrase!!" The security level indicator can help you evaluate the strength of your passphrase: ![](../assets/en/MSC/MSC_encrypt5.png) (deep green is the highest level)
4. Geben Sie zum Bestätigen Ihre gesicherte Passphrase ein.

Dann wird der Prozess zum Verschlüsseln gestartet. Wurde das MSC im Standardmodus geöffnet, wird die Anwendung geschlossen und erneut im Wartungsmodus geöffnet.

4D bietet an, den Verschlüsselungscode zu sichern (siehe unten im Absatz [Verschlüsselungscode sichern](#verschlüsselungscode-sichern)). Sie können das gleich oder später machen. Sie können auch das Logbuch zur Verschlüsselung öffnen.

War der Prozess zum Verschlüsseln erfolgreich, zeigt die Seite Verschlüsseln Schaltflächen für Wartungsoperationen beim Verschlüsseln.

**Warnung:** 4D erstellt beim Verschlüsseln eine neue leere Datendatei und füllt sie mit Daten aus der ursprünglichen Datendatei. Datensätze aus "verschlüsselbaren" Tabellen werden verschlüsselt und dann kopiert, andere Datensätze werden nur kopiert. (Außerdem wird eine Komprimierung durchgeführt). War die Operation erfolgreich, wird die ursprüngliche Datendatei in den Ordner "Replaced Files (Encrypting)" geschoben. Wollen Sie eine verschlüsselte Datendatei ausliefern, stellen Sie sicher, dass zuvor alle unverschlüsselten Datendateien aus dem Anwendungsordner verschoben/entfernt wurden.

## Wartungsoperationen beim Verschlüsseln

When an application is encrypted (see above), the Encrypt page provides several encryption maintenance operations, corresponding to standard scenarios. ![](../assets/en/MSC/MSC_encrypt6.png)

### Den aktuellen Verschlüsselungscode für Daten liefern

Aus Sicherheitsgründen wird bei allen Wartungsoperationen für Verschlüsselung der aktuelle Verschlüsselungscode der Daten angefordert.

- Wurde der Verschlüsselungscode für Daten bereits in den 4D Schlüsselbund (1) geladen, verwendet 4D ihn automatisch wieder.
- Wird kein Verschlüsselungscode für Daten gefunden, müssen Sie ihn liefern. Es erscheint folgendes Dialogfenster: ![](../assets/en/MSC/MSC_encrypt7.png)

An dieser Stelle haben Sie zwei Möglichkeiten:

- Sie geben die aktuelle Passphrase(2) ein und klicken auf **OK**. ODER
- Sie schließen ein Gerät, z. B. einen USB Key an und klicken auf die Schaltfläche **Gerät scannen**.

(1) The 4D keychain stores all valid data encrpytion keys entered during the application session. (2) The current passphrase is the passphrase used to generate the current encryption key.

Ist die Eingabe korrekt, startet 4D in allen Fällen erneut im Wartungsmodus (falls das noch nicht der Fall ist) und führt die Operation aus.

### Daten mit dem aktuellen Verschlüsselungscode erneut verschlüsseln

Diese Operation ist hilfreich, wenn der Status **Verschlüsselbar** für eine oder mehrere Tabellen mit Daten geändert wurde. Zur Vermeidung von Inkonsistenzen in der Datendatei erlaubt 4D in solchen Fällen keinen Schreibzugriff auf die Datensätze dieser Tabellen in der Anwendung. Die Daten müssen dann erneut verschlüsselt werden, um wieder einen gültigen Verschlüsselungsstatus herzustellen.

1. Markieren Sie die Option **Daten mit dem aktuellen Schlüssel wieder verschlüsseln**.
2. Geben Sie den aktuellen Verschlüsselungscode für Daten ein.

The data file is properly re-encrypted with the current key and a confirmation message is displayed: ![](../assets/en/MSC/MSC_encrypt8.png)

### Passphrase verändern und Daten erneut verschlüsseln

Diese Operation bietet sich an, wenn Sie Ihren aktuellen Verschlüsselungscode für Daten verändern müssen, um bestimmte Sicherheitsregeln einzuhalten (z. B. wenn ein Admin das Unternehmen verlassen hat).

1. Wählen Sie die Option **Ändern Sie Ihre Passphrase und verschlüsseln Sie die Daten erneut**.
2. Geben Sie den aktuellen Verschlüsselungscode für Daten ein.
3. Enter the new passphrase (for added security, you are prompted to enter it twice): ![](../assets/en/MSC/MSC_encrypt9.png) The data file is encrypted with the new key and the confirmation message is displayed. ![](../assets/en/MSC/MSC_encrypt8.png)

### Alle Daten entschlüsseln

Diese Operation entfernt jede Verschlüsselung aus der Datendatei. Sollen Ihre Daten nicht länger verschlüsselt sein:

1. Klicken Sie auf die Option **Alle Daten entschlüsseln**.
2. Geben Sie den aktuellen Verschlüsselungscode für Daten ein (siehe oben unter "Den aktuellen Verschlüsselungscode für Daten liefern").

The data file is fully decrypted and a confirmation message is displayed: ![](../assets/en/MSC/MSC_encrypt10.png)
> Ist die Datendatei entschlüsselt, passt der Verschlüsselungsstatus der Tabellen nicht mehr zur Eigenschaft Verschlüsselbar. Um den passenden Status wiederherzustellen, müssen Sie alle Eigenschaften **Verschlüsselbar** auf der Strukturebene der Anwendungen abwählen.

## Verschlüsselungscode sichern

In 4D können Sie den Verschlüsselungscode für Daten in einer spezifischen Datei speichern. Speichern Sie diese Datei auf einem externen Gerät, z. B. einem USB Key, vereinfacht das den Einsatz einer verschlüsselten Anwendung. Der Benutzer muss vor dem Öffnen der Anwendung lediglich das Gerät anschließen und kann dann auf verschlüsselte Daten zugreifen.

Sie können den Verschlüsselungscode jedes Mal sichern, wenn eine neue Passphrase angelegt wird:

- wenn die Anwendung zum ersten Mal verschlüsselt wird
- wenn die Anwendung mit einer neuen Passphrase erneut verschlüsselt wird.

Aufeinanderfolgende Verschlüsselungscodes lassen sich auf dem gleichen Gerät speichern.

## Logbuch

Ist das Komprimieren abgeschlossen, erzeugt 4D eine Datei im Ordner Logs der Anwendung im XML Format mit Namen "*Anwendungsname_Encrypt_Log_yyyy-mm-dd hh-mm-ss.xml*" oder "*Anwendungsname_Decrypt_Log_yyyy-mm-dd hh-mm-ss.xml*".

Immer wenn ein neues Logbuch angelegt wurde, erscheint auf der Seite Verschlüsselt unten die Schaltfläche Logbuch anzeigen.

Das Logbuch listet alle internen Operationen, die während dem Prozess Verschlüsseln/Entschlüsseln ausgeführt werden, sowie evtl. aufgetretene Fehler.
