---
id: MailAttachmentClass
title: MailAttachment
---

Los objetos adjuntos permiten referenciar archivos en un objeto [`Email`](EmailObjectClass.md). Los objetos Attachment (adjuntos) son creados utilizando el comando [`MAIL New attachment`](#mail-new-attachment).


### Objeto anexos

Los objetos Attachment ofrecen las siguientes propiedades y funciones de sólo lectura:


|                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.cid.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.disposition.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getContent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.getContent().Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.name.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.path.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.platformPath.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.type.Summary -->|


## MAIL New attachment

<!-- REF #_command_.MAIL_New_attachment.Syntax -->
**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br>**MAIL New attachment**( *blob* : Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #_command_.MAIL_New_attachment.Params -->

| Parámetros  | Tipo              |    | Descripción                                                          |
| ----------- | ----------------- |:--:| -------------------------------------------------------------------- |
| path        | Text              | -> | Ruta del archivo adjunto                                             |
| blob        | Blob              | -> | BLOB containing the attachment                                       |
| name        | Text              | -> | Name + extension used by the mail client to designate the attachment |
| cid         | Text              | -> | ID of attachment (HTML messages only), or " " if no cid is required  |
| type        | Text              | -> | Value of the content-type header                                     |
| disposition | Text              | -> | Value of the content-disposition header: "inline" or "attachment".   |
| Resultado   | 4D.MailAttachment | <- | Attachment object                                                    |
<!-- END REF -->


#### Descripción

The `MAIL New attachment` command <!-- REF #_command_.MAIL_New_attachment.Summary -->allows you to create an attachment object that you can add to an [Email object](EmailObjectClass.md#email-object)<!-- END REF -->.

You can pass either a path or a Blob to define the attachment.

- If you use a *path*, pass a **text** value containing the path of the attachment file, expressed with the system syntax. You can pass a full path name or a simple file name (in which case 4D will search for the file in the same directory as the project file).

- If you use a *blob*, pass a **BLOB** value containing the attachment itself.

The optional *name* parameter lets you pass the name and extension to be used by the mail client to designate the attachment. If *name* is omitted and:

*   you passed a file path, the name and extension of the file is used,
*   you passed a BLOB, a random name without extension is automatically generated.

The optional *cid* parameter lets you pass an internal ID for the attachment. This ID is the value of the `Content-Id` header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as `\<img src="cid:ID">`. This means that the contents of the attachment (e.g., a picture) should be displayed within the message on the mail client. The final result may vary depending on the mail client. You can pass an empty string in *cid* if you do not want to use this parameter.

You can use the optional *type* parameter to explicitly set the `content-type` of the attachment file. For example, you can pass a string defining a MIME type ("video/mpeg"). This content-type value will be set for the attachment, regardless of its extension. For more information about MIME types, please refer to the [MIME type page on Wikipedia](https://en.wikipedia.org/wiki/MIME).

By default, if the *type* parameter is omitted or contains an empty string, the `content-type` of the attachment file is based on its extension. The following rules are applied for the main MIME types:

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

The optional *disposition* parameter lets you pass the `content-disposition` header of the attachment. You can pass one of the following constants from the "Mail" constant theme:

| Constante                   | Valor        | Comentario                                                                                                                                                                                           |
| --------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Set the Content-disposition header value to "attachment", which means that the attachment file must be provided as a link in the message.                                                            |
| mail disposition inline     | "inline"     | Set the Content-disposition header value to "inline", which means that the attachment must be rendered within the message contents, at the "cid" location. The rendering depends on the mail client. |

By default, if the *disposition* parameter is omitted:

*   if the *cid* parameter is used, the `Content-disposition` header is set to "inline",
*   if the *cid* parameter is not passed or empty, the `Content-disposition` header is set to "attachment".

#### Ejemplo 1

You want to send an email with a user-selected file as an attachment and an image embedded in the HTML body:

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


<!-- REF #4D.MailAttachment.new().Syntax -->
**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br>**4D.MailAttachment.new**( *blob* : Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| Parámetros  | Tipo              |    | Descripción                                                          |
| ----------- | ----------------- |:--:| -------------------------------------------------------------------- |
| path        | Text              | -> | Ruta del archivo adjunto                                             |
| blob        | Blob              | -> | BLOB containing the attachment                                       |
| name        | Text              | -> | Name + extension used by the mail client to designate the attachment |
| cid         | Text              | -> | ID of attachment (HTML messages only), or " " if no cid is required  |
| type        | Text              | -> | Value of the content-type header                                     |
| disposition | Text              | -> | Value of the content-disposition header: "inline" or "attachment".   |
| Resultado   | 4D.MailAttachment | <- | Attachment object                                                    |
<!-- END REF -->

#### Descripción

The `4D.MailAttachment.new()` function <!-- REF #4D.MailAttachment.new().Summary -->creates and returns a new object of the `4D.MailAttachment` type<!-- END REF -->. It is identical to the [`MAIL New attachment`](#mail-new-attachment) command (shortcut).


## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->
**.cid** : Text<!-- END REF -->


#### Descripción

The `.cid` property contains <!-- REF #MailAttachmentClass.cid.Summary --> the ID of the attachment<!-- END REF -->. This property is used in HTML messages only. If this property is missing, the file is handled as a simple attachment (link).


## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->
**.disposition** : Text<!-- END REF -->


#### Descripción

The `.disposition` property contains <!-- REF #MailAttachmentClass.disposition.Summary -->the value of the `Content-Disposition` header<!-- END REF -->. Hay dos valores disponibles:

*   "inline": el archivo adjunto se muestra dentro del contenido del mensaje, en la ubicación "cid". The rendering depends on the mail client.
*   "attachment": el archivo adjunto se presenta como un enlace en el mensaje.


## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->
**.getContent()**: Blob<!-- END REF -->

<!-- REF #MailAttachmentClass.getContent().Params -->
| Parámetros | Tipo |    | Descripción         |
| ---------- | ---- |:--:| ------------------- |
| Resultado  | Blob | <- | Contenido del anexo |
<!-- END REF -->


#### Descripción

The `.getContent()` function <!-- REF #MailAttachmentClass.getContent().Summary -->returns the contents of the attachment object in a BLOB<!-- END REF -->. You can use this method with attachment objects received by the [`MAIL Convert from MIME`](#mail-convert-from-mime) command.



## .name

<!-- REF #MailAttachmentClass.name.Syntax -->
**.name** : Text<!-- END REF -->


#### Descripción

The `.name` property contains <!-- REF #MailAttachmentClass.name.Summary -->the name and extension of the attachment<!-- END REF -->.  By default, it is the name of the file, unless another name was specified in the [`MAIL New attachment`](#mail-new-attachment) command.

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

The `.platformPath` property returns <!-- REF #MailAttachmentClass.platformPath.Summary -->the path of the attachment file expressed with the current platform syntax<!-- END REF -->.


## .type

<!-- REF #MailAttachmentClass.type.Syntax -->
**.type** : Text<!-- END REF -->


#### Descripción

The `.type` property contains <!-- REF #MailAttachmentClass.type.Summary -->the `content-type` of the attachment file<!-- END REF -->. If this type is not explicitly passed to the [`MAIL New attachment`](#mail-new-attachment) command, the `content-type` is based on its file extension.



<style> h2 { background: #d9ebff;}</style>
