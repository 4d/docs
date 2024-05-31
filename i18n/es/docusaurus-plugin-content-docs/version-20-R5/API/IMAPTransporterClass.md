---
id: IMAPTransporterClass
title: IMAPTransporter
---

The `IMAPTransporter` class allows you to retrieve messages from a IMAP email server.

### Objeto IMAP Transporter

IMAP Transporter objects are instantiated with the [IMAP New transporter](#imap-new-transporter) command. Ofrecen las siguientes propiedades y funciones:

|                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->       |
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)<br/><!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)<br/><!-- INCLUDE #IMAPTransporterClass.append().Summary -->                                       |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                         |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary --> |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                            |
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)<br/><!-- INCLUDE #IMAPTransporterClass.copy().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)<br/><!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #IMAPTransporterClass.delete().Summary -->                                       |
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)<br/><!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)<br/><!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<br/><!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)<br/><!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)<br/><!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->                     |
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)<br/><!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)<br/><!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<br/><!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                   |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                          |
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)<br/><!-- INCLUDE #IMAPTransporterClass.move().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)<br/><!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)<br/><!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)<br/><!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->                              |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                   |
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)<br/><!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)<br/><!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)<br/><!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)<br/><!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->                        |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                   |

## IMAP New transporter

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #_command_.IMAP New transporter.Params -->

| Parámetros | Tipo                               |     | Descripción                                         |
| ---------- | ---------------------------------- | :-: | --------------------------------------------------- |
| server     | Object                             |  -> | Información del servidor de correo                  |
| Result     | 4D.IMAPTransporter |  <- | [IMAP transporter object](#imap-transporter-object) |

<!-- END REF -->

#### Descripción

The `IMAP New transporter` command <!-- REF #_command_.IMAP New transporter.Summary -->configures a new IMAP connection<!-- END REF --> according to the _server_ parameter and returns a new _transporter_ object. El objeto transportador devuelto se utilizará normalmente para recibir correos electrónicos.

In the _server_ parameter, pass an object containing the following properties:

| _server_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Valor por defecto (si se omite)                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                     | False                                                                    |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in _[IMAP transporter](#imap-transporter-object)_ object. | ninguno                                                                  |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                       | se utiliza el modo de autenticación más seguro soportado por el servidor |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->                                                                                                                                                                                                                                                                                                                                                                               | 300                                                                      |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                          | 30                                                                       |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                 | _obligatorio_                                                            |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                        | ninguno                                                                  |
| .**password** : Text<br/>User password for authentication on the server. Not returned in _[IMAP transporter](#imap-transporter-object)_ object.                                                                                                                                                                                                                                                                                                                                   | ninguno                                                                  |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 993                                                                      |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                 | ninguno                                                                  |

> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

#### Result

The function returns an [**IMAP transporter object**](#imap-transporter-object). All returned properties are **read-only**.

> La conexión IMAP se cierra automáticamente cuando se destruye el objeto transportador.

#### Ejemplo

```4d
$server:=New object
$server.host:="imap.gmail.com" //Obligatorio
$server.port:=993
$server.user:="4d@gmail.com"
$server.password:="XXXXXXXX"
$server.logFile:="LogTest.txt" //log a guardar en la carpeta Logs

var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

$status:=$transporter.checkConnection()
If(Not($status.success))
   ALERT("An error occurred: "+$status.statusText)
End if
```

## 4D.IMAPTransporter.new()

<!-- REF #4D.IMAPTransporter.new().Syntax -->**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #4D.IMAPTransporter.new().Params -->

| Parámetros | Tipo                               |     | Descripción                                         |
| ---------- | ---------------------------------- | :-: | --------------------------------------------------- |
| server     | Object                             |  -> | Información del servidor de correo                  |
| Result     | 4D.IMAPTransporter |  <- | [IMAP transporter object](#imap-transporter-object) |

<!-- END REF -->

#### Descripción

The `4D.IMAPTransporter.new()` function <!-- REF #4D.IMAPTransporter.new().Summary -->creates and returns a new object of the `4D.IMAPTransporter` type<!-- END REF -->. It is identical to the [`IMAP New transporter`](#imap-new-transporter) command (shortcut).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- REF IMAPTransporterClass.addFlags().Desc -->

## .addFlags()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                         |
| ----------- | -------------------------------------- |
| 20          | Soporta palabras claves personalizadas |
| 18 R6       | Añadidos                               |

</details>

<!-- REF #IMAPTransporterClass.addFlags().Syntax -->**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.addFlags().Params -->

| Parámetros | Tipo       |     | Descripción                                                                                                                                                                                                                                                |
| ---------- | ---------- | :-: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection |  -> | Colección de cadenas: identificadores únicos de mensajes (texto)<br/>Texto: ID único de un mensaje<br/>Longint (IMAP all): todos los mensajes del buzón seleccionado |
| keywords   | Object     |  -> | Banderas de palabras claves a añadir                                                                                                                                                                                                                       |
| Result     | Object     |  <- | Estado de la operación addFlags                                                                                                                                                                                                                            |

<!-- END REF -->

#### Descripción

The `.addFlags()` function <!-- REF #IMAPTransporterClass.addFlags().Summary -->adds flags to the `msgIDs` for the specified `keywords`<!-- END REF -->.

In the `msgIDs` parameter, you can pass either:

- a _collection_ containing the unique IDs of specific messages or
- the unique ID (_text_) of a single message or
- the following constant (_longint_) for all messages in the selected mailbox:

| Constante | Valor | Comentario                                            |
| --------- | ----- | ----------------------------------------------------- |
| IMAP all  | 1     | Seleccionar todos los mensajes del buzón seleccionado |

The `keywords` parameter lets you define the flags to add to `msgIDs`. Puede utilizar las siguientes banderas estándar, así como banderas personalizadas (la compatibilidad con banderas personalizadas depende de la implementación del servidor):

| Propiedad       | Tipo    | Descripción                                          |
| --------------- | ------- | ---------------------------------------------------- |
| $draft          | Boolean | True para añadir el marcador "draft" al mensaje      |
| $seen           | Boolean | True para añadir el marcador "seen" al mensaje       |
| $flagged        | Boolean | True para añadir el marcador "flagged" al mensaje    |
| $answered       | Boolean | True para añadir el marcador "answered" al mensaje   |
| $deleted        | Boolean | True para añadir el marcador "deleted" al mensaje    |
| `<custom flag>` | Boolean | True para añadir la bandera personalizada al mensaje |

Los nombres de las banderas personalizadas deben respetar esta regla: la palabra clave debe ser una cadena que no distinga entre mayúsculas y minúsculas, excluyendo los caracteres de control y el espacio, y no puede incluir ninguno de estos caracteres: `( ) { ] % * " \`

> - Para que una palabra clave se tenga en cuenta tiene que ser true.
> - La interpretación de los indicadores de palabras claves puede variar según el cliente de correo.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                           |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D   |
| errors     |                                                                                             | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP) |
|            | \[].errcode            | Number     | Código de error 4D                                                                                  |
|            | \[].message            | Text       | Descripción del error 4D                                                                            |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                               |

#### Ejemplo

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Crear transportador
$transporter:=IMAP New transporter($options)

// Seleccionar buzón de correo
$boxInfo:=$transporter.selectBox("INBOX")

// Marcar todos los mensajes de INBOX como leídos/vistos
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.addFlags(IMAP all;$flags)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.append().Desc -->

## .append()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.append().Syntax -->**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.append().Params -->

| Parámetros     | Tipo   |     | Descripción                                 |
| -------------- | ------ | :-: | ------------------------------------------- |
| mailObj        | Object |  -> | Objeto Email                                |
| destinationBox | Text   |  -> | Buzón para recibir el objeto Email          |
| options        | Object |  -> | Objeto que contiene información del charset |
| Result         | Object |  <- | Estado de la operación                      |

<!-- END REF -->

#### Descripción

The `.append()` function <!-- REF #IMAPTransporterClass.append().Summary -->appends a `mailObj` to the `destinationBox`<!-- END REF -->.

In the `mailObj` parameter, pass an Email object. For a comprehensive description of mail properties, see [Email object](EmailObjectClass.md#email-object). The `.append()` function supports keyword tags in the Email object's `keywords` attribute.

The optional `destinationBox` parameter lets you pass the name of a mailbox where the `mailObj` will be appended. Si se omite, se utiliza el buzón actual.

In the optional `options` parameter, you can pass an object to define the charset and encoding for specific parts of the email. Propiedades disponibles:

| Propiedad     | Tipo | Descripción                                                                                                                                                                                                                                                                                                      |
| ------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset y codificación utilizados para las siguientes partes del correo electrónico: asunto, nombres de archivos adjuntos y atributo(s) del nombre del correo electrónico. Valores posibles: ver la tabla de charsets posibles a continuación |
| bodyCharset   | Text | Charset y codificación utilizados para el contenido html y el texto del cuerpo del correo electrónico. Valores posibles: ver la tabla de charsets posibles a continuación                                                                                                        |

Charsets posibles:

| Constante                | Valor                                                                                       | Comentario                                                                                                                                                                                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591       | ISO-8859-1                                                                                  | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                                                     |
| mail mode UTF8           | US-ASCII_UTF8_QP                                  | headerCharset & bodyCharset: US-ASCII si es posible, de lo contrario UTF-8 & Quoted-printable (**valor por defecto**)                                                                           |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64                                 | headerCharset & bodyCharset: US-ASCII si es posible, de lo contrario UTF-8 & base64                                                                                                                                |

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                           |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D   |
| errors     |                                                                                             | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP) |
|            | \[].errcode            | Number     | Código de error 4D                                                                                  |
|            | \[].message            | Text       | Descripción del error 4D                                                                            |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                               |

#### Ejemplo

Para guardar un correo electrónico en el buzón de borradores:

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

<!-- END REF -->

<!-- INCLUDE transporter.authenticationModeIMAP.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Desc -->

## .checkConnectionDelay

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->**.checkConnectionDelay** : Integer<!-- END REF -->

#### Descripción

The `.checkConnectionDelay` property contains <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->the maximum time (in seconds) allowed prior to checking the connection to the server<!-- END REF -->.  Si se supera este tiempo entre dos llamadas al método, se comprobará la conexión con el servidor. By default, if the property has not been set in the _server_ object, the value is 300.

> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

<!-- END REF -->

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- REF IMAPTransporterClass.copy().Desc -->

## .copy()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R5       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.copy().Syntax -->**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.copy().Params -->

| Parámetros     | Tipo       |     | Descripción                                                                  |
| -------------- | ---------- | :-: | ---------------------------------------------------------------------------- |
| msgsIDs        | Collection |  -> | Colección de identificadores únicos de mensajes (cadenas) |
| allMsgs        | Integer    |  -> | `IMAP all`: All messages in the selected mailbox             |
| destinationBox | Text       |  -> | Buzón para recibir mensajes copiados                                         |
| Result         | Object     |  <- | Estado de la operación de copia                                              |

<!-- END REF -->

#### Descripción

The `.copy()` function <!-- REF #IMAPTransporterClass.copy().Summary -->copies the messages defined by _msgsIDs_ or _allMsgs_ to the _destinationBox_ on the IMAP server<!-- END REF -->.

Puede pasar:

- in the _msgsIDs_ parameter, a collection containing the unique IDs of the specific messages to copy, or
- in the _allMsgs_ parameter, the `IMAP all` constant (integer) to copy all messages in the selected mailbox.

The _destinationBox_ parameter allows you to pass a text value with the name of the mailbox where the copies of messages will be placed.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                           |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D   |
| errors     |                                                                                             | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP) |
|            | \[].errcode            | Number     | Código de error 4D                                                                                  |
|            | \[].message            | Text       | Descripción del error 4D                                                                            |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                               |

#### Ejemplo 1

Para copiar una selección de mensajes:

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

Para copiar todos los mensajes del buzón actual:

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

<!-- END REF -->

<!-- REF IMAPTransporterClass.createBox().Desc -->

## .createBox()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.createBox().Syntax -->**.createBox**( *name* :  Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.createBox().Params -->

| Parámetros | Tipo   |     | Descripción                                  |
| ---------- | ------ | :-: | -------------------------------------------- |
| name       | Text   |  -> | Nombre del nuevo buzón                       |
| Result     | Object |  <- | Estado de la operación de creación del buzón |

<!-- END REF -->

#### Descripción

The `.createBox()` function <!-- REF #IMAPTransporterClass.createBox().Summary -->creates a mailbox with the given `name`<!-- END REF -->. Si el caracter separador de jerarquía del servidor IMAP aparece en otra parte del nombre del buzón, el servidor IMAP creará todos los nombre padre necesarios para crear el buzón dado.

En otras palabras, un intento de crear "Projects/IMAP/Doc" en un servidor en el que "/" es el carácter separador de jerarquía creará:

- Only the "Doc" mailbox if "Projects" & "IMAP" already exist.
- "IMAP" & "Doc" mailboxes if only “Projects” already exists.
- "Projects" & “IMAP” & "Doc" mailboxes, if they do not already exist.

In the `name` parameter, pass the name of the new mailbox.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                           |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D   |
| errors     |                                                                                             | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP) |
|            | \[].errcode            | Number     | Código de error 4D                                                                                  |
|            | \[].message            | Text       | Descripción del error 4D                                                                            |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                               |

#### Ejemplo

Para crear un nuevo buzón "Invoices":

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")
If(OK=1)
$options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$status:=$transporter.createBox("Invoices")

If ($status.success)
ALERT("Mailbox creation successful!")
Else
ALERT("Error: "+$status.statusText)
End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.delete().Desc -->

## .delete()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R5       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.delete().Syntax -->**.delete**( *msgsIDs* : Collection ) : Object<br/>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.delete().Params -->

| Parámetros | Tipo       |     | Descripción                                                                  |
| ---------- | ---------- | :-: | ---------------------------------------------------------------------------- |
| msgsIDs    | Collection |  -> | Colección de identificadores únicos de mensajes (cadenas) |
| allMsgs    | Integer    |  -> | `IMAP all`: All messages in the selected mailbox             |
| Result     | Object     |  <- | Estado de la operación de eliminación                                        |

<!-- END REF -->

#### Descripción

The `.delete()` function <!-- REF #IMAPTransporterClass.delete().Summary -->sets the "deleted" flag for the messages defined in `msgsIDs` or `allMsgs`<!-- END REF -->.

Puede pasar:

- in the `msgsIDs` parameter, a collection containing the unique IDs of the specific messages to delete, or
- in the `allMsgs` parameter, the `IMAP all` constant (integer) to delete all messages in the selected mailbox.

La ejecución de esta función no elimina realmente los mensajes. Messages with the "delete" flag can still be found by the [.searchMails()](#searchmails) function. Flagged messages are deleted from the IMAP server with the [`.expunge()`](#expunge) function or by selecting another mailbox or when the [transporter object](#imap-transporter-object) (created with [IMAP New transporter](#imap-new-transporter)) is destroyed.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                           |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D   |
| errors     |                                                                                             | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP) |
|            | \[].errcode            | Number     | Código de error 4D                                                                                  |
|            | \[].message            | Text       | Descripción del error 4D                                                                            |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                               |

#### Ejemplo 1

Para eliminar una selección de mensajes:

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

Para eliminar todos los mensajes del buzón actual:

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

<!-- END REF -->

<!-- REF IMAPTransporterClass.deleteBox().Desc -->

## .deleteBox()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->**.deleteBox**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.deleteBox().Params -->

| Parámetros | Tipo   |     | Descripción                                     |
| ---------- | ------ | :-: | ----------------------------------------------- |
| name       | Text   |  -> | Nombre del buzón a eliminar                     |
| Result     | Object |  <- | Estado de la operación de eliminación del buzón |

<!-- END REF -->

#### Descripción

The `.deleteBox()` function <!-- REF #IMAPTransporterClass.deleteBox().Summary -->permanently removes the mailbox with the given `name` from the IMAP server<!-- END REF -->. Intentar eliminar un INBOX o un buzón que no existe generará un error.

In the `name` parameter, pass the name of the mailbox to delete.

> - La función no puede eliminar un buzón que tiene buzones hijos si el buzón padre tiene el atributo "\Noselect".
> - Todos los mensajes del buzón eliminado también se borrarán.
> - La posibilidad de eliminar un buzón depende del servidor de correo.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                           |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D   |
| errors     |                                                                                             | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP) |
|            | \[].errcode            | Number     | Código de error 4D                                                                                  |
|            | \[].message            | Text       | Descripción del error 4D                                                                            |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                               |

#### Ejemplo

Para eliminar el buzón secundario "Nova Orion Industries" del interior del buzón "Bills":

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// delete mailbox
$name:="Bills"+$transporter.getDelimiter()+"Nova Orion Industries"
$status:=$transporter.deleteBox($name)

If ($status.success)
 ALERT("Mailbox deletion successful!")
 Else
 ALERT("Error: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Desc -->

## .expunge()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.expunge().Syntax -->**.expunge()** : Object<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Params -->

| Parámetros | Tipo   |     | Descripción                    |
| ---------- | ------ | :-: | ------------------------------ |
| Result     | Object |  <- | Estado de la operación expunge |

<!-- END REF -->

#### Descripción

The `.expunge()` function <!-- REF #IMAPTransporterClass.expunge().Summary -->removes all messages with the "deleted" flag from the IMAP mail server.<!-- END REF --> The "deleted" flag can be set with the [`.delete()`](#delete) or [`.addFlags()`](#addflags) methods.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                           |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D   |
| errors     |                                                                                             | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP) |
|            | \[].errcode            | Number     | Código de error 4D                                                                                  |
|            | \[].message            | Text       | Descripción del error 4D                                                                            |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                               |

#### Ejemplo

```4d
var $options;$transporter;$boxInfo;$status : Object
var $ids : Collection

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Crear transportador
$transporter:=IMAP New transporter($options)

// Seleccionar buzón
$boxInfo:=$transporter.selectBox("INBOX")

// Buscar y eliminar todos los mensajes vistos en INBOX
$ids:=$transporter.searchMails("SEEN")
$status:=$transporter.delete($ids)

// Purgar todos los mensajes marcados como borrados
$status:=$transporter.expunge()
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxInfo().Desc -->

## .getBoxInfo()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones        |
| ----------- | --------------------- |
| 20          | \*se devuelve el _id_ |
| 18 R5       | _name_ es opcional    |
| 18 R4       | Añadidos              |

</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->

| Parámetros | Tipo   |     | Descripción      |
| ---------- | ------ | :-: | ---------------- |
| name       | Text   |  -> | Nombre del buzón |
| Result     | Object |  <- | objeto boxInfo   |

<!-- END REF -->

#### Descripción

The `.getBoxInfo()` function <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the current maibox, or the mailbox _name_<!-- END REF -->. This function returns the same information as [`.selectBox()`](#selectbox) without changing the current mailbox.

In the optional _name_ parameter, pass the name of the mailbox to access. El nombre representa una jerarquía inequívoca de izquierda a derecha, con niveles separados por un carácter delimitador específico. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

If the mailbox _name_ is not selectable or does not exist, the function generates an error and returns **null**.

**Objeto devuelto**

The `boxInfo` object returned contains the following properties:

| Propiedad  | Tipo   | Descripción                                                                                       |
| ---------- | ------ | ------------------------------------------------------------------------------------------------- |
| name       | text   | Nombre del buzón                                                                                  |
| mailCount  | number | Número de mensajes en el buzón                                                                    |
| mailRecent | number | Número de mensajes con el marcador "reciente" (que indica los mensajes nuevos) |
| id         | text   | Id. único del buzón                                                               |

#### Ejemplo

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $info:=$transporter.getBoxInfo("INBOX")
 ALERT("INBOX contains "+String($info.mailRecent)+" recent emails.")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxList().Desc -->

## .getBoxList()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                  |
| ----------- | ------------------------------- |
| 18 R4       | Añadidos                        |
| 19          | Añadir parámetro `isSubscribed` |

</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxList().Params -->

| Parámetros | Tipo       |     | Descripción                  |
| ---------- | ---------- | :-: | ---------------------------- |
| parameters | Object     |  -> | Objeto de parámetro          |
| Result     | Collection |  <- | Colección de objetos mailbox |

<!-- END REF -->

#### Descripción

The `.getBoxList()` function <!-- REF #IMAPTransporterClass.getBoxList().Summary -->returns a collection of mailboxes describing all of the available mailboxes<!-- END REF -->. Esta función permite gestionar localmente la lista de mensajes localizados en el servidor de correo IMAP.

In the optional `parameters` parameter, pass an object containing values to filter the returned mailboxes. Puede pasar:

| Propiedad    | Tipo    | Descripción                                                                                                |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| isSubscribed | Boolean | <li>**True** to return only subscribed mailboxes</li><li> **False** to return all available mailboxes</li> |

#### Result

Cada objeto de la colección devuelta contiene las siguientes propiedades:

| Propiedad                                                                            | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \[].name        | text    | Nombre del buzón                                                                                                                                                                                                                                                                                                                               |
| \[].selectable  | boolean | Indicates whether or not the access rights allow the mailbox to be selected: <ul><li>true - the mailbox can be selected</li><li>false - the mailbox can not be selected</li></ul>                                                                                                                                              |
| \[].inferior    | boolean | Indicates whether or not the access rights allow creating a lower hierachy in the mailbox: <ul><li>true - a lower level can be created</li><li>false - a lower level can not be created</li></ul>                                                                                                                              |
| \[].interesting | boolean | Indicates if the mailbox has been marked "interesting" by the server: <ul><li>true - The mailbox has been marked "interesting" by the server. For example, it may contain new messages.</li><li>false - The mailbox has not been marked "interesting" by the server.</li></ul> |

Si la cuenta no contiene buzones, se devuelve una colección vacía.

> - If there is no open connection, `.getBoxList()` will open a connection.
> - If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the `.checkConnection( )` function is automatically called.

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

<!-- END REF -->

<!-- REF IMAPTransporterClass.getDelimiter().Desc -->

## .getDelimiter()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.getDelimiter().Syntax -->**.getDelimiter()** : Text<!-- END REF -->

<!-- REF #IMAPTransporterClass.getDelimiter().Params -->

| Parámetros | Tipo |     | Descripción                       |
| ---------- | ---- | :-: | --------------------------------- |
| Result     | Text |  <- | Caracter delimitador de jerarquía |

<!-- END REF -->

#### Descripción

The `.getDelimiter()` function <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->returns the character used to delimit levels of hierarchy in the mailbox name<!-- END REF -->.

El delimitador es un carácter que puede utilizarse para:

- crear buzones de nivel inferior
- buscar más arriba o más abajo en la jerarquía del buzón

#### Result

Caracter delimitador del nombre del buzón.

> - If there is no open connection, `.getDelimiter()` will open a connection.
> - If the connection has not been used since the [designated connection delay](#checkconnectiondelay), the [`.checkConnection()`](#checkconnection) function is automatically called.

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

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMail().Desc -->

## .getMail()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.getMail().Syntax -->**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br/>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMail().Params -->

| Parámetros | Tipo    |     | Descripción                                      |
| ---------- | ------- | :-: | ------------------------------------------------ |
| msgNumber  | Integer |  -> | Número de secuencia del mensaje                  |
| msgID      | Text    |  -> | ID único del mensaje                             |
| options    | Object  |  -> | Instrucciones sobre la gestión de mensajes       |
| Result     | Object  |  <- | [Email object](EmailObjectClass.md#email-object) |

<!-- END REF -->

#### Descripción

The `.getMail()` function <!-- REF #IMAPTransporterClass.getMail().Summary -->returns the `Email` object corresponding to the _msgNumber_ or _msgID_ in the mailbox designated by the `IMAP_transporter`<!-- END REF -->. Esta función permite recuperar la información sobre el email.

En el primer parámetro, puede pasar:

- _msgNumber_, an _integer_ value indicating the sequence number of the message to retrieve or
- _msgID_, a _text_ value indicating the unique ID of the message to retrieve.

The optional _options_ parameter allows you pass an object defining additional instructions for handling the message. Las siguientes propiedades están disponibles:

| Propiedad  | Tipo    | Descripción                                                                                                                                                                      |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | boolean | Si True, el mensaje se marca como "visto" en el buzón. Si es False, el mensaje no se marca como "visto". Valor por defecto: True |
| withBody   | boolean | Pase True para devolver el cuerpo del mensaje. Si es False, sólo se devuelve el encabezado del mensaje. Valor por defecto: True  |

> - The function generates an error and returns **Null** if _msgID_ designates a non-existing message,
> - If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
> - If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)\`.

#### Result

`.getMail()` returns an [`Email` object](EmailObjectClass.md#email-object) with the following specific IMAP properties: _id_, _receivedAt_, and _size_.

#### Ejemplo

Quiere obtener el mensaje con ID = 1:

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

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMails().Desc -->

## .getMails()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R5       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.getMails().Syntax -->**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br/>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->

| Parámetros | Tipo       |     | Descripción                                                                                                                                                                                        |
| ---------- | ---------- | :-: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids        | Collection |  -> | Colección de identificadores de mensajes                                                                                                                                                           |
| startMsg   | Integer    |  -> | Número de secuencia del primer mensaje                                                                                                                                                             |
| endMsg     | Integer    |  -> | Número de secuencia del último mensaje                                                                                                                                                             |
| options    | Object     |  -> | Instrucciones sobre la gestión de mensajes                                                                                                                                                         |
| Result     | Object     |  <- | Object containing:<br/><ul><li>a collection of [Email objects](EmailObjectClass.md#email-object) and</li><li>a collection of IDs or numbers for missing messages, if any</li></ul> |

<!-- END REF -->

#### Descripción

The `.getMails()` function <!-- REF #IMAPTransporterClass.getMails().Summary -->returns an object containing a collection of `Email` objects<!-- END REF -->.

**First Syntax:**

_**.getMails( ids { ; options } ) -> result**_

La primera sintaxis permite recuperar los mensajes en función de sus identificadores.

In the _ids_ parameter, pass a collection of IDs for the messages to return. You can get the IDs with [`.getMail()`](#getmail).

The optional _options_ parameter allows you to define the parts of the messages to be returned. See the **Options** table below for a description of the available properties.

**Segunda sintaxis:**

_**.getMails( startMsg ; endMsg { ; options } ) -> result**_

La segunda sintaxis permite recuperar los mensajes en función de un rango secuencial. Los valores pasados representan la posición de los mensajes en el buzón.

In the _startMsg_ parameter, pass an _integer_ value corresponding to the number of the first message in a sequential range. If you pass a negative number (_startMsg_ <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the _endMsg_ parameter, pass an _integer_ value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (_endMsg_ <= 0), the last message of the mailbox will be used as the end of the sequence.

The optional _options_ parameter allows you to define the parts of the messages to be returned.

**Options**

| Propiedad  | Tipo    | Descripción                                                                                                                                                                                         |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | Boolean | Si True, los mensajes especificados se marcan como "vistos" en el buzón. Si False, los mensajes no se marcan como "vistos". Valor por defecto: True |
| withBody   | Boolean | Pase True para devolver el cuerpo de los mensajes específicos. Si False, sólo se devuelve los encabezados de los mensajes. Valor por defecto: True  |

> - If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
> - If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).

#### Result

`.getMails()` returns an object containing the following collections:

| Propiedad | Tipo       | Descripción                                                                                                                                                                                                                                                                                      |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| lista     | Collection | Collection of [`Email` objects](EmailObjectClass.md#email-object). Si no se encuentran objetos Email, se devuelve una colección vacía.                                                                                                                           |
| notFound  | Collection | Collection of:<br/><ul><li>first syntax - previously passed message IDs that do not exist</li><li>second syntax - sequence numbers of messages between startMsg and endMsg that do not exist</li></ul>An empty collection is returned if all messages are found. |

#### Ejemplo

Quiere recuperar los 20 correos electrónicos más recientes sin cambiar el estado "visto":

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

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMIMEAsBlob().Desc -->

## .getMIMEAsBlob()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br/>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->

| Parámetros | Tipo    |     | Descripción                                                                                                                |
| ---------- | ------- | :-: | -------------------------------------------------------------------------------------------------------------------------- |
| msgNumber  | Integer |  -> | Número de secuencia del mensaje                                                                                            |
| msgID      | Text    |  -> | ID único del mensaje                                                                                                       |
| updateSeen | Boolean |  -> | Si True, el mensaje se marca como "visto" en el buzón. Si False, el mensaje se deja igual. |
| Result     | BLOB    |  <- | Blob de la cadena MIME devuelta por el servidor de correo                                                                  |

<!-- END REF -->

#### Descripción

The `.getMIMEAsBlob()` function <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the _msgNumber_ or _msgID_ in the mailbox designated by the `IMAP_transporter`<!-- END REF -->.

En el primer parámetro, puede pasar:

- _msgNumber_, an _integer_ value indicating the sequence number of the message to retrieve or
- _msgID_, a _text_ value indicating the unique ID of the message to retrieve.

The optional _updateSeen_ parameter allows you to specify if the message is marked as "seen" in the mailbox. Puede pasar:

- **True** - to mark the message as "seen" (indicating the message has been read)
- **False** - to leave the message's "seen" status untouched

> * The function returns an empty BLOB if _msgNumber_ or msgID\* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
> * If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox()`.

#### Result

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](EmailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.

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

<!-- END REF -->

<!-- INCLUDE transporter.host.Desc -->

<!-- INCLUDE transporter.logFile.Desc -->

<!-- REF IMAPTransporterClass.move().Desc -->

## .move()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R5       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.move().Syntax -->**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->

| Parámetros     | Tipo       |     | Descripción                                                                  |
| -------------- | ---------- | :-: | ---------------------------------------------------------------------------- |
| msgsIDs        | Collection |  -> | Colección de identificadores únicos de mensajes (cadenas) |
| allMsgs        | Integer    |  -> | `IMAP all`: All messages in the selected mailbox             |
| destinationBox | Text       |  -> | Buzón para recibir los mensajes desplazados                                  |
| Result         | Object     |  <- | Estado de la operación de desplazamiento                                     |

<!-- END REF -->

#### Descripción

The `.move()` function <!-- REF #IMAPTransporterClass.move().Summary -->moves the messages defined by _msgsIDs_ or _allMsgs_ to the _destinationBox_ on the IMAP server<!-- END REF -->.

Puede pasar:

- in the _msgsIDs_ parameter, a collection containing the unique IDs of the specific messages to move, or
- in the _allMsgs_ parameter, the `IMAP all` constant (integer) to move all messages in the selected mailbox.

The _destinationBox_ parameter allows you to pass a text value with the name of the mailbox where the messages will be moved.

> This function is only supported by IMAP servers compliant with RFC [8474](https://tools.ietf.org/html/rfc8474).

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                           |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D   |
| errors     |                                                                                             | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP) |
|            | \[].errcode            | Number     | Código de error 4D                                                                                  |
|            | \[].message            | Text       | Descripción del error 4D                                                                            |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                               |

#### Ejemplo 1

Para mover una selección de mensajes:

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

Para mover todos los mensajes del buzón actual:

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

<!-- END REF -->

<!-- REF IMAPTransporterClass.numToID().Desc -->

## .numToID()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R5       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.numToID().Syntax -->**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.numToID().Params -->

| Parámetros | Tipo       |     | Descripción                                     |
| ---------- | ---------- | :-: | ----------------------------------------------- |
| startMsg   | Integer    |  -> | Número de secuencia del primer mensaje          |
| endMsg     | Integer    |  -> | Número de secuencia del último mensaje          |
| Result     | Collection |  <- | Colección de identificadores de mensajes únicos |

<!-- END REF -->

#### Descripción

The `.numToID()` function <!-- REF #IMAPTransporterClass.numToID().Summary -->converts the sequence numbers to IMAP unique IDs for the messages in the sequential range designated by _startMsg_ and _endMsg_<!-- END REF --> in the currently selected mailbox.

In the _startMsg_ parameter, pass an integer value corresponding to the number of the first message in a sequential range. If you pass a negative number (_startMsg_ <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the _endMsg_ parameter, pass an integer value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (_endMsg_ <= 0), the last message of the mailbox will be used as the end of the sequence.

#### Result

La función devuelve una colección de cadenas (IDs únicos).

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

<!-- END REF -->

<!-- REF IMAPTransporterClass.removeFlags().Desc -->

## .removeFlags()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                         |
| ----------- | -------------------------------------- |
| 20          | Soporta palabras claves personalizadas |
| 18 R6       | Añadidos                               |

</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->

| Parámetros | Tipo       |     | Descripción                                                                                                                                                                                                                                                |
| ---------- | ---------- | :-: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection |  -> | Colección de cadenas: identificadores únicos de mensajes (texto)<br/>Texto: ID único de un mensaje<br/>Longint (IMAP all): todos los mensajes del buzón seleccionado |
| keywords   | Object     |  -> | Banderas de palabras claves a eliminar                                                                                                                                                                                                                     |
| Result     | Object     |  <- | Estado de la operación removeFlags                                                                                                                                                                                                                         |

<!-- END REF -->

#### Descripción

The `.removeFlags()` function <!-- REF #IMAPTransporterClass.removeFlags().Summary -->removes flags from the `msgIDs` for the specified `keywords`<!-- END REF -->.

In the `msgIDs` parameter, you can pass either:

- a _collection_ containing the unique IDs of specific messages or
- the unique ID (_text_) of a single message or
- the following constant (_longint_) for all messages in the selected mailbox:

| Constante | Valor | Comentario                                            |
| --------- | ----- | ----------------------------------------------------- |
| IMAP all  | 1     | Seleccionar todos los mensajes del buzón seleccionado |

The `keywords` parameter lets you define the flags to remove from `msgIDs`. Puede utilizar las siguientes banderas estándar, así como banderas personalizadas:

| Parámetros      | Tipo    | Descripción                                             |
| --------------- | ------- | ------------------------------------------------------- |
| $draft          | Boolean | True para eliminar el marcador "draft" del mensaje      |
| $seen           | Boolean | True para eliminar el marcador "seen" del mensaje       |
| $flagged        | Boolean | True para eliminar el marcador "flagged" del mensaje    |
| $answered       | Boolean | True para eliminar el marcador "answered" del mensaje   |
| $deleted        | Boolean | True para eliminar el marcador "deleted" del mensaje    |
| `<custom flag>` | Boolean | True para eliminar la bandera personalizada del mensaje |

Please refer to [.addFlags()](#addflags) for more information on custom flags.

> - Para que una palabra clave se tenga en cuenta tiene que ser true.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                           |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D   |
| errors     |                                                                                             | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP) |
|            | \[].errcode            | Number     | Código de error 4D                                                                                  |
|            | \[].message            | Text       | Descripción del error 4D                                                                            |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                               |

#### Ejemplo

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Crear transportador
$transporter:=IMAP New transporter($options)

// Seleccionar buzón
$boxInfo:=$transporter.selectBox("INBOX")

// Marcar todos los mensajes de INBOX como no vistos
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.removeFlags(IMAP all;$flags)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.renameBox().Desc -->

## .renameBox()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.renameBox().Syntax -->**.renameBox**( *currentName* : Text ; *newName* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.renameBox().Params -->

| Parámetros  | Tipo   |     | Descripción                      |
| ----------- | ------ | :-: | -------------------------------- |
| currentName | Text   |  -> | Nombre del nuevo actual          |
| newName     | Text   |  -> | Nuevo nombre del buzón           |
| Result      | Object |  <- | Estado de la operación renombrar |

<!-- END REF -->

#### Descripción

The `.renameBox()` function <!-- REF #IMAPTransporterClass.renameBox().Summary -->changes the name of a mailbox on the IMAP server<!-- END REF -->. Si se intenta renombrar un buzón desde un nombre de buzón que no existe o a un nombre de buzón que ya existe, se generará un error.

In the `currentName` parameter, pass the name of the mailbox to be renamed.

Pass the new name for the mailbox in the `newName` parameter.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                           |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D   |
| errors     |                                                                                             | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP) |
|            | \[].errcode            | Number     | Código de error 4D                                                                                  |
|            | \[].message            | Text       | Descripción del error 4D                                                                            |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                               |

#### Ejemplo

Para cambiar el nombre de su buzón de "Invoices" a "Bills":

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"

$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// rename mailbox
$status:=$transporter.renameBox("Invoices"; "Bills")

If ($status.success)
   ALERT("Mailbox renaming successful!")
   Else
   ALERT("Error: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.port.Desc -->

<!-- REF IMAPTransporterClass.searchMails().Desc -->

## .searchMails()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R5       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.searchMails().Syntax -->**.searchMails**( *searchCriteria* : Text ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.searchMails().Params -->

| Parámetros     | Tipo       |     | Descripción                      |
| -------------- | ---------- | :-: | -------------------------------- |
| searchCriteria | Text       |  -> | Criterio de búsqueda             |
| Result         | Collection |  <- | Colección de números de mensajes |

<!-- END REF -->

#### Descripción

> This function is based upon the specification for the [IMAP protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

The `.searchMails()` function <!-- REF #IMAPTransporterClass.searchMails().Summary -->searches for messages that match the given _searchCriteria_ in the current mailbox<!-- END REF -->. _searchCriteria_ consists of one or more search keys.

_searchCriteria_ is a text parameter listing one or more search keys (see [Authorized search-keys](#authorized-search-keys) below) associated or not with values to look for. Una llave de búsqueda puede ser uno o varios elementos. Por ejemplo:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> Para obtener la información de un buzón sin cambiar el buzón actual, utilice <a href="#getboxinfo"><code>.getBoxInfo()</code></a>.

- If the _searchCriteria_ is a null string, the search will be equivalent to a “select all”.
- If the _searchCriteria_ includes multiple search keys, the result is the intersection (AND function) of all the messages that match those keys.

```
searchCriteria = FLAGGED FROM "SMITH"
```

... returns all messages with \Flagged flag set AND sent by Smith.

- You can use the **OR** or **NOT** operators as follows:

```
searchCriteria = OR SEEN FLAGGED
```

... devuelve todos los mensajes con el marcador \Seen O \Flagged

```
searchCriteria = NOT SEEN
```

... devuelve todos los mensajes con el marcador \Seen.

```
searchCriteria = HEADER CONTENT-TYPE "MIXED" NOT HEADER CONTENT-TYPE "TEXT"...
```

... returns message whose content-type header contains “Mixed” and does not contain “Text”.

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```

... returns message whose content-type header contains “ e ” and whose Subject header does not contain “ o ” and whose content-type header is not “ Mixed ”.

En cuanto a los dos últimos ejemplos, observe que el resultado de la búsqueda es diferente cuando se eliminan los paréntesis de la primera lista de llaves de búsqueda.

- The _searchCriteria_ may include the optional \[CHARSET] specification. Esta instrucción consiste en la palabra "CHARSET" seguida de un conjunto de caracteres definido \[CHARSET] (US ASCII, ISO-8859). It indicates the charset of the _searchCriteria_ string. Therefore, you must convert the _searchCriteria_ string into the specified charset if you use the \[CHARSET] specification (see the `CONVERT FROM TEXT` or `Convert to text` commands).
  Por defecto, 4D codifica la cadena de criterios searchCriteria en Quotable Printable si contiene los caracteres extendidos.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... significa que los criterios de búsqueda utilizan el conjunto de caracteres iso-8859 y el servidor tendrá que convertir los criterios de búsqueda antes de buscar, si es necesario.

#### Tipos de valores de búsqueda

Las claves de búsqueda pueden solicitar el valor a buscar:

- **Search-keys with a date value**: the date is a string that must be formatted as follows: _date-day+"-"+date-month+"-"+date-year_ where date-day indicates the number of the day of the month (max. 2 characters), date-month indicates the name of the month (Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Dec) and date-year indicates the year (4 characters).
  Example: `searchCriteria = SENTBEFORE 1-Feb-2020` (a date does not usually need to be quoted since it does not contain any special characters)

- **Search-keys with a string value**: the string may contain any character and must be quoted. Si la cadena no contiene ningún caracter especial, como el espacio, por ejemplo, no es necesario colocarla entre comillas. Al colocar entre comillas estas cadenas se garantiza que su valor se interpretará correctamente.
  Example: `searchCriteria = FROM "SMITH"`
  For all search keys that use strings, a message matches the key if the string is a substring of the field. Las coincidencias no diferencian entre mayúsculas y minúsculas.

- **Search-keys with a field-name value**: the field-name is the name of a header field.
  Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces.
  Example: `searchCriteria = KEYWORD \Flagged \Draft`

- **Search-keys with a message set value**: Identifies a set of messages. En el caso de los números de secuencia de los mensajes, se trata de números consecutivos desde el 1 hasta el número total de mensajes en el buzón. Los números son separados por coma; un dos puntos (:) delimita entre dos números inclusive.
  Examples:
  `2,4:7,9,12:*` is `2,4,5,6,7,9,12,13,14,15` for a mailbox with 15 messages.
  `searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set.
  `searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.

#### Teclas de búsqueda disponibles

**ALL**: All messages in the mailbox.\
**ANSWERED**: Messages with the \Answered flag set.\
**UNANSWERED**: Messages that do not have the \Answered flag set.\
**DELETED**: Messages with the \Deleted flag set.\
**UNDELETED**: Messages that do not have the \Deleted flag set.\
**DRAFT**: Messages with the \Draft flag set.\
**UNDRAFT**: Messages that do not have the \Draft flag set.\
**FLAGGED**: Messages with the \Flagged flag set.\
**UNFLAGGED**: Messages that do not have the \Flagged flag set.\
**RECENT**: Messages that have the \Recent flag set.\
**OLD**: Messages that do not have the \Recent flag set.\
**SEEN**: Messages that have the \Seen flag set.\
**UNSEEN**: Messages that do not have the \Seen flag set.\
**NEW**: Messages that have the \Recent flag set but not the \Seen flag. This is functionally equivalent to “(RECENT UNSEEN)”.\
**KEYWORD _flag_**: Messages with the specified keyword set.\
**UNKEYWORD _flag_**: Messages that do not have the specified keyword set.\
**BEFORE _date_**: Messages whose internal date is earlier than the specified date.\
**ON _date_**: Messages whose internal date is within the specified date.\
**SINCE _date_**: Messages whose internal date is within or later than the specified date.\
**SENTBEFORE _date_**: Messages whose Date header is earlier than the specified date.\
**SENTON _date_**: Messages whose Date header is within the specified date.\
**SENTSINCE _date_**: Messages whose Date header is within or later than the specified date.\
**TO _string_**: Messages that contain the specified string in the TO header.\
**FROM _string_**: Messages that contain the specified string in the FROM header.\
**CC _string_**: Messages that contain the specified string in the CC header.\
**BCC _string_**: Messages that contain the specified string in the BCC header.\
**SUBJECT _string_**: Messages that contain the specified string in the Subject header.\
**BODY _string_**: Messages that contain the specified string in the message body.\
**TEXT _string_**: Messages that contain the specified string in the header or in the message body.\
**HEADER _field-name_ _string_**: Messages that have a header with the specified field-name and that contain the specified string in the field-body.\
**UID _message-UID_**: Messages with unique identifiers corresponding to the specified unique identifier set.\
**LARGER _n_**: Messages with a size larger than the specified number of bytes.\
**SMALLER _n_**: Messages with a size smaller than the specified number of bytes.\
**NOT _search-key_**: Messages that do not match the specified search key.\
**OR _search-key1_ _search-key2_**: Messages that match either search key.

<!-- END REF -->

<!-- REF IMAPTransporterClass.selectBox().Desc -->

## .selectBox()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                               |
| ----------- | -------------------------------------------- |
| 20          | _id_, _flags_, _permanentFlags_ are returned |
| 18 R4       | Añadidos                                     |

</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.selectBox().Params -->

| Parámetros | Tipo    |     | Descripción               |
| ---------- | ------- | :-: | ------------------------- |
| name       | Text    |  -> | Nombre del buzón          |
| state      | Integer |  -> | Estado de acceso al buzón |
| Result     | Object  |  <- | objeto boxInfo            |

<!-- END REF -->

#### Descripción

The `.selectBox()` function <!-- REF #IMAPTransporterClass.selectBox().Summary -->selects the _name_ mailbox as the current mailbox<!-- END REF -->. Esta función permite recuperar la información sobre el buzón.

> To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the _name_ parameter, pass the name of the mailbox to access. El nombre representa una jerarquía inequívoca de izquierda a derecha, con niveles separados por un carácter delimitador específico. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

The optional _state_ parameter defines the type of access to the mailbox. Los valores posibles son:

| Constante             | Valor | Comentario                                                                                                                                                                                                                                                          |
| --------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1     | Se accede al buzón seleccionado con privilegios de sólo lectura. Los mensajes con la bandera "reciente" (que indica que son nuevos) no se modifican.                                                             |
| IMAP read write state | 0     | Se accede al buzón seleccionado con privilegios de lectura y escritura. Los mensajes se consideran "vistos" y pierden la bandera "reciente" (que indica que son mensajes nuevos). Default value: |

> - The function generates an error and returns **Null** if _name_ designates a non-existing mailbox.
> - If there is no open connection, `.selectBox()` will open a connection.
> - If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**Objeto devuelto**

The `boxInfo` object returned contains the following properties:

| Propiedad      | Tipo   | Descripción                                                                                                                                                             |
| -------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name           | Text   | Nombre del buzón                                                                                                                                                        |
| mailCount      | number | Número de mensajes en el buzón                                                                                                                                          |
| mailRecent     | number | Número de mensajes con la bandera "recent"                                                                                                                              |
| id             | text   | Id. único del buzón                                                                                                                                     |
| flags          | text   | Lista de banderas utilizadas actualmente para el buzón, separadas por espacios                                                                                          |
| permanentFlags | text   | Lista de banderas que el cliente puede cambiar permanentemente (excepto el indicador \Recent, que gestiona el servidor IMAP), separados por espacios |

:::info

If `permanentFlags` string includes the special flag \*, it means that the server supports [custom flags](#addflags).

:::

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

<!-- END REF -->

<!-- REF IMAPTransporterClass.subscribe().Desc -->

## .subscribe()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.subscribe().Syntax -->**.subscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.subscribe().Params -->

| Parámetros | Tipo   |     | Descripción                      |
| ---------- | ------ | :-: | -------------------------------- |
| name       | Text   |  -> | Nombre del buzón                 |
| Result     | Object |  <- | Estado de la operación subscribe |

<!-- END REF -->

#### Descripción

The `.subscribe()` function <!-- REF #IMAPTransporterClass.subscribe().Summary -->allows adding or removing of the specified mailbox to/from the IMAP server’s set of “subscribed” mailboxes<!-- END REF -->. De este modo, puede optar por acotar una gran lista de buzones disponibles suscribiéndose a los que habitualmente consulta.

In the `name` parameter, pass the name of the mailbox to add (subscribe) to your "subscribed" mailboxes.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                           |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D   |
| errors     |                                                                                             | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP) |
|            | \[].errcode            | Number     | Código de error 4D                                                                                  |
|            | \[].message            | Text       | Descripción del error 4D                                                                            |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                               |

#### Ejemplo

Para suscribirse al buzón "Atlas Corp" en la jerarquía "Bills":

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.subscribe($name)

If ($status.success)
   ALERT("Mailbox subscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.unsubscribe().Desc -->

## .unsubscribe()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.unsubscribe().Syntax -->**.unsubscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.unsubscribe().Params -->

| Parámetros | Tipo   |     | Descripción                        |
| ---------- | ------ | :-: | ---------------------------------- |
| name       | Text   |  -> | Nombre del buzón                   |
| Result     | Object |  <- | Estado de la operación unsubscribe |

<!-- END REF -->

#### Descripción

The `.unsubscribe()` function <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->removes a mailbox from a set of subscribed mailboxes<!-- END REF -->. Esto le permite reducir el número de buzones que suele ver.

In the `name` parameter, pass the name of the mailbox to remove (unsubscribe) from your active mailboxes.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                           |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D   |
| errors     |                                                                                             | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP) |
|            | \[].errcode            | Number     | Código de error 4D                                                                                  |
|            | \[].message            | Text       | Descripción del error 4D                                                                            |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                               |

#### Ejemplo

Para desuscribirse del buzón "Atlas Corp" en la jerarquía "Bills":

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.unsubscribe($name)

If ($status.success)
   ALERT("Mailbox unsubscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
