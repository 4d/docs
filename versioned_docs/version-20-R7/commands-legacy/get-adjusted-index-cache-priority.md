---
id: get-adjusted-index-cache-priority
title: Get adjusted index cache priority
slug: /commands/get-adjusted-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted index cache priority.Syntax-->**Get adjusted index cache priority** ( *aField* ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted index cache priority.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Field for which the priority of the index(es) has to be retrieved |
| Function result | Integer | &#8592; | Current priority value for index(es) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get adjusted index cache priority.Summary-->The **Get adjusted index cache priority** command returns the current adjusted cache priority value applied by the cache manager for the *aField* index(es).<!-- END REF--> This command is only needed for debugging purposes. 

**Note:** This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode. 

#### See also 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
*Managing priorities in database cache*  
[SET INDEX CACHE PRIORITY](set-index-cache-priority.md)  