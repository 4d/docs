---
id: IMAPTransporterClass
title: IMAPTransporter
---

La clase `IMAPTransporter` permite recuperar mensajes de un servidor de mensajería IMAP.

### Objeto IMAP Transporter

Los objetos IMAP Transporter se instancian con el comando [IMAP New transporter](#imap-new-transporter). Ofrecen las siguientes propiedades y funciones:

|                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.append().Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.copy().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.delete().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.move().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|

## IMAP New transporter

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->

**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF IMAPTransporterClass.IMAP New transporter.Params -->
| Parámetros | Type               |    | Descripción                                                                    |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server     | Object             | -> | Información del servidor de correo                                             |
| Result     | 4D.IMAPTransporter | <- | [IMAP transporter object](#imap-transporter-object)|<!-- END REF -->

|

#### Descripción

The `IMAP New transporter` command <!-- REF #_command_.IMAP New transporter.Summary -->configures a new IMAP connection<!-- END REF --> according to the *server* parameter and returns a new *transporter* object. El objeto transportador devuelto se utilizará normalmente para recibir correos electrónicos.

En el parámetro *server*, pase un objeto que contenga las siguientes propiedades:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                   | Valor por defecto (si se omite)                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                                    |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. Sólo se utiliza con OAUTH2 `authenticationMode`. Si se utiliza `accessTokenOAuth2` pero se omite `authenticationMode`, se utiliza el protocolo OAuth 2 (si el servidor lo permite). No se devuelve en el objeto *[IMAP transporter](#imap-transporter-object)*. | ninguno                                                                  |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| se utiliza el modo de autenticación más seguro soportado por el servidor |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->| 300                                                                      |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                       |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *mandatory*                                                              |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| ninguno                                                                  |
| .**password** : Text<br/>User password for authentication on the server. No se devuelve en el objeto *[IMAP transporter](#imap-transporter-object)*.                                                                                                                                                                                                                                                                 | ninguno                                                                  |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 993                                                                      |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| ninguno                                                                  |
> **Atención**: asegúrese de que el tiempo de espera definido sea menor que el tiempo de espera del servidor, de lo contrario el tiempo de espera del cliente será inútil.

#### Result

La función devuelve un [**IMAP transporter**](#imap-transporter-object). Todas las propiedades devueltas son **de sólo lectura**.
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

<!-- REF #4D.IMAPTransporter.new().Syntax -->

**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #4D.IMAPTransporter.new().Params -->
| Parámetros | Type               |    | Descripción                                                                    |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server     | Object             | -> | Información del servidor de correo                                             |
| Result     | 4D.IMAPTransporter | <- | [IMAP transporter object](#imap-transporter-object)|<!-- END REF -->

|

#### Descripción

The `4D.IMAPTransporter.new()` function <!-- REF #4D.IMAPTransporter.new().Summary -->creates and returns a new object of the `4D.IMAPTransporter` type<!-- END REF -->. .

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- REF IMAPTransporterClass.addFlags().Desc -->
## .addFlags()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.addFlags().Syntax -->

**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.addFlags().Params -->
| Parámetros | Type       |    | Descripción                                                                                                                                                                      |
| ---------- | ---------- |:--:| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection | -> | Colección de cadenas: identificadores únicos de mensajes (texto)<br/>Texto: ID único de un mensaje<br/>Longint (IMAP all): todos los mensajes del buzón seleccionado |
| keywords   | Object     | -> | Banderas de palabras claves a añadir                                                                                                                                             |
| Result     | Object     | <- | Estado de la operación addFlags|<!-- END REF -->

|

#### Descripción

The `.addFlags()` function <!-- REF #IMAPTransporterClass.addFlags().Summary -->adds flags to the `msgIDs` for the specified `keywords`<!-- END REF -->.

En el parámetro `msgIDs`, puede pasar:

* una *collection* contiene los identificadores únicos de mensajes específicos, o
* el ID único (*texte*) de un solo mensaje o
* la siguiente constante (*longint*) para todos los mensajes del buzón seleccionado:

 | Constante | Value | Comentario                                            |
 | --------- | ----- | ----------------------------------------------------- |
 | IMAP all  | 1     | Seleccionar todos los mensajes del buzón seleccionado |

El parámetro `keywords` le permite pasar un objeto con valores de palabras clave para las banderas específicas que se añadirán a `msgIDs`. Puede pasar cualquiera de las siguientes palabras claves:

| Parámetros | Type    | Descripción                                        |
| ---------- | ------- | -------------------------------------------------- |
| $draft     | Boolean | True para añadir el marcador "draft" al mensaje    |
| $seen      | Boolean | True para añadir el marcador "seen" al mensaje     |
| $flagged   | Boolean | True para añadir el marcador "flagged" al mensaje  |
| $answered  | Boolean | True para añadir el marcador "answered" al mensaje |
| $deleted   | Boolean | True para añadir el marcador "deleted" al mensaje  |
> * Los valores falsos se ignoran.
> * La interpretación de los indicadores de palabras claves puede variar según el cliente de correo.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Type       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Boolean    | True si la operación tiene éxito, False en caso contrario                                |
| statusText |                         | Text       | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Number     | 4D error code                                                                            |
|            | \[].message            | Text       | Descripción del error 4D                                                                 |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                    |

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

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.append().Syntax -->

**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.append().Params -->
| Parámetros     | Type   |    | Descripción                                       |
| -------------- | ------ |:--:| ------------------------------------------------- |
| mailObj        | Object | -> | Objeto Email                                      |
| destinationBox | Text   | -> | Buzón para recibir el objeto Email                |
| options        | Object | -> | Objeto que contiene información del charset       |
| Result         | Object | <- | Estado de la operación|<!-- END REF -->

|

#### Descripción

The `.append()` function <!-- REF #IMAPTransporterClass.append().Summary -->appends a `mailObj` to the `destinationBox`<!-- END REF -->.

En el parámetro `mailObj`, pase un objeto Email. En el parámetro `mailObj`, pase un objeto Email. La función `.append()` soporta los marcadores de palabras clave en el atributo `keywords` de los objetos email.

El parámetro opcional `destinationBox` permite pasar el nombre del buzón donde se añadirá el objeto `mailObj`. Si se omite, se utiliza el buzón actual.

En el parámetro opcional `options`, puede pasar un objeto para definir el charset y la codificación para partes específicas del correo electrónico. Propiedades disponibles:

| Propiedad     | Type | Descripción                                                                                                                                                                                                                                   |
| ------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset y codificación utilizados para las siguientes partes del correo electrónico: asunto, nombres de archivos adjuntos y atributo(s) del nombre del correo electrónico. Valores posibles: ver la tabla de charsets posibles a continuación |
| bodyCharset   | Text | Charset y codificación utilizados para el contenido html y el texto del cuerpo del correo electrónico. Valores posibles: ver la tabla de charsets posibles a continuación                                                                     |

Charsets posibles:

| Constante                | Value                          | Comentario                                                                                                            |
| ------------------------ | ------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: US-ASCII si es posible, japonés (ISO-2022-JP) & Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII si es posible, japonés (ISO-2022-JP) y 7 bits si es posible, de lo contrario UTF-8 & Quoted-printable</li></ul>                                                                                             |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                             |
| mail mode UTF8           | US-ASCII_UTF8_QP             | headerCharset & bodyCharset: US-ASCII si es posible, de lo contrario UTF-8 & Quoted-printable (**valor por defecto**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | headerCharset & bodyCharset: US-ASCII si es posible, de lo contrario UTF-8 & base64                                   |

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Type       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Boolean    | True si la operación tiene éxito, False en caso contrario                                |
| statusText |                         | Text       | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Number     | 4D error code                                                                            |
|            | \[].message            | Text       | Descripción del error 4D                                                                 |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                    |

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
$msg.keywords["$seen"]:=True//marcar el mensaje como leído
$msg.keywords["$draft"]:=True//marcar el mensaje como borrador

$status:=$imap.append($msg; "Drafts")
```

<!-- END REF -->

<!-- INCLUDE transporter.authenticationModeIMAP.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Desc -->

## .checkConnectionDelay

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->

**.checkConnectionDelay** : Integer<!-- END REF -->

#### Descripción

The `.checkConnectionDelay` property contains <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->the maximum time (in seconds) allowed prior to checking the connection to the server<!-- END REF -->.  Si se supera este tiempo entre dos llamadas al método, se comprobará la conexión con el servidor. Por defecto, si la propiedad no se ha definido en el objeto *server<*, el valor es de 300.
> **Atención**: asegúrese de que el tiempo de espera definido sea menor que el tiempo de espera del servidor, de lo contrario el tiempo de espera del cliente será inútil.

<!-- END REF -->

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- REF IMAPTransporterClass.copy().Desc -->
## .copy()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.copy().Syntax -->

**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.copy().Params -->
| Parámetros     | Type       |    | Descripción                                                |
| -------------- | ---------- |:--:| ---------------------------------------------------------- |
| msgsIDs        | Collection | -> | Colección de identificadores únicos de mensajes (cadenas)  |
| allMsgs        | Integer    | -> | `IMAP all`: todos los mensajes del buzón seleccionado      |
| destinationBox | Text       | -> | Buzón para recibir mensajes copiados                       |
| Result         | Object     | <- | Estado de la operación de copia|<!-- END REF -->

|

#### Descripción

La función `.copy()` <!-- REF #IMAPTransporterClass.copy().Summary -->The `.getMails()` function<!-- END REF -->.

Puede pasar:

* en el parámetro *msgsIDs*, una colección contiene los IDs únicos de los mensajes específicos a copiar, o
* en el parámetro *allMsgs*, la constante `IMAP all` (entero) para copiar todos los mensajes del buzón seleccionado.

El parámetro *destinationBox* permite pasar un valor texto con el nombre del buzón donde se colocarán las copias de los mensajes.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Type       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Boolean    | True si la operación tiene éxito, False en caso contrario                                |
| statusText |                         | Text       | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Number     | 4D error code                                                                            |
|            | \[].message            | Text       | Descripción del error 4D                                                                 |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                    |

#### Ejemplo 1

Para copiar una selección de mensajes:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatorio
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //seleccionar buzón
 $boxInfo:=$transporter.selectBox("inbox")

  //obtener la colección de IDs únicos de los mensajes
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // copiar los mensajes encontrados en el buzón "documents"
 $status:=$transporter.copy($mailIds;"documents")
```

#### Ejemplo 2

Para copiar todos los mensajes del buzón actual:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatorio
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //seleccionar buzón

 $boxInfo:=$transporter.selectBox("inbox")

  // copiar los mensajes encontrados en el buzón "documents"
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
| Parámetros | Type   |    | Descripción                                                         |
| ---------- | ------ |:--:| ------------------------------------------------------------------- |
| name       | Text   | -> | Nombre del nuevo buzón                                              |
| Result     | Object | <- | Status of the mailbox creation operation|<!-- END REF -->

|

#### Descripción

The `.createBox()` function <!-- REF #IMAPTransporterClass.createBox().Summary -->creates a mailbox with the given `name`<!-- END REF -->. Si el carácter separador de jerarquía del servidor IMAP aparece en otra parte del nombre del buzón, el servidor IMAP creará todos los nombre padre necesarios para crear el buzón dado.

En otras palabras, un intento de crear "Projects/IMAP/Doc" en un servidor en el que "/" es el carácter separador de jerarquía creará:

* Sólo el buzón "Doc" si "Projects" & "IMAP" ya existen.
* Los buzones "IMAP" & "Doc" si sólo existe "Projects".
* Los buzones "Projects" & "IMAP" & "Doc", si no existen.

En el parámetro `name`, pasa el nombre del nuevo buzón.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Type       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Boolean    | True si la operación tiene éxito, False en caso contrario                                |
| statusText |                         | Text       | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Number     | 4D error code                                                                            |
|            | \[].message            | Text       | Descripción del error 4D                                                                 |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                    |

#### Ejemplo

Para crear un nuevo buzón "Invoices":

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

<!-- REF IMAPTransporterClass.delete().Desc -->
## .delete()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R5  | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.delete().Syntax -->

**.delete**( *msgsIDs* : Collection ) : Object<br/>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.delete().Params -->
| Parámetros | Type       |    | Descripción                                               |
| ---------- | ---------- |:--:| --------------------------------------------------------- |
| msgsIDs    | Collection | -> | Colección de identificadores únicos de mensajes (cadenas) |
| allMsgs    | Integer    | -> | `IMAP all`: todos los mensajes del buzón seleccionado     |
| Result     | Object     | <- | Status of the delete operation|<!-- END REF -->

|

#### Descripción

The `.delete()` function <!-- REF #IMAPTransporterClass.delete().Summary -->The `.removeFlags()` function<!-- END REF -->.

Puede pasar:

* en el parámetro `msgsIDs`, una colección contiene los IDs únicos de los mensajes específicos a eliminar, o
* en el parámetro `allMsgs`, la constante `IMAP all` (entero) para eliminar todos los mensajes del buzón seleccionado.

La ejecución de esta función no elimina realmente los mensajes. Los mensajes con la bandera "delete" pueden seguir siendo encontrados por la función [.searchMails()](#searchmails). Los mensajes marcados se eliminan del servidor IMAP con la función [`.expunge()`](#expunge) o al seleccionar otro buzón o cuando se destruye el objeto [transporter](#imap-transporter-object) (creado con [IMAP New transporter](#imap-new-transporter)).

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Type       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Boolean    | True si la operación tiene éxito, False en caso contrario                                |
| statusText |                         | Text       | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Number     | 4D error code                                                                            |
|            | \[].message            | Text       | Descripción del error 4D                                                                 |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                    |

#### Ejemplo 1

Para eliminar una selección de mensajes:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatorio
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //seleccionar buzón
 $boxInfo:=$transporter.selectBox("Inbox")

  //obtener la colección de IDs únicos de los mensajes
 $mailIds:=$transporter.searchMails("subject \"Reports\"")

  // Borrar los mensajes seleccionados
 $status:=$transporter.delete($mailIds)
```

#### Ejemplo 2

Para eliminar todos los mensajes del buzón actual:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatorio
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //seleccionar buzón
 $boxInfo:=$transporter.selectBox("Junk Email")

  // Borrar los mensajes seleccionados en el buzón actual
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
| Parámetros | Type |    | Descripción                 |
| ---------- | ---- |:--:| --------------------------- |
| name       | Text | -> | Nombre del buzón a eliminar |

|Result|Object|<-|Status of the mailbox deletion operation|<!-- END REF -->

#### Descripción

The `.deleteBox()` function <!-- REF #IMAPTransporterClass.deleteBox().Summary -->permanently removes the mailbox with the given `name` from the IMAP server<!-- END REF -->. Intentar eliminar un INBOX o un buzón que no existe generará un error.

En el parámetro `name`, pase el nombre del buzón a eliminar.
> * La función no puede eliminar un buzón que tiene buzones hijos si el buzón padre tiene el atributo "\Noselect".
> * Todos los mensajes del buzón eliminado también se borrarán.
> * La posibilidad de eliminar un buzón depende del servidor de correo.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Type       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Boolean    | True si la operación tiene éxito, False en caso contrario                                |
| statusText |                         | Text       | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Number     | 4D error code                                                                            |
|            | \[].message            | Text       | Descripción del error 4D                                                                 |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                    |

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
| Parámetros | Type   |    | Descripción                                                 |
| ---------- | ------ |:--:| ----------------------------------------------------------- |
| Result     | Object | <- | Status of the expunge operation |<!-- END REF -->

|

#### Descripción

The `.expunge()` function <!-- REF #IMAPTransporterClass.expunge().Summary -->removes all messages with the "deleted" flag from the IMAP mail server.<!-- END REF --> The "deleted" flag can be set with the [`.delete()`](#delete) or [`.addFlags()`](#addflags) methods.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Type       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Boolean    | True si la operación tiene éxito, False en caso contrario                                |
| statusText |                         | Text       | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Number     | 4D error code                                                                            |
|            | \[].message            | Text       | Descripción del error 4D                                                                 |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                    |

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

<details><summary>Histórico</summary>

| Versión | Modificaciones      |
| ------- | ------------------- |
| v18 R5  | *name<* es opcional |

|v18 R4|Added|

</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->

**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->
| Parámetros | Type   |    | Descripción                               |
| ---------- | ------ |:--:| ----------------------------------------- |
| name       | Text   | -> | Nombre del buzón                          |
| Result     | Object | <- | boxInfo object|<!-- END REF -->

|

#### Descripción

The `.getBoxInfo()` function <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the current maibox, or the mailbox *name*<!-- END REF -->. Esta función devuelve la misma información que [`.selectBox()`](#selectbox) sin cambiar el buzón actual.

En el parámetro opcional *name*, pase el nombre del buzón a acceder. El nombre representa una jerarquía inequívoca de izquierda a derecha, con niveles separados por un carácter delimitador específico. El delimitador se puede recuperar con la función [`.getDelimiter()`](#getdelimiter).

Si el buzón *name* no es seleccionable o no existe, la función genera un error y devuelve **null**.

**Objeto devuelto**

El objeto `boxInfo` devuelto contiene las siguientes propiedades:

| Propiedad  | Type   | Descripción                                                                    |
| ---------- | ------ | ------------------------------------------------------------------------------ |
| name       | text   | Nombre del buzón                                                               |
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

| Versión | Modificaciones                   |
| ------- | -------------------------------- |
| v18 R4  | Añadidos                         |
| v19     | Adición parámetro `isSubscribed` |

</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->

**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxList().Params -->
| Parámetros | Type       |    | Descripción                                              |
| ---------- | ---------- |:--:| -------------------------------------------------------- |
| parameters | Object     | -> | Objeto de parámetro                                      |
| Result     | Collection | <- | Collection of mailbox objects|<!-- END REF -->

|

#### Descripción

The `.getBoxList()` function <!-- REF #IMAPTransporterClass.getBoxList().Summary -->returns a collection of mailboxes describing all of the available mailboxes<!-- END REF -->. Esta función permite gestionar localmente la lista de mensajes localizados en el servidor de correo IMAP.

En el parámetro opcional `parameters`, pase un objeto que contenga valores para filtrar los buzones devueltos. Puede pasar:

| Propiedad    | Type    | Descripción                                          |
| ------------ | ------- | ---------------------------------------------------- |
| isSubscribed | Boolean | <li>**True** para devolver sólo los buzones suscritos</li><li> **False** para devolver todos los buzones disponibles</li> |

#### Result

Cada objeto de la colección devuelta contiene las siguientes propiedades:

| Propiedad        | Type    | Descripción                                                                                                        |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| \[].name        | text    | Nombre del buzón                                                                                                   |
| \[].selectable  | boolean | Indica si los derechos de acceso permiten o no seleccionar el buzón: <ul><li>true - el buzón puede ser seleccionado</li><li>false - el buzón no puede ser seleccionado</li></ul>                     |
| \[].inferior    | boolean | Indica si los derechos de acceso permiten o no crear una jerarquía inferior en el buzón: <ul><li>true - se puede crear un nivel inferior</li><li>false - no se puede crear un nivel inferior</li></ul> |
| \[].interesting | boolean | Indica si el buzón ha sido marcado como "interesante" por el servidor: <ul><li>true - El buzón ha sido marcado como "interesante" por el servidor. Por ejemplo, puede contener mensajes nuevos.</li><li>false - El buzón no ha sido marcado como "interesante" por el servidor.</li></ul>                   |

Si la cuenta no contiene buzones, se devuelve una colección vacía.
> * Si no hay ninguna conexión abierta, `.getBoxList()` abrirá una conexión.
> * Si la conexión no se ha utilizado desde el retraso de conexión designado (ver `IMAP New transporter`), se llama automáticamente a la función `.checkConnection( )`.

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
| Parámetros | Type |    | Descripción                                                  |
| ---------- | ---- |:--:| ------------------------------------------------------------ |
| Result     | Text | <- | Caracter delimitador de jerarquía|<!-- END REF -->

|

#### Descripción

The `.getDelimiter()` function <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->returns the character used to delimit levels of hierarchy in the mailbox name<!-- END REF -->.

El delimitador es un carácter que puede utilizarse para:

* crear buzones de nivel inferior
* buscar más arriba o más abajo en la jerarquía del buzón

#### Result

Caracter delimitador del nombre del buzón.
> * Si no hay ninguna conexión abierta, `getDelimiter()` abrirá una conexión.
> * Si la conexión no se ha utilizado desde el [retraso de conexión](#checkconnectiondelay) designado, la función [`.checkConnection()`](#checkconnection) se llama automáticamente.

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

**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br/>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMail().Params -->
| Parámetros | Type    |    | Descripción                                                                 |
| ---------- | ------- |:--:| --------------------------------------------------------------------------- |
| msgNumber  | Integer | -> | Número de secuencia del mensaje                                             |
| msgID      | Text    | -> | ID único del mensaje                                                        |
| options    | Object  | -> | Instrucciones sobre la gestión de mensajes                                  |
| Result     | Object  | <- | [Email object](EmailObjectClass.md#email-object)|<!-- END REF -->

|

#### Descripción

The `.getMail()` function <!-- REF #IMAPTransporterClass.getMail().Summary -->returns the `Email` object corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->. Esta función permite recuperar la información sobre el email.

En el primer parámetro, puede pasar:

* *msgNumber*, un valor *integer* indicando el número de secuencia del mensaje a recuperar o
* *msgID*, un valor *text* indicando el ID único del mensaje a recuperar.

El parámetro opcional *options* permite pasar un objeto que define las instrucciones adicionales para la gestión del mensaje. Las siguientes propiedades están disponibles:

| Propiedad  | Type    | Descripción                                                                                                                      |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | boolean | Si True, el mensaje se marca como "visto" en el buzón. Si es False, el mensaje no se marca como "visto". Valor por defecto: True |
| withBody   | boolean | Pase True para devolver el cuerpo del mensaje. Si es False, sólo se devuelve el encabezado del mensaje. Valor por defecto: True  |
> * La función genera un error y devuelve **Null** si *msgID* designa un mensaje inexistente,
> * Si no se selecciona ningún buzón con la función [`.selectBox()`](#selectbox), se genera un error,
> * Si no hay ninguna conexión abierta, `.getMail()` abrirá una conexión con el último buzón especificado por [`.selectBox()`](#selectbox).

#### Result

`.getMail()` devuelve un [`objet Email`](EmailObjectClass.md#objet-email) con las propiedades IMAP adicionales siguientes: *id*, *receivedAt* y *size*.

#### Ejemplo

Quiere obtener el mensaje con ID = 1:

```4d
 var $server : Object
 var $info; $mail; $boxInfo : Variant
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatorio
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //crear transportador
 $transporter:=IMAP New transporter($server)

  //seleccionar buzón
 $boxInfo:=$transporter.selectBox("Inbox")

  //obtener el objeto Email con ID 1
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

**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br/>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->
| Parámetros | Type       |    | Descripción                                                                          |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------------------ |
| ids        | Collection | -> | Colección de identificadores de mensajes                                             |
| startMsg   | Integer    | -> | Número de secuencia del primer mensaje                                               |
| endMsg     | Integer    | -> | Número de secuencia del último mensaje                                               |
| options    | Object     | -> | Instrucciones sobre la gestión de mensajes                                           |
| Result     | Object     | <- | Objeto que contiene:<br/><ul><li>una colección de [objetos Email](EmailObjectClass.md#email-object) y</li><li>una colección de identificadores o números para los mensajes que faltan, si los hay</li></ul>|<!-- END REF -->

|

#### Descripción

The `.getMIMEAsBlob()` function <!-- REF #IMAPTransporterClass.getMails().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->.

**Primera sintaxis:**

***.getMails( ids { ; options } ) -> result***

La primera sintaxis permite recuperar los mensajes en función de sus identificadores.

En el parámetro *ids*, pase una colección de IDs para los mensajes a devolver. Puede obtener los IDs con [`.getMail()`](#getmail).

El parámetro opcional *options* permite definir las partes de los mensajes a devolver. Consulte la tabla **Opciones** a continuación para obtener una descripción de las propiedades disponibles.

**Segunda sintaxis:**

 ***.getMails( startMsg ; endMsg { ; options } ) -> result***

La segunda sintaxis permite recuperar los mensajes en función de un rango secuencial. Los valores pasados representan la posición de los mensajes en el buzón.

En el parámetro *startMsg*, pase un valor entero correspondiente al número del primer mensaje en un rango secuencial. Si se pasa un número negativo (*startMsg* <= 0), se utilizará el primer mensaje del buzón como inicio de la secuencia.

En el parámetro *endMsg*, pase un valor entero correspondiente al número del último mensaje a incluir en un rango secuencial. Si se pasa un número negativo (*endMsg* <= 0), se utilizará el último mensaje del buzón como fin de secuencia.

El parámetro opcional *options* permite definir las partes de los mensajes a devolver.

**Opciones**

| Propiedad  | Type    | Descripción                                                                                                                                                                   |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | Boolean | The selected mailbox is accessed with read and write privileges. Messages are considered "seen" and lose the "recent" flag (indicating new messages). Valor por defecto: True |
| withBody   | Boolean | Pase True para devolver el cuerpo de los mensajes específicos. Si False, sólo se devuelve los encabezados de los mensajes. Valor por defecto: True                            |
> * Si no se selecciona ningún buzón con el comando [`.selectBox()`](#selectbox), se genera un error.
> * Si no hay ninguna conexión abierta, `.getMails()` abrirá una conexión con el último buzón especificado por [`.selectBox()`](#selectbox).

#### Result

`.getMails()` devuelve un objeto que contiene las siguientes colecciones:

| Propiedad | Type       | Descripción                                                                                                                           |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| lista     | Collection | Colección de objetos [`Email`](EmailObjectClass.md#email-object). Si no se encuentran objetos Email, se devuelve una colección vacía. |
| notFound  | Collection | Colección de:<br/><ul><li>primera sintaxis - IDs de mensajes pasados previamente que no existen</li><li>segunda sintaxis - números de secuencia de los mensajes entre startMsg y endMsg que no existen</li></ul>Se devuelve una colección vacía si se encuentran todos los mensajes.                |

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

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->

**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br/>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->
| Parámetros | Type    |    | Descripción                                                                                |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------------------ |
| msgNumber  | Integer | -> | Número de secuencia del mensaje                                                            |
| msgID      | Text    | -> | ID único del mensaje                                                                       |
| updateSeen | Boolean | -> | Si True, el mensaje se marca como "visto" en el buzón. Si False, el mensaje se deja igual. |
| Result     | BLOB    | <- | Blob of the MIME string returned from the mail server|<!-- END REF -->

|

#### Descripción

The `.copy()` function <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->copies the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server<!-- END REF -->.

En el primer parámetro, puede pasar:

* *msgNumber*, un valor *integer* indicando el número de secuencia del mensaje a recuperar o
* *msgID*, un valor *text* indicando el ID único del mensaje a recuperar.

El parámetro opcional *updateSeen* permite indicar si el mensaje está marcado como "visto" en el buzón. Puede pasar:

* **True** - para marcar el mensaje como "visto" (indicando que el mensaje ha sido leído)
* **False** - to leave the message's "seen" status untouched > * The function returns an empty BLOB if *msgNumber* or msgID* designates a non-existing message, > * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated, > * If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox()`.
> * La función genera un error y devuelve **Null** si *name* designa un buzón inexistente.
> * Si no hay ninguna conexión abierta, `.selectBox()` abrirá una conexión.
> * Si no hay ninguna conexión abierta, `.getMIMEAsBlob()` abrirá una conexión con el último buzón especificado por `.selectBox()`.

#### Result

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

  //crear transportador
 $transporter:=IMAP New transporter($server)

  //seleccionar buzón
 $boxInfo:=$transporter.selectBox("Inbox")

  //obtener BLOB
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

**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->
| Parámetros     | Type       |    | Descripción                                               |
| -------------- | ---------- |:--:| --------------------------------------------------------- |
| msgsIDs        | Collection | -> | Colección de identificadores únicos de mensajes (cadenas) |
| allMsgs        | Integer    | -> | `IMAP all`: todos los mensajes del buzón seleccionado     |
| destinationBox | Text       | -> | Buzón para recibir los mensajes desplazados               |
| Result         | Object     | <- | Status of the move operation|<!-- END REF -->

|

#### Descripción

The `.move()` function <!-- REF #IMAPTransporterClass.move().Summary -->moves the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server<!-- END REF -->.

Puede pasar:

* en el parámetro *msgsIDs*, una colección contiene los IDs únicos de los mensajes específicos a mover, o
* en el parámetro *allMsgs*, la constante `IMAP all` (entero) para mover todos los mensajes del buzón seleccionado.

El parámetro *destinationBox* permite pasar un valor texto con el nombre del buzón donde los mensajes serán desplazados.

> Esta función se basa en la especificación del [protocolo IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Type       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Boolean    | True si la operación tiene éxito, False en caso contrario                                |
| statusText |                         | Text       | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Number     | 4D error code                                                                            |
|            | \[].message            | Text       | Descripción del error 4D                                                                 |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                    |

#### Ejemplo 1

Para mover una selección de mensajes:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatorio
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //seleccionar buzón
 $boxInfo:=$transporter.selectBox("inbox")

  //obtener la colección de IDs únicos de los mensajes
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // Mover los mensajes encontrados del buzón actual al buzón "documents"
 $status:=$transporter.move($mailIds;"documents")
```

#### Ejemplo 2

Para mover todos los mensajes del buzón actual:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatorio
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //seleccionar buzón
 $boxInfo:=$transporter.selectBox("inbox")

  // mover todos los mensajes del buzón actual al buzón "documents"
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
| Parámetros | Type       |    | Descripción                                         |
| ---------- | ---------- |:--:| --------------------------------------------------- |
| startMsg   | Integer    | -> | Número de secuencia del primer mensaje              |
| endMsg     | Integer    | -> | Número de secuencia del último mensaje              |
| Result     | Collection | <- | Collection of unique IDs|<!-- END REF -->

|

#### Descripción

The `.numToID()` function <!-- REF #IMAPTransporterClass.numToID().Summary -->converts the sequence numbers to IMAP unique IDs for the messages in the sequential range designated by *startMsg* and *endMsg*<!-- END REF --> in the currently selected mailbox.

En el parámetro *startMsg*, pase un valor *entero* correspondiente al número del primer mensaje en un rango secuencial. Si se pasa un número negativo (*startMsg* <= 0), se utilizará el primer mensaje del buzón como inicio de la secuencia.

En el parámetro *endMsg*, pase un valor *entero* correspondiente al número del último mensaje a incluir en un rango secuencial. Si se pasa un número negativo (*endMsg* <= 0), se utilizará el último mensaje del buzón como fin de secuencia.

#### Result

La función devuelve una colección de cadenas (IDs únicos).

#### Ejemplo

```4d
 var $transporter : 4D.IMAPTransporter
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatorio
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //seleccionar buzón
 $boxInfo:=$transporter.selectBox("inbox")

  //obtener los ID de los 5 últimos mensajes recibidos
 $mailIds:=$transporter.numToID(($boxInfo.mailCount-5);$boxInfo.mailCount)

  //eliminar los mensajes del buzón actual
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

**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->
| Parámetros | Type       |    | Descripción                                                                                                                                                                      |
| ---------- | ---------- |:--:| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection | -> | Colección de cadenas: identificadores únicos de mensajes (texto)<br/>Texto: ID único de un mensaje<br/>Longint (IMAP all): todos los mensajes del buzón seleccionado |
| keywords   | Object     | -> | Banderas de palabras claves a eliminar                                                                                                                                           |
| Result     | Object     | <- | Status of the removeFlags operation|<!-- END REF -->

|

#### Descripción

The `.delete()` function <!-- REF #IMAPTransporterClass.removeFlags().Summary -->sets the "deleted" flag for the messages defined in `msgsIDs` or `allMsgs`<!-- END REF -->.

En el parámetro `msgIDs`, puede pasar:

* una *collection* contiene los identificadores únicos de mensajes específicos, o
* el ID único (*texte*) de un solo mensaje o
* la siguiente constante (*longint*) para todos los mensajes del buzón seleccionado:

 | Constante | Value | Comentario                                            |
 | --------- | ----- | ----------------------------------------------------- |
 | IMAP all  | 1     | Seleccionar todos los mensajes del buzón seleccionado |

El parámetro `keywords` le permite pasar un objeto con valores de palabras clave para las banderas específicas a eliminar de los `msgIDs`. Puede pasar cualquiera de las siguientes palabras claves:

| Parámetros | Type    | Descripción                                           |
| ---------- | ------- | ----------------------------------------------------- |
| $draft     | Boolean | True para eliminar el marcador "draft" del mensaje    |
| $seen      | Boolean | True para eliminar el marcador "seen" del mensaje     |
| $flagged   | Boolean | True para eliminar el marcador "flagged" del mensaje  |
| $answered  | Boolean | True para eliminar el marcador "answered" del mensaje |
| $deleted   | Boolean | True para eliminar el marcador "deleted" del mensaje  |

Note que los valores falsos se ignoran.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Type       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Boolean    | True si la operación tiene éxito, False en caso contrario                                |
| statusText |                         | Text       | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Number     | 4D error code                                                                            |
|            | \[].message            | Text       | Descripción del error 4D                                                                 |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                    |

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

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19     | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.renameBox().Syntax -->

**.renameBox**( *currentName* : Text ; *newName* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.renameBox().Params -->
| Parámetros  | Type   |    | Descripción                                                 |
| ----------- | ------ |:--:| ----------------------------------------------------------- |
| currentName | Text   | -> | Nombre del nuevo actual                                     |
| newName     | Text   | -> | Nuevo nombre del buzón                                      |
| Result      | Object | <- | Status of the renaming operation|<!-- END REF -->

|

#### Descripción

The `.renameBox()` function <!-- REF #IMAPTransporterClass.renameBox().Summary -->changes the name of a mailbox on the IMAP server<!-- END REF -->. Si se intenta renombrar un buzón desde un nombre de buzón que no existe o a un nombre de buzón que ya existe, se generará un error.

En el parámetro `currentName`, pase el nombre del buzón a renombrar.

Pase el nuevo nombre del buzón en el parámetro `newName`.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Type       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Boolean    | True si la operación tiene éxito, False en caso contrario                                |
| statusText |                         | Text       | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Number     | 4D error code                                                                            |
|            | \[].message            | Text       | Descripción del error 4D                                                                 |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                    |

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
| Parámetros     | Type       |    | Descripción                                              |
| -------------- | ---------- |:--:| -------------------------------------------------------- |
| searchCriteria | Text       | -> | Criterio de búsqueda                                     |
| Result         | Collection | <- | Collection of message numbers|<!-- END REF -->

|

#### Descripción

> Las coincidencias no suelen diferenciar entre mayúsculas y minúsculas

The `.searchMails()` function <!-- REF #IMAPTransporterClass.searchMails().Summary -->searches for messages that match the given *searchCriteria* in the current mailbox<!-- END REF -->. .

*searchCriteria* es un parámetro texto que enumera una o varias llaves de búsqueda (ver [llaves-de-búsqueda-autorizadas](#authorized-search-keys) más abajo) asociadas o no a valores a buscar. Una llave de búsqueda puede ser uno o varios elementos. Por ejemplo:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> Para obtener la información de un buzón sin cambiar el buzón actual, utilice [`.getBoxInfo()`](#getboxinfo).

* Si el *searchCriteria* es una cadena null, la búsqueda será equivalente a un "seleccionar todo".
* Si *searchCriteria* incluye varias llaves de búsqueda, el resultado es la intersección (función AND) de todos los mensajes que coinciden con esas llaves.

```
searchCriteria = FLAGGED FROM "SMITH"
```

... devuelve todos los mensajes con el marcador \Flagged AND activado y enviados por Smith.

* Puede utilizar los operadores **OR** o **NOT** de la siguiente manera:

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

... devuelve los mensajes cuyo encabezado content-type contiene "Mixed" y no contiene "Text".

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```

... devuelve los mensajes cuyo encabezado content-type contiene " e " y cuyo encabezado Subject no contiene " o " y cuyo encabezado content-type no es " Mixed ".

En cuanto a los dos últimos ejemplos, observe que el resultado de la búsqueda es diferente cuando se eliminan los paréntesis de la primera lista de llaves de búsqueda.

* El parámetro *searchCriteria* puede incluir opcionalmente la instrucción \[CHARSET]. Esta instrucción consiste en la palabra "CHARSET" seguida de un conjunto de caracteres definido \[CHARSET] (US ASCII, ISO-8859). Indica el conjunto de caracteres de la cadena *searchCriteria*. Por lo tanto, debe convertir la cadena *searchCriteria* en el conjunto de caracteres especificado si utiliza la instrucción \[CHARSET] (ver los comandos `CONVERT FROM TEXT` o `Convert to text`). Por defecto, 4D codifica la cadena de criterios searchCriteria en Quotable Printable si contiene los caracteres extendidos.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... significa que los criterios de búsqueda utilizan el conjunto de caracteres iso-8859 y el servidor tendrá que convertir los criterios de búsqueda antes de buscar, si es necesario.

#### Tipos de valores de búsqueda

Las claves de búsqueda pueden solicitar el valor a buscar:

* **Search-keys with a field-name value**: the field-name is the name of a header field. Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

* **Valores de tipo cadena**: la cadena puede contener cualquier caracter y debe ir entre comillas. Si la cadena no contiene ningún caracter especial, como el espacio, por ejemplo, no es necesario colocarla entre comillas. Al colocar entre comillas estas cadenas se garantiza que su valor se interpretará correctamente. Example: `searchCriteria = FROM "SMITH"` For all search keys that use strings, a message matches the key if the string is a substring of the field. Las coincidencias no diferencian entre mayúsculas y minúsculas.

* **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = KEYWORD \Flagged \Draft`

* **Marcadores**: los valores de tipo marcador (flags) aceptan una o varias palabras claves (incluyendo marcadores estándar) separados por espacios. Ejemplo: `searchCriteria = KEYWORD \Flagged \Draft`

* **Conjunto de mensajes**: identifica un conjunto de mensajes. En el caso de los números de secuencia de los mensajes, se trata de números consecutivos desde el 1 hasta el número total de mensajes en el buzón. Los números son separados por coma; un dos puntos (:) delimita entre dos números inclusive. Examples: `2,4:7,9,12:*` is `2,4,5,6,7,9,12,13,14,15` for a mailbox with 15 messages. `searchCriteria = 1:5 ANSWERED` busca en la selección de mensajes 1 a 5, los mensajes que tienen el marcador \Answered. `searchCriteria= 2,4 ANSWERED` busca en la selección de mensajes (números de mensaje 2 y 4) los mensajes que tienen el marcador \Answered.

#### Teclas de búsqueda disponibles

**ALL**: todos los mensajes del buzón.  
**ANSWERED**: mensajes con el marcador \Answered.  
**UNANSWERED**: mensajes que no tienen el marcador \Answered.  
**DELETED**: mensajes con el marcador \Deleted.  
**UNDELETED**: mensajes que no tienen el marcador \Deleted.  
**DRAFT**: mensajes con el marcador \Draft.  
**UNDRAFT**: mensajes que no tienen el marcador \Draft.  
**FLAGGED**: mensajes con el marcador \Flagged.  
**UNFLAGGED**: mensajes que no tienen el marcador \Flagged.  
**RECENT**: mensajes que tienen el marcador \Recent.  
**OLD**: mensajes que no tienen el marcador \Recent.  
**SEEN**: mensajes que tienen el marcador \Seen.  
**UNSEEN**: Mensajes que no tienen el marcador \Seen.  
**NEW**: mensajes que tienen el marcador \Recent pero no el marcador \Seen. This is functionally equivalent to “(RECENT UNSEEN)”.  
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
| Parámetros | Type    |    | Descripción                               |
| ---------- | ------- |:--:| ----------------------------------------- |
| name       | Text    | -> | Nombre del buzón                          |
| state      | Integer | -> | Estado de acceso al buzón                 |
| Result     | Object  | <- | boxInfo object|<!-- END REF -->

|

#### Descripción

The `.selectBox()` function <!-- REF #IMAPTransporterClass.selectBox().Summary -->selects the *name* mailbox as the current mailbox<!-- END REF -->. Esta función permite recuperar la información sobre el buzón.
> Para obtener la información de un buzón sin cambiar el buzón actual, utilice [`.getBoxInfo()`](#getboxinfo).

En el parámetro *name*, pase el nombre del buzón a acceder. El nombre representa una jerarquía inequívoca de izquierda a derecha, con niveles separados por un carácter delimitador específico. El delimitador se puede recuperar con la función [`.getDelimiter()`](#getdelimiter).

El parámetro opcional *state* define el tipo de acceso al buzón. Los valores posibles son:

| Constante             | Value | Comentario                                                                                                                                                                                       |
| --------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| IMAP read only state  | 1     | Se accede al buzón seleccionado con privilegios de sólo lectura. Los mensajes con la bandera "reciente" (que indica que son nuevos) no se modifican.                                             |
| IMAP read write state | 0     | Se accede al buzón seleccionado con privilegios de lectura y escritura. Los mensajes se consideran "vistos" y pierden la bandera "reciente" (que indica que son mensajes nuevos). Default value: |
> * La función genera un error y devuelve **Null** si *name* designa un buzón inexistente.
> * Si no hay ninguna conexión abierta, `.selectBox()` abrirá una conexión.
> * Si la conexión no se ha utilizado desde el retraso de conexión designado (ver `IMAP New transporter`), se llama automáticamente a la función [`.checkConnection()`](#checkconnection).

**Objeto devuelto**

El objeto `boxInfo` devuelto contiene las siguientes propiedades:

| Propiedad  | Type   | Descripción                                |
| ---------- | ------ | ------------------------------------------ |
| name       | Text   | Nombre del buzón                           |
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
| Parámetros | Type   |    | Descripción                                                  |
| ---------- | ------ |:--:| ------------------------------------------------------------ |
| name       | Text   | -> | Nombre del buzón                                             |
| Result     | Object | <- | Status of the subscribe operation|<!-- END REF -->

|

#### Descripción

The `.subscribe()` function <!-- REF #IMAPTransporterClass.subscribe().Summary -->allows adding or removing of the specified mailbox to/from the IMAP server’s set of “subscribed” mailboxes<!-- END REF -->. .

En el parámetro `name`, pase el nombre del buzón a añadir (suscribir) a sus buzones "suscritos".

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Type       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Boolean    | True si la operación tiene éxito, False en caso contrario                                |
| statusText |                         | Text       | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Number     | 4D error code                                                                            |
|            | \[].message            | Text       | Descripción del error 4D                                                                 |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                    |

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
| Parámetros | Type   |    | Descripción                                                    |
| ---------- | ------ |:--:| -------------------------------------------------------------- |
| name       | Text   | -> | Nombre del buzón                                               |
| Result     | Object | <- | Status of the unsubscribe operation|<!-- END REF -->

|

#### Descripción

The `.unsubscribe()` function <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->removes a mailbox from a set of subscribed mailboxes<!-- END REF -->. Esto le permite reducir el número de buzones que suele ver.

En el parámetro `name`, pase el nombre del buzón a eliminar (darse de baja) de sus buzones activos.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Type       | Descripción                                                                              |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| success    |                         | Boolean    | True si la operación tiene éxito, False en caso contrario                                |
| statusText |                         | Text       | Status message returned by the IMAP server, or last error returned in the 4D error stack |
| errors     |                         | Collection | 4D error stack (not returned if a IMAP server response is received)                      |
|            | \[].errcode            | Number     | 4D error code                                                                            |
|            | \[].message            | Text       | Descripción del error 4D                                                                 |
|            | \[].componentSignature | Text       | Firma del componente interno que ha devuelto el error                                    |

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
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
