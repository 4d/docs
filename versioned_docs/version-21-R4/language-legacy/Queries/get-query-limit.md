---
id: get-query-limit
title: Get query limit
slug: /commands/get-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.Get query limit.Syntax-->**Get query limit** : Integer<!-- END REF-->
<!--REF #_command_.Get query limit.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Limit number of records,0 = unlimited number |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Created|

</details>
</div>

## Description 

<!--REF #_command_.Get query limit.Summary-->The **Get query limit** command returns the limit for the number of records that a query may find in the current process.<!-- END REF-->

You set this limit using the [SET QUERY LIMIT](../commands/set-query-limit) command. 

By default, if no limit is set, the command returns 0.

## See also 

[SET QUERY LIMIT](../commands/set-query-limit)  

## Properties

|  |  |
| --- | --- |
| Command number | 1156 |
| Thread safe | yes |


