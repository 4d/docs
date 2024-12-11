---
id: mail-convert-from-mime
title: MAIL Convert from MIME
displayed_sidebar: docs
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18|Added|

</details>

<!-- REF #_command_.MAIL Convert from MIME.Syntax -->**MAIL Convert from MIME**( *mime* : Blob ) : Object<br/>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->


<!-- REF #_command_.MAIL Convert from MIME.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mime|Blob, Text|&#8594; |Email in MIME|
|Result|Object|&#8592;|Email object|
<!-- END REF -->

#### Description

The `MAIL Convert from MIME` command <!-- REF #_command_.MAIL Convert from MIME.Summary -->converts a MIME document into a valid email object<!-- END REF -->.

>4D follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the returned email object.

Pass in *mime* a valid MIME document to convert. It can be provided by any mail server or application. You can pass a BLOB or a text *mime* parameter. If the MIME comes from a file, it is recommended to use a BLOB parameter to avoid issues related to charset and line break conversions.

#### Returned object

Email object.

#### Example 1

You want to load a mail template saved as MIME in a text document and send an email:

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

#### Example 2

In this example, you send directly a 4D Write Pro document containing pictures:

```4d
var $mime: Blob
var $email;$server;$transporter;$status: Object

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




| mime | BLOB, Text | &#8594;  | Email in MIME |
| Function result | Object | &#8592; | Email object |

#### Properties
|  |  |
| --- | --- |
| Command number | 1681 |
| Thread safe | &check; |
| Forbidden on the server ||


