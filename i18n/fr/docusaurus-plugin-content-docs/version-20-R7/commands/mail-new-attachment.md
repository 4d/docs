---
id: mail-new-attachment
title: MAIL New attachment
displayed_sidebar: docs
---

<details><summary>Historique</summary>

| Release | Modifications                                                                        |
| ------- | ------------------------------------------------------------------------------------ |
| 19 R2   | Accepte 4D.File, 4D.ZipFile, 4D.Blob |

</details>

<!-- REF #_command_.MAIL New attachment.Syntax -->**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!--REF #_command_.MAIL New attachment.Params-->

| Paramètres  | Type                              |                                       | Description                                                                                          |
| ----------- | --------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Paramètres  | Type                              |                                       | Description                                                                                          |
| ***         | ***                               | :---: | ***                                                                                                  |
| file        | 4D.File           | →                                     | Fichier joint                                                                                        |
| zipFile     | 4D.ZipFile        | →                                     | Fichier Zip joint                                                                                    |
| blob        | 4D.Blob           | →                                     | Blob contenant la pièce jointe                                                                       |
| path        | Text                              | →                                     | Chemin de la pièce jointe                                                                            |
| name        | Text                              | →                                     | Nom + extension utilisés par le client de messagerie pour désigner la pièce jointe                   |
| cid         | Text                              | →                                     | ID de la pièce jointe (messages HTML uniquement) ou " " si aucun cid n'est requis |
| type        | Text                              | →                                     | Valeur de l'en-tête content-type                                                                     |
| disposition | Text                              | →                                     | Valeur de l'en-tête content-disposition : "inline" ou "attachment"                   |
| Résultat    | 4D.MailAttachment | ←                                     | Objet pièce jointe                                                                                   |

<!-- END REF-->

#### Description

La commande `MAIL New attachment` <!-- REF #_command_.MAIL New attachment.Summary -->vous permet de créer un objet pièce jointe que vous pouvez ajouter à un [objet Email](../API/EmailObjectClass.md#email-object)<!-- END REF -->.

Pour définir l'objet attachment, vous pouvez utiliser :

- un *file*, en passant un objet `4D.File` contenant le fichier joint.
- un *zipfile*, en passant un objet `4D.ZipFile` contenant le fichier joint.
- un *blob*, en passant un objet `4D.Blob` contenant la pièce jointe elle-même.
- un *path*, en passant une valeur de type **text** contenant le chemin d'accès du fichier joint, exprimé avec la syntaxe du système. Vous pouvez passer un nom de chemin complet ou un simple nom de fichier (auquel cas 4D recherchera le fichier dans le même répertoire que le fichier du projet).

Le paramètre facultatif *name* vous permet de passer le nom et l'extension à utiliser par le client de messagerie pour désigner la pièce jointe. Si le paramètre *name* est omis et que :

- vous avez passé un chemin d'accès au fichier, le nom et l'extension du fichier sont utilisés,
- vous avez passé un BLOB, un nom aléatoire sans extension est automatiquement généré.

Le paramètre facultatif *cid* vous permet de passer un ID interne pour la pièce jointe. Cet ID est la valeur de l'en-tête `Content-Id` et sera utilisé dans les messages HTML uniquement. Le cid associe la pièce jointe à une référence définie dans le corps du message à l'aide d'une balise HTML telle que `\<img src="cid:ID">`. Cela signifie que le contenu de la pièce jointe (par exemple, une image) doit être affiché dans le message sur le client de messagerie. Le résultat final peut varier en fonction du client de messagerie. Vous pouvez passer une chaîne vide dans *cid* si vous ne souhaitez pas utiliser ce paramètre.

Vous pouvez utiliser le paramètre optionnel *type* pour définir explicitement le `content-type` du fichier joint. Par exemple, vous pouvez passer une chaîne définissant un type MIME ("video/mpeg"). Cette valeur de content-type sera définie pour la pièce jointe, quelle que soit son extension. Pour plus d'informations sur les types MIME, veuillez vous référer à [la page type MIME sur Wikipedia](https://en.wikipedia.org/wiki/MIME).

Par défaut, si le paramètre *type* est omis ou contient une chaîne vide, le `content-type` du fichier joint est basé sur son extension. Les règles suivantes sont appliquées pour les principaux types MIME :

| Extension | Content Type                                  |
| --------- | --------------------------------------------- |
| jpg, jpeg | image/jpeg                                    |
| png       | image/png                                     |
| gif       | image/gif                                     |
| pdf       | application/pdf                               |
| doc       | application/msword                            |
| xls       | application/vnd.ms-excel      |
| ppt       | application/vnd.ms-powerpoint |
| zip       | application/zip                               |
| gz        | application/gzip                              |
| json      | application/json                              |
| js        | application/javascript                        |
| ps        | application/postscript                        |
| xml       | application/xml                               |
| htm, html | text/html                                     |
| mp3       | audio/mpeg                                    |
| *other*   | application/octet-stream                      |

Le paramètre facultatif *disposition* vous permet de passer l'en-tête `content-disposition` de la pièce jointe. Vous pouvez passer l'une des constantes suivantes du thème de constantes "Mail" :

| Constante                   | Valeur       | Commentaire                                                                                                                                                                                                                                             |
| --------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Définissez la valeur de l'en-tête Content-disposition sur "attachment", ce qui signifie que le fichier joint doit être fourni sous forme de lien dans le message.                                                                       |
| mail disposition inline     | "inline"     | Définissez la valeur de l'en-tête Content-disposition sur "inline", ce qui signifie que la pièce jointe doit être rendue dans le contenu du message, à l'emplacement du "cid". Le rendu dépend du client de messagerie. |

Par défaut, si le paramètre *disposition* est omis :

- si le paramètre *cid* est utilisé, l'en-tête `Content-disposition` est défini sur "inline",
- si le paramètre *cid* n'est pas passé ou est vide, l'en-tête `Content-disposition` est fixé à "attachment".

#### Exemple 1

Vous souhaitez envoyer un e-mail avec un fichier sélectionné par l'utilisateur comme pièce jointe et une image intégrée dans le corps HTML :

```4d
$doc:=Select document("";"*";"Please select a file to attach";0)
If (OK=1) //If a document was selected

var $email;$server;$transporter : Object

$server:=New object
$server.host:="smtp.mail.com"
$server.user:="test_user@mail.com"
$server.password:="p@ssw@rd"
$transporter:=SMTP New transporter($server)

$email:=New object
$email.from:="test_user@mail.com"
$email.to:="test_user@mail.com"
$email.subject:="This is a test message with attachments"

//add a link to download file
$email.attachments:=New collection(MAIL New attachment(Document))
//insert an inline picture (use a cid)
$email.attachments[1]:=MAIL New attachment("c:\\Pictures\\4D.jpg";"";"4D")

$email.htmlBody:="<html>"+\
"<body>Hello World!"+\
"<img src='cid:4D' >"+\
"</body>"+\
"</head>"+\
"</html>"

$transporter.send($email) //send mail

End if
```

#### Exemple 2

Vous voulez envoyer un e-mail avec une zone 4D Write Pro en pièce jointe :

```4d
var $blob : blob
WP EXPORT VARIABLE(WPArea;$blob;wk docx)

var $email;$server;$transporter : Object

$server:=New object
$server.host:="smtp.mail.com"
$server.user:="user@mail.com"
$server.password:="p@ssw@rd"
$transporter:=SMTP New transporter($server)

$email:=New object
$email.from:="user@mail.com"
$email.to:="customer@mail.com"
$email.subject:="New annual report"
$email.textBody:="Please find enclosed our latest annual report."
$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))

$transporter.send($email)
```
