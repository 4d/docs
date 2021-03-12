---
id: emails
title: Emails and Attachments
---

Creating, sending or receiving emails in 4D is done by handling an `Email` object. This object is used by the following commands and methods:

- SMTP - [`.send()`](smtpTransporterClass.md#send) function to send an email through SMTP
- POP3 - [`.getMail()`](pop3TransporterClass.md#getmail) function to get an email from a POP3 server
- IMAP - [`.getMail()`](imapTransporterClass.md#getmail) and [`.getMails()`](imapTransporterClass.md#getmails) functions to get emails from an IMAP server.
- [`MAIL Convert from MIME`](#mail-convert-from-mime) and [`MAIL Convert to MIME`](#mail-convert-to-mime) commands to convert emails


### Email Object

Email objects provide the following properties:

> 4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the Email object.

||
|---|
|[<!-- INCLUDE #emailObjectClass.attachments.Syntax -->](#attachments)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.attachments.Summary -->|
|[<!-- INCLUDE #emailObjectClass.bcc.Syntax -->](#bcc)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.bcc.Summary -->|
|[<!-- INCLUDE #emailObjectClass.bodyStructure.Syntax -->](#bodyStructure)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.bodyStructure.Summary -->|
|[<!-- INCLUDE #emailObjectClass.bodyValues.Syntax -->](#bodyValues)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.bodyValues.Summary -->|
|[<!-- INCLUDE #emailObjectClass.cc.Syntax -->](#cc)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.cc.Summary -->|
|[<!-- INCLUDE #emailObjectClass.comments.Syntax -->](#comments)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.comments.Summary -->|
|[<!-- INCLUDE #emailObjectClass.from.Syntax -->](#from)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.from.Summary -->|
|[<!-- INCLUDE #emailObjectClass.headers.Syntax -->](#headers)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.headers.Summary -->|
|[<!-- INCLUDE #emailObjectClass.htmlBody.Syntax -->](#htmlBody)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.htmlBody.Summary -->|
|[<!-- INCLUDE #emailObjectClass.id.Syntax -->](#id)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.id.Summary -->|
|[<!-- INCLUDE #emailObjectClass.inReplyTo.Syntax -->](#inReplyTo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.inReplyTo.Summary -->|
|[<!-- INCLUDE #emailObjectClass.keywords.Syntax -->](#keywords)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.keywords.Summary -->|
|[<!-- INCLUDE #emailObjectClass.messageId.Syntax -->](#messageId)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.messageId.Summary -->|
|[<!-- INCLUDE #emailObjectClass.receivedAt.Syntax -->](#receivedAt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.receivedAt.Summary -->|
|[<!-- INCLUDE #emailObjectClass.references.Syntax -->](#references)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.references.Summary -->|
|[<!-- INCLUDE #emailObjectClass.replyTo.Syntax -->](#replyTo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.replyTo.Summary -->|
|[<!-- INCLUDE #emailObjectClass.sendAt.Syntax -->](#sendAt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.sendAt.Summary -->|
|[<!-- INCLUDE #emailObjectClass.sender.Syntax -->](#sender)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.sender.Summary -->|
|[<!-- INCLUDE #emailObjectClass.size.Syntax -->](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.size.Summary -->|
|[<!-- INCLUDE #emailObjectClass.subject.Syntax -->](#subject)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.subject.Summary -->|
|[<!-- INCLUDE #emailObjectClass.textBody.Syntax -->](#textBody)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.textBody.Summary -->|
|[<!-- INCLUDE #emailObjectClass.to.Syntax -->](#to)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #emailObjectClass.to.Summary -->|


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


#### Description



The `.attachments` property contains a <!-- REF #emailObjectClass.attachments.Summary -->collection of *attachment* object(s)<!-- END REF -->.

Attachment objects are defined through the [`MAIL New attachment`](https://doc.4d.com/4dv18/help/command/en/page1644.html) command.




## .bcc

<!-- REF #emailObjectClass.bcc.Syntax -->
**.bcc** : Text<br>**.bcc** : Object<br>**.bcc** : Collection<!-- END REF -->


#### Description

The `.bcc` property contains the <!-- REF #emailObjectClass.bcc.Summary -->Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.




## .bodyStructure

<!-- REF #emailObjectClass.bodyStructure.Syntax -->
**.bodyStructure** : Object<!-- END REF -->


#### Description

The `.bodyStructure` property contains the <!-- REF #emailObjectClass.bodyStructure.Summary -->*EmailBodyPart* object, i.e. the full MIME structure of the message body (optional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

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

<!-- REF #emailObjectClass.bodyValues.Syntax -->
**.bodyValues** : Object<!-- END REF -->


#### Description

The `.bodyValues` property contains the <!-- REF #emailObjectClass.bodyValues.Summary -->*EmailBodyValue* object, containing an object for each \<partID\> of `bodyStructure` (optional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyValues` object contains the following properties:

|Property|Type|Value|
|---|---|---|
|*partID*.value|text|Value of the body part|
|*partID*.isEncodingProblem|boolean|True if malformed sections are found while decoding the charset, or unknown charset, or unknown content transfer-encoding. False by default|




## .cc

<!-- REF #emailObjectClass.cc.Syntax -->
**.cc** : Text<br>**.cc** : Object<br>**.cc** : Collection<!-- END REF -->


#### Description

The `.cc` property contains the <!-- REF #emailObjectClass.cc.Summary -->Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.






## .comments

<!-- REF #emailObjectClass.comments.Syntax -->
**.comments** : Text<!-- END REF -->


#### Description

The `.comments` property contains an <!-- REF #emailObjectClass.comments.Summary -->additional comments header<!-- END REF -->.

Comments only appear within the header section of the message (keeping the message's body untouched).

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .from

<!-- REF #emailObjectClass.from.Syntax -->
**.from** : Text<br>**.from** : Object<br>**.from** : Collection<!-- END REF -->


#### Description

The `.from` property contains the <!-- REF #emailObjectClass.from.Summary -->Originating [address(es)](#email-addresses) of the email<!-- END REF -->.


Each email you send out has both the [sender](#sender) and **from** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .headers

<!-- REF #emailObjectClass.headers.Syntax -->
**.headers** : Collection<!-- END REF -->


#### Description

The `.headers` property contains a <!-- REF #emailObjectClass.headers.Summary -->collection of `EmailHeader` objects, in the order they appear in the message<!-- END REF -->. This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Every object of the headers collection can contain the following properties:

|Property|Type|Value|
|---|---|---|
|[].name|text|(mandatory) Header field name as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322). If null or undefined, the header field is not added to the MIME header.|
|[].value|text|Header field values as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322)|







## .htmlBody

<!-- REF #emailObjectClass.htmlBody.Syntax -->
**.htmlBody** : Text<!-- END REF -->


#### Description

The `.htmlBody` property contains the <!-- REF #emailObjectClass.htmlBody.Summary -->HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. See [Handling body part](#handling-body-part) section.







## .id

<!-- REF #emailObjectClass.id.Syntax -->
**.id** : Text<!-- END REF -->


#### Description

[IMAP transporter](imapTransporterClass.md) only.

The `.id` property contains the <!-- REF #emailObjectClass.id.Summary -->unique ID from the IMAP server<!-- END REF -->.






## .inReplyTo

<!-- REF #emailObjectClass.inReplyTo.Syntax -->
**.inReplyTo** : Text<!-- END REF -->


#### Description

The `.inReplyTo` property contains the <!-- REF #emailObjectClass.inReplyTo.Summary -->message identifier(s) of the original message(s) to which the current message is a reply<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).






## .keywords

<!-- REF #emailObjectClass.keywords.Syntax -->
**.keywords** : Object<!-- END REF -->


#### Description

The `.keywords` property contains a <!-- REF #emailObjectClass.keywords.Summary -->set of keywords as an object, where each property name is a keyword and each value is true<!-- END REF -->.

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
 var $mail : Object
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```




## .messageId

<!-- REF #emailObjectClass.messageId.Syntax -->
**.messageId** : Text<!-- END REF -->


#### Description

The `.messageId` property contains a <!-- REF #emailObjectClass.messageId.Summary -->message identifier header ("message-id")<!-- END REF -->.

This header is usually "lettersOrNumbers@domainname", e.g. "abcdef.123456@4d.com". This unique ID is used in particular on forums or public mailing lists. In general, mail servers automatically add this header to the messages they send.



## .receivedAt

<!-- REF #emailObjectClass.receivedAt.Syntax -->
**.receivedAt** : Text<!-- END REF -->


#### Description

[IMAP transporter](imapTransporterClass.md) only.

The `.receivedAt` property contains the <!-- REF #emailObjectClass.receivedAt.Summary -->timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)<!-- END REF -->.






## .references

<!-- REF #emailObjectClass.references.Syntax -->
**.references** : Collection<!-- END REF -->


#### Description

The `.references` property contains the <!-- REF #emailObjectClass.references.Summary -->Collection of all message-ids of messages in the preceding reply chain<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).




## .replyTo

<!-- REF #emailObjectClass.replyTo.Syntax -->
**.replyTo** : Text<br>**.replyTo** : Object<br>**.replyTo** : Collection<!-- END REF -->


#### Description

The `.replyTo` property contains the <!-- REF #emailObjectClass.replyTo.Summary -->[addresse(s)](#email-addresses) for responses<!-- END REF -->.





## .sendAt

<!-- REF #emailObjectClass.sendAt.Syntax -->
**.sendAt** : Text<!-- END REF -->


#### Description

The `.sendAt` property contains the <!-- REF #emailObjectClass.sendAt.Summary -->Email timestamp in ISO 8601 UTC format<!-- END REF -->.




## .sender

<!-- REF #emailObjectClass.sender.Syntax -->
**.sender** : Text<br>**.sender** : Object<br>**.sender** : Collection<!-- END REF -->


#### Description

The `.sender` property contains the <!-- REF #emailObjectClass.sender.Summary -->email source [addresse(s)](#email-addresses) of the email<!-- END REF -->.


Each email you send out has both the **sender** and **[from](#from)** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.




## .size

<!-- REF #emailObjectClass.size.Syntax -->
**.size** : Integer<!-- END REF -->


#### Description

[IMAP transporter](imapTransporterClass.md) only.

The `.size` property contains the <!-- REF #emailObjectClass.size.Summary -->size (expressed in bytes) of the Email object returned by the IMAP server<!-- END REF -->.




## .subject

<!-- REF #emailObjectClass.subject.Syntax -->
**.subject** : Text<!-- END REF -->


#### Description

The `.subject` property contains the <!-- REF #emailObjectClass.subject.Summary -->description of topic<!-- END REF -->.





## .textBody

<!-- REF #emailObjectClass.textBody.Syntax -->
**.textBody** : Text<!-- END REF -->


#### Description

The `.textBody` property contains the <!-- REF #emailObjectClass.textBody.Summary -->Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. See [Handling body part](#handling-body-part) section.



## .to

<!-- REF #emailObjectClass.to.Syntax -->
**.to** : Text<br>**.to** : Object<br>**.to** : Collection<!-- END REF -->


#### Description

The `.to` property contains the <!-- REF #emailObjectClass.to.Summary -->primary recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.


## MAIL Convert from MIME

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Added|
</details>

<!-- REF #_command_.MAIL_Convert_from_MIME.Syntax -->
**MAIL Convert from MIME**( *mime* : Blob ) : Object<br>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_from_MIME.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mime|Blob, Text|->|Email in MIME|
|Result|Text|<-|Email object|
<!-- END REF -->

#### Description

The `MAIL Convert from MIME` command <!-- REF #_command_.MAIL_Convert_from_MIME.Summary -->converts a MIME document into a valid email object<!-- END REF -->.

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

<!-- REF #_command_.MAIL_Convert_to_MIME.Syntax -->
**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_to_MIME.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mail|Object|->|Email object|
|options|Object|->|Charset and encoding mail options|
|Result|Text|<-|Email object converted to MIME|
<!-- END REF -->

#### Description

The `MAIL Convert to MIME` command <!-- REF #_command_.MAIL_Convert_to_MIME.Summary -->converts an email object into MIME text<!-- END REF -->. This command is called internally by [SMTP_transporter.send( )](API/smtpTransporterClass.md#send) to format the email object before sending it. It can be used to analyze the MIME format of the object.

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



## MAIL New attachment

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF #_command_.MAIL_New_attachment.Syntax -->
**MAIL New attachment**( *value* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : Object<br>**MAIL New attachment**( *value* : Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL_New_attachment.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|value|Object|->|Path of the attachment file (text), or<br>Blob containing the attachment (BLOB)|
|name|Text, Blob|->|Name + extension used by the mail client to designate the attachment|
|cid|Text|->|ID of attachment (HTML messages only), or " " if no cid is required|
|type|Text|->|Value of the content-type header|
|disposition|Text|->|Value of the content-disposition header: "inline" or "attachment".|
|Result|Object|<-|Attachment object|
<!-- END REF -->


#### Description

The `MAIL New attachment` command <!-- REF #_command_.MAIL_New_attachment.Summary -->allows you to create an attachment object that you can add to an Email object (see [SMTP_transporter.send( )](API/smtpTransporterClass.md#send))<!-- END REF -->.

In *value*, pass the contents of the attachment. You can pass either:

*	a **text** value containing the path of the attachment file, expressed with the system syntax. You can pass a full path name or a simple file name (in which case 4D will search for the file in the same directory as the database structure file).
*	or a **BLOB** value containing the attachment itself.

The optional *name* parameter lets you pass the name and extension to be used by the mail client to designate the attachment. If *name* is omitted and:

*	value is a file path, the name and extension of the file is used,
*	value is a BLOB, a random name without extension is automatically generated.

The optional *cid* parameter lets you pass an internal ID for the attachment. This ID is the value of the Content-Id header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as **\<img src="cid:ID">**. This means that the contents of the attachment (e.g., a picture) should be displayed within the message on the mail client. The final result may vary depending on the mail client. You can pass an empty string in *cid* if you do not want to use this parameter.

You can use the optional *type* parameter to explicitly set the content-type of the attachment file. For example, you can pass a string defining a MIME type ("video/mpeg"). This content-type value will be set for the attachment, regardless of its extension. For more information about MIME types, please refer to the [MIME type page on Wikipedia](https://en.wikipedia.org/wiki/MIME).

By default, if the *type* parameter is omitted or contains an empty string, the content-type of the attachment file is based on its extension. The following rules are applied for the main MIME types:

|Extension|	Content Type|
|---|---|
|jpg, jpeg|	image/jpeg|
|png|	image/png|
|gif|	image/gif|
|pdf|	application/pdf|
|doc|	application/msword|
|xls|	application/vnd.ms-excel|
|ppt|	application/vnd.ms-powerpoint|
|zip|	application/zip|
|gz|	application/gzip|
|json|	application/json|
|js|	application/javascript|
|ps|	application/postscript|
|xml|	application/xml|
|htm, html|	text/html|
|mp3|	audio/mpeg|
|*other*|	application/octet-stream|

The optional disposition parameter lets you pass the content-disposition header of the attachment. You can pass one of the following constants from the "Mail" constant theme:

|Constant|	Value|	Comment|
|---|---|---|
|mail disposition attachment|	attachment	|Set the Content-disposition header value to "attachment", which means that the attachment file must be provided as a link in the message.|
|mail disposition inline|	inline|	Set the Content-disposition header value to "inline", which means that the attachment must be rendered within the message contents, at the "cid" location. The rendering depends on the mail client.|

By default, if the *disposition* parameter is omitted:

*	if the *cid* parameter is used, the Content-disposition header is set to "inline",
*	if the *cid* parameter is not passed or empty, the Content-disposition header is set to "attachment".


#### Attachment object

`MAIL New attachment` returns a new attachment object that you can add to the attachments collection of the mail object handled by the [SMTP_transporter.send( )](API/smtpTransporterClass.md#send) method. The object contains the following read-only properties and methods:

### .cid

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF #emailObjectClass.cid.Syntax -->
**.cid** : Text<!-- END REF -->


#### Description

The `.cid` property contains <!-- REF #emailObjectClass.cid.Summary --> the ID of the attachment<!-- END REF -->. This property is used in HTML messages only. If this property is missing, the file is handled as a simple attachment (link).


### .disposition

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF #emailObjectClass.disposition.Syntax -->
**.disposition** : Text<!-- END REF -->


#### Description

The `.disposition` property contains <!-- REF #emailObjectClass.disposition.Summary -->the value of the Content-Disposition header<!-- END REF -->. Two values are available:

*	"inline": the attachment is rendered within the message contents, at the "cid" location. The rendering depends on the mail client.
*	"attachment": the attachment is provided as a link in the message.

### .name

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF #emailObjectClass.name.Syntax -->
**.name** : Text<!-- END REF -->


#### Description

The `.name` property contains <!-- REF #emailObjectClass.name.Summary -->the name and extension of the attachment<!-- END REF -->.  By default, it is the name of the file, unless another name was specified in the [`MAIL New attachment`](#mail-new-attachment) command.

### .path

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF #emailObjectClass.path.Syntax -->
**.path** : Text<!-- END REF -->


#### Description

The `.path` property contains <!-- REF #emailObjectClass.path.Summary -->the full path of the attachment, if it exists<!-- END REF -->.  


### .type

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF #emailObjectClass.type.Syntax -->
**.type** : Text<!-- END REF -->


#### Description

The `.type` property contains <!-- REF #emailObjectClass.type.Summary -->the content-type of the attachment file<!-- END REF -->.  If this type is not explicitly passed to the [`MAIL New attachment`](#mail-new-attachment) command, the content-type is based on its file extension.


### .getContent()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Added|
</details>

<!-- REF #emailObjectClass.getContent().Syntax -->
**.getContent()** : Blob<!-- END REF -->

<!-- REF #emailObjectClass.getContent().Params -->
|Parameter|Type||Description|
|---|--- |:---:|------|
|Result|Blob|<-|Content of the attachment|
<!-- END REF -->


#### Description

The `.getContent()` function <!-- REF #emailObjectClass.getContent().Summary -->returns the contents of the attachment object in a BLOB<!-- END REF -->. You can use this method with attachment objects received by the [`MAIL Convert from MIME`](#mail-convert-from-mime) command.

### Example 1

You want to send an email with a user-selected file as an attachment and an image embedded in the HTML body:

```4d
$doc:=Select document("";"*";"Please select a file to attach";0)
If (OK=1) //If a document was selected

C_OBJECT($email;$server;$transporter)

$server:=New object
$server.host:="smtp.mail.com"
$server.user:="test_user@mail.com"
$server.password:="p@ssw@rd"
$transporter:=SMTP New transporter($server)

$email:=New object
$email.from:="test_user@mail.com"
$email.to:="test_user@mail.com"
$email.subject:="This is a test message with attachments"

//add a link to download file
$email.attachments:=New collection([#current_title_incode](Document))
//insert an inline picture (use a cid)
$email.attachments[1]:=[#current_title_incode]("c:\\Pictures\\4D.jpg";"";"4D")

$email.htmlBody:="<html>"+\
"<body>Hello World!"+\
"<img src='cid:4D' >"+\
"</body>"+\
"</head>"+\
"</html>"

$transporter.send($email) //send mail

End if
```

### Example 2

You want to send an email with a 4D Write Pro area as an attachment:

```4d
C_BLOB($blob)
WP EXPORT VARIABLE(WPArea;$blob;wk docx)

C_OBJECT($email;$server;$transporter)

$server:=New object
$server.host:="smtp.mail.com"
$server.user:="user@mail.com"
$server.password:="p@ssw@rd"
$transporter:=SMTP New transporter($server)

$email:=New object
$email.from:="user@mail.com"
$email.to:="customer@mail.com"
$email.subject:="New annual report"
$email.textBody:="Please find enclosed our latest annual report."
$email.attachments:=New collection([#current_title_incode]($blob;"Annual report.docx"))

$transporter.send($email)
```





<style> h2 { background: #d9ebff;}</style>
