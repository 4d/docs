---
id: flush-cache
title: FLUSH CACHE
slug: /commands/flush-cache
displayed_sidebar: docs
---

<!--REF #_command_.FLUSH CACHE.Syntax-->**FLUSH CACHE** ({ size : Integer })<br/>**FLUSH CACHE** ({ * })<!-- END REF-->
<!--REF #_command_.FLUSH CACHE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| size | Real | &#8594;  | Number of bytes to free in cache |
| * | Operator | &#8594;  | Completely free cache memory |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16|Renamed|
|16|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.FLUSH CACHE.Summary-->The FLUSH CACHE command immediately saves the data buffers to disk.<!-- END REF--> All changes that have been made to the database are stored on disk.

By default, the current cache memory is left untouched, which means that its data continues to be used for subsequent reading accesses. Optionally, you can pass a parameter to modify its contents:

* pass *\** to save the cache and free up entire cache memory.
* pass a *size* value to save the cache and free up only the *size* number of bytes from the cache.

**Note:** Passing a parameter to this command is reserved for testing purposes. For performance reasons, it is not recommended to free up the cache in the production environment.

In normal cases, you should not call this command, as 4D saves data modifications on a regular basis. The **Flush Cache every X Seconds (Minutes)** option on the [Database page](../../settings/database.md#memory-page) of the Database Settings, which specifies how often to save, is typically used to control cache flushing. We recommend using the default value of 20 seconds. Note also that the Cache flush periodicity parameter can be set and read using the [SET DATABASE PARAMETER](../commands/set-database-parameter) and [Get database parameter](../commands/get-database-parameter) commands.

## See also 

[Get database parameter](../commands/get-database-parameter)  
[SET DATABASE PARAMETER](../commands/set-database-parameter)  

## Properties

|  |  |
| --- | --- |
| Command number | 297 |
| Thread safe | yes |


