---
id: save-list
title: SAVE LIST
slug: /commands/save-list
displayed_sidebar: docs
---

<!--REF #_command_.SAVE LIST.Syntax-->**SAVE LIST** ( *list* : Integer ; *listName* : Text )<!-- END REF-->
<!--REF #_command_.SAVE LIST.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | List reference number |
| listName | Text | &#8594;  | Name of the list as it will appear in the Design environment List Editor |
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

<!--REF #_command_.SAVE LIST.Summary-->The SAVE LIST command saves the list whose reference number you pass in *list*, within the Design environment List Editor, under the name you pass in *listName*.<!-- END REF-->

If there is already a list with this name, its contents are replaced.

**Note:** This command cannot be used in a structure loaded in **read only**, such as a .4dz project (which includes [remote projects](../../Desktop/clientServer.md)) or a component.

## See also 

[Load list](../commands/load-list)  

## Properties

|  |  |
| --- | --- |
| Command number | 384 |
| Thread safe | no |


