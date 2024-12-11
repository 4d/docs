---
id: clear-set
title: CLEAR SET
slug: /commands/clear-set
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR SET.Syntax-->**CLEAR SET** ( *set* )<!-- END REF-->
<!--REF #_command_.CLEAR SET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| set | Text | &#8594;  | Name of the set to clear from memory |

<!-- END REF-->

#### Description 

<!--REF #_command_.CLEAR SET.Summary-->**CLEAR SET** clears *set* from memory and frees the memory used by *set*.<!-- END REF--> The command does not affect tables, selections, or records. To save a set before clearing it, use the [SAVE SET](save-set.md) command. Since sets use memory, it is good practice to clear them when they are no longer needed.

#### Example 

See the example for [USE SET](use-set.md).

#### See also 

[CREATE EMPTY SET](create-empty-set.md)  
[CREATE SET](create-set.md)  
[LOAD SET](load-set.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 117 |
| Thread safe | &check; |
| Forbidden on the server ||


