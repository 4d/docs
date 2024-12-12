---
id: active-transaction
title: Active transaction
slug: /commands/active-transaction
displayed_sidebar: docs
---

<!--REF #_command_.Active transaction.Syntax-->**Active transaction** : Boolean<!-- END REF-->
<!--REF #_command_.Active transaction.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Retorna False se a transação atual for suspensa |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Active transaction.Summary-->O comando **Active transaction** devolve **True** se o processo atual estiver em transação e se esta transação não for suspensa.<!-- END REF--> Devolve **False** se não houver uma transação em curso, ou se for suspensa a transação atual. Uma transação pode ser suspensa utilizando o comando *SUSPEND TRANSACTION*. 

Dado que o comando também devolverá **False** se o processo atual não estiver em transação, pode ser que necessite utilizar o comando [In transaction](in-transaction.md) para saber se o processo está em transação.

Para saber mais, consulte o parágrafo . 

#### Descrição 

Se quiser conhecer o estado da transação atual:

```4d
 If(In transaction)
    If(Not(Active transaction))
       ALERT("A transação atual está suspensa")
    Else
       ALERT("A transação atual está ativa")
    End if
 Else
    ALERT("Não estamos em transação")
 End if
```

#### Ver também 

[In transaction](in-transaction.md)  
[RESUME TRANSACTION](resume-transaction.md)  
[SUSPEND TRANSACTION](suspend-transaction.md)  
*Suspender as transações*  