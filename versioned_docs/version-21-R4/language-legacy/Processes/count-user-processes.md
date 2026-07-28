---
id: count-user-processes
title: Count user processes
slug: /commands/count-user-processes
displayed_sidebar: docs
---

<!--REF #_command_.Count user processes.Syntax-->**Count user processes**  : Integer<!-- END REF-->
<!--REF #_command_.Count user processes.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Number of live processes (excluding internal processes) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL Release 3|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.Count user processes.Summary-->Count user processes returns the current number of "live" processes in the 4D application whose type is different from -25 (Internal Timer Process), -31 (Client Manager Process) and -15 (Server Interface Process).<!-- END REF--> For more information about process types, please refer to the [Process info](../commands/process-info) command and to the *Process Type* constants theme. 

The Count user processes function returns the number of processes opened directly or indirectly by the user (processes for which the *origin* parameter returned by the [Process info](../commands/process-info) command is greater than or equal to 0). 

**Note:** The "live" processes are processes whose status is neither *aborted*, nor *does not exist* (see the [Process state](../commands/process-state) command). 

## See also 

[Count tasks](../commands/count-tasks)  
[Count users](../commands/count-users)  

## Properties

|  |  |
| --- | --- |
| Command number | 343 |
| Thread safe | yes |



