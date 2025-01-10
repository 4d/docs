---
id: EmailObjectClass
title: Email
---

4Dにおけるメールの作成・送信・受信は `Email` オブジェクトの操作よっておこなわれます。

*transporter* クラス関数を使ってメールを取得する際に、 `Email` オブジェクトが作成されます。

- IMAP - [`.getMail()`](IMAPTransporterClass.md#getmail) および [`.getMails()`](IMAPTransporterClass.md#getmails) 関数は IMAPサーバーからメールを受信します。
- POP3 - [`.getMail()`](POP3TransporterClass.md#getmail) 関数は POP3サーバーからメールを受信します。

> また、新規かつ空の `Email` オブジェクトを作成してから、[Email オブジェクトプロパティ](#email-オブジェクト) を設定していくことも可能です。

`Email` オブジェクトは SMTP [`.send()`](SMTPTransporterClass.md#send) 関数を使って送信します。

[`MAIL Convert from MIME`](#mail-convert-from-mime) および [`MAIL Convert to MIME`](#mail-convert-to-mime) コマンドは、MIME コンテンツから `Email` オブジェクトに、またはその逆の変換をおこなうのに使用できます。

### Email オブジェクト

Email オブジェクトは次のプロパティを提供します:

> 4D は Email オブジェクトのフォーマットは [JMAP specification](https://jmap.io/spec-mail.html) に準拠します。

|                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #EmailObjectClass.attachments.Syntax -->](#attachments)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.attachments.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bcc.Syntax -->](#bcc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bcc.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bodyStructure.Syntax -->](#bodystructure)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bodyStructure.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bodyValues.Syntax -->](#bodyvalues)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bodyValues.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.cc.Syntax -->](#cc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.cc.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.comments.Syntax -->](#comments)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.comments.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.from.Syntax -->](#from)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.from.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.headers.Syntax -->](#headers)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.headers.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.htmlBody.Syntax -->](#htmlbody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.htmlBody.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.id.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.inReplyTo.Syntax -->](#inreplyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.inReplyTo.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.keywords.Syntax -->](#keywords)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.keywords.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.messageId.Syntax -->](#messageid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.messageId.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.receivedAt.Syntax -->](#receivedat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.receivedAt.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.references.Syntax -->](#references)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.references.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.replyTo.Syntax -->](#replyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.replyTo.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.sendAt.Syntax -->](#sendat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.sendAt.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.sender.Syntax -->](#sender)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.sender.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.size.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.subject.Syntax -->](#subject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.subject.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.textBody.Syntax -->](#textbody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.textBody.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.to.Syntax -->](#to)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.to.Summary -->|

### メールアドレス

メールアドレスを格納するプロパティ ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) はすべて、テキスト・オブジェクト・コレクション型の値を受け付けます。

#### テキスト

- 単一のメールアドレス: "somebody@domain.com"
- 単一の表示名+メールアドレス: "Somebody <somebody@domain.com>"
- 複数のメールアドレス: "Somebody <somebody@domain.com>,me@home.org"

#### オブジェクト

2つのプロパティを持つオブジェクト:

| プロパティ | 型    | 説明             |
| ----- | ---- | -------------- |
| name  | Text | 表示名 (null も可能) |
| email | Text | メールアドレス        |

#### コレクション

アドレスオブジェクトのコレクション

### メール本文の扱い

[`textBody`](#textbody) および [`htmlBody`](#htmlbody) はどちらも[SMTP.send()](SMTPTransporterClass.md#send) でのみ使用され、これによって単純なメールの送信が可能になります。 プロパティが両方ともある場合、MIME content-type の multipart/alternative が使用されます。 メールクライアントは multipart/alternative パートを認識し、必要に応じてテキスト部または html 部を表示します。

[Email オブジェクト](#email-オブジェクト) が MIME ドキュメントからビルドされた場合 (例: `MAIL Convert from MIME` コマンドで生成されたとき) は、[`bodyStructure`](#bodystructure) および [`bodyValues`](#bodyvalues) が [SMTP](SMTPTransporterClass.md) に使用されます。 この場合、`bodyStructure` および `bodyValues` プロパティは両方一緒に渡される必要があり、`textBody` および `htmlBody` の使用は推奨されません。

#### bodyStructure および bodyValues オブジェクトの例

```json
"bodyStructure": {
  "type": "multipart/mixed",
  "subParts": [
    {
      "partId": "p0001",
      "type": "text/plain"
    },
    {
      "partId": "p0002",
      "type": "text/html"
    }
  ]
},
"bodyValues": {
  "p0001": {
    "value": "I have the most brilliant plan. Let me tell you all about it."
  },
  "p0002": {
    "value": "<!DOCTYPE html><html><head><title></title><style type=\"text/css\">div{font-size:16px}</style></head><body><div>I have the most brilliant plan. Let me tell you all about it.</div></body></html>"
  }
}
```

## .attachments

<!-- REF #EmailObjectClass.attachments.Syntax -->**.attachments** : Collection<!-- END REF -->

#### 説明

`.attachments` プロパティは、 <!-- REF #EmailObjectClass.attachments.Summary -->`4D.MailAttachment` オブジェクトのコレクションを格納します<!-- END REF -->。

MailAttachment オブジェクトは [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment) コマンドによって定義されます。 MailAttachment オブジェクトは特有の [プロパティや関数](MailAttachmentClass.md) を持ちます。

## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->**.bcc** : Text<br/>**.bcc** : Object<br/>**.bcc** : Collection<!-- END REF -->

#### 説明

`.bcc` プロパティは、 <!-- REF #EmailObjectClass.bcc.Summary -->非表示 (BCC: Blind Carbon Copy) のメール受信者 [アドレス](#メールアドレス) を格納します<!-- END REF -->。

## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->**.bodyStructure** : Object<!-- END REF -->

#### 説明

`.bodyStructure` プロパティは、 <!-- REF #EmailObjectClass.bodyStructure.Summary -->メッセージ本文の完全な MIME ストラクチャーである *EmailBodyPart* オブジェクトを格納します (任意)<!-- END REF -->。 [メール本文の扱い](#メール本文の扱い) を参照ください。

`.bodyStructure` オブジェクトには、次のプロパティが格納されています:

| プロパティ       | 型                   | 値                                                                                                     |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| partID      | Text                | メールのパートを固有に識別する ID                                                                                    |
| type        | Text                | (必須) パートの Content-Type ヘッダーフィールドの値                                                                    |
| charset     | Text                | Content-Type ヘッダーフィールドの Charset の値                                                                    |
| encoding    | Text                | `isEncodingProblem=true` の場合、Content-Transfer-Encoding の値が追加されます (デフォルトでは未定義)                         |
| disposition | Text                | パートの Content-Disposition ヘッダーフィールドの値                                                                  |
| language    | Text の Collection   | パートの Content-Language ヘッダーフィールドの、[RFC3282](https://tools.ietf.org/html/rfc3282) で定義されている言語タグの一覧 (あれば) |
| location    | Text                | パートの Content-Location ヘッダーフィールドの、[RFC2557](https://tools.ietf.org/html/rfc2557) で定義されている URI (あれば)    |
| subParts    | Object の Collection | それぞれの子の本文パート (*EmailBodyPart* オブジェクトのコレクション)                                                          |
| headers     | Object の Collection | パート内の全ヘッダーフィールドの、メッセージ内で出現する順の一覧 (*EmailHeader* オブジェクトのコレクション。[headers](#headers) プロパティ参照)            |

## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->**.bodyValues** : Object<!-- END REF -->

#### 説明

`.bodyValues` プロパティは、 <!-- REF #EmailObjectClass.bodyValues.Summary -->`bodyStructure` の \<partID\> 毎にオブジェクトを格納している *EmailBodyValue* オブジェクトを格納します (任意)。<!-- END REF -->。 [メール本文の扱い](#メール本文の扱い) を参照ください。

`.bodyValues` オブジェクトには、次のプロパティが格納されています:

| プロパティ                      | 型    | 値                                                                                                         |
| -------------------------- | ---- | --------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text | 本文パートの値                                                                                                   |
| *partID*.isEncodingProblem | ブール  | 文字セットをデコーディング中に、不正なフォーマットのセクション、未知の文字セット、あるいは未知の content-transfer-encoding が見つかった場合には true。 デフォルトは false。 |

## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->**.cc** : Text<br/>**.cc** : Object<br/>**.cc** : Collection<!-- END REF -->

#### 説明

`.cc` プロパティは、 <!-- REF #EmailObjectClass.cc.Summary -->追加 (CC: Carbon Copy) のメール受信者 [アドレス](#メールアドレス) を格納します<!-- END REF -->。

## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->**.comments** : Text<!-- END REF -->

#### 説明

`.comments` プロパティは、 <!-- REF #EmailObjectClass.comments.Summary -->追加のコメントのヘッダーを格納します<!-- END REF -->。

コメントはメッセージのヘッダーセクション内にのみ表示されます (つまり本文部分には触れないということです)。

特定のフォーマット条件についての詳細は、[RFC#5322](https://tools.ietf.org/html/rfc5322) を参照ください。

## .from

<!-- REF #EmailObjectClass.from.Syntax -->**.from** : Text<br/>**.from** : Object<br/>**.from** : Collection<!-- END REF -->

#### 説明

`.from` プロパティは、 <!-- REF #EmailObjectClass.from.Summary -->メールの送信元 [アドレス](#メールアドレス) を格納します<!-- END REF -->。

送信されるメールには、それぞれ [sender](#sender) および **from** アドレスの両方がついています:

- sender ドメインは、受信側のメールサーバーがセッションを開いたときに受け取るドメインです。
- from アドレスは、受信者から見えるアドレスです。

混乱を避けるため、sender および from アドレスには同じアドレスを使用することが推奨されます。

## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->**.headers** : Collection<!-- END REF -->

#### 説明

`.headers` プロパティは、 <!-- REF #EmailObjectClass.headers.Summary -->メッセージ内で現れる順番どおりの `EmailHeader` オブジェクトのコレクションを格納します<!-- END REF -->。 これによってユーザーは拡張された (登録された) ヘッダーや、ユーザー定義された (登録されていない、"X" で始まる) ヘッダーを追加することができます。

> メールレベルですでにプロパティとして設定されている "from" または "cc" などのヘッダーを `EmailHeader` オブジェクトプロパティが定義している場合、`EmailHeader` プロパティは無視されます。

ヘッダーコレクションの各オブジェクトには、次のプロパティが格納されることがあります:

| プロパティ    | 型    | 値                                                                                                                       |
| -------- | ---- | ----------------------------------------------------------------------------------------------------------------------- |
| [].name  | text | (必須) [RFC#5322](https://tools.ietf.org/html/rfc5322) で定義されているヘッダーフィールド名。 null または未定義の場合には、ヘッダーフィールドは MIME ヘッダーに追加されません。 |
| [].value | text | [RFC#5322](https://tools.ietf.org/html/rfc5322) で定義されているヘッダーフィールド値。                                                     |

## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->**.htmlBody** : Text<!-- END REF -->

#### 説明

`.htmlBody` プロパティは、 <!-- REF #EmailObjectClass.htmlBody.Summary -->HTML形式のメールメッセージ (デフォルトの文字セットは UTF-8) を格納します (任意、SMTPのみ)<!-- END REF -->。 [メール本文の扱い](#メール本文の扱い) を参照ください。

## .id

<!-- REF #EmailObjectClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### 説明

[IMAP transporter](IMAPTransporterClass.md) のみ。

`.id` プロパティは、 <!-- REF #EmailObjectClass.id.Summary -->IMAP サーバーからの固有ID を格納します<!-- END REF -->。

## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->**.inReplyTo** : Text<!-- END REF -->

#### 説明

`.inReplyTo` プロパティは、 <!-- REF #EmailObjectClass.inReplyTo.Summary -->カレントメッセージが返信している、元のメッセージのメッセージID を格納します<!-- END REF -->。

特定のフォーマット条件についての詳細は、[RFC#5322](https://tools.ietf.org/html/rfc5322) を参照ください。

## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->**.keywords** : Object<!-- END REF -->

#### 説明

`.keywords` プロパティは、 <!-- REF #EmailObjectClass.keywords.Summary -->各プロパティ名がキーワードであり、各値が true であるキーワードセットのオブジェクトを格納します<!-- END REF -->。

このプロパティは "keywords" ヘッダーです ([RFC#4021](https://tools.ietf.org/html/rfc4021) 参照)。

| プロパティ          | 型   | 値                               |
| -------------- | --- | ------------------------------- |
| .\<keyword\> | ブール | 設定するキーワード (値は true でなければなりません)。 |

予約されたキーワード:
- $draft - メッセージが下書きであることを表します
- $seen - メッセージが読まれたことを表します
- $flagged - メッセージが注視されるべきであることを表します (例: 至急のメール)
- $answered - メッセージに返信がされたことを表します
- $deleted - メッセージが消去されることを表します

#### 例題

```
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```

## .messageId

<!-- REF #EmailObjectClass.messageId.Syntax -->**.messageId** : Text<!-- END REF -->

#### 説明

`.messageId` プロパティは、 <!-- REF #EmailObjectClass.messageId.Summary -->メッセージ識別ヘッダー ("message-id") を格納します<!-- END REF -->。

通常は、"lettersOrNumbers@domainname" の形式、たとえば "abcdef.123456@4d.com" などです。 この固有ID は特にフォーラムや公開メーリングリストで使用されています。 一般的に、メールサーバーは送信するメッセージにこのヘッダーを自動的に追加します。

## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->**.receivedAt** : Text<!-- END REF -->

#### 説明

[IMAP transporter](IMAPTransporterClass.md) のみ。

`.receivedAt` プロパティは、 <!-- REF #EmailObjectClass.receivedAt.Summary -->IMAPサーバーにメールが到着した時間の、ISO 8601 UTC フォーマットでのタイムスタンプ (例: 2020-09-13T16:11:53Z) を格納します<!-- END REF -->。

## .references

<!-- REF #EmailObjectClass.references.Syntax -->**.references** : Collection<!-- END REF -->

#### 説明

`.references` プロパティは、 <!-- REF #EmailObjectClass.references.Summary -->返信チェーン内メッセージの、全メッセージID のコレクションを格納します<!-- END REF -->。

特定のフォーマット条件についての詳細は、[RFC#5322](https://tools.ietf.org/html/rfc5322) を参照ください。

## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->**.replyTo** : Text<br/>**.replyTo** : Object<br/>**.replyTo** : Collection<!-- END REF -->

#### 説明

`.replyTo` プロパティは、 <!-- REF #EmailObjectClass.replyTo.Summary -->返信用 [アドレス](#メールアドレス) を格納します<!-- END REF -->。

## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->**.sendAt** : Text<!-- END REF -->

#### 説明

`.sendAt` プロパティは、 <!-- REF #EmailObjectClass.sendAt.Summary -->メールのタイムスタンプ (ISO 8601 UTCフォーマット) を格納します<!-- END REF -->。

## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->**.sender** : Text<br/>**.sender** : Object<br/>**.sender** : Collection<!-- END REF -->

#### 説明

`.sender` プロパティは、 <!-- REF #EmailObjectClass.sender.Summary -->メールのソース [アドレス](#メールアドレス) を格納します<!-- END REF -->。

送信されるメールには、それぞれ **sender** および **[from](#from)** アドレスの両方がついています:

- sender ドメインは、受信側のメールサーバーがセッションを開いたときに受け取るドメインです。
- from アドレスは、受信者から見えるアドレスです。

混乱を避けるため、sender および from アドレスには同じアドレスを使用することが推奨されます。

## .size

<!-- REF #EmailObjectClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### 説明

[IMAP transporter](IMAPTransporterClass.md) のみ。

`.size` プロパティは、 <!-- REF #EmailObjectClass.size.Summary -->IMAPサーバーから返された Email オブジェクトのサイズ (バイト単位) を格納します<!-- END REF -->。

## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->**.subject** : Text<!-- END REF -->

#### 説明

`.subject` プロパティは、 <!-- REF #EmailObjectClass.subject.Summary -->メールの件名を格納します<!-- END REF -->。

## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->**.textBody** : Text<!-- END REF -->

#### 説明

`.textBody` プロパティは、 <!-- REF #EmailObjectClass.textBody.Summary -->標準テキスト形式のメールメッセージ (デフォルトの文字セットは UTF-8) を格納します (任意、SMTPのみ)<!-- END REF -->。 [メール本文の扱い](#メール本文の扱い) を参照ください。

## .to

<!-- REF #EmailObjectClass.to.Syntax -->**.to** : Text<br/>**.to** : Object<br/>**.to** : Collection<!-- END REF -->

#### 説明

`.to` プロパティは、 <!-- REF #EmailObjectClass.to.Summary -->メールのメインの受信者 [アドレス](#メールアドレス) を格納します<!-- END REF -->。

## MAIL Convert from MIME

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 18   | 追加 |

</details>

<!-- REF #_command_.MAIL Convert from MIME.Syntax -->**MAIL Convert from MIME**( *mime* : Blob ) : Object<br/>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->


<!-- REF #_command_.MAIL Convert from MIME.Params -->
| 引数   | 型          |    | 説明                                      |
| ---- | ---------- |:--:| --------------------------------------- |
| mime | Blob, Text | -> | MIME形式のメール                              |
| 戻り値  | Object     | <- | Email オブジェクト|<!-- END REF -->

|

#### 説明

`MAIL Convert from MIME` コマンドは、 <!-- REF #_command_.MAIL Convert from MIME.Summary -->MIMEドキュメントを有効な Emailオブジェクトへと変換します<!-- END REF -->。
> 戻り値の Email オブジェクトのフォーマットは [JMAP specification](https://jmap.io/spec-mail.html) に準拠します。

*mime* には、変換する有効な MIME ドキュメントを渡します。 これはどのメールサーバーまたはアプリケーションから提供されたものでも可能です。 *mime* 引数として、BLOB またはテキストを渡すことができます。 MIME がファイルから渡された場合、文字セットと改行コード変換に関する問題を避けるため、BLOB型の引数を使用することが推奨されます。

#### 返されるオブジェクト

Email オブジェクト。

#### 例題 1

テキストドキュメントとして保存された MIME のメールのテンプレートを読み込み、メールを送信します。

```4d
var $mime: Blob
var $mail;$server;$transporter;$status: Object

$mime:=File("/PACKAGE/Mails/templateMail.txt").getContent())

$mail:=MAIL Convert from MIME($mime)
$mail.to:="smith@mail.com"
$mail.subject:="Hello world"

$server:=New object
$server.host:="smtp.gmail.com"
$server.port:=465
$server.user:="test@gmail.com"
$server.password:="XXXX"

$transporter:=SMTP New transporter($server)
$status:=$transporter.send($mail)
```

#### 例題 2

この例題では、ピクチャーが含まれた 4D Write Pro ドキュメントを直接送信します:

```4d
var $mime: Blob
var $email;$server;$transporter;$status: Object

// 4D Write Pro ドキュメントを MIME に書き出します
WP EXPORT VARIABLE(WParea;$mime;wk mime html)

// 4D Write Pro MIME 変数をメールオブジェクトに変換します
$email:=MAIL Convert from MIME($mime)

// Email オブジェクトのヘッダーを設定します
$email.subject:="4D Write Pro HTML body"
$email.from:="YourEmail@gmail.com"
$email.to:="RecipientEmail@mail.com"

$server:=New object
$server.host:="smtp.gmail.com"
$server.port:=465
$server.user:="YourEmail@gmail.com"
$server.password:="XXXX"

$transporter:=SMTP New transporter($server)
$status:=$transporter.send($email)
```

## MAIL Convert to MIME

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |
| 17 R5 | 変更 |

</details>

<!-- REF #_command_.MAIL Convert to MIME.Syntax -->**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->


<!-- REF #_command_.MAIL Convert to MIME.Params -->
| 引数      | 型      |    | 説明                                                 |
| ------- | ------ |:--:| -------------------------------------------------- |
| mail    | Object | -> | Email オブジェクト                                       |
| options | Object | -> | 文字セットとエンコーディングのメールオプション                            |
| 戻り値     | Text   | <- | MIME に変換された Emailオブジェクト|<!-- END REF -->

|

#### 説明

`MAIL Convert to MIME` コマンドは、 <!-- REF #_command_.MAIL Convert to MIME.Summary -->Emailオブジェクトを MIMEテキストへと変換します<!-- END REF -->。 このコマンドは、Email オブジェクトを送信する前に整形する目的で[SMTP_transporter.send()](SMTPTransporterClass.md#send) コマンドによって内部的に呼び出されます。 また、オブジェクトの MIME フォーマットを解析するためにも使用されます。

*mail* には、変換するメールのコンテンツとストラクチャーの詳細を渡します。 この情報には、メールアドレス (送信者と受信者)、メッセージそのもの、メッセージの表示タイプなどが含まれます。
> Email オブジェクトのフォーマットは [JMAP specification](https://jmap.io/spec-mail.html) に準拠します。

*options* 引数を渡すと、メールに対して特定の文字セットとエンコーディング設定を指定することができます。 次のプロパティを利用することができます:

| プロパティ         | 型    | 説明                                                                                 |
| ------------- | ---- | ---------------------------------------------------------------------------------- |
| headerCharset | Text | メールの以下の部分で使用される文字セットとエンコーディング: 件名、添付ファイル名、メール名の属性。 とりうる値:<table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td>mail mode ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: 可能なら US-ASCII 、次に可能なら Japanese (ISO-2022-JP) &amp; Quoted-printable 、それも不可なら UTF-8 &amp; Quoted-printable</li><li><i>bodyCharset</i>: 可能なら US-ASCII、次に可能なら Japanese (ISO-2022-JP) &amp; 7-bit、それも不可なら UTF-8 &amp; Quoted-printable</li></ul></td></tr><tr><td>mail mode ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 &amp; Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 &amp; 8-bit</li></ul></td></tr><tr><td>mail mode UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> &amp; <i>bodyCharset</i>: 可能なら US-ASCII、それが不可なら UTF-8 &amp; Quoted-printable (**デフォルト値**)</td></tr><tr><td>mail mode UTF8 in base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> &amp; <i>bodyCharset</i>: 可能な場合は US-ASCII、それ以外は UTF-8 &amp; base64</td></tr></table> |
| bodyCharset   | Text | メールの HTML およびテキスト本文コンテンツで使用される文字セットとエンコーディング。 取りうる値: headerCharset と同じ(上記参照)       |

*options* 引数が省略された場合、ヘッダーおよび本文においては mail mode UTF8 設定が使用されます。

#### 例題

```4d
var $mail: Object
var $mime: Text
$mail:=New object

// メール作成
$mail.from:="tsales@massmarket.com"
$mail.subject:="Terrific Sale! This week only!"
$mail.textBody:="Text format email"
$mail.htmlBody:="<html><body>HTML format email</body></html>"
$mail.to:=New collection
$mail.to.push(New object ("email";"noreply@4d.com"))
$mail.to.push(New object ("email";"test@4d.com"))

// Email オブジェクトを MIME に変換します
$mime:=MAIL Convert to MIME($mail)

// $mime の中身:
// MIME-Version: 1.0
// Date: Thu, 11 Oct 2018 15:42:25 GMT
// Message-ID: <7CA5D25B2B5E0047A36F2E8CB30362E2>
// Sender: tsales@massmarket.com
// From: tsales@massmarket.com
// To: noreply@4d.com
// To: test@4d.com
// Content-Type: multipart/alternative; boundary="E0AE5773D5E95245BBBD80DD0687E218"
// Subject: Terrific Sale! This week only!
//
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: text/plain; charset="UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// Text format email
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: text/html; charset="UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// <html><body>HTML format email</body></html>
// --E0AE5773D5E95245BBBD80DD0687E218--
```
