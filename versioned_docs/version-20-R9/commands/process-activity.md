---
id: process-activity
title: Process activity
displayed_sidebar: docs
---

<!--REF #_command_.Process activity.Syntax-->**Process activity** () : Object<br/>**Process activity** ( *options* ) : Object<br/>**Process activity** ( *sessionID* ) : Object<br/>**Process activity** ( *sessionID* ; *options* ) : Object<!-- END REF-->
<!--REF #_command_.Process activity.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| sessionID | Text | &#8594;  | Session ID |
| options | Integer | &#8594;  | Return options |
| Function result | Object | &#8592; | Snapshot of running processes and/or (4D Server only) user sessions |

<!-- END REF-->

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R7|Support of *sessionID* parameter|

</details>


## Description 

<!--REF #_command_.Process activity.Summary-->The **Process activity** command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.<!-- END REF--> This command returns all processes, including internal processes that are not reachable by the [Process info](process-info.md) command. 

By default when used without any parameters, **Process activity** returns an object containing the following properties: 

- "processes", a collection of all processes 
- "sessions" (4D Server only), a collection of all sessions

On 4D Server, you can filter information to be returned using the optional *sessionID* and *options* parameters:

- If you pass a user session ID in the *sessionID* parameter, the command only returns information related to this session. By default if the *options* parameter is omitted, the returned object contains a collection with all processes related to the session and a collection with a single object describing the session. If you pass an invalid session ID, a **null** object is returned. 
- You can select the collection(s) to return by passing one of the following constants in the *options* parameter:

| Constant                     	|  Value                                                             	| Comment                                                       	|
|------------------------------	|	-------------------------------------------------------------------	|---------------------------------------------------------------	|
| Processes and sessions       	| 0                                                                 	| Returns both "processes" and "sessions" lists (default value) 	|
| Processes only               	| 1                                                                 	| Returns only the "processes" list                             	|
| Sessions only                	|2                                                                 	| Returns only the "sessions" list                              	|



:::note

When executed on 4D in remote or local mode, `Process activity` always returns the list of running processes (*sessionID* and *options* parameters are ignored).

:::

**Sessions**

The "sessions" property contains a collection of objects describing all running sessions on the server. For a description of session object properties, please refer to the [`Session info`](session-info.md) command.

:::note Notes 

- You can get the object of a session using the [Session](session.md) command.
- `Process activity` returns remote client sessions, stored procedure session and rest sessions but not Web sessions (limitation).  

:::

**Processes** 

The "processes" property contains a collection of process objects describing all running processes. For a description of process object properties, please refer to the [`Process info`](process-info.md) command.

On the server, the `Process activity` command returns an additional "session" property:

| Additional property 	| Type   	| Description                                                                                                             	|   	|
|---------------------	|--------	|-------------------------------------------------------------------------------------------------------------------------	|---	|
| session             	| Object 	| The [`.info`](../API/SessionClass.md#info) property of the session in which the process is running. Undefined if the `Processes only` parameter is passed. 	|   	|

## Example 1

You want to get the collection of all user sessions:

```4d
  //To be executed on the server
 
 var $o : Object
 var $i : Integer
 var $processName;$userName : Text

 
 $o:=Process activity //Get process & session info
 For($i;0;($o.processes.length)-1) //Iterate over the "processes" collection
    $processName:=$o.processes[$i].name
    $userName:=String($o.processes[$i].session.userName) // Easy access to userName
  //use String because session object might be undefined
 End for
```

## Example 2

You want to get all processes related to the current session:

```4d
  // to be executed on the server
 
 var $sessionID : Text:=Session.id
 var $o : Object
 
 $o:=Process activity($sessionID ;Processes only)

```

## See also 

[`Process info`](process-info.md)
[`Session info`](session-info.md)
[Session storage](session-storage.md)  
[WEB Get server info](../commands-legacy/web-get-server-info.md)  