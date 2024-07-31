---
id: MailAttachmentClass
title: MailAttachment
---

Los objetos Attachment permiten referenciar archivos en un objeto [`Email`](EmailObjectClass.md). Los objetos Attachment son creados utilizando el comando [`MAIL New attachment`](#mail-new-attachment).

### Objetos adjuntos

Los objetos Attachment ofrecen las siguientes propiedades y funciones de sólo lectura:

|                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)<br/><!-- INCLUDE #MailAttachmentClass.cid.Summary -->                            |
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)<br/><!-- INCLUDE #MailAttachmentClass.disposition.Summary -->    |
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)<br/><!-- INCLUDE #MailAttachmentClass.getContent().Summary -->   |
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)<br/><!-- INCLUDE #MailAttachmentClass.name.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)<br/><!-- INCLUDE #MailAttachmentClass.path.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #MailAttachmentClass.platformPath.Summary --> |
| [<!-- INCLUDE #MailAttachmentClass.size.Syntax -->](#size)<br/><!-- INCLUDE #MailAttachmentClass.size.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)<br/><!-- INCLUDE #MailAttachmentClass.type.Summary -->                         |

## MAIL New attachment

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                      |
| ----------- | ----------------------------------------------------------------------------------- |
| 19 R2       | Acepta 4D.File, 4D.ZipFile, 4D.Blob |

</details>

<!-- REF #_command_.MAIL New attachment.Syntax -->**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #_command_.MAIL New attachment.Params -->

| Parámetros  | Tipo                              |     | Descripción                                                                                        |
| ----------- | --------------------------------- | :-: | -------------------------------------------------------------------------------------------------- |
| file        | 4D.File           |  -> | Archivo adjunto                                                                                    |
| zIPFile     | 4D.ZipFile        |  -> | Archivo zip adjunto                                                                                |
| blob        | 4D.Blob           |  -> | BLOB que contiene el adjunto                                                                       |
| path        | Text                              |  -> | Ruta del archivo adjunto                                                                           |
| name        | Text                              |  -> | Nombre + extensión utilizados por el cliente de correo para designar el archivo adjunto            |
| cid         | Text                              |  -> | ID del archivo adjunto (sólo en mensajes HTML), o " " si no se requiere cid     |
| type        | Text                              |  -> | Valor del encabezado content-type                                                                  |
| disposition | Text                              |  -> | Valor del encabezado content-disposition: "inline" o "attachment". |
| Result      | 4D.MailAttachment |  <- | Objeto adjunto                                                                                     |

<!-- END REF -->

#### Descripción

El comando `MAIL New attachment` <!-- REF #_command_.MAIL New attachment.Summary -->le permite crear un objeto adjunto que puede agregar a un [objeto de Email](EmailObjectClass.md#email-object)<!-- END REF -->.

Para definir el adjunto, puede utilizar:

- un *file*, pase un objeto `4D.File` que contenga el archivo adjunto.
- un *zipfile*, pase un objeto `4D.ZipFile` que contenga el archivo adjunto.
- un *blob*, pase un objeto `4D.Blob` que contenga el propio adjunto.
- un *path*, pase un valor *text* que contenga la ruta del archivo adjunto, expresada con la sintaxis del sistema. Puede pasar un nombre de ruta completo o un simple nombre de archivo (en cuyo caso 4D buscará el archivo en el mismo directorio que el archivo del proyecto).

El parámetro opcional *name* permite pasar el nombre y la extensión que utilizará el cliente de correo para designar el archivo adjunto. Si se omite *name* y:

- pasó una ruta de archivo, se utiliza el nombre y la extensión del archivo,
- pasó un BLOB, se genera automáticamente un nombre aleatorio sin extensión.

El parámetro opcional *cid* permite pasar un ID interno para el archivo adjunto. Este ID es el valor del encabezado `Content-Id`, se utilizará sólo en mensajes HTML. El cid asocia el archivo adjunto con una referencia definida en el cuerpo del mensaje mediante una etiqueta HTML como `\<img src="cid:ID">`. Esto significa que el contenido del archivo adjunto (por ejemplo, una imagen) debe mostrarse dentro del mensaje en el cliente de correo. El resultado final puede variar en función del cliente de correo. Puede pasar una cadena vacía en *cid* si no quiere utilizar este parámetro.

Puede utilizar el parámetro opcional *type* para definir explícitamente el `content-type` del archivo adjunto. Por ejemplo, puede pasar una cadena que defina un tipo MIME ("video/mpeg"). Este valor de content-type se definirá para el archivo adjunto, independientemente de su extensión. Para más información sobre los tipos MIME, por favor consulte la [página tipo MIME en Wikipedia](https://en.wikipedia.org/wiki/MIME).

Por defecto, si el parámetro *type* se omite o contiene una cadena vacía, el `content-type` del archivo adjunto se basa en su extensión. Se aplican las siguientes reglas para los principales tipos MIME:

| Extensión | Content Type                                  |
| --------- | --------------------------------------------- |
| jpg, jpeg | image/jpeg                                    |
| png       | image/png                                     |
| gif       | image/gif                                     |
| pdf       | application/pdf                               |
| doc       | application/msword                            |
| xls       | application/vnd.ms-excel      |
| ppt       | application/vnd.ms-powerpoint |
| zip       | application/zip                               |
| gz        | application/gzip                              |
| json      | application/json                              |
| js        | application/javascript                        |
| ps        | application/postscript                        |
| xml       | application/xml                               |
| htm, html | text/html                                     |
| mp3       | audio/mpeg                                    |
| *otro*    | application/octet-stream                      |

El parámetro opcional *disposition* permite pasar el encabezado `content-disposition` del archivo adjunto. Puede pasar una de las siguientes constantes del tema constante "Mail":

| Constante                   | Valor        | Comentario                                                                                                                                                                                                                                                       |
| --------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Define el valor del encabezado Content-disposition como "attachment", lo que significa que el archivo adjunto debe proporcionarse como un enlace en el mensaje.                                                                                  |
| mail disposition inline     | "inline"     | Define el valor del encabezado Content-disposition como "inline", lo que significa que el archivo adjunto debe aparecer dentro del contenido del mensaje, en la ubicación "cid". La renderización depende del cliente de correo. |

Por defecto, si se omite el parámetro *disposition*:

- si se utiliza el parámetro *cid*, el encabezado `Content-disposition` se define en "inline",
- si el parámetro *cid* no se pasa o está vacío, el encabezado `Content-disposition` se establece en "attachment".

#### Ejemplo 1

Desea enviar un correo electrónico con un archivo seleccionado por el usuario como adjunto y una imagen integrada en el cuerpo HTML:

```4d
$doc:=Select document("";"*";"Please select a file to attach";0)
If (OK=1) //Si se ha seleccionado un documento

C_OBJECT($email;$server;$transporter)

$server:=New object
$server.host:="smtp.mail.com"
$server.user:="test_user@mail.com"
$server.password:="p@ssw@rd"
$transporter:=SMTP New transporter($server)

$email:=New object
$email.from:="test_user@mail.com"
$email.to:="test_user@mail.com"
$email.subject:="This is a test message with attachments"

//add a link to download file
$email.attachments:=New collection(MAIL New attachment(Document))
//insert an inline picture (use a cid)
$email.attachments[1]:=MAIL New attachment("c:\\Pictures\\4D.jpg";"";"4D")

$email.htmlBody:="<html>"+\
"<body>Hello World!"+\
"<img src='cid:4D' >"+\
"</body>"+\
"</head>"+\
"</html>"

$transporter.send($email) //enviar mail

End if
```

#### Ejemplo 2

Desea enviar un correo electrónico con un área 4D Write Pro como archivo adjunto:

```4d
C_BLOB($blob)
WP EXPORT VARIABLE(WPArea;$blob;wk docx)

C_OBJECT($email;$server;$transporter)

$server:=New object
$server.host:="smtp.mail.com"
$server.user:="user@mail.com"
$server.password:="p@ssw@rd"
$transporter:=SMTP New transporter($server)

$email:=New object
$email.from:="user@mail.com"
$email.to:="customer@mail.com"
$email.subject:="New annual report"
$email.textBody:="Please find enclosed our latest annual report."
$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))

$transporter.send($email)
```

## 4D.MailAttachment.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                      |
| ----------- | ----------------------------------------------------------------------------------- |
| 19 R2       | Acepta 4D.File, 4D.ZipFile, 4D.Blob |

</details>

<!-- REF #4D.MailAttachment.new().Syntax -->**4D.MailAttachment.new**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| Parámetros  | Tipo                              |     | Descripción                                                                                        |
| ----------- | --------------------------------- | :-: | -------------------------------------------------------------------------------------------------- |
| file        | 4D.File           |  -> | Archivo adjunto                                                                                    |
| zIPFile     | 4D.ZipFile        |  -> | Archivo zip adjunto                                                                                |
| blob        | 4D.Blob           |  -> | BLOB que contiene el adjunto                                                                       |
| path        | Text                              |  -> | Ruta del archivo adjunto                                                                           |
| name        | Text                              |  -> | Nombre + extensión utilizados por el cliente de correo para designar el archivo adjunto            |
| cid         | Text                              |  -> | ID del archivo adjunto (sólo en mensajes HTML), o " " si no se requiere cid     |
| type        | Text                              |  -> | Valor del encabezado content-type                                                                  |
| disposition | Text                              |  -> | Valor del encabezado content-disposition: "inline" o "attachment". |
| Result      | 4D.MailAttachment |  <- | Objeto adjunto                                                                                     |

<!-- END REF -->

#### Descripción

La función `4D.MailAttachment.new()` <!-- REF #4D.MailAttachment.new().Summary -->crea y devuelve un nuevo objeto de tipo `4D.MailAttachment`<!-- END REF -->. Es idéntico al comando [`MAIL New attachment`](#mail-new-attachment) (acceso directo).

## .cid<!-- REF #MailAttachmentClass.cid.Syntax --><strong x-id="1">.cid</strong> : Text<!-- END REF -->#### Descripción

<!-- REF #MailAttachmentClass.cid.Syntax -->**.cid** : Text<!-- END REF -->

#### Descripción

La propiedad `.cid` contiene <!-- REF #MailAttachmentClass.cid.Summary -->el ID del archivo adjunto<!-- END REF -->. Esta propiedad se utiliza sólo en los mensajes HTML. Si falta esta propiedad, el archivo se maneja como un simple adjunto (enlace).

## .disposition<!-- REF #MailAttachmentClass.disposition.Syntax --><strong x-id="1">.disposition</strong> : Text<!-- END REF -->#### Descripción

<!-- REF #MailAttachmentClass.disposition.Syntax -->**.disposition** : Text<!-- END REF -->

#### Descripción

La propiedad `.disposition` contiene <!-- REF #MailAttachmentClass.disposition.Summary -->el valor del encabezado `Content-Disposition`<!-- END REF -->. Hay dos valores disponibles:

- "inline": el archivo adjunto se muestra dentro del contenido del mensaje, en la ubicación "cid". La renderización depende del cliente de correo.
- "attachment": el archivo adjunto se presenta como un enlace en el mensaje.

## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->**.getContent()** : 4D.Blob<!-- END REF -->

<!-- REF #MailAttachmentClass.getContent().Params -->

| Parámetros | Tipo                    |     | Descripción         |
| ---------- | ----------------------- | :-: | ------------------- |
| Result     | 4D.Blob |  <- | Contenido del anexo |

<!-- END REF -->

#### Descripción

La función `.getContent()` <!-- REF #MailAttachmentClass.getContent().Summary -->devuelve el contenido del objeto adjunto en un objeto `4D.Blob`<!-- END REF -->. Puede utilizar este método con objetos adjuntos recibidos por el comando [`MAIL Convert from MIME`](EmailObjectClass.md#mail-convert-from-mime).

## .name

<!-- REF #MailAttachmentClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descripción

La propiedad `.name` contiene <!-- REF #MailAttachmentClass.name.Summary -->el nombre y la extensión del adjuntot<!-- END REF -->.  Por defecto, es el nombre del archivo, a menos que se haya indicado otro nombre en el comando [`MAIL New attachment`](#mail-new-attachment).

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descripción

La propiedad `.path` contiene <!-- REF #MailAttachmentClass.path.Summary -->la ruta POSIX del archivo adjunto, si existe<!-- END REF -->.

## .platformPath

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Descripción

La propiedad `.platformPath` contiene <!-- REF #MailAttachmentClass.platformPath.Summary -->la ruta del archivo adjunto expresada con la sintaxis de la plataforma actual<!-- END REF -->.

## .size

<!-- REF #MailAttachmentClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### Descripción

La propiedad `.size` contiene <!-- REF #MailAttachmentClass.size.Summary -->el valor del encabezado `size` del archivo adjunto<!-- END REF -->. La propiedad `.size` se devuelve cuando el mensaje MIME define un encabezado de tamaño en la parte adjunta.

## .type

<!-- REF #MailAttachmentClass.type.Syntax -->**.type** : Text<!-- END REF -->

#### Descripción

La propiedad `.type` contiene <!-- REF #MailAttachmentClass.type.Summary -->el `content-type` del archivo adjunto<!-- END REF -->. Si este tipo no se pasa explícitamente al comando [`MAIL New attachment`](#mail-new-attachment), el `content-type` se basa en su extensión de archivo.
