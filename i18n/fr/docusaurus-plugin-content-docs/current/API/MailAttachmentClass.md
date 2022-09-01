---
id: MailAttachmentClass
title: MailAttachment
---

Les objets pièces jointes permettent de référencer des fichiers dans un objet [`Email`](EmailObjectClass.md). Les objets Attachment (pièce jointe) sont créés à l'aide de la commande [`MAIL New attachment`](#mail-new-attachment).


### Objet Attachment

Les objets Attachment fournissent les propriétés et fonctions suivantes en lecture seule :


|                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.cid.Summary -->                            |
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.disposition.Summary -->    |
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.getContent().Summary -->   |
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.name.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.path.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.platformPath.Summary --> |
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.type.Summary -->                         |


## MAIL New attachment

<details><summary>Historique</summary>

| Version | Modifications                        |
| ------- | ------------------------------------ |
| v19 R2  | Accepte 4D.File, 4D.ZipFile, 4D.Blob |
</details>

<!-- REF #_command_.MAIL_New_attachment.Syntax -->

**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #_command_.MAIL_New_attachment.Params -->

| Paramètres  | Type              |    | Description                                                                        |
| ----------- | ----------------- |:--:| ---------------------------------------------------------------------------------- |
| file        | 4D.File           | -> | Fichier joint                                                                      |
| zipFile     | 4D.ZipFile        | -> | Fichier Zip joint                                                                  |
| blob        | 4D.Blob           | -> | Blob contenant la pièce jointe                                                     |
| path        | Text              | -> | Chemin de la pièce jointe                                                          |
| nom         | Text              | -> | Nom + extension utilisés par le client de messagerie pour désigner la pièce jointe |
| cid         | Text              | -> | ID de la pièce jointe (messages HTML uniquement) ou " " si aucun cid n'est requis  |
| type        | Text              | -> | Valeur de l'en-tête content-type                                                   |
| disposition | Text              | -> | Valeur de l'en-tête content-disposition : "inline" ou "attachment"                 |
| Result      | 4D.MailAttachment | <- | Attachment object|<!-- END REF -->                                       |


#### Description

The `MAIL New attachment` command <!-- REF #_command_.MAIL_New_attachment.Summary -->allows you to create an attachment object that you can add to an [Email object](EmailObjectClass.md#email-object)<!-- END REF -->.

Pour définir l'objet attachment, vous pouvez utiliser :

- un *file*, en passant un objet `4D.File` contenant le fichier joint.
- un *zipfile*, en passant un objet `4D.ZipFile` contenant le fichier joint.
- un *blob*, en passant un objet `4D.Blob` contenant la pièce jointe elle-même.
- un *path*, en passant une valeur de type **text** contenant le chemin d'accès du fichier joint, exprimé avec la syntaxe du système. Vous pouvez passer un nom de chemin complet ou un simple nom de fichier (auquel cas 4D recherchera le fichier dans le même répertoire que le fichier du projet).

Le paramètre facultatif *name* vous permet de passer le nom et l'extension à utiliser par le client de messagerie pour désigner la pièce jointe. Si le paramètre *name* est omis et que :

*   vous avez passé un chemin d'accès au fichier, le nom et l'extension du fichier sont utilisés,
*   vous avez passé un BLOB, un nom aléatoire sans extension est automatiquement généré.

Le paramètre facultatif *cid* vous permet de passer un ID interne pour la pièce jointe. Cet ID est la valeur de l'en-tête `Content-Id` et sera utilisé dans les messages HTML uniquement. The cid associates the attachment with a reference defined in the message body using an HTML tag such as `\&#060;img src="cid:ID"&#062;`. Cela signifie que le contenu de la pièce jointe (par exemple, une image) doit être affiché dans le message sur le client de messagerie. Le résultat final peut varier en fonction du client de messagerie. Vous pouvez passer une chaîne vide dans *cid* si vous ne souhaitez pas utiliser ce paramètre.

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

| Constante                   | Value        | Commentaire                                                                                                                                                                                                             |
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

#### Exemple 3

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

<details><summary>Historique</summary>

| Version | Modifications                        |
| ------- | ------------------------------------ |
| v19 R2  | Accepte 4D.File, 4D.ZipFile, 4D.Blob |
</details>

<!-- REF #4D.MailAttachment.new().Syntax -->

**4D.MailAttachment.new**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| Paramètres  | Type              |    | Description                                                                        |
| ----------- | ----------------- |:--:| ---------------------------------------------------------------------------------- |
| file        | 4D.File           | -> | Fichier joint                                                                      |
| zipFile     | 4D.ZipFile        | -> | Fichier Zip joint                                                                  |
| blob        | 4D.Blob           | -> | Blob contenant la pièce jointe                                                     |
| path        | Text              | -> | Chemin de la pièce jointe                                                          |
| nom         | Text              | -> | Nom + extension utilisés par le client de messagerie pour désigner la pièce jointe |
| cid         | Text              | -> | ID de la pièce jointe (messages HTML uniquement) ou " " si aucun cid n'est requis  |
| type        | Text              | -> | Valeur de l'en-tête content-type                                                   |
| disposition | Text              | -> | Valeur de l'en-tête content-disposition : "inline" ou "attachment"                 |
| Result      | 4D.MailAttachment | <- | Attachment object|<!-- END REF -->                                       |


#### Description

The `4D.MailAttachment.new()` function <!-- REF #4D.MailAttachment.new().Summary -->creates and returns a new object of the `4D.MailAttachment` type<!-- END REF -->. La fonction `4D.MailAttachment.new()` <!-- REF #4D.MailAttachment.new().Summary -->crée et retourne un nouvel objet de type `4D.MailAttachment`<!-- END REF -->.


## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->

**.cid** : Text<!-- END REF -->


#### Description

The `.cid` property contains <!-- REF #MailAttachmentClass.cid.Summary --> the ID of the attachment<!-- END REF -->. Cette propriété est utilisée uniquement dans les messages HTML. Si cette propriété est manquante, le fichier est géré comme une simple pièce jointe (lien).


## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->

**.disposition** : Text<!-- END REF -->


#### Description

The `.disposition` property contains <!-- REF #MailAttachmentClass.disposition.Summary -->the value of the `Content-Disposition` header<!-- END REF -->. .

*   "inline" : la pièce jointe est rendue dans le contenu du message, à l'emplacement "cid". Le rendu dépend du client de messagerie.
*   "attachment" : la pièce jointe est fournie sous forme de lien dans le message.


## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->

**.getContent()** : 4D.Blob<!-- END REF -->


<!-- REF #MailAttachmentClass.getContent().Params -->
| Paramètres | Type    |    | Description                                          |
| ---------- | ------- |:--:| ---------------------------------------------------- |
| Result     | 4D.Blob | <- | Content of the attachment|<!-- END REF --> |


#### Description

The `.getContent()` function <!-- REF #MailAttachmentClass.getContent().Summary -->returns the contents of the attachment object in a `4D.Blob` object<!-- END REF -->. Vous pouvez utiliser cette fonction avec les objets pièce jointe reçus par la commande [`MAIL Convert from MIME`](#mail-convert-from-mime).



## .name

<!-- REF #MailAttachmentClass.name.Syntax -->

**.name** : Text<!-- END REF -->


#### Description

The `.name` property contains <!-- REF #MailAttachmentClass.name.Summary -->the name and extension of the attachment<!-- END REF -->.  Par défaut, c'est le nom du fichier, sauf si un autre nom a été indiqué dans la commande [`MAIL New attachment`](#mail-new-attachment).

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->

**.path** : Text<!-- END REF -->


#### Description

The `.path` property contains <!-- REF #MailAttachmentClass.path.Summary -->the POSIX path of the attachment file, if it exists<!-- END REF -->.


## .platformPath

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19     | Ajoutées      |
</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->

**.platformPath** : Text<!-- END REF -->


#### Description

The `.platformPath` property returns <!-- REF #MailAttachmentClass.platformPath.Summary -->The `.platformPath` property returns<!-- END REF -->.


## .type

<!-- REF #MailAttachmentClass.type.Syntax -->

**.type** : Texte<!-- END REF -->


#### Description

The `.type` property contains <!-- REF #MailAttachmentClass.type.Summary -->the `content-type` of the attachment file<!-- END REF -->. Si ce type n'est pas explicitement passé à la commande [`MAIL New attachment`](#mail-new-attachment), le `content-type` est fondé sur son extension de fichier.
