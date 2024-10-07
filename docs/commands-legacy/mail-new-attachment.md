---
id: mail-new-attachment
title: MAIL New attachment
slug: /commands/mail-new-attachment
displayed_sidebar: docs
---

<!--REF #_command_.MAIL New attachment.Syntax-->**MAIL New attachment** ( *value* {; *name* {; *cid* {; *type* {; *disposition*}}}} ) -> Function result<!-- END REF-->
<!--REF #_command_.MAIL New attachment.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| value | Text, Blob, Object | &srarr; | Object (4D.File, 4D.ZipFile, 4D.Blob), orPath of the attachment file (text), orBlob containing the attachment (BLOB) |
| name | Text | &srarr; | Name + extension used by the mail client to designate the attachment |
| cid | Text | &srarr; | ID of attachment (HTML messages only), or " " if no cid is required |
| type | Text | &srarr; | Value of the content-type header |
| disposition | Text | &srarr; | Value of the content-disposition header: "inline" or "attachment". |
| Function result | Object | &larr; | Attachment object |

<!-- END REF-->

#### Description 

<!--REF #_command_.MAIL New attachment.Summary-->**Documentation moved**

The documentation for this command has been moved.<!-- END REF--> Visit *developer.4d.com* for updated documentation.

The **MAIL New attachment** command allows you to create an attachment object that you can add to an *Email* object (see *transporter.send( )*)
