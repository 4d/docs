---
id: get-adjusted-blobs-cache-priority
title: Get adjusted blobs cache priority
slug: /commands/get-adjusted-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted blobs cache priority.Syntax-->**Get adjusted blobs cache priority** ( *aTable* : Table ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted blobs cache priority.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which the "blobs" priority value has to be retrieved |
| Function result | Integer | &#8592; | Current priority value for "blobs" fields |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16 R2|Created|

</details>
</div>

## Description 

<!--REF #_command_.Get adjusted blobs cache priority.Summary-->The **Get adjusted blobs cache priority** command returns the current adjusted cache priority value applied in cache by the cache manager for the *aTable* "blobs" data.<!-- END REF--> This command is only needed for debugging purposes. 

**Note:** This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode. 

## See also 

[ADJUST BLOBS CACHE PRIORITY](../commands/adjust-blobs-cache-priority)  
*Managing priorities in database cache*  
[SET BLOBS CACHE PRIORITY](../commands/set-blobs-cache-priority)  

## Properties

|  |  |
| --- | --- |
| Command number | 1428 |
| Thread safe | yes |


