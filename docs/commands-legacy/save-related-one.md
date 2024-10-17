---
id: save-related-one
title: SAVE RELATED ONE
slug: /commands/save-related-one
displayed_sidebar: docs
---

<!--REF #_command_.SAVE RELATED ONE.Syntax-->**SAVE RELATED ONE** ( *aField* )<!-- END REF-->
<!--REF #_command_.SAVE RELATED ONE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Many field |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAVE RELATED ONE.Summary-->**SAVE RELATED ONE** saves the record related to *aField*.<!-- END REF--> Execute this command to update a record created with [CREATE RELATED ONE](create-related-one.md), or to save modifications to a record loaded with [RELATE ONE](relate-one.md).

**SAVE RELATED ONE** will not save a locked record. When using this command, you must first be sure that the record is unlocked. If the record is locked, the command is ignored, the record is not saved, and no error is returned.

#### See also 

[CREATE RELATED ONE](create-related-one.md)  
[Locked](locked.md)  
[RELATE ONE](relate-one.md)  
*Triggers*  