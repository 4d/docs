---
id: set-cache-size
title: SET CACHE SIZE
slug: /commands/set-cache-size
displayed_sidebar: docs
---

<!--REF #_command_.SET CACHE SIZE.Syntax-->**SET CACHE SIZE** ( *size* {; *minFreeSize*} )<!-- END REF-->
<!--REF #_command_.SET CACHE SIZE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| size | Real | &#8594;  | Size of database cache in bytes |
| minFreeSize | Real | &#8594;  | Minimum number of bytes to release when cache is full |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET CACHE SIZE.Summary-->The **SET CACHE SIZE** command sets the database cache size dynamically and, optionally, sets the mininum byte size at which to start to free memory.<!-- END REF-->

**Note:** This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode. 

In *size*, pass the new size for the database cache in bytes. This new size is applied dynamically when the command is executed.

In *minFreeSize*, pass the minimum size of memory to release from the database cache when the engine needs to make space in order to allocate an object to it (value in bytes). The purpose of this option is to reduce the number of times that data is released from the cache in order to obtain better performance.   
By default, if this option is not used, 4D unloads at least 10% of the cache when space is needed. If your database works with a large cache, it could be advantageous to use a fixed size that does not depend on the cache size. You can adjust this setting according to the size of the blocks of data being handled in your database.

#### Example 

You want to add 100 MB to the current database cache size. You can write:

```4d
 var $currentCache : Real
 $currentCache:=Get cache size
  // current cache size is, for example, 419430400
 SET CACHE SIZE($currentCache+100000000)
  // current cache size is now 519430400
```

#### See also 

[Get cache size](get-cache-size.md)  