---
id: sql-get-current-data-source
title: SQL Get current data source
slug: /commands/sql-get-current-data-source
displayed_sidebar: docs
---

<!--REF #_command_.SQL Get current data source.Syntax-->**SQL Get current data source**  : Text<!-- END REF-->
<!--REF #_command_.SQL Get current data source.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Name of current data source being used |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R5|Renamed|
|11 SQL|Created|

</details>
</div>

## Description 

<!--REF #_command_.SQL Get current data source.Summary-->The SQL Get current data source command returns the name of the current data source of the application.<!-- END REF--> The current data source receives the SQL queries executed within **Begin SQL/End SQL** structures.

When the current data source is the local 4D database, the command returns the string “;DB4D\_SQL\_LOCAL;”, which corresponds to the value of the SQL\_INTERNAL constant ("*SQL*" theme).

This command lets you check the current data source, generally before executing an SQL query.

## See also 

[Begin SQL](../commands/begin-sql)  
[End SQL](../commands/end-sql)  
[SQL GET DATA SOURCE LIST](../commands/sql-get-data-source-list)  
[SQL LOGIN](../commands/sql-login)  
[SQL LOGOUT](../commands/sql-logout)  

## Properties

|  |  |
| --- | --- |
| Command number | 990 |
| Thread safe | no |


