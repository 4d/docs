---
id: sql-get-last-error
title: SQL GET LAST ERROR
slug: /commands/sql-get-last-error
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET LAST ERROR.Syntax-->**SQL GET LAST ERROR** ( *errCode* : Integer ; *errText* : Text ; *errODBC* : Text ; *errSQLServer* : Integer )<!-- END REF-->
<!--REF #_command_.SQL GET LAST ERROR.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| errCode | Integer | &#8592; | Error code |
| errText | Text | &#8592; | Error text |
| errODBC | Text | &#8592; | ODBC error code |
| errSQLServer | Integer | &#8592; | SQL server native error code |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.SQL GET LAST ERROR.Summary-->The SQL GET LAST ERROR command returns information related to the last error encountered during the execution of an ODBC command.<!-- END REF--> The error may come from the 4D application, the network, the ODBC source, etc. 

This command must generally be called in the context of an error-handling method installed using the [ON ERR CALL](../commands/on-err-call) command.

* The *errCode* parameter returns the error code.
* The *errText* parameter returns the error text.

The last two parameters are only filled when the error comes from the ODBC source; otherwise, they are returned empty. 

* The *errODBC* parameter returns the ODBC error code (SQL state).
* The *errSQLServer* parameter returns the SQL server native error code.

## See also 

[Last errors](../commands/last-errors)   
[ON ERR CALL](../commands/on-err-call)  

## Properties

|  |  |
| --- | --- |
| Command number | 825 |
| Thread safe | no |



