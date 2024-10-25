---
id: abort-process-by-id
title: ABORT PROCESS BY ID
slug: /commands/abort-process-by-id
displayed_sidebar: docs
---

<!--REF #_command_.ABORT PROCESS BY ID.Syntax-->**ABORT PROCESS BY ID** ( *uniqueID* )<!-- END REF-->
<!--REF #_command_.ABORT PROCESS BY ID.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| uniqueID | Integer | &#8594;  | Unique process ID |

<!-- END REF-->

#### Description 

<!--REF #_command_.ABORT PROCESS BY ID.Summary-->The **ABORT PROCESS BY ID** command stops a specific process on the 4D Server.<!-- END REF-->

In the *uniqueID* parameter, pass the unique ID of the process running on the server that you want to stop. You can retrieve the process ID with the [Process activity](../commands/process-activity.md) or the [Process info](../commands/process-info.md) commands.

**Notes**: 

* This command can only be executed on 4D Server. If the method calling the command is executed locally on a remote client or in 4D single user, **ABORT PROCESS BY ID** does nothing.
* This command can only be used with the *ServerNet* network layer. See   *New ServerNet Network Layer (compatibility)*.
* This command should only be used for searching errors or administration purposes, not as a regular procedure.

#### Example 

You want to stop the selected process of the processes collection displayed in a list box:

```4d
  //variable =curItemPosition
 
  // Retrieve the list of process on the server and display in the list box
 $activity:=Get process activity(Processes only).processes
 ...
  // The selected process is stopped on the server
 ABORT PROCESS BY ID($activity[curItemPosition].ID)
```

#### See also 

[PAUSE PROCESS](pause-process.md)  