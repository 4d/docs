---
id: old-related-many
title: OLD RELATED MANY
slug: /commands/old-related-many
displayed_sidebar: docs
---

<!--REF #_command_.OLD RELATED MANY.Syntax-->**OLD RELATED MANY** ( *aField* : Field )<!-- END REF-->
<!--REF #_command_.OLD RELATED MANY.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | One field |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.OLD RELATED MANY.Summary-->**OLD RELATED MANY** operates the same way [RELATE MANY](../commands/relate-many) does, except that **OLD RELATED MANY** uses the old value in the one field to establish the relation.<!-- END REF-->**OLD RELATED MANY** uses the old value of the many field as returned by the [Old](../commands/old) function. For more information, see the description of the [Old](../commands/old) command.

**OLD RELATED MANY** changes the selection of the related table, and selects the first record of the selection as the current record.

## See also 

[OLD RELATED ONE](../commands/old-related-one)  
[RELATE MANY](../commands/relate-many)  

## Properties

|  |  |
| --- | --- |
| Command number | 263 |
| Thread safe | yes |
| Changes current record ||
| Changes current selection ||


