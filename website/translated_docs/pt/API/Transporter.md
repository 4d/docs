---
id: Transporter
title: Transporter Class
---

## Descrição

<!-- REF transporter.acceptUnsecureConnection.Desc -->
## .acceptUnsecureConnection

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>


<!-- REF #transporter.acceptUnsecureConnection.Syntax --> **.acceptUnsecureConnection** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.acceptUnsecureConnection` contém <!-- REF #transporter.acceptUnsecureConnection.Summary -->**True** se 4D tiver a permissão de estabelecer uma conexão não criptografada<!-- END REF --> quando a conexão cifrada não for possível.

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
    - 995: POP3 com atualização STARTTLS se suportado pelo servidor.
<!-- END REF -->

---


 <!-- REF transporter.authenticationModeIMAP.Desc -->
## .authenticationMode

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>


<!-- REF #transporter.authenticationMode.Syntax --> **.authenticationMode** : Text<!-- END REF -->

#### Descrição

A propriedade `.authenticationMode` contém <!-- REF #transporter.authenticationMode.Summary -->o modo de autenticação usado para abrir a sessão no servidor de correio <!-- END REF -->.

By default, the most secured mode supported by the server is used.

Possible values are:

| Value    | Constants                      | Comentário                             |
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
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>


**.authenticationMode** : Text

#### Descrição

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server.

By default, the most secured mode supported by the server is used.

Possible values are:

| Value    | Constants                      | Comentário                                     |
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
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>


**.authenticationMode** : Text

#### Descrição

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server.

By default, the most secured mode supported by the server is used.

Possible values are:

| Value    | Constants                      | Comentário                             |
| -------- | ------------------------------ | -------------------------------------- |
| CRAM-MD5 | `SMTP authentication CRAM MD5` | Authentication using CRAM-MD5 protocol |
| LOGIN    | `SMTP authentication login`    | Authentication using LOGIN protocol    |
| OAUTH2   | `SMTP authentication OAUTH2`   | Authentication using OAuth2 protocol   |
| PLAIN    | `SMTP authentication plain`    | Authentication using PLAIN protocol    |


<!-- END REF -->

---<!-- REF transporter.bodyCharset.Desc -->
## .bodyCharset

<details><summary>Histórico</summary>
| Versão | Mudanças                |
| ------ | ----------------------- |
| v18    | Support for UTF8 base64 |
| v17 R5 | Adicionado              |
</details>


<!-- REF #transporter.bodyCharset.Syntax --> **.bodyCharset** : Text<!-- END REF -->


#### Descrição

A propriedade `.bodyCharset` contém <!-- REF #transporter.bodyCharset.Summary -->  o conjunto de caracteres e a codificação utilizados para a parte do corpo do correio eletrônico<!-- END REF -->.

*   subject,
*   attachment filename(s),
*   email name.

**Possible values:**

| Constante                | Value                          | Comentário                                                                                                    |
| ------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>                                                                                     |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                     |
| mail mode UTF8           | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64                               |


<!-- END REF -->

---<!-- REF transporter.connectionTimeOut.Desc -->
## .connectionTimeOut

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF #transporter.connectionTimeOut.Syntax --> **.connectionTimeOut** : Integer<!-- END REF -->



#### Descrição

The `.connectionTimeOut` property contains <!-- REF #transporter.connectionTimeOut. Summary -->the maximum wait time (in seconds) allowed to establish a connection to the server<!-- END REF -->. By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.

<!-- END REF -->


---<!-- REF transporter.headerCharset.Desc -->
## .headerCharset

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF #transporter.headerCharset.Syntax --> **.headerCharset** : Text<!-- END REF -->


#### Descrição

The `.bodyCharset` property contains <!-- REF #transporter.bodyCharset. The header includes the following parts of the email: </p>

*   subject,
*   attachment filename(s),
*   email name.

**Possible values:**

| Constante                | Value                          | Comentário                                                                      |
| ------------------------ | ------------------------------ | ------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>                                                       |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                      |
| mail mode UTF8           | US-ASCII_UTF8_QP             | texto                                                                           |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64 |


<!-- END REF -->

---<!-- REF transporter.host.Desc -->
## .host

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF #transporter.host.Syntax --> **.host** : Text<!-- END REF -->


#### Descrição

The `.host` property contains <!-- REF #transporter.host. Summary -->the name or the IP address of the host server<!-- END REF -->. Used for mail transactions (SMTP, POP3, IMAP).

<!-- END REF -->

---<!-- REF transporter.logFile.Desc -->
## .logFile

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF #transporter.logFile.Syntax --> **.logFile** : Text<!-- END REF -->


#### Descrição

The `.logFile` property contains <!-- REF #transporter.logFile. Summary -->the path of the extended log file defined (if any) for the mail connection<!-- END REF -->. It can be relative (to the current Logs folder) or absolute.

Unlike regular log files (enabled via the `SET DATABASE PARAMETER` command), extended log files store MIME contents of all sent mails and do not have any size limit. For more information about extended log files, refer to:

*   **SMTP connections** - [4DSMTPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   **POP3 connections** - [4DPOP3Log.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   **IMAP connections** - [4DIMAPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)

<!-- END REF -->


---<!-- REF transporter.port.Desc -->
## .port

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>


<!-- REF #transporter.port.Syntax --> **.port** : Integer<!-- END REF -->


#### Descrição

The `.port` property contains <!-- REF #transporter.port. Summary --> the port number used for mail transactions<!-- END REF -->. By default, if the *port* property has not been set in the *server* object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), the port used is:

*   **SMTP** - 587
*   **POP3** - 995
*   **IMAP** - 993

<!-- END REF -->


---<!-- REF transporter.sendTimeOut.Desc -->
## .sendTimeOut

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>


<!-- REF #transporter.sendTimeOut.Syntax --> **.sendTimeOut** : Integer<!-- END REF -->


#### Descrição
The `.sendTimeOut` property contains <!-- REF #transporter.sendTimeOut. Summary --> the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs<!-- END REF -->. By default, if the `.sendTimeOut` property has not been set in the `server` object, the value 100 is used.

<!-- END REF -->

---<!-- REF transporter.user.Desc -->
## .user

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>


<!-- REF #transporter.user.Syntax --> **.user** : Text<!-- END REF -->


#### Descrição
The `.user` property contains <!-- REF #transporter.user. Summary --> the user name used for authentication on the mail server<!-- END REF -->. 

<!-- END REF -->

---<!-- REF transporter.checkConnection().Desc -->
## .checkConnection()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>


<!-- REF #transporter.checkConnection().Syntax --> **.checkConnection()** : Object<!-- END REF -->


<!-- REF #transporter.checkConnection().Params -->
| Parameter | Type   |    | Descrição                                   |
| --------- | ------ |:--:| ------------------------------------------- |
| Resultado | Objeto | <- | Status of the transporter object connection |

<!-- END REF -->


#### Descrição

The `.checkConnection()` function <!-- REF #transporter.checkConnection(). Summary --> checks the connection using information stored in the transporter object<!-- END REF -->, recreates the connection if necessary, and returns the status. This function allows you to verify that the values provided by the user are valid and consistent.


#### Returned object

The function sends a request to the mail server and returns an object describing the mail status. This object can contain the following properties:

| Propriedade |                          | Type       | Descrição                                                                                                    |
| ----------- | ------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------ |
| success     |                          | booleano   | True if the check is successful, False otherwise                                                             |
| status      |                          | number     | (SMTP only) Status code returned by the mail server (0 in case of an issue unrelated to the mail processing) |
| statusText  |                          | texto      | Status message returned by the mail server, or last error returned in the 4D error stack                     |
| errors      |                          | collection | 4D error stack (not returned if a mail server response is received)                                          |
|             | \[ ].errCode            | number     | 4D error code                                                                                                |
|             | \[ ].message            | texto      | Description of the 4D error                                                                                  |
|             | \[ ].componentSignature | texto      | Signature of the internal component which returned the error                                                 |


<!-- END REF -->



