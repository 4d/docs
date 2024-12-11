---
id: validate-transaction
title: VALIDATE TRANSACTION
slug: /commands/validate-transaction
displayed_sidebar: docs
---

<!--REF #_command_.VALIDATE TRANSACTION.Syntax-->**VALIDATE TRANSACTION**<!-- END REF-->
<!--REF #_command_.VALIDATE TRANSACTION.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.VALIDATE TRANSACTION.Summary-->VALIDATE TRANSACTION aceita a transação que foi iniciada com [START TRANSACTION](start-transaction.md) do nível correspondente do processo atual.<!-- END REF--> O comando salva as mudanças aos dados do banco que ocorreram durante a transação.

Iniciando com a versão 11 de 4D, você pode aninhar diversas transações (sub-transações). Se a transação principal for cancelada, todas as sub-transações serão canceladas, mesmo se eles tiverem sido individualmente confirmadas usando o comando.

#### Variáveis e conjuntos do sistema 

A variável de sistema Ok é estabelecida como 1 se a transação for validada corretamente. De outro modo, é estabelecida como 0.  
  
Note que quando OK for estabelecido como 0, a transação é automaticamente cancelada internamente (equivalente a [CANCEL TRANSACTION](cancel-transaction.md)). Assim, não deve chamar explicitamente [CANCEL TRANSACTION](cancel-transaction.md) se OK=0, particularmente no contexto de transações aninhadas, porque o cancelamento será então aplicada as transações de nível mais alto.

#### Ver também 

[CANCEL TRANSACTION](cancel-transaction.md)  
[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
*Usar Transações*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 240 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


