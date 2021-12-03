---
id: EmailObjectClass
title: Email
---

La creación, el envío o la recepción de correos electrónicos en 4D se realiza manejando un objeto `Email`.

Objetos `Email` se crean cuando se reciben correos a través de una función de clase *transporter*:

- IMAP - funciones [`.getMail()`](IMAPTransporterClass.md#getmail) y [`.getMails()`](IMAPTransporterClass.md#getmails) para obtener los correos electrónicos de un servidor IMAP
- POP3 - función [`.getMail()`](POP3TransporterClass.md#getmail) para obtener un correo electrónico de un servidor POP3.

> También puede crear un nuevo objeto `Email` en blanco llamando al comando 4D [`New object`](https://doc.4d.com/4dv18/help/command/en/page1471.html), y luego llenarlo con [propiedades del objeto de correo electrónico](#email-object).

Los objetos `Email` se envían utilizando la función SMTP [`.send()`](SMTPTransporterClass.md#send).

Los comandos [`MAIL Convert from MIME`](#mail-convert-from-mime) y [`MAIL Convert to MIME`](#mail-convert-to-mime) pueden utilizarse para convertir objetos `Email` a y desde contenidos MIME.


### Objeto Email

Los objetos Email ofrecen las siguientes propiedades:

> 4D sigue la especificación [JMAP](https://jmap.io/spec-mail.html) para formatear el objeto Email.

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

Todas las propiedades que contienen direcciones de correo electrónico ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) aceptan un valor de tipo texto, objeto o colección.

#### Texto

- correo electrónico único: "somebody@domain.com"
- un nombre+email: "Somebody <somebody@domain.com>"
- combinación de varios emails: "Somebody <somebody@domain.com>,me@home.org"

#### Objeto

Un objeto con dos propiedades:

| Propiedad | Tipo  | Descripción                       |
| --------- | ----- | --------------------------------- |
| name      | Texto | Nombre a mostrar (puede ser null) |
| email     | Texto | Correo electrónico                |

#### Collection

Una colección de objetos dirección.

### Gestión del cuerpo del correo electrónico

Las propiedades [`textBody`](#textbody) y [`htmlBodye>`](#htmlbody) sólo se utilizan con la función [SMTP.send()](SMTPTransporterClass.md#send) para permitir el envío de correos sencillos. Cuando se llenan ambas propiedades, se utiliza el tipo MIME content-type multipart/alternative. El cliente de correo electrónico debería entonces reconocer la parte multipart/alternative y mostrar la parte texto o html según sea necesario.

[`bodyStructure`](#bodystructure) y [`bodyValues`](#bodyvalues) se utilizan para [SMTP](SMTPTransporterClass.md) cuando el [objeto Email](email-object) se construye a partir de un documento MIME, por ejemplo, cuando se genera mediante el comando `MAIL Convert from MIME`. En este caso, las propiedades `bodyStructure` y `bodyValues` deben pasarse juntas, y no se recomienda utilizar `textBody` y `htmlBody`.

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

<!-- REF #EmailObjectClass.attachments.Syntax -->
**.attachments** : Collection<!-- END REF -->


#### Descripción



La propiedad `.attachments` contiene una <!-- REF #EmailObjectClass.attachments.Summary -->colección de objeto(s)`4D.MailAttachment`<!-- END REF -->.

Los objetos Attachment (adjuntos) se definen mediante el comando [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment). Los objetos adjuntos tienen [propiedades y funciones](MailAttachmentClass.md) específicas.




## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->
**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection<!-- END REF -->


#### Descripción

La propiedad `.bcc` contiene la <!-- REF #EmailObjectClass.bcc.Summary -->copia carbón invisible (BCC) de las [dirección(es) ](#email-addresses)de los destinatarios del correo electrónico<!-- END REF -->.




## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->
**.bodyStructure** : Object<!-- END REF -->


#### Descripción

La propiedad `.bodyStructure` contiene el objeto <!-- REF #EmailObjectClass.bodyStructure.Summary -->*EmailBodyPart*, es decir, la estructura MIME completa del cuerpo del mensaje (opcional)<!-- END REF -->. Ver la sección [Gestión del cuerpo](#handling-body-part).

El objeto `.bodyStructure` contiene las siguientes propiedades:

| Propiedad   | Tipo                  | Valor                                                                                                                                                                           |
| ----------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | Texto                 | Identifica la parte de manera única dentro del correo electrónico                                                                                                               |
| type        | Texto                 | (obligatorio) Valor del campo del encabezado Content-Type de la parte                                                                                                           |
| charset     | Texto                 | Valor del parámetro charset del campo del encabezado Content-Type                                                                                                               |
| encoding    | Texto                 | Si `isEncodingProblem=true`, se añade el valor Content-Transfer-Encoding (por defecto indefinido)                                                                               |
| disposition | Texto                 | Valor del campo del encabezado Content-Disposition de la parte                                                                                                                  |
| lenguaje    | Colección de textos   | Lista de etiquetas de lenguaje, como se define en la [RFC3282](https://tools.ietf.org/html/rfc3282), en el campo del encabezado Content-Language de la parte, si está presente. |
| location    | Texto                 | URI, como se define en la [RFC2557](https://tools.ietf.org/html/rfc2557), en el campo del encabezado Content-Location de la parte, si está presente.                            |
| subParts    | Collection of objects | Partes del cuerpo de cada hijo (colección de objetos *EmailBodyPart*)                                                                                                           |
| headers     | Collection of objects | Lista de todos los campos del encabezado de la parte, en el orden en que aparecen en el mensaje (colección de objetos *EmailHeader*, ver la propiedad [headers](#headers-))     |




## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->
**.bodyValues** : Object<!-- END REF -->


#### Descripción

La propiedad `.bodyValues` contiene el objeto <!-- REF #EmailObjectClass.bodyValues.Summary -->*EmailBodyValue*, que contiene un objeto para cada \<partID\> de `bodyStructure` (opcional)<!-- END REF -->. Ver la sección [Gestión del cuerpo](#handling-body-part).

El objeto `.bodyValues` contiene las siguientes propiedades:

| Propiedad                  | Tipo     | Valor                                                                                                                                                                                                         |
| -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | texto    | Valor de la parte del cuerpo                                                                                                                                                                                  |
| *partID*.isEncodingProblem | booleano | True si se encuentran secciones malformadas al decodificar el conjunto de caracteres, o el conjunto de caracteres desconocido, o la codificación de transferencia de contenido desconocida. Falso por defecto |




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

Los comentarios sólo aparecen en la sección del encabezado del mensaje (manteniendo el cuerpo del mensaje intacto).

Para conocer los requisitos específicos de formato, consulte la [RFC#5322](https://tools.ietf.org/html/rfc5322).




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

The `.headers` property contains a <!-- REF #EmailObjectClass.headers.Summary -->collection of `EmailHeader` objects, in the order they appear in the message<!-- END REF -->. This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.

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

The `.htmlBody` property contains the <!-- REF #EmailObjectClass.htmlBody.Summary -->HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. See [Handling body part](#handling-body-part) section.







## .id

<!-- REF #EmailObjectClass.id.Syntax -->
**.id** : Text<!-- END REF -->


#### Descripción

[IMAP transporter](IMAPTransporterClass.md) únicamente.

The `.id` property contains the <!-- REF #EmailObjectClass.id.Summary -->unique ID from the IMAP server<!-- END REF -->.






## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->
**.inReplyTo** : Text<!-- END REF -->


#### Descripción

The `.inReplyTo` property contains the <!-- REF #EmailObjectClass.inReplyTo.Summary -->message identifier(s) of the original message(s) to which the current message is a reply<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).






## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->
**.keywords** : Object<!-- END REF -->


#### Descripción

The `.keywords` property contains a <!-- REF #EmailObjectClass.keywords.Summary -->set of keywords as an object, where each property name is a keyword and each value is true<!-- END REF -->.

This property is the "keywords" header (see [RFC#4021](https://tools.ietf.org/html/rfc4021)).

| Propiedad       | Tipo     | Valor                                            |
| --------------- | -------- | ------------------------------------------------ |
| . \<keyword\> | booleano | Palabra clave a definir (el valor debe ser true) |

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

The `.messageId` property contains a <!-- REF #EmailObjectClass.messageId.Summary -->message identifier header ("message-id")<!-- END REF -->.

This header is usually "lettersOrNumbers@domainname", e.g. "abcdef.123456@4d.com". This unique ID is used in particular on forums or public mailing lists. In general, mail servers automatically add this header to the messages they send.



## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->
**.receivedAt** : Text<!-- END REF -->


#### Descripción

[IMAP transporter](IMAPTransporterClass.md) only.

The `.receivedAt` property contains the <!-- REF #EmailObjectClass.receivedAt.Summary -->timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)<!-- END REF -->.






## .references

<!-- REF #EmailObjectClass.references.Syntax -->
**.references** : Collection<!-- END REF -->


#### Descripción

The `.references` property contains the <!-- REF #EmailObjectClass.references.Summary -->Collection of all message-ids of messages in the preceding reply chain<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->
**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection<!-- END REF -->


#### Descripción

The `.replyTo` property contains the <!-- REF #EmailObjectClass.replyTo.Summary -->[addresse(s)](#email-addresses) for responses<!-- END REF -->.





## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->
**.sendAt** : Text<!-- END REF -->


#### Descripción

The `.sendAt` property contains the <!-- REF #EmailObjectClass.sendAt.Summary -->Email timestamp in ISO 8601 UTC format<!-- END REF -->.




## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->
**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection<!-- END REF -->


#### Descripción

The `.sender` property contains the <!-- REF #EmailObjectClass.sender.Summary -->email source [addresse(s)](#email-addresses) of the email<!-- END REF -->.


Each email you send out has both the **sender** and **[from](#from)** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .size

<!-- REF #EmailObjectClass.size.Syntax -->
**.size** : Integer<!-- END REF -->


#### Descripción

[IMAP transporter](IMAPTransporterClass.md) únicamente.

The `.size` property contains the <!-- REF #EmailObjectClass.size.Summary -->size (expressed in bytes) of the Email object returned by the IMAP server<!-- END REF -->.




## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->
**.subject** : Text<!-- END REF -->


#### Descripción

The `.subject` property contains the <!-- REF #EmailObjectClass.subject.Summary -->description of topic<!-- END REF -->.





## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->
**.textBody** : Text<!-- END REF -->


#### Descripción

The `.textBody` property contains the <!-- REF #EmailObjectClass.textBody.Summary -->Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. See [Handling body part](#handling-body-part) section.



## .to

<!-- REF #EmailObjectClass.to.Syntax -->
**.to** : Text<br>**.to** : Object<br>**.to** : Collection<!-- END REF -->


#### Descripción

The `.to` property contains the <!-- REF #EmailObjectClass.to.Summary -->primary recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.


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

The `MAIL Convert from MIME` command <!-- REF #_command_.MAIL_Convert_from_MIME.Summary -->converts a MIME document into a valid email object<!-- END REF -->.
> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the returned email object.

Pass in *mime* a valid MIME document to convert. It can be provided by any mail server or application. You can pass a BLOB or a text *mime* parameter. If the MIME comes from a file, it is recommended to use a BLOB parameter to avoid issues related to charset and line break conversions.

#### Objeto devuelto

Objeto Email.

#### Ejemplo 1

You want to load a mail template saved as MIME in a text document and send an email:

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

In this example, you send directly a 4D Write Pro document containing pictures:

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
| Parámetros | Tipo   |    | Descripción                       |
| ---------- | ------ |:--:| --------------------------------- |
| mail       | Objeto | -> | Objeto Email                      |
| options    | Objeto | -> | Charset and encoding mail options |
| Resultado  | Texto  | <- | Email object converted to MIME    |
<!-- END REF -->

#### Descripción

The `MAIL Convert to MIME` command <!-- REF #_command_.MAIL_Convert_to_MIME.Summary -->converts an email object into MIME text<!-- END REF -->. This command is called internally by [SMTP_transporter.send( )](API/SMTPTransporterClass.md#send) to format the email object before sending it. It can be used to analyze the MIME format of the object.

In *mail*, pass the content and the structure details of the email to convert. This includes information such as the email addresses (sender and recipient(s)), the message itself, and the type of display for the message.
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

// Creación de un correo
$mail.from:="tsales@massmarket.com"
$mail.subject:="Terrific Sale! This week only!"
$mail.textBody:="Text format email"
$mail.htmlBody:="<html><body>HTML format email</body></html>"
$mail.to:=New collection
$mail.to.push(New object ("email";"noreply@4d.com"))
$mail.to.push(New object ("email";"test@4d.com"))

// transforma el objeto mail en MIME
$mime:=MAIL Convert to MIME($mail)

// Contenidos de $mime:
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
