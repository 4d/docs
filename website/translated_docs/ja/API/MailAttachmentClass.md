---
id: MailAttachmentClass
title: MailAttachment
---

Attachment objects allow referencing files within a [`Email`](EmailObjectClass.md) object. Attachment objects are created using the [`MAIL New attachment`](#mail-new-attachment) command.


### Attachment Object

Attachment objects provide the following read-only properties and functions:


|                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.cid.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.disposition.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.getContent().Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#cid)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.name.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#cid)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.path.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#cid)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.type.Summary -->|


## MAIL New attachment

<!-- REF #_command_.MAIL_New_attachment.Syntax -->
**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br>**MAIL New attachment**( *blob* : Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #_command_.MAIL_New_attachment.Params -->

| 参照          | タイプ               |    | 説明                                                     |
| ----------- | ----------------- |:--:| ------------------------------------------------------ |
| path        | テキスト              | -> | 添付ファイルのパス                                              |
| blob        | BLOB              | -> | 添付を格納した BLOB                                           |
| name        | テキスト              | -> | メールクライアントが添付を指定するのに使用する名前 + 拡張子                        |
| cid         | テキスト              | -> | 添付の ID (HTMLメッセージのみ)、あるいは cid が不要な場合は "" (空の文字列)       |
| type        | テキスト              | -> | content-type ヘッダーの値                                    |
| disposition | テキスト              | -> | content-disposition ヘッダーの値: "inline" あるいは "attachment" |
| 戻り値         | 4D.MailAttachment | <- | Attachment オブジェクト                                      |
<!-- END REF -->


#### 説明

`MAIL New attachment` コマンドは、 <!-- REF #_command_.MAIL_New_attachment.Summary -->[Email オブジェクト](EmailObjectClass.md#email-オブジェクト) に追加することができる添付オブジェクトを作成します<!-- END REF -->。

You can pass either a path or a Blob to define the attachment.

- If you use a *path*, pass a **text** value containing the path of the attachment file, expressed with the system syntax. You can pass a full path name or a simple file name (in which case 4D will search for the file in the same directory as the project file).

- If you use a *blob*, pass a **BLOB** value containing the attachment itself.

The optional *name* parameter lets you pass the name and extension to be used by the mail client to designate the attachment. If *name* is omitted and:

*   you passed a file path, the name and extension of the file is used,
*   you passed a BLOB, a random name without extension is automatically generated.

The optional *cid* parameter lets you pass an internal ID for the attachment. This ID is the value of the `Content-Id` header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as `\<img src="cid:ID">`. This means that the contents of the attachment (e.g., a picture) should be displayed within the message on the mail client. The final result may vary depending on the mail client. You can pass an empty string in *cid* if you do not want to use this parameter.

You can use the optional *type* parameter to explicitly set the `content-type` of the attachment file. For example, you can pass a string defining a MIME type ("video/mpeg"). This content-type value will be set for the attachment, regardless of its extension. For more information about MIME types, please refer to the [MIME type page on Wikipedia](https://en.wikipedia.org/wiki/MIME).

By default, if the *type* parameter is omitted or contains an empty string, the `content-type` of the attachment file is based on its extension. The following rules are applied for the main MIME types:

| 拡張子       | Content-Type                  |
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
| JSON      | application/json              |
| js        | application/javascript        |
| ps        | application/postscript        |
| xml       | application/xml               |
| htm, html | text/html                     |
| mp3       | audio/mpeg                    |
| *その他*     | application/octet-stream      |

The optional *disposition* parameter lets you pass the `content-disposition` header of the attachment. You can pass one of the following constants from the "Mail" constant theme:

| 定数                          | 結果           | 説明                                                                                                                                                                                       |
| --------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Set the Content-disposition header value to "attachment", which means that the attachment file must be provided as a link in the message.                                                |
| mail disposition inline     | "inline"     | Set the Content-disposition header value to "inline", which means that the attachment must be rendered within the message contents, at the "cid" location. レンダリングの結果はメールクライアントによって異なります。 |

By default, if the *disposition* parameter is omitted:

*   if the *cid* parameter is used, the `Content-disposition` header is set to "inline",
*   if the *cid* parameter is not passed or empty, the `Content-disposition` header is set to "attachment".

#### 例題 1

ユーザーが選択したファイルを添付し、HTML 本文に画像を埋め込んだメールを送信します:

```4d
$doc:=Select document("";"*";"添付するファイルを選択したください";0)
If (OK=1) // もしドキュメントが選択されていれば

C_OBJECT($email;$server;$transporter)

$server:=New object
$server.host:="smtp.mail.com"
$server.user:="test_user@mail.com"
$server.password:="p@ssw@rd"
$transporter:=SMTP New transporter($server)

$email:=New object
$email.from:="test_user@mail.com"
$email.to:="test_user@mail.com"
$email.subject:="添付の付いたテストメッセージです"

// ファイルをダウンロードするリンクを追加します
$email.attachments:=New collection(MAIL New attachment(Document))
// インラインピクチャーを挿入します (cid を使用)
$email.attachments[1]:=MAIL New attachment("c:\\Pictures\\4D.jpg";"";"4D")

$email.htmlBody:="<html>"+\
"<body>Hello World!"+\
"<img src='cid:4D' >"+\
"</body>"+\
"</head>"+\
"</html>"

$transporter.send($email) // メールを送信します

End if
```

#### 例題 2

4D Write Pro エリアを添付したメールを送信します:

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
$email.subject:="新規年次レポート"
$email.textBody:="添付のとおり、新しい年次レポートをご連絡します。"
$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))

$transporter.send($email)
```


## 4D.MailAttachment.new()


<!-- REF #4D.MailAttachment.new().Syntax -->
**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br>**4D.MailAttachment.new**( *blob* : Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| 参照          | タイプ               |    | 説明                                                     |
| ----------- | ----------------- |:--:| ------------------------------------------------------ |
| path        | テキスト              | -> | 添付ファイルのパス                                              |
| blob        | BLOB              | -> | 添付を格納した BLOB                                           |
| name        | テキスト              | -> | メールクライアントが添付を指定するのに使用する名前 + 拡張子                        |
| cid         | テキスト              | -> | 添付の ID (HTMLメッセージのみ)、あるいは cid が不要な場合は "" (空の文字列)       |
| type        | テキスト              | -> | content-type ヘッダーの値                                    |
| disposition | テキスト              | -> | content-disposition ヘッダーの値: "inline" あるいは "attachment" |
| 戻り値         | 4D.MailAttachment | <- | Attachment オブジェクト                                      |
<!-- END REF -->

#### 説明

`4D.MailAttachment.new()` 関数は、 <!-- REF #4D.MailAttachment.new().Summary -->`4D.MailAttachment` 型の新規オブジェクト作成して返します<!-- END REF -->。 この関数の機能は、[`MAIL New attachment`](#mail-new-attachment) コマンドと同一です。


## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->
**.cid** : Text<!-- END REF -->


#### 説明

`.cid` プロパティは、 <!-- REF #MailAttachmentClass.cid.Summary --> 添付ファイルの ID<!-- END REF -->を格納します。 このプロパティは HTMLメッセージでのみ使用されます。 このプロパティがない場合、ファイルは単なる添付 (リンク) として管理されます。


## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->
**.disposition** : Text<!-- END REF -->


#### 説明

`.disposition` プロパティは、 <!-- REF #MailAttachmentClass.disposition.Summary -->`Content-Disposition` ヘッダーの値<!-- END REF -->を格納します。 二つの値が利用可能です:

*   "inline": 添付ファイルはメッセージコンテンツ内に、"cid"の場所にレンダリングされます。 レンダリングの結果はメールクライアントによって異なります。
*   "attachment": 添付ファイルはメッセージ内でリンクとして提供されます。


## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->
**.getContent()** : Blob<!-- END REF -->

<!-- REF #MailAttachmentClass.getContent().Params -->
| 参照  | タイプ  |    | 説明    |
| --- | ---- |:--:| ----- |
| 戻り値 | BLOB | <- | 添付の中身 |
<!-- END REF -->


#### 説明

`.getContent()` 関数は、 <!-- REF #MailAttachmentClass.getContent().Summary -->添付オブジェクトの中身を BLOB として返します<!-- END REF -->。 [`MAIL Convert from MIME`](#mail-convert-from-mime) コマンドによって取得した添付オブジェクトに対して、この関数を使用することができます。



## .name

<!-- REF #MailAttachmentClass.name.Syntax -->
**.name** : Text<!-- END REF -->


#### 説明

`.name` プロパティは、 <!-- REF #MailAttachmentClass.name.Summary -->添付ファイルの名前と拡張子<!-- END REF -->を格納します。  [`MAIL New attachment`](#mail-new-attachment) コマンドで別の名称を指定しなかった場合のデフォルトは、ファイルの名称です。

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->
**.path** : Text<!-- END REF -->


#### 説明

`.path` プロパティは、 <!-- REF #MailAttachmentClass.path.Summary -->添付ファイルのフルパス<!-- END REF -->(存在すれば) を格納します。


## .type

<!-- REF #MailAttachmentClass.type.Syntax -->
**.type** : Text<!-- END REF -->


#### 説明

`.type` プロパティは、 <!-- REF #MailAttachmentClass.type.Summary -->添付ファイルの `content-type`<!-- END REF -->を格納します。 [`MAIL New attachment`](#mail-new-attachment) コマンドにて、このタイプが明示的に渡されていない場合、`content-type` はファイルの拡張子に基づきます。



<style> h2 { background: #d9ebff;}</style>
