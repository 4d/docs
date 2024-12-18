---
id: set-table-cache-priority
title: SET TABLE CACHE PRIORITY
slug: /commands/set-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET TABLE CACHE PRIORITY.Syntax-->**SET TABLE CACHE PRIORITY** ( *aTable* ; *priority* )<!-- END REF-->
<!--REF #_command_.SET TABLE CACHE PRIORITY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table whose scalar data priority value has to be set for the session |
| priority | Integer | &#8594;  | Cache priority value for scalar values in the table |

<!-- END REF-->

#### Expert mode 

<!--REF #_command_.SET TABLE CACHE PRIORITY.Summary-->This command is reserved for specific needs.<!-- END REF--> It must be used with care since it can affect database performance.

#### Description 

The **SET TABLE CACHE PRIORITY** command sets a specific *priority* to the data related to *aTable* in cache for all processes in the current session. This command should be called in the **On Startup** or **On Server Startup** database method.

**Note:** This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode. 

 This command handles priority for data in scalar fields only (date, number, or string types). Priority for fields of binary type (Blobs, texts, pictures, and objects) is handled by the [SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md) command. 

In the *priority* parameter, pass one of the following constants from the "*Cache Management*" theme:

| Constant                 | Comment                                      |
| ------------------------ | -------------------------------------------- |
| Cache priority low       |                                              |
| Cache priority very low  |                                              |
| Cache priority normal    | Sets the cache priority to its default value |
| Cache priority high      |                                              |
| Cache priority very high |                                              |

#### Example 

In the , you want to set a high priority for the \[Customer\] scalar data:

```4d
 SET TABLE CACHE PRIORITY([Customer];Cache priority very high)
```

#### See also 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
[ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md)  
[Get adjusted table cache priority](get-adjusted-table-cache-priority.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1400 |
| Thread safe | &check; |


