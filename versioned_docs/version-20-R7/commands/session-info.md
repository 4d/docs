---
id: session-info
title: Session info
displayed_sidebar: docs
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R7|Added |

</details>

<!-- REF #_command_.Session info.Syntax -->**Session info** ( *sessionId* : Integer ) : Object<!-- END REF -->


<!-- REF #_command_.Session info.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|sessionID |Integer|&#8594; |Session ID|
|Result|Object|&#8592;|Information about the session|
<!-- END REF -->


## Description

The `Session info` command <!-- REF #_command_.Session info.Summary -->returns an object describing the session whose ID you pass in the *sessionID* parameter.<!-- END REF -->. If you pass an invalid *sessionID*, the command returns a null object.

The returned object contains the following properties:

| Property name                	| Type                 	| Description                                                        	|
|------------------------------	|----------------------	|--------------------------------------------------------------------	|
| type                         	| Text (enum)          	| Session type. Possible values: "remote", "storedProcedure", "rest" 	|
| userName                     	| Text                 	| User name                                                          	|
| machineName                  	| Text                 	| Name of the remote machine                                         	|
| systemUserName               	| Text                 	| Name of the system session opened on the remote machine            	|
| IPAddress                    	| Text                 	| IP address of the remote machine                                   	|
| hostType                     	| Text (enum)          	| Host type. Possible values: "windows", "mac", "browser"            	|
| creationDateTime             	| Text (Date ISO 8601) 	| Date and time of connection of the remote machine                  	|
| state                        	| Text (enum)          	| Session state. Possible values: "active", "postponed", "sleeping"  	|
| ID                           	| Text                 	| Session UUID                                                       	|
| persistentID                 	| Text                 	| Session's persistent ID                                            	|


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

## Example

```4d

 var $session : Object
 var $id : Integer
 $session:=Session info($id)

```

## See also 

[Session](../API/SessionClass.md)
[Process info](process-info.md)  
