---
id: emails
title: Emails
---

Creating, sending or receiving emails in 4D is done by handling an `Email` object. This object is used by the following commands and methods:

- SMTP - [`.send()`](smtpTransporterClass.md#send) function to send an email through SMTP
- POP3 - [`.getMail()`](pop3TransporterClass.md#getmail) function to get an email from a POP3 server
- IMAP - [`.getMail()`](imapTransporterClass.md#getmail) and [`.getMails()`](imapTransporterClass.md#getmails) functions to get emails from an IMAP server.
- `MAIL Convert from MIME` and `MAIL Convert to MIME` commands to convert emails


### Email Object

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

#### Texto

- single email: "somebody@domain.com"
- single display name+email: "Somebody <somebody@domain.com>"
- several emails: "Somebody <somebody@domain.com>,me@home.org"

#### Objeto

An object with two properties:

| Propiedad | Tipo | Descripción                |
| --------- | ---- | -------------------------- |
| name      | Text | Display name (can be null) |
| email     | Text | Email address              |

#### Collection

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


#### Descripción



The `.attachments` property contains a <!-- REF #emailObjectClass.attachments.Summary -->collection of *attachment* object(s)<!-- END REF -->.

Attachment objects are defined through the [`MAIL New attachment`](https://doc.4d.com/4dv18/help/command/en/page1644.html) command.




## .bcc 

<!-- REF #emailObjectClass.bcc.Syntax -->
**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection<!-- END REF -->


#### Descripción

The `.bcc` property contains the <!-- REF #emailObjectClass.bcc.Summary -->Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.




## .bodyStructure

<!-- REF #emailObjectClass.bodyStructure.Syntax -->
**.bodyStructure** : Object<!-- END REF -->


#### Descripción

The `.bodyStructure` property contains the <!-- REF #emailObjectClass.bodyStructure.Summary -->*EmailBodyPart* object, i.e. the full MIME structure of the message body (optional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyStructure` object contains the following properties:

| Propiedad   | Tipo                  | Valor                                                                                                                                                   |
| ----------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | Texto                 | Identifies the part uniquely within the email                                                                                                           |
| type        | Texto                 | (mandatory) Value of the Content-Type header field of the part                                                                                          |
| charset     | Texto                 | Value of the charset parameter of the Content-Type header field                                                                                         |
| encoding    | Texto                 | If `isEncodingProblem=true`, the Content-Transfer-Encoding value is added (by default undefined)                                                        |
| disposition | Texto                 | Value of the Content-Disposition header field of the part                                                                                               |
| lenguaje    | Collection of texts   | List of language tags, as defined in [RFC3282](https://tools.ietf.org/html/rfc3282), in the Content-Language header field of the part, if present.      |
| location    | Texto                 | URI, as defined in [RFC2557](https://tools.ietf.org/html/rfc2557), in the Content-Location header field of the part, if present.                        |
| subParts    | Collection of objects | Body parts of each child (collection of *EmailBodyPart* objects)                                                                                        |
| headers     | Collection of objects | List of all header fields in the part, in the order they appear in the message (collection of *EmailHeader* objects, see [headers](#headers-) property) |




## .bodyValues

<!-- REF #emailObjectClass.bodyValues.Syntax -->
**.bodyValues** : Object<!-- END REF -->


#### Descripción

The `.bodyValues` property contains the <!-- REF #emailObjectClass.bodyValues.Summary -->*EmailBodyValue* object, containing an object for each \<partID\> of `bodyStructure` (optional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyValues` object contains the following properties:

| Propiedad                  | Tipo    | Valor                                                                                                                                       |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text    | Value of the body part                                                                                                                      |
| *partID*.isEncodingProblem | boolean | True if malformed sections are found while decoding the charset, or unknown charset, or unknown content transfer-encoding. False by default |




## .cc 

<!-- REF #emailObjectClass.cc.Syntax -->
**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection<!-- END REF -->


#### Descripción

The `.cc` property contains the <!-- REF #emailObjectClass.cc.Summary -->Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.






## .comments

<!-- REF #emailObjectClass.comments.Syntax -->
**.comments** : Text<!-- END REF -->


#### Descripción

The `.comments` property contains an <!-- REF #emailObjectClass.comments.Summary -->additional comments header<!-- END REF -->.

Comments only appear within the header section of the message (keeping the message's body untouched).

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .from 

<!-- REF #emailObjectClass.from.Syntax -->
**.from** : Text<br>**.from** : Object<br>**.from** : Collection<!-- END REF -->


#### Descripción

The `.from` property contains the <!-- REF #emailObjectClass.from.Summary -->Originating [address(es)](#email-addresses) of the email<!-- END REF -->.


Each email you send out has both the [sender](#sender) and **from** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .headers

<!-- REF #emailObjectClass.headers.Syntax -->
**.headers** : Collection<!-- END REF -->


#### Descripción

The `.headers` property contains a <!-- REF #emailObjectClass.headers.Summary -->collection of `EmailHeader` objects, in the order they appear in the message<!-- END REF -->. This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Every object of the headers collection can contain the following properties:

| Propiedad | Tipo | Valor                                                                                                                                                                |
| --------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].name   | text | (mandatory) Header field name as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322). If null or undefined, the header field is not added to the MIME header. |
| [].value  | text | Header field values as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                    |







## .htmlBody

<!-- REF #emailObjectClass.htmlBody.Syntax -->
**.htmlBody** : Text<!-- END REF -->


#### Descripción

The `.htmlBody` property contains the <!-- REF #emailObjectClass.htmlBody.Summary -->HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. See [Handling body part](#handling-body-part) section.







## .id

<!-- REF #emailObjectClass.id.Syntax -->
**.id** : Text<!-- END REF -->


#### Descripción

[IMAP transporter](imapTransporterClass.md) only.

The `.id` property contains the <!-- REF #emailObjectClass.id.Summary -->unique ID from the IMAP server<!-- END REF -->.






## .inReplyTo

<!-- REF #emailObjectClass.inReplyTo.Syntax -->
**.inReplyTo** : Text<!-- END REF -->


#### Descripción

The `.inReplyTo` property contains the <!-- REF #emailObjectClass.inReplyTo.Summary -->message identifier(s) of the original message(s) to which the current message is a reply<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).






## .keywords

<!-- REF #emailObjectClass.keywords.Syntax -->
**.keywords** : Object<!-- END REF -->


#### Descripción

The `.keywords` property contains a <!-- REF #emailObjectClass.keywords.Summary -->set of keywords as an object, where each property name is a keyword and each value is true<!-- END REF -->.

This property is the "keywords" header (see [RFC#4021](https://tools.ietf.org/html/rfc4021)).

<table spaces-before="0">
  <tr>
    <th>
      Propiedad
    </th>
    
    <th>
      Tipo
    </th>
    
    <th>
      Valor
    </th>
  </tr>
  
  <tr>
    <td>
      . \<keyword\>
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

#### Ejemplo

```
 var $mail : Object
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```




## .messageId

<!-- REF #emailObjectClass.messageId.Syntax -->
**.messageId** : Text<!-- END REF -->


#### Descripción

The `.messageId` property contains a <!-- REF #emailObjectClass.messageId.Summary -->message identifier header ("message-id")<!-- END REF -->.

This header is usually "lettersOrNumbers@domainname", e.g. "abcdef.123456@4d.com". This unique ID is used in particular on forums or public mailing lists. In general, mail servers automatically add this header to the messages they send.



## .receivedAt 

<!-- REF #emailObjectClass.receivedAt.Syntax -->
**.receivedAt** : Text<!-- END REF -->


#### Descripción

[IMAP transporter](imapTransporterClass.md) only.

The `.receivedAt` property contains the <!-- REF #emailObjectClass.receivedAt.Summary -->timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)<!-- END REF -->.






## .references

<!-- REF #emailObjectClass.references.Syntax -->
**.references** : Collection<!-- END REF -->


#### Descripción

The `.references` property contains the <!-- REF #emailObjectClass.references.Summary -->Collection of all message-ids of messages in the preceding reply chain<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .replyTo 

<!-- REF #emailObjectClass.replyTo.Syntax -->
**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection<!-- END REF -->


#### Descripción

The `.replyTo` property contains the <!-- REF #emailObjectClass.replyTo.Summary -->[addresse(s)](#email-addresses) for responses<!-- END REF -->.





## .sendAt

<!-- REF #emailObjectClass.sendAt.Syntax -->
**.sendAt** : Text<!-- END REF -->


#### Descripción

The `.sendAt` property contains the <!-- REF #emailObjectClass.sendAt.Summary -->Email timestamp in ISO 8601 UTC format<!-- END REF -->.




## .sender 

<!-- REF #emailObjectClass.sender.Syntax -->
**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection<!-- END REF -->


#### Descripción

The `.sender` property contains the <!-- REF #emailObjectClass.sender.Summary -->email source [addresse(s)](#email-addresses) of the email<!-- END REF -->.


Each email you send out has both the **sender** and **[from](#from)** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .size 

<!-- REF #emailObjectClass.size.Syntax -->
**.size** : Integer<!-- END REF -->


#### Descripción

[IMAP transporter](imapTransporterClass.md) only.

The `.size` property contains the <!-- REF #emailObjectClass.size.Summary -->size (expressed in bytes) of the Email object returned by the IMAP server<!-- END REF -->.




## .subject

<!-- REF #emailObjectClass.subject.Syntax -->
**.subject** : Text<!-- END REF -->


#### Descripción

The `.subject` property contains the <!-- REF #emailObjectClass.subject.Summary -->description of topic<!-- END REF -->.





## .textBody

<!-- REF #emailObjectClass.textBody.Syntax -->
**.textBody** : Text<!-- END REF -->


#### Descripción

The `.textBody` property contains the <!-- REF #emailObjectClass.textBody.Summary -->Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. See [Handling body part](#handling-body-part) section.



## .to 

<!-- REF #emailObjectClass.to.Syntax -->
**.to** : Text<br>**.to** : Object<br>**.to** : Collection<!-- END REF -->


#### Descripción

The `.to` property contains the <!-- REF #emailObjectClass.to.Summary -->primary recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->. 

<style> h2 { background: #d9ebff;}</style>
