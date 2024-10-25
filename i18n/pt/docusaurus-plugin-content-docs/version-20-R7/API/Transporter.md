---
id: Transporter
title: Classe Transporter
---

## Descrição

<!-- REF transporter.acceptUnsecureConnection.Desc -->

## .acceptUnsecureConnection

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

<!-- REF #transporter.acceptUnsecureConnection.Syntax -->**.acceptUnsecureConnection** : Boolean<!-- END REF -->

#### Descrição

The `.acceptUnsecureConnection` property contains <!-- REF #transporter.acceptUnsecureConnection.Summary -->**True** if 4D is allowed to establish an unencrypted connection<!-- END REF --> when encrypted connection is not possible.

It contains **False** if unencrypted connections are unallowed, in which case an error in returned when encrypted connection is not possible.

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

<!-- REF #transporter.authenticationMode.Syntax -->**.authenticationMode** : Text<!-- END REF -->

#### Descrição

The `.authenticationMode` property contains <!-- REF #transporter.authenticationMode.Summary -->the authentication mode used to open the session on the mail server<!-- END REF -->.

Por padrão, o modo mais seguro suportado pelo servidor é usado.

Valores possíveis:

| Valor    | Constantes                     | Comentário                               |
| -------- | ------------------------------ | ---------------------------------------- |
| CRAM-MD5 | `IMAP authentication CRAM MD5` | Autenticação usando o protocolo CRAM-MD5 |
| LOGIN    | `IMAP authentication login`    | Autenticação usando o protocolo LOGIN    |
| OAUTH2   | `Autenticação IMAP OAUTH2`     | Autenticação usando o protocolo OAuth2   |
| PLAIN    | `IMAP authentication plain`    | Autenticação usando o protocolo PLAIN    |

<!-- END REF -->

---

<!-- REF transporter.authenticationModePOP3.Desc -->

## .authenticationMode

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

**.authenticationMode** : Text

#### Descrição

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server.

Por padrão, o modo mais seguro suportado pelo servidor é usado.

Valores possíveis:

| Valor    | Constantes                     | Comentário                                                            |
| -------- | ------------------------------ | --------------------------------------------------------------------- |
| APOP     | `Autenticação POP3 APOP`       | Autenticação usando o protocolo APOP (POP3 apenas) |
| CRAM-MD5 | `POP3 authentication CRAM MD5` | Autenticação usando o protocolo CRAM-MD5                              |
| LOGIN    | `POP3 authentication login`    | Autenticação usando o protocolo LOGIN                                 |
| OAUTH2   | `POP3 authentication OAUTH2`   | Autenticação usando o protocolo OAuth2                                |
| PLAIN    | `Autenticação POP3 simples`    | Autenticação usando o protocolo PLAIN                                 |

<!-- END REF -->

---

<!-- REF transporter.authenticationModeSMTP.Desc -->

## .authenticationMode

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

**.authenticationMode** : Text

#### Descrição

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server.

Por padrão, o modo mais seguro suportado pelo servidor é usado.

Valores possíveis:

| Valor    | Constantes                     | Comentário                               |
| -------- | ------------------------------ | ---------------------------------------- |
| CRAM-MD5 | `SMTP authentication CRAM MD5` | Autenticação usando o protocolo CRAM-MD5 |
| LOGIN    | `SMTP authentication login`    | Autenticação usando o protocolo LOGIN    |
| OAUTH2   | `SMTP authentication OAUTH2`   | Autenticação usando o protocolo OAuth2   |
| PLAIN    | `SMTP authentication plain`    | Autenticação usando o protocolo PLAIN    |

<!-- END REF -->

---

<!-- REF transporter.bodyCharset.Desc -->

## .bodyCharset

<details><summary>História</summary>

| Release | Mudanças               |
| ------- | ---------------------- |
| 18      | Suporte de UTF8 base64 |
| 17 R5   | Adicionado             |

</details>

<!-- REF #transporter.bodyCharset.Syntax -->**.bodyCharset** : Text<!-- END REF -->

#### Descrição

The `.bodyCharset` property contains <!-- REF #transporter.bodyCharset.Summary -->  the charset and encoding used for the body part of the email<!-- END REF -->.

**Valores possíveis:**

| Parâmetros                     | Valor                                                                                       | Comentário                                                                                                                                                                                                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mail mode ISO2022JP            | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591             | ISO-8859-1                                                                                  | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                                                     |
| mail mode UTF8                 | US-ASCII_UTF8_QP                                  | *headerCharset* & *bodyCharset*: US-ASCII se possível, caso contrário UTF-8 & Quoted-printable (**valor padrão**)                                                                                   |
| modo de correio UTF8 na base64 | US-ASCII_UTF8_B64                                 | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64                                                                                                                                        |

<!-- END REF -->

---

<!-- REF transporter.connectionTimeOut.Desc -->

## .connectionTimeOut

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #transporter.connectionTimeOut.Syntax -->**.connectionTimeOut** : Integer<!-- END REF -->

#### Descrição

The `.connectionTimeOut` property contains <!-- REF #transporter.connectionTimeOut.Summary -->the maximum wait time (in seconds) allowed to establish a connection to the server<!-- END REF -->. By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.

<!-- END REF -->

---

<!-- REF transporter.headerCharset.Desc -->

## .headerCharset

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #transporter.headerCharset.Syntax -->**.headerCharset** : Text<!-- END REF -->

#### Descrição

The `.headerCharset` property contains <!-- REF #transporter.headerCharset.Summary --> the charset and encoding used for the email header<!-- END REF -->. O cabeçalho inclui as seguintes partes do e-mail:

- assunto,
- nome(s) de arquivo anexo,
- email name.

**Valores possíveis:**

| Parâmetros                     | Valor                                                                                       | Comentário                                                                                                                                                                                                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mail mode ISO2022JP            | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591             | ISO-8859-1                                                                                  | <ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                                                     |
| mail mode UTF8                 | US-ASCII_UTF8_QP                                  | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (default value)                                                                                           |
| modo de correio UTF8 na base64 | US-ASCII_UTF8_B64                                 | *headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64                                                                                                                                        |

<!-- END REF -->

---

<!-- REF transporter.host.Desc -->

## .host

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #transporter.host.Syntax -->**.host** : Text<!-- END REF -->

#### Descrição

The `.host` property contains <!-- REF #transporter.host.Summary -->the name or the IP address of the host server<!-- END REF -->. Utilizado para transacções postais (SMTP, POP3, IMAP).

<!-- END REF -->

---

<!-- REF transporter.logFile.Desc -->

## .logFile

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R5   | Adicionado |

</details>

<!-- REF #transporter.logFile.Syntax -->**.logFile** : Text<!-- END REF -->

#### Descrição

The `.logFile` property contains <!-- REF #transporter.logFile.Summary -->the path of the extended log file defined (if any) for the mail connection<!-- END REF -->. Pode ser relativo (à pasta atual de Logs) ou absoluto.

Unlike regular log files (enabled via the `SET DATABASE PARAMETER` command), extended log files store MIME contents of all sent mails and do not have any size limit. Para mais informações sobre arquivos de registo estendidos, consultar:

- **Conexões SMSTP** - [4DSMTPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **Conexões POP3** - [4DPOP3Log.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **Conexões IMAP** - [4DIMAPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)

<!-- END REF -->

---

<!-- REF transporter.port.Desc -->

## .port

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

<!-- REF #transporter.port.Syntax -->**.port** : Integer<!-- END REF -->

#### Descrição

The `.port` property contains <!-- REF #transporter.port.Summary --> the port number used for mail transactions<!-- END REF -->. By default, if the *port* property has not been set in the *server* object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), the port used is:

- **SMTP** - 587
- **POP3** - 995
- **IMAP** - 993

<!-- END REF -->

---

<!-- REF transporter.sendTimeOut.Desc -->

## .sendTimeOut

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

<!-- REF #transporter.sendTimeOut.Syntax -->**.sendTimeOut** : Integer<!-- END REF -->

#### Descrição

The `.sendTimeOut` property contains <!-- REF #transporter.sendTimeOut.Summary --> the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs<!-- END REF -->. By default, if the `.sendTimeOut` property has not been set in the `server` object, the value 100 is used.

<!-- END REF -->

---

<!-- REF transporter.user.Desc -->

## .user

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

<!-- REF #transporter.user.Syntax -->**.user** : Text<!-- END REF -->

#### Descrição

The `.user` property contains <!-- REF #transporter.user.Summary --> the user name used for authentication on the mail server<!-- END REF -->.

<!-- END REF -->

---

<!-- REF transporter.checkConnection().Desc -->

## .checkConnection()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

<!-- REF #transporter.checkConnection().Syntax -->**.checkConnection()** : Object<!-- END REF -->

<!-- REF #transporter.checkConnection().Params -->

| Parâmetro  | Tipo   |                             | Descrição                                  |
| ---------- | ------ | :-------------------------: | ------------------------------------------ |
| Resultados | Object | <- | Estado da ligação do objecto transportador |

<!-- END REF -->

#### Descrição

The `.checkConnection()` function <!-- REF #transporter.checkConnection().Summary --> checks the connection using information stored in the transporter object<!-- END REF -->, recreates the connection if necessary, and returns the status. Esta função permite verificar se os valores fornecidos pelo utilizador são válidos e consistentes.

#### Objeto devolvido

A função envia um pedido para o servidor de correio e devolve um objecto descrevendo o estado do correio. Este objeto pode conter as seguintes propriedades:

| Propriedade |                                                                                              | Tipo       | Descrição                                                                                                                                                                         |
| ----------- | -------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success     |                                                                                              | boolean    | Verdadeiro se a verificação for bem sucedida, Falso de outra forma                                                                                                                |
| status      |                                                                                              | number     | (apenas SMTP) Código de estado devolvido pelo servidor de correio (0 no caso de um problema não relacionado com o processamento de correio) |
| statusText  |                                                                                              | text       | Mensagem de estado devolvida pelo servidor de correio, ou último erro devolvido na pilha de erros 4D                                                                              |
| errors      |                                                                                              | collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor de correio)                                                                          |
|             | \[ ].errCode            | number     | Código de erro 4D                                                                                                                                                                 |
|             | \[ ].message            | text       | Descrição do erro 4D                                                                                                                                                              |
|             | \[ ].componentSignature | text       | Assinatura da componente interna que devolveu o erro                                                                                                                              |

<!-- END REF -->
