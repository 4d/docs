---
id: EmailObjectClass
title: Email
---

4Dにおけるメールの作成・送信・受信は `Email` オブジェクトの操作よっておこなわれます。

*transporter* クラス関数を使ってメールを取得する際に、 `Email` オブジェクトが作成されます。

- IMAP - [`.getMail()`](IMAPTransporterClass.md#getmail) および [`.getMails()`](IMAPTransporterClass.md#getmails) 関数は IMAPサーバーからメールを受信します。
- POP3 - [`.getMail()`](POP3TransporterClass.md#getmail) 関数は POP3サーバーからメールを受信します。

> また、[`New object`](https://doc.4d.com/4dv18/help/command/en/page1471.html) 4Dコマンドを使って新規かつ空の `Email` オブジェクトを作成してから、[Email オブジェクトプロパティ](#email-オブジェクト) を設定していくことも可能です。

`Email` オブジェクトは SMTP [`.send()`](SMTPTransporterClass.md#send) 関数を使って送信します。

[`MAIL Convert from MIME`](#mail-convert-from-mime) および [`MAIL Convert to MIME`](#mail-convert-to-mime) コマンドは、MIME コンテンツから `Email` オブジェクトに、またはその逆の変換をおこなうのに使用できます。


### Email オブジェクト

Email オブジェクトは次のプロパティを提供します:

> 4D は Email オブジェクトのフォーマットは [JMAP specification](https://jmap.io/spec-mail.html) に準拠します。

|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**.attachments** : Collection](#attachments)<p>&nbsp;&nbsp;&nbsp;&nbsp;collection of `4D.MailAttachment` object(s)                                                                                     |
| [**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection](#bcc)<p>&nbsp;&nbsp;&nbsp;&nbsp;Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email |
| [**.bodyStructure** : Object](#bodystructure)<p>&nbsp;&nbsp;&nbsp;&nbsp;*EmailBodyPart* object, i.e. the full MIME structure of the message body (optional)                                             |
| [**.bodyValues** : Object](#bodyvalues)<p>&nbsp;&nbsp;&nbsp;&nbsp;*EmailBodyValue* object, containing an object for each \<partID\> of `bodyStructure` (optional)                                     |
| [**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection](#cc)<p>&nbsp;&nbsp;&nbsp;&nbsp;Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email        |
| [**.comments** : Text](#comments)<p>&nbsp;&nbsp;&nbsp;&nbsp;additional comments header                                                                                                                  |
| [**.from** : Text<br>**.from** : Object<br>**.from** : Collection](#from)<p>&nbsp;&nbsp;&nbsp;&nbsp;Originating [address(es)](#email-addresses) of the email                                |
| [**.headers** : Collection](#headers)<p>&nbsp;&nbsp;&nbsp;&nbsp;collection of `EmailHeader` objects, in the order they appear in the message                                                            |
| [**.htmlBody** : Text](#htmlbody)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)                                                   |
| [**.id** : Text](#id)<p>&nbsp;&nbsp;&nbsp;&nbsp;unique ID from the IMAP server                                                                                                                          |
| [**.inReplyTo** : Text](#inreplyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;message identifier(s) of the original message(s) to which the current message is a reply                                                  |
| [**.keywords** : Object](#keywords)<p>&nbsp;&nbsp;&nbsp;&nbsp;set of keywords as an object, where each property name is a keyword and each value is true                                                |
| [**.messageId** : Text](#messageid)<p>&nbsp;&nbsp;&nbsp;&nbsp;message identifier header ("message-id")                                                                                                  |
| [**.receivedAt** : Text](#receivedat)<p>&nbsp;&nbsp;&nbsp;&nbsp;timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)                                   |
| [**.references** : Collection](#references)<p>&nbsp;&nbsp;&nbsp;&nbsp;Collection of all message-ids of messages in the preceding reply chain                                                            |
| [**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection](#replyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;[addresse(s)](#email-addresses) for responses                               |
| [**.sendAt** : Text](#sendat)<p>&nbsp;&nbsp;&nbsp;&nbsp;Email timestamp in ISO 8601 UTC format                                                                                                          |
| [**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection](#sender)<p>&nbsp;&nbsp;&nbsp;&nbsp;email source [addresse(s)](#email-addresses) of the email                       |
| [**.size** : Integer](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;size (expressed in bytes) of the Email object returned by the IMAP server                                                                        |
| [**.subject** : Text](#subject)<p>&nbsp;&nbsp;&nbsp;&nbsp;description of topic                                                                                                                          |
| [**.textBody** : Text](#textbody)<p>&nbsp;&nbsp;&nbsp;&nbsp;Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)                                             |
| [**.to** : Text<br>**.to** : Object<br>**.to** : Collection](#to)<p>&nbsp;&nbsp;&nbsp;&nbsp;primary recipient [addresse(s)](#email-addresses) of the email                                  |


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
| name  | Text | 表示名 (null も可能) |
| email | Text | メールアドレス        |

#### コレクション

アドレスオブジェクトのコレクション

### メール本文の扱い

[`textBody`](#textbody) および [`htmlBody`](#htmlbody) はどちらも[SMTP.send()](SMTPTransporterClass.md#send) でのみ使用され、これによって単純なメールの送信が可能になります。 プロパティが両方ともある場合、MIME content-type の multipart/alternative が使用されます。 メールクライアントは multipart/alternative パートを認識し、必要に応じてテキスト部または html 部を表示します。

[Email オブジェクト](email-オブジェクト) が MIME ドキュメントからビルドされた場合 (例: `MAIL Convert from MIME` コマンドで生成されたとき) は、[`bodyStructure`](#bodystructure) および [`bodyValues`](#bodyvalues) が [SMTP](SMTPTransporterClass.md) に使用されます。 この場合、`bodyStructure` および `bodyValues` プロパティは両方一緒に渡される必要があり、`textBody` および `htmlBody` の使用は推奨されません。

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

**.attachments** : Collection

#### 説明



The `.attachments` property contains a collection of `4D.MailAttachment` object(s).

MailAttachment オブジェクトは [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment) コマンドによって定義されます。 MailAttachment オブジェクトは特有の [プロパティや関数](MailAttachmentClass.md) を持ちます。




## .bcc

**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection

#### 説明

The `.bcc` property contains the Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email.




## .bodyStructure

**.bodyStructure** : Object

#### 説明

The `.bodyStructure` property contains the *EmailBodyPart* object, i.e. the full MIME structure of the message body (optional). [メール本文の扱い](#メール本文の扱い) を参照ください。

`.bodyStructure` オブジェクトには、次のプロパティが格納されています:

| プロパティ       | タイプ                 | 値                                                                                                     |
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

**.bodyValues** : Object

#### 説明

The `.bodyValues` property contains the *EmailBodyValue* object, containing an object for each \<partID\> of `bodyStructure` (optional). [メール本文の扱い](#メール本文の扱い) を参照ください。

`.bodyValues` オブジェクトには、次のプロパティが格納されています:

| プロパティ                      | タイプ     | 値                                                                                                         |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text    | 本文パートの値                                                                                                   |
| *partID*.isEncodingProblem | boolean | 文字セットをデコーディング中に、不正なフォーマットのセクション、未知の文字セット、あるいは未知の content-transfer-encoding が見つかった場合には true。 デフォルトは false。 |




## .cc

**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection

#### 説明

The `.cc` property contains the Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email.






## .comments

**.comments** : Text

#### 説明

The `.comments` property contains an additional comments header.

コメントはメッセージのヘッダーセクション内にのみ表示されます (つまり本文部分には触れないということです)。

特定のフォーマット条件についての詳細は、[RFC#5322](https://tools.ietf.org/html/rfc5322) を参照ください。




## .from

**.from** : Text<br>**.from** : Object<br>**.from** : Collection

#### 説明

The `.from` property contains the Originating [address(es)](#email-addresses) of the email.


送信されるメールには、それぞれ [sender](#sender) および **from** アドレスの両方がついています:

- sender ドメインは、受信側のメールサーバーがセッションを開いたときに受け取るドメインです。
- from アドレスは、受信者から見えるアドレスです。

混乱を避けるため、sender および from アドレスには同じアドレスを使用することが推奨されます。




## .headers

**.headers** : Collection

#### 説明

The `.headers` property contains a collection of `EmailHeader` objects, in the order they appear in the message. これによってユーザーは拡張された (登録された) ヘッダーや、ユーザー定義された (登録されていない、"X" で始まる) ヘッダーを追加することができます。

> メールレベルですでにプロパティとして設定されている "from" または "cc" などのヘッダーを `EmailHeader` オブジェクトプロパティが定義している場合、`EmailHeader` プロパティは無視されます。

ヘッダーコレクションの各オブジェクトには、次のプロパティが格納されることがあります:

| プロパティ    | タイプ  | 値                                                                                                                       |
| -------- | ---- | ----------------------------------------------------------------------------------------------------------------------- |
| [].name  | text | (必須) [RFC#5322](https://tools.ietf.org/html/rfc5322) で定義されているヘッダーフィールド名。 null または未定義の場合には、ヘッダーフィールドは MIME ヘッダーに追加されません。 |
| [].value | text | [RFC#5322](https://tools.ietf.org/html/rfc5322) で定義されているヘッダーフィールド値。                                                     |







## .htmlBody

**.htmlBody** : Text

#### 説明

The `.htmlBody` property contains the HTML representation of the email message (default charset is UTF-8) (optional, SMTP only). [メール本文の扱い](#メール本文の扱い) を参照ください。







## .id

**.id** : Text

#### 説明

[IMAP transporter](IMAPTransporterClass.md) のみ。

The `.id` property contains the unique ID from the IMAP server.






## .inReplyTo

**.inReplyTo** : Text

#### 説明

The `.inReplyTo` property contains the message identifier(s) of the original message(s) to which the current message is a reply.

特定のフォーマット条件についての詳細は、[RFC#5322](https://tools.ietf.org/html/rfc5322) を参照ください。






## .keywords

**.keywords** : Object

#### 説明

The `.keywords` property contains a set of keywords as an object, where each property name is a keyword and each value is true.

このプロパティは "keywords" ヘッダーです ([RFC#4021](https://tools.ietf.org/html/rfc4021) 参照)。

| プロパティ          | タイプ     | 値                               |
| -------------- | ------- | ------------------------------- |
| .\<keyword\> | boolean | 設定するキーワード (値は true でなければなりません)。 |

予約されたキーワード:
* $draft - メッセージが下書きであることを表します
* $seen - メッセージが読まれたことを表します
* $flagged - メッセージが注視されるべきであることを表します (例: 至急のメール)
* $answered - メッセージに返信がされたことを表します
* $deleted - メッセージが消去されることを表します

#### 例題

```
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```




## .messageId

**.messageId** : Text

#### 説明

The `.messageId` property contains a message identifier header ("message-id").

通常は、"lettersOrNumbers@domainname" の形式、たとえば "abcdef.123456@4d.com" などです。 この固有ID は特にフォーラムや公開メーリングリストで使用されています。 一般的に、メールサーバーは送信するメッセージにこのヘッダーを自動的に追加します。



## .receivedAt

**.receivedAt** : Text

#### 説明

[IMAP transporter](IMAPTransporterClass.md) のみ。

The `.receivedAt` property contains the timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z).






## .references

**.references** : Collection

#### 説明

The `.references` property contains the Collection of all message-ids of messages in the preceding reply chain.

特定のフォーマット条件についての詳細は、[RFC#5322](https://tools.ietf.org/html/rfc5322) を参照ください。




## .replyTo

**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection

#### 説明

The `.replyTo` property contains the [addresse(s)](#email-addresses) for responses.





## .sendAt

**.sendAt** : Text

#### 説明

The `.sendAt` property contains the Email timestamp in ISO 8601 UTC format.




## .sender

**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection

#### 説明

The `.sender` property contains the email source [addresse(s)](#email-addresses) of the email.


送信されるメールには、それぞれ **sender** および **[from](#from)** アドレスの両方がついています:

- sender ドメインは、受信側のメールサーバーがセッションを開いたときに受け取るドメインです。
- from アドレスは、受信者から見えるアドレスです。

混乱を避けるため、sender および from アドレスには同じアドレスを使用することが推奨されます。




## .size

**.size** : Integer

#### 説明

[IMAP transporter](IMAPTransporterClass.md) のみ。

The `.size` property contains the size (expressed in bytes) of the Email object returned by the IMAP server.




## .subject

**.subject** : Text

#### 説明

The `.subject` property contains the description of topic.





## .textBody

**.textBody** : Text

#### 説明

The `.textBody` property contains the Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only). [メール本文の扱い](#メール本文の扱い) を参照ください。



## .to

**.to** : Text<br>**.to** : Object<br>**.to** : Collection

#### 説明

The `.to` property contains the primary recipient [addresse(s)](#email-addresses) of the email.


## MAIL Convert from MIME

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v18   | 追加 |
</details>

**MAIL Convert from MIME**( *mime* : Blob ) : Object<br>**MAIL Convert from MIME**( *mime* : Text ) : Object
| 引数   | タイプ        |    | 説明           |
| ---- | ---------- |:--:| ------------ |
| mime | Blob, Text | -> | MIME形式のメール   |
| 戻り値  | オブジェクト     | <- | Email オブジェクト |

#### 説明

The `MAIL Convert from MIME` command converts a MIME document into a valid email object.
> 戻り値の Email オブジェクトのフォーマットは [JMAP specification](https://jmap.io/spec-mail.html) に準拠します。

*mime* には、変換する有効な MIME ドキュメントを渡します。 これはどのメールサーバーまたはアプリケーションから提供されたものでも可能です。 *mime* 引数として、BLOB またはテキストを渡すことができます。 MIME がファイルから渡された場合、文字セットと改行コード変換に関する問題を避けるため、BLOB型の引数を使用することが推奨されます。

#### 返されるオブジェクト

Email オブジェクト。

#### 例題 1

テキストドキュメントとして保存された MIME のメールのテンプレートを読み込み、メールを送信します。

```4d
C_BLOB($mime)
C_OBJECT($mail;$server;$transporter;$status)

$mime:=File("/PACKAGE/Mails/templateMail.txt").getContent())

$mail:=[#current_title_incode]($mime)
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
C_TEXT($mime)
C_OBJECT($email;$server;$transporter;$status)

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
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
| v17 R5 | 変更 |
</details>

**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text
| 引数      | タイプ    |    | 説明                      |
| ------- | ------ |:--:| ----------------------- |
| mail    | オブジェクト | -> | Email オブジェクト            |
| options | オブジェクト | -> | 文字セットとエンコーディングのメールオプション |
| 戻り値     | テキスト   | <- | MIME に変換された Emailオブジェクト |

#### 説明

The `MAIL Convert to MIME` command converts an email object into MIME text. このコマンドは、Email オブジェクトを送信する前に整形する目的で[SMTP_transporter.send()](SMTPTransporterClass.md#send) コマンドによって内部的に呼び出されます。 また、オブジェクトの MIME フォーマットを解析するためにも使用されます。

*mail* には、変換するメールのコンテンツとストラクチャーの詳細を渡します。 この情報には、メールアドレス (送信者と受信者)、メッセージそのもの、メッセージの表示タイプなどが含まれます。
> Email オブジェクトのフォーマットは [JMAP specification](https://jmap.io/spec-mail.html) に準拠します。

*options* 引数を渡すと、メールに対して特定の文字セットとエンコーディング設定を指定することができます。 次のプロパティを利用することができます:

| プロパティ         | タイプ  | 説明                                                                                                                                     |
| ------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | メールの以下の部分で使用される文字セットとエンコーディング: 件名、添付ファイル名、メール名の属性。 とりうる値:<p><p><table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td>mail mode ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: 可能なら US-ASCII 、次に可能なら Japanese (ISO-2022-JP) &amp; Quoted-printable 、それも不可なら UTF-8 &amp; Quoted-printable</li><li><i>bodyCharset</i>: 可能なら US-ASCII、次に可能なら Japanese (ISO-2022-JP) &amp; 7-bit、それも不可なら UTF-8 &amp; Quoted-printable</li></ul></td></tr><tr><td>mail mode ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 &amp; Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 &amp; 8-bit</li></ul></td></tr><tr><td>mail mode UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> &amp; <i>bodyCharset</i>: 可能なら US-ASCII、それが不可なら UTF-8 &amp; Quoted-printable (**デフォルト値**)</tr><tr><td>mail mode UTF8 in base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> &amp; <i>bodyCharset</i>: 可能な場合は US-ASCII、それ以外は UTF-8 &amp; base64</td></tr></table> |
| bodyCharset   | Text | メールの HTML およびテキスト本文コンテンツで使用される文字セットとエンコーディング。 取りうる値: headerCharset と同じ(上記参照)                                                           |

*options* 引数が省略された場合、ヘッダーおよび本文においては mail mode UTF8 設定が使用されます。


#### 例題

```4d
C_OBJECT($mail)
C_TEXT($mime)
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
$mime:=[#current_title_incode]($mail)

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


<style> h2 { background: #d9ebff;}</style>
