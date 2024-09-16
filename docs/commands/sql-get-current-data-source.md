---
id: sql-get-current-data-source
title: SQL Get current data source
displayed_sidebar: docs
---

<!--REF #_command_.SQL Get current data source.Syntax-->**SQL Get current data source**  -> Function result<!-- END REF-->
<!--REF #_command_.SQL Get current data source.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | String | <- | Name of current data source being used |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL Get current data source.Summary-->The SQL Get current data source command returns the name of the current data source of the application.<!-- END REF--> The current data source receives the SQL queries executed within **Begin SQL/End SQL** structures.

When the current data source is the local 4D database, the command returns the string “;DB4D\_SQL\_LOCAL;”, which corresponds to the value of the SQL\_INTERNAL constant ("[SQL](/4Dv20R6/4D/20-R6/SQL.302-6958478.en.html)" theme).

This command lets you check the current data source, generally before executing an SQL query.

#### See also 
[Begin SQL](begin-sql.md)  
[End SQL](end-sql.md)  
[SQL GET DATA SOURCE LIST](sql-get-data-source-list.md)  
[SQL LOGIN](sql-login.md)  
[SQL LOGOUT](sql-logout.md)  