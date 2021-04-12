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


### Email Object

Email objects provide the following properties:

> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the Email object.

||
|---|
|[**.attachments** : Collection](#attachments)<p>&nbsp;&nbsp;&nbsp;&nbsp;collection of `4D.MailAttachment` object(s)|
|[**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection](#bcc)<p>&nbsp;&nbsp;&nbsp;&nbsp;Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email|
|[**.bodyStructure** : Object](#bodyStructure)<p>&nbsp;&nbsp;&nbsp;&nbsp;*EmailBodyPart* object, i.e. the full MIME structure of the message body (optional)|
|[**.bodyValues** : Object](#bodyValues)<p>&nbsp;&nbsp;&nbsp;&nbsp;*EmailBodyValue* object, containing an object for each \<partID\> of `bodyStructure` (optional)|
|[**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection](#cc)<p>&nbsp;&nbsp;&nbsp;&nbsp;Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email|
|[**.comments** : Text](#comments)<p>&nbsp;&nbsp;&nbsp;&nbsp;additional comments header|
|[**.from** : Text<br>**.from** : Object<br>**.from** : Collection](#from)<p>&nbsp;&nbsp;&nbsp;&nbsp;Originating [address(es)](#email-addresses) of the email|
|[**.headers** : Collection](#headers)<p>&nbsp;&nbsp;&nbsp;&nbsp;collection of `EmailHeader` objects, in the order they appear in the message|
|[**.htmlBody** : Text](#htmlBody)<p>&nbsp;&nbsp;&nbsp;&nbsp;HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)|
|[**.id** : Text](#id)<p>&nbsp;&nbsp;&nbsp;&nbsp;unique ID from the IMAP server|
|[**.inReplyTo** : Text](#inReplyTo)<p>&nbsp;&nbsp;&nbsp;&nbsp;message identifier(s) of the original message(s) to which the current message is a reply|
|[**.keywords** : Object](#keywords)<p>&nbsp;&nbsp;&nbsp;&nbsp;set of keywords as an object, where each property name is a keyword and each value is true|
|[**.messageId** : Text](#messageId)<p>&nbsp;&nbsp;&nbsp;&nbsp;message identifier header ("message-id")|
|[**.receivedAt** : Text](#receivedAt)<p>&nbsp;&nbsp;&nbsp;&nbsp;timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)|
|[**.references** : Collection](#references)<p>&nbsp;&nbsp;&nbsp;&nbsp;Collection of all message-ids of messages in the preceding reply chain|
|[**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection](#replyTo)<p>&nbsp;&nbsp;&nbsp;&nbsp;[addresse(s)](#email-addresses) for responses|
|[**.sendAt** : Text](#sendAt)<p>&nbsp;&nbsp;&nbsp;&nbsp;Email timestamp in ISO 8601 UTC format|
|[**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection](#sender)<p>&nbsp;&nbsp;&nbsp;&nbsp;email source [addresse(s)](#email-addresses) of the email|
|[**.size** : Integer](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;size (expressed in bytes) of the Email object returned by the IMAP server|
|[**.subject** : Text](#subject)<p>&nbsp;&nbsp;&nbsp;&nbsp;description of topic|
|[**.textBody** : Text](#textBody)<p>&nbsp;&nbsp;&nbsp;&nbsp;Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)|
|[**.to** : Text<br>**.to** : Object<br>**.to** : Collection](#to)<p>&nbsp;&nbsp;&nbsp;&nbsp;primary recipient [addresse(s)](#email-addresses) of the email|


### Email Addresses

All properties that contain email addresses ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) accept a value of text, object, or collection type.

#### Text

- single email: "somebody@domain.com"
- single display name+email: "Somebody <somebody@domain.com>"
- several emails: "Somebody <somebody@domain.com>,me@home.org"

#### Object

An object with two properties:

|Property|Type|Description|
|---|---|---|
|name|Text|Display name (can be null)|
|email|Text|Email address|

#### Collection

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

**.attachments** : Collection

#### Description



The `.attachments` property contains a collection of `4D.MailAttachment` object(s).

Attachment objects are defined through the [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment) command. Attachment objects have specific [properties and functions](MailAttachmentClass.md). 




## .bcc

**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection

#### Description

The `.bcc` property contains the Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email.




## .bodyStructure

**.bodyStructure** : Object

#### Description

The `.bodyStructure` property contains the *EmailBodyPart* object, i.e. the full MIME structure of the message body (optional). See [Handling body part](#handling-body-part) section.

The `.bodyStructure` object contains the following properties:

|Property|Type|Value|
|---|---|---|
|partID|Text|Identifies the part uniquely within the email|
|type|Text|(mandatory) Value of the Content-Type header field of the part|
|charset|Text|Value of the charset parameter of the Content-Type header field|
|encoding|Text|If `isEncodingProblem=true`, the Content-Transfer-Encoding value is added (by default undefined)|
|disposition|Text|Value of the Content-Disposition header field of the part|
|language|Collection of texts|List of language tags, as defined in [RFC3282](https://tools.ietf.org/html/rfc3282), in the Content-Language header field of the part, if present.|
|location|Text|URI, as defined in [RFC2557](https://tools.ietf.org/html/rfc2557), in the Content-Location header field of the part, if present.|
|subParts|Collection of objects|Body parts of each child (collection of *EmailBodyPart* objects)|
|headers|Collection of objects|List of all header fields in the part, in the order they appear in the message (collection of *EmailHeader* objects, see [headers](#headers-) property)|




## .bodyValues

**.bodyValues** : Object

#### Description

The `.bodyValues` property contains the *EmailBodyValue* object, containing an object for each \<partID\> of `bodyStructure` (optional). See [Handling body part](#handling-body-part) section.

The `.bodyValues` object contains the following properties:

|Property|Type|Value|
|---|---|---|
|*partID*.value|text|Value of the body part|
|*partID*.isEncodingProblem|boolean|True if malformed sections are found while decoding the charset, or unknown charset, or unknown content transfer-encoding. False by default|




## .cc

**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection

#### Description

The `.cc` property contains the Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email.






## .comments

**.comments** : Text

#### Description

The `.comments` property contains an additional comments header.

Comments only appear within the header section of the message (keeping the message's body untouched).

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .from

**.from** : Text<br>**.from** : Object<br>**.from** : Collection

#### Description

The `.from` property contains the Originating [address(es)](#email-addresses) of the email.


Each email you send out has both the [sender](#sender) and **from** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .headers

**.headers** : Collection

#### Description

The `.headers` property contains a collection of `EmailHeader` objects, in the order they appear in the message. This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Every object of the headers collection can contain the following properties:

|Property|Type|Value|
|---|---|---|
|[].name|text|(mandatory) Header field name as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322). If null or undefined, the header field is not added to the MIME header.|
|[].value|text|Header field values as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322)|







## .htmlBody

**.htmlBody** : Text

#### Description

The `.htmlBody` property contains the HTML representation of the email message (default charset is UTF-8) (optional, SMTP only). See [Handling body part](#handling-body-part) section.







## .id

**.id** : Text

#### Description

[IMAP transporter](IMAPTransporterClass.md) only.

The `.id` property contains the unique ID from the IMAP server.






## .inReplyTo

**.inReplyTo** : Text

#### Description

The `.inReplyTo` property contains the message identifier(s) of the original message(s) to which the current message is a reply.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).






## .keywords

**.keywords** : Object

#### Description

The `.keywords` property contains a set of keywords as an object, where each property name is a keyword and each value is true.

This property is the "keywords" header (see [RFC#4021](https://tools.ietf.org/html/rfc4021)).

|Property|Type|Value|
|---|---|---|
|.\<keyword\>|boolean|Keyword to set (value must be true)|

Reserved keywords:
* $draft - Indicates a message is a draft
* $seen - Indicates a message has been read
* $flagged - Indicates a message needs special attention (e.g., Urgent)
* $answered - Indicates a message has been replied to
* $deleted - Indicates a message to delete

#### Example

```
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```




## .messageId

**.messageId** : Text

#### Description

The `.messageId` property contains a message identifier header ("message-id").

This header is usually "lettersOrNumbers@domainname", e.g. "abcdef.123456@4d.com". This unique ID is used in particular on forums or public mailing lists. In general, mail servers automatically add this header to the messages they send.



## .receivedAt

**.receivedAt** : Text

#### Description

[IMAP transporter](IMAPTransporterClass.md) only.

The `.receivedAt` property contains the timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z).






## .references

**.references** : Collection

#### Description

The `.references` property contains the Collection of all message-ids of messages in the preceding reply chain.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .replyTo

**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection

#### Description

The `.replyTo` property contains the [addresse(s)](#email-addresses) for responses.





## .sendAt

**.sendAt** : Text

#### Description

The `.sendAt` property contains the Email timestamp in ISO 8601 UTC format.




## .sender

**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection

#### Description

The `.sender` property contains the email source [addresse(s)](#email-addresses) of the email.


Each email you send out has both the **sender** and **[from](#from)** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .size

**.size** : Integer

#### Description

[IMAP transporter](IMAPTransporterClass.md) only.

The `.size` property contains the size (expressed in bytes) of the Email object returned by the IMAP server.




## .subject

**.subject** : Text

#### Description

The `.subject` property contains the description of topic.





## .textBody

**.textBody** : Text

#### Description

The `.textBody` property contains the Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only). See [Handling body part](#handling-body-part) section.



## .to

**.to** : Text<br>**.to** : Object<br>**.to** : Collection

#### Description

The `.to` property contains the primary recipient [addresse(s)](#email-addresses) of the email.


## MAIL Convert from MIME

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Added|
</details>

**MAIL Convert from MIME**( *mime* : Blob ) : Object<br>**MAIL Convert from MIME**( *mime* : Text ) : Object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mime|Blob, Text|->|Email in MIME|
|Result|Object|<-|Email object|

#### Description

The `MAIL Convert from MIME` command converts a MIME document into a valid email object.

>4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the returned email object.

Pass in *mime* a valid MIME document to convert. It can be provided by any mail server or application. You can pass a BLOB or a text *mime* parameter. If the MIME comes from a file, it is recommended to use a BLOB parameter to avoid issues related to charset and line break conversions.

#### Returned object

Email object.

#### Example 1

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

#### Example 2

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

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
|v17 R5|Modified|
</details>

**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mail|Object|->|Email object|
|options|Object|->|Charset and encoding mail options|
|Result|Text|<-|Email object converted to MIME|

#### Description

The `MAIL Convert to MIME` command converts an email object into MIME text. This command is called internally by [SMTP_transporter.send( )](API/SMTPTransporterClass.md#send) to format the email object before sending it. It can be used to analyze the MIME format of the object.

In *mail*, pass the content and the structure details of the email to convert. This includes information such as the email addresses (sender and recipient(s)), the message itself, and the type of display for the message.

>4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the email object.

In *options*, you can set a specific charset and encoding configuration for the mail. The following properties are available:

|Property|	Type|	Description|
|---|---|---|
|headerCharset|	Text|Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s). Possible values:<p><p><table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>mail mode ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul></td></tr><tr><td>mail mode ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 & Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 & 8-bit</li></ul></td></tr><tr><td>mail mode UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)</tr><tr><td>mail mode UTF8 in base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & base64</td></tr></table>|
|bodyCharset|	Text|	Charset and encoding used for the html and text body contents of the email. Possible values: Same as for headerCharset (see above)|

If the *options* parameter is omitted, the mail mode UTF8 configuration is used for header and body parts.


#### Example

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
