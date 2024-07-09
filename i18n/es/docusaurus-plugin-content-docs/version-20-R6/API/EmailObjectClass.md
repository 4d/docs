---
id: EmailObjectClass
title: Email
---

La creación, el envío o la recepción de correos electrónicos en 4D se realiza por intermedio de un objeto `Email`.

Los objetos `Email` se crean cuando se reciben correos a través de una función de clase *transporter*:

- IMAP - funciones [`.getMail()`](IMAPTransporterClass.md#getmail) y [`.getMails()`](IMAPTransporterClass.md#getmails) para obtener correos electrónicos de un servidor IMAP
- POP3 - función [`.getMail()`](POP3TransporterClass.md#getmail) para obtener un correo electrónico de un servidor POP3.

> También puede crear un nuevo objeto vacío `Email` y luego rellenarlo con las [propiedades del objeto Email](#email-object).

Los objetos `Email` se envían utilizando la función SMTP [`.send()`](SMTPTransporterClass.md#send).

Los comandos [`MAIL Convert from MIME`](#mail-convert-from-mime) y [`MAIL Convert to MIME`](#mail-convert-to-mime) se pueden utilizar para convertir los objetos `Email` a y desde contenidos MIME.

### Objeto Email

Los objetos Email ofrecen las siguientes propiedades:

> 4D sigue la [especificación JMAP](https://jmap.io/spec-mail.html) para formatear el objeto Email.

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #EmailObjectClass.attachments.Syntax -->](#attachments)<br/><!-- INCLUDE #EmailObjectClass.attachments.Summary -->       |
| [<!-- INCLUDE #EmailObjectClass.bcc.Syntax -->](#bcc)<br/><!-- INCLUDE #EmailObjectClass.bcc.Summary -->                               |
| [<!-- INCLUDE #EmailObjectClass.bodyStructure.Syntax -->](#bodystructure)<br/><!-- INCLUDE #EmailObjectClass.bodyStructure.Summary --> |
| [<!-- INCLUDE #EmailObjectClass.bodyValues.Syntax -->](#bodyvalues)<br/><!-- INCLUDE #EmailObjectClass.bodyValues.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.cc.Syntax -->](#cc)<br/><!-- INCLUDE #EmailObjectClass.cc.Summary -->                                  |
| [<!-- INCLUDE #EmailObjectClass.comments.Syntax -->](#comments)<br/><!-- INCLUDE #EmailObjectClass.comments.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.from.Syntax -->](#from)<br/><!-- INCLUDE #EmailObjectClass.from.Summary -->                            |
| [<!-- INCLUDE #EmailObjectClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #EmailObjectClass.headers.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.htmlBody.Syntax -->](#htmlbody)<br/><!-- INCLUDE #EmailObjectClass.htmlBody.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.id.Syntax -->](#id)<br/><!-- INCLUDE #EmailObjectClass.id.Summary -->                                  |
| [<!-- INCLUDE #EmailObjectClass.inReplyTo.Syntax -->](#inreplyto)<br/><!-- INCLUDE #EmailObjectClass.inReplyTo.Summary -->             |
| [<!-- INCLUDE #EmailObjectClass.keywords.Syntax -->](#keywords)<br/><!-- INCLUDE #EmailObjectClass.keywords.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.messageId.Syntax -->](#messageid)<br/><!-- INCLUDE #EmailObjectClass.messageId.Summary -->             |
| [<!-- INCLUDE #EmailObjectClass.receivedAt.Syntax -->](#receivedat)<br/><!-- INCLUDE #EmailObjectClass.receivedAt.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.references.Syntax -->](#references)<br/><!-- INCLUDE #EmailObjectClass.references.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.replyTo.Syntax -->](#replyto)<br/><!-- INCLUDE #EmailObjectClass.replyTo.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.sendAt.Syntax -->](#sendat)<br/><!-- INCLUDE #EmailObjectClass.sendAt.Summary -->                      |
| [<!-- INCLUDE #EmailObjectClass.sender.Syntax -->](#sender)<br/><!-- INCLUDE #EmailObjectClass.sender.Summary -->                      |
| [<!-- INCLUDE #EmailObjectClass.size.Syntax -->](#size)<br/><!-- INCLUDE #EmailObjectClass.size.Summary -->                            |
| [<!-- INCLUDE #EmailObjectClass.subject.Syntax -->](#subject)<br/><!-- INCLUDE #EmailObjectClass.subject.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.textBody.Syntax -->](#textbody)<br/><!-- INCLUDE #EmailObjectClass.textBody.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.to.Syntax -->](#to)<br/><!-- INCLUDE #EmailObjectClass.to.Summary -->                                  |

### Direcciones de correo electrónico

Todas las propiedades que contienen direcciones de correo electrónico ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) aceptan un valor de tipo texto, objeto o colección.

#### Text

- correo electrónico único: "somebody@domain.com"
- un solo nombre de visualización+correo electrónico: "Somebody somebody@domain.com"
- varios correos electrónicos: "Somebody somebody@domain.com,me@home.org"

#### Object

Un objeto con dos propiedades:

| Propiedad | Tipo | Descripción                                          |
| --------- | ---- | ---------------------------------------------------- |
| name      | Text | Nombre a mostrar (puede ser null) |
| email     | Text | Correo electrónico                                   |

#### Collection

Una colección de objetos dirección.

### Gestión del cuerpo del correo electrónico

Las propiedades [`textBody`](#textbody) y [`htmlBody`](#htmlbody) sólo se utilizan con la función [SMTP.send()](SMTPTransporterClass.md#send) para permitir el envío de correos simples. Cuando se llenan ambas propiedades, se utiliza el tipo MIME content-type multipart/alternative. El cliente de correo electrónico debería entonces reconocer la parte multipart/alternative y mostrar la parte texto o html según sea necesario.

[`bodyStructure`](#bodystructure) y [`bodyValues`](#bodyvalues) se utilizan para [SMTP](SMTPTransporterClass.md) cuando el [objeto Email](#email-object) se construye a partir de un documento MIME, por ejemplo, cuando se genera por el comando `MAIL Convert from MIME`. En este caso, las propiedades `bodyStructure` y `bodyValues` deben pasarse juntas, y no se recomienda utilizar `textBody` y `htmlBody`.

#### Ejemplo de objetos bodyStructure y bodyValues

```json
"bodyStructure": {
  "type": "multipart/mixed",
  "subParts": [
    {
      "partId": "p0001",
      "type": "text/plain"
    },
    {
      "partId": "p0002",
      "type": "text/html"
    }
  ]
},
"bodyValues": {
  "p0001": {
    "value": "I have the most brilliant plan. Let me tell you all about it."
  },
  "p0002": {
    "value": "<!DOCTYPE html><html><head><title></title><style type=\"text/css\">div{font-size:16px}</style></head><body><div>I have the most brilliant plan. Let me tell you all about it.</div></body></html>"
  }
}
```

## .attachments

<!-- REF #EmailObjectClass.attachments.Syntax -->**.attachments** : Collection<!-- END REF -->

#### Descripción

La propiedad `.attachments` contiene una <!-- REF #EmailObjectClass.attachments.Summary -->colección de objetos `4D.MailAttachment`<!-- END REF -->.

Los objetos adjuntos son definidos por el comando [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment). Los objetos adjuntos tienen [propiedades y funciones](MailAttachmentClass.md) específicas.

## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->**.bcc** : Text<br/>**.bcc** : Object<br/>**.bcc** : Collection<!-- END REF -->

#### Descripción

La propiedad `.bcc` contiene <!-- REF #EmailObjectClass.bcc.Summary -->las [direcciones](#email-addresses) de los destinatarios en Blind Carbon Copy (BCC) del email<!-- END REF -->.

## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->**.bodyStructure** : Object<!-- END REF -->

#### Descripción

La propiedad `.bodyStructure` contiene el <!-- REF #EmailObjectClass.bodyStructure.Summary -->objeto *EmailBodyPart*, es decir, la estructura MIME completa del cuerpo del mensaje (opcional)<!-- END REF -->. Ver la sección [Gestión del cuerpo](#gestión-del-cuerpo).

El objeto `.bodyStructure` contiene las siguientes propiedades:

| Propiedad   | Tipo                 | Valor                                                                                                                                                                                          |
| ----------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | Text                 | Identifica la parte de manera única dentro del correo electrónico                                                                                                                              |
| type        | Text                 | (obligatorio) Valor del campo del encabezado Content-Type de la parte                                                                                                       |
| charset     | Text                 | Valor del parámetro charset del campo del encabezado Content-Type                                                                                                                              |
| encoding    | Text                 | Si `isEncodingProblem=true`, se añade el valor de Content-Transfer-Encoding (por defecto indefinido)                                                                        |
| disposition | Text                 | Valor del campo del encabezado Content-Disposition de la parte                                                                                                                                 |
| lenguaje    | Colección de textos  | Lista de etiquetas de lenguaje, como se define en [RFC3282](https://tools.ietf.org/html/rfc3282), en el campo del encabezado Content-Language de la parte, si está presente.   |
| location    | Text                 | URI, tal y como se define en la [RFC2557](https://tools.ietf.org/html/rfc2557), en el campo de encabezado Content-Location de la parte, si está presente.                      |
| subParts    | Colección de objetos | Partes del cuerpo de cada hijo (colección de objetos *EmailBodyPart*)                                                                                                       |
| headers     | Colección de objetos | Lista de todos los campos del encabezado de la parte, en el orden en que aparecen en el mensaje (colección de objetos *EmailHeader*, ver la propiedad [headers](#headers-)) |

## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->**.bodyValues** : Object<!-- END REF -->

#### Descripción

La propiedad `.bodyValues` contiene el <!-- REF #EmailObjectClass.bodyValues.Summary -->objeto *EmailBodyValue*, que contiene un objeto por cada \\<partID\> de `bodyStructure` (opcional)<!-- END REF -->. Ver la sección [Gestión del cuerpo](#gestión-del-cuerpo).

El objeto `.bodyValues` contiene las siguientes propiedades:

| Propiedad                                  | Tipo    | Valor                                                                                                                                                                                                                         |
| ------------------------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text    | Valor de la parte del cuerpo                                                                                                                                                                                                  |
| *partID*.isEncodingProblem | boolean | True si se encuentran secciones malformadas al decodificar el conjunto de caracteres, o el conjunto de caracteres desconocido, o la codificación de transferencia de contenido desconocida. Falso por defecto |

## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->**.cc** : Text<br/>**.cc** : Object<br/>**.cc** : Collection<!-- END REF -->

#### Descripción

La propiedad `.cc` contiene <!-- REF #EmailObjectClass.cc.Summary -->la [dirección(es)](#email-addresses) email adicional de los destinatarios en Carbon Copy (CC) del email<!-- END REF -->.

## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->**.comments** : Text<!-- END REF -->

#### Descripción

La propiedad `.comments` contiene un <!-- REF #EmailObjectClass.comments.Summary -->encabezado de comentarios adicionales<!-- END REF -->.

Los comentarios sólo aparecen en la sección del encabezado del mensaje (manteniendo el cuerpo del mensaje intacto).

Para conocer los requisitos específicos de formato, consulte la [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .from

<!-- REF #EmailObjectClass.from.Syntax -->**.from** : Text<br/>**.from** : Object<br/>**.from** : Collection<!-- END REF -->

#### Descripción

La propiedad `.from` contiene <!-- REF #EmailObjectClass.from.Summary -->[la dirección(es) de origen](#email-addresses) del email<!-- END REF -->.

Cada email que envía tiene tanto la dirección del [sender](#sender) y de **from**:

- el dominio sender es el que obtiene el servidor de recepción del email al abrir la sesión,
- la dirección from es lo que verán los destinatarios.

Para mejorar la entregabilidad, se recomienda utilizar las mismas direcciones para from y sender.

## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->**.headers** : Collection<!-- END REF -->

#### Descripción

La propiedad `.headers` contiene una colección <!-- REF #EmailObjectClass.headers.Summary -->de objetos `EmailHeader`, en el orden en que aparecen en el mensaje<!-- END REF -->. Esta propiedad permite a los usuarios añadir encabezados extendidos (registrados) o definidos por el usuario (no registrados, que comienzan por "X").

> Si una propiedad del objeto `EmailHeader` define un encabezado como "from" o "cc" que ya está definido como una propiedad a nivel de correo, la propiedad `EmailHeader` se ignora.

Cada objeto de la colección de encabezados puede contener las siguientes propiedades:

| Propiedad                                                                    | Tipo | Valor                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].name  | text | (obligatorio) Nombre del campo de encabezado según se define en [RFC#5322](https://tools.ietf.org/html/rfc5322). Si es null o indefinido, el campo encabezado no se agrega al encabezado MIME. |
| [].value | text | Valores del campo de encabezado según se define en [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                                                                                |

## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->**.htmlBody** : Text<!-- END REF -->

#### Descripción

La propiedad `.htmlBody` contiene la <!-- REF #EmailObjectClass.htmlBody.Summary -->representación HTML del mensaje de correo electrónico (el conjunto de caracteres por defecto es UTF-8) (opcional, sólo SMTP)<!-- END REF -->. Ver la sección [Gestión del cuerpo](#gestión-del-cuerpo).

## .id

<!-- REF #EmailObjectClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Descripción

[IMAP transporter](IMAPTransporterClass.md) únicamente.

La propiedad `.id` contiene el <!-- REF #EmailObjectClass.id.Summary -->id único del servidor IMAP<!-- END REF -->.

## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->**.inReplyTo** : Text<!-- END REF -->

#### Descripción

La propiedad `.inReplyTo` contiene el (los) <!-- REF #EmailObjectClass.inReplyTo.Summary -->identificador(es) del mensaje(s) original(es) al que el mensaje actual es una respuesta<!-- END REF -->.

Para conocer los requisitos específicos de formato, consulte la [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->**.keywords** : Object<!-- END REF -->

#### Descripción

La propiedad `.keywords` contiene un <!-- REF #EmailObjectClass.keywords.Summary -->conjunto de palabras clave como objeto, donde cada nombre de propiedad es una palabra clave y cada valor es verdadero<!-- END REF -->.

Esta propiedad es el encabezado "keywords" (ver [RFC#4021](https://tools.ietf.org/html/rfc4021)).

| Propiedad                       | Tipo    | Valor                                                               |
| ------------------------------- | ------- | ------------------------------------------------------------------- |
| .\\<keyword\> | boolean | Palabra clave a definir (el valor debe ser true) |

Palabras clave reservadas:

- $draft - Indica que un mensaje es un borrador
- $seen - Indica que se ha leído un mensaje
- $flagged - Indica que un mensaje necesita atención especial (por ejemplo, urgente)
- $answered - Indica que se ha respondido un mensaje
- $deleted - Indica un mensaje a eliminar

#### Ejemplo

```
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```

## .messageId

<!-- REF #EmailObjectClass.messageId.Syntax -->**.messageId** : Text<!-- END REF -->

#### Descripción

La propiedad `.messageId` contiene un <!-- REF #EmailObjectClass.messageId.Summary -->encabezado de identificador de mensaje ("message-id")<!-- END REF -->.

Este encabezado suele ser "lettersOrNumbers@domainname", por ejemplo, "abcdef.123456@4d.com". Este identificador único se utiliza, en particular, en foros o listas de correo públicas. En general, los servidores de correo añaden automáticamente este encabezado a los mensajes que envían.

## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->**.receivedAt** : Text<!-- END REF -->

#### Descripción

[IMAP transporter](IMAPTransporterClass.md) únicamente.

La propiedad `.receivedAt` contiene la <!-- REF #EmailObjectClass.receivedAt.Summary -->fecha de llegada del correo electrónico al servidor IMAP en formato ISO 8601 UTC (por ejemplo: 2020-09-13T16:11:53Z)<!-- END REF -->.

## .references

<!-- REF #EmailObjectClass.references.Syntax -->**.references** : Collection<!-- END REF -->

#### Descripción

La propiedad `.references` contiene la <!-- REF #EmailObjectClass.references.Summary -->Colección de todos los identificadores de mensajes de la cadena de respuestas anterior<!-- END REF -->.

Para conocer los requisitos específicos de formato, consulte la [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->**.replyTo** : Text<br/>**.replyTo** : Object<br/>**.replyTo** : Collection<!-- END REF -->

#### Descripción

La propiedad `.replyTo` contiene la(s) <!-- REF #EmailObjectClass.replyTo.Summary -->[dirección(es)](#email-addresses) para las respuestas<!-- END REF -->.

## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->**.sendAt** : Text<!-- END REF -->

#### Descripción

La propiedad `.sendAt` contiene la <!-- REF #EmailObjectClass.sendAt.Summary -->marca de tiempo del correo en formato ISO 8601 UTC<!-- END REF -->.

## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->**.sender** : Text<br/>**.sender** : Object<br/>**.sender** : Collection<!-- END REF -->

#### Descripción

La propiedad `.sender` contiene <!-- REF #EmailObjectClass.sender.Summary -->la [dirección(es)](#email-addresses) fuente del email<!-- END REF -->.

Cada email que envía tiene tanto las direcciones del **sender** y del **[from](#from)**:

- el dominio sender es el que obtiene el servidor de recepción del email al abrir la sesión,
- la dirección from es lo que verán los destinatarios.

Para mejorar la entregabilidad, se recomienda utilizar las mismas direcciones para from y sender.

## .size

<!-- REF #EmailObjectClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### Descripción

[IMAP transporter](IMAPTransporterClass.md) únicamente.

La propiedad `.size` contiene el <!-- REF #EmailObjectClass.size.Summary -->tamaño (expresado en bytes) del objeto Email devuelto por el servidor IMAP<!-- END REF -->.

## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->**.subject** : Text<!-- END REF -->

#### Descripción

La propiedad `.subject` contiene la <!-- REF #EmailObjectClass.subject.Summary -->descripción del tema<!-- END REF -->.

## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->**.textBody** : Text<!-- END REF -->

#### Descripción

La propiedad `.textBody` contiene la <!-- REF #EmailObjectClass.textBody.Summary -->Representación en texto plano del mensaje de correo electrónico (el conjunto de caracteres por defecto es UTF-8) (opcional, sólo SMTP)<!-- END REF -->. Ver la sección [Gestión del cuerpo](#gestión-del-cuerpo).

## .to

<!-- REF #EmailObjectClass.to.Syntax -->**.to** : Text<br/>**.to** : Object<br/>**.to** : Collection<!-- END REF -->

#### Descripción

La propiedad `.to` contiene <!-- REF #EmailObjectClass.to.Summary -->las [direcciones de correo electrónico](#email-addresses) de los destinatarios principales del correo electrónico<!-- END REF -->.

## MAIL Convert from MIME

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18          | Añadidos       |

</details>

<!-- REF #_command_.MAIL Convert from MIME.Syntax -->**MAIL Convert from MIME**( *mime* : Blob ) : Object<br/>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL Convert from MIME.Params -->

| Parámetros | Tipo       |     | Descripción   |
| ---------- | ---------- | :-: | ------------- |
| mime       | Blob, Text |  -> | Email en MIME |
| Result     | Object     |  <- | Objeto Email  |

<!-- END REF -->

#### Descripción

El comando `MAIL Convert from MIME` <!-- REF #_command_.MAIL Convert from MIME.Summary -->convierte un documento MIME en un objeto de correo electrónico válido<!-- END REF -->.

> 4D sigue la [especificación JMAP](https://jmap.io/spec-mail.html) para dar formato al objeto de correo electrónico devuelto.

Pase en *mime* un documento MIME válido a convertir. Puede ser suministrado por cualquier servidor o aplicación de correo. Puede pasar un BLOB o un texto en el parámetro *mime*. Si el MIME proviene de un archivo, se recomienda utilizar un parámetro BLOB para evitar problemas relacionados con las conversiones del conjunto de caracteres y los saltos de línea.

#### Objeto devuelto

Objeto Email.

#### Ejemplo 1

Quiere cargar una plantilla de correo guardada como MIME en un documento de texto y enviar un correo electrónico:

```4d
var $mime: Blob
var $mail;$server;$transporter;$status: Object

$mime:=File("/PACKAGE/Mails/templateMail.txt").getContent())

$mail:=MAIL Convert from MIME($mime)
$mail.to:="smith@mail.com"
$mail.subject:="Hello world"

$server:=New object
$server.host:="smtp.gmail.com"
$server.port:=465
$server.user:="test@gmail.com"
$server.password:="XXXX"

$transporter:=SMTP New transporter($server)
$status:=$transporter.send($mail)
```

#### Ejemplo 2

En este ejemplo, se envía directamente un documento de 4D Write Pro que contiene imágenes:

```4d
var $mime: Blob
var $email;$server;$transporter;$status: Object

// Exportación Mime del documento 4D Write Pro
WP EXPORT VARIABLE(WParea;$mime;wk mime html)

// convertir la variable Mime de 4D Write Pro en objeto email
$email:=MAIL Convert from MIME($mime)

// Llenar los encabezados del objeto email
$email.subject:="4D Write Pro HTML body"
$email.from:="YourEmail@gmail.com"
$email.to:="RecipientEmail@mail.com"

$server:=New object
$server.host:="smtp.gmail.com"
$server.port:=465
$server.user:="YourEmail@gmail.com"
$server.password:="XXXX"

$transporter:=SMTP New transporter($server)
$status:=$transporter.send($email)
```

## MAIL Convert to MIME

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |
| 17 R5       | Modificado     |

</details>

<!-- REF #_command_.MAIL Convert to MIME.Syntax -->**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->

<!-- REF #_command_.MAIL Convert to MIME.Params -->

| Parámetros | Tipo   |     | Descripción                                    |
| ---------- | ------ | :-: | ---------------------------------------------- |
| mail       | Object |  -> | Objeto Email                                   |
| options    | Object |  -> | Opciones de codificación y de charset del mail |
| Result     | Text   |  <- | Objeto email convertido en MIME                |

<!-- END REF -->

#### Descripción

El comando `MAIL Convert to MIME` <!-- REF #_command_.MAIL Convert to MIME.Summary -->convierte un objeto email en texto MIME<!-- END REF -->. Este comando es llamado internamente por [SMTP_transporter.send( )](API/SMTPTransporterClass.md#send) para formatear el objeto email antes de enviarlo. Se puede utilizar para analizar el formato MIME del objeto.

En *mail*, pase el contenido y los detalles de la estructura del correo electrónico a convertir. Esto incluye información como las direcciones de correo electrónico (remitente y destinatario(s)), el propio mensaje y el tipo de visualización del mensaje.

> 4D sigue la [especificación JMAP](https://jmap.io/spec-mail.html) para formatear el objeto email.

En *options*, puede configurar la codificación y el charset del mail. Las siguientes propiedades están disponibles:

| Propiedad     | Tipo | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset y codificación utilizados para las siguientes partes del correo electrónico: asunto, nombres de archivos adjuntos y atributo(s) del nombre del correo electrónico. Valores posibles:<table><tr><th>Constante</th><th>Valor</th><th>Comentario</th></tr><tr><td>Modo correo ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII si es posible, japonés (ISO-2022-JP) & Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII si es posible, japonés (ISO-2022-JP) y 7 bits si es posible, de lo contrario UTF-8 y Quoted-printable</li></ul></td></tr><tr><td>Modo correo ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 y Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 y 8 bits</li></ul></td></tr><tr><td>Modo correo UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII si es posible, en caso contrario UTF-8 & Quoted-printable (**valor por defecto**)</td></tr><tr><td>Modo correo UTF8 en base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII si es posible, de lo contrario UTF-8 & base64</td></tr></table> |
| bodyCharset   | Text | Charset y codificación utilizados para el contenido html y el texto del cuerpo del correo electrónico. Valores posibles: los mismos que para headerCharset (ver arriba)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

Si se omite el parámetro *options*, se utiliza la configuración del modo de correo UTF8 para las partes encabezado y cuerpo.

#### Ejemplo

```4d
var $mail: Object
var $mime: Text
$mail:=New object

// Creation of a mail
$mail.from:="tsales@massmarket.com"
$mail.subject:="Terrific Sale! This week only!"
$mail.textBody:="Text format email"
$mail.htmlBody:="<html><body>HTML format email</body></html>"
$mail.to:=New collection
$mail.to.push(New object ("email";"noreply@4d.com"))
$mail.to.push(New object ("email";"test@4d.com"))

// transform the mail object in MIME
$mime:=MAIL Convert to MIME($mail)

// Contents of $mime:
// MIME-Version: 1.0
// Date: Thu, 11 Oct 2018 15:42:25 GMT
// Message-ID: <7CA5D25B2B5E0047A36F2E8CB30362E2>
// Sender: tsales@massmarket.com
// From: tsales@massmarket.com
// To: noreply@4d.com
// To: test@4d.com
// Content-Type: multipart/alternative; boundary="E0AE5773D5E95245BBBD80DD0687E218"
// Subject: Terrific Sale! This week only!
//
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: text/plain; charset="UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// Text format email
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: text/html; charset="UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// <html><body>HTML format email</body></html>
// --E0AE5773D5E95245BBBD80DD0687E218--
```
