---
id: mail-new-attachment
title: MAIL New attachment
displayed_sidebar: docs
---

<!--REF #_command_.MAIL New attachment.Syntax-->**MAIL New attachment** ( *value* {; *name* {; *cid* {; *type* {; *disposition*}}}} ) -> Function result<!-- END REF-->
<!--REF #_command_.MAIL New attachment.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| value | Text, BLOB, Object | -> | Object (4D.File, 4D.ZipFile, 4D.Blob), orPath of the attachment file (text), orBlob containing the attachment (BLOB) |
| name | Text | -> | Name + extension used by the mail client to designate the attachment |
| cid | Text | -> | ID of attachment (HTML messages only), or " " if no cid is required |
| type | Text | -> | Value of the content-type header |
| disposition | Text | -> | Value of the content-disposition header: "inline" or "attachment". |
| Function result | Object | <- | Attachment object |

<!-- END REF-->

#### Description 



**Documentation moved**

The documentation for this command has been moved. Visit [developer.4d.com](https://developer.4d.com/docs/API/MailAttachmentClass.html#mail-new-attachment) for updated documentation.

The **MAIL New attachment** command allows you to create an attachment object that you can add to an *Email* object (see [transporter.send( )](/4Dv20R6/4D/17-R4/transportersend.305-4071865.en.html))
