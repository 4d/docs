---
id: adjust-index-cache-priority
title: ADJUST INDEX CACHE PRIORITY
slug: /commands/adjust-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Syntax-->**ADJUST INDEX CACHE PRIORITY** ( *aField* ; *priority* )<!-- END REF-->
<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Field whose index(es) priority value has to be adjusted |
| priority | Integer | &#8594;  | Cache priority value for the field index(es) |

<!-- END REF-->

#### Expert mode 

<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Summary-->This command is reserved for specific needs.<!-- END REF--> It must be used with care since it can affect database performance.

#### Description 

The **ADJUST INDEX CACHE PRIORITY** command modifies the *priority* value of the index(es) related to the *aField* in cache for the current process. A call to this command replaces any priority value previously adjusted through the same command in the same process. This command adjusts the priority for a temporary need, for example when executing an import or a query. 

**Note:** This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode. 

 This command handles priority for all indexes related to the *aField*, including keyword indexes. However, it does not change composite indexes priority. 

Pass one of the following constants from the "*Cache Management*" theme in the *priority* parameter:

| Constant                 | Comment                                      |
| ------------------------ | -------------------------------------------- |
| Cache priority low       |                                              |
| Cache priority very low  |                                              |
| Cache priority normal    | Sets the cache priority to its default value |
| Cache priority high      |                                              |
| Cache priority very high |                                              |

#### Example 

You want to temporarily change the cache priority for the \[Docs\]Comments field index(es):

```4d
 ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority very high)
 QUERY([Docs];[Docs]Comments%"Extra") // search on an indexed field
  //... run several other queries or sorts on the same table
  // when finished, set back to normal cache priority
 ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority normal)
```

#### See also 

[Get adjusted index cache priority](get-adjusted-index-cache-priority.md)  
[SET INDEX CACHE PRIORITY](set-index-cache-priority.md)  