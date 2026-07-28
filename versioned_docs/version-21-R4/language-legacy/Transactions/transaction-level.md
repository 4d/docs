---
id: transaction-level
title: Transaction level
slug: /commands/transaction-level
displayed_sidebar: docs
---

<!--REF #_command_.Transaction level.Syntax-->**Transaction level**  : Integer<!-- END REF-->
<!--REF #_command_.Transaction level.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Current transaction level (0 if no transaction has been started) |
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

<!--REF #_command_.Transaction level.Summary-->The Transaction level command returns the current transaction level for the process.<!-- END REF--> This command takes all the transactions of the current process into account, regardless of whether they were started via the 4D language or via SQL.

## See also 

[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
[Transactions](../../Develop-legacy/transactions.md)

## Properties

|  |  |
| --- | --- |
| Command number | 961 |
| Thread safe | yes |


