---
id: adjust-blobs-cache-priority
title: ADJUST BLOBS CACHE PRIORITY
slug: /commands/adjust-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Syntax-->**ADJUST BLOBS CACHE PRIORITY** ( *aTable* ; *priority* )<!-- END REF-->
<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table whose "blobs" data priority value has to be adjusted |
| priority | Integer | &#8594;  | Cache priority value for BLOBs in the table |

<!-- END REF-->

#### Expert mode 

<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Summary-->This command is reserved for specific needs.<!-- END REF--> It must be used with care since it can affect database performance.

#### Description 

The **ADJUST BLOBS CACHE PRIORITY** command modifies the *priority* of the "blobs" data related to *aTable* in cache for the current process. A call to this command replaces any priority previously adjusted through the same command in the same process. This command adjusts the priority for a temporary need, for example during a query or an import. 

**Note:** This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode. 

 "Blobs" data field types include BLOB, text, picture, and object. This command handles priority for such data when they are stored in the data file only. Priority for fields of scalar type (such as date, number, or string types) is adjusted by the [ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md) command. 

Pass one of the following constants from the "*Cache Management*" theme in the *priority* parameter:

| Constant                 | Comment                                      |
| ------------------------ | -------------------------------------------- |
| Cache priority low       |                                              |
| Cache priority very low  |                                              |
| Cache priority normal    | Sets the cache priority to its default value |
| Cache priority high      |                                              |
| Cache priority very high |                                              |

#### Example 

You want to temporarily change the cache priority for the \[Docs\] table text fields stored in the data file when executing a sequential search:

```4d
 ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority very high)
 QUERY([Docs];[Docs]Author#"A@") // sequential search on a non indexed field
  //... run several other queries or sorts on the same table
  // when finished, set back to normal cache priority
 ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority normal)
```

#### See also 

[Get adjusted blobs cache priority](get-adjusted-blobs-cache-priority.md)  
[SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1431 |
| Thread safe | &check; |
| Forbidden on the server ||


