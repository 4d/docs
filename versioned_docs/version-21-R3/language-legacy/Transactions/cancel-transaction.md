---
id: cancel-transaction
title: CANCEL TRANSACTION
slug: /commands/cancel-transaction
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL TRANSACTION.Syntax-->**CANCEL TRANSACTION**<!-- END REF-->
<!--REF #_command_.CANCEL TRANSACTION.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.CANCEL TRANSACTION.Summary-->**CANCEL TRANSACTION** cancels the [transaction](../../Develop-legacy/transactions.md) that was started with [START TRANSACTION](../commands/start-transaction) of the corresponding level in the current process.<!-- END REF-->cancels the operations executed on the data and stored during the transaction.

**Note:** **CANCEL TRANSACTION** does not have an effect on any changes made in the current records that were not saved - they remain displayed after the command is executed.

## See also 

[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
[Transaction level](../commands/transaction-level)  
[Transactions](../../Develop-legacy/transactions.md)
[VALIDATE TRANSACTION](../commands/validate-transaction)  

## Properties

|  |  |
| --- | --- |
| Command number | 241 |
| Thread safe | yes |


