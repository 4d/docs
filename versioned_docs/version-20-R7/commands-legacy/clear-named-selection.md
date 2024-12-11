---
id: clear-named-selection
title: CLEAR NAMED SELECTION
slug: /commands/clear-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR NAMED SELECTION.Syntax-->**CLEAR NAMED SELECTION** ( *name* )<!-- END REF-->
<!--REF #_command_.CLEAR NAMED SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| name | Text | &#8594;  | Name of named selection to be cleared |

<!-- END REF-->

#### Description 

<!--REF #_command_.CLEAR NAMED SELECTION.Summary-->**CLEAR NAMED SELECTION** clears *name* from memory and frees the memory used by *name*.<!-- END REF--> The command does not affect tables, selections, or records. Since named selections use memory, it is good practice to clear named selections when they are no longer needed.

If *name* was created using the [CUT NAMED SELECTION](cut-named-selection.md) command and then manipulated using the [USE NAMED SELECTION](use-named-selection.md) command, *name* no longer exists in memory. In this case, the **CLEAR NAMED SELECTION** command does not need to be used.

#### See also 

[COPY NAMED SELECTION](copy-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 333 |
| Thread safe | &check; |
| Forbidden on the server ||


