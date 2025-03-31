---
id: mail-convert-from-mime
title: MAIL Convert from MIME
displayed_sidebar: docs
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18      | Ajout         |

</details>

<!-- REF #_command_.MAIL Convert from MIME.Syntax -->**MAIL Convert from MIME**( *mime* : Blob ) : Object<br/>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL Convert from MIME.Params -->

| Paramètres | Type       |     | Description   |
| ---------- | ---------- | :-: | ------------- |
| mime       | Blob, Text |  →  | Email en MIME |
| Résultat   | Object     |  ←  | Objet email   |

<!-- END REF -->

#### Description

La commande `MAIL Convert from MIME` <!-- REF #_command_.MAIL Convert from MIME.Summary -->convertit un document MIME en un objet email valide<!-- END REF -->.

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

\| mime | BLOB, Text | →  | Email in MIME |
\| Function result | Object | ← | Email object |

#### Propriétés

|                    |                                                                 |
| ------------------ | --------------------------------------------------------------- |
| Numéro de commande | 1681                                                            |
| Thread safe        | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
