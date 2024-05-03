---
id: EmailObjectClass
title: Email
---

Creating, sending or receiving emails in 4D is done by handling an `Email` object.

`Email` objects are created when receiving mails through a _transporter_ class function:

- IMAP - [`.getMail()`](IMAPTransporterClass.md#getmail) and [`.getMails()`](IMAPTransporterClass.md#getmails) functions to get emails from an IMAP server
- POP3 - [`.getMail()`](POP3TransporterClass.md#getmail) function to get an email from a POP3 server.

> You can also create a new, blank `Email` object and then fill it with [Email object properties](#email-object).

You send `Email` objects using the SMTP [`.send()`](SMTPTransporterClass.md#send) function.

[`MAIL Convert from MIME`](#mail-convert-from-mime) and [`MAIL Convert to MIME`](#mail-convert-to-mime) commands can be used to convert `Email` objects to and from MIME contents.

### Objet Email

Les objets Email exposent les propriétés suivantes :

> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the Email object.

|                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #EmailObjectClass.attachments.Syntax -->](#attachments)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.attachments.Summary -->       |
| [<!-- INCLUDE #EmailObjectClass.bcc.Syntax -->](#bcc)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.bcc.Summary -->                               |
| [<!-- INCLUDE #EmailObjectClass.bodyStructure.Syntax -->](#bodystructure)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.bodyStructure.Summary --> |
| [<!-- INCLUDE #EmailObjectClass.bodyValues.Syntax -->](#bodyvalues)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.bodyValues.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.cc.Syntax -->](#cc)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.cc.Summary -->                                  |
| [<!-- INCLUDE #EmailObjectClass.comments.Syntax -->](#comments)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.comments.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.from.Syntax -->](#from)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.from.Summary -->                            |
| [<!-- INCLUDE #EmailObjectClass.headers.Syntax -->](#headers)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.headers.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.htmlBody.Syntax -->](#htmlbody)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.htmlBody.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.id.Syntax -->](#id)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.id.Summary -->                                  |
| [<!-- INCLUDE #EmailObjectClass.inReplyTo.Syntax -->](#inreplyto)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.inReplyTo.Summary -->             |
| [<!-- INCLUDE #EmailObjectClass.keywords.Syntax -->](#keywords)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.keywords.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.messageId.Syntax -->](#messageid)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.messageId.Summary -->             |
| [<!-- INCLUDE #EmailObjectClass.receivedAt.Syntax -->](#receivedat)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.receivedAt.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.references.Syntax -->](#references)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.references.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.replyTo.Syntax -->](#replyto)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.replyTo.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.sendAt.Syntax -->](#sendat)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.sendAt.Summary -->                      |
| [<!-- INCLUDE #EmailObjectClass.sender.Syntax -->](#sender)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.sender.Summary -->                      |
| [<!-- INCLUDE #EmailObjectClass.size.Syntax -->](#size)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.size.Summary -->                            |
| [<!-- INCLUDE #EmailObjectClass.subject.Syntax -->](#subject)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.subject.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.textBody.Syntax -->](#textbody)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.textBody.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.to.Syntax -->](#to)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EmailObjectClass.to.Summary -->                                  |

### Adresses Email

All properties that contain email addresses ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) accept a value of text, object, or collection type.

#### Text

- une adresse uniquement : "somebody@domain.com"
- single display name+email: "Somebody somebody@domain.com"
- several emails: "Somebody somebody@domain.com,me@home.org"

#### Object

Un objet avec deux propriétés :

| Propriété | Type | Description                                        |
| --------- | ---- | -------------------------------------------------- |
| name      | Text | Nom à afficher (peut être null) |
| email     | Text | Adresse email                                      |

#### Collection

Une collection d'objets adresse.

### Traitement du body

The [`textBody`](#textbody) and [`htmlBody`](#htmlbody) properties are only used with the [SMTP.send()](SMTPTransporterClass.md#send) function to allow sending simple mails. Lorsque les deux propriétés sont remplies, le type MIME content-type multipart/alternative est utilisé. Le client email doit alors reconnaître la partie multipart/alternative et afficher la partie texte ou html nécessaire.

[`bodyStructure`](#bodystructure) and [`bodyValues`](#bodyvalues) are used for [SMTP](SMTPTransporterClass.md) when the [Email object](#email-object) is built from a MIME document, e.g. when generated by the `MAIL Convert from MIME` command. In this case, both `bodyStructure` and `bodyValues` properties must be passed together, and it is not recommended to use `textBody` and `htmlBody`.

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

<!-- REF #EmailObjectClass.attachments.Syntax -->**.attachments** : Collection<!-- END REF -->

#### Description

The `.attachments` property contains a <!-- REF #EmailObjectClass.attachments.Summary -->collection of `4D.MailAttachment` object(s)<!-- END REF -->.

Attachment objects are defined through the [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment) command. Attachment objects have specific [properties and functions](MailAttachmentClass.md).

## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->**.bcc** : Text<br/>**.bcc** : Object<br/>**.bcc** : Collection<!-- END REF -->

#### Description

The `.bcc` property contains the <!-- REF #EmailObjectClass.bcc.Summary -->Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->**.bodyStructure** : Object<!-- END REF -->

#### Description

The `.bodyStructure` property contains the <!-- REF #EmailObjectClass.bodyStructure.Summary -->_EmailBodyPart_ object, i.e. the full MIME structure of the message body (optional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyStructure` object contains the following properties:

| Propriété   | Type                 | Valeur                                                                                                                                                                     |
| ----------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | Text                 | Identifie la partie de manière unique dans l'email                                                                                                                         |
| type        | Text                 | (obligatoire) Valeur du champ d'en-tête Content-Type de la partie                                                                                       |
| charset     | Text                 | Valeur du paramètre charset du champ d'en-tête Content-Type                                                                                                                |
| encoding    | Text                 | If `isEncodingProblem=true`, the Content-Transfer-Encoding value is added (by default undefined)                                                        |
| disposition | Text                 | Valeur du champ d'en-tête Content-Disposition de la partie                                                                                                                 |
| language    | Collection de textes | List of language tags, as defined in [RFC3282](https://tools.ietf.org/html/rfc3282), in the Content-Language header field of the part, if present.         |
| location    | Text                 | URI, as defined in [RFC2557](https://tools.ietf.org/html/rfc2557), in the Content-Location header field of the part, if present.                           |
| subParts    | Collection d'objets  | Body parts of each child (collection of _EmailBodyPart_ objects)                                                                                        |
| headers     | Collection d'objets  | List of all header fields in the part, in the order they appear in the message (collection of _EmailHeader_ objects, see [headers](#headers-) property) |

## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->**.bodyValues** : Object<!-- END REF -->

#### Description

The `.bodyValues` property contains the <!-- REF #EmailObjectClass.bodyValues.Summary -->_EmailBodyValue_ object, containing an object for each \\<partID\> of `bodyStructure` (optional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyValues` object contains the following properties:

| Propriété                                  | Type    | Valeur                                                                                                                                                                                     |
| ------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _partID_.value             | text    | Valeur de la partie body                                                                                                                                                                   |
| _partID_.isEncodingProblem | boolean | Vrai si des sections malformées sont identifiées durant le décodage du charset, si le charset est inconnu, ou si le content transfer-encoding est inconnu. Faux par défaut |

## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->**.cc** : Text<br/>**.cc** : Object<br/>**.cc** : Collection<!-- END REF -->

#### Description

The `.cc` property contains the <!-- REF #EmailObjectClass.cc.Summary -->Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->**.comments** : Text<!-- END REF -->

#### Description

The `.comments` property contains an <!-- REF #EmailObjectClass.comments.Summary -->additional comments header<!-- END REF -->.

Les commentaires n'apparaissent que dans la zone d'en-tête du message (le body du message reste inchangé).

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .from

<!-- REF #EmailObjectClass.from.Syntax -->**.from** : Text<br/>**.from** : Object<br/>**.from** : Collection<!-- END REF -->

#### Description

The `.from` property contains the <!-- REF #EmailObjectClass.from.Summary -->Originating [address(es)](#email-addresses) of the email<!-- END REF -->.

Each email you send out has both the [sender](#sender) and **from** addresses:

- le domaine sender correspond à ce que le serveur de réception d'email obtient à l'ouverture de la session,
- l'adresse from correspond à ce que le(s) destinataire(s) visualise(nt).

Pour mieux livrer l'email, il est recommandé d'utiliser les mêmes adresses pour from et sender.

## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->**.headers** : Collection<!-- END REF -->

#### Description

The `.headers` property contains a <!-- REF #EmailObjectClass.headers.Summary -->collection of `EmailHeader` objects, in the order they appear in the message<!-- END REF -->. Cette propriété permet aux utilisateurs d'ajouter des en-têtes extended (enregistrés) ou des en-têtes user-defined (non enregistrés, commençant par "X").

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Chaque objet de la collection de headers peut contenir les propriétés suivantes :

| Propriété                                                                    | Type | Valeur                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [].name  | text | (mandatory) Header field name as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322). S'il est null ou indéfini, le champ en-tête n'est pas ajouté à l'en-tête MIME. |
| [].value | text | Header field values as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                                                                              |

## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->**.htmlBody** : Text<!-- END REF -->

#### Description

The `.htmlBody` property contains the <!-- REF #EmailObjectClass.htmlBody.Summary -->HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

## .id

<!-- REF #EmailObjectClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Description

[IMAP transporter](IMAPTransporterClass.md) only.

The `.id` property contains the <!-- REF #EmailObjectClass.id.Summary -->unique ID from the IMAP server<!-- END REF -->.

## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->**.inReplyTo** : Text<!-- END REF -->

#### Description

The `.inReplyTo` property contains the <!-- REF #EmailObjectClass.inReplyTo.Summary -->message identifier(s) of the original message(s) to which the current message is a reply<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->**.keywords** : Object<!-- END REF -->

#### Description

The `.keywords` property contains a <!-- REF #EmailObjectClass.keywords.Summary -->set of keywords as an object, where each property name is a keyword and each value is true<!-- END REF -->.

This property is the "keywords" header (see [RFC#4021](https://tools.ietf.org/html/rfc4021)).

| Propriété                       | Type    | Valeur                                                                           |
| ------------------------------- | ------- | -------------------------------------------------------------------------------- |
| .\\<keyword\> | boolean | Mot-clé à définir à définir (la valeur doit être mise à vrai) |

Mots-clés réservés :

- $draft - Indique qu'un message est un brouillon
- $seen - Indique qu'un message a été lu
- $flagged - Indique qu'un message nécessite une attention particulière (ex : Urgent)
- $answered - Indique qu'un message a reçu une réponse
- $deleted - Indique un message à supprimer

#### Exemple

```
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```

## .messageId

<!-- REF #EmailObjectClass.messageId.Syntax -->**.messageId** : Text<!-- END REF -->

#### Description

The `.messageId` property contains a <!-- REF #EmailObjectClass.messageId.Summary -->message identifier header ("message-id")<!-- END REF -->.

Cet en-tête est généralement "desChiffresOuDesLettres@nomdededomaine", par exemple "abcdef.123456@4d.com". Cet identifiant unique est notamment utilisé sur les forums ou les listes de diffusion publiques. En général, les serveurs de messagerie ajoutent automatiquement cet en-tête aux messages qu'ils envoient.

## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->**.receivedAt** : Text<!-- END REF -->

#### Description

[IMAP transporter](IMAPTransporterClass.md) only.

The `.receivedAt` property contains the <!-- REF #EmailObjectClass.receivedAt.Summary -->timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)<!-- END REF -->.

## .references

<!-- REF #EmailObjectClass.references.Syntax -->**.references** : Collection<!-- END REF -->

#### Description

The `.references` property contains the <!-- REF #EmailObjectClass.references.Summary -->Collection of all message-ids of messages in the preceding reply chain<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->**.replyTo** : Text<br/>**.replyTo** : Object<br/>**.replyTo** : Collection<!-- END REF -->

#### Description

The `.replyTo` property contains the <!-- REF #EmailObjectClass.replyTo.Summary -->[addresse(s)](#email-addresses) for responses<!-- END REF -->.

## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->**.sendAt** : Text<!-- END REF -->

#### Description

The `.sendAt` property contains the <!-- REF #EmailObjectClass.sendAt.Summary -->Email timestamp in ISO 8601 UTC format<!-- END REF -->.

## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->**.sender** : Text<br/>**.sender** : Object<br/>**.sender** : Collection<!-- END REF -->

#### Description

The `.sender` property contains the <!-- REF #EmailObjectClass.sender.Summary -->email source [addresse(s)](#email-addresses) of the email<!-- END REF -->.

Each email you send out has both the **sender** and **[from](#from)** addresses:

- le domaine sender correspond à ce que le serveur de réception d'email obtient à l'ouverture de la session,
- l'adresse from correspond à ce que le(s) destinataire(s) visualise(nt).

Pour mieux livrer l'email, il est recommandé d'utiliser les mêmes adresses pour from et sender.

## .size

<!-- REF #EmailObjectClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### Description

[IMAP transporter](IMAPTransporterClass.md) only.

The `.size` property contains the <!-- REF #EmailObjectClass.size.Summary -->size (expressed in bytes) of the Email object returned by the IMAP server<!-- END REF -->.

## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->**.subject** : Text<!-- END REF -->

#### Description

The `.subject` property contains the <!-- REF #EmailObjectClass.subject.Summary -->description of topic<!-- END REF -->.

## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->**.textBody** : Text<!-- END REF -->

#### Description

The `.textBody` property contains the <!-- REF #EmailObjectClass.textBody.Summary -->Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

## .to

<!-- REF #EmailObjectClass.to.Syntax -->**.to** : Text<br/>**.to** : Object<br/>**.to** : Collection<!-- END REF -->

#### Description

The `.to` property contains the <!-- REF #EmailObjectClass.to.Summary -->primary recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## MAIL Convert from MIME

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18      | Ajout         |

</details>

<!-- REF #_command_.MAIL Convert from MIME.Syntax -->**MAIL Convert from MIME**( *mime* : Blob ) : Object<br/>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL Convert from MIME.Params -->

| Paramètres | Type       |     | Description   |
| ---------- | ---------- | :-: | ------------- |
| mime       | Blob, Text |  -> | Email en MIME |
| Résultat   | Object     |  <- | Objet email   |

<!-- END REF -->

#### Description

The `MAIL Convert from MIME` command <!-- REF #_command_.MAIL Convert from MIME.Summary -->converts a MIME document into a valid email object<!-- END REF -->.

> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the returned email object.

Pass in _mime_ a valid MIME document to convert. Il peut être fourni par tout type de serveur ou d'application de messagerie. You can pass a BLOB or a text _mime_ parameter. Si le MIME provient d'un fichier, il est recommandé d'utiliser un paramètre BLOB pour éviter les problèmes liés aux conversions de charset et de retours à la ligne.

#### Objet retourné

Objet email.

#### Exemple 1

Vous souhaitez charger un template mail enregistré au format MIME dans un document texte et l'envoyer par email :

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

Dans cet exemple, vous envoyez directement un document 4D Write Pro contenant des images :

```4d
var $mime: Blob
var $email;$server;$transporter;$status: Object

// Export Mime du document 4D Write Pro
WP EXPORT VARIABLE(WParea;$mime;wk mime html)

// convertir la variable Mime de 4D Write Pro en objet email
$email:=MAIL Convert from MIME($mime)

// Remplir les en-têtes de l'objet email
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

| Release | Modifications |
| ------- | ------------- |
| 17 R4   | Ajout         |
| 17 R5   | Modifié       |

</details>

<!-- REF #_command_.MAIL Convert to MIME.Syntax -->**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->

<!-- REF #_command_.MAIL Convert to MIME.Params -->

| Paramètres | Type   |     | Description                              |
| ---------- | ------ | :-: | ---------------------------------------- |
| mail       | Object |  -> | Objet email                              |
| options    | Object |  -> | Options d'encodage et de charset du mail |
| Résultat   | Text   |  <- | Objet email converti en MIME             |

<!-- END REF -->

#### Description

The `MAIL Convert to MIME` command <!-- REF #_command_.MAIL Convert to MIME.Summary -->converts an email object into MIME text<!-- END REF -->. This command is called internally by [SMTP_transporter.send( )](API/SMTPTransporterClass.md#send) to format the email object before sending it. Elle peut être utilisée pour analyser le format MIME de l'objet.

In _mail_, pass the content and the structure details of the email to convert. Cela inclut des informations telles que les adresses e-mail (expéditeur et destinataire(s)), le contenu de l'e-mail lui-même et son type d'affichage.

> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the email object.

In _options_, you can set a specific charset and encoding configuration for the mail. Les propriétés suivantes sont disponibles :

| Propriété     | Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset et encodage utilisés pour les parties de mail suivantes : le sujet, les noms de fichiers joints et le nom du mail. Possible values:<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>mail mode ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul></td></tr><tr><td>mail mode ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 & Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 & 8-bit</li></ul></td></tr><tr><td>mail mode UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)</td></tr><tr><td>mail mode UTF8 in base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & base64</td></tr></table> |
| bodyCharset   | Text | Charset et encodage utilisés pour le contenu html et le texte du body du mail. Valeurs possibles : Identiques à celles de headerCharset (voir ci-dessus)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

If the _options_ parameter is omitted, the mail mode UTF8 configuration is used for header and body parts.

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
