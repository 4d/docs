---
id: POP3TransporterClass
title: POP3Transporter 
---

The `POP3Transporter` class allows you to retrieve messages from a POP3 email server.


### POP3 Transporter object

POP3 Transporter objects are instantiated with the [POP3 New transporter](#pop3-new-transporter) command. They provide the following properties and functions:


||
|---|
|[**.acceptUnsecureConnection** : Boolean](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if 4D is allowed to establish an unencrypted connection|
|[**.authenticationMode** : Text](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;the authentication mode used to open the session on the mail server|
|[**.checkConnection()** : Object](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp; checks the connection using information stored in the transporter object|
|[**.connectionTimeOut** : Integer](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;the maximum wait time (in seconds) allowed to establish a connection to the server|
|[**.delete**( *msgNumber* : Integer )](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;flags the *msgNumber* email for deletion from the POP3 server|
|[**.getBoxInfo()** : Object](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a `boxInfo` object corresponding to the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)|
|[**.getMail**( *msgNumber* : Integer ) : Object](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the `Email` object corresponding to the *msgNumber* in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)|
|[**.getMailInfo**( *msgNumber* : Integer ) : Object](#getmailinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a `mailInfo` object corresponding  corresponding to the *msgNumber* in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)|
|[**.getMailInfoList()** : Collection](#getmailinfolist)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a collection of `mailInfo` objects describing all messages in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)|
|[**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* in the mailbox designated by the [`POP3_transporter`](#pop3-transporter-object)|
|[**.host** : Text](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name or the IP address of the host server|
|[**.logFile** : Text](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the extended log file defined (if any) for the mail connection|
|[**.port** : Integer](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp; the port number used for mail transactions|
|[**.undeleteAll()**](#undeleteall)<p>&nbsp;&nbsp;&nbsp;&nbsp;removes all delete flags set on the emails in the [`POP3_transporter`](#pop3-transporter-object)|
|[**.user** : Text](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp; the user name used for authentication on the mail server|



## POP3 New transporter

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|object|->|Mail server information|
|Result|4D.POP3Transporter|<-|[POP3 transporter object](#pop3-transporter-object)|


#### Description

The `POP3 New transporter` command configures a new POP3 connectionaccording to the *server* parameter and returns a new *[POP3 transporter](#pop3-transporter-object)* object. The returned transporter object will then usually be used to receive emails.

In the *server* parameter, pass an object containing the following properties:


|*server*|Default value (if omitted)|
|---|---|
|[**.acceptUnsecureConnection** : Boolean](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if 4D is allowed to establish an unencrypted connection|False|
|.**accessTokenOAuth2**: Text<p>Text string representing OAuth 2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[SMTP transporter](#smtptransporterobject)* object.|none|
|[**.authenticationMode** : Text](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;the authentication mode used to open the session on the mail server|the most secure authentication mode supported by the server is used|
|[**.connectionTimeOut** : Integer](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;the maximum wait time (in seconds) allowed to establish a connection to the server|30|
|[**.host** : Text](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name or the IP address of the host server|*mandatory*
|[**.logFile** : Text](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the extended log file defined (if any) for the mail connection|none|
|**.password** : Text<p>User password for authentication on the server. Not returned in *[SMTP transporter](#smtptransporterobject)* object.|none|
|[**.port** : Integer](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp; the port number used for mail transactions|995|
|[**.user** : Text](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp; the user name used for authentication on the mail server|none|


#### Result

The function returns a [**POP3 transporter object**](#pop3-transporter-object). All returned properties are **read-only**. 


>The POP3 connection is automatically closed when the transporter object is destroyed.

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


## 4D.POP3Transporter.new()


**4D.POP3Transporter.new**( *server* : Object ) : 4D.POP3Transporter
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|Object|->|Mail server information|
|Result|4D.POP3Transporter|<-|[POP3 transporter object](#pop3-transporter-object)|

#### Description

The `4D.POP3Transporter.new()` function creates and returns a new object of the `4D.POP3Transporter` type. It is identical to the [`POP3 New transporter`](#pop3-new-transporter) command (shortcut).

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
|APOP|`POP3 authentication APOP`|Authentication using APOP protocol (POP3 only)|
|CRAM-MD5|`POP3 authentication CRAM-MD5`|Authentication using CRAM-MD5 protocol|
|LOGIN|`POP3 authentication login`|Authentication using LOGIN protocol|
|OAUTH2|`POP3 authentication OAUTH2`|Authentication using OAuth2 protocol|
|PLAIN|`POP3 authentication plain`|Authentication using PLAIN protocol|





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


## .connectionTimeOut

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**.connectionTimeOut** : Integer


#### Description

The `.connectionTimeOut` property contains the maximum wait time (in seconds) allowed to establish a connection to the server. By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.






## .delete()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

**.delete**( *msgNumber* : Integer )
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|Integer|->|Number of the message to delete|


##### Description

The `.delete( )` function flags the *msgNumber* email for deletion from the POP3 server. 

In the *msgNumber* parameter, pass the number of the email to delete. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) method.

Executing this method does not actually remove any email. The flagged email will be deleted from the POP3 server only when the `POP3_transporter` object (created with `POP3 New transporter`) is destroyed. The flag could be also be removed using the `.undeleteAll()` method. 

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




## .getBoxInfo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

**.getBoxInfo()** : Object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-|boxInfo object|


##### Description

The `.getBoxInfo()` function returns a `boxInfo` object corresponding to the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object). This function allows you to retrieve information about the mailbox.

The `boxInfo` object returned contains the following properties:

|Property|	Type|	Description|
|---|---|---|
|mailCount|	Number|	Number of messages in the mailbox|
|size|	Number|	Message size in bytes|



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
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

**.getMail**( *msgNumber* : Integer ) : Object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|Integer|->|Number of the message in the list |
|Result|Object|<-|[Email object](EmailObjectClass.md#email-object)|


##### Description

The `.getMail()` function returns the `Email` object corresponding to the *msgNumber* in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object). This function allows you to locally handle the email contents.

Pass in *msgNumber* the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) function.

The method returns Null if:

*	*msgNumber* designates a non-existing message, 
*	the message was marked for deletion using `.delete( )`. 
 

**Returned object**

`.getMail()` returns an [`Email` object](EmailObjectClass.md#email-object).


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
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

**.getMailInfo**( *msgNumber* : Integer ) : Object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|Integer|->|Number of the message in the list |
|Result|Object|<-|mailInfo object|


##### Description

The `.getMailInfo()` function returns a `mailInfo` object corresponding  corresponding to the *msgNumber* in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object). This function allows you to retrieve information about the email.

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfo) method.

The `mailInfo` object returned contains the following properties:

|Property|Type|Description|
|---|---|---|
|size|	Number|	Message size in bytes|
|id|	Text|	Unique ID of the message |

The method returns **Null** if:

*	*msgNumber* designates a non-existing message, 
*	the message was marked for deletion using `.delete( )`. 


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
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

**.getMailInfoList()** : Collection
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Collection|<-|Collection of `mailInfo` objects|


##### Description

The `.getMailInfoList()` function returns a collection of `mailInfo` objects describing all messages in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object). This function allows you to locally manage the list of messages located on the POP3 mail server. 

Each `mailInfo` object in the returned collection contains the following properties:

|Property|	Type|	Description|
|---|---|---|
|\[ ].size|Number|Message size in bytes|
|\[ ].number|Number|Message number|
|\[ ].id|Text|Unique ID of the message (useful if you store the message locally)|

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
|Version|Changes|
|---|---|
|v18 R3|Added|
</details>

**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|Integer|-> |Number of the message in the list|
|Result|Blob|<-|Blob of the MIME string returned from the mail server|


##### Description

The `.getMIMEAsBlob()` function returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* in the mailbox designated by the [`POP3_transporter`](#pop3-transporter-object). 

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) method.

The method returns an empty BLOB if:

*	*msgNumber* designates a non-existing message, 
*	the message was marked for deletion using `.delete()`. 
 

**Returned BLOB**

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](EmailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.


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



## .host

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**.host** : Text

#### Description

The `.host` property contains the name or the IP address of the host server. Used for mail transactions (SMTP, POP3, IMAP).








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








## .undeleteAll()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R2|Added|
</details>

**.undeleteAll()**
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|


##### Description

The `.undeleteAll()` function removes all delete flags set on the emails in the [`POP3_transporter`](#pop3-transporter-object). 




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
