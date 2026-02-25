---
id: save-related-one
title: SAVE RELATED ONE
slug: /commands/save-related-one
displayed_sidebar: docs
---

<!--REF #_command_.SAVE RELATED ONE.Syntax-->**SAVE RELATED ONE** ( *aField* : Field )<!-- END REF-->
<!--REF #_command_.SAVE RELATED ONE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Many field |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.SAVE RELATED ONE.Summary-->**SAVE RELATED ONE** saves the record related to *aField*.<!-- END REF--> Execute this command to update a record created with [CREATE RELATED ONE](../commands/create-related-one), or to save modifications to a record loaded with [RELATE ONE](../commands/relate-one).

**SAVE RELATED ONE** will not save a locked record. When using this command, you must first be sure that the record is unlocked. If the record is locked, the command is ignored, the record is not saved, and no error is returned.

## See also 

[CREATE RELATED ONE](../commands/create-related-one)  
[Locked](../commands/locked)  
[RELATE ONE](../commands/relate-one)  
*Triggers*  

## Properties

|  |  |
| --- | --- |
| Command number | 43 |
| Thread safe | yes |


