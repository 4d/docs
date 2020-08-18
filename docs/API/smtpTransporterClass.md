---
id: smtpTransporterClass
title: SMTP Transporter 
---

The SMTP transporter allows you to send emails directly through SMTP objects.

It is created with the [SMTP New transporter](#smtp-new-transporter) command.

## Summary

||
|---|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
|[<!-- INCLUDE #smtpTransporterClass.bodyCharset.Syntax -->](#bodycharset)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #smtpTransporterClass.bodyCharset.Summary -->|
|[<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
|[<!-- INCLUDE #smtpTransporterClass.headerCharset.Syntax -->](#headercharset)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #smtpTransporterClass.headerCharset.Summary -->|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
|[<!-- INCLUDE #smtpTransporterClass.keepAlive.Syntax -->](#keepalive)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #smtpTransporterClass.keepAlive.Summary -->|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
|[<!-- INCLUDE #smtpTransporterClass.send().Syntax -->](#send-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #smtpTransporterClass.send().Summary -->|
|[<!-- INCLUDE #smtpTransporterClass.sendTimeOut.Syntax -->](#sendtimeout)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #smtpTransporterClass.sendTimeOut.Summary -->|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|

---

<!-- INCLUDE transporter.SMTP&nbsp;New&nbsp;transporter.Desc -->

---

<!-- INCLUDE transporter.authenticationMode.Desc -->

---

<!-- REF smtpTransporterClass.bodyCharset.Desc -->
## .bodyCharset

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
|v18|Modified|
</details>

<!-- REF #smtpTransporterClass.bodyCharset.Syntax -->
**.bodyCharset** -> text<!-- END REF -->

<!-- REF #smtpTransporterClass.bodyCharset.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Charset and encoding used for the body of the Email object|
<!-- END REF -->


##### Description
The `.bodyCharset` property  <!-- REF #smtpTransporterClass.bodyCharset.Summary -->  contains the charset and encoding used for the body part of the email<!-- END REF -->.

*	subject, 
*	attachment filename(s), 
*	email name.

**Possible values:**

|Constant|	Value|	Comment|
|---|---|---|
|mail mode ISO2022JP|	US-ASCII_ISO-2022-JP_UTF8_QP	|<ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>|
|mail mode ISO88591	|ISO-8859-1	|<ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>|
|mail mode UTF8	|US-ASCII_UTF8_QP|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (default value)|
|mail mode UTF8 in base64|US-ASCII_UTF8_B64|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64|

This property is **read-only**. 

<!-- END REF -->

---


<!-- INCLUDE transporter.checkConnection().Descsmtp -->


---

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

---




<!-- REF smtpTransporterClass.headerCharset.Desc -->
## .headerCharset

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
|v18|Modified|
</details>

<!-- REF #smtpTransporterClass.headerCharset.Syntax -->
**.headerCharset** -> text<!-- END REF -->

<!-- REF #smtpTransporterClass.headerCharset.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Charset and encoding used for headers and names of the Email object|
<!-- END REF -->


##### Description
The `.headerCharset` property  <!-- REF #smtpTransporterClass.headerCharset.Summary --> contains the charset and encoding used for the email header<!-- END REF -->. The header includes the following parts of the email: 

*	subject, 
*	attachment filename(s), 
*	email name.

**Possible values:**

|Constant|	Value|	Comment|
|---|---|---|
|mail mode ISO2022JP|	US-ASCII_ISO-2022-JP_UTF8_QP	|<ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>|
|mail mode ISO88591	|ISO-8859-1	|<ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>|
|mail mode UTF8	|US-ASCII_UTF8_QP|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (default value)|
|mail mode UTF8 in base64|	US-ASCII_UTF8_B64|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64|

This property is **read-only**. 

---

<!-- END REF -->



<!-- INCLUDE transporter.host.Desc -->


---

<!-- REF smtpTransporterClass.keepAlive.Desc -->
## .keepAlive

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

<!-- REF #smtpTransporterClass.keepAlive.Syntax -->
**.keepAlive** -> boolean<!-- END REF -->

<!-- REF #smtpTransporterClass.keepAlive.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if connection is kept alive until the transporter object is destroyed|
<!-- END REF -->


##### Description
The `.keepAlive` property  <!-- REF #smtpTransporterClass.keepAlive.Summary -->contains **True** if the SMTP connection must be kept alive until the `transporter` object is destroyed<!-- END REF -->, and **False** otherwise. By default, if the `keepAlive` property has not been set in the `server` object (used to create the `transporter` object with `SMTP New transporter`), it is **True**.

The SMTP connection is automatically closed:

*	when the `transporter` object is destroyed if the `.keepAlive` property is true,
*	after each `.send( )` function execution if the `.keepAlive` property is set to false.

This property is **read-only**. 

<!-- END REF -->


---



<!-- INCLUDE transporter.logFile.Desc -->

---


<!-- INCLUDE transporter.port.Desc -->


---

<!-- REF smtpTransporterClass.send().Desc -->
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


##### Description
The `.send( )` function  <!-- REF #smtpTransporterClass.send().Summary -->sends the mail object to the SMTP server defined in the `transporter` object and returns a status object<!-- END REF -->. 

>The `transporter` object must have already been created using the `SMTP New transporter` command.

The method creates the SMTP connection if it is not already alive. If the `.keepAlive` property of the `transporter` object is **false**, the SMTP connection is automatically closed after the execution of `.send( )`, otherwise it stays alive until the `transporter` object is destroyed. For more information, please refer to the `SMTP New transporter` command description.

In *mail*, pass a valid `Email` object to send. The origination (where the email is coming from) and destination (one or more recipients) properties must be included, the remaining properties are optional. 

For a description of the `Email` object, please refer to the [`Email` object](https://doc.4d.com/4Dv18R4/4D/18-R4/Email-object.300-4981948.en.html) section. 

<!-- END REF -->

---


<!-- REF smtpTransporterClass.sendTimeOut.Desc -->
## .sendTimeOut

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

<!-- REF #smtpTransporterClass.sendTimeOut.Syntax -->
**.sendTimeOut** -> number<!-- END REF -->

<!-- REF #smtpTransporterClass.sendTimeOut.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|number|<-|Maximum wait time (in seconds) of a mail send call before timeout|
<!-- END REF -->


##### Description
The `.sendTimeOut` property  <!-- REF #smtpTransporterClass.sendTimeOut.Summary -->contains the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs<!-- END REF -->. By default, if the `.sendTimeOut` property has not been set in the `server` object (used to create the `transporter object` with `SMTP New transporter`), the value 100 is used.

This property is **read-only**. 

<!-- END REF -->


---

<!-- INCLUDE transporter.user.Desc -->












