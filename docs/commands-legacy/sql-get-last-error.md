---
id: sql-get-last-error
title: SQL GET LAST ERROR
slug: /commands/sql-get-last-error
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET LAST ERROR.Syntax-->**SQL GET LAST ERROR** ( *errCode* ; *errText* ; *errODBC* ; *errSQLServer* )<!-- END REF-->
<!--REF #_command_.SQL GET LAST ERROR.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| errCode | Longint | &#x1F858; | Error code |
| errText | Text | &#x1F858; | Error text |
| errODBC | Text | &#x1F858; | ODBC error code |
| errSQLServer | Longint | &#x1F858; | SQL server native error code |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL GET LAST ERROR.Summary-->The SQL GET LAST ERROR command returns information related to the last error encountered during the execution of an ODBC command.<!-- END REF--> The error may come from the 4D application, the network, the ODBC source, etc. 

This command must generally be called in the context of an error-handling method installed using the [ON ERR CALL](on-err-call.md) command.

* The *errCode* parameter returns the error code.
* The *errText* parameter returns the error text.

The last two parameters are only filled when the error comes from the ODBC source; otherwise, they are returned empty. 

* The *errODBC* parameter returns the ODBC error code (SQL state).
* The *errSQLServer* parameter returns the SQL server native error code.

#### See also 

[GET LAST ERROR STACK](get-last-error-stack.md)  
[ON ERR CALL](on-err-call.md)  