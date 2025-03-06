---
id: Cache_Management
title: Cache Management
---
||
|---|
|[**ADJUST BLOBS CACHE PRIORITY** ( *aTable* ; *priority* )](../../commands-legacy/adjust-blobs-cache-priority)<br/>This command is reserved for specific needs.|
|[**ADJUST INDEX CACHE PRIORITY** ( *aField* ; *priority* )](../../commands-legacy/adjust-index-cache-priority)<br/>This command is reserved for specific needs.|
|[**ADJUST TABLE CACHE PRIORITY** ( *aTable* ; *priority* )](../../commands-legacy/adjust-table-cache-priority)<br/>This command is reserved for specific needs.|
|[**Cache info** {( *dbFilter* )} : Object](../../commands-legacy/cache-info)<br/>The **Cache info** command returns an object that contains detailed information about the current cache contents (used memory, loaded tables and indexes, etc.)

**Note:** This command only works in local mode (4D Server and 4D); it must not be used from 4D in remote mode.|
|[**FLUSH CACHE** {( size | * )}](../../commands-legacy/flush-cache)<br/>The FLUSH CACHE command immediately saves the data buffers to disk.|
|[**Get adjusted blobs cache priority** ( *aTable* ) : Integer](../../commands-legacy/get-adjusted-blobs-cache-priority)<br/>The **Get adjusted blobs cache priority** command returns the current adjusted cache priority value applied in cache by the cache manager for the *aTable* "blobs" data.|
|[**Get adjusted index cache priority** ( *aField* ) : Integer](../../commands-legacy/get-adjusted-index-cache-priority)<br/>The **Get adjusted index cache priority** command returns the current adjusted cache priority value applied by the cache manager for the *aField* index(es).|
|[**Get adjusted table cache priority** ( *aTable* ) : Integer](../../commands-legacy/get-adjusted-table-cache-priority)<br/>The **Get adjusted table cache priority** command returns the adjusted cache priority value applied in cache by the cache manager for the *aTable* scalar data.|
|[**Get cache size**  : Real](../../commands-legacy/get-cache-size)<br/>The **Get cache size** command returns the current database cache size in bytes.|
|[**MEMORY STATISTICS** ( *infoType* ; *arrNames* ; *arrValues* ; *arrCount* )](../../commands-legacy/memory-statistics)<br/>The **MEMORY STATISTICS** command recovers information related to the use of the data cache by 4D.|
|[**SET BLOBS CACHE PRIORITY** ( *aTable* ; *priority* )](../../commands-legacy/set-blobs-cache-priority)<br/>This command is reserved for specific needs.|
|[**SET CACHE SIZE** ( *size* {; *minFreeSize*} )](../../commands-legacy/set-cache-size)<br/>The **SET CACHE SIZE** command sets the database cache size dynamically and, optionally, sets the mininum byte size at which to start to free memory.|
|[**SET INDEX CACHE PRIORITY** ( *aField* ; *priority* )](../../commands-legacy/set-index-cache-priority)<br/>This command is reserved for specific needs.|
|[**SET TABLE CACHE PRIORITY** ( *aTable* ; *priority* )](../../commands-legacy/set-table-cache-priority)<br/>This command is reserved for specific needs.|
