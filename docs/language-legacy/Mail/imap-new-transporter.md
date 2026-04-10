---
id: imap-new-transporter
title: IMAP New transporter
slug: /commands/imap-new-transporter
displayed_sidebar: docs
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R4|Added|

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->


<!-- REF #_command_.IMAP New transporter.Params -->
<div class="no-index">

|Parameter|Type||Description|
|---------|--- |:---:|------|
|parameter|Object|&#8594; |Mail server configuration|
|Result|4D.IMAPTransporter|&#8592;|[IMAP transporter object](../../API/IMAPTransporterClass.md#imap-transporter-object)|
</div>
<!-- END REF -->


## Description

The `IMAP New transporter` command <!-- REF #_command_.IMAP New transporter.Summary -->configures a new IMAP connection<!-- END REF --> according to the *parameter* parameter and returns a new *transporter* object. The returned transporter object will then usually be used to receive emails.

In the *parameter* parameter, pass an object containing the following properties:

|*parameter*| |Description|Default value (if omitted)|
|---|---|---|---|
|[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../../API/IMAPTransporterClass.md#acceptunsecureconnection)| |<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|False|
|.**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object| |Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[IMAP transporter](../../API/IMAPTransporterClass.md#imap-transporter-object)* object.|none|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../../API/IMAPTransporterClass.md#authenticationmode)| |<!-- INCLUDE #transporter.authenticationMode.Summary -->|the most secure authentication mode supported by the server is used|
|[<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](../../API/IMAPTransporterClass.md#checkconnectiondelay)| |<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->|300|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../../API/IMAPTransporterClass.md#connectiontimeout)| |<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|30|
|[<!-- INCLUDE #transporter.host.Syntax -->](../../API/IMAPTransporterClass.md#host)| |<!-- INCLUDE #transporter.host.Summary -->|*mandatory*|
|.**listener**: Object||allows you to manage IMAP IDLE notifications for the selected mailbox through callback functions.|none|
|                     |.onMailCreated : [4D.Function](../../API/FunctionClass.md)|Called when a new message is detected.|none|
|                     |.onMailDeleted : [4D.Function](../../API/FunctionClass.md)|Called when a message is permanently deleted.|none|
|                     |.onFlagsModified : [4D.Function](../../API/FunctionClass.md)|Called when message flags are modified.|none|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](../../API/IMAPTransporterClass.md#logfile)| |<!-- INCLUDE #transporter.logFile.Summary -->|none|
|.**password** : Text| |User password for authentication on the server. Not returned in *[IMAP transporter](../../API/IMAPTransporterClass.md#imap-transporter-object)* object.|none|
|[<!-- INCLUDE #transporter.port.Syntax -->](../../API/IMAPTransporterClass.md#port)| |<!-- INCLUDE #transporter.port.Summary -->|993|
|[<!-- INCLUDE #transporter.user.Syntax -->](../../API/IMAPTransporterClass.md#user)| |<!-- INCLUDE #transporter.user.Summary -->|none|

### listener object

When the `listener` property is provided in the *parameter* object, the following callback functions are supported:

* `onMailCreated`: triggered when a new message is added to the mailbox
* `onMailDeleted`: triggered when a message is permanently deleted
* `onFlagsModified`: triggered when message flags are modified

Each callback receives the following parameters:

|Parameter|Type|Description|
|---|---|---|
|transporter|Object|Current IMAP transporter|
|event|Object|Event data|

#### onMailCreated(*transporter* : Object; *event* : Object)

|Property|Type|Description|
|---|---|---|
|event.type|Text|`"mailCreated"`|
|event.mailCount|Integer|Number of messages in the mailbox|

#### onMailDeleted(*transporter* : Object; *event* : Object)

|Property|Type|Description|
|---|---|---|
|event.type|Text|`"mailDeleted"`|
|event.msgNumber|Integer|Message sequence number|

#### onFlagsModified(*transporter* : Object; *event* : Object)

|Property|Type|Description|
|---|---|---|
|event.type|Text|`"FlagsModified"`|
|event.msgNumber|Integer|Message sequence number|
|event.flags|Collection|Updated flags|


>**Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

## Result

The function returns an [**IMAP transporter object**](../../API/IMAPTransporterClass.md#imap-transporter-object). All returned properties are **read-only**.

>The IMAP connection is automatically closed when the transporter object is destroyed.

## Example

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



## Properties

|  |  |
| --- | --- |
| Command number | 1723 |
| Thread safe | yes |


