---
id: copy-list
title: Copy list
slug: /commands/copy-list
displayed_sidebar: docs
---

<!--REF #_command_.Copy list.Syntax-->**Copy list** ( *list* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.Copy list.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | Reference to list to be copied |
| Function result | Integer | &#8592; | List reference number to duplicated list |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6|Created|

</details>
</div>

## Description 

<!--REF #_command_.Copy list.Summary-->The **Copy list** command duplicates the list whose reference number you pass in *list,* and returns the list reference number of the new list.<!-- END REF-->

After you have finished with the new list, call [CLEAR LIST](../commands/clear-list) to delete it.

## See also 

[CLEAR LIST](../commands/clear-list)  
[Load list](../commands/load-list)  
[New list](../commands/new-list)  

## Properties

|  |  |
| --- | --- |
| Command number | 626 |
| Thread safe | no |


