---
id: create-related-one
title: CREATE RELATED ONE
slug: /commands/create-related-one
displayed_sidebar: docs
---

<!--REF #_command_.CREATE RELATED ONE.Syntax-->**CREATE RELATED ONE** ( *aField* )<!-- END REF-->
<!--REF #_command_.CREATE RELATED ONE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Many field |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE RELATED ONE.Summary-->**CREATE RELATED ONE** performs two actions.<!-- END REF--> If a related record does not exist for *aField* (that is, if a match is not found for the current value of *field*), **CREATE RELATED ONE** creates a new related record. 

To save a value in the appropriate field, assign values to the One field from the Many field. Call [SAVE RELATED ONE](save-related-one.md) to save the new record.

If a related record exists, **CREATE RELATED ONE** acts just like [RELATE ONE](relate-one.md) and loads the related record into memory.

#### See also 

[SAVE RELATED ONE](save-related-one.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 65 |
| Thread safe | &check; |
| Forbidden on the server ||


