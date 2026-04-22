---
id: start-transaction
title: START TRANSACTION
slug: /commands/start-transaction
displayed_sidebar: docs
---

<!--REF #_command_.START TRANSACTION.Syntax-->**START TRANSACTION**<!-- END REF-->
<!--REF #_command_.START TRANSACTION.Params-->
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

<!--REF #_command_.START TRANSACTION.Summary-->START TRANSACTION starts a [transaction](../../Develop-legacy/transactions.md) in the current process.<!-- END REF--> All changes to the data (records) of the database within the transaction are stored temporarily until the transaction is accepted (validated) or canceled.

You can nest several transactions (sub-transactions). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all the sub-transactions are cancelled as well, regardless of their result.

## See also 

[CANCEL TRANSACTION](../commands/cancel-transaction)  
[In transaction](../commands/in-transaction)  
[Transaction level](../commands/transaction-level)  
[Transactions](../../Develop-legacy/transactions.md)
[VALIDATE TRANSACTION](../commands/validate-transaction)  

## Properties

|  |  |
| --- | --- |
| Command number | 239 |
| Thread safe | yes |


