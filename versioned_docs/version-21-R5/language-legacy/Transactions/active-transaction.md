---
id: active-transaction
title: Active transaction
slug: /commands/active-transaction
displayed_sidebar: docs
---

<!--REF #_command_.Active transaction.Syntax-->**Active transaction** : Boolean<!-- END REF-->
<!--REF #_command_.Active transaction.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | Returns False if the current transaction is suspended |
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

<!--REF #_command_.Active transaction.Summary-->The **Active transaction** command returns **True** if the current process is in transaction, and this transaction is not suspended.<!-- END REF--> It returns **False** if there is no current transaction, or if the current transaction is suspended. A transaction can be suspended using the [SUSPEND TRANSACTION](../commands/suspend-transaction) command. 

Since the command will also return **False** if the current process is not in transaction, you may need to check using the [In transaction](../commands/in-transaction) command to know whether the process is in transaction. 

For more information, please refer to the [Suspending transactions](../../Develop-legacy/transactions.md#suspending-transactions) section. 

## Description 

You want to know the current transaction status:

```4d
 If(In transaction)
    If(Not(Active transaction))
       ALERT("The current transaction is suspended")
    Else
       ALERT("The current transaction is active")
    End if
 Else
    ALERT("We are not in transaction")
 End if
```

## See also 

[In transaction](../commands/in-transaction)  
[RESUME TRANSACTION](../commands/resume-transaction)  
[SUSPEND TRANSACTION](../commands/suspend-transaction)  
[Suspending transactions](../../Develop-legacy/transactions.md#suspending-transactions)

## Properties

|  |  |
| --- | --- |
| Command number | 1387 |
| Thread safe | yes |


