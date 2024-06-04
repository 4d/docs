---
id: MailAttachmentClass
title: MailAttachment
---

Attachment objects allow referencing files within a [`Email`](EmailObjectClass.md) object. Attachment objects are created using the [`MAIL New attachment`](#mail-new-attachment) command.

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

The `MAIL New attachment` command <!-- REF #_command_.MAIL New attachment.Summary -->allows you to create an attachment object that you can add to an [Email object](EmailObjectClass.md#email-object)<!-- END REF -->.

Para definir el adjunto, puede utilizar:

- a *file*, pass a `4D.File` object containing the attachment file.
- a *zipfile*, pass a `4D.ZipFile` object containing the attachment file.
- a *blob*, pass a `4D.Blob` object containing the attachment itself.
- a *path*, pass a **text** value containing the path of the attachment file, expressed with the system syntax. Puede pasar un nombre de ruta completo o un simple nombre de archivo (en cuyo caso 4D buscará el archivo en el mismo directorio que el archivo del proyecto).

The optional *name* parameter lets you pass the name and extension to be used by the mail client to designate the attachment. Si se omite *name* y:

- pasó una ruta de archivo, se utiliza el nombre y la extensión del archivo,
- pasó un BLOB, se genera automáticamente un nombre aleatorio sin extensión.

The optional *cid* parameter lets you pass an internal ID for the attachment. This ID is the value of the `Content-Id` header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as `\<img src="cid:ID">`. Esto significa que el contenido del archivo adjunto (por ejemplo, una imagen) debe mostrarse dentro del mensaje en el cliente de correo. El resultado final puede variar en función del cliente de correo. You can pass an empty string in *cid* if you do not want to use this parameter.

You can use the optional *type* parameter to explicitly set the `content-type` of the attachment file. Por ejemplo, puede pasar una cadena que defina un tipo MIME ("video/mpeg"). Este valor de content-type se definirá para el archivo adjunto, independientemente de su extensión. For more information about MIME types, please refer to the [MIME type page on Wikipedia](https://en.wikipedia.org/wiki/MIME).

By default, if the *type* parameter is omitted or contains an empty string, the `content-type` of the attachment file is based on its extension. Se aplican las siguientes reglas para los principales tipos MIME:

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

The optional *disposition* parameter lets you pass the `content-disposition` header of the attachment. Puede pasar una de las siguientes constantes del tema constante "Mail":

| Constante                   | Valor        | Comentario                                                                                                                                                                                                                                                       |
| --------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Define el valor del encabezado Content-disposition como "attachment", lo que significa que el archivo adjunto debe proporcionarse como un enlace en el mensaje.                                                                                  |
| mail disposition inline     | "inline"     | Define el valor del encabezado Content-disposition como "inline", lo que significa que el archivo adjunto debe aparecer dentro del contenido del mensaje, en la ubicación "cid". La renderización depende del cliente de correo. |

By default, if the *disposition* parameter is omitted:

- if the *cid* parameter is used, the `Content-disposition` header is set to "inline",
- if the *cid* parameter is not passed or empty, the `Content-disposition` header is set to "attachment".

#### Ejemplo 1

Desea enviar un correo electrónico con un archivo seleccionado por el usuario como adjunto y una imagen integrada en el cuerpo HTML:

```4d
$doc:=Select document("";"*";"Please select a file to attach";0)
If (OK=1) //If a document was selected

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

$transporter.send($email) //send mail

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

The `4D.MailAttachment.new()` function <!-- REF #4D.MailAttachment.new().Summary -->creates and returns a new object of the `4D.MailAttachment` type<!-- END REF -->. It is identical to the [`MAIL New attachment`](#mail-new-attachment) command (shortcut).

## .cid<!-- REF #MailAttachmentClass.cid.Syntax --><strong x-id="1">.cid</strong> : Text<!-- END REF -->#### Descripción

<!-- REF #MailAttachmentClass.cid.Syntax -->**.cid** : Text<!-- END REF -->

#### Descripción

The `.cid` property contains <!-- REF #MailAttachmentClass.cid.Summary --> the ID of the attachment<!-- END REF -->. Esta propiedad se utiliza sólo en los mensajes HTML. Si falta esta propiedad, el archivo se maneja como un simple adjunto (enlace).

## .disposition<!-- REF #MailAttachmentClass.disposition.Syntax --><strong x-id="1">.disposition</strong> : Text<!-- END REF -->#### Descripción

<!-- REF #MailAttachmentClass.disposition.Syntax -->**.disposition** : Text<!-- END REF -->

#### Descripción

The `.disposition` property contains <!-- REF #MailAttachmentClass.disposition.Summary -->the value of the `Content-Disposition` header<!-- END REF -->. Hay dos valores disponibles:

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

The `.getContent()` function <!-- REF #MailAttachmentClass.getContent().Summary -->returns the contents of the attachment object in a `4D.Blob` object<!-- END REF -->. You can use this method with attachment objects received by the [`MAIL Convert from MIME`](EmailObjectClass.md#mail-convert-from-mime) command.

## .name

<!-- REF #MailAttachmentClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descripción

The `.name` property contains <!-- REF #MailAttachmentClass.name.Summary -->the name and extension of the attachment<!-- END REF -->.  By default, it is the name of the file, unless another name was specified in the [`MAIL New attachment`](#mail-new-attachment) command.

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descripción

The `.path` property contains <!-- REF #MailAttachmentClass.path.Summary -->the POSIX path of the attachment file, if it exists<!-- END REF -->.

## .platformPath

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Descripción

The `.platformPath` property returns <!-- REF #MailAttachmentClass.platformPath.Summary -->the path of the attachment file expressed with the current platform syntax<!-- END REF -->.

## .size

<!-- REF #MailAttachmentClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### Descripción

The `.size` property contains <!-- REF #MailAttachmentClass.size.Summary -->the value of the `size` header of the attachment file<!-- END REF -->. The `.size` property is returned when the MIME message defines a size header in the attachment part.

## .type

<!-- REF #MailAttachmentClass.type.Syntax -->**.type** : Text<!-- END REF -->

#### Descripción

The `.type` property contains <!-- REF #MailAttachmentClass.type.Summary -->the `content-type` of the attachment file<!-- END REF -->. If this type is not explicitly passed to the [`MAIL New attachment`](#mail-new-attachment) command, the `content-type` is based on its file extension.
