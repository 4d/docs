---
id: MailAttachmentClass
title: MailAttachment
---

Les objets pièces jointes permettent de référencer des fichiers dans un objet [`Email`](EmailObjectClass.md). Les objets Attachment (pièce jointe) sont créés à l'aide de la commande [`MAIL New attachment`](#mail-new-attachment).


### Objet Attachment

Les objets Attachment fournissent les propriétés et fonctions suivantes en lecture seule :


|                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.cid.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.disposition.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.getContent().Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.name.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.path.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.platformPath.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.type.Summary -->|


## MAIL New attachment

<!-- REF #_command_.MAIL_New_attachment.Syntax -->
**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br>**MAIL New attachment**( *blob* : Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #_command_.MAIL_New_attachment.Params -->

| Paramètres  | Type              |    | Description                                                          |
| ----------- | ----------------- |:--:| -------------------------------------------------------------------- |
| path        | Text              | -> | Path of the attachment file                                          |
| blob        | Blob              | -> | BLOB containing the attachment                                       |
| name        | Text              | -> | Name + extension used by the mail client to designate the attachment |
| cid         | Text              | -> | ID of attachment (HTML messages only), or " " if no cid is required  |
| type        | Text              | -> | Value of the content-type header                                     |
| disposition | Text              | -> | Value of the content-disposition header: "inline" or "attachment".   |
| Résultat    | 4D.MailAttachment | <- | Attachment object                                                    |
<!-- END REF -->


#### Description

The `MAIL New attachment` command <!-- REF #_command_.MAIL_New_attachment.Summary -->allows you to create an attachment object that you can add to an [Email object](EmailObjectClass.md#email-object)<!-- END REF -->.

Vous pouvez passer un chemin ou un Blob pour définir la pièce jointe.

- Si vous utilisez un *chemin*, passez une valeur **text** contenant le chemin du fichier joint, exprimé avec la syntaxe système. Vous pouvez passer un nom de chemin complet ou un simple nom de fichier (auquel cas 4D recherchera le fichier dans le même répertoire que le fichier du projet).

- Si vous utilisez un *blob*, passez une valeur **BLOB** contenant le fichier joint.

Le paramètre facultatif *name* vous permet de passer le nom et l'extension à utiliser par le client de messagerie pour désigner la pièce jointe. Si le paramètre *name* est omis et que :

*   vous avez passé un chemin d'accès au fichier, le nom et l'extension du fichier sont utilisés,
*   vous avez passé un BLOB, un nom aléatoire sans extension est automatiquement généré.

Le paramètre facultatif *cid* vous permet de passer un ID interne pour la pièce jointe. Cet ID est la valeur de l'en-tête `Content-Id` et sera utilisé dans les messages HTML uniquement. Le cid associe la pièce jointe à une référence définie dans le corps du message à l'aide d'une balise HTML telle que `\<img src="cid:ID">`. Cela signifie que le contenu de la pièce jointe (par exemple, une image) doit être affiché dans le message sur le client de messagerie. Le résultat final peut varier en fonction du client de messagerie. Vous pouvez passer une chaîne vide dans *cid* si vous ne souhaitez pas utiliser ce paramètre.

Vous pouvez utiliser le paramètre optionnel *type* pour définir explicitement le `content-type` du fichier joint. Par exemple, vous pouvez passer une chaîne définissant un type MIME ("video/mpeg"). Cette valeur de content-type sera définie pour la pièce jointe, quelle que soit son extension. Pour plus d'informations sur les types MIME, veuillez vous référer à [la page type MIME sur Wikipedia](https://en.wikipedia.org/wiki/MIME).

Par défaut, si le paramètre *type* est omis ou contient une chaîne vide, le `content-type` du fichier joint est basé sur son extension. Les règles suivantes sont appliquées pour les principaux types MIME :

| Extension | Content Type                  |
| --------- | ----------------------------- |
| jpg, jpeg | image/jpeg                    |
| png       | image/png                     |
| gif       | image/gif                     |
| pdf       | application/pdf               |
| doc       | application/msword            |
| xls       | application/vnd.ms-excel      |
| ppt       | application/vnd.ms-powerpoint |
| zip       | application/zip               |
| gz        | application/gzip              |
| json      | application/json              |
| js        | application/javascript        |
| ps        | application/postscript        |
| xml       | application/xml               |
| htm, html | text/html                     |
| mp3       | audio/mpeg                    |
| *other*   | application/octet-stream      |

Le paramètre facultatif *disposition* vous permet de passer l'en-tête `content-disposition` de la pièce jointe. Vous pouvez passer l'une des constantes suivantes du thème de constantes "Mail" :

| Constant                    | Valeur       | Commentaire                                                                                                                                                                                                             |
| --------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Définissez la valeur de l'en-tête Content-disposition sur "attachment", ce qui signifie que le fichier joint doit être fourni sous forme de lien dans le message.                                                       |
| mail disposition inline     | "inline"     | Définissez la valeur de l'en-tête Content-disposition sur "inline", ce qui signifie que la pièce jointe doit être rendue dans le contenu du message, à l'emplacement du "cid". Le rendu dépend du client de messagerie. |

Par défaut, si le paramètre *disposition* est omis :

*   si le paramètre *cid* est utilisé, l'en-tête `Content-disposition` est défini sur "inline",
*   si le paramètre *cid* n'est pas passé ou est vide, l'en-tête `Content-disposition` est fixé à "attachment".

#### Exemple 1

Vous souhaitez envoyer un e-mail avec un fichier sélectionné par l'utilisateur comme pièce jointe et une image intégrée dans le corps HTML :

```4d
$doc:=Select document("";"*";"Please select a file to attach";0)
If (OK=1) //If a document was selected

C_OBJECT($email;$server;$transporter)

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

$transporter.send($email) //envoyer e-mail

End if
```

#### Exemple 2

Vous voulez envoyer un e-mail avec une zone 4D Write Pro en pièce jointe :

```4d
C_BLOB($blob)
WP EXPORT VARIABLE(WPArea;$blob;wk docx)

C_OBJECT($email;$server;$transporter)

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


## 4D.MailAttachment.new()


<!-- REF #4D.MailAttachment.new().Syntax -->
**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br>**4D.MailAttachment.new**( *blob* : Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| Paramètres  | Type              |    | Description                                                          |
| ----------- | ----------------- |:--:| -------------------------------------------------------------------- |
| path        | Text              | -> | Path of the attachment file                                          |
| blob        | Blob              | -> | BLOB containing the attachment                                       |
| name        | Text              | -> | Name + extension used by the mail client to designate the attachment |
| cid         | Text              | -> | ID of attachment (HTML messages only), or " " if no cid is required  |
| type        | Text              | -> | Value of the content-type header                                     |
| disposition | Text              | -> | Value of the content-disposition header: "inline" or "attachment".   |
| Résultat    | 4D.MailAttachment | <- | Attachment object                                                    |
<!-- END REF -->

#### Description

The `4D.MailAttachment.new()` function <!-- REF #4D.MailAttachment.new().Summary -->creates and returns a new object of the `4D.MailAttachment` type<!-- END REF -->. It is identical to the [`MAIL New attachment`](#mail-new-attachment) command (shortcut).


## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->
**.cid** : Text<!-- END REF -->


#### Description

The `.cid` property contains <!-- REF #MailAttachmentClass.cid.Summary --> the ID of the attachment<!-- END REF -->. This property is used in HTML messages only. If this property is missing, the file is handled as a simple attachment (link).


## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->
**.disposition** : Text<!-- END REF -->


#### Description

The `.disposition` property contains <!-- REF #MailAttachmentClass.disposition.Summary -->the value of the `Content-Disposition` header<!-- END REF -->. Deux valeurs sont disponibles :

*   "inline" : la pièce jointe est rendue dans le contenu du message, à l'emplacement "cid". Le rendu dépend du client de messagerie.
*   "attachment" : la pièce jointe est fournie sous forme de lien dans le message.


## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->
**.getContent()** : Blob<!-- END REF -->

<!-- REF #MailAttachmentClass.getContent().Params -->
| Paramètres | Type |    | Description               |
| ---------- | ---- |:--:| ------------------------- |
| Résultat   | Blob | <- | Content of the attachment |
<!-- END REF -->


#### Description

La fonction `.getContent()` <!-- REF #MailAttachmentClass.getContent().Summary -->retourne le contenu de l'objet pièce jointe dans un BLOB<!-- END REF -->. You can use this method with attachment objects received by the [`MAIL Convert from MIME`](#mail-convert-from-mime) command.



## .name

<!-- REF #MailAttachmentClass.name.Syntax -->
**.name** : Text<!-- END REF -->


#### Description

The `.name` property contains <!-- REF #MailAttachmentClass.name.Summary -->the name and extension of the attachment<!-- END REF -->.  By default, it is the name of the file, unless another name was specified in the [`MAIL New attachment`](#mail-new-attachment) command.

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->
**.path** : Text<!-- END REF -->


#### Description

The `.path` property contains <!-- REF #MailAttachmentClass.path.Summary -->the POSIX path of the attachment file, if it exists<!-- END REF -->.


## .platformPath

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19     | Ajout         |
</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->
**.platformPath** : Text<!-- END REF -->


#### Description

The `.platformPath` property returns <!-- REF #MailAttachmentClass.platformPath.Summary -->the path of the attachment file expressed with the current platform syntax<!-- END REF -->.


## .type

<!-- REF #MailAttachmentClass.type.Syntax -->
**.type** : Texte<!-- END REF -->


#### Description

The `.type` property contains <!-- REF #MailAttachmentClass.type.Summary -->the `content-type` of the attachment file<!-- END REF -->. If this type is not explicitly passed to the [`MAIL New attachment`](#mail-new-attachment) command, the `content-type` is based on its file extension.



<style> h2 { background: #d9ebff;}</style>
