---
id: mail-new-attachment
title: MAIL New attachment
displayed_sidebar: docs
---

<details><summary>履歴</summary>

| リリース  | 内容                                                                                 |
| ----- | ---------------------------------------------------------------------------------- |
| 19 R2 | 4D.File, 4D.ZipFile, 4D.Blob の受け入れ |

</details>

<!-- REF #_command_.MAIL New attachment.Syntax -->**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!--REF #_command_.MAIL New attachment.Params-->

| 引数          | 型                                 |                                       | 説明                                                                                     |
| ----------- | --------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------- |
| 引数          | 型                                 |                                       | 説明                                                                                     |
| ***         | ***                               | :---: | ***                                                                                    |
| file        | 4D.File           | →                                     | 添付ファイル                                                                                 |
| zipFile     | 4D.ZipFile        | →                                     | 添付 Zipファイル                                                                             |
| blob        | 4D.Blob           | →                                     | 添付を格納した BLOB                                                                           |
| path        | Text                              | →                                     | 添付ファイルのパス                                                                              |
| name        | Text                              | →                                     | メールクライアントが添付を指定するのに使用する名前 + 拡張子                                                        |
| cid         | Text                              | →                                     | 添付の ID (HTMLメッセージのみ)、あるいは cid が不要な場合は "" (空の文字列) |
| type        | Text                              | →                                     | content-type ヘッダーの値                                                                    |
| disposition | Text                              | →                                     | content-disposition ヘッダーの値: "inline" あるいは "attachment"                 |
| 戻り値         | 4D.MailAttachment | ←                                     | Attachment オブジェクト                                                                      |

<!-- END REF-->

#### 説明

`MAIL New attachment` コマンドは、<!-- REF #_command_.MAIL New attachment.Summary -->[Email オブジェクト](../API/EmailObjectClass.md#email-オブジェクト) に追加することができる添付オブジェクトを作成します<!-- END REF -->。

添付を定義するには、次のパラメーターが使えます:

- *file*: 添付ファイルを格納する `4D.File` オブジェクトを渡します。
- *zipfile*: 添付ファイルを格納する `4D.ZipFile` オブジェクトを渡します。
- *blob*: 添付そのものを `4D.Blob` に格納して渡します。
- *path*: システムシンタックスで表現された添付ファイルのパスを **テキスト** 値で渡します。 完全なパス名、または単純なファイル名を渡すことができます (ファイル名のみの場合、4D はプロジェクトファイルと同じディレクトリ内を検索します)。

任意の *name* 引数として、添付を指定するためにメールクライアントが使用する名前と拡張子を渡すことができます。 *name* が省略された場合:

- ファイルパスを渡していれば、そのファイル名と拡張子が使用されます。
- BLOB を渡していれば、拡張子がないランダムな名前が自動的に生成されます。

任意の *cid* 引数を使用すると、添付ファイルの内部ID を渡すことができます。 この ID は `Content-Id` ヘッダーの値で、HTMLメッセージにおいてのみ使用されます。 cid を使い、`\<img src="cid:ID">` のような HTMLタグによってメッセージ本文で定義された参照と添付ファイルが紐づけられます。 これはつまり、添付ファイルの中身 (例: ピクチャー) がメールクライアント上ではメッセージ本文内に表示されるべきであることを意味しています。 最終的な表示は、メールクライアントによって若干異なる可能性があります。 *cid* を使用したくない場合、空の文字列を引数として渡します。

任意の *type* 引数を渡すと、添付ファイルの `content-type` を明示的に設定することができます。 たとえば、MIMEタイプを定義する文字列 ("video/mpeg"など) を渡すことができます。 この content-type の値は拡張子とは関係なく添付ファイルに対して設定されます。 MIMEタイプについての詳細は、[Wikipedia 上のMIME に関するページ](https://ja.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions) を参照ください。

この引数が省略された場合、あるいはこの引数に空の文字列が渡された場合はデフォルトで、添付ファイルの `content-type` は拡張子に基づいて設定されます。 主な MIMEタイプについては、以下のルールが適用されます:

| 拡張子       | Content-Type                                  |
| --------- | --------------------------------------------- |
| jpg, jpeg | image/jpeg                                    |
| png       | image/png                                     |
| gif       | image/gif                                     |
| pdf       | application/pdf                               |
| doc       | application/msword                            |
| xls       | application/vnd.ms-excel      |
| ppt       | application/vnd.ms-powerpoint |
| zip       | application/zip                               |
| gz        | application/gzip                              |
| json      | application/json                              |
| js        | application/javascript                        |
| ps        | application/postscript                        |
| xml       | application/xml                               |
| htm, html | text/html                                     |
| mp3       | audio/mpeg                                    |
| *その他*     | application/octet-stream                      |

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

var $email;$server;$transporter : Object

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
$email.subject:="新規年次レポート"
$email.textBody:="添付のとおり、新しい年次レポートをご連絡します。"
$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))

$transporter.send($email)
```

#### プロパティ

|         |                                                                 |
| ------- | --------------------------------------------------------------- |
| コマンド番号  | 1644                                                            |
| スレッドセーフ | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
