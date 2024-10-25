---
id: mail-new-attachment
title: MAIL New attachment
displayed_sidebar: docs
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R2|Accepts 4D.File, 4D.ZipFile, 4D.Blob
</details>


<!-- REF #_command_.MAIL New attachment.Syntax -->**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!--REF #_command_.MAIL New attachment.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
|Parameter|Type||Description|
|---------|--- |:---:|------|
|file|4D.File|&#8594; |Attachment file|
|zipFile|4D.ZipFile|&#8594; |Attachment Zipfile|
|blob|4D.Blob|&#8594; |BLOB containing the attachment|
|path|Text|&#8594; |Path of the attachment file|
|name|Text|&#8594; |Name + extension used by the mail client to designate the attachment|
|cid|Text|&#8594; |ID of attachment (HTML messages only), or " " if no cid is required|
|type|Text|&#8594; |Value of the content-type header|
|disposition|Text|&#8594; |Value of the content-disposition header: "inline" or "attachment".|
|Result|4D.MailAttachment|&#8592;|Attachment object|
<!-- END REF-->


#### Description

The `MAIL New attachment` command <!-- REF #_command_.MAIL New attachment.Summary -->allows you to create an attachment object that you can add to an [Email object](../API/EmailObjectClass.md#email-object)<!-- END REF -->.

To define the attachment, you can use:

- a *file*, pass a `4D.File` object containing the attachment file.
- a *zipfile*, pass a `4D.ZipFile` object containing the attachment file.
- a *blob*, pass a `4D.Blob` object containing the attachment itself.
- a *path*, pass a **text** value containing the path of the attachment file, expressed with the system syntax. You can pass a full path name or a simple file name (in which case 4D will search for the file in the same directory as the project file).

The optional *name* parameter lets you pass the name and extension to be used by the mail client to designate the attachment. If *name* is omitted and:

*	you passed a file path, the name and extension of the file is used,
*	you passed a BLOB, a random name without extension is automatically generated.

The optional *cid* parameter lets you pass an internal ID for the attachment. This ID is the value of the `Content-Id` header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as `\<img src="cid:ID">`. This means that the contents of the attachment (e.g., a picture) should be displayed within the message on the mail client. The final result may vary depending on the mail client. You can pass an empty string in *cid* if you do not want to use this parameter.

You can use the optional *type* parameter to explicitly set the `content-type` of the attachment file. For example, you can pass a string defining a MIME type ("video/mpeg"). This content-type value will be set for the attachment, regardless of its extension. For more information about MIME types, please refer to the [MIME type page on Wikipedia](https://en.wikipedia.org/wiki/MIME).

By default, if the *type* parameter is omitted or contains an empty string, the `content-type` of the attachment file is based on its extension. The following rules are applied for the main MIME types:

|Extension|	Content Type|
|---|---|
|jpg, jpeg|	image/jpeg|
|png|	image/png|
|gif|	image/gif|
|pdf|	application/pdf|
|doc|	application/msword|
|xls|	application/vnd.ms-excel|
|ppt|	application/vnd.ms-powerpoint|
|zip|	application/zip|
|gz|	application/gzip|
|json|	application/json|
|js|	application/javascript|
|ps|	application/postscript|
|xml|	application/xml|
|htm, html|	text/html|
|mp3|	audio/mpeg|
|*other*|	application/octet-stream|

The optional *disposition* parameter lets you pass the `content-disposition` header of the attachment. You can pass one of the following constants from the "Mail" constant theme:

|Constant|Value|Comment|
|---|---|---|
|mail disposition attachment|"attachment"|Set the Content-disposition header value to "attachment", which means that the attachment file must be provided as a link in the message.|
|mail disposition inline|"inline"|Set the Content-disposition header value to "inline", which means that the attachment must be rendered within the message contents, at the "cid" location. The rendering depends on the mail client.|

By default, if the *disposition* parameter is omitted:

*	if the *cid* parameter is used, the `Content-disposition` header is set to "inline",
*	if the *cid* parameter is not passed or empty, the `Content-disposition` header is set to "attachment".

#### Example 1

You want to send an email with a user-selected file as an attachment and an image embedded in the HTML body:

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

#### Example 2

You want to send an email with a 4D Write Pro area as an attachment:

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
