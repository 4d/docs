---
id: Transporter
title: Classe Transporter
---

## Descrção

<!-- REF transporter.acceptUnsecureConnection.Desc -->
## .acceptUnsecureConnection

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>

<!-- REF #transporter.acceptUnsecureConnection.Syntax -->

**.acceptUnsecureConnection** : Boolean<!-- END REF -->

#### Descrção

The `.acceptUnsecureConnection` property contains <!-- REF #transporter.acceptUnsecureConnection.Summary -->**True** if 4D is allowed to establish an unencrypted connection<!-- END REF --> when encrypted connection is not possible.

Contém **False** se conexões cifradas não forem permitidas, neste caso um erro é retornado quando a conexão criptografada não for possível.

Estão disponíveis portos seguros:

- SMTP
  - 465: SMTPS
  - 587 ou 25: SMTP com atualização STARTTLS se for compat[ivel com o servidor.

- IMAP
  - 143: IMAP non-encrypted port
  - 993: IMAP com atualização STARTTLS se for compatível com o servidor

- POP3
  - 110: Porta não criptografada POP3
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

<!-- REF #transporter.authenticationMode.Syntax -->

**.authenticationMode** : Text<!-- END REF -->

#### Descrção

The `.authenticationMode` property contains <!-- REF #transporter.authenticationMode.Summary -->the authentication mode used to open the session on the mail server<!-- END REF -->.

Por padrão, o modo mais seguro suportado pelo servidor é usado.

Valores possíveis:

| Value    | Constantes                     | Comentário                               |
| -------- | ------------------------------ | ---------------------------------------- |
| CRAM-MD5 | `IMAP authentication CRAM MD5` | Autenticação usando o protocolo CRAM-MD5 |
| LOGIN    | `Autenticação do login/acesso` | Autenticação usando o protocolo LOGIN    |
| OAUTH2   | `Autenticação IMAP OAUTH2`     | Autenticação usando o protocolo OAuth2   |
| PLAIN    | `IMAP authentication plain`    | Autenticação usando o protocolo PLAIN    |

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

#### Descrção

A propriedade `.authenticationMode` contém o modo de autenticação utilizado para abrir a sessão no servidor de correio.

Por padrão, o modo mais seguro suportado pelo servidor é usado.

Valores possíveis:

| Value    | Constantes                   | Comentário                                         |
| -------- | ---------------------------- | -------------------------------------------------- |
| APOP     | `Autenticação POP3 APOP`     | Autenticação usando o protocolo APOP (POP3 apenas) |
| CRAM-MD5 | `Autenticação POP3 CRAM-MD5` | Autenticação usando o protocolo CRAM-MD5           |
| LOGIN    | `POP3 authentication login`  | Autenticação usando o protocolo LOGIN              |
| OAUTH2   | `POP3 authentication OAUTH2` | Autenticação usando o protocolo OAuth2             |
| PLAIN    | `Autenticação POP3 simples`  | Autenticação usando o protocolo PLAIN              |

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

#### Descrção

A propriedade `.authenticationMode` contém o modo de autenticação utilizado para abrir a sessão no servidor de correio.

Por padrão, o modo mais seguro suportado pelo servidor é usado.

Valores possíveis:

| Value    | Constantes                     | Comentário                               |
| -------- | ------------------------------ | ---------------------------------------- |
| CRAM-MD5 | `SMTP authentication CRAM MD5` | Autenticação usando o protocolo CRAM-MD5 |
| LOGIN    | `SMTP authentication login`    | Autenticação usando o protocolo LOGIN    |
| OAUTH2   | `SMTP authentication OAUTH2`   | Autenticação usando o protocolo OAuth2   |
| PLAIN    | `SMTP authentication plain`    | Autenticação usando o protocolo PLAIN    |

<!-- END REF -->

---

<!-- REF transporter.bodyCharset.Desc -->
## .bodyCharset

<details><summary>Histórico</summary>

| Versão | Mudanças               |
| ------ | ---------------------- |
| v18    | Suporte de UTF8 base64 |
| v17 R5 | Adicionado             |

</details>

<!-- REF #transporter.bodyCharset.Syntax -->

**.bodyCharset** : Text<!-- END REF -->

#### Descrção

The `.bodyCharset` property contains <!-- REF #transporter.bodyCharset.Summary -->  the charset and encoding used for the body part of the email<!-- END REF -->.

- subject,
- nome(s) de arquivo anexo,
- email name.

**Valores possíveis:**

| Constante                      | Value                          | Comentário                                                                                                             |
| ------------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP            | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII se for possível, japonês (ISO-2022-JP) & Quoted-printable se for possível, do contrário UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII se possível, japonês (ISO-2022-JP) e 7 bits se for possível, do contrário UTF-8 & Quoted-printable</li></ul>                                                                                              |
| mail mode ISO88591             | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                              |
| mail mode UTF8                 | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset*: US-ASCII se possível, caso contrário UTF-8 & Quoted-printable (**valor por defeito**) |
| modo de correio UTF8 na base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: US-ASCII se possível, senão UTF-8 & base64                                            |

<!-- END REF -->

---

<!-- REF transporter.connectionTimeOut.Desc -->
## .connectionTimeOut

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF #transporter.connectionTimeOut.Syntax -->

**.connectionTimeOut** : Integer<!-- END REF -->

#### Descrção

The `.connectionTimeOut` property contains <!-- REF #transporter.connectionTimeOut.Summary -->the maximum wait time (in seconds) allowed to establish a connection to the server<!-- END REF -->. By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.

<!-- END REF -->

---

<!-- REF transporter.headerCharset.Desc -->
## .headerCharset

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF #transporter.headerCharset.Syntax -->

**.headerCharset** : Text<!-- END REF -->

#### Descrção

The `.headerCharset` property contains <!-- REF #transporter.headerCharset.Summary --> the charset and encoding used for the email header<!-- END REF -->. The header includes the following parts of the email:

- subject,
- nome(s) de arquivo anexo,
- email name.

**Valores possíveis:**

| Constante                      | Value                          | Comentário                                                                  |
| ------------------------------ | ------------------------------ | --------------------------------------------------------------------------- |
| mail mode ISO2022JP            | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII se for possível, japonês (ISO-2022-JP) & Quoted-printable se for possível, do contrário UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII se possível, japonês (ISO-2022-JP) e 7 bits se for possível, do contrário UTF-8 & Quoted-printable</li></ul>                                                   |
| mail mode ISO88591             | ISO-8859-1                     | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                  |
| mail mode UTF8                 | US-ASCII_UTF8_QP             | texto                                                                       |
| modo de correio UTF8 na base64 | US-ASCII_UTF8_B64            | *headerCharset* & *bodyCharset*: US-ASCII se possível, senão UTF-8 & base64 |

<!-- END REF -->

---

<!-- REF transporter.host.Desc -->
## .host

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF #transporter.host.Syntax -->

**.host** : Text<!-- END REF -->

#### Descrção

The `.host` property contains <!-- REF #transporter.host.Summary -->the name or the IP address of the host server<!-- END REF -->. Used for mail transactions (SMTP, POP3, IMAP).

<!-- END REF -->

---

<!-- REF transporter.logFile.Desc -->
## .logFile

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF #transporter.logFile.Syntax -->

**.logFile** : Text<!-- END REF -->

#### Descrção

The `.logFile` property contains <!-- REF #transporter.logFile.Summary -->the path of the extended log file defined (if any) for the mail connection<!-- END REF -->. It can be relative (to the current Logs folder) or absolute.

Unlike regular log files (enabled via the `SET DATABASE PARAMETER` command), extended log files store MIME contents of all sent mails and do not have any size limit. For more information about extended log files, refer to:

- **SMTP connections** - [4DSMTPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **POP3 connections** - [4DPOP3Log.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **IMAP connections** - [4DIMAPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)

<!-- END REF -->

---

<!-- REF transporter.port.Desc -->
## .port

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |

</details>

<!-- REF #transporter.port.Syntax -->

**.port** : Integer<!-- END REF -->

#### Descrção

The `.port` property contains <!-- REF #transporter.port.Summary --> the port number used for mail transactions<!-- END REF -->. By default, if the *port* property has not been set in the *server* object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), the port used is:

- **SMTP** - 587
- **POP3** - 995
- **IMAP** - 993

<!-- END REF -->

---

<!-- REF transporter.sendTimeOut.Desc -->
## .sendTimeOut

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>

<!-- REF #transporter.sendTimeOut.Syntax -->

**.sendTimeOut** : Integer<!-- END REF -->

#### Descrção

The `.sendTimeOut` property contains <!-- REF #transporter.sendTimeOut.Summary --> the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs<!-- END REF -->. .

<!-- END REF -->

---

<!-- REF transporter.user.Desc -->
## .user

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |

</details>

<!-- REF #transporter.user.Syntax -->

**.user** : Text<!-- END REF -->

#### Descrção

The `.user` property contains <!-- REF #transporter.user.Summary --> the user name used for authentication on the mail server<!-- END REF -->.

<!-- END REF -->

---

<!-- REF transporter.checkConnection().Desc -->
## .checkConnection()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |

</details>

<!-- REF #transporter.checkConnection().Syntax -->

**.checkConnection()** : Object<!-- END REF -->

<!-- REF #transporter.checkConnection().Params -->
| Parameter  | Tipo   |    | Descrção                                                               |
| ---------- | ------ |:--:| ---------------------------------------------------------------------- |
| Resultados | Objeto | <- | Status of the transporter object connection|<!-- END REF -->

|

#### Descrção

The `.checkConnection()` function <!-- REF #transporter.checkConnection().Summary --> checks the connection using information stored in the transporter object<!-- END REF -->, recreates the connection if necessary, and returns the status. This function allows you to verify that the values provided by the user are valid and consistent.

#### Objeto devolvido

The function sends a request to the mail server and returns an object describing the mail status. This object can contain the following properties:

| Propriedade |                          | Tipo       | Descrção                                                                                                     |
| ----------- | ------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------ |
| success     |                          | boolean    | True if the check is successful, False otherwise                                                             |
| status      |                          | number     | (SMTP only) Status code returned by the mail server (0 in case of an issue unrelated to the mail processing) |
| statusText  |                          | text       | Status message returned by the mail server, or last error returned in the 4D error stack                     |
| errors      |                          | collection | 4D error stack (not returned if a mail server response is received)                                          |
|             | \[ ].errCode            | number     | 4D error code                                                                                                |
|             | \[ ].message            | text       | Description of the 4D error                                                                                  |
|             | \[ ].componentSignature | text       | Signature of the internal component which returned the error                                                 |

<!-- END REF -->
