---
id: remove-from-set
title: REMOVE FROM SET
slug: /commands/remove-from-set
displayed_sidebar: docs
---

<!--REF #_command_.REMOVE FROM SET.Syntax-->**REMOVE FROM SET** ( {*aTable* ;} *set* )<!-- END REF-->
<!--REF #_command_.REMOVE FROM SET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Current record's table, or Default table, if omitted |
| set | Text | &#8594;  | Name of the set from which to remove the current record |

<!-- END REF-->

#### Description 

<!--REF #_command_.REMOVE FROM SET.Summary-->REMOVE FROM SET removes the current record of *aTable* from *set*.<!-- END REF--> The set must already exist; if it does not, an error occurs. If a current record does not exist for *aTable*, the command has no effect.

#### See also 

[ADD TO SET](add-to-set.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 561 |
| Thread safe | &check; |
| Modifies variables | error |


