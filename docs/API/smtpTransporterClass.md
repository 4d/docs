---
id: smtpTransporterClass
title: SMTP Transporter 
---

The SMTP transporter class allows you to send emails directly through SMTP objects.



## SMTP Transporter object

SMTP Transporter objects are instantiated with the [SMTP New transporter](#smtp-new-transporter) command. They provide the following properties and functions:


||
|---|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
|[<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->|
|[<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
|[<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
|[<!-- INCLUDE #smtpTransporterClass.keepAlive.Syntax -->](#keepalive)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #smtpTransporterClass.keepAlive.Summary -->|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
|[<!-- INCLUDE #smtpTransporterClass.send().Syntax -->](#send-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #smtpTransporterClass.send().Summary -->|
|[<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|

---

<!-- REF smtpTransporterClass.SMTP New transporter.Desc -->
## SMTP New transporter

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|New logFile property|
|v17 R5|New bodyCharset and headerCharset properties|
|v17 R4|Added|
</details>

<!-- REF #smtpTransporterClass.SMTP New transporter.Syntax -->
**SMTP New transporter**( *server* ) -> object<!-- END REF -->

<!-- REF #smtpTransporterClass.SMTP New transporter.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|object|->|Mail server information|
|Result|object|<-|SMTP Transporter object connection|
<!-- END REF -->


#### Description
The `SMTP New transporter` command <!-- REF #smtpTransporterClass.SMTP New transporter.Summary -->configures a new SMTP connection<!-- END REF -->according to the *server* parameter and returns a new *[SMTP transporter](#smtptransporterobject)* object. The returned transporter object will then usually be used to send emails.

In the *server* parameter, pass an object containing the following properties:

|*server* property|Default value (if omitted)|
|---|---|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|the most secure authentication mode supported by the server is used|
|[<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->|`mail mode UTF8` (US-ASCII_UTF8_QP)|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|30|
|[<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->|`mail mode UTF8` (US-ASCII_UTF8_QP)|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|*mandatory*
|[<!-- INCLUDE #smtpTransporterClass.keepAlive.Syntax -->](#keepalive)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #smtpTransporterClass.keepAlive.Summary -->|True|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|none|
|**password** -> text<p>User password for authentication on the server (not returned in *[SMTP transporter](#smtptransporterobject)* object)|none|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|587|
|[<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->|100|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|none|




|Property|	Type|	Description|
|---|---|---|
|host|	Text|	Name or IP address of the host server to use for SMTP transactions. |
|port	|Number|	(optional) Port to use for SMTP transactions. Default value=587|
|keepAlive	|Boolean|	(optional) True to keep the connection alive until the transporter object is destroyed. Defaut value=True|
|connectionTimeOut|	Number|	(optional) Maximum wait time (in seconds) to establish a connection to the server. Default value=30|
|sendTimeOut	|Number	|(optional) Maximum wait time (in seconds) of a sendMail call before timeout. Default value=100|
|authenticationMode|Text|Authentication mode used to open the session on the SMTP server(\*).<p><p>Possible values:<p><ul><li>SMTP authentication CRAM MD5<br>value = CRAM-MD5<br></li><li>SMTP authentication login<br>value = LOGIN</li><li>SMTP authentication plain<br>value = PLAIN</li></ul>|
|user|	Text|	User name for authentication on the server|
|password|	Text|	User password for authentication on the server|
|acceptUnsecureConnection|	Boolean|	True to allow 4D to establish an unencrypted connection if encrypted connection is not possible (**). If False, an error is returned if encrypted connection is not possible. Default value=False|
|logFile|	Text|	(optional) File path for the extended log file(***). Can be relative (to the current Logs folder) or absolute|
|headerCharset|	Text|	(optional) Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s).<p><p>Possible values: <ul><li>mail mode ISO2022JP<br>value = US-ASCII\_ISO-2022-JP\_UTF8\_QP<ul><li>headerCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul></li><li>mail mode ISO88591<br>value = ISO-8859-1<ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul></li><li>mail mode UTF8<br>value = US-ASCII_UTF8_QP<ul><li>headerCharset & bodyCharset: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (default value)</li></ul><li>mail mode UTF8 in base64<br>value = US-ASCII_UTF8_B64<ul><li>headerCharset & bodyCharset: US-ASCII if possible, otherwise UTF-8 & base64</li></ul></li></ul>
|bodyCharset|	Text|	(optional) Charset and encoding used for the html and text body contents of the email. Possible values: Same as for headerCharset (see above)|



(*) If *authenticationMode* is null or undefined, the most secure authentication mode supported by the server is used.

(**) Available SMTP secured ports are:

*	465: SMTPS
*	587 or 25: SMTP with STARTTLS upgrade if supported by the server.

(\*\*\*) Unlike regular log files (enabled via the `SET DATABASE PARAMETER` command), extended log files store MIME contents of all sent mails and do not have any size limit. For more information, please refer to the **4DSMTPLog.txt** section.


**Returned object**

The returned transporter object contains the following **read-only** properties and functions:

**Properties**

*	[<!-- INCLUDE #transporter.host.Syntax -->](#host)
*	[<!-- INCLUDE #transporter.port.Syntax -->](#port)
*	[<!-- INCLUDE #smtpTransporterClass.keepAlive.Syntax -->](#keepalive)
*	[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout-)
*	[<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)
*	[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)
*	[<!-- INCLUDE #transporter.user.Syntax -->](#user)
*	[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)
*	[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)
*	[<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)
*	[<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)

**Methods**

*	[<!-- INCLUDE #smtpTransporterClass.send().Syntax -->](#send-)
*	[<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkConnection-)

>This command does not open any connection to the SMTP server. The SMTP connection is actually opened when the `.send( )` function is executed.
>
>The SMTP connection is automatically closed:
>
>*	when the transporter object is destroyed if the `keepAlive` property is true (default),
>*	after each `.send( )` function execution if the `keepAlive` property is set to false.

#### Example

```4d
$server:=New object
 $server.host:="smtp.gmail.com" //Mandatory
 $server.port:=465
 $server.user:="4D@gmail.com"
 $server.password:="XXXX"
 $server.logFile:="LogTest.txt" //Extended log to save in the Logs folder
 
 
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

<!-- END REF -->


---

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

---

<!-- INCLUDE transporter.authenticationMode.Desc -->

---

<!-- INCLUDE transporter.bodyCharset.Desc -->


---


<!-- INCLUDE transporter.checkConnection().Desc -->

For information about SMTP status codes, please refer to [this page](https://www.usps.org/info/smtp_status.html).

#### Example

```4d
C_TEXT($pw)
 C_OBJECT($options)
 $options:=New object
 
 $pw:=Request("Please enter your password:")
 $options.host:="smtp.gmail.com"
 
 $options.user:="test@gmail.com"
 $options.password:=$pw
 
 $transporter:=SMTP New transporter($options)
 
 $status:=$transporter.checkConnection()
 If($status.success=True)
    ALERT("SMTP connection check successful!")
 Else
    ALERT("Error # "+String($status.status)+", "+$status.statusText)
 End if
```

---

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

---




<!-- INCLUDE transporter.headerCharset.Desc -->


---

<!-- INCLUDE transporter.host.Desc -->


---


---

## .keepAlive

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

<!-- REF #smtpTransporterClass.keepAlive.Syntax -->
**.keepAlive** -> boolean<!-- END REF -->


#### Description

The `.keepAlive` property  <!-- REF #smtpTransporterClass.keepAlive.Summary -->contains **True** if the SMTP connection must be kept alive until the `transporter` object is destroyed<!-- END REF -->, and **False** otherwise. By default, if the `keepAlive` property has not been set in the `server` object (used to create the `transporter` object with `SMTP New transporter`), it is **True**.

The SMTP connection is automatically closed:

*	when the `transporter` object is destroyed if the `.keepAlive` property is true,
*	after each `.send( )` function execution if the `.keepAlive` property is set to false.

This property is **read-only**. 


---



<!-- INCLUDE transporter.logFile.Desc -->

---


<!-- INCLUDE transporter.port.Desc -->


---

## .send( ) 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
|v17 R5|Modified|
</details>

<!-- REF #smtpTransporterClass.send().Syntax -->
**.send**( *mail* ) -> object<!-- END REF -->

<!-- REF #smtpTransporterClass.send().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mail|object|Email to send|
|Result|object|<-|SMTP status|
<!-- END REF -->


#### Description

The `.send( )` function  <!-- REF #smtpTransporterClass.send().Summary -->sends the mail object to the SMTP server defined in the `transporter` object and returns a status object<!-- END REF -->. 

>The `transporter` object must have already been created using the `SMTP New transporter` command.

The method creates the SMTP connection if it is not already alive. If the `.keepAlive` property of the `transporter` object is **false**, the SMTP connection is automatically closed after the execution of `.send( )`, otherwise it stays alive until the `transporter` object is destroyed. For more information, please refer to the `SMTP New transporter` command description.

In *mail*, pass a valid `Email` object to send. The origination (where the email is coming from) and destination (one or more recipients) properties must be included, the remaining properties are optional. 

For a description of the `Email` object, please refer to the [`Email` object](https://doc.4d.com/4Dv18R4/4D/18-R4/Email-object.300-4981948.en.html) section. 

---


<!-- INCLUDE transporter.sendTimeOut.Desc -->


---

<!-- INCLUDE transporter.user.Desc -->












