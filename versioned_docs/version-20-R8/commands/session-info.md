---
id: session-info
title: Session info
displayed_sidebar: docs
---


<!-- REF #_command_.Session info.Syntax -->**Session info** ( *sessionId* : Integer ) : Object<!-- END REF -->


<!-- REF #_command_.Session info.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|sessionID |Integer|&#8594; |Session ID|
|Result|Object|&#8592;|Information about the session|
<!-- END REF -->

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R8|Support of standalone sessions |
|20 R7|Added |

</details>


#### Description

The `Session info` command <!-- REF #_command_.Session info.Summary -->returns an object describing the session whose ID you pass in the *sessionID* parameter.<!-- END REF -->. If you pass an invalid *sessionID*, the command returns a null object.

The returned object contains the following properties:

|Property|Type|Description|
|---|---|---|
|type|Text|Session type: "remote", "storedProcedure", "standalone"|
|userName|Text|4D user name (same value as [`Session.userName`](../API/SessionClass.md#username))|
|machineName|Text|Remote sessions: name of the remote machine. Stored procedures session: name of the server machine. Standalone session: name of the machine|
|systemUserName|Text|Remote sessions: name of the system session opened on the remote machine.  |
|IPAddress|Text|IP address of the remote machine|
|hostType|Text|Host type: "windows" or "mac"|
|creationDateTime|Date ISO 8601|Date and time of session creation. Standalone session: date and time of application startup|
|state|Text|Session state: "active", "postponed", "sleeping"|
|ID|Text|Session UUID (same value as [`Session.id`](../API/SessionClass.md#id))|
|persistentID|Text|Remote sessions: Session's persistent ID|

:::note

This command returns the [`.info`](../API/SessionClass.md#info) property of the *sessionID* session. To get information about the current session, you can directly call `Session.info`.

:::

Here is an example of output object:

```json

{
    "ID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5",
    "userName": "Designer",
    "machineName": "My Computer",
    "systemUserName": "John Doe",
    "IPAddress": "localhost",
    "hostType": "mac",
    "type": "remote",
    "state": "active",
    "creationDateTime: "2024-09-10T09:55:54.787Z",
    "persistentID:"8FFDAE519F1F4DCDB81E8E8DB00AD101"
}

```

#### Example

```4d

 var $session : Object
 var $id : Integer
 $session:=Session info($id)

```

#### See also 

[`Session` class](../API/SessionClass.md)
[Session](session.md)
[Session storage](session-storage.md)  
[Process info](process-info.md)  
