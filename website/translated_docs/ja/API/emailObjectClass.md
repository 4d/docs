---
id: emails
title: Email
---

4Dにおけるメールの作成・送信・受信は `Email` オブジェクトの操作よっておこなわれます。 このオブジェクトは以下のコマンドと関数によって使用されます:

- SMTP - [`.send()`](smtpTransporterClass.md#send) 関数は SMTP 経由でメールを送信します。
- POP3 - [`.getMail()`](pop3TransporterClass.md#getmail) 関数は POP3サーバーからメールを受信します。
- IMAP - [`.getMail()`](imapTransporterClass.md#getmail) および [`.getMails()`](imapTransporterClass.md#getmails) 関数は IMAPサーバーからメールを受信します。
- `MAIL Convert from MIME` および `MAIL Convert to MIME` コマンドでメールを変換します。


### Email オブジェクト

Email オブジェクトは次のプロパティを提供します:

> 4D は Email オブジェクトのフォーマットは [JMAP specification](https://jmap.io/spec-mail.html) に準拠します。

|                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #emailObjectClass.attachments.Syntax -->](#attachments)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.attachments.Summary -->|
| [<!-- INCLUDE #emailObjectClass.bcc.Syntax -->](#bcc)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.bcc.Summary -->|
| [<!-- INCLUDE #emailObjectClass.bodyStructure.Syntax -->](#bodyStructure)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.bodyStructure.Summary -->|
| [<!-- INCLUDE #emailObjectClass.bodyValues.Syntax -->](#bodyValues)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.bodyValues.Summary -->|
| [<!-- INCLUDE #emailObjectClass.cc.Syntax -->](#cc)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.cc.Summary -->|
| [<!-- INCLUDE #emailObjectClass.comments.Syntax -->](#comments)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.comments.Summary -->|
| [<!-- INCLUDE #emailObjectClass.from.Syntax -->](#from)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.from.Summary -->|
| [<!-- INCLUDE #emailObjectClass.headers.Syntax -->](#headers)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.headers.Summary -->|
| [<!-- INCLUDE #emailObjectClass.htmlBody.Syntax -->](#htmlBody)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.htmlBody.Summary -->|
| [<!-- INCLUDE #emailObjectClass.id.Syntax -->](#id)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.id.Summary -->|
| [<!-- INCLUDE #emailObjectClass.inReplyTo.Syntax -->](#inReplyTo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.inReplyTo.Summary -->|
| [<!-- INCLUDE #emailObjectClass.keywords.Syntax -->](#keywords)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.keywords.Summary -->|
| [<!-- INCLUDE #emailObjectClass.messageId.Syntax -->](#messageId)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.messageId.Summary -->|
| [<!-- INCLUDE #emailObjectClass.receivedAt.Syntax -->](#receivedAt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.receivedAt.Summary -->|
| [<!-- INCLUDE #emailObjectClass.references.Syntax -->](#references)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.references.Summary -->|
| [<!-- INCLUDE #emailObjectClass.replyTo.Syntax -->](#replyTo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.replyTo.Summary -->|
| [<!-- INCLUDE #emailObjectClass.sendAt.Syntax -->](#sendAt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.sendAt.Summary -->|
| [<!-- INCLUDE #emailObjectClass.sender.Syntax -->](#sender)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.sender.Summary -->|
| [<!-- INCLUDE #emailObjectClass.size.Syntax -->](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.size.Summary -->|
| [<!-- INCLUDE #emailObjectClass.subject.Syntax -->](#subject)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.subject.Summary -->|
| [<!-- INCLUDE #emailObjectClass.textBody.Syntax -->](#textBody)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.textBody.Summary -->|
| [<!-- INCLUDE #emailObjectClass.to.Syntax -->](#to)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.to.Summary -->|


### メールアドレス

メールアドレスを格納するプロパティ ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) はすべて、テキスト・オブジェクト・コレクション型の値を受け付けます。

#### テキスト

- 単一のメールアドレス: "somebody@domain.com"
- 単一の表示名+メールアドレス: "Somebody <somebody@domain.com>"
- 複数のメールアドレス: "Somebody <somebody@domain.com>,me@home.org"

#### オブジェクト

2つのプロパティを持つオブジェクト:

| プロパティ | タイプ  | 説明             |
| ----- | ---- | -------------- |
| name  | テキスト | 表示名 (null も可能) |
| email | テキスト | メールアドレス        |

#### コレクション

アドレスオブジェクトのコレクション

## メール本文の扱い

[`textBody`](#textbody) および [`htmlBody`](#htmlbody) はどちらも[SMTP.send()](smtpTransporterClass.md#send) でのみ使用され、これによって単純なメールの送信が可能になります。 プロパティが両方ともある場合、MIME content-type の multipart/alternative が使用されます。 メールクライアントは multipart/alternative パートを認識し、必要に応じてテキスト部または html 部を表示します。

[Email オブジェクト](email-オブジェクト) が MIME ドキュメントからビルドされた場合 (例: `MAIL Convert from MIME` コマンドで生成されたとき) は、[`bodyStructure`](#bodystructure) および [`bodyValues`](#bodyvalues) が [SMTP](smtpTransporterClass.md) に使用されます。 この場合、`bodyStructure` および `bodyValues` プロパティは両方一緒に渡される必要があり、`textBody` および `htmlBody` の使用は推奨されません。

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

<!-- REF #emailObjectClass.attachments.Syntax -->
**.attachments** : Collection<!-- END REF -->


#### 説明



`.attachments` プロパティは、 <!-- REF #emailObjectClass.attachments.Summary -->*attachment* オブジェクトのコレクション<!-- END REF -->を格納します。

attachment オブジェクトは [`MAIL New attachment`](https://doc.4d.com/4dv18/help/command/ja/page1644.html) コマンドによって定義されます。




## .bcc 

<!-- REF #emailObjectClass.bcc.Syntax -->
**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection<!-- END REF -->


#### 説明

`.bcc` プロパティは、 <!-- REF #emailObjectClass.bcc.Summary -->非表示 (BCC: Blind Carbon Copy) のメール受信者 [アドレス](#email-addresses)<!-- END REF -->を格納します。




## .bodyStructure

<!-- REF #emailObjectClass.bodyStructure.Syntax -->
**.bodyStructure** : Object<!-- END REF -->


#### 説明

`.bodyStructure` プロパティは、 <!-- REF #emailObjectClass.bodyStructure.Summary -->(任意) メッセージ本文の完全なMIME ストラクチャーである *EmailBodyPart* オブジェクト<!-- END REF -->を格納します。 [メール本文の扱い](#メール本文の扱い) を参照ください。

`.bodyStructure` オブジェクトには、次のプロパティが格納されています:

| プロパティ       | タイプ            | 結果                                                                                                    |
| ----------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| partID      | テキスト           | メールのパートを固有に識別する ID                                                                                    |
| type        | テキスト           | (必須) パートの Content-Type ヘッダーフィールドの値                                                                    |
| charset     | テキスト           | Content-Type ヘッダーフィールドの Charset の値                                                                    |
| encoding    | テキスト           | `isEncodingProblem=true` の場合、Content-Transfer-Encoding の値が追加されます (デフォルトでは未定義)                         |
| disposition | テキスト           | パートの Content-Disposition ヘッダーフィールドの値                                                                  |
| language    | テキストのコレクション    | パートの Content-Language ヘッダーフィールドの、[RFC3282](https://tools.ietf.org/html/rfc3282) で定義されている言語タグの一覧 (あれば) |
| location    | テキスト           | パートの Content-Location ヘッダーフィールドの、[RFC2557](https://tools.ietf.org/html/rfc2557) で定義されている URI (あれば)    |
| subParts    | オブジェクトのコレクション。 | それぞれの子の本文パート (*EmailBodyPart* オブジェクトのコレクション)                                                          |
| headers     | オブジェクトのコレクション。 | パート内の全ヘッダーフィールドの、メッセージ内で出現する順の一覧 (*EmailHeader* オブジェクトのコレクション。[headers](#headers) プロパティ参照)            |




## .bodyValues

<!-- REF #emailObjectClass.bodyValues.Syntax -->
**.bodyValues** : Object<!-- END REF -->


#### 説明

`.bodyValues` プロパティは、 <!-- REF #emailObjectClass.bodyValues.Summary -->(任意) `bodyStructure` の \<partID\> 毎にオブジェクトを格納している *EmailBodyValue* オブジェクト<!-- END REF -->を格納します。 [メール本文の扱い](#メール本文の扱い) を参照ください。

`.bodyValues` オブジェクトには、次のプロパティが格納されています:

| プロパティ                      | タイプ     | 結果                                                                                                        |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text    | 本文パートの値                                                                                                   |
| *partID*.isEncodingProblem | boolean | 文字セットをデコーディング中に、不正なフォーマットのセクション、未知の文字セット、あるいは未知の content-transfer-encoding が見つかった場合には true。 デフォルトは false。 |




## .cc 

<!-- REF #emailObjectClass.cc.Syntax -->
**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection<!-- END REF -->


#### 説明

`.cc` プロパティは、 <!-- REF #emailObjectClass.cc.Summary -->追加 (CC: Carbon Copy) のメール受信者 [アドレス](#email-addresses)<!-- END REF -->を格納します。






## .comments

<!-- REF #emailObjectClass.comments.Syntax -->
**.comments** : Text<!-- END REF -->


#### 説明

`.comments` プロパティは、 <!-- REF #emailObjectClass.comments.Summary -->追加のコメントのヘッダー<!-- END REF -->を格納します。

コメントはメッセージのヘッダーセクション内にのみ表示されます (つまり本文部分には触れないということです)。

特定のフォーマット条件についての詳細は、[RFC#5322](https://tools.ietf.org/html/rfc5322) を参照ください。




## .from 

<!-- REF #emailObjectClass.from.Syntax -->
**.from** : Text<br>**.from** : Object<br>**.from** : Collection<!-- END REF -->


#### 説明

`.from` プロパティは、 <!-- REF #emailObjectClass.from.Summary -->メールの送信元 [アドレス](#email-addresses)<!-- END REF -->を格納します。


送信されるメールには、それぞれ [sender](#sender) および **from** アドレスの両方がついています:

- sender ドメインは、受信側のメールサーバーがセッションを開いたときに受け取るドメインです。
- from アドレスは、受信者から見えるアドレスです。

混乱を避けるため、sender および from アドレスには同じアドレスを使用することが推奨されます。




## .headers

<!-- REF #emailObjectClass.headers.Syntax -->
**.headers** : Collection<!-- END REF -->


#### 説明

`.headers` プロパティは、 <!-- REF #emailObjectClass.headers.Summary -->メッセージ内で現れる順番どおりの `EmailHeader` オブジェクトのコレクション<!-- END REF -->を格納します。 これによってユーザーは拡張された (登録された) ヘッダーや、ユーザー定義された (登録されていない、"X" で始まる) ヘッダーを追加することができます。

> メールレベルですでにプロパティとして設定されている "from" または "cc" などのヘッダーを `EmailHeader` オブジェクトプロパティが定義している場合、`EmailHeader` プロパティは無視されます。

ヘッダーコレクションの各オブジェクトには、次のプロパティが格納されることがあります:

| プロパティ    | タイプ  | 結果                                                                                                                      |
| -------- | ---- | ----------------------------------------------------------------------------------------------------------------------- |
| [].name  | text | (必須) [RFC#5322](https://tools.ietf.org/html/rfc5322) で定義されているヘッダーフィールド名。 null または未定義の場合には、ヘッダーフィールドは MIME ヘッダーに追加されません。 |
| [].value | text | [RFC#5322](https://tools.ietf.org/html/rfc5322) で定義されているヘッダーフィールド値。                                                     |







## .htmlBody

<!-- REF #emailObjectClass.htmlBody.Syntax -->
**.htmlBody** : Text<!-- END REF -->


#### 説明

`.htmlBody` プロパティは、 <!-- REF #emailObjectClass.htmlBody.Summary -->(任意、SMTPのみ) HTML形式のメールメッセージ (デフォルトの文字セットは UTF-8)<!-- END REF -->を格納します。 [メール本文の扱い](#メール本文の扱い) を参照ください。







## .id

<!-- REF #emailObjectClass.id.Syntax -->
**.id** : Text<!-- END REF -->


#### 説明

[IMAP transporter](imapTransporterClass.md) のみ。

`.id` プロパティは、 <!-- REF #emailObjectClass.id.Summary -->IMAP サーバーからの固有ID<!-- END REF -->を格納します。






## .inReplyTo

<!-- REF #emailObjectClass.inReplyTo.Syntax -->
**.inReplyTo** : Text<!-- END REF -->


#### 説明

`.inReplyTo` プロパティは、 <!-- REF #emailObjectClass.inReplyTo.Summary -->カレントメッセージが返信している、元のメッセージのメッセージID<!-- END REF -->を格納します。

特定のフォーマット条件についての詳細は、[RFC#5322](https://tools.ietf.org/html/rfc5322) を参照ください。






## .keywords

<!-- REF #emailObjectClass.keywords.Syntax -->
**.keywords** : Object<!-- END REF -->


#### 説明

`.keywords` プロパティは、 <!-- REF #emailObjectClass.keywords.Summary -->各プロパティ名がキーワードであり、各値が true であるキーワードセットのオブジェクト<!-- END REF -->を格納します。

このプロパティは "keywords" ヘッダーです ([RFC#4021](https://tools.ietf.org/html/rfc4021) 参照)。

<table spaces-before="0">
  <tr>
    <th>
      プロパティ
    </th>
    
    <th>
      タイプ
    </th>
    
    <th>
      結果
    </th>
  </tr>
  
  <tr>
    <td>
      .\<keyword\>
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      設定するキーワード (値は true でなければなりません)。
    </td>
  </tr>
</table>

予約されたキーワード:
* $draft - メッセージが下書きであることを表します
* $seen - メッセージが読まれたことを表します
* $flagged - メッセージが注視されるべきであることを表します (例: 至急のメール)
* $answered - メッセージに返信がされたことを表します
* $deleted - メッセージが消去されることを表します

#### 例題

```
 var $mail : Object
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```




## .messageId

<!-- REF #emailObjectClass.messageId.Syntax -->
**.messageId** : Text<!-- END REF -->


#### 説明

`.messageId` プロパティは、 <!-- REF #emailObjectClass.messageId.Summary -->メッセージ識別ヘッダー ("message-id")<!-- END REF -->を格納します。

通常は、"lettersOrNumbers@domainname" の形式、たとえば "abcdef.123456@4d.com" などです。 この固有ID は特にフォーラムや公開メーリングリストで使用されています。 一般的に、メールサーバーは送信するメッセージにこのヘッダーを自動的に追加します。



## .receivedAt 

<!-- REF #emailObjectClass.receivedAt.Syntax -->
**.receivedAt** : Text<!-- END REF -->


#### 説明

[IMAP transporter](imapTransporterClass.md) のみ。

`.receivedAt` プロパティは、 <!-- REF #emailObjectClass.receivedAt.Summary -->IMAPサーバーにメールが到着した時間の、ISO 8601 UTC フォーマットでのタイムスタンプ (例: 2020-09-13T16:11:53Z)<!-- END REF -->を格納します。






## .references

<!-- REF #emailObjectClass.references.Syntax -->
**.references** : Collection<!-- END REF -->


#### 説明

`.references` プロパティは、 <!-- REF #emailObjectClass.references.Summary -->返信チェーン内メッセージの、全メッセージID のコレクション<!-- END REF -->を格納します。

特定のフォーマット条件についての詳細は、[RFC#5322](https://tools.ietf.org/html/rfc5322) を参照ください。




## .replyTo 

<!-- REF #emailObjectClass.replyTo.Syntax -->
**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection<!-- END REF -->


#### 説明

`.replyTo` プロパティは、 <!-- REF #emailObjectClass.replyTo.Summary -->返信用 [アドレス](#email-addresses)<!-- END REF -->を格納します。





## .sendAt

<!-- REF #emailObjectClass.sendAt.Syntax -->
**.sendAt** : Text<!-- END REF -->


#### 説明

`.sendAt` プロパティは、 <!-- REF #emailObjectClass.sendAt.Summary -->メールのタイムスタンプ (ISO 8601 UTCフォーマット)<!-- END REF -->を格納します。




## .sender 

<!-- REF #emailObjectClass.sender.Syntax -->
**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection<!-- END REF -->


#### 説明

`.sender` プロパティは、 <!-- REF #emailObjectClass.sender.Summary -->メールのソース [アドレス](#email-addresses)<!-- END REF -->を格納します。


送信されるメールには、それぞれ **sender** および **[from](#from)** アドレスの両方がついています:

- sender ドメインは、受信側のメールサーバーがセッションを開いたときに受け取るドメインです。
- from アドレスは、受信者から見えるアドレスです。

混乱を避けるため、sender および from アドレスには同じアドレスを使用することが推奨されます。




## .size 

<!-- REF #emailObjectClass.size.Syntax -->
**.size** : Integer<!-- END REF -->


#### 説明

[IMAP transporter](imapTransporterClass.md) のみ。

`.size` プロパティは、 <!-- REF #emailObjectClass.size.Summary -->IMAPサーバーから返された Email オブジェクトのサイズ (バイト単位)<!-- END REF -->を格納します。




## .subject

<!-- REF #emailObjectClass.subject.Syntax -->
**.subject** : Text<!-- END REF -->


#### 説明

`.subject` プロパティは、 <!-- REF #emailObjectClass.subject.Summary -->メールの件名<!-- END REF -->を格納します。





## .textBody

<!-- REF #emailObjectClass.textBody.Syntax -->
**.textBody** : Text<!-- END REF -->


#### 説明

`.textBody` プロパティは、 <!-- REF #emailObjectClass.textBody.Summary -->(任意、SMTPのみ) 標準テキスト形式のメールメッセージ (デフォルトの文字セットは UTF-8)<!-- END REF -->を格納します。 [メール本文の扱い](#メール本文の扱い) を参照ください。



## .to 

<!-- REF #emailObjectClass.to.Syntax -->
**.to** : Text<br>**.to** : Object<br>**.to** : Collection<!-- END REF -->


#### 説明

`.to` プロパティは、 <!-- REF #emailObjectClass.to.Summary -->メールのメインの受信者 [アドレス](#メールアドレス)<!-- END REF -->を格納します。 

<style> h2 { background: #d9ebff;}</style>
