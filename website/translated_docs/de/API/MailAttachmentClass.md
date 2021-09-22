---
id: MailAttachmentClass
title: MailAttachment
---

Attachment objects allow referencing files within a [`Email`](EmailObjectClass.md) object. Attachment objects are created using the [`MAIL New attachment`](#mail-new-attachment) command.


### Attachment Object

Attachment objects provide the following read-only properties and functions:


|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.cid** : Text](#cid)<p>&nbsp;&nbsp;&nbsp;&nbsp; the ID of the attachment                                                                    |
| [**.disposition** : Text](#disposition)<p>&nbsp;&nbsp;&nbsp;&nbsp;the value of the `Content-Disposition` header                                |
| [**.getContent()** : 4D.Blob](#getcontent)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the contents of the attachment object in a `4D.Blob` object       |
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name and extension of the attachment                                                   |
| [**.path** : Text](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;the POSIX path of the attachment file, if it exists                                        |
| [**.platformPath** : Text](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the attachment file expressed with the current platform syntax |
| [**.type** : Text](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;the `content-type` of the attachment file                                                  |


## MAIL New attachment

<details><summary>History</summary>
| Version | Changes                              |
| ------- | ------------------------------------ |
| v19 R2  | Accepts 4D.File, 4D.ZipFile, 4D.Blob |
</details>

**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment

| Parameter   | Typ               |    | Beschreibung                                                         |
| ----------- | ----------------- |:--:| -------------------------------------------------------------------- |
| file        | 4D.File           | -> | Attachment file                                                      |
| zipFile     | 4D.ZipFile        | -> | Attachment Zipfile                                                   |
| blob        | 4D.Blob           | -> | BLOB containing the attachment                                       |
| path        | Text              | -> | Path of the attachment file                                          |
| name        | Text              | -> | Name + extension used by the mail client to designate the attachment |
| cid         | Text              | -> | ID of attachment (HTML messages only), or " " if no cid is required  |
| type        | Text              | -> | Value of the content-type header                                     |
| disposition | Text              | -> | Value of the content-disposition header: "inline" or "attachment".   |
| Ergebnis    | 4D.MailAttachment | <- | Attachment object                                                    |


#### Beschreibung

The `MAIL New attachment` command allows you to create an attachment object that you can add to an [Email object](EmailObjectClass.md#email-object).

To define the attachment, you can use:

- a *file*, pass a `4D.File` object containing the attachment file.
- a *zipfile*, pass a `4D.ZipFile` object containing the attachment file.
- a *blob*, pass a `4D.Blob` object containing the attachment itself.
- a *path*, pass a **text** value containing the path of the attachment file, expressed with the system syntax. You can pass a full path name or a simple file name (in which case 4D will search for the file in the same directory as the project file).

The optional *name* parameter lets you pass the name and extension to be used by the mail client to designate the attachment. If *name* is omitted and:

*   you passed a file path, the name and extension of the file is used,
*   you passed a BLOB, a random name without extension is automatically generated.

The optional *cid* parameter lets you pass an internal ID for the attachment. This ID is the value of the `Content-Id` header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as `\<img src="cid:ID">`. This means that the contents of the attachment (e.g., a picture) should be displayed within the message on the mail client. The final result may vary depending on the mail client. You can pass an empty string in *cid* if you do not want to use this parameter.

You can use the optional *type* parameter to explicitly set the `content-type` of the attachment file. For example, you can pass a string defining a MIME type ("video/mpeg"). This content-type value will be set for the attachment, regardless of its extension. For more information about MIME types, please refer to the [MIME type page on Wikipedia](https://en.wikipedia.org/wiki/MIME).

By default, if the *type* parameter is omitted or contains an empty string, the `content-type` of the attachment file is based on its extension. The following rules are applied for the main MIME types:

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

The optional *disposition* parameter lets you pass the `content-disposition` header of the attachment. You can pass one of the following constants from the "Mail" constant theme:

| Constant                    | Wert         | Kommentar                                                                                                                                                                                            |
| --------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Set the Content-disposition header value to "attachment", which means that the attachment file must be provided as a link in the message.                                                            |
| mail disposition inline     | "inline"     | Set the Content-disposition header value to "inline", which means that the attachment must be rendered within the message contents, at the "cid" location. The rendering depends on the mail client. |

By default, if the *disposition* parameter is omitted:

*   if the *cid* parameter is used, the `Content-disposition` header is set to "inline",
*   if the *cid* parameter is not passed or empty, the `Content-disposition` header is set to "attachment".

#### Beispiel 1

You want to send an email with a user-selected file as an attachment and an image embedded in the HTML body:

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

$transporter.send($email) //send mail

End if
```

#### Beispiel 2

You want to send an email with a 4D Write Pro area as an attachment:

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

<details><summary>History</summary>
| Version | Changes                              |
| ------- | ------------------------------------ |
| v19 R2  | Accepts 4D.File, 4D.ZipFile, 4D.Blob |
</details>

**4D.MailAttachment.new**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br>**4D.MailAttachment.new**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br>**4D.MailAttachment.new**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br>**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment

| Parameter   | Typ               |    | Beschreibung                                                         |
| ----------- | ----------------- |:--:| -------------------------------------------------------------------- |
| file        | 4D.File           | -> | Attachment file                                                      |
| zipFile     | 4D.ZipFile        | -> | Attachment Zipfile                                                   |
| blob        | 4D.Blob           | -> | BLOB containing the attachment                                       |
| path        | Text              | -> | Path of the attachment file                                          |
| name        | Text              | -> | Name + extension used by the mail client to designate the attachment |
| cid         | Text              | -> | ID of attachment (HTML messages only), or " " if no cid is required  |
| type        | Text              | -> | Value of the content-type header                                     |
| disposition | Text              | -> | Value of the content-disposition header: "inline" or "attachment".   |
| Ergebnis    | 4D.MailAttachment | <- | Attachment object                                                    |


#### Beschreibung

The `4D.MailAttachment.new()` function creates and returns a new object of the `4D.MailAttachment` type. It is identical to the [`MAIL New attachment`](#mail-new-attachment) command (shortcut).


## .cid

**.cid** : Text

#### Beschreibung

The `.cid` property contains  the ID of the attachment. This property is used in HTML messages only. If this property is missing, the file is handled as a simple attachment (link).


## .disposition

**.disposition** : Text

#### Beschreibung

The `.disposition` property contains the value of the `Content-Disposition` header. Two values are available:

*   "inline": the attachment is rendered within the message contents, at the "cid" location. The rendering depends on the mail client.
*   "attachment": the attachment is provided as a link in the message.


## .getContent()

**.getContent()** : 4D.Blob
| Parameter | Typ     |    | Beschreibung              |
| --------- | ------- |:--:| ------------------------- |
| Ergebnis  | 4D.Blob | <- | Content of the attachment |


#### Beschreibung

The `.getContent()` function returns the contents of the attachment object in a `4D.Blob` object. You can use this method with attachment objects received by the [`MAIL Convert from MIME`](#mail-convert-from-mime) command.



## .name

**.name** : Text

#### Beschreibung

The `.name` property contains the name and extension of the attachment.  By default, it is the name of the file, unless another name was specified in the [`MAIL New attachment`](#mail-new-attachment) command.

## .path

**.path** : Text

#### Beschreibung

The `.path` property contains the POSIX path of the attachment file, if it exists.


## .platformPath

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v19     | Added   |
</details>

**.platformPath** : Text

#### Beschreibung

The `.platformPath` property returns the path of the attachment file expressed with the current platform syntax.


## .type

**.type** : Text

#### Beschreibung

The `.type` property contains the `content-type` of the attachment file. If this type is not explicitly passed to the [`MAIL New attachment`](#mail-new-attachment) command, the `content-type` is based on its file extension.



<style> h2 { background: #d9ebff;}</style>
