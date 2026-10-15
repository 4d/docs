---
id: set-index-cache-priority
title: SET INDEX CACHE PRIORITY
slug: /commands/set-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET INDEX CACHE PRIORITY.Syntax-->**SET INDEX CACHE PRIORITY** ( *aField* : Field ; *priority* : Integer )<!-- END REF-->
<!--REF #_command_.SET INDEX CACHE PRIORITY.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Field whose index(es) priority value has to be set for the session |
| priority | Integer | &#8594;  | Cache priority value for the field index(es) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16 R2|Created|

</details>
</div>

## Expert mode 

<!--REF #_command_.SET INDEX CACHE PRIORITY.Summary-->This command is reserved for specific needs.<!-- END REF--> It must be used with care since it can affect database performance.

## Description 

The **SET INDEX CACHE PRIORITY** command sets a specific *priority* to the index(es) related to the *aField* in cache for all processes in the current session. This command should be called in the **On Startup** or **On Server Startup** database method. 

**Note:** This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode. 

 This command handles priority for all indexes related to the *aField*, including keyword indexes (composite indexes priority cannot be customized).

In the *priority* parameter, pass one of the following constants from the "*Cache Management*" theme:

| Constant                 | Comment                                      |
| ------------------------ | -------------------------------------------- |
| Cache priority low       |                                              |
| Cache priority very low  |                                              |
| Cache priority normal    | Sets the cache priority to its default value |
| Cache priority high      |                                              |
| Cache priority very high |                                              |

## Example 

In the , you want to set a high priority for the \[Customer\]LastName field indexes:

```4d
 SET INDEX CACHE PRIORITY([Customer]LastName;Cache priority very high)
```

## See also 

[ADJUST INDEX CACHE PRIORITY](../commands/adjust-index-cache-priority)  
[Get adjusted index cache priority](../commands/get-adjusted-index-cache-priority)  

## Properties

|  |  |
| --- | --- |
| Command number | 1401 |
| Thread safe | yes |


