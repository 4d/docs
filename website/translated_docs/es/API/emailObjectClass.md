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
| [**.attachments** : Collection](#attachments)<p>&nbsp;&nbsp;&nbsp;&nbsp;collection of *attachment* object(s)|
| [**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection](#bcc)<p>&nbsp;&nbsp;&nbsp;&nbsp;Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email|
| [**.bodyStructure** : Object](#bodyStructure)<p>&nbsp;&nbsp;&nbsp;&nbsp;*EmailBodyPart* object, i.e. the full MIME structure of the message body (optional)|
| [**.bodyValues** : Object](#bodyValues)<p>&nbsp;&nbsp;&nbsp;&nbsp;*EmailBodyValue* object, containing an object for each \<partID\> of `bodyStructure` (optional)|
| [**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection](#cc)<p>&nbsp;&nbsp;&nbsp;&nbsp;Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email|
| [**.comments** : Text](#comments)<p>&nbsp;&nbsp;&nbsp;&nbsp;additional comments header|
| [**.from** : Text<br>**.from** : Object<br>**.from** : Collection](#from)<p>&nbsp;&nbsp;&nbsp;&nbsp;Originating [address(es)](#email-addresses) of the email|
| [**.headers** : Collection](#headers)<p>&nbsp;&nbsp;&nbsp;&nbsp;collection of `EmailHeader` objects, in the order they appear in the message|
| [**.htmlBody** : Text](#htmlBody)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)|
| [**.id** : Text](#id)<p>&nbsp;&nbsp;&nbsp;&nbsp;unique ID from the IMAP server|
| [**.inReplyTo** : Text](#inReplyTo)<p>&nbsp;&nbsp;&nbsp;&nbsp;message identifier(s) of the original message(s) to which the current message is a reply|
| [**.keywords** : Object](#keywords)<p>&nbsp;&nbsp;&nbsp;&nbsp;set of keywords as an object, where each property name is a keyword and each value is true|
| [**.messageId** : Text](#messageId)<p>&nbsp;&nbsp;&nbsp;&nbsp;message identifier header ("message-id")|
| [**.receivedAt** : Text](#receivedAt)<p>&nbsp;&nbsp;&nbsp;&nbsp;timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)|
| [**.references** : Collection](#references)<p>&nbsp;&nbsp;&nbsp;&nbsp;Collection of all message-ids of messages in the preceding reply chain|
| [**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection](#replyTo)<p>&nbsp;&nbsp;&nbsp;&nbsp;[addresse(s)](#email-addresses) for responses|
| [**.sendAt** : Text](#sendAt)<p>&nbsp;&nbsp;&nbsp;&nbsp;Email timestamp in ISO 8601 UTC format|
| [**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection](#sender)<p>&nbsp;&nbsp;&nbsp;&nbsp;email source [addresse(s)](#email-addresses) of the email|
| [**.size** : Integer](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;size (expressed in bytes) of the Email object returned by the IMAP server|
| [**.subject** : Text](#subject)<p>&nbsp;&nbsp;&nbsp;&nbsp;description of topic|
| [**.textBody** : Text](#textBody)<p>&nbsp;&nbsp;&nbsp;&nbsp;Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)|
| [**.to** : Text<br>**.to** : Object<br>**.to** : Collection](#to)<p>&nbsp;&nbsp;&nbsp;&nbsp;primary recipient [addresse(s)](#email-addresses) of the email|


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

**.attachments** : Collection

#### Descripción



The `.attachments` property contains a collection of *attachment* object(s).

Attachment objects are defined through the [`MAIL New attachment`](https://doc.4d.com/4dv18/help/command/en/page1644.html) command.




## .bcc 

**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection

#### Descripción

The `.bcc` property contains the Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email.




## .bodyStructure

**.bodyStructure** : Object

#### Descripción

The `.bodyStructure` property contains the *EmailBodyPart* object, i.e. the full MIME structure of the message body (optional). See [Handling body part](#handling-body-part) section.

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

**.bodyValues** : Object

#### Descripción

The `.bodyValues` property contains the *EmailBodyValue* object, containing an object for each \<partID\> of `bodyStructure` (optional). See [Handling body part](#handling-body-part) section.

The `.bodyValues` object contains the following properties:

| Propiedad                  | Tipo    | Valor                                                                                                                                       |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text    | Value of the body part                                                                                                                      |
| *partID*.isEncodingProblem | boolean | True if malformed sections are found while decoding the charset, or unknown charset, or unknown content transfer-encoding. False by default |




## .cc 

**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection

#### Descripción

The `.cc` property contains the Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email.






## .comments

**.comments** : Text

#### Descripción

The `.comments` property contains an additional comments header.

Comments only appear within the header section of the message (keeping the message's body untouched).

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .from 

**.from** : Text<br>**.from** : Object<br>**.from** : Collection

#### Descripción

The `.from` property contains the Originating [address(es)](#email-addresses) of the email.


Each email you send out has both the [sender](#sender) and **from** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .headers

**.headers** : Collection

#### Descripción

The `.headers` property contains a collection of `EmailHeader` objects, in the order they appear in the message. This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Every object of the headers collection can contain the following properties:

| Propiedad | Tipo | Valor                                                                                                                                                                |
| --------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].name   | text | (mandatory) Header field name as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322). If null or undefined, the header field is not added to the MIME header. |
| [].value  | text | Header field values as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                    |







## .htmlBody

**.htmlBody** : Text

#### Descripción

The `.htmlBody` property contains the HTML representation of the email message (default charset is UTF-8) (optional, SMTP only). See [Handling body part](#handling-body-part) section.







## .id

**.id** : Text

#### Descripción

[IMAP transporter](imapTransporterClass.md) only.

The `.id` property contains the unique ID from the IMAP server.






## .inReplyTo

**.inReplyTo** : Text

#### Descripción

The `.inReplyTo` property contains the message identifier(s) of the original message(s) to which the current message is a reply.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).






## .keywords

**.keywords** : Object

#### Descripción

The `.keywords` property contains a set of keywords as an object, where each property name is a keyword and each value is true.

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

**.messageId** : Text

#### Descripción

The `.messageId` property contains a message identifier header ("message-id").

This header is usually "lettersOrNumbers@domainname", e.g. "abcdef.123456@4d.com". This unique ID is used in particular on forums or public mailing lists. In general, mail servers automatically add this header to the messages they send.



## .receivedAt 

**.receivedAt** : Text

#### Descripción

[IMAP transporter](imapTransporterClass.md) only.

The `.receivedAt` property contains the timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z).






## .references

**.references** : Collection

#### Descripción

The `.references` property contains the Collection of all message-ids of messages in the preceding reply chain.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .replyTo 

**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection

#### Descripción

The `.replyTo` property contains the [addresse(s)](#email-addresses) for responses.





## .sendAt

**.sendAt** : Text

#### Descripción

The `.sendAt` property contains the Email timestamp in ISO 8601 UTC format.




## .sender 

**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection

#### Descripción

The `.sender` property contains the email source [addresse(s)](#email-addresses) of the email.


Each email you send out has both the **sender** and **[from](#from)** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .size 

**.size** : Integer

#### Descripción

[IMAP transporter](imapTransporterClass.md) only.

The `.size` property contains the size (expressed in bytes) of the Email object returned by the IMAP server.




## .subject

**.subject** : Text

#### Descripción

The `.subject` property contains the description of topic.





## .textBody

**.textBody** : Text

#### Descripción

The `.textBody` property contains the Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only). See [Handling body part](#handling-body-part) section.



## .to 

**.to** : Text<br>**.to** : Object<br>**.to** : Collection

#### Descripción

The `.to` property contains the primary recipient [addresse(s)](#email-addresses) of the email. 

<style> h2 { background: #d9ebff;}</style>
