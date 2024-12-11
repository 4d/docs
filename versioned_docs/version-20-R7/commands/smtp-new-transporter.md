---
id: smtp-new-transporter
title: SMTP New transporter
displayed_sidebar: docs
---

<!-- REF #_command_.SMTP New transporter.Syntax -->**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!--REF #_command_.SMTP New transporter.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| server | Object | &#8594;  | Mail server information |
| Function result | 4D.SMTPTransporter | &#8592; | [SMTP transporter object](../API/SMTPTransporterClass.md#smtp-transporter-object) |

<!-- END REF-->

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18|New logFile property|
|17 R5|New bodyCharset and headerCharset properties|
|17 R4|Added|

</details>

#### Description 

The `SMTP New transporter` command <!-- REF #_command_.SMTP New transporter.Summary -->configures a new SMTP connection<!-- END REF --> according to the *server* parameter and returns a new [SMTP transporter object](../API/SMTPTransporterClass.md#smtp-transporter-object) object. The returned transporter object will then usually be used to send emails.

> This command does not open any connection to the SMTP server. The SMTP connection is actually opened when the [`.send()`](../API/SMTPTransporterClass.md#send) function is executed.  
>
>The SMTP connection is automatically closed:
>
> * when the transporter object is destroyed if the [`keepAlive`](../API/SMTPTransporterClass.md#keepalive) property is true (default),
> * after each  [`.send()`](../API/SMTPTransporterClass.md#send) function execution if the [`keepAlive`](../API/SMTPTransporterClass.md#keepalive) property is set to false.

In the *server* parameter, pass an object containing the following properties:

|*server*|Default value (if omitted)|
|---|---|
|[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/SMTPTransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|False|
|.**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object)* object.|none|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/SMTPTransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->|the most secure authentication mode supported by the server is used|
|[<!-- INCLUDE #transporter.bodyCharset.Syntax -->](../API/SMTPTransporterClass.md#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->|`mail mode UTF8` (US-ASCII_UTF8_QP)|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/SMTPTransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->|30|
|[<!-- INCLUDE #transporter.headerCharset.Syntax -->](../API/SMTPTransporterClass.md#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->|`mail mode UTF8` (US-ASCII_UTF8_QP)|
|[<!-- INCLUDE #transporter.host.Syntax -->](../API/SMTPTransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->|*mandatory*
|[<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](../API/SMTPTransporterClass.md#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->|True|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](../API/SMTPTransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->|none|
|**password** : Text<br/>User password for authentication on the server. Not returned in *[SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object)* object.|none|
|[<!-- INCLUDE #transporter.port.Syntax -->](../API/SMTPTransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->|587|
|[<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](../API/SMTPTransporterClass.md#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->|100|
|[<!-- INCLUDE #transporter.user.Syntax -->](../API/SMTPTransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->|none|

#### Result

The function returns a [**SMTP transporter object**](../API/SMTPTransporterClass.md#smtp-transporter-object). All returned properties are **read-only**.

#### Example

```4d
 $server:=New object
 $server.host:="smtp.gmail.com" //Mandatory
 $server.port:=465
 $server.user:="4D@gmail.com"
 $server.password:="XXXX"
 $server.logFile:="LogTest.txt" //Extended log to save in the Logs folder

 var $transporter : 4D.SMTPTransporter
 $transporter:=SMTP New transporter($server)

 $email:=New object
 $email.subject:="my first mail "
 $email.from:="4d@gmail.com"
 $email.to:="4d@4d.com;test@4d.com"
 $email.textBody:="Hello World"
 $email.htmlBody:="<h1>Hello World</h1><h4>'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'</h4>\
 <p>There are many variations of passages of Lorem Ipsum available."\
 +"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"

 $status:=$transporter.send($email)
 If(Not($status.success))
    ALERT("An error occurred sending the mail: "+$status.message)
 End if
```


#### Properties
|  |  |
| --- | --- |
| Command number | 1608 |
| Thread safe | &check; |
| Forbidden on the server ||


