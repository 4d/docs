---
id: EmailObjectClass
title: Email
---

La création, l'envoi et la réception d'emails dans 4D s'effectuent par l'intermédiaire des objets `Email`.

Des objets `Email` sont créés lorsque vous recevez des emails via une fonction de classe _transporter_ :

- IMAP - fonctions [`.getMail()`](IMAPTransporterClass.md#getmail) and [`.getMails()`](IMAPTransporterClass.md#getmails) pour obtenir des emails à partir d'un serveur IMAP
- POP3 - fonction [`.getMail()`](POP3TransporterClass.md#getmail) pour obtenir un email à partir d'un serveur POP3.

> Vous pouvez également créer un nouvel objet vide `Email` et le remplir avec les propriétés de l'objet [Email](#email-object).

Vous envoyez des objets `Email` à l'aide de la fonction SMTP [`send()`](SMTPTransporterClass.md#send).

Les commandes [`MAIL Convert from MIME`](#mail-convert-from-mime) et [`MAIL Convert to MIME`](#mail-convert-to-mime) peuvent être utilisées pour convertir des objets `Email` depuis et vers des contenus MIME.

### Objet Email

Les objets Email exposent les propriétés suivantes :

> Le format des objets Email de 4D suit la [spécification JMAP](https://jmap.io/spec-mail.html).

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

### Adresses Email

Toutes les propriétés qui contiennent des adresses email ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) acceptent des valeurs de type texte, objet ou collection.

#### Text

- une adresse uniquement : "somebody@domain.com"
- un seul nom d'affichage+courriel : "Somebodysomebody@domain.com"
- plusieurs courriels : "Somebody somebody@domain.com,me@home.org"

#### Object

Un objet avec deux propriétés :

| Propriété | Type | Description                                        |
| --------- | ---- | -------------------------------------------------- |
| name      | Text | Nom à afficher (peut être null) |
| email     | Text | Adresse email                                      |

#### Collection

Une collection d'objets adresse.

### Traitement du body

Les propriétés [`textBody`](#textbody) et [`htmlBody`](#htmlbody) sont utilisées uniquement par la fonction [SMTP.send()](SMTPTransporterClass.md#send) pour permettre d'envoyer des emails simples. Lorsque les deux propriétés sont remplies, le type MIME content-type multipart/alternative est utilisé. Le client email doit alors reconnaître la partie multipart/alternative et afficher la partie texte ou html nécessaire.

[`bodyStructure`](#bodystructure) et [`bodyValues`](#bodyvalues) sont utilisées pour [SMTP](SMTPTransporterClass.md) lorsque l'objet [Email](EmailObjectClass.md) est construit à partir d'un document MIME, par exemple lorsqu'il est généré par la commande `MAIL Convert from MIME`. Dans ce cas, les deux propriétés `bodyStructure` et `bodyValues` doivent être passées ensemble, et il est déconseillé d'utiliser `textBody` et `htmlBody`.

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

La propriété `.attachments` contient une <!-- REF #EmailObjectClass.attachments.Summary -->collection d'objet(s) `4D.MailAttachment`<!-- END REF -->.

Les objets de type pièce jointe sont définis par la commande [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment). Les objets Attachment ont des [propriétés et fonctions](MailAttachmentClass.md) spécifiques.

## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->**.bcc** : Text<br/>**.bcc** : Object<br/>**.bcc** : Collection<!-- END REF -->

#### Description

La propriété `.bcc` contient <!-- REF #EmailObjectClass.bcc.Summary -->les [adresses](#email-addresses) des destinataires cachés en Copie Carbone Invisible de l'email<!-- END REF -->.

## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->**.bodyStructure** : Object<!-- END REF -->

#### Description

La propriété `.bodyStructure` contient l'<!-- REF #EmailObjectClass.bodyStructure.Summary -->objet _EmailBodyPart_, c'est-à-dire la structure MIME complète du body du message (facultatif)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).

L'objet `.bodyStructure` contient les propriété suivantes :

| Propriété   | Type                 | Valeur                                                                                                                                                                                          |
| ----------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | Text                 | Identifie la partie de manière unique dans l'email                                                                                                                                              |
| type        | Text                 | (obligatoire) Valeur du champ d'en-tête Content-Type de la partie                                                                                                            |
| charset     | Text                 | Valeur du paramètre charset du champ d'en-tête Content-Type                                                                                                                                     |
| encoding    | Text                 | Si `isEncodingProblem=true`, la valeur de Content-Transfer-Encoding est ajoutée (par défaut indéfini)                                                                        |
| disposition | Text                 | Valeur du champ d'en-tête Content-Disposition de la partie                                                                                                                                      |
| language    | Collection de textes | Liste de balises de langage, telles que définies dans la [RFC3282](https://tools.ietf.org/html/rfc3282), dans le champ d'en-tête Content-Language de la partie, le cas échéant. |
| location    | Text                 | URI, tel que défini dans la [RFC2557](https://tools.ietf.org/html/rfc2557), dans le champ d'en-tête Content-Location de la partie, le cas échéant.                              |
| subParts    | Collection d'objets  | Parties du corps de chaque enfant (collection d'objets _EmailBodyPart_)                                                                                                      |
| headers     | Collection d'objets  | Liste de tous les champs d'en-tête de la partie, dans leur ordre d'apparition de l'email (collection d'objets _EmailHeader_ voir propriété [headers](#headers-))             |

## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->**.bodyValues** : Object<!-- END REF -->

#### Description

La propriété `.bodyValues` contient l'<!-- REF #EmailObjectClass.bodyValues.Summary -->objet _EmailBodyValue_, contenant un objet pour chaque \\<partID\> de `bodyStructure` (facultatif)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).

L'objet `.bodyValues` contient les propriété suivantes :

| Propriété                                  | Type    | Valeur                                                                                                                                                                                     |
| ------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _partID_.value             | text    | Valeur de la partie body                                                                                                                                                                   |
| _partID_.isEncodingProblem | boolean | Vrai si des sections malformées sont identifiées durant le décodage du charset, si le charset est inconnu, ou si le content transfer-encoding est inconnu. Faux par défaut |

## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->**.cc** : Text<br/>**.cc** : Object<br/>**.cc** : Collection<!-- END REF -->

#### Description

La propriété `.cc` contient <!-- REF #EmailObjectClass.cc.Summary -->les adresse(s) email supplémentaire(s) des destinataires en Copie Carbone (CC) de l'email<!-- END REF -->.

## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->**.comments** : Text<!-- END REF -->

#### Description

La propriété `.comments` contient un <!-- REF #EmailObjectClass.comments.Summary -->header de commentaires supplémentaires<!-- END REF -->.

Les commentaires n'apparaissent que dans la zone d'en-tête du message (le body du message reste inchangé).

Pour les exigences propres au formatage, veuillez consulter la [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .from

<!-- REF #EmailObjectClass.from.Syntax -->**.from** : Text<br/>**.from** : Object<br/>**.from** : Collection<!-- END REF -->

#### Description

La propriété `.from` contient <!-- REF #EmailObjectClass.from.Summary -->[l'adresse ou les adresse(s) d'origine](#email-addresses) de l'email<!-- END REF -->.

Chaque email envoyé comporte à la fois les adresses du [sender](#sender) et du **from** :

- le domaine sender correspond à ce que le serveur de réception d'email obtient à l'ouverture de la session,
- l'adresse from correspond à ce que le(s) destinataire(s) visualise(nt).

Pour mieux livrer l'email, il est recommandé d'utiliser les mêmes adresses pour from et sender.

## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->**.headers** : Collection<!-- END REF -->

#### Description

La propriété `.headers` contient une collection <!-- REF #EmailObjectClass.headers.Summary -->d'objets `EmailHeader`, dans l'ordre où ils apparaissent dans le message<!-- END REF -->. Cette propriété permet aux utilisateurs d'ajouter des en-têtes extended (enregistrés) ou des en-têtes user-defined (non enregistrés, commençant par "X").

> Si une propriété d'objet `EmailHeader` définit un en-tête tel que "from" ou "cc" qui est déjà défini comme propriété au niveau du mail, la propriété `EmailHeader` est ignorée.

Chaque objet de la collection de headers peut contenir les propriétés suivantes :

| Propriété                                                                    | Type | Valeur                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].name  | text | (obligatoire) Nom du champ en-tête, tel que défini dans la [RFC#5322](https://tools.ietf.org/html/rfc5322). S'il est null ou indéfini, le champ en-tête n'est pas ajouté à l'en-tête MIME. |
| [].value | text | Valeur du champ d'en-tête telle que définie dans la [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                                                                           |

## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->**.htmlBody** : Text<!-- END REF -->

#### Description

La propriété `.htmlBody` contient la <!-- REF #EmailObjectClass.htmlBody.Summary -->représentation HTML du message électronique (jeu de caractères par défaut : UTF-8) (optionnel, SMTP uniquement)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).

## .id

<!-- REF #EmailObjectClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Description

[IMAP transporter](IMAPTransporterClass.md) uniquement.

La propriété `.id` contient l'<!-- REF #EmailObjectClass.id.Summary -->ID unique du serveur IMAP<!-- END REF -->.

## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->**.inReplyTo** : Text<!-- END REF -->

#### Description

La propriété `.inReplyTo` contient le ou les <!-- REF #EmailObjectClass.inReplyTo.Summary -->identifiant(s) du ou des messages originaux auquel/auxquels le message courant est une réponse<!-- END REF -->.

Pour les exigences propres au formatage, veuillez consulter la [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->**.keywords** : Object<!-- END REF -->

#### Description

La propriété `.keywords` contient un <!-- REF #EmailObjectClass.keywords.Summary -->ensemble de mots-clés sous forme d'objet, où chaque nom de propriété est un mot-clé et chaque valeur est mise à true<!-- END REF -->.

Cette propriété est l'en-tête "keywords" (voir la [RFC#4021](https://tools.ietf.org/html/rfc4021)).

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

La propriété `.messageId` contient un <!-- REF #EmailObjectClass.messageId.Summary -->header d'identification du message ("message-id")<!-- END REF -->.

Cet en-tête est généralement "desChiffresOuDesLettres@nomdededomaine", par exemple "abcdef.123456@4d.com". Cet identifiant unique est notamment utilisé sur les forums ou les listes de diffusion publiques. En général, les serveurs de messagerie ajoutent automatiquement cet en-tête aux messages qu'ils envoient.

## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->**.receivedAt** : Text<!-- END REF -->

#### Description

[IMAP transporter](IMAPTransporterClass.md) uniquement.

La propriété `.receivedAt` contient l'horodatage <!-- REF #EmailObjectClass.receivedAt.Summary -->de l'arrivée de l'email sur le serveur IMAP au format ISO 8601 UTC (ex : 2020-09-13T16:11:53Z)<!-- END REF -->.

## .references

<!-- REF #EmailObjectClass.references.Syntax -->**.references** : Collection<!-- END REF -->

#### Description

La propriété `.references` contient la <!-- REF #EmailObjectClass.references.Summary -->collection de tous les numéros d'identification des messages de la chaîne de réponse précédente<!-- END REF -->.

Pour les exigences propres au formatage, veuillez consulter la [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->**.replyTo** : Text<br/>**.replyTo** : Object<br/>**.replyTo** : Collection<!-- END REF -->

#### Description

La propriété `.replyTo` contient les <!-- REF #EmailObjectClass.replyTo.Summary -->[addresse(s)](#email-addresses) pour les réponses<!-- END REF -->.

## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->**.sendAt** : Text<!-- END REF -->

#### Description

La propriété `.sendAt` contient l'<!-- REF #EmailObjectClass.sendAt.Summary -->horodatage de l'email au format ISO 8601 UTC<!-- END REF -->.

## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->**.sender** : Text<br/>**.sender** : Object<br/>**.sender** : Collection<!-- END REF -->

#### Description

La propriété `.sender` contient <!-- REF #EmailObjectClass.sender.Summary -->[l'adresse ou les adresses](#email-addresses) source de l'email<!-- END REF -->.

Chaque email envoyé comporte à la fois les adresses du **sender** et du **[from](#from)** :

- le domaine sender correspond à ce que le serveur de réception d'email obtient à l'ouverture de la session,
- l'adresse from correspond à ce que le(s) destinataire(s) visualise(nt).

Pour mieux livrer l'email, il est recommandé d'utiliser les mêmes adresses pour from et sender.

## .size

<!-- REF #EmailObjectClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### Description

[IMAP transporter](IMAPTransporterClass.md) uniquement.

La propriété `.size` contient la <!-- REF #EmailObjectClass.size.Summary -->taille (exprimée en octets) de l'objet Email renvoyé par le serveur IMAP<!-- END REF -->.

## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->**.subject** : Text<!-- END REF -->

#### Description

La propriété `.subject` contient la <!-- REF #EmailObjectClass.subject.Summary -->description du sujet<!-- END REF -->.

## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->**.textBody** : Text<!-- END REF -->

#### Description

La propriété `.textBody` contient la <!-- REF #EmailObjectClass.textBody.Summary -->représentation en texte brut du message électronique (jeu de caractères par défaut : UTF-8) (optionnel, SMTP uniquement)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).

## .to

<!-- REF #EmailObjectClass.to.Syntax -->**.to** : Text<br/>**.to** : Object<br/>**.to** : Collection<!-- END REF -->

#### Description

La propriété `.to` contient <!-- REF #EmailObjectClass.to.Summary -->la ou les [adresse(s)](#email-addresses) des destinataires principaux de l'email<!-- END REF -->.

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

La commande `MAIL Convert from MIME` <!-- REF #_command_.MAIL Convert from MIME.Summary -->convertit un document MIME en un objet email valide<!-- END REF -->.

> Le format des objets Email de 4D suit la [spécification JMAP](https://jmap.io/spec-mail.html).

Passez dans _mime_ un document MIME valide à convertir. Il peut être fourni par tout type de serveur ou d'application de messagerie. Vous pouvez passer un BLOB ou un texte dans le paramètre _mime_. Si le MIME provient d'un fichier, il est recommandé d'utiliser un paramètre BLOB pour éviter les problèmes liés aux conversions de charset et de retours à la ligne.

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

La commande `MAIL Convert to MIME` <!-- REF #_command_.MAIL Convert to MIME.Summary -->convertit un objet email en texte MIME<!-- END REF -->. Cette commande est appelée en interne par [SMTP_transporter.send( )](API/SMTPTransporterClass.md#send) pour formater l'objet email avant de l'envoyer. Elle peut être utilisée pour analyser le format MIME de l'objet.

Dans _mail_, passez les éléments du contenu et de la structure de l'email à convertir. Cela inclut des informations telles que les adresses e-mail (expéditeur et destinataire(s)), le contenu de l'e-mail lui-même et son type d'affichage.

> Le format des objets Email de 4D suit la [spécification JMAP](https://jmap.io/spec-mail.html).

Dans _options_, vous pouvez configurer l'encodage et le charset du mail. Les propriétés suivantes sont disponibles :

| Propriété     | Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset et encodage utilisés pour les parties de mail suivantes : le sujet, les noms de fichiers joints et le nom du mail. Valeurs possibles :<table><tr><th>Constante</th><th>Valeur</th><th>Commentaire</th></tr><tr><td>Mode courrier ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII si possible, japonais (ISO-2022-JP) & Quoted-printable si possible, sinon UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII si possible, japonais (ISO-2022-JP) & 7-bit si possible, sinon UTF-8 & Quoted-printable</li></ul></td></tr><tr><td>mode courrier ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 & Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 & 8-bit</li></ul></td></tr><tr><td>mode courrier UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII si possible, sinon UTF-8 & Quoted-printable (**valeur par défaut**)</td></tr><tr><td>mode courrier UTF8 en base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII si possible, sinon UTF-8 & base64</td></tr></table> |
| bodyCharset   | Text | Charset et encodage utilisés pour le contenu html et le texte du body du mail. Valeurs possibles : Identiques à celles de headerCharset (voir ci-dessus)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

Si le paramètre _options_ est omis, la configuration mail mode UTF8 est utilisée pour les parties en-tête et corps.

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
