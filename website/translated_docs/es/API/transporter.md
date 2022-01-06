---
id: Transporter
title: Clase Transporter
---

## Descripción


<!-- REF transporter.acceptUnsecureConnection.Desc -->
## .acceptUnsecureConnection

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #transporter.acceptUnsecureConnection.Syntax -->
**.acceptUnsecureConnection** : Boolean<!-- END REF -->


#### Descripción

La propiedad `.acceptUnsecureConnection` contiene <!-- REF #transporter.acceptUnsecureConnection.Summary -->**True** si se permite a 4D establecer una conexión no cifrada<!-- END REF --> cuando la conexión cifrada no es posible.

It contains **False** if unencrypted connections are unallowed, in which case an error in returned when encrypted connection is not possible.

Available secured ports are:

- SMTP
    - 465: SMTPS
    - 587 or 25: SMTP with STARTTLS upgrade if supported by the server.

- IMAP
    - 143: IMAP non-encrypted port
    - 993: IMAP with STARTTLS upgrade if supported by the server

- POP3
    - 110: POP3 non-encrypted port
    - 995: POP3 con actualización STARTTLS si lo soporta el servidor.
<!-- END REF -->

--- 
 
 <!-- REF transporter.authenticationModeIMAP.Desc -->
## .authenticationMode

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #transporter.authenticationMode.Syntax -->
**.authenticationMode** : Text<!-- END REF -->

#### Descripción

La propiedad `.authenticationMode` contiene <!-- REF #transporter.authenticationMode.Summary -->el modo de autenticación utilizado para abrir la sesión en el servidor de correo<!-- END REF -->.

By default, the most secured mode supported by the server is used.

Los valores posibles son:

| Valor    | Constantes                     | Comentario                             |
| -------- | ------------------------------ | -------------------------------------- |
| CRAM-MD5 | `IMAP authentication CRAM MD5` | Authentication using CRAM-MD5 protocol |
| LOGIN    | `IMAP authentication login`    | Authentication using LOGIN protocol    |
| OAUTH2   | `IMAP authentication OAUTH2`   | Authentication using OAuth2 protocol   |
| PLAIN    | `IMAP authentication plain`    | Authentication using PLAIN protocol    |

<!-- END REF -->

--- 
 
 <!-- REF transporter.authenticationModePOP3.Desc -->
## .authenticationMode

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>


**.authenticationMode** : Text

#### Descripción

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server.

By default, the most secured mode supported by the server is used.

Los valores posibles son:

| Valor    | Constantes                     | Comentario                                     |
| -------- | ------------------------------ | ---------------------------------------------- |
| APOP     | `POP3 authentication APOP`     | Authentication using APOP protocol (POP3 only) |
| CRAM-MD5 | `POP3 authentication CRAM-MD5` | Authentication using CRAM-MD5 protocol         |
| LOGIN    | `POP3 authentication login`    | Authentication using LOGIN protocol            |
| OAUTH2   | `POP3 authentication OAUTH2`   | Authentication using OAuth2 protocol           |
| PLAIN    | `POP3 authentication plain`    | Authentication using PLAIN protocol            |

<!-- END REF -->

--- 
 
 <!-- REF transporter.authenticationModeSMTP.Desc -->
## .authenticationMode

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>


**.authenticationMode** : Text

#### Descripción

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server.

By default, the most secured mode supported by the server is used.

Los valores posibles son:

| Valor    | Constantes                     | Comentario                             |
| -------- | ------------------------------ | -------------------------------------- |
| CRAM-MD5 | `SMTP authentication CRAM MD5` | Authentication using CRAM-MD5 protocol |
| LOGIN    | `SMTP authentication login`    | Authentication using LOGIN protocol    |
| OAUTH2   | `SMTP authentication OAUTH2`   | Authentication using OAuth2 protocol   |
| PLAIN    | `SMTP authentication plain`    | Authentication using PLAIN protocol    |

<!-- END REF -->

---

<!-- REF transporter.bodyCharset.Desc -->
## .bodyCharset

<details><summary>Histórico</summary>
| Versión | Modificaciones          |
| ------- | ----------------------- |
| v18     | Support for UTF8 base64 |
| v17 R5  | Añadidos                |
</details>

<!-- REF #transporter.bodyCharset.Syntax -->
**.bodyCharset** : Text<!-- END REF -->


#### Descripción

La propiedad `.bodyCharset` contiene <!-- REF #transporter.bodyCharset.Summary -->  el conjunto de caracteres y la codificación utilizados para la parte del cuerpo del correo electrónico<!-- END REF -->.

*   subject,
*   attachment filename(s),
*   nombre del correo electrónico.

**Valores posibles:**

| Constante                | Valor                          | Comentario                                                                                                    |
| ------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>                                                                                     |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                     |
| mail mode UTF8           | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64                               |

<!-- END REF -->

---


<!-- REF transporter.connectionTimeOut.Desc -->
## .connectionTimeOut

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #transporter.connectionTimeOut.Syntax -->
**.connectionTimeOut** : Integer<!-- END REF -->



#### Descripción

La propiedad `.connectionTimeOut` contiene <!-- REF #transporter.connectionTimeOut.Summary -->el tiempo máximo de espera (en segundos) permitido para establecer una conexión con el servidor<!-- END REF -->. By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.

<!-- END REF -->


---

<!-- REF transporter.headerCharset.Desc -->
## .headerCharset

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #transporter.headerCharset.Syntax -->
**.headerCharset** : Text<!-- END REF -->


#### Descripción

La propiedad `.headerCharset` contiene <!-- REF #transporter.headerCharset.Summary --> el conjunto de caracteres y la codificación utilizados para el encabezado del correo electrónico<!-- END REF -->. The header includes the following parts of the email:

*   subject,
*   attachment filename(s),
*   nombre del correo electrónico.

**Valores posibles:**

| Constante                | Valor                          | Comentario                                                                                                |
| ------------------------ | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>                                                                                 |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                |
| mail mode UTF8           | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (default value) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64                           |

<!-- END REF -->

---


<!-- REF transporter.host.Desc -->
## .host

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #transporter.host.Syntax -->
**.host** : Text<!-- END REF -->


#### Descripción

La propiedad `.host` contiene <!-- REF #transporter.host.Summary -->el nombre o la dirección IP del servidor local<!-- END REF -->. Used for mail transactions (SMTP, POP3, IMAP).

<!-- END REF -->

---

<!-- REF transporter.logFile.Desc -->
## .logFile

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

<!-- REF #transporter.logFile.Syntax -->
**.logFile** : Text<!-- END REF -->


#### Descripción

La propiedad `.logFile` contiene <!-- REF #transporter.logFile.Summary -->la ruta del archivo de registro extendido definido (si existe) para la conexión de correo<!-- END REF -->. It can be relative (to the current Logs folder) or absolute.

Unlike regular log files (enabled via the `SET DATABASE PARAMETER` command), extended log files store MIME contents of all sent mails and do not have any size limit. For more information about extended log files, refer to:

*   **SMTP connections** - [4DSMTPLog.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   **POP3 connections** - [4DPOP3Log.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   **IMAP connections** - [4DIMAPLog.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)




<!-- END REF -->


---

<!-- REF transporter.port.Desc -->
## .port

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #transporter.port.Syntax -->
**.port** : Integer<!-- END REF -->


#### Descripción

La propiedad `.port` contiene <!-- REF #transporter.port.Summary --> el número de puerto utilizado para las transacciones de correo<!-- END REF -->. By default, if the *port* property has not been set in the *server* object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), the port used is:

*   **SMTP** - 587
*   **POP3** - 995
*   **IMAP** - 993


<!-- END REF -->


---


<!-- REF transporter.sendTimeOut.Desc -->
## .sendTimeOut

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #transporter.sendTimeOut.Syntax -->
**.sendTimeOut** : Integer<!-- END REF -->


#### Descripción
La propiedad `.sendTimeOut` contiene <!-- REF #transporter.sendTimeOut.Summary --> el tiempo máximo de espera (en segundos) de una llamada a `.send( )` antes de que se produzca un timeout<!-- END REF -->. By default, if the `.sendTimeOut` property has not been set in the `server` object, the value 100 is used.

<!-- END REF -->

---


<!-- REF transporter.user.Desc -->
## .user

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #transporter.user.Syntax -->
**.user** : Text<!-- END REF -->


#### Descripción
La propiedad `.user` contiene <!-- REF #transporter.user.Summary --> el nombre de usuario utilizado para la autenticación en el servidor de correo<!-- END REF -->. 

<!-- END REF -->

---

<!-- REF transporter.checkConnection().Desc -->
## .checkConnection()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #transporter.checkConnection().Syntax -->
**.checkConnection()** : Object<!-- END REF -->

<!-- REF #transporter.checkConnection().Params -->
| Parámetros | Tipo   |    | Descripción                                    |
| ---------- | ------ |:--:| ---------------------------------------------- |
| Resultado  | Objeto | <- | Estado de la conexión del objeto transportador |
<!-- END REF -->


#### Descripción

La función `.checkConnection()` <!-- REF #transporter.checkConnection().Summary --> comprueba la conexión utilizando la información almacenada en el objeto transporter<!-- END REF -->, recrea la conexión si es necesario y devuelve el estado. Esta función permite verificar que los valores proporcionados por el usuario son válidos y coherentes.


#### Objeto devuelto

La función envía una solicitud al servidor de correo y devuelve un objeto que describe el estado del correo. This object can contain the following properties:

| Propiedad  |                          | Tipo      | Descripción                                                                                                  |
| ---------- | ------------------------ | --------- | ------------------------------------------------------------------------------------------------------------ |
| success    |                          | booleano  | True if the check is successful, False otherwise                                                             |
| status     |                          | number    | (SMTP only) Status code returned by the mail server (0 in case of an issue unrelated to the mail processing) |
| statusText |                          | texto     | Status message returned by the mail server, or last error returned in the 4D error stack                     |
| errors     |                          | colección | 4D error stack (not returned if a mail server response is received)                                          |
|            | \[ ].errCode            | number    | Código de error 4D                                                                                           |
|            | \[ ].message            | texto     | Description of the 4D error                                                                                  |
|            | \[ ].componentSignature | texto     | Firma del componente interno que ha devuelto el error                                                        |



<!-- END REF -->



