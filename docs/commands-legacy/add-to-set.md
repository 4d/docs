---
id: add-to-set
title: ADD TO SET
slug: /commands/add-to-set
displayed_sidebar: docs
---

<!--REF #_command_.ADD TO SET.Syntax-->**ADD TO SET** ( {*aTable* ;} *set* )<!-- END REF-->
<!--REF #_command_.ADD TO SET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Current record's table, or Default table, if omitted |
| set | Text | &#8594;  | Name of the set to which to add the current record |

<!-- END REF-->

#### Description 

<!--REF #_command_.ADD TO SET.Summary-->ADD TO SET adds the current record of *aTable* to *set*.<!-- END REF--> The set must already exist; if it does not, an error occurs. If a current record does not exist for *aTable*, ADD TO SET has no effect.

#### See also 

[REMOVE FROM SET](remove-from-set.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 119 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||


