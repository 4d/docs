---
id: imap-new-transporter
title: IMAP New transporter
displayed_sidebar: docs
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R4|Added|

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->


<!-- REF #_command_.IMAP New transporter.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|Object|&#8594; |Mail server information|
|Result|4D.IMAPTransporter|&#8592;|[IMAP transporter object](../API/IMAPTransporterClass.md#imap-transporter-object)|
<!-- END REF -->


#### Description

The `IMAP New transporter` command <!-- REF #_command_.IMAP New transporter.Summary -->configures a new IMAP connection<!-- END REF --> according to the *server* parameter and returns a new *transporter* object. The returned transporter object will then usually be used to receive emails.

In the *server* parameter, pass an object containing the following properties:

|*server*|Default value (if omitted)|
|---|---|
|[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/IMAPTransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|False|
|.**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[IMAP transporter](../API/IMAPTransporterClass.md#imap-transporter-object)* object.|none|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/IMAPTransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->|the most secure authentication mode supported by the server is used|
|[<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](../API/IMAPTransporterClass.md#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->|300|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/IMAPTransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->|30|
|[<!-- INCLUDE #transporter.host.Syntax -->](../API/IMAPTransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->|*mandatory*
|[<!-- INCLUDE #transporter.logFile.Syntax -->](../API/IMAPTransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->|none|
|.**password** : Text<br/>User password for authentication on the server. Not returned in *[IMAP transporter](#imap-transporter-object)* object.|none|
|[<!-- INCLUDE #transporter.port.Syntax -->](../API/IMAPTransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->|993|
|[<!-- INCLUDE #transporter.user.Syntax -->](../API/IMAPTransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->|none|

>**Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

#### Result

The function returns an [**IMAP transporter object**](../API/IMAPTransporterClass.md#imap-transporter-object). All returned properties are **read-only**.

>The IMAP connection is automatically closed when the transporter object is destroyed.

#### Example

```4d
$server:=New object
$server.host:="imap.gmail.com" //Mandatory
$server.port:=993
$server.user:="4d@gmail.com"
$server.password:="XXXXXXXX"
$server.logFile:="LogTest.txt" //log to save in the Logs folder

var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

$status:=$transporter.checkConnection()
If(Not($status.success))
   ALERT("An error occurred: "+$status.statusText)
End if
```



#### Properties

|  |  |
| --- | --- |
| Command number | 1723 |
| Thread safe | &check; |


