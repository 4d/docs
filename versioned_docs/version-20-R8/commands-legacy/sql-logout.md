---
id: sql-logout
title: SQL LOGOUT
slug: /commands/sql-logout
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOGOUT.Syntax-->**SQL LOGOUT**<!-- END REF-->
<!--REF #_command_.SQL LOGOUT.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL LOGOUT.Summary-->The SQL LOGOUT command closes the connection with an ODBC source that is open in the current process (if applicable).<!-- END REF--> If there is no ODBC connection open, the command does nothing. 

#### System variables and sets 

If the logout is performed properly, the system variable OK is set to 1; otherwise, it is set to 0\. You can intercept this error with an error-handling method installed by the [ON ERR CALL](on-err-call.md) command.

#### See also 

[SQL LOGIN](sql-login.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 872 |
| Thread safe | &cross; |
| Modifies variables | OK, error |


