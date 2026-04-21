---
id: suspend-transaction
title: SUSPEND TRANSACTION
slug: /commands/suspend-transaction
displayed_sidebar: docs
---

<!--REF #_command_.SUSPEND TRANSACTION.Syntax-->**SUSPEND TRANSACTION**<!-- END REF-->
<!--REF #_command_.SUSPEND TRANSACTION.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|15 R4|Created|

</details>
</div>

## Description 

<!--REF #_command_.SUSPEND TRANSACTION.Summary-->The **SUSPEND TRANSACTION** command pauses the current transaction in the current process.<!-- END REF--> You can then handle data in other parts of the database, for example, without it being included in the transaction, and while preserving the transaction context untouched. Any records that have been updated or added in the transaction are locked until the transaction is resumed using the [RESUME TRANSACTION](../commands/resume-transaction) command.

For more information, please refer to the [Suspending transactions](../../Develop-legacy/transactions.md#suspending-transactions) section. 

## See also 

[Active transaction](../commands/active-transaction)  
[RESUME TRANSACTION](../commands/resume-transaction)  
[Suspending transactions](../../Develop-legacy/transactions.md#suspending-transactions)

## Properties

|  |  |
| --- | --- |
| Command number | 1385 |
| Thread safe | yes |


