---
id: resume-transaction
title: RESUME TRANSACTION
slug: /commands/resume-transaction
displayed_sidebar: docs
---

<!--REF #_command_.RESUME TRANSACTION.Syntax-->**RESUME TRANSACTION**<!-- END REF-->
<!--REF #_command_.RESUME TRANSACTION.Params-->
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

<!--REF #_command_.RESUME TRANSACTION.Summary-->The **RESUME TRANSACTION** command resumes the transaction that was paused using [SUSPEND TRANSACTION](../commands/suspend-transaction) at the corresponding level in the current process.<!-- END REF--> Any operations that are executed after this command are carried out under transaction control (except when several suspended transactions are nested). 

For more information, please refer to the [Suspending transactions](../../Develop-legacy/transactions.md#suspending-transactions) section. 

## See also 

[Active transaction](../commands/active-transaction)  
[SUSPEND TRANSACTION](../commands/suspend-transaction)  
[Suspending transactions](../../Develop-legacy/transactions.md#suspending-transactions)

## Properties

|  |  |
| --- | --- |
| Command number | 1386 |
| Thread safe | yes |


