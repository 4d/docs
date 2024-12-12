---
id: flush-cache
title: FLUSH CACHE
slug: /commands/flush-cache
displayed_sidebar: docs
---

<!--REF #_command_.FLUSH CACHE.Syntax-->**FLUSH CACHE** {( size | * )}<!-- END REF-->
<!--REF #_command_.FLUSH CACHE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| size &#124; * | Real, Operator | &#8594;  | * to completely free cache memory, or number of bytes to free in cache |

<!-- END REF-->

#### Description 

<!--REF #_command_.FLUSH CACHE.Summary-->The FLUSH CACHE command immediately saves the data buffers to disk.<!-- END REF--> All changes that have been made to the database are stored on disk.

By default, the current cache memory is left untouched, which means that its data continues to be used for subsequent reading accesses. Optionally, you can pass a parameter to modify its contents:

* pass *\** to save the cache and free up entire cache memory.
* pass a *size* value to save the cache and free up only the *size* number of bytes from the cache.

**Note:** Passing a parameter to this command is reserved for testing purposes. For performance reasons, it is not recommended to free up the cache in the production environment.

In normal cases, you should not call this command, as 4D saves data modifications on a regular basis. The **Flush Cache every X Seconds (Minutes)** option on the [Database page](https://developer.4d.com/docs/settings/database#memory-page) of the Database Settings, which specifies how often to save, is typically used to control cache flushing. We recommend using the default value of 20 seconds. Note also that the Cache flush periodicity parameter can be set and read using the [SET DATABASE PARAMETER](set-database-parameter.md) and [Get database parameter](get-database-parameter.md) commands.

#### See also 

[Get database parameter](get-database-parameter.md)  
[SET DATABASE PARAMETER](set-database-parameter.md)  