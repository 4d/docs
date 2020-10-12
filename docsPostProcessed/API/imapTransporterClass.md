---
id: imapTransporterClass
title: IMAP Transporter 
---

The `IMAPTransporter` class allows you to retrieve messages from a IMAP email server.


## IMAP Transporter object

IMAP Transporter objects are instantiated with the [IMAP New transporter](#imap-new-transporter) command. They provide the following properties and functions:

||
|---|
|[**.acceptUnsecureConnection** : Boolean](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if 4D is allowed to establish an unencrypted connection|
|[**.authenticationMode** : Text](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;the authentication mode used to open the session on the mail server|
|[**.checkConnection()** : Object](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp; checks the connection using information stored in the transporter object|
|[**.checkConnectionDelay** : Integer](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;  the maximum time (in seconds) allowed prior to checking the connection to the server|
|[**.connectionTimeOut** : Integer](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;the maximum wait time (in seconds) allowed to establish a connection to the server|
|[**.getBoxInfo**( *name* : Text ) : Object](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a `boxInfo` object corresponding to the mailbox *name*|
|[**.getBoxList()** : Collection](#getboxlist)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a collection of mailboxes describing all of the available mailboxes|
|[**.getDelimiter()** : Text](#getdelimiter)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the character used to delimit levels of hierarchy in the mailbox name|
|[**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the `Email` object corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`|
|[**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object](#getmails)<p>&nbsp;&nbsp;&nbsp;&nbsp;an object containing a collection of `Email` objects.|
|[**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`|
|[**.host** : Text](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name or the IP address of the host server|
|[**.logFile** : Text](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the extended log file defined (if any) for the mail connection|
|[**.port** : Integer](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp; the port number used for mail transactions|
|[**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object](#selectbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;selects the *name* mailbox as the current mailbox|
|[**.user** : Text](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp; the user name used for authentication on the mail server|

---

## IMAP New transporter

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

**IMAP New transporter**( *server* : Object ) : Object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|Object|->|Mail server information|
|Result|Object|<-|[IMAP transporter object](#imap-transporter-object)|


#### Description

The `IMAP New transporter` command configures a new IMAP connection according to the *server* parameter and returns a new *transporter* object. The returned transporter object will then usually be used to receive emails.

In the *server* parameter, pass an object containing the following properties:

|*server*|Default value (if omitted)|
|---|---|
|[**.acceptUnsecureConnection** : Boolean](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;**True** if 4D is allowed to establish an unencrypted connection|False|
|[**.authenticationMode** : Text](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;the authentication mode used to open the session on the mail server|the most secure authentication mode supported by the server is used|
|[**.checkConnectionDelay** : Integer](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;  the maximum time (in seconds) allowed prior to checking the connection to the server|300|
|[**.connectionTimeOut** : Integer](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;the maximum wait time (in seconds) allowed to establish a connection to the server|30|
|[**.host** : Text](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;the name or the IP address of the host server|*mandatory*
|[**.logFile** : Text](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;the path of the extended log file defined (if any) for the mail connection|none|
|**password** -> text<p>User password for authentication on the server (not returned in *[IMAP transporter](#imap-transporter-object)* object)|none|
|[**.port** : Integer](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp; the port number used for mail transactions|993|
|[**.user** : Text](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp; the user name used for authentication on the mail server|none|


>**Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.


#### Result

The function returns an [**IMAP transporter object**](#imap-transporter-object). All returned properties are **read-only**. 

>The IMAP connection is automatically closed when the transporter object is destroyed.

#### Example

```4d
 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" //log to save in the Logs folder
 
 $transporter:=IMAP New transporter($server)
 
 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("An error occurred: "+$status.statusText)
 End if
```

---

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


---

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
|CRAM-MD5|`SMTP authentication CRAM MD5`, `POP3 authentication CRAM-MD5`, `IMAP authentication CRAM MD5`|Authentication using CRAM-MD5 protocol|
|LOGIN|`SMTP authentication login`, `POP3 authentication login`, `IMAP authentication login`|Authentication using LOGIN protocol|
|PLAIN|`SMTP authentication plain`, `POP3 authentication plain`, `IMAP authentication plain`|Authentication using PLAIN protocol|




---


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





---


## .checkConnectionDelay

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

**.checkConnectionDelay** : Integer

#### Description

The `.checkConnectionDelay` property contains   the maximum time (in seconds) allowed prior to checking the connection to the server.  If this time is exceeded between two method calls, the connection to the server will be checked. By default, if the property has not been set in the *server* object, the value is 300.

>**Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless. 

---

## .connectionTimeOut

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**.connectionTimeOut** : Integer


#### Description

The `.connectionTimeOut` property contains the maximum wait time (in seconds) allowed to establish a connection to the server. By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.




---

## .getBoxInfo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

**.getBoxInfo**( *name* : Text ) : Object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|Text|->|Name of the mailbox|
|Result|Object|<-|boxInfo object|


#### Description

The `.getBoxInfo()` function  returns a `boxInfo` object corresponding to the mailbox *name*. This function returns the same information as `.selectBox()` without changing the current mailbox.

In the *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) command. 


**Returned object**

The `boxInfo` object returned contains the following properties:

|Property|	Type|	Description|
|---|---|---|
|name|text|Name of the mailbox
|mailCount|	number|	Number of messages in the mailbox|
|mailRecent|	number|	Number of messages with the "recent" flag (indicating new messages)|



#### Example

```4d
 $transporter:=IMAP New transporter($server)
 
 $info:=$transporter.getBoxInfo("INBOX")
 ALERT("INBOX contains "+String($info.mailRecent)+" recent emails.")
```



---

## .getBoxList()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

**.getBoxList()** : Collection
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Collection|<-|Collection of mailbox objects|


#### Description

The `.getBoxList()` function  returns a collection of mailboxes describing all of the available mailboxes. This function allows you to locally manage the list of messages located on the IMAP mail server. 

#### Result

Each object of the returned collection contains the following properties:
 
|Property| 	Type|Description |
|---|---|---|
|\[].name|text|Name of the mailbox |
|\[].selectable |boolean |Indicates whether or not the access rights allow the mailbox to be selected: <ul><li>true - the mailbox can be selected</li><li>false - the mailbox can not be selected</li></ul>|
|\[].inferior |boolean |Indicates whether or not the access rights allow creating a lower hierachy in the mailbox: <ul><li>true - a lower level can be created</li><li>false - a lower level can not be created</li></ul>|
|\[].interesting |boolean  |Indicates if the mailbox has been marked "interesting" by the server: <ul><li>true - The mailbox has been marked "interesting" by the server. For example, it may contain new messages.</li><li>false - The mailbox has not been marked "interesting" by the server.</li></ul>|
 

If the account does not contain any mailboxes, an empty collection is returned.

>*	If there is no open connection, `.getBoxList()` will open a connection.
>*	If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the `.checkConnection( )` function is automatically called.


#### Example


```4d
 $transporter:=IMAP New transporter($server)
 
 $boxList:=$transporter.getBoxList()
 
 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("New emails are available in the box: "+$split[$split.length-1])
    End if
 End for each
```


---

## .getDelimiter()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

**.getDelimiter()** : Text
|Parameter|Type||Description|
|-----|--- |:---:|------|
|Result|Text|<-|Hierarchy delimiter character|


#### Description

The `.getDelimiter( )` function  returns the character used to delimit levels of hierarchy in the mailbox name. 

The delimiter is a character which can be used to:

*	create lower level (inferior) mailboxes
*	search higher or lower within the mailbox hierarchy
 

#### Result

Mailbox name delimiter character.


>*	If there is no open connection, `.getDelimiter( )` will open a connection.
>*	If the connection has not been used since the [designated connection delay](#checkconnectiondelay), the [`.checkConnection( )`](#checkconnection) function is automatically called.



#### Example


```4d
 $transporter:=IMAP New transporter($server)
 
 $boxList:=$transporter.getBoxList()
 
 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("New emails are available in the box: "+$split[$split.length-1])
    End if
 End for each
```



---

## .getMail()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|Integer|->|Sequence number of the message|
|msgID|Text|->|Unique ID of the message|
|options|Object|->|Message handling instructions|
|Result|Object|<-|[Email object](emailObjectClass.md#email-object)|


#### Description

The `.getMail()` function  returns the `Email` object corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`. This function allows you to locally handle the email contents.

In the first parameter, you can pass either:

*	*msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or  
*	*msgID*, a *text* value indicating the unique ID of the message to retrieve. 

The optional *options* parameter allows you pass an object defining additional instructions for handling the message. The following properties are available:

|Property |	Type |	Description |
|---|---|---|
|updateSeen|boolean|If True, the message is marked as "seen" in the mailbox. If False, the message is not marked as "seen". Default value: True|
|withBody|boolean |	Pass True to return the body of the message. If False, only the message header is returned. Default value: True|

>*	The function generates an error and returns **Null** if *msgID* designates a non-existing message, 
>*	If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
>*	If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)`.
 

#### Result

`.getMail()` returns an [`Email` object](emailObjectClass.md#email-object) with the following specific IMAP properties: *id*, *receivedAt*, and *size*.

#### Example

You want to get the message with ID = 1: 

```4d
 var $server; $transporter : Object
 var $info; $mail; $boxInfo : Variant
 
 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 
  //create transporter
 $transporter:=IMAP New transporter($server)
 
  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")
 
  //get Email object with ID 1
 $mail:=$transporter.getMail(1)
```


---

## .getMails()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|ids |Collection|->|Collection of message ID|
|startMsg|Integer|->|Sequence number of the first message|
|endMsg |Integer|->|Sequence number of the last message|
|options|Object|->|Message handling instructions|
|Result|Object|<-|Object containing:<br><ul><li>a collection of [Email objects](emailObjectClass.md#email-object) and</li><li>a collection of IDs or numbers for missing messages, if any</li></ul>|


#### Description

The `.getMails()` function an object containing a collection of `Email` objects.. 

**First Syntax:**

***.getMails(ids{;options}) -> result***

The first syntax allows you to retrieve messages based on their IDs. 

In the *ids* parameter, pass a collection of IDs for the messages to return. You can get the IDs with [`.getMail()`](#getmail).

The optional *options* parameter allows you to define the parts of the messages to be returned. See the **Options** table below for a description of the available properties. 

**Second syntax:**

 ***.getMails(startMsg;endMsg{;options}) -> result***
 
The second syntax allows you to retrieve messages based on a sequential range. The values passed represent the position of the messages in the mailbox.

In the *startMsg* parameter, pass an *integer* value corresponding to the number of the first message in a sequential range. If you pass a negative number (*startMsg* <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the *endMsg* parameter, pass an *integer* value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (*endMsg* <= 0), the last message of the mailbox will be used as the end of the sequence.

The optional *options* parameter allows you to define the parts of the messages to be returned.

**Options**

|Property |	Type|	Description |
|---|---|---|
|updateSeen |	Boolean |	If True, the specified messages are marked as "seen" in the mailbox. If False, the messages are not marked as "seen". Default value: True |
|withBody |	Boolean |	Pass True to return the body of the specified messages. If False, only the message headers are returned. Default value: True|
 
>*	If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
>*	If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).
 

#### Result

`.getMails()` returns an object containing the following collections:


|Property |	Type |	Description |
|---|---|---|
|list 	|Collection	|Collection of [`Email` objects](emailObjectClass.md#email-object). If no Email objects are found, an empty collection is returned.|
|notFound |Collection| Collection of:<br><ul><li>first syntax - previously passed message IDs that do not exist</li><li>second syntax - sequence numbers of messages between startMsg and endMsg that do not exist</li></ul><br>An empty collection is returned if all messages are found.|


#### Example

You want to retrieve the 20 most recent emails without changing their "seen" status: 

```4d
 var $server,$transporter,$boxInfo,$result : Object
 
 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 
  //create transporter
 $transporter:=IMAP New transporter($server)
 
  //select mailbox
 $boxInfo:=$transporter.selectBox("INBOX")
 
  If($boxInfo.mailCount>0)
		// retrieve the headers of the last 20 messages without marking them as read
    $result:=$transporter.getMails($boxInfo.mailCount-20;$boxInfo.mailCount;\
    	New object("withBody";False;"updateSeen";False))
    For each($mail;$result.list)
  		// ...
    End for each
 End if
```



---

## .getMIMEAsBlob()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob

|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|Integer|-> |Sequence number of the message|
|msgID|Text|-> |Unique ID of the message|
|updateSeen|Boolean|->|If True, the message is marked "seen" in the mailbox. If False the message is left untouched.|
|Result|BLOB|<-|Blob of the MIME string returned from the mail server|


#### Description

The `.getMIMEAsBlob()` function returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`. 

In the first parameter, you can pass either:

*	*msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or  
*	*msgID*, a *text* value indicating the unique ID of the message to retrieve. 

The optional *updateSeen* parameter allows you to specify if the message is marked as "seen" in the mailbox. You can pass:

*	**True** - to mark the message as "seen" (indicating the message has been read)
*	**False** - to leave the message's "seen" status untouched


>*	The function returns an empty BLOB if *msgNumber* or msgID* designates a non-existing message, 
>*	If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
>*	If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox( )`.
 

#### Result

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](emailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.


#### Example


```4d
 var $server; $transporter : Object
 var $boxInfo : Variant
 var $blob : Blob
 
 $server:=New object
 $server.host:="imap.gmail.com"
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 
  //create transporter
 $transporter:=IMAP New transporter($server)
 
  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")
 
  //get BLOB
 $blob:=$transporter.getMIMEAsBlob(1)
```


---


## .host

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**.host** : Text

#### Description

The `.host` property contains the name or the IP address of the host server. Used for mail transactions (SMTP, POP3, IMAP).




---


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

*	**SMTP connections** - [4DSMTPLog.txt](https://doc.4d.com/4Dv18R4/4D/18-R4/Description-of-log-files.300-5005934.en.html#4165231) 
*	**POP3 connections** - [4DPOP3Log.txt](https://doc.4d.com/4Dv18R4/4D/18-R4/Description-of-log-files.300-5005934.en.html#4837674)
*	**IMAP connections** - [4DIMAPLog.txt](https://doc.4d.com/4Dv18R4/4D/18-R4/Description-of-log-files.300-5005934.en.html#5040475)






---


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




---

## .selectBox()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|Text|-> |Name of the mailbox|
|state|Integer|->|Mailbox access status|
|Result|Object|<-|boxInfo object|


#### Description

The `.selectBox()` function selects the *name* mailbox as the current mailbox. This function allows you to retrieve information about the mailbox.

>To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

The optional *state* parameter defines the type of access to the mailbox. The possible values are: 

|Constant|	Value|	Comment|
|---|---|---|
|IMAP read only state|1|The selected mailbox is accessed with read only privileges. Messages with a "recent" flag (indicating new messages) remain unchanged.|
|IMAP read write state|0|The selected mailbox is accessed with read and write privileges. Messages are considered "seen" and lose the "recent" flag (indicating new messages). (Default value)|


>*	The function generates an error and returns **Null** if name designates a non-existing mailbox. 
>*	If there is no open connection, `.selectBox()` will open a connection.
>*	If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**Returned object**

The `boxInfo` object returned contains the following properties:

|Property |	Type |	Description |
|---|---|---|
|name|	Text|Name of the mailbox|
|mailCount|number|Number of messages in the mailbox| 
|mailRecent|number|Number of messages with the "recent" flag |
 

#### Example


```4d
 var $server; $boxinfo : Object
 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 
 $transporter:=IMAP New transporter($server)
 $boxInfo:=$transporter.selectBox("INBOX")
```




---

## .user

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

**.user** : Text

#### Description
The `.user` property contains  the user name used for authentication on the mail server. 














