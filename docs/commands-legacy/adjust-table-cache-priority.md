---
id: adjust-table-cache-priority
title: ADJUST TABLE CACHE PRIORITY
slug: /commands/adjust-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Syntax-->**ADJUST TABLE CACHE PRIORITY** ( *aTable* ; *priority* )<!-- END REF-->
<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table whose scalar data priority value has to be adjusted |
| priority | Integer | &#8594;  | Cache priority value for the table |

<!-- END REF-->

#### Expert mode 

<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Summary-->This command is reserved for specific needs.<!-- END REF--> It must be used with care since it can affect database performance.

#### Description 

The **ADJUST TABLE CACHE PRIORITY** command modifies the *priority* value of the data related to *aTable* in cache for the current process. A call to this command replaces any priority value previously adjusted through the same command in the same process. This command adjusts the priority for a temporary need, for example during a query or an import. 

**Note:** This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode. 

 This command handles priority for data in scalar fields only (date, number, or string types). Priority for fields of binary type (Blobs, texts, pictures, and objects) is handled by the [ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md) command. 

In the *priority* parameter, pass one of the following constants from the "*Cache Management*" theme:

| Constant                 | Comment                                      |
| ------------------------ | -------------------------------------------- |
| Cache priority low       |                                              |
| Cache priority very low  |                                              |
| Cache priority normal    | Sets the cache priority to its default value |
| Cache priority high      |                                              |
| Cache priority very high |                                              |

#### Example 

You want to temporarily change the cache priority for the \[Docs\] scalar fields:

```4d
 ADJUST TABLE CACHE PRIORITY([Docs];Cache priority low)
  // ... do some specific operation
 ADJUST TABLE CACHE PRIORITY([Docs];Cache priority normal)
```

#### See also 

[Get adjusted table cache priority](get-adjusted-table-cache-priority.md)  
[SET TABLE CACHE PRIORITY](set-table-cache-priority.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1429 |
| Thread safe | &check; |
| Forbidden on the server ||


