---
id: transaction-level
title: Transaction level
slug: /commands/transaction-level
displayed_sidebar: docs
---

<!--REF #_command_.Transaction level.Syntax-->**Transaction level**  : Integer<!-- END REF-->
<!--REF #_command_.Transaction level.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Nível transação atual (0 se nenhuma transação for iniciada) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Transaction level.Summary-->O comando Transaction level retorna o nível de transação atual para o processo.<!-- END REF--> Este comando considera todas as transações do processo atual, sem importar se foram iniciadas através da linguagem 4D ou através de SQL.

#### Ver também 

[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
*Usar Transações*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 961 |
| Thread-seguro | &check; |
| Proibido no servidor ||


