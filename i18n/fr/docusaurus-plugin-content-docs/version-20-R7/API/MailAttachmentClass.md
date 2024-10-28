---
id: MailAttachmentClass
title: MailAttachment
---

Les objets Attachment (pièce jointe) permettent de référencer des fichiers dans un objet [`Email`](EmailObjectClass.md). Attachment objects are created using the [`MAIL New attachment`](../commands/mail-new-attachment.md) command.

### Objet Attachment

Les objets Attachment fournissent les propriétés et fonctions suivantes en lecture seule :

|                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)<br/><!-- INCLUDE #MailAttachmentClass.cid.Summary -->                            |
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)<br/><!-- INCLUDE #MailAttachmentClass.disposition.Summary -->    |
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)<br/><!-- INCLUDE #MailAttachmentClass.getContent().Summary -->   |
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)<br/><!-- INCLUDE #MailAttachmentClass.name.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)<br/><!-- INCLUDE #MailAttachmentClass.path.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #MailAttachmentClass.platformPath.Summary --> |
| [<!-- INCLUDE #MailAttachmentClass.size.Syntax -->](#size)<br/><!-- INCLUDE #MailAttachmentClass.size.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)<br/><!-- INCLUDE #MailAttachmentClass.type.Summary -->                         |

## 4D.MailAttachment.new()

<details><summary>Historique</summary>

| Release | Modifications                                                                        |
| ------- | ------------------------------------------------------------------------------------ |
| 19 R2   | Accepte 4D.File, 4D.ZipFile, 4D.Blob |

</details>

<!-- REF #4D.MailAttachment.new().Syntax -->**4D.MailAttachment.new**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| Paramètres  | Type                              |                             | Description                                                                                          |
| ----------- | --------------------------------- | :-------------------------: | ---------------------------------------------------------------------------------------------------- |
| file        | 4D.File           |              ->             | Fichier joint                                                                                        |
| zipFile     | 4D.ZipFile        |              ->             | Fichier Zip joint                                                                                    |
| blob        | 4D.Blob           |              ->             | Blob contenant la pièce jointe                                                                       |
| path        | Text                              |              ->             | Chemin de la pièce jointe                                                                            |
| name        | Text                              |              ->             | Nom + extension utilisés par le client de messagerie pour désigner la pièce jointe                   |
| cid         | Text                              |              ->             | ID de la pièce jointe (messages HTML uniquement) ou " " si aucun cid n'est requis |
| type        | Text                              |              ->             | Valeur de l'en-tête content-type                                                                     |
| disposition | Text                              |              ->             | Valeur de l'en-tête content-disposition : "inline" ou "attachment"                   |
| Résultat    | 4D.MailAttachment | <- | Objet pièce jointe                                                                                   |

<!-- END REF -->

#### Description

La fonction `4D.MailAttachment.new()` <!-- REF #4D.MailAttachment.new().Summary -->crée et retourne un nouvel objet de type `4D.MailAttachment`<!-- END REF -->. It is identical to the [`MAIL New attachment`](../commands/mail-new-attachment.md) command (shortcut).

## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->**.cid** : Text<!-- END REF -->

#### Description

La propriété `.cid` contient <!-- REF #MailAttachmentClass.cid.Summary --> l'ID de la pièce jointe<!-- END REF -->. Cette propriété est utilisée uniquement dans les messages HTML. Si cette propriété est manquante, le fichier est géré comme une simple pièce jointe (lien).

## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->**.disposition** : Text<!-- END REF -->

#### Description

La propriété `.disposition` contient <!-- REF #MailAttachmentClass.disposition.Summary -->la valeur de l'en-tête `Content-Disposition`<!-- END REF -->. .

- "inline" : la pièce jointe est rendue dans le contenu du message, à l'emplacement "cid". Le rendu dépend du client de messagerie.
- "attachment" : la pièce jointe est fournie sous forme de lien dans le message.

## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->**.getContent()** : 4D.Blob<!-- END REF -->

<!-- REF #MailAttachmentClass.getContent().Params -->

| Paramètres | Type                    |                             | Description                |
| ---------- | ----------------------- | :-------------------------: | -------------------------- |
| Résultat   | 4D.Blob | <- | Contenu de la pièce jointe |

<!-- END REF -->

#### Description

La fonction `.getContent()` <!-- REF #MailAttachmentClass.getContent().Summary -->retourne le contenu de l'objet pièce jointe dans un objet `4D.Blob`<!-- END REF -->. Vous pouvez utiliser cette fonction avec les objets pièce jointe reçus par la commande [`MAIL Convert from MIME`](EmailObjectClass.md#mail-convert-from-mime).

## .name

<!-- REF #MailAttachmentClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Description

La propriété `.name` contient <!-- REF #MailAttachmentClass.name.Summary -->le nom et l'extension de la pièce jointe<!-- END REF -->.  By default, it is the name of the file, unless another name was specified in the [`MAIL New attachment`](../commands/mail-new-attachment.md) command.

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Description

La propriété `.path` contient <!-- REF #MailAttachmentClass.path.Summary -->le chemin POSIX du fichier joint, s'il existe<!-- END REF -->.

## .platformPath

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19      | Ajout         |

</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Description

La propriété `.platformPath` retourne <!-- REF #MailAttachmentClass.platformPath.Summary -->le chemin du fichier joint exprimé dans la syntaxe de la plate-forme courante<!-- END REF -->.

## .size

<!-- REF #MailAttachmentClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### Description

La propriété `.size` contient <!-- REF #MailAttachmentClass.size.Summary -->la valeur de l'en-tête `size` du fichier de la pièce jointe<!-- END REF -->. La propriété `.size` est renvoyée lorsque le message MIME définit un en-tête de taille dans la partie pièce jointe.

## .type

<!-- REF #MailAttachmentClass.type.Syntax -->**.type** : Text<!-- END REF -->

#### Description

La propriété `.type` contient <!-- REF #MailAttachmentClass.type.Summary -->le `content-type` du fichier de la pièce jointe<!-- END REF -->. If this type is not explicitly passed to the [`MAIL New attachment`](../commands/mail-new-attachment.md) command, the `content-type` is based on its file extension.
