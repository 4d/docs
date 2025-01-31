---
id: activity-snapshot
title: ACTIVITY SNAPSHOT
slug: /commands/activity-snapshot
displayed_sidebar: docs
---

<!--REF #_command_.ACTIVITY SNAPSHOT.Syntax-->**ACTIVITY SNAPSHOT** ( arrActivities | arrUUID ; *arrStart* ; *arrDuration* ; *arrInfo* {; *arrDetails*}{; *} )<!-- END REF-->
<!--REF #_command_.ACTIVITY SNAPSHOT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| arrActivities &#124; arrUUID | Object array, Text array | &#8592; | Complete description of operations (object array) or<br/>Operation UUIDs (text array) |
| arrStart | Text array | &#8592; | Operation start times |
| arrDuration | Array integer | &#8592; | Operation durations in milliseconds |
| arrInfo | Text array | &#8592; | Description |
| arrDetails | Object array | &#8592; | Details of context and sub-operations (if any) |
| * | Operator | &#8594;  | If passed = Get server activity |

<!-- END REF-->

#### Description 

<!--REF #_command_.ACTIVITY SNAPSHOT.Summary-->The **ACTIVITY SNAPSHOT** command returns a single or several arrays describing operations in progress on the 4D data.<!-- END REF--> These operations usually display a progress window. 

This command is used to get a snapshot of the *x* operations that are most time-consuming and/or run most frequently, such as cache writing or the execution of formulas.

**Note:** The information returned by the **ACTIVITY SNAPSHOT** command is the same as that displayed on the "Real Time Monitor" (RTM) page of the 4D Server administration window (see *4D Server Reference Guide*). 

By default, **ACTIVITY SNAPSHOT** processes operations performed locally (with 4D single-user, 4D Server or 4D in remote mode). However, with 4D in remote mode, you can also get a snapshot of operations performed on the server: you just need to pass the asterisk (*\**) as the last parameter. In this case, the server data is recovered locally.   
The *\** parameter is ignored when the command is executed on 4D Server or 4D single-user. 

The **ACTIVITY SNAPSHOT** command accepts two syntaxes: 

* syntax using only an object array.
* syntax using several arrays.

##### First syntax: ACTIVITY SNAPSHOT ( arrActivities {; \*}) 

With this syntax, all the operations are returned in a structured form in the 4D object array (*arrActivities*). Each element of the array is an object built as follows:

```json
[    {        "message":"xxx",        "maxValue":12321,        "currentValue":63212,        "interruptible:0,        "remote":0,        "uuid":"deadbeef",        "taskId":xxx,        "startTime":"2014-03-20 13:37:00:123",        "duration":92132,        "dbContextInfo":{            "task_id": xxx,            "user_name": Jean,            "host_name": HAL,            "task_name": "CreateIndexLocal",            "client_uid": "DE4DB33F33F"            "user4d_id ": 1,            "client_version ": 123456        },        "dbOperationDetails":{            table: "myTable"            field: "Field_1"        },        "subOperations":[            {"message":"xxx",            ...}            ]    },    {...}]
```

Here is a description of each property returned:

* *message* (text): label of operation
* *maxValue* (number): number of iterations set for the operation (-1 if non-iterative operation)
* *currentValue* (number): current iteration
* *interruptible* (number): operation can be interrupted by user (0=true, 1=false)
* *remote* (number): operation paired between client and server (0=true, 1=false)
* *uuid* (text): UUID identifier of operation
* *taskId* (number): Internal identifier of the process at the origin of the operation
* *startTime* (text): start time of operation in the "yyyy:mm:dd hh:mm:ss:mls" format
* *duration* (number): duration of operation in milliseconds
* *dbContextInfo* (objet): information concerning operations handled by the database engine. Contains the following properties:  
   * *host\_name* (string): name of host that launched the operation  
   * *user\_name* (string): name of 4D user whose session launched the operation  
   * *task\_name* (string): name of process that launched the operation  
   * *task\_id* (num): ID number of process that launched the operation  
   * *client\_uid* (string): optional, uuid of client that launched the operation  
   * *is\_remote\_context* (boolean, 0 or 1): optional, indicates whether the database operation was launched by a client (value 1) or by the server through a stored procedure (value 0)  
   * *user4d\_id* (num): ID number of the current 4D user on the client side  
   * *client\_version* (string): four digits representing the version of the 4D engine of the application, as returned by the [Application version](application-version.md) command.  
**Note:** client\_uid and is\_remote\_context are only available in client/server mode. client\_uid is only returned when the database operation was started on a client machine.
* *dbOperationDetails* (object): property returned only when the operation calls the database engine (this is the case, for instance, for queries and sorts). This is an object containing specific information related to the operation itself. The properties available depend on the type of database operation performed. More specifically, these properties include:  
   * table (string): name of table involved in the operation  
   * field (string): name of field involved in the operation  
   * queryPlan (string): query plan defined for the operation  
   * ...
* *subOperations* (array): array of objects containing sub-operations of the current operation (if any). The structure of each sub-element is identical to the one in the main object. If the current operation does not have any sub-operations, then *subOperations* is empty.

##### Second syntax: ACTIVITY SNAPSHOT ( arrUUID ; arrStart ; arrDuration ; arrInfo {;arrSubOp} {; \*}) 

With this syntax, all the operations are returned in several synchronized arrays (each operation causes an element to be added to all of the arrays). The following arrays are returned:

* *arrUUID*: contains the UUIDs for each operation (corresponds to the *uuid* property of the *arrActivities* object in the previous syntax).
* *arrStart*: contains the start times for each operation (corresponds to the *startTime* property of the *arrActivities* object).
* *arrDuration*: contains the durations of each operation in milliseconds (corresponds to the *duration* property of the *arrActivities* object).
* *arrInfo* : contains the labels describing each operation (corresponds to the *message* property of the *arrActivities* object).
* *arrDetails* (optional): each element of this array is an object containing the following properties:  
   * *"dbContextInfo"* (object): see above  
   * *"dbOperationDetails"* (object): see above  
   * "subOperations". The value of this property is an object array containing all the sub-operations for the current operation. If the current operation does not have any sub-operations, the value of the *subOperations* property is an empty array (corresponds to the *subOperations* property of the *arrActivities* object)

#### Example 

This method, executed in a separate process on 4D or 4D Server, provides a snapshot of the operations that are underway:

```4d
 ARRAY TEXT(arrUUID;0)
 ARRAY TEXT(arrStart;0)
 ARRAY LONGINT(arrDuration;0)
 ARRAY TEXT(arrInfo;0)
 
 Repeat
    ACTIVITY SNAPSHOT(arrUUID;arrStart;arrDuration;arrInfo)
    If(Size of array(arrUUID)>0)
       TRACE // calling of debugger
    End if
 Until(False) // Infinite loop
```

You get arrays such as:

![](../assets/en/commands/pict1213741.en.png)


#### Properties

|  |  |
| --- | --- |
| Command number | 1277 |
| Thread safe | &check; |


