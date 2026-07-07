---
id: resume-indexes
title: RESUME INDEXES
slug: /commands/resume-indexes
displayed_sidebar: docs
---

<!--REF #_command_.RESUME INDEXES.Syntax-->**RESUME INDEXES** ( *aTable* : Table {; *} )<!-- END REF-->
<!--REF #_command_.RESUME INDEXES.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to resume indexes |
| * | Operator | &#8594;  | If passed = asynchronous indexing |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|14|Created|

</details>
</div>

## Description 

<!--REF #_command_.RESUME INDEXES.Summary-->The **RESUME INDEXES** command reactivates all the indexes of *aTable* when they have been paused previously using the [PAUSE INDEXES](../commands/pause-indexes) command.<!-- END REF--> If the indexes of *aTable* have not been paused, this command does nothing. 

In most cases, executing this command triggers the rebuilding of the indexes for *aTable*.   
If you pass the optional *\** parameter, the rebuilding of the indexes is performed in asynchronous mode. This means that the method calling the command continues its execution after this call, regardless of whether the indexing is finished or not. If you omit this parameter, the rebuilding of the indexes blocks the execution of the method until the rebuilding operation is completed. 

The **RESUME INDEXES** command can only be called from 4D Server or a local 4D. If this command is executed from a remote 4D machine, the error -10513 is generated. This error can be intercepted using a method installed by the [ON ERR CALL](../commands/on-err-call) command.

## See also 

[CREATE INDEX](../commands/create-index)  
[PAUSE INDEXES](../commands/pause-indexes)  

## Properties

|  |  |
| --- | --- |
| Command number | 1294 |
| Thread safe | yes |


