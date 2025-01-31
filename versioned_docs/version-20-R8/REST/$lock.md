---
id: lock
title: $lock 
---


Locks and unlocks an entity using the [pessimistic mechanism](../ORDA/entities.md#pessimistic-lock).


## Syntax

To lock an entity for other sessions and 4D processes:

```
/?$lock=true
```


To unlock the entity for other sessions and 4D processes:

```
/?$lock=false
```


The [`lockKindText` property](../API/EntityClass.md#lock) is "Locked by session".


### Description

The locks triggered by the REST API are put at the [session](authUsers.md#opening-sessions) level. 

A locked entity is seen as *locked* (i.e. lock / unlock / update / delete actions are not possible) by:

- other REST sessions
- 4D processes (client/server, remote datastore, standalone) running on the REST server. 

An entity locked by the REST API can only be unlocked:

- by its locker, i.e. a `/?$lock=false` in the REST session that sets `/?$lock=true`
- or if the session's [inactivity timeout]($directory.md) is reached (the session is closed).

### Response

A `?$lock` request returns a JSON object with `"result"=true` if the lock operation was successful and `"result"=false` if it failed. 

The returned "__STATUS" object has the following properties: 

|Property|	|	Type|	Description|
|---|---|---|---|
||||***Available only in case of success:***|
|success|	|	boolean|true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case).|
||||***Available only in case of error:***|
|status| 	|number|Error code, see below|
|statusText||text|Description of the error, see below|
|lockKind|	|number|Lock code|
|lockKindText|	|	text|"Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process|
|lockInfo|	|	object|	Information about the lock origin. Returned properties depend on the lock origin (4D process or REST session). |
|||	|***Available only for a 4D process lock:***|
||task_id|	number|Process ID|
||user_name	|text|Session user name on the machine|
||user4d_alias|	text|Name or alias of the 4D user|
||user4d_id	|number	|User id in the 4D database directory|
||host_name|	text|Machine name
||task_name	|text	|Process name|
||client_version|text|Version of the client|
||||***Available only for a REST session lock:***|
||host|text|URL that locked the entity (e.g. "127.0.0.1:8043")|
||IPAddr |text|IP address of the locker (e.g. "127.0.0.1")|
||recordNumber |number|Record number of the locked record|
||userAgent |text|userAgent of the locker (e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36")|


The following values can be returned in the *status* and *statusText* properties of the *__STATUS* object in case of error: 

|status|statusText|Comment|
|---|---|---|
|2|"Stamp has changed"|The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).|
|3|"Already locked"|The entity is locked by a pessimistic lock.|
|4|"Other error"|A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.|
|5|"Entity does not exist anymore"|The entity no longer exists in the data. |




## Example


We lock an entity in a first browser:

```
GET /rest/Customers(1)/?$lock=true
```

**Response:**

```
{
	"result": true,
	"__STATUS": {
		"success": true
	}
}
```
	
In a second browser (other session), we send the same request.

**Response:**

```
{
	"result":false,
	"__STATUS":{
		"status":3,
		"statusText":"Already Locked",
		"lockKind":7,
		"lockKindText":"Locked By Session",
		"lockInfo":{
			"host":"127.0.0.1:8043",
			"IPAddr":"127.0.0.1",
			"recordNumber": 7,
			"userAgent": ""Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36..."
		}
	}
}
```

