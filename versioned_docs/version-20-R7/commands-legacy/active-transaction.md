---
id: active-transaction
title: Active transaction
slug: /commands/active-transaction
displayed_sidebar: docs
---

<!--REF #_command_.Active transaction.Syntax-->**Active transaction** : Boolean<!-- END REF-->
<!--REF #_command_.Active transaction.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | Returns False if the current transaction is suspended |

<!-- END REF-->

#### Description 

<!--REF #_command_.Active transaction.Summary-->The **Active transaction** command returns **True** if the current process is in transaction, and this transaction is not suspended.<!-- END REF--> It returns **False** if there is no current transaction, or if the current transaction is suspended. A transaction can be suspended using the [SUSPEND TRANSACTION](suspend-transaction.md) command. 

Since the command will also return **False** if the current process is not in transaction, you may need to check using the [In transaction](in-transaction.md) command to know whether the process is in transaction. 

For more information, please refer to *Suspending transactions*. 

#### Description 

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

#### See also 

[In transaction](in-transaction.md)  
[RESUME TRANSACTION](resume-transaction.md)  
[SUSPEND TRANSACTION](suspend-transaction.md)  
*Suspending transactions*  

#### Properties
|  |  |
| --- | --- |
| Command number | 1387 |
| Thread safe | &check; |
| Forbidden on the server ||


