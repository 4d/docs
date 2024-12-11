---
id: read-only
title: READ ONLY
slug: /commands/read-only
displayed_sidebar: docs
---

<!--REF #_command_.READ ONLY.Syntax-->**READ ONLY** {( aTable | * )}<!-- END REF-->
<!--REF #_command_.READ ONLY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable &#124; * | Table, Operator | &#8594;  | Table for which to set read-only state, or * for all the tables, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.READ ONLY.Summary-->READ ONLY changes the state of *aTable* to read-only for the process in which it is called.<!-- END REF--> All subsequent records that are loaded are locked, and you cannot make any changes made to them. If the optional \* parameter is specified, all tables are changed to read-only state.

Use READ ONLY when you do not need to modify the record or records.

**Note:** This command is not retroactive. A record is loaded according to the table’s read/write status at the time of loading. To load a record from a read/write table in read-only mode, you must first change the table state to read-only.

#### See also 

[Read only state](read-only-state.md)  
[READ WRITE](read-write.md)  
*Record Locking*  

#### Properties
|  |  |
| --- | --- |
| Command number | 145 |
| Thread safe | &check; |
| Forbidden on the server ||


