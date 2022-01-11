---
id: EmailObjectClass
title: Email
---

Creating, sending or receiving emails in 4D is done by handling an `Email` object.

`Email` objects are created when receiving mails through a *transporter* class function:

- IMAP - [`.getMail()`](IMAPTransporterClass.md#getmail) and [`.getMails()`](IMAPTransporterClass.md#getmails) functions to get emails from an IMAP server
- POP3 - [`.getMail()`](POP3TransporterClass.md#getmail) function to get an email from a POP3 server.

> You can also create a new, blank `Email` object by calling the [`New object`](https://doc.4d.com/4dv18/help/command/en/page1471.html) 4D command, and then fill it with [Email object properties](#email-object).

You send `Email` objects using the SMTP [`.send()`](SMTPTransporterClass.md#send) function.

[`MAIL Convert from MIME`](#mail-convert-from-mime) and [`MAIL Convert to MIME`](#mail-convert-to-mime) commands can be used to convert `Email` objects to and from MIME contents.


### Objeto Email

Email objects provide the following properties:

> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the Email object.

|                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #EmailObjectClass.attachments.Syntax -->](#attachments)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.attachments.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bcc.Syntax -->](#bcc)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bcc.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bodyStructure.Syntax -->](#bodystructure)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bodyStructure.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bodyValues.Syntax -->](#bodyvalues)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bodyValues.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.cc.Syntax -->](#cc)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.cc.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.comments.Syntax -->](#comments)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.comments.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.from.Syntax -->](#from)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.from.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.headers.Syntax -->](#headers)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.headers.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.htmlBody.Syntax -->](#htmlbody)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.htmlBody.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.id.Syntax -->](#id)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.id.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.inReplyTo.Syntax -->](#inreplyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.inReplyTo.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.keywords.Syntax -->](#keywords)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.keywords.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.messageId.Syntax -->](#messageid)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.messageId.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.receivedAt.Syntax -->](#receivedat)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.receivedAt.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.references.Syntax -->](#references)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.references.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.replyTo.Syntax -->](#replyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.replyTo.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.sendAt.Syntax -->](#sendat)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.sendAt.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.sender.Syntax -->](#sender)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.sender.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.size.Syntax -->](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.size.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.subject.Syntax -->](#subject)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.subject.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.textBody.Syntax -->](#textbody)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.textBody.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.to.Syntax -->](#to)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.to.Summary -->|


### Direcciones de correo electrónico

All properties that contain email addresses ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) accept a value of text, object, or collection type.

#### Texto

- single email: "somebody@domain.com"
- single display name+email: "Somebody <somebody@domain.com>"
- several emails: "Somebody <somebody@domain.com>,me@home.org"

#### Objeto

An object with two properties:

| Propiedad | Tipo  | Descripción                |
| --------- | ----- | -------------------------- |
| name      | Texto | Display name (can be null) |
| email     | Texto | Email address              |

#### Collection

A collection of address objects.

### Gestión del cuerpo del correo electrónico

The [`textBody`](#textbody) and [`htmlBody`](#htmlbody) properties are only used with the [SMTP.send()](SMTPTransporterClass.md#send) function to allow sending simple mails. When both property are filled, the MIME content-type multipart/alternative is used. The email client should then recognize the multipart/alternative part and display the text part or html part as necessary.

[`bodyStructure`](#bodystructure) and [`bodyValues`](#bodyvalues) are used for [SMTP](SMTPTransporterClass.md) when the [Email object](email-object) is built from a MIME document, e.g. when generated by the `MAIL Convert from MIME` command. In this case, both `bodyStructure` and `bodyValues` properties must be passed together, and it is not recommended to use `textBody` and `htmlBody`.

#### Example of bodyStructure and bodyValues objects

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

<!-- REF #EmailObjectClass.attachments.Syntax -->
**.attachments** : Collection<!-- END REF -->


#### Descripción



La propiedad `.attachments` contiene una <!-- REF #EmailObjectClass.attachments.Summary -->colección de objeto(s)`4D.MailAttachment`<!-- END REF -->.

Attachment objects are defined through the [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment) command. Attachment objects have specific [properties and functions](MailAttachmentClass.md).




## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->
**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection<!-- END REF -->


#### Descripción

La propiedad `.bcc` contiene la <!-- REF #EmailObjectClass.bcc.Summary -->copia carbón invisible (BCC) de las [dirección(es) ](#email-addresses)de los destinatarios del correo electrónico<!-- END REF -->.




## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->
**.bodyStructure** : Object<!-- END REF -->


#### Descripción

La propiedad `.bodyStructure` contiene el objeto <!-- REF #EmailObjectClass.bodyStructure.Summary -->*EmailBodyPart*, es decir, la estructura MIME completa del cuerpo del mensaje (opcional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyStructure` object contains the following properties:

| Propiedad   | Tipo                  | Valor                                                                                                                                                   |
| ----------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | Texto                 | Identifies the part uniquely within the email                                                                                                           |
| type        | Texto                 | (mandatory) Value of the Content-Type header field of the part                                                                                          |
| charset     | Texto                 | Value of the charset parameter of the Content-Type header field                                                                                         |
| encoding    | Texto                 | If `isEncodingProblem=true`, the Content-Transfer-Encoding value is added (by default undefined)                                                        |
| disposition | Texto                 | Value of the Content-Disposition header field of the part                                                                                               |
| lenguaje    | Colección de textos   | List of language tags, as defined in [RFC3282](https://tools.ietf.org/html/rfc3282), in the Content-Language header field of the part, if present.      |
| location    | Texto                 | URI, as defined in [RFC2557](https://tools.ietf.org/html/rfc2557), in the Content-Location header field of the part, if present.                        |
| subParts    | Collection of objects | Body parts of each child (collection of *EmailBodyPart* objects)                                                                                        |
| headers     | Collection of objects | List of all header fields in the part, in the order they appear in the message (collection of *EmailHeader* objects, see [headers](#headers-) property) |




## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->
**.bodyValues** : Object<!-- END REF -->


#### Descripción

La propiedad `.bodyValues` contiene el objeto <!-- REF #EmailObjectClass.bodyValues.Summary -->*EmailBodyValue*, que contiene un objeto para cada \<partID\> de `bodyStructure` (opcional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyValues` object contains the following properties:

| Propiedad                  | Tipo     | Valor                                                                                                                                        |
| -------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | texto    | Value of the body part                                                                                                                       |
| *partID*.isEncodingProblem | booleano | True if malformed sections are found while decoding the charset, or unknown charset, or unknown content transfer-encoding. Falso por defecto |




## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->
**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection<!-- END REF -->


#### Descripción

La propiedad `.cc` contiene la <!-- REF #EmailObjectClass.cc.Summary -->Carbon Copy (CC) adicional del destinatario del correo electrónico [addresse(s)](#email-addresses) del correo electrónico<!-- END REF -->.






## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->
**.comments** : Text<!-- END REF -->


#### Descripción

La propiedad `.comments` contiene un <!-- REF #EmailObjectClass.comments.Summary -->encabezado de comentarios adicionales<!-- END REF -->.

Comments only appear within the header section of the message (keeping the message's body untouched).

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .from

<!-- REF #EmailObjectClass.from.Syntax -->
**.from** : Text<br>**.from** : Object<br>**.from** : Collection<!-- END REF -->


#### Descripción

La propiedad `.from` contiene las <!-- REF #EmailObjectClass.from.Summary -->[Dirección(es)](#email-addresses) de origen del correo electrónico<!-- END REF -->.


Each email you send out has both the [sender](#sender) and **from** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->
**.headers** : Collection<!-- END REF -->


#### Descripción

La propiedad `.headers` contiene una <!-- REF #EmailObjectClass.headers.Summary -->colección de objetos `EmailHeader`, en el orden en que aparecen en el mensaje<!-- END REF -->. This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Every object of the headers collection can contain the following properties:

| Propiedad | Tipo  | Valor                                                                                                                                                                |
| --------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].name   | texto | (mandatory) Header field name as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322). If null or undefined, the header field is not added to the MIME header. |
| [].value  | texto | Header field values as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                    |







## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->
**.htmlBody** : Text<!-- END REF -->


#### Descripción

La propiedad `.htmlBody` contiene la <!-- REF #EmailObjectClass.htmlBody.Summary -->representación HTML del mensaje de correo electrónico (el conjunto de caracteres por defecto es UTF-8) (opcional, sólo SMTP)<!-- END REF -->. See [Handling body part](#handling-body-part) section.







## .id

<!-- REF #EmailObjectClass.id.Syntax -->
**.id** : Text<!-- END REF -->


#### Descripción

[IMAP transporter](IMAPTransporterClass.md) only.

La propiedad `.id` contiene el <!-- REF #EmailObjectClass.id.Summary -->id único del servidor IMAP<!-- END REF -->.






## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->
**.inReplyTo** : Text<!-- END REF -->


#### Descripción

La propiedad `.inReplyTo` contiene el (los) <!-- REF #EmailObjectClass.inReplyTo.Summary -->identificador(es) del mensaje(s) original(es) al que el mensaje actual es una respuesta<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).






## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->
**.keywords** : Object<!-- END REF -->


#### Descripción

La propiedad `.keywords` contiene un <!-- REF #EmailObjectClass.keywords.Summary -->conjunto de palabras clave como objeto, donde cada nombre de propiedad es una palabra clave y cada valor es verdadero<!-- END REF -->.

This property is the "keywords" header (see [RFC#4021](https://tools.ietf.org/html/rfc4021)).

| Propiedad       | Tipo     | Valor                               |
| --------------- | -------- | ----------------------------------- |
| . \<keyword\> | booleano | Keyword to set (value must be true) |

Palabras clave reservadas:
* $draft - Indica que un mensaje es un borrador
* $seen - Indica que se ha leído un mensaje
* $flagged - Indica que un mensaje necesita atención especial (por ejemplo, urgente)
* $answered - Indica que se ha respondido un mensaje
* $deleted - Indica un mensaje a eliminar

#### Ejemplo

```
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```




## .messageId

<!-- REF #EmailObjectClass.messageId.Syntax -->
**.messageId** : Text<!-- END REF -->


#### Descripción

La propiedad `.messageId` contiene un <!-- REF #EmailObjectClass.messageId.Summary -->encabezado de identificador de mensaje ("message-id")<!-- END REF -->.

This header is usually "lettersOrNumbers@domainname", e.g. "abcdef.123456@4d.com". This unique ID is used in particular on forums or public mailing lists. In general, mail servers automatically add this header to the messages they send.



## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->
**.receivedAt** : Text<!-- END REF -->


#### Descripción

[IMAP transporter](IMAPTransporterClass.md) only.

La propiedad `.receivedAt` contiene la <!-- REF #EmailObjectClass.receivedAt.Summary -->fecha de llegada del correo electrónico al servidor IMAP en formato ISO 8601 UTC (por ejemplo: 2020-09-13T16:11:53Z)<!-- END REF -->.






## .references

<!-- REF #EmailObjectClass.references.Syntax -->
**.references** : Collection<!-- END REF -->


#### Descripción

La propiedad `.references` contiene la <!-- REF #EmailObjectClass.references.Summary -->Colección de todos los identificadores de mensajes de la cadena de respuestas anterior<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->
**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection<!-- END REF -->


#### Descripción

La propiedad `.replyTo` contiene la <!-- REF #EmailObjectClass.replyTo.Summary -->[dirección(es) ](#email-addresses) para las respuestas<!-- END REF -->.





## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->
**.sendAt** : Text<!-- END REF -->


#### Descripción

La propiedad `.sendAt` contiene el <!-- REF #EmailObjectClass.sendAt.Summary -->sello de tiempo del correo en formato ISO 8601 UTC<!-- END REF -->.




## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->
**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection<!-- END REF -->


#### Descripción

La propiedad `.sender` contiene las <!-- REF #EmailObjectClass.sender.Summary -->[addresse(s) source(s)](#email-addresses) del correo electrónico<!-- END REF -->.


Each email you send out has both the **sender** and **[from](#from)** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .size

<!-- REF #EmailObjectClass.size.Syntax -->
**.size** : Integer<!-- END REF -->


#### Descripción

[IMAP transporter](IMAPTransporterClass.md) only.

La propiedad `.size` contiene el <!-- REF #EmailObjectClass.size.Summary -->tamaño (expresado en bytes) del objeto Email devuelto por el servidor IMAP<!-- END REF -->.




## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->
**.subject** : Text<!-- END REF -->


#### Descripción

La propiedad `.subject` contiene la <!-- REF #EmailObjectClass.subject.Summary -->descripción del tema<!-- END REF -->.





## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->
**.textBody** : Text<!-- END REF -->


#### Descripción

La propiedad `.textBody` contiene la <!-- REF #EmailObjectClass.textBody.Summary -->Representación en texto plano del mensaje de correo electrónico (el conjunto de caracteres por defecto es UTF-8) (opcional, sólo SMTP)<!-- END REF -->. See [Handling body part](#handling-body-part) section.



## .to

<!-- REF #EmailObjectClass.to.Syntax -->
**.to** : Text<br>**.to** : Object<br>**.to** : Collection<!-- END REF -->


#### Descripción

La propiedad `.to` contiene el <!-- REF #EmailObjectClass.to.Summary -->destinatario principal [dirección(es)](#email-addresses) del correo electrónico<!-- END REF -->.


## MAIL Convert from MIME

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18     | Añadidos       |
</details>

<!-- REF #_command_.MAIL_Convert_from_MIME.Syntax -->
**MAIL Convert from MIME**( *mime* : Blob ) : Object<br>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_from_MIME.Params -->
| Parámetros | Tipo       |    | Descripción   |
| ---------- | ---------- |:--:| ------------- |
| mime       | Blob, Text | -> | Email en MIME |
| Resultado  | Objeto     | <- | Objeto Email  |
<!-- END REF -->

#### Descripción

El comando `MAIL Convert from MIME` <!-- REF #_command_.MAIL_Convert_from_MIME.Summary -->convierte un documento MIME en un objeto de correo electrónico válido<!-- END REF -->.
> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the returned email object.

Pase en *mime* un documento MIME válido para convertir. Puede ser suministrado por cualquier servidor o aplicación de correo. Puede pasar un BLOB o un texto en el parámetro *mime*. Si el MIME proviene de un archivo, se recomienda utilizar un parámetro BLOB para evitar problemas relacionados con las conversiones del conjunto de caracteres y los saltos de línea.

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

// Mime export of the 4D Write Pro document
WP EXPORT VARIABLE(WParea;$mime;wk mime html)

// convert 4D Write Pro Mime variable in mail object
$email:=MAIL Convert from MIME($mime)

// Fill your mail object headers
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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
| v17 R5  | Modificado     |
</details>

<!-- REF #_command_.MAIL_Convert_to_MIME.Syntax -->
**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_to_MIME.Params -->
| Parámetros | Tipo   |    | Descripción                                    |
| ---------- | ------ |:--:| ---------------------------------------------- |
| mail       | Objeto | -> | Objeto Email                                   |
| options    | Objeto | -> | Opciones de codificación y de charset del mail |
| Resultado  | Texto  | <- | Objeto email convertido en MIME                |
<!-- END REF -->

#### Descripción

El comando `MAIL Convert to MIME` <!-- REF #_command_.MAIL_Convert_to_MIME.Summary -->convierte un objeto de correo electrónico en texto MIME<!-- END REF -->. Este comando es llamado internamente por [SMTP_transporter.send( )](API/SMTPTransporterClass.md#send) para formatear el objeto de correo electrónico antes de enviarlo. Se puede utilizar para analizar el formato MIME del objeto.

En *mail*, pase el contenido y los detalles de la estructura del correo electrónico a convertir. This includes information such as the email addresses (sender and recipient(s)), the message itself, and the type of display for the message.
> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the email object.

In *options*, you can set a specific charset and encoding configuration for the mail. The following properties are available:

| Propiedad     | Tipo  | Descripción                                                                                                                                                                                                                |
| ------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Texto | Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s). Valores posibles:<p><p><table><tr><th>Constante</th><th>Valor</th><th>Comentario</th></tr><tr><td>mail mode ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul></td></tr><tr><td>mail mode ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 & Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 & 8-bit</li></ul></td></tr><tr><td>mail mode UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)</tr><tr><td>mail mode UTF8 in base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & base64</td></tr></table> |
| bodyCharset   | Texto | Charset and encoding used for the html and text body contents of the email. Possible values: Same as for headerCharset (see above)                                                                                         |

If the *options* parameter is omitted, the mail mode UTF8 configuration is used for header and body parts.


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


<style> h2 { background: #d9ebff;}</style>
