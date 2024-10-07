---
id: create-empty-set
title: CREATE EMPTY SET
slug: /commands/create-empty-set
displayed_sidebar: docs
---

<!--REF #_command_.CREATE EMPTY SET.Syntax-->**CREATE EMPTY SET** ( {*aTable* ;} *set* )<!-- END REF-->
<!--REF #_command_.CREATE EMPTY SET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#x1F852; | Table for which to create an empty set, or Default table, if omitted |
| set | Text | &#x1F852; | Name of the new empty set |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE EMPTY SET.Summary-->**CREATE EMPTY SET** creates a new empty set, *set*, for *aTable*.<!-- END REF--> You can add records to this set with the [ADD TO SET](add-to-set.md) command. If a set with the same name already exists, the existing set is cleared by the new set.

**Note:** You do not need to use **CREATE EMPTY SET** before using [CREATE SET](create-set.md).

#### Example 

Please refer to the examples of the *Sets* section.

#### See also 

[CLEAR SET](clear-set.md)  
[CREATE SET](create-set.md)  