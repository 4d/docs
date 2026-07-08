---
id: remove-from-set
title: REMOVE FROM SET
slug: /commands/remove-from-set
displayed_sidebar: docs
---

<!--REF #_command_.REMOVE FROM SET.Syntax-->**REMOVE FROM SET** ( {*aTable* : Table ;} *set* : Text )<!-- END REF-->
<!--REF #_command_.REMOVE FROM SET.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Current record's table, or Default table, if omitted |
| set | Text | &#8594;  | Name of the set from which to remove the current record |
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

<!--REF #_command_.REMOVE FROM SET.Summary-->REMOVE FROM SET removes the current record of *aTable* from *set*.<!-- END REF--> The set must already exist; if it does not, an error occurs. If a current record does not exist for *aTable*, the command has no effect.

## See also 

[ADD TO SET](../commands/add-to-set)  

## Properties

|  |  |
| --- | --- |
| Command number | 561 |
| Thread safe | yes |
| Modifies variables | error |


