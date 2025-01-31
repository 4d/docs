---
id: create-set
title: CREATE SET
slug: /commands/create-set
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SET.Syntax-->**CREATE SET** ( {*aTable* ;} *set* )<!-- END REF-->
<!--REF #_command_.CREATE SET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to create a set from the selection, or Default table, if omitted |
| set | Text | &#8594;  | Name of the new set |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE SET.Summary-->**CREATE SET** creates a new set, *set*, for *aTable*, and places the current selection in *set*.<!-- END REF--> The current record pointer for the table is saved with *set*. If *set* is used with [USE SET](use-set.md), the current selection and current record are restored. As with all sets, there is no sorted order; when *set* is used, the default order is used. If a set with the same name already exists, the existing set is cleared by the new set.

#### Example 

The following example creates a set after doing a search, in order to save the set to disk:

```4d
 QUERY([People]) // Let the user do a search
 CREATE SET([People];"SearchSet") // Create a new set
 SAVE SET("SearchSet";"MySearch") // Save the set on disk
```

#### See also 

[CLEAR SET](clear-set.md)  
[CREATE EMPTY SET](create-empty-set.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 116 |
| Thread safe | &check; |


