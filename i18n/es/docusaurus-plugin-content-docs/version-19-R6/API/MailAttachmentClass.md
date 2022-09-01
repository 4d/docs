---
id: MailAttachmentClass
title: MailAttachment
---

Los objetos adjuntos permiten referenciar archivos en un objeto [`Email`](EmailObjectClass.md). Los objetos Attachment (adjuntos) son creados utilizando el comando [`MAIL New attachment`](#mail-new-attachment).

### Objetos adjuntos

Los objetos Attachment ofrecen las siguientes propiedades y funciones de sólo lectura:

|                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.cid.Summary -->                            |
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.disposition.Summary -->    |
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.getContent().Summary -->   |
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.name.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.path.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.platformPath.Summary --> |
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.type.Summary -->                         |

## MAIL New attachment

<details><summary>Histórico</summary>

| Versión | Modificaciones                      |
| ------- | ----------------------------------- |
| v19 R2  | Acepta 4D.File, 4D.ZipFile, 4D.Blob |
</details>

<!-- REF #_command_.MAIL_New_attachment.Syntax -->

**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #_command_.MAIL_New_attachment.Params -->

| Parámetros  | Type              |    | Descripción                                                                             |
| ----------- | ----------------- |:--:| --------------------------------------------------------------------------------------- |
| file        | 4D.File           | -> | Archivo adjunto                                                                         |
| zIPFile     | 4D.ZipFile        | -> | Archivo zip adjunto                                                                     |
| blob        | 4D.Blob           | -> | BLOB que contiene el adjunto                                                            |
| path        | Text              | -> | Ruta del archivo adjunto                                                                |
| name        | Text              | -> | Nombre + extensión utilizados por el cliente de correo para designar el archivo adjunto |
| cid         | Text              | -> | ID del archivo adjunto (sólo en mensajes HTML), o " " si no se requiere cid             |
| type        | Text              | -> | Valor del encabezado content-type                                                       |
| disposition | Text              | -> | Valor del encabezado content-disposition: "inline" o "attachment".                      |
| Result      | 4D.MailAttachment | <- | Attachment object|<!-- END REF -->                                            |

#### Descripción

The `MAIL New attachment` command <!-- REF #_command_.MAIL_New_attachment.Summary -->allows you to create an attachment object that you can add to an [Email object](EmailObjectClass.md#email-object)<!-- END REF -->.

Para definir el adjunto, puede utilizar:

- un *file*, pase un objeto `4D.File` que contenga el propio archivo adjunto.
- un *zipfile*, pase un objeto `4D.ZipFile` que contenga el propio archivo adjunto.
- un *blob*, pase un objeto `4D.Blob` que contenga el propio archivo adjunto.
- un *path*, pase un valor **texto** que contenga la ruta del archivo adjunto, expresada con la sintaxis del sistema. Puede pasar un nombre de ruta completo o un simple nombre de archivo (en cuyo caso 4D buscará el archivo en el mismo directorio que el archivo del proyecto).

El parámetro opcional *name* permite pasar el nombre y la extensión que utilizará el cliente de correo para designar el archivo adjunto. Si se omite *name* y:

- pasó una ruta de archivo, se utiliza el nombre y la extensión del archivo,
- pasó un BLOB, se genera automáticamente un nombre aleatorio sin extensión.

El parámetro opcional *cid* permite pasar un ID interno para el archivo adjunto. Este ID es el valor del encabezado `Content-Id`, se utilizará sólo en mensajes HTML. The cid associates the attachment with a reference defined in the message body using an HTML tag such as `\&#060;img src="cid:ID"&#062;`. Esto significa que el contenido del archivo adjunto (por ejemplo, una imagen) debe mostrarse dentro del mensaje en el cliente de correo. El resultado final puede variar en función del cliente de correo. Puede pasar una cadena vacía en *cid* si no quiere utilizar este parámetro.

Puede utilizar el parámetro opcional *type* para definir explícitamente el `content-type` del archivo adjunto. Por ejemplo, puede pasar una cadena que defina un tipo MIME ("video/mpeg"). Este valor de content-type se definirá para el archivo adjunto, independientemente de su extensión. Para más información sobre los tipos MIME, consulte la página [Tipo MIME en Wikipedia](https://en.wikipedia.org/wiki/MIME).

Por defecto, si el parámetro *type* se omite o contiene una cadena vacía, el `content-type` del archivo adjunto se basa en su extensión. Se aplican las siguientes reglas para los principales tipos MIME:

| Extensión | Content-Type                  |
| --------- | ----------------------------- |
| jpg, jpeg | image/jpeg                    |
| png       | image/png                     |
| gif       | image/gif                     |
| pdf       | application/pdf               |
| doc       | application/msword            |
| xls       | application/vnd.ms-excel      |
| ppt       | application/vnd.ms-powerpoint |
| zip       | application/zip               |
| gz        | application/gzip              |
| json      | application/json              |
| js        | application/javascript        |
| ps        | application/postscript        |
| xml       | application/xml               |
| htm, html | text/html                     |
| mp3       | audio/mpeg                    |
| *otro*    | application/octet-stream      |

El parámetro opcional *disposition* permite pasar el encabezado `content-disposition` del adjunto. Puede pasar una de las siguientes constantes del tema constante "Mail":

| Constante                   | Value        | Comentario                                                                                                                                                                                                                       |
| --------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Define el valor del encabezado Content-disposition como "attachment", lo que significa que el archivo adjunto debe proporcionarse como un enlace en el mensaje.                                                                  |
| mail disposition inline     | "inline"     | Define el valor del encabezado Content-disposition como "inline", lo que significa que el archivo adjunto debe aparecer dentro del contenido del mensaje, en la ubicación "cid". La renderización depende del cliente de correo. |

Por defecto, si se omite el parámetro *disposition*:

- si el parámetro *cid* se utiliza, el encabezado `Content-disposition` es definido como "inline",
- si el parámetro *cid* no se pasa o está vacío, el encabezado `Content-disposition` es definido como "attachment".

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

//añadir un enlace para descargar el archivo
$email.attachments:=New collection(MAIL New attachment(Document))
//insertar una imagen en línea (utilice un cid)
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

<details><summary>Histórico</summary>

| Versión | Modificaciones                      |
| ------- | ----------------------------------- |
| v19 R2  | Acepta 4D.File, 4D.ZipFile, 4D.Blob |
</details>

<!-- REF #4D.MailAttachment.new().Syntax -->

**4D.MailAttachment.new**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| Parámetros  | Type              |    | Descripción                                                                             |
| ----------- | ----------------- |:--:| --------------------------------------------------------------------------------------- |
| file        | 4D.File           | -> | Archivo adjunto                                                                         |
| zIPFile     | 4D.ZipFile        | -> | Archivo zip adjunto                                                                     |
| blob        | 4D.Blob           | -> | BLOB que contiene el adjunto                                                            |
| path        | Text              | -> | Ruta del archivo adjunto                                                                |
| name        | Text              | -> | Nombre + extensión utilizados por el cliente de correo para designar el archivo adjunto |
| cid         | Text              | -> | ID del archivo adjunto (sólo en mensajes HTML), o " " si no se requiere cid             |
| type        | Text              | -> | Valor del encabezado content-type                                                       |
| disposition | Text              | -> | Valor del encabezado content-disposition: "inline" o "attachment".                      |
| Result      | 4D.MailAttachment | <- | Attachment object|<!-- END REF -->                                            |

#### Descripción

The `4D.MailAttachment.new()` function <!-- REF #4D.MailAttachment.new().Summary -->creates and returns a new object of the `4D.MailAttachment` type<!-- END REF -->. La propiedad `.type` contiene <!-- REF #MailAttachmentClass.type.Summary -->el `content-type` del archivo adjunto<!-- END REF -->.

## .cid<!-- REF #MailAttachmentClass.cid.Syntax -->**.cid** : Text<!-- END REF -->#### Descripción

<!-- REF #MailAttachmentClass.cid.Syntax -->

.<!-- END REF -->

#### Descripción

The `.cid` property contains <!-- REF #MailAttachmentClass.cid.Summary --> the ID of the attachment<!-- END REF -->. Esta propiedad se utiliza sólo en los mensajes HTML. Si falta esta propiedad, el archivo se maneja como un simple adjunto (enlace).

## .disposition<!-- REF #MailAttachmentClass.disposition.Syntax -->**.disposition** : Text<!-- END REF -->#### Descripción

<!-- REF #MailAttachmentClass.disposition.Syntax -->

**.disposition** : Text<!-- END REF -->

#### Descripción

The `.disposition` property contains <!-- REF #MailAttachmentClass.disposition.Summary -->the value of the `Content-Disposition` header<!-- END REF -->. .

- "inline": el archivo adjunto se muestra dentro del contenido del mensaje, en la ubicación "cid". La renderización depende del cliente de correo.
- "attachment": el archivo adjunto se presenta como un enlace en el mensaje.

## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->

**.getContent()** : 4D.Blob<!-- END REF -->


<!-- REF #MailAttachmentClass.getContent().Params -->
| Parámetros | Type    |    | Descripción                                          |
| ---------- | ------- |:--:| ---------------------------------------------------- |
| Result     | 4D.Blob | <- | Content of the attachment|<!-- END REF --> |

#### Descripción

The `.getContent()` function <!-- REF #MailAttachmentClass.getContent().Summary -->returns the contents of the attachment object in a `4D.Blob` object<!-- END REF -->. Puede utilizar esta función con los objetos adjuntos recibidos por el comando [`MAIL Convert from MIME`](#mail-convert-from-mime).

## .name

<!-- REF #MailAttachmentClass.name.Syntax -->

**.name** : Text<!-- END REF -->

#### Descripción

The `.name` property contains <!-- REF #MailAttachmentClass.name.Summary -->the name and extension of the attachment<!-- END REF -->.  Por defecto, es el nombre del archivo, a menos que se haya indicado otro nombre en el comando [`MAIL New attachment`](#mail-new-attachment).

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->

**.path** : Text<!-- END REF -->

#### Descripción

The `.path` property contains <!-- REF #MailAttachmentClass.path.Summary -->the POSIX path of the attachment file, if it exists<!-- END REF -->.

## .platformPath

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19     | Añadidos       |
</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->

**.platformPath** : Text<!-- END REF -->

#### Descripción

The `.platformPath` property returns <!-- REF #MailAttachmentClass.platformPath.Summary -->The `.platformPath` property returns<!-- END REF -->.

## .type

<!-- REF #MailAttachmentClass.type.Syntax -->

**.type** : Text<!-- END REF -->

#### Descripción

The `.type` property contains <!-- REF #MailAttachmentClass.type.Summary -->the `content-type` of the attachment file<!-- END REF -->. Si este tipo no se pasa explícitamente al comando [`MAIL New attachment`](#mail-new-attachment), el `content-type` se basa en su extensión de archivo.
