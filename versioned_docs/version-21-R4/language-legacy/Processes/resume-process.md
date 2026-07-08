---
id: resume-process
title: RESUME PROCESS
slug: /commands/resume-process
displayed_sidebar: docs
---

<!--REF #_command_.RESUME PROCESS.Syntax-->**RESUME PROCESS** ( *process* : Integer )<!-- END REF-->
<!--REF #_command_.RESUME PROCESS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Process number |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.RESUME PROCESS.Summary-->**RESUME PROCESS** resumes a *process* whose execution has been paused or delayed.<!-- END REF--> If *process* is not paused or delayed, the command does nothing.

If *process* has been delayed before, see the [PAUSE PROCESS](../commands/pause-process) or [DELAY PROCESS](../commands/delay-process) commands. If *process* does not exist, the command does nothing.

**Note:** You cannot use this command to assign a stored procedure on the server machine from a client machine (*process*<0).

## See also 

[DELAY PROCESS](../commands/delay-process)  
[PAUSE PROCESS](../commands/pause-process)  

## Properties

|  |  |
| --- | --- |
| Command number | 320 |
| Thread safe | yes |
| Forbidden on the server ||


