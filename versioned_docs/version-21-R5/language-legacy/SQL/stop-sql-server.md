---
id: stop-sql-server
title: STOP SQL SERVER
slug: /commands/stop-sql-server
displayed_sidebar: docs
---

<!--REF #_command_.STOP SQL SERVER.Syntax-->**STOP SQL SERVER**<!-- END REF-->
<!--REF #_command_.STOP SQL SERVER.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Created|

</details>
</div>

## Description 

<!--REF #_command_.STOP SQL SERVER.Summary-->The STOP SQL SERVER command stops the integrated SQL server in the 4D application where it has been executed.<!-- END REF-->

If the SQL server was launched, all the SQL connections are interrupted and the server no longer accepts any external SQL queries. If the SQL server was not launched, the command does nothing.

**Note:** This command does not affect the internal functioning of the 4D SQL kernel. The SQL kernel is always available for internal queries.

## See also 

[START SQL SERVER](../commands/start-sql-server)  

## Properties

|  |  |
| --- | --- |
| Command number | 963 |
| Thread safe | no |


