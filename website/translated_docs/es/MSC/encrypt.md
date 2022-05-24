---
id: encrypt
title: Página de cifrado
sidebar_label: Página de cifrado
---

Puede utilizar esta página para cifrar o *descifrar* (es decir, eliminar el cifrado) el archivo de datos, según el estado del atributo **Encriptable** definido para cada tabla de la base.

> Para obtener información detallada sobre el cifrado de datos en 4D, consulte la sección "Cifrado de datos" en el manual de *Diseño*. También puede leer la entrada del blog [Una mirada más profunda al cifrado de datos en 4D](https://blog.4d.com/a-deeper-look-into-4d-data-encryption/).

Se crea una nueva carpeta cada vez que se realiza una operación de cifrado/descifrado. Se denomina "Replaced Files (Encrypting) *yyyy-mm-dd hh-mm-ss*> o "Replaced Files (Decrypting) *yyyy-mm-dd hh-mm-ss*".
> El cifrado sólo está disponible en [modo mantenimiento](overview.md#display-in-maintenance-mode). Si intenta realizar esta operación en modo estándar, un diálogo de advertencia le informará de que la aplicación se cerrará y se reiniciará en modo de mantenimiento

**Atención:**
- Encrypting a data file is a lengthy operation. Muestra un indicador de progreso (que puede ser interrumpido por el usuario). Note also that an application encryption operation always includes a compacting step.
- Cada operación de cifrado produce una copia del archivo de datos, lo que aumenta el tamaño de la carpeta de la aplicación. Es importante tener esto en cuenta (especialmente en macOS, donde las aplicaciones 4D aparecen como paquetes) para que el tamaño de la aplicación no aumente excesivamente. Mover o eliminar manualmente las copias del archivo original dentro del paquete puede ser útil para minimizar el tamaño del paquete.

## Cifrar datos por primera vez
Para cifrar los datos por primera vez con el CSM es necesario seguir los siguientes pasos:

1. En el editor de estructuras, marque el atributo **Encriptable** de cada tabla cuyos datos desee encriptar. Ver la sección "Propiedades de las tablas".
2. Abra la página de encriptación del CSM. If you open the page without setting any tables as **Encryptable**, the following message is displayed in the page: ![](assets/en/MSC/MSC_encrypt1.png) Otherwise, the following message is displayed: ![](assets/en/MSC/MSC_encrypt2.png)<p> This means that the **Encryptable** status for at least one table has been modified and the data file still has not been encrypted. **Nota: **El mismo mensaje se muestra cuando el estado **Encriptable** se ha modificado en un archivo de datos ya encriptado o después de que el archivo de datos haya sido desencriptado (ver más abajo).
3. Haga clic en el botón Encriptar imagen.  
   <img src="assets/es/MSC/MSC_encrypt3.png" alt=" />  
   Se le pedirá que introduzca una frase secreta para su archivo de datos: ![](assets/es/MSC/MSC_encrypt4.png) La frase secreta se utiliza para generar la llave de cifrado de los datos. Una frase secreta es una versión más segura de una contraseña y puede contener un gran número de caracteres. For example, you could enter a passphrases such as "We all came out to Montreux" or "My 1st Great Passphrase!!" For example, you could enter a passphrases such as "We all came out to Montreux" or "My 1st Great Passphrase!!" The security level indicator can help you evaluate the strength of your passphrase: ![](assets/en/MSC/MSC_encrypt5.png) (deep green is the highest level) El indicador de nivel de seguridad puede ayudarle a evaluar la fuerza de tu frase secreta: <img src="assets/es/MSC/MSC_encrypt5.png" alt=" /> (el verde intenso es el nivel más alto)
4. Introduzca para confirmar su frase secreta segura.

A continuación, se inicia el proceso de encriptación. If the MSC was opened in standard mode, the application is reopened in maintenance mode.

4D ofrece guardar la llave de encriptación (ver [Guardar la llave de encriptación](#saving-the-encryption-key) más abajo). Puedes hacerlo en este momento o más adelante. También puede abrir el archivo de historial de encriptación.

Si el proceso de encriptación es exitoso, la página de encriptación muestra los botones de operaciones de mantenimiento de encriptación.

**Atención:** durante la operación de encriptación, 4D crea un nuevo archivo de datos vacío y lo llena con los datos del archivo de datos original. Los registros correspondientes a las tablas "encriptadas" se encriptan y luego se copian, los demás registros sólo se copian (también se ejecuta una operación de compactación). Si la operación tiene éxito, el archivo de datos original se traslada a una carpeta de "Archivos reemplazados (encriptados)". If you intend to deliver an encrypted data file, make sure to move/remove any unencrypted data file from the application folder beforehand.

## Operaciones de mantenimiento de la encriptación
When an application is encrypted (see above), the Encrypt page provides several encryption maintenance operations, corresponding to standard scenarios. ![](assets/en/MSC/MSC_encrypt6.png)


### Suministrar la llave de encriptación de datos actual
Por razones de seguridad, todas las operaciones de mantenimiento del cifrado requieren necesitan la llave de cifrado de datos actual.

- Si la llave de encriptación de datos ya está cargada en el llavero 4D(1), ésta es reutilizada automáticamente por 4D.
- Si no se encuentra la llave de encriptación de datos, debe proporcionarla. Se muestra la siguiente caja de diálogo: ![](assets/en/MSC/MSC_encrypt7.png)

En este paso, tiene dos opciones:
- introduzca la frase secreta actual(2) y haga clic en **OK**. O
- conecte un dispositivo como una llave USB y haga clic en el botón **Escanear dispositivos**.

(1) El llavero de 4D almacena todas las llaves de encriptación de datos válidas introducidas durante la sesión de la aplicación.   
(2) La frase de contraseña actual corresponde a la contraseña utilizada para generar la llave de cifrado actual.

En todos los casos, si se proporciona información válida, 4D se reinicia en modo de mantenimiento (si no es ya el caso) y ejecuta la operación.

### Volver a cifrar los datos con la llave de cifrado actual

Esta operación es útil cuando se ha modificado el atributo **Encriptable** de una o varias tablas que contienen los datos. En este caso, para evitar incoherencias en el archivo de datos, 4D impide cualquier acceso de escritura a los registros de las tablas en la aplicación. Entonces es necesario volver a cifrar los datos para restablecer un estado de cifrado válido.

1. Haga clic en **Recibir los datos con la llave de cifrado actual**.
2. Introduzca la llave de encriptación de datos actual.

El archivo de datos se vuelve a cifrar correctamente con la llave actual y se muestra un mensaje de confirmación: ![](assets/en/MSC/MSC_encrypt8.png)

### Cambiar la frase secreta y volver a encriptar los datos
Esta operación es útil cuando se necesita cambiar la llave de datos de encriptación actual. Por ejemplo, es posible que tenga que hacerlo para cumplir con las normas de seguridad (como la exigencia de cambiar la frase secreta cada tres meses).

1. Haga clic en **Cambiar su frase de contraseña y volver a cifrar los datos**.
2. Introduzca la llave de encriptación de datos actual.
3. Enter the new passphrase (for added security, you are prompted to enter it twice): ![](assets/en/MSC/MSC_encrypt9.png) The data file is encrypted with the new key and the confirmation message is displayed. ![](assets/en/MSC/MSC_encrypt8.png)

### Desencriptar todos los datos
Esta operación elimina toda la codificación del archivo de datos. Si ya no desea tener sus datos encriptados:

1. Haga clic en **Desencriptar todos los datos**.
2. Introduzca la llave de encriptación de datos actual ( ver Suministrar la llave de encriptación de datos actual).

El archivo de datos se descifra completamente y se muestra un mensaje de confirmación: ![](assets/en/MSC/MSC_encrypt10.png)
> Una vez descifrado el archivo de datos, el estado de cifrado de las tablas no coincide con sus atributos Encriptables. Para restablecer un estado coincidente, debe anular la selección de todos los atributos **Encriptable** al nivel de la estructura de la base.

## Guardar la llave de encriptación

4D le permite guardar la llave de encriptación de datos en un archivo dedicado. Storing this file on an external device such a USB key will facilitate the use of an encrypted application, since the user would only need to connect the device to provide the key before opening the application in order to access encrypted data.

Puede guardar la llave de encriptación cada vez que se proporcione una nueva frase secreta:

- when the application is encrypted for the first time,
- when the application is re-encrypted with a new passphrase.

Las llaves de encriptación sucesivas pueden ser almacenadas en el mismo dispositivo.

## Archivo de historial
After an encryption operation has been completed, 4D generates a file in the Logs folder of the application. It is created in XML format and named "*ApplicationName_Encrypt_Log_yyyy-mm-dd hh-mm-ss.xml*" or "*ApplicationName_Decrypt_Log_yyyy-mm-dd hh-mm-ss.xml*".

Cada vez que se genera un nuevo archivo de registro, aparece un botón para abrirlo en la página del CSM.

El archivo de historial lista todas las operaciones internas ejecutadas relacionadas con el proceso de cifrado/descifrado, así como los errores (si los hay).
