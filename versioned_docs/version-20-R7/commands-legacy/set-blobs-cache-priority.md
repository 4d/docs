---
id: set-blobs-cache-priority
title: SET BLOBS CACHE PRIORITY
slug: /commands/set-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET BLOBS CACHE PRIORITY.Syntax-->**SET BLOBS CACHE PRIORITY** ( *aTable* ; *priority* )<!-- END REF-->
<!--REF #_command_.SET BLOBS CACHE PRIORITY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table whose "blobs" data priority value has to be set for the session |
| priority | Integer | &#8594;  | Cache priority value for BLOBs in the table |

<!-- END REF-->

#### Expert mode 

<!--REF #_command_.SET BLOBS CACHE PRIORITY.Summary-->This command is reserved for specific needs.<!-- END REF--> It must be used with care since it can affect database performance.

#### Description 

The **SET BLOBS CACHE PRIORITY** command sets a specific *priority* to the "blobs" data related to *aTable* in cache for all processes in the current session. This command should be called in the **On Startup** or **On Server Startup** database method.

**Note:** This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode. 

 "Blobs" data field types include BLOB, text, picture, and object. This command handles priority for such data when they are stored in the data file only.

In the *priority* parameter, pass one of the following constants from the "*Cache Management*" theme:

| Constant                 | Comment                                      |
| ------------------------ | -------------------------------------------- |
| Cache priority low       |                                              |
| Cache priority very low  |                                              |
| Cache priority normal    | Sets the cache priority to its default value |
| Cache priority high      |                                              |
| Cache priority very high |                                              |

#### Example 

In the , you want to set a high priority for the \[Customer\] table "blobs" data:

```4d
 SET BLOBS CACHE PRIORITY([Customer];Cache priority very high)
```

#### See also 

[ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md)  
[Get adjusted blobs cache priority](get-adjusted-blobs-cache-priority.md)  