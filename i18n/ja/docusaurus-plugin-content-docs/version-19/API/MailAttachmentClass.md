---
id: MailAttachmentClass
title: MailAttachment
---

Attachment オブジェクトによって、[`Email`](EmailObjectClass.md) オブジェクト内のファイルを参照することができます。 MailAttachment オブジェクトは [`MAIL New attachment`](#mail-new-attachment) コマンドによって作成されます。

### Attachment オブジェクト

Attachment オブジェクトは、次の読み取り専用プロパティや、関数を提供します:

|                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.cid.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.disposition.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.getContent().Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.name.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.path.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.platformPath.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.type.Summary -->|

## MAIL New attachment

<!-- REF #_command_.MAIL New attachment.Syntax -->**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->


<!-- REF #_command_.MAIL New attachment.Params -->

| 引数          | 型                 |    | 説明                                                     |
| ----------- | ----------------- |:--:| ------------------------------------------------------ |
| path        | Text              | -> | 添付ファイルのパス                                              |
| blob        | BLOB              | -> | 添付を格納した BLOB                                           |
| name        | Text              | -> | メールクライアントが添付を指定するのに使用する名前 + 拡張子                        |
| cid         | Text              | -> | 添付の ID (HTMLメッセージのみ)、あるいは cid が不要な場合は "" (空の文字列)       |
| type        | Text              | -> | content-type ヘッダーの値                                    |
| disposition | Text              | -> | content-disposition ヘッダーの値: "inline" あるいは "attachment" |
| 戻り値         | 4D.MailAttachment | <- | Attachment オブジェクト|<!-- END REF -->

|

#### 説明

`MAIL New attachment` コマンドは、 <!-- REF #_command_.MAIL New attachment.Summary -->[Email オブジェクト](EmailObjectClass.md#email-オブジェクト) に追加できる添付オブジェクトを作成します<!-- END REF -->.

添付を定義するには、パスまたは Blob を引数として渡します。

- *path*: システムシンタックスで表現された添付ファイルのパスを **テキスト** 値で渡します。 完全なパス名、または単純なファイル名を渡すことができます (ファイル名のみの場合、4D はプロジェクトファイルと同じディレクトリ内を検索します)。

- *blob*: 添付そのものを **BLOB** で渡します。

任意の *name* 引数として、添付を指定するためにメールクライアントが使用する名前と拡張子を渡すことができます。 *name* が省略された場合:

- ファイルパスを渡していれば、そのファイル名と拡張子が使用されます。
- BLOB を渡していれば、拡張子がないランダムな名前が自動的に生成されます。

任意の *cid* 引数を使用すると、添付ファイルの内部ID を渡すことができます。 この ID は `Content-Id` ヘッダーの値で、HTMLメッセージにおいてのみ使用されます。 cid を使い、`\<img src="cid:ID">` のような HTMLタグによってメッセージ本文で定義された参照と添付ファイルが紐づけられます。 これはつまり、添付ファイルの中身 (例: ピクチャー) がメールクライアント上ではメッセージ本文内に表示されるべきであることを意味しています。 最終的な表示は、メールクライアントによって若干異なる可能性があります。 *cid* を使用したくない場合、空の文字列を引数として渡します。

任意の *type* 引数を渡すと、添付ファイルの `content-type` を明示的に設定することができます。 たとえば、MIMEタイプを定義する文字列 ("video/mpeg"など) を渡すことができます。 この content-type の値は拡張子とは関係なく添付ファイルに対して設定されます。 MIMEタイプについての詳細は、[Wikipedia 上のMIME に関するページ](https://ja.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions) を参照ください。

この引数が省略された場合、あるいはこの引数に空の文字列が渡された場合はデフォルトで、添付ファイルの `content-type` は拡張子に基づいて設定されます。 主な MIMEタイプについては、以下のルールが適用されます:

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
| json      | application/json              |
| js        | application/javascript        |
| ps        | application/postscript        |
| xml       | application/xml               |
| htm, html | text/html                     |
| mp3       | audio/mpeg                    |
| *その他*     | application/octet-stream      |

任意の *disposition* 引数を渡して、添付ファイルの `content-disposition` ヘッダーを指定できます。 "Mail" 定数テーマ内の、以下の定数のいずれか 1つを渡すことができます:

| 定数                          | 値            | 説明                                                                                                                              |
| --------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Content-disposition ヘッダーの値を "attachment" に設定します。これは添付ファイルはメッセージ内でリンクとして提供される必要があることを意味します。                                      |
| mail disposition inline     | "inline"     | Content-disposition ヘッダーの値を "inline" に設定します。これは添付ファイルはメッセージ本文内の、"cid" の位置にレンダリングされる必要があることを意味します。 レンダリングの結果はメールクライアントによって異なります。 |

*disposition* 引数が省略された場合はデフォルトで:

- *cid* 引数が使われていた場合、`Content-disposition` ヘッダーは "inline" に設定されます。
- *cid* 引数が渡されていない、あるいは空の文字列が渡されていた場合、`Content-disposition` ヘッダーは "attachment" に設定されます。

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
$email.textBody:="添付のとおり、新しい年次レポートをご連絡します。
"
$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))

$transporter.send($email)
```

## 4D.MailAttachment.new()

<!-- REF #4D.MailAttachment.new().Syntax -->**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *blob* : Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->


<!-- REF #4D.MailAttachment.new().Params -->

| 引数          | 型                 |    | 説明                                                     |
| ----------- | ----------------- |:--:| ------------------------------------------------------ |
| path        | Text              | -> | 添付ファイルのパス                                              |
| blob        | BLOB              | -> | 添付を格納した BLOB                                           |
| name        | Text              | -> | メールクライアントが添付を指定するのに使用する名前 + 拡張子                        |
| cid         | Text              | -> | 添付の ID (HTMLメッセージのみ)、あるいは cid が不要な場合は "" (空の文字列)       |
| type        | Text              | -> | content-type ヘッダーの値                                    |
| disposition | Text              | -> | content-disposition ヘッダーの値: "inline" あるいは "attachment" |
| 戻り値         | 4D.MailAttachment | <- | Attachment オブジェクト|<!-- END REF -->

|

#### 説明

`4D.MailAttachment.new()` 関数は、 <!-- REF #4D.MailAttachment.new().Summary -->`4D.MailAttachment` 型の新しいオブジェクトを作成して返します<!-- END REF -->. この関数の機能は、[`MAIL New attachment`](#mail-new-attachment) コマンドと同一です。

## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->**.cid** : Text<!-- END REF -->

#### 説明

`.cid` プロパティは、 <!-- REF #MailAttachmentClass.cid.Summary --> 添付ファイルの ID を格納します<!-- END REF -->. このプロパティは HTMLメッセージでのみ使用されます。 このプロパティがない場合、ファイルは単なる添付 (リンク) として管理されます。

## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->**.disposition** : Text<!-- END REF -->

#### 説明

`.disposition` プロパティは、 <!-- REF #MailAttachmentClass.disposition.Summary -->`Content-Disposition` ヘッダーの値を格納します<!-- END REF -->. 二つの値が利用可能です:

- "inline": 添付ファイルはメッセージコンテンツ内に、"cid"の場所にレンダリングされます。 レンダリングの結果はメールクライアントによって異なります。
- "attachment": 添付ファイルはメッセージ内でリンクとして提供されます。

## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->**.getContent()** : Blob<!-- END REF -->


<!-- REF #MailAttachmentClass.getContent().Params -->
| 引数  | 型    |    | 説明                               |
| --- | ---- |:--:| -------------------------------- |
| 戻り値 | BLOB | <- | 添付の中身|<!-- END REF -->

|

#### 説明

`.getContent()` 関数は、 <!-- REF #MailAttachmentClass.getContent().Summary -->添付オブジェクトの中身を BLOB として返します<!-- END REF -->. [`MAIL Convert from MIME`](#mail-convert-from-mime) コマンドによって取得した添付オブジェクトに対して、この関数を使用することができます。

## .name

<!-- REF #MailAttachmentClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### 説明

`.name` プロパティは、 <!-- REF #MailAttachmentClass.name.Summary -->添付ファイルの名前と拡張子を格納します<!-- END REF -->.  [`MAIL New attachment`](#mail-new-attachment) コマンドで別の名称を指定しなかった場合のデフォルトは、ファイルの名称です。

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### 説明

`.path` プロパティは、 <!-- REF #MailAttachmentClass.path.Summary -->添付ファイルの POSIX パス (存在すれば) を格納します<!-- END REF -->.

## .platformPath

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |
</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### 説明

`.platformPath` プロパティは、 <!-- REF #MailAttachmentClass.platformPath.Summary -->カレントプラットフォームのシンタックスで表現された添付ファイルのパスを返します<!-- END REF -->.

## .type

<!-- REF #MailAttachmentClass.type.Syntax -->**.type** : Text<!-- END REF -->

#### 説明

`.type` プロパティは、 <!-- REF #MailAttachmentClass.type.Summary -->添付ファイルの `content-type` を格納します<!-- END REF -->. [`MAIL New attachment`](#mail-new-attachment) コマンドにて、このタイプが明示的に渡されていない場合、`content-type` はファイルの拡張子に基づきます。
