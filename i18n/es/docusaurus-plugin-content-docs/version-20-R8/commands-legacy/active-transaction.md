---
id: active-transaction
title: Active transaction
slug: /commands/active-transaction
displayed_sidebar: docs
---

<!--REF #_command_.Active transaction.Syntax-->**Active transaction** : Boolean<!-- END REF-->
<!--REF #_command_.Active transaction.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devuelve False si se suspende la transacción actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Active transaction.Summary-->El comando **Active transaction** devuelve **True** si el proceso actual está en transacción y si esta transacción no se suspende.<!-- END REF--> Devuelve **False** si no hay una transacción en curso, o si se suspende la transacción actual. Una transacción puede ser suspendida utilizando el comando *SUSPEND TRANSACTION*. 

Dado que el comando también devolverá **False** si el proceso actual no está en transacción, puede que necesite utilizar el comando [In transaction](in-transaction.md) para saber si el proceso está en transacción.

Para más información, consulte el párrafo . 

#### Descripción 

Usted quiere conocer el estado de la transacción actual:

```4d
 If(In transaction)
    If(Not(Active transaction))
       ALERT("La transacción actual está suspendida")
    Else
       ALERT("La transacción actual está activa")
    End if
 Else
    ALERT("No estamos en transacción")
 End if
```

#### Ver también 

[In transaction](in-transaction.md)  
[RESUME TRANSACTION](resume-transaction.md)  
[SUSPEND TRANSACTION](suspend-transaction.md)  
*Suspender las transacciones*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1387 |
| Hilo seguro | &check; |


