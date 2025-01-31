---
id: start-sql-server
title: START SQL SERVER
slug: /commands/start-sql-server
displayed_sidebar: docs
---

<!--REF #_command_.START SQL SERVER.Syntax-->**START SQL SERVER**<!-- END REF-->
<!--REF #_command_.START SQL SERVER.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.START SQL SERVER.Summary-->The START SQL SERVER command launches the integrated SQL server in the 4D application where it has been executed.<!-- END REF--> Once launched, the SQL server can respond to external SQL queries.

**Note:** This command does not affect the internal functioning of the 4D SQL kernel. The SQL kernal is always available for internal queries.

#### System variables and sets 

If the SQL server has been launched correctly, the OK system variable is set to 1\. Otherwise, it is set to 0.

#### See also 

[STOP SQL SERVER](stop-sql-server.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 962 |
| Thread safe | &cross; |
| Modifies variables | OK |


