---
id: Transporter
title: Clase Transporter
---

## Descripción

<!-- REF transporter.acceptUnsecureConnection.Desc -->

## .acceptUnsecureConnection

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

<!-- REF #transporter.acceptUnsecureConnection.Syntax -->**.acceptUnsecureConnection** : Boolean<!-- END REF -->

#### Descripción

The `.acceptUnsecureConnection` property contains <!-- REF #transporter.acceptUnsecureConnection.Summary -->**True** if 4D is allowed to establish an unencrypted connection<!-- END REF --> when encrypted connection is not possible.

It contains **False** if unencrypted connections are unallowed, in which case an error in returned when encrypted connection is not possible.

Los puertos seguros disponibles son:

- SMTP
  - 465: SMTPS
  - 587 o 25: SMTP con actualización STARTTLS si lo soporta el servidor.

- IMAP
  - 143: Puerto IMAP no encriptado
  - 993: IMAP con actualización STARTTLS si lo soporta el servidor

- POP3
  - 110: Puerto POP3 no encriptado
  - 995: POP3 con actualización STARTTLS si lo soporta el servidor.

<!-- END REF -->

---

<!-- REF transporter.authenticationModeIMAP.Desc -->

## .authenticationMode

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

<!-- REF #transporter.authenticationMode.Syntax -->**.authenticationMode** : Text<!-- END REF -->

#### Descripción

The `.authenticationMode` property contains <!-- REF #transporter.authenticationMode.Summary -->the authentication mode used to open the session on the mail server<!-- END REF -->.

Por defecto, se utiliza el modo más seguro soportado por el servidor.

Los valores posibles son:

| Valor    | Constantes                     | Comentario                                     |
| -------- | ------------------------------ | ---------------------------------------------- |
| CRAM-MD5 | `IMAP authentication CRAM MD5` | Autenticación utilizando el protocolo CRAM-MD5 |
| LOGIN    | `IMAP authentication login`    | Autenticación utilizando el protocolo LOGIN    |
| OAUTH2   | `IMAP authentication OAUTH2`   | Autenticación utilizando el protocolo OAuth2   |
| PLAIN    | `IMAP authentication plain`    | Autenticación utilizando el protocolo PLAIN    |

<!-- END REF -->

---

<!-- REF transporter.authenticationModePOP3.Desc -->

## .authenticationMode

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

**.authenticationMode** : Text

#### Descripción

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server.

Por defecto, se utiliza el modo más seguro soportado por el servidor.

Los valores posibles son:

| Valor    | Constantes                     | Comentario                                                        |
| -------- | ------------------------------ | ----------------------------------------------------------------- |
| APOP     | `POP3 authentication APOP`     | Authentication using APOP protocol (POP3 only) |
| CRAM-MD5 | `POP3 authentication CRAM MD5` | Autenticación utilizando el protocolo CRAM-MD5                    |
| LOGIN    | `POP3 authentication login`    | Autenticación utilizando el protocolo LOGIN                       |
| OAUTH2   | `POP3 authentication OAUTH2`   | Autenticación utilizando el protocolo OAuth2                      |
| PLAIN    | `POP3 authentication plain`    | Autenticación utilizando el protocolo PLAIN                       |

<!-- END REF -->

---

<!-- REF transporter.authenticationModeSMTP.Desc -->

## .authenticationMode

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

**.authenticationMode** : Text

#### Descripción

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server.

Por defecto, se utiliza el modo más seguro soportado por el servidor.

Los valores posibles son:

| Valor    | Constantes                     | Comentario                                     |
| -------- | ------------------------------ | ---------------------------------------------- |
| CRAM-MD5 | `SMTP authentication CRAM MD5` | Autenticación utilizando el protocolo CRAM-MD5 |
| LOGIN    | `SMTP authentication login`    | Autenticación utilizando el protocolo LOGIN    |
| OAUTH2   | `SMTP authentication OAUTH2`   | Autenticación utilizando el protocolo OAuth2   |
| PLAIN    | `SMTP authentication plain`    | Autenticación utilizando el protocolo PLAIN    |

<!-- END REF -->

---

<!-- REF transporter.bodyCharset.Desc -->

## .bodyCharset

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones         |
| ----------- | ---------------------- |
| 18          | Soporte de UTF8 base64 |
| 17 R5       | Añadidos               |

</details>

<!-- REF #transporter.bodyCharset.Syntax -->**.bodyCharset** : Text<!-- END REF -->

#### Descripción

The `.bodyCharset` property contains <!-- REF #transporter.bodyCharset.Summary -->  the charset and encoding used for the body part of the email<!-- END REF -->.

**Valores posibles:**

| Constante                | Valor                                                                                       | Comentario                                                                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591       | ISO-8859-1                                                                                  | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                                                     |
| mail mode UTF8           | US-ASCII_UTF8_QP                                  | _headerCharset_ & _bodyCharset_: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)                                                                                       |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64                                 | _headerCharset_ & _bodyCharset_: US-ASCII if possible, otherwise UTF-8 & base64                                                                                                                                        |

<!-- END REF -->

---

<!-- REF transporter.connectionTimeOut.Desc -->

## .connectionTimeOut

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #transporter.connectionTimeOut.Syntax -->**.connectionTimeOut** : Integer<!-- END REF -->

#### Descripción

The `.connectionTimeOut` property contains <!-- REF #transporter.connectionTimeOut.Summary -->the maximum wait time (in seconds) allowed to establish a connection to the server<!-- END REF -->. By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.

<!-- END REF -->

---

<!-- REF transporter.headerCharset.Desc -->

## .headerCharset

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #transporter.headerCharset.Syntax -->**.headerCharset** : Text<!-- END REF -->

#### Descripción

The `.headerCharset` property contains <!-- REF #transporter.headerCharset.Summary --> the charset and encoding used for the email header<!-- END REF -->. El encabezado incluye las siguientes partes del correo electrónico:

- asunto,
- attachment filename(s),
- email name.

**Valores posibles:**

| Constante                | Valor                                                                                       | Comentario                                                                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591       | ISO-8859-1                                                                                  | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                                                     |
| mail mode UTF8           | US-ASCII_UTF8_QP                                  | _headerCharset_ & _bodyCharset_: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (default value)                                                                                           |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64                                 | _headerCharset_ & _bodyCharset_: US-ASCII if possible, otherwise UTF-8 & base64                                                                                                                                        |

<!-- END REF -->

---

<!-- REF transporter.host.Desc -->

## .host

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #transporter.host.Syntax -->**.host** : Text<!-- END REF -->

#### Descripción

The `.host` property contains <!-- REF #transporter.host.Summary -->the name or the IP address of the host server<!-- END REF -->. Se utiliza para las transacciones de correo (SMTP, POP3, IMAP).

<!-- END REF -->

---

<!-- REF transporter.logFile.Desc -->

## .logFile

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Añadidos       |

</details>

<!-- REF #transporter.logFile.Syntax -->**.logFile** : Text<!-- END REF -->

#### Descripción

The `.logFile` property contains <!-- REF #transporter.logFile.Summary -->the path of the extended log file defined (if any) for the mail connection<!-- END REF -->. Puede ser relativo (a la carpeta actual Logs) o absoluto.

Unlike regular log files (enabled via the `SET DATABASE PARAMETER` command), extended log files store MIME contents of all sent mails and do not have any size limit. Para más información sobre los archivos de registro extendidos, consulte:

- **SMTP connections** - [4DSMTPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **POP3 connections** - [4DPOP3Log.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **IMAP connections** - [4DIMAPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)

<!-- END REF -->

---

<!-- REF transporter.port.Desc -->

## .port

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

<!-- REF #transporter.port.Syntax -->**.port** : Integer<!-- END REF -->

#### Descripción

The `.port` property contains <!-- REF #transporter.port.Summary --> the port number used for mail transactions<!-- END REF -->. By default, if the _port_ property has not been set in the _server_ object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), the port used is:

- **SMTP** - 587
- **POP3** - 995
- **IMAP** - 993

<!-- END REF -->

---

<!-- REF transporter.sendTimeOut.Desc -->

## .sendTimeOut

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

<!-- REF #transporter.sendTimeOut.Syntax -->**.sendTimeOut** : Integer<!-- END REF -->

#### Descripción

The `.sendTimeOut` property contains <!-- REF #transporter.sendTimeOut.Summary --> the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs<!-- END REF -->. By default, if the `.sendTimeOut` property has not been set in the `server` object, the value 100 is used.

<!-- END REF -->

---

<!-- REF transporter.user.Desc -->

## .user

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

<!-- REF #transporter.user.Syntax -->**.user** : Text<!-- END REF -->

#### Descripción

The `.user` property contains <!-- REF #transporter.user.Summary --> the user name used for authentication on the mail server<!-- END REF -->.

<!-- END REF -->

---

<!-- REF transporter.checkConnection().Desc -->

## .checkConnection()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

<!-- REF #transporter.checkConnection().Syntax -->**.checkConnection()** : Object<!-- END REF -->

<!-- REF #transporter.checkConnection().Params -->

| Parámetros | Tipo   |     | Descripción                                    |
| ---------- | ------ | :-: | ---------------------------------------------- |
| Result     | Object |  <- | Estado de la conexión del objeto transportador |

<!-- END REF -->

#### Descripción

The `.checkConnection()` function <!-- REF #transporter.checkConnection().Summary --> checks the connection using information stored in the transporter object<!-- END REF -->, recreates the connection if necessary, and returns the status. Esta función permite verificar que los valores proporcionados por el usuario son válidos y coherentes.

#### Objeto devuelto

La función envía una solicitud al servidor de correo y devuelve un objeto que describe el estado del correo. Este objeto puede contener las siguientes propiedades:

| Propiedad  |                                                                                              | Tipo       | Descripción                                                                                                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success    |                                                                                              | boolean    | True si la verificación es exitosa, False en caso contrario                                                                                                                     |
| status     |                                                                                              | number     | (sólo SMTP) Código de estado devuelto por el servidor de correo (0 en caso de un problema no relacionado con el procesamiento del correo) |
| statusText |                                                                                              | text       | Mensaje de estado devuelto por el servidor de correo, o último error devuelto en la pila de errores de 4D                                                                       |
| errors     |                                                                                              | collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor de correo)                                                                        |
|            | \[ ].errCode            | number     | Código de error 4D                                                                                                                                                              |
|            | \[ ].message            | text       | Descripción del error 4D                                                                                                                                                        |
|            | \[ ].componentSignature | text       | Firma del componente interno que ha devuelto el error                                                                                                                           |

<!-- END REF -->
