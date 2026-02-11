---
id: copy-list
title: Copy list
slug: /commands/copy-list
displayed_sidebar: docs
---

<!--REF #_command_.Copy list.Syntax-->**Copy list** ( *list* ) : Integer<!-- END REF-->
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

After you have finished with the new list, call [CLEAR LIST](clear-list.md) to delete it.

## See also 

[CLEAR LIST](clear-list.md)  
[Load list](load-list.md)  
[New list](new-list.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 626 |
| Thread safe | no |


