---
id: SMTPTransporterClass
title: SMTPTransporter
---
The `SMTPTransporter` class allows you to configure SMTP connections and send emails through *SMTP transporter* objects.



### SMTP Transporter object

SMTP Transporter objects are instantiated with the [SMTP New transporter](#smtp-new-transporter) command. They provide the following properties and functions:


||
|---|
|[**.acceptUnsecureConnection** : Boolean](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if 4D is allowed to establish an unencrypted connection|
|[**.authenticationMode** : Text](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;the authentication mode used to open the session on the mail server|
|[**.bodyCharset** : Text](#bodycharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;  the charset and encoding used for the body part of the email|
|[**.checkConnection()** : Object](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp; checks the connection using information stored in the transporter object|
|[**.connectionTimeOut** : Integer](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;the maximum wait time (in seconds) allowed to establish a connection to the server|
|[**.headerCharset** : Text](#headercharset)<p>&nbsp;&nbsp;&nbsp;&nbsp; the charset and encoding used for the email header|
|[**.host** : Text](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name or the IP address of the host server|
|[**.keepAlive** : Boolean](#keepalive)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if the SMTP connection must be kept alive until the `transporter` object is destroyed|
|[**.logFile** : Text](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the extended log file defined (if any) for the mail connection|
|[**.port** : Integer](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp; the port number used for mail transactions|
|[**.send**( *mail* : Object ) : Object](#send)<p>&nbsp;&nbsp;&nbsp;&nbsp;sends the [*mail* object](EmailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object|
|[**.sendTimeOut** : Integer](#sendtimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp; the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs|
|[**.user** : Text](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp; the user name used for authentication on the mail server|



## SMTP New transporter

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|New logFile property|
|v17 R5|New bodyCharset and headerCharset properties|
|v17 R4|Added|
</details>

**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|Object|->|Mail server information|
|Result|4D.SMTPTransporter|<-|[SMTP transporter object](#smtp-transporter-object)|


#### Description

The `SMTP New transporter` command configures a new SMTP connection according to the *server* parameter and returns a new *[SMTP transporter](#smtp-transporter-object)* object. The returned transporter object will then usually be used to send emails.

> This command does not open any connection to the SMTP server. The SMTP connection is actually opened when the [`.send()`](#send) function is executed.  
> 
>The SMTP connection is automatically closed:
> *	when the transporter object is destroyed if the [`keepAlive`](#keepalive) property is true (default),
> *	after each  [`.send( )`](#send) function execution if the [`keepAlive`](#keepalive) property is set to false.




In the *server* parameter, pass an object containing the following properties:

|*server*|Default value (if omitted)|
|---|---|
|[**.acceptUnsecureConnection** : Boolean](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if 4D is allowed to establish an unencrypted connection|False|
|.**accessTokenOAuth2**: Text<p>Text string representing OAuth 2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[SMTP transporter](#smtp-transporter-object)* object.|none|
|[**.authenticationMode** : Text](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;the authentication mode used to open the session on the mail server|the most secure authentication mode supported by the server is used|
|[**.bodyCharset** : Text](#bodycharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;  the charset and encoding used for the body part of the email|`mail mode UTF8` (US-ASCII_UTF8_QP)|
|[**.connectionTimeOut** : Integer](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;the maximum wait time (in seconds) allowed to establish a connection to the server|30|
|[**.headerCharset** : Text](#headercharset)<p>&nbsp;&nbsp;&nbsp;&nbsp; the charset and encoding used for the email header|`mail mode UTF8` (US-ASCII_UTF8_QP)|
|[**.host** : Text](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name or the IP address of the host server|*mandatory*
|[**.keepAlive** : Boolean](#keepalive)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if the SMTP connection must be kept alive until the `transporter` object is destroyed|True|
|[**.logFile** : Text](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the extended log file defined (if any) for the mail connection|none|
|**password** : Text<p>User password for authentication on the server. Not returned in *[SMTP transporter](#smtp-transporter-object)* object.|none|
|[**.port** : Integer](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp; the port number used for mail transactions|587|
|[**.sendTimeOut** : Integer](#sendtimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp; the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs|100|
|[**.user** : Text](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp; the user name used for authentication on the mail server|none|



#### Result

The function returns a [**SMTP transporter object**](#smtp-transporter-object). All returned properties are **read-only**. 


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


## 4D.SMTPTransporter.new()


**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|Object|->|Mail server information|
|Result|4D.SMTPTransporter|<-|[SMTP transporter object](#smtp-transporter-object)|

#### Description

The `4D.SMTPTransporter.new()` function creates and returns a new object of the `4D.SMTPTransporter` type. It is identical to the [`SMTP New transporter`](#smtp-new-transporter) command (shortcut).



## .acceptUnsecureConnection

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

**.acceptUnsecureConnection** : Boolean

#### Description

The `.acceptUnsecureConnection` property contains **True** if 4D is allowed to establish an unencrypted connection when encrypted connection is not possible. 

It contains **False** if unencrypted connections are unallowed, in which case an error in returned when encrypted connection is not possible.

Available secured ports are:

- SMTP
	- 465: SMTPS
	- 587 or 25: SMTP with STARTTLS upgrade if supported by the server.

- IMAP 
	- 143: IMAP non-encrypted port
	- 993: IMAP with STARTTLS upgrade if supported by the server
 
- POP3
	- 110: POP3 non-encrypted port
	- 995: POP3 with STARTTLS upgrade if supported by the server.




## .authenticationMode 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>


**.authenticationMode** : Text

#### Description

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server. 

By default, the most secured mode supported by the server is used.

Possible values are:

|Value|Constants|Comment|
|---|---|---|
|CRAM-MD5|`SMTP authentication CRAM MD5`|Authentication using CRAM-MD5 protocol|
|LOGIN|`SMTP authentication login`|Authentication using LOGIN protocol|
|OAUTH2|`SMTP authentication OAUTH2`|Authentication using OAuth2 protocol|
|PLAIN|`SMTP authentication plain`|Authentication using PLAIN protocol|





## .bodyCharset

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Support for UTF8 base64|
|v17 R5|Added|
</details>

**.bodyCharset** : Text

#### Description

The `.bodyCharset` property contains   the charset and encoding used for the body part of the email.

*	subject, 
*	attachment filename(s), 
*	email name.

**Possible values:**

|Constant|	Value|	Comment|
|---|---|---|
|mail mode ISO2022JP|	US-ASCII_ISO-2022-JP_UTF8_QP	|<ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>|
|mail mode ISO88591	|ISO-8859-1	|<ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>|
|mail mode UTF8	|US-ASCII_UTF8_QP|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)|
|mail mode UTF8 in base64|US-ASCII_UTF8_B64|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64|







## .checkConnection()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

**.checkConnection()** : Object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-|Status of the transporter object connection|


#### Description

The `.checkConnection()` function  checks the connection using information stored in the transporter object, recreates the connection if necessary, and returns the status. This function allows you to verify that the values provided by the user are valid and consistent.


#### Returned object

The function sends a request to the mail server and returns an object describing the mail status. This object can contain the following properties:

|Property||Type|Description|
|---|---|---|---|
|success||boolean|True if the check is successful, False otherwise|
|status||number|(SMTP only) Status code returned by the mail server (0 in case of an issue unrelated to the mail processing)|
|statusText| |text|Status message returned by the mail server, or last error returned in the 4D error stack|
|errors	||collection|4D error stack (not returned if a mail server response is received)|
||\[ ].errCode|number|4D error code|
||\[ ].message|text|Description of the 4D error|
||\[ ].componentSignature|text|Signature of the internal component which returned the error|





For information about SMTP status codes, please refer to [this page](https://www.usps.org/info/smtp_status.html).

#### Example

```4d
 var $pw : Text
 var $options : Object
 var $transporter : 4D.SMTPTransporter
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



## .connectionTimeOut

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**.connectionTimeOut** : Integer


#### Description

The `.connectionTimeOut` property contains the maximum wait time (in seconds) allowed to establish a connection to the server. By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.








## .headerCharset

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**.headerCharset** : Text

#### Description

The `.headerCharset` property contains  the charset and encoding used for the email header. The header includes the following parts of the email: 

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






## .host

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**.host** : Text

#### Description

The `.host` property contains the name or the IP address of the host server. Used for mail transactions (SMTP, POP3, IMAP).







## .keepAlive

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

**.keepAlive** : Boolean

#### Description

The `.keepAlive` property contains **True** if the SMTP connection must be kept alive until the `transporter` object is destroyed, and **False** otherwise. By default, if the `keepAlive` property has not been set in the `server` object (used to create the `transporter` object with `SMTP New transporter`), it is **True**.

The SMTP connection is automatically closed:

*	when the `transporter` object is destroyed if the `.keepAlive` property is true,
*	after each `.send( )` function execution if the `.keepAlive` property is set to false.






## .logFile

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**.logFile** : Text

#### Description

The `.logFile` property contains the path of the extended log file defined (if any) for the mail connection. It can be relative (to the current Logs folder) or absolute. 

Unlike regular log files (enabled via the `SET DATABASE PARAMETER` command), extended log files store MIME contents of all sent mails and do not have any size limit. For more information about extended log files, refer to:

*	**SMTP connections** - [4DSMTPLog.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt) 
*	**POP3 connections** - [4DPOP3Log.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*	**IMAP connections** - [4DIMAPLog.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)









## .port

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

**.port** : Integer

#### Description

The `.port` property contains  the port number used for mail transactions. By default, if the *port* property has not been set in the *server* object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), the port used is:

*	**SMTP** - 587
*	**POP3** - 995
*	**IMAP** - 993







## .send()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Support of mime contents|
|v17 R4|Added|
</details>

**.send**( *mail* : Object ) : Object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mail|Object|->|[Email](EmailObjectClass.md#email-object) to send|
|Result|Object|<-|SMTP status|


#### Description

The `.send()` function sends the [*mail* object](EmailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object.

>The `transporter` object must have already been created using the `SMTP New transporter` command.

The method creates the SMTP connection if it is not already alive. If the `.keepAlive` property of the `transporter` object is **false**, the SMTP connection is automatically closed after the execution of `.send()`, otherwise it stays alive until the `transporter` object is destroyed. For more information, please refer to the `SMTP New transporter` command description.

In *mail*, pass a valid [`Email` object](EmailObjectClass.md#email-object) to send. The origination (where the email is coming from) and destination (one or more recipients) properties must be included, the remaining properties are optional.




## .sendTimeOut

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

**.sendTimeOut** : Integer

#### Description
The `.sendTimeOut` property contains  the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs. By default, if the `.sendTimeOut` property has not been set in the `server` object, the value 100 is used.






## .user

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

**.user** : Text

#### Description
The `.user` property contains  the user name used for authentication on the mail server. 




<style> h2 { background: #d9ebff;}</style>
