---
id: EmailObjectClass
title: Email
---

La création, l'envoi et la réception d'emails dans 4D s'effectuent par l'intermédiaire des objets `Email`.

Des objets `Email` sont créés lorsque vous recevez des emails via une fonction de classe *transporter* :

- IMAP - fonctions [`.getMail()`](IMAPTransporterClass.md#getmail) et [`.getMails()`](IMAPTransporterClass.md#getmails) pour récupérer des emails depuis un serveur IMAP
- POP3 - fonction [`.getMail()`](POP3TransporterClass.md#getmail) pour récupérer un email depuis un serveur POP3.

> Vous pouvez également créer un nouvel objet `Email` vide en appelant la commande 4D [`New object`](https://doc.4d.com/4dv18/help/command/en/page1471.html) puis le remplir avec des [propriétés d'objet Email](#email-object).

Vous envoyez des objets `Email` à l'aide de la fonction SMTP [`.send()`](SMTPTransporterClass.md#send).

Les commandes [`MAIL Convert from MIME`](#mail-convert-from-mime) et [`MAIL Convert to MIME`](#mail-convert-to-mime) peuvent être utilisées pour convertir des objets `Email` depuis et vers des contenus MIME.


### Objet Email

Les objets Email exposent les propriétés suivantes :

> Le format des objets Email de 4D suit la [spécification JMAP](https://jmap.io/spec-mail.html).

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


### Adresses Email

Toutes les propriétés qui contiennent des adresses email ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) acceptent des valeurs de type texte, objet ou collection.

#### Texte

- une adresse uniquement : "somebody@domain.com"
- un nom+adresse : "Somebody <somebody@domain.com>"
- combinaison de plusieurs adresses : "Somebody <somebody@domain.com>,me@home.org"

#### Objet

Un objet avec deux propriétés :

| Propriété | Type  | Description                     |
| --------- | ----- | ------------------------------- |
| name      | Texte | Nom à afficher (peut être null) |
| email     | Texte | Adresse email                   |

#### Collection

Une collection d'objets adresse.

### Traitement du body

Les propriétés [`textBody`](#textbody) et [`htmlBody`](#htmlbody) sont utilisées uniquement par la fonction [SMTP.send()](SMTPTransporterClass.md#send) pour permettre d'envoyer des emails simples. Lorsque les deux propriété sont remplies, le type MIME content-type multipart/alternative est utilisé. Le client email doit alors reconnaître la partie multipart/alternative et afficher la partie texte ou html nécessaire.

[`bodyStructure`](#bodystructure) et [`bodyValues`](#bodyvalues) sont utilisés par le [SMTP](SMTPTransporterClass.md) lorsque l'[objet Email](email-object) est construit depuis un document MIME, e.g. généré par la commande `MAIL Convert from MIME`. Dans ce cas, les deux propriétés `bodyStructure` et `bodyValues` doivent être passées ensemble, et il est déconseillé d'utiliser `textBody` et `htmlBody`.

#### Exemple d'objets bodyStructure et bodyValues

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


#### Description



La propriété `.attachments` contient une <!-- REF #EmailObjectClass.attachments.Summary -->collection d'objets `4D.MailAttachment`<!-- END REF -->.

Les objets Attachment (pièce jointe) sont créés à l'aide de la commande [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment). Les objets Attachment ont des [propriétés et fonctions](MailAttachmentClass.md) spécifiques.




## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->
**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection<!-- END REF -->


#### Description

La propriété `.bcc` contient la <!-- REF #EmailObjectClass.bcc.Summary -->copie carbone invisible (cci) des [adresse(s)](#email-addresses) des destinataires cachés de l'email<!-- END REF -->.




## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->
**.bodyStructure** : Object<!-- END REF -->


#### Description

La propriété `.bodyStructure` contient l'objet <!-- REF #EmailObjectClass.bodyStructure.Summary -->*EmailBodyPart*, i.e. la structure MIME complète du corps du message (optionnel)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).

L'objet `.bodyStructure` contient les propriété suivantes :

| Propriété   | Type                 | Valeur                                                                                                                                                                          |
| ----------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | Texte                | Identifie la partie de manière unique dans l'email                                                                                                                              |
| type        | Texte                | (obligatoire) Valeur du champ d'en-tête Content-Type de la partie                                                                                                               |
| charset     | Texte                | Valeur du paramètre charset du champ d'en-tête Content-Type                                                                                                                     |
| encoding    | Texte                | Si `isEncodingProblem=true`, la valeur de Content-Transfer-Encoding est ajoutée (par défaut indéfini)                                                                           |
| disposition | Texte                | Valeur du champ d'en-tête Content-Disposition de la partie                                                                                                                      |
| language    | Collection de textes | Liste de balises de langage, telles que définies dans la [RFC3282](https://tools.ietf.org/html/rfc3282), dans le champ d'en-tête Content-Language de la partie, le cas échéant. |
| location    | Texte                | URI, tel que défini dans la [RFC2557](https://tools.ietf.org/html/rfc2557), dans le champ d'en-tête Content-Location de la partie, le cas échéant.                              |
| subParts    | Collection d'objets  | Parties du corps de chaque enfant (collection d'objets *EmailBodyPart*)                                                                                                         |
| headers     | Collection d'objets  | Liste de tous les champs d'en-tête de la partie, dans leur ordre d'apparition de l'email (collection d'objets *EmailHeader* voir propriété [headers](#headers-))                |




## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->
**.bodyValues** : Object<!-- END REF -->


#### Description

The `.htmlBody` property contains the<!-- REF #EmailObjectClass.htmlBody.Summary -->HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).

The `.bodyValues` object contains the following properties:

| Propriété                  | Type    | Valeur                                                                                                                                      |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | Texte   | Value of the body part                                                                                                                      |
| *partID*.isEncodingProblem | boolean | True if malformed sections are found while decoding the charset, or unknown charset, or unknown content transfer-encoding. False by default |




## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->
**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection<!-- END REF -->


#### Description

The `.cc` property contains the <!-- REF #EmailObjectClass.cc.Summary -->Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.






## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->
**.comments** : Text<!-- END REF -->


#### Description

The `.comments` property contains an <!-- REF #EmailObjectClass.comments.Summary -->additional comments header<!-- END REF -->.

Comments only appear within the header section of the message (keeping the message's body untouched).

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .from

<!-- REF #EmailObjectClass.from.Syntax -->
**.from** : Text<br>**.from** : Object<br>**.from** : Collection<!-- END REF -->


#### Description

The `.from` property contains the <!-- REF #EmailObjectClass.from.Summary -->Originating [address(es)](#email-addresses) of the email<!-- END REF -->.


Each email you send out has both the [sender](#sender) and **from** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->
**.headers** : Collection<!-- END REF -->


#### Description

The `.headers` property contains a <!-- REF #EmailObjectClass.headers.Summary -->collection of `EmailHeader` objects, in the order they appear in the message<!-- END REF -->. This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Every object of the headers collection can contain the following properties:

| Propriété | Type  | Valeur                                                                                                                                                               |
| --------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].name   | Texte | (mandatory) Header field name as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322). If null or undefined, the header field is not added to the MIME header. |
| [].value  | Texte | Header field values as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                    |







## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->
**.htmlBody** : Text<!-- END REF -->


#### Description

The `.textBody` property contains the<!-- REF #EmailObjectClass.textBody.Summary -->Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).







## .id

<!-- REF #EmailObjectClass.id.Syntax -->
**.id** : Text<!-- END REF -->


#### Description

[IMAP transporter](IMAPTransporterClass.md) only.

The `.id` property contains the <!-- REF #EmailObjectClass.id.Summary -->unique ID from the IMAP server<!-- END REF -->.






## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->
**.inReplyTo** : Text<!-- END REF -->


#### Description

The `.inReplyTo` property contains the <!-- REF #EmailObjectClass.inReplyTo.Summary -->message identifier(s) of the original message(s) to which the current message is a reply<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).






## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->
**.keywords** : Object<!-- END REF -->


#### Description

The `.keywords` property contains a <!-- REF #EmailObjectClass.keywords.Summary -->set of keywords as an object, where each property name is a keyword and each value is true<!-- END REF -->.

This property is the "keywords" header (see [RFC#4021](https://tools.ietf.org/html/rfc4021)).

| Propriété       | Type    | Valeur                              |
| --------------- | ------- | ----------------------------------- |
| . \<keyword\> | boolean | Keyword to set (value must be true) |

Reserved keywords:
* $draft - Indicates a message is a draft
* $seen - Indicates a message has been read
* $flagged - Indicates a message needs special attention (e.g., Urgent)
* $answered - Indicates a message has been replied to
* $deleted - Indicates a message to delete

#### Exemple

```
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```




## .messageId

<!-- REF #EmailObjectClass.messageId.Syntax -->
**.messageId** : Texte<!-- END REF -->


#### Description

The `.messageId` property contains a <!-- REF #EmailObjectClass.messageId.Summary -->message identifier header ("message-id")<!-- END REF -->.

Cet en-tête est généralement "desChiffresOuDesLettres@nomdededomaine", par exemple "abcdef.123456@4d.com". Cet identifiant unique est notamment utilisé sur les forums ou les listes de diffusion publiques. En général, les serveurs de messagerie ajoutent automatiquement cet en-tête aux messages qu'ils envoient.



## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->
**.receivedAt** : Texte<!-- END REF -->


#### Description

[IMAP transporter](IMAPTransporterClass.md) only.

The `.receivedAt` property contains the <!-- REF #EmailObjectClass.receivedAt.Summary -->timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)<!-- END REF -->.






## .references

<!-- REF #EmailObjectClass.references.Syntax -->
**.references** : Collection<!-- END REF -->


#### Description

The `.references` property contains the <!-- REF #EmailObjectClass.references.Summary -->Collection of all message-ids of messages in the preceding reply chain<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->
**.replyTo** : Texte<br>**.replyTo** : Objet<br>**.replyTo** : Collection<!-- END REF -->


#### Description

The `.replyTo` property contains the <!-- REF #EmailObjectClass.replyTo.Summary -->[addresse(s)](#email-addresses) for responses<!-- END REF -->.





## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->
**.sendAt** : Texte<!-- END REF -->


#### Description

The `.sendAt` property contains the <!-- REF #EmailObjectClass.sendAt.Summary -->Email timestamp in ISO 8601 UTC format<!-- END REF -->.




## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->
**.sender** : Texte<br>**.sender** : Objet<br>**.sender** : Collection<!-- END REF -->


#### Description

The `.sender` property contains the <!-- REF #EmailObjectClass.sender.Summary -->email source [addresse(s)](#email-addresses) of the email<!-- END REF -->.


Each email you send out has both the **sender** and **[from](#from)** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .size

<!-- REF #EmailObjectClass.size.Syntax -->
**.size** : Integer<!-- END REF -->


#### Description

[IMAP transporter](IMAPTransporterClass.md) only.

The `.size` property contains the <!-- REF #EmailObjectClass.size.Summary -->size (expressed in bytes) of the Email object returned by the IMAP server<!-- END REF -->.




## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->
**.subject** : Texte<!-- END REF -->


#### Description

The `.subject` property contains the <!-- REF #EmailObjectClass.subject.Summary -->description of topic<!-- END REF -->.





## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->
**.textBody** : Texte<!-- END REF -->


#### Description

The `.bodyStructure` property contains the<!-- REF #EmailObjectClass.bodyStructure.Summary -->*EmailBodyPart* object, i.e. the full MIME structure of the message body (optional)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).



## .to

<!-- REF #EmailObjectClass.to.Syntax -->
**.to** : Texte<br>**.to** : Objet<br>**.to** : Collection<!-- END REF -->


#### Description

The `.to` property contains the <!-- REF #EmailObjectClass.to.Summary -->primary recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.


## MAIL Convert from MIME

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18     | Ajout         |
</details>

<!-- REF #_command_.MAIL_Convert_from_MIME.Syntax -->
**MAIL Convert from MIME**( *mime* : Blob ) : Object<br>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_from_MIME.Params -->
| Paramètres | Type       |    | Description   |
| ---------- | ---------- |:--:| ------------- |
| mime       | Blob, Text | -> | Email in MIME |
| Résultat   | Objet      | <- | Email object  |
<!-- END REF -->

#### Description

The `MAIL Convert from MIME` command <!-- REF #_command_.MAIL_Convert_from_MIME.Summary -->converts a MIME document into a valid email object<!-- END REF -->.
> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the returned email object.

Pass in *mime* a valid MIME document to convert. It can be provided by any mail server or application. You can pass a BLOB or a text *mime* parameter. If the MIME comes from a file, it is recommended to use a BLOB parameter to avoid issues related to charset and line break conversions.

#### Objet retourné

Email object.

#### Exemple 1

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

#### Exemple 2

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

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajout         |
| v17 R5  | Modified      |
</details>

<!-- REF #_command_.MAIL_Convert_to_MIME.Syntax -->
**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_to_MIME.Params -->
| Paramètres | Type  |    | Description                       |
| ---------- | ----- |:--:| --------------------------------- |
| mail       | Objet | -> | Email object                      |
| options    | Objet | -> | Charset and encoding mail options |
| Résultat   | Texte | <- | Email object converted to MIME    |
<!-- END REF -->

#### Description

The `MAIL Convert to MIME` command <!-- REF #_command_.MAIL_Convert_to_MIME.Summary -->converts an email object into MIME text<!-- END REF -->. This command is called internally by [SMTP_transporter.send( )](API/SMTPTransporterClass.md#send) to format the email object before sending it. It can be used to analyze the MIME format of the object.

In *mail*, pass the content and the structure details of the email to convert. This includes information such as the email addresses (sender and recipient(s)), the message itself, and the type of display for the message.
> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the email object.

In *options*, you can set a specific charset and encoding configuration for the mail. The following properties are available:

| Propriété     | Type  | Description                                                                                                                                                                                                                  |
| ------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Texte | Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s). Valeurs possibles :<p><p><table><tr><th>Constante</th><th>Valeur</th><th>Commentaire</th></tr><tr><td>mail mode ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul></td></tr><tr><td>mail mode ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 & Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 & 8-bit</li></ul></td></tr><tr><td>mail mode UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)</tr><tr><td>mail mode UTF8 in base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & base64</td></tr></table> |
| bodyCharset   | Texte | Charset and encoding used for the html and text body contents of the email. Possible values: Same as for headerCharset (see above)                                                                                           |

If the *options* parameter is omitted, the mail mode UTF8 configuration is used for header and body parts.


#### Exemple

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
