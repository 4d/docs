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

|                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #EmailObjectClass.attachments.Syntax -->](#attachments)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.attachments.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bcc.Syntax -->](#bcc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bcc.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bodyStructure.Syntax -->](#bodystructure)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bodyStructure.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bodyValues.Syntax -->](#bodyvalues)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bodyValues.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.cc.Syntax -->](#cc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.cc.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.comments.Syntax -->](#comments)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.comments.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.from.Syntax -->](#from)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.from.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.headers.Syntax -->](#headers)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.headers.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.htmlBody.Syntax -->](#htmlbody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.htmlBody.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.id.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.inReplyTo.Syntax -->](#inreplyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.inReplyTo.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.keywords.Syntax -->](#keywords)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.keywords.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.messageId.Syntax -->](#messageid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.messageId.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.receivedAt.Syntax -->](#receivedat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.receivedAt.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.references.Syntax -->](#references)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.references.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.replyTo.Syntax -->](#replyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.replyTo.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.sendAt.Syntax -->](#sendat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.sendAt.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.sender.Syntax -->](#sender)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.sender.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.size.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.subject.Syntax -->](#subject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.subject.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.textBody.Syntax -->](#textbody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.textBody.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.to.Syntax -->](#to)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.to.Summary -->|

### Adresses Email

Toutes les propriétés qui contiennent des adresses email ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) acceptent des valeurs de type texte, objet ou collection.

#### Text

- une adresse uniquement : "somebody@domain.com"
- un nom+adresse : "Somebody <somebody@domain.com>"
- combinaison de plusieurs adresses : "Somebody <somebody@domain.com>,me@home.org"

#### Object

Un objet avec deux propriétés :

| Propriété | Type | Description                     |
| --------- | ---- | ------------------------------- |
| nom       | Text | Nom à afficher (peut être null) |
| email     | Text | Adresse email                   |

#### Collections

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

The `.attachments` property contains a <!-- REF #EmailObjectClass.attachments.Summary -->collection of `4D.MailAttachment` object(s)<!-- END REF -->.

Les objets Attachment (pièce jointe) sont créés à l'aide de la commande [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment). Les objets Attachment ont des [propriétés et fonctions](MailAttachmentClass.md) spécifiques.

## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->

**.bcc** : Text<br/>**.bcc** : Object<br/>**.bcc** : Collection<!-- END REF -->

#### Description

The `.bcc` property contains the <!-- REF #EmailObjectClass.bcc.Summary -->Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->

**.bodyStructure** : Object<!-- END REF -->

#### Description

The `.bodyStructure` property contains the <!-- REF #EmailObjectClass.bodyStructure.Summary -->*EmailBodyPart* object, i.e. the full MIME structure of the message body (optional)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).

L'objet `.bodyStructure` contient les propriété suivantes :

| Propriété   | Type                 | Value                                                                                                                                                                           |
| ----------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | Text                 | Identifie la partie de manière unique dans l'email                                                                                                                              |
| type        | Text                 | (obligatoire) Valeur du champ d'en-tête Content-Type de la partie                                                                                                               |
| charset     | Text                 | Valeur du paramètre charset du champ d'en-tête Content-Type                                                                                                                     |
| encoding    | Text                 | Si `isEncodingProblem=true`, la valeur de Content-Transfer-Encoding est ajoutée (par défaut indéfini)                                                                           |
| disposition | Text                 | Valeur du champ d'en-tête Content-Disposition de la partie                                                                                                                      |
| language    | Collection de textes | Liste de balises de langage, telles que définies dans la [RFC3282](https://tools.ietf.org/html/rfc3282), dans le champ d'en-tête Content-Language de la partie, le cas échéant. |
| location    | Text                 | URI, tel que défini dans la [RFC2557](https://tools.ietf.org/html/rfc2557), dans le champ d'en-tête Content-Location de la partie, le cas échéant.                              |
| subParts    | Collection d'objets  | Parties du corps de chaque enfant (collection d'objets *EmailBodyPart*)                                                                                                         |
| headers     | Collection d'objets  | Liste de tous les champs d'en-tête de la partie, dans leur ordre d'apparition de l'email (collection d'objets *EmailHeader* voir propriété [headers](#headers-))                |

## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->

**.bodyValues** : Object<!-- END REF -->

#### Description

The `.bodyValues` property contains the <!-- REF #EmailObjectClass.bodyValues.Summary -->*EmailBodyValue* object, containing an object for each \<partID\> of `bodyStructure` (optional)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).

L'objet `.bodyValues` contient les propriété suivantes :

| Propriété                  | Type    | Value                                                                                                                                                                      |
| -------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text    | Valeur de la partie body                                                                                                                                                   |
| *partID*.isEncodingProblem | boolean | Vrai si des sections malformées sont identifiées durant le décodage du charset, si le charset est inconnu, ou si le content transfer-encoding est inconnu. Faux par défaut |

## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->

**.cc** : Text<br/>**.cc** : Object<br/>**.cc** : Collection<!-- END REF -->

#### Description

The `.cc` property contains the <!-- REF #EmailObjectClass.cc.Summary -->Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->

**.comments** : Text<!-- END REF -->

#### Description

The `.comments` property contains an <!-- REF #EmailObjectClass.comments.Summary -->additional comments header<!-- END REF -->.

Les commentaires n'apparaissent que dans la zone d'en-tête du message (le body du message reste inchangé).

Pour les exigences propres au formatage, veuillez consulter la [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .from

<!-- REF #EmailObjectClass.from.Syntax -->

**.from** : Text<br/>**.from** : Object<br/>**.from** : Collection<!-- END REF -->

#### Description

The `.from` property contains the <!-- REF #EmailObjectClass.from.Summary -->Originating [address(es)](#email-addresses) of the email<!-- END REF -->.

Chaque email envoyé comporte à la fois les adresses du [sender](#sender) et du **from** :

- le domaine sender correspond à ce que le serveur de réception d'email obtient à l'ouverture de la session,
- l'adresse from correspond à ce que le(s) destinataire(s) visualise(nt).

Pour mieux livrer l'email, il est recommandé d'utiliser les mêmes adresses pour from et sender.

## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->

**.headers** : Collection<!-- END REF -->

#### Description

The `.headers` property contains a <!-- REF #EmailObjectClass.headers.Summary -->collection of `EmailHeader` objects, in the order they appear in the message<!-- END REF -->. Cette propriété permet aux utilisateurs d'ajouter des en-têtes extended (enregistrés) ou des en-têtes user-defined (non enregistrés, commençant par "X").

> Si une propriété d'objet `EmailHeader` définit un en-tête tel que "from" ou "cc" qui est déjà défini comme propriété au niveau du mail, la propriété `EmailHeader` est ignorée.

Chaque objet de la collection de headers peut contenir les propriétés suivantes :

| Propriété | Type | Value                                                                                                                                                                                      |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [].name   | text | (obligatoire) Nom du champ en-tête, tel que défini dans la [RFC#5322](https://tools.ietf.org/html/rfc5322). S'il est null ou indéfini, le champ en-tête n'est pas ajouté à l'en-tête MIME. |
| [].value  | text | Valeur du champ d'en-tête telle que définie dans la [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                        |

## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->

**.htmlBody** : Text<!-- END REF -->

#### Description

The `.htmlBody` property contains the <!-- REF #EmailObjectClass.htmlBody.Summary -->HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).

## .id

<!-- REF #EmailObjectClass.id.Syntax -->

**.id** : Text<!-- END REF -->

#### Description

[IMAP transporter](IMAPTransporterClass.md) uniquement.

The `.id` property contains the <!-- REF #EmailObjectClass.id.Summary -->unique ID from the IMAP server<!-- END REF -->.

## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->

**.inReplyTo** : Text<!-- END REF -->

#### Description

The `.inReplyTo` property contains the <!-- REF #EmailObjectClass.inReplyTo.Summary -->message identifier(s) of the original message(s) to which the current message is a reply<!-- END REF -->.

Pour les exigences propres au formatage, veuillez consulter la [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->

**.keywords** : Object<!-- END REF -->

#### Description

The `.keywords` property contains a <!-- REF #EmailObjectClass.keywords.Summary -->set of keywords as an object, where each property name is a keyword and each value is true<!-- END REF -->.

Cette propriété est l'en-tête "keywords" (voir la [RFC#4021](https://tools.ietf.org/html/rfc4021)).

| Propriété      | Type    | Value                                                         |
| -------------- | ------- | ------------------------------------------------------------- |
| .\<keyword\> | boolean | Mot-clé à définir à définir (la valeur doit être mise à vrai) |

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

<!-- REF #EmailObjectClass.messageId.Syntax -->

**.messageId** : Texte<!-- END REF -->

#### Description

The `.messageId` property contains a <!-- REF #EmailObjectClass.messageId.Summary -->message identifier header ("message-id")<!-- END REF -->.

Cet en-tête est généralement "desChiffresOuDesLettres@nomdededomaine", par exemple "abcdef.123456@4d.com". Cet identifiant unique est notamment utilisé sur les forums ou les listes de diffusion publiques. En général, les serveurs de messagerie ajoutent automatiquement cet en-tête aux messages qu'ils envoient.

## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->

**.receivedAt** : Texte<!-- END REF -->

#### Description

[IMAP transporter](IMAPTransporterClass.md) uniquement.

The `.receivedAt` property contains the <!-- REF #EmailObjectClass.receivedAt.Summary -->timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)<!-- END REF -->.

## .references

<!-- REF #EmailObjectClass.references.Syntax -->

**.references** : Collection<!-- END REF -->

#### Description

The `.references` property contains the <!-- REF #EmailObjectClass.references.Summary -->Collection of all message-ids of messages in the preceding reply chain<!-- END REF -->.

Pour les exigences propres au formatage, veuillez consulter la [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->

**.replyTo** : Texte<br/>**.replyTo** : Objet<br/>**.replyTo** : Collection<!-- END REF -->

#### Description

The `.replyTo` property contains the <!-- REF #EmailObjectClass.replyTo.Summary -->[addresse(s)](#email-addresses) for responses<!-- END REF -->.

## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->

**.sendAt** : Texte<!-- END REF -->

#### Description

The `.sendAt` property contains the <!-- REF #EmailObjectClass.sendAt.Summary -->Email timestamp in ISO 8601 UTC format<!-- END REF -->.

## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->

**.sender** : Texte<br/>**.sender** : Objet<br/>**.sender** : Collection<!-- END REF -->

#### Description

The `.sender` property contains the <!-- REF #EmailObjectClass.sender.Summary -->email source [addresse(s)](#email-addresses) of the email<!-- END REF -->.

Chaque email envoyé comporte à la fois les adresses du **sender** et du **[from](#from)** :

- le domaine sender correspond à ce que le serveur de réception d'email obtient à l'ouverture de la session,
- l'adresse from correspond à ce que le(s) destinataire(s) visualise(nt).

Pour mieux livrer l'email, il est recommandé d'utiliser les mêmes adresses pour from et sender.

## .size

<!-- REF #EmailObjectClass.size.Syntax -->

**.size** : Integer<!-- END REF -->

#### Description

[IMAP transporter](IMAPTransporterClass.md) uniquement.

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

The `.textBody` property contains the <!-- REF #EmailObjectClass.textBody.Summary -->Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).

## .to

<!-- REF #EmailObjectClass.to.Syntax -->

**.to** : Texte<br/>**.to** : Objet<br/>**.to** : Collection<!-- END REF -->

#### Description

The `.to` property contains the <!-- REF #EmailObjectClass.to.Summary -->primary recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## MAIL Convert from MIME

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18     | Ajoutées      |

</details>

<!-- REF #_command_.MAIL_Convert_from_MIME.Syntax -->

**MAIL Convert from MIME**( *mime* : Blob ) : Object<br/>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_from_MIME.Params -->
| Paramètres | Type       |    | Description                            |
| ---------- | ---------- |:--:| -------------------------------------- |
| mime       | Blob, Text | -> | Email en MIME                          |
| Result     | Object     | <- | Objet email|<!-- END REF -->

|

#### Description

The `MAIL Convert from MIME` command <!-- REF #_command_.MAIL_Convert_from_MIME.Summary -->converts a MIME document into a valid email object<!-- END REF -->.
> Le format des objets Email de 4D suit la [spécification JMAP](https://jmap.io/spec-mail.html).

Passez dans *mime* un document MIME valide à convertir. Il peut être fourni par tout type de serveur ou d'application de messagerie. Vous pouvez passer un BLOB ou un texte dans le paramètre *mime*. Si le MIME provient d'un fichier, il est recommandé d'utiliser un paramètre BLOB pour éviter les problèmes liés aux conversions de charset et de retours à la ligne.

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

#### Exemple 3

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

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |
| v17 R5  | Modifié       |

</details>

<!-- REF #_command_.MAIL_Convert_to_MIME.Syntax -->

**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_to_MIME.Params -->
| Paramètres | Type   |    | Description                                             |
| ---------- | ------ |:--:| ------------------------------------------------------- |
| mail       | Object | -> | Objet email                                             |
| options    | Object | -> | Options d'encodage et de charset du mail                |
| Result     | Text   | <- | Objet email converti en MIME|<!-- END REF -->

|

#### Description

The `MAIL Convert to MIME` command <!-- REF #_command_.MAIL_Convert_to_MIME.Summary -->converts an email object into MIME text<!-- END REF -->. Cette commande est appelée en interne par [SMTP_transporter.send( )](API/SMTPTransporterClass.md#send) pour formater l'objet email avant de l'envoyer. Elle peut être utilisée pour analyser le format MIME de l'objet.

Dans *mail*, passez les éléments du contenu et de la structure de l'email à convertir. Cela inclut des informations telles que les adresses e-mail (expéditeur et destinataire(s)), le contenu de l'e-mail lui-même et son type d'affichage.
> Le format des objets Email de 4D suit la [spécification JMAP](https://jmap.io/spec-mail.html).

Dans *options*, vous pouvez configurer l'encodage et le charset du mail. Les propriétés suivantes sont disponibles :

| Propriété     | Type | Description                                                                                                                                                             |
| ------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset et encodage utilisés pour les parties de mail suivantes : le sujet, les noms de fichiers joints et le nom du mail. Valeurs possibles :<table><tr><th>Constante</th><th>Value</th><th>Commentaire</th></tr><tr><td>mail mode ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i> : US-ASCII si possible, japonais (ISO-2022-JP) & Quoted-printable si possible, sinon UTF-8 & Quoted-printable</li><li><i>bodyCharset</i> : US-ASCII si possible, japonais (ISO-2022-JP) et 7 bits si possible, sinon UTF-8 et Quoted-printable</li></ul></td></tr><tr><td>mail mode ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 & Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 & 8-bit</li></ul></td></tr><tr><td>mail mode UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i> : US-ASCII si possible, sinon UTF-8 & Quoted-printable (**valeur par défaut**)</td></tr><tr><td>mail mode UTF8 in base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> &<i>bodyCharset</i> : US-ASCII si possible, sinon UTF-8 & base64</td></tr></table> |
| bodyCharset   | Text | Charset et encodage utilisés pour le contenu html et le texte du body du mail. Valeurs possibles : Identiques à celles de headerCharset (voir ci-dessus)                |

Si le paramètre *options* est omis, la configuration mail mode UTF8 est utilisée pour les parties en-tête et corps.

#### Exemple

```4d
var $mail: Object
var $mime: Text
$mail:=New object

// Création d'un mail
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
