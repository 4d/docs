---
id: EmailObjectClass
title: Email
---

La création, l'envoi et la réception d'emails dans 4D s'effectuent par l'intermédiaire des objets `Email`.

Des objets `Email` sont créés lorsque vous recevez des emails via une fonction de classe *transporter* :

- IMAP - fonctions [`.getMail()`](IMAPTransporterClass.md#getmail) and [`.getMails()`](IMAPTransporterClass.md#getmails) pour obtenir des emails à partir d'un serveur IMAP
- POP3 - fonction [`.getMail()`](POP3TransporterClass.md#getmail) pour obtenir un email à partir d'un serveur POP3.

> Vous pouvez également créer un nouvel objet vide `Email` et le remplir avec les propriétés de l'objet [Email](#email-object).

Vous envoyez des objets `Email` à l'aide de la fonction SMTP [`send()`](SMTPTransporterClass.md#send).

Les commandes [`MAIL Convert from MIME`](../commands/mail-convert-from-mime.md) et [`MAIL Convert to MIME`](../commands/mail-convert-to-mime.md) peuvent être utilisées pour convertir les objets `Email` vers et depuis des contenus MIME.

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
- un seul nom d'affichage+courriel : "Somebody<somebody@domain.com>"
- plusieurs courriels : "Somebody <somebody@domain.com>,me@home.org"

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

La propriété `.bodyStructure` contient l'<!-- REF #EmailObjectClass.bodyStructure.Summary -->objet *EmailBodyPart*, c'est-à-dire la structure MIME complète du body du message (facultatif)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).

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
| subParts    | Collection d'objets  | Parties du corps de chaque enfant (collection d'objets *EmailBodyPart*)                                                                                                      |
| headers     | Collection d'objets  | Liste de tous les champs d'en-tête de la partie, dans leur ordre d'apparition de l'email (collection d'objets *EmailHeader* voir propriété [headers](#headers-))             |

## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->**.bodyValues** : Object<!-- END REF -->

#### Description

La propriété `.bodyValues` contient l'<!-- REF #EmailObjectClass.bodyValues.Summary -->objet *EmailBodyValue*, contenant un objet pour chaque \<partID\> de `bodyStructure` (facultatif)<!-- END REF -->. Voir section [Traitement du body](#traitement-du-body).

L'objet `.bodyValues` contient les propriété suivantes :

| Propriété                                  | Type    | Valeur                                                                                                                                                                                     |
| ------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| *partID*.value             | text    | Valeur de la partie body                                                                                                                                                                   |
| *partID*.isEncodingProblem | boolean | Vrai si des sections malformées sont identifiées durant le décodage du charset, si le charset est inconnu, ou si le content transfer-encoding est inconnu. Faux par défaut |

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

| Propriété                                               | Type    | Valeur                                                                           |
| ------------------------------------------------------- | ------- | -------------------------------------------------------------------------------- |
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
