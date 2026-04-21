---
id: count-tasks
title: Count tasks
slug: /commands/count-tasks
displayed_sidebar: docs
---

<!--REF #_command_.Count tasks.Syntax-->**Count tasks**  : Integer<!-- END REF-->
<!--REF #_command_.Count tasks.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Number of open processes (including kernel processes) |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Count tasks.Summary-->**Count tasks** returns the highest alive process number in the 4D single-user, 4D remote, or 4D Server (stored procedures) version.<!-- END REF--> Processes are numbered in the order in which they are created. When still no process has been aborted during the session, then this command returns the total number of open processes. 

This number takes into account all processes, even those that are automatically managed by 4D. These include the Main process, Design process, Cache Manager process, Indexing process, and Web Server process.

## Example 

See the example for [Process state](../commands/process-state) and for the [Semaphore](../commands/semaphore).

## See also 

[Count user processes](../commands/count-user-processes)  
[Count users](../commands/count-users)  
[Process info](../commands/process-info)  
[Process state](../commands/process-state)  

## Properties

|  |  |
| --- | --- |
| Command number | 335 |
| Thread safe | yes |



