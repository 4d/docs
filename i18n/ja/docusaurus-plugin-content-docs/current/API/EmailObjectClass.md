---
id: EmailObjectClass
title: Email
---

4Dにおけるメールの作成・送信・受信は `Email` オブジェクトの操作よっておこなわれます。

*transporter* クラス関数を使ってメールを取得する際に、
`Email` オブジェクトが作成されます。

- IMAP - [`.getMail()`](IMAPTransporterClass.md#getmail) および [`.getMails()`](IMAPTransporterClass.md#getmails) 関数は IMAPサーバーからメールを受信します。
- POP3 - [`.getMail()`](POP3TransporterClass.md#getmail) 関数は POP3サーバーからメールを受信します。

> また、新規かつ空の `Email` オブジェクトを作成してから、[Email オブジェクトプロパティ](#email-オブジェクト) を設定していくことも可能です。

`Email` オブジェクトは SMTP [`.send()`](SMTPTransporterClass.md#send) 関数を使って送信します。

[`MAIL Convert from MIME`](../commands/mail-convert-from-mime.md) および [`MAIL Convert to MIME`](../commands/mail-convert-to-mime.md) コマンドは、MIME コンテンツから `Email` オブジェクトに、またはその逆の変換をおこなうのに使用できます。

### Email オブジェクト

Email オブジェクトは次のプロパティを提供します:

> 4D は Email オブジェクトのフォーマットは [JMAP specification](https://jmap.io/spec-mail.html) に準拠します。

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #EmailObjectClass.attachments.Syntax -->](#attachments)<br/><!-- INCLUDE #EmailObjectClass.attachments.Summary -->       |
| [<!-- INCLUDE #EmailObjectClass.bcc.Syntax -->](#bcc)<br/><!-- INCLUDE #EmailObjectClass.bcc.Summary -->                               |
| [<!-- INCLUDE #EmailObjectClass.bodyStructure.Syntax -->](#bodystructure)<br/><!-- INCLUDE #EmailObjectClass.bodyStructure.Summary --> |
| [<!-- INCLUDE #EmailObjectClass.bodyValues.Syntax -->](#bodyvalues)<br/><!-- INCLUDE #EmailObjectClass.bodyValues.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.cc.Syntax -->](#cc)<br/><!-- INCLUDE #EmailObjectClass.cc.Summary -->                                  |
| [<!-- INCLUDE #EmailObjectClass.comments.Syntax -->](#comments)<br/><!-- INCLUDE #EmailObjectClass.comments.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.from.Syntax -->](#from)<br/><!-- INCLUDE #EmailObjectClass.from.Summary -->                            |
| [<!-- INCLUDE #EmailObjectClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #EmailObjectClass.headers.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.htmlBody.Syntax -->](#htmlbody)<br/><!-- INCLUDE #EmailObjectClass.htmlBody.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.id.Syntax -->](#id)<br/><!-- INCLUDE #EmailObjectClass.id.Summary -->                                  |
| [<!-- INCLUDE #EmailObjectClass.inReplyTo.Syntax -->](#inreplyto)<br/><!-- INCLUDE #EmailObjectClass.inReplyTo.Summary -->             |
| [<!-- INCLUDE #EmailObjectClass.keywords.Syntax -->](#keywords)<br/><!-- INCLUDE #EmailObjectClass.keywords.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.messageId.Syntax -->](#messageid)<br/><!-- INCLUDE #EmailObjectClass.messageId.Summary -->             |
| [<!-- INCLUDE #EmailObjectClass.receivedAt.Syntax -->](#receivedat)<br/><!-- INCLUDE #EmailObjectClass.receivedAt.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.references.Syntax -->](#references)<br/><!-- INCLUDE #EmailObjectClass.references.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.replyTo.Syntax -->](#replyto)<br/><!-- INCLUDE #EmailObjectClass.replyTo.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.sendAt.Syntax -->](#sendat)<br/><!-- INCLUDE #EmailObjectClass.sendAt.Summary -->                      |
| [<!-- INCLUDE #EmailObjectClass.sender.Syntax -->](#sender)<br/><!-- INCLUDE #EmailObjectClass.sender.Summary -->                      |
| [<!-- INCLUDE #EmailObjectClass.size.Syntax -->](#size)<br/><!-- INCLUDE #EmailObjectClass.size.Summary -->                            |
| [<!-- INCLUDE #EmailObjectClass.subject.Syntax -->](#subject)<br/><!-- INCLUDE #EmailObjectClass.subject.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.textBody.Syntax -->](#textbody)<br/><!-- INCLUDE #EmailObjectClass.textBody.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.to.Syntax -->](#to)<br/><!-- INCLUDE #EmailObjectClass.to.Summary -->                                  |

### メールアドレス

メールアドレスを格納するプロパティ ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) はすべて、テキスト・オブジェクト・コレクション型の値を受け付けます。

#### Text

- 単一のメールアドレス: "somebody@domain.com"
- 単一の表示名+メールアドレス: "Somebody <somebody@domain.com>"
- 複数のメールアドレス: "Somebody <somebody@domain.com>,me@home.org"

#### Object

2つのプロパティを持つオブジェクト:

| プロパティ | 型    | 説明                                |
| ----- | ---- | --------------------------------- |
| name  | Text | 表示名 (null も可能) |
| email | Text | メールアドレス                           |

#### Collection

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

`.attachments` プロパティは、<!-- REF #EmailObjectClass.attachments.Summary -->`4D.MailAttachment` オブジェクトのコレクション<!-- END REF -->を格納します。

MailAttachment オブジェクトは [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment) コマンドによって定義されます。 MailAttachment オブジェクトは特有の [プロパティや関数](MailAttachmentClass.md) を持ちます。

## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->**.bcc** : Text<br/>**.bcc** : Object<br/>**.bcc** : Collection<!-- END REF -->

#### 説明

`.bcc` プロパティは、<!-- REF #EmailObjectClass.bcc.Summary -->非表示 (BCC: Blind Carbon Copy) のメール受信者 [アドレス](#メールアドレス) <!-- END REF -->を格納します。

## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->**.bodyStructure** : Object<!-- END REF -->

#### 説明

`.bodyStructure` プロパティは、<!-- REF #EmailObjectClass.bodyStructure.Summary -->(任意) メッセージ本文の完全なMIME ストラクチャーである *EmailBodyPart* オブジェクト<!-- END REF -->を格納します。 [メール本文の扱い](#メール本文の扱い) を参照ください。

`.bodyStructure` オブジェクトには、次のプロパティが格納されています:

| プロパティ       | 型                   | 値                                                                                                                        |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| partID      | Text                | メールのパートを固有に識別する ID                                                                                                       |
| type        | Text                | (必須) パートの Content-Type ヘッダーフィールドの値                                                                    |
| charset     | Text                | Content-Type ヘッダーフィールドの Charset の値                                                                                       |
| encoding    | Text                | `isEncodingProblem=true` の場合、Content-Transfer-Encoding の値が追加されます (デフォルトでは未定義)                         |
| disposition | Text                | パートの Content-Disposition ヘッダーフィールドの値                                                                                     |
| language    | Text の Collection   | パートの Content-Language ヘッダーフィールドの、[RFC3282](https://tools.ietf.org/html/rfc3282) で定義されている言語タグの一覧 (あれば) |
| location    | Text                | パートの Content-Location ヘッダーフィールドの、[RFC2557](https://tools.ietf.org/html/rfc2557) で定義されている URI (あれば)    |
| subParts    | Object の Collection | それぞれの子の本文パート (*EmailBodyPart* オブジェクトのコレクション)                                                          |
| headers     | Object の Collection | パート内の全ヘッダーフィールドの、メッセージ内で出現する順の一覧 (*EmailHeader* オブジェクトのコレクション。[headers](#headers) プロパティ参照)            |

## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->**.bodyValues** : Object<!-- END REF -->

#### 説明

`.bodyValues` プロパティは、<!-- REF #EmailObjectClass.bodyValues.Summary -->
`bodyStructure` の <partID\> 毎にオブジェクトを格納している *EmailBodyValue* オブジェクト<!-- END REF -->を格納します (任意)。 [メール本文の扱い](#メール本文の扱い) を参照ください。

`.bodyValues` オブジェクトには、次のプロパティが格納されています:

| プロパティ                                      | 型       | 値                                                                                                         |
| ------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------- |
| *partID*.value             | テキスト    | 本文パートの値                                                                                                   |
| *partID*.isEncodingProblem | boolean | 文字セットをデコーディング中に、不正なフォーマットのセクション、未知の文字セット、あるいは未知の content-transfer-encoding が見つかった場合には true。 デフォルトは false。 |

## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->**.cc** : Text<br/>**.cc** : Object<br/>**.cc** : Collection<!-- END REF -->

#### 説明

`.cc` プロパティは、<!-- REF #EmailObjectClass.cc.Summary -->追加 (CC: Carbon Copy) のメール受信者 [アドレス](#メールアドレス) <!-- END REF -->を格納します。

## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->**.comments** : Text<!-- END REF -->

#### 説明

`.comments` プロパティは、<!-- REF #EmailObjectClass.comments.Summary -->追加のコメントのヘッダー<!-- END REF -->を格納します。

コメントはメッセージのヘッダーセクション内にのみ表示されます (つまり本文部分には触れないということです)。

特定のフォーマット条件についての詳細は、[RFC#5322](https://tools.ietf.org/html/rfc5322) を参照ください。

## .from

<!-- REF #EmailObjectClass.from.Syntax -->**.from** : Text<br/>**.from** : Object<br/>**.from** : Collection<!-- END REF -->

#### 説明

`.from` プロパティは、<!-- REF #EmailObjectClass.from.Summary -->メールの送信元 [アドレス](#メールアドレス)<!-- END REF --> を格納します。

送信されるメールには、それぞれ [sender](#sender) および **from** アドレスの両方がついています:

- sender ドメインは、受信側のメールサーバーがセッションを開いたときに受け取るドメインです。
- from アドレスは、受信者から見えるアドレスです。

混乱を避けるため、sender および from アドレスには同じアドレスを使用することが推奨されます。

## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->**.headers** : Collection<!-- END REF -->

#### 説明

`.headers` プロパティは、<!-- REF #EmailObjectClass.headers.Summary -->メッセージ内で現れる順番どおりの `EmailHeader` オブジェクトのコレクション<!-- END REF -->を格納します。 これによってユーザーは拡張された (登録された) ヘッダーや、ユーザー定義された (登録されていない、"X" で始まる) ヘッダーを追加することができます。

> メールレベルですでにプロパティとして設定されている "from" または "cc" などのヘッダーを `EmailHeader` オブジェクトプロパティが定義している場合、`EmailHeader` プロパティは無視されます。

ヘッダーコレクションの各オブジェクトには、次のプロパティが格納されることがあります:

| プロパティ                                                                        | 型    | 値                                                                                                                                          |
| ---------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [].name  | テキスト | (必須) [RFC#5322](https://tools.ietf.org/html/rfc5322) で定義されているヘッダーフィールド名。 null または未定義の場合には、ヘッダーフィールドは MIME ヘッダーに追加されません。 |
| [].value | テキスト | [RFC#5322](https://tools.ietf.org/html/rfc5322) で定義されているヘッダーフィールド値。                                                                        |

## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->**.htmlBody** : Text<!-- END REF -->

#### 説明

`.htmlBody` プロパティは、<!-- REF #EmailObjectClass.htmlBody.Summary -->(任意、SMTPのみ) HTML形式のメールメッセージ (デフォルトの文字セットは UTF-8)<!-- END REF --> を格納します。 [メール本文の扱い](#メール本文の扱い) を参照ください。

## .id

<!-- REF #EmailObjectClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### 説明

[IMAP transporter](IMAPTransporterClass.md) のみ。

`.id` プロパティは、<!-- REF #EmailObjectClass.id.Summary -->IMAP サーバーからの固有ID<!-- END REF --> を格納します。

## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->**.inReplyTo** : Text<!-- END REF -->

#### 説明

`.inReplyTo` プロパティは、<!-- REF #EmailObjectClass.inReplyTo.Summary -->カレントメッセージが返信している、元のメッセージのメッセージID<!-- END REF --> を格納します。

特定のフォーマット条件についての詳細は、[RFC#5322](https://tools.ietf.org/html/rfc5322) を参照ください。

## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->**.keywords** : Object<!-- END REF -->

#### 説明

`.keywords` プロパティは、<!-- REF #EmailObjectClass.keywords.Summary -->各プロパティ名がキーワードであり、各値が true であるキーワードセットのオブジェクト<!-- END REF -->を格納します。

このプロパティは "keywords" ヘッダーです ([RFC#4021](https://tools.ietf.org/html/rfc4021) 参照)。

| プロパティ                                                   | 型       | 値                                                  |
| ------------------------------------------------------- | ------- | -------------------------------------------------- |
| .\<keyword\> | boolean | 設定するキーワード (値は true でなければなりません)。 |

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

`.messageId` プロパティは、<!-- REF #EmailObjectClass.messageId.Summary -->メッセージ識別ヘッダー ("message-id")<!-- END REF --> を格納します。

通常は、"lettersOrNumbers@domainname" の形式、たとえば "abcdef.123456@4d.com" などです。 この固有ID は特にフォーラムや公開メーリングリストで使用されています。 一般的に、メールサーバーは送信するメッセージにこのヘッダーを自動的に追加します。

## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->**.receivedAt** : Text<!-- END REF -->

#### 説明

[IMAP transporter](IMAPTransporterClass.md) のみ。

`.receivedAt` プロパティは、<!-- REF #EmailObjectClass.receivedAt.Summary -->IMAPサーバーにメールが到着した時間の、ISO 8601 UTC フォーマットでのタイムスタンプ (例: 2020-09-13T16:11:53Z)<!-- END REF --> を格納します。

## .references

<!-- REF #EmailObjectClass.references.Syntax -->**.references** : Collection<!-- END REF -->

#### 説明

`.references` プロパティは、<!-- REF #EmailObjectClass.references.Summary -->返信チェーン内メッセージの、全メッセージID のコレクション<!-- END REF -->を格納します。

特定のフォーマット条件についての詳細は、[RFC#5322](https://tools.ietf.org/html/rfc5322) を参照ください。

## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->**.replyTo** : Text<br/>**.replyTo** : Object<br/>**.replyTo** : Collection<!-- END REF -->

#### 説明

`.replyTo` プロパティは、<!-- REF #EmailObjectClass.replyTo.Summary -->返信用 [アドレス](#メールアドレス)<!-- END REF --> を格納します。

## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->**.sendAt** : Text<!-- END REF -->

#### 説明

`.sendAt` プロパティは、<!-- REF #EmailObjectClass.sendAt.Summary -->メールのタイムスタンプ (ISO 8601 UTCフォーマット)<!-- END REF --> を格納します。

## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->**.sender** : Text<br/>**.sender** : Object<br/>**.sender** : Collection<!-- END REF -->

#### 説明

`.sender` プロパティは、<!-- REF #EmailObjectClass.sender.Summary -->メールのソース [アドレス](#メールアドレス)<!-- END REF --> を格納します。

送信されるメールには、それぞれ **sender** および **[from](#from)** アドレスの両方がついています:

- sender ドメインは、受信側のメールサーバーがセッションを開いたときに受け取るドメインです。
- from アドレスは、受信者から見えるアドレスです。

混乱を避けるため、sender および from アドレスには同じアドレスを使用することが推奨されます。

## .size

<!-- REF #EmailObjectClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### 説明

[IMAP transporter](IMAPTransporterClass.md) のみ。

`.size` プロパティは、<!-- REF #EmailObjectClass.size.Summary -->IMAPサーバーから返された Email オブジェクトのサイズ (バイト単位)<!-- END REF --> を格納します。

## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->**.subject** : Text<!-- END REF -->

#### 説明

`.subject` プロパティは、<!-- REF #EmailObjectClass.subject.Summary -->メールの件名<!-- END REF -->を格納します。

## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->**.textBody** : Text<!-- END REF -->

#### 説明

`.textBody` プロパティは、<!-- REF #EmailObjectClass.textBody.Summary -->(任意、SMTPのみ) 標準テキスト形式のメールメッセージ (デフォルトの文字セットは UTF-8)<!-- END REF --> を格納します。 [メール本文の扱い](#メール本文の扱い) を参照ください。

## .to

<!-- REF #EmailObjectClass.to.Syntax -->**.to** : Text<br/>**.to** : Object<br/>**.to** : Collection<!-- END REF -->

#### 説明

`.to` プロパティは、<!-- REF #EmailObjectClass.to.Summary -->メールのメインの受信者 [アドレス](#メールアドレス)<!-- END REF --> を格納します。
