---
id: IMAPTransporterClass
title: IMAPTransporter
---

La clase `IMAPTransporter` le permite recuperar mensajes de un servidor de correo IMAP.

### Objeto IMAP Transporter

Los objetos IMAP Transporter se instancian con el comando [IMAP New transporter](../commands/imap-new-transporter.md). Ofrecen las siguientes propiedades y funciones:

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

## 4D.IMAPTransporter.new()

<!-- REF #4D.IMAPTransporter.new().Syntax -->**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #4D.IMAPTransporter.new().Params -->

| Parámetros | Tipo                               |                             | Descripción                                           |
| ---------- | ---------------------------------- | :-------------------------: | ----------------------------------------------------- |
| server     | Object                             |              ->             | Información del servidor de correo                    |
| Result     | 4D.IMAPTransporter | <- | [Objeto transportador IMAP](#objeto-imap-transporter) |

<!-- END REF -->

#### Descripción

La función `4D.IMAPTransporter.new()` <!-- REF #4D.IMAPTransporter.new().Summary -->crea y devuelve un nuevo objeto de tipo `4D.IMAPTransporter`<!-- END REF -->. Es idéntico al comando [`IMAP New transporter`](../commands/imap-new-transporter.md) (acceso directo).

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

| Parámetros | Tipo       |                             | Descripción                                                                                                                                                                                                                                                |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection |              ->             | Colección de cadenas: identificadores únicos de mensajes (texto)<br/>Texto: ID único de un mensaje<br/>Longint (IMAP all): todos los mensajes del buzón seleccionado |
| keywords   | Object     |              ->             | Banderas de palabras claves a añadir                                                                                                                                                                                                                       |
| Resultado  | Object     | <- | Estado de la operación addFlags                                                                                                                                                                                                                            |

<!-- END REF -->

#### Descripción

La función `.addFlags()` <!-- REF #IMAPTransporterClass.addFlags().Summary -->agrega banderas a los `msgIDs` para las `keywords` especificadas<!-- END REF -->.

En el parámetro `msgIDs`, puedes pasar:

- una *colección* que contiene los IDs únicos de mensajes específicos o
- el ID único (*text*) de un solo mensaje o
- la siguiente constante (*longint*) para todos los mensajes del buzón seleccionado:

| Constante | Valor | Comentario                                            |
| --------- | ----- | ----------------------------------------------------- |
| IMAP all  | 1     | Seleccionar todos los mensajes del buzón seleccionado |

El parámetro `keywords` permite definir las banderas a añadir a `msgIDs`. Puede utilizar las siguientes banderas estándar, así como banderas personalizadas (la compatibilidad con banderas personalizadas depende de la implementación del servidor):

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

| Parámetros     | Tipo   |                             | Descripción                                 |
| -------------- | ------ | :-------------------------: | ------------------------------------------- |
| mailObj        | Object |              ->             | Objeto Email                                |
| destinationBox | Text   |              ->             | Buzón para recibir el objeto Email          |
| options        | Object |              ->             | Objeto que contiene información del charset |
| Result         | Object | <- | Estado de la operación                      |

<!-- END REF -->

#### Descripción

La función `.append()` <!-- REF #IMAPTransporterClass.append().Summary -->añade un `mailObj` al `destinationBox`<!-- END REF -->.

En el parámetro `mailObj`, pase un objeto email. Para obtener una descripción completa de las propiedades del correo, consulte [objeto Email](EmailObjectClass.md#objeto-email). La función `.append()` soporta los marcadores de palabras claves en el atributo `keywords` de objetos Email.

El parámetro opcional `destinationBox` permite pasar el nombre de un buzón donde se añadirá el objeto `mailObj`. Si se omite, se utiliza el buzón actual.

En el parámetro opcional `options`, puede pasar un objeto para definir el conjunto de caracteres y la codificación para partes específicas del correo electrónico. Propiedades disponibles:

| Propiedad     | Tipo | Descripción                                                                                                                                                                                                                                                                                                      |
| ------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset y codificación utilizados para las siguientes partes del correo electrónico: asunto, nombres de archivos adjuntos y atributo(s) del nombre del correo electrónico. Valores posibles: ver la tabla de charsets posibles a continuación |
| bodyCharset   | Text | Charset y codificación utilizados para el contenido html y el texto del cuerpo del correo electrónico. Valores posibles: ver la tabla de charsets posibles a continuación                                                                                                        |

Charsets posibles:

| Constante                | Valor                                                                                       | Comentario                                                                                                                                                                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: US-ASCII si es posible, Japanese (ISO-2022-JP) &Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII si es posible, Japanese (ISO-2022-JP) & 7-bit si es posible, de lo contrario UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591       | ISO-8859-1                                                                                  | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                                                                        |
| mail mode UTF8           | US-ASCII_UTF8_QP                                  | headerCharset & bodyCharset: US-ASCII si es posible, de lo contrario UTF-8 & Quoted-printable (**valor por defecto**)                                                                                              |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64                                 | headerCharset & bodyCharset: US-ASCII si es posible, de lo contrario UTF-8 & base64                                                                                                                                                   |

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

La propiedad `.checkConnectionDelay` contiene <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->el tiempo máximo (en segundos) permitido antes de verificar la conexión con el servidor<!-- END REF -->.  Si se supera este tiempo entre dos llamadas al método, se comprobará la conexión con el servidor. Por defecto, si la propiedad no se ha definido en el objeto *server*, el valor es de 300.

> **Atención**: asegúrese de que el tiempo de espera definido sea menor que el tiempo de espera del servidor, de lo contrario el tiempo de espera del cliente será inútil.

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

| Parámetros     | Tipo       |                             | Descripción                                                                  |
| -------------- | ---------- | :-------------------------: | ---------------------------------------------------------------------------- |
| msgsIDs        | Collection |              ->             | Colección de identificadores únicos de mensajes (cadenas) |
| allMsgs        | Integer    |              ->             | `IMAP all`: todos los mensajes en el buzón seleccionado      |
| destinationBox | Text       |              ->             | Buzón para recibir mensajes copiados                                         |
| Result         | Object     | <- | Estado de la operación de copia                                              |

<!-- END REF -->

#### Descripción

La función `.copy()` <!-- REF #IMAPTransporterClass.copy().Summary -->copia los mensajes definidos por *msgsIDs* o *allMsgs* en la *destinationBox* en el servidor IMAP<!-- END REF -->.

Puede pasar:

- en el parámetro *msgsIDs*, una colección que contiene los IDs únicos de los mensajes específicos a copiar, o
- en el parámetro *allMsgs*, la constante `IMAP all` (entero) para copiar todos los mensajes del buzón seleccionado.

El parámetro *destinationBox* permite pasar un valor texto con el nombre del buzón donde se colocarán las copias de los mensajes.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.createBox().Syntax -->**.createBox**( *name* :  Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.createBox().Params -->

| Parámetros | Tipo   |                             | Descripción                                  |
| ---------- | ------ | :-------------------------: | -------------------------------------------- |
| name       | Text   |              ->             | Nombre del nuevo buzón                       |
| Result     | Object | <- | Estado de la operación de creación del buzón |

<!-- END REF -->

#### Descripción

La función `.createBox()` <!-- REF #IMAPTransporterClass.createBox().Summary -->crea un buzón con el nombre dado<!-- END REF -->. Si el caracter separador de jerarquía del servidor IMAP aparece en otra parte del nombre del buzón, el servidor IMAP creará todos los nombre padre necesarios para crear el buzón dado.

En otras palabras, un intento de crear "Projects/IMAP/Doc" en un servidor en el que "/" es el carácter separador de jerarquía creará:

- Sólo el buzón "Doc" si "Projects" & "IMAP" ya existen.
- Los buzones "IMAP" & "Doc" si sólo existe "Projects".
- Los buzones "Projects" & "IMAP" & "Doc", si no existen.

En el parámetro `name`, pase el nombre del nuevo buzón.

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

| Parámetros | Tipo       |                             | Descripción                                                                  |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------------------------------------- |
| msgsIDs    | Collection |              ->             | Colección de identificadores únicos de mensajes (cadenas) |
| allMsgs    | Integer    |              ->             | `IMAP all`: todos los mensajes en el buzón seleccionado      |
| Result     | Object     | <- | Estado de la operación de eliminación                                        |

<!-- END REF -->

#### Descripción

La función `.delete()` <!-- REF #IMAPTransporterClass.delete().Summary -->define el marcador "deleted" para los mensajes definidos en `msgsIDs` o `allMsgs`<!-- END REF -->.

Puede pasar:

- en el parámetro `msgsIDs`, una colección contiene los IDs únicos de los mensajes específicos a eliminar, o
- en el parámetro `allMsgs`, la constante `IMAP all` (entero) para borrar todos los mensajes en el buzón de correo seleccionado.

La ejecución de esta función no elimina realmente los mensajes. Los mensajes con el marcador "delete" pueden seguir siendo encontrados por la función [.searchMails()](#searchmails). Los mensajes marcados se eliminan del servidor IMAP con la [función `.expunge()`](#expunge) o al seleccionar otro buzón o cuando el [objeto transporter](#imap-transporter-object) (creado con [IMAP New transporter](#imap-new-transporter)) es destruido.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->**.deleteBox**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.deleteBox().Params -->

| Parámetros | Tipo   |                             | Descripción                                     |
| ---------- | ------ | :-------------------------: | ----------------------------------------------- |
| name       | Text   |              ->             | Nombre del buzón a eliminar                     |
| Result     | Object | <- | Estado de la operación de eliminación del buzón |

<!-- END REF -->

#### Descripción

La función `.deleteBox()` <!-- REF #IMAPTransporterClass.deleteBox().Summary -->elimina permanentemente el buzón de correo con el `name` dado del servidor IMAP<!-- END REF -->. Intentar eliminar un INBOX o un buzón que no existe generará un error.

En el parámetro `name`, pase el nombre del buzón a eliminar.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.expunge().Syntax -->**.expunge()** : Object<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Params -->

| Parámetros | Tipo   |                             | Descripción                    |
| ---------- | ------ | :-------------------------: | ------------------------------ |
| Result     | Object | <- | Estado de la operación expunge |

<!-- END REF -->

#### Descripción

La función `.expunge()` <!-- REF #IMAPTransporterClass.expunge().Summary -->elimina todos los mensajes con el marcador "deleted" del servidor de correo IMAP.<!-- END REF --> El marcador "deleted" puede definirse con los métodos [`delete()`](#delete) o [`addFlags()`](#addflags).

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
| 20          | \*se devuelve el *id* |
| 18 R5       | *name* es opcional    |
| 18 R4       | Añadidos              |

</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->

| Parámetros | Tipo   |                             | Descripción      |
| ---------- | ------ | :-------------------------: | ---------------- |
| name       | Text   |              ->             | Nombre del buzón |
| Result     | Object | <- | objeto boxInfo   |

<!-- END REF -->

#### Descripción

La función `.getBoxInfo()` <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->devuelve un objeto `boxInfo` correspondiente al buzón de correo actual o el buzón de correo *name*<!-- END REF -->. Esta función devuelve la misma información que [`.selectBox()`](#selectbox) sin cambiar el buzón actual.

En el parámetro opcional *name*, pase el nombre del buzón a acceder. El nombre representa una jerarquía inequívoca de izquierda a derecha, con niveles separados por un carácter delimitador específico. El delimitador se puede encontrar con la función [`.getDelimiter()`](#getdelimiter).

Si el buzón *name* no es seleccionable o no existe, la función genera un error y devuelve **null**.

**Objeto devuelto**

El objeto `boxInfo` devuelto contiene las siguientes propiedades:

| Propiedad  | Tipo   | Descripción                                                                                       |
| ---------- | ------ | ------------------------------------------------------------------------------------------------- |
| name       | Text   | Nombre del buzón                                                                                  |
| mailCount  | Number | Número de mensajes en el buzón                                                                    |
| mailRecent | Number | Número de mensajes con el marcador "reciente" (que indica los mensajes nuevos) |
| id         | text   | Id. único del buzón                                                               |
| mailUnseen | Number | Número de mensajes marcados como "unseen"                                                         |

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

| Parámetros | Tipo       |                             | Descripción                  |
| ---------- | ---------- | :-------------------------: | ---------------------------- |
| parameters | Object     |              ->             | Objeto de parámetro          |
| Result     | Collection | <- | Colección de objetos mailbox |

<!-- END REF -->

#### Descripción

La función `.getBoxList()` <!-- REF #IMAPTransporterClass.getBoxList().Summary -->devuelve una colección de bandejas de entrada que describe todas las bandejas de entrada disponibles<!-- END REF -->. Esta función permite gestionar localmente la lista de mensajes localizados en el servidor de correo IMAP.

En el parámetro opcional `parameters`, pase un objeto que contenga valores para filtrar los buzones devueltos. Puede pasar:

| Propiedad         | Tipo       | Descripción                                                                                                                                                                                                             |
| ----------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isSubscribed      | Boolean    | <li>**True** para devolver sólo los buzones a los que se haya suscrito</li><li> **False** para devolver todos los buzones disponibles</li>                                                                              |
| names             | Collection | Colección de objetos que contienen un atributo "name" o colección de textos que contienen los nombres de las cajas                                                                                                      |
| withBoxProperties | Boolean    | Si true (por defecto): agrega los atributos `selectable`, `inferior` e `interesting` al objeto de resultado. Si es false, se omiten estos atributos. |
| withBoxInfo       | Boolean    | El valor por defecto es false. Si true, agrega los atributos `mailCount`, `mailRecent` e `id` al objeto resultado.                                                                      |

#### Result

Cada objeto de la colección devuelta contiene las siguientes propiedades:

| Propiedad                                                                            | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \[].name        | Text    | Nombre del buzón. Devuelto si withBoxProperties=true o withBoxInfo=true                                                                                                                                                                                                                                                                                                      |
| \[].selectable  | Boolean | Indicates whether or not the access rights allow the mailbox to be selected: <ul><li>true - the mailbox can be selected</li><li>false - the mailbox can not be selected</li></ul>	Returned if withBoxProperties=true                                                                                                                                                         |
| \[].inferior    | Boolean | Indica si los derechos de acceso permiten o no crear una jerarquía inferior en el buzón: <ul><li>true - se puede crear un nivel inferior</li><li>false - no se puede crear un nivel inferior</li></ul>	Se devuelve si withBoxProperties=true                                                                                                                                 |
| \[].interesting | Boolean | Indica si el buzón ha sido marcado como "interesante" por el servidor: <ul><li>true - El buzón ha sido marcado como "interesante" por el servidor. Por ejemplo, puede contener nuevos mensajes.</li><li>false - El buzón no ha sido marcado como "interesante" por el servidor.</li></ul>	Devuelto si withBoxProperties=true |
| [].mailCount     | Number  | Número de mensajes en el buzón. Devuelto si withBoxInfo=true                                                                                                                                                                                                                                                                                                                 |
| [].mailRecent    | Number  | Número de mensajes marcados como "recent" (indicando nuevos mensajes). Devuelto si withBoxInfo=true                                                                                                                                                                                                                                                       |
| [].mailUnseen    | Number  | Número de mensajes marcados como "unseen". Devuelto si withBoxInfo=true                                                                                                                                                                                                                                                                                                      |
| [].id            | Text    | Identificador único del buzón. Devuelto si withBoxInfo=true                                                                                                                                                                                                                                                                                                                  |

Si la cuenta no contiene buzones, se devuelve una colección vacía.

> - Si no hay ninguna conexión abierta, `.getBoxList()` abrirá una conexión.
> - Si la conexión no ha sido utilizada desde el retraso de conexión designado (ver `IMAP New transporter`), la función `.checkConnection()` se llama automáticamente.

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

| Parámetros | Tipo |                             | Descripción                       |
| ---------- | ---- | :-------------------------: | --------------------------------- |
| Result     | Text | <- | Caracter delimitador de jerarquía |

<!-- END REF -->

#### Descripción

La función `.getDelimiter()` <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->devuelve el caracter utilizado para delimitar niveles de jerarquía en el nombre del buzón<!-- END REF -->.

El delimitador es un caracter que puede utilizarse para:

- crear buzones de nivel inferior
- buscar más arriba o más abajo en la jerarquía del buzón

#### Resultado

Caracter delimitador del nombre del buzón.

> - Si no hay ninguna conexión abierta, `.getDelimiter()` abrirá una conexión.
> - Si la conexión no se ha utilizado desde la [duración máxima definida](#checkconnectiondelay), se llama automáticamente a la función [`.checkConnection()`](#checkconnection).

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

| Parámetros | Tipo    |                             | Descripción                                    |
| ---------- | ------- | :-------------------------: | ---------------------------------------------- |
| msgNumber  | Integer |              ->             | Número de secuencia del mensaje                |
| msgID      | Text    |              ->             | ID único del mensaje                           |
| options    | Object  |              ->             | Instrucciones sobre la gestión de mensajes     |
| Result     | Object  | <- | [Objet Email](EmailObjectClass.md#objet-email) |

<!-- END REF -->

#### Descripción

La función `.getMail()` <!-- REF #IMAPTransporterClass.getMail().Summary -->devuelve el objeto `Email` correspondiente al *msgNumber* o *msgID* en el buzón designado por el `IMAP_transporter`<!-- END REF -->. Esta función permite recuperar la información sobre el email.

En el primer parámetro, puede pasar:

- *msgNumber*, un valor *integer* indicando el número de secuencia del mensaje a recuperar o
- *msgID*, un valor *text* indicando el ID único del mensaje a recuperar.

El parámetro opcional *options* permite pasar un objeto que define las instrucciones adicionales para la gestión del mensaje. Las siguientes propiedades están disponibles:

| Propiedad  | Tipo    | Descripción                                                                                                                                                                      |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | boolean | Si True, el mensaje se marca como "visto" en el buzón. Si es False, el mensaje no se marca como "visto". Valor por defecto: True |
| withBody   | boolean | Pase True para devolver el cuerpo del mensaje. Si es False, sólo se devuelve el encabezado del mensaje. Valor por defecto: True  |

> - La función genera un error y devuelve **Null** si *msgID* designa un mensaje inexistente,
> - Si no se selecciona ningún buzón con la función [`.selectBox()`](#selectbox), se genera un error,
> - Si no hay ninguna conexión abierta, `.getMail()` abrirá una conexión el último buzón especificado con [`.selectBox()`](#selectbox)\`.

#### Result

`.getMail()` devuelve un objeto [`Email`](EmailObjectClass.md#email-object) con las siguientes propiedades IMAP específicas: *id*, *receivedAt*, y *size*.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R5       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.getMails().Syntax -->**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br/>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->

| Parámetros | Tipo       |                             | Descripción                                                                                                                                                                                       |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids        | Collection |              ->             | Colección de identificadores de mensajes                                                                                                                                                          |
| startMsg   | Integer    |              ->             | Número de secuencia del primer mensaje                                                                                                                                                            |
| endMsg     | Integer    |              ->             | Número de secuencia del último mensaje                                                                                                                                                            |
| options    | Object     |              ->             | Instrucciones sobre la gestión de mensajes                                                                                                                                                        |
| Result     | Object     | <- | Objeto que contiene<br/><ul><li>una colección de [objetos Email](EmailObjectClass.md#email-object) y</li><li>una colección de IDs o de números para los mensajes que faltan, si los hay</li></ul> |

<!-- END REF -->

#### Descripción

La función `.getMails()` <!-- REF #IMAPTransporterClass.getMails().Summary -->devuelve un objeto que contiene una colección de objetos `Email`<!-- END REF -->.

**Primera sintaxis:**

***.getMails( ids { ; options } ) -> result***

La primera sintaxis permite recuperar los mensajes en función de sus identificadores.

En el parámetro *ids*, pase una colección de IDs para los mensajes a devolver. Puedes obtener los IDs con [`.getMail()`](#getmail).

El parámetro opcional *options* permite definir las partes de los mensajes a devolver. Consulte la tabla **Options** a continuación para obtener una descripción de las propiedades disponibles.

**Segunda sintaxis:**

***.getMails( startMsg ; endMsg { ; options } ) -> result***

La segunda sintaxis permite recuperar los mensajes en función de un rango secuencial. Los valores pasados representan la posición de los mensajes en el buzón.

En el parámetro *startMsg*, pase un valor *entero* correspondiente al número del primer mensaje en un rango secuencial. Si se pasa un número negativo (*startMsg* <= 0), se utilizará el primer mensaje del buzón como inicio de la secuencia.

En el parámetro *endMsg*, pase un valor *entero* correspondiente al número del último mensaje que se incluirá en un rango secuencial. Si se pasa un número negativo (*endMsg* <= 0), se utilizará el último mensaje del buzón como fin de secuencia.

El parámetro opcional *options* permite definir las partes de los mensajes a devolver.

**Options**

| Propiedad  | Tipo    | Descripción                                                                                                                                                                                         |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | Boolean | Si True, los mensajes especificados se marcan como "vistos" en el buzón. Si False, los mensajes no se marcan como "vistos". Valor por defecto: True |
| withBody   | Boolean | Pase True para devolver el cuerpo de los mensajes específicos. Si False, sólo se devuelve los encabezados de los mensajes. Valor por defecto: True  |

> - Si no se selecciona ningún buzón con el comando [`.selectBox()`](#selectbox), se genera un error.
> - Si no hay ninguna conexión abierta, `.getMails()` abrirá una conexión el último buzón especificado con [`.selectBox()`](#selectbox).

#### Result

`.getMails()` devuelve un objeto que contiene las siguientes colecciones:

| Propiedad | Tipo       | Descripción                                                                                                                                                                                                                                                                                                       |
| --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lista     | Collection | Colección de [`objetos Email`](EmailObjectClass.md#objeto-email). Si no se encuentran objetos Email, se devuelve una colección vacía.                                                                                                                                             |
| notFound  | Collection | Colección de:<br/><ul><li>primera sintaxis - IDs de mensajes previamente pasados que no existen</li><li>segunda sintaxis - números de secuencia de mensajes entre startMsg y endMsg que no existen</li></ul>Si se encuentran todos los mensajes, se devuelve una colección vacía. |

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br/>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->

| Parámetros | Tipo    |                             | Descripción                                                                                                                |
| ---------- | ------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------- |
| msgNumber  | Integer |              ->             | Número de secuencia del mensaje                                                                                            |
| msgID      | Text    |              ->             | ID único del mensaje                                                                                                       |
| updateSeen | Boolean |              ->             | Si True, el mensaje se marca como "visto" en el buzón. Si False, el mensaje se deja igual. |
| Result     | BLOB    | <- | Blob de la cadena MIME devuelta por el servidor de correo                                                                  |

<!-- END REF -->

#### Descripción

La función `.getMIMEAsBlob()` <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->devuelve un BLOB con el contenido MIME del mensaje correspondiente al *msgNumber* o *msgID* en el buzón designado por el `IMAP_transporter`<!-- END REF -->.

En el primer parámetro, puede pasar:

- *msgNumber*, un valor *integer* indicando el número de secuencia del mensaje a recuperar o
- *msgID*, un valor *text* indicando el ID único del mensaje a recuperar.

El parámetro opcional *updateSeen* permite indicar si el mensaje está marcado como "visto" en el buzón. Puede pasar:

- **True** - para marcar el mensaje como "visto" (indicando que el mensaje ha sido leído)
- **False** - para dejar intacto el estado "visto" del mensaje

> * La función devuelve un BLOB vacío si *msgNumber* o msgID\* designa un mensaje inexistente,
> * Si no se selecciona ningún buzón con el comando [`.selectBox()`](#selectbox), se genera un error,
> * Si no hay ninguna conexión abierta, `.getMIMEAsBlob()` abrirá una conexión el último buzón especificado con `.selectBox()`.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R5       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.move().Syntax -->**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->

| Parámetros     | Tipo       |                             | Descripción                                                                  |
| -------------- | ---------- | :-------------------------: | ---------------------------------------------------------------------------- |
| msgsIDs        | Collection |              ->             | Colección de identificadores únicos de mensajes (cadenas) |
| allMsgs        | Integer    |              ->             | `IMAP all`: todos los mensajes en el buzón seleccionado      |
| destinationBox | Text       |              ->             | Buzón para recibir los mensajes desplazados                                  |
| Result         | Object     | <- | Estado de la operación de desplazamiento                                     |

<!-- END REF -->

#### Descripción

La función `.move()` <!-- REF #IMAPTransporterClass.move().Summary -->mueve los mensajes definidos por *msgsIDs* o *allMsgs* a la *destinationBox* del servidor IMAP<!-- END REF -->.

Puede pasar:

- en el parámetro *msgsIDs*, una colección contiene los IDs únicos de los mensajes específicos a mover, o
- en el parámetro *allMsgs*, la constante `IMAP all` (entero) para desplazar todos los mensajes del buzón seleccionado.

El parámetro *destinationBox* permite pasar un valor texto con el nombre del buzón donde los mensajes serán desplazados.

> Esta función sólo es compatible con los servidores IMAP que cumplen la RFC [8474](https://tools.ietf.org/html/rfc8474).

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R5       | Añadidos       |

</details>

<!-- REF #IMAPTransporterClass.numToID().Syntax -->**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.numToID().Params -->

| Parámetros | Tipo       |                             | Descripción                                     |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------- |
| startMsg   | Integer    |              ->             | Número de secuencia del primer mensaje          |
| endMsg     | Integer    |              ->             | Número de secuencia del último mensaje          |
| Result     | Collection | <- | Colección de identificadores de mensajes únicos |

<!-- END REF -->

#### Descripción

La función `.numToID()` <!-- REF #IMAPTransporterClass.numToID().Summary -->convierte los números de secuencia en IDs únicos IMAP para los mensajes en el rango secuencial designado por *startMsg* y *endMsg*<!-- END REF --> en el buzón actualmente seleccionado.

En el parámetro *startMsg*, pase un valor entero correspondiente al número del primer mensaje en un rango secuencial. Si se pasa un número negativo (*startMsg* <= 0), se utilizará el primer mensaje del buzón como inicio de la secuencia.

En el parámetro *endMsg*, pase un valor entero correspondiente al número del último mensaje que se incluirá en un rango secuencial. Si se pasa un número negativo (*endMsg* <= 0), se utilizará el último mensaje del buzón como fin de secuencia.

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                         |
| ----------- | -------------------------------------- |
| 20          | Soporta palabras claves personalizadas |
| 18 R6       | Añadidos                               |

</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->

| Parámetros | Tipo       |                             | Descripción                                                                                                                                                                                                                                                |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection |              ->             | Colección de cadenas: identificadores únicos de mensajes (texto)<br/>Texto: ID único de un mensaje<br/>Longint (IMAP all): todos los mensajes del buzón seleccionado |
| keywords   | Object     |              ->             | Banderas de palabras claves a eliminar                                                                                                                                                                                                                     |
| Result     | Object     | <- | Estado de la operación removeFlags                                                                                                                                                                                                                         |

<!-- END REF -->

#### Descripción

La función `.removeFlags()` <!-- REF #IMAPTransporterClass.removeFlags().Summary -->elimina las banderas de los `msgIDs` para las `keywords` especificadas<!-- END REF -->.

En el parámetro `msgIDs`, puede pasar:

- una *colección* que contiene los IDs únicos de mensajes específicos o
- el ID único (*text*) de un solo mensaje o
- la siguiente constante (*longint*) para todos los mensajes del buzón seleccionado:

| Constante | Valor | Comentario                                            |
| --------- | ----- | ----------------------------------------------------- |
| IMAP all  | 1     | Seleccionar todos los mensajes del buzón seleccionado |

El parámetro `keywords` permite definir las banderas a eliminar de `msgIDs`. Puede utilizar las siguientes banderas estándar, así como banderas personalizadas:

| Parámetros      | Tipo    | Descripción                                             |
| --------------- | ------- | ------------------------------------------------------- |
| $draft          | Boolean | True para eliminar el marcador "draft" del mensaje      |
| $seen           | Boolean | True para eliminar el marcador "seen" del mensaje       |
| $flagged        | Boolean | True para eliminar el marcador "flagged" del mensaje    |
| $answered       | Boolean | True para eliminar el marcador "answered" del mensaje   |
| $deleted        | Boolean | True para eliminar el marcador "deleted" del mensaje    |
| `<custom flag>` | Boolean | True para eliminar la bandera personalizada del mensaje |

Consulte [.addFlags()](#addflags) para obtener más información sobre las banderas personalizadas.

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

| Parámetros  | Tipo   |                             | Descripción                      |
| ----------- | ------ | :-------------------------: | -------------------------------- |
| currentName | Text   |              ->             | Nombre del nuevo actual          |
| newName     | Text   |              ->             | Nuevo nombre del buzón           |
| Result      | Object | <- | Estado de la operación renombrar |

<!-- END REF -->

#### Descripción

La función `.renameBox()` <!-- REF #IMAPTransporterClass.renameBox().Summary -->cambia el nombre de un buzón en el servidor IMAP<!-- END REF -->. Si se intenta renombrar un buzón desde un nombre de buzón que no existe o a un nombre de buzón que ya existe, se generará un error.

En el parámetro `currentName`, pase el nombre del buzón a renombrar.

Pase el nuevo nombre del buzón en el parámetro `newName`.

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

$options:=Nuevo objeto

$pw:=Request("Por favor, introduzca su contraseña:")

If(OK=1) $options.host:="imap.gmail.com"

$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// renombrar buzón
$status:=$transporter.renameBox("Facturas"; "Facturas")

If ($status.success)
   ALERT("¡Cambio de nombre de buzón correcto!")
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

| Parámetros     | Tipo       |                             | Descripción                      |
| -------------- | ---------- | :-------------------------: | -------------------------------- |
| searchCriteria | Text       |              ->             | Criterio de búsqueda             |
| Result         | Collection | <- | Colección de números de mensajes |

<!-- END REF -->

#### Descripción

> Esta función se basa en la especificación del [protocolo IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

La función `.searchMails()` <!-- REF #IMAPTransporterClass.searchMails().Summary -->busca los mensajes que coincidan con los criterios de búsqueda *searchCriteria* dados en el buzón actual<!-- END REF -->. *searchCriteria* consiste en una o más llaves de búsqueda.

*searchCriteria* es un parámetro texto que enumera una o varias llaves de búsqueda (ver [llaves de búsqueda autorizadas](#authorized-search-keys) abajo) asociadas o no a valores a buscar. Una llave de búsqueda puede ser uno o varios elementos. Por ejemplo:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> Para obtener la información de un buzón sin cambiar el buzón actual, utilice <a href="#getboxinfo"><code>.getBoxInfo()</code></a>.

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

- El parámetro *searchCriteria* puede incluir opcionalmente la instrucción \[CHARSET]. Esta instrucción consiste en la palabra "CHARSET" seguida de un conjunto de caracteres definido \[CHARSET] (US ASCII, ISO-8859). Indica el conjunto de caracteres de la cadena *searchCriteria*. Por lo tanto, debe convertir la cadena *searchCriteria* al conjunto de caracteres especificado si utiliza la instrucción \[CHARSET] (consulte los comandos `CONVERT FROM TEXT` o `Convert to text`).
  Por defecto, 4D codifica la cadena de criterios searchCriteria en Quotable Printable si contiene los caracteres extendidos.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... significa que los criterios de búsqueda utilizan el conjunto de caracteres iso-8859 y el servidor tendrá que convertir los criterios de búsqueda antes de buscar, si es necesario.

#### Tipos de valores de búsqueda

Las claves de búsqueda pueden solicitar el valor a buscar:

- **Valores de tipo fecha**: los valores de tipo fecha se colocan en cadenas con el siguiente formato: *date-day+"-"+date-month+"-"+date-year* donde date-day indica la fecha del día del mes (2 caracteres como máximo), date-month indica el mes (Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Dec) y date-year indica el año (4 dígitos).
  Ejemplo: `searchCriteria = SENTBEFORE 1-Feb-2020` (una fecha no suele necesitar comillas, ya que no contiene caracteres especiales)

- **Valores de tipo cadena**: la cadena puede contener cualquier caracter y debe ir entre comillas. Si la cadena no contiene ningún caracter especial, como el espacio, por ejemplo, no es necesario colocarla entre comillas. Al colocar entre comillas estas cadenas se garantiza que su valor se interpretará correctamente.
  Ejemplo: `searchCriteria = FROM "SMITH"`
  Para todas las llaves de búsqueda que utilizan cadenas, un mensaje coincide con la llave si la cadena es una subcadena del campo. Las coincidencias no diferencian entre mayúsculas y minúsculas.

- **Llaves de búsqueda con un valor nombres de campo**: los valores de tipo nombre de campo contienen el nombre de un campo de encabezado.
  Ejemplo: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Llaves de búsqueda con marcadores**: los valores de tipo marcador (flags) aceptan una o varias palabras claves (incluyendo marcadores estándar) separados por espacios.
  Ejemplo: `searchCriteria = KEYWORD \Flagged \Draft`

- **Llaves de búsqueda con un valor de conjunto de mensajes**: identifica un conjunto de mensajes. En el caso de los números de secuencia de los mensajes, se trata de números consecutivos desde el 1 hasta el número total de mensajes en el buzón. Los números son separados por coma; un dos puntos (:) delimita entre dos números inclusive.
  Ejemplos:
  `2,4:7,9,12:*` es `2,4,5,6,7,9,12,13,14,15` para un buzón con 15 mensajes.
  `searchCriteria = 1:5 ANSWERED` busca en la selección de mensajes 1 a 5, los mensajes que tienen el marcador \Answered.
  `searchCriteria= 2,4 ANSWERED` busca en la selección de mensajes (números de mensaje 2 y 4) los mensajes que tienen el indicador \Answered activado.

#### Teclas de búsqueda disponibles

**ALL**: todos los mensajes en el buzón.\
**ANSWERED**: mensajes con el indicador \Answered activado.\
**UNANSWERED**: mensajes que no tienen el indicador \Answered activo.\
**DELETED**: mensajes con el indicador \Deleted activado.\
**UNDELETED**: mensajes que no tienen el indicador \Deleted activado.\
**DRAFT**: mensajes con el indicador \Draft activado.\
**UNDRAFT**: mensajes que no tienen el indicador \Draft activado.\
**FLAGGED**: mensajes con el indicador \Flagged activado.\
**UNFLAGGED**: mensajes que no tienen el indicador \Flagged activado.\
**RECENT**: mensajes que tienen el indicador \Recent activado.\
**OLD**: mensajes que no tienen el indicador \Recent activado.\
**SEEN**: mensajes que tienen el indicador \Seen activo.\
**UNSEEN**: mensajes que no tienen el indicador \Seen activo.\
**NEW**: mensajes que tienen el indicador \Recent activado pero no el indicador \Seen. Esto es funcionalmente equivalente a “(RECENT UNSEEN)”.\
**KEYWORD *flag***: mensajes con el conjunto de palabras clave especificado.\
**UNKEYWORD *flag***: mensajes que no tienen la palabra clave especificada.\
**BEFORE *date***: mensajes cuya fecha interna es anterior a la fecha especificada.\
**ON *date***: mensajes cuya fecha interna está dentro de la fecha especificada.\
**SINCE *date***: mensajes cuya fecha interna es anterior o posterior a la fecha especificada.\
**SENTBEFORE *date***: mensajes cuyo encabezado Date es anterior a la fecha especificada.\
**SENTON *date***: mensajes cuyo encabezado Date está dentro de la fecha especificada.\
**SENTSINCE *date***: mensajes cuyo encabezado Date está dentro o posterior a la fecha especificada.\
**TO *string***: mensajes que contienen la cadena especificada en el encabezado TO.\
**FROM *string***: mensajes que contienen la cadena especificada en el encabezado FROM.\
**CC *string***: mensajes que contienen la cadena especificada en el encabezado CC.\
**BCC *string***: mensajes que contienen la cadena especificada en el encabezado BCC.\
**SUBJECT *string***: mensajes que contienen la cadena especificada en el encabezado Asunto.\
**BODY *string***: mensajes que contienen la cadena especificada en el cuerpo del mensaje.\
**TEXT *string***: mensajes que contienen la cadena especificada en el encabezado o en el cuerpo del mensaje.\
**HEADER *field-name* *string***: mensajes que tienen un encabezado con el nombre de campo especificado y que contiene la cadena especificada en el field-body.\
**UID *message-UID***: mensajes con identificadores únicos correspondientes al conjunto de identificadores únicos especificados.\
**LARGER *n***: mensajes con un tamaño superior al número de bytes especificado.\
**SMALLER *n***: mensajes con un tamaño menor que el número especificado de bytes.\
**NOT *search-key***: mensajes que no coinciden con la llave de búsqueda especificada.\
**OR *search-key1* *search-key2***: mensajes que corresponden con cualquiera de las palabras clave de búsqueda.

<!-- END REF -->

<!-- REF IMAPTransporterClass.selectBox().Desc -->

## .selectBox()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                               |
| ----------- | -------------------------------------------- |
| 20          | *id*, *flags*, *permanentFlags* se devuelven |
| 18 R4       | Añadidos                                     |

</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.selectBox().Params -->

| Parámetros | Tipo    |                             | Descripción               |
| ---------- | ------- | :-------------------------: | ------------------------- |
| name       | Text    |              ->             | Nombre del buzón          |
| state      | Integer |              ->             | Estado de acceso al buzón |
| Result     | Object  | <- | objeto boxInfo            |

<!-- END REF -->

#### Descripción

La función `.selectBox()` <!-- REF #IMAPTransporterClass.selectBox().Summary -->selecciona el buzón *name* como buzón actual<!-- END REF -->. Esta función permite recuperar la información sobre el buzón.

> Para obtener la información de un buzón sin cambiar el buzón actual, utilice [`.getBoxInfo()`](#getboxinfo).

En el parámetro *name*, pase el nombre del buzón a acceder. El nombre representa una jerarquía inequívoca de izquierda a derecha, con niveles separados por un carácter delimitador específico. El delimitador se puede encontrar con la función [`.getDelimiter()`](#getdelimiter).

El parámetro opcional *state* define el tipo de acceso al buzón. Los valores posibles son:

| Constante             | Valor | Comentario                                                                                                                                                                                                                                                          |
| --------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1     | Se accede al buzón seleccionado con privilegios de sólo lectura. Los mensajes con la bandera "reciente" (que indica que son nuevos) no se modifican.                                                             |
| IMAP read write state | 0     | Se accede al buzón seleccionado con privilegios de lectura y escritura. Los mensajes se consideran "vistos" y pierden la bandera "reciente" (que indica que son mensajes nuevos). Default value: |

> - La función genera un error y devuelve **Null** si *name* designa un buzón inexistente.
> - Si no hay ninguna conexión abierta, `.selectBox()` abrirá una conexión.
> - Si la conexión no ha sido usada desde la demora de conexión designada (ver `IMAP New transporter`), la función [`.checkConnection()`](#checkconnection) es llamada automáticamente.

**Objeto devuelto**

El objeto `boxInfo` devuelto contiene las siguientes propiedades:

| Propiedad      | Tipo   | Descripción                                                                                                                                                             |
| -------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name           | Text   | Nombre del buzón                                                                                                                                                        |
| mailCount      | number | Número de mensajes en el buzón                                                                                                                                          |
| mailRecent     | number | Número de mensajes con la bandera "recent"                                                                                                                              |
| id             | text   | Id. único del buzón                                                                                                                                     |
| flags          | text   | Lista de banderas utilizadas actualmente para el buzón, separadas por espacios                                                                                          |
| permanentFlags | text   | Lista de banderas que el cliente puede cambiar permanentemente (excepto el indicador \Recent, que gestiona el servidor IMAP), separados por espacios |

:::info

Si la cadena `permanentFlags` incluye la bandera especial \*, significa que el servidor soporta [banderas personalizadas](#addflags).

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

| Parámetros | Tipo   |                             | Descripción                      |
| ---------- | ------ | :-------------------------: | -------------------------------- |
| name       | Text   |              ->             | Nombre del buzón                 |
| Result     | Object | <- | Estado de la operación subscribe |

<!-- END REF -->

#### Descripción

La función `.subscribe()` <!-- REF #IMAPTransporterClass.subscribe().Summary -->permite añadir el buzón especificado al conjunto de buzones "suscritos" del servidor IMAP<!-- END REF -->. De este modo, puede optar por acotar una gran lista de buzones disponibles suscribiéndose a los que habitualmente consulta.

En el parámetro `name`, pase el nombre del buzón a añadir (suscribir) a sus buzones "suscritos".

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

| Parámetros | Tipo   |                             | Descripción                        |
| ---------- | ------ | :-------------------------: | ---------------------------------- |
| name       | Text   |              ->             | Nombre del buzón                   |
| Result     | Object | <- | Estado de la operación unsubscribe |

<!-- END REF -->

#### Descripción

La función `.unsubscribe()` <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->elimina un buzón de un conjunto de buzones suscritos<!-- END REF -->. Esto le permite reducir el número de buzones que suele ver.

En el parámetro `name`, pase el nombre del buzón a eliminar (darse de baja) de sus buzones activos.

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
