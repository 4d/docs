---
id: mail-new-attachment
title: MAIL New attachment
slug: /commands/mail-new-attachment
displayed_sidebar: docs
---

<!--REF #_command_.MAIL New attachment.Syntax-->**MAIL New attachment** ( *value* {; *name* {; *cid* {; *type* {; *disposition*}}}} ) -> Résultat<!-- END REF-->
<!--REF #_command_.MAIL New attachment.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| value | Texte, BLOB, Objet | &#x1F852; | Object (4D.File, 4D.ZipFile, 4D.Blob), orPath of the attachment file (text), orBlob containing the attachment (BLOB) |
| name | Texte | &#x1F852; | Name + extension used by the mail client to designate the attachment |
| cid | Texte | &#x1F852; | ID of attachment (HTML messages only), or " " if no cid is required |
| type | Texte | &#x1F852; | Value of the content-type header |
| disposition | Texte | &#x1F852; | Value of the content-disposition header: "inline" or "attachment". |
| Résultat | Objet | &#x1F850; | Attachment object |

<!-- END REF-->

#### Description 

<!--REF #_command_.MAIL New attachment.Summary-->**Documentation déplacée**

La documentation de cette commande a été déplacée.<!-- END REF--> Consultez *developer.4d.com* pour obtenir une documentation à jour.

La commande **MAIL New attachment** permet de créer un objet pièce jointe que vous pouvez ajouter à un objet *Email* (voir *transporteur.send( )*)
