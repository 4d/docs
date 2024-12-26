---
id: mail-new-attachment
title: MAIL New attachment
displayed_sidebar: docs
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                      |
| ----------- | ----------------------------------------------------------------------------------- |
| 19 R2       | Acepta 4D.File, 4D.ZipFile, 4D.Blob |

</details>

<!-- REF #_command_.MAIL New attachment.Syntax -->**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!--REF #_command_.MAIL New attachment.Params-->

| Parámetros  | Tipo                              |                                       | Descripción                                                                                        |
| ----------- | --------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Parámetros  | Tipo                              |                                       | Descripción                                                                                        |
| ***         | ***                               | :---: | ***                                                                                                |
| file        | 4D.File           | →                                     | Archivo adjunto                                                                                    |
| zIPFile     | 4D.ZipFile        | →                                     | Archivo zip adjunto                                                                                |
| blob        | 4D.Blob           | →                                     | BLOB que contiene el adjunto                                                                       |
| path        | Text                              | →                                     | Ruta del archivo adjunto                                                                           |
| name        | Text                              | →                                     | Nombre + extensión utilizados por el cliente de correo para designar el archivo adjunto            |
| cid         | Text                              | →                                     | ID del archivo adjunto (sólo en mensajes HTML), o " " si no se requiere cid     |
| type        | Text                              | →                                     | Valor del encabezado content-type                                                                  |
| disposition | Text                              | →                                     | Valor del encabezado content-disposition: "inline" o "attachment". |
| Result      | 4D.MailAttachment | ←                                     | Objeto adjunto                                                                                     |

<!-- END REF-->

#### Descripción

El comando `MAIL New attachment` <!-- REF #_command_.MAIL New attachment.Summary -->le permite crear un objeto adjunto que puede agregar a un [objeto de Email](../API/EmailObjectClass.md#email-object)<!-- END REF -->.

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

var $email;$server;$transporter : Object

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
var $blob : blob
WP EXPORT VARIABLE(WPArea;$blob;wk docx)

var $email;$server;$transporter : Object

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
