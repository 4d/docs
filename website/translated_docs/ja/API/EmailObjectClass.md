---
id: EmailObjectClass
title: Email
---

Creating, sending or receiving emails in 4D is done by handling an `Email` object.

`Email` objects are created when receiving mails through a *transporter* class function:

- IMAP - [`.getMail()`](IMAPTransporterClass.md#getmail) and [`.getMails()`](IMAPTransporterClass.md#getmails) functions to get emails from an IMAP server
- POP3 - [`.getMail()`](POP3TransporterClass.md#getmail) function to get an email from a POP3 server.

> You can also create a new, blank `Email` object by calling the [`New object`](https://doc.4d.com/4dv18/help/command/en/page1471.html) 4D command, and then fill it with [Email object properties](#email-object).

You send `Email` objects using the SMTP [`.send()`](SMTPTransporterClass.md#send) function.

[`MAIL Convert from MIME`](#mail-convert-from-mime) and [`MAIL Convert to MIME`](#mail-convert-to-mime) commands can be used to convert `Email` objects to and from MIME contents.


### Email オブジェクト

Email objects provide the following properties:

> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the Email object.

|                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #EmailObjectClass.attachments.Syntax -->](#attachments)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.attachments.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bcc.Syntax -->](#bcc)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bcc.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bodyStructure.Syntax -->](#bodyStructure)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bodyStructure.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bodyValues.Syntax -->](#bodyValues)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bodyValues.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.cc.Syntax -->](#cc)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.cc.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.comments.Syntax -->](#comments)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.comments.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.from.Syntax -->](#from)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.from.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.headers.Syntax -->](#headers)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.headers.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.htmlBody.Syntax -->](#htmlBody)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.htmlBody.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.id.Syntax -->](#id)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.id.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.inReplyTo.Syntax -->](#inReplyTo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.inReplyTo.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.keywords.Syntax -->](#keywords)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.keywords.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.messageId.Syntax -->](#messageId)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.messageId.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.receivedAt.Syntax -->](#receivedAt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.receivedAt.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.references.Syntax -->](#references)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.references.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.replyTo.Syntax -->](#replyTo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.replyTo.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.sendAt.Syntax -->](#sendAt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.sendAt.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.sender.Syntax -->](#sender)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.sender.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.size.Syntax -->](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.size.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.subject.Syntax -->](#subject)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.subject.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.textBody.Syntax -->](#textBody)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.textBody.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.to.Syntax -->](#to)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.to.Summary -->|


### Email Addresses

All properties that contain email addresses ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) accept a value of text, object, or collection type.

#### テキスト

- single email: "somebody@domain.com"
- single display name+email: "Somebody <somebody@domain.com>"
- several emails: "Somebody <somebody@domain.com>,me@home.org"

#### オブジェクト

An object with two properties:

| プロパティ | タイプ  | 説明                         |
| ----- | ---- | -------------------------- |
| name  | テキスト | Display name (can be null) |
| email | テキスト | Email address              |

#### コレクション

A collection of address objects.

### Handling body part

The [`textBody`](#textbody) and [`htmlBody`](#htmlbody) properties are only used with the [SMTP.send()](SMTPTransporterClass.md#send) function to allow sending simple mails. When both property are filled, the MIME content-type multipart/alternative is used. The email client should then recognize the multipart/alternative part and display the text part or html part as necessary.

[`bodyStructure`](#bodystructure) and [`bodyValues`](#bodyvalues) are used for [SMTP](SMTPTransporterClass.md) when the [Email object](email-object) is built from a MIME document, e.g. when generated by the `MAIL Convert from MIME` command. In this case, both `bodyStructure` and `bodyValues` properties must be passed together, and it is not recommended to use `textBody` and `htmlBody`.

#### Example of bodyStructure and bodyValues objects

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

<!-- REF #EmailObjectClass.attachments.Syntax -->
**.attachments** : Collection<!-- END REF -->


#### 説明



`.attachments` プロパティは、 <!-- REF #EmailObjectClass.attachments.Summary -->`4D.MailAttachment` オブジェクトのコレクション<!-- END REF -->を格納します。

Attachment objects are defined through the [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment) command. Attachment objects have specific [properties and functions](MailAttachmentClass.md).




## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->
**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection<!-- END REF -->


#### 説明

`.bcc` プロパティは、 <!-- REF #EmailObjectClass.bcc.Summary -->非表示 (BCC: Blind Carbon Copy) のメール受信者 [アドレス](#email-addresses)<!-- END REF -->を格納します。




## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->
**.bodyStructure** : Object<!-- END REF -->


#### 説明

`.bodyStructure` プロパティは、 <!-- REF #EmailObjectClass.bodyStructure.Summary -->(任意) メッセージ本文の完全なMIME ストラクチャーである *EmailBodyPart* オブジェクト<!-- END REF -->を格納します。 See [Handling body part](#handling-body-part) section.

`.bodyStructure` オブジェクトには、次のプロパティが格納されています:

| プロパティ       | タイプ                   | 結果                                                                                                                                                      |
| ----------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | テキスト                  | Identifies the part uniquely within the email                                                                                                           |
| type        | テキスト                  | (mandatory) Value of the Content-Type header field of the part                                                                                          |
| charset     | テキスト                  | Value of the charset parameter of the Content-Type header field                                                                                         |
| encoding    | テキスト                  | If `isEncodingProblem=true`, the Content-Transfer-Encoding value is added (by default undefined)                                                        |
| disposition | テキスト                  | Value of the Content-Disposition header field of the part                                                                                               |
| language    | Collection of texts   | List of language tags, as defined in [RFC3282](https://tools.ietf.org/html/rfc3282), in the Content-Language header field of the part, if present.      |
| location    | テキスト                  | URI, as defined in [RFC2557](https://tools.ietf.org/html/rfc2557), in the Content-Location header field of the part, if present.                        |
| subParts    | Collection of objects | Body parts of each child (collection of *EmailBodyPart* objects)                                                                                        |
| headers     | Collection of objects | List of all header fields in the part, in the order they appear in the message (collection of *EmailHeader* objects, see [headers](#headers-) property) |




## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->
**.bodyValues** : Object<!-- END REF -->


#### 説明

`.bodyValues` プロパティは、 <!-- REF #EmailObjectClass.bodyValues.Summary -->(任意) `bodyStructure` の \<partID\> 毎にオブジェクトを格納している *EmailBodyValue* オブジェクト<!-- END REF -->を格納します。 See [Handling body part](#handling-body-part) section.

`.bodyValues` オブジェクトには、次のプロパティが格納されています:

| プロパティ                      | タイプ     | 結果                                                                                                                                          |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text    | Value of the body part                                                                                                                      |
| *partID*.isEncodingProblem | boolean | True if malformed sections are found while decoding the charset, or unknown charset, or unknown content transfer-encoding. False by default |




## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->
**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection<!-- END REF -->


#### 説明

The `.cc` property contains the <!-- REF #EmailObjectClass.cc.Summary -->Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.






## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->
**.comments** : Text<!-- END REF -->


#### 説明

`.comments` プロパティは、 <!-- REF #EmailObjectClass.comments.Summary -->追加のコメントのヘッダー<!-- END REF -->を格納します。

Comments only appear within the header section of the message (keeping the message's body untouched).

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .from

<!-- REF #EmailObjectClass.from.Syntax -->
**.from** : Text<br>**.from** : Object<br>**.from** : Collection<!-- END REF -->


#### 説明

`.from` プロパティは、 <!-- REF #EmailObjectClass.from.Summary -->メールの送信元 [アドレス](#email-addresses)<!-- END REF -->を格納します。


Each email you send out has both the [sender](#sender) and **from** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->
**.headers** : Collection<!-- END REF -->


#### 説明

`.headers` プロパティは、 <!-- REF #EmailObjectClass.headers.Summary -->メッセージ内で現れる順番どおりの `EmailHeader` オブジェクトのコレクション<!-- END REF -->を格納します。 This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Every object of the headers collection can contain the following properties:

| プロパティ    | タイプ  | 結果                                                                                                                                                                   |
| -------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].name  | text | (mandatory) Header field name as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322). If null or undefined, the header field is not added to the MIME header. |
| [].value | text | Header field values as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                    |







## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->
**.htmlBody** : Text<!-- END REF -->


#### 説明

`.htmlBody` プロパティは、 <!-- REF #EmailObjectClass.htmlBody.Summary -->(任意、SMTPのみ) HTML形式のメールメッセージ (デフォルトの文字セットは UTF-8)<!-- END REF -->を格納します。 See [Handling body part](#handling-body-part) section.







## .id

<!-- REF #EmailObjectClass.id.Syntax -->
**.id** : Text<!-- END REF -->


#### 説明

[IMAP transporter](IMAPTransporterClass.md) only.

`.id` プロパティは、 <!-- REF #EmailObjectClass.id.Summary -->IMAP サーバーからの固有ID<!-- END REF -->を格納します。






## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->
**.inReplyTo** : Text<!-- END REF -->


#### 説明

`.inReplyTo` プロパティは、 <!-- REF #EmailObjectClass.inReplyTo.Summary -->カレントメッセージが返信している、元のメッセージのメッセージID<!-- END REF -->を格納します。

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).






## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->
**.keywords** : Object<!-- END REF -->


#### 説明

`.keywords` プロパティは、 <!-- REF #EmailObjectClass.keywords.Summary -->各プロパティ名がキーワードであり、各値が true であるキーワードセットのオブジェクト<!-- END REF -->を格納します。

このプロパティは "keywords" ヘッダーです ([RFC#4021](https://tools.ietf.org/html/rfc4021) 参照)。

| プロパティ          | タイプ     | 結果                                  |
| -------------- | ------- | ----------------------------------- |
| .\<keyword\> | boolean | Keyword to set (value must be true) |

Reserved keywords:
* $draft - Indicates a message is a draft
* $seen - Indicates a message has been read
* $flagged - Indicates a message needs special attention (e.g., Urgent)
* $answered - Indicates a message has been replied to
* $deleted - Indicates a message to delete

#### 例題

```
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```




## .messageId

<!-- REF #EmailObjectClass.messageId.Syntax -->
**.messageId** : Text<!-- END REF -->


#### 説明

`.messageId` プロパティは、 <!-- REF #EmailObjectClass.messageId.Summary -->メッセージ識別ヘッダー ("message-id")<!-- END REF -->を格納します。

This header is usually "lettersOrNumbers@domainname", e.g. "abcdef.123456@4d.com". This unique ID is used in particular on forums or public mailing lists. In general, mail servers automatically add this header to the messages they send.



## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->
**.receivedAt** : Text<!-- END REF -->


#### 説明

[IMAP transporter](IMAPTransporterClass.md) only.

`.receivedAt` プロパティは、 <!-- REF #EmailObjectClass.receivedAt.Summary -->IMAPサーバーにメールが到着した時間の、ISO 8601 UTC フォーマットでのタイムスタンプ (例: 2020-09-13T16:11:53Z)<!-- END REF -->を格納します。






## .references

<!-- REF #EmailObjectClass.references.Syntax -->
**.references** : Collection<!-- END REF -->


#### 説明

`.references` プロパティは、 <!-- REF #EmailObjectClass.references.Summary -->返信チェーン内メッセージの、全メッセージID のコレクション<!-- END REF -->を格納します。

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->
**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection<!-- END REF -->


#### 説明

`.replyTo` プロパティは、 <!-- REF #EmailObjectClass.replyTo.Summary -->返信用 [アドレス](#email-addresses)<!-- END REF -->を格納します。





## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->
**.sendAt** : Text<!-- END REF -->


#### 説明

`.sendAt` プロパティは、 <!-- REF #EmailObjectClass.sendAt.Summary -->メールのタイムスタンプ (ISO 8601 UTCフォーマット)<!-- END REF -->を格納します。




## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->
**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection<!-- END REF -->


#### 説明

`.sender` プロパティは、 <!-- REF #EmailObjectClass.sender.Summary -->メールのソース [アドレス](#email-addresses)<!-- END REF -->を格納します。


Each email you send out has both the **sender** and **[from](#from)** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .size

<!-- REF #EmailObjectClass.size.Syntax -->
**.size** : Integer<!-- END REF -->


#### 説明

[IMAP transporter](IMAPTransporterClass.md) only.

`.size` プロパティは、 <!-- REF #EmailObjectClass.size.Summary -->IMAPサーバーから返された Email オブジェクトのサイズ (バイト単位)<!-- END REF -->を格納します。




## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->
**.subject** : Text<!-- END REF -->


#### 説明

`.subject` プロパティは、 <!-- REF #EmailObjectClass.subject.Summary -->メールの件名<!-- END REF -->を格納します。





## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->
**.textBody** : Text<!-- END REF -->


#### 説明

`.textBody` プロパティは、 <!-- REF #EmailObjectClass.textBody.Summary -->(任意、SMTPのみ) 標準テキスト形式のメールメッセージ (デフォルトの文字セットは UTF-8)<!-- END REF -->を格納します。 See [Handling body part](#handling-body-part) section.



## .to

<!-- REF #EmailObjectClass.to.Syntax -->
**.to** : Text<br>**.to** : Object<br>**.to** : Collection<!-- END REF -->


#### 説明

The `.to` property contains the <!-- REF #EmailObjectClass.to.Summary -->primary recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.


## MAIL Convert from MIME

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v18   | 追加 |
</details>

<!-- REF #_command_.MAIL_Convert_from_MIME.Syntax -->
**MAIL Convert from MIME**( *mime* : Blob ) : Object<br>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_from_MIME.Params -->
| 参照   | タイプ       |    | 説明           |
| ---- | --------- |:--:| ------------ |
| mime | BLOB、テキスト | -> | MIME形式のメール   |
| 戻り値  | オブジェクト    | <- | Email オブジェクト |
<!-- END REF -->

#### 説明

`MAIL Convert from MIME` コマンドは、 <!-- REF #_command_.MAIL_Convert_from_MIME.Summary -->MIMEドキュメントを有効な Emailオブジェクトへと変換します<!-- END REF -->。
> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the returned email object.

Pass in *mime* a valid MIME document to convert. It can be provided by any mail server or application. You can pass a BLOB or a text *mime* parameter. If the MIME comes from a file, it is recommended to use a BLOB parameter to avoid issues related to charset and line break conversions.

#### 返されるオブジェクト

Email object.

#### 例題 1

You want to load a mail template saved as MIME in a text document and send an email:

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

In this example, you send directly a 4D Write Pro document containing pictures:

```4d
C_TEXT($mime)
C_OBJECT($email;$server;$transporter;$status)

// Mime export of the 4D Write Pro document
WP EXPORT VARIABLE(WParea;$mime;wk mime html)

// convert 4D Write Pro Mime variable in mail object
$email:=MAIL Convert from MIME($mime)

// Fill your mail object headers
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

<!-- REF #_command_.MAIL_Convert_to_MIME.Syntax -->
**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_to_MIME.Params -->
| 参照      | タイプ    |    | 説明                      |
| ------- | ------ |:--:| ----------------------- |
| mail    | オブジェクト | -> | Email オブジェクト            |
| options | オブジェクト | -> | 文字セットとエンコーディングのメールオプション |
| 戻り値     | テキスト   | <- | MIME に変換された Emailオブジェクト |
<!-- END REF -->

#### 説明

`MAIL Convert to MIME` コマンドは、 <!-- REF #_command_.MAIL_Convert_to_MIME.Summary -->Emailオブジェクトを MIMEテキストへと変換します<!-- END REF -->。 This command is called internally by [SMTP_transporter.send( )](API/SMTPTransporterClass.md#send) to format the email object before sending it. It can be used to analyze the MIME format of the object.

In *mail*, pass the content and the structure details of the email to convert. This includes information such as the email addresses (sender and recipient(s)), the message itself, and the type of display for the message.
> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the email object.

In *options*, you can set a specific charset and encoding configuration for the mail. The following properties are available:

| プロパティ         | タイプ  | 説明                                                                                                                                     |
| ------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | テキスト | メールの以下の部分で使用される文字セットとエンコーディング: 件名、添付ファイル名、メール名の属性。 とりうる値:<p><p><table><tr><th>定数</th><th>結果</th><th>説明</th></tr><tr><td>mail mode ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul></td></tr><tr><td>mail mode ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 & Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 & 8-bit</li></ul></td></tr><tr><td>mail mode UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)</tr><tr><td>mail mode UTF8 in base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & base64</td></tr></table> |
| bodyCharset   | テキスト | メールの HTML およびテキスト本文コンテンツで使用される文字セットとエンコーディング。 Possible values: Same as for headerCharset (see above)                                   |

If the *options* parameter is omitted, the mail mode UTF8 configuration is used for header and body parts.


#### 例題

```4d
C_OBJECT($mail)
C_TEXT($mime)
$mail:=New object

// Creation of a mail
$mail.from:="tsales@massmarket.com"
$mail.subject:="Terrific Sale! This week only!"
$mail.textBody:="Text format email"
$mail.htmlBody:="<html><body>HTML format email</body></html>"
$mail.to:=New collection
$mail.to.push(New object ("email";"noreply@4d.com"))
$mail.to.push(New object ("email";"test@4d.com"))

// transform the mail object in MIME
$mime:=[#current_title_incode]($mail)

// Contents of $mime:
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
