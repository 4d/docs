---
id: validate-transaction
title: VALIDATE TRANSACTION
slug: /commands/validate-transaction
displayed_sidebar: docs
---

<!--REF #_command_.VALIDATE TRANSACTION.Syntax-->**VALIDATE TRANSACTION**<!-- END REF-->
<!--REF #_command_.VALIDATE TRANSACTION.Params-->
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

<!--REF #_command_.VALIDATE TRANSACTION.Summary-->**VALIDATE TRANSACTION** accepts the [transaction](../../Develop-legacy/transactions.md) that was started with [START TRANSACTION](../commands/start-transaction) of the corresponding level in the current process.<!-- END REF--> The command saves the changes to the data of the database that occurred during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all the sub-transactions are cancelled, even if they have been validated individually using this command.

## System variables and sets 

The system variable OK is set to 1 if the transaction has been validated correctly; otherwise, it is set to 0.

Note that when OK is set to 0, the transaction is automatically cancelled internally (equivalent to [CANCEL TRANSACTION](../commands/cancel-transaction)). Consequently, you must not explicitly call [CANCEL TRANSACTION](../commands/cancel-transaction) if OK=0, particularly in the context of nested transactions, because the cancellation will then be applied to the higher level transaction. 

## See also 

[CANCEL TRANSACTION](../commands/cancel-transaction)  
[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
[Transactions](../../Develop-legacy/transactions.md)

## Properties

|  |  |
| --- | --- |
| Command number | 240 |
| Thread safe | yes |
| Modifies variables | OK |


