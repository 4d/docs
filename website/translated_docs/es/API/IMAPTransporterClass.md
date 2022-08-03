---
id: IMAPTransporterClass
title: IMAPTransporter
---

La clase `IMAPTransporter` permite recuperar mensajes de un servidor de correo electrónico IMAP.


### Objeto IMAP Transporter

Los objetos IMAP Transporter se instancian con el comando [IMAP New transporter](#imap-new-transporter). Ofrecen las siguientes propiedades y funciones:

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
| servidor   | Objeto             | -> | Información del servidor de correo                  |
| Resultado  | 4D.IMAPTransporter | <- | [Objeto IMAP Transporter](#imap-transporter-object) |
<!-- END REF -->


#### Descripción

El comando `IMAP New transporter` <!-- REF #_command_.IMAP New transporter.Summary -->configura una nueva conexión IMAP<!-- END REF --> según el parámetro *server* y devuelve un nuevo objeto *transporter*. El objeto transportador devuelto se utilizará normalmente para recibir correos electrónicos.

En el parámetro *server*, pase un objeto que contenga las siguientes propiedades:

| *server*                                                                                                                                                                                                                                                                                                                                                                                        | Valor por defecto (si se omite)                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                                    |
| .**accessTokenOAuth2**: Text<p>Cadena de texto que representa las credenciales de autorización OAuth 2. Sólo se utiliza con OAUTH2 `authenticationMode`. Si se utiliza `accessTokenOAuth2` pero se omite `authenticationMode`, se utiliza el protocolo OAuth 2 (si el servidor lo permite). No se devuelve en el objeto *[IMAP transporter](#imap-transporter-object)*. | ninguno                                                                  |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| se utiliza el modo de autenticación más seguro soportado por el servidor |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->| 300                                                                      |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                       |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obligatorio*                                                            |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| ninguno                                                                  |
| .**password** : Text<p>Contraseña del usuario para la autenticación en el servidor. No se devuelve en el objeto *[IMAP transporter](#imap-transporter-object)*.                                                                                                                                                                                                         | ninguno                                                                  |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 993                                                                      |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| ninguno                                                                  |
> **Atención**: asegúrese de que el tiempo de espera definido sea menor que el tiempo de espera del servidor, de lo contrario el tiempo de espera del cliente será inútil.


#### Resultado

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

| Parámetros | Tipo     | Descripción                                        |
| ---------- | -------- | -------------------------------------------------- |
| $draft     | Booleano | True para añadir el marcador "draft" al mensaje    |
| $seen      | Booleano | True para añadir el marcador "seen" al mensaje     |
| $flagged   | Booleano | True para añadir el marcador "flagged" al mensaje  |
| $answered  | Booleano | True para añadir el marcador "answered" al mensaje |
| $deleted   | Booleano | True para añadir el marcador "deleted" al mensaje  |
> * Los valores falsos se ignoran.
> * La interpretación de los indicadores de palabras claves puede variar según el cliente de correo.


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Descripción del error 4D                                                                             |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |


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

| Propiedad     | Tipo  | Descripción                                                                                                                                                                                                                                   |
| ------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Texto | Charset y codificación utilizados para las siguientes partes del correo electrónico: asunto, nombres de archivos adjuntos y atributo(s) del nombre del correo electrónico. Valores posibles: ver la tabla de charsets posibles a continuación |
| bodyCharset   | Texto | Charset y codificación utilizados para el contenido html y el texto del cuerpo del correo electrónico. Valores posibles: ver la tabla de charsets posibles a continuación                                                                     |

Charsets posibles:

| Constante                | Valor                          | Comentario                                                                                                            |
| ------------------------ | ------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: US-ASCII si es posible, japonés (ISO-2022-JP) & Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>                                                                                             |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                             |
| mail mode UTF8           | US-ASCII_UTF8_QP             | headerCharset & bodyCharset: US-ASCII si es posible, de lo contrario UTF-8 & Quoted-printable (**valor por defecto**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | headerCharset & bodyCharset: US-ASCII si es posible, de lo contrario UTF-8 & base64                                   |


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Descripción del error 4D                                                                             |
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
$msg.keywords["$seen"]:=True//marcar el mensaje como leído
$msg.keywords["$draft"]:=True//marcar el mensaje como borrador

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
> **Atención**: asegúrese de que el tiempo de espera definido sea menor que el tiempo de espera del servidor, de lo contrario el tiempo de espera del cliente será inútil.



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
|            | \[].message            | Texto      | Descripción del error 4D                                                                             |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |




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
|            | \[].message            | Texto      | Descripción del error 4D                                                                             |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |




#### Ejemplo

Para crear un nuevo buzón "Invoices":


```4d
var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatorio
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //crear transportador
 $transporter:=IMAP New transporter($server)

  //seleccionar buzón
 $boxInfo:=$transporter.selectBox("INBOX")

  If($boxInfo.mailCount>0)
        // recuperar los encabezados de los últimos 20 mensajes sin marcarlos como leídos
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
|            | \[].message            | Texto      | Descripción del error 4D                                                                             |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |




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
| Parámetros | Tipo  |    | Descripción                 |
| ---------- | ----- |:--:| --------------------------- |
| name       | Texto | -> | Nombre del buzón a eliminar |


|Result|Object|<-|Estado de la operación de eliminación del buzón|
<!-- END REF -->


#### Descripción

La función `.deleteBox()` <!-- REF #IMAPTransporterClass.deleteBox().Summary -->selimina definitivamente el buzón llamado `name` en el servidor IMAP<!-- END REF -->. Intentar eliminar un INBOX o un buzón que no existe generará un error.

En el parámetro `name`, pase el nombre del buzón a eliminar.
> * La función no puede eliminar un buzón que tiene buzones hijos si el buzón padre tiene el atributo "\Noselect".
> * Todos los mensajes del buzón eliminado también se borrarán.
> * La posibilidad de eliminar un buzón depende del servidor de correo.


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Descripción del error 4D                                                                             |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |




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

// eliminar buzón
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

La función `.expunge()` <!-- REF #IMAPTransporterClass.expunge().Summary -->elimina todos los mensajes con el marcador "deleted" del servidor de correo IMAP.<!-- END REF --> El marcador "deleted" puede establecerse con los métodos [`.delete()`](#delete) o [`.addFlags()`](#addflags).

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Descripción del error 4D                                                                             |
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
| Versión | Modificaciones     |
| ------- | ------------------ |
| v18 R5  | *name* es opcional |

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

La función `.getBoxInfo()` <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->devuelve un objeto `boxInfo` correspondiente al buzón de recepción actual o al buzón llamado *name*<!-- END REF -->. Esta función devuelve la misma información que [`.selectBox()`](#selectbox) sin cambiar el buzón actual.

En el parámetro opcional *name*, pase el nombre del buzón a acceder. El nombre representa una jerarquía inequívoca de izquierda a derecha, con niveles separados por un carácter delimitador específico. El delimitador se puede recuperar con la función [`.getDelimiter()`](#getdelimiter).

Si el buzón *name* no es seleccionable o no existe, la función genera un error y devuelve **null**.

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
| Versión | Modificaciones                   |
| ------- | -------------------------------- |
| v18 R4  | Añadidos                         |
| v19     | Adición parámetro `isSubscribed` |
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

La función `.getBoxList()` <!-- REF #IMAPTransporterClass.getBoxList().Summary -->devuelve una colección de bandejas de entrada que describe todas las bandejas de entrada disponibles<!-- END REF -->. Esta función permite gestionar localmente la lista de mensajes localizados en el servidor de correo IMAP.

En el parámetro opcional `parameters`, pase un objeto que contenga valores para filtrar los buzones devueltos. Puede pasar:

| Propiedad    | Tipo     | Descripción                                          |
| ------------ | -------- | ---------------------------------------------------- |
| isSubscribed | Booleano | <li>**True** para devolver sólo los buzones suscritos</li><li> **False** para devolver todos los buzones disponibles</li> |

#### Resultado

Cada objeto de la colección devuelta contiene las siguientes propiedades:

| Propiedad        | Tipo     | Descripción                                                                                                        |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| \[].name        | texto    | Nombre del buzón                                                                                                   |
| \[].selectable  | booleano | Indica si los derechos de acceso permiten o no seleccionar el buzón: <ul><li>true - el buzón puede ser seleccionado</li><li>false - el buzón no puede ser seleccionado</li></ul>                     |
| \[].inferior    | booleano | Indica si los derechos de acceso permiten o no crear una jerarquía inferior en el buzón: <ul><li>true - se puede crear un nivel inferior</li><li>false - no se puede crear un nivel inferior</li></ul> |
| \[].interesting | booleano | Indica si el buzón ha sido marcado como "interesante" por el servidor: <ul><li>true - El buzón ha sido marcado como "interesante" por el servidor. Por ejemplo, puede contener mensajes nuevos.</li><li>false - El buzón no ha sido marcado como "interesante" por el servidor.</li></ul>                   |


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
| Parámetros | Tipo  |    | Descripción                       |
| ---------- | ----- |:--:| --------------------------------- |
| Resultado  | Texto | <- | Carácter delimitador de jerarquía |
<!-- END REF -->


#### Descripción

La función `.getDelimiter()` <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->devuelve el carácter utilizado para delimitar los niveles de jerarquía en el nombre del buzón<!-- END REF -->.

El delimitador es un carácter que puede utilizarse para:

*   crear buzones de nivel inferior
*   buscar más arriba o más abajo en la jerarquía del buzón


#### Resultado

Carácter delimitador del nombre del buzón.
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
**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMail().Params -->
| Parámetros | Tipo    |    | Descripción                                      |
| ---------- | ------- |:--:| ------------------------------------------------ |
| msgNumber  | Integer | -> | Número de secuencia del mensaje                  |
| msgID      | Texto   | -> | ID único del mensaje                             |
| options    | Objeto  | -> | Instrucciones sobre el manejo de mensajes        |
| Resultado  | Objeto  | <- | [Objeto Email](EmailObjectClass.md#email-object) |
<!-- END REF -->


#### Descripción

La función `.getMail()` <!-- REF #IMAPTransporterClass.getMail().Summary -->devuelve el objeto `Email` correspondiente al *msgNumber* o *msgID* en el buzón designado por `IMAP_transporter`<!-- END REF -->. Esta función le permite manejar localmente el contenido del correo electrónico.

En el primer parámetro, puede pasar:

*   *msgNumber*, un valor *integer* indicando el número de secuencia del mensaje a recuperar o
*   *msgID*, un valor *text* indicando el ID único del mensaje a recuperar.

El parámetro opcional *options* permite pasar un objeto que define las instrucciones adicionales para la gestión del mensaje. Las siguientes propiedades están disponibles:

| Propiedad  | Tipo     | Descripción                                                                                                                      |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | booleano | Si True, el mensaje se marca como "visto" en el buzón. Si es False, el mensaje no se marca como "visto". Valor por defecto: True |
| withBody   | booleano | Pase True para devolver el cuerpo del mensaje. Si es False, sólo se devuelve el encabezado del mensaje. Valor por defecto: True  |
> * La función genera un error y devuelve **Null** si *msgID* designa un mensaje inexistente,
> * Si no se selecciona ningún buzón con la función [`.selectBox()`](#selectbox), se genera un error,
> * Si no hay ninguna conexión abierta, `.getMail()` abrirá una conexión con el último buzón especificado por [`.selectBox()`](#selectbox).



#### Resultado



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
**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->
| Parámetros | Tipo       |    | Descripción                                              |
| ---------- | ---------- |:--:| -------------------------------------------------------- |
| ids        | Collection | -> | Colección de identificadores de mensajes                 |
| startMsg   | Integer    | -> | Número de secuencia del primer mensaje                   |
| endMsg     | Integer    | -> | Número de secuencia del último mensaje                   |
| options    | Objeto     | -> | Instrucciones sobre la gestión de mensajes               |
| Resultado  | Objeto     | <- | Objeto que contiene:<br><ul><li>una colección de [objetos Email](EmailObjectClass.md#email-object) y</li><li>una colección de identificadores o números para los mensajes que faltan, si los hay</li></ul> |
<!-- END REF -->


#### Descripción

La función `.getMails()` <!-- REF #IMAPTransporterClass.getMails().Summary -->devuelve un objeto que contiene una colección de objetos `Email`<!-- END REF -->.

**Primera sintaxis:**

***.getMails( ids { ; options } ) -> result***

La primera sintaxis permite recuperar los mensajes en función de sus identificadores.

En el parámetro *ids*, pase una colección de IDs para los mensajes a devolver. Puede obtener los IDs con [`.getMail()`](#getmail).

El parámetro opcional *options* permite definir las partes de los mensajes a devolver. Consulte la tabla **Opciones** a continuación para obtener una descripción de las propiedades disponibles.

**Segunda sintaxis:**

 ***.getMails( startMsg ; endMsg { ; options } ) -> result***

La segunda sintaxis permite recuperar los mensajes en función de un rango secuencial. Los valores pasados representan la posición de los mensajes en el buzón.

En el parámetro *startMsg*, pase un valor *entero* correspondiente al número del primer mensaje en un rango secuencial. Si se pasa un número negativo (*startMsg* <= 0), se utilizará el primer mensaje del buzón como inicio de la secuencia.

En el parámetro *endMsg*, pase un valor *entero* correspondiente al número del último mensaje a incluir en un rango secuencial. Si se pasa un número negativo (*endMsg* <= 0), se utilizará el último mensaje del buzón como fin de secuencia.

El parámetro opcional *options* permite definir las partes de los mensajes a devolver.

**Opciones**

| Propiedad  | Tipo     | Descripción                                                                                                                                         |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | Booleano | Si True, los mensajes especificados se marcan como "vistos" en el buzón. Si False, los mensajes no se marcan como "vistos". Valor por defecto: True |
| withBody   | Booleano | Pase True para devolver el cuerpo de los mensajes específicos. Si False, sólo se devuelve los encabezados de los mensajes. Valor por defecto: True  |
> * Si no se selecciona ningún buzón con el comando [`.selectBox()`](#selectbox), se genera un error.
> * Si no hay ninguna conexión abierta, `.getMails()` abrirá una conexión con el último buzón especificado por [`.selectBox()`](#selectbox).


#### Resultado

`.getMails()` devuelve un objeto que contiene las siguientes colecciones:


| Propiedad | Tipo       | Descripción                                                                                                                           |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| lista     | Collection | Colección de objetos [`Email`](EmailObjectClass.md#email-object). Si no se encuentran objetos Email, se devuelve una colección vacía. |

|notFound |Collection| Colección de:<br><ul><li>primera sintaxis - IDs de mensajes pasados previamente que no existen</li><li>segunda sintaxis - números de secuencia de los mensajes entre startMsg y endMsg que no existen</li></ul>Se devuelve una colección vacía si se encuentran todos los mensajes.|


#### Ejemplo

Quiere recuperar los 20 correos electrónicos más recientes sin cambiar el estado "visto":

```4d
 var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatorio
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //crear transportador
 $transporter:=IMAP New transporter($server)

  //seleccionar buzón
 $boxInfo:=$transporter.selectBox("INBOX")

  If($boxInfo.mailCount>0)
        // recuperar los encabezados de los últimos 20 mensajes sin marcarlos como leídos
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
| Parámetros | Tipo     |    | Descripción                                                                                |
| ---------- | -------- |:--:| ------------------------------------------------------------------------------------------ |
| msgNumber  | Integer  | -> | Número de secuencia del mensaje                                                            |
| msgID      | Texto    | -> | ID único del mensaje                                                                       |
| updateSeen | Booleano | -> | Si True, el mensaje se marca como "visto" en el buzón. Si False, el mensaje se deja igual. |
| Resultado  | BLOB     | <- | Blob de la cadena MIME devuelta por el servidor de correo                                  |
<!-- END REF -->




#### Descripción

La función `.getMIMEAsBlob()` <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->devuelve un BLOB con el contenido MIME del mensaje correspondiente al *msgNumber* o *msgID* en el buzón designado por el `IMAP_transporter`<!-- END REF -->.

En el primer parámetro, puede pasar:

*   *msgNumber*, un valor *integer* indicando el número de secuencia del mensaje a recuperar o
*   *msgID*, un valor *text* indicando el ID único del mensaje a recuperar.

El parámetro opcional *updateSeen* permite indicar si el mensaje está marcado como "visto" en el buzón. Puede pasar:

*   **True** - para marcar el mensaje como "visto" (indicando que el mensaje ha sido leído)
*   **False** - para dejar intacto el estado "visto" del mensaje > * La función devuelve un BLOB vacío si *msgNumber* o msgID* designa un mensaje inexistente, > * Si no se selecciona ningún buzón con el comando [`.selectBox()`](#selectbox), se genera un error, > * Si no hay ninguna conexión abierta, `.getMIMEAsBlob()` abrirá una conexión con el último buzón especificado por `.selectBox()`.
> * La función devuelve un BLOB vacío si *msgNumber* o msgID* designa un mensaje inexistente,
> * Si no se selecciona ningún buzón con el comando [`.selectBox()`](#selectbox), se genera un error,
> * Si no hay ninguna conexión abierta, `.getMIMEAsBlob()` abrirá una conexión con el último buzón especificado por `.selectBox()`.


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

**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->
| Parámetros     | Tipo       |    | Descripción                                               |
| -------------- | ---------- |:--:| --------------------------------------------------------- |
| msgsIDs        | Collection | -> | Colección de identificadores únicos de mensajes (cadenas) |
| allMsgs        | Integer    | -> | `IMAP all`: todos los mensajes del buzón seleccionado     |
| destinationBox | Texto      | -> | Buzón para recibir mensajes desplazados                   |
| Resultado      | Objeto     | <- | Estado de la operación de desplazamiento                  |
<!-- END REF -->


#### Descripción

La función `.move()` <!-- REF #IMAPTransporterClass.move().Summary -->mueve los mensajes definidos en *msgsIDs* o *allMsgs* a la *destinationBox* en el servidor IMAP<!-- END REF -->.

Puede pasar:

- en el parámetro *msgsIDs*, una colección contiene los IDs únicos de los mensajes específicos a mover, o
- en el parámetro *allMsgs*, la constante `IMAP all` (entero) para mover todos los mensajes del buzón seleccionado.

El parámetro *destinationBox* permite pasar un valor texto con el nombre del buzón donde los mensajes serán desplazados.

> Esta función sólo la soportan los servidores IMAP que cumplen con el RFC [8474](https://tools.ietf.org/html/rfc8474).


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Descripción del error 4D                                                                             |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |




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
| Parámetros | Tipo       |    | Descripción                                     |
| ---------- | ---------- |:--:| ----------------------------------------------- |
| startMsg   | Integer    | -> | Número de secuencia del primer mensaje          |
| endMsg     | Integer    | -> | Número de secuencia del último mensaje          |
| Resultado  | Collection | <- | Colección de identificadores de mensajes únicos |
<!-- END REF -->


#### Descripción

La función `.numToID()` <!-- REF #IMAPTransporterClass.numToID().Summary -->convierte los números de secuencia en IDs únicos IMAP para los mensajes en el rango secuencial designado por *startMsg* y *endMsg*<!-- END REF --> en el buzón actualmente seleccionado.

En el parámetro *startMsg*, pase un valor entero correspondiente al número del primer mensaje en un rango secuencial. Si se pasa un número negativo (*startMsg* <= 0), se utilizará el primer mensaje del buzón como inicio de la secuencia.

En el parámetro *endMsg*, pase un valor entero correspondiente al número del último mensaje a incluir en un rango secuencial. Si se pasa un número negativo (*endMsg* <= 0), se utilizará el último mensaje del buzón como fin de secuencia.


#### Resultado

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
**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->
| Parámetros | Tipo       |    | Descripción                                                                                                                                                                    |
| ---------- | ---------- |:--:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| msgIDs     | Collection | -> | Colección de cadenas: identificadores únicos de mensajes (texto)<br>Texto: ID único de un mensaje<br>Longint (IMAP all): todos los mensajes del buzón seleccionado |
| keywords   | Objeto     | -> | Banderas de palabras claves a eliminar                                                                                                                                         |
| Resultado  | Objeto     | <- | Estado de la operación removeFlags                                                                                                                                             |
<!-- END REF -->


#### Descripción

La función `.removeFlags()` <!-- REF #IMAPTransporterClass.removeFlags().Summary -->elimina las banderas de los `msgIDs` para las `keywords` definidas<!-- END REF -->.

En el parámetro `msgIDs`, puede pasar:

*   una *collection* contiene los identificadores únicos de mensajes específicos, o
*   el ID único (*texte*) de un solo mensaje o
*   la siguiente constante (*longint*) para todos los mensajes del buzón seleccionado:

    | Constante | Valor | Comentario                                            |
    | --------- | ----- | ----------------------------------------------------- |
    | IMAP all  | 1     | Seleccionar todos los mensajes del buzón seleccionado |

El parámetro `keywords` le permite pasar un objeto con valores de palabras clave para las banderas específicas a eliminar de los `msgIDs`. Puede pasar cualquiera de las siguientes palabras claves:

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
|            | \[].message            | Texto      | Descripción del error 4D                                                                             |
|            | \[].componentSignature | Texto      | Firma del componente interno que ha devuelto el error                                                |


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
| Parámetros  | Tipo   |    | Descripción                      |
| ----------- | ------ |:--:| -------------------------------- |
| currentName | Texto  | -> | Nombre del nuevo actual          |
| newName     | Texto  | -> | Nuevo nombre del buzón           |
| Resultado   | Objeto | <- | Estado de la operación renombrar |
<!-- END REF -->


#### Descripción

La función `.renameBox()` <!-- REF #IMAPTransporterClass.renameBox().Summary -->cambia el nombre de un buzón en el servidor IMAP<!-- END REF -->. Si se intenta renombrar un buzón desde un nombre de buzón que no existe o a un nombre de buzón que ya existe, se generará un error.

En el parámetro `currentName`, pase el nombre del buzón a renombrar.

Pase el nuevo nombre del buzón en el parámetro `newName`.


**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Descripción del error 4D                                                                             |
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

// renombrar buzón
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
| Parámetros     | Tipo       |    | Descripción                      |
| -------------- | ---------- |:--:| -------------------------------- |
| searchCriteria | Texto      | -> | Criterio de búsqueda             |
| Resultado      | Collection | <- | Colección de números de mensajes |
<!-- END REF -->


#### Descripción

> Esta función se basa en la especificación del [protocolo IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

La función `.searchMails()` <!-- REF #IMAPTransporterClass.searchMails().Summary -->busca los mensajes que coincidan con el *searchCriteria* en el buzón actual<!-- END REF -->. El parámetro *searchCriteria* contiene una o varias palabras clave de búsqueda.

*searchCriteria* es un parámetro texto que enumera una o varias llaves de búsqueda (ver [llaves-de-búsqueda-autorizadas](#authorized-search-keys) más abajo) asociadas o no a valores a buscar. Una llave de búsqueda puede ser uno o varios elementos. Por ejemplo:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> Las coincidencias no suelen diferenciar entre mayúsculas y minúsculas

- Si el *searchCriteria* es una cadena null, la búsqueda será equivalente a un "seleccionar todo".
- Si *searchCriteria* incluye varias llaves de búsqueda, el resultado es la intersección (función AND) de todos los mensajes que coinciden con esas llaves.

```
searchCriteria = FLAGGED FROM "SMITH"
```
... devuelve todos los mensajes con el marcador \Flagged AND activado y enviados por Smith.
- Puede utilizar los operadores **OR** o **NOT** de la siguiente manera:

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

- The *searchCriteria* may include the optional \[CHARSET] specification. This consists of the "CHARSET" word followed by a registered \[CHARSET] (US ASCII, ISO-8859). Indica el conjunto de caracteres de la cadena *searchCriteria*. Therefore, you must convert the *searchCriteria* string into the specified charset if you use the \[CHARSET] specification (see the `CONVERT FROM TEXT` or `Convert to text` commands). By default, 4D encodes in Quotable Printable the searchCriteria string if it contains extended characters.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```
... significa que los criterios de búsqueda utilizan el conjunto de caracteres iso-8859 y el servidor tendrá que convertir los criterios de búsqueda antes de buscar, si es necesario.


#### Tipos de valores de búsqueda

Las claves de búsqueda pueden solicitar el valor a buscar:

- **Search-keys with a field-name value**: the field-name is the name of a header field. Ejemplo: `searchCriteria = SENTBEFORE 1-Feb-2020` (una fecha no suele necesitar comillas, ya que no contiene caracteres especiales)

- **Search-keys with a string value**: the string may contain any character and must be quoted. If the string does not contain any special characters, like the space character for instance, it does not need to be quoted. Quoting such strings will ensure that your string value will be correctly interpreted. Ejemplo: `criterios de búsqueda = FROM "SMITH"` Para todas las llaves de búsqueda que utilizan cadenas, un mensaje coincide con la llave si la cadena es una subcadena del campo. Las coincidencias no diferencian entre mayúsculas y minúsculas.

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = KEYWORD \Flagged \Draft`

- **Search-keys with a message set value**: Identifies a set of messages. For message sequence numbers, these are consecutive numbers from 1 to the total number of messages in the mailbox. A comma delimits individual numbers; a colon delimits between two numbers inclusive. Ejemplos: `2,4:7,9,12:*` es `2,4,5,6,7,9,12,13,14,15` para un buzón con 15 mensajes. `searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set. `searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.


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
**NEW**: mensajes que tienen el marcador \Recent pero no el marcador \Seen. This is functionally equivalent to "(RECENT UNSEEN)".  
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

La función `.selectBox()` <!-- REF #IMAPTransporterClass.selectBox().Summary -->selecciona el buzón *name* como el buzón actual<!-- END REF -->. Esta función permite recuperar la información sobre el buzón.
> Para obtener la información de un buzón sin cambiar el buzón actual, utilice [`.getBoxInfo()`](#getboxinfo).

En el parámetro *name*, pase el nombre del buzón a acceder. El nombre representa una jerarquía inequívoca de izquierda a derecha, con niveles separados por un carácter delimitador específico. El delimitador se puede recuperar con la función [`.getDelimiter()`](#getdelimiter).

El parámetro opcional *state* define el tipo de acceso al buzón. Los valores posibles son:

| Constante             | Valor | Comentario                                                                                                                                                                                            |
| --------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1     | Se accede al buzón seleccionado con privilegios de sólo lectura. Los mensajes con la bandera "reciente" (que indica que son nuevos) no se modifican.                                                  |
| IMAP read write state | 0     | Se accede al buzón seleccionado con privilegios de lectura y escritura. Los mensajes se consideran "vistos" y pierden la bandera "reciente" (que indica que son mensajes nuevos). (Valor por defecto) |
> * La función genera un error y devuelve **Null** si *name* designa un buzón inexistente.
> * Si no hay ninguna conexión abierta, `.selectBox()` abrirá una conexión.
> * Si la conexión no se ha utilizado desde el retraso de conexión designado (ver `IMAP New transporter`), se llama automáticamente a la función [`.checkConnection()`](#checkconnection).

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

La función `.subscribe()` <!-- REF #IMAPTransporterClass.subscribe().Summary -->permite añadir o eliminar el buzón especificado del conjunto de buzones "suscritos" en el servidor IMAP<!-- END REF -->. De este modo, puede optar por acotar una gran lista de buzones disponibles suscribiéndose a los que habitualmente consulta.

En el parámetro `name`, pase el nombre del buzón a añadir (suscribir) a sus buzones "suscritos".

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Descripción del error 4D                                                                             |
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

La función `.unsubscribe()` <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->elimina un buzón de un conjunto de buzones suscritos<!-- END REF -->. Esto le permite reducir el número de buzones que suele ver.

En el parámetro `name`, pase el nombre del buzón a eliminar (darse de baja) de sus buzones activos.

**Objeto devuelto**

La función devuelve un objeto que describe el estado IMAP:

| Propiedad  |                         | Tipo       | Descripción                                                                                          |
| ---------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| success    |                         | Booleano   | True si la operación tiene éxito, False en caso contrario                                            |
| statusText |                         | Texto      | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores de 4D |
| errors     |                         | Collection | Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor IMAP)                     |
|            | \[].errcode            | Número     | Código de error 4D                                                                                   |
|            | \[].message            | Texto      | Descripción del error 4D                                                                             |
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
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->



<!-- INCLUDE transporter.user.Desc -->




<style> h2 { background: #d9ebff;}</style>
