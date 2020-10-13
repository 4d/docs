---
id: imapTransporterClass
title: IMAP Transporter
---

The `IMAPTransporter` class allows you to retrieve messages from a IMAP email server.


## IMAP Transporter object

IMAP Transporter objects are instantiated with the [IMAP New transporter](#imap-new-transporter) command. They provide the following properties and functions:































|                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.checkConnectionDelay.Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getBoxList().Syntax -->](#getboxlist)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getBoxList().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getDelimiter().Syntax -->](#getdelimiter)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getDelimiter().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getMail().Syntax -->](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getMails().Syntax -->](#getmails)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getMails().Summary -->|
| [<!-- INCLUDE #imapTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #imapTransporterClass.selectBox().Syntax -->](#selectbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.selectBox().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|

---

## IMAP New transporter

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF imapTransporterClass.IMAP New transporter.Syntax -->
**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF imapTransporterClass.IMAP New transporter.Params -->
| Parameter | Typ                |    | Beschreibung                                        |
| --------- | ------------------ |:--:| --------------------------------------------------- |
| server    | Objekt             | -> | Mail server information                             |
| Ergebnis  | 4D.IMAPTransporter | <- | [IMAP transporter object](#imap-transporter-object) |
<!-- END REF -->


#### Beschreibung
The `IMAP New transporter` command <!-- REF imapTransporterClass.IMAP New transporter.Summary -->configures a new IMAP connection<!-- END REF --> according to the 

*server* parameter and returns a new *transporter* object. The returned transporter object will then usually be used to receive emails.

In the *server* parameter, pass an object containing the following properties:

















| *server*                                                                                                                                                                                                           | Default value (if omitted)                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| Falsch                                                              |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| the most secure authentication mode supported by the server is used |
| [<!-- INCLUDE #imapTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #imapTransporterClass.checkConnectionDelay.Summary -->| 300                                                                 |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *mandatory*                                                         |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| none                                                                |
| **password** -> text<p>User password for authentication on the server (not returned in *[IMAP transporter](#imap-transporter-object)* object)                                               | none                                                                |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 993                                                                 |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| none                                                                |
> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.


#### Ergebnis

The function returns an [**IMAP transporter object**](#imap-transporter-object). All returned properties are **read-only**.
> The IMAP connection is automatically closed when the transporter object is destroyed.

#### Beispiel

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

---

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

---

<!-- INCLUDE transporter.authenticationMode.Desc -->


---


<!-- INCLUDE transporter.checkConnection().Desc -->

---


## .checkConnectionDelay

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #imapTransporterClass.checkConnectionDelay.Syntax -->
**.checkConnectionDelay** : Integer<!-- END REF -->


#### Beschreibung
The `.checkConnectionDelay` property contains <!-- REF #imapTransporterClass.checkConnectionDelay.Summary -->  the maximum time (in seconds) allowed prior to checking the connection to the server<!-- END REF -->.  If this time is exceeded between two method calls, the connection to the server will be checked. By default, if the property has not been set in the 

*server* object, the value is 300.
> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

---

<!-- INCLUDE transporter.connectionTimeOut.Desc -->


---

<!-- REF imapTransporterClass.getBoxInfo().Desc -->
## .getBoxInfo()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #imapTransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.getBoxInfo().Params -->
| Parameter | Typ    |    | Beschreibung        |
| --------- | ------ |:--:| ------------------- |
| name      | Text   | -> | Name of the mailbox |
| Ergebnis  | Objekt | <- | boxInfo object      |
<!-- END REF -->


#### Beschreibung
The `.getBoxInfo()` function  <!-- REF #imapTransporterClass.getBoxInfo().Summary -->returns a 

`boxInfo` object corresponding to the mailbox *name*<!-- END REF -->. This function returns the same information as 

`.selectBox()` without changing the current mailbox.

In the *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) command.


**Returned object**

The `boxInfo` object returned contains the following properties:

| Property   | Typ    | Beschreibung                                                        |
| ---------- | ------ | ------------------------------------------------------------------- |
| name       | Text   | Name of the mailbox                                                 |
| mailCount  | number | Number of messages in the mailbox                                   |
| mailRecent | number | Number of messages with the "recent" flag (indicating new messages) |



#### Beispiel

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $info:=$transporter.getBoxInfo("INBOX")
 ALERT("INBOX contains "+String($info.mailRecent)+" recent emails.")
```

<!-- END REF -->


---

<!-- REF imapTransporterClass.getBoxList().Desc -->
## .getBoxList()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #imapTransporterClass.getBoxList().Syntax -->
**.getBoxList()** : Collection<!-- END REF -->

<!-- REF #imapTransporterClass.getBoxList().Params -->
| Parameter | Typ        |    | Beschreibung                  |
| --------- | ---------- |:--:| ----------------------------- |
| Ergebnis  | Collection | <- | Collection of mailbox objects |
<!-- END REF -->


#### Beschreibung
The `.getBoxList()` function  <!-- REF #imapTransporterClass.getBoxList().Summary -->returns a collection of mailboxes describing all of the available mailboxes<!-- END REF -->. This function allows you to locally manage the list of messages located on the IMAP mail server.

#### Ergebnis

Each object of the returned collection contains the following properties:

| Property         | Typ     | Beschreibung                                                                                                        |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| \[].name        | Text    | Name of the mailbox                                                                                                 |
| \[].selectable  | boolean | Indicates whether or not the access rights allow the mailbox to be selected: <ul><li>true - the mailbox can be selected</li><li>false - the mailbox can not be selected</li></ul>               |
| \[].inferior    | boolean | Indicates whether or not the access rights allow creating a lower hierachy in the mailbox: <ul><li>true - a lower level can be created</li><li>false - a lower level can not be created</li></ul> |
| \[].interesting | boolean | Indicates if the mailbox has been marked "interesting" by the server: <ul><li>true - The mailbox has been marked "interesting" by the server. For example, it may contain new messages.</li><li>false - The mailbox has not been marked "interesting" by the server.</li></ul>                      |


If the account does not contain any mailboxes, an empty collection is returned.
> * If there is no open connection, `.getBoxList()` will open a connection.
> * If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the `.checkConnection( )` function is automatically called.


#### Beispiel


```4d
 var $transporter : 4D.IMAPTransporter
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
## .getDelimiter()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #imapTransporterClass.getDelimiter().Syntax -->
**.getDelimiter()** : Text<!-- END REF -->

<!-- REF #imapTransporterClass.getDelimiter().Params -->
| Parameter | Typ  |    | Beschreibung                  |
| --------- | ---- |:--:| ----------------------------- |
| Ergebnis  | Text | <- | Hierarchy delimiter character |
<!-- END REF -->


#### Beschreibung
The `.getDelimiter( )` function  <!-- REF #imapTransporterClass.getDelimiter().Summary -->returns the character used to delimit levels of hierarchy in the mailbox name<!-- END REF -->.

The delimiter is a character which can be used to:

*   create lower level (inferior) mailboxes
*   search higher or lower within the mailbox hierarchy


#### Ergebnis

Mailbox name delimiter character.
> * If there is no open connection, `.getDelimiter( )` will open a connection.
> * If the connection has not been used since the [designated connection delay](#checkconnectiondelay), the [`.checkConnection( )`](#checkconnection) function is automatically called.



#### Beispiel


```4d
 var $transporter : 4D.IMAPTransporter
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
## .getMail()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #imapTransporterClass.getMail().Syntax -->
**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.getMail().Params -->
| Parameter | Typ      |    | Beschreibung                                     |
| --------- | -------- |:--:| ------------------------------------------------ |
| msgNumber | Ganzzahl | -> | Sequence number of the message                   |
| msgID     | Text     | -> | Unique ID of the message                         |
| options   | Objekt   | -> | Message handling instructions                    |
| Ergebnis  | Objekt   | <- | [Email object](emailObjectClass.md#email-object) |
<!-- END REF -->


#### Beschreibung
The `.getMail()` function  <!-- REF #imapTransporterClass.getMail().Summary -->returns the 

`Email` object corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->. This function allows you to locally handle the email contents.

In the first parameter, you can pass either:

*   *msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or
*   *msgID*, a *text* value indicating the unique ID of the message to retrieve.

The optional *options* parameter allows you pass an object defining additional instructions for handling the message. The following properties are available:

| Property   | Typ     | Beschreibung                                                                                                                |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | boolean | If True, the message is marked as "seen" in the mailbox. If False, the message is not marked as "seen". Default value: True |
| withBody   | boolean | Pass True to return the body of the message. If False, only the message header is returned. Default value: True             |
> * The function generates an error and returns **Null** if *msgID* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
> * If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)`.


#### Ergebnis

`.getMail()` returns an [`Email` object](emailObjectClass.md#email-object) with the following specific IMAP properties: *id*, *receivedAt*, and *size*.

#### Beispiel

You want to get the message with ID = 1:

```4d
 var $server : Object
 var $info; $mail; $boxInfo : Variant
 var $transporter : 4D.IMAPTransporter

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
## .getMails()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #imapTransporterClass.getMails().Syntax -->
**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.getMails().Params -->
| Parameter | Typ        |    | Beschreibung                                           |
| --------- | ---------- |:--:| ------------------------------------------------------ |
| ids       | Collection | -> | Collection of message ID                               |
| startMsg  | Ganzzahl   | -> | Sequence number of the first message                   |
| endMsg    | Ganzzahl   | -> | Sequence number of the last message                    |
| options   | Objekt     | -> | Message handling instructions                          |
| Ergebnis  | Objekt     | <- | Object containing:<br><ul><li>a collection of [Email objects](emailObjectClass.md#email-object) and</li><li>a collection of IDs or numbers for missing messages, if any</li></ul> |
<!-- END REF -->


#### Beschreibung
The `.getMails()` function <!-- REF #imapTransporterClass.getMails().Summary -->an object containing a collection of 

`Email` objects.<!-- END REF -->.

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

| Property   | Typ     | Beschreibung                                                                                                                              |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | Boolean | If True, the specified messages are marked as "seen" in the mailbox. If False, the messages are not marked as "seen". Default value: True |
| withBody   | Boolean | Pass True to return the body of the specified messages. If False, only the message headers are returned. Default value: True              |
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
> * If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).


#### Ergebnis

`.getMails()` returns an object containing the following collections:


| Property | Typ        | Beschreibung                                                                                                                       |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| list     | Collection | Collection of [`Email` objects](emailObjectClass.md#email-object). If no Email objects are found, an empty collection is returned. |
| notFound | Collection | Collection of:<br><ul><li>first syntax - previously passed message IDs that do not exist</li><li>second syntax - sequence numbers of messages between startMsg and endMsg that do not exist</li></ul><br>An empty collection is returned if all messages are found.             |


#### Beispiel

You want to retrieve the 20 most recent emails without changing their "seen" status:

```4d
 var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter 

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

<!-- END REF -->


---

<!-- REF imapTransporterClass.getMIMEAsBlob().Desc -->
## .getMIMEAsBlob()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #imapTransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->


<!-- REF #imapTransporterClass.getMIMEAsBlob().Params -->
| Parameter  | Typ      |    | Beschreibung                                                                                  |
| ---------- | -------- |:--:| --------------------------------------------------------------------------------------------- |
| msgNumber  | Ganzzahl | -> | Sequence number of the message                                                                |
| msgID      | Text     | -> | Unique ID of the message                                                                      |
| updateSeen | Boolean  | -> | If True, the message is marked "seen" in the mailbox. If False the message is left untouched. |
| Ergebnis   | BLOB     | <- | Blob of the MIME string returned from the mail server                                         |
<!-- END REF -->


#### Beschreibung
The `.getMIMEAsBlob()` function <!-- REF #imapTransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the 

*msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->.

In the first parameter, you can pass either:

*   *msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or
*   *msgID*, a *text* value indicating the unique ID of the message to retrieve.

The optional *updateSeen* parameter allows you to specify if the message is marked as "seen" in the mailbox. You can pass:

*   **True** - to mark the message as "seen" (indicating the message has been read)
*   **False** - to leave the message's "seen" status untouched
> * The function returns an empty BLOB if *msgNumber* or msgID* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
> * If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox( )`.


#### Ergebnis

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](emailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.


#### Beispiel


```4d
 var $server : Object
 var $boxInfo : Variant
 var $blob : Blob
 var $transporter : 4D.IMAPTransporter

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
## .selectBox()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #imapTransporterClass.selectBox().Syntax -->
**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #imapTransporterClass.selectBox().Params -->
| Parameter | Typ      |    | Beschreibung          |
| --------- | -------- |:--:| --------------------- |
| name      | Text     | -> | Name of the mailbox   |
| state     | Ganzzahl | -> | Mailbox access status |
| Ergebnis  | Objekt   | <- | boxInfo object        |
<!-- END REF -->


#### Beschreibung
The `.selectBox()` function <!-- REF #imapTransporterClass.selectBox().Summary -->selects the 

*name* mailbox as the current mailbox<!-- END REF -->. This function allows you to retrieve information about the mailbox.
> To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

The optional *state* parameter defines the type of access to the mailbox. The possible values are:

| Constant              | Wert | Kommentar                                                                                                                                                             |
| --------------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1    | The selected mailbox is accessed with read only privileges. Messages with a "recent" flag (indicating new messages) remain unchanged.                                 |
| IMAP read write state | 0    | The selected mailbox is accessed with read and write privileges. Messages are considered "seen" and lose the "recent" flag (indicating new messages). (Default value) |
> * The function generates an error and returns **Null** if name designates a non-existing mailbox.
> * If there is no open connection, `.selectBox()` will open a connection.
> * If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**Returned object**

The `boxInfo` object returned contains the following properties:

| Property   | Typ    | Beschreibung                              |
| ---------- | ------ | ----------------------------------------- |
| name       | Text   | Name of the mailbox                       |
| mailCount  | number | Number of messages in the mailbox         |
| mailRecent | number | Number of messages with the "recent" flag |


#### Beispiel


```4d
 var $server; $boxinfo : Object
 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)
 $boxInfo:=$transporter.selectBox("INBOX")
```

<!-- END REF -->



---

<!-- INCLUDE transporter.user.Desc -->












