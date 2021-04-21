---
id: smtpTransporterClass
title: SMTPTransporter
---
The `SMTPTransporter` class allows you to configure SMTP connections and send emails through *SMTP transporter* objects.



### SMTP Transporter object

SMTP Transporter objects are instantiated with the [SMTP New transporter](#smtp-new-transporter) command. They provide the following properties and functions:


||
|---|
|[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
|[<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->|
|[<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
|[<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
|[<!-- INCLUDE #smtpTransporterClass.keepAlive.Syntax -->](#keepalive)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #smtpTransporterClass.keepAlive.Summary -->|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
|[<!-- INCLUDE #smtpTransporterClass.send().Syntax -->](#send)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #smtpTransporterClass.send().Summary -->|
|[<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



<!-- REF smtpTransporterClass.SMTP New transporter.Desc -->
## SMTP New transporter

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|New logFile property|
|v17 R5|New bodyCharset and headerCharset properties|
|v17 R4|Added|
</details>

<!-- REF #_command_.SMTP New transporter.Syntax -->
**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #_command_.SMTP New transporter.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|Object|->|Mail server information|
|Result|4D.SMTPTransporter|<-|[SMTP transporter object](#smtp-transporter-object)|
<!-- END REF -->


#### Description

The `SMTP New transporter` command <!-- REF #_command_.SMTP New transporter.Summary -->configures a new SMTP connection<!-- END REF --> according to the *server* parameter and returns a new *[SMTP transporter](#smtp-transporter-object)* object. The returned transporter object will then usually be used to send emails.

> This command does not open any connection to the SMTP server. The SMTP connection is actually opened when the [`.send()`](#send) function is executed.  
> 
>The SMTP connection is automatically closed:
> *	when the transporter object is destroyed if the [`keepAlive`](#keepalive) property is true (default),
> *	after each  [`.send( )`](#send) function execution if the [`keepAlive`](#keepalive) property is set to false.




In the *server* parameter, pass an object containing the following properties:

|*server*|Default value (if omitted)|
|---|---|
|[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|False|
|.**accessTokenOAuth2**: Text<p>Text string representing OAuth 2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[SMTP transporter](#smtp-transporter-object)* object.|none|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|the most secure authentication mode supported by the server is used|
|[<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->|`mail mode UTF8` (US-ASCII_UTF8_QP)|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|30|
|[<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->|`mail mode UTF8` (US-ASCII_UTF8_QP)|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|*mandatory*
|[<!-- INCLUDE #smtpTransporterClass.keepAlive.Syntax -->](#keepalive)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #smtpTransporterClass.keepAlive.Summary -->|True|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|none|
|**password** : Text<p>User password for authentication on the server. Not returned in *[SMTP transporter](#smtp-transporter-object)* object.|none|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|587|
|[<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->|100|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|none|



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

<!-- END REF -->

## 4D.SMTPTransporter.new()


<!-- REF #4D.SMTPTransporter.new().Syntax -->
**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #4D.SMTPTransporter.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|Object|->|Mail server information|
|Result|4D.SMTPTransporter|<-|[SMTP transporter object](#smtp-transporter-object)|
<!-- END REF -->

#### Description

The `4D.SMTPTransporter.new()` function <!-- REF #4D.SMTPTransporter.new().Summary -->creates and returns a new object of the `4D.SMTPTransporter` type<!-- END REF -->. It is identical to the [`SMTP New transporter`](#smtp-new-transporter) command (shortcut).



<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->



<!-- INCLUDE transporter.authenticationModeSMTP.Desc -->



<!-- INCLUDE transporter.bodyCharset.Desc -->





<!-- INCLUDE transporter.checkConnection().Desc -->

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



<!-- INCLUDE transporter.connectionTimeOut.Desc -->






<!-- INCLUDE transporter.headerCharset.Desc -->




<!-- INCLUDE transporter.host.Desc -->





## .keepAlive

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

<!-- REF #smtpTransporterClass.keepAlive.Syntax -->
**.keepAlive** : Boolean<!-- END REF -->


#### Description

The `.keepAlive` property contains <!-- REF #smtpTransporterClass.keepAlive.Summary -->**True** if the SMTP connection must be kept alive until the `transporter` object is destroyed<!-- END REF -->, and **False** otherwise. By default, if the `keepAlive` property has not been set in the `server` object (used to create the `transporter` object with `SMTP New transporter`), it is **True**.

The SMTP connection is automatically closed:

*	when the `transporter` object is destroyed if the `.keepAlive` property is true,
*	after each `.send( )` function execution if the `.keepAlive` property is set to false.






<!-- INCLUDE transporter.logFile.Desc -->




<!-- INCLUDE transporter.port.Desc -->




## .send()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Support of mime contents|
|v17 R4|Added|
</details>

<!-- REF #smtpTransporterClass.send().Syntax -->
**.send**( *mail* : Object ) : Object<!-- END REF -->

<!-- REF #smtpTransporterClass.send().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mail|Object|->|[Email](emailObjectClass.md#email-object) to send|
|Result|Object|<-|SMTP status|
<!-- END REF -->


#### Description

The `.send()` function <!-- REF #smtpTransporterClass.send().Summary -->sends the [*mail* object](emailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object<!-- END REF -->.

>The `transporter` object must have already been created using the `SMTP New transporter` command.

The method creates the SMTP connection if it is not already alive. If the `.keepAlive` property of the `transporter` object is **false**, the SMTP connection is automatically closed after the execution of `.send()`, otherwise it stays alive until the `transporter` object is destroyed. For more information, please refer to the `SMTP New transporter` command description.

In *mail*, pass a valid [`Email` object](emailObjectClass.md#email-object) to send. The origination (where the email is coming from) and destination (one or more recipients) properties must be included, the remaining properties are optional.




<!-- INCLUDE transporter.sendTimeOut.Desc -->




<!-- INCLUDE transporter.user.Desc -->


<style> h2 { background: #d9ebff;}</style>
