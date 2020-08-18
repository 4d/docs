---
id: transporter
title: Transporter Class
---

## Description


<!-- REF transporter.acceptUnsecureConnection.Desc -->
## .acceptUnsecureConnection

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

<!-- REF #transporter.acceptUnsecureConnection.Syntax -->
**.acceptUnsecureConnection** -> boolean<!-- END REF -->

<!-- REF #transporter.acceptUnsecureConnection.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if unencrypted connections are allowed, False otherwise|
<!-- END REF -->


##### Description
The `.acceptUnsecureConnection` property  <!-- REF #transporter.acceptUnsecureConnection.Summary -->contains **True** if 4D is allowed to establish an unencrypted connection<!-- END REF --> when encrypted connection is not possible.

It contains **False** if unencrypted connections are unallowed, in which case an error in returned when encrypted connection is not possible.

This property is **read-only**. 

<!-- END REF -->
 
--- 
 
 <!-- REF transporter.authenticationMode.Desc -->
## .authenticationMode 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
|v18 R2|Modified|
|v18 R3|Modified|
</details>

<!-- REF #transporter.authenticationMode.Syntax -->
**.authenticationMode** -> text<!-- END REF -->

<!-- REF #transporter.authenticationMode.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Authentication mode actually used to open the session on the mail server|
<!-- END REF -->


##### Description
The `.authenticationMode` property  <!-- REF #transporter.authenticationMode.Summary -->contains the authentication mode actually used<!-- END REF --> to open the session on the mail server. 

By default, the most secured mode supported by the server is used.

Possible values are:


|	Value|	Comment|
|---|---|
|APOP|Authentication using APOP protocol (POP3 only)|
|CRAM-MD5|Authentication using CRAM-MD5 protocol|
|	LOGIN|Authentication using LOGIN protocol|
|	PLAIN|Authentication using PLAIN protocol|


This property is **read-only**. 

<!-- END REF -->


---


<!-- REF transporter.connectionTimeOut.Desc -->
## .connectionTimeOut

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
|v18 R2|Modified|
|v18 R3|Modified|
</details>

<!-- REF #transporter.connectionTimeOut.Syntax -->
**.connectionTimeOut** -> integer<!-- END REF -->

<!-- REF #transporter.connectionTimeOut.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|integer|<-|Maximum wait time (in seconds) to establish a connection to the server|
<!-- END REF -->


##### Description
The `.connectionTimeOut` property  <!-- REF #transporter.connectionTimeOut.Summary -->contains the maximum wait time (in seconds) allowed to establish a connection to the server<!-- END REF -->. By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.

This property is **read-only**. 

<!-- END REF -->


---


<!-- REF transporter.host.Desc -->
## .host

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
|v18 R2|Modified|
|v18 R3|Modified|
</details>

<!-- REF #transporter.host.Syntax -->
**.host** -> text<!-- END REF -->

<!-- REF #transporter.host.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Name or IP address of the host server used for mail transactions|
<!-- END REF -->


##### Description
The `.host` property  <!-- REF #transporter.host.Summary -->contains the name or the IP address of the host server<!-- END REF -->. used for mail transactions (SMTP, POP3).

This property is **read-only**. 

<!-- END REF -->


---

<!-- REF transporter.logFile.Desc -->
## .logFile

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
|v18 R2|Modified|
|v18 R3|Modified|
</details>

<!-- REF #transporter.logFile.Syntax -->
**.logFile** -> text<!-- END REF -->

<!-- REF #transporter.logFile.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Full path of the log file|
<!-- END REF -->


##### Description
The `.logFile` property <!-- REF #transporter.logFile.Summary -->contains the full path of the log file<!-- END REF --> defined (if any) for the mail connection.

For more information about extended log files, refer to:

*	**SMTP connections** - [4DSMTPLog.txt](https://doc.4d.com/4Dv18R4/4D/18-R4/Description-of-log-files.300-5005934.en.html#4165231) 
*	**POP3 connections** - [4DPOP3Log.txt](https://doc.4d.com/4Dv18R4/4D/18-R4/Description-of-log-files.300-5005934.en.html#4837674)


This property is **read-only**. 

<!-- END REF -->


---

<!-- REF transporter.port.Desc -->
## .port

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
|v18 R2|Modified|
|v18 R3|Modified|
</details>

<!-- REF #transporter.port.Syntax -->
**.port** -> number<!-- END REF -->

<!-- REF #transporter.port.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|Port used for mail transactions|
<!-- END REF -->


##### Description
The `.port` property <!-- REF #transporter.port.Summary -->contains the port number used for mail transactions<!-- END REF -->. By default, if the *port* property has not been set in the *server* object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`), the port used is:

*	**SMTP** - 587
*	**POP3** - 995


This property is **read-only**. 

<!-- END REF -->

---


<!-- REF transporter.user.Desc -->
## .user

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
|v18 R2|Modified|
</details>

<!-- REF #transporter.user.Syntax -->
**.user** -> text<!-- END REF -->

<!-- REF #transporter.user.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|User name for authentication on the server|
<!-- END REF -->


##### Description
The `.user` property <!-- REF #transporter.user.Summary -->contains the user name used for authentication on the mail server<!-- END REF -->. 

This property is **read-only**. 

<!-- END REF -->

---

<!-- REF transporter.checkConnection().Desc -->
## .checkConnection( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
|v18 R2|Modified|
|v18 R4|Modified|
</details>

<!-- REF #transporter.checkConnection().Syntax -->
**.checkConnection( )** -> object<!-- END REF -->

<!-- REF #transporter.checkConnection().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Status of the transporter object connection|
<!-- END REF -->


##### Description
The `.checkConnection( )` function <!-- REF #transporter.checkConnection().Summary --> checks the SMTP connection using information stored in the transporter object<!-- END REF -->recreates the connection if necessary, and returns the status. This method allows you to verify that the values provided by the user are valid and consistent.


**Returned object**

The method sends a request to the SMTP server and returns an object describing the SMTP status. This object can contain the following properties:

|Property||Type|Description|
|---|---|---|---|
|success||boolean|True if the check is successful, False otherwise|
|status||number|Status code returned by the SMTP server (0 in case of an issue unrelated to the SMTP processing)|
|statusText| |text|Status message returned by the SMTP server, or last error returned in the 4D error stack|
|errors	||collection|4D error stack (not returned if a SMTP server response is received)|
||\[].errCode|number|4D error code|
||\[].message|text|Description of the 4D error|
||\[].componentSignature|text|Signature of the internal component which returned the error|


**Note**: For information about SMTP status codes, please refer to [this page](https://www.usps.org/info/smtp_status.html).

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

<!-- END REF -->

---

<!-- REF transporter.SMTP&nbsp;New&nbsp;transporter.Desc -->
## SMTP New transporter

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
|v17 R5|Modified|
|v18|Modified|
</details>

<!-- REF #transporter.SMTP&nbsp;New&nbsp;transporter.Syntax -->
**SMTP New transporter**( *server* ) -> object<!-- END REF -->

<!-- REF #transporter.SMTP&nbsp;New&nbsp;transporter.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|object|->|Mail server information|
|Result|object|<-|SMTP Transporter object connection|
<!-- END REF -->


##### Description
The `SMTP New transporter` command <!-- REF #transporter.SMTP&nbsp;New&nbsp;transporter.Summary -->configures a new SMTP connection<!-- END REF -->according to the server parameter and returns a new *transporter* object. The returned transporter object will then usually be used to send emails.

In the server parameter, pass an object containing the following properties:

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

The returned transporter object contains the following read-only properties and functions:



*	[<!-- INCLUDE #transporter.host.Syntax -->](#host)
*	[<!-- INCLUDE #transporter.port.Syntax -->](#port)
*	[<!-- INCLUDE #smtpTransporterClass.keepAlive.Syntax -->](#keepalive)
*	[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout-)
*	[<!-- INCLUDE #smtpTransporterClass.sendTimeOut.Syntax -->](#sendtimeout)
*	[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)
*	[<!-- INCLUDE #transporter.user.Syntax -->](#user)
*	[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)
*	[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)
*	[<!-- INCLUDE #smtpTransporterClass.headerCharset.Syntax -->](#headercharset)
*	[<!-- INCLUDE #smtpTransporterClass.bodyCharset.Syntax -->](#bodycharset)
*	send()
*	checkConnection()

Note that this command does not open any connection to the SMTP server. The SMTP connection is actually opened when the `.send( )` function is executed.

The SMTP connection is automatically closed:

*	when the transporter object is destroyed if the `keepAlive` property is true (default),
*	after each `.send( )` function execution if the `keepAlive` property is set to false.


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


