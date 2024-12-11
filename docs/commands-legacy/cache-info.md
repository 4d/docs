---
id: cache-info
title: Cache info
slug: /commands/cache-info
displayed_sidebar: docs
---

<!--REF #_command_.Cache info.Syntax-->**Cache info** {( *dbFilter* )} : Object<!-- END REF-->
<!--REF #_command_.Cache info.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| dbFilter | Object | &#8594;  | Defines list of attributes to be returned (filtered per DB) |
| Function result | Object | &#8592; | Information about cache |

<!-- END REF-->

#### Description 

<!--REF #_command_.Cache info.Summary-->The **Cache info** command returns an object that contains detailed information about the current cache contents (used memory, loaded tables and indexes, etc.)

**Note:** This command only works in local mode (4D Server and 4D); it must not be used from 4D in remote mode.<!-- END REF--> 

By default, returned information refers to the running database only. The optional *dbFilter* object parameter allows you to specify the scope of the command:

* pass the "dbFilter" attribute with the "All" value to get cache information about all running databases, including components.
* pass the "dbFilter" attribute with a "" (empty string) value to get information about the current database only (equivalent to omitting the *dbFilter* parameter).

The **Cache info** command returns a single object that contains all the relevant information about the cache. The returned object has the following basic structure:

```json
{    "maxMem": Maximum cache size (real),    "usedMem": Current cache size (real),    "objects": [...] Array of objects currently loaded in cache}
```

Elements of the *objects* array are root objects (tables, indexes, Blobs, etc.) which are currently loaded in the cache. Each element contains specific attributes that describe its current status. For more information about advanced interpretation of this data, please contact your local Technical Service department. 

#### Example 

You want to get cache information for the current database:

```4d
 var $cache : Object
 $cache:=Cache info
```

You want to get cache information for the database and all opened components:

```4d
 var $dbFilter : Object
 OB SET($dbFilter;"dbFilter";"All")
 $cache:=Cache info($dbFilter)
```

#### See also 

[MEMORY STATISTICS](memory-statistics.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1402 |
| Thread safe | &check; |
| Forbidden on the server ||


