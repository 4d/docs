---
id: imapTransporterClass
title: IMAPTransporter
---

The `IMAPTransporter` class allows you to retrieve messages from a IMAP email server.


### IMAP Transporter object

IMAP Transporter objects are instantiated with the [IMAP New transporter](#imap-new-transporter) command. They provide the following properties and functions:

|                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.acceptUnsecureConnection** : Boolean](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if 4D is allowed to establish an unencrypted connection|
| [**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object](#addflags)<p>&nbsp;&nbsp;&nbsp;&nbsp;adds flags to the `msgIDs` for the specified `keywords`|
| [**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object](#append)<p>&nbsp;&nbsp;&nbsp;&nbsp;appends a `mailObj` to the `destinationBox`|
| [**.authenticationMode** : Text](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;the authentication mode used to open the session on the mail server|
| [**.checkConnection()** : Object](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp; checks the connection using information stored in the transporter object|
| [**.checkConnectionDelay** : Integer](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;the maximum time (in seconds) allowed prior to checking the connection to the server|
| [**.connectionTimeOut** : Integer](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;the maximum wait time (in seconds) allowed to establish a connection to the server|
| [**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object](#copy)<p>&nbsp;&nbsp;&nbsp;&nbsp;copies the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server|
| [**.delete**( *msgsIDs* : Collection ) : Object<br>**.delete**( *allMsgs* : Integer ) : Object](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;removes all messages with the "deleted" flag from the IMAP mail server.|
| [**.expunge()** : Object](#expunge)<p>&nbsp;&nbsp;&nbsp;&nbsp;removes all messages with the "deleted" flag from the IMAP mail server.|
| [**.getBoxInfo**( { *name* : Text }) : Object](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a `boxInfo` object corresponding to the mailbox *name*|
| [**.getBoxList()** : Collection](#getboxlist)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a collection of mailboxes describing all of the available mailboxes|
| [**.getDelimiter()** : Text](#getdelimiter)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the character used to delimit levels of hierarchy in the mailbox name|
| [**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the `Email` object corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`|
| [**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object](#getmails)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns an object containing a collection of `Email` objects|
| [**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`|
| [**.host** : Text](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name or the IP address of the host server|
| [**.logFile** : Text](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the extended log file defined (if any) for the mail connection|
| [**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object](#move)<p>&nbsp;&nbsp;&nbsp;&nbsp;moves the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server|
| [**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection](#numToID)<p>&nbsp;&nbsp;&nbsp;&nbsp;converts the sequence numbers to IMAP unique IDs for the messages in the sequential range designated by *startMsg* and *endMsg*|
| [**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object](#removeflags)<p>&nbsp;&nbsp;&nbsp;&nbsp;removes flags from the `msgIDs` for the specified `keywords`|
| [**.port** : Integer](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp; the port number used for mail transactions|
| [**.searchMails**( *searchCriteria* : Text ) : Collection](#selectbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;searches for messages that match the given *searchCriteria* in the current mailbox|
| [**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object](#selectbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;selects the *name* mailbox as the current mailbox|
| [**.user** : Text](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp; the user name used for authentication on the mail server|



## IMAP New transporter

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter
| Parámetros | Tipo               |    | Descripción                                         |
| ---------- | ------------------ |:--:| --------------------------------------------------- |
| server     | Objeto             | -> | Mail server information                             |
| Resultado  | 4D.IMAPTransporter | <- | [IMAP transporter object](#imap-transporter-object) |


#### Descripción

The `IMAP New transporter` command configures a new IMAP connection according to the *server* parameter and returns a new *transporter* object. The returned transporter object will then usually be used to receive emails.

In the *server* parameter, pass an object containing the following properties:

| *server*                                                                                                                                                                                                                                                                                                                                                           | Default value (if omitted)                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| [**.acceptUnsecureConnection** : Boolean](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if 4D is allowed to establish an unencrypted connection| False                                                               |
| .**accessTokenOAuth2**: Text<p>Text string representing OAuth 2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[IMAP transporter](#imap-transporter-object)* object. | ninguno                                                             |
| [**.authenticationMode** : Text](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;the authentication mode used to open the session on the mail server| the most secure authentication mode supported by the server is used |
| [**.checkConnectionDelay** : Integer](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;the maximum time (in seconds) allowed prior to checking the connection to the server| 300                                                                 |
| [**.connectionTimeOut** : Integer](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;the maximum wait time (in seconds) allowed to establish a connection to the server| 30                                                                  |
| [**.host** : Text](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name or the IP address of the host server| *mandatory*                                                         |
| [**.logFile** : Text](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the extended log file defined (if any) for the mail connection| ninguno                                                             |
| .**password** : Text<p>User password for authentication on the server. Not returned in *[IMAP transporter](#imap-transporter-object)* object.                                                                                                                                                                                              | ninguno                                                             |
| [**.port** : Integer](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp; the port number used for mail transactions| 993                                                                 |
| [**.user** : Text](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp; the user name used for authentication on the mail server| ninguno                                                             |
> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.


#### Resultado

The function returns an [**IMAP transporter object**](#imap-transporter-object). All returned properties are **read-only**.
> The IMAP connection is automatically closed when the transporter object is destroyed.

#### Ejemplo

```4d
 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" //log to save in the Logs folder

 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("An error occurred: "+$status.statusText)
 End if
```


## 4D.IMAPTransporter.new()


**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter
| Parámetros | Tipo               |    | Descripción                                         |
| ---------- | ------------------ |:--:| --------------------------------------------------- |
| server     | Objeto             | -> | Mail server information                             |
| Resultado  | 4D.IMAPTransporter | <- | [IMAP transporter object](#imap-transporter-object) |

#### Descripción

The `4D.IMAPTransporter.new()` function creates and returns a new object of the `4D.IMAPTransporter` type. It is identical to the [`IMAP New transporter`](#imap-new-transporter) command (shortcut).
 
## .acceptUnsecureConnection

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

**.acceptUnsecureConnection** : Boolean

#### Descripción

The `.acceptUnsecureConnection` property contains **True** if 4D is allowed to establish an unencrypted connection when encrypted connection is not possible.

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
    - 995: POP3 with STARTTLS upgrade if supported by the server.



## .addFlags()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object
| Parámetros | Tipo       |    | Descripción                                                                                                                                              |
| ---------- | ---------- |:--:| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection | -> | Collection of strings: Message unique IDs (text)<br>Text: Unique ID of a message<br>Longint (IMAP all): All messages in the selected mailbox |
| keywords   | Objeto     | -> | Keyword flags to add                                                                                                                                     |
| Resultado  | Objeto     | <- | Status of the addFlags operation                                                                                                                         |


#### Descripción

The `.addFlags()` function adds flags to the `msgIDs` for the specified `keywords`.

In the `msgIDs` parameter, you can pass either:

*   a *collection* containing the unique IDs of specific messages or
*   the unique ID (*text*) of a single message or
*   the following constant (*longint*) for all messages in the selected mailbox:

    | Constante | Valor | Comentario                                  |
    | --------- | ----- | ------------------------------------------- |
    | IMAP all  | 1     | Select all messages in the selected mailbox |

The `keywords` parameter lets you pass an object with keyword values for specific flags to add to `msgIDs`. You can pass any of the following keywords:

| Parámetros | Tipo     | Descripción                                    |
| ---------- | -------- | ---------------------------------------------- |
| $draft     | Booleano | True to add the "draft" flag to the message    |
| $seen      | Booleano | True to add the "seen" flag to the message     |
| $flagged   | Booleano | True to add the "flagged" flag to the message  |
| $answered  | Booleano | True to add the "answered" flag to the message |
| $deleted   | Booleano | True to add the "deleted" flag to the message  |
> * Los valores falsos se ignoran.
> * The interpretation of keyword flags may vary per mail client.


**Returned object**

The function returns an object describing the IMAP status:

| Propiedad  |                         | Tipo       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True if the operation is successful, False otherwise                                     |
| statusText |                         | Texto      | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Número     | 4D error code                                                                            |
|            | \[].message            | Texto      | Description of the 4D error                                                              |
|            | \[].componentSignature | Texto      | Signature of the internal component which returned the error                             |


#### Ejemplo

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Create transporter
$transporter:=IMAP New transporter($options)

// Select mailbox
$boxInfo:=$transporter.selectBox("INBOX")

// Mark all messages from INBOX as read/seen
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.addFlags(IMAP all;$flags)
```



## .append()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object
| Parámetros     | Tipo   |    | Descripción                     |
| -------------- | ------ |:--:| ------------------------------- |
| mailObj        | Objeto | -> | Email object                    |
| destinationBox | Texto  | -> | Mailbox to receive Email object |
| options        | Objeto | -> | Object containing charset info  |
| Resultado      | Objeto | <- | Status of the delete operation  |


#### Descripción

The `.append()` function appends a `mailObj` to the `destinationBox`.

In the `mailObj` parameter, pass an Email object. For a comprehensive description of mail properties, see [Email object](emails.html#email-object).  The `.append()` function supports keyword tags in the Email object's `keywords` attribute.

The optional `destinationBox` parameter lets you pass the name of a mailbox where the `mailObj` will be appended. If omitted, the current mailbox is used.

In the optional `options` parameter, you can pass an object to define the charset and encoding for specific parts of the email. Available properties:

| Propiedad     | Tipo  | Descripción                                                                                                                                                                    |
| ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| headerCharset | Texto | Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s). Possible values: See possible charsets table below |
| bodyCharset   | Texto | Charset and encoding used for the html and text body contents of the email. Possible values: See possible charsets table below                                                 |

Possible charsets:

| Constante                | Valor                          | Comentario                                                                                                |
| ------------------------ | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>                                                                                 |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                 |
| mail mode UTF8           | US-ASCII_UTF8_QP             | headerCharset & bodyCharset: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | headerCharset & bodyCharset: US-ASCII if possible, otherwise UTF-8 & base64                               |


**Returned object**

The function returns an object describing the IMAP status:

| Propiedad  |                         | Tipo       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True if the operation is successful, False otherwise                                     |
| statusText |                         | Texto      | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Número     | 4D error code                                                                            |
|            | \[].message            | Texto      | Description of the 4D error                                                              |
|            | \[].componentSignature | Texto      | Signature of the internal component which returned the error                             |


#### Ejemplo

To save an email in the Drafts mailbox:

```4d
var $settings; $status; $msg; $imap: Object

$settings:=New object("host"; "domain.com"; "user"; "xxxx"; "password"; "xxxx"; "port"; 993)

$imap:=IMAP New transporter($settings)

$msg:=New object
$msg.from:="xxxx@domain.com"
$msg.subject:="Lorem Ipsum"
$msg.textBody:="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
$msg.keywords:=New object
$msg.keywords["$seen"]:=True//flag the message as read
$msg.keywords["$draft"]:=True//flag the message as a draft

$status:=$imap.append($msg; "Drafts")
```










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

Possible values are:

| Valor    | Constantes                     | Comentario                             |
| -------- | ------------------------------ | -------------------------------------- |
| CRAM-MD5 | `IMAP authentication CRAM MD5` | Authentication using CRAM-MD5 protocol |
| LOGIN    | `IMAP authentication login`    | Authentication using LOGIN protocol    |
| OAUTH2   | `IMAP authentication OAUTH2`   | Authentication using OAuth2 protocol   |
| PLAIN    | `IMAP authentication plain`    | Authentication using PLAIN protocol    |







## .checkConnection()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

**.checkConnection()** : Object
| Parámetros | Tipo   |    | Descripción                                 |
| ---------- | ------ |:--:| ------------------------------------------- |
| Resultado  | Objeto | <- | Status of the transporter object connection |


#### Descripción

The `.checkConnection()` function  checks the connection using information stored in the transporter object, recreates the connection if necessary, and returns the status. This function allows you to verify that the values provided by the user are valid and consistent.


#### Returned object

The function sends a request to the mail server and returns an object describing the mail status. This object can contain the following properties:

| Propiedad  |                          | Tipo      | Descripción                                                                                                  |
| ---------- | ------------------------ | --------- | ------------------------------------------------------------------------------------------------------------ |
| success    |                          | booleano  | True if the check is successful, False otherwise                                                             |
| status     |                          | number    | (SMTP only) Status code returned by the mail server (0 in case of an issue unrelated to the mail processing) |
| statusText |                          | texto     | Status message returned by the mail server, or last error returned in the 4D error stack                     |
| errors     |                          | colección | 4D error stack (not returned if a mail server response is received)                                          |
|            | \[ ].errCode            | number    | 4D error code                                                                                                |
|            | \[ ].message            | texto     | Description of the 4D error                                                                                  |
|            | \[ ].componentSignature | texto     | Signature of the internal component which returned the error                                                 |







## .checkConnectionDelay

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

**.checkConnectionDelay** : Integer

#### Descripción

The `.checkConnectionDelay` property contains the maximum time (in seconds) allowed prior to checking the connection to the server.  If this time is exceeded between two method calls, the connection to the server will be checked. By default, if the property has not been set in the *server* object, the value is 300.
> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless. 



## .connectionTimeOut

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

**.connectionTimeOut** : Integer


#### Descripción

The `.connectionTimeOut` property contains the maximum wait time (in seconds) allowed to establish a connection to the server. By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.





## .copy()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object
| Parámetros     | Tipo       |    | Descripción                                      |
| -------------- | ---------- |:--:| ------------------------------------------------ |
| msgsIDs        | Collection | -> | Collection of message unique IDs (strings)       |
| allMsgs        | Integer    | -> | `IMAP all`: All messages in the selected mailbox |
| destinationBox | Texto      | -> | Mailbox to receive copied messages               |
| Resultado      | Objeto     | <- | Status of the copy operation                     |


#### Descripción

The `.copy()` function copies the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server.

You can pass:

- in the *msgsIDs* parameter, a collection containing the unique IDs of the specific messages to copy, or
- in the *allMsgs* parameter, the `IMAP all` constant (integer) to copy all messages in the selected mailbox.

The *destinationBox* parameter allows you to pass a text value with the name of the mailbox where the copies of messages will be placed.


**Returned object**

The function returns an object describing the IMAP status:

| Propiedad  |                         | Tipo       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True if the operation is successful, False otherwise                                     |
| statusText |                         | Texto      | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Número     | 4D error code                                                                            |
|            | \[].message            | Texto      | Description of the 4D error                                                              |
|            | \[].componentSignature | Texto      | Signature of the internal component which returned the error                             |




#### Ejemplo 1

To copy a selection of messages:


```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // copy found messages to the "documents" mailbox
 $status:=$transporter.copy($mailIds;"documents")
```

#### Ejemplo 2

To copy all messages in the current mailbox:


```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  // copy all messages to the "documents" mailbox
 $status:=$transporter.copy(IMAP all;"documents")
```




## .delete()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

**.delete**( *msgsIDs* : Collection ) : Object<br>**.delete**( *allMsgs* : Integer ) : Object
| Parámetros | Tipo       |    | Descripción                                      |
| ---------- | ---------- |:--:| ------------------------------------------------ |
| msgsIDs    | Collection | -> | Collection of message unique IDs (strings)       |
| allMsgs    | Integer    | -> | `IMAP all`: All messages in the selected mailbox |
| Resultado  | Objeto     | <- | Status of the delete operation                   |


#### Descripción

The `.delete()` function sets the "deleted" flag for the messages defined in `msgsIDs` or `allMsgs`.

You can pass:

- in the `msgsIDs` parameter, a collection containing the unique IDs of the specific messages to delete, or
- in the `allMsgs` parameter, the `IMAP all` constant (integer) to delete all messages in the selected mailbox.

Executing this function does not actually remove messages. Messages with the "delete" flag can still be found by the [.searchMails()](#searchmails) function. Flagged messages are deleted from the IMAP server with the [`.expunge()`](#expunge) function or by selecting another mailbox or when the [transporter object](#imap-transporter-object) (created with [IMAP New transporter](#imap-new-transporter)) is destroyed.


**Returned object**

The function returns an object describing the IMAP status:

| Propiedad  |                         | Tipo       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True if the operation is successful, False otherwise                                     |
| statusText |                         | Texto      | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Número     | 4D error code                                                                            |
|            | \[].message            | Texto      | Description of the 4D error                                                              |
|            | \[].componentSignature | Texto      | Signature of the internal component which returned the error                             |




#### Ejemplo 1

To delete a selection of messages:


```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"Reports\"")

  // Delete selected messages
 $status:=$transporter.delete($mailIds)
```

#### Ejemplo 2

To delete all messages in the current mailbox:


```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Junk Email")

  // delete all messages in the current mailbox
 $status:=$transporter.delete(IMAP all)
```



## .expunge()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

**.expunge()** : Object
| Parámetros | Tipo   |    | Descripción                     |
| ---------- | ------ |:--:| ------------------------------- |
| Resultado  | Objeto | <- | Status of the expunge operation |

#### Descripción

The `.expunge()` function removes all messages with the "deleted" flag from the IMAP mail server. The "deleted" flag can be set with the [`.delete()`](#delete) or [`.addFlags()`](#addflags) methods.

**Returned object**

The function returns an object describing the IMAP status:

| Propiedad  |                         | Tipo       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True if the operation is successful, False otherwise                                     |
| statusText |                         | Texto      | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Número     | 4D error code                                                                            |
|            | \[].message            | Texto      | Description of the 4D error                                                              |
|            | \[].componentSignature | Texto      | Signature of the internal component which returned the error                             |


#### Ejemplo

```4d
var $options;$transporter;$boxInfo;$status : Object
var $ids : Collection

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Create transporter
$transporter:=IMAP New transporter($options)

// Select mailbox
$boxInfo:=$transporter.selectBox("INBOX")

// Find and delete all seen messages in INBOX
$ids:=$transporter.searchMails("SEEN")
$status:=$transporter.delete($ids)

// Purge all messages flagged as deleted
$status:=$transporter.expunge()
```



## .getBoxInfo()

<details><summary>Histórico</summary>
| Versión | Modificaciones   |
| ------- | ---------------- |
| v18 R5  | name is optional |
| v18 R4  | Añadidos         |
</details>

**.getBoxInfo**( { *name* : Text }) : Object
| Parámetros | Tipo   |    | Descripción         |
| ---------- | ------ |:--:| ------------------- |
| name       | Texto  | -> | Name of the mailbox |
| Resultado  | Objeto | <- | boxInfo object      |


#### Descripción

The `.getBoxInfo()` function returns a `boxInfo` object corresponding to the mailbox *name*. This function returns the same information as [`.selectBox()`](#selectbox) without changing the current mailbox.

In the optional *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.


**Returned object**

The `boxInfo` object returned contains the following properties:

| Propiedad  | Tipo   | Descripción                                                         |
| ---------- | ------ | ------------------------------------------------------------------- |
| name       | texto  | Name of the mailbox                                                 |
| mailCount  | number | Number of messages in the mailbox                                   |
| mailRecent | number | Number of messages with the "recent" flag (indicating new messages) |



#### Ejemplo

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $info:=$transporter.getBoxInfo("INBOX")
 ALERT("INBOX contains "+String($info.mailRecent)+" recent emails.")
```





## .getBoxList()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

**.getBoxList()** : Collection
| Parámetros | Tipo       |    | Descripción                   |
| ---------- | ---------- |:--:| ----------------------------- |
| Resultado  | Collection | <- | Collection of mailbox objects |


#### Descripción

The `.getBoxList()` function returns a collection of mailboxes describing all of the available mailboxes. This function allows you to locally manage the list of messages located on the IMAP mail server.

#### Resultado

Each object of the returned collection contains the following properties:

| Propiedad        | Tipo     | Descripción                                                                                                          |
| ---------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| \[].name        | texto    | Name of the mailbox                                                                                                  |
| \[].selectable  | booleano | Indicates whether or not the access rights allow the mailbox to be selected: <ul><li>true - the mailbox can be selected</li><li>false - the mailbox can not be selected</li></ul>               |
| \[].inferior    | booleano | Indicates whether or not the access rights allow creating a lower hierachy in the mailbox: <ul><li>true - a lower level can be created</li><li>false - a lower level can not be created</li></ul> |
| \[].interesting | booleano | Indicates if the mailbox has been marked "interesting" by the server: <ul><li>true - The mailbox has been marked "interesting" by the server. For example, it may contain new messages.</li><li>false - The mailbox has not been marked "interesting" by the server.</li></ul>                      |


If the account does not contain any mailboxes, an empty collection is returned.
> * If there is no open connection, `.getBoxList()` will open a connection.
> * If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the `.checkConnection( )` function is automatically called.


#### Ejemplo


```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("New emails are available in the box: "+$split[$split.length-1])
    End if
 End for each
```




## .getDelimiter()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

**.getDelimiter()** : Text
| Parámetros | Tipo  |    | Descripción                   |
| ---------- | ----- |:--:| ----------------------------- |
| Resultado  | Texto | <- | Hierarchy delimiter character |


#### Descripción

The `.getDelimiter()` function returns the character used to delimit levels of hierarchy in the mailbox name.

The delimiter is a character which can be used to:

*   create lower level (inferior) mailboxes
*   search higher or lower within the mailbox hierarchy


#### Resultado

Mailbox name delimiter character.
> * If there is no open connection, `.getDelimiter()` will open a connection.
> * If the connection has not been used since the [designated connection delay](#checkconnectiondelay), the [`.checkConnection()`](#checkconnection) function is automatically called.



#### Ejemplo


```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("New emails are available in the box: "+$split[$split.length-1])
    End if
 End for each
```




## .getMail()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object
| Parámetros | Tipo    |    | Descripción                                      |
| ---------- | ------- |:--:| ------------------------------------------------ |
| msgNumber  | Integer | -> | Sequence number of the message                   |
| msgID      | Texto   | -> | Unique ID of the message                         |
| options    | Objeto  | -> | Message handling instructions                    |
| Resultado  | Objeto  | <- | [Email object](emailObjectClass.md#email-object) |


#### Descripción

The `.getMail()` function returns the `Email` object corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`. This function allows you to locally handle the email contents.

In the first parameter, you can pass either:

*   *msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or
*   *msgID*, a *text* value indicating the unique ID of the message to retrieve.

The optional *options* parameter allows you pass an object defining additional instructions for handling the message. The following properties are available:

| Propiedad  | Tipo     | Descripción                                                                                                                 |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | booleano | If True, the message is marked as "seen" in the mailbox. If False, the message is not marked as "seen". Default value: True |
| withBody   | booleano | Pass True to return the body of the message. If False, only the message header is returned. Default value: True             |
> * The function generates an error and returns **Null** if *msgID* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
> * If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)`.


#### Resultado

`.getMail()` returns an [`Email` object](emailObjectClass.md#email-object) with the following specific IMAP properties: *id*, *receivedAt*, and *size*.

#### Ejemplo

You want to get the message with ID = 1:

```4d
 var $server : Object
 var $info; $mail; $boxInfo : Variant
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get Email object with ID 1
 $mail:=$transporter.getMail(1)
```




## .getMails()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object
| Parámetros | Tipo       |    | Descripción                                            |
| ---------- | ---------- |:--:| ------------------------------------------------------ |
| ids        | Collection | -> | Collection of message ID                               |
| startMsg   | Integer    | -> | Sequence number of the first message                   |
| endMsg     | Integer    | -> | Sequence number of the last message                    |
| options    | Objeto     | -> | Message handling instructions                          |
| Resultado  | Objeto     | <- | Object containing:<br><ul><li>a collection of [Email objects](emailObjectClass.md#email-object) and</li><li>a collection of IDs or numbers for missing messages, if any</li></ul> |


#### Descripción

The `.getMails()` function returns an object containing a collection of `Email` objects.

**Primera sintaxis:**

***.getMails( ids { ; options } ) -> result***

The first syntax allows you to retrieve messages based on their IDs.

In the *ids* parameter, pass a collection of IDs for the messages to return. You can get the IDs with [`.getMail()`](#getmail).

The optional *options* parameter allows you to define the parts of the messages to be returned. See the **Options** table below for a description of the available properties.

**Segunda sintaxis:**

 ***.getMails( startMsg ; endMsg { ; options } ) -> result***

The second syntax allows you to retrieve messages based on a sequential range. The values passed represent the position of the messages in the mailbox.

In the *startMsg* parameter, pass an *integer* value corresponding to the number of the first message in a sequential range. If you pass a negative number (*startMsg* <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the *endMsg* parameter, pass an *integer* value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (*endMsg* <= 0), the last message of the mailbox will be used as the end of the sequence.

The optional *options* parameter allows you to define the parts of the messages to be returned.

**Opciones**

| Propiedad  | Tipo     | Descripción                                                                                                                                     |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | Booleano | Si True, los mensajes especificados se marcan como "vistos" en el buzón. Si False, los mensajes no se marcan como "vistos". Default value: True |
| withBody   | Booleano | Pass True to return the body of the specified messages. If False, only the message headers are returned. Default value: True                    |
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
> * If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).


#### Resultado

`.getMails()` returns an object containing the following collections:


| Propiedad | Tipo       | Descripción                                                                                                                        |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| lista     | Collection | Collection of [`Email` objects](emailObjectClass.md#email-object). If no Email objects are found, an empty collection is returned. |
| notFound  | Collection | Collection of:<br><ul><li>first syntax - previously passed message IDs that do not exist</li><li>second syntax - sequence numbers of messages between startMsg and endMsg that do not exist</li></ul>An empty collection is returned if all messages are found.                       |


#### Ejemplo

You want to retrieve the 20 most recent emails without changing their "seen" status:

```4d
 var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter 

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("INBOX")

  If($boxInfo.mailCount>0)
        // retrieve the headers of the last 20 messages without marking them as read
    $result:=$transporter.getMails($boxInfo.mailCount-20;$boxInfo.mailCount;\
        New object("withBody";False;"updateSeen";False))
    For each($mail;$result.list)
        // ...
    End for each
 End if
```




## .getMIMEAsBlob()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob

| Parámetros | Tipo     |    | Descripción                                                                                   |
| ---------- | -------- |:--:| --------------------------------------------------------------------------------------------- |
| msgNumber  | Integer  | -> | Sequence number of the message                                                                |
| msgID      | Texto    | -> | Unique ID of the message                                                                      |
| updateSeen | Booleano | -> | If True, the message is marked "seen" in the mailbox. If False the message is left untouched. |
| Resultado  | BLOB     | <- | Blob of the MIME string returned from the mail server                                         |



#### Descripción

The `.getMIMEAsBlob()` function returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`.

In the first parameter, you can pass either:

*   *msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or
*   *msgID*, a *text* value indicating the unique ID of the message to retrieve.

The optional *updateSeen* parameter allows you to specify if the message is marked as "seen" in the mailbox. You can pass:

*   **True** - to mark the message as "seen" (indicating the message has been read)
*   **False** - para dejar intacto el estado "visto" del mensaje
> * The function returns an empty BLOB if *msgNumber* or msgID* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
> * If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox()`.


#### Resultado

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](emailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.


#### Ejemplo


```4d
 var $server : Object
 var $boxInfo : Variant
 var $blob : Blob
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com"
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get BLOB
 $blob:=$transporter.getMIMEAsBlob(1)
```




## .host

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

**.host** : Text

#### Descripción

The `.host` property contains the name or the IP address of the host server. Used for mail transactions (SMTP, POP3, IMAP).






## .logFile

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>

**.logFile** : Text

#### Descripción

The `.logFile` property contains the path of the extended log file defined (if any) for the mail connection. It can be relative (to the current Logs folder) or absolute.

Unlike regular log files (enabled via the `SET DATABASE PARAMETER` command), extended log files store MIME contents of all sent mails and do not have any size limit. For more information about extended log files, refer to:

*   **SMTP connections** - [4DSMTPLog.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   **POP3 connections** - [4DPOP3Log.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   **IMAP connections** - [4DIMAPLog.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)








## .move()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object
| Parámetros     | Tipo       |    | Descripción                                      |
| -------------- | ---------- |:--:| ------------------------------------------------ |
| msgsIDs        | Collection | -> | Collection of message unique IDs (strings)       |
| allMsgs        | Integer    | -> | `IMAP all`: All messages in the selected mailbox |
| destinationBox | Texto      | -> | Mailbox to receive moved messages                |
| Resultado      | Objeto     | <- | Status of the move operation                     |


#### Descripción

The `.move()` function moves the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server.

You can pass:

- in the *msgsIDs* parameter, a collection containing the unique IDs of the specific messages to move, or
- in the *allMsgs* parameter, the `IMAP all` constant (integer) to move all messages in the selected mailbox.

The *destinationBox* parameter allows you to pass a text value with the name of the mailbox where the messages will be moved.

> This function is only supported by IMAP servers compliant with RFC [8474](https://tools.ietf.org/html/rfc8474).


**Returned object**

The function returns an object describing the IMAP status:

| Propiedad  |                         | Tipo       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True if the operation is successful, False otherwise                                     |
| statusText |                         | Texto      | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Número     | 4D error code                                                                            |
|            | \[].message            | Texto      | Description of the 4D error                                                              |
|            | \[].componentSignature | Texto      | Signature of the internal component which returned the error                             |




#### Ejemplo 1

To move a selection of messages:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // Move found messages from the current mailbox to the "documents" mailbox
 $status:=$transporter.move($mailIds;"documents")
```

#### Ejemplo 2

To move all messages in the current mailbox:


```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  // move all messages in the current mailbox to the "documents" mailbox
 $status:=$transporter.move(IMAP all;"documents")
```




## .numToID()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection
| Parámetros | Tipo       |    | Descripción                          |
| ---------- | ---------- |:--:| ------------------------------------ |
| startMsg   | Integer    | -> | Sequence number of the first message |
| endMsg     | Integer    | -> | Sequence number of the last message  |
| Resultado  | Collection | <- | Collection of unique IDs             |


#### Descripción

The `.numToID()` function converts the sequence numbers to IMAP unique IDs for the messages in the sequential range designated by *startMsg* and *endMsg* in the currently selected mailbox.

In the *startMsg* parameter, pass an integer value corresponding to the number of the first message in a sequential range. If you pass a negative number (*startMsg* <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the *endMsg* parameter, pass an integer value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (*endMsg* <= 0), the last message of the mailbox will be used as the end of the sequence.


#### Resultado

The function returns a collection of strings (unique IDs).

#### Ejemplo


```4d
 var $transporter : 4D.IMAPTransporter
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get IDs for 5 last messages received
 $mailIds:=$transporter.numToID(($boxInfo.mailCount-5);$boxInfo.mailCount)

  //delete the messages from the current mailbox
 $status:=$transporter.delete($mailIds)
```



## .removeFlags()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object
| Parámetros | Tipo       |    | Descripción                                                                                                                                              |
| ---------- | ---------- |:--:| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection | -> | Collection of strings: Message unique IDs (text)<br>Text: Unique ID of a message<br>Longint (IMAP all): All messages in the selected mailbox |
| keywords   | Objeto     | -> | Keyword flags to remove                                                                                                                                  |
| Resultado  | Objeto     | <- | Status of the removeFlags operation                                                                                                                      |


#### Descripción

The `.removeFlags()` function removes flags from the `msgIDs` for the specified `keywords`.

In the `msgIDs` parameter, you can pass either:

*   a *collection* containing the unique IDs of specific messages or
*   the unique ID (*text*) of a single message or
*   the following constant (*longint*) for all messages in the selected mailbox:

    | Constante | Valor | Comentario                                  |
    | --------- | ----- | ------------------------------------------- |
    | IMAP all  | 1     | Select all messages in the selected mailbox |

The `keywords` parameter lets you pass an object with keyword values for specific flags to remove from `msgIDs`. You can pass any of the following keywords:

| Parámetros | Tipo     | Descripción                                         |
| ---------- | -------- | --------------------------------------------------- |
| $draft     | Booleano | True to remove the "draft" flag from the message    |
| $seen      | Booleano | True to remove the "seen" flag from the message     |
| $flagged   | Booleano | True to remove the "flagged" flag from the message  |
| $answered  | Booleano | True to remove the "answered" flag from the message |
| $deleted   | Booleano | True to remove the "deleted" flag from the message  |

Note que los valores falsos se ignoran.


**Returned object**

The function returns an object describing the IMAP status:

| Propiedad  |                         | Tipo       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True if the operation is successful, False otherwise                                     |
| statusText |                         | Texto      | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Número     | 4D error code                                                                            |
|            | \[].message            | Texto      | Description of the 4D error                                                              |
|            | \[].componentSignature | Texto      | Signature of the internal component which returned the error                             |


#### Ejemplo

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Create transporter
$transporter:=IMAP New transporter($options)

// Select mailbox
$boxInfo:=$transporter.selectBox("INBOX")

// Mark all messages from INBOX as unseen
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.removeFlags(IMAP all;$flags)
```




## .port

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

**.port** : Integer

#### Descripción

The `.port` property contains  the port number used for mail transactions. By default, if the *port* property has not been set in the *server* object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), the port used is:

*   **SMTP** - 587
*   **POP3** - 995
*   **IMAP** - 993





## .searchMails()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

**.searchMails**( *searchCriteria* : Text ) : Collection
| Parámetros     | Tipo       |    | Descripción                   |
| -------------- | ---------- |:--:| ----------------------------- |
| searchCriteria | Texto      | -> | Search criteria               |
| Resultado      | Collection | <- | Collection of message numbers |


#### Descripción

> This function is based upon the specification for the [IMAP protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

The `.searchMails()` function searches for messages that match the given *searchCriteria* in the current mailbox. *searchCriteria* consists of one or more search keys.

*searchCriteria* is a text parameter listing one or more search keys (see [Authorized search-keys](#authorized-search-keys) below) associated or not with values to look for. A search key may be a single or multiple items. Por ejemplo:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> Matching is usually not case-sensitive

- If the *searchCriteria* is a null string, the search will be equivalent to a “select all”.
- If the *searchCriteria* includes multiple search keys, the result is the intersection (AND function) of all the messages that match those keys.

```
searchCriteria = FLAGGED FROM "SMITH"
```
... returns all messages with \Flagged flag set AND sent by Smith.
- You can use the **OR** or **NOT** operators as follows:

```
searchCriteria = OR SEEN FLAGGED
```
... returns all messages with \Seen flag set OR \Flagged flag set

```
searchCriteria = NOT SEEN
```
... returns all messages with \Seen flag not set.

```
searchCriteria = HEADER CONTENT-TYPE "MIXED" NOT HEADER CONTENT-TYPE "TEXT"...
```
... returns message whose content-type header contains “Mixed” and does not contain “Text”.

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```
... returns message whose content-type header contains “ e ” and whose Subject header does not contain “ o ” and whose content-type header is not “ Mixed ”.

As concerns the last two examples, notice that the result of the search is different when you remove the parentheses of the first search key list.

- The *searchCriteria* may include the optional \[CHARSET] specification. This consists of the "CHARSET" word followed by a registered \[CHARSET] (US ASCII, ISO-8859). It indicates the charset of the *searchCriteria* string. Therefore, you must convert the *searchCriteria* string into the specified charset if you use the \[CHARSET] specification (see the `CONVERT FROM TEXT` or `Convert to text` commands). By default, 4D encodes in Quotable Printable the searchCriteria string if it contains extended characters.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```
... means the search criteria uses the charset iso-8859 and the server will have to convert the search criteria before searching, if necessary.


#### Search value types

Search-keys may request the value to search for:

- **Search-keys with a field-name value**: the field-name is the name of a header field. Ejemplo: `searchCriteria = SENTBEFORE 1-Feb-2020` (una fecha no suele necesitar comillas, ya que no contiene caracteres especiales)

- **Search-keys with a string value**: the string may contain any character and must be quoted. If the string does not contain any special characters, like the space character for instance, it does not need to be quoted. Quoting such strings will ensure that your string value will be correctly interpreted. Ejemplo: `criterios de búsqueda = FROM "SMITH"` Para todas las llaves de búsqueda que utilizan cadenas, un mensaje coincide con la llave si la cadena es una subcadena del campo. Matching is not case-sensitive.

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = KEYWORD \Flagged \Draft`

- **Search-keys with a message set value**: Identifies a set of messages. For message sequence numbers, these are consecutive numbers from 1 to the total number of messages in the mailbox. A comma delimits individual numbers; a colon delimits between two numbers inclusive. Ejemplos: `2,4:7,9,12:*` es `2,4,5,6,7,9,12,13,14,15` para un buzón con 15 mensajes. `searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set. `searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.


#### Authorized search-keys

**ALL**: All messages in the mailbox.  
**ANSWERED**: Messages with the \Answered flag set.  
**UNANSWERED**: Messages that do not have the \Answered flag set.  
**DELETED**: Messages with the \Deleted flag set.  
**UNDELETED**: Messages that do not have the \Deleted flag set.  
**DRAFT**: Messages with the \Draft flag set.  
**UNDRAFT**: Messages that do not have the \Draft flag set.  
**FLAGGED**: Messages with the \Flagged flag set.  
**UNFLAGGED**: Messages that do not have the \Flagged flag set.  
**RECENT**: Messages that have the \Recent flag set.  
**OLD**: Messages that do not have the \Recent flag set.  
**SEEN**: Messages that have the \Seen flag set.  
**UNSEEN**: Messages that do not have the \Seen flag set.  
**NEW**: Messages that have the \Recent flag set but not the \Seen flag. This is functionally equivalent to “(RECENT UNSEEN)”.  
**KEYWORD** <flag>: Messages with the specified keyword set.  
**UNKEYWORD** <flag>: Messages that do not have the specified keyword set.  
**BEFORE** <date>: Messages whose internal date is earlier than the specified date.  
**ON** <date>: Messages whose internal date is within the specified date.  
**SINCE** <date>: Messages whose internal date is within or later than the specified date.  
**SENTBEFORE** <date>: Messages whose Date header is earlier than the specified date.  
**SENTON** <date>: Messages whose Date header is within the specified date.  
**SENTSINCE** <date>: Messages whose Date header is within or later than the specified date.  
**TO** <string>: Messages that contain the specified string in the TO header.  
**FROM** <string>: Messages that contain the specified string in the FROM header.  
**CC** <string>: Messages that contain the specified string in the CC header.  
**BCC** <string>: Messages that contain the specified string in the BCC header.  
**SUBJECT** <string>: Messages that contain the specified string in the Subject header.  
**BODY** <string>: Messages that contain the specified string in the message body.  
**TEXT** <string>: Messages that contain the specified string in the header or in the message body.  
**HEADER** <field-name> <string>: Messages that have a header with the specified field-name and that contain the specified string in the field-body.  
**UID** <message UID>: Messages with unique identifiers corresponding to the specified unique identifier set.  
**LARGER** <n>: Messages with a size larger than the specified number of bytes.  
**SMALLER** <n>: Messages with a size smaller than the specified number of bytes.  
**NOT** <search-key>: Messages that do not match the specified search key.  
**O** <search-key1> <search-key2>: Messages that match either search key.  




## .selectBox()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object
| Parámetros | Tipo    |    | Descripción           |
| ---------- | ------- |:--:| --------------------- |
| name       | Texto   | -> | Name of the mailbox   |
| state      | Integer | -> | Mailbox access status |
| Resultado  | Objeto  | <- | boxInfo object        |


#### Descripción

The `.selectBox()` function selects the *name* mailbox as the current mailbox. This function allows you to retrieve information about the mailbox.
> To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

The optional *state* parameter defines the type of access to the mailbox. The possible values are:

| Constante             | Valor | Comentario                                                                                                                                                                |
| --------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1     | The selected mailbox is accessed with read only privileges. Messages with a "recent" flag (indicating new messages) remain unchanged.                                     |
| IMAP read write state | 0     | The selected mailbox is accessed with read and write privileges. Messages are considered "seen" and lose the "recent" flag (indicating new messages). (Valor por defecto) |
> * The function generates an error and returns **Null** if name designates a non-existing mailbox.
> * If there is no open connection, `.selectBox()` will open a connection.
> * If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**Returned object**

The `boxInfo` object returned contains the following properties:

| Propiedad  | Tipo   | Descripción                               |
| ---------- | ------ | ----------------------------------------- |
| name       | Texto  | Name of the mailbox                       |
| mailCount  | number | Number of messages in the mailbox         |
| mailRecent | number | Number of messages with the "recent" flag |


#### Ejemplo


```4d
 var $server; $boxinfo : Object
 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)
 $boxInfo:=$transporter.selectBox("INBOX")
```





## .user

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

**.user** : Text

#### Descripción
The `.user` property contains  the user name used for authentication on the mail server. 






<style> h2 { background: #d9ebff;}</style>








