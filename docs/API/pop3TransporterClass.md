---
id: pop3TransporterClass
title: POP3 Transporter 
---

The POP transporter allows you to retrieve messages from a POP3 email server.

It is created with the [POP3 New transporter](https://doc.4d.com/4Dv18R4/4D/18-R4/POP3-New-transporter.301-4981947.en.html) command.

## Summary

||
|---|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
|[<!-- INCLUDE #pop3TransporterClass.bodyCharset.Syntax -->](#bodycharset)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.bodyCharset.Summary -->|
|[<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summarypop3 -->|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
|[<!-- INCLUDE #pop3TransporterClass.delete().Syntax -->](#delete-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.delete().Summary -->|
|[<!-- INCLUDE #pop3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getBoxInfo().Summary -->|
|[<!-- INCLUDE #pop3TransporterClass.getMail().Syntax -->](#getmail-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getMail().Summary -->|
|[<!-- INCLUDE #pop3TransporterClass.getMailInfo().Syntax -->](#getmailinfo-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getMailInfo().Summary -->|
|[<!-- INCLUDE #pop3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getMailInfoList().Summary -->|
|[<!-- INCLUDE #pop3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getMIMEAsBlob().Summary -->|
|[<!-- INCLUDE #pop3TransporterClass.headerCharset.Syntax -->](#headercharset)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.headerCharset.Summary -->|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
|[<!-- INCLUDE #pop3TransporterClass.keepAlive.Syntax -->](#keepalive)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.keepAlive.Summary -->|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
|[<!-- INCLUDE #pop3TransporterClass.sendTimeOut.Syntax -->](#sendtimeout)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.sendTimeOut.Summary -->|
|[<!-- INCLUDE #pop3TransporterClass.undeleteAll().Syntax -->](#undeleteall-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.undeleteAll().Summary -->|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



---

<!-- INCLUDE transporter.authenticationMode.Descpop3 -->

---

<!-- REF pop3TransporterClass.bodyCharset.Desc -->
## .bodyCharset

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
|v18|Modified|
</details>

<!-- REF #pop3TransporterClass.bodyCharset.Syntax -->
**.bodyCharset** -> text<!-- END REF -->

<!-- REF #pop3TransporterClass.bodyCharset.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Charset and encoding used for the body of the Email object|
<!-- END REF -->


##### Description
The `.bodyCharset` property  <!-- REF #pop3TransporterClass.bodyCharset.Summary -->  contains the charset and encoding used for the body part of the email<!-- END REF -->.

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


<!-- INCLUDE transporter.checkConnection().Desc -->


---

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

---


<!-- REF pop3TransporterClass.delete().Desc -->
## .delete( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

<!-- REF #pop3TransporterClass.delete().Syntax -->
**.delete**( *msgNumber* ) -> longint<!-- END REF -->

<!-- REF #pop3TransporterClass.delete().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|longint|->|Number of the message to delete|
<!-- END REF -->


##### Description

The `.delete( )` function  <!-- REF #pop3TransporterClass.delete().Summary -->flags the *msgNumber* email for deletion from the POP3 server<!-- END REF -->. 

In the *msgNumber* parameter, pass the number of the email to delete. This number is returned in the number property by the `.getMailInfoList( )` method.

Executing this method does not actually remove any email. The flagged email will be deleted from the POP3 server only when the `POP3_transporter` object (created with `POP3 New transporter`) is destroyed. The flag could be also be removed using the `.undeleteAll( )` method. 

>If the current session unexpectedly terminates and the connection is closed (e.g., timeout, network failure, etc.), an error message is generated and messages marked for deletion will remain on the POP3 server.

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

<!-- END REF -->



---

<!-- REF pop3TransporterClass.getBoxInfo().Desc -->
## .getBoxInfo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

<!-- REF #pop3TransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo( )** -> object<!-- END REF -->

<!-- REF #pop3TransporterClass.getBoxInfo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|boxInfo object|
<!-- END REF -->


##### Description

The `.getBoxInfo( )` function  <!-- REF #pop3TransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the mailbox designated by the `POP3_transporter`<!-- END REF -->. This function allows you to retrieve information about the mailbox.

The `boxInfo` object returned contains the following properties:

|Property|	Type|	Description|
|---|---|---|
|mailCount|	Number|	Number of messages in the mailbox|
|size|	Number|	Message size in bytes|



##### Example

```4d
C_OBJECT($server;$boxinfo)
 
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

<!-- END REF -->

---

<!-- REF pop3TransporterClass.getMail().Desc -->
## .getMail( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

<!-- REF #pop3TransporterClass.getMail().Syntax -->
**.getMail**( *msgNumber* ) -> object<!-- END REF -->

<!-- REF #pop3TransporterClass.getMail().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|longint|->|Number of the message in the list |
|Result|object|<-|Email object|
<!-- END REF -->


##### Description

The `.getMail( )` function  <!-- REF #pop3TransporterClass.getMail().Summary -->returns the `Email` object corresponding to the *msgNumber* in the mailbox designated by the `POP3_transporter`<!-- END REF -->. This function allows you to locally handle the email contents.

Pass in *msgNumber* the number of the message to retrieve. This number is returned in the number property by the `.getMailInfoList( )` function.

The method returns Null if:

*	*msgNumber* designates a non-existing message, 
*	the message was marked for deletion using `.delete( )`. 
 

**Returned object**

`.getMail( )` returns an `Email` object.

For a comprehensive description of mail properties, please refer to the [`Email` object](https://doc.4d.com/4Dv18R4/4D/18-R4/Email-object.300-4981948.en.html) section. 


##### Example

You want to know the sender of the first mail of the mailbox:

```4d
C_OBJECT($server;$transporter)
 C_COLLECTION($mailInfo)
 C_VARIANT($sender)
 
 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 
 $transporter:=POP3 New transporter($server)
 
 $mailInfo:=$transporter.getMailInfoList()
 $sender:=$transporter.getMail($mailInfo[0].number).from
```

<!-- END REF -->


---

<!-- REF pop3TransporterClass.getMailInfo().Desc -->
## .getMailInfo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

<!-- REF #pop3TransporterClass.getMailInfo().Syntax -->
**.getMailInfo**( *msgNumber* ) -> object<!-- END REF -->

<!-- REF #pop3TransporterClass.getMailInfo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|longint|->|Number of the message in the list |
|Result|object|<-|Email object|
<!-- END REF -->


##### Description

The `.getMailInfo( )` function  <!-- REF #pop3TransporterClass.getMailInfo().Summary -->returns a `mailInfo` object corresponding  corresponding to the *msgNumber* in the mailbox designated by the `POP3_transporter`<!-- END REF -->. This function allows you to retrieve information about the email.

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the `.getMailInfoList( )` method.

The `mailInfo` object returned contains the following properties:

|Property|	Type|	Description|
|---|---|---|
|size|	Number|	Message size in bytes|
|id|	Text|	Unique ID of the message |

The method returns **Null** if:

*	msgNumber* designates a non-existing message, 
*	the message was marked for deletion using `.delete( )`. 


##### Example


```4d
 C_OBJECT($server;$mailInfo)
 C_LONGINT($mailNumber)
 
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 
 $transporter:=POP3 New transporter($server)
 
  //message info
 $mailInfo:=$transporter.getMailInfo(1) //get the first mail
 If($mailInfo #Null)
    ALERT("First mail size is:"+String($mailInfo.size)+" bytes.")
 End if
```

<!-- END REF -->


---

<!-- REF pop3TransporterClass.getMailInfoList().Desc -->
## .getMailInfoList( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

<!-- REF #pop3TransporterClass.getMailInfoList().Syntax -->
**.getMailInfoList( )** -> collection<!-- END REF -->

<!-- REF #pop3TransporterClass.getMailInfoList().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|collection|<-|Collection of mailInfo objects|
<!-- END REF -->


##### Description

The `.getMailInfoList( )` function  <!-- REF #pop3TransporterClass.getMailInfoList().Summary -->returns a collection of `mailInfo` objects describing all messages in the mailbox designated by the `POP3_transporter`<!-- END REF -->. This function allows you to locally manage the list of messages located on the POP3 mail server. 

Each `mailInfo` object in the returned collection contains the following properties:

|Property|	Type|	Description|
|---|---|---|
|\[ ].size|Number|Message size in bytes|
|\[ ].number|Number|Message number|
|\[ ].id|Text|Unique ID of the message (useful if you store the message locally)|

If the mailbox does not contain a message, an empty collection is returned.

 

**number and ID properties**

*number* is the number of a message in the mailbox at the time the `POP3_transporter` was created. The *number* property is not a static value in relation to any specific message and will change from session to session dependent on its relation to other messages in the mailbox at the time the session was opened. The numbers assigned to the messages are only valid during the lifetime of the `POP3_transporter`. At the time the `POP3_transporter` is deleted any message marked for deletion will be removed. When the user logs back into the server, the current messages in the mailbox will be renumbered from 1 to x.

The *id* however is a unique number assigned to the message when it was received by the server. This number is calculated using the time and date that the message is received and is a value assigned by your POP3 server. Unfortunately, POP3 servers do not use the *id* as the primary reference to their messages. Throughout the POP3 sessions you will need to specify the *number* as the reference to messages on the server. Developers may need to take some care if developing solutions which bring references to messages into a database but leave the body of the message on the server.


##### Example

You want to know the total number and size of emails in the mailbox:

```4d
C_OBJECT($server)
 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 
 $transporter:=POP3 New transporter($server)
 
 C_COLLECTION($mailInfo)
 C_LONGINT($vNum;$vSize)
 
 $mailInfo:=$transporter.getMailInfoList()
 $vNum:=$mailInfo.length
 $vSize:=$mailInfo.sum("size")
 
 ALERT("The mailbox contains "+String($vNum)+" message(s) for "+String($vSize)+" bytes.")
```

<!-- END REF -->


---

<!-- REF pop3TransporterClass.getMIMEAsBlob().Desc -->
## .getMIMEAsBlob( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|
</details>

<!-- REF #pop3TransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* ) -> blob<!-- END REF -->

<!-- REF #pop3TransporterClass.getMIMEAsBlob().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|longint|-> |Number of the message in the list|
|Result|blob|<-|Blob of the MIME string returned from the mail server|
<!-- END REF -->


##### Description

The `.getMIMEAsBlob( )` function  <!-- REF #pop3TransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* in the mailbox designated by the `POP3_transporter`<!-- END REF -->. 

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the `.getMailInfoList( )` method.

The method returns an empty string if:

*	*msgNumber* designates a non-existing message, 
*	the message was marked for deletion using `.delete( )`. 
 

**Returned BLOB**

`.getMIMEAsBlob( )` returns a `BLOB` which can be archived in a database or converted to an `Email` object with the `MAIL Convert from MIME` command.

For a comprehensive description of mail properties, please refer to the [`Email` object](https://doc.4d.com/4Dv18R4/4D/18-R4/Email-object.300-4981948.en.html) section. 

##### Example

You want to know the total number and size of emails in the mailbox:

```4d
C_OBJECT($server;$transporter)
 C_COLLECTION($mailInfo)
 C_BLOB($blob)
 
 $server:=New object
 $server.host:="pop.gmail.com"
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 
 $transporter:=POP3 New transporter($server)
 
 $mailInfo:=$transporter.getMailInfoList()
 $blob:=$transporter.getMIMEAsBlob($mailInfo[0].number)
```

<!-- END REF -->

---




<!-- REF pop3TransporterClass.headerCharset.Desc -->
## .headerCharset

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
|v18|Modified|
</details>

<!-- REF #pop3TransporterClass.headerCharset.Syntax -->
**.headerCharset** -> text<!-- END REF -->

<!-- REF #pop3TransporterClass.headerCharset.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Charset and encoding used for headers and names of the Email object|
<!-- END REF -->


##### Description
The `.headerCharset` property  <!-- REF #pop3TransporterClass.headerCharset.Summary --> contains the charset and encoding used for the email header<!-- END REF -->. The header includes the following parts of the email: 

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

<!-- REF pop3TransporterClass.keepAlive.Desc -->
## .keepAlive

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

<!-- REF #pop3TransporterClass.keepAlive.Syntax -->
**.keepAlive** -> boolean<!-- END REF -->

<!-- REF #pop3TransporterClass.keepAlive.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if connection is kept alive until the transporter object is destroyed|
<!-- END REF -->


##### Description
The `.keepAlive` property  <!-- REF #pop3TransporterClass.keepAlive.Summary -->contains **True** if the pop3 connection must be kept alive until the `transporter` object is destroyed<!-- END REF -->, and **False** otherwise. By default, if the `keepAlive` property has not been set in the `server` object (used to create the `transporter` object with `pop3 New transporter`), it is **True**.

The pop3 connection is automatically closed:

*	when the `transporter` object is destroyed if the `.keepAlive` property is true,
*	after each `.send( )` function execution if the `.keepAlive` property is set to false.

This property is **read-only**. 

<!-- END REF -->


---



<!-- INCLUDE transporter.logFile.Desc -->

---


<!-- INCLUDE transporter.port.Desc -->


---


<!-- REF pop3TransporterClass.sendTimeOut.Desc -->
## .sendTimeOut

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

<!-- REF #pop3TransporterClass.sendTimeOut.Syntax -->
**.sendTimeOut** -> number<!-- END REF -->

<!-- REF #pop3TransporterClass.sendTimeOut.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|number|<-|Maximum wait time (in seconds) of a mail send call before timeout|
<!-- END REF -->


##### Description
The `.sendTimeOut` property  <!-- REF #pop3TransporterClass.sendTimeOut.Summary -->contains the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs<!-- END REF -->. By default, if the `.sendTimeOut` property has not been set in the `server` object (used to create the `transporter object` with `pop3 New transporter`), the value 100 is used.

This property is **read-only**. 

<!-- END REF -->


---


<!-- REF pop3TransporterClass.undeleteAll().Desc -->
## .undeleteAll( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

<!-- REF #pop3TransporterClass.undeleteAll().Syntax -->
**.undeleteAll( )**<!-- END REF -->

<!-- REF #pop3TransporterClass.undeleteAll().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


##### Description

The `.undeleteAll( )` function  <!-- REF #pop3TransporterClass.undeleteAll().Summary -->removes all delete flags set on the emails in the `POP3_transporter`<!-- END REF -->. 

<!-- END REF -->


---

<!-- INCLUDE transporter.user.Desc -->












