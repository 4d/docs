---
id: IMAPTransporterClass
title: IMAPTransporter
---

The `IMAPTransporter` class allows you to retrieve messages from a IMAP email server.

### IMAP Transporter object

IMAP Transporter objects are instantiated with the [IMAP New transporter](../commands/imap-new-transporter.md) command. They provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)<br/><!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)<br/><!-- INCLUDE #IMAPTransporterClass.append().Summary -->|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->|
|[<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)<br/><!-- INCLUDE #IMAPTransporterClass.copy().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)<br/><!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #IMAPTransporterClass.delete().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)<br/><!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)<br/><!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<br/><!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)<br/><!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)<br/><!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)<br/><!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)<br/><!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<br/><!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)<br/><!-- INCLUDE #IMAPTransporterClass.move().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)<br/><!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)<br/><!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)<br/><!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)<br/><!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)<br/><!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)<br/><!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)<br/><!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->|


## 4D.IMAPTransporter.new()

<!-- REF #4D.IMAPTransporter.new().Syntax -->**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->


<!-- REF #4D.IMAPTransporter.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|Object|->|Mail server information|
|Result|4D.IMAPTransporter|<-|[IMAP transporter object](#imap-transporter-object)|
<!-- END REF -->

#### Description

The `4D.IMAPTransporter.new()` function <!-- REF #4D.IMAPTransporter.new().Summary -->creates and returns a new object of the `4D.IMAPTransporter` type<!-- END REF -->. It is identical to the [`IMAP New transporter`](../commands/imap-new-transporter.md) command (shortcut).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- REF IMAPTransporterClass.addFlags().Desc -->
## .addFlags()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20|Supports custom keywords|
|18 R6|Added|


</details>

<!-- REF #IMAPTransporterClass.addFlags().Syntax -->**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.addFlags().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgIDs|Collection|->|Collection of strings: Message unique IDs (text)<br/>Text: Unique ID of a message<br/>Longint (IMAP all): All messages in the selected mailbox|
|keywords|Object|->|Keyword flags to add|
|Result|Object|<-|Status of the addFlags operation|
<!-- END REF -->

#### Description

The `.addFlags()` function <!-- REF #IMAPTransporterClass.addFlags().Summary -->adds flags to the `msgIDs` for the specified `keywords`<!-- END REF -->.

In the `msgIDs` parameter, you can pass either:

* a *collection* containing the unique IDs of specific messages or
* the unique ID (*text*) of a single message or
* the following constant (*longint*) for all messages in the selected mailbox:

 |Constant |Value |Comment|
 |---|---|---|
 |IMAP all |1 |Select all messages in the selected mailbox|

The `keywords` parameter lets you define the flags to add to `msgIDs`. You can use the following standard flags as well as custom flags (custom flags support depends on the server implementation):

|Property|Type|Description|
|---|---|---|
|$draft |Boolean |True to add the "draft" flag to the message |
|$seen |Boolean  |True to add the "seen" flag to the message|
|$flagged |Boolean  |True to add the "flagged" flag to the message|
|$answered |Boolean  |True to add the "answered" flag to the message|
|$deleted |Boolean | True to add the "deleted" flag to the message|
|`<custom flag>` |Boolean | True to add the custom flag to the message|

The custom flags names must respect this rule: the keyword must be a case-insensitive string excluding control chars and space and can not include any of these characters: `( ) { ] % * " \`

>* For a keyword to be taken into account it has to be true.
>* The interpretation of keyword flags may vary per mail client.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise
|statusText || Text|Status message returned by the IMAP server, or last error returned in the 4D error stack  |
|errors ||Collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| 4D error code|
| |\[].message|Text|Description of the 4D error |
| |\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Create transporter
$transporter:=IMAP New transporter($options)

// Select mailbox
$boxInfo:=$transporter.selectBox("INBOX")

// Mark all messages from INBOX as read/seen
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.addFlags(IMAP all;$flags)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.append().Desc -->
## .append()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R6|Added|

</details>

<!-- REF #IMAPTransporterClass.append().Syntax -->**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.append().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mailObj|Object|->|Email object|
|destinationBox|Text|->|Mailbox to receive Email object|
|options|Object|->|Object containing charset info |
|Result|Object|<-|Status of the append operation|
<!-- END REF -->

#### Description

The `.append()` function <!-- REF #IMAPTransporterClass.append().Summary -->appends a `mailObj` to the `destinationBox`<!-- END REF -->.

In the `mailObj` parameter, pass an Email object. For a comprehensive description of mail properties, see [Email object](EmailObjectClass.md#email-object). The `.append()` function supports keyword tags in the Email object's `keywords` attribute.

The optional `destinationBox` parameter lets you pass the name of a mailbox where the `mailObj` will be appended. If omitted, the current mailbox is used.

In the optional `options` parameter, you can pass an object to define the charset and encoding for specific parts of the email. Available properties:

|Property|Type|Description|
|---|---|---|
|headerCharset|Text|Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s). Possible values: See possible charsets table below|
|bodyCharset|Text|Charset and encoding used for the html and text body contents of the email. Possible values: See possible charsets table below |

Possible charsets:

|Constant|Value|Comment|
|---|---|---|
|mail mode ISO2022JP|US-ASCII_ISO-2022-JP_UTF8_QP|<ul><li>headerCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>|
|mail mode ISO88591|ISO-8859-1|<ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>|
|mail mode UTF8|US-ASCII_UTF8_QP|headerCharset & bodyCharset: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)|
|mail mode UTF8 in base64|US-ASCII_UTF8_B64|headerCharset & bodyCharset: US-ASCII if possible, otherwise UTF-8 & base64|

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise
|statusText || Text|Status message returned by the IMAP server, or last error returned in the 4D error stack  |
|errors ||Collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| 4D error code|
| |\[].message|Text|Description of the 4D error |
| |\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example

To save an email in the Drafts mailbox:

```4d
var $settings; $status; $msg; $imap: Object

$settings:=New object("host"; "domain.com"; "user"; "xxxx"; "password"; "xxxx"; "port"; 993)

$imap:=IMAP New transporter($settings)

$msg:=New object
$msg.from:="xxxx@domain.com"
$msg.subject:="Lorem Ipsum"
$msg.textBody:="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
$msg.keywords:=New object
$msg.keywords["$seen"]:=True//flag the message as read
$msg.keywords["$draft"]:=True//flag the message as a draft

$status:=$imap.append($msg; "Drafts")
```

<!-- END REF -->

<!-- INCLUDE transporter.authenticationModeIMAP.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Desc -->

## .checkConnectionDelay

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R4|Added|

</details>

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->**.checkConnectionDelay** : Integer<!-- END REF -->

#### Description

The `.checkConnectionDelay` property contains <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->the maximum time (in seconds) allowed prior to checking the connection to the server<!-- END REF -->.  If this time is exceeded between two method calls, the connection to the server will be checked. By default, if the property has not been set in the *server* object, the value is 300.

>**Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

<!-- END REF -->

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- REF IMAPTransporterClass.copy().Desc -->
## .copy()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R5|Added|

</details>

<!-- REF #IMAPTransporterClass.copy().Syntax -->**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.copy().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgsIDs|Collection|->|Collection of message unique IDs (strings)|
|allMsgs|Integer|->|`IMAP all`: All messages in the selected mailbox|
|destinationBox|Text|->|Mailbox to receive copied messages|
|Result|Object|<-|Status of the copy operation|
<!-- END REF -->

#### Description

The `.copy()` function <!-- REF #IMAPTransporterClass.copy().Summary -->copies the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server<!-- END REF -->.

You can pass:

* in the *msgsIDs* parameter, a collection containing the unique IDs of the specific messages to copy, or
* in the *allMsgs* parameter, the `IMAP all` constant (integer) to copy all messages in the selected mailbox.

The *destinationBox* parameter allows you to pass a text value with the name of the mailbox where the copies of messages will be placed.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise
|statusText || Text|Status message returned by the IMAP server, or last error returned in the 4D error stack  |
|errors ||Collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| 4D error code|
| |\[].message|Text|Description of the 4D error |
| |\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example 1

To copy a selection of messages:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // copy found messages to the "documents" mailbox
 $status:=$transporter.copy($mailIds;"documents")
```

#### Example 2

To copy all messages in the current mailbox:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox

 $boxInfo:=$transporter.selectBox("inbox")

  // copy all messages to the "documents" mailbox
 $status:=$transporter.copy(IMAP all;"documents")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.createBox().Desc -->
## .createBox()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19|Added|

</details>

<!-- REF #IMAPTransporterClass.createBox().Syntax -->**.createBox**( *name* :  Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.createBox().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|Text|->|Name of the new mailbox|
|Result|Object|<-|Status of the mailbox creation operation|
<!-- END REF -->

#### Description

The `.createBox()` function <!-- REF #IMAPTransporterClass.createBox().Summary -->creates a mailbox with the given `name`<!-- END REF -->. If the IMAP server’s hierarchy separator character appears elsewhere in the mailbox name, the IMAP server will create any parent names needed to create the given mailbox.

In other words, an attempt to create "Projects/IMAP/Doc" on a server in which "/" is the hierarchy separator character will create:

* Only the "Doc" mailbox if "Projects" & "IMAP" already exist.
* "IMAP" & "Doc" mailboxes if only “Projects” already exists.
* "Projects" & “IMAP” & "Doc" mailboxes, if they do not already exist.

In the `name` parameter, pass the name of the new mailbox.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise
|statusText || Text|Status message returned by the IMAP server, or last error returned in the 4D error stack  |
|errors ||Collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| 4D error code|
| |\[].message|Text|Description of the 4D error |
| |\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example

To create a new “Invoices” mailbox:

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")
If(OK=1)
$options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$status:=$transporter.createBox("Invoices")

If ($status.success)
ALERT("Mailbox creation successful!")
Else
ALERT("Error: "+$status.statusText)
End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.delete().Desc -->
## .delete()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R5|Added|

</details>

<!-- REF #IMAPTransporterClass.delete().Syntax -->**.delete**( *msgsIDs* : Collection ) : Object<br/>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.delete().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgsIDs|Collection|->|Collection of message unique IDs (strings)|
|allMsgs|Integer|->|`IMAP all`: All messages in the selected mailbox|
|Result|Object|<-|Status of the delete operation|
<!-- END REF -->

#### Description

The `.delete()` function <!-- REF #IMAPTransporterClass.delete().Summary -->sets the "deleted" flag for the messages defined in `msgsIDs` or `allMsgs`<!-- END REF -->.

You can pass:

* in the `msgsIDs` parameter, a collection containing the unique IDs of the specific messages to delete, or
* in the `allMsgs` parameter, the `IMAP all` constant (integer) to delete all messages in the selected mailbox.

Executing this function does not actually remove messages. Messages with the "delete" flag can still be found by the [.searchMails()](#searchmails) function. Flagged messages are deleted from the IMAP server with the [`.expunge()`](#expunge) function or by selecting another mailbox or when the [transporter object](#imap-transporter-object) (created with [IMAP New transporter](#imap-new-transporter)) is destroyed.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise
|statusText || Text|Status message returned by the IMAP server, or last error returned in the 4D error stack  |
|errors ||Collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| 4D error code|
| |\[].message|Text|Description of the 4D error |
| |\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example 1

To delete a selection of messages:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"Reports\"")

  // Delete selected messages
 $status:=$transporter.delete($mailIds)
```

#### Example 2

To delete all messages in the current mailbox:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Junk Email")

  // delete all messages in the current mailbox
 $status:=$transporter.delete(IMAP all)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.deleteBox().Desc -->
## .deleteBox()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19|Added|

</details>

<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->**.deleteBox**( *name* : Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.deleteBox().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|Text|->|Name of the mailbox to delete|
|Result|Object|<-|Status of the mailbox deletion operation|
<!-- END REF -->


#### Description

The `.deleteBox()` function <!-- REF #IMAPTransporterClass.deleteBox().Summary -->permanently removes the mailbox with the given `name` from the IMAP server<!-- END REF -->. Attempting to delete an INBOX or a mailbox that does not exist will generate an error.

In the `name` parameter, pass the name of the mailbox to delete.  

>* The function cannot delete a mailbox that has child mailboxes if the parent mailbox has the "\Noselect" attribute.
>* All messages in the deleted mailbox will also be deleted.
>* The ability to delete a mailbox depends on the mail server.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise
|statusText || Text|Status message returned by the IMAP server, or last error returned in the 4D error stack  |
|errors ||Collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| 4D error code|
| |\[].message|Text|Description of the 4D error |
| |\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example  

To delete the "Nova Orion Industries" child mailbox from the "Bills" mailbox hierarchy:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// delete mailbox
$name:="Bills"+$transporter.getDelimiter()+"Nova Orion Industries"
$status:=$transporter.deleteBox($name)

If ($status.success)
 ALERT("Mailbox deletion successful!")
 Else
 ALERT("Error: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Desc -->
## .expunge()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R6|Added|

</details>

<!-- REF #IMAPTransporterClass.expunge().Syntax -->**.expunge()** : Object<!-- END REF -->


<!-- REF IMAPTransporterClass.expunge().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-|Status of the expunge operation |
<!-- END REF -->

#### Description

The `.expunge()` function <!-- REF #IMAPTransporterClass.expunge().Summary -->removes all messages with the "deleted" flag from the IMAP mail server.<!-- END REF --> The "deleted" flag can be set with the [`.delete()`](#delete) or [`.addFlags()`](#addflags) methods.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise
|statusText || Text|Status message returned by the IMAP server, or last error returned in the 4D error stack  |
|errors ||Collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| 4D error code|
| |\[].message|Text|Description of the 4D error |
| |\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example

```4d
var $options;$transporter;$boxInfo;$status : Object
var $ids : Collection

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Create transporter
$transporter:=IMAP New transporter($options)

// Select mailbox
$boxInfo:=$transporter.selectBox("INBOX")

// Find and delete all seen messages in INBOX
$ids:=$transporter.searchMails("SEEN")
$status:=$transporter.delete($ids)

// Purge all messages flagged as deleted
$status:=$transporter.expunge()
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxInfo().Desc -->

## .getBoxInfo()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20|*id* is returned|
|18 R5|*name* is optional|
|18 R4|Added|

</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|Text|->|Name of the mailbox|
|Result|Object|<-|boxInfo object|
<!-- END REF -->

#### Description

The `.getBoxInfo()` function <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the current maibox, or the mailbox *name*<!-- END REF -->. This function returns the same information as [`.selectBox()`](#selectbox) without changing the current mailbox.

In the optional *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

If the mailbox *name* is not selectable or does not exist, the function generates an error and returns **null**.

**Returned object**

The `boxInfo` object returned contains the following properties:

|Property| Type| Description|
|---|---|---|
|name|Text|Name of the mailbox
|mailCount| Number| Number of messages in the mailbox|
|mailRecent| Number| Number of messages with the "recent" flag (indicating new messages)|
|id| text| Unique id of the mailbox|
|mailUnseen| Number|Number of messages marked "unseen"|

#### Example

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $info:=$transporter.getBoxInfo("INBOX")
 ALERT("INBOX contains "+String($info.mailRecent)+" recent emails.")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxList().Desc -->
## .getBoxList()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R4|Added|
|19|Add `isSubscribed` parameter|

</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->


<!-- REF #IMAPTransporterClass.getBoxList().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|parameters|Object|->|Parameter object|
|Result|Collection|<-|Collection of mailbox objects|
<!-- END REF -->

#### Description

The `.getBoxList()` function <!-- REF #IMAPTransporterClass.getBoxList().Summary -->returns a collection of mailboxes describing all of the available mailboxes<!-- END REF -->. This function allows you to locally manage the list of messages located on the IMAP mail server.

In the optional `parameters` parameter, pass an object containing values to filter the returned mailboxes. You can pass:

|Property | Type| Description |
|---|---|---|
|isSubscribed|  Boolean |<li>**True** to return only subscribed mailboxes</li><li> **False** to return all available mailboxes</li>|
| names      | Collection | Collection of objects containing a "name" attribute or collection of texts containing the box names |
| withBoxProperties| Boolean | If true (default): adds the `selectable`, `inferior`, and `interesting` attributes to the result object. If false, these attributes are omitted.|
| withBoxInfo| Boolean | Default value is false. If true, adds the `mailCount`, `mailRecent`, and `id` attributes to the result object.|

#### Result

Each object of the returned collection contains the following properties:

|Property|  Type|Description |
|---|---|---|
|\[].name|Text|Name of the mailbox. Returned if withBoxProperties=true or withBoxInfo=true |
|\[].selectable |Boolean |Indicates whether or not the access rights allow the mailbox to be selected: <ul><li>true - the mailbox can be selected</li><li>false - the mailbox can not be selected</li></ul>	Returned if withBoxProperties=true|
|\[].inferior |Boolean |Indicates whether or not the access rights allow creating a lower hierachy in the mailbox: <ul><li>true - a lower level can be created</li><li>false - a lower level can not be created</li></ul>	Returned if withBoxProperties=true|
|\[].interesting |Boolean  |Indicates if the mailbox has been marked "interesting" by the server: <ul><li>true - The mailbox has been marked "interesting" by the server. For example, it may contain new messages.</li><li>false - The mailbox has not been marked "interesting" by the server.</li></ul>	Returned if withBoxProperties=true|
| [].mailCount  | Number | Number of messages in inbox. Returned if withBoxInfo=true |
| [].mailRecent | Number | Number of messages marked "recent" (indicating new messages). Returned if withBoxInfo=true  |
| [].mailUnseen | Number | Number of messages marked "unseen". Returned if withBoxInfo=true |
| [].id         | Text   | Unique mailbox identifier. Returned if withBoxInfo=true |


If the account does not contain any mailboxes, an empty collection is returned.

>* If there is no open connection, `.getBoxList()` will open a connection.
>* If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the `.checkConnection( )` function is automatically called.

#### Example

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

<!-- REF IMAPTransporterClass.getDelimiter().Desc -->
## .getDelimiter()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R4|Added|

</details>

<!-- REF #IMAPTransporterClass.getDelimiter().Syntax -->**.getDelimiter()** : Text<!-- END REF -->


<!-- REF #IMAPTransporterClass.getDelimiter().Params -->
|Parameter|Type||Description|
|-----|--- |:---:|------|
|Result|Text|<-|Hierarchy delimiter character|
<!-- END REF -->

#### Description

The `.getDelimiter()` function <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->returns the character used to delimit levels of hierarchy in the mailbox name<!-- END REF -->.

The delimiter is a character which can be used to:

* create lower level (inferior) mailboxes
* search higher or lower within the mailbox hierarchy

#### Result

Mailbox name delimiter character.

>* If there is no open connection, `.getDelimiter()` will open a connection.
>* If the connection has not been used since the [designated connection delay](#checkconnectiondelay), the [`.checkConnection()`](#checkconnection) function is automatically called.

#### Example

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

<!-- REF IMAPTransporterClass.getMail().Desc -->
## .getMail()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R4|Added|

</details>

<!-- REF #IMAPTransporterClass.getMail().Syntax -->**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br/>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.getMail().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|Integer|->|Sequence number of the message|
|msgID|Text|->|Unique ID of the message|
|options|Object|->|Message handling instructions|
|Result|Object|<-|[Email object](EmailObjectClass.md#email-object)|
<!-- END REF -->

#### Description

The `.getMail()` function <!-- REF #IMAPTransporterClass.getMail().Summary -->returns the `Email` object corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->. This function allows you to locally handle the email contents.

In the first parameter, you can pass either:

* *msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or  
* *msgID*, a *text* value indicating the unique ID of the message to retrieve.

The optional *options* parameter allows you pass an object defining additional instructions for handling the message. The following properties are available:

|Property | Type | Description |
|---|---|---|
|updateSeen|boolean|If True, the message is marked as "seen" in the mailbox. If False, the message is not marked as "seen". Default value: True|
|withBody|boolean | Pass True to return the body of the message. If False, only the message header is returned. Default value: True|

>* The function generates an error and returns **Null** if *msgID* designates a non-existing message,
>* If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
>* If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)`.

#### Result

`.getMail()` returns an [`Email` object](EmailObjectClass.md#email-object) with the following specific IMAP properties: *id*, *receivedAt*, and *size*.

#### Example

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

<!-- REF IMAPTransporterClass.getMails().Desc -->
## .getMails()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R5|Added|

</details>

<!-- REF #IMAPTransporterClass.getMails().Syntax -->**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br/>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.getMails().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|ids |Collection|->|Collection of message ID|
|startMsg|Integer|->|Sequence number of the first message|
|endMsg |Integer|->|Sequence number of the last message|
|options|Object|->|Message handling instructions|
|Result|Object|<-|Object containing:<br/><ul><li>a collection of [Email objects](EmailObjectClass.md#email-object) and</li><li>a collection of IDs or numbers for missing messages, if any</li></ul>|
<!-- END REF -->

#### Description

The `.getMails()` function <!-- REF #IMAPTransporterClass.getMails().Summary -->returns an object containing a collection of `Email` objects<!-- END REF -->.

**First Syntax:**

***.getMails( ids { ; options } ) -> result***

The first syntax allows you to retrieve messages based on their IDs.

In the *ids* parameter, pass a collection of IDs for the messages to return. You can get the IDs with [`.getMail()`](#getmail).

The optional *options* parameter allows you to define the parts of the messages to be returned. See the **Options** table below for a description of the available properties.

**Second syntax:**

 ***.getMails( startMsg ; endMsg { ; options } ) -> result***

The second syntax allows you to retrieve messages based on a sequential range. The values passed represent the position of the messages in the mailbox.

In the *startMsg* parameter, pass an *integer* value corresponding to the number of the first message in a sequential range. If you pass a negative number (*startMsg* <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the *endMsg* parameter, pass an *integer* value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (*endMsg* <= 0), the last message of the mailbox will be used as the end of the sequence.

The optional *options* parameter allows you to define the parts of the messages to be returned.

**Options**

|Property | Type| Description |
|---|---|---|
|updateSeen | Boolean | If True, the specified messages are marked as "seen" in the mailbox. If False, the messages are not marked as "seen". Default value: True |
|withBody | Boolean | Pass True to return the body of the specified messages. If False, only the message headers are returned. Default value: True|

>* If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
>* If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).

#### Result

`.getMails()` returns an object containing the following collections:

|Property | Type | Description |
|---|---|---|
|list  |Collection |Collection of [`Email` objects](EmailObjectClass.md#email-object). If no Email objects are found, an empty collection is returned.|
|notFound |Collection| Collection of:<br/><ul><li>first syntax - previously passed message IDs that do not exist</li><li>second syntax - sequence numbers of messages between startMsg and endMsg that do not exist</li></ul>An empty collection is returned if all messages are found.|

#### Example

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

<!-- REF IMAPTransporterClass.getMIMEAsBlob().Desc -->
## .getMIMEAsBlob()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R4|Added|

</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br/>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->


<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|Integer|-> |Sequence number of the message|
|msgID|Text|-> |Unique ID of the message|
|updateSeen|Boolean|->|If True, the message is marked "seen" in the mailbox. If False the message is left untouched.|
|Result|BLOB|<-|Blob of the MIME string returned from the mail server|
<!-- END REF -->

#### Description

The `.getMIMEAsBlob()` function <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->.

In the first parameter, you can pass either:

* *msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or  
* *msgID*, a *text* value indicating the unique ID of the message to retrieve.

The optional *updateSeen* parameter allows you to specify if the message is marked as "seen" in the mailbox. You can pass:

* **True** - to mark the message as "seen" (indicating the message has been read)
* **False** - to leave the message's "seen" status untouched

>* The function returns an empty BLOB if *msgNumber* or msgID* designates a non-existing message,
>* If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
>* If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox()`.

#### Result

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](EmailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.

#### Example

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

<!-- INCLUDE transporter.host.Desc -->

<!-- INCLUDE transporter.logFile.Desc -->

<!-- REF IMAPTransporterClass.move().Desc -->
## .move()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R5|Added|

</details>

<!-- REF #IMAPTransporterClass.move().Syntax -->**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.move().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgsIDs|Collection|->|Collection of message unique IDs (strings)|
|allMsgs|Integer|->|`IMAP all`: All messages in the selected mailbox|
|destinationBox|Text|->|Mailbox to receive moved messages|
|Result|Object|<-|Status of the move operation|
<!-- END REF -->

#### Description

The `.move()` function <!-- REF #IMAPTransporterClass.move().Summary -->moves the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server<!-- END REF -->.

You can pass:

* in the *msgsIDs* parameter, a collection containing the unique IDs of the specific messages to move, or
* in the *allMsgs* parameter, the `IMAP all` constant (integer) to move all messages in the selected mailbox.

The *destinationBox* parameter allows you to pass a text value with the name of the mailbox where the messages will be moved.

> This function is only supported by IMAP servers compliant with RFC [8474](https://tools.ietf.org/html/rfc8474).

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise
|statusText || Text|Status message returned by the IMAP server, or last error returned in the 4D error stack  |
|errors ||Collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| 4D error code|
| |\[].message|Text|Description of the 4D error |
| |\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example 1

To move a selection of messages:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // Move found messages from the current mailbox to the "documents" mailbox
 $status:=$transporter.move($mailIds;"documents")
```

#### Example 2

To move all messages in the current mailbox:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  // move all messages in the current mailbox to the "documents" mailbox
 $status:=$transporter.move(IMAP all;"documents")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.numToID().Desc -->
## .numToID()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R5|Added|

</details>

<!-- REF #IMAPTransporterClass.numToID().Syntax -->**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->


<!-- REF #IMAPTransporterClass.numToID().Params -->
|Parameter|Type||Description|
|-----|--- |:---:|------|
|startMsg|Integer|-> |Sequence number of the first message|
|endMsg|Integer|->|Sequence number of the last message|
|Result|Collection|<-|Collection of unique IDs|
<!-- END REF -->

#### Description

The `.numToID()` function <!-- REF #IMAPTransporterClass.numToID().Summary -->converts the sequence numbers to IMAP unique IDs for the messages in the sequential range designated by *startMsg* and *endMsg*<!-- END REF --> in the currently selected mailbox.

In the *startMsg* parameter, pass an integer value corresponding to the number of the first message in a sequential range. If you pass a negative number (*startMsg* <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the *endMsg* parameter, pass an integer value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (*endMsg* <= 0), the last message of the mailbox will be used as the end of the sequence.

#### Result

The function returns a collection of strings (unique IDs).

#### Example

```4d
 var $transporter : 4D.IMAPTransporter
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get IDs for 5 last messages received
 $mailIds:=$transporter.numToID(($boxInfo.mailCount-5);$boxInfo.mailCount)

  //delete the messages from the current mailbox
 $status:=$transporter.delete($mailIds)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.removeFlags().Desc -->
## .removeFlags()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20|Supports custom keywords|
|18 R6|Added|


</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.removeFlags().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgIDs|Collection|->|Collection of strings: Message unique IDs (text)<br/>Text: Unique ID of a message<br/>Longint (IMAP all): All messages in the selected mailbox|
|keywords|Object|->|Keyword flags to remove|
|Result|Object|<-|Status of the removeFlags operation|
<!-- END REF -->

#### Description

The `.removeFlags()` function <!-- REF #IMAPTransporterClass.removeFlags().Summary -->removes flags from the `msgIDs` for the specified `keywords`<!-- END REF -->.

In the `msgIDs` parameter, you can pass either:

* a *collection* containing the unique IDs of specific messages or
* the unique ID (*text*) of a single message or
* the following constant (*longint*) for all messages in the selected mailbox:

 |Constant |Value |Comment|
 |---|---|---|
 |IMAP all |1 |Select all messages in the selected mailbox|

The `keywords` parameter lets you define the flags to remove from `msgIDs`. You can use the following standard flags as well as custom flags:

|Parameter|Type|Description|
|---|---|---|
|$draft |Boolean |True to remove the "draft" flag from the message |
|$seen |Boolean  |True to remove the "seen" flag from the message|
|$flagged |Boolean  |True to remove the "flagged" flag from the message|
|$answered |Boolean  |True to remove the "answered" flag from the message|
|$deleted |Boolean | True to remove the "deleted" flag from the message|
|`<custom flag>` |Boolean | True to remove the custom flag from the message|

Please refer to [.addFlags()](#addflags) for more information on custom flags.

>* For a keyword to be taken into account it has to be true.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise
|statusText || Text|Status message returned by the IMAP server, or last error returned in the 4D error stack  |
|errors ||Collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| 4D error code|
| |\[].message|Text|Description of the 4D error |
| |\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Create transporter
$transporter:=IMAP New transporter($options)

// Select mailbox
$boxInfo:=$transporter.selectBox("INBOX")

// Mark all messages from INBOX as unseen
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.removeFlags(IMAP all;$flags)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.renameBox().Desc -->
## .renameBox()

<details><summary>History</summary>


|Release|Changes|
|---|---|
|19|Added|

</details>

<!-- REF #IMAPTransporterClass.renameBox().Syntax -->**.renameBox**( *currentName* : Text ; *newName* : Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.renameBox().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|currentName|Text|->|Name of the current mailbox|
|newName|Text|->|New mailbox name|
|Result|Object|<-|Status of the renaming operation|
<!-- END REF -->

#### Description

The `.renameBox()` function <!-- REF #IMAPTransporterClass.renameBox().Summary -->changes the name of a mailbox on the IMAP server<!-- END REF -->. Attempting to rename a mailbox from a mailbox name that does not exist or to a mailbox name that already exists will generate an error.

In the `currentName` parameter, pass the name of the mailbox to be renamed.

Pass the new name for the mailbox in the `newName` parameter.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise
|statusText || Text|Status message returned by the IMAP server, or last error returned in the 4D error stack  |
|errors ||Collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| 4D error code|
| |\[].message|Text|Description of the 4D error |
| |\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example

To to rename your “Invoices” mailbox to “Bills”:

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"

$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// rename mailbox
$status:=$transporter.renameBox("Invoices"; "Bills")

If ($status.success)
   ALERT("Mailbox renaming successful!")
   Else
   ALERT("Error: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.port.Desc -->

<!-- REF IMAPTransporterClass.searchMails().Desc -->
## .searchMails()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R5|Added|

</details>

<!-- REF #IMAPTransporterClass.searchMails().Syntax -->**.searchMails**( *searchCriteria* : Text ) : Collection<!-- END REF -->


<!-- REF #IMAPTransporterClass.searchMails().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|searchCriteria|Text|-> |Search criteria|
|Result|Collection|<-|Collection of message numbers|
<!-- END REF -->

#### Description

> This function is based upon the specification for the [IMAP protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

The `.searchMails()` function <!-- REF #IMAPTransporterClass.searchMails().Summary -->searches for messages that match the given *searchCriteria* in the current mailbox<!-- END REF -->. *searchCriteria* consists of one or more search keys.

*searchCriteria* is a text parameter listing one or more search keys (see [Authorized search-keys](#authorized-search-keys) below) associated or not with values to look for. A search key may be a single or multiple items. For example:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> Matching is usually not case-sensitive

* If the *searchCriteria* is a null string, the search will be equivalent to a “select all”.
* If the *searchCriteria* includes multiple search keys, the result is the intersection (AND function) of all the messages that match those keys.

```
searchCriteria = FLAGGED FROM "SMITH"
```

... returns all messages with \Flagged flag set AND sent by Smith.

* You can use the **OR** or **NOT** operators as follows:

```
searchCriteria = OR SEEN FLAGGED
```

... returns all messages with \Seen flag set OR \Flagged flag set

```
searchCriteria = NOT SEEN
```

... returns all messages with \Seen flag not set.

```
searchCriteria = HEADER CONTENT-TYPE "MIXED" NOT HEADER CONTENT-TYPE "TEXT"...
```

... returns message whose content-type header contains “Mixed” and does not contain “Text”.

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```

... returns message whose content-type header contains “ e ” and whose Subject header does not contain “ o ” and whose content-type header is not “ Mixed ”.

As concerns the last two examples, notice that the result of the search is different when you remove the parentheses of the first search key list.

* The *searchCriteria* may include the optional \[CHARSET] specification. This consists of the "CHARSET" word followed by a registered \[CHARSET] (US ASCII, ISO-8859). It indicates the charset of the *searchCriteria* string. Therefore, you must convert the *searchCriteria* string into the specified charset if you use the \[CHARSET] specification (see the `CONVERT FROM TEXT` or `Convert to text` commands).
By default, 4D encodes in Quotable Printable the searchCriteria string if it contains extended characters.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... means the search criteria uses the charset iso-8859 and the server will have to convert the search criteria before searching, if necessary.

#### Search value types

Search-keys may request the value to search for:

* **Search-keys with a date value**: the date is a string that must be formatted as follows: *date-day+"-"+date-month+"-"+date-year* where date-day indicates the number of the day of the month (max. 2 characters), date-month indicates the name of the month (Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Dec) and date-year indicates the year (4 characters).
Example: `searchCriteria = SENTBEFORE 1-Feb-2020` (a date does not usually need to be quoted since it does not contain any special characters)

* **Search-keys with a string value**: the string may contain any character and must be quoted. If the string does not contain any special characters, like the space character for instance, it does not need to be quoted. Quoting such strings will ensure that your string value will be correctly interpreted.
Example: `searchCriteria = FROM "SMITH"`
For all search keys that use strings, a message matches the key if the string is a substring of the field. Matching is not case-sensitive.

* **Search-keys with a field-name value**: the field-name is the name of a header field.
Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

* **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces.
Example: `searchCriteria = KEYWORD \Flagged \Draft`

* **Search-keys with a message set value**: Identifies a set of messages. For message sequence numbers, these are consecutive numbers from 1 to the total number of messages in the mailbox. A comma delimits individual numbers; a colon delimits between two numbers inclusive.
Examples:
`2,4:7,9,12:*` is `2,4,5,6,7,9,12,13,14,15` for a mailbox with 15 messages.
`searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set.
`searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.

#### Authorized search-keys

**ALL**: All messages in the mailbox.  
**ANSWERED**: Messages with the \Answered flag set.  
**UNANSWERED**: Messages that do not have the \Answered flag set.  
**DELETED**: Messages with the \Deleted flag set.  
**UNDELETED**: Messages that do not have the \Deleted flag set.  
**DRAFT**: Messages with the \Draft flag set.  
**UNDRAFT**: Messages that do not have the \Draft flag set.  
**FLAGGED**: Messages with the \Flagged flag set.  
**UNFLAGGED**: Messages that do not have the \Flagged flag set.  
**RECENT**: Messages that have the \Recent flag set.  
**OLD**: Messages that do not have the \Recent flag set.  
**SEEN**: Messages that have the \Seen flag set.  
**UNSEEN**: Messages that do not have the \Seen flag set.  
**NEW**: Messages that have the \Recent flag set but not the \Seen flag. This is functionally equivalent to “(RECENT UNSEEN)”.  
**KEYWORD *flag***: Messages with the specified keyword set.  
**UNKEYWORD *flag***: Messages that do not have the specified keyword set.  
**BEFORE *date***: Messages whose internal date is earlier than the specified date.  
**ON *date***: Messages whose internal date is within the specified date.  
**SINCE *date***: Messages whose internal date is within or later than the specified date.  
**SENTBEFORE *date***: Messages whose Date header is earlier than the specified date.  
**SENTON *date***: Messages whose Date header is within the specified date.  
**SENTSINCE *date***: Messages whose Date header is within or later than the specified date.  
**TO *string***: Messages that contain the specified string in the TO header.  
**FROM *string***: Messages that contain the specified string in the FROM header.  
**CC *string***: Messages that contain the specified string in the CC header.  
**BCC *string***: Messages that contain the specified string in the BCC header.  
**SUBJECT *string***: Messages that contain the specified string in the Subject header.  
**BODY *string***: Messages that contain the specified string in the message body.  
**TEXT *string***: Messages that contain the specified string in the header or in the message body.  
**HEADER *field-name* *string***: Messages that have a header with the specified field-name and that contain the specified string in the field-body.  
**UID *message-UID***: Messages with unique identifiers corresponding to the specified unique identifier set.  
**LARGER *n***: Messages with a size larger than the specified number of bytes.  
**SMALLER *n***: Messages with a size smaller than the specified number of bytes.  
**NOT *search-key***: Messages that do not match the specified search key.  
**OR *search-key1* *search-key2***: Messages that match either search key.  

<!-- END REF -->

<!-- REF IMAPTransporterClass.selectBox().Desc -->
## .selectBox()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20|*id*, *flags*, *permanentFlags* are returned|
|18 R4|Added|


</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.selectBox().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|Text|-> |Name of the mailbox|
|state|Integer|->|Mailbox access status|
|Result|Object|<-|boxInfo object|
<!-- END REF -->

#### Description

The `.selectBox()` function <!-- REF #IMAPTransporterClass.selectBox().Summary -->selects the *name* mailbox as the current mailbox<!-- END REF -->. This function allows you to retrieve information about the mailbox.

>To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

The optional *state* parameter defines the type of access to the mailbox. The possible values are:

|Constant| Value| Comment|
|---|---|---|
|IMAP read only state|1|The selected mailbox is accessed with read only privileges. Messages with a "recent" flag (indicating new messages) remain unchanged.|
|IMAP read write state|0|The selected mailbox is accessed with read and write privileges. Messages are considered "seen" and lose the "recent" flag (indicating new messages). (Default value)|

>* The function generates an error and returns **Null** if *name* designates a non-existing mailbox.
>* If there is no open connection, `.selectBox()` will open a connection.
>* If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**Returned object**

The `boxInfo` object returned contains the following properties:

|Property | Type | Description |
|---|---|---|
|name| Text|Name of the mailbox|
|mailCount|number|Number of messages in the mailbox|
|mailRecent|number|Number of messages with the "recent" flag |
|id|text|Unique id of the mailbox |
|flags|text|List of flags currently used for the mailbox, separated by spaces|
|permanentFlags|text|List of flags that the client can change permanently (except for the \Recent flag, which is managed by the IMAP server), separated by spaces|

:::info

If `permanentFlags` string includes the special flag \*, it means that the server supports [custom flags](#addflags).

:::

#### Example

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

<!-- REF IMAPTransporterClass.subscribe().Desc -->
## .subscribe()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19|Added|

</details>

<!-- REF #IMAPTransporterClass.subscribe().Syntax -->**.subscribe**( *name* : Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.subscribe().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|Text|-> |Name of the mailbox|
|Result|Object|<-|Status of the subscribe operation|
<!-- END REF -->

#### Description

The `.subscribe()` function <!-- REF #IMAPTransporterClass.subscribe().Summary -->allows adding the specified mailbox to the IMAP server’s set of “subscribed” mailboxes<!-- END REF -->. As such, you can choose to narrow down a large list of available mailboxes by subscribing to those you usually want to see.

In the `name` parameter, pass the name of the mailbox to add (subscribe) to your "subscribed" mailboxes.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise
|statusText || Text|Status message returned by the IMAP server, or last error returned in the 4D error stack  |
|errors ||Collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| 4D error code|
| |\[].message|Text|Description of the 4D error |
| |\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example

To subscribe to the "Atlas Corp” mailbox in the "Bills" hierarchy:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.subscribe($name)

If ($status.success)
   ALERT("Mailbox subscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.unsubscribe().Desc -->
## .unsubscribe()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19|Added|

</details>

<!-- REF #IMAPTransporterClass.unsubscribe().Syntax -->**.unsubscribe**( *name* : Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.unsubscribe().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|Text|-> |Name of the mailbox|
|Result|Object|<-|Status of the unsubscribe operation|
<!-- END REF -->

#### Description

The `.unsubscribe()` function <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->removes a mailbox from a set of subscribed mailboxes<!-- END REF -->. This allows you reduce the number of mailboxes you usually see.

In the `name` parameter, pass the name of the mailbox to remove (unsubscribe) from your active mailboxes.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise
|statusText || Text|Status message returned by the IMAP server, or last error returned in the 4D error stack  |
|errors ||Collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| 4D error code|
| |\[].message|Text|Description of the 4D error |
| |\[].componentSignature|Text|Signature of the internal component which returned the error|

#### Example

To unsubscribe from the "Atlas Corp” mailbox in the "Bills" hierarchy:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.unsubscribe($name)

If ($status.success)
   ALERT("Mailbox unsubscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
