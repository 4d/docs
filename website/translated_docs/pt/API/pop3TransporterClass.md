---
id: pop3TransporterClass
title: POP3 Transporter
---

The `POP3Transporter` class allows you to retrieve messages from a POP3 email server.


### POP3 Transporter object

POP3 Transporter objects are instantiated with the [POP3 New transporter](#pop3-new-transporter) command. They provide the following properties and functions:


|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.delete().Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.getMail().Syntax -->](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getMailInfo().Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getMailInfoList().Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.undeleteAll().Syntax -->](#undeleteall)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.undeleteAll().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



<!-- REF pop3TransporterClass.POP3 New transporter.Desc -->
## POP3 New transporter

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R2  | Added   |
</details>

<!-- REF #_command_.POP3 New transporter.Syntax -->
**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF pop3TransporterClass.POP3 New transporter.Params -->
| Parameter | Type               |    | Description                                         |
| --------- | ------------------ |:--:| --------------------------------------------------- |
| server    | object             | -> | Mail server information                             |
| Result    | 4D.POP3Transporter | <- | [POP3 transporter object](#pop3-transporter-object) |
<!-- END REF -->


#### Description

The `POP3 New transporter` command <!-- REF #_command_.POP3 New transporter.Summary -->configures a new POP3 connection<!-- END REF -->according to the *server* parameter and returns a new *[POP3 transporter](#pop3-transporter-object)* object. The returned transporter object will then usually be used to receive emails.

In the *server* parameter, pass an object containing the following properties:


| *server*                                                                                                                                                                                                                       | Default value (if omitted)                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                               |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| the most secure authentication mode supported by the server is used |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *mandatory*                                                         |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| none                                                                |
| **.password** : Text<p>User password for authentication on the server (not returned in *[SMTP transporter](#smtptransporterobject)* object)                                                             | none                                                                |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 995                                                                 |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| none                                                                |


#### Result

The function returns a [**POP3 transporter object**](#pop3-transporter-object). All returned properties are **read-only**.
> The POP3 connection is automatically closed when the transporter object is destroyed.

#### Example

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" //log to save in the Logs folder

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("An error occurred receiving the mail: "+$status.statusText)
 End if
```

<!-- END REF -->


<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->




<!-- INCLUDE transporter.authenticationMode.Desc -->



<!-- INCLUDE transporter.checkConnection().Desc -->

#### Example

```4d
 var $pw :  Text
 var $options : Object
 $options:=New object

 $pw:=Request("Please enter your password:")
 if(OK=1)
    $options.host:="pop3.gmail.com"

    $options.user:="test@gmail.com"
    $options.password:=$pw

    $transporter:=POP3 New transporter($options)

    $status:=$transporter.checkConnection()
    If($status.success)
       ALERT("POP3 connection check successful!")
    Else
       ALERT("Error: "+$status.statusText)
    End if
 End if
```


<!-- INCLUDE transporter.connectionTimeOut.Desc -->




## .delete()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R2  | Added   |
</details>

<!-- REF #pop3TransporterClass.delete().Syntax -->
**.delete**( *msgNumber* : Integer )<!-- END REF -->

<!-- REF #pop3TransporterClass.delete().Params -->
| Parameter | Type    |    | Description                     |
| --------- | ------- |:--:| ------------------------------- |
| msgNumber | Integer | -> | Number of the message to delete |
<!-- END REF -->


##### Description

The `.delete( )` function <!-- REF #pop3TransporterClass.delete().Summary -->flags the *msgNumber* email for deletion from the POP3 server<!-- END REF -->.

In the *msgNumber* parameter, pass the number of the email to delete. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) method.

Executing this method does not actually remove any email. The flagged email will be deleted from the POP3 server only when the `POP3_transporter` object (created with `POP3 New transporter`) is destroyed. The flag could be also be removed using the `.undeleteAll()` method.
> If the current session unexpectedly terminates and the connection is closed (e.g., timeout, network failure, etc.), an error message is generated and messages marked for deletion will remain on the POP3 server.

##### Example

```4d
 $mailInfoList:=$POP3_transporter.getMailInfoList()
 For each($mailInfo;$mailInfoList)
  // Mark your mail as "to be deleted at the end of the session"
    $POP3_transporter.delete($mailInfo.number)
 End for each
  // Force the session closure to delete the mails marked for deletion
 CONFIRM("Selected messages will be deleted.";"Delete";"Undo")
 If(OK=1) //deletion confirmed
    $POP3_transporter:=Null
 Else
    $POP3_transporter.undeleteAll() //remove deletion flags
 End if
```




## .getBoxInfo()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R2  | Added   |
</details>

<!-- REF #pop3TransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo()** : Object<!-- END REF -->

<!-- REF #pop3TransporterClass.getBoxInfo().Params -->
| Parameter | Type   |    | Description    |
| --------- | ------ |:--:| -------------- |
| Result    | Object | <- | boxInfo object |
<!-- END REF -->


##### Description

The `.getBoxInfo()` function <!-- REF #pop3TransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. This function allows you to retrieve information about the mailbox.

The `boxInfo` object returned contains the following properties:

| Property  | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| mailCount | Number | Number of messages in the mailbox |
| size      | Number | Message size in bytes             |



##### Example

```4d
 var $server; $boxinfo : Object

 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

  //mailbox info
 $boxInfo:=$transporter.getBoxInfo()
 ALERT("The mailbox contains "+String($boxInfo.mailCount)+" messages.")
```




## .getMail()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R2  | Added   |
</details>

<!-- REF #pop3TransporterClass.getMail().Syntax -->
**.getMail**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #pop3TransporterClass.getMail().Params -->
| Parameter | Type    |    | Description                                      |
| --------- | ------- |:--:| ------------------------------------------------ |
| msgNumber | Integer | -> | Number of the message in the list                |
| Result    | Object  | <- | [Email object](emailObjectClass.md#email-object) |
<!-- END REF -->


##### Description

The `.getMail()` function <!-- REF #pop3TransporterClass.getMail().Summary -->returns the `Email` object corresponding to the *msgNumber* in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. This function allows you to locally handle the email contents.

Pass in *msgNumber* the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) function.

The method returns Null if:

*   *msgNumber* designates a non-existing message,
*   the message was marked for deletion using `.delete( )`.


**Returned object**

`.getMail()` returns an [`Email` object](emailObjectClass.md#email-object).


##### Example

You want to know the sender of the first mail of the mailbox:

```4d
 var $server; $transporter : Object
 var $mailInfo : Collection
 var $sender : Variant

 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $sender:=$transporter.getMail($mailInfo[0].number).from
```




## .getMailInfo()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R2  | Added   |
</details>

<!-- REF #pop3TransporterClass.getMailInfo().Syntax -->
**.getMailInfo**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #pop3TransporterClass.getMailInfo().Params -->
| Parameter | Type    |    | Description                       |
| --------- | ------- |:--:| --------------------------------- |
| msgNumber | Integer | -> | Number of the message in the list |
| Result    | Object  | <- | mailInfo object                   |
<!-- END REF -->


##### Description

The `.getMailInfo()` function <!-- REF #pop3TransporterClass.getMailInfo().Summary -->returns a `mailInfo` object corresponding  corresponding to the *msgNumber* in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. This function allows you to retrieve information about the email.

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfo) method.

The `mailInfo` object returned contains the following properties:

| Property | Type   | Description              |
| -------- | ------ | ------------------------ |
| size     | Number | Message size in bytes    |
| id       | Text   | Unique ID of the message |

The method returns **Null** if:

*   *msgNumber* designates a non-existing message,
*   the message was marked for deletion using `.delete( )`.


##### Example


```4d
 var $server; $mailInfo : Object
 var $mailNumber : Integer

 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

  //message info
 $mailInfo:=$transporter.getMailInfo(1) //get the first mail
 If($mailInfo #Null)
    ALERT("First mail size is:"+String($mailInfo.size)+" bytes.")
 End if
```




## .getMailInfoList()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R2  | Added   |
</details>

<!-- REF #pop3TransporterClass.getMailInfoList().Syntax -->
**.getMailInfoList()** : Collection<!-- END REF -->

<!-- REF #pop3TransporterClass.getMailInfoList().Params -->
| Parameter | Type       |    | Description                      |
| --------- | ---------- |:--:| -------------------------------- |
| Result    | Collection | <- | Collection of `mailInfo` objects |
<!-- END REF -->


##### Description

The `.getMailInfoList()` function <!-- REF #pop3TransporterClass.getMailInfoList().Summary -->returns a collection of `mailInfo` objects describing all messages in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. This function allows you to locally manage the list of messages located on the POP3 mail server.

Each `mailInfo` object in the returned collection contains the following properties:

| Property     | Type   | Description                                                        |
| ------------ | ------ | ------------------------------------------------------------------ |
| \[ ].size   | Number | Message size in bytes                                              |
| \[ ].number | Number | Message number                                                     |
| \[ ].id     | Text   | Unique ID of the message (useful if you store the message locally) |

If the mailbox does not contain a message, an empty collection is returned.



#### number and ID properties

*number* is the number of a message in the mailbox at the time the `POP3_transporter` was created. The *number* property is not a static value in relation to any specific message and will change from session to session dependent on its relation to other messages in the mailbox at the time the session was opened. The numbers assigned to the messages are only valid during the lifetime of the [`POP3_transporter`](#pop3-transporter-object). At the time the `POP3_transporter` is deleted any message marked for deletion will be removed. When the user logs back into the server, the current messages in the mailbox will be renumbered from 1 to x.

The *id* however is a unique number assigned to the message when it was received by the server. This number is calculated using the time and date that the message is received and is a value assigned by your POP3 server. Unfortunately, POP3 servers do not use the *id* as the primary reference to their messages. Throughout the POP3 sessions you will need to specify the *number* as the reference to messages on the server. Developers may need to take some care if developing solutions which bring references to messages into a database but leave the body of the message on the server.


##### Example

You want to know the total number and size of emails in the mailbox:

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 C_COLLECTION($mailInfo)
 C_LONGINT($vNum;$vSize)

 $mailInfo:=$transporter.getMailInfoList()
 $vNum:=$mailInfo.length
 $vSize:=$mailInfo.sum("size")

 ALERT("The mailbox contains "+String($vNum)+" message(s) for "+String($vSize)+" bytes.")
```




## .getMIMEAsBlob()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R3  | Added   |
</details>

<!-- REF #pop3TransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob<!-- END REF -->

<!-- REF #pop3TransporterClass.getMIMEAsBlob().Params -->
| Parameter | Type    |    | Description                                           |
| --------- | ------- |:--:| ----------------------------------------------------- |
| msgNumber | Integer | -> | Number of the message in the list                     |
| Result    | Blob    | <- | Blob of the MIME string returned from the mail server |
<!-- END REF -->


##### Description

The `.getMIMEAsBlob()` function <!-- REF #pop3TransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* in the mailbox designated by the [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) method.

The method returns an empty BLOB if:

*   *msgNumber* designates a non-existing message,
*   the message was marked for deletion using `.delete()`.


**Returned BLOB**

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](emailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.


##### Example

You want to know the total number and size of emails in the mailbox:

```4d
 var $server : Object
 var $mailInfo : Collection
 var $blob : Blob
 var $transporter : 4D.POP3Transporter

 $server:=New object
 $server.host:="pop.gmail.com"
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $blob:=$transporter.getMIMEAsBlob($mailInfo[0].number)
```



<!-- INCLUDE transporter.host.Desc -->






<!-- INCLUDE transporter.logFile.Desc -->



<!-- INCLUDE transporter.port.Desc -->





<!-- REF pop3TransporterClass.undeleteAll().Desc -->
## .undeleteAll()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R2  | Added   |
</details>

<!-- REF #pop3TransporterClass.undeleteAll().Syntax -->
**.undeleteAll()**<!-- END REF -->

<!-- REF #pop3TransporterClass.undeleteAll().Params -->
| Parameter | Type |  | Description                     |
| --------- | ---- |::| ------------------------------- |
|           |      |  | Does not require any parameters |
<!-- END REF -->


##### Description

The `.undeleteAll()` function <!-- REF #pop3TransporterClass.undeleteAll().Summary -->removes all delete flags set on the emails in the [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->. 

<!-- END REF -->



<!-- INCLUDE transporter.user.Desc -->



<style> h2 { background: #d9ebff;}</style>
