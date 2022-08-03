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


### Email Object

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


### Email Addresses

All properties that contain email addresses ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) accept a value of text, object, or collection type.

#### Texto

- single email: "somebody@domain.com"
- single display name+email: "Somebody <somebody@domain.com>"
- several emails: "Somebody <somebody@domain.com>,me@home.org"

#### Objeto

An object with two properties:

| Propriedade | Type  | Descrição                  |
| ----------- | ----- | -------------------------- |
| name        | Texto | Display name (can be null) |
| email       | Texto | Email address              |

#### Coleção

A collection of address objects.

### Handling body part

The [`textBody`](#textbody) and [`htmlBody`](#htmlbody) properties are only used with the [SMTP.send()](SMTPTransporterClass.md#send) function to allow sending simple mails. When both property are filled, the MIME content-type multipart/alternative is used. The email client should then recognize the multipart/alternative part and display the text part or html part as necessary.

[`bodyStructure`](#bodystructure) and [`bodyValues`](#bodyvalues) are used for [SMTP](SMTPTransporterClass.md) when the [Email object](#email-object) is built from a MIME document, e.g. when generated by the `MAIL Convert from MIME` command. In this case, both `bodyStructure` and `bodyValues` properties must be passed together, and it is not recommended to use `textBody` and `htmlBody`.

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


#### Descrição



A propriedade `.attachments` contém um <!-- REF #EmailObjectClass.attachments.Summary -->coleção de objetos `4D.MailAttachment`<!-- END REF -->.

Attachment objects are defined through the [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment) command. Attachment objects have specific [properties and functions](MailAttachmentClass.md).




## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->
**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection<!-- END REF -->


#### Descrição

A propriedade `.bcc` contiém a <!-- REF #EmailObjectClass.bcc.Summary -->cópia da mensagem invisível (BCC) dos [endereços ](#email-addresses)dos destinatários do correio eletrônico<!-- END REF -->.




## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->
**.bodyStructure** : Object<!-- END REF -->


#### Descrição

A propriedade `.bodyStructure` contém  o objeto<!-- REF #EmailObjectClass.bodyStructure. Summary-->*EmailBodyPart* , ou seja, a estrutura MIME completa do corpo da mensagem (opcional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyStructure` object contains the following properties:

| Propriedade | Type                  | Value                                                                                                                                                   |
| ----------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | Texto                 | Identifies the part uniquely within the email                                                                                                           |
| type        | Texto                 | (mandatory) Value of the Content-Type header field of the part                                                                                          |
| charset     | Texto                 | Value of the charset parameter of the Content-Type header field                                                                                         |
| encoding    | Texto                 | If `isEncodingProblem=true`, the Content-Transfer-Encoding value is added (by default undefined)                                                        |
| disposition | Texto                 | Value of the Content-Disposition header field of the part                                                                                               |
| language    | Collection of texts   | List of language tags, as defined in [RFC3282](https://tools.ietf.org/html/rfc3282), in the Content-Language header field of the part, if present.      |
| location    | Texto                 | URI, as defined in [RFC2557](https://tools.ietf.org/html/rfc2557), in the Content-Location header field of the part, if present.                        |
| subParts    | Collection of objects | Body parts of each child (collection of *EmailBodyPart* objects)                                                                                        |
| headers     | Collection of objects | List of all header fields in the part, in the order they appear in the message (collection of *EmailHeader* objects, see [headers](#headers-) property) |




## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->
**.bodyValues** : Object<!-- END REF -->


#### Descrição

A propriedade `.bodyValues` contém o<!-- REF #EmailObjectClass.bodyValues. ummary -->*EmailBodyValue* , contendo um objeto para cada \<partID\> do `bodyStructure` (opcional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyValues` object contains the following properties:

| Propriedade                | Type     | Value                                                                                                                                       |
| -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | texto    | Value of the body part                                                                                                                      |
| *partID*.isEncodingProblem | booleano | True if malformed sections are found while decoding the charset, or unknown charset, or unknown content transfer-encoding. False by default |




## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->
**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection<!-- END REF -->


#### Descrição

A propriedade `.cc` contém o <!-- REF #EmailObjectClass.cc.Summary -->Cópia de Carbon (CC) destinatário de e-mail adicional [](#email-addresses) do e-mail<!-- END REF -->.






## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->
**.comments** : Text<!-- END REF -->


#### Descrição

A propriedade `.comments` contém um <!-- REF #EmailObjectClass.comments.Summary -->cabeçalho adicional de comentários<!-- END REF -->.

Comments only appear within the header section of the message (keeping the message's body untouched).

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .from

<!-- REF #EmailObjectClass.from.Syntax -->
**.from** : Text<br>**.from** : Object<br>**.from** : Collection<!-- END REF -->


#### Descrição

A propriedade `.from` contém o <!-- REF #EmailObjectClass.from.Summary -->Origining [endereço(s)](#email-addresses) do e-mail<!-- FIM REF -->.


Each email you send out has both the [sender](#sender) and **from** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->
**.headers** : Collection<!-- END REF -->


#### Descrição

A propriedade `.headers` contém um<!-- REF #EmailObjectClass.headers. Resumo -->coleção de objetos `EmailHeader` na ordem que eles aparecem na mensagem<!-- FIM REF -->. This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Every object of the headers collection can contain the following properties:

| Propriedade | Type  | Value                                                                                                                                                                |
| ----------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].name     | texto | (mandatory) Header field name as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322). If null or undefined, the header field is not added to the MIME header. |
| [].value    | texto | Header field values as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                    |







## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->
**.htmlBody** : Text<!-- END REF -->


#### Descrição

A propriedade `.htmlBody` contém o<!-- REF #EmailObjectClass.htmlBody. Resumo -->representação HTML da mensagem do e-mail (conjunto padrão de caracteres é UTF-8) (opcional, apenas SMTP)<!-- END REF -->. See [Handling body part](#handling-body-part) section.







## .id

<!-- REF #EmailObjectClass.id.Syntax -->
**.id** : Text<!-- END REF -->


#### Descrição

[IMAP transporter](IMAPTransporterClass.md) only.

A propriedade `.id` contém o <!-- REF #EmailObjectClass.id.Summary -->ID exclusivo do servidor IMAP<!-- END REF -->.






## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->
**.inReplyTo** : Text<!-- END REF -->


#### Descrição

A propriedade `.inReplyTo` contém o<!-- REF #EmailObjectClass.inReplyTo. Resumo -->identificador da mensagem (s) da(s) mensagem(s) original a qual a mensagem atual é uma resposta<!-- FIM REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).






## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->
**.keywords** : Object<!-- END REF -->


#### Descrição

A propriedade `.keywords` contém um<!-- REF #EmailObjectClass.keywords. ummary -->conjunto de palavras-chave como um objeto, onde cada nome de propriedade é uma palavra-chave e cada valor é verdadeiro<!-- FIM REF -->.

This property is the "keywords" header (see [RFC#4021](https://tools.ietf.org/html/rfc4021)).

| Propriedade     | Type     | Value                               |
| --------------- | -------- | ----------------------------------- |
| . \<keyword\> | booleano | Keyword to set (value must be true) |

Reserved keywords:
* $draft - Indicates a message is a draft
* $seen - Indicates a message has been read
* $flagged - Indicates a message needs special attention (e.g., Urgent)
* $answered - Indicates a message has been replied to
* $deleted - Indicates a message to delete

#### Exemplo

```
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```




## .messageId

<!-- REF #EmailObjectClass.messageId.Syntax -->
**.messageId** : Text<!-- END REF -->


#### Descrição

A propriedade `.messageId` contém um <!-- REF #EmailObjectClass.messageId.Summary -->cabeçalho de identificador de mensagem ("message-id")<!-- FIM REF -->.

This header is usually "lettersOrNumbers@domainname", e.g. "abcdef.123456@4d.com". This unique ID is used in particular on forums or public mailing lists. In general, mail servers automatically add this header to the messages they send.



## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->
**.receivedAt** : Text<!-- END REF -->


#### Descrição

[IMAP transporter](IMAPTransporterClass.md) only.

A propriedade `.receivedAt` contém o<!-- REF #EmailObjectClass.receivedAt. comentário -->timestamp da chegada do e-mail no servidor IMAP no formato UTC ISO 8601 (ex: 2020-09-13T16:11:53Z)<!-- END REF -->.






## .references

<!-- REF #EmailObjectClass.references.Syntax -->
**.references** : Collection<!-- END REF -->


#### Descrição

A propriedade `.referências` contém o<!-- REF #EmailObjectClass.references.Resumo -->Coleção de todas as mensagens de ids de mensagens na cadeia de resposta anterior<!-- FIM REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->
**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection<!-- END REF -->


#### Descrição

A propriedade `.replyTo` contém o endereço <!-- REF #EmailObjectClass.replyTo.Summary -->[](#email-addresses) para respostas<!-- FIM REF -->.





## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->
**.sendAt** : Text<!-- END REF -->


#### Descrição

A propriedade `.sendAt` contém o <!-- REF #EmailObjectClass.sendAt.Summary -->Carimbo de e-mail no formato UTC ISO 8601<!-- FIM REF -->.




## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->
**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection<!-- END REF -->


#### Descrição

A propriedade `.remetente` contém o <!-- REF #EmailObjectClass.sender.Summary -->email source [endereço(s)](#email-addresses) do e-mail<!-- FIM REF -->.


Each email you send out has both the **sender** and **[from](#from)** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .size

<!-- REF #EmailObjectClass.size.Syntax -->
**.size** : Integer<!-- END REF -->


#### Descrição

[IMAP transporter](IMAPTransporterClass.md) only.

A propriedade `.size` contém o<!-- REF #EmailObjectClass.size. Resumo -->tamanho (expresso em bytes) do objeto de e-mail retornado pelo servidor IMAP<!-- FIM REF -->.




## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->
**.subject** : Text<!-- END REF -->


#### Descrição

A propriedade `.subject` contém a <!-- REF #EmailObjectClass.subject.Summary -->descrição do tópico<!-- END REF -->.





## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->
**.textBody** : Text<!-- END REF -->


#### Descrição

A propriedade `.textBody` contém o<!-- REF #EmailObjectClass.textBody. Resumo -->Representação de texto simples da mensagem de e-mail (conjunto de caracteres padrão é UTF-8) (opcional, apenas SMTP)<!-- END REF -->. See [Handling body part](#handling-body-part) section.



## .to

<!-- REF #EmailObjectClass.to.Syntax -->
**.to** : Text<br>**.to** : Object<br>**.to** : Collection<!-- END REF -->


#### Descrição

A propriedade `.to` contém o <!-- REF #EmailObjectClass.to.Summary -->principal destinatário [endereço(s)](#email-addresses) do e-mail<!-- FIM REF -->.


## MAIL Convert from MIME

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |
</details>

<!-- REF #_command_.MAIL_Convert_from_MIME.Syntax -->
**Converter MIME**( *mime* : Blob ) : Objeto<br>**MAIL Converter de MIME**( *mime* : Texto : Object<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_from_MIME.Params -->
| Parameter | Type       |    | Descrição      |
| --------- | ---------- |:--:| -------------- |
| mime      | Blob, Text | -> | E-mail no MIME |
| Resultado | Objeto     | <- | Objeto Email   |
<!-- END REF -->

#### Descrição

O comando `Converter do MIME` <!-- REF #_command_.MAIL_Convert_from_MIME.Summary -->converte um documento MIME em um objeto de e-mail válido<!-- END REF -->.
> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the returned email object.

Passe *mime* um documento MIME válido para converter. Pode ser fornecido por qualquer servidor de correio ou aplicativo. Você pode passar um BLOB ou um parâmetro *mime*. Se o MIME vier de um arquivo, é recomendado utilizar um parâmetro BLOB para evitar problemas relacionados ao conjunto de caracteres e conversões de quebra de linha.

#### Returned object

Objeto Email.

#### Exemplo 1

Se quiser carregar um modelo de e-mail salvo como MIME em um documento de texto e enviar um e-mail:

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

#### Exemplo 2

Neste exemplo, você envia diretamente um documento 4D Write Pro contendo fotos:

```4d
var $mime: Blob
var $email;$server;$transporter;$status: Object

// Mime export of the 4D Write Pro document WP EXPORT VARIABLE(WParea;$mime;wk mime html)

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
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
| v17 R5 | Modificado |
</details>


<!-- REF #_command_.MAIL_Convert_to_MIME.Syntax -->
**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_to_MIME.Params -->
| Parameter | Type   |    | Descrição                       |
| --------- | ------ |:--:| ------------------------------- |
| mail      | Objeto | -> | Objeto Email                    |
| options   | Objeto | -> | Opções de codificação e Charset |
| Resultado | Texto  | <- | Email objeto convertido em MIME |
<!-- END REF -->

#### Descrição

O comando `Converter MIME` <!-- REF #_command_.MAIL_Convert_to_MIME.Summary -->converte um objeto de e-mail em MIME text<!-- FIM REF -->. Este comando é chamado internamente por [SMTP_transporter.send(](API/SMTPTransporterClass.md#send) para formatar o objeto de e-mail antes de enviá-lo. Ele pode ser usado para analisar o formato MIME do objeto.

No *e-mail*, passe o conteúdo e os detalhes da estrutura do e-mail para converter. Isso inclui informações como os endereços de e-mail (remetente e destinatário(s)), a própria mensagem e o tipo de exibição para a mensagem.
> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the email object.

Em *opções*, você pode definir um conjunto de caracteres e uma configuração de codificação específica para o e-mail. As seguintes propriedades estão disponíveis:

| Propriedade   | Type  | Descrição                                                                                                                                                                                                                 |
| ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Texto | Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s). Possible values:<p><p><table><tr><th>Constante</th><th>Value</th><th>Comentário</th></tr><tr><td>mail mode ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul></td></tr><tr><td>mail mode ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 & Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 & 8-bit</li></ul></td></tr><tr><td>mail mode UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)</tr><tr><td>mail mode UTF8 in base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & base64</td></tr></table> |
| bodyCharset   | Texto | Charset and encoding used for the html and text body contents of the email. Possible values: Same as for headerCharset (see above)                                                                                        |

Se o parâmetro *opções* for omitido, a configuração do modo de email UTF8 é usada para cabeçalho e partes do corpo.


#### Exemplo

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
