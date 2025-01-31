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

La propiedad `.acceptUnsecureConnection` contiene <!-- REF #transporter.acceptUnsecureConnection.Summary -->**True** si se autoriza a 4D establecer una conexión no cifrada<!-- END REF --> cuando la conexión cifrada no es posible.

Contiene **False** si no se permiten las conexiones no cifradas, en cuyo caso se devuelve un error cuando no es posible la conexión cifrada.

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

La propiedad `.authenticationMode` contiene <!-- REF #transporter.authenticationMode.Summary -->el modo de autenticación utilizado para abrir la sesión en el servidor de correo<!-- END REF -->.

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

La propiedad `.authenticationMode` contiene el modo de autenticación utilizado para abrir la sesión en el servidor de correo.

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

La propiedad `.authenticationMode` contiene el modo de autenticación utilizado para abrir la sesión en el servidor de correo.

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

La propiedad `.bodyCharset` contiene <!-- REF #transporter.bodyCharset.Summary --> el conjunto de caracteres y la codificación utilizados para la parte del cuerpo del correo electrónico<!-- END REF -->.

**Valores posibles:**

| Constante                | Valor                                                                                       | Comentario                                                                                                                                                                                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII si es posible, Japanese (ISO-2022-JP) &Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII si es posible, Japanese (ISO-2022-JP) & 7-bit si es posible, de lo contrario UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591       | ISO-8859-1                                                                                  | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                                                                        |
| mail mode UTF8           | US-ASCII_UTF8_QP                                  | *headerCharset* & *bodyCharset*: US-ASCII si es posible, en caso contrario UTF-8 & Quoted-printable (**valor por defecto**)                                                                                            |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64                                 | *headerCharset* & *bodyCharset*: US-ASCII si es posible, de lo contrario UTF-8 & base64                                                                                                                                                   |

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

La propiedad `.connectionTimeOut` contiene <!-- REF #transporter.connectionTimeOut.Summary -->el tiempo máximo de espera (en segundos) permitido para establecer una conexión con el servidor<!-- END REF -->. Por defecto, si la propiedad no se ha definido en el objeto servidor (utilizado para crear el objeto transportador con `SMTP New transporter`, `POP3 New transporter`, o `IMAP New transporter`), el valor es 30.

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

La propiedad `.headerCharset` contiene <!-- REF #transporter.headerCharset.Summary --> el conjunto de caracteres y la codificación utilizados para el encabezado del correo electrónico<!-- END REF -->. El encabezado incluye las siguientes partes del correo electrónico:

- asunto,
- attachment filename(s),
- email name.

**Valores posibles:**

| Constante                | Valor                                                                                       | Comentario                                                                                                                                                                                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII si es posible, Japanese (ISO-2022-JP) &Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII si es posible, Japanese (ISO-2022-JP) & 7-bit si es posible, de lo contrario UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591       | ISO-8859-1                                                                                  | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                                                                        |
| mail mode UTF8           | US-ASCII_UTF8_QP                                  | *headerCharset* & *bodyCharset*: US-ASCII si es posible, en caso contrario UTF-8 & Quoted-printable (valor por defecto)                                                                                                |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64                                 | *headerCharset* & *bodyCharset*: US-ASCII si es posible, de lo contrario UTF-8 & base64                                                                                                                                                   |

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

La propiedad `.host` contiene <!-- REF #transporter.host.Summary -->el nombre o la dirección IP del servidor local<!-- END REF -->. Se utiliza para las transacciones de correo (SMTP, POP3, IMAP).

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

La propiedad `.logFile` contiene <!-- REF #transporter.logFile.Summary -->la ruta del archivo de registro extendido definido (si existe) para la conexión de correo<!-- END REF -->. Puede ser relativo (a la carpeta actual Logs) o absoluto.

A diferencia de los archivos log habituales (activados mediante el comando `SET DATABASE PARAMETER`), los archivos log extendidos almacenan el contenido MIME de todos los correos enviados y no tienen límite de tamaño. Para más información sobre los archivos de registro extendidos, consulte:

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

La propiedad `.port` contiene <!-- REF #transporter.port.Summary --> el número de puerto utilizado para las transacciones de correo<!-- END REF -->. Por defecto, si la propiedad *port* no se ha definido en el objeto *server* (utilizado para crear el objeto transportador con `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), el puerto utilizado es:

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

La propiedad `.sendTimeOut` contiene <!-- REF #transporter.sendTimeOut.Summary --> el tiempo máximo de espera (en segundos) de una llamada a `.send( )` antes de que se produzca un timeout<!-- END REF -->. Por defecto, si no se ha definido la propiedad `.sendTimeOut` en el objeto `server`, se utiliza el valor 100.

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

La propiedad `.user` contiene <!-- REF #transporter.user.Summary --> el nombre de usuario utilizado para la autenticación en el servidor de correo<!-- END REF -->.

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

| Parámetros | Tipo   |                             | Descripción                                    |
| ---------- | ------ | :-------------------------: | ---------------------------------------------- |
| Result     | Object | <- | Estado de la conexión del objeto transportador |

<!-- END REF -->

#### Descripción

La función `.checkConnection()` <!-- REF #transporter.checkConnection().Summary --> comprueba la conexión utilizando la información almacenada en el objeto transporter<!-- END REF -->, recrea la conexión si es necesario y devuelve el estado. Esta función permite verificar que los valores proporcionados por el usuario son válidos y coherentes.

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
