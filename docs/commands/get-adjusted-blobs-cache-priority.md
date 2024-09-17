---
id: get-adjusted-blobs-cache-priority
title: Get adjusted blobs cache priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted blobs cache priority.Syntax-->**Get adjusted blobs cache priority** ( *aTable* ) -> Function result<!-- END REF-->
<!--REF #_command_.Get adjusted blobs cache priority.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | -> | Table for which the "blobs" priority value has to be retrieved |
| Function result | Longint | <- | Current priority value for "blobs" fields |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get adjusted blobs cache priority.Summary-->The **Get adjusted blobs cache priority** command returns the current adjusted cache priority value applied in cache by the cache manager for the *aTable* "blobs" data.<!-- END REF--> This command is only needed for debugging purposes. 

**Note:** This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode. 

#### See also 

[ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md)  
[Managing priorities in database cache](../../4D/20-R6/Managing-priorities-in-database-cache.300-6958630.en.html)  
[SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md)  