---
id: IMAPTransporterClass
title: IMAPTransporter
---

The `IMAPTransporter` class allows you to retrieve messages from a IMAP email server.


### Objeto IMAP Transporter

IMAP Transporter objects are instantiated with the [IMAP New transporter](#imap-new-transporter) command. They provide the following properties and functions:

|                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.append().Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.copy().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.delete().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.move().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



## IMAP New transporter

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->
**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF IMAPTransporterClass.IMAP New transporter.Params -->
| Parámetros | Tipo               |    | Descripción                                         |
| ---------- | ------------------ |:--:| --------------------------------------------------- |
| server     | Objeto             | -> | Información del servidor de correo                  |
| Resultado  | 4D.IMAPTransporter | <- | [Objeto IMAP Transporter](#imap-transporter-object) |
<!-- END REF -->


#### Descripción

El comando `IMAP New transporter` <!-- REF #_command_.IMAP New transporter.Summary -->configura una nueva conexión IMAP<!-- END REF --> según el parámetro *server* y devuelve un nuevo objeto *transporter*. El objeto transportador devuelto se utilizará normalmente para recibir correos electrónicos.

En el parámetro *server*, pase un objeto que contenga las siguientes propiedades:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                 | Valor por defecto (si se omite)                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                               |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<p>Cadena de texto u objeto token que representan las credenciales de autorización OAuth 2. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[IMAP transporter](#imap-transporter-object)* object. | ninguno                                                             |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| the most secure authentication mode supported by the server is used |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->| 300                                                                 |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obligatorio*                                                       |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| ninguno                                                             |
| .**password** : Text<p>Contraseña del usuario para la autenticación en el servidor. Not returned in *[IMAP transporter](#imap-transporter-object)* object.                                                                                                                                                                                                                                                       | ninguno                                                             |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 993                                                                 |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| ninguno                                                             |
> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.


#### Resultado

La función devuelve un [**IMAP transporter**](#imap-transporter-object). Todas las propiedades devueltas son **de sólo lectura**.
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


<!-- REF #4D.IMAPTransporter.new().Syntax -->
**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #4D.IMAPTransporter.new().Params -->
| Parámetros | Tipo               |    | Descripción                                         |
| ---------- | ------------------ |:--:| --------------------------------------------------- |
| server     | Objeto             | -> | Información del servidor de correo                  |
| Resultado  | 4D.IMAPTransporter | <- | [Objeto IMAP Transporter](#imap-transporter-object) |
<!-- END REF -->

#### Descripción

La función `4D.IMAPTransporter.new()` <!-- REF #4D.IMAPTransporter.new().Summary -->crea y devuelve un nuevo objeto del tipo `4D.IMAPTransporter`<!-- END REF -->. Es idéntico al comando [`IMAP New transporter`](#imap-new-transporter) (acceso directo).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->


<!-- REF IMAPTransporterClass.addFlags().Desc -->
## .addFlags()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.addFlags().Syntax -->
**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.addFlags().Params -->
| Parámetros | Tipo       |    | Descripción                                                                                                                                                                    |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| msgIDs     | Collection | -> | Colección de cadenas: identificadores únicos de mensajes (texto)<br>Texto: ID único de un mensaje<br>Longint (IMAP all): todos los mensajes del buzón seleccionado |
| keywords   | Objeto     | -> | Banderas de palabras claves a añadir                                                                                                                                           |
| Resultado  | Objeto     | <- | Estado de la operación addFlags                                                                                                                                                |
<!-- END REF -->


#### Descripción

La función `.addFlags()` <!-- REF #IMAPTransporterClass.addFlags().Summary -->añade banderas a los `msgIDs` para las `keywords`<!-- END REF -->.

En el parámetro `msgIDs`, puede pasar:

*   una *collection* contiene los identificadores únicos de mensajes específicos, o
*   el ID único (*texte*) de un solo mensaje o
*   la siguiente constante (*longint*) para todos los mensajes del buzón seleccionado:

    | Constante | Valor | Comentario                                            |
    | --------- | ----- | ----------------------------------------------------- |
    | IMAP all  | 1     | Seleccionar todos los mensajes del buzón seleccionado |

El parámetro `keywords` le permite pasar un objeto con valores de palabras clave para las banderas específicas que se añadirán a `msgIDs`. Puede pasar cualquiera de las siguientes palabras claves:

| Parámetros | Tipo     | Descripción                                    |
| ---------- | -------- | ---------------------------------------------- |
| $draft     | Booleano | True to add the "draft" flag to the message    |
| $seen      | Booleano | True to add the "seen" flag to the message     |
| $flagged   | Booleano | True to add the "flagged" flag to the message  |
| $answered  | Booleano | True to add the "answered" flag to the message |
| $deleted   | Booleano | True to add the "deleted" flag to the message  |
> * Los valores falsos se ignoran.
> * The interpretation of keyword flags may vary per mail client.


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Description of the 4D error                                                                          |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |


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

<!-- END REF -->


<!-- REF IMAPTransporterClass.append().Desc -->
## .append()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.append().Syntax -->
**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.append().Params -->
| Parámetros     | Tipo   |    | Descripción                                 |
| -------------- | ------ |:--:| ------------------------------------------- |
| mailObj        | Objeto | -> | Objeto Email                                |
| destinationBox | Texto  | -> | Buzón para recibir el objeto Email          |
| options        | Objeto | -> | Objeto que contiene información del charset |
| Resultado      | Objeto | <- | Estado de la operación                      |
<!-- END REF -->


#### Descripción

La función `.append()` <!-- REF #IMAPTransporterClass.append().Summary -->añade el objeto `mailObj` a la caja `destinationBox`<!-- END REF -->.

En el parámetro `mailObj`, pase un objeto Email. Para una descripción completa de las propiedades del correo, ver [objeto Email](EmailObjectClass.md#email-object). La función `.append()` soporta los marcadores de palabras clave en el atributo `keywords` de los objetos email.

El parámetro opcional `destinationBox` permite pasar el nombre del buzón donde se añadirá el objeto `mailObj`. Si se omite, se utiliza el buzón actual.

En el parámetro opcional `options`, puede pasar un objeto para definir el charset y la codificación para partes específicas del correo electrónico. Propiedades disponibles:

| Propiedad     | Tipo  | Descripción                                                                                                                                                                    |
| ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| headerCharset | Texto | Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s). Possible values: See possible charsets table below |
| bodyCharset   | Texto | Charset and encoding used for the html and text body contents of the email. Possible values: See possible charsets table below                                                 |

Charsets posibles:

| Constante                | Valor                          | Comentario                                                                                                |
| ------------------------ | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>                                                                                 |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                 |
| mail mode UTF8           | US-ASCII_UTF8_QP             | headerCharset & bodyCharset: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | headerCharset & bodyCharset: US-ASCII if possible, otherwise UTF-8 & base64                               |


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Description of the 4D error                                                                          |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |


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



## .checkConnectionDelay

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->
**.checkConnectionDelay** : Integer<!-- END REF -->


#### Descripción

La propiedad `.checkConnectionDelay` contiene la <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->duración máxima (en segundos) permitida antes de verificar la conexión al servidor<!-- END REF -->.  Si se supera este tiempo entre dos llamadas al método, se comprobará la conexión con el servidor. Por defecto, si la propiedad no se ha definido en el objeto *server<*, el valor es de 300.
> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.



<!-- INCLUDE transporter.connectionTimeOut.Desc -->



<!-- REF IMAPTransporterClass.copy().Desc -->
## .copy()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.copy().Syntax -->
**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.copy().Params -->
| Parámetros     | Tipo       |    | Descripción                                               |
| -------------- | ---------- |:--:| --------------------------------------------------------- |
| msgsIDs        | Collection | -> | Colección de identificadores únicos de mensajes (cadenas) |
| allMsgs        | Integer    | -> | `IMAP all`: todos los mensajes del buzón seleccionado     |
| destinationBox | Texto      | -> | Buzón para recibir mensajes copiados                      |
| Resultado      | Objeto     | <- | Estado de la operación de copia                           |
<!-- END REF -->


#### Descripción

La función `.copy()` <!-- REF #IMAPTransporterClass.copy().Summary -->copia los mensajes definidos en *msgsIDs* o *allMsgs* en la *destinationBox* en el servidor IMAP<!-- END REF -->.

Puede pasar:

- en el parámetro *msgsIDs*, una colección contiene los IDs únicos de los mensajes específicos a copiar, o
- en el parámetro *allMsgs*, la constante `IMAP all` (entero) para copiar todos los mensajes del buzón seleccionado.

El parámetro *destinationBox* permite pasar un valor texto con el nombre del buzón donde se colocarán las copias de los mensajes.


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Description of the 4D error                                                                          |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |




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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19     | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.createBox().Syntax -->
**.createBox**( *name* :  Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.createBox().Params -->
| Parámetros | Tipo   |    | Descripción                                  |
| ---------- | ------ |:--:| -------------------------------------------- |
| name       | Texto  | -> | Nombre del nuevo buzón                       |
| Resultado  | Objeto | <- | Estado de la operación de creación del buzón |
<!-- END REF -->


#### Descripción

La función `.createBox()` <!-- REF #IMAPTransporterClass.createBox().Summary -->crea un buzón con el `name` pasado<!-- END REF -->. Si el carácter separador de jerarquía del servidor IMAP aparece en otra parte del nombre del buzón, el servidor IMAP creará todos los nombre padre necesarios para crear el buzón dado.

En otras palabras, un intento de crear "Projects/IMAP/Doc" en un servidor en el que "/" es el carácter separador de jerarquía creará:

*   Sólo el buzón "Doc" si "Projects" & "IMAP" ya existen.
*   Los buzones "IMAP" & "Doc" si sólo existe "Projects".
*   Los buzones "Projects" & "IMAP" & "Doc", si no existen.

En el parámetro `name`, pasa el nombre del nuevo buzón.


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Description of the 4D error                                                                          |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |




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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.delete().Syntax -->
**.delete**( *msgsIDs* : Collection ) : Object<br>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.delete().Params -->
| Parámetros | Tipo       |    | Descripción                                               |
| ---------- | ---------- |:--:| --------------------------------------------------------- |
| msgsIDs    | Collection | -> | Colección de identificadores únicos de mensajes (cadenas) |
| allMsgs    | Integer    | -> | `IMAP all`: todos los mensajes del buzón seleccionado     |
| Resultado  | Objeto     | <- | Estado de la operación de eliminación                     |
<!-- END REF -->


#### Descripción

La función `.delete()` <!-- REF #IMAPTransporterClass.delete().Summary -->asocia el marcador "deleted" a los mensajes designados por `msgsIDs` o `allMsgs`<!-- END REF -->.

Puede pasar:

- en el parámetro `msgsIDs`, una colección contiene los IDs únicos de los mensajes específicos a eliminar, o
- en el parámetro `allMsgs`, la constante `IMAP all` (entero) para eliminar todos los mensajes del buzón seleccionado.

La ejecución de esta función no elimina realmente los mensajes. Los mensajes con la bandera "delete" pueden seguir siendo encontrados por la función [.searchMails()](#searchmails). Los mensajes marcados se eliminan del servidor IMAP con la función [`.expunge()`](#expunge) o al seleccionar otro buzón o cuando se destruye el objeto [transporter](#imap-transporter-object) (creado con [IMAP New transporter](#imap-new-transporter)).



**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Description of the 4D error                                                                          |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |




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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19     | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->
**.deleteBox**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.deleteBox().Params -->
| Parámetros | Tipo  |    | Descripción                 |
| ---------- | ----- |:--:| --------------------------- |
| name       | Texto | -> | Nombre del buzón a eliminar |

|Result|Object|<-|Status of the mailbox deletion operation|
<!-- END REF -->


#### Descripción

The `.deleteBox()` function <!-- REF #IMAPTransporterClass.deleteBox().Summary -->permanently removes the mailbox with the given `name` from the IMAP server<!-- END REF -->. Attempting to delete an INBOX or a mailbox that does not exist will generate an error.

In the `name` parameter, pass the name of the mailbox to delete.
> * The function cannot delete a mailbox that has child mailboxes if the parent mailbox has the "\Noselect" attribute.
> * All messages in the deleted mailbox will also be deleted.
> * The ability to delete a mailbox depends on the mail server.


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Description of the 4D error                                                                          |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |




#### Ejemplo

To delete the "Nova Orion Industries" child mailbox from the "Bills" mailbox hierarchy:

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.expunge().Syntax -->
**.expunge()** : Object<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Params -->
| Parámetros | Tipo   |    | Descripción                    |
| ---------- | ------ |:--:| ------------------------------ |
| Resultado  | Objeto | <- | Estado de la operación expunge |
<!-- END REF -->

#### Descripción

The `.expunge()` function <!-- REF #IMAPTransporterClass.expunge().Summary -->removes all messages with the "deleted" flag from the IMAP mail server.<!-- END REF --> The "deleted" flag can be set with the [`.delete()`](#delete) or [`.addFlags()`](#addflags) methods.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Description of the 4D error                                                                          |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |


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

<!-- END REF -->


<!-- REF IMAPTransporterClass.getBoxInfo().Desc -->
## .getBoxInfo()

<details><summary>Histórico</summary>
| Versión | Modificaciones     |
| ------- | ------------------ |
| v18 R5  | *name* is optional |

|v18 R4|Added| </details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->
| Parámetros | Tipo   |    | Descripción      |
| ---------- | ------ |:--:| ---------------- |
| name       | Texto  | -> | Nombre del buzón |
| Resultado  | Objeto | <- | objeto boxInfo   |
<!-- END REF -->


#### Descripción

The `.getBoxInfo()` function <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the current maibox, or the mailbox *name*<!-- END REF -->. This function returns the same information as [`.selectBox()`](#selectbox) without changing the current mailbox.

In the optional *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

If the mailbox *name* is not selectable or does not exist, the function generates an error and returns **null**.

**Objeto devuelto**

El objeto `boxInfo` devuelto contiene las siguientes propiedades:

| Propiedad  | Tipo   | Descripción                                                                    |
| ---------- | ------ | ------------------------------------------------------------------------------ |
| name       | texto  | Nombre del buzón                                                               |
| mailCount  | number | Número de mensajes en el buzón                                                 |
| mailRecent | number | Número de mensajes con el marcador "reciente" (que indica los mensajes nuevos) |



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

<details><summary>Histórico</summary>
| Versión | Modificaciones               |
| ------- | ---------------------------- |
| v18 R4  | Añadidos                     |
| v19     | Add `isSubscribed` parameter |
</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->
**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxList().Params -->
| Parámetros | Tipo       |    | Descripción                  |
| ---------- | ---------- |:--:| ---------------------------- |
| parameters | Objeto     | -> | Objeto de parámetro          |
| Resultado  | Collection | <- | Colección de objetos mailbox |
<!-- END REF -->


#### Descripción

The `.getBoxList()` function <!-- REF #IMAPTransporterClass.getBoxList().Summary -->returns a collection of mailboxes describing all of the available mailboxes<!-- END REF -->. This function allows you to locally manage the list of messages located on the IMAP mail server.

In the optional `parameters` parameter, pass an object containing values to filter the returned mailboxes. Puede pasar:

| Propiedad    | Tipo     | Descripción                                          |
| ------------ | -------- | ---------------------------------------------------- |
| isSubscribed | Booleano | <li>**True** para devolver sólo los buzones suscritos</li><li> **False** para devolver todos los buzones disponibles</li> |

#### Resultado

Each object of the returned collection contains the following properties:

| Propiedad        | Tipo     | Descripción                                                                                                        |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| \[].name        | texto    | Nombre del buzón                                                                                                   |
| \[].selectable  | booleano | Indica si los derechos de acceso permiten o no seleccionar el buzón: <ul><li>true - el buzón puede ser seleccionado</li><li>false - el buzón no puede ser seleccionado</li></ul>                     |
| \[].inferior    | booleano | Indica si los derechos de acceso permiten o no crear una jerarquía inferior en el buzón: <ul><li>true - se puede crear un nivel inferior</li><li>false - no se puede crear un nivel inferior</li></ul> |
| \[].interesting | booleano | Indica si el buzón ha sido marcado como "interesante" por el servidor: <ul><li>true - El buzón ha sido marcado como "interesante" por el servidor. Por ejemplo, puede contener mensajes nuevos.</li><li>false - El buzón no ha sido marcado como "interesante" por el servidor.</li></ul>                   |


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

<!-- END REF -->



<!-- REF IMAPTransporterClass.getDelimiter().Desc -->
## .getDelimiter()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.getDelimiter().Syntax -->
**.getDelimiter()** : Text<!-- END REF -->

<!-- REF #IMAPTransporterClass.getDelimiter().Params -->
| Parámetros | Tipo  |    | Descripción                   |
| ---------- | ----- |:--:| ----------------------------- |
| Resultado  | Texto | <- | Hierarchy delimiter character |
<!-- END REF -->


#### Descripción

The `.getDelimiter()` function <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->returns the character used to delimit levels of hierarchy in the mailbox name<!-- END REF -->.

The delimiter is a character which can be used to:

*   crear buzones de nivel inferior
*   buscar más arriba o más abajo en la jerarquía del buzón


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

<!-- END REF -->



<!-- REF IMAPTransporterClass.getMail().Desc -->
## .getMail()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.getMail().Syntax -->
**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMail().Params -->
| Parámetros | Tipo    |    | Descripción                                      |
| ---------- | ------- |:--:| ------------------------------------------------ |
| msgNumber  | Integer | -> | Sequence number of the message                   |
| msgID      | Texto   | -> | ID único del mensaje                             |
| options    | Objeto  | -> | Message handling instructions                    |
| Resultado  | Objeto  | <- | [Objeto Email](EmailObjectClass.md#email-object) |
<!-- END REF -->


#### Descripción

The `.getMail()` function <!-- REF #IMAPTransporterClass.getMail().Summary -->returns the `Email` object corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->. Esta función le permite manejar localmente el contenido del correo electrónico.

In the first parameter, you can pass either:

*   *msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or
*   *msgID*, a *text* value indicating the unique ID of the message to retrieve.

The optional *options* parameter allows you pass an object defining additional instructions for handling the message. Las siguientes propiedades están disponibles:

| Propiedad  | Tipo     | Descripción                                                                                                                      |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | booleano | Si True, el mensaje se marca como "visto" en el buzón. Si es False, el mensaje no se marca como "visto". Valor por defecto: True |
| withBody   | booleano | Pase True para devolver el cuerpo del mensaje. Si es False, sólo se devuelve el encabezado del mensaje. Valor por defecto: True  |
> * The function generates an error and returns **Null** if *msgID* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
> * If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)`.



#### Resultado



`.getMail()` returns an [`Email` object](EmailObjectClass.md#email-object) with the following specific IMAP properties: *id*, *receivedAt*, and *size*.

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

<!-- END REF -->



<!-- REF IMAPTransporterClass.getMails().Desc -->
## .getMails()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.getMails().Syntax -->
**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->
| Parámetros | Tipo       |    | Descripción                                              |
| ---------- | ---------- |:--:| -------------------------------------------------------- |
| ids        | Collection | -> | Collection of message ID                                 |
| startMsg   | Integer    | -> | Sequence number of the first message                     |
| endMsg     | Integer    | -> | Sequence number of the last message                      |
| options    | Objeto     | -> | Message handling instructions                            |
| Resultado  | Objeto     | <- | Objeto que contiene:<br><ul><li>a collection of [Email objects](EmailObjectClass.md#email-object) and</li><li>a collection of IDs or numbers for missing messages, if any</li></ul> |
<!-- END REF -->


#### Descripción

The `.getMails()` function <!-- REF #IMAPTransporterClass.getMails().Summary -->returns an object containing a collection of `Email` objects<!-- END REF -->.

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

| Propiedad  | Tipo     | Descripción                                                                                                                                         |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | Booleano | Si True, los mensajes especificados se marcan como "vistos" en el buzón. Si False, los mensajes no se marcan como "vistos". Valor por defecto: True |
| withBody   | Booleano | Pase True para devolver el cuerpo de los mensajes específicos. Si False, sólo se devuelve los encabezados de los mensajes. Valor por defecto: True  |
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
> * If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).


#### Resultado

`.getMails()` returns an object containing the following collections:


| Propiedad | Tipo       | Descripción                                                                                                                           |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| lista     | Collection | Colección de objetos [`Email`](EmailObjectClass.md#email-object). Si no se encuentran objetos Email, se devuelve una colección vacía. |
| notFound  | Collection | Colección de:<br><ul><li>first syntax - previously passed message IDs that do not exist</li><li>second syntax - sequence numbers of messages between startMsg and endMsg that do not exist</li></ul>An empty collection is returned if all messages are found.                           |


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

<!-- END REF -->



<!-- REF IMAPTransporterClass.getMIMEAsBlob().Desc -->
## .getMIMEAsBlob()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->


<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->
| Parámetros | Tipo     |    | Descripción                                                                                   |
| ---------- | -------- |:--:| --------------------------------------------------------------------------------------------- |
| msgNumber  | Integer  | -> | Sequence number of the message                                                                |
| msgID      | Texto    | -> | ID único del mensaje                                                                          |
| updateSeen | Booleano | -> | If True, the message is marked "seen" in the mailbox. If False the message is left untouched. |
| Resultado  | BLOB     | <- | Blob de la cadena MIME devuelta por el servidor de correo                                     |
<!-- END REF -->




#### Descripción

The `.getMIMEAsBlob()` function <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->.

In the first parameter, you can pass either:

*   *msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or
*   *msgID*, a *text* value indicating the unique ID of the message to retrieve.

The optional *updateSeen* parameter allows you to specify if the message is marked as "seen" in the mailbox. Puede pasar:

*   **True** - para marcar el mensaje como "visto" (indicando que el mensaje ha sido leído)
*   **False** - para dejar intacto el estado "visto" del mensaje
> * The function returns an empty BLOB if *msgNumber* or msgID* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
> * If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox()`.


#### Resultado

`.getMIMEAsBlob()` devuelve un `BLOB` que puede almacenarse en una base de datos o convertirse en un objeto [`Email`](EmailObjectClass.md#email-object) con el comando `MAIL Convert from MIME`.


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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.move().Syntax -->
**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->
| Parámetros     | Tipo       |    | Descripción                                               |
| -------------- | ---------- |:--:| --------------------------------------------------------- |
| msgsIDs        | Collection | -> | Colección de identificadores únicos de mensajes (cadenas) |
| allMsgs        | Integer    | -> | `IMAP all`: todos los mensajes del buzón seleccionado     |
| destinationBox | Texto      | -> | Mailbox to receive moved messages                         |
| Resultado      | Objeto     | <- | Estado de la operación de desplazamiento                  |
<!-- END REF -->


#### Descripción

The `.move()` function <!-- REF #IMAPTransporterClass.move().Summary -->moves the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server<!-- END REF -->.

Puede pasar:

- en el parámetro *msgsIDs*, una colección contiene los IDs únicos de los mensajes específicos a mover, o
- en el parámetro *allMsgs*, la constante `IMAP all` (entero) para mover todos los mensajes del buzón seleccionado.

The *destinationBox* parameter allows you to pass a text value with the name of the mailbox where the messages will be moved.

> This function is only supported by IMAP servers compliant with RFC [8474](https://tools.ietf.org/html/rfc8474).


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Description of the 4D error                                                                          |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |




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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.numToID().Syntax -->
**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.numToID().Params -->
| Parámetros | Tipo       |    | Descripción                          |
| ---------- | ---------- |:--:| ------------------------------------ |
| startMsg   | Integer    | -> | Sequence number of the first message |
| endMsg     | Integer    | -> | Sequence number of the last message  |
| Resultado  | Collection | <- | Collection of unique IDs             |
<!-- END REF -->


#### Descripción

The `.numToID()` function <!-- REF #IMAPTransporterClass.numToID().Summary -->converts the sequence numbers to IMAP unique IDs for the messages in the sequential range designated by *startMsg* and *endMsg*<!-- END REF --> in the currently selected mailbox.

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

<!-- END REF -->


<!-- REF IMAPTransporterClass.removeFlags().Desc -->
## .removeFlags()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->
**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->
| Parámetros | Tipo       |    | Descripción                                                                                                                                                                    |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| msgIDs     | Collection | -> | Colección de cadenas: identificadores únicos de mensajes (texto)<br>Texto: ID único de un mensaje<br>Longint (IMAP all): todos los mensajes del buzón seleccionado |
| keywords   | Objeto     | -> | Banderas de palabras claves a eliminar                                                                                                                                         |
| Resultado  | Objeto     | <- | Estado de la operación removeFlags                                                                                                                                             |
<!-- END REF -->


#### Descripción

The `.removeFlags()` function <!-- REF #IMAPTransporterClass.removeFlags().Summary -->removes flags from the `msgIDs` for the specified `keywords`<!-- END REF -->.

En el parámetro `msgIDs`, puede pasar:

*   una *collection* contiene los identificadores únicos de mensajes específicos, o
*   el ID único (*texte*) de un solo mensaje o
*   la siguiente constante (*longint*) para todos los mensajes del buzón seleccionado:

    | Constante | Valor | Comentario                                            |
    | --------- | ----- | ----------------------------------------------------- |
    | IMAP all  | 1     | Seleccionar todos los mensajes del buzón seleccionado |

The `keywords` parameter lets you pass an object with keyword values for specific flags to remove from `msgIDs`. Puede pasar cualquiera de las siguientes palabras claves:

| Parámetros | Tipo     | Descripción                                           |
| ---------- | -------- | ----------------------------------------------------- |
| $draft     | Booleano | True para eliminar el marcador "draft" del mensaje    |
| $seen      | Booleano | True para eliminar el marcador "seen" del mensaje     |
| $flagged   | Booleano | True para eliminar el marcador "flagged" del mensaje  |
| $answered  | Booleano | True para eliminar el marcador "answered" del mensaje |
| $deleted   | Booleano | True para eliminar el marcador "deleted" del mensaje  |

Note que los valores falsos se ignoran.


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Description of the 4D error                                                                          |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |


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

<!-- END REF -->





<!-- REF IMAPTransporterClass.renameBox().Desc -->
## .renameBox()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19     | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.renameBox().Syntax -->
**.renameBox**( *currentName* : Text ; *newName* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.renameBox().Params -->
| Parámetros  | Tipo   |    | Descripción                      |
| ----------- | ------ |:--:| -------------------------------- |
| currentName | Texto  | -> | Nombre del nuevo actual          |
| newName     | Texto  | -> | Nuevo nombre del buzón           |
| Resultado   | Objeto | <- | Estado de la operación renombrar |
<!-- END REF -->


#### Descripción

The `.renameBox()` function <!-- REF #IMAPTransporterClass.renameBox().Summary -->changes the name of a mailbox on the IMAP server<!-- END REF -->. Attempting to rename a mailbox from a mailbox name that does not exist or to a mailbox name that already exists will generate an error.

In the `currentName` parameter, pass the name of the mailbox to be renamed.

Pass the new name for the mailbox in the `newName` parameter.


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Description of the 4D error                                                                          |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |


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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.searchMails().Syntax -->
**.searchMails**( *searchCriteria* : Text ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.searchMails().Params -->
| Parámetros     | Tipo       |    | Descripción                   |
| -------------- | ---------- |:--:| ----------------------------- |
| searchCriteria | Texto      | -> | Criterio de búsqueda          |
| Resultado      | Collection | <- | Collection of message numbers |
<!-- END REF -->


#### Descripción

> This function is based upon the specification for the [IMAP protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

The `.searchMails()` function <!-- REF #IMAPTransporterClass.searchMails().Summary -->searches for messages that match the given *searchCriteria* in the current mailbox<!-- END REF -->. *searchCriteria* consists of one or more search keys.

*searchCriteria* is a text parameter listing one or more search keys (see [Authorized search-keys](#authorized-search-keys) below) associated or not with values to look for. A search key may be a single or multiple items. Por ejemplo:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> Matching is usually not case-sensitive

- Si el *searchCriteria* es una cadena null, la búsqueda será equivalente a un "seleccionar todo".
- Si *searchCriteria* incluye varias llaves de búsqueda, el resultado es la intersección (función AND) de todos los mensajes que coinciden con esas llaves.

```
searchCriteria = FLAGGED FROM "SMITH"
```
... returns all messages with \Flagged flag set AND sent by Smith.
- Puede utilizar los operadores **OR** o **NOT** de la siguiente manera:

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


#### Tipos de valores de búsqueda

Search-keys may request the value to search for:

- **Search-keys with a field-name value**: the field-name is the name of a header field. Ejemplo: `searchCriteria = SENTBEFORE 1-Feb-2020` (una fecha no suele necesitar comillas, ya que no contiene caracteres especiales)

- **Search-keys with a string value**: the string may contain any character and must be quoted. If the string does not contain any special characters, like the space character for instance, it does not need to be quoted. Quoting such strings will ensure that your string value will be correctly interpreted. Ejemplo: `criterios de búsqueda = FROM "SMITH"` Para todas las llaves de búsqueda que utilizan cadenas, un mensaje coincide con la llave si la cadena es una subcadena del campo. Matching is not case-sensitive.

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = KEYWORD \Flagged \Draft`

- **Search-keys with a message set value**: Identifies a set of messages. For message sequence numbers, these are consecutive numbers from 1 to the total number of messages in the mailbox. A comma delimits individual numbers; a colon delimits between two numbers inclusive. Ejemplos: `2,4:7,9,12:*` es `2,4,5,6,7,9,12,13,14,15` para un buzón con 15 mensajes. `searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set. `searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.


#### Teclas de búsqueda disponibles

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
***KEYWORD ***flag******: Messages with the specified keyword set.  
***UNKEYWORD ***flag******: Messages that do not have the specified keyword set.  
***BEFORE ***date******: Messages whose internal date is earlier than the specified date.  
***ON ***date******: Messages whose internal date is within the specified date.  
***SINCE ***date******: Messages whose internal date is within or later than the specified date.  
***SENTBEFORE ***date******: Messages whose Date header is earlier than the specified date.  
***SENTON ***date******: Messages whose Date header is within the specified date.  
***SENTSINCE ***date******: Messages whose Date header is within or later than the specified date.  
***TO ***string******: Messages that contain the specified string in the TO header.  
***FROM ***string******: Messages that contain the specified string in the FROM header.  
***CC ***string******: Messages that contain the specified string in the CC header.  
***BCC ***string******: Messages that contain the specified string in the BCC header.  
***SUBJECT ***string******: Messages that contain the specified string in the Subject header.  
***BODY ***string******: Messages that contain the specified string in the message body.  
***TEXT ***string******: Messages that contain the specified string in the header or in the message body.  
***HEADER *field-name* ***string******: Messages that have a header with the specified field-name and that contain the specified string in the field-body.  
***UID ***message-UID******: Messages with unique identifiers corresponding to the specified unique identifier set.  
***LARGER ***n******: Messages with a size larger than the specified number of bytes.  
***SMALLER ***n******: Messages with a size smaller than the specified number of bytes.  
***NOT ***search-key******: Messages that do not match the specified search key.  
***OR *search-key1* ***search-key2******: Messages that match either search key.  


<!-- END REF -->


<!-- REF IMAPTransporterClass.selectBox().Desc -->
## .selectBox()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->
**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.selectBox().Params -->
| Parámetros | Tipo    |    | Descripción               |
| ---------- | ------- |:--:| ------------------------- |
| name       | Texto   | -> | Nombre del buzón          |
| state      | Integer | -> | Estado de acceso al buzón |
| Resultado  | Objeto  | <- | objeto boxInfo            |
<!-- END REF -->


#### Descripción

The `.selectBox()` function <!-- REF #IMAPTransporterClass.selectBox().Summary -->selects the *name* mailbox as the current mailbox<!-- END REF -->. Esta función permite recuperar la información sobre el buzón.
> To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

The optional *state* parameter defines the type of access to the mailbox. Los valores posibles son:

| Constante             | Valor | Comentario                                                                                                                                                                |
| --------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1     | The selected mailbox is accessed with read only privileges. Messages with a "recent" flag (indicating new messages) remain unchanged.                                     |
| IMAP read write state | 0     | The selected mailbox is accessed with read and write privileges. Messages are considered "seen" and lose the "recent" flag (indicating new messages). (Valor por defecto) |
> * The function generates an error and returns **Null** if *name* designates a non-existing mailbox.
> * If there is no open connection, `.selectBox()` will open a connection.
> * If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**Objeto devuelto**

El objeto `boxInfo` devuelto contiene las siguientes propiedades:

| Propiedad  | Tipo   | Descripción                                |
| ---------- | ------ | ------------------------------------------ |
| name       | Texto  | Nombre del buzón                           |
| mailCount  | number | Número de mensajes en el buzón             |
| mailRecent | number | Número de mensajes con la bandera "recent" |


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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19     | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.subscribe().Syntax -->
**.subscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.subscribe().Params -->
| Parámetros | Tipo   |    | Descripción                      |
| ---------- | ------ |:--:| -------------------------------- |
| name       | Texto  | -> | Nombre del buzón                 |
| Resultado  | Objeto | <- | Estado de la operación subscribe |
<!-- END REF -->


#### Descripción

The `.subscribe()` function <!-- REF #IMAPTransporterClass.subscribe().Summary -->allows adding or removing of the specified mailbox to/from the IMAP server’s set of “subscribed” mailboxes<!-- END REF -->. As such, you can choose to narrow down a large list of available mailboxes by subscribing to those you usually want to see.

In the `name` parameter, pass the name of the mailbox to add (subscribe) to your "subscribed" mailboxes.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Description of the 4D error                                                                          |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |



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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19     | Añadidos       |
</details>

<!-- REF #IMAPTransporterClass.unsubscribe().Syntax -->
**.unsubscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.unsubscribe().Params -->
| Parámetros | Tipo   |    | Descripción                        |
| ---------- | ------ |:--:| ---------------------------------- |
| name       | Texto  | -> | Nombre del buzón                   |
| Resultado  | Objeto | <- | Estado de la operación unsubscribe |
<!-- END REF -->


#### Descripción

The `.unsubscribe()` function <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->removes a mailbox from a set of subscribed mailboxes<!-- END REF -->. This allows you reduce the number of mailboxes you usually see.

In the `name` parameter, pass the name of the mailbox to remove (unsubscribe) from your active mailboxes.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Description of the 4D error                                                                          |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |



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




<style> h2 { background: #d9ebff;}</style>
