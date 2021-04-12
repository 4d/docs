---
id: emails
title: Email
---

Creating, sending or receiving emails in 4D is done by handling an `Email` object. This object is used by the following commands and methods:

- SMTP - [`.send()`](smtpTransporterClass.md#send) function to send an email through SMTP
- POP3 - [`.getMail()`](pop3TransporterClass.md#getmail) function to get an email from a POP3 server
- IMAP - [`.getMail()`](imapTransporterClass.md#getmail) and [`.getMails()`](imapTransporterClass.md#getmails) functions to get emails from an IMAP server.
- `MAIL Convert from MIME` and `MAIL Convert to MIME` commands to convert emails


### Email オブジェクト

Email objects provide the following properties:

> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the Email object.

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

## Handling body part

The [`textBody`](#textbody) and [`htmlBody`](#htmlbody) properties are only used with the [SMTP.send()](smtpTransporterClass.md#send) function to allow sending simple mails. When both property are filled, the MIME content-type multipart/alternative is used. The email client should then recognize the multipart/alternative part and display the text part or html part as necessary.

[`bodyStructure`](#bodystructure) and [`bodyValues`](#bodyvalues) are used for [SMTP](smtpTransporterClass.md) when the [Email object](email-object) is built from a MIME document, e.g. when generated by the `MAIL Convert from MIME` command. In this case, both `bodyStructure` and `bodyValues` properties must be passed together, and it is not recommended to use `textBody` and `htmlBody`.

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

<!-- REF #emailObjectClass.attachments.Syntax -->
**.attachments** : Collection<!-- END REF -->


#### 説明



`.attachments` プロパティは、 <!-- REF #emailObjectClass.attachments.Summary -->*attachment* オブジェクトのコレクション<!-- END REF -->を格納します。

Attachment objects are defined through the [`MAIL New attachment`](https://doc.4d.com/4dv18/help/command/en/page1644.html) command.




## .bcc 

<!-- REF #emailObjectClass.bcc.Syntax -->
**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection<!-- END REF -->


#### 説明

`.bcc` プロパティは、 <!-- REF #emailObjectClass.bcc.Summary -->非表示 (BCC: Blind Carbon Copy) のメール受信者 [アドレス](#email-addresses)<!-- END REF -->を格納します。




## .bodyStructure

<!-- REF #emailObjectClass.bodyStructure.Syntax -->
**.bodyStructure** : Object<!-- END REF -->


#### 説明

`.bodyStructure` プロパティは、 <!-- REF #emailObjectClass.bodyStructure.Summary -->(任意) メッセージ本文の完全なMIME ストラクチャーである *EmailBodyPart* オブジェクト<!-- END REF -->を格納します。 See [Handling body part](#handling-body-part) section.

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

<!-- REF #emailObjectClass.bodyValues.Syntax -->
**.bodyValues** : Object<!-- END REF -->


#### 説明

`.bodyValues` プロパティは、 <!-- REF #emailObjectClass.bodyValues.Summary -->(任意) `bodyStructure` の \<partID\> 毎にオブジェクトを格納している *EmailBodyValue* オブジェクト<!-- END REF -->を格納します。 See [Handling body part](#handling-body-part) section.

`.bodyValues` オブジェクトには、次のプロパティが格納されています:

| プロパティ                      | タイプ     | 結果                                                                                                                                          |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text    | Value of the body part                                                                                                                      |
| *partID*.isEncodingProblem | boolean | True if malformed sections are found while decoding the charset, or unknown charset, or unknown content transfer-encoding. False by default |




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

Comments only appear within the header section of the message (keeping the message's body untouched).

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .from 

<!-- REF #emailObjectClass.from.Syntax -->
**.from** : Text<br>**.from** : Object<br>**.from** : Collection<!-- END REF -->


#### 説明

`.from` プロパティは、 <!-- REF #emailObjectClass.from.Summary -->メールの送信元 [アドレス](#email-addresses)<!-- END REF -->を格納します。


Each email you send out has both the [sender](#sender) and **from** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .headers

<!-- REF #emailObjectClass.headers.Syntax -->
**.headers** : Collection<!-- END REF -->


#### 説明

`.headers` プロパティは、 <!-- REF #emailObjectClass.headers.Summary -->メッセージ内で現れる順番どおりの `EmailHeader` オブジェクトのコレクション<!-- END REF -->を格納します。 This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Every object of the headers collection can contain the following properties:

| プロパティ    | タイプ  | 結果                                                                                                                                                                   |
| -------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].name  | text | (mandatory) Header field name as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322). If null or undefined, the header field is not added to the MIME header. |
| [].value | text | Header field values as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                    |







## .htmlBody

<!-- REF #emailObjectClass.htmlBody.Syntax -->
**.htmlBody** : Text<!-- END REF -->


#### 説明

`.htmlBody` プロパティは、 <!-- REF #emailObjectClass.htmlBody.Summary -->(任意、SMTPのみ) HTML形式のメールメッセージ (デフォルトの文字セットは UTF-8)<!-- END REF -->を格納します。 See [Handling body part](#handling-body-part) section.







## .id

<!-- REF #emailObjectClass.id.Syntax -->
**.id** : Text<!-- END REF -->


#### 説明

[IMAP transporter](imapTransporterClass.md) only.

`.id` プロパティは、 <!-- REF #emailObjectClass.id.Summary -->IMAP サーバーからの固有ID<!-- END REF -->を格納します。






## .inReplyTo

<!-- REF #emailObjectClass.inReplyTo.Syntax -->
**.inReplyTo** : Text<!-- END REF -->


#### 説明

`.inReplyTo` プロパティは、 <!-- REF #emailObjectClass.inReplyTo.Summary -->カレントメッセージが返信している、元のメッセージのメッセージID<!-- END REF -->を格納します。

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).






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
      Keyword to set (value must be true)
    </td>
  </tr>
</table>

Reserved keywords:
* $draft - Indicates a message is a draft
* $seen - Indicates a message has been read
* $flagged - Indicates a message needs special attention (e.g., Urgent)
* $answered - Indicates a message has been replied to
* $deleted - Indicates a message to delete

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

This header is usually "lettersOrNumbers@domainname", e.g. "abcdef.123456@4d.com". This unique ID is used in particular on forums or public mailing lists. In general, mail servers automatically add this header to the messages they send.



## .receivedAt 

<!-- REF #emailObjectClass.receivedAt.Syntax -->
**.receivedAt** : Text<!-- END REF -->


#### 説明

[IMAP transporter](imapTransporterClass.md) only.

`.receivedAt` プロパティは、 <!-- REF #emailObjectClass.receivedAt.Summary -->IMAPサーバーにメールが到着した時間の、ISO 8601 UTC フォーマットでのタイムスタンプ (例: 2020-09-13T16:11:53Z)<!-- END REF -->を格納します。






## .references

<!-- REF #emailObjectClass.references.Syntax -->
**.references** : Collection<!-- END REF -->


#### 説明

`.references` プロパティは、 <!-- REF #emailObjectClass.references.Summary -->返信チェーン内メッセージの、全メッセージID のコレクション<!-- END REF -->を格納します。

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




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


Each email you send out has both the **sender** and **[from](#from)** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .size 

<!-- REF #emailObjectClass.size.Syntax -->
**.size** : Integer<!-- END REF -->


#### 説明

[IMAP transporter](imapTransporterClass.md) only.

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

`.textBody` プロパティは、 <!-- REF #emailObjectClass.textBody.Summary -->(任意、SMTPのみ) 標準テキスト形式のメールメッセージ (デフォルトの文字セットは UTF-8)<!-- END REF -->を格納します。 See [Handling body part](#handling-body-part) section.



## .to 

<!-- REF #emailObjectClass.to.Syntax -->
**.to** : Text<br>**.to** : Object<br>**.to** : Collection<!-- END REF -->


#### 説明

`.to` プロパティは、 <!-- REF #emailObjectClass.to.Summary -->メールのメインの受信者 [アドレス](#email-addresses)<!-- END REF -->を格納します。 

<style> h2 { background: #d9ebff;}</style>
