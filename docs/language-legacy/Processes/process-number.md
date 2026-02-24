---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *name* : Text {; *} ) : Integer<br/>**Process number** ( *id* : Text {; *} ) : Integer<!-- END REF-->
<!--REF #_command_.Process number.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| name | Text | &#8594;  | Name of process for which to retrieve the process number |
| id | Text | &#8594;  | ID of process for which to retrieve the process number |
| * | Operator |  &#8594;  | Return the process number from the server |
| Function result | Integer | &#8592; | Process number |
</div>
<!-- END REF-->

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R7|Support of id parameter|

</details>


## Description 

<!--REF #_command_.Process number.Summary-->The `Process number` command returns the number of the process whose *name* or *id* you pass in the first parameter<!-- END REF-->. If no process is found, `Process number` returns 0.

The optional parameter \* allows you to retrieve, from a remote 4D, the number of a process that is executed on the server. In this case, the returned value is negative. This option is especially useful when using the [GET PROCESS VARIABLE](../commands/get-process-variable), [SET PROCESS VARIABLE](../commands/set-process-variable) and [VARIABLE TO VARIABLE](../commands/variable-to-variable) commands. 

If the command is executed with the \* parameter from a process on the server machine, the returned value is positive.


## See also 

[GET PROCESS VARIABLE](../commands/get-process-variable)  
[Process state](../commands/process-state)  
[SET PROCESS VARIABLE](../commands/set-process-variable)  

## Properties

|  |  |
| --- | --- |
| Command number | 372 |
| Thread safe | yes |



