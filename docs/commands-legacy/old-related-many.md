---
id: old-related-many
title: OLD RELATED MANY
slug: /commands/old-related-many
displayed_sidebar: docs
---

<!--REF #_command_.OLD RELATED MANY.Syntax-->**OLD RELATED MANY** ( *aField* )<!-- END REF-->
<!--REF #_command_.OLD RELATED MANY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | One field |

<!-- END REF-->

#### Description 

<!--REF #_command_.OLD RELATED MANY.Summary-->**OLD RELATED MANY** operates the same way [RELATE MANY](relate-many.md) does, except that **OLD RELATED MANY** uses the old value in the one field to establish the relation.<!-- END REF-->

**Note:** **OLD RELATED MANY** uses the old value of the many field as returned by the [Old](old.md) function. For more information, see the description of the [Old](old.md) command.

**OLD RELATED MANY** changes the selection of the related table, and selects the first record of the selection as the current record.

#### See also 

[OLD RELATED ONE](old-related-one.md)  
[RELATE MANY](relate-many.md)  