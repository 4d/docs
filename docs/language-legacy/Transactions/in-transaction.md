---
id: in-transaction
title: In transaction
slug: /commands/in-transaction
displayed_sidebar: docs
---

<!--REF #_command_.In transaction.Syntax-->**In transaction**  : Boolean<!-- END REF-->
<!--REF #_command_.In transaction.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | Returns TRUE if current process is in transaction |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6|Created|

</details>
</div>

## Description 

<!--REF #_command_.In transaction.Summary-->The `In transaction` command returns **TRUE** if the current process is in a [transaction](../../Develop-legacy/transactions.md), otherwise it returns **FALSE**.<!-- END REF-->

## Example 

If you perform a multi-record operation (adding, modifying, or deleting records), you may encounter locked records. In this case, if you have to maintain data integrity, you must be in transaction so you can “roll-back” the whole operation and leave the database untouched.

If you perform the operation from within a trigger or from a subroutine (that can be called while in transaction or not), you can use In transaction to check whether or not the current process method or the caller method started a transaction. If a transaction was not started, you do not even start the operation, because you already know that you will not be able to roll it back if it fails. 

## See also 

[Active transaction](../commands/active-transaction)  
[CANCEL TRANSACTION](../commands/cancel-transaction)  
[START TRANSACTION](../commands/start-transaction)  
*Triggers*  
[VALIDATE TRANSACTION](../commands/validate-transaction)  

## Properties

|  |  |
| --- | --- |
| Command number | 397 |
| Thread safe | yes |


