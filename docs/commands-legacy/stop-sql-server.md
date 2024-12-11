---
id: stop-sql-server
title: STOP SQL SERVER
slug: /commands/stop-sql-server
displayed_sidebar: docs
---

<!--REF #_command_.STOP SQL SERVER.Syntax-->**STOP SQL SERVER**<!-- END REF-->
<!--REF #_command_.STOP SQL SERVER.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.STOP SQL SERVER.Summary-->The STOP SQL SERVER command stops the integrated SQL server in the 4D application where it has been executed.<!-- END REF-->

If the SQL server was launched, all the SQL connections are interrupted and the server no longer accepts any external SQL queries. If the SQL server was not launched, the command does nothing.

**Note:** This command does not affect the internal functioning of the 4D SQL kernel. The SQL kernel is always available for internal queries.

#### See also 

[START SQL SERVER](start-sql-server.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 963 |
| Thread safe | &check; |
| Forbidden on the server ||


