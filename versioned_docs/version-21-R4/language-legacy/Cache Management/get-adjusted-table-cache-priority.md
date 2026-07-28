---
id: get-adjusted-table-cache-priority
title: Get adjusted table cache priority
slug: /commands/get-adjusted-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted table cache priority.Syntax-->**Get adjusted table cache priority** ( *aTable* : Table ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted table cache priority.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which the scalar priority value has to be retrieved |
| Function result | Integer | &#8592; | Current priority value for scalar fields |
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

<!--REF #_command_.Get adjusted table cache priority.Summary-->The **Get adjusted table cache priority** command returns the adjusted cache priority value applied in cache by the cache manager for the *aTable* scalar data.<!-- END REF--> This command is only needed for debugging purposes.

**Note:** This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode. 

Scalar data field types include fields of date/hour, numeric, or string type. 

## See also 

[ADJUST TABLE CACHE PRIORITY](../commands/adjust-table-cache-priority)  
*Managing priorities in database cache*  
[SET TABLE CACHE PRIORITY](../commands/set-table-cache-priority)  

## Properties

|  |  |
| --- | --- |
| Command number | 1426 |
| Thread safe | yes |


