---
id: imapTransporterClass
title: IMAP Transporter 
---

The IMAP transporter allows you to retrieve messages from a IMAP email server.

It is created with the [IMAP New transporter](https://doc.4d.com/4Dv18R4/4D/18-R4/IMAP-New-transporter.301-4918733.en.html) command.

## Summary

||
|---|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
|[<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summaryimap -->|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
|[<!-- INCLUDE #imapTransporterClass.getBoxInfo().Syntax -->](#getboxinfo-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getBoxInfo().Summary -->|
|[<!-- INCLUDE #imapTransporterClass.getBoxList().Syntax -->](#getboxlist-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getBoxList().Summary -->|
|[<!-- INCLUDE #imapTransporterClass.getDelimiter().Syntax -->](#getdelimiter-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getDelimiter().Summary -->|
|[<!-- INCLUDE #imapTransporterClass.getMail().Syntax -->](#getmail-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getMail().Summary -->|
|[<!-- INCLUDE #imapTransporterClass.getMails().Syntax -->](#getmails-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getMails().Summary -->|
|[<!-- INCLUDE #imapTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getMIMEAsBlob().Summary -->|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
|[<!-- INCLUDE #imapTransporterClass.selectBox().Syntax -->](#selectbox-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.selectBox().Summary -->|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



---

<!-- INCLUDE transporter.authenticationMode.Descimap -->

---


<!-- INCLUDE transporter.checkConnection().Descimap -->


---

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

---




---

<!-- REF imapTransporterClass.getBoxInfo().Desc -->
## .getBoxInfo( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

<!-- REF #imapTransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo**( *name* ) -> object<!-- END REF -->

<!-- REF #imapTransporterClass.getBoxInfo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|text|->|Name of the mailbox|
|Result|object|<-|boxInfo object|
<!-- END REF -->


##### Description

The `.getBoxInfo( )` function  <!-- REF #imapTransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the mailbox *name*<!-- END REF -->. This function returns the same information as `.selectBox( )` without changing the current mailbox.

In the *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the `.getDelimiter( )` command. 


**Returned object**

The `boxInfo` object returned contains the following properties:

|Property|	Type|	Description|
|---|---|---|
|name|text|Name of the mailbox
|mailCount|	number|	Number of messages in the mailbox|
|mailRecent|	number|	Number of messages with the "recent" flag (indicating new messages)|



##### Example

```4d
$transporter:=IMAP New transporter($server)
 
 $info:=$transporter.getBoxInfo("INBOX")
 ALERT("INBOX contains "+String($info.mailRecent)+" recent emails.")
```

<!-- END REF -->


---

<!-- REF imapTransporterClass.getBoxList().Desc -->
## .getBoxList( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

<!-- REF #imapTransporterClass.getBoxList().Syntax -->
**.getBoxList( )** -> collection<!-- END REF -->

<!-- REF #imapTransporterClass.getBoxList().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|collection|<-|Collection of mailbox objects|
<!-- END REF -->


##### Description

The `.getBoxList( )` function  <!-- REF #imapTransporterClass.getBoxList().Summary -->returns a collection of mailboxes describing all of the available mailboxes<!-- END REF -->. This function allows you to locally manage the list of messages located on the IMAP mail server. 

**Returned collection**

Each object of the returned collection contains the following properties:
 

|Property| 	Type|Description |
|---|---|---|
|\[ ].name|text|Name of the mailbox |
|\[ ].selectable |boolean |Indicates whether or not the access rights allow the mailbox to be selected: <ul><li>true - the mailbox can be selected</li><li>false - the mailbox can not be selected</li></ul>|
|\[ ].inferior |boolean |Indicates whether or not the access rights allow creating a lower hierachy in the mailbox: <ul><li>true - a lower level can be created</li><li>false - a lower level can not be created</li></ul>|
|\[ ].interesting |boolean  |Indicates if the mailbox has been marked "interesting" by the server: <ul><li>true - The mailbox has been marked "interesting" by the server. For example, it may contain new messages.</li><li>false - The mailbox has not been marked "interesting" by the server.</li></ul>|
 

If the account does not contain any mailboxes, an empty collection is returned.

>*	If there is no open connection, `.getBoxList( )` will open a connection.
>*	If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the `.checkConnection( )` function is automatically called.


##### Example


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

<!-- END REF -->

---

<!-- REF imapTransporterClass.getDelimiter().Desc -->
## .getDelimiter( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

<!-- REF #imapTransporterClass.getDelimiter().Syntax -->
**.getDelimiter( )** -> text<!-- END REF -->

<!-- REF #imapTransporterClass.getDelimiter().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|text|<-|Hierarchy delimiter character|
<!-- END REF -->


##### Description

The `.getDelimiter( )` function  <!-- REF #imapTransporterClass.getDelimiter().Summary -->returns the character used to delimit levels of hierarchy in the mailbox name<!-- END REF -->. 

The delimiter is a character which can be used to:

*	create lower level (inferior) mailboxes
*	search higher or lower within the mailbox hierarchy
 

**Returned value**

Mailbox name delimiter character.


>*	If there is no open connection, `.getDelimiter( )` will open a connection.
>*	If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the `.checkConnection( )` function is automatically called.


##### Example


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

<!-- END REF -->


---

<!-- REF imapTransporterClass.getMail().Desc -->
## .getMail( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

<!-- REF #imapTransporterClass.getMail().Syntax -->
**.getMail**( *msgID* { ; *options* } ) -> object<!-- END REF -->

<!-- REF #imapTransporterClass.getMail().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgID|longint,text|->|Sequence number (longint) of the message<br>Unique ID (text) of the message|
|options|object|->|Message handling instructions|
|Result|object|<-|Email object|
<!-- END REF -->


##### Description

The `.getMail( )` function  <!-- REF #imapTransporterClass.getMail().Summary -->returns the `Email` object corresponding to the *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->. This function allows you to locally handle the email contents.

In *msgID*, pass either:

*	a *longint* value indicating the sequence number of the message to retrieve or  
*	a *text* value indicating the unique ID of the message to retrieve. 

The optional *options* parameter allows you pass an object defining additional instructions for handling the message. The following properties are available:

|Property |	Type |	Description |
|---|---|---|
|updateSeen|boolean|If True, the message is marked as "seen" in the mailbox. If False, the message is not marked as "seen". Default value: True|
|withBody|boolean |	Pass True to return the body of the message. If False, only the message header is returned. Default value: True|

>*	The function generates an error and returns **Null** if *msgID* designates a non-existing message, 
>*	If no mailbox is selected with the `.selectBox( )` command, an error is generated,
>*	If there is no open connection, `.getMail( )` will open a connection the last mailbox specified with `.selectBox( )`.
 

**Returned object**

`.getMail( )` returns an `Email` object with the following additional IMAP properties: *id*, *receivedAt*, and *size*. For a comprehensive description of mail properties, please refer to the [`Email` object](https://doc.4d.com/4Dv18R4/4D/18-R4/Email-object.300-4981948.en.html) section. 


##### Example

You want to get the message with ID = 1: 

```4d
C_OBJECT($server;$transporter)
 C_VARIANT($info;$mail;$boxInfo)
 
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

<!-- END REF -->

---

<!-- REF imapTransporterClass.getMails().Desc -->
## .getMails( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

<!-- REF #imapTransporterClass.getMails().Syntax -->
**.getMails**( *ids &#124; startMsg* { ; *endMsg* } { ; *options* } ) -> object<!-- END REF -->

<!-- REF #imapTransporterClass.getMails().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|ids | startMsg|collection, longint|->|Collection of message ID or<br>Sequence number of the first message|
|endMsg |longint|->|Sequence number of the last message (if startMsg passed)|
|options|object|->|Message handling instructions|
|Result|object|<-|Object containing:<br><ul><li>a collection of Email objects and</li><li>a collection of IDs or numbers for missing messages, if any</li></ul>|
<!-- END REF -->


##### Description

The `.getMails( )` function <!-- REF #imapTransporterClass.getMails().Summary -->an object containing a collection of `Email` objects.<!-- END REF -->. 

**First Syntax:**

***.getMails(ids{;options}) -> result***

The first syntax allows you to retrieve messages based on their IDs. 

In the *ids* parameter, pass a collection of IDs for the messages to return. You can get the IDs with `.getMail( )`.

The optional *options* parameter allows you to define the parts of the messages to be returned. If omitted, messages will be made up of the message ID, header, size, and received date. See the **Options** table below for a description of the available properties. 

**Second syntax:**

 ***IMAP_transporter.getMails(startMsg;endMsg{;options}) -> result***
 
The second syntax allows you to retrieve messages based on a sequential range. The values passed represent the position of the messages in the mailbox.

In the *startMsg* parameter, pass a *longint* value corresponding to the number of the first message in a sequential range.

In the *endMsg* parameter, pass a *longint* value corresponding to the number of the last message to be included in a sequential range.

The optional *options* parameter allows you to define the parts of the messages to be returned. If omitted, messages will be made up of the message ID, header, size, and received date. 

**Options**

|Property |	Type|	Description |
|---|---|---|
|updateSeen |	Boolean |	If True, the specified messages are marked as "seen" in the mailbox. If False, the messages are not marked as "seen". Default value: True |
|withBody |	Boolean |	Pass True to return the body of the specified messages. If False, only the message headers are returned. Default value: True|
 
>*	If no mailbox is selected with the `.selectBox( )` command, an error is generated.
>*	If there is no open connection, `.getMails( )` will open a connection the last mailbox specified with `.selectBox( )`.
 

**Returned object**

`.getMails( )` returns an object containing the following collections:


|Property |	Type |	Description |
|---|---|---|
|list 	|collection	|Collection of `Email` objects. If no Email objects are found, an empty collection is returned. See [`Email` object](https://doc.4d.com/4Dv18R4/4D/18-R4/Email-object.300-4981948.en.html).|
|notFound |collection| 	Collection of:<br><ul><li>
first syntax - previously passed message IDs that do not exist</li><li>second syntax - sequence numbers of messages between startMsg and endMsg that do not exist</li></ul><br>An empty collection is returned if all messages are found.|


##### Example

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
    var $first Integer:
    If($boxInfo.mailCount>20)
       $first:=$boxInfo.mailCount-20
    Else
       $first:=1
    End if
    $result:=$transporter.getMails($first;$boxInfo.mailCount;New object("withBody";False;"updateSeen";False))
    If(($result#Null)&($result.list#Null))
       For each($mail;$result.list)
  // ...
       End for each
    End if
 End if
```

<!-- END REF -->

---

<!-- REF imapTransporterClass.getMIMEAsBlob().Desc -->
## .getMIMEAsBlob( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

<!-- REF #imapTransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgID* { ; *updateSeen* } ) -> blob<!-- END REF -->

<!-- REF #imapTransporterClass.getMIMEAsBlob().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgID|longint,text|-> |Sequence number (longint) of the message<br>Unique ID (text) of the message|
|updateSeen|boolean|->|If True, the message is marked "seen" in the mailbox. If False the message is left untouched.|
|Result|blob|<-|Blob of the MIME string returned from the mail server|
<!-- END REF -->


##### Description

The `.getMIMEAsBlob( )` function  <!-- REF #imapTransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->. 

In *msgID*, pass either:

*	a *longint* value indicating the sequence number of the message to retrieve or 
*	a *text* value indicating the unique ID of the message to retrieve. 

The optional *updateSeen* parameter allows you to specify if the message is marked as "seen" in the mailbox. You can pass:

*	**True** - to mark the message as "seen" (indicating the message has been read)
*	**False** - to leave the message's "seen" status untouched


>*	The function returns an empty BLOB if *msgID* designates a non-existing message, 
>*	If no mailbox is selected with the `.selectBox( )` command, an error is generated,
>*	If there is no open connection, `.getMIMEAsBlob( )` will open a connection the last mailbox specified with `.selectBox( )`.
 

**Returned BLOB**

`.getMIMEAsBlob( )` returns a `BLOB` which can be archived in a database or converted to an `Email` object with the `MAIL Convert from MIME` command.

For a comprehensive description of mail properties, please refer to the [`Email` object](https://doc.4d.com/4Dv18R4/4D/18-R4/Email-object.300-4981948.en.html) section. 

##### Example


```4d
C_OBJECT($server;$transporter)
 C_VARIANT($boxInfo)
 C_BLOB($blob)
 
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

<!-- END REF -->

---


<!-- INCLUDE transporter.host.Desc -->


---


<!-- INCLUDE transporter.logFile.Desc -->

---


<!-- INCLUDE transporter.port.Desc -->

---

<!-- REF imapTransporterClass.selectBox().Desc -->
## .selectBox( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added|
</details>

<!-- REF #imapTransporterClass.selectBox().Syntax -->
**.selectBox**( *name* { ; *state* } ) -> object<!-- END REF -->

<!-- REF #imapTransporterClass.selectBox().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|text|-> |Name of the mailbox|
|state|longint|->|Mailbox access status|
|Result|object|<-|boxInfo object|
<!-- END REF -->


##### Description

The `.selectBox( )` function <!-- REF #imapTransporterClass.selectBox().Summary -->selects the name mailbox as the current mailbox<!-- END REF -->. This function allows you to retrieve information about the mailbox.

>To get the information from a mailbox without changing the current mailbox, use `.getBoxInfo( )`.

In the *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the `.getDelimiter( )` command.

The optional *state* parameter defines the type of access to the mailbox. The possible values are: 


|Constant|	Value|	Comment|
|---|---|---|
|IMAP read only state|1|The selected mailbox is accessed with read only privileges. Messages with a "recent" flag (indicating new messages) remain unchanged.|
|IMAP read write state|0|The selected mailbox is accessed with read and write privileges. Messages are considered "seen" and lose the "recent" flag (indicating new messages). (Default value)|


>*	The function generates an error and returns **Null** if name designates a non-existing mailbox. 
>*	If there is no open connection, `.selectBox( )` will open a connection.
>*	If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the `.checkConnection( )` function is automatically called.

**Returned object**

The `boxInfo` object returned contains the following properties:


|Property |	Type |	Description |
|---|---|---|
|name|	Text|Name of the mailbox|
|mailCount|number|Number of messages in the mailbox| 
|mailRecent|number|Number of messages with the "recent" flag |
 

##### Example


```4d
C_OBJECT($server;$boxinfo)
 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 
 $transporter:=IMAP New transporter($server)
 $boxInfo:=$transporter.selectBox("INBOX")
```

<!-- END REF -->



---

<!-- INCLUDE transporter.user.Desc -->












