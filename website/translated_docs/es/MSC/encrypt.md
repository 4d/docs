---
id: encrypt
title: Página de cifrado
sidebar_label: Página de cifrado
---

You can use this page to encrypt or *decrypt* (i.e. remove encryption from) the data file, according to the **Encryptable** attribute status defined for each table in the database. Para obtener información detallada sobre el cifrado de datos en 4D, consulte la sección "Cifrado de datos".

A new folder is created each time you perform an encryption/decryption operation. It is named "Replaced Files (Encrypting) *yyyy-mm-dd hh-mm-ss*> or "Replaced Files (Decrypting) *yyyy-mm-dd hh-mm-ss*".
> Encryption is only available in [maintenance mode](overview.md#display-in-maintenance-mode). Si intenta realizar esta operación en modo estándar, un diálogo de advertencia le informará de que la base se cerrará y se reiniciará en modo de mantenimiento

**Warning:**
- Cifrar una base es una operación de larga duración. It displays a progress indicator (which could be interrupted by the user). Tenga en cuenta también que una operación de encriptación de la base siempre incluye un paso de compactación.
- Each encryption operation produces a copy of the data file, which increases the size of the application folder. It is important to take this into account (especially in macOS where 4D applications appear as packages) so that the size of the application does not increase excessively. Manually moving or removing the copies of the original file inside the package can be useful in order to minimize the package size.

## Encrypting data for the first time
Encrypting your data for the first time using the MSC requires the following steps:

1. In the Structure editor, check the **Encryptable** attribute for each table whose data you want to encrypt. See the "Table properties" section.
2. Open the Encrypt page of the MSC. Si se abre la página sin configurar las tablas como **Encriptables**, se muestra el siguiente mensaje en la página: ![](assets/en/MSC/MSC_encrypt1.png) En caso contrario, se muestra el siguiente mensaje: ![](assets/en/MSC/MSC_encrypt2.png) Esto significa que el estado **Encriptable** de al menos una tabla ha sido modificado y el archivo de datos aún no ha sido encriptado. **Note: **The same message is displayed when the **Encryptable** status has been modified in an already encrypted data file or after the data file has been decrypted (see below).
3. Click on the Encrypt picture button.  
   ![](assets/en/MSC/MSC_encrypt3.png)  
   You will be prompted to enter a passphrase for your data file: ![](assets/en/MSC/MSC_encrypt4.png) The passphrase is used to generate the data encryption key. A passphrase is a more secure version of a password and can contain a large number of characters. For example, you could enter a passphrases such as "We all came out to Montreux" or "My 1st Great Passphrase!!" The security level indicator can help you evaluate the strength of your passphrase: ![](assets/en/MSC/MSC_encrypt5.png) (deep green is the highest level)
4. Enter to confirm your secured passphrase.

The encrypting process is then launched. Si el CSM se abrió en modo estándar, la base de datos se reabre en modo mantenimiento.

4D offers to save the encryption key (see [Saving the encryption key](#saving-the-encryption-key) below). You can do it at this moment or later. You can also open the encryption log file.

If the encryption process is successful, the Encrypt page displays Encryption maintenance operations buttons.

**Warning:** During the encryption operation, 4D creates a new, empty data file and fills it with data from the original data file. Records belonging to "encryptable" tables are encrypted then copied, other records are only copied (a compacting operation is also executed). If the operation is successful, the original data file is moved to a "Replaced Files (Encrypting)" folder. Si tiene la intención de entregar un archivo de datos encriptado, asegúrese antes de mover/eliminar cualquier archivo de datos no encriptado de la carpeta de la base de datos.

## Encryption maintenance operations
Cuando una base está encriptada (ver arriba), la página Encriptar ofrece varias operaciones de mantenimiento de la encriptación, correspondientes a los escenarios estándar. ![](assets/en/MSC/MSC_encrypt6.png)


### Providing the current data encryption key
For security reasons, all encryption maintenance operations require that the current data encryption key be provided.

- If the data encryption key is already loaded in the 4D keychain(1), it is automatically reused by 4D.
- If the data encryption key is not found, you must provide it. The following dialog is displayed: ![](assets/en/MSC/MSC_encrypt7.png)

At this step, you have two options:
- enter the current passphrase(2) and click **OK**. O
- connect a device such as a USB key and click the **Scan devices** button.

(1) The 4D keychain stores all valid data encrpytion keys entered during the application session.   
(2) The current passphrase is the passphrase used to generate the current encryption key.

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

4D allows you to save the data encryption key in a dedicated file. El almacenamiento de este archivo en un dispositivo externo, como una llave USB, facilitará el uso de una base de datos cifrada, ya que el usuario sólo tendría que conectar el dispositivo para entregar la llave antes de abrir la base para acceder a los datos cifrados.

You can save the encryption key each time a new passphrase has been provided:

- cuando la base se encripta por primera vez,
- cuando la base de datos se vuelve a encriptar con una nueva frase secreta.

Successive encryption keys can be stored on the same device.

## Log file
Una vez finalizada una operación de encriptación, 4D genera un archivo en la carpeta Logs de la base. Se crea en formato XML y se llama "*DatabaseName_Encrypt_Log_yyyy-mm-dd hh-mm-ss.xml*" o "*DatabaseName_Decrypt_Log_yyyy-mm-dd hh-mm-ss.xml*".

An Open log file button is displayed on the MSC page each time a new log file has been generated.

The log file lists all internal operations executed pertaining to the encryption/decryption process, as well as errors (if any).
